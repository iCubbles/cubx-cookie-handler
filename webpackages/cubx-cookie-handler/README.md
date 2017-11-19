## cubx-cookie-handler
This webpackage contains the necessary Cubbles components for managing cookies in the browser.
### Webpackage Artifacts
| Name | Type | Description | Links |
|---|---|---|---|
| **docs** | Application | Generated webpackage documentation. | [docs](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/docs/index.html) |
| **cubx-cookie-writer** | Elementary Component | This component allows writing cookies in client-side | [demo](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-writer/demo/index.html) [docs](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-writer/docs/index.html) |
| **cubx-cookie-reader** | Elementary Component | This component allows reading cookies in client-side | [demo](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-reader/demo/index.html) [docs](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-reader/docs/index.html) |
| **cubx-cookie-deleter** | Elementary Component | Component to delete cookies in client-side | [demo](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-deleter/demo/index.html) [docs](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-deleter/docs/index.html) |
| **cubx-cookie-handler** | Compound Component | Compound component to manage cookies | [demo](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-handler/demo/index.html) [docs](https://cubbles.world/shared/cubx-cookie-handler@1.0.0/cubx-cookie-handler/docs/index.html) |
### Use of components
The html file should contain the desire component using its tag, e.g. the `<cubx-cookie-writer>`, as follows:
```html
<cubx-cookie-writer cubx-webpackage-id="cubx-cookie-handler@1.0.0"></cubx-cookie-writer>
```
Note that the `webpackageId` should be provided as attribute, which in this case is: `cubx-cookie-handler@1.0.0`.

Additionally, this component can be initialized using the `<cubx-core-slot-init>` tag (available from _cubx.core.rte@1.9.0_).
For example, lets initialize the `cookie` slot to get the basic package of ckeditor:

```html
<cubx-cookie-writer cubx-webpackage-id="cubx-cookie-handler@1.0.0">
    <!--Initilization-->
    <cubx-core-init style="display:none">
        <cubx-core-slot-init slot="cookie">{"key": "cookieKey", "value": "cookieValue"}</cubx-core-slot-init>
    </cubx-core-init>
</cubx-cookie-writer>
```

Or it can be initialized and later manipulated from Javascript as follows:

```javascript
var component= document.querySelector('cubx-cookie-writer');
// Wait until CIF is ready
document.addEventListener('cifReady', function() {
  // Manipulate slots
  component.setCookie({"key": "cookieKey", "value": "cookieValue"});
});
```

[Want to get to know the Cubbles Platform?](https://cubbles.github.io)
