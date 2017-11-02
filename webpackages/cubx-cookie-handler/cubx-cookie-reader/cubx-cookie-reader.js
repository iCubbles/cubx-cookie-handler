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

    _readAndSetCookieValue: function (cookieKey) {
      var cookie = this._readCookie(cookieKey);
      this.setCookieValue(cookie);
      if (!cookie) {
        console.warn('The cookie with key=' + cookieKey + ' was not found');
      }
    },

    _readCookie: function (cookieKey) {
      var cookiesArray = this._cookiesStringToArray();
      for (var i = 0; i < cookiesArray.length; i++) {
        var cookieString = this._trimInitialCookieSpaces(cookiesArray[i]);
        if (cookieString.indexOf(cookieKey + '=') === 0) {
          return this._extractValueFromCookieString(cookieKey, cookieString)
        }
      }
      return "";
    },

    _extractValueFromCookieString: function (cookieKey, cookieString) {
      var name = cookieKey + "=";
      return cookieString.substring(name.length, cookieString.length);
    },

    _trimInitialCookieSpaces: function (cookie) {
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      return cookie;
    },

    _cookiesStringToArray: function () {
      var decodedCookie = decodeURIComponent(document.cookie);
      return decodedCookie.split(';');
    }
  });
}());
