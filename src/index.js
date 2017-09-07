import runkit from './runkit'
export default runkit
//export to window in included in browser
if (typeof window !== 'undefined' && typeof process === 'undefined')
	window.vuerunkit = runkit