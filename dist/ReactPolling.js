!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],n):"object"==typeof exports?exports.ReactPolling=n(require("prop-types"),require("react")):t.ReactPolling=n(t["prop-types"],t.react)}(window,function(t,n){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(n,e){n.exports=t},function(t,e){t.exports=n},function(t,n,e){"use strict";e.r(n);var o=e(1),r=e.n(o),i=e(0),l=e.n(i);var u=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={isPolling:!1},e.initConfig(n),e}!function(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}(n,t);var e=n.prototype;return e.initConfig=function(t){var n=t.url,e=t.interval,o=t.retryCount,r=t.onSuccess,i=t.onFailure,l=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,["url","interval","retryCount","onSuccess","onFailure"]);e=Number(e),o=Number(o),this.config={url:n,interval:e,shouldRetry:!!o,retryCount:o,onSuccess:r,onFailure:i,api:l}},e.stopPolling=function(){if(this._ismounted){this.poll&&(clearTimeout(this.poll),this.poll=null),this.setState({isPolling:!1})}},e.startPolling=function(){if(!this.config.url)throw new Error("No url provided to poll. Please provide a config object with the url param set");this.setState({isPolling:!0}),this.runPolling()},e.runPolling=function(){var t=this.config,n=t.url,e=t.interval,o=t.onSuccess,r=t.onFailure,i=t.api,l=this;this.poll=setTimeout(function(){fetch(n,i).then(function(t){return t.json().then(function(n){return t.ok?n:Promise.reject({status:t.status,data:n})})}).then(o).then(function(t){l.state.isPolling&&t?l.runPolling():l.stopPolling()}).catch(function(t){l.config.shouldRetry&&l.config.retryCount>0?(r&&r(t),l.config.retryCount--,l.runPolling()):(r&&r(t),l.stopPolling())})},e)},e.componentDidMount=function(){this._ismounted=!0,this.startPolling()},e.render=function(){return this.props.render?this.props.render({startPolling:this.startPolling,stopPolling:this.stopPolling,isPolling:this.state.isPolling}):this.props.children({startPolling:this.startPolling,stopPolling:this.stopPolling,isPolling:this.state.isPolling})},e.componentWillUnmount=function(){this.stopPolling(),this._ismounted=!1},n}(r.a.Component);u.propTypes={url:l.a.string,interval:l.a.number,retryCount:l.a.number,onSuccess:l.a.func.isRequired,onFailure:l.a.func,headers:l.a.object,method:l.a.string,body:l.a.object,render:l.a.func,children:l.a.func},u.defaultProps={interval:3e3,retryCount:0,onFailure:function(){},method:"GET"};var s=u;n.default=s}])});
//# sourceMappingURL=ReactPolling.js.map