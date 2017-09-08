goog.provide('webfont.modules.Monotype');

goog.require('webfont.Font');

/**
webfont.load({
monotype: {
projectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'//this is your Fonts.com Web fonts projectId
}
});
*/

/**
 * @constructor
 * @implements {webfont.FontModule}
 */
webfont.modules.Monotype = function (domHelper, configuration) {
  this.domHelper_ = domHelper;
  this.configuration_ = configuration;
};

/**
 * name of the module through which external API is supposed to call the MonotypeFontAPI.
 *
 * @const
 * @type {string}
 */
webfont.modules.Monotype.NAME = 'monotype';

/**
 * __mti_fntLst is the name of function that exposes Monotype's font list.
 * @const
 */
webfont.modules.Monotype.HOOK = '__mti_fntLst';

/**
 * __MonotypeAPIScript__ is the id of script added by google API. Currently 'webfonts.fonts.com' supports only one script in a page.
 * This may require change in future if 'webfonts.fonts.com' begins supporting multiple scripts per page.
 * @const
 */
webfont.modules.Monotype.SCRIPTID = '__MonotypeAPIScript__';

goog.scope(function () {
  var Monotype = webfont.modules.Monotype,
      Font = webfont.Font;

  Monotype.prototype.getScriptSrc = function (projectId, version) {
    var p = this.domHelper_.getProtocol();
    var api = (this.configuration_['api'] || 'fast.fonts.net/jsapi').replace(/^.*http(s?):(\/\/)?/, "");
    return p + "//" + api + '/' + projectId + '.js' + ( version ? '?v='+ version : '' );
  };

  Monotype.prototype.load = function (onReady) {
    var self = this;
    var projectId = self.configuration_['projectId'];
    var version = self.configuration_['version'];

    if (projectId) {
      var loadWindow = self.domHelper_.getLoadWindow();

      var script = this.domHelper_.loadScript(self.getScriptSrc(projectId, version), function (err) {
        if (err) {
          onReady([]);
        } else {
          if (loadWindow[Monotype.HOOK + projectId]) {
            var mti_fnts = loadWindow[Monotype.HOOK + projectId](),
                fonts = [];

            if (mti_fnts) {
              for (var i = 0; i < mti_fnts.length; i++) {
                fonts.push(new Font(mti_fnts[i]["fontfamily"]));
              }
            }
            onReady(fonts);
          } else {
            onReady([]);
          }
        }
      });
      script["id"] = Monotype.SCRIPTID + projectId;
    } else {
      onReady([]);
    }
  };
});
