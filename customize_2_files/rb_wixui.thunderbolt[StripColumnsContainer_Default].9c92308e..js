!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[StripColumnsContainer_Default]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[StripColumnsContainer_Default]"]=t(require("react")):e["rb_wixui.thunderbolt[StripColumnsContainer_Default]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";a.r(n),a.d(n,{components:function(){return Jt}});var e={};a.r(e),a.d(e,{STATIC_MEDIA_URL:function(){return Qe},ph:function(){return qe}});var t=a(448),i=a.n(t),r=a(5329),o=a.n(r);function c(e){var t,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=c(e[t]))&&(a&&(a+=" "),a+=i);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var s=function(){for(var e,t,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(t=c(e))&&(a&&(a+=" "),a+=t);return a};const h=13,d=27;function l(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}l(32),l(h),l(d);const u="wixui-",g=(e,...t)=>{const i=[];return e&&i.push(`${u}${e}`),t.forEach((e=>{e&&(i.push(`${u}${e}`),i.push(e))})),i.join(" ")};var m="HlRz5e";const _="v1",p=2,f=1920,T=1920,I=1e3,E=1e3,L={SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},A={FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},b={CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},w={[b.CENTER]:{x:.5,y:.5},[b.TOP_LEFT]:{x:0,y:0},[b.TOP_RIGHT]:{x:1,y:0},[b.TOP]:{x:.5,y:0},[b.BOTTOM_LEFT]:{x:0,y:1},[b.BOTTOM_RIGHT]:{x:1,y:1},[b.BOTTOM]:{x:.5,y:1},[b.RIGHT]:{x:1,y:.5},[b.LEFT]:{x:0,y:.5}},O={center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},y={BG:"bg",IMG:"img",SVG:"svg"},M={AUTO:"auto",CLASSIC:"classic",SUPER:"super"},R={classic:1,super:2},G={radius:"0.66",amount:"1.00",threshold:"0.01"},C={uri:"",css:{img:{},container:{}},attr:{img:{},container:{}},transformed:!1},S=25e6,N=[1.5,2,4],P={HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},F={HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},v={CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},x={JPG:"jpg",JPEG:"jpeg",JPE:"jpe",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},k={AVIF:"AVIF",PAVIF:"PAVIF"};x.JPG,x.JPEG,x.JPE,x.PNG,x.GIF,x.WEBP;function $(e,...t){return function(...i){const a=i[i.length-1]||{},n=[e[0]];return t.forEach((function(t,r){const o=Number.isInteger(t)?i[t]:a[t];n.push(o,e[r+1])})),n.join("")}}function H(e){return e[e.length-1]}const B=[x.PNG,x.JPEG,x.JPG,x.JPE,x.WIX_ICO_MP,x.WIX_MP,x.WEBP],Y=[x.JPEG,x.JPG,x.JPE];function U(e,t,i){return i&&t&&!(!(a=t.id)||!a.trim()||"none"===a.toLowerCase())&&Object.values(L).includes(e);var a}function D(e,t,i){return function(e,t,i=!1){return!(j(e)&&t&&!i)}(e,t,i)&&(function(e){return B.includes(X(e))}(e)||function(e,t=!1){return V(e)&&t}(e,i))&&!/(^https?)|(^data)|(^\/\/)/.test(e)}function z(e){return X(e)===x.PNG}function j(e){return X(e)===x.WEBP}function V(e){return X(e)===x.GIF}const W=["/","\\","?","<",">","|","\u201c",":",'"'].map(encodeURIComponent),Z=["\\.","\\*"],q="_";function J(e){return function(e){return Y.includes(X(e))}(e)?x.JPG:z(e)?x.PNG:j(e)?x.WEBP:V(e)?x.GIF:x.UNRECOGNIZED}function X(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||"").toLowerCase()}function Q(e,t,i,a,n){let r;return r=n===A.FILL?function(e,t,i,a){return Math.max(i/e,a/t)}(e,t,i,a):n===A.FIT?function(e,t,i,a){return Math.min(i/e,a/t)}(e,t,i,a):1,r}function K(e,t,i,a,n,r){e=e||a.width,t=t||a.height;const{scaleFactor:o,width:c,height:s}=function(e,t,i,a,n){let r,o=i,c=a;if(r=Q(e,t,i,a,n),n===A.FIT&&(o=e*r,c=t*r),o&&c&&o*c>S){const i=Math.sqrt(S/(o*c));o*=i,c*=i,r=Q(e,t,o,c,n)}return{scaleFactor:r,width:o,height:c}}(e,t,a.width*n,a.height*n,i);return function(e,t,i,a,n,r,o){const{optimizedScaleFactor:c,upscaleMethodValue:s,forceUSM:h}=function(e,t,i,a){if("auto"===a)return function(e,t){const i=ae(e,t);return{optimizedScaleFactor:P[i].maxUpscale,upscaleMethodValue:R.classic,forceUSM:!1}}(e,t);if("super"===a)return function(e){return{optimizedScaleFactor:H(N),upscaleMethodValue:R.super,forceUSM:!(N.includes(e)||e>H(N))}}(i);return function(e,t){const i=ae(e,t);return{optimizedScaleFactor:P[i].maxUpscale,upscaleMethodValue:R.classic,forceUSM:!1}}(e,t)}(e,t,r,n);let d=i,l=a;if(r<=c)return{width:d,height:l,scaleFactor:r,upscaleMethodValue:s,forceUSM:h,cssUpscaleNeeded:!1};switch(o){case A.FILL:d=i*(c/r),l=a*(c/r);break;case A.FIT:d=e*c,l=t*c}return{width:d,height:l,scaleFactor:c,upscaleMethodValue:s,forceUSM:h,cssUpscaleNeeded:!0}}(e,t,c,s,r,o,i)}function ee(e,t,i,a){const n=ie(i)||function(e=b.CENTER){return w[e]}(a);return{x:Math.max(0,Math.min(e.width-t.width,n.x*e.width-t.width/2)),y:Math.max(0,Math.min(e.height-t.height,n.y*e.height-t.height/2)),width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}}function te(e){return e.alignment&&O[e.alignment]||O[b.CENTER]}function ie(e){let t;return!e||"number"!=typeof e.x||isNaN(e.x)||"number"!=typeof e.y||isNaN(e.y)||(t={x:ne(Math.max(0,Math.min(100,e.x))/100,2),y:ne(Math.max(0,Math.min(100,e.y))/100,2)}),t}function ae(e,t){const i=e*t;return i>P[F.HIGH].size?F.HIGH:i>P[F.MEDIUM].size?F.MEDIUM:i>P[F.LOW].size?F.LOW:F.TINY}function ne(e,t){const i=Math.pow(10,t||0);return(e*i/i).toFixed(t)}function re(e){return e&&e.upscaleMethod&&M[e.upscaleMethod.toUpperCase()]||M.AUTO}function oe(e,t){return X(e)===x.GIF||X(e)===x.WEBP&&t}const ce={isMobile:!1},se=function(e){return ce[e]};function he(){if("undefined"!=typeof window&&"undefined"!=typeof navigator){const t=window.matchMedia&&window.matchMedia("(max-width: 767px)").matches,i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e=t&&i,ce["isMobile"]=e}var e}function de(e,t){const i={css:{container:{}}},{css:a}=i,{fittingType:n}=e;switch(n){case L.ORIGINAL_SIZE:case L.LEGACY_ORIGINAL_SIZE:case L.LEGACY_STRIP_ORIGINAL_SIZE:a.container.backgroundSize="auto",a.container.backgroundRepeat="no-repeat";break;case L.SCALE_TO_FIT:case L.LEGACY_STRIP_SCALE_TO_FIT:a.container.backgroundSize="contain",a.container.backgroundRepeat="no-repeat";break;case L.STRETCH:a.container.backgroundSize="100% 100%",a.container.backgroundRepeat="no-repeat";break;case L.SCALE_TO_FILL:case L.LEGACY_STRIP_SCALE_TO_FILL:a.container.backgroundSize="cover",a.container.backgroundRepeat="no-repeat";break;case L.TILE_HORIZONTAL:case L.LEGACY_STRIP_TILE_HORIZONTAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-x";break;case L.TILE_VERTICAL:case L.LEGACY_STRIP_TILE_VERTICAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-y";break;case L.TILE:case L.LEGACY_STRIP_TILE:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat";break;case L.LEGACY_STRIP_FIT_AND_TILE:a.container.backgroundSize="contain",a.container.backgroundRepeat="repeat";break;case L.FIT_AND_TILE:case L.LEGACY_BG_FIT_AND_TILE:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat";break;case L.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-x";break;case L.LEGACY_BG_FIT_AND_TILE_VERTICAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-y";break;case L.LEGACY_BG_NORMAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="no-repeat"}switch(t.alignment){case b.CENTER:a.container.backgroundPosition="center center";break;case b.LEFT:a.container.backgroundPosition="left center";break;case b.RIGHT:a.container.backgroundPosition="right center";break;case b.TOP:a.container.backgroundPosition="center top";break;case b.BOTTOM:a.container.backgroundPosition="center bottom";break;case b.TOP_RIGHT:a.container.backgroundPosition="right top";break;case b.TOP_LEFT:a.container.backgroundPosition="left top";break;case b.BOTTOM_RIGHT:a.container.backgroundPosition="right bottom";break;case b.BOTTOM_LEFT:a.container.backgroundPosition="left bottom"}return i}const le={[b.CENTER]:"center",[b.TOP]:"top",[b.TOP_LEFT]:"top left",[b.TOP_RIGHT]:"top right",[b.BOTTOM]:"bottom",[b.BOTTOM_LEFT]:"bottom left",[b.BOTTOM_RIGHT]:"bottom right",[b.LEFT]:"left",[b.RIGHT]:"right"},ue={position:"absolute",top:"auto",right:"auto",bottom:"auto",left:"auto"};function ge(e,t){const i={css:{container:{},img:{}}},{css:a}=i,{fittingType:n}=e,r=t.alignment;switch(a.container.position="relative",n){case L.ORIGINAL_SIZE:case L.LEGACY_ORIGINAL_SIZE:e.parts&&e.parts.length?(a.img.width=e.parts[0].width,a.img.height=e.parts[0].height):(a.img.width=e.src.width,a.img.height=e.src.height);break;case L.SCALE_TO_FIT:case L.LEGACY_FIT_WIDTH:case L.LEGACY_FIT_HEIGHT:case L.LEGACY_FULL:a.img.width=t.width,a.img.height=t.height,a.img.objectFit="contain",a.img.objectPosition=le[r]||"unset";break;case L.LEGACY_BG_NORMAL:a.img.width="100%",a.img.height="100%",a.img.objectFit="none",a.img.objectPosition=le[r]||"unset";break;case L.STRETCH:a.img.width=t.width,a.img.height=t.height,a.img.objectFit="fill";break;case L.SCALE_TO_FILL:a.img.width=t.width,a.img.height=t.height,a.img.objectFit="cover"}if("number"==typeof a.img.width&&"number"==typeof a.img.height&&(a.img.width!==t.width||a.img.height!==t.height)){const e=Math.round((t.height-a.img.height)/2),i=Math.round((t.width-a.img.width)/2);Object.assign(a.img,ue,function(e,t,i){return{[b.TOP_LEFT]:{top:0,left:0},[b.TOP_RIGHT]:{top:0,right:0},[b.TOP]:{top:0,left:t},[b.BOTTOM_LEFT]:{bottom:0,left:0},[b.BOTTOM_RIGHT]:{bottom:0,right:0},[b.BOTTOM]:{bottom:0,left:t},[b.RIGHT]:{top:e,right:0},[b.LEFT]:{top:e,left:0},[b.CENTER]:{width:i.width,height:i.height,objectFit:"none"}}}(e,i,t)[r])}return i}function me(e,t){const i={css:{container:{}},attr:{container:{},img:{}}},{css:a,attr:n}=i,{fittingType:r}=e,o=t.alignment,{width:c,height:s}=e.src;let h;switch(a.container.position="relative",r){case L.ORIGINAL_SIZE:case L.LEGACY_ORIGINAL_SIZE:case L.TILE:e.parts&&e.parts.length?(n.img.width=e.parts[0].width,n.img.height=e.parts[0].height):(n.img.width=c,n.img.height=s),n.img.preserveAspectRatio="xMidYMid slice";break;case L.SCALE_TO_FIT:case L.LEGACY_FIT_WIDTH:case L.LEGACY_FIT_HEIGHT:case L.LEGACY_FULL:n.img.width="100%",n.img.height="100%",n.img.transform="",n.img.preserveAspectRatio="";break;case L.STRETCH:n.img.width=t.width,n.img.height=t.height,n.img.x=0,n.img.y=0,n.img.transform="",n.img.preserveAspectRatio="none";break;case L.SCALE_TO_FILL:D(e.src.id)?(n.img.width=t.width,n.img.height=t.height):(h=function(e,t,i,a,n){const r=Q(e,t,i,a,n);return{width:Math.round(e*r),height:Math.round(t*r)}}(c,s,t.width,t.height,A.FILL),n.img.width=h.width,n.img.height=h.height),n.img.x=0,n.img.y=0,n.img.transform="",n.img.preserveAspectRatio="xMidYMid slice"}if("number"==typeof n.img.width&&"number"==typeof n.img.height&&(n.img.width!==t.width||n.img.height!==t.height)){let e,i,a=0,c=0;r===L.TILE?(e=t.width%n.img.width,i=t.height%n.img.height):(e=t.width-n.img.width,i=t.height-n.img.height);const s=Math.round(e/2),h=Math.round(i/2);switch(o){case b.TOP_LEFT:a=0,c=0;break;case b.TOP:a=s,c=0;break;case b.TOP_RIGHT:a=e,c=0;break;case b.LEFT:a=0,c=h;break;case b.CENTER:a=s,c=h;break;case b.RIGHT:a=e,c=h;break;case b.BOTTOM_LEFT:a=0,c=i;break;case b.BOTTOM:a=s,c=i;break;case b.BOTTOM_RIGHT:a=e,c=i}n.img.x=a,n.img.y=c}return n.container.width=t.width,n.container.height=t.height,n.container.viewBox=[0,0,t.width,t.height].join(" "),i}function _e(e,t,i){let a;switch(t.crop&&(a=function(e,t){const i=Math.max(0,Math.min(e.width,t.x+t.width)-Math.max(0,t.x)),a=Math.max(0,Math.min(e.height,t.y+t.height)-Math.max(0,t.y));return i&&a&&(e.width!==i||e.height!==a)?{x:Math.max(0,t.x),y:Math.max(0,t.y),width:i,height:a}:null}(t,t.crop),a&&(e.src.width=a.width,e.src.height=a.height,e.src.isCropped=!0,e.parts.push(fe(a)))),e.fittingType){case L.SCALE_TO_FIT:case L.LEGACY_FIT_WIDTH:case L.LEGACY_FIT_HEIGHT:case L.LEGACY_FULL:case L.FIT_AND_TILE:case L.LEGACY_BG_FIT_AND_TILE:case L.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case L.LEGACY_BG_FIT_AND_TILE_VERTICAL:case L.LEGACY_BG_NORMAL:e.parts.push(pe(e,i));break;case L.SCALE_TO_FILL:e.parts.push(function(e,t){const i=K(e.src.width,e.src.height,A.FILL,t,e.devicePixelRatio,e.upscaleMethod),a=ie(e.focalPoint);return{transformType:a?A.FILL_FOCAL:A.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:te(t),focalPointX:a&&a.x,focalPointY:a&&a.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(e,i));break;case L.STRETCH:e.parts.push(function(e,t){const i=Q(e.src.width,e.src.height,t.width,t.height,A.FILL),a={...t};return a.width=e.src.width*i,a.height=e.src.height*i,pe(e,a)}(e,i));break;case L.TILE_HORIZONTAL:case L.TILE_VERTICAL:case L.TILE:case L.LEGACY_ORIGINAL_SIZE:case L.ORIGINAL_SIZE:a=ee(e.src,i,e.focalPoint,i.alignment),e.src.isCropped?(Object.assign(e.parts[0],a),e.src.width=a.width,e.src.height=a.height):e.parts.push(fe(a));break;case L.LEGACY_STRIP_TILE_HORIZONTAL:case L.LEGACY_STRIP_TILE_VERTICAL:case L.LEGACY_STRIP_TILE:case L.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push(function(e){return{transformType:A.LEGACY_CROP,width:Math.round(e.width),height:Math.round(e.height),alignment:te(e),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case L.LEGACY_STRIP_SCALE_TO_FIT:case L.LEGACY_STRIP_FIT_AND_TILE:e.parts.push(function(e){return{transformType:A.FIT,width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case L.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push(function(e){return{transformType:A.LEGACY_FILL,width:Math.round(e.width),height:Math.round(e.height),alignment:te(e),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}function pe(e,t){const i=K(e.src.width,e.src.height,A.FIT,t,e.devicePixelRatio,e.upscaleMethod);return{transformType:!e.src.width||!e.src.height?A.FIT:A.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:O.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function fe(e){return{transformType:A.CROP,x:Math.round(e.x),y:Math.round(e.y),width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}function Te(e,t){t=t||{},e.quality=function(e,t){const i=e.fileType===x.PNG,a=e.fileType===x.JPG,n=e.fileType===x.WEBP,r=a||i||n;if(r){const a=H(e.parts),n=(o=a.width,c=a.height,P[ae(o,c)].quality);let r=t.quality&&t.quality>=5&&t.quality<=90?t.quality:n;return r=i?r+5:r,r}var o,c;return 0}(e,t),e.progressive=function(e){return!1!==e.progressive}(t),e.watermark=function(e){return e.watermark}(t),e.autoEncode=t.autoEncode??!0,e.encoding=t?.encoding,e.unsharpMask=function(e,t){if(function(e){const t="number"==typeof(e=e||{}).radius&&!isNaN(e.radius)&&e.radius>=.1&&e.radius<=500,i="number"==typeof e.amount&&!isNaN(e.amount)&&e.amount>=0&&e.amount<=10,a="number"==typeof e.threshold&&!isNaN(e.threshold)&&e.threshold>=0&&e.threshold<=255;return t&&i&&a}(t.unsharpMask))return{radius:ne(t.unsharpMask?.radius,2),amount:ne(t.unsharpMask?.amount,2),threshold:ne(t.unsharpMask?.threshold,2)};if(("number"!=typeof(i=(i=t.unsharpMask)||{}).radius||isNaN(i.radius)||0!==i.radius||"number"!=typeof i.amount||isNaN(i.amount)||0!==i.amount||"number"!=typeof i.threshold||isNaN(i.threshold)||0!==i.threshold)&&function(e){const t=H(e.parts);return!(t.scaleFactor>=1)||t.forceUSM||t.transformType===A.FIT}(e))return G;var i;return}(e,t),e.filters=function(e){const t=e.filters||{},i={};Ie(t[v.CONTRAST],-100,100)&&(i[v.CONTRAST]=t[v.CONTRAST]);Ie(t[v.BRIGHTNESS],-100,100)&&(i[v.BRIGHTNESS]=t[v.BRIGHTNESS]);Ie(t[v.SATURATION],-100,100)&&(i[v.SATURATION]=t[v.SATURATION]);Ie(t[v.HUE],-180,180)&&(i[v.HUE]=t[v.HUE]);Ie(t[v.BLUR],0,100)&&(i[v.BLUR]=t[v.BLUR]);return i}(t)}function Ie(e,t,i){return"number"==typeof e&&!isNaN(e)&&0!==e&&e>=t&&e<=i}function Ee(e,t,i,a){const n=function(e){return e?.isSEOBot??!1}(a),r=J(t.id),o=function(e,t){const i=/\.([^.]*)$/,a=new RegExp(`(${W.concat(Z).join("|")})`,"g");if(t&&t.length){let e=t;const n=t.match(i);return n&&B.includes(n[1])&&(e=t.replace(i,"")),encodeURIComponent(e).replace(a,q)}const n=e.match(/\/(.*?)$/);return(n?n[1]:e).replace(i,"")}(t.id,t.name),c=n?1:function(e){return Math.min(e.pixelAspectRatio||1,p)}(i),s=X(t.id),h=s,d=D(t.id,a?.hasAnimation,a?.allowAnimatedTransform),l={fileName:o,fileExtension:s,fileType:r,fittingType:e,preferredExtension:h,src:{id:t.id,width:t.width,height:t.height,isCropped:!1,isAnimated:oe(t.id,a?.hasAnimation)},focalPoint:{x:t.focalPoint&&t.focalPoint.x,y:t.focalPoint&&t.focalPoint.y},parts:[],devicePixelRatio:c,quality:0,upscaleMethod:re(a),progressive:!0,watermark:"",unsharpMask:{},filters:{},transformed:d};return d&&(_e(l,t,i),Te(l,a)),l}function Le(e,t,i){const a={...i},n=se("isMobile");switch(e){case L.LEGACY_BG_FIT_AND_TILE:case L.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case L.LEGACY_BG_FIT_AND_TILE_VERTICAL:case L.LEGACY_BG_NORMAL:const e=n?I:f,i=n?E:T;a.width=Math.min(e,t.width),a.height=Math.min(i,Math.round(a.width/(t.width/t.height))),a.pixelAspectRatio=1}return a}const Ae=$`fit/w_${"width"},h_${"height"}`,be=$`fill/w_${"width"},h_${"height"},al_${"alignment"}`,we=$`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,Oe=$`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,ye=$`crop/w_${"width"},h_${"height"},al_${"alignment"}`,Me=$`fill/w_${"width"},h_${"height"},al_${"alignment"}`,Re=$`,lg_${"upscaleMethodValue"}`,Ge=$`,q_${"quality"}`,Ce=$`,quality_auto`,Se=$`,usm_${"radius"}_${"amount"}_${"threshold"}`,Ne=$`,bl`,Pe=$`,wm_${"watermark"}`,Fe={[v.CONTRAST]:$`,con_${"contrast"}`,[v.BRIGHTNESS]:$`,br_${"brightness"}`,[v.SATURATION]:$`,sat_${"saturation"}`,[v.HUE]:$`,hue_${"hue"}`,[v.BLUR]:$`,blur_${"blur"}`},ve=$`,enc_auto`,xe=$`,enc_avif`,ke=$`,enc_pavif`,$e=$`,pstr`;function He(e,t,i,a={},n){if(D(t.id,a?.hasAnimation,a?.allowAnimatedTransform)){if(j(t.id)){const{alignment:r,...o}=i;t.focalPoint={x:void 0,y:void 0},delete t?.crop,n=Ee(e,t,o,a)}else n=n||Ee(e,t,i,a);return function(e){const t=[];e.parts.forEach((e=>{switch(e.transformType){case A.CROP:t.push(Oe(e));break;case A.LEGACY_CROP:t.push(ye(e));break;case A.LEGACY_FILL:let i=Me(e);e.upscale&&(i+=Re(e)),t.push(i);break;case A.FIT:let a=Ae(e);e.upscale&&(a+=Re(e)),t.push(a);break;case A.FILL:let n=be(e);e.upscale&&(n+=Re(e)),t.push(n);break;case A.FILL_FOCAL:let r=we(e);e.upscale&&(r+=Re(e)),t.push(r)}}));let i=t.join("/");return e.quality&&(i+=Ge(e)),e.unsharpMask&&(i+=Se(e.unsharpMask)),e.progressive||(i+=Ne(e)),e.watermark&&(i+=Pe(e)),e.filters&&(i+=Object.keys(e.filters).map((t=>Fe[t](e.filters))).join("")),e.fileType!==x.GIF&&(e.encoding===k.AVIF?(i+=xe(e),i+=Ce(e)):e.encoding===k.PAVIF?(i+=ke(e),i+=Ce(e)):e.autoEncode&&(i+=ve(e))),e.src?.isAnimated&&e.transformed&&(i+=$e(e)),`${e.src.id}/${_}/${i}/${e.fileName}.${e.preferredExtension}`}(n)}return t.id}const Be={[b.CENTER]:"50% 50%",[b.TOP_LEFT]:"0% 0%",[b.TOP_RIGHT]:"100% 0%",[b.TOP]:"50% 0%",[b.BOTTOM_LEFT]:"0% 100%",[b.BOTTOM_RIGHT]:"100% 100%",[b.BOTTOM]:"50% 100%",[b.RIGHT]:"100% 50%",[b.LEFT]:"0% 50%"},Ye=Object.entries(Be).reduce(((e,[t,i])=>(e[i]=t,e)),{}),Ue=[L.TILE,L.TILE_HORIZONTAL,L.TILE_VERTICAL,L.LEGACY_BG_FIT_AND_TILE,L.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,L.LEGACY_BG_FIT_AND_TILE_VERTICAL],De=[L.LEGACY_ORIGINAL_SIZE,L.ORIGINAL_SIZE,L.LEGACY_BG_NORMAL];function ze(e,t,{width:i,height:a}){return e===L.TILE&&t.width>i&&t.height>a}function je(e,{width:t,height:i}){if(!t||!i){const a=t||Math.min(980,e.width),n=a/e.width;return{width:a,height:i||e.height*n}}return{width:t,height:i}}function Ve(e,t,i,a="center"){const n={img:{},container:{}};if(e===L.SCALE_TO_FILL){const e=t.focalPoint&&function(e){const t=`${e.x}% ${e.y}%`;return Ye[t]||""}(t.focalPoint),r=e||a;t.focalPoint&&!e?n.img={objectPosition:We(t,i,t.focalPoint)}:n.img={objectPosition:Be[r]}}else[L.LEGACY_ORIGINAL_SIZE,L.ORIGINAL_SIZE].includes(e)?n.img={objectFit:"none",top:"auto",left:"auto",right:"auto",bottom:"auto"}:Ue.includes(e)&&(n.container={backgroundSize:`${t.width}px ${t.height}px`});return n}function We(e,t,i){const{width:a,height:n}=e,{width:r,height:o}=t,{x:c,y:s}=i;if(!r||!o)return`${c}% ${s}%`;const h=Math.max(r/a,o/n),d=a*h,l=n*h,u=Math.max(0,Math.min(d-r,d*(c/100)-r/2)),g=Math.max(0,Math.min(l-o,l*(s/100)-o/2));return`${u&&Math.floor(u/(d-r)*100)}% ${g&&Math.floor(g/(l-o)*100)}%`}const Ze={width:"100%",height:"100%"};function qe(e,t,i,a={}){const{autoEncode:n=!0,isSEOBot:r,shouldLoadHQImage:o,hasAnimation:c,allowAnimatedTransform:s,encoding:h}=a;if(!U(e,t,i))return C;const d=void 0===s||s,l=D(t.id,c,d);if(!l||o)return Je(e,t,i,{...a,autoEncode:n,useSrcset:l});const u={...i,...je(t,i)},{alignment:g,htmlTag:m}=u,_=ze(e,t,u),p=function(e,t,{width:i,height:a},n=!1){if(n)return{width:i,height:a};const r=!De.includes(e),o=ze(e,t,{width:i,height:a}),c=!o&&Ue.includes(e),s=c?t.width:i,h=c?t.height:a,d=r?function(e,t){return e>900?t?.05:.15:e>500?t?.1:.18:e>200?.25:1}(s,z(t.id)):1;return{width:o?1920:s*d,height:h*d}}(e,t,u,r),f=function(e,t,i){return i?0:Ue.includes(t)?1:e>200?2:3}(u.width,e,r),T=function(e,t){const i=Ue.includes(e)&&!t;return e===L.SCALE_TO_FILL||i?L.SCALE_TO_FIT:e}(e,_),I=Ve(e,t,i,g),{uri:E}=Je(T,t,{...p,alignment:g,htmlTag:m},{autoEncode:n,filters:f?{blur:f}:{},hasAnimation:c,allowAnimatedTransform:d,encoding:h}),{attr:A={},css:b}=Je(e,t,{...u,alignment:g,htmlTag:m},{});return b.img=b.img||{},b.container=b.container||{},Object.assign(b.img,I.img,Ze),Object.assign(b.container,I.container),{uri:E,css:b,attr:A,transformed:!0}}function Je(e,t,i,a){let n={};if(U(e,t,i)){const r=Le(e,t,i),o=Ee(e,t,r,a);n.uri=He(e,t,r,a,o),a?.useSrcset&&(n.srcset=function(e,t,i,a,n){const r=i.pixelAspectRatio||1;return{dpr:[`${1===r?n.uri:He(e,t,{...i,pixelAspectRatio:1},a)} 1x`,`${2===r?n.uri:He(e,t,{...i,pixelAspectRatio:2},a)} 2x`]}}(e,t,r,a,n)),Object.assign(n,function(e,t){let i;return i=t.htmlTag===y.BG?de:t.htmlTag===y.SVG?me:ge,i(e,t)}(o,r),{transformed:o.transformed})}else n=C;return n}const Xe="https://static.wixstatic.com/media/";"undefined"!=typeof window&&window.devicePixelRatio;he();he();const Qe=Xe,{STATIC_MEDIA_URL:Ke}=e,et=({fittingType:e,src:t,target:i,options:a})=>{const n=qe(e,t,i,{...a,autoEncode:!0});return n?.uri&&!/^[a-z]+:/.test(n.uri)&&(n.uri=`${Ke}${n.uri}`),n},tt=/^[a-z]+:/,it=e=>{const{id:t,containerId:i,uri:a,alt:n,name:o="",role:c,width:s,height:h,displayMode:d,devicePixelRatio:l,quality:u,alignType:g,bgEffectName:_="",focalPoint:p,upscaleMethod:f,className:T="",crop:I,imageStyles:E={},targetWidth:L,targetHeight:A,targetScale:b,onLoad:w=(()=>{}),onError:O=(()=>{}),shouldUseLQIP:y,containerWidth:M,containerHeight:R,getPlaceholder:G,isInFirstFold:C,placeholderTransition:S,socialAttrs:N,isSEOBot:P,skipMeasure:F,hasAnimation:v,encoding:x}=e,k=r.useRef(null);let $="";const H="blur"===S,B=r.useRef(null);if(!B.current)if(G||y||C||P){const e={upscaleMethod:f,...u||{},shouldLoadHQImage:C,isSEOBot:P,hasAnimation:v,encoding:x};B.current=(G||et)({fittingType:d,src:{id:a,width:s,height:h,crop:I,name:o,focalPoint:p},target:{width:M,height:R,alignment:g,htmlTag:"img"},options:e}),$=!B.current.transformed||C||P?"":"true"}else B.current={uri:void 0,css:{img:{}},attr:{img:{},container:{}},transformed:!1};const Y=!P&&(G||y)&&!C&&B.current.transformed,U=r.useMemo((()=>JSON.stringify({containerId:i,...i&&{containerId:i},...g&&{alignType:g},...F&&{skipMeasure:!0},displayMode:d,...M&&{targetWidth:M},...R&&{targetHeight:R},...L&&{targetWidth:L},...A&&{targetHeight:A},...b&&{targetScale:b},isLQIP:Y,isSEOBot:P,lqipTransition:S,encoding:x,imageData:{width:s,height:h,uri:a,name:o,displayMode:d,hasAnimation:v,...u&&{quality:u},...l&&{devicePixelRatio:l},...p&&{focalPoint:p},...I&&{crop:I},...f&&{upscaleMethod:f}}})),[i,g,F,d,M,R,L,A,b,Y,P,S,x,s,h,a,o,v,u,l,p,I,f]),D=B.current,z=D?.uri,j=D?.srcset,V=D.css?.img,W=`${m} ${T}`;r.useEffect((()=>{const e=k.current;w&&e?.currentSrc&&e?.complete&&w({target:e})}),[]);const Z=D&&!D?.transformed?`max(${s}px, 100%)`:L?`${L}px`:null;return r.createElement("wow-image",{id:t,class:W,"data-image-info":U,"data-motion-part":`BG_IMG ${i}`,"data-bg-effect-name":_,"data-has-ssr-src":$,"data-animate-blur":!P&&Y&&H?"":void 0,style:Z?{"--wix-img-max-width":Z}:{}},r.createElement("img",{src:z,ref:k,alt:n||"",role:c,style:{...V,...E},onLoad:w,onError:O,width:M||void 0,height:R||void 0,...N,srcSet:C?j?.dpr?.map((e=>tt.test(e)?e:`${Ke}${e}`)).join(", "):void 0,fetchpriority:C?"high":void 0,loading:!1===C?"lazy":void 0,suppressHydrationWarning:!0}))};var at="_1hLNj";var nt=e=>{const{id:t,alt:i,role:a,className:n,imageStyles:o={},targetWidth:c,targetHeight:h,onLoad:d,onError:l,containerWidth:u,containerHeight:g,isInFirstFold:m,socialAttrs:_,skipMeasure:p,responsiveImageProps:f,zoomedImageResponsiveOverride:T}=e,I=c||u,E=h||g,L=`${I}px`,{fallbackSrc:A,srcset:b,css:w}=f||{};return A&&b&&w?r.createElement("img",{fetchpriority:m?"high":void 0,loading:!1===m?"lazy":void 0,sizes:L,srcSet:p?T?.srcset:f?.srcset,id:t,src:A,alt:i||"",role:a,style:{...o,...p?{...T?.css?.img}:{...f?.css?.img}},onLoad:d,onError:l,className:s(n,at),width:I,height:E,..._}):r.createElement(it,{...e})};var rt=e=>{const{className:t,customIdPrefix:i,getPlaceholder:a,hasAnimation:n,...o}=e,c=r.useMemo((()=>JSON.stringify({containerId:o.containerId,alignType:o.alignType,fittingType:o.displayMode,hasAnimation:n,imageData:{width:o.width,height:o.height,uri:o.uri,name:o.name,...o.quality&&{quality:o.quality},displayMode:o.displayMode}})),[o,n]),s=r.useRef(null);s.current||(s.current=a?a({fittingType:o.displayMode,src:{id:o.uri,width:o.width,height:o.height,name:o.name},target:{width:o.containerWidth,height:o.containerHeight,alignment:o.alignType,htmlTag:"bg"},options:{hasAnimation:n,allowAnimatedTransform:!1}}):{uri:void 0,css:{img:{}},attr:{img:{},container:{}}});const h=s.current,d=h?.uri??"",l=h.css?.container??{},u=Object.assign(d?{backgroundImage:`url(${d})`}:{},l);return r.createElement("wix-bg-image",{id:`${i||"bgImg_"}${o.containerId}`,class:t,style:u,"data-tiled-image-info":c,"data-has-bg-scroll-effect":o.hasBgScrollEffect||"","data-bg-effect-name":o.bgEffectName||"","data-motion-part":`BG_IMG ${o.containerId}`})};const ot=new RegExp("<%= compId %>","g"),ct=(e,t)=>e.replace(ot,t);var st=e=>e?.replace(":hover",""),ht="_uqPqy",dt="eKyYhK",lt="x0mqQS",ut="pnCr6P",gt="blf7sp";const mt={quality:{unsharpMask:{radius:.33,amount:1,threshold:0}},devicePixelRatio:1};var _t=e=>{const{id:t,videoRef:i,videoInfo:a,posterImageInfo:n,muted:o,preload:c,loop:h,alt:d,isVideoEnabled:l,getPlaceholder:u,extraClassName:g=""}=e;a.containerId=st(a.containerId);const m=r.useMemo((()=>JSON.stringify(a)),[a]),_=r.createElement(r.Fragment,null,n.filterEffectSvgString&&r.createElement("svg",{id:`svg_${a.containerId}`,className:gt},r.createElement("defs",{dangerouslySetInnerHTML:{__html:ct(n.filterEffectSvgString,a.containerId)}})),r.createElement(nt,{key:`${a.videoId}_img`,id:`${n.containerId}_img`,className:s(dt,lt,"bgVideoposter",g),imageStyles:{width:"100%",height:"100%"},...n,...mt,getPlaceholder:u}));return l?r.createElement("wix-video",{id:t,"data-video-info":m,"data-motion-part":`BG_IMG ${a.containerId}`,class:s(ht,"bgVideo",g)},r.createElement("video",{key:`${a.videoId}_video`,ref:i,id:`${a.containerId}_video`,className:ut,crossOrigin:"anonymous","aria-label":d,playsInline:!0,preload:c,muted:o,loop:h,tabIndex:-1}),_):_},pt="rWP3Gv";var ft=e=>{const{id:t,containerId:i,pageId:a,children:n,bgEffectName:o="",containerSize:c}=e;return r.createElement("wix-bg-media",{id:t,class:pt,"data-container-id":i,"data-container-size":`${c?.width||0}, ${c?.height||0}`,"data-page-id":a,"data-bg-effect-name":o,"data-motion-part":`BG_MEDIA ${i}`},n)};const Tt="bgOverlay";var It="Tr4n3d",Et="wRqk6s";var Lt=e=>{const{imageOverlay:t}=e;return r.createElement("div",{"data-testid":Tt,className:It},t&&r.createElement(rt,{customIdPrefix:"bgImgOverlay_",className:Et,...t}))};const At="bgLayers",bt="colorUnderlay",wt="mediaPadding",Ot="canvas";var yt="if7Vw2",Mt="f0uTJH",Rt="i1tH8h",Gt="DXi4PB",Ct="wG8dni",St="tcElKx",Nt="Ybjs9b",Pt="ImALHf",Ft="UWmm3w",vt="Yjj1af";const xt="bgImage";var kt=e=>{const{videoRef:t,canvasRef:i,hasBgFullscreenScrollEffect:a,image:n,backgroundImage:o,backgroundMedia:c,video:h,backgroundOverlay:d,shouldPadMedia:l,extraClass:u="",shouldRenderUnderlay:g=!h,reducedMotion:m=!1,getPlaceholder:_,hasCanvasAnimation:p,useWixMediaCanvas:f}=e,{onImageLoad:T}=(({onReady:e,image:t})=>((0,r.useEffect)((()=>{e&&!t&&e()}),[e,t]),{onImageLoad:i=>{t?.onLoad&&t.onLoad(i),e&&e()}}))(e),I=st(e.containerId),E=`img_${st(I)}`,L=n&&r.createElement(nt,{id:E,className:s(Rt,Gt,vt,xt),imageStyles:{width:"100%",height:"100%"},getPlaceholder:_,...n,onLoad:T}),A=o&&r.createElement(rt,{...o,containerId:I,className:s(Rt,Gt,vt,xt),getPlaceholder:_}),b=h&&r.createElement(_t,{id:`videoContainer_${I}`,...h,extraClassName:Nt,reducedMotion:m,videoRef:t,getPlaceholder:_}),w=f&&i||p?r.createElement("wix-media-canvas",null,L,A,b,r.createElement("canvas",{id:`${I}webglcanvas`,className:s(Pt,"webglcanvas"),"aria-label":h?.alt||"",role:"presentation","data-testid":Ot,"data-containerId":I})):r.createElement(r.Fragment,null,L,A,b,i&&r.createElement("canvas",{id:`${I}webglcanvas`,ref:i,className:s(Pt,"webglcanvas"),"aria-label":h?.alt||"",role:"presentation","data-testid":Ot})),O=c?r.createElement(ft,{id:`bgMedia_${I}`,...c},w):r.createElement("div",{id:`bgMedia_${I}`,"data-motion-part":`BG_MEDIA ${I}`,className:Ct},w),y=d&&r.createElement(Lt,{...d});return r.createElement("div",{id:`${At}_${I}`,"data-hook":At,"data-motion-part":`BG_LAYER ${I}`,className:s(yt,u,{[Mt]:a})},g&&r.createElement("div",{"data-testid":bt,className:s(St,Rt)}),l?r.createElement("div",{"data-testid":wt,className:Ft},O,y):r.createElement(r.Fragment,null,O,y))},$t="VXAmO2",Ht="dy3w_9",Bt="UORcXs",Yt="Io4VUz";const Ut=(e,t,i)=>{const a=((e,t)=>e?[...Array(1+(t||0)).keys()].reverse().map((e=>r.createElement("div",{key:`divider-layer-${e}`,style:{"--divider-layer-i":e},className:Ht,"data-testid":`divider-layer-${e}`,"data-divider-layer":e}))):null)(!!t,i);return t?r.createElement("div",{className:s($t,{[Bt]:"top"===e,[Yt]:"bottom"===e}),"data-testid":`${e}-divider`},a):null};var Dt=e=>{const t=r.useMemo((()=>Ut("top",e?.hasTopDivider,e?.topLayers?.size)),[e?.hasTopDivider,e?.topLayers?.size]),i=r.useMemo((()=>Ut("bottom",e?.hasBottomDivider,e?.bottomLayers?.size)),[e?.hasBottomDivider,e?.bottomLayers?.size]);return r.createElement(r.Fragment,null,t,i)};const zt="columns";var jt={root:"column-strip",column:"column-strip__column"},Vt="CohWsy",Wt="V5AUxf",Zt="LIhNy3";const qt=(e,t)=>{const{id:a,className:n,customClassNames:c=[],fillLayers:h,children:d,onMouseEnter:l,onMouseLeave:u,onClick:m,onDblClick:_,getPlaceholder:p,a11y:f={},onStop:T,dividers:I,onReady:E}=e,L={onMouseEnter:l,onMouseLeave:u,onClick:m,onDoubleClick:_},A=h.hasBgFullscreenScrollEffect,b=function(e,t,i){const a=o().useRef(null),n=o().useRef(null);return t?n.current||(n.current={play:()=>a.current?.play(),load:()=>a.current?.load(),pause:()=>a.current?.pause(),stop:()=>{a.current&&(a.current.pause(),a.current.currentTime=0,i&&i(a.current))}}):n.current=null,o().useImperativeHandle(e,(()=>n.current||{load(){},stop(){}})),a}(t,!!h.video,T),{tabindex:w,...O}=f;return r.createElement("section",i()({id:a},(e=>Object.entries(e).reduce(((e,[t,i])=>(t.includes("data-")&&(e[t]=i),e)),{}))(e),L,O,((e={})=>{const t=e.tabIndex??e.tabindex??void 0;return void 0!==t?{tabIndex:Number(t)}:{}})(f),{className:s(n,Vt,g(jt.root,...c))}),r.createElement(kt,i()({},h,{getPlaceholder:p,onReady:E,videoRef:b})),I&&r.createElement(Dt,I),r.createElement("div",{"data-testid":zt,className:s(Wt,{[Zt]:A})},d()))};const Jt={StripColumnsContainer_Default:{component:r.forwardRef(qt)}}}(),n}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[StripColumnsContainer_Default].9c92308e.bundle.min.js.map