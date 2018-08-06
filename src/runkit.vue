<template>
	<div ref="runkit">
	</div>
</template>
<script>
if (!('RunKit' in window) && __DEV__)
	console.warn('consider add <script src="https://embed.runkit.com"><\/script> in html\nthis message won\'t show in production build(min.js version)')

import axios from 'axios'

export default {
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
			type: String
		},
		packageTimestamp: {
			type: Number
		},
		preamble: {
			type: String
		}
	},
	data() {
		return {
			options: Object.assign({}, this.option),
			notebook: null
		}
	},
	async mounted() {
		let opt = {}
		for (var k in this.$props) {
			opt[k] = this.$props[k]
		}
		opt.element = this.$refs.runkit

		this.options.onLoad = notebook => {
			this.$emit('onLoad', this.notebook)
		}
		this.options.onEvaluate = () => {
			this.$emit('onEvaluate', this.notebook)
		}

		if(!('RunKit' in window)){
			let script=document.createElement('script')
			script.src='https://embed.runkit.com/'
			script.onload=()=>{
				this.notebook = window.RunKit.createNotebook(opt)
			}
			document.head.appendChild(script)
		}
		else{
			this.notebook = window.RunKit.createNotebook(opt)
		}
		
	}
}
</script>