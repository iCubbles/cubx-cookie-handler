(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxPolymer({
    is: 'cubx-cookie-reader',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'cookieKey' has changed ...
     */
    modelCookieKeyChanged: function (cookieKey) {
      this._readAndSetCookieValue(cookieKey);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'updateAllCookies' has changed ...
     */
    modelUpdateAllCookiesChanged: function (updateAllCookies) {
      if (updateAllCookies) {
        this.setAllCookies(this._readAllCookies());
      }
    },

    _readAllCookies: function () {
      var cookiesArray = this._cookiesStringToArray(document.cookie);
      return cookiesArray.map(this._cookieStringToObject.bind(this));
    },

    _cookieStringToObject: function (cookieString) {
      return {
        key: this._extractKeyFromCookieString(cookieString),
        value: this._extractValueFromCookieString(cookieString)
      }
    },

    _extractValueFromCookieString: function (cookieString) {
      return cookieString.substr(cookieString.indexOf('=') + 1, cookieString.length);
    },

    _extractKeyFromCookieString: function (cookieString) {
      return cookieString.substr(0, cookieString.indexOf('='));
    },

    _readAndSetCookieValue: function (cookieKey) {
      var cookie = this._readCookie(cookieKey);
      this.setCookieValue(cookie);
      if (!cookie) {
        console.warn('The cookie with key=' + cookieKey + ' was not found');
      }
    },

    _readCookie: function (cookieKey) {
      return document.cookie.replace(new RegExp('(?:(?:^|.*;\\s*)' + cookieKey + '\\s*\\=\\s*([^;]*).*$)|^.*$'), "$1");
    },

    _trimInitialCookieSpaces: function (cookie) {
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      return cookie;
    },

    _cookiesStringToArray: function (cookiesString) {
      var decodedCookie = decodeURIComponent(cookiesString);
      return decodedCookie.split(';');
    }
  });
}());
