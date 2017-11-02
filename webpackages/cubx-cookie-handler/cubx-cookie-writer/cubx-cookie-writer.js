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
    is: 'cubx-cookie-writer',

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
     *  Observe the Cubbles-Component-Model: If value for slot 'cookie' has changed ...
     */
    modelCookieChanged: function (cookie) {
      this._setCookieFromObject(cookie);
    },

    _setCookieFromObject: function (cookieObject) {
      if (this._isValidCookieObject(cookieObject)) {
        this._setCookie(this._getCookieAsString(cookieObject, true));
      } else {
        this._logError('Invalid cookieObject. It should have following structure: ' +
          '{ key: string, value: string }.', cookieObject)
      }
    },

    _getCookieAsString: function (cookieObject, encode) {
      if (typeof cookieObject.value !== "string") {
        cookieObject.value = JSON.stringify(cookieObject.value);
      }
      if (encode) {
        cookieObject = this._encodeCookieObject(cookieObject);
      }
      return cookieObject.key + '=' +  cookieObject.value;
    },

    _encodeCookieObject: function (cookieObject) {
      cookieObject.value = encodeURIComponent(cookieObject.value);
      return cookieObject
    },

    _setCookie: function (cookie) {
      document.cookie = cookie;
    },

    _isValidCookieObject: function (cookieObject) {
      return cookieObject && cookieObject.hasOwnProperty('key') && cookieObject.hasOwnProperty('value')
        && typeof cookieObject.key === 'string';
    },

    _logError: function (message, involvedObject) {
      console.error(message, involvedObject || '')
    }
  });
}());
