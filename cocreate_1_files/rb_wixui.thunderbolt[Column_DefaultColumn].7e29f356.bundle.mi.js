!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[Column_DefaultColumn]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[Column_DefaultColumn]"]=t(require("react")):e["rb_wixui.thunderbolt[Column_DefaultColumn]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";a.r(n),a.d(n,{components:function(){return Zt}});var e={};a.r(e),a.d(e,{STATIC_MEDIA_URL:function(){return it},ph:function(){return Qe}});var t=a(448),i=a.n(t),r=a(5329),o=a.n(r);function c(e){var t,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=c(e[t]))&&(a&&(a+=" "),a+=i);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var s=function(){for(var e,t,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(t=c(e))&&(a&&(a+=" "),a+=t);return a};const l="wixui-",d=(e,...t)=>{const i=[];return e&&i.push(`${l}${e}`),t.forEach((e=>{e&&(i.push(`${l}${e}`),i.push(e))})),i.join(" ")};const h=e=>Object.entries(e).reduce(((e,[t,i])=>(t.includes("data-")&&(e[t]=i),e)),{});var u={root:"repeater",repeaterItem:"repeater__item"};const g="mesh-container-content",m="inline-content",_=e=>o().createElement("div",{key:e.props.id+"-rotated-wrapper","data-mesh-id":e.props.id+"-rotated-wrapper"},e),p=(e,t)=>{const{id:a,className:n,wedges:r=[],rotatedComponents:c=[],children:l,fixedComponents:d=[],extraClassName:u="",renderRotatedComponents:p=_}=e,f=o().Children.toArray(l()),T=[],I=[];f.forEach((e=>d.includes(e.props.id)?T.push(e):I.push(e)));const E=(e=>{const{wedges:t,rotatedComponents:i,childrenArray:a,renderRotatedComponents:n}=e,r=i.reduce(((e,t)=>({...e,[t]:!0})),{});return[...a.map((e=>{return r[(t=e,t.props.id.split("__")[0])]?n(e):e;var t})),...t.map((e=>o().createElement("div",{key:e,"data-mesh-id":e})))]})({childrenArray:I,rotatedComponents:c,wedges:r,renderRotatedComponents:p});return o().createElement("div",i()({},h(e),{"data-mesh-id":a+"inlineContent","data-testid":m,className:s(n,u),ref:t}),o().createElement("div",{"data-mesh-id":a+"inlineContent-gridContainer","data-testid":g},E),T)};var f=o().forwardRef(p),T="HlRz5e";const I="v1",E=2,L=1920,A=1920,b=1e3,w=1e3,O={SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},M={FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},R={CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},G={[R.CENTER]:{x:.5,y:.5},[R.TOP_LEFT]:{x:0,y:0},[R.TOP_RIGHT]:{x:1,y:0},[R.TOP]:{x:.5,y:0},[R.BOTTOM_LEFT]:{x:0,y:1},[R.BOTTOM_RIGHT]:{x:1,y:1},[R.BOTTOM]:{x:.5,y:1},[R.RIGHT]:{x:1,y:.5},[R.LEFT]:{x:0,y:.5}},y={center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},C={BG:"bg",IMG:"img",SVG:"svg"},S={AUTO:"auto",CLASSIC:"classic",SUPER:"super"},N={classic:1,super:2},P={radius:"0.66",amount:"1.00",threshold:"0.01"},v={uri:"",css:{img:{},container:{}},attr:{img:{},container:{}},transformed:!1},F=25e6,x=[1.5,2,4],k={HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},H={HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},Y={CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},B={JPG:"jpg",JPEG:"jpeg",JPE:"jpe",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},U={AVIF:"AVIF",PAVIF:"PAVIF"};B.JPG,B.JPEG,B.JPE,B.PNG,B.GIF,B.WEBP;function $(e,...t){return function(...i){const a=i[i.length-1]||{},n=[e[0]];return t.forEach((function(t,r){const o=Number.isInteger(t)?i[t]:a[t];n.push(o,e[r+1])})),n.join("")}}function D(e){return e[e.length-1]}const z=[B.PNG,B.JPEG,B.JPG,B.JPE,B.WIX_ICO_MP,B.WIX_MP,B.WEBP],j=[B.JPEG,B.JPG,B.JPE];function V(e,t,i){return i&&t&&!(!(a=t.id)||!a.trim()||"none"===a.toLowerCase())&&Object.values(O).includes(e);var a}function W(e,t,i){return function(e,t,i=!1){return!(q(e)&&t&&!i)}(e,t,i)&&(function(e){return z.includes(te(e))}(e)||function(e,t=!1){return J(e)&&t}(e,i))&&!/(^https?)|(^data)|(^\/\/)/.test(e)}function Z(e){return te(e)===B.PNG}function q(e){return te(e)===B.WEBP}function J(e){return te(e)===B.GIF}const X=["/","\\","?","<",">","|","\u201c",":",'"'].map(encodeURIComponent),K=["\\.","\\*"],Q="_";function ee(e){return function(e){return j.includes(te(e))}(e)?B.JPG:Z(e)?B.PNG:q(e)?B.WEBP:J(e)?B.GIF:B.UNRECOGNIZED}function te(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||"").toLowerCase()}function ie(e,t,i,a,n){let r;return r=n===M.FILL?function(e,t,i,a){return Math.max(i/e,a/t)}(e,t,i,a):n===M.FIT?function(e,t,i,a){return Math.min(i/e,a/t)}(e,t,i,a):1,r}function ae(e,t,i,a,n,r){e=e||a.width,t=t||a.height;const{scaleFactor:o,width:c,height:s}=function(e,t,i,a,n){let r,o=i,c=a;if(r=ie(e,t,i,a,n),n===M.FIT&&(o=e*r,c=t*r),o&&c&&o*c>F){const i=Math.sqrt(F/(o*c));o*=i,c*=i,r=ie(e,t,o,c,n)}return{scaleFactor:r,width:o,height:c}}(e,t,a.width*n,a.height*n,i);return function(e,t,i,a,n,r,o){const{optimizedScaleFactor:c,upscaleMethodValue:s,forceUSM:l}=function(e,t,i,a){if("auto"===a)return function(e,t){const i=ce(e,t);return{optimizedScaleFactor:k[i].maxUpscale,upscaleMethodValue:N.classic,forceUSM:!1}}(e,t);if("super"===a)return function(e){return{optimizedScaleFactor:D(x),upscaleMethodValue:N.super,forceUSM:!(x.includes(e)||e>D(x))}}(i);return function(e,t){const i=ce(e,t);return{optimizedScaleFactor:k[i].maxUpscale,upscaleMethodValue:N.classic,forceUSM:!1}}(e,t)}(e,t,r,n);let d=i,h=a;if(r<=c)return{width:d,height:h,scaleFactor:r,upscaleMethodValue:s,forceUSM:l,cssUpscaleNeeded:!1};switch(o){case M.FILL:d=i*(c/r),h=a*(c/r);break;case M.FIT:d=e*c,h=t*c}return{width:d,height:h,scaleFactor:c,upscaleMethodValue:s,forceUSM:l,cssUpscaleNeeded:!0}}(e,t,c,s,r,o,i)}function ne(e,t,i,a){const n=oe(i)||function(e=R.CENTER){return G[e]}(a);return{x:Math.max(0,Math.min(e.width-t.width,n.x*e.width-t.width/2)),y:Math.max(0,Math.min(e.height-t.height,n.y*e.height-t.height/2)),width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}}function re(e){return e.alignment&&y[e.alignment]||y[R.CENTER]}function oe(e){let t;return!e||"number"!=typeof e.x||isNaN(e.x)||"number"!=typeof e.y||isNaN(e.y)||(t={x:se(Math.max(0,Math.min(100,e.x))/100,2),y:se(Math.max(0,Math.min(100,e.y))/100,2)}),t}function ce(e,t){const i=e*t;return i>k[H.HIGH].size?H.HIGH:i>k[H.MEDIUM].size?H.MEDIUM:i>k[H.LOW].size?H.LOW:H.TINY}function se(e,t){const i=Math.pow(10,t||0);return(e*i/i).toFixed(t)}function le(e){return e&&e.upscaleMethod&&S[e.upscaleMethod.toUpperCase()]||S.AUTO}function de(e,t){return te(e)===B.GIF||te(e)===B.WEBP&&t}const he={isMobile:!1},ue=function(e){return he[e]};function ge(){if("undefined"!=typeof window&&"undefined"!=typeof navigator){const t=window.matchMedia&&window.matchMedia("(max-width: 767px)").matches,i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e=t&&i,he["isMobile"]=e}var e}function me(e,t){const i={css:{container:{}}},{css:a}=i,{fittingType:n}=e;switch(n){case O.ORIGINAL_SIZE:case O.LEGACY_ORIGINAL_SIZE:case O.LEGACY_STRIP_ORIGINAL_SIZE:a.container.backgroundSize="auto",a.container.backgroundRepeat="no-repeat";break;case O.SCALE_TO_FIT:case O.LEGACY_STRIP_SCALE_TO_FIT:a.container.backgroundSize="contain",a.container.backgroundRepeat="no-repeat";break;case O.STRETCH:a.container.backgroundSize="100% 100%",a.container.backgroundRepeat="no-repeat";break;case O.SCALE_TO_FILL:case O.LEGACY_STRIP_SCALE_TO_FILL:a.container.backgroundSize="cover",a.container.backgroundRepeat="no-repeat";break;case O.TILE_HORIZONTAL:case O.LEGACY_STRIP_TILE_HORIZONTAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-x";break;case O.TILE_VERTICAL:case O.LEGACY_STRIP_TILE_VERTICAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-y";break;case O.TILE:case O.LEGACY_STRIP_TILE:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat";break;case O.LEGACY_STRIP_FIT_AND_TILE:a.container.backgroundSize="contain",a.container.backgroundRepeat="repeat";break;case O.FIT_AND_TILE:case O.LEGACY_BG_FIT_AND_TILE:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat";break;case O.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-x";break;case O.LEGACY_BG_FIT_AND_TILE_VERTICAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="repeat-y";break;case O.LEGACY_BG_NORMAL:a.container.backgroundSize="auto",a.container.backgroundRepeat="no-repeat"}switch(t.alignment){case R.CENTER:a.container.backgroundPosition="center center";break;case R.LEFT:a.container.backgroundPosition="left center";break;case R.RIGHT:a.container.backgroundPosition="right center";break;case R.TOP:a.container.backgroundPosition="center top";break;case R.BOTTOM:a.container.backgroundPosition="center bottom";break;case R.TOP_RIGHT:a.container.backgroundPosition="right top";break;case R.TOP_LEFT:a.container.backgroundPosition="left top";break;case R.BOTTOM_RIGHT:a.container.backgroundPosition="right bottom";break;case R.BOTTOM_LEFT:a.container.backgroundPosition="left bottom"}return i}const _e={[R.CENTER]:"center",[R.TOP]:"top",[R.TOP_LEFT]:"top left",[R.TOP_RIGHT]:"top right",[R.BOTTOM]:"bottom",[R.BOTTOM_LEFT]:"bottom left",[R.BOTTOM_RIGHT]:"bottom right",[R.LEFT]:"left",[R.RIGHT]:"right"},pe={position:"absolute",top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(e,t){const i={css:{container:{},img:{}}},{css:a}=i,{fittingType:n}=e,r=t.alignment;switch(a.container.position="relative",n){case O.ORIGINAL_SIZE:case O.LEGACY_ORIGINAL_SIZE:e.parts&&e.parts.length?(a.img.width=e.parts[0].width,a.img.height=e.parts[0].height):(a.img.width=e.src.width,a.img.height=e.src.height);break;case O.SCALE_TO_FIT:case O.LEGACY_FIT_WIDTH:case O.LEGACY_FIT_HEIGHT:case O.LEGACY_FULL:a.img.width=t.width,a.img.height=t.height,a.img.objectFit="contain",a.img.objectPosition=_e[r]||"unset";break;case O.LEGACY_BG_NORMAL:a.img.width="100%",a.img.height="100%",a.img.objectFit="none",a.img.objectPosition=_e[r]||"unset";break;case O.STRETCH:a.img.width=t.width,a.img.height=t.height,a.img.objectFit="fill";break;case O.SCALE_TO_FILL:a.img.width=t.width,a.img.height=t.height,a.img.objectFit="cover"}if("number"==typeof a.img.width&&"number"==typeof a.img.height&&(a.img.width!==t.width||a.img.height!==t.height)){const e=Math.round((t.height-a.img.height)/2),i=Math.round((t.width-a.img.width)/2);Object.assign(a.img,pe,function(e,t,i){return{[R.TOP_LEFT]:{top:0,left:0},[R.TOP_RIGHT]:{top:0,right:0},[R.TOP]:{top:0,left:t},[R.BOTTOM_LEFT]:{bottom:0,left:0},[R.BOTTOM_RIGHT]:{bottom:0,right:0},[R.BOTTOM]:{bottom:0,left:t},[R.RIGHT]:{top:e,right:0},[R.LEFT]:{top:e,left:0},[R.CENTER]:{width:i.width,height:i.height,objectFit:"none"}}}(e,i,t)[r])}return i}function Te(e,t){const i={css:{container:{}},attr:{container:{},img:{}}},{css:a,attr:n}=i,{fittingType:r}=e,o=t.alignment,{width:c,height:s}=e.src;let l;switch(a.container.position="relative",r){case O.ORIGINAL_SIZE:case O.LEGACY_ORIGINAL_SIZE:case O.TILE:e.parts&&e.parts.length?(n.img.width=e.parts[0].width,n.img.height=e.parts[0].height):(n.img.width=c,n.img.height=s),n.img.preserveAspectRatio="xMidYMid slice";break;case O.SCALE_TO_FIT:case O.LEGACY_FIT_WIDTH:case O.LEGACY_FIT_HEIGHT:case O.LEGACY_FULL:n.img.width="100%",n.img.height="100%",n.img.transform="",n.img.preserveAspectRatio="";break;case O.STRETCH:n.img.width=t.width,n.img.height=t.height,n.img.x=0,n.img.y=0,n.img.transform="",n.img.preserveAspectRatio="none";break;case O.SCALE_TO_FILL:W(e.src.id)?(n.img.width=t.width,n.img.height=t.height):(l=function(e,t,i,a,n){const r=ie(e,t,i,a,n);return{width:Math.round(e*r),height:Math.round(t*r)}}(c,s,t.width,t.height,M.FILL),n.img.width=l.width,n.img.height=l.height),n.img.x=0,n.img.y=0,n.img.transform="",n.img.preserveAspectRatio="xMidYMid slice"}if("number"==typeof n.img.width&&"number"==typeof n.img.height&&(n.img.width!==t.width||n.img.height!==t.height)){let e,i,a=0,c=0;r===O.TILE?(e=t.width%n.img.width,i=t.height%n.img.height):(e=t.width-n.img.width,i=t.height-n.img.height);const s=Math.round(e/2),l=Math.round(i/2);switch(o){case R.TOP_LEFT:a=0,c=0;break;case R.TOP:a=s,c=0;break;case R.TOP_RIGHT:a=e,c=0;break;case R.LEFT:a=0,c=l;break;case R.CENTER:a=s,c=l;break;case R.RIGHT:a=e,c=l;break;case R.BOTTOM_LEFT:a=0,c=i;break;case R.BOTTOM:a=s,c=i;break;case R.BOTTOM_RIGHT:a=e,c=i}n.img.x=a,n.img.y=c}return n.container.width=t.width,n.container.height=t.height,n.container.viewBox=[0,0,t.width,t.height].join(" "),i}function Ie(e,t,i){let a;switch(t.crop&&(a=function(e,t){const i=Math.max(0,Math.min(e.width,t.x+t.width)-Math.max(0,t.x)),a=Math.max(0,Math.min(e.height,t.y+t.height)-Math.max(0,t.y));return i&&a&&(e.width!==i||e.height!==a)?{x:Math.max(0,t.x),y:Math.max(0,t.y),width:i,height:a}:null}(t,t.crop),a&&(e.src.width=a.width,e.src.height=a.height,e.src.isCropped=!0,e.parts.push(Le(a)))),e.fittingType){case O.SCALE_TO_FIT:case O.LEGACY_FIT_WIDTH:case O.LEGACY_FIT_HEIGHT:case O.LEGACY_FULL:case O.FIT_AND_TILE:case O.LEGACY_BG_FIT_AND_TILE:case O.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case O.LEGACY_BG_FIT_AND_TILE_VERTICAL:case O.LEGACY_BG_NORMAL:e.parts.push(Ee(e,i));break;case O.SCALE_TO_FILL:e.parts.push(function(e,t){const i=ae(e.src.width,e.src.height,M.FILL,t,e.devicePixelRatio,e.upscaleMethod),a=oe(e.focalPoint);return{transformType:a?M.FILL_FOCAL:M.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:re(t),focalPointX:a&&a.x,focalPointY:a&&a.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(e,i));break;case O.STRETCH:e.parts.push(function(e,t){const i=ie(e.src.width,e.src.height,t.width,t.height,M.FILL),a={...t};return a.width=e.src.width*i,a.height=e.src.height*i,Ee(e,a)}(e,i));break;case O.TILE_HORIZONTAL:case O.TILE_VERTICAL:case O.TILE:case O.LEGACY_ORIGINAL_SIZE:case O.ORIGINAL_SIZE:a=ne(e.src,i,e.focalPoint,i.alignment),e.src.isCropped?(Object.assign(e.parts[0],a),e.src.width=a.width,e.src.height=a.height):e.parts.push(Le(a));break;case O.LEGACY_STRIP_TILE_HORIZONTAL:case O.LEGACY_STRIP_TILE_VERTICAL:case O.LEGACY_STRIP_TILE:case O.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push(function(e){return{transformType:M.LEGACY_CROP,width:Math.round(e.width),height:Math.round(e.height),alignment:re(e),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case O.LEGACY_STRIP_SCALE_TO_FIT:case O.LEGACY_STRIP_FIT_AND_TILE:e.parts.push(function(e){return{transformType:M.FIT,width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case O.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push(function(e){return{transformType:M.LEGACY_FILL,width:Math.round(e.width),height:Math.round(e.height),alignment:re(e),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}function Ee(e,t){const i=ae(e.src.width,e.src.height,M.FIT,t,e.devicePixelRatio,e.upscaleMethod);return{transformType:!e.src.width||!e.src.height?M.FIT:M.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:y.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function Le(e){return{transformType:M.CROP,x:Math.round(e.x),y:Math.round(e.y),width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}function Ae(e,t){t=t||{},e.quality=function(e,t){const i=e.fileType===B.PNG,a=e.fileType===B.JPG,n=e.fileType===B.WEBP,r=a||i||n;if(r){const a=D(e.parts),n=(o=a.width,c=a.height,k[ce(o,c)].quality);let r=t.quality&&t.quality>=5&&t.quality<=90?t.quality:n;return r=i?r+5:r,r}var o,c;return 0}(e,t),e.progressive=function(e){return!1!==e.progressive}(t),e.watermark=function(e){return e.watermark}(t),e.autoEncode=t.autoEncode??!0,e.encoding=t?.encoding,e.unsharpMask=function(e,t){if(function(e){const t="number"==typeof(e=e||{}).radius&&!isNaN(e.radius)&&e.radius>=.1&&e.radius<=500,i="number"==typeof e.amount&&!isNaN(e.amount)&&e.amount>=0&&e.amount<=10,a="number"==typeof e.threshold&&!isNaN(e.threshold)&&e.threshold>=0&&e.threshold<=255;return t&&i&&a}(t.unsharpMask))return{radius:se(t.unsharpMask?.radius,2),amount:se(t.unsharpMask?.amount,2),threshold:se(t.unsharpMask?.threshold,2)};if(("number"!=typeof(i=(i=t.unsharpMask)||{}).radius||isNaN(i.radius)||0!==i.radius||"number"!=typeof i.amount||isNaN(i.amount)||0!==i.amount||"number"!=typeof i.threshold||isNaN(i.threshold)||0!==i.threshold)&&function(e){const t=D(e.parts);return!(t.scaleFactor>=1)||t.forceUSM||t.transformType===M.FIT}(e))return P;var i;return}(e,t),e.filters=function(e){const t=e.filters||{},i={};be(t[Y.CONTRAST],-100,100)&&(i[Y.CONTRAST]=t[Y.CONTRAST]);be(t[Y.BRIGHTNESS],-100,100)&&(i[Y.BRIGHTNESS]=t[Y.BRIGHTNESS]);be(t[Y.SATURATION],-100,100)&&(i[Y.SATURATION]=t[Y.SATURATION]);be(t[Y.HUE],-180,180)&&(i[Y.HUE]=t[Y.HUE]);be(t[Y.BLUR],0,100)&&(i[Y.BLUR]=t[Y.BLUR]);return i}(t)}function be(e,t,i){return"number"==typeof e&&!isNaN(e)&&0!==e&&e>=t&&e<=i}function we(e,t,i,a){const n=function(e){return e?.isSEOBot??!1}(a),r=ee(t.id),o=function(e,t){const i=/\.([^.]*)$/,a=new RegExp(`(${X.concat(K).join("|")})`,"g");if(t&&t.length){let e=t;const n=t.match(i);return n&&z.includes(n[1])&&(e=t.replace(i,"")),encodeURIComponent(e).replace(a,Q)}const n=e.match(/\/(.*?)$/);return(n?n[1]:e).replace(i,"")}(t.id,t.name),c=n?1:function(e){return Math.min(e.pixelAspectRatio||1,E)}(i),s=te(t.id),l=s,d=W(t.id,a?.hasAnimation,a?.allowAnimatedTransform),h={fileName:o,fileExtension:s,fileType:r,fittingType:e,preferredExtension:l,src:{id:t.id,width:t.width,height:t.height,isCropped:!1,isAnimated:de(t.id,a?.hasAnimation)},focalPoint:{x:t.focalPoint&&t.focalPoint.x,y:t.focalPoint&&t.focalPoint.y},parts:[],devicePixelRatio:c,quality:0,upscaleMethod:le(a),progressive:!0,watermark:"",unsharpMask:{},filters:{},transformed:d};return d&&(Ie(h,t,i),Ae(h,a)),h}function Oe(e,t,i){const a={...i},n=ue("isMobile");switch(e){case O.LEGACY_BG_FIT_AND_TILE:case O.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case O.LEGACY_BG_FIT_AND_TILE_VERTICAL:case O.LEGACY_BG_NORMAL:const e=n?b:L,i=n?w:A;a.width=Math.min(e,t.width),a.height=Math.min(i,Math.round(a.width/(t.width/t.height))),a.pixelAspectRatio=1}return a}const Me=$`fit/w_${"width"},h_${"height"}`,Re=$`fill/w_${"width"},h_${"height"},al_${"alignment"}`,Ge=$`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,ye=$`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,Ce=$`crop/w_${"width"},h_${"height"},al_${"alignment"}`,Se=$`fill/w_${"width"},h_${"height"},al_${"alignment"}`,Ne=$`,lg_${"upscaleMethodValue"}`,Pe=$`,q_${"quality"}`,ve=$`,quality_auto`,Fe=$`,usm_${"radius"}_${"amount"}_${"threshold"}`,xe=$`,bl`,ke=$`,wm_${"watermark"}`,He={[Y.CONTRAST]:$`,con_${"contrast"}`,[Y.BRIGHTNESS]:$`,br_${"brightness"}`,[Y.SATURATION]:$`,sat_${"saturation"}`,[Y.HUE]:$`,hue_${"hue"}`,[Y.BLUR]:$`,blur_${"blur"}`},Ye=$`,enc_auto`,Be=$`,enc_avif`,Ue=$`,enc_pavif`,$e=$`,pstr`;function De(e,t,i,a={},n){if(W(t.id,a?.hasAnimation,a?.allowAnimatedTransform)){if(q(t.id)){const{alignment:r,...o}=i;t.focalPoint={x:void 0,y:void 0},delete t?.crop,n=we(e,t,o,a)}else n=n||we(e,t,i,a);return function(e){const t=[];e.parts.forEach((e=>{switch(e.transformType){case M.CROP:t.push(ye(e));break;case M.LEGACY_CROP:t.push(Ce(e));break;case M.LEGACY_FILL:let i=Se(e);e.upscale&&(i+=Ne(e)),t.push(i);break;case M.FIT:let a=Me(e);e.upscale&&(a+=Ne(e)),t.push(a);break;case M.FILL:let n=Re(e);e.upscale&&(n+=Ne(e)),t.push(n);break;case M.FILL_FOCAL:let r=Ge(e);e.upscale&&(r+=Ne(e)),t.push(r)}}));let i=t.join("/");return e.quality&&(i+=Pe(e)),e.unsharpMask&&(i+=Fe(e.unsharpMask)),e.progressive||(i+=xe(e)),e.watermark&&(i+=ke(e)),e.filters&&(i+=Object.keys(e.filters).map((t=>He[t](e.filters))).join("")),e.fileType!==B.GIF&&(e.encoding===U.AVIF?(i+=Be(e),i+=ve(e)):e.encoding===U.PAVIF?(i+=Ue(e),i+=ve(e)):e.autoEncode&&(i+=Ye(e))),e.src?.isAnimated&&e.transformed&&(i+=$e(e)),`${e.src.id}/${I}/${i}/${e.fileName}.${e.preferredExtension}`}(n)}return t.id}const ze={[R.CENTER]:"50% 50%",[R.TOP_LEFT]:"0% 0%",[R.TOP_RIGHT]:"100% 0%",[R.TOP]:"50% 0%",[R.BOTTOM_LEFT]:"0% 100%",[R.BOTTOM_RIGHT]:"100% 100%",[R.BOTTOM]:"50% 100%",[R.RIGHT]:"100% 50%",[R.LEFT]:"0% 50%"},je=Object.entries(ze).reduce(((e,[t,i])=>(e[i]=t,e)),{}),Ve=[O.TILE,O.TILE_HORIZONTAL,O.TILE_VERTICAL,O.LEGACY_BG_FIT_AND_TILE,O.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,O.LEGACY_BG_FIT_AND_TILE_VERTICAL],We=[O.LEGACY_ORIGINAL_SIZE,O.ORIGINAL_SIZE,O.LEGACY_BG_NORMAL];function Ze(e,t,{width:i,height:a}){return e===O.TILE&&t.width>i&&t.height>a}function qe(e,{width:t,height:i}){if(!t||!i){const a=t||Math.min(980,e.width),n=a/e.width;return{width:a,height:i||e.height*n}}return{width:t,height:i}}function Je(e,t,i,a="center"){const n={img:{},container:{}};if(e===O.SCALE_TO_FILL){const e=t.focalPoint&&function(e){const t=`${e.x}% ${e.y}%`;return je[t]||""}(t.focalPoint),r=e||a;t.focalPoint&&!e?n.img={objectPosition:Xe(t,i,t.focalPoint)}:n.img={objectPosition:ze[r]}}else[O.LEGACY_ORIGINAL_SIZE,O.ORIGINAL_SIZE].includes(e)?n.img={objectFit:"none",top:"auto",left:"auto",right:"auto",bottom:"auto"}:Ve.includes(e)&&(n.container={backgroundSize:`${t.width}px ${t.height}px`});return n}function Xe(e,t,i){const{width:a,height:n}=e,{width:r,height:o}=t,{x:c,y:s}=i;if(!r||!o)return`${c}% ${s}%`;const l=Math.max(r/a,o/n),d=a*l,h=n*l,u=Math.max(0,Math.min(d-r,d*(c/100)-r/2)),g=Math.max(0,Math.min(h-o,h*(s/100)-o/2));return`${u&&Math.floor(u/(d-r)*100)}% ${g&&Math.floor(g/(h-o)*100)}%`}const Ke={width:"100%",height:"100%"};function Qe(e,t,i,a={}){const{autoEncode:n=!0,isSEOBot:r,shouldLoadHQImage:o,hasAnimation:c,allowAnimatedTransform:s,encoding:l}=a;if(!V(e,t,i))return v;const d=void 0===s||s,h=W(t.id,c,d);if(!h||o)return et(e,t,i,{...a,autoEncode:n,useSrcset:h});const u={...i,...qe(t,i)},{alignment:g,htmlTag:m}=u,_=Ze(e,t,u),p=function(e,t,{width:i,height:a},n=!1){if(n)return{width:i,height:a};const r=!We.includes(e),o=Ze(e,t,{width:i,height:a}),c=!o&&Ve.includes(e),s=c?t.width:i,l=c?t.height:a,d=r?function(e,t){return e>900?t?.05:.15:e>500?t?.1:.18:e>200?.25:1}(s,Z(t.id)):1;return{width:o?1920:s*d,height:l*d}}(e,t,u,r),f=function(e,t,i){return i?0:Ve.includes(t)?1:e>200?2:3}(u.width,e,r),T=function(e,t){const i=Ve.includes(e)&&!t;return e===O.SCALE_TO_FILL||i?O.SCALE_TO_FIT:e}(e,_),I=Je(e,t,i,g),{uri:E}=et(T,t,{...p,alignment:g,htmlTag:m},{autoEncode:n,filters:f?{blur:f}:{},hasAnimation:c,allowAnimatedTransform:d,encoding:l}),{attr:L={},css:A}=et(e,t,{...u,alignment:g,htmlTag:m},{});return A.img=A.img||{},A.container=A.container||{},Object.assign(A.img,I.img,Ke),Object.assign(A.container,I.container),{uri:E,css:A,attr:L,transformed:!0}}function et(e,t,i,a){let n={};if(V(e,t,i)){const r=Oe(e,t,i),o=we(e,t,r,a);n.uri=De(e,t,r,a,o),a?.useSrcset&&(n.srcset=function(e,t,i,a,n){const r=i.pixelAspectRatio||1;return{dpr:[`${1===r?n.uri:De(e,t,{...i,pixelAspectRatio:1},a)} 1x`,`${2===r?n.uri:De(e,t,{...i,pixelAspectRatio:2},a)} 2x`]}}(e,t,r,a,n)),Object.assign(n,function(e,t){let i;return i=t.htmlTag===C.BG?me:t.htmlTag===C.SVG?Te:fe,i(e,t)}(o,r),{transformed:o.transformed})}else n=v;return n}const tt="https://static.wixstatic.com/media/";"undefined"!=typeof window&&window.devicePixelRatio;ge();ge();const it=tt,{STATIC_MEDIA_URL:at}=e,nt=({fittingType:e,src:t,target:i,options:a})=>{const n=Qe(e,t,i,{...a,autoEncode:!0});return n?.uri&&!/^[a-z]+:/.test(n.uri)&&(n.uri=`${at}${n.uri}`),n},rt=/^[a-z]+:/,ot=e=>{const{id:t,containerId:i,uri:a,alt:n,name:o="",role:c,width:s,height:l,displayMode:d,devicePixelRatio:h,quality:u,alignType:g,bgEffectName:m="",focalPoint:_,upscaleMethod:p,className:f="",crop:I,imageStyles:E={},targetWidth:L,targetHeight:A,targetScale:b,onLoad:w=(()=>{}),onError:O=(()=>{}),shouldUseLQIP:M,containerWidth:R,containerHeight:G,getPlaceholder:y,isInFirstFold:C,placeholderTransition:S,socialAttrs:N,isSEOBot:P,skipMeasure:v,hasAnimation:F,encoding:x}=e,k=r.useRef(null);let H="";const Y="blur"===S,B=r.useRef(null);if(!B.current)if(y||M||C||P){const e={upscaleMethod:p,...u||{},shouldLoadHQImage:C,isSEOBot:P,hasAnimation:F,encoding:x};B.current=(y||nt)({fittingType:d,src:{id:a,width:s,height:l,crop:I,name:o,focalPoint:_},target:{width:R,height:G,alignment:g,htmlTag:"img"},options:e}),H=!B.current.transformed||C||P?"":"true"}else B.current={uri:void 0,css:{img:{}},attr:{img:{},container:{}},transformed:!1};const U=!P&&(y||M)&&!C&&B.current.transformed,$=r.useMemo((()=>JSON.stringify({containerId:i,...i&&{containerId:i},...g&&{alignType:g},...v&&{skipMeasure:!0},displayMode:d,...R&&{targetWidth:R},...G&&{targetHeight:G},...L&&{targetWidth:L},...A&&{targetHeight:A},...b&&{targetScale:b},isLQIP:U,isSEOBot:P,lqipTransition:S,encoding:x,imageData:{width:s,height:l,uri:a,name:o,displayMode:d,hasAnimation:F,...u&&{quality:u},...h&&{devicePixelRatio:h},..._&&{focalPoint:_},...I&&{crop:I},...p&&{upscaleMethod:p}}})),[i,g,v,d,R,G,L,A,b,U,P,S,x,s,l,a,o,F,u,h,_,I,p]),D=B.current,z=D?.uri,j=D?.srcset,V=D.css?.img,W=`${T} ${f}`;r.useEffect((()=>{const e=k.current;w&&e?.currentSrc&&e?.complete&&w({target:e})}),[]);const Z=D&&!D?.transformed?`max(${s}px, 100%)`:L?`${L}px`:null;return r.createElement("wow-image",{id:t,class:W,"data-image-info":$,"data-motion-part":`BG_IMG ${i}`,"data-bg-effect-name":m,"data-has-ssr-src":H,"data-animate-blur":!P&&U&&Y?"":void 0,style:Z?{"--wix-img-max-width":Z}:{}},r.createElement("img",{src:z,ref:k,alt:n||"",role:c,style:{...V,...E},onLoad:w,onError:O,width:R||void 0,height:G||void 0,...N,srcSet:C?j?.dpr?.map((e=>rt.test(e)?e:`${at}${e}`)).join(", "):void 0,fetchpriority:C?"high":void 0,loading:!1===C?"lazy":void 0,suppressHydrationWarning:!0}))};var ct="I5zqsT";var st=e=>{var t,a;const{id:n,alt:o,role:c,className:l,imageStyles:d={},targetWidth:h,targetHeight:u,onLoad:g,onError:m,containerWidth:_,containerHeight:p,isInFirstFold:f,socialAttrs:T,skipMeasure:I,responsiveImageProps:E,zoomedImageResponsiveOverride:L}=e,A=h||_,b=u||p,w=A+"px",{fallbackSrc:O,srcset:M,css:R}=E||{};return O&&M&&R?r.createElement("img",i()({fetchpriority:f?"high":void 0,loading:!1===f?"lazy":void 0,sizes:w,srcSet:I?null==L?void 0:L.srcset:null==E?void 0:E.srcset,id:n,src:O,alt:o||"",role:c,style:{...d,...I?{...null==L||null==(t=L.css)?void 0:t.img}:{...null==E||null==(a=E.css)?void 0:a.img}},onLoad:g,onError:m,className:s(l,ct),width:A,height:b},T)):r.createElement(ot,e)};var lt=e=>{var t,i,a;const{className:n,customIdPrefix:o,getPlaceholder:c,hasAnimation:s,...l}=e,d=r.useMemo((()=>JSON.stringify({containerId:l.containerId,alignType:l.alignType,fittingType:l.displayMode,hasAnimation:s,imageData:{width:l.width,height:l.height,uri:l.uri,name:l.name,...l.quality&&{quality:l.quality},displayMode:l.displayMode}})),[l,s]),h=r.useRef(null);h.current||(h.current=c?c({fittingType:l.displayMode,src:{id:l.uri,width:l.width,height:l.height,name:l.name},target:{width:l.containerWidth,height:l.containerHeight,alignment:l.alignType,htmlTag:"bg"},options:{hasAnimation:s,allowAnimatedTransform:!1}}):{uri:void 0,css:{img:{}},attr:{img:{},container:{}}});const u=h.current,g=null!=(t=null==u?void 0:u.uri)?t:"",m=null!=(i=null==(a=u.css)?void 0:a.container)?i:{},_=Object.assign(g?{backgroundImage:"url("+g+")"}:{},m);return r.createElement("wix-bg-image",{id:""+(o||"bgImg_")+l.containerId,class:n,style:_,"data-tiled-image-info":d,"data-has-bg-scroll-effect":l.hasBgScrollEffect||"","data-bg-effect-name":l.bgEffectName||"","data-motion-part":"BG_IMG "+l.containerId})};const dt=new RegExp("<%= compId %>","g"),ht=(e,t)=>e.replace(dt,t);var ut=e=>null==e?void 0:e.replace(":hover",""),gt="bX9O_S",mt="Z_wCwr",_t="Jxk_UL",pt="K8MSra",ft="YTb3b4";const Tt={quality:{unsharpMask:{radius:.33,amount:1,threshold:0}},devicePixelRatio:1};var It=e=>{const{id:t,videoRef:a,videoInfo:n,posterImageInfo:o,muted:c,preload:l,loop:d,alt:h,isVideoEnabled:u,getPlaceholder:g,extraClassName:m=""}=e;n.containerId=ut(n.containerId);const _=r.useMemo((()=>JSON.stringify(n)),[n]),p=r.createElement(r.Fragment,null,o.filterEffectSvgString&&r.createElement("svg",{id:"svg_"+n.containerId,className:ft},r.createElement("defs",{dangerouslySetInnerHTML:{__html:ht(o.filterEffectSvgString,n.containerId)}})),r.createElement(st,i()({key:n.videoId+"_img",id:o.containerId+"_img",className:s(mt,_t,"bgVideoposter",m),imageStyles:{width:"100%",height:"100%"}},o,Tt,{getPlaceholder:g})));return u?r.createElement("wix-video",{id:t,"data-video-info":_,"data-motion-part":"BG_IMG "+n.containerId,class:s(gt,"bgVideo",m)},r.createElement("video",{key:n.videoId+"_video",ref:a,id:n.containerId+"_video",className:pt,crossOrigin:"anonymous","aria-label":h,playsInline:!0,preload:l,muted:c,loop:d,tabIndex:-1}),p):p},Et="SUz0WK";var Lt=e=>{const{id:t,containerId:i,pageId:a,children:n,bgEffectName:o="",containerSize:c}=e;return r.createElement("wix-bg-media",{id:t,class:Et,"data-container-id":i,"data-container-size":((null==c?void 0:c.width)||0)+", "+((null==c?void 0:c.height)||0),"data-page-id":a,"data-bg-effect-name":o,"data-motion-part":"BG_MEDIA "+i},n)};const At="bgOverlay";var bt="m4khSP",wt="FNxOn5";var Ot=e=>{const{imageOverlay:t}=e;return r.createElement("div",{"data-testid":At,className:bt},t&&r.createElement(lt,i()({customIdPrefix:"bgImgOverlay_",className:wt},t)))};const Mt="bgLayers",Rt="colorUnderlay",Gt="mediaPadding",yt="canvas";var Ct="MW5IWV",St="N3eg0s",Nt="Kv1aVt",Pt="dLPlxY",vt="VgO9Yg",Ft="LWbAav",xt="yK6aSC",kt="K_YxMd",Ht="NGjcJN",Yt="mNGsUM";const Bt="bgImage";var Ut=e=>{const{videoRef:t,canvasRef:a,hasBgFullscreenScrollEffect:n,image:o,backgroundImage:c,backgroundMedia:l,video:d,backgroundOverlay:h,shouldPadMedia:u,extraClass:g="",shouldRenderUnderlay:m=!d,reducedMotion:_=!1,getPlaceholder:p,hasCanvasAnimation:f,useWixMediaCanvas:T}=e,{onImageLoad:I}=(e=>{let{onReady:t,image:i}=e;return(0,r.useEffect)((()=>{t&&!i&&t()}),[t,i]),{onImageLoad:e=>{null!=i&&i.onLoad&&i.onLoad(e),t&&t()}}})(e),E=ut(e.containerId),L="img_"+ut(E),A=o&&r.createElement(st,i()({id:L,className:s(Nt,Pt,Yt,Bt),imageStyles:{width:"100%",height:"100%"},getPlaceholder:p},o,{onLoad:I})),b=c&&r.createElement(lt,i()({},c,{containerId:E,className:s(Nt,Pt,Yt,Bt),getPlaceholder:p})),w=d&&r.createElement(It,i()({id:"videoContainer_"+E},d,{extraClassName:xt,reducedMotion:_,videoRef:t,getPlaceholder:p})),O=T&&a||f?r.createElement("wix-media-canvas",null,A,b,w,r.createElement("canvas",{id:E+"webglcanvas",className:s(kt,"webglcanvas"),"aria-label":(null==d?void 0:d.alt)||"",role:"presentation","data-testid":yt,"data-containerId":E})):r.createElement(r.Fragment,null,A,b,w,a&&r.createElement("canvas",{id:E+"webglcanvas",ref:a,className:s(kt,"webglcanvas"),"aria-label":(null==d?void 0:d.alt)||"",role:"presentation","data-testid":yt})),M=l?r.createElement(Lt,i()({id:"bgMedia_"+E},l),O):r.createElement("div",{id:"bgMedia_"+E,"data-motion-part":"BG_MEDIA "+E,className:vt},O),R=h&&r.createElement(Ot,h);return r.createElement("div",{id:Mt+"_"+E,"data-hook":Mt,"data-motion-part":"BG_LAYER "+E,className:s(Ct,g,{[St]:n})},m&&r.createElement("div",{"data-testid":Rt,className:s(Ft,Nt)}),u?r.createElement("div",{"data-testid":Gt,className:Ht},M,R):r.createElement(r.Fragment,null,M,R))},$t="YzqVVZ",Dt="mwF7X1",zt="YGilLk";var jt=e=>{let{id:t,fillLayers:a,children:n,meshProps:r,videoRef:c,getPlaceholder:l,onReady:d}=e;const h=a.hasBgFullscreenScrollEffect;return o().createElement(o().Fragment,null,o().createElement(Ut,i()({},a,{onReady:d,getPlaceholder:l,videoRef:c})),o().createElement(f,i()({id:t},r,{extraClassName:s({[Dt]:h})}),n))};const Vt="column-strip__column",Wt=(e,t)=>{const{id:a,className:n,customClassNames:r=[],children:c,onClick:l,onDblClick:g,onMouseEnter:m,onMouseLeave:_,shouldAddTabIndex0:p,hasPlatformClickHandler:f,translations:T,fillLayers:I,onStop:E,isRepeaterItem:L,columnOverrides:A}=e,b=s(n,$t,d(L?u.repeaterItem:A?Vt:"",...r),{[zt]:f}),w=p?{tabIndex:0,role:"region","aria-label":(null==T?void 0:T.ariaLabel)||"Interactive element, focus to trigger content change"}:{},O=function(e,t,i){const a=o().useRef(null),n=o().useRef(null);return t?n.current||(n.current={play:()=>a.current?.play(),load:()=>a.current?.load(),pause:()=>a.current?.pause(),stop:()=>{a.current&&(a.current.pause(),a.current.currentTime=0,i&&i(a.current))}}):n.current=null,o().useImperativeHandle(e,(()=>n.current||{load(){},stop(){}})),a}(t,!!I.video,E);return o().createElement("div",i()({id:a},h(e),{className:b,onClick:l,onDoubleClick:g,onMouseEnter:m,onMouseLeave:_},w),o().createElement(jt,i()({},e,{videoRef:O}),c))};const Zt={Column_DefaultColumn:{component:o().forwardRef(Wt)}}}(),n}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[Column_DefaultColumn].7e29f356.bundle.min.js.map