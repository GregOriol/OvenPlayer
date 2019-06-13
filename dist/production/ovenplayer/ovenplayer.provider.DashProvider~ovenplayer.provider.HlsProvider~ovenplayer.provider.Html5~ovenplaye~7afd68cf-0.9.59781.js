/*! For license information please see ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf-0.9.59781.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(8));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!(!e||!e.isDynamic)&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceIndex()===o)return o;return r}},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(317)),o=u(n(66)),a=u(n(379)),i=n(304),l=n(1);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("CORE loaded. ");var u={};(0,o.default)(u);var s=e.element,c=null,g=null,d=!1;e.adTagUrl&&((c=(0,r.default)(s,u,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),g=(0,a.default)(s,u,c?c.videoEndedCallback:null),s.playbackRate=s.defaultPlaybackRate=t.getPlaybackRate();var E=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=s.src,i=document.createElement("source");i.src=o.file,i.src!==a?(s.src=o.file,a&&s.load()):0===r&&s.currentTime>0&&u.seek(r),r>0&&(u.seek(r),t.isAutoStart()||u.play()),t.isAutoStart()&&u.play()}};return u.getName=function(){return e.name},u.canSeek=function(){return e.canSeek},u.setCanSeek=function(t){e.canSeek=t},u.isSeeking=function(){return e.seeking},u.setSeeking=function(t){e.seeking=t},u.setState=function(t){if(e.state!==t){var n=e.state;if(OvenPlayerConsole.log("Provider : setState()",t,"isAdsCheckingtime :",c&&c.isAutoPlaySupportCheckTime()),n===l.STATE_AD_PLAYING&&(t===l.STATE_ERROR||t===l.STATE_IDLE))return!1;if(!(n!==l.STATE_AD_PLAYING&&n!==l.STATE_AD_PAUSED||t!==l.STATE_PAUSED&&t!==l.STATE_PLAYING))return!1;switch(OvenPlayerConsole.log("Provider : triggerSatatus",t),t){case l.STATE_COMPLETE:u.trigger(l.PLAYER_COMPLETE);break;case l.STATE_PAUSED:u.trigger(l.PLAYER_PAUSE,{prevState:e.state,newstate:l.STATE_PAUSED});break;case l.STATE_AD_PAUSED:u.trigger(l.PLAYER_PAUSE,{prevState:e.state,newstate:l.STATE_AD_PAUSED});break;case l.STATE_PLAYING:u.trigger(l.PLAYER_PLAY,{prevState:e.state,newstate:l.STATE_PLAYING});case l.STATE_AD_PLAYING:u.trigger(l.PLAYER_PLAY,{prevState:e.state,newstate:l.STATE_AD_PLAYING})}e.state=t,u.trigger(l.PLAYER_STATE,{prevstate:n,newstate:e.state})}},u.getState=function(){return e.state},u.setBuffer=function(t){e.buffer=t},u.getBuffer=function(){return e.buffer},u.isLive=function(){return!!e.isLive||s.duration===1/0},u.getDuration=function(){return u.isLive()?1/0:s.duration},u.getPosition=function(){return s?s.currentTime:0},u.setVolume=function(e){if(!s)return!1;s.volume=e/100},u.getVolume=function(){return s?100*s.volume:0},u.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,u.trigger(l.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,u.trigger(l.CONTENT_MUTE,{mute:s.muted})),s.muted)},u.getMute=function(){return!!s&&s.muted},u.preload=function(n,r){return e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),E(r||0),new Promise(function(e,n){t.isMute()&&u.setMute(!0),t.getVolume()&&u.setVolume(t.getVolume()),e()})},u.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),E(e.sources.starttime||0)},u.play=function(){if(OvenPlayerConsole.log("Provider : play()"),!s)return!1;if(d)return!1;if(d=!0,u.getState()!==l.STATE_PLAYING)if(c&&c.isActive()||c&&!c.started())c.play().then(function(e){d=!1,OvenPlayerConsole.log("Provider : ads play success")}).catch(function(e){d=!1,OvenPlayerConsole.log("Provider : ads play fail",e)});else{var e=s.play();void 0!==e?e.then(function(){d=!1,OvenPlayerConsole.log("Provider : video play success")}).catch(function(e){OvenPlayerConsole.log("Provider : video play error",e.message),d=!1}):(OvenPlayerConsole.log("Provider : video play success (ie)"),d=!1)}},u.pause=function(){if(OvenPlayerConsole.log("Provider : pause()"),!s)return!1;u.getState()===l.STATE_PLAYING?s.pause():u.getState()===l.STATE_AD_PLAYING&&c.pause()},u.seek=function(e){if(!s)return!1;s.currentTime=e},u.setPlaybackRate=function(e){return!!s&&(u.trigger(l.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},u.getPlaybackRate=function(){return s?s.playbackRate:0},u.getSources=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},u.getCurrentSource=function(){return e.currentSource},u.setCurrentSource=function(n,r){return e.currentSource!==n&&(n>-1&&e.sources&&e.sources.length>n?(OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,u.trigger(l.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceIndex(n),u.setState(l.STATE_IDLE),r&&E(s.currentTime||0),e.currentSource):void 0)},u.getQualityLevels=function(){return s?e.qualityLevels:[]},u.getCurrentQuality=function(){return s?e.currentQuality:null},u.setCurrentQuality=function(e){},u.isAutoQuality=function(){},u.setAutoQuality=function(e){},u.getFramerate=function(){return e.framerate},u.setFramerate=function(t){return e.framerate=t},u.seekFrame=function(t){var n=e.framerate,r=(s.currentTime*n+t)/n;r+=1e-5,u.pause(),u.seek(r)},u.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);u.pause(),u.setState(l.STATE_IDLE)},u.destroy=function(){if(!s)return!1;u.stop(),g.destroy(),c&&c.destroy(),u.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},u.super=function(e){var t=u[e];return function(){return t.apply(u,arguments)}},u}},317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(318)),o=i(n(6)),a=(n(304),n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,i,l){var u="",s="",c={},g=!1,d={started:!1,active:!1,isVideoEnded:!1,checkAutoplayPeriod:!0},E=null,A=null,f=null,T=null,v=null,y=null,S=null,P=!1,p=!1;OvenPlayerConsole.log("ADS : started ",i);try{var m=function(){if(OvenPlayerConsole.log("ADS : initRequest() AutoPlay Support : ","autoplayAllowed",P,"autoplayRequiresMuted",p),S)return!1;(S=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,S.setAdWillAutoPlay(!0),S.setAdWillPlayMuted(p),p&&t.trigger(a.PLAYER_WARNING,{message:a.WARN_MSG_MUTEDPLAY,timer:1e4,iconClass:a.UI_ICONS.volume_mute,onClickCallback:function(){t.setMute(!1)}}),S.adTagUrl=i,T.requestAds(S),OvenPlayerConsole.log("ADS : requestAds Complete")};return u=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,s=google.ima.AdErrorEvent.Type.AD_ERROR,google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),E=function(e){console.log(e.getError().getVastErrorCode(),e.getError().getMessage());var n=e.getError().getInnerError();n&&console.log(n.getErrorCode(),n.getMessage()),v&&v.destroy(),t.trigger(a.STATE_AD_ERROR,{code:e.getError().getVastErrorCode(),message:e.getError().getMessage()}),d.active=!1,d.started=!0,t.play()},A=function(n){OvenPlayerConsole.log("ADS : OnManagerLoaded ");var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,v=n.getAdsManager(e,o),y=(0,r.default)(v,t,d,E),OvenPlayerConsole.log("ADS : created admanager and listner "),t.on(a.CONTENT_VOLUME,function(e){e.mute?v.setVolume(0):v.setVolume(e.volume/100)},c),g=!0},f=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(T=new google.ima.AdsLoader(f)).addEventListener(u,A,!1),T.addEventListener(s,E,!1),c.isActive=function(){return d.active},c.started=function(){return d.started},c.play=function(){if(d.started)return new Promise(function(e,t){try{v.resume(),e()}catch(e){t(e)}});var t=0;return new Promise(function(r,o){!function(){if(OvenPlayerConsole.log("ADS : checkAutoplaySupport() "),d.checkAutoplayPeriod=!0,!e.play)return P=!0,p=!1,d.checkAutoplayPeriod=!1,m(),!1;var t=e.play();void 0!==t?t.then(function(){OvenPlayerConsole.log("ADS : CHECK AUTO PLAY success"),e.pause(),P=!0,p=!1,d.checkAutoplayPeriod=!1,m()}).catch(function(e){OvenPlayerConsole.log("ADS : CHECK AUTO PLAY fail",e.message),P=!1,p=!1,d.checkAutoplayPeriod=!1,m()}):(e.pause(),P=!0,p=!1,d.checkAutoplayPeriod=!1,m())}(),function e(){t++,g?n.isAutoStart()&&!P?(P=!0,d.started=!1,o(new Error("autoplayNotAllowed"))):(f.initialize(),v.init("100%","100%",google.ima.ViewMode.NORMAL),v.start(),d.started=!0,r()):t<300?setTimeout(e,100):o(new Error("admanagerLoadingTimeout"))}()})},c.pause=function(){v.pause()},c.videoEndedCallback=function(e){!y||!y.isAllAdComplete()&&y.isLinearAd()?(d.isVideoEnded=!0,T.contentComplete()):e()},c.isAutoPlaySupportCheckTime=function(){return d.checkAutoplayPeriod},c.destroy=function(){T&&(T.removeEventListener(u,A),T.removeEventListener(s,E)),v&&v.destroy(),f&&f.destroy(),y&&y.destroy();var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(a.CONTENT_VOLUME,null,c)},c}catch(e){return null}}},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(6));var r=n(1);t.default=function(e,t,n,o){var a=this,i={},l={},u=null,s=google.ima.AdEvent.Type.AD_BUFFERING,c=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,g=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,d=google.ima.AdErrorEvent.Type.AD_ERROR,E=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,A=google.ima.AdEvent.Type.CLICK,f=google.ima.AdEvent.Type.SKIPPED,T=google.ima.AdEvent.Type.COMPLETE,v=google.ima.AdEvent.Type.FIRST_QUARTILE,y=google.ima.AdEvent.Type.LOADED,S=google.ima.AdEvent.Type.MIDPOINT,P=google.ima.AdEvent.Type.PAUSED,p=google.ima.AdEvent.Type.RESUMED,m=google.ima.AdEvent.Type.STARTED,_=google.ima.AdEvent.Type.USER_CLOSE,C=google.ima.AdEvent.Type.THIRD_QUARTILE,O=!1,L=null;return l[c]=function(e){OvenPlayerConsole.log(e.type),n.started&&(n.active=!0,t.pause())},l[g]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,!n.started||0!==t.getPosition()&&n.isVideoEnded||t.play()},l[d]=o,l[E]=function(e){OvenPlayerConsole.log("ALL_ADS_COMPLETED : set isAllAdCompelete",e.type,O,a),O=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},l[A]=function(e){OvenPlayerConsole.log(e.type)},l[v]=function(e){OvenPlayerConsole.log(e.type)},l[s]=function(e){OvenPlayerConsole.log("AD_BUFFERING",e.type)},l[y]=function(n){OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),a=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:a.isLinear()})},l[S]=function(e){OvenPlayerConsole.log(e.type)},l[P]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},l[p]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},l[m]=function(o){OvenPlayerConsole.log(o.type);var a=o.getAd();L=a;var i={isLinear:a.isLinear(),duration:a.getDuration(),skipTimeOffset:a.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,i),a.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,u=setInterval(function(){var n=e.getRemainingTime(),o=a.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:a.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},l[T]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},l[f]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},l[_]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},l[C]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(l).forEach(function(t){e.removeEventListener(t,l[t]),e.addEventListener(t,l[t])}),i.setAdCompleteCallback=function(e){},i.isAllAdComplete=function(){return OvenPlayerConsole.log("get isAllAdCompelete",O,a),O},i.isLinearAd=function(){return!L||L.isLinear()},i.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(l).forEach(function(t){e.removeEventListener(t,l[t])})},i}},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(304);t.default=function(e,t,n){var a={};OvenPlayerConsole.log("EventListener loaded.",e,t);var i={},l=-1,u=e;return a.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},a.durationchange=function(){a.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},a.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!==r.STATE_IDLE&&t.getState()!==r.STATE_COMPLETE&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},a.loadeddata=function(){},a.loadedmetadata=function(){var e=t.getSources(),n=t.getCurrentSource(),o=n>-1?e[n].type:"",a={duration:t.isLive()?1/0:u.duration,type:o};OvenPlayerConsole.log("EventListener : on loadedmetadata",a),t.trigger(r.CONTENT_META,a)},a.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!u.ended&&!u.error&&u.currentTime!==u.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},a.play=function(){l=-1,u.paused||t.getState()===r.STATE_PLAYING||t.setState(r.STATE_LOADING)},a.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),l<0&&t.setState(r.STATE_PLAYING)},a.progress=function(){var e=u.buffered;if(!e)return!1;var n=u.duration,o=u.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);t.setBuffer(100*a),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:n}),OvenPlayerConsole.log("EventListener : on progress",100*a)},a.timeupdate=function(){var e=u.currentTime,n=u.duration;isNaN(n)||(n>9e15&&(n=1/0),t.isSeeking()||u.paused||t.getState()!==r.STATE_STALLED&&t.getState()!==r.STATE_LOADING&&t.getState()!==r.STATE_AD_PLAYING||function(e,t){return e.toFixed(2)===t.toFixed(2)}(l,e)||(l=-1,t.setState(r.STATE_PLAYING)),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n}))},a.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",u.currentTime),t.trigger(r.CONTENT_SEEK,{position:u.currentTime})},a.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},a.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},a.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()===r.STATE_PLAYING&&(l=u.currentTime,t.setState(r.STATE_STALLED))},a.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*u.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*u.volume),mute:u.muted})},a.error=function(){var e=u.error&&u.error.code||0,n={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NEWWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",n),(0,o.errorTrigger)(r.ERRORS[n],t)},Object.keys(a).forEach(function(e){u.removeEventListener(e,a[e]),u.addEventListener(e,a[e])}),i.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(a).forEach(function(e){u.removeEventListener(e,a[e])})},i}}}]);