(function (w) {
  // Begin doc
  
  var is_dev = false;
  
  if ( false ) {
    is_dev = true;
  }
  
  var disable_sync = false;
  
  if ( true ) {
    disable_sync = true
  }
  
  var globals={load_num:0,init:!1,addr:is_dev?"http://127.0.0.1":"https://east.srv.stackadapt.com",aid:"",impid:"",default_params:"",landing_page:"",secs_passed:0,tec_secs_passed:0,hidden:!1,host:window.location.protocol+"//"+window.location.host,sa_debug_key:"sa_debug"},hidden="hidden",window_status="visible";function onhiddenchange(e){var n="visible",o="hidden",t={focus:n,focusin:n,pageshow:n,blur:o,focusout:o,pagehide:o};e=e||window.event,window_status=e.type in t?t[e.type]:this[hidden]?"hidden":"visible"}hidden in document?document.addEventListener("visibilitychange",onhiddenchange):(hidden="mozHidden")in document?document.addEventListener("mozvisibilitychange",onhiddenchange):(hidden="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",onhiddenchange):(hidden="msHidden")in document?document.addEventListener("msvisibilitychange",onhiddenchange):"onfocusin"in document?document.onfocusin=document.onfocusout=onhiddenchange:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=onhiddenchange,void 0!==document[hidden]&&onhiddenchange({type:document[hidden]?"blur":"focus"});var Cookies=function(e,n,o){return 1===arguments.length?Cookies.get(e):Cookies.set(e,n,o)};function currentLandingURL(){var e=getBasePageUrl(),n=e.split(/\?(.+)?/)[0],o=e.split(/\?(.+)?/)[1]||"prev_window_param=none";return[n=n.replace(/#/g,""),o=o.replace(/#/g,""),e]}function getBasePageUrl(){var e=window.location.ancestorOrigins;if(e&&e.length>1){var n=e[e.length-1];if(n)return n}return window.self!==window.top&&window.document.referrer?window.document.referrer:e&&e[0]?e[0]:window.location.href}function currentLandingURLKeepGet(){if(window.self!==window.top)var e=document.referrer;else e=window.location.href;return e=e.replace(/#/g,"")}function loadConv(e,n){var o=new Image;function t(){document.body.removeChild(o)}if(res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],e){var r=sa_url+"/conv?cid="+e+"&url="+encodeURIComponent(landing_url)+"&is_js=true&rnd="+Math.random();if(n)for(var a in n){var i=n[a];0!=a.indexOf("sa_conv_data_")&&(a="sa_conv_data_"+a),r+="&"+encodeURIComponent(a),r+="="+encodeURIComponent(i)}return current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/conv"),o.onerror=t,o.onload=t,o.src=r,document.body.appendChild(o),!0}}function loadRt(e){return loadRtHelper(sa_url,e),!0}function loadRtHelper(e,n){var o=new Image;function t(){document.body.removeChild(o)}res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],n&&(o.onerror=t,o.onload=t,o.src=e+"/rt?sid="+n+"&url="+encodeURIComponent(landing_url),document.body.appendChild(o),current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/RT"))}function loadLal(e){return loadLalHelper(sa_url,e),!0}function loadLalHelper(e,n){var o=new Image;function t(){document.body.removeChild(o)}res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],n&&(o.onerror=t,o.onload=t,o.src=e+"/lal?sid="+n+"&url="+encodeURIComponent(landing_url),document.body.appendChild(o),current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/LAL"))}function loadDrt(e,n){return loadDrtHelper(sa_url,e,n),!0}function loadDrtHelper(e,n,o){var t=new Image;function r(){document.body.removeChild(t)}landing_url=currentLandingURLKeepGet(),o&&(t.onerror=r,t.onload=r,t.src=e+"/rt?drt=true&sid="+n+"&url="+encodeURIComponent(landing_url)+"&args="+encodeURIComponent(JSON.stringify(o)),document.body.appendChild(t))}function loadTs(e,n){if(loadUniversalPixel(e,n),document.tsPixelLoaded||(document.tsPixelLoaded={}),!document.tsPixelLoaded.sa_pixel_loaded){document.tsPixelLoaded.sa_pixel_loaded=!0;var o="",t="",r="",a=!1;o&&t||(o=Cookies.get("sa_aid_pv"),t=Cookies.get("sa_"+o+"_sid"),r=Cookies.get("sa_"+o+"_adurl"),a=!0),is_dev&&(r="http://127.0.0.1"),r&&!is_dev&&(r.indexOf("eu.srv.stackadapt.com")>-1?globals.addr="https://eu.srv.stackadapt.com":r.indexOf("uw.srv.stackadapt.com")>-1?globals.addr="https://uw.srv.stackadapt.com":globals.addr="https://east.srv.stackadapt.com"),document.referrer||(document.referrer="");document.referrer;if(res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],jsPing(e=e.replace(/#/g,""),o),current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/TS"),o&&t){globals.default_params="aid="+o+"&imp="+t;setInterval(function(){globals.secs_passed>3600||"visible"==window_status&&(globals.secs_passed++,url=globals.addr+"/ifr_ts?"+globals.default_params+"&first=false&is_js=true&host="+globals.host,makeCorsRequest(url))},1e3),a?makeCorsRequest(globals.addr+"/ifr_pv?"+globals.default_params+"&is_js=true&host="+globals.host):(Cookies.set("sa_aid_pv",o,{expires:3600}),Cookies.set("sa_"+o+"_sid",t,{expires:3600}),Cookies.set("sa_"+o+"_adurl",globals.addr,{expires:3600})),makeCorsRequest(globals.addr+"/ifr_ts?"+globals.default_params+"&first=true&is_js=true&host="+globals.host+"&uid="+encodeURIComponent(e))}}}function loadUniversalPixel(e,n){if(e){var o="";if(n)for(var t in n)o+="&"+encodeURIComponent("sa_conv_data_"+t),o+="="+encodeURIComponent(n[t]);landing_url=currentLandingURL()[2],createCORSRequest("GET",(is_dev?globals.addr:"https://tags.srv.stackadapt.com")+"/saq_pxl?uid="+e+"&is_js=true&landing_url="+encodeURIComponent(landing_url)+"&host="+globals.host+o,function(e){},function(e){})}}function loadSyncPixelHelper(e){return sync_pixel_map.forEach(function(n){if(!e[n.partner]){var o="";if("plain"==n.encoding?o="0-2b76ad64-4641-4899-4c24-67b20355c230$ip$180.191.185.28":"b64"==n.encoding&&(o="K3atZEZBSJlMJGeyA1XCMLS_uRw"),o.length>0)try{var t=new Image;function r(){t.parentNode===document.body&&document.body.removeChild(t)}t.onerror=r,t.onload=r,t.src=n.url+o,document.body.appendChild(t)}catch(e){console.log(e)}}}),!0}function jsPing(e,n){var o=currentLandingURL()[0],t="https://tags.srv.stackadapt.com/js_tracking?url="+encodeURIComponent(o)+"&uid="+encodeURIComponent(e)+"&host="+globals.host;is_dev&&(t=globals.addr+"/js_tracking?url="+encodeURIComponent(o)+"&uid="+encodeURIComponent(e)+"&host="+globals.host),n&&(t+="&aid="+n),makeCorsRequest(t)}function createCORSRequest(e,n,o,t){var r;try{r=new XMLHttpRequest}catch(e){}r&&"withCredentials"in r?(r.open(e,n,!0),r.withCredentials=!0):"undefined"!=typeof XDomainRequest?(r=new XDomainRequest).open(e,n):"undefined"!=typeof ActiveXObject?(r=new ActiveXObject("Microsoft.XMLHTTP")).open(e,n):r=null,r&&(r.onload=function(){o(r)},r.onerror=function(){t(r)},setTimeout(function(){r.send()},0))}function makeCorsRequest(e){createCORSRequest("GET",e,function(e){},function(e){})}function getCSSValue(){return new Promise(function(e){if(document.getElementById("sa-css"))return e(window.getComputedStyle(document.head).getPropertyValue("--sa-uid"));var n=document.createElement("link");n.id="sa-css",n.rel="stylesheet",n.type="text/css",n.href="https://tags.srv.stackadapt.com/sa.css",n.media="all",n.onload=function(){var n=window.getComputedStyle(document.head).getPropertyValue("--sa-uid");return e(n)},n.onerror=function(){return e("")},document.head.appendChild(n)})}function getImageValue(){return new Promise(function(e){return fetch("https://tags.srv.stackadapt.com/sa.jpeg").then(function(e){return e.blob()}).then(function(n){var o=new FileReader;o.onload=function(){var n=this.result,o=n.indexOf(","),t=n.substr(o+1),r=window.atob(t);return e(ascii_to_hexa(r))},o.readAsDataURL(n)}).catch(function(){return e("")})})}function ascii_to_hexa(e){for(var n=[],o=0,t=e.length;o<t;o++){var r=e.charCodeAt(o).toString(16);1===r.length&&(r="0"+r),n.push(r)}return n.join("")}function detectIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return parseInt(e.substring(n+5,e.indexOf(".",n)),10);if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var t=e.indexOf("Edge/");return t>0&&parseInt(e.substring(t+5,e.indexOf(".",t)),10)}Cookies._document=document,Cookies._navigator=navigator,Cookies.defaults={path:"/"},Cookies.get=function(e){return Cookies._cachedDocumentCookie!==Cookies._document.cookie&&Cookies._renewCache(),Cookies._cache[e]},Cookies.set=function(e,n,o){return(o=Cookies._getExtendedOptions(o)).expires=Cookies._getExpiresDate(void 0===n?-1:o.expires),Cookies._document.cookie=Cookies._generateCookieString(e,n,o),Cookies},Cookies.expire=function(e,n){return Cookies.set(e,void 0,n)},Cookies._getExtendedOptions=function(e){return{path:e&&e.path||Cookies.defaults.path,domain:e&&e.domain||Cookies.defaults.domain,expires:e&&e.expires||Cookies.defaults.expires,secure:e&&void 0!==e.secure?e.secure:Cookies.defaults.secure}},Cookies._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},Cookies._getExpiresDate=function(e,n){switch(n=n||new Date,typeof e){case"number":e=new Date(n.getTime()+1e3*e);break;case"string":e=new Date(e)}if(e&&!Cookies._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},Cookies._generateCookieString=function(e,n,o){var t=(e=(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(n=(n+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return t+=(o=o||{}).path?";path="+o.path:"",t+=o.domain?";domain="+o.domain:"",t+=o.expires?";expires="+o.expires.toUTCString():"",t+=o.secure?";secure":""},Cookies._getCookieObjectFromString=function(e){for(var n={},o=e?e.split("; "):[],t=0;t<o.length;t++){var r=Cookies._getKeyValuePairFromCookieString(o[t]);void 0===n[r.key]&&(n[r.key]=r.value)}return n},Cookies._getKeyValuePairFromCookieString=function(e){var n=e.indexOf("=");n=n<0?e.length:n;try{return{key:decodeURIComponent(e.substr(0,n)),value:decodeURIComponent(e.substr(n+1))}}catch(o){return{key:decodeURIComponent(e.substr(0,n)),value:e.substr(n+1)}}},Cookies._renewCache=function(){Cookies._cache=Cookies._getCookieObjectFromString(Cookies._document.cookie),Cookies._cachedDocumentCookie=Cookies._document.cookie};var _this=void 0;function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,n):void 0}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}function _iterableToArrayLimit(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],t=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(o.push(i.value),!n||o.length!==n);t=!0);}catch(e){r=!0,a=e}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}try{var sa_url="https://srv.stackadapt.com",sa_url_uw="https://uw.srv.stackadapt.com",sa_url_eu="https://eu.srv.stackadapt.com",sync_pixel_map=[];is_dev&&(sa_url="http://127.0.0.1",sa_url_uw="http://192.168.50.5",sa_url_eu="http://192.168.50.6");var sa_params=w.saq,bus=Array.prototype.slice,landing_url=currentLandingURL()[0],blacklisted_partners={};disable_sync||loadSyncPixelHelper(blacklisted_partners),sa_params.callMethod=function(e){var n=bus.call(arguments);if(1===n.length&&"undefined"!=typeof i&&i.isArray(n[0])&&(n=n[0]),"conv"!=(e=n.shift())&&"ts"!=e)switch(e){case"rt":return loadRt.apply(this,n);case"drt":return loadDrt.apply(this,n);case"lal":return loadLal.apply(this,n);default:console.log("unknown function")}else{var o=detectIE();if(!1===o||o>11){var t=new Promise(function(e){return setTimeout(e,500)}),r=Promise.all([getCSSValue(),getImageValue()]).then(function(e){var o=_slicedToArray(e,2),t=o[0],r=o[1];n.length>1?(n[1].css_value=t,n[1].image_value=r):n.push({css_value:t,image_value:r})});Promise.race([t,r]).then(function(){switch(e){case"conv":return loadConv.apply(_this,n);case"ts":return loadTs.apply(_this,n);default:console.log("unknown function")}})}else switch(e){case"conv":return loadConv.apply(this,n);case"ts":return loadTs.apply(this,n);default:console.log("unknown function")}}};for(var x=sa_params.queue.slice(),y=0,z=x.length;y<z;y++)sa_params.callMethod.apply(sa_params,x[y])}catch(e){console.log(e.stack)}
  // End doc
  })(window,document,location,history);