cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "branch-cordova-sdk.Branch",
    "file": "plugins/branch-cordova-sdk/src/branch.js",
    "pluginId": "branch-cordova-sdk",
    "clobbers": [
      "Branch"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
    "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
    "pluginId": "cordova-plugin-facebook4",
    "clobbers": [
      "facebookConnectPlugin"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "branch-cordova-sdk": "2.6.15",
  "cordova-plugin-crosswalk-webview": "2.3.0",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-facebook4": "1.7.1",
  "cordova-plugin-inappbrowser": "1.6.1",
  "cordova-plugin-ios-no-export-compliance": "0.0.2",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-whitelist": "1.3.1",
  "cordova-plugin-x-socialsharing": "5.1.5",
  "es6-promise-plugin": "4.1.0",
  "cordova-plugin-statusbar": "2.2.4-dev"
};
// BOTTOM OF METADATA
});