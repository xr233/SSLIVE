webpackJsonpjwplayer([4],{15:function(e,t,i){var r,n;r=[i(1),i(18),i(2),i(23),i(16)],n=function(e,t,i,r,n){function a(t){if(this._currentTextTrackIndex=-1,t){if(this._renderNatively=n.renderNatively(this.getName().name),this._textTracks?this._textTracks=e.reject(this._textTracks,function(e){if(this._renderNatively&&"nativecaptions"===e._id||"metadata"===e.kind)return this._tracksById[e._id]=null,!0},this):this._initTextTracks(),t.length){var r=0,a=t.length;for(r;r<a;r++){var s=t[r];if(!s._id){if("captions"===s.kind||"metadata"===s.kind){if(s._id="native"+s.kind,!s.label&&"captions"===s.kind){var c=n.createLabel(s,this._unknownCount);s.name=c.label,this._unknownCount=c.unknownCount}}else s._id=n.createId(s,this._textTracks.length);s.inuse=!0}if(s.inuse&&!this._tracksById[s._id])if("metadata"===s.kind)s.mode="hidden",s.oncuechange=L.bind(this),this._tracksById[s._id]=s;else if(b(s.kind)){var o,d=s.mode;if(s.mode="hidden",!s.cues.length&&s.embedded)continue;if(s.mode=d,this._cuesByTrackId[s._id]&&!this._cuesByTrackId[s._id].loaded){for(var u=this._cuesByTrackId[s._id].cues;o=u.shift();)p(s,o);s.mode=d,this._cuesByTrackId[s._id].loaded=!0}I.call(this,s)}}}this._renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||v.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),i.isEdge()&&(this.addTrackHandler=this.addTrackHandler||_.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler))),this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})}}function s(e){if(this._renderNatively=n.renderNatively(this.getName().name),this._renderNatively){var t=e===this._itemTracks;t||r.cancelXhr(this._itemTracks),this._itemTracks=e,e&&(t||(this.disableTextTrack(),A.call(this),this.addTextTracks(e)))}}function c(){return this._currentTextTrackIndex}function o(t){this._textTracks&&(0===t&&e.each(this._textTracks,function(e){e.mode=e.embedded?"hidden":"disabled"}),this._currentTextTrackIndex!==t-1&&(this.disableTextTrack(),this._currentTextTrackIndex=t-1,this._renderNatively&&(this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing"),this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks}))))}function d(e){if(e.text&&e.begin&&e.end){var t=e.trackid.toString(),i=this._tracksById&&this._tracksById[t];i||(i={kind:"captions",_id:t,data:[]},this.addTextTracks([i]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));var n;e.useDTS&&(i.source||(i.source=e.source||"mpegts")),n=e.begin+"_"+e.text;var a=this._metaCuesByTextTime[n];if(!a){a={begin:e.begin,end:e.end,text:e.text},this._metaCuesByTextTime[n]=a;var s=r.convertToVTTCues([a])[0];i.data.push(s)}}}function u(e){this._tracksById||this._initTextTracks();var t="native"+e.type,i=this._tracksById[t],r="captions"===e.type?"Unknown CC":"ID3 Metadata",n=e.cue;if(!i){var a={kind:e.type,_id:t,label:r,embedded:!0};i=w.call(this,a),this._renderNatively||"metadata"===i.kind?this.setTextTracks(this.video.textTracks):y.call(this,[i])}C.call(this,i,n)&&(this._renderNatively||"metadata"===i.kind?p(i,n):i.data.push(n))}function l(e){var t=this._tracksById[e.name];if(t){t.source=e.source;for(var i=e.captions||[],n=[],a=!1,s=0;s<i.length;s++){var c=i[s],o=e.name+"_"+c.begin+"_"+c.end;this._metaCuesByTextTime[o]||(this._metaCuesByTextTime[o]=c,n.push(c),a=!0)}a&&n.sort(function(e,t){return e.begin-t.begin});var d=r.convertToVTTCues(n);Array.prototype.push.apply(t.data,d)}}function h(e,t,i){e&&(f(e,t,i),this.instreamMode||(e.addEventListener?e.addEventListener(t,i):e["on"+t]=i))}function f(e,t,i){e&&(e.removeEventListener?e.removeEventListener(t,i):e["on"+t]=null)}function T(){r.cancelXhr(this._itemTracks);var e=this._tracksById&&this._tracksById.nativemetadata;(this._renderNatively||e)&&(x.call(this,this.video.textTracks),e&&(e.oncuechange=null)),this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._activeCuePosition=null,this._renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),x.call(this,this.video.textTracks))}function k(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];e&&(e.mode=e.embedded||"nativecaptions"===e._id?"hidden":"disabled")}}function g(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];e&&(e.mode="showing")}}function v(){var t=this.video.textTracks,i=e.filter(t,function(e){return(e.inuse||!e._id)&&b(e.kind)});if(!this._textTracks||S.call(this,i))return void this.setTextTracks(t);var r=-1,n=0;for(n;n<this._textTracks.length;n++)if("showing"===this._textTracks[n].mode){r=n;break}r!==this._currentTextTrackIndex&&this.setSubtitlesTrack(r+1)}function _(){this.setTextTracks(this.video.textTracks)}function y(e){if(e){this._textTracks||this._initTextTracks(),this._renderNatively=n.renderNatively(this.getName().name);for(var t=0;t<e.length;t++){var i=e[t];if(!i.kind||b(i.kind)){var a=w.call(this,i);I.call(this,a),i.file&&(i.data=[],r.loadFile(i,this.addVTTCuesToTrack.bind(this,a),M))}}!this._renderNatively&&this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})}}function m(e,t){if(this._renderNatively){var i=this._tracksById[e._id];if(!i)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[e._id]={cues:t,loaded:!1});if(!this._cuesByTrackId[e._id]||!this._cuesByTrackId[e._id].loaded){var r;for(this._cuesByTrackId[e._id]={cues:t,loaded:!0};r=t.shift();)p(i,r)}}}function p(e,t){if(!i.isEdge()||!window.TextTrackCue)return void e.addCue(t);var r=new window.TextTrackCue(t.startTime,t.endTime,t.text);e.addCue(r)}function x(t){t.length&&e.each(t,function(e){e.mode="hidden";for(var t=e.cues.length;t--;)e.removeCue(e.cues[t]);e.embedded||(e.mode="disabled"),e.inuse=!1})}function b(e){return"subtitles"===e||"captions"===e}function E(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._unknownCount=0}function w(t){var i,r=n.createLabel(t,this._unknownCount),a=r.label;if(this._unknownCount=r.unknownCount,this._renderNatively||"metadata"===t.kind){var s=this.video.textTracks;i=e.findWhere(s,{label:a}),i?(i.kind=t.kind,i.language=t.language||""):i=this.video.addTextTrack(t.kind,a,t.language||""),i["default"]=t["default"],i.mode="disabled",i.inuse=!0}else i=t,i.data=i.data||[];return i._id||(i._id=n.createId(t,this._textTracks.length)),i}function I(e){this._textTracks.push(e),this._tracksById[e._id]=e}function A(){if(this._textTracks){var t=e.filter(this._textTracks,function(e){return e.embedded||"subs"===e.groupid});this._initTextTracks(),e.each(t,function(e){this._tracksById[e._id]=e}),this._textTracks=t}}function L(i){var r=i.currentTarget.activeCues;if(r&&r.length){var n=r[r.length-1].startTime;if(this._activeCuePosition!==n){var a=[];if(e.each(r,function(e){e.startTime<n||(e.data||e.value?a.push(e):e.text&&this.trigger("meta",{metadataTime:n,metadata:JSON.parse(e.text)}))},this),a.length){var s=t.parseID3(a);this.trigger("meta",{metadataTime:n,metadata:s})}this._activeCuePosition=n}}}function C(e,t){var i=e.kind;this._cachedVTTCues[e._id]||(this._cachedVTTCues[e._id]={});var r,n=this._cachedVTTCues[e._id];switch(i){case"captions":r=Math.floor(20*t.startTime);var a=Math.floor(20*t.endTime),s=n[r]||n[r+1]||n[r-1];return!(s&&Math.abs(s-a)<=1)&&(n[r]=a,!0);case"metadata":var c=t.data?new Uint8Array(t.data).join(""):t.text;return r=t.startTime+c,!n[r]&&(n[r]=t.endTime,!0)}}function S(e){if(e.length>this._textTracks.length)return!0;for(var t=0;t<e.length;t++){var i=e[t];if(!i._id||!this._tracksById[i._id])return!0}return!1}function M(e){i.log("CAPTIONS("+e+")")}var R={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_renderNatively:!1,_activeCuePosition:null,_initTextTracks:E,addTracksListener:h,clearTracks:T,disableTextTrack:k,enableTextTrack:g,getSubtitlesTrack:c,removeTracksListener:f,addTextTracks:y,setTextTracks:a,setupSideloadedTracks:s,setSubtitlesTrack:o,textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:l,addCaptionsCue:d,addVTTCue:u,addVTTCuesToTrack:m};return R}.apply(t,r),!(void 0!==n&&(e.exports=n))},91:function(e,t,i){var r,n;r=[i(182),i(44),i(4),i(1)],n=function(e,t,i,r){function n(e,n){function l(i){var n=i.target,c=i.initData;if(n.webkitKeys||n.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")),!n.webkitKeys)throw new Error("Could not create MediaKeys");var u=e.fairplay;u.initData=c,t.ajax(u.certificateUrl,function(e){var t=new Uint8Array(e.response),i=u.extractContentId(d(c));r.isString(i)&&(i=o(i));var l=a(c,i,t),h=n.webkitKeys.createSession("video/mp4",l);if(!h)throw new Error("Could not create key session");s(h,"webkitkeymessage",f),s(h,"webkitkeyerror",v),u.session=h},g,{responseType:"arraybuffer"})}function f(t){var i=e.fairplay,n=t.target,a=t.message,s=new XMLHttpRequest;s.responseType=i.licenseResponseType,s.addEventListener("load",T,!1),s.addEventListener("error",_,!1);var c="";c=r.isFunction(i.processSpcUrl)?i.processSpcUrl(d(i.initData)):i.processSpcUrl,s.open("POST",c,!0),r.each(i.licenseRequestHeaders,function(e){s.setRequestHeader(e.name,e.value)});var o=i.licenseRequestMessage(a,n);s.send(o)}function T(t){var i=t.target,n=e.fairplay.extractKey(i.response);r.isFunction(n.then)?n.then(k):k(n)}function k(t){var i=e.fairplay.session,n=t;r.isString(n)&&(n=u(n)),i.update(n)}function g(){e.trigger(i.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: Failed to retrieve the server certificate"})}function v(){e.trigger(i.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: Decryption key error was encountered"})}function _(){e.trigger(i.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: The license request failed"})}var y=n.sources[0];if(!e.fairplay||e.fairplay.source!==y){var m=y.drm;m&&m.fairplay?(e.fairplay=r.extend({},h,m.fairplay),e.fairplay.source=y,e.fairplay.destroy=function(){c(e.video,"webkitneedkey",l);var t=this.session;t&&(c(t,"webkitkeymessage",f),c(t,"webkitkeyerror",v)),e.fairplay=null},s(e.video,"webkitneedkey",l)):e.fairplay&&e.fairplay.destroy()}}function a(e,t,i){var r=0,n=new ArrayBuffer(e.byteLength+4+t.byteLength+4+i.byteLength),a=new DataView(n),s=new Uint8Array(n,r,e.byteLength);s.set(e),r+=e.byteLength,a.setUint32(r,t.byteLength,!0),r+=4;var c=new Uint16Array(n,r,t.length);c.set(t),r+=c.byteLength,a.setUint32(r,i.byteLength,!0),r+=4;var o=new Uint8Array(n,r,i.byteLength);return o.set(i),new Uint8Array(n,0,n.byteLength)}function s(e,t,i){c(e,t,i),e.addEventListener(t,i,!1)}function c(e,t,i){e&&e.removeEventListener(t,i)}function o(e){for(var t=new ArrayBuffer(2*e.length),i=new Uint16Array(t),r=0,n=e.length;r<n;r++)i[r]=e.charCodeAt(r);return i}function d(e){var t=new Uint16Array(e.buffer);return String.fromCharCode.apply(null,t)}function u(e){for(var t=window.atob(e),i=t.length,r=new Uint8Array(new ArrayBuffer(i)),n=0;n<i;n++)r[n]=t.charCodeAt(n);return r}var l=function(t,i){e.call(this,t,i);var r=this.init,a=this.load,s=this.destroy;this.init=function(e){n(this,e),r.call(this,e)},this.load=function(e){n(this,e),a.call(this,e)},this.destroy=function(e){this.fairplay&&this.fairplay.destroy(),s.call(this,e)}},h={certificateUrl:"",processSpcUrl:"",licenseResponseType:"arraybuffer",licenseRequestHeaders:[],licenseRequestMessage:function(e){return e},extractContentId:function(e){return e.split("skd://")[1]},extractKey:function(e){return new Uint8Array(e)}};return l.getName=e.getName,l}.apply(t,r),!(void 0!==n&&(e.exports=n))},182:function(e,t,i){var r,n;r=[i(28),i(2),i(45),i(1),i(4),i(6),i(17),i(3),i(15)],n=function(e,t,i,r,n,a,s,c,o){function d(e,i){t.foreach(e,function(e,t){i.addEventListener(e,t,!1)})}function u(e,i){t.foreach(e,function(e,t){i.removeEventListener(e,t,!1)})}function l(e){if("hls"===e.type)if(e.androidhls!==!1){var i=t.isAndroidNative;if(i(2)||i(3)||i("4.0"))return!1;if(t.isAndroid())return!0}else if(t.isAndroid())return!1;return null}function h(h,w){function I(e,t){He.setAttribute(e,t||"")}function A(){Ae&&(le(He.audioTracks),pe.setTextTracks(He.textTracks),I("jw-loaded","data"))}function L(){Ae&&I("jw-loaded","started")}function C(e){pe.trigger("click",e)}function S(){Ae&&!Ce&&(F(P()),N(ne(),_e,ve))}function M(){Ae&&N(ne(),_e,ve)}function R(){f(we),be=!0,Ae&&(pe.state===a.STALLED?pe.setState(a.PLAYING):pe.state===a.PLAYING&&(we=setTimeout(re,T)),Ce&&He.duration===1/0&&0===He.currentTime||(F(P()),D(He.currentTime),N(ne(),_e,ve),pe.state===a.PLAYING&&(pe.trigger(n.JWPLAYER_MEDIA_TIME,{position:_e,duration:ve}),B())))}function B(){var e=Fe.level;if(e.width!==He.videoWidth||e.height!==He.videoHeight){if(e.width=He.videoWidth,e.height=He.videoHeight,ke(),!e.width||!e.height||Le===-1)return;Fe.reason=Fe.reason||"auto",Fe.mode="hls"===me[Le].type?"auto":"manual",Fe.bitrate=0,e.index=Le,e.label=me[Le].label,pe.trigger("visualQuality",Fe),Fe.reason=""}}function N(e,t,i){0===i||e===Ie&&i===ve||(Ie=e,pe.trigger(n.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100*e,position:t,duration:i}))}function D(e){ve<0&&(e=-(ee()-e)),_e=e}function P(){var e=He.duration,t=ee();if(e===1/0&&t){var i=t-$();i!==1/0&&i>k&&(e=-i)}return e}function F(e){ve=e,Ee&&e&&e!==1/0&&pe.seek(Ee)}function O(){var e=P();Ce&&e===1/0&&(e=0),pe.trigger(n.JWPLAYER_MEDIA_META,{duration:e,height:He.videoHeight,width:He.videoWidth}),F(e)}function H(){Ae&&(be=!0,Ce||ke(),v&&pe.setTextTracks(pe._textTracks),U())}function W(){Ae&&(He.muted&&(He.muted=!1,He.muted=!0),I("jw-loaded","meta"),O())}function U(){ye||(ye=!0,pe.trigger(n.JWPLAYER_MEDIA_BUFFER_FULL))}function j(){pe.setState(a.PLAYING),He.hasAttribute("jw-played")||I("jw-played",""),pe.trigger(n.JWPLAYER_PROVIDER_FIRST_FRAME,{})}function Y(){pe.state!==a.COMPLETE&&He.currentTime!==He.duration&&pe.setState(a.PAUSED)}function J(){Ce||He.paused||He.ended||pe.state!==a.LOADING&&pe.state!==a.ERROR&&(pe.seeking||pe.setState(a.STALLED))}function V(){Ae&&pe.trigger(n.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"})}function K(e){var i;return"array"===t.typeOf(e)&&e.length>0&&(i=r.map(e,function(e,t){return{label:e.label||t}})),i}function G(e){me=e,Le=q(e);var t=K(e);t&&pe.trigger(n.JWPLAYER_MEDIA_LEVELS,{levels:t,currentQuality:Le})}function q(e){var t=Math.max(0,Le),i=w.qualityLabel;if(e)for(var r=0;r<e.length;r++)if(e[r]["default"]&&(t=r),i&&e[r].label===i)return r;return Fe.reason="initial choice",Fe.level={},t}function Q(){var e=He.play();e&&e["catch"]&&e["catch"](function(e){console.warn(e)})}function X(e,i){Ee=0,f(we);var r=document.createElement("source");r.src=me[Le].file;var n=He.src!==r.src,s=He.getAttribute("jw-loaded"),c=He.hasAttribute("jw-played");n||"none"===s||"started"===s?(ve=i,z(me[Le]),pe.setupSideloadedTracks(pe._itemTracks),He.load()):(0===e&&He.currentTime>0&&(Ee=-1,pe.seek(e)),Q()),_e=He.currentTime,y&&!c&&(U(),He.paused||pe.state===a.PLAYING||pe.setState(a.LOADING)),t.isIOS()&&pe.getFullScreen()&&(He.controls=!0),e>0&&pe.seek(e)}function z(e){Ne=null,De=-1,Pe=-1,Fe.reason||(Fe.reason="initial choice",Fe.level={}),be=!1,ye=!1,Ce=l(e),e.preload&&e.preload!==He.getAttribute("preload")&&I("preload",e.preload);var t=document.createElement("source");t.src=e.file;var i=He.src!==t.src;i&&(I("jw-loaded","none"),He.src=e.file)}function Z(){He&&(pe.disableTextTrack(),He.removeAttribute("preload"),He.removeAttribute("src"),He.removeAttribute("jw-loaded"),He.removeAttribute("jw-played"),i.emptyElement(He),Le=-1,!_&&"load"in He&&He.load())}function $(){for(var e=He.seekable?He.seekable.length:0,t=1/0;e--;)t=Math.min(t,He.seekable.start(e));return t}function ee(){for(var e=He.seekable?He.seekable.length:0,t=0;e--;)t=Math.max(t,He.seekable.end(e));return t}function te(){pe.seeking=!1,pe.trigger(n.JWPLAYER_MEDIA_SEEKED)}function ie(){pe.trigger("volume",{volume:Math.round(100*He.volume)}),pe.trigger("mute",{mute:He.muted})}function re(){He.currentTime===_e&&J()}function ne(){var e=He.buffered,i=He.duration;return!e||0===e.length||i<=0||i===1/0?0:t.between(e.end(e.length-1)/i,0,1)}function ae(){if(Ae&&pe.state!==a.IDLE&&pe.state!==a.COMPLETE){if(f(we),Le=-1,Me=!0,pe.trigger(n.JWPLAYER_MEDIA_BEFORECOMPLETE),!Ae)return;se()}}function se(){f(we),pe.setState(a.COMPLETE),Me=!1,pe.trigger(n.JWPLAYER_MEDIA_COMPLETE)}function ce(e){Re=!0,ue(e),t.isIOS()&&(He.controls=!1)}function oe(){for(var e=-1,t=0;t<He.audioTracks.length;t++)if(He.audioTracks[t].enabled){e=t;break}he(e)}function de(e){Re=!1,ue(e),t.isIOS()&&(He.controls=!1)}function ue(e){pe.trigger("fullscreenchange",{target:e.target,jwstate:Re})}function le(e){if(Ne=null,e){if(e.length){for(var t=0;t<e.length;t++)if(e[t].enabled){De=t;break}De===-1&&(De=0,e[De].enabled=!0),Ne=r.map(e,function(e){var t={name:e.label||e.language,language:e.language};return t})}pe.addTracksListener(e,"change",oe),Ne&&pe.trigger("audioTracks",{currentTrack:De,tracks:Ne})}}function he(e){He&&He.audioTracks&&Ne&&e>-1&&e<He.audioTracks.length&&e!==De&&(He.audioTracks[De].enabled=!1,De=e,He.audioTracks[De].enabled=!0,pe.trigger("audioTrackChanged",{currentTrack:De,tracks:Ne}))}function fe(){return Ne||[]}function Te(){return De}function ke(){if("hls"===me[0].type){var e="video";0===He.videoHeight&&(e="audio"),pe.trigger("mediaType",{mediaType:e})}}this.state=a.IDLE,this.seeking=!1,r.extend(this,c,o),this.trigger=function(e,t){if(Ae)return c.trigger.call(this,e,t)},this.setState=function(e){return s.setState.call(this,e)};var ge,ve,_e,ye,me,pe=this,xe={click:C,durationchange:S,ended:ae,error:V,loadstart:L,loadeddata:A,loadedmetadata:W,canplay:H,playing:j,progress:M,pause:Y,seeked:te,timeupdate:R,volumechange:ie,webkitbeginfullscreen:ce,webkitendfullscreen:de},be=!1,Ee=0,we=-1,Ie=-1,Ae=!0,Le=-1,Ce=null,Se=!!w.sdkplatform,Me=!1,Re=!1,Be=t.noop,Ne=null,De=-1,Pe=-1,Fe={level:{}},Oe=document.getElementById(h),He=Oe?Oe.querySelector("video"):void 0;He=He||document.createElement("video"),He.className="jw-video jw-reset",this.isSDK=Se,this.video=He,r.isObject(w.cast)&&w.cast.appid&&I("disableRemotePlayback",""),d(xe,He),I("x-webkit-airplay","allow"),I("webkit-playsinline"),I("playsinline"),this.stop=function(){f(we),Ae&&(Z(),this.clearTracks(),t.isIE()&&He.pause(),this.setState(a.IDLE))},this.destroy=function(){Be=t.noop,u(xe,He),this.removeTracksListener(He.audioTracks,"change",oe),this.removeTracksListener(He.textTracks,"change",pe.textTrackChangeHandler),this.remove(),this.off()},this.init=function(e){Ae&&(me=e.sources,Le=q(e.sources),e.sources.length&&"hls"!==e.sources[0].type&&this.sendMediaType(e.sources),_e=e.starttime||0,ve=e.duration||0,Fe.reason="",z(me[Le]),this.setupSideloadedTracks(e.tracks))},this.load=function(e){Ae&&(G(e.sources),e.sources.length&&"hls"!==e.sources[0].type&&this.sendMediaType(e.sources),y&&!He.hasAttribute("jw-played")||pe.setState(a.LOADING),X(e.starttime||0,e.duration||0))},this.play=function(){return pe.seeking?(pe.setState(a.LOADING),void pe.once(n.JWPLAYER_MEDIA_SEEKED,pe.play)):(Be(),void Q())},this.pause=function(){f(we),He.pause(),Be=function(){var e=He.paused&&He.currentTime;if(e&&He.duration===1/0){var t=ee(),i=t-$(),r=i<k,n=t-He.currentTime;r&&t&&(n>15||n<0)&&(He.currentTime=Math.max(t-10,t-i))}},this.setState(a.PAUSED)},this.seek=function(e){if(Ae)if(e<0&&(e+=$()+ee()),0===Ee&&this.trigger(n.JWPLAYER_MEDIA_SEEK,{position:He.currentTime,offset:e}),be||(be=!!ee()),be){Ee=0;try{pe.seeking=!0,He.currentTime=e}catch(t){pe.seeking=!1,Ee=e}}else Ee=e,m&&He.paused&&Q()},this.volume=function(e){e=t.between(e/100,0,1),He.volume=e},this.mute=function(e){He.muted=!!e},this.checkComplete=function(){return Me},this.detachMedia=function(){return f(we),this.removeTracksListener(He.textTracks,"change",this.textTrackChangeHandler),this.disableTextTrack(),Ae=!1,He},this.attachMedia=function(){Ae=!0,be=!1,this.seeking=!1,He.loop=!1,this.enableTextTrack(),this.addTracksListener(He.textTracks,"change",this.textTrackChangeHandler),Me&&se()},this.setContainer=function(e){ge=e,e.appendChild(He)},this.getContainer=function(){return ge},this.remove=function(){Z(),f(we),ge===He.parentNode&&ge.removeChild(He)},this.setVisibility=function(t){t=!!t,t||p?e.style(ge,{visibility:"visible",opacity:1}):e.style(ge,{visibility:"",opacity:0})},this.resize=function(t,i,r){if(!(t&&i&&He.videoWidth&&He.videoHeight))return!1;var n={objectFit:"",width:"",height:""};if("uniform"===r){var a=t/i,s=He.videoWidth/He.videoHeight;Math.abs(a-s)<.09&&(n.objectFit="fill",r="exactfit")}var c=g||p||x||b;if(c){var o=-Math.floor(He.videoWidth/2+1),d=-Math.floor(He.videoHeight/2+1),u=Math.ceil(100*t/He.videoWidth)/100,l=Math.ceil(100*i/He.videoHeight)/100;"none"===r?u=l=1:"fill"===r?u=l=Math.max(u,l):"uniform"===r&&(u=l=Math.min(u,l)),n.width=He.videoWidth,n.height=He.videoHeight,n.top=n.left="50%",n.margin=0,e.transform(He,"translate("+o+"px, "+d+"px) scale("+u.toFixed(2)+", "+l.toFixed(2)+")")}return e.style(He,n),!1},this.setFullscreen=function(e){if(e=!!e){var i=t.tryCatch(function(){var e=He.webkitEnterFullscreen||He.webkitEnterFullScreen;e&&e.apply(He)});return!(i instanceof t.Error)&&pe.getFullScreen()}var r=He.webkitExitFullscreen||He.webkitExitFullScreen;return r&&r.apply(He),e},pe.getFullScreen=function(){return Re||!!He.webkitDisplayingFullscreen},this.setCurrentQuality=function(e){if(Le!==e&&e>=0&&me&&me.length>e){Le=e,Fe.reason="api",Fe.level={},this.trigger(n.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:e,levels:K(me)}),w.qualityLabel=me[e].label;var t=He.currentTime||0,i=He.duration||0;i<=0&&(i=ve),pe.setState(a.LOADING),X(t,i)}},this.getCurrentQuality=function(){return Le},this.getQualityLevels=function(){return K(me)},this.getName=function(){return{name:E}},this.setCurrentAudioTrack=he,this.getAudioTracks=fe,this.getCurrentAudioTrack=Te}var f=window.clearTimeout,T=256,k=120,g=t.isIE(),v=t.isIE(9),_=t.isMSIE(),y=t.isMobile(),m=t.isFF(),p=t.isAndroidNative(),x=t.isIOS(7),b=t.isIOS(8),E="html5",w=function(){};return w.prototype=s,h.prototype=new w,h.getName=function(){return{name:"html5"}},h}.apply(t,r),!(void 0!==n&&(e.exports=n))}});
