(this["webpackJsonpall-in-one"]=this["webpackJsonpall-in-one"]||[]).push([[15],{1116:function(n,e,t){"use strict";function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),a.forEach((function(e){i(n,e,t[e])}))}return n}t.r(e);var o={writeKey:null,disableAnonymousTraffic:!1,syncAnonymousId:!1};var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:"segment",config:a({},o,n),methods:{group:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;"undefined"!==typeof window.analytics&&window.analytics.group(n,e,t,i)}},bootstrap:function(n){var e=n.config,t=n.instance;e.disableAnonymousTraffic&&!t.user("userId")&&t.once("identifyStart",(function(n){n.plugins.segment.loaded()||t.loadPlugin("segment")}))},initialize:function(n){var e=n.config,t=n.instance,i=(n.payload,e.disableAnonymousTraffic),a=e.writeKey,o=e.customScriptSrc;if(!a)throw new Error("No segment writeKey");if(!t.user("userId")&&i)return!1;!function(){var n=window.analytics=window.analytics||[];if(!n.initialize&&!function(){var n=document.getElementsByTagName("script"),e=o||"cdn.segment.com/analytics.js/v1/";return!!Object.keys(n).filter((function(t){return((n[t]||{}).src||"").indexOf(e)>-1})).length}()){n.invoked=!0,n.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],n.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(e),n.push(t),n}};for(var e=0;e<n.methods.length;e++){var t=n.methods[e];n[t]=n.factory(t)}n.load=function(e,t){var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=o||"https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js",i.id="segment-io";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a),n._loadOptions=t},n.SNIPPET_VERSION="4.1.0",n.load(a)}}()},page:function(n){var e=n.payload;"undefined"!==typeof analytics&&analytics.page(e.properties)},track:function(n){var e=n.payload;"undefined"!==typeof analytics&&analytics.track(e.event,e.properties,e.options)},identify:function(n){var e=n.payload;if("undefined"!==typeof analytics){var t=e.userId,i=e.traits;"string"===typeof t?analytics.identify(t,i):analytics.identify(i)}},reset:function(){analytics.reset()},ready:function(n){var e=n.instance;if(n.config.syncAnonymousId&&"undefined"!==typeof analytics){var t=analytics.user();if(t){var i=t.anonymousId(),a=e.user("anonymousId");i&&i!==a&&e.setAnonymousId(i)}}},loaded:function(){return window.analytics&&!!analytics.initialized}}};e.default=r}}]);