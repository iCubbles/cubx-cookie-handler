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
    is: 'cubx-cookie-handler',

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
     *  Observe the Cubbles-Component-Model: If value for slot 'cookieAsObject' has changed ...
     */
    modelCookieAsObjectChanged: function (cookieAsObject) {
      this._setCookieFromObject(cookieAsObject);
    },

    _setLastCookieFromObject: function (cookieAsObject) {
      this.setLastCookie({
        asObject: cookieAsObject,
        asString: this._getCookieAsString(cookieAsObject)
      });
    },

    _setCookieFromObject: function (cookieObject) {
      if (this._validCookieObject(cookieObject)) {
        this._setCookie(this._getCookieAsString(cookieObject, true));
        this._setLastCookieFromObject(cookieObject);
      } else {
        this._logError('Invalid cookieObject. It should have following structure: ' +
          '{ key: string, value: string }.', cookieObject)
      }
    },

    _getCookieAsString: function (cookieObject, encode) {
      var value = encode ? encodeURIComponent(JSON.stringify(cookieObject.value)): JSON.stringify(cookieObject.value);
      return cookieObject.key + '=' +  value;
    },


    _setCookie: function (cookie) {
      document.cookie = cookie;
    },

    _validCookieObject: function (cookieObject) {
      return cookieObject && cookieObject.hasOwnProperty('key') && cookieObject.hasOwnProperty('value')
        && typeof cookieObject.key === 'string';
    },

    _logError: function (message, involvedObject) {
      console.error(message, involvedObject || '')
    }
  });
}());
