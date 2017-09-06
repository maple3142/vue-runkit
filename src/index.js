import runkit from './runkit'
if (typeof window !== 'undefined' && !('vuerunkit' in window))
	window.vuerunkit = runkit
export default runkit