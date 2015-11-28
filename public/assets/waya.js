"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('waya/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({
    namespace: Ember.computed({
      get: function get() {
        var locale = this.get('container').lookup('service:i18n').get('locale');
        return "/api/" + locale + "/v1";
      }
    })
  });

});
define('waya/adapters/country', ['exports', 'waya/adapters/application'], function (exports, ApplicationAdapter) {

  'use strict';

  exports['default'] = ApplicationAdapter['default'].extend({
    host: 'https://sleepy-fortress-7157.herokuapp.com'
  });

});
define('waya/adapters/point', ['exports', 'waya/adapters/application'], function (exports, ApplicationAdapter) {

  'use strict';

  exports['default'] = ApplicationAdapter['default'].extend({
    host: 'https://sleepy-fortress-7157.herokuapp.com',
    pathForType: function pathForType() {
      return 'points_of_interest';
    }
  });

});
define('waya/adapters/tag', ['exports', 'waya/adapters/application'], function (exports, ApplicationAdapter) {

  'use strict';

  exports['default'] = ApplicationAdapter['default'].extend({
    host: 'https://sleepy-fortress-7157.herokuapp.com'
  });

});
define('waya/adapters/user-status', ['exports', 'waya/adapters/application'], function (exports, ApplicationAdapter) {

  'use strict';

  exports['default'] = ApplicationAdapter['default'].extend({
    host: 'https://sleepy-fortress-7157.herokuapp.com',
    pathForType: function pathForType() {
      return 'user_statuses';
    }
  });

});
define('waya/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'waya/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('waya/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'waya/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('waya/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, basic_dropdown) {

	'use strict';



	exports['default'] = basic_dropdown['default'];

});
define('waya/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, ember_wormhole) {

	'use strict';



	exports['default'] = ember_wormhole['default'];

});
define('waya/components/jqui-accordion/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-accordion/component'], function (exports, Ember, jquiAccordion) {

	'use strict';

	exports['default'] = jquiAccordion['default'];

});
define('waya/components/jqui-autocomplete/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-autocomplete/component'], function (exports, Ember, jquiAutocomplete) {

	'use strict';

	exports['default'] = jquiAutocomplete['default'];

});
define('waya/components/jqui-button/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-button/component'], function (exports, Ember, jquiButton) {

	'use strict';

	exports['default'] = jquiButton['default'];

});
define('waya/components/jqui-datepicker/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-datepicker/component'], function (exports, Ember, jquiDatepicker) {

	'use strict';

	exports['default'] = jquiDatepicker['default'];

});
define('waya/components/jqui-menu/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-menu/component'], function (exports, Ember, jquiMenu) {

	'use strict';

	exports['default'] = jquiMenu['default'];

});
define('waya/components/jqui-progress-bar/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-progress-bar/component'], function (exports, Ember, jquiProgressBar) {

	'use strict';

	exports['default'] = jquiProgressBar['default'];

});
define('waya/components/jqui-slider/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-slider/component'], function (exports, Ember, jquiSlider) {

	'use strict';

	exports['default'] = jquiSlider['default'];

});
define('waya/components/jqui-spinner/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-spinner/component'], function (exports, Ember, jquiSpinner) {

	'use strict';

	exports['default'] = jquiSpinner['default'];

});
define('waya/components/jqui-tabs/component', ['exports', 'ember', 'ember-cli-jquery-ui/components/jqui-tabs/component'], function (exports, Ember, jquiTabs) {

	'use strict';

	exports['default'] = jquiTabs['default'];

});
define('waya/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, LabeledRadioButton) {

	'use strict';

	exports['default'] = LabeledRadioButton['default'];

});
define('waya/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, EmberLeafletComponent) {

	'use strict';

	exports['default'] = EmberLeafletComponent['default'];

});
define('waya/components/power-select/multiple/selected', ['exports', 'ember-power-select/components/power-select/multiple/selected'], function (exports, selected) {

	'use strict';



	exports['default'] = selected['default'];

});
define('waya/components/power-select/multiple', ['exports', 'ember-power-select/components/power-select/multiple'], function (exports, multiple) {

	'use strict';



	exports['default'] = multiple['default'];

});
define('waya/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, options) {

	'use strict';



	exports['default'] = options['default'];

});
define('waya/components/power-select/single/selected', ['exports', 'ember-power-select/components/power-select/single/selected'], function (exports, selected) {

	'use strict';



	exports['default'] = selected['default'];

});
define('waya/components/power-select/single', ['exports', 'ember-power-select/components/power-select/single'], function (exports, single) {

	'use strict';



	exports['default'] = single['default'];

});
define('waya/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, power_select) {

	'use strict';



	exports['default'] = power_select['default'];

});
define('waya/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, RadioButtonInput) {

	'use strict';

	exports['default'] = RadioButtonInput['default'];

});
define('waya/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, RadioButton) {

	'use strict';

	exports['default'] = RadioButton['default'];

});
define('waya/components/wy-map', ['exports', 'ember', 'ember-leaflet/components/leaflet-map', 'ember-leaflet/layers/marker-collection', 'ember-leaflet/layers/marker', 'waya/layers/open-street-map-layer'], function (exports, Ember, EmberLeafletComponent, MarkerCollectionLayer, MarkerLayer, OpenStreetMapLayer) {

  'use strict';

  var markerLayer = MarkerLayer['default'].extend({
    options: Ember['default'].computed({
      get: function get() {
        var isActive = this.get("controller.activePoint.id") == this.get('content.id');
        var icon = null;

        if (isActive) {
          this.set('isActive', true);
          icon = this.get('controller')._getHighlightIcon();
        } else {
          icon = this.get('controller')._getDefaultIcon();
        }

        return { icon: icon };
      }
    }),

    observeLayer: Ember['default'].observer('layer', function () {
      if (this.get('isActive')) {
        this.set('controller.activeMarker', this._layer);
      }
    }),

    click: function click(e) {
      this.get('controller').send('setActivePoint', this);
    }
  });

  var customIcon = L.Icon.extend({
    options: {
      iconSize: [30, 41],
      iconAnchor: [15, 41]
    }
  });

  var markerCollectionLayer = MarkerCollectionLayer['default'].extend({
    contentBinding: 'controller.points',
    itemLayerClass: markerLayer
  });

  exports['default'] = EmberLeafletComponent['default'].extend({
    activePoint: null,
    activeMarker: null,
    points: null,
    classNameBindings: ['isReady'],
    classNames: ['map'],
    isReady: Ember['default'].computed.bool('location'),
    // Default location
    location: {
      lat: 48.306940000000000000,
      lng: 14.285830000000032000
    },

    center: Ember['default'].computed('location', {
      get: function get() {
        var location = this.get('location');
        return L.latLng(location.lat, location.lng);
      }
    }),

    childLayers: Ember['default'].computed({
      get: function get() {
        return [OpenStreetMapLayer['default'], markerCollectionLayer];
      }
    }),

    didCreateLayer: function didCreateLayer() {
      this._super();
      L.control.locate().addTo(this._layer);
    },

    _getDefaultIcon: function _getDefaultIcon() {
      return new customIcon({
        iconUrl: 'assets/icons/location.svg'
      });
    },

    _getHighlightIcon: function _getHighlightIcon() {
      return new customIcon({
        iconUrl: 'assets/icons/location_orange.svg'
      });
    },

    actions: {
      setActivePoint: function setActivePoint(markerObject) {
        var newMarker = markerObject._layer;
        var oldActiveMarker = this.get('activeMarker');

        if (oldActiveMarker) {
          oldActiveMarker.setIcon(this._getDefaultIcon());
        }

        newMarker.setIcon(this._getHighlightIcon());

        this.set('activeMarker', newMarker);
        this.set('activePoint', markerObject.get('content.pointModel'));
      }
    }
  });

});
define('waya/components/wy-settings-box', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['settings-box'],

    currentCity: Ember['default'].computed.alias('userInfo.city'),
    currentCountry: Ember['default'].computed.alias('userInfo.country'),
    currentUserStatus: Ember['default'].computed.alias('userInfo.userStatus'),

    visible: Ember['default'].computed('currentCity', 'currentCountry', 'currentUserStatus', {
      get: function get() {
        return this.get('currentCity') && this.get('currentCountry') && this.get('currentUserStatus');
      }
    })
  });

});
define('waya/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var languages = [{ name: 'en', flag: 'gb' }, { name: 'fr', flag: 'fr' }, { name: 'es', flag: 'es' }, { name: 'de', flag: 'de' }, { name: 'tr', flag: 'tr' }, { name: 'ru', flag: 'ru' }, { name: 'zh', flag: 'cn' }];

  exports['default'] = Ember['default'].Controller.extend({
    languages: languages,
    selectedLanguage: Ember['default'].computed('i18n.locale', {
      get: function get() {
        return languages.findBy('name', this.get('i18n.locale'));
      }
    }),
    actions: {
      languageChanged: function languageChanged(lang) {
        this.set('selectedLanguage', lang);
        this.set('i18n.locale', lang.name);
        // TODO: uncomment before deploy to change URL when language changes
        // var pathWithoutLanguage = window.location.hash.substr(5)
        // window.location.hash = "#/" + lang.name + "/" + pathWithoutLanguage;
        // location.reload()
      }
    }
  });

});
define('waya/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('waya/controllers/home/index', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Controller.extend();

});
define('waya/controllers/home/onboarding', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    cities: Ember['default'].computed.alias('selectedCountry.cities'),
    selectedCountry: Ember['default'].computed.reads('countries.firstObject'),
    selectedCity: Ember['default'].computed.reads('cities.firstObject'),
    selectedUserStatus: Ember['default'].computed.reads('userStatus.firstObject'),
    isValidCountry: Ember['default'].computed.bool('selectedCountry'),
    isValidCity: Ember['default'].computed.bool('selectedCity'),
    isValidUserStatus: Ember['default'].computed.bool('selectedUserStatus'),
    isInfoValid: Ember['default'].computed.and('isValidCountry', 'isValidCity', 'isValidUserStatus'),
    isInfoInvalid: Ember['default'].computed.not('isInfoValid'),

    setSelectionsByCookie: Ember['default'].on('init', function () {
      var _this = this;

      if (Ember['default'].$.cookie('userInfo')) {
        var userInfo = JSON.parse(Ember['default'].$.cookie('userInfo'));
        var store = this.get('store');

        var selectedCountry = store.find('country', userInfo.country.id);
        var selectedCity = store.find('city', userInfo.city.id);
        var selectedUserStatus = store.find('user-status', userInfo.userStatus.id);

        Ember['default'].RSVP.hash({
          selectedCountry: selectedCountry,
          selectedCity: selectedCity,
          selectedUserStatus: selectedUserStatus
        }).then(function (response) {
          _this.set('selectedCountry', response.selectedCountry);
          _this.set('selectedCity', response.selectedCity);
          _this.set('selectedUserStatus', response.selectedUserStatus);
        });
      }
    }),

    actions: {
      onCountrySelected: function onCountrySelected(country) {
        this.set('selectedCountry', country);
        this.set('selectedCity', country.get('cities.firstObject'));
      },
      onCitySelected: function onCitySelected(city) {
        this.set('selectedCity', city);
        this.set('selectedCountry', city.get('country'));
      },
      onUserStatusSelected: function onUserStatusSelected(userStatus) {
        this.set('selectedUserStatus', userStatus);
      },
      setInfo: function setInfo() {
        var info = {
          country: this.get('selectedCountry').toJSON({ includeId: true }),
          city: this.get('selectedCity').toJSON({ includeId: true }),
          userStatus: this.get('selectedUserStatus').toJSON({ includeId: true })
        };

        var infoString = JSON.stringify(info);

        Ember['default'].$.cookie('userInfo', infoString, { expires: 7, path: '/' });
        this.send('updateUserInfo', info);

        this.transitionTo('home.overview.all');
      }
    }
  });

});
define('waya/controllers/home/overview/all', ['exports', 'waya/controllers/home/overview/category'], function (exports, CategoryController) {

	'use strict';

	exports['default'] = CategoryController['default'];

});
define('waya/controllers/home/overview/category/sub-category', ['exports', 'waya/controllers/home/overview/category'], function (exports, CategoryController) {

	'use strict';

	exports['default'] = CategoryController['default'];

});
define('waya/controllers/home/overview/category', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    activePoint: Ember['default'].computed.alias('pointModels.firstObject'),
    currentLocation: null,

    getCurrentPosition: Ember['default'].on('init', function () {
      navigator.geolocation.getCurrentPosition((function (pos) {
        var crd = pos.coords;

        this.set('currentLocation', {
          lat: crd.latitude,
          lng: crd.longitude
        });
      }).bind(this));
    }),

    points: Ember['default'].computed('pointModels.@each', {
      get: function get() {
        var points = this.get('pointModels');
        if (points != undefined) {
          return points.map(function (p) {
            return {
              id: p.get('id'),
              location: L.latLng(p.get('latitude'), p.get('longitude')),
              pointModel: p
            };
          });
        } else {
          return [];
        }
      }
    }),

    mainCategories: Ember['default'].computed.filterBy('tags', 'category', 'main_category')

  });

});
define('waya/controllers/home/overview', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    mainCategories: Ember['default'].computed.filterBy('tags', 'category', 'main_category')
  });

});
define('waya/controllers/index', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Controller.extend();

});
define('waya/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('waya/helpers/ember-power-select-option-classes', ['exports', 'ember-power-select/helpers/ember-power-select-option-classes'], function (exports, ember_power_select_option_classes) {

	'use strict';



	exports['default'] = ember_power_select_option_classes['default'];
	exports.emberPowerSelectOptionClasses = ember_power_select_option_classes.emberPowerSelectOptionClasses;

});
define('waya/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, pluralize) {

	'use strict';

	exports['default'] = pluralize['default'];

});
define('waya/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, singularize) {

	'use strict';

	exports['default'] = singularize['default'];

});
define('waya/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, helper) {

	'use strict';



	exports['default'] = helper['default'];

});
define('waya/helpers/world-flag', ['exports', 'ember-world-flags/helpers/world-flag'], function (exports, worldFlag) {

	'use strict';

	exports['default'] = worldFlag['default'];

});
define('waya/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'waya/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('waya/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'waya/config/environment', 'waya/mirage/config', 'ember-cli-mirage/server'], function (exports, readModules, ENV, config, Server) {

  'use strict';

  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }
      var environment = ENV['default'].environment;

      if (_shouldUseMirage(environment, ENV['default']['ember-cli-mirage'])) {
        var modules = readModules['default'](ENV['default'].modulePrefix);
        var options = _.assign(modules, { environment: environment, baseConfig: config['default'], testConfig: config.testConfig });

        new Server['default'](options);
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }

});
define('waya/initializers/ember-devtools', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    name: 'ember-devtools',
    after: typeof window.DS === 'object' ? 'ember-data' : null,
    initialize: function initialize(app) {}
  };

});
define('waya/initializers/ember-i18n', ['exports', 'waya/instance-initializers/ember-i18n'], function (exports, instanceInitializer) {

  'use strict';

  exports['default'] = {
    name: instanceInitializer['default'].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      instanceInitializer['default'].initialize(application);
    }
  };

});
define('waya/initializers/export-application-global', ['exports', 'ember', 'waya/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('waya/initializers/i18n', ['exports', 'ember-i18n-inject/initializers/i18n'], function (exports, i18n) {

	'use strict';



	exports['default'] = i18n['default'];
	exports.initialize = i18n.initialize;

});
define('waya/initializers/leaflet-initializer', ['exports', 'ember-leaflet/initializers/leaflet-initializer'], function (exports, EmberLeafletInitializer) {

	'use strict';

	exports['default'] = EmberLeafletInitializer['default'];

});
define('waya/initializers/user-status', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    name: 'user-status',

    initialize: function initialize(container, application) {
      var userInfoCookie = Ember.$.cookie('userInfo');

      if (userInfoCookie != null) {
        var userInfo = JSON.parse(userInfoCookie);

        container.register('userInfo:session', userInfo, { instantiate: false });
        container.injection('controller', 'userInfo', 'userInfo:session');
      }
    }
  };

});
define('waya/instance-initializers/ember-devtools', ['exports', 'waya/config/environment'], function (exports, config) {

  'use strict';

  exports['default'] = {
    initialize: function initialize(appInstance) {
      var service = 'service:ember-devtools';
      var devTools = appInstance.lookup ? appInstance.lookup(service)
      // backwards compatibility < 2.1
      : appInstance.container.lookup(service);
      var devToolsConfig = config['default']['ember-devtools'] || {};
      if (devToolsConfig.global === true) {
        devTools.globalize();
      } else if (devToolsConfig.global) {
        window[devToolsConfig.global] = devTools;
      }
    }
  };

});
define('waya/instance-initializers/ember-i18n', ['exports', 'ember', 'ember-i18n/stream', 'ember-i18n/legacy-helper', 'waya/config/environment'], function (exports, Ember, Stream, legacyHelper, ENV) {

  'use strict';

  exports['default'] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (legacyHelper['default'] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new Stream['default'](function () {
            return i18n.get('locale');
          });

          Ember['default'].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          Ember['default'].HTMLBars._registerHelper('t', legacyHelper['default']);
        })();
      }
    }
  };

});
define('waya/layers/open-street-map-layer', ['exports', 'ember-leaflet/layers/layer'], function (exports, EmberLeafletLayer) {

  'use strict';

  exports['default'] = EmberLeafletLayer['default'].extend({
    _newLayer: function _newLayer() {
      return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        updateWhenIdle: false
      });
    }
  });

});
define('waya/locales/de/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/de/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "Englisch",
    "fr": "Französisch",
    "es": "Spanisch",
    "de": "Deutsch",
    "tr": "Türkisch",
    "ru": "Russisch",
    "zh": "Chinesisch",
    "pages": {
      "index": {
        "headline": "Willkommen",
        "tagline": "Informationen und Hilfe für Flüchtlinge und Aslywerber",
        "buttons": {
          "start": "Starte"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "Über WAYA",
              "team": "Team",
              "participate": "Mitmachen",
              "values": "Werte",
              "contact": "Kontakt",
              "projects": "Unsere Projekte"
            },
            "social": {
              "headline": "Folge uns"
            },
            "partners": {
              "headline": "Partner"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Nutzungsbestimmungen"
            }
          }
        }
      }
    }
  };

});
define('waya/locales/en/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/en/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "de": "German",
    "tr": "Turkish",
    "ru": "Russian",
    "zh": "Chinese",
    "navigation": {
      "map": "Show map",
      "user_status_info": {
        "cta": "Click to change this settings",
        "info_for": "Information for",
        "city_preposition": "in"
      }
    },
    "pages": {
      "onboarding": {
        "headline": "Where are you?",
        "select_country_label": "Country",
        "select_city_label": "City"
      },
      "index": {
        "headline": "Welcome",
        "tagline": "Information and guidance for refugees and asylum seekers",
        "buttons": {
          "start": "Get Started"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "About WAYA",
              "team": "Team",
              "participate": "Participate",
              "values": "Values",
              "contact": "Contact",
              "projects": "Our Projects"
            },
            "social": {
              "headline": "Follow us"
            },
            "partners": {
              "headline": "Partners"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Terms of use"
            }
          }
        },
        "header": {
          "home": "Home"
        },
        "about_waya": {
          "name": "About Waya",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        },
        "projects": {
          "name": "Projects",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        },
        "values": {
          "name": "Values",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        },
        "team": {
          "name": "Team",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        },
        "participate": {
          "name": "Participate",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        },
        "contact": {
          "name": "Contact",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        },
        "terms": {
          "name": "Terms of use",
          "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n\nConsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.   \n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
        }
      }
    }
  };

});
define('waya/locales/es/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/es/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "de": "German",
    "tr": "Turkish",
    "ru": "Russian",
    "zh": "Chinese",
    "pages": {
      "index": {
        "headline": "Welcome",
        "tagline": "Information and guidance for refugees and asylum seekers",
        "buttons": {
          "start": "Get Started"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "About WAYA",
              "team": "Team",
              "participate": "Participate",
              "values": "Values",
              "contact": "Contact",
              "projects": "Our Projects"
            },
            "social": {
              "headline": "Follow us"
            },
            "partners": {
              "headline": "Partners"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Terms of use"
            }
          }
        }
      }
    }
  };

});
define('waya/locales/fr/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/fr/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "de": "German",
    "tr": "Turkish",
    "ru": "Russian",
    "zh": "Chinese",
    "pages": {
      "index": {
        "headline": "Welcome",
        "tagline": "Information and guidance for refugees and asylum seekers",
        "buttons": {
          "start": "Get Started"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "About WAYA",
              "team": "Team",
              "participate": "Participate",
              "values": "Values",
              "contact": "Contact",
              "projects": "Our Projects"
            },
            "social": {
              "headline": "Follow us"
            },
            "partners": {
              "headline": "Partners"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Terms of use"
            }
          }
        }
      }
    }
  };

});
define('waya/locales/ru/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/ru/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "de": "German",
    "tr": "Turkish",
    "ru": "Russian",
    "zh": "Chinese",
    "pages": {
      "index": {
        "headline": "Welcome",
        "tagline": "Information and guidance for refugees and asylum seekers",
        "buttons": {
          "start": "Get Started"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "About WAYA",
              "team": "Team",
              "participate": "Participate",
              "values": "Values",
              "contact": "Contact",
              "projects": "Our Projects"
            },
            "social": {
              "headline": "Follow us"
            },
            "partners": {
              "headline": "Partners"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Terms of use"
            }
          }
        }
      }
    }
  };

});
define('waya/locales/tr/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/tr/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "de": "German",
    "tr": "Turkish",
    "ru": "Russian",
    "zh": "Chinese",
    "pages": {
      "index": {
        "headline": "Welcome",
        "tagline": "Information and guidance for refugees and asylum seekers",
        "buttons": {
          "start": "Get Started"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "About WAYA",
              "team": "Team",
              "participate": "Participate",
              "values": "Values",
              "contact": "Contact",
              "projects": "Our Projects"
            },
            "social": {
              "headline": "Follow us"
            },
            "partners": {
              "headline": "Partners"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Terms of use"
            }
          }
        }
      }
    }
  };

});
define('waya/locales/zh/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('waya/locales/zh/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "de": "German",
    "tr": "Turkish",
    "ru": "Russian",
    "zh": "Chinese",
    "pages": {
      "index": {
        "headline": "Welcome",
        "tagline": "Information and guidance for refugees and asylum seekers",
        "buttons": {
          "start": "Get Started"
        },
        "footer": {
          "sections": {
            "navigation": {
              "about": "About WAYA",
              "team": "Team",
              "participate": "Participate",
              "values": "Values",
              "contact": "Contact",
              "projects": "Our Projects"
            },
            "social": {
              "headline": "Follow us"
            },
            "partners": {
              "headline": "Partners"
            },
            "bottom": {
              "admin": "Admin Login",
              "terms": "Terms of use"
            }
          }
        }
      }
    }
  };

});
define('waya/mirage/config', ['exports', 'waya/mirage/static-data/points/points', 'waya/mirage/static-data/user-status/user-status', 'waya/mirage/static-data/tags/tags'], function (exports, points, userStatus, tags) {

  'use strict';

  exports['default'] = function () {
    this.namespace = "/api/en/v1";

    this.get('/tags', function (db, request) {
      return tags['default'];
    });

    this.get('/points_of_interest', function (db, request) {
      return points['default'];
    });

    this.passthrough('https://sleepy-fortress-7157.herokuapp.com/**');
  }

});
define('waya/mirage/scenarios/default', ['exports'], function (exports) {

	'use strict';

	exports['default'] = function () {}

});
define('waya/mirage/static-data/countries/countries', ['exports'], function (exports) {

    'use strict';

    exports['default'] = {
        "data": [{
            "id": "uuid-1",
            "type": "country",
            "attributes": {
                "name": "France",
                "key": "country_fr"
            },
            "relationships": {
                "cities": {
                    "data": [{
                        "id": "1",
                        "type": "city"
                    }, {
                        "id": "2",
                        "type": "city"
                    }]
                }
            }
        }, {
            "id": "uuid-2",
            "type": "country",
            "attributes": {
                "name": "Austria",
                "key": "country_at"
            },
            "relationships": {
                "cities": {
                    "data": [{
                        "id": "3",
                        "type": "city"
                    }, {
                        "id": "4",
                        "type": "city"
                    }]
                }
            }
        }],
        "included": [{
            "type": "city",
            "id": "1",
            "attributes": {
                "name": "Paris",
                "key": "paris_key",
                "zip_code": "75001"
            }
        }, {
            "type": "city",
            "id": "2",
            "attributes": {
                "name": "Calais",
                "key": "calais_key",
                "zip_code": "62100"
            }
        }, {
            "type": "city",
            "id": "3",
            "attributes": {
                "name": "Linz",
                "key": "linz_key",
                "zip_code": "4040"
            }
        }, {
            "type": "city",
            "id": "4",
            "attributes": {
                "name": "Pasching",
                "key": "pasching_key",
                "zip_code": "4061"
            }
        }]
    };

});
define('waya/mirage/static-data/points/points', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "data": [{
      "id": "uuid-1",
      "type": "point_of_interest",
      "attributes": {
        "name": "KH Linz",
        "latitude": 48.2432843,
        "longitude": 14.2362089,
        "description": "Unfallkrankenhaus in Linz",
        "address": "KH-Strasse 21, 4020 Linz",
        "city": "Linz",
        "zip": "4020",
        "country": "Austria",
        "phones": ["+4310000000", "+43664000000"],
        "opening_hours": {
          "mo": [{
            "from": 8,
            "to": 10
          }],
          "tu": [{
            "from": 8,
            "to": 10
          }],
          "we": [{
            "from": 8,
            "to": 10
          }],
          "th": [{
            "from": 8,
            "to": 10
          }],
          "fr": [{
            "from": 8,
            "to": 10
          }],
          "sa": [{
            "from": 8,
            "to": 10
          }],
          "su": [{
            "from": 8,
            "to": 10
          }]
        },
        "mails": ["office@domain.at", "office2@domain.at"],
        "webaddress": "http://maybekhlinz.at"
      },
      "relationships": {
        "tags": {
          "data": [{
            "id": "1",
            "type": "tag"
          }, {
            "id": "2",
            "type": "tag"
          }]
        }
      }
    }, {
      "id": "uuid-2",
      "type": "point_of_interest",
      "attributes": {
        "name": "KH Pasching",
        "latitude": 48.242617,
        "longitude": 14.238602,
        "description": "Unfallkrankenhaus in Pasching",
        "address": "KH-Strasse 21, 4020 Pasching",
        "city": "Pasching",
        "zip": "4020",
        "country": "Austria",
        "phones": ["+4310000000", "+43664000000"],
        "opening_hours": {
          "mo": [{
            "from": 8,
            "to": 10
          }],
          "tu": [{
            "from": 8,
            "to": 10
          }],
          "we": [{
            "from": 8,
            "to": 10
          }],
          "th": [{
            "from": 8,
            "to": 10
          }],
          "fr": [{
            "from": 8,
            "to": 10
          }],
          "sa": [{
            "from": 8,
            "to": 10
          }],
          "su": [{
            "from": 8,
            "to": 10
          }]
        },
        "mails": ["office@domain.at", "office2@domain.at"],
        "webaddress": "http://maybekhlinz.at"
      },
      "relationships": {
        "tags": {
          "data": [{
            "id": "1",
            "type": "tag"
          }, {
            "id": "2",
            "type": "tag"
          }]
        }
      }
    }],
    "included": [{
      "type": "tag",
      "id": "1",
      "attributes": {
        "name": "Shelters",
        "key": "translation_key_shelter",
        "description": "some tag desc"
      }
    }, {
      "type": "tag",
      "id": "2",
      "attributes": {
        "name": "Woman",
        "key": "translationkey_woman",
        "description": "some tag desc"
      }
    }]
  };

});
define('waya/mirage/static-data/tags/tags', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "data": [{
      "id": "1",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "shelter",
        "description": "Shelter",
        "sortno": "1"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "2",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "healthCare",
        "description": "Health Care",
        "sortno": "2"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "3",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "transportation",
        "description": "Transportation",
        "sortno": "3"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "4",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "asylumProcess",
        "description": "Asylum Process",
        "sortno": "4"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "5",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "education",
        "description": "Education",
        "sortno": "5"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "6",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "administrativeProcess",
        "description": "Administrative process",
        "sortno": "6"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "7",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "entertainment",
        "description": "Entertainment",
        "sortno": "7"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "8",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "food",
        "description": "Food",
        "sortno": "8"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "9",
      "type": "tag",
      "attributes": {
        "category": "main_category",
        "name": "contacts",
        "description": "Contacts",
        "sortno": "9"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "10",
      "type": "tag",
      "attributes": {
        "category": "sub_category",
        "name": "emergency_shelters",
        "description": "Emergency shelters",
        "sortno": "1"
      },
      "relationships": {
        "parent_tag": {
          "data": {
            "id": "1",
            "type": "tag"
          }
        }
      }
    }, {
      "id": "11",
      "type": "tag",
      "attributes": {
        "category": "sub_category",
        "name": "cada",
        "description": "CADA",
        "sortno": "2"
      },
      "relationships": {
        "parent_tag": {
          "data": {
            "id": "1",
            "type": "tag"
          }
        }
      }
    }, {
      "id": "12",
      "type": "tag",
      "attributes": {
        "category": "sub_category",
        "name": "cph",
        "description": "CPH",
        "sortno": "3"
      },
      "relationships": {
        "parent_tag": {
          "data": {
            "id": "1",
            "type": "tag"
          }
        }
      }
    }, {
      "id": "13",
      "type": "tag",
      "attributes": {
        "category": "sub_category",
        "name": "hotel_hostels",
        "description": "Hotel / Hostels",
        "sortno": "4"
      },
      "relationships": {
        "parent_tag": {
          "data": {
            "id": "1",
            "type": "tag"
          }
        }
      }
    }, {
      "id": "14",
      "type": "tag",
      "attributes": {
        "category": "sub_category",
        "name": "calm",
        "description": "CALM",
        "sortno": "5"
      },
      "relationships": {
        "parent_tag": {
          "data": {
            "id": "1",
            "type": "tag"
          }
        }
      }
    }, {
      "id": "15",
      "type": "tag",
      "attributes": {
        "category": "tag",
        "name": "women",
        "description": "Women",
        "sortno": "1"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "16",
      "type": "tag",
      "attributes": {
        "category": "tag",
        "name": "minor",
        "description": "Minor",
        "sortno": "2"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "17",
      "type": "tag",
      "attributes": {
        "category": "tag",
        "name": "trans",
        "description": "Trans",
        "sortno": "3"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "18",
      "type": "tag",
      "attributes": {
        "category": "tag",
        "name": "couple",
        "description": "Couple",
        "sortno": "4"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "19",
      "type": "tag",
      "attributes": {
        "category": "tag",
        "name": "family",
        "description": "Family",
        "sortno": "5"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }, {
      "id": "20",
      "type": "tag",
      "attributes": {
        "category": "tag",
        "name": "handicap",
        "description": "Handicap",
        "sortno": "6"
      },
      "relationships": {
        "parent_tag": {
          "data": null
        }
      }
    }]
  };

});
define('waya/mirage/static-data/user-status/user-status', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "data": [{
      "id": "uuid-1",
      "type": "user_status",
      "attributes": {
        "name": "Asylum seeker",
        "key": "asylum_seeker_key"
      }
    }, {
      "id": "uuid-2",
      "type": "user_status",
      "attributes": {
        "name": "Refugee",
        "key": "refugee_key"
      }
    }, {
      "id": "uuid-3",
      "type": "user_status",
      "attributes": {
        "name": "Just arrived",
        "key": "just_arrived_key"
      }
    }]
  };

});
define('waya/models/city', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    key: DS['default'].attr('string'),
    country: DS['default'].belongsTo('country')
  });

});
define('waya/models/country', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    key: DS['default'].attr('string'),
    name: DS['default'].attr('string'),
    cities: DS['default'].hasMany('city', { async: false })
  });

});
define('waya/models/point', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var attr = DS['default'].attr;

  exports['default'] = DS['default'].Model.extend({
    name: attr('string'),
    latitude: attr('number'),
    longitude: attr('number'),
    description: attr('string'),
    address: attr('string'),
    city: attr('string'),
    zip: attr('string'),
    country: attr('string'),
    phones: attr(),
    opening_hours: attr('string'),
    mails: attr('string'),
    webaddress: attr('string'),
    tags: DS['default'].hasMany('tag', { async: false })
  });

});
define('waya/models/tag', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var attr = DS['default'].attr;

  exports['default'] = DS['default'].Model.extend({
    name: attr('string'),
    description: attr('string'),
    category: attr('string'),
    key: attr('string'),
    sortno: attr('number'),
    parentTag: DS['default'].belongsTo('tag', { inverse: 'childTags' }),
    childTags: DS['default'].hasMany('tag', { inverse: 'parentTag' }),
    className: Ember.computed('key', {
      get: function get() {
        return this.get('key').camelize();
      }
    }),
    categorySlug: Ember.computed('key', {
      get: function get() {
        return encodeURIComponent(this.get('key').dasherize());
      }
    }),
    subCategorySlug: Ember.computed.alias('categorySlug')
  });

});
define('waya/models/user-status', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var attr = DS['default'].attr;

  exports['default'] = DS['default'].Model.extend({
    name: attr('string'),
    key: attr('string')
  });

});
define('waya/router', ['exports', 'ember', 'waya/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('home', { path: '/:lang' }, function () {
      this.route('onboarding');
      this.route('overview', function () {
        this.route('all');
        this.route('category', { path: '/:categorySlug' }, function () {
          this.route('subCategory', { path: ':subCategorySlug' });
        });
      });
      this.route('about');
      this.route('projects');
      this.route('values');
      this.route('team');
      this.route('participate');
      this.route('contact');
      this.route('terms');
    });
  });

  exports['default'] = Router;

});
define('waya/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      return this.get('store').find('user-status');
    },
    actions: {
      updateUserInfo: function updateUserInfo(userInfo) {
        this.get('controller').set('userInfo', userInfo);
      }
    }
  });

});
define('waya/routes/home/about', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home/contact', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home/onboarding', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    model: function model() {
      var userStatus = this.get('store').find('user-status');
      var countries = this.get('store').find('country', { include: 'cities' });

      return Ember['default'].RSVP.hash({
        userStatus: userStatus,
        countries: countries
      });
    },

    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('userStatus', model.userStatus);
      controller.set('countries', model.countries);
    }
  });

});
define('waya/routes/home/overview/all', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      var userInfo = JSON.parse(Ember['default'].$.cookie('userInfo'));
      var tags = this.modelFor('home.overview');
      var points = this.get('store').find('point', { filter: { city: userInfo.city.key } });

      return Ember['default'].RSVP.hash({
        points: points
      });
    },

    setupController: function setupController(controller, model) {
      controller.set('model', model.points);
      controller.set('pointModels', model.points);
    },

    beforeModel: function beforeModel(transition) {
      var userInfo = Ember['default'].$.cookie('userInfo');
      if (!userInfo) {
        this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
      }
    }

  });

});
define('waya/routes/home/overview/category/sub-category', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      var userInfo = JSON.parse(Ember['default'].$.cookie('userInfo'));
      var tags = this.modelFor('home.overview');
      var currentSubCategory = tags.findBy('subCategorySlug', params.subCategorySlug);
      var points = this.get('store').find('point', { filter: { tag: currentSubCategory.get('key'), city: userInfo.city.key } });

      return Ember['default'].RSVP.hash({
        points: points,
        currentCategory: currentSubCategory
      });
    },

    setupController: function setupController(controller, model) {
      this.send('updatePoints', model.points);
      controller.set('currentCategory', model.currentCategory);
    },

    beforeModel: function beforeModel(transition) {
      var userInfo = Ember['default'].$.cookie('userInfo');
      if (!userInfo) {
        this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
      }
    }
  });

});
define('waya/routes/home/overview/category', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    invalidatedModel: false,
    model: function model(params) {
      var userInfo = JSON.parse(Ember['default'].$.cookie('userInfo'));
      var tags = this.modelFor('home.overview');
      var currentCategory = tags.findBy('categorySlug', params.categorySlug);
      var points = this.get('store').find('point', { filter: { tag: currentCategory.get('key'), city: userInfo.city.key } });

      return Ember['default'].RSVP.hash({
        points: points,
        currentCategory: currentCategory
      });
    },

    setupController: function setupController(controller, model) {
      controller.set('model', model.points);
      controller.set('pointModels', model.points);
      controller.set('currentCategory', model.currentCategory);
    },

    beforeModel: function beforeModel(transition) {
      var userInfo = Ember['default'].$.cookie('userInfo');
      if (!userInfo) {
        this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
      }
    },

    actions: {
      willTransition: function willTransition() {
        this.set('invalidatedModel', false);
      },
      didTransition: function didTransition() {
        if (this.get('invalidatedModel') == false) {
          this.refresh();
          this.set('invalidatedModel', true);
        }
      },
      updatePoints: function updatePoints(points) {
        this.get('controller').set('pointModels', points);
      }
    }

  });

});
define('waya/routes/home/overview', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').find('tag');
    },

    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('tags', model);

      var mapStubCategory = this.get('store').createRecord('tag', {
        name: 'maps'
      });

      controller.set('mapCategory', mapStubCategory);
    },

    beforeModel: function beforeModel(transition) {
      if (this.get('routeName') === transition.targetName || this.get('routeName') + '.index' === transition.targetName) {
        this.transitionTo('home.overview.all');
      }
    }
  });

});
define('waya/routes/home/participate', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home/projects', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home/team', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home/terms', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home/values', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      Ember['default'].$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
    }
  });

});
define('waya/routes/home', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      this.set('i18n.locale', params.lang);
    }
  });

});
define('waya/routes/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    redirect: function redirect() {
      var userInfo = Ember['default'].$.cookie('userInfo');
      if (!userInfo) {
        this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
      } else {
        this.replaceWith('home.overview.all', { lang: this.get('i18n.locale') });
      }
    }
  });

});
define('waya/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].JSONAPISerializer.extend({
    keyForAttribute: function keyForAttribute(attr) {
      return Ember.String.underscore(attr);
    },
    keyForRelationship: function keyForRelationship(rawKey) {
      return Ember.String.underscore(rawKey);
    }
  });

});
define('waya/serializers/point', ['exports', 'ember-data', 'waya/serializers/application'], function (exports, DS, ApplicationSerializer) {

  'use strict';

  exports['default'] = ApplicationSerializer['default'].extend({

    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {

      payload.data = payload.data.map(function (p) {
        p.type = "point";
        return p;
      });

      return this._super.apply(this, arguments);
    }
  });

});
define('waya/serializers/tag', ['exports', 'ember-data', 'waya/serializers/application'], function (exports, DS, ApplicationSerializer) {

  'use strict';

  exports['default'] = ApplicationSerializer['default'].extend({

    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {

      payload.data = payload.data.map(function (t) {
        t.type = "tag";
        return t;
      });

      return this._super.apply(this, arguments);
    }
  });

});
define('waya/services/ember-devtools', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  /* global DS */
  var $ = Ember['default'].$;
  var Service = Ember['default'].Service;

  exports['default'] = Service.extend({
    container: null,
    renderedComponents: {},
    init: function init() {
      this.global = this.global || window;
      this.console = this.console || window.console;
      if (typeof DS === 'object') {
        this.store = this.container.lookup('service:store') || this.container.lookup('store:main'); // for ember-data < 2
        this.typeMaps = this.store.typeMaps;
      }
    },
    consoleLog: function consoleLog() {
      this.console.log.apply(this.console, arguments);
    },
    app: function app(name) {
      name = name || 'main';
      return this.container.lookup('application:' + name);
    },
    route: function route(name) {
      name = name || this.currentRouteName();
      return this.container.lookup('route:' + name);
    },
    controller: function controller(name) {
      name = name || this.currentRouteName();
      return this.container.lookup('controller:' + name);
    },
    model: function model(name) {
      var controller = this.controller(name);
      return controller && controller.get('model');
    },
    service: function service(name) {
      return this.lookup('service:' + name);
    },
    router: function router(name) {
      name = name || 'main';
      return this.container.lookup('router:' + name).get('router');
    },
    routes: function routes() {
      return Object.keys(this.router().recognizer.names);
    },
    component: function component(idDomElementOrSelector, type) {
      if (typeof idDomElementOrSelector === 'object') {
        idDomElementOrSelector = idDomElementOrSelector.id;
      }
      return this.lookup('component:' + type + '::' + idDomElementOrSelector);
    },
    currentRouteName: function currentRouteName() {
      return this.controller('application').get('currentRouteName');
    },
    currentPath: function currentPath() {
      return this.controller('application').get('currentPath');
    },
    log: function log(promise, property, getEach) {
      var self = this;
      return promise.then(function (value) {
        self.global.$E = value;
        if (property) {
          value = value[getEach ? 'getEach' : 'get'].call(value, property);
        }
        self.consoleLog(value);
      }, function (err) {
        self.console.error(err);
      });
    },
    lookup: function lookup(name) {
      return this.container.lookup(name);
    },
    lookupFactory: function lookupFactory(name) {
      return this.container.lookupFactory(name);
    },
    containerNameFor: function containerNameFor(object) {
      var cache = this.container.cache || this.container._defaultContainer.cache;
      var keys = Object.keys(cache);
      for (var i = 0; i < keys.length; i++) {
        if (cache[keys[i]] === object) return keys[i];
      }
    },
    inspect: Ember['default'].inspect,
    logResolver: function logResolver(bool) {
      bool = typeof bool === 'undefined' ? true : bool;
      Ember['default'].ENV.LOG_MODULE_RESOLVER = bool;
    },
    logAll: function logAll(bool) {
      bool = typeof bool === 'undefined' ? true : bool;
      var app = this.app();
      app.LOG_ACTIVE_GENERATION = bool;
      app.LOG_VIEW_LOOKUPS = bool;
      app.LOG_TRANSITIONS = bool;
      app.LOG_TRANSITIONS_INTERNAL = bool;
      this.logResolver(bool);
    },
    logRenders: function logRenders() {
      var self = this;

      Ember['default'].subscribe('render', {
        before: function before(name, start, payload) {
          return start;
        },
        after: function after(name, end, payload, start) {
          var id = payload.containerKey;
          if (!id) return;

          var duration = Math.round(end - start);
          var color = self.colorForRender(duration);
          var logId = 'renderedComponents.' + id;
          var ocurrences = self.get(logId);

          if (!ocurrences) {
            self.set(logId, []);
          }

          self.get(logId).push(duration);

          console.log('%c rendered ' + id + ' in ' + duration + 'ms', 'color: ' + color);
        }
      });
    },
    colorForRender: function colorForRender(duration) {
      var ok = '#000000';
      var warning = '#F1B178';
      var serious = '#E86868';

      if (duration < 300) return ok;
      if (duration < 600) return warning;

      return serious;
    },
    globalize: function globalize() {
      var self = this;
      var props = ['app', 'container', 'store', 'typeMaps', 'route', 'controller', 'model', 'service', 'routes', 'view', 'component', 'currentRouteName', 'currentPath', 'log', 'lookup', 'lookupFactory', 'containerNameFor', 'inspect', 'logResolver', 'logAll'];
      // don't stomp on pre-existing global vars
      var skipGlobalize = this.constructor.skipGlobalize;
      if (skipGlobalize === null) {
        skipGlobalize = this.constructor.skipGlobalize = props.filter(function (prop) {
          return !Ember['default'].isNone(self.global[prop]);
        });
      }
      props.map(function (name) {
        if (skipGlobalize.indexOf(name) !== -1) return;
        var prop = self[name];
        if (typeof prop === 'function') {
          prop = function () {
            return self[name].apply(self, arguments);
          };
        }
        self.global[name] = prop;
      });
    }
  }).reopenClass({
    skipGlobalize: null
  });

});
define('waya/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, i18n) {

	'use strict';



	exports['default'] = i18n['default'];

});
define('waya/templates/-footer', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 10
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.navigation.about"],[],["loc",[null,[8,10],[8,63]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.navigation.projects"],[],["loc",[null,[11,10],[11,66]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 8
            },
            "end": {
              "line": 15,
              "column": 8
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.navigation.values"],[],["loc",[null,[14,10],[14,64]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 21,
              "column": 8
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.navigation.team"],[],["loc",[null,[20,10],[20,62]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 8
            },
            "end": {
              "line": 24,
              "column": 8
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.navigation.participate"],[],["loc",[null,[23,10],[23,69]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 8
            },
            "end": {
              "line": 27,
              "column": 8
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.navigation.contact"],[],["loc",[null,[26,10],[26,65]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 58,
              "column": 6
            },
            "end": {
              "line": 60,
              "column": 6
            }
          },
          "moduleName": "waya/templates/-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.footer.sections.bottom.terms"],[],["loc",[null,[59,8],[59,57]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 67,
            "column": 0
          }
        },
        "moduleName": "waya/templates/-footer.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","footer-helper");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","footer group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","wrapper footer-list");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","footer-list__group col");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4,"class","h3 text-white text-half-transparent");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","assets/images/waya_logo_white.png");
        dom.setAttribute(el5,"alt","WAYA");
        dom.setAttribute(el5,"title","WAYA");
        dom.setAttribute(el5,"width","75px");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","footer-list__col col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","footer-list__col col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","footer-list__group col");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4,"class","h3 text-white text-half-transparent");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","footer-list__col col");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://www.runtastic.com");
        dom.setAttribute(el5,"class","footer-list__link text-block text-white");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","assets/images/runtastic_logo_white.svg");
        dom.setAttribute(el6,"class","partner-logo");
        dom.setAttribute(el6,"alt","Runtastic GmbH");
        dom.setAttribute(el6,"title","Runtastic GmnH");
        dom.setAttribute(el6,"height","20px");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","http://noosfeer.com/");
        dom.setAttribute(el5,"class","footer-list__link text-block text-white");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","assets/images/noosfeer_logo_white.svg");
        dom.setAttribute(el6,"class","partner-logo");
        dom.setAttribute(el6,"alt","Noosfeer");
        dom.setAttribute(el6,"title","Noosfeer");
        dom.setAttribute(el6,"height","20px");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","footer-list__col col");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#TODO#");
        dom.setAttribute(el5,"class","footer-list__link text-block text-white");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","assets/images/bienvenus_logo_white.svg");
        dom.setAttribute(el6,"class","partner-logo");
        dom.setAttribute(el6,"alt","Bienvenus");
        dom.setAttribute(el6,"title","Bienvenus");
        dom.setAttribute(el6,"height","20px");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://www.openstreetmap.org");
        dom.setAttribute(el5,"class","footer-list__link text-block text-white");
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"src","assets/images/openstreetmap_logo_white.svg");
        dom.setAttribute(el6,"alt","OpenStreetMap");
        dom.setAttribute(el6,"title","OpenStreetMap");
        dom.setAttribute(el6,"class","partner-logo");
        dom.setAttribute(el6,"height","20px");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","footer-list__group col");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4,"class","h3 text-white text-half-transparent");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class","footer-list__link text-inline footer-icon icon icon-facebook");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class","footer-list__link text-inline footer-icon icon icon-twitter");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class","footer-list__link text-inline footer-icon icon icon-instagram");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class","footer-list__link text-inline footer-icon icon icon-youtube");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","footer-list__group footer-list__group--text-right col");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","powered-by text-no-margin text-white text-additional-info");
        var el5 = dom.createTextNode(" Powered by");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://singa.fr/");
        dom.setAttribute(el4,"class","text-margin-bottom");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","assets/images/singa_logo_waya_footer.svg");
        dom.setAttribute(el5,"alt","Singa France");
        dom.setAttribute(el5,"title","Singa France");
        dom.setAttribute(el5,"width","65px");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element1, [5]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(element2,1,1);
        morphs[1] = dom.createMorphAt(element2,2,2);
        morphs[2] = dom.createMorphAt(element2,3,3);
        morphs[3] = dom.createMorphAt(element3,1,1);
        morphs[4] = dom.createMorphAt(element3,2,2);
        morphs[5] = dom.createMorphAt(element3,3,3);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [3, 1]),0,0);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [5, 1]),0,0);
        morphs[8] = dom.createMorphAt(dom.childAt(element0, [7]),5,5);
        return morphs;
      },
      statements: [
        ["block","link-to",["home.about"],["class","footer-list__link text-block text-white"],0,null,["loc",[null,[7,8],[9,22]]]],
        ["block","link-to",["home.projects"],["class","footer-list__link text-block text-white"],1,null,["loc",[null,[10,8],[12,20]]]],
        ["block","link-to",["home.values"],["class","footer-list__link text-block text-white"],2,null,["loc",[null,[13,8],[15,20]]]],
        ["block","link-to",["home.team"],["class","footer-list__link text-block text-white"],3,null,["loc",[null,[19,8],[21,20]]]],
        ["block","link-to",["home.participate"],["class","footer-list__link text-block text-white"],4,null,["loc",[null,[22,8],[24,20]]]],
        ["block","link-to",["home.contact"],["class","footer-list__link text-block text-white"],5,null,["loc",[null,[25,8],[27,20]]]],
        ["inline","t",["pages.index.footer.sections.partners.headline"],[],["loc",[null,[32,54],[32,108]]]],
        ["inline","t",["pages.index.footer.sections.social.headline"],[],["loc",[null,[44,54],[44,106]]]],
        ["block","link-to",["home.terms"],["class","footer-list__link text-block text-white"],6,null,["loc",[null,[58,6],[60,18]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  }()));

});
define('waya/templates/-header', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 8,
              "column": 6
            }
          },
          "moduleName": "waya/templates/-header.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1,"class","language-picker__label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
          return morphs;
        },
        statements: [
          ["inline","world-flag",[["get","language.flag",["loc",[null,[7,21],[7,34]]]],16],[],["loc",[null,[7,8],[7,39]]]],
          ["inline","t",[["get","language.name",["loc",[null,[7,82],[7,95]]]]],[],["loc",[null,[7,78],[7,98]]]]
        ],
        locals: ["language"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "waya/templates/-header.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","waya-logo");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","language-picker");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]),1,1);
        return morphs;
      },
      statements: [
        ["inline","wy-settings-box",[],["userInfo",["subexpr","@mut",[["get","userInfo",["loc",[null,[2,29],[2,37]]]]],[],[]]],["loc",[null,[2,2],[2,39]]]],
        ["block","power-select",[],["options",["subexpr","@mut",[["get","languages",["loc",[null,[6,30],[6,39]]]]],[],[]],"searchEnabled",false,"selected",["subexpr","@mut",[["get","selectedLanguage",["loc",[null,[6,69],[6,85]]]]],[],[]],"onchange",["subexpr","action",["languageChanged"],[],["loc",[null,[6,95],[6,121]]]]],0,null,["loc",[null,[6,6],[8,23]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('waya/templates/-map', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "waya/templates/-map.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","wy-map",[],["location",["subexpr","@mut",[["get","currentLocation",["loc",[null,[2,20],[2,35]]]]],[],[]],"points",["subexpr","@mut",[["get","points",["loc",[null,[2,43],[2,49]]]]],[],[]],"activePoint",["subexpr","@mut",[["get","activePoint",["loc",[null,[2,62],[2,73]]]]],[],[]]],["loc",[null,[2,2],[2,75]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "waya/templates/-map.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","text-subtle text-additional-info text-no-margin text-center");
          var el2 = dom.createTextNode("Loading map...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 8
              },
              "end": {
                "line": 29,
                "column": 8
              }
            },
            "moduleName": "waya/templates/-map.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","dotted-list");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","tag.name",["loc",[null,[28,34],[28,46]]]]
          ],
          locals: ["tag"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "waya/templates/-map.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","poi-information");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","poi-information__main col");
          var el3 = dom.createTextNode("\n     \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","poi-information__description");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          dom.setAttribute(el4,"class","h3 text-no-margin text-bold");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          dom.setAttribute(el4,"class","h4");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","poi-information__description");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","text-no-margin");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","text-no-margin");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(", ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","text-no-margin");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","text-no-margin");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","poi-information__specification col");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("ul");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var element4 = dom.childAt(element3, [3]);
          var morphs = new Array(9);
          morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
          morphs[3] = dom.createMorphAt(element4,0,0);
          morphs[4] = dom.createMorphAt(element4,2,2);
          morphs[5] = dom.createMorphAt(element4,4,4);
          morphs[6] = dom.createMorphAt(dom.childAt(element3, [5]),0,0);
          morphs[7] = dom.createMorphAt(dom.childAt(element3, [7]),0,0);
          morphs[8] = dom.createMorphAt(dom.childAt(element0, [3, 1]),1,1);
          return morphs;
        },
        statements: [
          ["content","activePoint.tags.firstObject.name",["loc",[null,[12,48],[12,85]]]],
          ["content","activePoint.name",["loc",[null,[13,23],[13,43]]]],
          ["content","activePoint.address",["loc",[null,[17,34],[17,57]]]],
          ["content","activePoint.zip",["loc",[null,[18,34],[18,53]]]],
          ["content","activePoint.city",["loc",[null,[18,54],[18,74]]]],
          ["content","activePoint.country",["loc",[null,[18,76],[18,99]]]],
          ["content","activePoint.phones",["loc",[null,[19,34],[19,56]]]],
          ["content","activePoint.webaddress",["loc",[null,[20,34],[20,60]]]],
          ["block","each",[["get","activePoint.tags",["loc",[null,[27,16],[27,32]]]]],[],0,null,["loc",[null,[27,8],[29,17]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 7
          }
        },
        "moduleName": "waya/templates/-map.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","currentLocation",["loc",[null,[1,6],[1,21]]]]],[],0,1,["loc",[null,[1,0],[5,7]]]],
        ["block","if",[["get","activePoint",["loc",[null,[7,6],[7,17]]]]],[],2,null,["loc",[null,[7,0],[33,7]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('waya/templates/-navigation', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "waya/templates/-navigation.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item-wrapper");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","media__object icon nav-icon nav-icon-maps");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","media__body nav-label");
          var el3 = dom.createTextNode(" \n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),1,1);
          return morphs;
        },
        statements: [
          ["inline","t",["navigation.map"],[],["loc",[null,[6,8],[6,30]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 23,
                "column": 4
              }
            },
            "moduleName": "waya/templates/-navigation.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","item-wrapper media-table media--body-right");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","media__object");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","media-table");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","media__body nav-label");
            var el5 = dom.createTextNode(" \n              ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","media__body icon icon-arrow");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1, 1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'class');
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["media__object icon nav-icon nav-icon-",["get","category.className",["loc",[null,[15,63],[15,81]]]]]]],
            ["content","category.name",["loc",[null,[17,14],[17,31]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.9",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 10
                },
                "end": {
                  "line": 29,
                  "column": 10
                }
              },
              "moduleName": "waya/templates/-navigation.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","subCategory.name",["loc",[null,[28,12],[28,32]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 8
              },
              "end": {
                "line": 30,
                "column": 8
              }
            },
            "moduleName": "waya/templates/-navigation.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","link-to",["home.overview.category.subCategory",["get","category",["loc",[null,[27,58],[27,66]]]],["get","subCategory",["loc",[null,[27,67],[27,78]]]]],["tagName","li","class","sub-nav__item dotted-list"],0,null,["loc",[null,[27,10],[29,22]]]]
          ],
          locals: ["subCategory"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 33,
              "column": 2
            }
          },
          "moduleName": "waya/templates/-navigation.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2,"class","sub-nav");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [2]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createAttrMorph(element2, 'class');
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","link-to",["home.overview.category",["get","category",["loc",[null,[11,40],[11,48]]]]],["class","nav__item","tagName","li"],0,null,["loc",[null,[11,4],[23,16]]]],
          ["attribute","class",["concat",["sub-nav-group sub-nav-group-",["get","category.name",["loc",[null,[24,45],[24,58]]]]]]],
          ["block","each",[["get","category.childTags",["loc",[null,[26,16],[26,34]]]]],[],1,null,["loc",[null,[26,8],[30,17]]]]
        ],
        locals: ["category"],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "waya/templates/-navigation.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","nav");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element3,1,1);
        morphs[1] = dom.createMorphAt(element3,2,2);
        return morphs;
      },
      statements: [
        ["block","link-to",["home.overview.all"],["class","media-table nav__item","tagName","li"],0,null,["loc",[null,[2,2],[9,14]]]],
        ["block","each",[["get","mainCategories",["loc",[null,[10,10],[10,24]]]]],[],1,null,["loc",[null,[10,2],[33,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('waya/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "waya/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","partial",["header"],[],["loc",[null,[1,0],[1,20]]]],
        ["content","outlet",["loc",[null,[4,2],[4,12]]]],
        ["inline","partial",["footer"],[],["loc",[null,[7,0],[7,20]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/components/labeled-radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "waya/templates/components/labeled-radio-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","radio-button",[],["radioClass",["subexpr","@mut",[["get","radioClass",["loc",[null,[2,15],[2,25]]]]],[],[]],"radioId",["subexpr","@mut",[["get","radioId",["loc",[null,[3,12],[3,19]]]]],[],[]],"changed","innerRadioChanged","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[5,13],[5,21]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[6,15],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,9],[7,13]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,13],[8,21]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[9,10],[9,15]]]]],[],[]]],["loc",[null,[1,0],[9,17]]]],
        ["content","yield",["loc",[null,[11,0],[11,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/components/page-navigation', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 6,
              "column": 5
            }
          },
          "moduleName": "waya/templates/components/page-navigation.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.header.home"],[],["loc",[null,[5,7],[5,39]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "waya/templates/components/page-navigation.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","breadcrumb");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","media__object nav-icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","media__body");
        var el3 = dom.createTextNode(" \n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	    > ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("      	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["home.overview.all"],["class","breadcrumb-link"],0,null,["loc",[null,[4,4],[6,17]]]],
        ["inline","t",[["get","page",["loc",[null,[7,11],[7,15]]]]],[],["loc",[null,[7,7],[7,17]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('waya/templates/components/radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "waya/templates/components/radio-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,1,1);
          morphs[3] = dom.createMorphAt(element0,3,3);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["ember-radio-button ",["subexpr","if",[["get","checked",["loc",[null,[2,40],[2,47]]]],"checked"],[],["loc",[null,[2,35],[2,59]]]]," ",["get","joinedClassNames",["loc",[null,[2,62],[2,78]]]]]]],
          ["attribute","for",["get","radioId",["loc",[null,[2,88],[2,95]]]]],
          ["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[4,14],[4,24]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[5,11],[5,18]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[6,17],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,13],[7,17]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,17],[8,25]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[9,19],[9,29]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,14],[10,19]]]]],[],[]],"changed","changed"],["loc",[null,[3,4],[11,27]]]],
          ["content","yield",["loc",[null,[13,4],[13,13]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "waya/templates/components/radio-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[17,12],[17,22]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[18,9],[18,16]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[19,15],[19,23]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[20,11],[20,15]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[21,15],[21,23]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[22,17],[22,27]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[23,12],[23,17]]]]],[],[]],"changed","changed"],["loc",[null,[16,2],[24,25]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "waya/templates/components/radio-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[25,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('waya/templates/components/wy-map', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "waya/templates/components/wy-map.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/components/wy-settings-box', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 80
              },
              "end": {
                "line": 4,
                "column": 136
              }
            },
            "moduleName": "waya/templates/components/wy-settings-box.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["content","currentUserStatus.name",["loc",[null,[4,110],[4,136]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 202
              },
              "end": {
                "line": 4,
                "column": 252
              }
            },
            "moduleName": "waya/templates/components/wy-settings-box.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["content","currentCity.name",["loc",[null,[4,232],[4,252]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 266
              },
              "end": {
                "line": 4,
                "column": 319
              }
            },
            "moduleName": "waya/templates/components/wy-settings-box.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["content","currentCountry.name",["loc",[null,[4,296],[4,319]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child3 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 5,
                "column": 110
              }
            },
            "moduleName": "waya/templates/components/wy-settings-box.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["inline","t",["navigation.user_status_info.cta"],[],["loc",[null,[5,71],[5,110]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "waya/templates/components/wy-settings-box.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","wrapper group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","right group__align-right text-right");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","h3 text-no-margin");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(", ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element1,0,0);
          morphs[1] = dom.createMorphAt(element1,2,2);
          morphs[2] = dom.createMorphAt(element1,4,4);
          morphs[3] = dom.createMorphAt(element1,6,6);
          morphs[4] = dom.createMorphAt(element1,8,8);
          morphs[5] = dom.createMorphAt(element0,3,3);
          return morphs;
        },
        statements: [
          ["inline","t",["navigation.user_status_info.info_for"],[],["loc",[null,[4,35],[4,79]]]],
          ["block","link-to",["home.onboarding"],[],0,null,["loc",[null,[4,80],[4,148]]]],
          ["inline","t",["navigation.user_status_info.city_preposition"],[],["loc",[null,[4,149],[4,201]]]],
          ["block","link-to",["home.onboarding"],[],1,null,["loc",[null,[4,202],[4,264]]]],
          ["block","link-to",["home.onboarding"],[],2,null,["loc",[null,[4,266],[4,331]]]],
          ["block","link-to",["home.onboarding"],["class","text-subtle","tagName","span"],3,null,["loc",[null,[5,6],[5,122]]]]
        ],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 7
          }
        },
        "moduleName": "waya/templates/components/wy-settings-box.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","visible",["loc",[null,[1,6],[1,13]]]]],[],0,null,["loc",[null,[1,0],[8,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('waya/templates/home/about', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/about.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.about_waya.name"],["loc",[null,[1,0],[1,54]]]],
        ["inline","t",["pages.index.about_waya.name"],[],["loc",[null,[4,17],[4,52]]]],
        ["inline","t",["pages.index.about_waya.content"],[],["loc",[null,[7,1],[7,39]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/contact', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/contact.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.contact.name"],["loc",[null,[1,0],[1,51]]]],
        ["inline","t",["pages.index.contact.name"],[],["loc",[null,[4,17],[4,49]]]],
        ["inline","t",["pages.index.contact.content"],[],["loc",[null,[7,1],[7,36]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "waya/templates/home/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","t",["pages.index.buttons.start"],[],["loc",[null,[6,4],[6,37]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2,"class","h3");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[2] = dom.createMorphAt(element0,5,5);
        morphs[3] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","t",["pages.index.headline"],[],["loc",[null,[2,17],[2,45]]]],
        ["inline","t",["pages.index.tagline"],[],["loc",[null,[3,17],[3,44]]]],
        ["block","link-to",["home.overview"],["class","bttn bttn-action","tagName","button"],0,null,["loc",[null,[5,2],[7,14]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('waya/templates/home/onboarding', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 10,
              "column": 6
            }
          },
          "moduleName": "waya/templates/home/onboarding.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","country.name",["loc",[null,[9,8],[9,24]]]]
        ],
        locals: ["country"],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 6
            },
            "end": {
              "line": 16,
              "column": 6
            }
          },
          "moduleName": "waya/templates/home/onboarding.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","city.name",["loc",[null,[15,8],[15,21]]]]
        ],
        locals: ["city"],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.9",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 12
              },
              "end": {
                "line": 25,
                "column": 12
              }
            },
            "moduleName": "waya/templates/home/onboarding.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","status.name",["loc",[null,[24,14],[24,29]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.9",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 8
            },
            "end": {
              "line": 27,
              "column": 8
            }
          },
          "moduleName": "waya/templates/home/onboarding.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","radio-button",[],["value",["subexpr","@mut",[["get","status",["loc",[null,[23,34],[23,40]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","selectedUserStatus",["loc",[null,[23,52],[23,70]]]]],[],[]],"changed","onUserStatusSelected"],0,null,["loc",[null,[23,12],[25,29]]]]
        ],
        locals: ["status"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/onboarding.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","small-wrapper");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("fieldset");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("fieldset");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("fieldset");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("fieldset");
        dom.setAttribute(el3,"class","text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4,"class","bttn bttn-action");
        dom.setAttribute(el4,"type","submit");
        dom.setAttribute(el4,"value","Continue");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [7, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        morphs[3] = dom.createMorphAt(element2,3,3);
        morphs[4] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
        morphs[5] = dom.createMorphAt(element3,3,3);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [5, 1]),1,1);
        morphs[7] = dom.createAttrMorph(element4, 'disabled');
        return morphs;
      },
      statements: [
        ["inline","t",["pages.onboarding.headline"],[],["loc",[null,[3,17],[3,50]]]],
        ["element","action",["setInfo"],["on","submit"],["loc",[null,[5,8],[5,40]]]],
        ["inline","t",["pages.onboarding.select_country_label"],[],["loc",[null,[7,13],[7,58]]]],
        ["block","power-select",[],["options",["subexpr","@mut",[["get","countries",["loc",[null,[8,30],[8,39]]]]],[],[]],"selected",["subexpr","@mut",[["get","selectedCountry",["loc",[null,[8,50],[8,65]]]]],[],[]],"searchEnabled",false,"onchange",["subexpr","action",["onCountrySelected"],[],["loc",[null,[8,95],[8,123]]]]],0,null,["loc",[null,[8,6],[10,23]]]],
        ["inline","t",["pages.onboarding.select_city_label"],[],["loc",[null,[13,13],[13,55]]]],
        ["block","power-select",[],["options",["subexpr","@mut",[["get","cities",["loc",[null,[14,30],[14,36]]]]],[],[]],"selected",["subexpr","@mut",[["get","selectedCity",["loc",[null,[14,46],[14,58]]]]],[],[]],"searchEnabled",false,"onchange",["subexpr","action",["onCitySelected"],[],["loc",[null,[14,88],[14,113]]]]],1,null,["loc",[null,[14,6],[16,23]]]],
        ["block","each",[["get","userStatus",["loc",[null,[21,16],[21,26]]]]],[],2,null,["loc",[null,[21,8],[27,17]]]],
        ["attribute","disabled",["get","isInfoInvalid",["loc",[null,[32,80],[32,93]]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('waya/templates/home/overview/all', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 17
          }
        },
        "moduleName": "waya/templates/home/overview/all.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","partial",["map"],[],["loc",[null,[1,0],[1,17]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/overview/category/sub-category', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "waya/templates/home/overview/category/sub-category.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","subcategory-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2,"class","h3");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h1");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
        return morphs;
      },
      statements: [
        ["content","currentCategory.parentTag.name",["loc",[null,[2,17],[2,51]]]],
        ["content","currentCategory.name",["loc",[null,[3,17],[3,41]]]],
        ["content","currentCategory.description",["loc",[null,[4,5],[4,36]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/overview/category', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 10
          }
        },
        "moduleName": "waya/templates/home/overview/category.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","partial",["map"],[],["loc",[null,[1,0],[1,17]]]],
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/overview', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 10
          }
        },
        "moduleName": "waya/templates/home/overview.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","partial",["navigation"],[],["loc",[null,[1,0],[1,24]]]],
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/participate', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/participate.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.participate.name"],["loc",[null,[1,0],[1,55]]]],
        ["inline","t",["pages.index.participate.name"],[],["loc",[null,[4,17],[4,53]]]],
        ["inline","t",["pages.index.participate.content"],[],["loc",[null,[7,1],[7,40]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/projects', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/projects.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.projects.name"],["loc",[null,[1,0],[1,52]]]],
        ["inline","t",["pages.index.projects.name"],[],["loc",[null,[4,17],[4,50]]]],
        ["inline","t",["pages.index.projects.content"],[],["loc",[null,[7,1],[7,37]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/team', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/team.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.team.name"],["loc",[null,[1,0],[1,48]]]],
        ["inline","t",["pages.index.team.name"],[],["loc",[null,[4,17],[4,46]]]],
        ["inline","t",["pages.index.team.content"],[],["loc",[null,[7,1],[7,33]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/terms', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/terms.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.terms.name"],["loc",[null,[1,0],[1,49]]]],
        ["inline","t",["pages.index.terms.name"],[],["loc",[null,[4,17],[4,47]]]],
        ["inline","t",["pages.index.terms.content"],[],["loc",[null,[7,1],[7,34]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/home/values', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "waya/templates/home/values.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","additional-spacing-bottom text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","page-navigation",[],["page","pages.index.values.name"],["loc",[null,[1,0],[1,50]]]],
        ["inline","t",["pages.index.values.name"],[],["loc",[null,[4,17],[4,48]]]],
        ["inline","t",["pages.index.values.content"],[],["loc",[null,[7,1],[7,35]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.9",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "waya/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('waya/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 6, col 78, Missing semicolon.\nadapters/application.js: line 4, col 14, \'Ember\' is not defined.\n\n2 errors'); 
  });

});
define('waya/tests/adapters/country.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/country.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/country.js should pass jshint.'); 
  });

});
define('waya/tests/adapters/point.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/point.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/point.js should pass jshint.'); 
  });

});
define('waya/tests/adapters/tag.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/tag.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/tag.js should pass jshint.'); 
  });

});
define('waya/tests/adapters/user-status.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/user-status.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/user-status.js should pass jshint.'); 
  });

});
define('waya/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('waya/tests/components/wy-map.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/wy-map.js should pass jshint', function(assert) { 
    assert.ok(false, 'components/wy-map.js should pass jshint.\ncomponents/wy-map.js: line 10, col 62, Expected \'===\' and instead saw \'==\'.\ncomponents/wy-map.js: line 14, col 35, Missing semicolon.\ncomponents/wy-map.js: line 20, col 28, Missing semicolon.\ncomponents/wy-map.js: line 95, col 42, Missing semicolon.\ncomponents/wy-map.js: line 96, col 53, Missing semicolon.\ncomponents/wy-map.js: line 99, col 56, Missing semicolon.\ncomponents/wy-map.js: line 102, col 50, Missing semicolon.\ncomponents/wy-map.js: line 104, col 42, Missing semicolon.\ncomponents/wy-map.js: line 105, col 70, Missing semicolon.\ncomponents/wy-map.js: line 35, col 18, \'L\' is not defined.\ncomponents/wy-map.js: line 63, col 14, \'L\' is not defined.\ncomponents/wy-map.js: line 78, col 5, \'L\' is not defined.\ncomponents/wy-map.js: line 30, col 9, \'e\' is defined but never used.\n\n13 errors'); 
  });

});
define('waya/tests/components/wy-settings-box.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/wy-settings-box.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/wy-settings-box.js should pass jshint.'); 
  });

});
define('waya/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 17, col 67, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/controllers/home/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/home');
  QUnit.test('controllers/home/index.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/home/index.js should pass jshint.\ncontrollers/home/index.js: line 1, col 16, \'Ember\' is not defined.\n\n1 error'); 
  });

});
define('waya/tests/controllers/home/onboarding.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/home');
  QUnit.test('controllers/home/onboarding.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/home/onboarding.js should pass jshint.\ncontrollers/home/onboarding.js: line 31, col 9, Missing semicolon.\ncontrollers/home/onboarding.js: line 38, col 66, Missing semicolon.\ncontrollers/home/onboarding.js: line 42, col 55, Missing semicolon.\n\n3 errors'); 
  });

});
define('waya/tests/controllers/home/overview/all.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/home/overview');
  QUnit.test('controllers/home/overview/all.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/home/overview/all.js should pass jshint.'); 
  });

});
define('waya/tests/controllers/home/overview/category/sub-category.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/home/overview/category');
  QUnit.test('controllers/home/overview/category/sub-category.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/home/overview/category/sub-category.js should pass jshint.'); 
  });

});
define('waya/tests/controllers/home/overview/category.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/home/overview');
  QUnit.test('controllers/home/overview/category.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/home/overview/category.js should pass jshint.\ncontrollers/home/overview/category.js: line 21, col 20, Expected \'!==\' and instead saw \'!=\'.\ncontrollers/home/overview/category.js: line 25, col 23, \'L\' is not defined.\n\n2 errors'); 
  });

});
define('waya/tests/controllers/home/overview.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/home');
  QUnit.test('controllers/home/overview.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/home/overview.js should pass jshint.'); 
  });

});
define('waya/tests/controllers/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/index.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 16, \'Ember\' is not defined.\n\n1 error'); 
  });

});
define('waya/tests/helpers/ember-i18n/test-helpers', ['ember'], function (Ember) {

  'use strict';

  Ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();

});
define('waya/tests/helpers/resolver', ['exports', 'ember/resolver', 'waya/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('waya/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('waya/tests/helpers/start-app', ['exports', 'ember', 'waya/app', 'waya/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('waya/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('waya/tests/initializers/user-status.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/user-status.js should pass jshint', function(assert) { 
    assert.ok(false, 'initializers/user-status.js should pass jshint.\ninitializers/user-status.js: line 10, col 79, Missing semicolon.\ninitializers/user-status.js: line 11, col 72, Missing semicolon.\ninitializers/user-status.js: line 14, col 2, Missing semicolon.\ninitializers/user-status.js: line 5, col 26, \'Ember\' is not defined.\ninitializers/user-status.js: line 4, col 25, \'application\' is defined but never used.\n\n5 errors'); 
  });

});
define('waya/tests/integration/components/wy-map-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('wy-map', 'Integration | Component | wy map', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.9',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 10
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'wy-map', ['loc', [null, [1, 0], [1, 10]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.9',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.9',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'wy-map', [], [], 0, null, ['loc', [null, [2, 4], [4, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('waya/tests/integration/components/wy-map-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/wy-map-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/wy-map-test.js should pass jshint.'); 
  });

});
define('waya/tests/integration/components/wy-settings-box-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('wy-settings-box', 'Integration | Component | wy settings box', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.9',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'wy-settings-box', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.9',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.9',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'wy-settings-box', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('waya/tests/integration/components/wy-settings-box-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/wy-settings-box-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/wy-settings-box-test.js should pass jshint.'); 
  });

});
define('waya/tests/layers/open-street-map-layer.jshint', function () {

  'use strict';

  QUnit.module('JSHint - layers');
  QUnit.test('layers/open-street-map-layer.js should pass jshint', function(assert) { 
    assert.ok(false, 'layers/open-street-map-layer.js should pass jshint.\nlayers/open-street-map-layer.js: line 5, col 12, \'L\' is not defined.\n\n1 error'); 
  });

});
define('waya/tests/locales/de/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/de');
  QUnit.test('locales/de/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/de/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/de/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/de');
  QUnit.test('locales/de/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/de/translations.js should pass jshint.\nlocales/de/translations.js: line 40, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/locales/en/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/en/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/en/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/en/translations.js should pass jshint.\nlocales/en/translations.js: line 224, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/locales/es/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/es');
  QUnit.test('locales/es/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/es/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/es/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/es');
  QUnit.test('locales/es/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/es/translations.js should pass jshint.\nlocales/es/translations.js: line 40, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/locales/fr/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/fr');
  QUnit.test('locales/fr/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/fr/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/fr/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/fr');
  QUnit.test('locales/fr/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/fr/translations.js should pass jshint.\nlocales/fr/translations.js: line 40, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/locales/ru/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/ru');
  QUnit.test('locales/ru/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/ru/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/ru/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/ru');
  QUnit.test('locales/ru/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/ru/translations.js should pass jshint.\nlocales/ru/translations.js: line 40, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/locales/tr/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/tr');
  QUnit.test('locales/tr/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/tr/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/tr/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/tr');
  QUnit.test('locales/tr/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/tr/translations.js should pass jshint.\nlocales/tr/translations.js: line 40, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/locales/zh/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/zh');
  QUnit.test('locales/zh/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'locales/zh/config.js should pass jshint.'); 
  });

});
define('waya/tests/locales/zh/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/zh');
  QUnit.test('locales/zh/translations.js should pass jshint', function(assert) { 
    assert.ok(false, 'locales/zh/translations.js should pass jshint.\nlocales/zh/translations.js: line 40, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/mirage/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage');
  QUnit.test('mirage/config.js should pass jshint', function(assert) { 
    assert.ok(false, 'mirage/config.js should pass jshint.\nmirage/config.js: line 2, col 8, \'userStatus\' is defined but never used.\nmirage/config.js: line 8, col 34, \'request\' is defined but never used.\nmirage/config.js: line 8, col 30, \'db\' is defined but never used.\nmirage/config.js: line 12, col 48, \'request\' is defined but never used.\nmirage/config.js: line 12, col 44, \'db\' is defined but never used.\n\n5 errors'); 
  });

});
define('waya/tests/mirage/scenarios/default.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage/scenarios');
  QUnit.test('mirage/scenarios/default.js should pass jshint', function(assert) { 
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.'); 
  });

});
define('waya/tests/mirage/static-data/countries/countries.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage/static-data/countries');
  QUnit.test('mirage/static-data/countries/countries.js should pass jshint', function(assert) { 
    assert.ok(true, 'mirage/static-data/countries/countries.js should pass jshint.'); 
  });

});
define('waya/tests/mirage/static-data/points/points.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage/static-data/points');
  QUnit.test('mirage/static-data/points/points.js should pass jshint', function(assert) { 
    assert.ok(false, 'mirage/static-data/points/points.js should pass jshint.\nmirage/static-data/points/points.js: line 151, col 2, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/mirage/static-data/tags/tags.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage/static-data/tags');
  QUnit.test('mirage/static-data/tags/tags.js should pass jshint', function(assert) { 
    assert.ok(true, 'mirage/static-data/tags/tags.js should pass jshint.'); 
  });

});
define('waya/tests/mirage/static-data/user-status/user-status.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage/static-data/user-status');
  QUnit.test('mirage/static-data/user-status/user-status.js should pass jshint', function(assert) { 
    assert.ok(true, 'mirage/static-data/user-status/user-status.js should pass jshint.'); 
  });

});
define('waya/tests/models/city.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/city.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/city.js should pass jshint.'); 
  });

});
define('waya/tests/models/country.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/country.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/country.js should pass jshint.'); 
  });

});
define('waya/tests/models/point.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/point.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/point.js should pass jshint.'); 
  });

});
define('waya/tests/models/tag.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/tag.js should pass jshint', function(assert) { 
    assert.ok(false, 'models/tag.js should pass jshint.\nmodels/tag.js: line 13, col 16, \'Ember\' is not defined.\nmodels/tag.js: line 18, col 17, \'Ember\' is not defined.\nmodels/tag.js: line 23, col 20, \'Ember\' is not defined.\n\n3 errors'); 
  });

});
define('waya/tests/models/user-status.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/user-status.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/user-status.js should pass jshint.'); 
  });

});
define('waya/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('waya/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 9, col 55, Missing semicolon.\n\n1 error'); 
  });

});
define('waya/tests/routes/home/about.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/about.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/about.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/contact.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/contact.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/contact.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/onboarding.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/onboarding.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/onboarding.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/overview/all.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home/overview');
  QUnit.test('routes/home/overview/all.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/home/overview/all.js should pass jshint.\nroutes/home/overview/all.js: line 6, col 9, \'tags\' is defined but never used.\nroutes/home/overview/all.js: line 4, col 9, \'params\' is defined but never used.\nroutes/home/overview/all.js: line 19, col 15, \'transition\' is defined but never used.\n\n3 errors'); 
  });

});
define('waya/tests/routes/home/overview/category/sub-category.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home/overview/category');
  QUnit.test('routes/home/overview/category/sub-category.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/home/overview/category/sub-category.js should pass jshint.\nroutes/home/overview/category/sub-category.js: line 23, col 15, \'transition\' is defined but never used.\n\n1 error'); 
  });

});
define('waya/tests/routes/home/overview/category.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home/overview');
  QUnit.test('routes/home/overview/category.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/home/overview/category.js should pass jshint.\nroutes/home/overview/category.js: line 37, col 42, Expected \'===\' and instead saw \'==\'.\nroutes/home/overview/category.js: line 25, col 15, \'transition\' is defined but never used.\n\n2 errors'); 
  });

});
define('waya/tests/routes/home/overview.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/overview.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/home/overview.js should pass jshint.\nroutes/home/overview.js: line 16, col 51, Missing semicolon.\nroutes/home/overview.js: line 4, col 9, \'params\' is defined but never used.\n\n2 errors'); 
  });

});
define('waya/tests/routes/home/participate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/participate.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/participate.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/projects.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/projects.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/projects.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/team.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/team.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/team.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/terms.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/terms.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/terms.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home/values.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/values.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home/values.js should pass jshint.'); 
  });

});
define('waya/tests/routes/home.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/home.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/home.js should pass jshint.'); 
  });

});
define('waya/tests/routes/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 5, col 5, Forgotten \'debugger\' statement?\nroutes/index.js: line 5, col 13, Missing semicolon.\nroutes/index.js: line 10, col 79, Missing semicolon.\n\n3 errors'); 
  });

});
define('waya/tests/serializers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'serializers/application.js should pass jshint.\nserializers/application.js: line 5, col 12, \'Ember\' is not defined.\nserializers/application.js: line 8, col 12, \'Ember\' is not defined.\n\n2 errors'); 
  });

});
define('waya/tests/serializers/point.jshint', function () {

  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/point.js should pass jshint', function(assert) { 
    assert.ok(false, 'serializers/point.js should pass jshint.\nserializers/point.js: line 1, col 8, \'DS\' is defined but never used.\nserializers/point.js: line 6, col 60, \'requestType\' is defined but never used.\nserializers/point.js: line 6, col 56, \'id\' is defined but never used.\n\n3 errors'); 
  });

});
define('waya/tests/serializers/tag.jshint', function () {

  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/tag.js should pass jshint', function(assert) { 
    assert.ok(false, 'serializers/tag.js should pass jshint.\nserializers/tag.js: line 1, col 8, \'DS\' is defined but never used.\nserializers/tag.js: line 6, col 60, \'requestType\' is defined but never used.\nserializers/tag.js: line 6, col 56, \'id\' is defined but never used.\n\n3 errors'); 
  });

});
define('waya/tests/test-helper', ['waya/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('waya/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('waya/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('waya/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/adapters/point-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:point', 'Unit | Adapter | point', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('waya/tests/unit/adapters/point-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/point-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/adapters/point-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/adapters/user-status-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:user-status', 'Unit | Adapter | user status', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('waya/tests/unit/adapters/user-status-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/user-status-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/adapters/user-status-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/controllers/home-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('waya/tests/unit/controllers/home-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/home-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/home-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/controllers/onboarding-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:onboarding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('waya/tests/unit/controllers/onboarding-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/onboarding-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/onboarding-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/models/point-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('point', 'Unit | Model | point', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('waya/tests/unit/models/point-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/point-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/point-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/models/tag-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('tag', 'Unit | Model | tag', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('waya/tests/unit/models/tag-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/tag-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/tag-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/models/user-status-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('user-status', 'Unit | Model | user status', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('waya/tests/unit/models/user-status-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/user-status-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/user-status-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('waya/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/routes/category-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:category', 'Unit | Route | category', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('waya/tests/unit/routes/category-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/category-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/category-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/routes/home-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('waya/tests/unit/routes/home-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/home-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('waya/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/routes/onboarding-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:onboarding', 'Unit | Route | onboarding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('waya/tests/unit/routes/onboarding-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/onboarding-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/onboarding-test.js should pass jshint.'); 
  });

});
define('waya/tests/unit/serializers/point-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('point', 'Unit | Serializer | point', {
    // Specify the other units that are required for this test.
    needs: ['serializer:point']
  });

  // Replace this with your real tests.
  ember_qunit.test('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

});
define('waya/tests/unit/serializers/point-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/point-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/serializers/point-test.js should pass jshint.'); 
  });

});
define('waya/tests/utils/i18n/missing-message.jshint', function () {

  'use strict';

  QUnit.module('JSHint - utils/i18n');
  QUnit.test('utils/i18n/missing-message.js should pass jshint', function(assert) { 
    assert.ok(false, 'utils/i18n/missing-message.js should pass jshint.\nutils/i18n/missing-message.js: line 1, col 38, \'context\' is defined but never used.\n\n1 error'); 
  });

});
define('waya/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, compile_template) {

	'use strict';



	exports['default'] = compile_template['default'];

});
define('waya/utils/i18n/missing-message', ['exports'], function (exports) {

  'use strict';

  exports['default'] = function (locale, key, context) {
    return key;
  }

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('waya/config/environment', ['ember'], function(Ember) {
  var prefix = 'waya';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("waya/tests/test-helper");
} else {
  require("waya/app")["default"].create({"defaultLocale":"en","name":"waya","version":"0.0.0+4a74bf46"});
}

/* jshint ignore:end */
//# sourceMappingURL=waya.map
