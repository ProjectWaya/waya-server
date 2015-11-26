module TranslationHelper
  attr_accessor :locale
  def description
    I18n.t("#{model_name.i18n_key}.#{self.key}.description", locale: locale)
  end

  def name
    I18n.t("#{model_name.i18n_key}.#{self.key}.name", locale: locale)
  end
end

