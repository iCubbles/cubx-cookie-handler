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
     *  Observe the Cubbles-Component-Model: If value for slot 'readAllCookies' has changed ...
     */
    modelReadAllCookiesChanged: function (readAllCookies) {
      if (readAllCookies) {
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
      };
    },

    _extractValueFromCookieString: function (cookieString) {
      return this._decodeAndCleanString(cookieString.substr(cookieString.indexOf('=') + 1, cookieString.length));
    },

    _extractKeyFromCookieString: function (cookieString) {
      return this._decodeAndCleanString(cookieString.substr(0, cookieString.indexOf('=')));
    },

    _readAndSetCookieValue: function (cookieKey) {
      var cookieValue = decodeURIComponent(this._readCookie(encodeURIComponent(cookieKey)));
      if (cookieValue !== undefined) {
        this.setReadCookie({key: cookieKey, value: cookieValue});
      } else {
        this.setReadCookie(undefined);
        console.warn('The cookie with key=' + cookieKey + ' was not found');
      }
    },

    _readCookie: function (cookieKey) {
      var regExp = new RegExp('(?:(?:^|.*;\\s*)' + cookieKey + '\\s*\\=\\s*([^;]*).*$)|^.*$');
      return regExp.exec(document.cookie)[1];
    },

    _cookiesStringToArray: function (cookiesString) {
      return cookiesString.split(';');
    },

    _trimInitialCookieSpaces: function (cookieString) {
      while (cookieString.charAt(0) === ' ') {
        cookieString = cookieString.substring(1);
      }
      return cookieString;
    },

    _decodeAndCleanString: function (string) {
      var cleanedString = this._trimInitialCookieSpaces(string);
      return decodeURIComponent(cleanedString);
    }
  });
}());
