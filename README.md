vue-runkit
==========
vue wrapper of [runkit embed](https://runkit.com/docs/embed)

### please include `<script src="https://embed.runkit.com"></script>` to use. *(webpack and browser)*


use in browser
----------
```html
<script src="https://unpkg.com/vue-runkit/dist/vue-runkit.min.js"></script>
```
```javascript
Vue.component('runkit',window.vuerunkit)
//then create you vue app...
var app=new Vue({
	//.....
})
```
[example.html](https://unpkg.com/vue-runkit/example.html)

with webpack
----------
then

```npm install --save-dev vue-runkit``` or ```yarn add -D vue-runkit```
```javascript
import runkit from 'vue-runkit'
export default {
	components: {runkit}
	//else...
}
```

props
----------
[apidoc](https://runkit.com/docs/embed#options)

```javascript
props: {
	source: {
		type: String
	},
	readOnly: {
		type: Boolean
	},
	mode: {
		type: String
	},
	nodeVersion: {
		type: String
	},
	env: {
		type: Array
	},
	title: {
		type: String
	},
	minHeight: {
		type: Number
	},
	packageTimestamp: {
		type: Number
	},
	preamble: {
		type: Boolean
	}
}
```

**due to [html attributes limit](https://vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case), camelCase prop should be convert to kebab-case**

example: `readOnly` => `read-only`

```html
<runkit source="process.env.testvar" :env="['testvar=123']" :node-version="8.3.0"/>
```

events
-----------
`onLoad` and `onEvaluate`
```html
<runkit @onLoad="onLoad" @onEvaluate="onEvaluate"/>
```
<span id="eventjs"></span>
```javascript
new Vue({
	//skip...
	methods: {
		onLoad(notebook){
			//doSomething...
		},
		onEvaluate(notebook){
			//doSomething...
		}
	}
})
```

notebook object
----------------
[apidoc](https://runkit.com/docs/embed#api)

1. can be access with `ref`
```html
<runkit ref="runkit"/>
```
```javascript
new Vue({
	//skip....
	mounted(){
		let notebook=this.$refs.runkit.notebook
		//doSomething...
	}
})
```

2. access from events

	[see here](#eventjs)