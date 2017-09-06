<template>
	<div ref="runkit">
	</div>
</template>
<script>
if (!('RunKit' in window))
	throw new Error('RunKit script required! <script src="https://embed.runkit.com"><\/script>')
const Runkit = window.RunKit
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
			type: Number
		},
		packageTimestamp: {
			type: Number
		},
		preamble: {
			type: Boolean
		}
	},
	data() {
		return {
			options: Object.assign({}, this.option),
			notebook: null
		}
	},
	mounted() {
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

		this.notebook = Runkit.createNotebook(opt)
	}
}
</script>