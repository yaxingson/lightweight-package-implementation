interface IPubSub {
	publish():void
	publishSync():void
	subscribe():void
	subscribeAll():void
	subscribeOnce():void
	clearAllSubscriptions():void
	clearSubscriptions():void
	countSubscriptions():void
	getSubscriptions():void
	unsubscribe():void

}

(function(root, factory) {
	const PubSub = {}



})((typeof window === 'object' && window) || this || globalThis, function(PubSub:IPubSub) {
	PubSub.publish = function() {}
 	PubSub.publishSync = function() {}
	PubSub.subscribe = function() {}
	PubSub.subscribeAll = function() {}
	PubSub.subscribeOnce = function() {}
	PubSub.clearAllSubscriptions = function() {}
	PubSub.clearSubscriptions = function() {}
	PubSub.countSubscriptions = function() {}
	PubSub.getSubscriptions = function() {}
	PubSub.unsubscribe = function() {}
})
