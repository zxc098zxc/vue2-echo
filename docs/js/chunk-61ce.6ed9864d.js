(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ce"],{"2fdb":function(a,t,i){"use strict";var s=i("5ca1"),n=i("d2c8"),e="includes";s(s.P+s.F*i("5147")(e),"String",{includes:function(a){return!!~n(this,a,e).indexOf(a,arguments.length>1?arguments[1]:void 0)}})},"3a5c":function(a,t,i){"use strict";i.r(t);var s=function(){var a=this,t=a.$createElement,i=a._self._c||t;return a.audio.data?i("div",{attrs:{id:"detail"}},[i("div",{staticClass:"detail-container"},[i("div",{staticClass:"detail-user"},[i("div",{staticClass:"user-left"},[i("div",{staticClass:"user-img-container"},[i("img",{staticClass:"user-img",attrs:{src:a.audio.data.sound.user.avatar_50}}),i("img",{staticClass:"user-vip",attrs:{src:"https://ws-qn-echo-image-cdn.app-echo.com/Foz1CX1MdKHnTiDV26btgAmDJ3Y-?imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!100x100r/gravity/Center/crop/100x100/dx/0/dy/0"}})]),i("div",{staticClass:"user-name"},[a._v(a._s(a.audio.data.sound.user.name))])]),i("div",{staticClass:"user-right"},[i("div",{staticClass:"user-fans-label"},[a._v("粉丝")]),i("div",{staticClass:"user-fans-value"},[a._v(a._s(a.audio.data.sound.user.followed_count))])])]),i("div",{staticClass:"detail-cover"},[i("img",{staticClass:"cover-img",attrs:{src:a.audio.data.sound.pic_500}}),i("div",{staticClass:"cover-danmu",on:{click:a.handlePlay}}),i("div",{staticClass:"progress-bar-container",on:{click:a.handleSeek}},[i("div",{staticClass:"progress-time"},[a._v(a._s(a._f("sec2his")(a.audio.currentTime))+"/"+a._s(a._f("sec2his")(a.audio.duration)))]),i("div",{staticClass:"progress-bar",style:"width:"+a.audio_progress})]),i("div",{staticClass:"control"},[i("div",{staticClass:"control-playBtn",class:a.audio.play?"pause":"play",on:{click:a.handlePlay}}),i("div",{staticClass:"control-info"},[i("div",{staticClass:"info-name"},[a._v(a._s(a.audio.data.sound.name))]),i("div",{staticClass:"info-source"},[i("a",{staticClass:"info-author"},[a._v(a._s(a.audio.data.sound.user.name))]),i("div",{staticClass:"info-label"},[a._v("发布在")]),i("a",{staticClass:"info-channel"},[a._v(a._s(a.audio.data.sound.channel.name))]),i("div",{staticClass:"info-label"},[a._v("频道")])])])])]),i("div",{staticClass:"detail-info"},[i("div",{staticClass:"info-left"},[i("div",{staticClass:"info-item"},[i("div",{staticClass:"my-icon-play item-icon"}),i("div",{staticClass:"item-value"},[a._v(" "+a._s(a.audio.data.sound.view_count)+" 播放")])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"my-icon-like item-icon"}),i("div",{staticClass:"item-value"},[a._v(" "+a._s(a.audio.data.sound.like_count)+" 喜欢")])])]),a._m(0)]),i("div",{staticClass:"detail-lyric"},[a.audio.data.sound.song_info?[a.audio.data.sound.song_info.album_name?i("p",[a._v(a._s(a.audio.data.sound.song_info.album_name.type)+" : "+a._s(a.audio.data.sound.song_info.album_name.name))]):a._e(),a.audio.data.sound.song_info.author?i("p",[a._v(a._s(a.audio.data.sound.song_info.author.type)+" : "+a._s(a.audio.data.sound.song_info.author.name))]):a._e(),a.audio.data.sound.song_info.name?i("p",[a._v(a._s(a.audio.data.sound.song_info.name.type)+" : "+a._s(a.audio.data.sound.song_info.name.name))]):a._e()]:a._e(),a.audio.data.sound.lyrics?i("div",{domProps:{innerHTML:a._s(a.audio.data.sound.lyrics)}}):a._e(),a.audio.data.sound.song_info||a.audio.data.sound.lyrics?a._e():i("div",{staticClass:"noLyric"},[a._v("没有相关的歌词T T~ ")])],2),i("div",{staticClass:"detail-other"},[a._m(1),i("div",{staticClass:"other-recommend"},[i("my-list",{attrs:{json:a.otherJson}})],1)])])]):a._e()},n=[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"info-bell"},[i("div",{staticClass:"my-icon-bell bell-icon"}),i("div",{staticClass:"bell-label"},[a._v("设为手机铃声")])])},function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"other-title"},[i("a",[a._v("相关推荐")])])}],e=(i("6762"),i("2fdb"),i("c93e")),o=(i("cadf"),i("551c"),i("097d"),i("2f62")),d=i("365c"),c={name:"detail",data:function(){return{otherJson:[],danmu:!1}},computed:Object(e["a"])({},Object(o["e"])(["audio"]),Object(o["c"])(["audio_progress"])),watch:{$route:function(a,t){this.$route.path.includes("detail")&&(this.getMusicData(),this.getOtherData())}},mounted:function(){this.getMusicData(),this.getOtherData()},methods:Object(e["a"])({},Object(o["d"])(["set_audio_data","set_audio_play"]),{getMusicData:function(){var a=this;this.$indicator.open(),Object(d["b"])(this.$route.query.id).then(function(t){a.$indicator.close(),t&&t.data&&a.set_audio_data(t.data)}).catch(function(){a.$indicator.close()})},getOtherData:function(){var a=this;Object(d["d"])().then(function(t){t.data&&(a.otherJson=t.data)})},handlePlay:function(){this.set_audio_play(!this.audio.play)},handleSeek:function(a){a=a||window.event;var t=(a.pageX/window.innerWidth).toFixed(2);this.audio.ele.currentTime=this.audio.ele.duration*t}})},u=c,r=(i("d266"),i("2877")),l=Object(r["a"])(u,s,n,!1,null,null,null);l.options.__file="detail.vue";t["default"]=l.exports},"3f42":function(a,t,i){},5147:function(a,t,i){var s=i("2b4c")("match");a.exports=function(a){var t=/./;try{"/./"[a](t)}catch(i){try{return t[s]=!1,!"/./"[a](t)}catch(a){}}return!0}},6762:function(a,t,i){"use strict";var s=i("5ca1"),n=i("c366")(!0);s(s.P,"Array",{includes:function(a){return n(this,a,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},aae3:function(a,t,i){var s=i("d3f4"),n=i("2d95"),e=i("2b4c")("match");a.exports=function(a){var t;return s(a)&&(void 0!==(t=a[e])?!!t:"RegExp"==n(a))}},d266:function(a,t,i){"use strict";var s=i("3f42"),n=i.n(s);n.a},d2c8:function(a,t,i){var s=i("aae3"),n=i("be13");a.exports=function(a,t,i){if(s(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(a))}}}]);