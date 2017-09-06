vue-runkit
==========
vue wrapper of [runkit embed](https://runkit.com/docs/embed)

in browser
----------
```html
<script src="https://embed.runkit.com"></script>
<script src="https://unpkg.com/vue-runkit/dist/vue-runkit.min.js"></script>
```
```javascript
Vue.component('runkit',window.vuerunkit)
//then create you vue app...
var app=new Vue({
	//.....
})
```
[example](https://unpkg.com/vue-runkit/example.html)

with webpack
----------
index.html
```html
<script src="https://embed.runkit.com"></script>
```
then

```npm install --save-dev vue-runkit``` or ```yarn add -D vue-runkit```
```javascript
import runkit from 'vue-runkit'
export default {
	components: {runkit}
	//else...
}
```