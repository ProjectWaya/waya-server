require 'rubygems'
require 'lingohub'
require 'lingohub/command'
require 'lingohub/commands/auth'

namespace :lingohub  do
  LINGOHUB_PROJECT_NAME = 'waya-content'

  desc "List all projects of lingohub account"
  task :list_projects do
    set_lingohub_credentials
    projects = Lingohub::Command.run('project:list', {})
    puts projects[LINGOHUB_PROJECT_NAME].project_locales
  end

  desc "Upload all translations to lingohub.com including source and target locales"
  task :push_all do
    Rake::Task['lingohub:push'].invoke(false)
  end

  desc "Upload source translations to lingohub.com"
  task :push, [:source_only] do |t, args|
    set_lingohub_credentials
    sync_source_only = args[:source_only] != false

    all_locales = sync_source_only ? ['en'] : project_locales

    all_locales.each do |locale|
      puts "uploading locale: #{locale}"

      files = file_paths_for_locale(locale)
      files.each do |file|
        args = ['--locale', locale, '--project', LINGOHUB_PROJECT_NAME,  file]
        Lingohub::Command.run('resource:up', args)
      end
    end

    puts "DONE"
  end

  desc "Fetch all translations from lingohub.com NOT including source locale"
  task :pull do
    set_lingohub_credentials

    project_locales.each do |locale|
      directory_path = locale_dir_path(locale)
      Dir.mkdir directory_path unless Dir.exists? directory_path
      puts "Downloading translations for locale: #{locale}"

      args = ['--locale', locale,
              '--directory', locale_dir_path(locale),
              '--project', LINGOHUB_PROJECT_NAME,
              '--all']

      Lingohub::Command.run('resource:down', args)
    end
    puts "DONE"
  end
end

def project_locales
  projects = Lingohub::Command.run('project:list', {})
  project  = projects[LINGOHUB_PROJECT_NAME]
  project.project_locales
end

def locale_dir_path(locale='en')
  "config/locales/#{(locale)}/"
end

def file_path_for_locale(file, locale)
  "#{locale_dir_path(locale)}#{file_name_for_locale(file, locale)}"
end

def file_name_for_locale(name, locale)
  "#{name}.#{locale}.yml"
end

def file_paths_for_locale(locale)
  Dir["#{locale_dir_path(locale)}*.yml"]
end

def set_lingohub_credentials
 auth = Lingohub::Command::Auth.new(nil,nil)
 auth.credentials = [ENV['user'], ENV['token']]
 auth.write_credentials
end
