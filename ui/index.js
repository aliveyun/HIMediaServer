!function() {
    function t(t, e, r, n) {
        Object.defineProperty(t, e, {
            get: r,
            set: n,
            enumerable: !0,
            configurable: !0
        })
    }
    function e(t) {
        return t && t.__esModule ? t.default : t
    }
    var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
      , n = {}
      , i = {}
      , o = r.parcelRequire2e50;
    null == o && ((o = function(t) {
        if (t in n)
            return n[t].exports;
        if (t in i) {
            let e = i[t];
            delete i[t];
            let r = {
                id: t,
                exports: {}
            };
            return n[t] = r,
            e.call(r.exports, r, r.exports),
            r.exports
        }
        var e = new Error("Cannot find module '" + t + "'");
        throw e.code = "MODULE_NOT_FOUND",
        e
    }
    ).register = function(t, e) {
        i[t] = e
    }
    ,
    r.parcelRequire2e50 = o),
    o.register("617MK", (function(e, r) {
        var n;
        n = e.exports,
        Object.defineProperty(n, "__esModule", {
            value: !0,
            configurable: !0
        }),
        t(e.exports, "default", (()=>l));
        var i = o("3SdKF")
          , a = o("6fjPb")
          , s = o("2zYtZ")
          , f = o("1D6XL")
          , h = o("1i6TV")
          , u = o("2AXxm")
          , c = o("2Zrui");
        class d {
            set fullscreen(t) {
                t ? (c.checkFull() || this.$container.requestFullscreen(),
                c.$domToggle(this.$doms.minScreenDom, !0),
                c.$domToggle(this.$doms.fullscreenDom, !1)) : (c.checkFull() && document.exitFullscreen(),
                c.$domToggle(this.$doms.minScreenDom, !1),
                c.$domToggle(this.$doms.fullscreenDom, !0)),
                this._fullscreen !== t && (this.onFullscreen(t),
                this._trigger(u.EVEMTS.fullscreen, t)),
                this._fullscreen = t
            }
            get fullscreen() {
                return this._fullscreen
            }
            set playing(t) {
                t ? (c.$domToggle(this.$doms.playBigDom, !1),
                c.$domToggle(this.$doms.playDom, !1),
                c.$domToggle(this.$doms.pauseDom, !0),
                c.$domToggle(this.$doms.screenshotsDom, !0),
                c.$domToggle(this.$doms.recordDom, !0),
                this._quieting ? (c.$domToggle(this.$doms.quietAudioDom, !0),
                c.$domToggle(this.$doms.playAudioDom, !1)) : (c.$domToggle(this.$doms.quietAudioDom, !1),
                c.$domToggle(this.$doms.playAudioDom, !0))) : (this.$doms.speedDom && (this.$doms.speedDom.innerText = ""),
                this._playUrl && (c.$domToggle(this.$doms.playDom, !0),
                c.$domToggle(this.$doms.playBigDom, !0),
                c.$domToggle(this.$doms.pauseDom, !1)),
                c.$domToggle(this.$doms.recordDom, !1),
                c.$domToggle(this.$doms.recordingDom, !1),
                c.$domToggle(this.$doms.screenshotsDom, !1),
                c.$domToggle(this.$doms.quietAudioDom, !1),
                c.$domToggle(this.$doms.playAudioDom, !1)),
                this._playing !== t && (t ? (this.onPlay(),
                this._trigger(u.EVEMTS.play)) : (this.onPause(),
                this._trigger(u.EVEMTS.pause))),
                this._playing = t
            }
            get playing() {
                return this._playing
            }
            set quieting(t) {
                t ? (c.$domToggle(this.$doms.quietAudioDom, !0),
                c.$domToggle(this.$doms.playAudioDom, !1)) : (c.$domToggle(this.$doms.quietAudioDom, !1),
                c.$domToggle(this.$doms.playAudioDom, !0)),
                this._quieting !== t && (this.onMute(t),
                this._trigger(u.EVEMTS.mute, t)),
                this._quieting = t
            }
            get quieting() {
                return this._quieting
            }
            set loading(t) {
                t ? (c.$hideBtns(this.$doms),
                c.$domToggle(this.$doms.fullscreenDom, !0),
                c.$domToggle(this.$doms.pauseDom, !0),
                c.$domToggle(this.$doms.loadingDom, !0)) : c.$initBtns(this.$doms),
                this._loading = t
            }
            get loading() {
                return this._loading
            }
            set recording(t) {
                t ? (c.$domToggle(this.$doms.recordDom, !1),
                c.$domToggle(this.$doms.recordingDom, !0)) : (c.$domToggle(this.$doms.recordDom, !0),
                c.$domToggle(this.$doms.recordingDom, !1)),
                this._recording !== t && (this.onRecord(t),
                this._trigger(u.EVEMTS.record, t),
                this._recording = t)
            }
            get recording() {
                return this._recording
            }
            setDebug(t) {
                this._opt.isDebug = !!t
            }
            setTimeout(t) {
                this._opt.timeout = Number(t)
            }
            setVod(t) {
                this._opt.vod = !!t
            }
            setNoOffscreen(t) {
                this._opt.forceNoOffscreen = !!t
            }
            setScaleMode(t) {
                0 === (t = Number(t)) ? (this._opt.isFullResize = !1,
                this._opt.isResize = !1) : 1 === t ? (this._opt.isFullResize = !1,
                this._opt.isResize = !0) : 2 === t && (this._opt.isFullResize = !0),
                this._resize()
            }
            mute() {
                this._mute()
            }
            cancelMute() {
                this._cancelMute()
            }
            audioResume() {
                this._cancelMute()
            }
            pause() {
                this._pause()
            }
            play(t) {
                this._play(t)
            }
            close() {
                this._close()
            }
            destroy() {
                this._close(),
                this._destroyAudioContext(),
                this._destroyContextGL(),
                this._decoderWorker.terminate(),
                this._removeEventListener(),
                this._initCheckVariable(),
                this._off(),
                this._removeContainerChild()
            }
            clearView() {
                this._clearView()
            }
            resize() {
                this._resize()
            }
            setBufferTime(t) {
                t = Number(t),
                this._decoderWorker.postMessage({
                    cmd: u.POST_MESSAGE.setVideoBuffer,
                    time: t
                })
            }
            setRotate(t) {
                t = parseInt(t, 10);
                this._opt.rotate !== t && -1 !== [0, 90, 270].indexOf(t) && (this._opt.rotate = t,
                this.resize())
            }
            setVolume(t) {
                if (this._gainNode) {
                    if (t = parseFloat(t),
                    isNaN(t))
                        return;
                    this._gainNode.gain.setValueAtTime(t, this._audioContext.currentTime)
                }
            }
            setKeepScreenOn() {
                this._opt.keepScreenOn = !0
            }
            setFullscreen(t) {
                const e = !!t;
                this.fullscreen !== e && (this.fullscreen = e)
            }
            hasLoaded() {
                return this._hasLoaded
            }
            screenshot(t, e, r) {
                this._screenshot(t, e, r)
            }
            on(t, e) {
                this._on(t, e)
            }
            constructor(t) {
                if (this._opt = Object.assign(u.DEFAULT_OPTIONS, t),
                this.$container = t.container,
                "string" == typeof t.container && (this.$container = document.querySelector(t.container)),
                !this.$container)
                    throw new Error("Jessibuca need container option");
                delete this._opt.container,
                this._opt.debug && console.log("options", this._opt),
                h.default(this),
                i.default(this),
                a.default(this),
                f.default(this),
                s.default(this)
            }
        }
        window.Jessibuca = d;
        var l = d
    }
    )),
    o.register("3SdKF", (function(e, r) {
        t(e.exports, "default", (()=>i));
        var n = o("5E3I3")
          , i = t=>{
            const e = document.createElement("canvas");
            e.style.position = "absolute",
            e.style.top = 0,
            e.style.left = 0,
            t.$container.appendChild(e),
            t.$canvasElement = e,
            t.$container.style.overflow = "hidden",
            "absolute" !== t.$container.style.position && (t.$container.style.position = "relative");
            if (!t._supportOffscreen()) {
                const e = (()=>{
                    const e = t.$canvasElement;
                    let r = null;
                    const n = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                    let i = 0;
                    for (; !r && i < n.length; ) {
                        const o = n[i];
                        try {
                            let n = {
                                preserveDrawingBuffer: !0
                            };
                            t._opt.contextOptions && (n = Object.assign(n, t._opt.contextOptions)),
                            r = e.getContext(o, n)
                        } catch (t) {
                            r = null
                        }
                        r && "function" == typeof r.getParameter || (r = null),
                        ++i
                    }
                    return r
                }
                )();
                t._contextGLRender = n.default(e),
                t._contextGL = e
            }
            t._destroyContextGL = ()=>{
                t._contextGL && (t._contextGL = null),
                t._contextGLRender && (t._contextGLRender = null),
                t._bitmaprenderer && (t._bitmaprenderer = null)
            }
        }
    }
    )),
    o.register("5E3I3", (function(e, r) {
        t(e.exports, "default", (()=>n));
        var n = t=>{
            var e = ["attribute vec4 vertexPos;", "attribute vec4 texturePos;", "varying vec2 textureCoord;", "void main()", "{", "gl_Position = vertexPos;", "textureCoord = texturePos.xy;", "}"].join("\n")
              , r = ["precision highp float;", "varying highp vec2 textureCoord;", "uniform sampler2D ySampler;", "uniform sampler2D uSampler;", "uniform sampler2D vSampler;", "const mat4 YUV2RGB = mat4", "(", "1.1643828125, 0, 1.59602734375, -.87078515625,", "1.1643828125, -.39176171875, -.81296875, .52959375,", "1.1643828125, 2.017234375, 0, -1.081390625,", "0, 0, 0, 1", ");", "void main(void) {", "highp float y = texture2D(ySampler,  textureCoord).r;", "highp float u = texture2D(uSampler,  textureCoord).r;", "highp float v = texture2D(vSampler,  textureCoord).r;", "gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;", "}"].join("\n")
              , n = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(n, e),
            t.compileShader(n),
            t.getShaderParameter(n, t.COMPILE_STATUS) || console.log("Vertex shader failed to compile: " + t.getShaderInfoLog(n));
            var i = t.createShader(t.FRAGMENT_SHADER);
            t.shaderSource(i, r),
            t.compileShader(i),
            t.getShaderParameter(i, t.COMPILE_STATUS) || console.log("Fragment shader failed to compile: " + t.getShaderInfoLog(i));
            var o = t.createProgram();
            t.attachShader(o, n),
            t.attachShader(o, i),
            t.linkProgram(o),
            t.getProgramParameter(o, t.LINK_STATUS) || console.log("Program failed to compile: " + t.getProgramInfoLog(o)),
            t.useProgram(o);
            var a = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, a),
            t.bufferData(t.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), t.STATIC_DRAW);
            var s = t.getAttribLocation(o, "vertexPos");
            t.enableVertexAttribArray(s),
            t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0);
            var f = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, f),
            t.bufferData(t.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), t.STATIC_DRAW);
            var h = t.getAttribLocation(o, "texturePos");
            function u(e, r) {
                var n = t.createTexture();
                return t.bindTexture(t.TEXTURE_2D, n),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                t.bindTexture(t.TEXTURE_2D, null),
                t.uniform1i(t.getUniformLocation(o, e), r),
                n
            }
            t.enableVertexAttribArray(h),
            t.vertexAttribPointer(h, 2, t.FLOAT, !1, 0, 0);
            var c = u("ySampler", 0)
              , d = u("uSampler", 1)
              , l = u("vSampler", 2);
            return function(e, r, n, i, o) {
                t.viewport(0, 0, e, r),
                t.activeTexture(t.TEXTURE0),
                t.bindTexture(t.TEXTURE_2D, c),
                t.texImage2D(t.TEXTURE_2D, 0, t.LUMINANCE, e, r, 0, t.LUMINANCE, t.UNSIGNED_BYTE, n),
                t.activeTexture(t.TEXTURE1),
                t.bindTexture(t.TEXTURE_2D, d),
                t.texImage2D(t.TEXTURE_2D, 0, t.LUMINANCE, e / 2, r / 2, 0, t.LUMINANCE, t.UNSIGNED_BYTE, i),
                t.activeTexture(t.TEXTURE2),
                t.bindTexture(t.TEXTURE_2D, l),
                t.texImage2D(t.TEXTURE_2D, 0, t.LUMINANCE, e / 2, r / 2, 0, t.LUMINANCE, t.UNSIGNED_BYTE, o),
                t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
            }
        }
    }
    )),
    o.register("6fjPb", (function(e, r) {
        t(e.exports, "default", (()=>i));
        var n = o("2Zrui")
          , i = t=>{
            t._audioContext = new (window.AudioContext || window.webkitAudioContext),
            t._gainNode = t._audioContext.createGain(),
            t._audioEnabled = e=>{
                e ? (n.audioContextUnlock(t._audioContext),
                t._audioEnabled = e=>{
                    e ? t._audioContext.resume() : t._audioContext.suspend()
                }
                ,
                t._audioContext.resume()) : t._audioContext.suspend()
            }
            ,
            t._audioEnabled(!0),
            t._mute = ()=>{
                t._audioEnabled(!1),
                t.quieting = !0
            }
            ,
            t._cancelMute = ()=>{
                t._audioEnabled(!0),
                t.quieting = !1
            }
            ,
            t._audioResume = ()=>{
                t._cancelMute()
            }
            ,
            t._initAudioPlanar = e=>{
                const r = t._audioContext;
                if (!r)
                    return !1;
                let n = [];
                const i = r.createScriptProcessor(1024, 0, 2);
                i.onaudioprocess = function(t) {
                    if (n.length) {
                        const r = n.shift();
                        for (let n = 0; n < e.channels; n++) {
                            const e = r[n]
                              , i = t.outputBuffer.getChannelData(n);
                            for (let t = 0; t < 1024; t++)
                                i[t] = e[t]
                        }
                    }
                }
                ,
                i.connect(t._gainNode),
                t._closeAudio = ()=>{
                    i.disconnect(t._gainNode),
                    t._gainNode.disconnect(r.destination),
                    delete t._closeAudio,
                    n = []
                }
                ,
                t._gainNode.connect(r.destination),
                t._playAudio = t=>n.push(t)
            }
            ,
            t._destroyAudioContext = ()=>{
                t._audioContext.close(),
                t._audioContext = null,
                t._gainNode = null
            }
        }
    }
    )),
    o.register("2Zrui", (function(e, r) {
        t(e.exports, "downloadImg", (()=>f)),
        t(e.exports, "setStyle", (()=>c)),
        t(e.exports, "$initBtns", (()=>b)),
        t(e.exports, "audioContextUnlock", (()=>i)),
        t(e.exports, "bufferStatus", (()=>g)),
        t(e.exports, "noop", (()=>l)),
        t(e.exports, "now", (()=>p)),
        t(e.exports, "$hideBtns", (()=>m)),
        t(e.exports, "checkFull", (()=>d)),
        t(e.exports, "bpsSize", (()=>h)),
        t(e.exports, "dataURLToFile", (()=>s)),
        t(e.exports, "$domToggle", (()=>a)),
        t(e.exports, "fpsStatus", (()=>u));
        var n = o("2AXxm");
        function i(t) {
            t.resume();
            const e = t.createBufferSource();
            e.buffer = t.createBuffer(1, 1, 22050),
            e.connect(t.destination),
            e.noteOn ? e.noteOn(0) : e.start(0)
        }
        function a(t, e) {
            t && (t.style.display = e ? "block" : "none")
        }
        function s(t="") {
            const e = t.split(",")
              , r = atob(e[1])
              , n = e[0].replace("data:", "").replace(";base64", "");
            let i = r.length
              , o = new Uint8Array(i);
            for (; i--; )
                o[i] = r.charCodeAt(i);
            return new File([o],"file",{
                type: n
            })
        }
        function f(t, e) {
            const r = document.createElement("a");
            r.download = e,
            r.href = URL.createObjectURL(t),
            r.click(),
            URL.revokeObjectURL(t)
        }
        function h(t) {
            if (null == t || "" === t)
                return "0 KB/S";
            let e = parseFloat(t);
            return e = e.toFixed(2),
            e + "KB/S"
        }
        function u(t) {
            let e = 0;
            return t >= 24 ? e = 2 : t >= 15 && (e = 1),
            e
        }
        function c(t, e) {
            Object.keys(e || {}).forEach((function(r) {
                t.style[r] = e[r]
            }
            ))
        }
        function d() {
            let t = document.fullscreenElement || window.webkitFullscreenElement || document.msFullscreenElement;
            return void 0 === t && (t = !1),
            !!t
        }
        function l() {}
        function p() {
            return (new Date).getTime()
        }
        function m(t) {
            Object.keys(t || {}).forEach((e=>{
                "bgDom" !== e && a(t[e], !1)
            }
            ))
        }
        function b(t) {
            a(t.pauseDom, !0),
            a(t.screenshotsDom, !0),
            a(t.fullscreenDom, !0),
            a(t.quietAudioDom, !0),
            a(t.textDom, !0),
            a(t.speedDom, !0),
            a(t.recordDom, !0),
            a(t.loadingDom, !1),
            a(t.playDom, !1),
            a(t.playBigDom, !1),
            a(t.bgDom, !1)
        }
        function g(t, e) {
            let r = n.BUFFER_STATUS.buffering;
            return 0 === t ? r = n.BUFFER_STATUS.empty : t >= e && (r = n.BUFFER_STATUS.full),
            r
        }
    }
    )),
    o.register("2AXxm", (function(e, r) {
        t(e.exports, "DEFAULT_OPTIONS", (()=>n)),
        t(e.exports, "EVEMTS", (()=>a)),
        t(e.exports, "BUFFER_STATUS", (()=>s)),
        t(e.exports, "CMD_TYPE", (()=>i)),
        t(e.exports, "POST_MESSAGE", (()=>o));
        const n = {
            videoBuffer: .5,
            vod: !1,
            isResize: !0,
            isFullSize: !1,
            debug: !1,
            timeout: 30,
            supportDblclickFullscreen: !1,
            showBandwidth: !1,
            keepScreenOn: !1,
            isNotMute: !1,
            hasAudio: !0,
            operateBtns: {
                fullscreen: !1,
                screenshot: !1,
                play: !1,
                audio: !1
            },
            loadingText: "",
            background: "",
            decoder: "index.js",
            rotate: 0,
            forceNoOffscreen: !1
        }
          , i = {
            init: "init",
            initSize: "initSize",
            render: "render",
            playAudio: "playAudio",
            print: "print",
            printErr: "printErr",
            initAudioPlanar: "initAudioPlanar",
            kBps: "kBps"
        }
          , o = {
            close: "close",
            play: "play",
            setVideoBuffer: "setVideoBuffer",
            init: "init"
        }
          , a = {
            fullscreen: "fullscreen",
            play: "play",
            pause: "pause",
            mute: "mute",
            load: "load",
            videoInfo: "videoInfo",
            timeUpdate: "timeUpdate",
            audioInfo: "audioInfo",
            log: "log",
            error: "error",
            kBps: "kBps",
            timeout: "timeout",
            stats: "stats",
            performance: "performance",
            record: "record",
            buffer: "buffer",
            videoFrame: "videoFrame",
            start: "start",
            metadata: "metadata"
        }
          , s = {
            empty: "empty",
            buffering: "buffering",
            full: "full"
        }
    }
    )),
    o.register("2zYtZ", (function(e, r) {
        t(e.exports, "default", (()=>a));
        var n = o("2Zrui")
          , i = o("4hE66")
          , a = t=>{
            t._showControl = ()=>{
                let e = !1
                  , r = !1;
                return Object.keys(t._opt.operateBtns).forEach((e=>{
                    t._opt.operateBtns[e] && (r = !0)
                }
                )),
                (t._opt.showBandwidth || t._opt.text || r) && (e = !0),
                e
            }
            ;
            const e = {}
              , r = document.createDocumentFragment()
              , o = document.createElement("div")
              , a = document.createElement("div")
              , s = document.createElement("div")
              , f = document.createElement("div")
              , h = document.createElement("div")
              , u = document.createElement("div")
              , c = document.createElement("div")
              , d = document.createElement("div")
              , l = document.createElement("div")
              , p = document.createElement("div")
              , m = document.createElement("div")
              , b = document.createElement("div")
              , g = document.createElement("div")
              , v = document.createElement("div")
              , y = document.createElement("div")
              , w = document.createElement("div")
              , _ = document.createElement("div")
              , A = document.createElement("div");
            g.innerText = t._opt.loadingText || "",
            f.innerText = t._opt.text || "",
            h.innerText = "",
            u.title = "播放",
            d.title = "暂停",
            l.title = "截屏",
            p.title = "全屏",
            m.title = "退出全屏",
            v.title = "静音",
            y.title = "取消静音",
            w.title = "录制",
            _.title = "取消录制";
            let M = {
                position: "absolute",
                width: "100%",
                height: "100%"
            };
            t._opt.background && (M = Object.assign({}, M, {
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                backgroundImage: "url('" + t._opt.background + "')"
            }));
            const E = {
                position: "absolute",
                width: "100%",
                height: "100%",
                textAlign: "center",
                color: "#fff",
                display: "none",
                backgroundImage: "url('data:image/gif;base64,R0lGODlhgACAAKIAAP///93d3bu7u5mZmQAA/wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAEACwCAAIAfAB8AAAD/0i63P4wygYqmDjrzbtflvWNZGliYXiubKuloivPLlzReD7al+7/Eh5wSFQIi8hHYBkwHUmD6CD5YTJLz49USuVYraRsZ7vtar7XnQ1Kjpoz6LRHvGlz35O4nEPP2O94EnpNc2sef1OBGIOFMId/inB6jSmPdpGScR19EoiYmZobnBCIiZ95k6KGGp6ni4wvqxilrqBfqo6skLW2YBmjDa28r6Eosp27w8Rov8ekycqoqUHODrTRvXsQwArC2NLF29UM19/LtxO5yJd4Au4CK7DUNxPebG4e7+8n8iv2WmQ66BtoYpo/dvfacBjIkITBE9DGlMvAsOIIZjIUAixliv9ixYZVtLUos5GjwI8gzc3iCGghypQqrbFsme8lwZgLZtIcYfNmTJ34WPTUZw5oRxdD9w0z6iOpO15MgTh1BTTJUKos39jE+o/KS64IFVmsFfYT0aU7capdy7at27dw48qdS7eu3bt480I02vUbX2F/JxYNDImw4GiGE/P9qbhxVpWOI/eFKtlNZbWXuzlmG1mv58+gQ4seTbq06dOoU6vGQZJy0FNlMcV+czhQ7SQmYd8eMhPs5BxVdfcGEtV3buDBXQ+fURxx8oM6MT9P+Fh6dOrH2zavc13u9JXVJb520Vp8dvC76wXMuN5Sepm/1WtkEZHDefnzR9Qvsd9+/wi8+en3X0ntYVcSdAE+UN4zs7ln24CaLagghIxBaGF8kFGoIYV+Ybghh841GIyI5ICIFoklJsigihmimJOLEbLYIYwxSgigiZ+8l2KB+Ml4oo/w8dijjcrouCORKwIpnJIjMnkkksalNeR4fuBIm5UEYImhIlsGCeWNNJphpJdSTlkml1jWeOY6TnaRpppUctcmFW9mGSaZceYopH9zkjnjUe59iR5pdapWaGqHopboaYua1qije67GJ6CuJAAAIfkEBQUABAAsCgACAFcAMAAAA/9Iutz+ML5Ag7w46z0r5WAoSp43nihXVmnrdusrv+s332dt4Tyo9yOBUJD6oQBIQGs4RBlHySSKyczVTtHoidocPUNZaZAr9F5FYbGI3PWdQWn1mi36buLKFJvojsHjLnshdhl4L4IqbxqGh4gahBJ4eY1kiX6LgDN7fBmQEJI4jhieD4yhdJ2KkZk8oiSqEaatqBekDLKztBG2CqBACq4wJRi4PZu1sA2+v8C6EJexrBAD1AOBzsLE0g/V1UvYR9sN3eR6lTLi4+TlY1wz6Qzr8u1t6FkY8vNzZTxaGfn6mAkEGFDgL4LrDDJDyE4hEIbdHB6ESE1iD4oVLfLAqPETIsOODwmCDJlv5MSGJklaS6khAQAh+QQFBQAEACwfAAIAVwAwAAAD/0i63P5LSAGrvTjrNuf+YKh1nWieIumhbFupkivPBEzR+GnnfLj3ooFwwPqdAshAazhEGUXJJIrJ1MGOUamJ2jQ9QVltkCv0XqFh5IncBX01afGYnDqD40u2z76JK/N0bnxweC5sRB9vF34zh4gjg4uMjXobihWTlJUZlw9+fzSHlpGYhTminKSepqebF50NmTyor6qxrLO0L7YLn0ALuhCwCrJAjrUqkrjGrsIkGMW/BMEPJcphLgDaABjUKNEh29vdgTLLIOLpF80s5xrp8ORVONgi8PcZ8zlRJvf40tL8/QPYQ+BAgjgMxkPIQ6E6hgkdjoNIQ+JEijMsasNY0RQix4gKP+YIKXKkwJIFF6JMudFEAgAh+QQFBQAEACw8AAIAQgBCAAAD/kg0PPowykmrna3dzXvNmSeOFqiRaGoyaTuujitv8Gx/661HtSv8gt2jlwIChYtc0XjcEUnMpu4pikpv1I71astytkGh9wJGJk3QrXlcKa+VWjeSPZHP4Rtw+I2OW81DeBZ2fCB+UYCBfWRqiQp0CnqOj4J1jZOQkpOUIYx/m4oxg5cuAaYBO4Qop6c6pKusrDevIrG2rkwptrupXB67vKAbwMHCFcTFxhLIt8oUzLHOE9Cy0hHUrdbX2KjaENzey9Dh08jkz8Tnx83q66bt8PHy8/T19vf4+fr6AP3+/wADAjQmsKDBf6AOKjS4aaHDgZMeSgTQcKLDhBYPEswoA1BBAgAh+QQFBQAEACxOAAoAMABXAAAD7Ei6vPOjyUkrhdDqfXHm4OZ9YSmNpKmiqVqykbuysgvX5o2HcLxzup8oKLQQix0UcqhcVo5ORi+aHFEn02sDeuWqBGCBkbYLh5/NmnldxajX7LbPBK+PH7K6narfO/t+SIBwfINmUYaHf4lghYyOhlqJWgqDlAuAlwyBmpVnnaChoqOkpaanqKmqKgGtrq+wsbA1srW2ry63urasu764Jr/CAb3Du7nGt7TJsqvOz9DR0tPU1TIA2ACl2dyi3N/aneDf4uPklObj6OngWuzt7u/d8fLY9PXr9eFX+vv8+PnYlUsXiqC3c6PmUUgAACH5BAUFAAQALE4AHwAwAFcAAAPpSLrc/m7IAau9bU7MO9GgJ0ZgOI5leoqpumKt+1axPJO1dtO5vuM9yi8TlAyBvSMxqES2mo8cFFKb8kzWqzDL7Xq/4LB4TC6bz1yBes1uu9uzt3zOXtHv8xN+Dx/x/wJ6gHt2g3Rxhm9oi4yNjo+QkZKTCgGWAWaXmmOanZhgnp2goaJdpKGmp55cqqusrZuvsJays6mzn1m4uRAAvgAvuBW/v8GwvcTFxqfIycA3zA/OytCl0tPPO7HD2GLYvt7dYd/ZX99j5+Pi6tPh6+bvXuTuzujxXens9fr7YPn+7egRI9PPHrgpCQAAIfkEBQUABAAsPAA8AEIAQgAAA/lIutz+UI1Jq7026h2x/xUncmD5jehjrlnqSmz8vrE8u7V5z/m5/8CgcEgsGo/IpHLJbDqf0Kh0ShBYBdTXdZsdbb/Yrgb8FUfIYLMDTVYz2G13FV6Wz+lX+x0fdvPzdn9WeoJGAYcBN39EiIiKeEONjTt0kZKHQGyWl4mZdREAoQAcnJhBXBqioqSlT6qqG6WmTK+rsa1NtaGsuEu6o7yXubojsrTEIsa+yMm9SL8osp3PzM2cStDRykfZ2tfUtS/bRd3ewtzV5pLo4eLjQuUp70Hx8t9E9eqO5Oku5/ztdkxi90qPg3x2EMpR6IahGocPCxp8AGtigwQAIfkEBQUABAAsHwBOAFcAMAAAA/9Iutz+MMo36pg4682J/V0ojs1nXmSqSqe5vrDXunEdzq2ta3i+/5DeCUh0CGnF5BGULC4tTeUTFQVONYAs4CfoCkZPjFar83rBx8l4XDObSUL1Ott2d1U4yZwcs5/xSBB7dBMBhgEYfncrTBGDW4WHhomKUY+QEZKSE4qLRY8YmoeUfkmXoaKInJ2fgxmpqqulQKCvqRqsP7WooriVO7u8mhu5NacasMTFMMHCm8qzzM2RvdDRK9PUwxzLKdnaz9y/Kt8SyR3dIuXmtyHpHMcd5+jvWK4i8/TXHff47SLjQvQLkU+fG29rUhQ06IkEG4X/Rryp4mwUxSgLL/7IqFETB8eONT6ChCFy5ItqJomES6kgAQAh+QQFBQAEACwKAE4AVwAwAAAD/0i63A4QuEmrvTi3yLX/4MeNUmieITmibEuppCu3sDrfYG3jPKbHveDktxIaF8TOcZmMLI9NyBPanFKJp4A2IBx4B5lkdqvtfb8+HYpMxp3Pl1qLvXW/vWkli16/3dFxTi58ZRcChwIYf3hWBIRchoiHiotWj5AVkpIXi4xLjxiaiJR/T5ehoomcnZ+EGamqq6VGoK+pGqxCtaiiuJVBu7yaHrk4pxqwxMUzwcKbyrPMzZG90NGDrh/JH8t72dq3IN1jfCHb3L/e5ebh4ukmxyDn6O8g08jt7tf26ybz+m/W9GNXzUQ9fm1Q/APoSWAhhfkMAmpEbRhFKwsvCsmosRIHx444PoKcIXKkjIImjTzjkQAAIfkEBQUABAAsAgA8AEIAQgAAA/VIBNz+8KlJq72Yxs1d/uDVjVxogmQqnaylvkArT7A63/V47/m2/8CgcEgsGo/IpHLJbDqf0Kh0Sj0FroGqDMvVmrjgrDcTBo8v5fCZki6vCW33Oq4+0832O/at3+f7fICBdzsChgJGeoWHhkV0P4yMRG1BkYeOeECWl5hXQ5uNIAOjA1KgiKKko1CnqBmqqk+nIbCkTq20taVNs7m1vKAnurtLvb6wTMbHsUq4wrrFwSzDzcrLtknW16tI2tvERt6pv0fi48jh5h/U6Zs77EXSN/BE8jP09ZFA+PmhP/xvJgAMSGBgQINvEK5ReIZhQ3QEMTBLAAAh+QQFBQAEACwCAB8AMABXAAAD50i6DA4syklre87qTbHn4OaNYSmNqKmiqVqyrcvBsazRpH3jmC7yD98OCBF2iEXjBKmsAJsWHDQKmw571l8my+16v+CweEwum8+hgHrNbrvbtrd8znbR73MVfg838f8BeoB7doN0cYZvaIuMjY6PkJGSk2gClgJml5pjmp2YYJ6dX6GeXaShWaeoVqqlU62ir7CXqbOWrLafsrNctjIDwAMWvC7BwRWtNsbGFKc+y8fNsTrQ0dK3QtXAYtrCYd3eYN3c49/a5NVj5eLn5u3s6e7x8NDo9fbL+Mzy9/T5+tvUzdN3Zp+GBAAh+QQJBQAEACwCAAIAfAB8AAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdArcQK2TOL7/nl4PSMwIfcUk5YhUOh3M5nNKiOaoWCuWqt1Ou16l9RpOgsvEMdocXbOZ7nQ7DjzTaeq7zq6P5fszfIASAYUBIYKDDoaGIImKC4ySH3OQEJKYHZWWi5iZG0ecEZ6eHEOio6SfqCaqpaytrpOwJLKztCO2jLi1uoW8Ir6/wCHCxMG2x7muysukzb230M6H09bX2Nna29zd3t/g4cAC5OXm5+jn3Ons7eba7vHt2fL16tj2+QL0+vXw/e7WAUwnrqDBgwgTKlzIsKHDh2gGSBwAccHEixAvaqTYcFCjRoYeNyoM6REhyZIHT4o0qPIjy5YTTcKUmHImx5cwE85cmJPnSYckK66sSAAj0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gwxZJAAA7')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "40px 40px"
            }
              , S = {
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "none",
                background: "rgba(0,0,0,0.4)",
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwEAYAAAAHkiXEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAByBJREFUeNrlXFlIVV0U3vsaaINmZoX0YAR6y8oGMkKLoMESSjBoUJEoIogoIggigoryIQoKGqi3Roh6TKGBIkNEe6hMgzTNKLPSUlMrNdvrf/juurlP5zpc7znb+r+X755pn7W+Pe+9zpVimIEUKVKJiUIKKWRqKs5OmwZOTBQkSFBUFK5HR+tPt7WBOzpwX3U1jquqwGVleK6iQkoppSQy7a8xEBERLVwIPnsWXF9PrqCxEXzxInjpUrDH47YO0h2hw8JwtG4deN8+8OzZA0vl7Vt/iZZCCtnUhPPt7fp9o0fjvpgYHHu9uD8+Hsdsh52hggTV1uLg2DHwpUvSIz3S093ttE4hB5qSxYuRAc+f910im5vBFy6As7LALORQ7RgzBullZIBPngQ3NPRt1+vXeH7NGtN69u8oERFFRIDPnQMrZe8YZ0huLhwMDzdjb1gYC4zj4uKAeaFIkbpxAwfWvse48FOngp89s7eeS1p2Nlg63vQF7Y8iRWrlSthZXR2wZhAR0dy55gwlIqI5c8AfPtgbeuUKHIqKMi3soP3z1UzwiRP2NbqtDbxsmXuGacK3tOgG/fwJ3rbNtIDO+J2ZiQzp6ND97uzE+RUrHDaAmxprif/+HQasXm1aKKcBPxcsADc1/VEjFClS8+eH7oXcuSpSpJ480V/Y0wPOyjItjNtgofWmiPHuHa7Hxg79RUT0e1Rjxb/X1ASnDw9vf/3S9bl1K/iEFSlSixbZdz7Xr5t2fLgBuuTn2xfUjRsHmVBYGNg6gWpo+FtHNU4DuowYAZ3Ky+11GzOm/4SIiGjDBvuczM52zAHua4iI6OpVcGEheO1a8PCdP/j9CNRyKFKk9u4doBDWCRXXBOcE0GekgVBUhPuSk00LPTAdCwp0+3n0GBER4AFenbQiJ8cdg7dvpwGB5xunT4PHjTMtuL0/qan29q9fH+AB62jnyxe31moGlwFWNDbCzq1bcez+snLffr14odtrMzrCBet6/Pnz7hoabAZY8fgxT5iGRwbs36/b19kJHjnS49+BEkIIMXmy/vjt26YdCA4pKdgHKC2Fo5cvh2xiFBTu3NGPw8Ox/5CW5tG3/hi8VffokRmDQwUeNOTlwc/KSmRIbq67djx9Cm5p+W2akEKmpfnaSt5zZdTXY8+0udmQcg5h0iQwD3MfPgRPn+7UG6GjUjiqrNSver0eVIWEBP85EiSIN7H/dSxZAuY1roMHHRt02OqamOhrgnoN46SQQn76ZFoad8Hj8kOH4D/PZJOSQvYKW11jYnxNkHWK3NFhWhKz8HrB9+7xaCU06fYKIiBBgiIjfRlgHTf/j+NlNMTFgceOHXJSJEgQ9wXCVyOk9AlvLfEDWDT6X+DAAXSiHz8OOSkppJCRkfrJ9vYR+NHaql8wNV42jVevUFJ37kQ8kHX8PlRMmOD/SYIEtbZ69IAkvsATs38dP36ADx8GJyc7IzyD+xbhqxE1Nb4a8PKlfiE+HsOxyEgYZI1A+9tRUADetQtNTF2dU29CJ84Twhkz9KtVVb4+oKxMvxAWxjM101KFBvX1qNmbNkHwNWucFl4HT/QmTvSfIkGCSks9HC2MsxxzyTekp5uWLjh0dYHz88FeL2ry5ctm7LHq2NMD7rXUg6rC0cKM9+/BfQS1hghDXg1VpEjdvasvLpqHf3VWs/P+/QA3Lltm75jz8T7BZQAvn9tscJgWXpEiNWuWvd2bNwcQwONbnq6p0R8oLnYnA7Zs6Vvw7m7Yd/z4gDe5DQH2Xrum29/SwoObfh7cts1egFWrnDU4Lg785g2Ytx4LC2H4zJmmhe3XD5+dsJsD1xhHjgwwgfBwPFBXpydQXe3uFqXzfU9o7ZUSXFRkX/IHMcENGKXgixY27fBwA8TZudO+5dixY4gJ37xpyQVfvEtmpmnHTQMFMiUFevBeL6OkZMg1GQlER4P5wwTGt29g65bmvw/4HShanD+5mjIlxC+cNw/cKxqYw7RDHZY9TOEXXpEiVVurC8+jtJUrnTNAkSK1fDle2NWlG9DeDs7IMC2UM35zU2Mt8Urhel6eywalp+vCMzhM++hRDlo1LeCg/dNGNdy5Wtt4LvEuCv+HodqHCu/e2Y8Cyss5aNW0sAPzh8fx1uEkgyMGHWxqgjM8NhYGWoNSraMnvm6+89aXDHjmap1AMUpKcD9/+D2MAYNzcsD9fRDNsZMcwsedfehiPJFeUhJ4925wWVnfdvFHiDt2gEM/MXT+rwp47UMKKeT27Ti7Zw+YA6UCgbdKKyr8cTVSSCEbG3Ge/5yDwWtD48fjfv6rAl7C6LUeb4uvX8FnzuD5U6ewjP35s9M6uQaUJP4Qgz8E4SbJ2sk5BV5jevAAvHmzqS9/hs0XJxBi1CgOWtVjVnlHKSEB16Oj/wgoE0L8LsFcM169AldV8Q4UjouKULKtNch9/AdsEf6XQYgIsAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xMlQxMTo1NjowNSswODowMGcMj/QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTJUMTE6NTY6MDUrMDg6MDAWUTdIAAAASXRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9wZHMzeWYxNGczYi9ib2Zhbmcuc3Zn11us5wAAAABJRU5ErkJggg==')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "48px 48px",
                cursor: "pointer"
            }
              , k = {
                position: "absolute",
                top: 0,
                height: "100%",
                display: "flex",
                alignItems: "center"
            }
              , x = {
                display: "none",
                position: "relative",
                fontSize: "13px",
                color: "#fff",
                lineHeight: "20px",
                marginLeft: "5px",
                marginRight: "5px",
                userSelect: "none"
            }
              , B = {
                display: "none",
                position: "relative",
                width: "16px",
                height: "16px",
                marginLeft: "8px",
                marginRight: "8px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                cursor: "pointer"
            };
            n.setStyle(A, M),
            n.setStyle(o, {
                height: "38px",
                zIndex: 11,
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                background: "rgba(0,0,0)"
            }),
            n.setStyle(b, E),
            n.setStyle(c, S),
            n.setStyle(g, {
                position: "absolute",
                width: "100%",
                top: "60%",
                textAlign: "center"
            }),
            n.setStyle(a, Object.assign({}, k, {
                left: 0
            })),
            n.setStyle(s, Object.assign({}, k, {
                right: 0
            })),
            n.setStyle(f, x),
            n.setStyle(h, x),
            n.setStyle(u, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAARVJREFUSMe9laEOglAUhs+5k9lJFpsJ5QWMJoNGbEY0mEy+gr6GNo0a3SiQCegMRILzGdw4hl+Cd27KxPuXb2zA/91z2YXoGRERkX4fvN3A2QxUiv4dFM3n8jZRBLbbVfd+ubJuF4xjiCyXkksueb1uSKCIZYGLBTEx8ekEoV7PkICeVgs8HiGyXoO2bUigCDM4HoPnM7bI8wwJ6Gk0sEXbLSay30Oo2TQkoGcwgFCSQMhxDAvoETEscDiQkJC4LjMz8+XyZ4HrFYWjEQqHQ1asWGWZfmdFAsVINxuw00HhbvfpydpvxWkKTqdYaRCUfUPJCdzv4Gr1uqfli0tOIAzByUT/iCrL6+84y3Bw+D6ui5Ou+jwA8FnIO++FACgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDCKP7wnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAw+2IEmwAAAEl0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fZ2Y3MDBzN2IzZncvYm9mYW5nLnN2Z8fICi0AAAAASUVORK5CYII=')"
            })),
            n.setStyle(d, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAHVJREFUSMftkCESwCAMBEOnCtdXVMKHeC7oInkEeQJXkRoEZWraipxZc8lsQqQZBACAlIS1oqGhhTCdu3oyxyyMcdRf79c5J7SWDBky+z4173rbJvR+VF/e/qwKqIAKqMBDgZyFzAQCoZTpxq7HLDyOrw/9b07l3z4dDnI2IAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMIo/vCcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDD7YgSbAAAASnRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9nZjcwMHM3YjNmdy96YW50aW5nLnN2ZxqNZJkAAAAASUVORK5CYII=')"
            })),
            n.setStyle(l, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAaxJREFUSMfNlLFOAkEQhmevAZMjR6OGRBJKsFBzdkYNpYSaWkopIOFRCBWh1ieA+ALGRgutjK0HzV2H5SX7W/zsmY3cnTEhcZovOzcz9+/s7Ir8d4OGht7fBwAgjvEri2OTl1ffSf0xAMBxRIkS1e3Se3+vcszEMe/6OqmT/aN2m1wsNu/o5YVsNHI7BgA4PCRfXzfXCwKy1RLbcXZG9nrkzc12jvT8nPU/PtatOThgAx8fuS4WyZ0de2e+T87n5OcnuVqRsxl5cpImQDnKUc7DA1fVqpimZCu+vCSjiNH9PlmpJNTQ0INBErfeafZRAakC6FWKfH9nwU7H/l6rGdqCOx3y7c3U+aOARsMMp+1vNskwTLjulB23XJL1epqA9OshIiKeJxAIoug7UyA4OuLi6Ynr52deu+NjOy4MSc9Ln8rMDpTLybBpaOjdXbJUIqdTm8a/t2fn/RSQewR24HicTLmGhnbdzcPquvYtGY3+PIR24UKBUXd35v6Sk4lN47+9NXm/FBAEedfGTjw9JYdDm76fm6+hoS8ujGAxT6L9Im7bTKeurvIEb92+AES1b6x283XSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABJdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L2NhbWVyYS5zdmeyubWEAAAAAElFTkSuQmCC')"
            })),
            n.setStyle(p, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAALZJREFUSMftVbsORUAQVSj8DomChvh3lU5CoSVCQq2RObeYu8XG3deVoHCak81kds7Oaz3vxRcAAMwztOg6vX9d6/3XFQQC+b7iAoFhYE7Tvx9EIFAcy/ftO3MQGAQkCfM4MmeZWyajiLnvmYuCeduMAuSzvRBVYNluFHCssSgFp7Sq9ALKkjnPf9ubRtkDL27HNT3QtsY9cAjsNAVheHIKBOwD2wpxFHDbJpwmaHH2L1iWx+2BDy8RbXXtqbRBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABTdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L3F1YW5waW5nenVpZGFodWEuc3ZnTBoI7AAAAABJRU5ErkJggg==')"
            })),
            n.setStyle(m, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAYJJREFUSMfdVbGKwkAQnQn+geAfWBixUTsVgp3YGKxSWflVNmIjARULwc5KO40ipNHWRgs/wGLniucKa+Jd5ODuuGle5u3szGRmd5bor4iIiMhuB3Sc+HXXBdp2/Lpta7v4dccRJUrUdhtNQIkSVa3C8HwG1uumg34f2OnEB+h0tF1Sv5b+YIsttpZLEhKSdhvscPi8IXFF74GJiYnHY7Cex8zMvFgkbInjmJnv98kqoO30vmhLtaRMB60WtEbDNDudgMUiKiQSzfjOMzFxoQAyCPSfw7/nQZ/PUYnpNGV6OR6BmYzJbzYIoBQCzGaRBDQvJCTdLnTLolg5HN5t6f8V1h/oUT4PrVKJWBotmEzQw+vV3J9Ow851P2/BaoX9Yfh0BrJZYKlk8uUyHOpDeLuBHwzMBJtN2PV6IPUhXK9Nf5cLMAxfluanrmGkRBggtRo03wfq66P/6CsJAnOg+f6rgfZI4BGYiYlHIx048eR6krcnq34kkj1GuVz8+jceo9+SD5A8yGh8CTq7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABNdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L3p1aXhpYW9odWEuc3ZnoCFr0AAAAABJRU5ErkJggg==')"
            })),
            n.setStyle(v, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAR9JREFUSMfVlD0LglAYhe9VkwgNihpsjbYQf4JTS7+iuaGxpcGfJjS0NFRLk2NDi6MogafhJGRIX9yEzvJwrx/nvPd9VYh/F3LkyBuN2g3J1QoAgCQhPe/Hxq5Lo+0WlfJ9dYYAgGaTDAIyy/BUnwcwWJlhcLnZkN2ugIBAuy2kkEL2ep8F73S4kjfFcfn6cMj9KLodrWVBiXyf75tMyOOR+4MBOZ8XLXzorboA5UpnM/J0Ivd7+vX7xX2asqGpVKtFXi5sqWmypXefrfIWAACmU/JwKCoun8hu9zA0uk6u13wgirg+n7+bAcsibbt6SB3n9TQXPxwAwHJJpum7M6BcDDQa0SgMaw9QPkJNIxcLMo4ZcDz+eYDqQFLWbqxKV57EtW1WtMbmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABKdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L2ppbmd5aW4uc3ZnIlMYaQAAAABJRU5ErkJggg==')"
            })),
            n.setStyle(y, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAU5JREFUSMftkzGKwlAURf9PULBQwULSCKK1bZAgNuoaFFyAC3AdZg0uQCwshWzAShEEO7Gy0soUCu9Occ3An5nMGCfdzGsO7+Xy3/03iVL/lbAAACiVIBCI77O37Vi9QCDZbEqLm03ycEBUAoHk818v7nYpul5Jz4tf8HBKYa1mcjwmbzd8rG8NFIsU7ffk8UjmcjE3XK+RtB4G2PT75GbDeblMttumfjSKMRCGLxsQCKTReE9KIJDJxDw/SmKxiOZWWh+ntrSlre2WXRAorbTSrZapip7X66kbMKtQUFBQCENznsmQ93vqBhh5r8fO85jAcsnIrcce1yV3uxgD8zl5uZgU+dGBVlrp6GbTKRPwffaDAek45Gz2/M0AAJ0OeTol+w0rFYrOZ3K1MhNJEjEAwHF4cBA8Z8B1zcXV6msv+JMR2yaHQ1LrXx/8Z+sNRxsWcwZeb6UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDCKP7wnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAw+2IEmwAAAEt0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fZ2Y3MDBzN2IzZncvc2hlbmd5aW4uc3ZnFog1MQAAAABJRU5ErkJggg==')"
            })),
            n.setStyle(w, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAPRJREFUSMflVDEOwjAQO0e8gr2sZYVunREbD6ISfAgmkBjpC/hBEQ+AtTWD6QAI0gBlqRfLp+TiXC5n1nXgMUCS5HBoNBqj6IOMMFwuEpsNAABl6d3HihWrOJaBsuRPkGW+c929HAxuYefb6L+R0ZgkMrJYiItCnCT1sl5Y1jwXj0bNniJNJWqujfX7LyrwJh8AYDxWgulU0dPp20IFlxoODm61kpE4VnS9/puBXyPYgH7LbKY3PhwUnUw+NdC4CdW9+71UgyZspwIBB9No3O0klktxUahyx+Pz+lYG0Xzu84lXRqTqwRQAGAzns8R223gUdxZXGcAK5Hp0ClIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDCKP7wnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAw+2IEmwAAAE50RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fZ2Y3MDBzN2IzZncvbHV6aGlzaGlwaW4uc3Zn5Zd7GQAAAABJRU5ErkJggg==')"
            })),
            n.setStyle(_, Object.assign({}, B, {
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAahJREFUSMdjYBjpgBFd4NZK+f+soQYG//T+yzFuUFUl2cApjEWM/758UZvysPDn3127GBkZGBgY/v4l6ICb9xTWsRbp6/9f9W8N44Jz5xgCGI4wfGFiIttrR/5n/3/U3KyR8rj8t0RdHS5lcAv+//yXzzhZTY1ii2FAmsGZocna+maD3GnWY62tNzbJBbDOffLkxie5eJYwa2uYMhaigzb2/zyGguPH/y9mTGKYYGlJUIMiYxDjHCen/4oMDAxznJzg4k8Z/jP+l5LCCAFCQP30Y5dfXVZWDI7/zzIs8PNjNGJ4/7/r+XNKA4rkoNZ4/lj0V9TmzUxJv0J+F+jrM3YyvPq/acsWujmA2oBkB9y4LifLxhoa+teAzYFtwtWr/8sZxBj9fHxo7oCbprJ72MqOHWNgZGBkYFy1isGGoZahTFSU0hAgOhcQnfph4P7/df9T9u1jPMn4nyHmxIn/bAzLGe7GxTHsZyj+f+zpUwYGBmmG6bQsiMr+L/v/rqlJY9Njm9889fW4lGEUxXCHwAomUgH3vxBG8c+f1WWf9P98sns3oaJ4FAAAbtWqHTT84QYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6MzU6MjMrMDg6MDBLHbvEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjM1OjIzKzA4OjAwOkADeAAAAE50RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fcTM1YTFhNHBtY2MvbHV6aGlzaGlwaW4uc3Zn6xlv1QAAAABJRU5ErkJggg==')"
            })),
            b.appendChild(g),
            t._opt.text && (a.appendChild(f),
            e.textDom = f),
            t._opt.showBandwidth && (a.appendChild(h),
            e.speedDom = h),
            t._opt.operateBtns.record && (s.appendChild(_),
            s.appendChild(w),
            e.recordingDom = _,
            e.recordDom = w),
            t._opt.operateBtns.screenshot && (s.appendChild(l),
            e.screenshotsDom = l),
            t._opt.operateBtns.play && (s.appendChild(u),
            s.appendChild(d),
            e.playDom = u,
            e.pauseDom = d),
            t._opt.operateBtns.audio && (s.appendChild(y),
            s.appendChild(v),
            e.playAudioDom = y,
            e.quietAudioDom = v),
            t._opt.operateBtns.fullscreen && (s.appendChild(p),
            s.appendChild(m),
            e.fullscreenDom = p,
            e.minScreenDom = m),
            o.appendChild(a),
            o.appendChild(s),
            r.appendChild(A),
            e.bgDom = A,
            r.appendChild(b),
            e.loadingDom = b,
            t._showControl() && r.appendChild(o),
            t._opt.operateBtns.play && (r.appendChild(c),
            e.playBigDom = c),
            t.$container.appendChild(r),
            t.$doms = e,
            t._removeContainerChild = ()=>{
                for (; t.$container.firstChild; )
                    t.$container.removeChild(t.$container.firstChild)
            }
            ,
            i.default(t),
            n.$hideBtns(t.$doms),
            t._opt.isNotMute || t._mute()
        }
    }
    )),
    o.register("4hE66", (function(e, r) {
        t(e.exports, "default", (()=>i));
        var n = o("2Zrui")
          , i = t=>{
            t._resize$2 = ()=>t.resize(),
            t._handleVisibilityChange$2 = ()=>t._handleVisibilityChange(),
            t._onfullscreenchange$2 = ()=>t._onfullscreenchange(),
            t._handleWakeLock$2 = ()=>t._handleWakeLock(),
            window.addEventListener("resize", t._resize$2),
            window.addEventListener("fullscreenchange", t._onfullscreenchange$2),
            document.addEventListener("visibilitychange", t._handleVisibilityChange$2),
            document.addEventListener("visibilitychange", t._handleWakeLock$2),
            window.addEventListener("fullscreenchange", t._handleWakeLock$2),
            t._opt.supportDblclickFullscreen && t.$canvasElement.addEventListener("dblclick", (()=>{
                t.fullscreen = !t.fullscreen
            }
            ), !1),
            t._removeEventListener = ()=>{
                window.removeEventListener("resize", t._resize$2),
                window.removeEventListener("fullscreenchange", t._onfullscreenchange$2),
                document.removeEventListener("visibilitychange", t._handleWakeLock$2),
                document.removeEventListener("visibilitychange", t._handleVisibilityChange$2),
                window.removeEventListener("fullscreenchange", t._handleWakeLock$2)
            }
            ,
            t.$doms.playDom && t.$doms.playDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t._play()
            }
            ), !1),
            t.$doms.playBigDom && t.$doms.playBigDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t._play()
            }
            ), !1),
            t.$doms.pauseDom && t.$doms.pauseDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t._pause()
            }
            ), !1),
            t.$doms.screenshotsDom && t.$doms.screenshotsDom.addEventListener("click", (e=>{
                e.stopPropagation();
                const r = t._opt.text + "" + n.now();
                t._screenshot(r)
            }
            ), !1),
            t.$doms.fullscreenDom && t.$doms.fullscreenDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t.fullscreen = !0
            }
            ), !1),
            t.$doms.minScreenDom && t.$doms.minScreenDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t.fullscreen = !1
            }
            ), !1),
            t.$doms.recordDom && t.$doms.recordDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t.recording = !0
            }
            ), !1),
            t.$doms.recordingDom && t.$doms.recordingDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t.recording = !1
            }
            ), !1),
            t.$doms.quietAudioDom && t.$doms.quietAudioDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t._cancelMute()
            }
            ), !1),
            t.$doms.playAudioDom && t.$doms.playAudioDom.addEventListener("click", (e=>{
                e.stopPropagation(),
                t._mute()
            }
            ), !1),
            t._enableWakeLock()
        }
    }
    )),
    o.register("1D6XL", (function(e, r) {
        t(e.exports, "default", (()=>a));
        var n = o("2AXxm")
          , i = o("2Zrui")
          , a = t=>{
            const e = new Worker(t._opt.decoder);
            e.onmessage = r=>{
                const o = r.data;
                switch (o.cmd) {
                case n.CMD_TYPE.init:
                    t.setBufferTime(t._opt.videoBuffer),
                    e.postMessage({
                        cmd: n.POST_MESSAGE.init,
                        opt: JSON.stringify(t._opt),
                        sampleRate: t._audioContext.sampleRate
                    }),
                    t._hasLoaded || (t._hasLoaded = !0,
                    t.onLoad(),
                    t._trigger(n.EVEMTS.load));
                    break;
                case n.CMD_TYPE.initSize:
                    t.$canvasElement.width = o.w,
                    t.$canvasElement.height = o.h,
                    t.onInitSize(),
                    t._resize(),
                    t._trigger(n.EVEMTS.videoInfo, {
                        w: o.w,
                        h: o.h
                    }),
                    t._trigger(n.EVEMTS.start),
                    t._supportOffscreen() && (t._bitmaprenderer = t.$canvasElement.getContext("bitmaprenderer"));
                    break;
                case n.CMD_TYPE.render:
                    t.loading && (t.loading = !1,
                    t.playing = !0,
                    t._clearCheckLoading()),
                    t.playing && (t._supportOffscreen() ? t._bitmaprenderer.transferFromImageBitmap(o.buffer) : t._contextGLRender(t.$canvasElement.width, t.$canvasElement.height, o.output[0], o.output[1], o.output[2])),
                    t._trigger(n.EVEMTS.timeUpdate, o.ts),
                    t.onTimeUpdate(o.ts),
                    t._updateStats({
                        buf: o.delay,
                        ts: o.ts
                    }),
                    t._checkHeart();
                    break;
                case n.CMD_TYPE.playAudio:
                    t.playing && !t.quieting && t._playAudio(o.buffer);
                    break;
                case n.CMD_TYPE.print:
                    t.onLog(o.text),
                    t._trigger(n.EVEMTS.log, o.text);
                    break;
                case n.CMD_TYPE.printErr:
                    t.onLog(o.text),
                    t._trigger(n.EVEMTS.log, o.text),
                    t.onError(o.text),
                    t._trigger(n.EVEMTS.error, o.text);
                    break;
                case n.CMD_TYPE.initAudioPlanar:
                    t._initAudioPlanar(o),
                    t._trigger(n.EVEMTS.audioInfo, {
                        numOfChannels: o.channels,
                        sampleRate: o.samplerate
                    });
                    break;
                case n.CMD_TYPE.kBps:
                    t.playing && (t.$doms.speedDom && (t.$doms.speedDom.innerText = i.bpsSize(o.kBps)),
                    t._trigger(n.EVEMTS.kBps, o.kBps));
                default:
                    t[o.cmd] && t[o.cmd](o)
                }
            }
            ,
            t._decoderWorker = e
        }
    }
    )),
    o.register("1i6TV", (function(e, r) {
        t(e.exports, "default", (()=>f));
        var n = o("6qPpy")
          , i = o("lMQnp")
          , a = o("Vjmv2")
          , s = o("5AqPC")
          , f = t=>{
            n.default(t),
            i.default(t),
            a.default(t),
            s.default(t)
        }
    }
    )),
    o.register("6qPpy", (function(e, r) {
        t(e.exports, "default", (()=>a));
        var n = o("2Zrui")
          , i = o("2AXxm")
          , a = t=>{
            t._loading = !0,
            t._recording = !1,
            t._playing = !1,
            t._audioPlaying = !1,
            t._quieting = !1,
            t._fullscreen = !1,
            t._stats = {
                buf: 0,
                fps: 0,
                abps: "",
                vbps: "",
                ts: ""
            },
            t._hasLoaded = !1,
            t._playUrl = "",
            t._startBpsTime = "",
            t._bps = 0,
            t._checkHeartTimeout = null,
            t._wakeLock = null,
            t._contextGL = null,
            t._contextGLRender = null,
            t._checkLoadingTimeout = null,
            t._bitmaprenderer = null,
            t._isPlayingBeforePageHidden = !1,
            t._initCheckVariable = ()=>{
                t._startBpsTime = "",
                t._bps = 0,
                t._clearCheckHeartTimeout(),
                t._clearCheckLoading()
            }
            ,
            t._clearCheckHeartTimeout = ()=>{
                t._checkHeartTimeout && (clearTimeout(t._checkHeartTimeout),
                t._checkHeartTimeout = null)
            }
            ,
            t._startCheckHeartTimeout = ()=>{
                t._checkHeartTimeout = setTimeout((function() {
                    t._trigger(i.EVEMTS.timeout),
                    t.recording = !1,
                    t.playing = !1,
                    t._close()
                }
                ), 1e3 * t._opt.timeout)
            }
            ,
            t._clearCheckLoading = ()=>{
                t._checkLoadingTimeout && (clearTimeout(t._checkLoadingTimeout),
                t._checkLoadingTimeout = null)
            }
            ,
            t._checkLoading = ()=>{
                t._clearCheckLoading(),
                t._checkLoadingTimeout = setTimeout((()=>{
                    t._trigger(i.EVEMTS.timeout),
                    t.playing = !1,
                    t._close(),
                    n.$domToggle(t.$doms.loadingDom, !1)
                }
                ), 1e3 * t._opt.timeout)
            }
        }
    }
    )),
    o.register("lMQnp", (function(e, r) {
        t(e.exports, "default", (()=>i));
        var n = o("2Zrui")
          , i = t=>{
            t.onPlay = n.noop,
            t.onPause = n.noop,
            t.onRecord = n.noop,
            t.onFullscreen = n.noop,
            t.onMute = n.noop,
            t.onLoad = n.noop,
            t.onLog = n.noop,
            t.onError = n.noop,
            t.onTimeUpdate = n.noop,
            t.onInitSize = n.noop
        }
    }
    )),
    o.register("Vjmv2", (function(e, r) {
        t(e.exports, "default", (()=>n));
        var n = t=>{
            t._on = (e,r)=>{
                let n, i, o;
                if (!r)
                    return t;
                for (n = t.__events || (t.__events = {}),
                e = e.split(/\s+/); i = e.shift(); )
                    o = n[i] || (n[i] = []),
                    o.push(r);
                return t
            }
            ,
            t._off = ()=>{
                let e;
                return (e = t.__events) ? (delete t.__events,
                t) : t
            }
            ,
            t._trigger = (e,...r)=>{
                function n(t, e) {
                    if (t)
                        for (let r = 0, n = t.length; r < n; r += 1)
                            t[r](...e)
                }
                let i, o, a;
                if (!(i = t.__events))
                    return t;
                for (e = e.split(/\s+/); o = e.shift(); )
                    (a = i[o]) && (a = a.slice()),
                    n(a, r);
                return t
            }
        }
    }
    )),
    o.register("5AqPC", (function(e, r) {
        t(e.exports, "default", (()=>a), (t=>a = t));
        var n = o("2Zrui")
          , i = o("2AXxm")
          , a = t=>{
            t._pause = ()=>{
                t._close(),
                t.loading && n.$domToggle(t.$doms.loadingDom, !1),
                t.recording = !1,
                t.playing = !1
            }
            ,
            t._play = e=>{
                if (!t._playUrl && !e)
                    return;
                let r = !1;
                e ? (t._playUrl && (t._close(),
                r = !0,
                t.clearView()),
                t.loading = !0,
                n.$domToggle(t.$doms.bgDom, !1),
                t._checkLoading(),
                t._playUrl = e) : t._playUrl && (t.loading ? (n.$hideBtns(t.$doms),
                n.$domToggle(t.$doms.fullscreenDom, !0),
                n.$domToggle(t.$doms.pauseDom, !0),
                n.$domToggle(t.$doms.loadingDom, !0),
                t._checkLoading()) : t.playing = !0),
                t._initCheckVariable(),
                r ? setTimeout((()=>{
                    t._decoderWorker.postMessage({
                        cmd: i.POST_MESSAGE.play,
                        url: t._playUrl
                    })
                }
                ), 300) : t._decoderWorker.postMessage({
                    cmd: i.POST_MESSAGE.play,
                    url: t._playUrl
                })
            }
            ,
            t._screenshot = (e,r,i)=>{
                e = e || n.now();
                const o = {
                    png: "image/png",
                    jpeg: "image/jpeg",
                    webp: "image/webp"
                };
                let a = .92;
                void 0 !== i && (a = Number(i));
                const s = t.$canvasElement.toDataURL(o[r] || o.png, a);
                n.downloadImg(n.dataURLToFile(s), e)
            }
            ,
            t._close = ()=>{
                t._close$2(),
                t._clearView()
            }
            ,
            t._close$2 = ()=>{
                t._opt.debug && console.log("_close$2-START"),
                t._closeAudio && t._closeAudio(),
                t._audioPlayBuffers = [],
                t._audioPlaying = !1,
                t._decoderWorker.postMessage({
                    cmd: i.POST_MESSAGE.close
                }),
                delete t._playAudio,
                t._releaseWakeLock(),
                t._initCheckVariable(),
                t._opt.debug && console.log("_close$2-END")
            }
            ,
            t._releaseWakeLock = ()=>{
                t._wakeLock && (t._wakeLock.release(),
                t._wakeLock = null)
            }
            ,
            t._clearView = ()=>{
                t._contextGL && t._contextGL.clear(t._contextGL.COLOR_BUFFER_BIT)
            }
            ,
            t._resize = ()=>{
                const e = t.$container.clientWidth;
                let r = t.$container.clientHeight;
                t._showControl() && (r -= 38);
                const n = t.$canvasElement.width
                  , i = t.$canvasElement.height
                  , o = t._opt.rotate
                  , a = e / n
                  , s = r / i;
                let f = a > s ? s : a;
                t._opt.isResize || a !== s && (f = a + "," + s),
                t._opt.isFullResize && (f = a > s ? a : s);
                let h = "scale(" + f + ")";
                o && (h += " rotate(" + o + "deg)"),
                t.$canvasElement.style.transform = h,
                t.$canvasElement.style.left = (e - n) / 2 + "px",
                t.$canvasElement.style.top = (r - i) / 2 + "px"
            }
            ,
            t._enableWakeLock = ()=>{
                t._opt.keepScreenOn && "wakeLock"in navigator && navigator.wakeLock.request("screen").then((e=>{
                    t._wakeLock = e
                }
                ))
            }
            ,
            t._supportOffscreen = ()=>!t._opt.forceNoOffscreen && "function" == typeof t.$canvasElement.transferControlToOffscreen,
            t._checkHeart = ()=>{
                t._clearCheckHeartTimeout(),
                t._startCheckHeartTimeout()
            }
            ,
            t._updateStats = e=>{
                e = e || {},
                t._startBpsTime || (t._startBpsTime = n.now());
                const r = n.now();
                r - t._startBpsTime < 1e3 ? t._stats.fps += 1 : (t._stats.ts = e.ts,
                t._stats.buf = e.buf,
                t._trigger(i.EVEMTS.stats, t._stats),
                t._trigger(i.EVEMTS.performance, n.fpsStatus(t._stats.fps)),
                t._trigger(i.EVEMTS.buffer, n.bufferStatus(t._stats.buf, 1e3 * t._opt.videoBuffer)),
                t._stats.fps = 0,
                t._startBpsTime = r)
            }
            ,
            t._onfullscreenchange = ()=>{
                (void 0).fullscreen = n.checkFull()
            }
            ,
            t._handleVisibilityChange = ()=>{
                t._opt.debug && console.log(document.visibilityState, t._isPlayingBeforePageHidden),
                "visible" === document.visibilityState ? t._isPlayingBeforePageHidden && t._play() : (t._isPlayingBeforePageHidden = t.playing,
                t.playing && t._pause())
            }
            ,
            t._handleWakeLock = ()=>{
                null !== t._wakeLock && "visible" === document.visibilityState && t._enableWakeLock()
            }
        }
    }
    )),
    o.register("330vN", (function(t, r) {
        var n = o("aRIaN")
          , i = o("5E3I3");
        (()=>{
            try {
                if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                    const t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                    if (t instanceof WebAssembly.Module)
                        return new WebAssembly.Instance(t)instanceof WebAssembly.Instance
                }
            } catch (t) {}
        }
        )();
        function a(t) {
            let e = t.next()
              , r = null;
            return n=>{
                var i = new Uint8Array(n);
                if (r) {
                    var o = new Uint8Array(r.length + i.length);
                    o.set(r),
                    o.set(i, r.length),
                    i = o,
                    r = null
                }
                for (; i.length >= e.value; ) {
                    var a = i.slice(e.value);
                    e = t.next(i.slice(0, e.value)),
                    i = a
                }
                i.length > 0 && (r = i)
            }
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }
        ),
        e(n).print = function(t) {
            postMessage({
                cmd: "print",
                text: t
            })
        }
        ,
        e(n).printErr = function(t) {
            postMessage({
                cmd: "printErr",
                text: t
            })
        }
        ,
        e(n).postRun = function() {
            var t = []
              , r = {
                _firstCheckpoint: 0,
                _lastCheckpoint: 0,
                _intervalBytes: 0,
                _lastSecondBytes: 0,
                addBytes: function(t) {
                    0 === r._firstCheckpoint ? (r._firstCheckpoint = Date.now(),
                    r._lastCheckpoint = r._firstCheckpoint,
                    r._intervalBytes += t) : Date.now() - r._lastCheckpoint < 1e3 ? r._intervalBytes += t : (r._lastSecondBytes = r._intervalBytes,
                    r._intervalBytes = t,
                    r._lastCheckpoint = Date.now())
                },
                reset: function() {
                    r._firstCheckpoint = r._lastCheckpoint = 0,
                    r._intervalBytes = 0,
                    r._lastSecondBytes = 0
                },
                getCurrentKBps: function() {
                    r.addBytes(0);
                    var t = (Date.now() - r._lastCheckpoint) / 1e3;
                    return 0 == t && (t = 1),
                    r._intervalBytes / t / 1024
                },
                getLastSecondKBps: function() {
                    return r.addBytes(0),
                    0 !== r._lastSecondBytes ? r._lastSecondBytes / 1024 : Date.now() - r._lastCheckpoint >= 500 ? r.getCurrentKBps() : 0
                }
            }
              , o = {
                opt: {},
                initAudioPlanar: function(t, r) {
                    postMessage({
                        cmd: "initAudioPlanar",
                        samplerate: r,
                        channels: t
                    });
                    var i = []
                      , o = []
                      , a = 0;
                    this.playAudioPlanar = function(r, s) {
                        for (var f = s, h = [], u = 0, c = 0; c < 2; c++) {
                            var d = e(n).HEAPU32[(r >> 2) + c] >> 2;
                            h[c] = e(n).HEAPF32.subarray(d, d + f)
                        }
                        if (a) {
                            if (!(f >= (s = 1024 - a)))
                                return a += f,
                                i[0] = Float32Array.of(...i[0], ...h[0]),
                                void (2 == t && (i[1] = Float32Array.of(...i[1], ...h[1])));
                            o[0] = Float32Array.of(...i[0], ...h[0].subarray(0, s)),
                            2 == t && (o[1] = Float32Array.of(...i[1], ...h[1].subarray(0, s))),
                            postMessage({
                                cmd: "playAudio",
                                buffer: o
                            }, o.map((t=>t.buffer))),
                            u = s,
                            f -= s
                        }
                        for (a = f; a >= 1024; a -= 1024)
                            o[0] = h[0].slice(u, u += 1024),
                            2 == t && (o[1] = h[1].slice(u - 1024, u)),
                            postMessage({
                                cmd: "playAudio",
                                buffer: o
                            }, o.map((t=>t.buffer)));
                        a && (i[0] = h[0].slice(u),
                        2 == t && (i[1] = h[1].slice(u)))
                    }
                },
                inputFlv: function*() {
                    yield 9;
                    for (var e = new ArrayBuffer(4), r = new Uint8Array(e), n = new Uint32Array(e); ; ) {
                        r[3] = 0;
                        var i = yield 15
                          , o = i[4];
                        r[0] = i[7],
                        r[1] = i[6],
                        r[2] = i[5];
                        var a = n[0];
                        r[0] = i[10],
                        r[1] = i[9],
                        r[2] = i[8];
                        var h = n[0];
                        16777215 === h && (r[3] = i[11],
                        h = n[0]);
                        var u = yield a;
                        switch (o) {
                        case 8:
                            this.opt.hasAudio && t.push({
                                ts: h,
                                payload: u,
                                decoder: s,
                                type: 0
                            });
                            break;
                        case 9:
                            t.push({
                                ts: h,
                                payload: u,
                                decoder: f,
                                type: u[0] >> 4
                            })
                        }
                    }
                },
                play: function(o) {
                    this.opt.debug && console.log("Jessibuca play", o),
                    this.getDelay = function(t) {
                        return t ? (this.firstTimestamp = t,
                        this.startTimestamp = Date.now(),
                        this.getDelay = function(t) {
                            return this.delay = Date.now() - this.startTimestamp - (t - this.firstTimestamp),
                            this.delay
                        }
                        ,
                        -1) : -1
                    }
                    ;
                    var h = this.opt.vod ? ()=>{
                        if (t.length) {
                            var e = t[0];
                            if (-1 === this.getDelay(e.ts))
                                t.shift(),
                                this.ts = e.ts,
                                e.decoder.decode(e.payload);
                            else
                                for (; t.length && (e = t[0],
                                this.getDelay(e.ts) > this.videoBuffer); )
                                    t.shift(),
                                    this.ts = e.ts,
                                    e.decoder.decode(e.payload)
                        }
                    }
                    : ()=>{
                        if (t.length)
                            if (this.dropping)
                                1 == (e = t.shift()).type ? (this.dropping = !1,
                                this.ts = e.ts,
                                e.decoder.decode(e.payload)) : 0 == e.type && (this.ts = e.ts,
                                e.decoder.decode(e.payload));
                            else {
                                var e = t[0];
                                if (-1 === this.getDelay(e.ts))
                                    t.shift(),
                                    this.ts = e.ts,
                                    e.decoder.decode(e.payload);
                                else if (this.delay > this.videoBuffer + 1e3)
                                    this.dropping = !0;
                                else
                                    for (; t.length && (e = t[0],
                                    this.getDelay(e.ts) > this.videoBuffer); )
                                        t.shift(),
                                        this.ts = e.ts,
                                        e.decoder.decode(e.payload)
                            }
                    }
                    ;
                    if (this.stopId = setInterval(h, 10),
                    this.speedSamplerId = setInterval((()=>{
                        postMessage({
                            cmd: "kBps",
                            kBps: r.getLastSecondKBps()
                        })
                    }
                    ), 1e3),
                    0 == o.indexOf("http")) {
                        this.flvMode = !0;
                        var u = this
                          , c = new AbortController;
                        fetch(o, {
                            signal: c.signal
                        }).then((function(t) {
                            var e = t.body.getReader()
                              , n = u.inputFlv()
                              , i = a(n)
                              , o = function() {
                                e.read().then((({done: t, value: e})=>{
                                    t ? n.return(null) : (r.addBytes(e.byteLength),
                                    i(e),
                                    o())
                                }
                                )).catch((function(t) {
                                    n.return(null),
                                    u.opt.debug && console.error(t),
                                    -1 === t.toString().indexOf("The user aborted a request") && postMessage({
                                        cmd: "printErr",
                                        text: t.toString()
                                    })
                                }
                                ))
                            };
                            o()
                        }
                        )).catch((t=>{
                            postMessage({
                                cmd: "printErr",
                                text: t.message
                            })
                        }
                        )),
                        this._close = function() {
                            c.abort()
                        }
                    } else {
                        if (this.flvMode = -1 != o.indexOf(".flv"),
                        this.ws = new WebSocket(o),
                        this.ws.binaryType = "arraybuffer",
                        this.flvMode) {
                            let t = this.inputFlv();
                            var d = a(t);
                            this.ws.onmessage = t=>{
                                r.addBytes(t.data.byteLength),
                                d(t.data)
                            }
                            ,
                            this.ws.onerror = e=>{
                                t.return(null),
                                postMessage({
                                    cmd: "printErr",
                                    text: e.toString()
                                })
                            }
                        } else
                            this.ws.onmessage = e=>{
                                r.addBytes(e.data.byteLength);
                                var n = new DataView(e.data);
                                switch (n.getUint8(0)) {
                                case 1:
                                    this.opt.hasAudio && t.push({
                                        ts: n.getUint32(1, !1),
                                        payload: new Uint8Array(e.data,5),
                                        decoder: s,
                                        type: 0
                                    });
                                    break;
                                case 2:
                                    t.push({
                                        ts: n.getUint32(1, !1),
                                        payload: new Uint8Array(e.data,5),
                                        decoder: f,
                                        type: n.getUint8(5) >> 4
                                    })
                                }
                            }
                            ,
                            this.ws.onerror = t=>{
                                postMessage({
                                    cmd: "printErr",
                                    text: t.toString()
                                })
                            }
                            ;
                        this._close = function() {
                            this.ws.close(),
                            this.ws = null
                        }
                    }
                    this.setVideoSize = function(t, r) {
                        postMessage({
                            cmd: "initSize",
                            w: t,
                            h: r
                        });
                        var o = t * r
                          , a = o >> 2;
                        if (this.opt.forceNoOffscreen || "undefined" == typeof OffscreenCanvas)
                            this.draw = function(t, r, i, s) {
                                var f = [e(n).HEAPU8.subarray(r, r + o), e(n).HEAPU8.subarray(i, i + a), e(n).HEAPU8.subarray(s, s + a)].map((t=>Uint8Array.from(t)));
                                postMessage({
                                    cmd: "render",
                                    compositionTime: t,
                                    delay: this.delay,
                                    ts: this.ts,
                                    output: f
                                }, f.map((t=>t.buffer)))
                            }
                            ;
                        else {
                            var s = new OffscreenCanvas(t,r)
                              , f = s.getContext("webgl")
                              , h = i.default(f);
                            this.draw = function(i, f, u, c) {
                                h(t, r, e(n).HEAPU8.subarray(f, f + o), e(n).HEAPU8.subarray(u, u + a), e(n).HEAPU8.subarray(c, c + a));
                                let d = s.transferToImageBitmap();
                                postMessage({
                                    cmd: "render",
                                    compositionTime: i,
                                    delay: this.delay,
                                    ts: this.ts,
                                    buffer: d
                                }, [d])
                            }
                        }
                    }
                },
                close: function() {
                    this._close && (this.opt.debug && console.log("worker close"),
                    this._close(),
                    clearInterval(this.stopId),
                    this.stopId = null,
                    clearInterval(this.speedSamplerId),
                    this.speedSamplerId = null,
                    r.reset(),
                    this.ws = null,
                    s.clear(),
                    f.clear(),
                    this.firstTimestamp = 0,
                    this.startTimestamp = 0,
                    this.delay = 0,
                    this.ts = 0,
                    this.flvMode = !1,
                    t = [],
                    delete this.playAudioPlanar,
                    delete this.draw,
                    delete this.getDelay)
                }
            }
              , s = new (e(n).AudioDecoder)(o)
              , f = new (e(n).VideoDecoder)(o);
            postMessage({
                cmd: "init"
            }),
            self.onmessage = function(t) {
                var e = t.data;
                switch (e.cmd) {
                case "init":
                    o.opt = JSON.parse(e.opt),
                    s.sample_rate = e.sampleRate;
                    break;
                case "getProp":
                    postMessage({
                        cmd: "getProp",
                        value: o[e.prop]
                    });
                    break;
                case "setProp":
                    o[e.prop] = e.value;
                    break;
                case "play":
                    o.play(e.url);
                    break;
                case "setVideoBuffer":
                    o.videoBuffer = 1e3 * e.time | 0;
                    break;
                case "close":
                    o.close()
                }
            }
        }
    }
    )),
    o.register("aRIaN", (function(t, e) {
        var r, n = o("67ZL8"), i = "/Users/njvivo/Projects/jessibuca/demo/public", a = o("3tvKv"), s = a.Buffer, f = void 0 !== f ? f : {}, h = {};
        for (r in f)
            f.hasOwnProperty(r) && (h[r] = f[r]);
        var u = []
          , c = "./this.program"
          , d = !1
          , l = !1
          , p = !1
          , m = !1;
        d = "object" == typeof window,
        l = "function" == typeof importScripts,
        p = "object" == typeof n && "object" == typeof n.versions && "string" == typeof n.versions.node,
        m = !d && !p && !l;
        var b, g, v, y, w, _ = "";
        function A(t) {
            return f.locateFile ? f.locateFile(t, _) : _ + t
        }
        p ? (_ = l ? o("7BCkb").dirname(_) + "/" : i + "/",
        b = function(t, e) {
            return y || (y = o("4w6kb")),
            w || (w = o("7BCkb")),
            t = w.normalize(t),
            y.readFileSync(t, e ? null : "utf8")
        }
        ,
        v = function(t) {
            var e = b(t, !0);
            return e.buffer || (e = new Uint8Array(e)),
            C(e.buffer),
            e
        }
        ,
        n.argv.length > 1 && (c = n.argv[1].replace(/\\/g, "/")),
        u = n.argv.slice(2),
        t.exports = f,
        n.on("uncaughtException", (function(t) {
            if (!(t instanceof En))
                throw t
        }
        )),
        n.on("unhandledRejection", gt),
        function(t) {
            n.exit(t)
        }
        ,
        f.inspect = function() {
            return "[Emscripten Module object]"
        }
        ) : m ? ("undefined" != typeof read && (b = function(t) {
            return read(t)
        }
        ),
        v = function(t) {
            var e;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t)) : (C("object" == typeof (e = read(t, "binary"))),
            e)
        }
        ,
        "undefined" != typeof scriptArgs ? u = scriptArgs : void 0 !== arguments && (u = arguments),
        "function" == typeof quit && function(t) {
            quit(t)
        }
        ,
        "undefined" != typeof print && ("undefined" == typeof console && (console = {}),
        console.log = print,
        console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (d || l) && (l ? _ = self.location.href : "undefined" != typeof document && document.currentScript && (_ = document.currentScript.src),
        _ = 0 !== _.indexOf("blob:") ? _.substr(0, _.lastIndexOf("/") + 1) : "",
        b = function(t) {
            var e = new XMLHttpRequest;
            return e.open("GET", t, !1),
            e.send(null),
            e.responseText
        }
        ,
        l && (v = function(t) {
            var e = new XMLHttpRequest;
            return e.open("GET", t, !1),
            e.responseType = "arraybuffer",
            e.send(null),
            new Uint8Array(e.response)
        }
        ),
        g = function(t, e, r) {
            var n = new XMLHttpRequest;
            n.open("GET", t, !0),
            n.responseType = "arraybuffer",
            n.onload = function() {
                200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
            }
            ,
            n.onerror = r,
            n.send(null)
        }
        );
        var M = f.print || console.log.bind(console)
          , E = f.printErr || console.warn.bind(console);
        for (r in h)
            h.hasOwnProperty(r) && (f[r] = h[r]);
        h = null,
        f.arguments && (u = f.arguments),
        f.thisProgram && (c = f.thisProgram),
        f.quit && f.quit;
        var S = 16;
        function k(t, e) {
            return e || (e = S),
            Math.ceil(t / e) * e
        }
        function x(t) {
            x.shown || (x.shown = {}),
            x.shown[t] || (x.shown[t] = 1,
            E(t))
        }
        var B, R = function(t) {
            t
        };
        f.wasmBinary && (B = f.wasmBinary);
        f.noExitRuntime;
        "object" != typeof WebAssembly && gt("no native wasm support detected");
        var T = !1;
        function C(t, e) {
            t || gt("Assertion failed: " + e)
        }
        var D = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function I(t, e, r) {
            for (var n = e + r, i = e; t[i] && !(i >= n); )
                ++i;
            if (i - e > 16 && t.subarray && D)
                return D.decode(t.subarray(e, i));
            for (var o = ""; e < i; ) {
                var a = t[e++];
                if (128 & a) {
                    var s = 63 & t[e++];
                    if (192 != (224 & a)) {
                        var f = 63 & t[e++];
                        if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | f : (7 & a) << 18 | s << 12 | f << 6 | 63 & t[e++]) < 65536)
                            o += String.fromCharCode(a);
                        else {
                            var h = a - 65536;
                            o += String.fromCharCode(55296 | h >> 10, 56320 | 1023 & h)
                        }
                    } else
                        o += String.fromCharCode((31 & a) << 6 | s)
                } else
                    o += String.fromCharCode(a)
            }
            return o
        }
        function P(t, e) {
            return t ? I(z, t, e) : ""
        }
        function O(t, e, r, n) {
            if (!(n > 0))
                return 0;
            for (var i = r, o = r + n - 1, a = 0; a < t.length; ++a) {
                var s = t.charCodeAt(a);
                if (s >= 55296 && s <= 57343)
                    s = 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++a);
                if (s <= 127) {
                    if (r >= o)
                        break;
                    e[r++] = s
                } else if (s <= 2047) {
                    if (r + 1 >= o)
                        break;
                    e[r++] = 192 | s >> 6,
                    e[r++] = 128 | 63 & s
                } else if (s <= 65535) {
                    if (r + 2 >= o)
                        break;
                    e[r++] = 224 | s >> 12,
                    e[r++] = 128 | s >> 6 & 63,
                    e[r++] = 128 | 63 & s
                } else {
                    if (r + 3 >= o)
                        break;
                    e[r++] = 240 | s >> 18,
                    e[r++] = 128 | s >> 12 & 63,
                    e[r++] = 128 | s >> 6 & 63,
                    e[r++] = 128 | 63 & s
                }
            }
            return e[r] = 0,
            r - i
        }
        function L(t, e, r) {
            return O(t, z, e, r)
        }
        function j(t) {
            for (var e = 0, r = 0; r < t.length; ++r) {
                var n = t.charCodeAt(r);
                n >= 55296 && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & t.charCodeAt(++r)),
                n <= 127 ? ++e : e += n <= 2047 ? 2 : n <= 65535 ? 3 : 4
            }
            return e
        }
        var U, N, z, F, q, Y, H, W, K, G = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
        function Z(t, e) {
            for (var r = t, n = r >> 1, i = n + e / 2; !(n >= i) && q[n]; )
                ++n;
            if ((r = n << 1) - t > 32 && G)
                return G.decode(z.subarray(t, r));
            for (var o = "", a = 0; !(a >= e / 2); ++a) {
                var s = F[t + 2 * a >> 1];
                if (0 == s)
                    break;
                o += String.fromCharCode(s)
            }
            return o
        }
        function V(t, e, r) {
            if (void 0 === r && (r = 2147483647),
            r < 2)
                return 0;
            for (var n = e, i = (r -= 2) < 2 * t.length ? r / 2 : t.length, o = 0; o < i; ++o) {
                var a = t.charCodeAt(o);
                F[e >> 1] = a,
                e += 2
            }
            return F[e >> 1] = 0,
            e - n
        }
        function X(t) {
            return 2 * t.length
        }
        function $(t, e) {
            for (var r = 0, n = ""; !(r >= e / 4); ) {
                var i = Y[t + 4 * r >> 2];
                if (0 == i)
                    break;
                if (++r,
                i >= 65536) {
                    var o = i - 65536;
                    n += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)
                } else
                    n += String.fromCharCode(i)
            }
            return n
        }
        function Q(t, e, r) {
            if (void 0 === r && (r = 2147483647),
            r < 4)
                return 0;
            for (var n = e, i = n + r - 4, o = 0; o < t.length; ++o) {
                var a = t.charCodeAt(o);
                if (a >= 55296 && a <= 57343)
                    a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++o);
                if (Y[e >> 2] = a,
                (e += 4) + 4 > i)
                    break
            }
            return Y[e >> 2] = 0,
            e - n
        }
        function J(t) {
            for (var e = 0, r = 0; r < t.length; ++r) {
                var n = t.charCodeAt(r);
                n >= 55296 && n <= 57343 && ++r,
                e += 4
            }
            return e
        }
        function tt(t, e, r) {
            for (var n = 0; n < t.length; ++n)
                N[e++ >> 0] = t.charCodeAt(n);
            r || (N[e >> 0] = 0)
        }
        function et(t) {
            U = t,
            f.HEAP8 = N = new Int8Array(t),
            f.HEAP16 = F = new Int16Array(t),
            f.HEAP32 = Y = new Int32Array(t),
            f.HEAPU8 = z = new Uint8Array(t),
            f.HEAPU16 = q = new Uint16Array(t),
            f.HEAPU32 = H = new Uint32Array(t),
            f.HEAPF32 = W = new Float32Array(t),
            f.HEAPF64 = K = new Float64Array(t)
        }
        f.INITIAL_MEMORY;
        var rt, nt = [], it = [], ot = [];
        function at() {
            if (f.preRun)
                for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length; )
                    ht(f.preRun.shift());
            xt(nt)
        }
        function st() {
            !0,
            f.noFSInit || Lt.init.initialized || Lt.init(),
            It.init(),
            xt(it)
        }
        function ft() {
            if (f.postRun)
                for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length; )
                    ct(f.postRun.shift());
            xt(ot)
        }
        function ht(t) {
            nt.unshift(t)
        }
        function ut(t) {
            it.unshift(t)
        }
        function ct(t) {
            ot.unshift(t)
        }
        var dt = 0
          , lt = null
          , pt = null;
        function mt(t) {
            dt++,
            f.monitorRunDependencies && f.monitorRunDependencies(dt)
        }
        function bt(t) {
            if (dt--,
            f.monitorRunDependencies && f.monitorRunDependencies(dt),
            0 == dt && (null !== lt && (clearInterval(lt),
            lt = null),
            pt)) {
                var e = pt;
                pt = null,
                e()
            }
        }
        function gt(t) {
            throw f.onAbort && f.onAbort(t),
            E(t += ""),
            T = !0,
            1,
            t = "abort(" + t + "). Build with -s ASSERTIONS=1 for more info.",
            new WebAssembly.RuntimeError(t)
        }
        f.preloadedImages = {},
        f.preloadedAudios = {};
        var vt = "data:application/octet-stream;base64,";
        function yt(t) {
            return t.startsWith(vt)
        }
        function wt(t) {
            return t.startsWith("file://")
        }
        var _t, At, Mt = "ff.wasm";
        function Et(t) {
            try {
                if (t == Mt && B)
                    return new Uint8Array(B);
                if (v)
                    return v(t);
                throw "both async and sync fetching of the wasm failed"
            } catch (t) {
                gt(t)
            }
        }
        function St() {
            if (!B && (d || l)) {
                if ("function" == typeof fetch && !wt(Mt))
                    return fetch(Mt, {
                        credentials: "same-origin"
                    }).then((function(t) {
                        if (!t.ok)
                            throw "failed to load wasm binary file at '" + Mt + "'";
                        return t.arrayBuffer()
                    }
                    )).catch((function() {
                        return Et(Mt)
                    }
                    ));
                if (g)
                    return new Promise((function(t, e) {
                        g(Mt, (function(e) {
                            t(new Uint8Array(e))
                        }
                        ), e)
                    }
                    ))
            }
            return Promise.resolve().then((function() {
                return Et(Mt)
            }
            ))
        }
        function kt() {
            var t = {
                a: vn
            };
            function e(t, e) {
                var r = t.exports;
                f.asm = r,
                et(f.asm.J.buffer),
                rt = f.asm.N,
                ut(f.asm.K),
                bt()
            }
            function r(t) {
                e(t.instance)
            }
            function n(e) {
                return St().then((function(e) {
                    return WebAssembly.instantiate(e, t)
                }
                )).then(e, (function(t) {
                    E("failed to asynchronously prepare wasm: " + t),
                    gt(t)
                }
                ))
            }
            if (mt(),
            f.instantiateWasm)
                try {
                    return f.instantiateWasm(t, e)
                } catch (t) {
                    return E("Module.instantiateWasm callback failed with error: " + t),
                    !1
                }
            return B || "function" != typeof WebAssembly.instantiateStreaming || yt(Mt) || wt(Mt) || "function" != typeof fetch ? n(r) : fetch(Mt, {
                credentials: "same-origin"
            }).then((function(e) {
                return WebAssembly.instantiateStreaming(e, t).then(r, (function(t) {
                    return E("wasm streaming compile failed: " + t),
                    E("falling back to ArrayBuffer instantiation"),
                    n(r)
                }
                ))
            }
            )),
            {}
        }
        function xt(t) {
            for (; t.length > 0; ) {
                var e = t.shift();
                if ("function" != typeof e) {
                    var r = e.func;
                    "number" == typeof r ? void 0 === e.arg ? rt.get(r)() : rt.get(r)(e.arg) : r(void 0 === e.arg ? null : e.arg)
                } else
                    e(f)
            }
        }
        function Bt() {
            var t = new Error;
            if (!t.stack) {
                try {
                    throw new Error
                } catch (e) {
                    t = e
                }
                if (!t.stack)
                    return "(no stack trace available)"
            }
            return t.stack.toString()
        }
        function Rt(t) {
            return Y[An() >> 2] = t,
            t
        }
        yt(Mt) || (Mt = A(Mt));
        var Tt = {
            splitPath: function(t) {
                return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(t).slice(1)
            },
            normalizeArray: function(t, e) {
                for (var r = 0, n = t.length - 1; n >= 0; n--) {
                    var i = t[n];
                    "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1),
                    r++) : r && (t.splice(n, 1),
                    r--)
                }
                if (e)
                    for (; r; r--)
                        t.unshift("..");
                return t
            },
            normalize: function(t) {
                var e = "/" === t.charAt(0)
                  , r = "/" === t.substr(-1);
                return (t = Tt.normalizeArray(t.split("/").filter((function(t) {
                    return !!t
                }
                )), !e).join("/")) || e || (t = "."),
                t && r && (t += "/"),
                (e ? "/" : "") + t
            },
            dirname: function(t) {
                var e = Tt.splitPath(t)
                  , r = e[0]
                  , n = e[1];
                return r || n ? (n && (n = n.substr(0, n.length - 1)),
                r + n) : "."
            },
            basename: function(t) {
                if ("/" === t)
                    return "/";
                var e = (t = (t = Tt.normalize(t)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === e ? t : t.substr(e + 1)
            },
            extname: function(t) {
                return Tt.splitPath(t)[3]
            },
            join: function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return Tt.normalize(t.join("/"))
            },
            join2: function(t, e) {
                return Tt.normalize(t + "/" + e)
            }
        };
        function Ct() {
            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                var t = new Uint8Array(1);
                return function() {
                    return crypto.getRandomValues(t),
                    t[0]
                }
            }
            if (p)
                try {
                    var e = o("48PWR");
                    return function() {
                        return e.randomBytes(1)[0]
                    }
                } catch (t) {}
            return function() {
                gt("randomDevice")
            }
        }
        var Dt = {
            resolve: function() {
                for (var t = "", e = !1, r = arguments.length - 1; r >= -1 && !e; r--) {
                    var n = r >= 0 ? arguments[r] : Lt.cwd();
                    if ("string" != typeof n)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    if (!n)
                        return "";
                    t = n + "/" + t,
                    e = "/" === n.charAt(0)
                }
                return (e ? "/" : "") + (t = Tt.normalizeArray(t.split("/").filter((function(t) {
                    return !!t
                }
                )), !e).join("/")) || "."
            },
            relative: function(t, e) {
                function r(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++)
                        ;
                    for (var r = t.length - 1; r >= 0 && "" === t[r]; r--)
                        ;
                    return e > r ? [] : t.slice(e, r - e + 1)
                }
                t = Dt.resolve(t).substr(1),
                e = Dt.resolve(e).substr(1);
                for (var n = r(t.split("/")), i = r(e.split("/")), o = Math.min(n.length, i.length), a = o, s = 0; s < o; s++)
                    if (n[s] !== i[s]) {
                        a = s;
                        break
                    }
                var f = [];
                for (s = a; s < n.length; s++)
                    f.push("..");
                return (f = f.concat(i.slice(a))).join("/")
            }
        }
          , It = {
            ttys: [],
            init: function() {},
            shutdown: function() {},
            register: function(t, e) {
                It.ttys[t] = {
                    input: [],
                    output: [],
                    ops: e
                },
                Lt.registerDevice(t, It.stream_ops)
            },
            stream_ops: {
                open: function(t) {
                    var e = It.ttys[t.node.rdev];
                    if (!e)
                        throw new Lt.ErrnoError(43);
                    t.tty = e,
                    t.seekable = !1
                },
                close: function(t) {
                    t.tty.ops.flush(t.tty)
                },
                flush: function(t) {
                    t.tty.ops.flush(t.tty)
                },
                read: function(t, e, r, n, i) {
                    if (!t.tty || !t.tty.ops.get_char)
                        throw new Lt.ErrnoError(60);
                    for (var o = 0, a = 0; a < n; a++) {
                        var s;
                        try {
                            s = t.tty.ops.get_char(t.tty)
                        } catch (t) {
                            throw new Lt.ErrnoError(29)
                        }
                        if (void 0 === s && 0 === o)
                            throw new Lt.ErrnoError(6);
                        if (null == s)
                            break;
                        o++,
                        e[r + a] = s
                    }
                    return o && (t.node.timestamp = Date.now()),
                    o
                },
                write: function(t, e, r, n, i) {
                    if (!t.tty || !t.tty.ops.put_char)
                        throw new Lt.ErrnoError(60);
                    try {
                        for (var o = 0; o < n; o++)
                            t.tty.ops.put_char(t.tty, e[r + o])
                    } catch (t) {
                        throw new Lt.ErrnoError(29)
                    }
                    return n && (t.node.timestamp = Date.now()),
                    o
                }
            },
            default_tty_ops: {
                get_char: function(t) {
                    if (!t.input.length) {
                        var e = null;
                        if (p) {
                            var r = s.alloc ? s.alloc(256) : new s(256)
                              , i = 0;
                            try {
                                i = y.readSync(n.stdin.fd, r, 0, 256, null)
                            } catch (t) {
                                if (!t.toString().includes("EOF"))
                                    throw t;
                                i = 0
                            }
                            e = i > 0 ? r.slice(0, i).toString("utf-8") : null
                        } else
                            "undefined" != typeof window && "function" == typeof window.prompt ? null !== (e = window.prompt("Input: ")) && (e += "\n") : "function" == typeof readline && null !== (e = readline()) && (e += "\n");
                        if (!e)
                            return null;
                        t.input = bn(e, !0)
                    }
                    return t.input.shift()
                },
                put_char: function(t, e) {
                    null === e || 10 === e ? (M(I(t.output, 0)),
                    t.output = []) : 0 != e && t.output.push(e)
                },
                flush: function(t) {
                    t.output && t.output.length > 0 && (M(I(t.output, 0)),
                    t.output = [])
                }
            },
            default_tty1_ops: {
                put_char: function(t, e) {
                    null === e || 10 === e ? (E(I(t.output, 0)),
                    t.output = []) : 0 != e && t.output.push(e)
                },
                flush: function(t) {
                    t.output && t.output.length > 0 && (E(I(t.output, 0)),
                    t.output = [])
                }
            }
        };
        function Pt(t) {
            for (var e = k(t, 65536), r = wn(e); t < e; )
                N[r + t++] = 0;
            return r
        }
        var Ot = {
            ops_table: null,
            mount: function(t) {
                return Ot.createNode(null, "/", 16895, 0)
            },
            createNode: function(t, e, r, n) {
                if (Lt.isBlkdev(r) || Lt.isFIFO(r))
                    throw new Lt.ErrnoError(63);
                Ot.ops_table || (Ot.ops_table = {
                    dir: {
                        node: {
                            getattr: Ot.node_ops.getattr,
                            setattr: Ot.node_ops.setattr,
                            lookup: Ot.node_ops.lookup,
                            mknod: Ot.node_ops.mknod,
                            rename: Ot.node_ops.rename,
                            unlink: Ot.node_ops.unlink,
                            rmdir: Ot.node_ops.rmdir,
                            readdir: Ot.node_ops.readdir,
                            symlink: Ot.node_ops.symlink
                        },
                        stream: {
                            llseek: Ot.stream_ops.llseek
                        }
                    },
                    file: {
                        node: {
                            getattr: Ot.node_ops.getattr,
                            setattr: Ot.node_ops.setattr
                        },
                        stream: {
                            llseek: Ot.stream_ops.llseek,
                            read: Ot.stream_ops.read,
                            write: Ot.stream_ops.write,
                            allocate: Ot.stream_ops.allocate,
                            mmap: Ot.stream_ops.mmap,
                            msync: Ot.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: Ot.node_ops.getattr,
                            setattr: Ot.node_ops.setattr,
                            readlink: Ot.node_ops.readlink
                        },
                        stream: {}
                    },
                    chrdev: {
                        node: {
                            getattr: Ot.node_ops.getattr,
                            setattr: Ot.node_ops.setattr
                        },
                        stream: Lt.chrdev_stream_ops
                    }
                });
                var i = Lt.createNode(t, e, r, n);
                return Lt.isDir(i.mode) ? (i.node_ops = Ot.ops_table.dir.node,
                i.stream_ops = Ot.ops_table.dir.stream,
                i.contents = {}) : Lt.isFile(i.mode) ? (i.node_ops = Ot.ops_table.file.node,
                i.stream_ops = Ot.ops_table.file.stream,
                i.usedBytes = 0,
                i.contents = null) : Lt.isLink(i.mode) ? (i.node_ops = Ot.ops_table.link.node,
                i.stream_ops = Ot.ops_table.link.stream) : Lt.isChrdev(i.mode) && (i.node_ops = Ot.ops_table.chrdev.node,
                i.stream_ops = Ot.ops_table.chrdev.stream),
                i.timestamp = Date.now(),
                t && (t.contents[e] = i,
                t.timestamp = i.timestamp),
                i
            },
            getFileDataAsTypedArray: function(t) {
                return t.contents ? t.contents.subarray ? t.contents.subarray(0, t.usedBytes) : new Uint8Array(t.contents) : new Uint8Array(0)
            },
            expandFileStorage: function(t, e) {
                var r = t.contents ? t.contents.length : 0;
                if (!(r >= e)) {
                    e = Math.max(e, r * (r < 1048576 ? 2 : 1.125) >>> 0),
                    0 != r && (e = Math.max(e, 256));
                    var n = t.contents;
                    t.contents = new Uint8Array(e),
                    t.usedBytes > 0 && t.contents.set(n.subarray(0, t.usedBytes), 0)
                }
            },
            resizeFileStorage: function(t, e) {
                if (t.usedBytes != e)
                    if (0 == e)
                        t.contents = null,
                        t.usedBytes = 0;
                    else {
                        var r = t.contents;
                        t.contents = new Uint8Array(e),
                        r && t.contents.set(r.subarray(0, Math.min(e, t.usedBytes))),
                        t.usedBytes = e
                    }
            },
            node_ops: {
                getattr: function(t) {
                    var e = {};
                    return e.dev = Lt.isChrdev(t.mode) ? t.id : 1,
                    e.ino = t.id,
                    e.mode = t.mode,
                    e.nlink = 1,
                    e.uid = 0,
                    e.gid = 0,
                    e.rdev = t.rdev,
                    Lt.isDir(t.mode) ? e.size = 4096 : Lt.isFile(t.mode) ? e.size = t.usedBytes : Lt.isLink(t.mode) ? e.size = t.link.length : e.size = 0,
                    e.atime = new Date(t.timestamp),
                    e.mtime = new Date(t.timestamp),
                    e.ctime = new Date(t.timestamp),
                    e.blksize = 4096,
                    e.blocks = Math.ceil(e.size / e.blksize),
                    e
                },
                setattr: function(t, e) {
                    void 0 !== e.mode && (t.mode = e.mode),
                    void 0 !== e.timestamp && (t.timestamp = e.timestamp),
                    void 0 !== e.size && Ot.resizeFileStorage(t, e.size)
                },
                lookup: function(t, e) {
                    throw Lt.genericErrors[44]
                },
                mknod: function(t, e, r, n) {
                    return Ot.createNode(t, e, r, n)
                },
                rename: function(t, e, r) {
                    if (Lt.isDir(t.mode)) {
                        var n;
                        try {
                            n = Lt.lookupNode(e, r)
                        } catch (t) {}
                        if (n)
                            for (var i in n.contents)
                                throw new Lt.ErrnoError(55)
                    }
                    delete t.parent.contents[t.name],
                    t.parent.timestamp = Date.now(),
                    t.name = r,
                    e.contents[r] = t,
                    e.timestamp = t.parent.timestamp,
                    t.parent = e
                },
                unlink: function(t, e) {
                    delete t.contents[e],
                    t.timestamp = Date.now()
                },
                rmdir: function(t, e) {
                    var r = Lt.lookupNode(t, e);
                    for (var n in r.contents)
                        throw new Lt.ErrnoError(55);
                    delete t.contents[e],
                    t.timestamp = Date.now()
                },
                readdir: function(t) {
                    var e = [".", ".."];
                    for (var r in t.contents)
                        t.contents.hasOwnProperty(r) && e.push(r);
                    return e
                },
                symlink: function(t, e, r) {
                    var n = Ot.createNode(t, e, 41471, 0);
                    return n.link = r,
                    n
                },
                readlink: function(t) {
                    if (!Lt.isLink(t.mode))
                        throw new Lt.ErrnoError(28);
                    return t.link
                }
            },
            stream_ops: {
                read: function(t, e, r, n, i) {
                    var o = t.node.contents;
                    if (i >= t.node.usedBytes)
                        return 0;
                    var a = Math.min(t.node.usedBytes - i, n);
                    if (a > 8 && o.subarray)
                        e.set(o.subarray(i, i + a), r);
                    else
                        for (var s = 0; s < a; s++)
                            e[r + s] = o[i + s];
                    return a
                },
                write: function(t, e, r, n, i, o) {
                    if (!n)
                        return 0;
                    var a = t.node;
                    if (a.timestamp = Date.now(),
                    e.subarray && (!a.contents || a.contents.subarray)) {
                        if (o)
                            return a.contents = e.subarray(r, r + n),
                            a.usedBytes = n,
                            n;
                        if (0 === a.usedBytes && 0 === i)
                            return a.contents = e.slice(r, r + n),
                            a.usedBytes = n,
                            n;
                        if (i + n <= a.usedBytes)
                            return a.contents.set(e.subarray(r, r + n), i),
                            n
                    }
                    if (Ot.expandFileStorage(a, i + n),
                    a.contents.subarray && e.subarray)
                        a.contents.set(e.subarray(r, r + n), i);
                    else
                        for (var s = 0; s < n; s++)
                            a.contents[i + s] = e[r + s];
                    return a.usedBytes = Math.max(a.usedBytes, i + n),
                    n
                },
                llseek: function(t, e, r) {
                    var n = e;
                    if (1 === r ? n += t.position : 2 === r && Lt.isFile(t.node.mode) && (n += t.node.usedBytes),
                    n < 0)
                        throw new Lt.ErrnoError(28);
                    return n
                },
                allocate: function(t, e, r) {
                    Ot.expandFileStorage(t.node, e + r),
                    t.node.usedBytes = Math.max(t.node.usedBytes, e + r)
                },
                mmap: function(t, e, r, n, i, o) {
                    if (0 !== e)
                        throw new Lt.ErrnoError(28);
                    if (!Lt.isFile(t.node.mode))
                        throw new Lt.ErrnoError(43);
                    var a, s, f = t.node.contents;
                    if (2 & o || f.buffer !== U) {
                        if ((n > 0 || n + r < f.length) && (f = f.subarray ? f.subarray(n, n + r) : Array.prototype.slice.call(f, n, n + r)),
                        s = !0,
                        !(a = Pt(r)))
                            throw new Lt.ErrnoError(48);
                        N.set(f, a)
                    } else
                        s = !1,
                        a = f.byteOffset;
                    return {
                        ptr: a,
                        allocated: s
                    }
                },
                msync: function(t, e, r, n, i) {
                    if (!Lt.isFile(t.node.mode))
                        throw new Lt.ErrnoError(43);
                    if (2 & i)
                        return 0;
                    Ot.stream_ops.write(t, e, 0, n, r, !1);
                    return 0
                }
            }
        }
          , Lt = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            trackingDelegate: {},
            tracking: {
                openFlags: {
                    READ: 1,
                    WRITE: 2
                }
            },
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: function(t, e) {
                if (e = e || {},
                !(t = Dt.resolve(Lt.cwd(), t)))
                    return {
                        path: "",
                        node: null
                    };
                var r = {
                    follow_mount: !0,
                    recurse_count: 0
                };
                for (var n in r)
                    void 0 === e[n] && (e[n] = r[n]);
                if (e.recurse_count > 8)
                    throw new Lt.ErrnoError(32);
                for (var i = Tt.normalizeArray(t.split("/").filter((function(t) {
                    return !!t
                }
                )), !1), o = Lt.root, a = "/", s = 0; s < i.length; s++) {
                    var f = s === i.length - 1;
                    if (f && e.parent)
                        break;
                    if (o = Lt.lookupNode(o, i[s]),
                    a = Tt.join2(a, i[s]),
                    Lt.isMountpoint(o) && (!f || f && e.follow_mount) && (o = o.mounted.root),
                    !f || e.follow)
                        for (var h = 0; Lt.isLink(o.mode); ) {
                            var u = Lt.readlink(a);
                            if (a = Dt.resolve(Tt.dirname(a), u),
                            o = Lt.lookupPath(a, {
                                recurse_count: e.recurse_count
                            }).node,
                            h++ > 40)
                                throw new Lt.ErrnoError(32)
                        }
                }
                return {
                    path: a,
                    node: o
                }
            },
            getPath: function(t) {
                for (var e; ; ) {
                    if (Lt.isRoot(t)) {
                        var r = t.mount.mountpoint;
                        return e ? "/" !== r[r.length - 1] ? r + "/" + e : r + e : r
                    }
                    e = e ? t.name + "/" + e : t.name,
                    t = t.parent
                }
            },
            hashName: function(t, e) {
                for (var r = 0, n = 0; n < e.length; n++)
                    r = (r << 5) - r + e.charCodeAt(n) | 0;
                return (t + r >>> 0) % Lt.nameTable.length
            },
            hashAddNode: function(t) {
                var e = Lt.hashName(t.parent.id, t.name);
                t.name_next = Lt.nameTable[e],
                Lt.nameTable[e] = t
            },
            hashRemoveNode: function(t) {
                var e = Lt.hashName(t.parent.id, t.name);
                if (Lt.nameTable[e] === t)
                    Lt.nameTable[e] = t.name_next;
                else
                    for (var r = Lt.nameTable[e]; r; ) {
                        if (r.name_next === t) {
                            r.name_next = t.name_next;
                            break
                        }
                        r = r.name_next
                    }
            },
            lookupNode: function(t, e) {
                var r = Lt.mayLookup(t);
                if (r)
                    throw new Lt.ErrnoError(r,t);
                for (var n = Lt.hashName(t.id, e), i = Lt.nameTable[n]; i; i = i.name_next) {
                    var o = i.name;
                    if (i.parent.id === t.id && o === e)
                        return i
                }
                return Lt.lookup(t, e)
            },
            createNode: function(t, e, r, n) {
                var i = new Lt.FSNode(t,e,r,n);
                return Lt.hashAddNode(i),
                i
            },
            destroyNode: function(t) {
                Lt.hashRemoveNode(t)
            },
            isRoot: function(t) {
                return t === t.parent
            },
            isMountpoint: function(t) {
                return !!t.mounted
            },
            isFile: function(t) {
                return 32768 == (61440 & t)
            },
            isDir: function(t) {
                return 16384 == (61440 & t)
            },
            isLink: function(t) {
                return 40960 == (61440 & t)
            },
            isChrdev: function(t) {
                return 8192 == (61440 & t)
            },
            isBlkdev: function(t) {
                return 24576 == (61440 & t)
            },
            isFIFO: function(t) {
                return 4096 == (61440 & t)
            },
            isSocket: function(t) {
                return 49152 == (49152 & t)
            },
            flagModes: {
                r: 0,
                "r+": 2,
                w: 577,
                "w+": 578,
                a: 1089,
                "a+": 1090
            },
            modeStringToFlags: function(t) {
                var e = Lt.flagModes[t];
                if (void 0 === e)
                    throw new Error("Unknown file open mode: " + t);
                return e
            },
            flagsToPermissionString: function(t) {
                var e = ["r", "w", "rw"][3 & t];
                return 512 & t && (e += "w"),
                e
            },
            nodePermissions: function(t, e) {
                return Lt.ignorePermissions || (!e.includes("r") || 292 & t.mode) && (!e.includes("w") || 146 & t.mode) && (!e.includes("x") || 73 & t.mode) ? 0 : 2
            },
            mayLookup: function(t) {
                var e = Lt.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2)
            },
            mayCreate: function(t, e) {
                try {
                    Lt.lookupNode(t, e);
                    return 20
                } catch (t) {}
                return Lt.nodePermissions(t, "wx")
            },
            mayDelete: function(t, e, r) {
                var n;
                try {
                    n = Lt.lookupNode(t, e)
                } catch (t) {
                    return t.errno
                }
                var i = Lt.nodePermissions(t, "wx");
                if (i)
                    return i;
                if (r) {
                    if (!Lt.isDir(n.mode))
                        return 54;
                    if (Lt.isRoot(n) || Lt.getPath(n) === Lt.cwd())
                        return 10
                } else if (Lt.isDir(n.mode))
                    return 31;
                return 0
            },
            mayOpen: function(t, e) {
                return t ? Lt.isLink(t.mode) ? 32 : Lt.isDir(t.mode) && ("r" !== Lt.flagsToPermissionString(e) || 512 & e) ? 31 : Lt.nodePermissions(t, Lt.flagsToPermissionString(e)) : 44
            },
            MAX_OPEN_FDS: 4096,
            nextfd: function(t, e) {
                t = t || 0,
                e = e || Lt.MAX_OPEN_FDS;
                for (var r = t; r <= e; r++)
                    if (!Lt.streams[r])
                        return r;
                throw new Lt.ErrnoError(33)
            },
            getStream: function(t) {
                return Lt.streams[t]
            },
            createStream: function(t, e, r) {
                Lt.FSStream || (Lt.FSStream = function() {}
                ,
                Lt.FSStream.prototype = {
                    object: {
                        get: function() {
                            return this.node
                        },
                        set: function(t) {
                            this.node = t
                        }
                    },
                    isRead: {
                        get: function() {
                            return 1 != (2097155 & this.flags)
                        }
                    },
                    isWrite: {
                        get: function() {
                            return 0 != (2097155 & this.flags)
                        }
                    },
                    isAppend: {
                        get: function() {
                            return 1024 & this.flags
                        }
                    }
                });
                var n = new Lt.FSStream;
                for (var i in t)
                    n[i] = t[i];
                t = n;
                var o = Lt.nextfd(e, r);
                return t.fd = o,
                Lt.streams[o] = t,
                t
            },
            closeStream: function(t) {
                Lt.streams[t] = null
            },
            chrdev_stream_ops: {
                open: function(t) {
                    var e = Lt.getDevice(t.node.rdev);
                    t.stream_ops = e.stream_ops,
                    t.stream_ops.open && t.stream_ops.open(t)
                },
                llseek: function() {
                    throw new Lt.ErrnoError(70)
                }
            },
            major: function(t) {
                return t >> 8
            },
            minor: function(t) {
                return 255 & t
            },
            makedev: function(t, e) {
                return t << 8 | e
            },
            registerDevice: function(t, e) {
                Lt.devices[t] = {
                    stream_ops: e
                }
            },
            getDevice: function(t) {
                return Lt.devices[t]
            },
            getMounts: function(t) {
                for (var e = [], r = [t]; r.length; ) {
                    var n = r.pop();
                    e.push(n),
                    r.push.apply(r, n.mounts)
                }
                return e
            },
            syncfs: function(t, e) {
                "function" == typeof t && (e = t,
                t = !1),
                Lt.syncFSRequests++,
                Lt.syncFSRequests > 1 && E("warning: " + Lt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                var r = Lt.getMounts(Lt.root.mount)
                  , n = 0;
                function i(t) {
                    return Lt.syncFSRequests--,
                    e(t)
                }
                function o(t) {
                    if (t)
                        return o.errored ? void 0 : (o.errored = !0,
                        i(t));
                    ++n >= r.length && i(null)
                }
                r.forEach((function(e) {
                    if (!e.type.syncfs)
                        return o(null);
                    e.type.syncfs(e, t, o)
                }
                ))
            },
            mount: function(t, e, r) {
                var n, i = "/" === r, o = !r;
                if (i && Lt.root)
                    throw new Lt.ErrnoError(10);
                if (!i && !o) {
                    var a = Lt.lookupPath(r, {
                        follow_mount: !1
                    });
                    if (r = a.path,
                    n = a.node,
                    Lt.isMountpoint(n))
                        throw new Lt.ErrnoError(10);
                    if (!Lt.isDir(n.mode))
                        throw new Lt.ErrnoError(54)
                }
                var s = {
                    type: t,
                    opts: e,
                    mountpoint: r,
                    mounts: []
                }
                  , f = t.mount(s);
                return f.mount = s,
                s.root = f,
                i ? Lt.root = f : n && (n.mounted = s,
                n.mount && n.mount.mounts.push(s)),
                f
            },
            unmount: function(t) {
                var e = Lt.lookupPath(t, {
                    follow_mount: !1
                });
                if (!Lt.isMountpoint(e.node))
                    throw new Lt.ErrnoError(28);
                var r = e.node
                  , n = r.mounted
                  , i = Lt.getMounts(n);
                Object.keys(Lt.nameTable).forEach((function(t) {
                    for (var e = Lt.nameTable[t]; e; ) {
                        var r = e.name_next;
                        i.includes(e.mount) && Lt.destroyNode(e),
                        e = r
                    }
                }
                )),
                r.mounted = null;
                var o = r.mount.mounts.indexOf(n);
                r.mount.mounts.splice(o, 1)
            },
            lookup: function(t, e) {
                return t.node_ops.lookup(t, e)
            },
            mknod: function(t, e, r) {
                var n = Lt.lookupPath(t, {
                    parent: !0
                }).node
                  , i = Tt.basename(t);
                if (!i || "." === i || ".." === i)
                    throw new Lt.ErrnoError(28);
                var o = Lt.mayCreate(n, i);
                if (o)
                    throw new Lt.ErrnoError(o);
                if (!n.node_ops.mknod)
                    throw new Lt.ErrnoError(63);
                return n.node_ops.mknod(n, i, e, r)
            },
            create: function(t, e) {
                return e = void 0 !== e ? e : 438,
                e &= 4095,
                e |= 32768,
                Lt.mknod(t, e, 0)
            },
            mkdir: function(t, e) {
                return e = void 0 !== e ? e : 511,
                e &= 1023,
                e |= 16384,
                Lt.mknod(t, e, 0)
            },
            mkdirTree: function(t, e) {
                for (var r = t.split("/"), n = "", i = 0; i < r.length; ++i)
                    if (r[i]) {
                        n += "/" + r[i];
                        try {
                            Lt.mkdir(n, e)
                        } catch (t) {
                            if (20 != t.errno)
                                throw t
                        }
                    }
            },
            mkdev: function(t, e, r) {
                return void 0 === r && (r = e,
                e = 438),
                e |= 8192,
                Lt.mknod(t, e, r)
            },
            symlink: function(t, e) {
                if (!Dt.resolve(t))
                    throw new Lt.ErrnoError(44);
                var r = Lt.lookupPath(e, {
                    parent: !0
                }).node;
                if (!r)
                    throw new Lt.ErrnoError(44);
                var n = Tt.basename(e)
                  , i = Lt.mayCreate(r, n);
                if (i)
                    throw new Lt.ErrnoError(i);
                if (!r.node_ops.symlink)
                    throw new Lt.ErrnoError(63);
                return r.node_ops.symlink(r, n, t)
            },
            rename: function(t, e) {
                var r, n, i = Tt.dirname(t), o = Tt.dirname(e), a = Tt.basename(t), s = Tt.basename(e);
                if (r = Lt.lookupPath(t, {
                    parent: !0
                }).node,
                n = Lt.lookupPath(e, {
                    parent: !0
                }).node,
                !r || !n)
                    throw new Lt.ErrnoError(44);
                if (r.mount !== n.mount)
                    throw new Lt.ErrnoError(75);
                var f, h = Lt.lookupNode(r, a), u = Dt.relative(t, o);
                if ("." !== u.charAt(0))
                    throw new Lt.ErrnoError(28);
                if ("." !== (u = Dt.relative(e, i)).charAt(0))
                    throw new Lt.ErrnoError(55);
                try {
                    f = Lt.lookupNode(n, s)
                } catch (t) {}
                if (h !== f) {
                    var c = Lt.isDir(h.mode)
                      , d = Lt.mayDelete(r, a, c);
                    if (d)
                        throw new Lt.ErrnoError(d);
                    if (d = f ? Lt.mayDelete(n, s, c) : Lt.mayCreate(n, s))
                        throw new Lt.ErrnoError(d);
                    if (!r.node_ops.rename)
                        throw new Lt.ErrnoError(63);
                    if (Lt.isMountpoint(h) || f && Lt.isMountpoint(f))
                        throw new Lt.ErrnoError(10);
                    if (n !== r && (d = Lt.nodePermissions(r, "w")))
                        throw new Lt.ErrnoError(d);
                    try {
                        Lt.trackingDelegate.willMovePath && Lt.trackingDelegate.willMovePath(t, e)
                    } catch (r) {
                        E("FS.trackingDelegate['willMovePath']('" + t + "', '" + e + "') threw an exception: " + r.message)
                    }
                    Lt.hashRemoveNode(h);
                    try {
                        r.node_ops.rename(h, n, s)
                    } catch (t) {
                        throw t
                    } finally {
                        Lt.hashAddNode(h)
                    }
                    try {
                        Lt.trackingDelegate.onMovePath && Lt.trackingDelegate.onMovePath(t, e)
                    } catch (r) {
                        E("FS.trackingDelegate['onMovePath']('" + t + "', '" + e + "') threw an exception: " + r.message)
                    }
                }
            },
            rmdir: function(t) {
                var e = Lt.lookupPath(t, {
                    parent: !0
                }).node
                  , r = Tt.basename(t)
                  , n = Lt.lookupNode(e, r)
                  , i = Lt.mayDelete(e, r, !0);
                if (i)
                    throw new Lt.ErrnoError(i);
                if (!e.node_ops.rmdir)
                    throw new Lt.ErrnoError(63);
                if (Lt.isMountpoint(n))
                    throw new Lt.ErrnoError(10);
                try {
                    Lt.trackingDelegate.willDeletePath && Lt.trackingDelegate.willDeletePath(t)
                } catch (e) {
                    E("FS.trackingDelegate['willDeletePath']('" + t + "') threw an exception: " + e.message)
                }
                e.node_ops.rmdir(e, r),
                Lt.destroyNode(n);
                try {
                    Lt.trackingDelegate.onDeletePath && Lt.trackingDelegate.onDeletePath(t)
                } catch (e) {
                    E("FS.trackingDelegate['onDeletePath']('" + t + "') threw an exception: " + e.message)
                }
            },
            readdir: function(t) {
                var e = Lt.lookupPath(t, {
                    follow: !0
                }).node;
                if (!e.node_ops.readdir)
                    throw new Lt.ErrnoError(54);
                return e.node_ops.readdir(e)
            },
            unlink: function(t) {
                var e = Lt.lookupPath(t, {
                    parent: !0
                }).node
                  , r = Tt.basename(t)
                  , n = Lt.lookupNode(e, r)
                  , i = Lt.mayDelete(e, r, !1);
                if (i)
                    throw new Lt.ErrnoError(i);
                if (!e.node_ops.unlink)
                    throw new Lt.ErrnoError(63);
                if (Lt.isMountpoint(n))
                    throw new Lt.ErrnoError(10);
                try {
                    Lt.trackingDelegate.willDeletePath && Lt.trackingDelegate.willDeletePath(t)
                } catch (e) {
                    E("FS.trackingDelegate['willDeletePath']('" + t + "') threw an exception: " + e.message)
                }
                e.node_ops.unlink(e, r),
                Lt.destroyNode(n);
                try {
                    Lt.trackingDelegate.onDeletePath && Lt.trackingDelegate.onDeletePath(t)
                } catch (e) {
                    E("FS.trackingDelegate['onDeletePath']('" + t + "') threw an exception: " + e.message)
                }
            },
            readlink: function(t) {
                var e = Lt.lookupPath(t).node;
                if (!e)
                    throw new Lt.ErrnoError(44);
                if (!e.node_ops.readlink)
                    throw new Lt.ErrnoError(28);
                return Dt.resolve(Lt.getPath(e.parent), e.node_ops.readlink(e))
            },
            stat: function(t, e) {
                var r = Lt.lookupPath(t, {
                    follow: !e
                }).node;
                if (!r)
                    throw new Lt.ErrnoError(44);
                if (!r.node_ops.getattr)
                    throw new Lt.ErrnoError(63);
                return r.node_ops.getattr(r)
            },
            lstat: function(t) {
                return Lt.stat(t, !0)
            },
            chmod: function(t, e, r) {
                var n;
                "string" == typeof t ? n = Lt.lookupPath(t, {
                    follow: !r
                }).node : n = t;
                if (!n.node_ops.setattr)
                    throw new Lt.ErrnoError(63);
                n.node_ops.setattr(n, {
                    mode: 4095 & e | -4096 & n.mode,
                    timestamp: Date.now()
                })
            },
            lchmod: function(t, e) {
                Lt.chmod(t, e, !0)
            },
            fchmod: function(t, e) {
                var r = Lt.getStream(t);
                if (!r)
                    throw new Lt.ErrnoError(8);
                Lt.chmod(r.node, e)
            },
            chown: function(t, e, r, n) {
                var i;
                "string" == typeof t ? i = Lt.lookupPath(t, {
                    follow: !n
                }).node : i = t;
                if (!i.node_ops.setattr)
                    throw new Lt.ErrnoError(63);
                i.node_ops.setattr(i, {
                    timestamp: Date.now()
                })
            },
            lchown: function(t, e, r) {
                Lt.chown(t, e, r, !0)
            },
            fchown: function(t, e, r) {
                var n = Lt.getStream(t);
                if (!n)
                    throw new Lt.ErrnoError(8);
                Lt.chown(n.node, e, r)
            },
            truncate: function(t, e) {
                if (e < 0)
                    throw new Lt.ErrnoError(28);
                var r;
                "string" == typeof t ? r = Lt.lookupPath(t, {
                    follow: !0
                }).node : r = t;
                if (!r.node_ops.setattr)
                    throw new Lt.ErrnoError(63);
                if (Lt.isDir(r.mode))
                    throw new Lt.ErrnoError(31);
                if (!Lt.isFile(r.mode))
                    throw new Lt.ErrnoError(28);
                var n = Lt.nodePermissions(r, "w");
                if (n)
                    throw new Lt.ErrnoError(n);
                r.node_ops.setattr(r, {
                    size: e,
                    timestamp: Date.now()
                })
            },
            ftruncate: function(t, e) {
                var r = Lt.getStream(t);
                if (!r)
                    throw new Lt.ErrnoError(8);
                if (0 == (2097155 & r.flags))
                    throw new Lt.ErrnoError(28);
                Lt.truncate(r.node, e)
            },
            utime: function(t, e, r) {
                var n = Lt.lookupPath(t, {
                    follow: !0
                }).node;
                n.node_ops.setattr(n, {
                    timestamp: Math.max(e, r)
                })
            },
            open: function(t, e, r, n, i) {
                if ("" === t)
                    throw new Lt.ErrnoError(44);
                var o;
                if (r = void 0 === r ? 438 : r,
                r = 64 & (e = "string" == typeof e ? Lt.modeStringToFlags(e) : e) ? 4095 & r | 32768 : 0,
                "object" == typeof t)
                    o = t;
                else {
                    t = Tt.normalize(t);
                    try {
                        o = Lt.lookupPath(t, {
                            follow: !(131072 & e)
                        }).node
                    } catch (t) {}
                }
                var a = !1;
                if (64 & e)
                    if (o) {
                        if (128 & e)
                            throw new Lt.ErrnoError(20)
                    } else
                        o = Lt.mknod(t, r, 0),
                        a = !0;
                if (!o)
                    throw new Lt.ErrnoError(44);
                if (Lt.isChrdev(o.mode) && (e &= -513),
                65536 & e && !Lt.isDir(o.mode))
                    throw new Lt.ErrnoError(54);
                if (!a) {
                    var s = Lt.mayOpen(o, e);
                    if (s)
                        throw new Lt.ErrnoError(s)
                }
                512 & e && Lt.truncate(o, 0),
                e &= -131713;
                var h = Lt.createStream({
                    node: o,
                    path: Lt.getPath(o),
                    flags: e,
                    seekable: !0,
                    position: 0,
                    stream_ops: o.stream_ops,
                    ungotten: [],
                    error: !1
                }, n, i);
                h.stream_ops.open && h.stream_ops.open(h),
                !f.logReadFiles || 1 & e || (Lt.readFiles || (Lt.readFiles = {}),
                t in Lt.readFiles || (Lt.readFiles[t] = 1,
                E("FS.trackingDelegate error on read file: " + t)));
                try {
                    if (Lt.trackingDelegate.onOpenFile) {
                        var u = 0;
                        1 != (2097155 & e) && (u |= Lt.tracking.openFlags.READ),
                        0 != (2097155 & e) && (u |= Lt.tracking.openFlags.WRITE),
                        Lt.trackingDelegate.onOpenFile(t, u)
                    }
                } catch (e) {
                    E("FS.trackingDelegate['onOpenFile']('" + t + "', flags) threw an exception: " + e.message)
                }
                return h
            },
            close: function(t) {
                if (Lt.isClosed(t))
                    throw new Lt.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                    t.stream_ops.close && t.stream_ops.close(t)
                } catch (t) {
                    throw t
                } finally {
                    Lt.closeStream(t.fd)
                }
                t.fd = null
            },
            isClosed: function(t) {
                return null === t.fd
            },
            llseek: function(t, e, r) {
                if (Lt.isClosed(t))
                    throw new Lt.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                    throw new Lt.ErrnoError(70);
                if (0 != r && 1 != r && 2 != r)
                    throw new Lt.ErrnoError(28);
                return t.position = t.stream_ops.llseek(t, e, r),
                t.ungotten = [],
                t.position
            },
            read: function(t, e, r, n, i) {
                if (n < 0 || i < 0)
                    throw new Lt.ErrnoError(28);
                if (Lt.isClosed(t))
                    throw new Lt.ErrnoError(8);
                if (1 == (2097155 & t.flags))
                    throw new Lt.ErrnoError(8);
                if (Lt.isDir(t.node.mode))
                    throw new Lt.ErrnoError(31);
                if (!t.stream_ops.read)
                    throw new Lt.ErrnoError(28);
                var o = void 0 !== i;
                if (o) {
                    if (!t.seekable)
                        throw new Lt.ErrnoError(70)
                } else
                    i = t.position;
                var a = t.stream_ops.read(t, e, r, n, i);
                return o || (t.position += a),
                a
            },
            write: function(t, e, r, n, i, o) {
                if (n < 0 || i < 0)
                    throw new Lt.ErrnoError(28);
                if (Lt.isClosed(t))
                    throw new Lt.ErrnoError(8);
                if (0 == (2097155 & t.flags))
                    throw new Lt.ErrnoError(8);
                if (Lt.isDir(t.node.mode))
                    throw new Lt.ErrnoError(31);
                if (!t.stream_ops.write)
                    throw new Lt.ErrnoError(28);
                t.seekable && 1024 & t.flags && Lt.llseek(t, 0, 2);
                var a = void 0 !== i;
                if (a) {
                    if (!t.seekable)
                        throw new Lt.ErrnoError(70)
                } else
                    i = t.position;
                var s = t.stream_ops.write(t, e, r, n, i, o);
                a || (t.position += s);
                try {
                    t.path && Lt.trackingDelegate.onWriteToFile && Lt.trackingDelegate.onWriteToFile(t.path)
                } catch (e) {
                    E("FS.trackingDelegate['onWriteToFile']('" + t.path + "') threw an exception: " + e.message)
                }
                return s
            },
            allocate: function(t, e, r) {
                if (Lt.isClosed(t))
                    throw new Lt.ErrnoError(8);
                if (e < 0 || r <= 0)
                    throw new Lt.ErrnoError(28);
                if (0 == (2097155 & t.flags))
                    throw new Lt.ErrnoError(8);
                if (!Lt.isFile(t.node.mode) && !Lt.isDir(t.node.mode))
                    throw new Lt.ErrnoError(43);
                if (!t.stream_ops.allocate)
                    throw new Lt.ErrnoError(138);
                t.stream_ops.allocate(t, e, r)
            },
            mmap: function(t, e, r, n, i, o) {
                if (0 != (2 & i) && 0 == (2 & o) && 2 != (2097155 & t.flags))
                    throw new Lt.ErrnoError(2);
                if (1 == (2097155 & t.flags))
                    throw new Lt.ErrnoError(2);
                if (!t.stream_ops.mmap)
                    throw new Lt.ErrnoError(43);
                return t.stream_ops.mmap(t, e, r, n, i, o)
            },
            msync: function(t, e, r, n, i) {
                return t && t.stream_ops.msync ? t.stream_ops.msync(t, e, r, n, i) : 0
            },
            munmap: function(t) {
                return 0
            },
            ioctl: function(t, e, r) {
                if (!t.stream_ops.ioctl)
                    throw new Lt.ErrnoError(59);
                return t.stream_ops.ioctl(t, e, r)
            },
            readFile: function(t, e) {
                if ((e = e || {}).flags = e.flags || 0,
                e.encoding = e.encoding || "binary",
                "utf8" !== e.encoding && "binary" !== e.encoding)
                    throw new Error('Invalid encoding type "' + e.encoding + '"');
                var r, n = Lt.open(t, e.flags), i = Lt.stat(t).size, o = new Uint8Array(i);
                return Lt.read(n, o, 0, i, 0),
                "utf8" === e.encoding ? r = I(o, 0) : "binary" === e.encoding && (r = o),
                Lt.close(n),
                r
            },
            writeFile: function(t, e, r) {
                (r = r || {}).flags = r.flags || 577;
                var n = Lt.open(t, r.flags, r.mode);
                if ("string" == typeof e) {
                    var i = new Uint8Array(j(e) + 1)
                      , o = O(e, i, 0, i.length);
                    Lt.write(n, i, 0, o, void 0, r.canOwn)
                } else {
                    if (!ArrayBuffer.isView(e))
                        throw new Error("Unsupported data type");
                    Lt.write(n, e, 0, e.byteLength, void 0, r.canOwn)
                }
                Lt.close(n)
            },
            cwd: function() {
                return Lt.currentPath
            },
            chdir: function(t) {
                var e = Lt.lookupPath(t, {
                    follow: !0
                });
                if (null === e.node)
                    throw new Lt.ErrnoError(44);
                if (!Lt.isDir(e.node.mode))
                    throw new Lt.ErrnoError(54);
                var r = Lt.nodePermissions(e.node, "x");
                if (r)
                    throw new Lt.ErrnoError(r);
                Lt.currentPath = e.path
            },
            createDefaultDirectories: function() {
                Lt.mkdir("/tmp"),
                Lt.mkdir("/home"),
                Lt.mkdir("/home/web_user")
            },
            createDefaultDevices: function() {
                Lt.mkdir("/dev"),
                Lt.registerDevice(Lt.makedev(1, 3), {
                    read: function() {
                        return 0
                    },
                    write: function(t, e, r, n, i) {
                        return n
                    }
                }),
                Lt.mkdev("/dev/null", Lt.makedev(1, 3)),
                It.register(Lt.makedev(5, 0), It.default_tty_ops),
                It.register(Lt.makedev(6, 0), It.default_tty1_ops),
                Lt.mkdev("/dev/tty", Lt.makedev(5, 0)),
                Lt.mkdev("/dev/tty1", Lt.makedev(6, 0));
                var t = Ct();
                Lt.createDevice("/dev", "random", t),
                Lt.createDevice("/dev", "urandom", t),
                Lt.mkdir("/dev/shm"),
                Lt.mkdir("/dev/shm/tmp")
            },
            createSpecialDirectories: function() {
                Lt.mkdir("/proc");
                var t = Lt.mkdir("/proc/self");
                Lt.mkdir("/proc/self/fd"),
                Lt.mount({
                    mount: function() {
                        var e = Lt.createNode(t, "fd", 16895, 73);
                        return e.node_ops = {
                            lookup: function(t, e) {
                                var r = +e
                                  , n = Lt.getStream(r);
                                if (!n)
                                    throw new Lt.ErrnoError(8);
                                var i = {
                                    parent: null,
                                    mount: {
                                        mountpoint: "fake"
                                    },
                                    node_ops: {
                                        readlink: function() {
                                            return n.path
                                        }
                                    }
                                };
                                return i.parent = i,
                                i
                            }
                        },
                        e
                    }
                }, {}, "/proc/self/fd")
            },
            createStandardStreams: function() {
                f.stdin ? Lt.createDevice("/dev", "stdin", f.stdin) : Lt.symlink("/dev/tty", "/dev/stdin"),
                f.stdout ? Lt.createDevice("/dev", "stdout", null, f.stdout) : Lt.symlink("/dev/tty", "/dev/stdout"),
                f.stderr ? Lt.createDevice("/dev", "stderr", null, f.stderr) : Lt.symlink("/dev/tty1", "/dev/stderr");
                Lt.open("/dev/stdin", 0),
                Lt.open("/dev/stdout", 1),
                Lt.open("/dev/stderr", 1)
            },
            ensureErrnoError: function() {
                Lt.ErrnoError || (Lt.ErrnoError = function(t, e) {
                    this.node = e,
                    this.setErrno = function(t) {
                        this.errno = t
                    }
                    ,
                    this.setErrno(t),
                    this.message = "FS error"
                }
                ,
                Lt.ErrnoError.prototype = new Error,
                Lt.ErrnoError.prototype.constructor = Lt.ErrnoError,
                [44].forEach((function(t) {
                    Lt.genericErrors[t] = new Lt.ErrnoError(t),
                    Lt.genericErrors[t].stack = "<generic error, no stack>"
                }
                )))
            },
            staticInit: function() {
                Lt.ensureErrnoError(),
                Lt.nameTable = new Array(4096),
                Lt.mount(Ot, {}, "/"),
                Lt.createDefaultDirectories(),
                Lt.createDefaultDevices(),
                Lt.createSpecialDirectories(),
                Lt.filesystems = {
                    MEMFS: Ot
                }
            },
            init: function(t, e, r) {
                Lt.init.initialized = !0,
                Lt.ensureErrnoError(),
                f.stdin = t || f.stdin,
                f.stdout = e || f.stdout,
                f.stderr = r || f.stderr,
                Lt.createStandardStreams()
            },
            quit: function() {
                Lt.init.initialized = !1;
                var t = f._fflush;
                t && t(0);
                for (var e = 0; e < Lt.streams.length; e++) {
                    var r = Lt.streams[e];
                    r && Lt.close(r)
                }
            },
            getMode: function(t, e) {
                var r = 0;
                return t && (r |= 365),
                e && (r |= 146),
                r
            },
            findObject: function(t, e) {
                var r = Lt.analyzePath(t, e);
                return r.exists ? r.object : null
            },
            analyzePath: function(t, e) {
                try {
                    t = (n = Lt.lookupPath(t, {
                        follow: !e
                    })).path
                } catch (t) {}
                var r = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null
                };
                try {
                    var n = Lt.lookupPath(t, {
                        parent: !0
                    });
                    r.parentExists = !0,
                    r.parentPath = n.path,
                    r.parentObject = n.node,
                    r.name = Tt.basename(t),
                    n = Lt.lookupPath(t, {
                        follow: !e
                    }),
                    r.exists = !0,
                    r.path = n.path,
                    r.object = n.node,
                    r.name = n.node.name,
                    r.isRoot = "/" === n.path
                } catch (t) {
                    r.error = t.errno
                }
                return r
            },
            createPath: function(t, e, r, n) {
                t = "string" == typeof t ? t : Lt.getPath(t);
                for (var i = e.split("/").reverse(); i.length; ) {
                    var o = i.pop();
                    if (o) {
                        var a = Tt.join2(t, o);
                        try {
                            Lt.mkdir(a)
                        } catch (t) {}
                        t = a
                    }
                }
                return a
            },
            createFile: function(t, e, r, n, i) {
                var o = Tt.join2("string" == typeof t ? t : Lt.getPath(t), e)
                  , a = Lt.getMode(n, i);
                return Lt.create(o, a)
            },
            createDataFile: function(t, e, r, n, i, o) {
                var a = e ? Tt.join2("string" == typeof t ? t : Lt.getPath(t), e) : t
                  , s = Lt.getMode(n, i)
                  , f = Lt.create(a, s);
                if (r) {
                    if ("string" == typeof r) {
                        for (var h = new Array(r.length), u = 0, c = r.length; u < c; ++u)
                            h[u] = r.charCodeAt(u);
                        r = h
                    }
                    Lt.chmod(f, 146 | s);
                    var d = Lt.open(f, 577);
                    Lt.write(d, r, 0, r.length, 0, o),
                    Lt.close(d),
                    Lt.chmod(f, s)
                }
                return f
            },
            createDevice: function(t, e, r, n) {
                var i = Tt.join2("string" == typeof t ? t : Lt.getPath(t), e)
                  , o = Lt.getMode(!!r, !!n);
                Lt.createDevice.major || (Lt.createDevice.major = 64);
                var a = Lt.makedev(Lt.createDevice.major++, 0);
                return Lt.registerDevice(a, {
                    open: function(t) {
                        t.seekable = !1
                    },
                    close: function(t) {
                        n && n.buffer && n.buffer.length && n(10)
                    },
                    read: function(t, e, n, i, o) {
                        for (var a = 0, s = 0; s < i; s++) {
                            var f;
                            try {
                                f = r()
                            } catch (t) {
                                throw new Lt.ErrnoError(29)
                            }
                            if (void 0 === f && 0 === a)
                                throw new Lt.ErrnoError(6);
                            if (null == f)
                                break;
                            a++,
                            e[n + s] = f
                        }
                        return a && (t.node.timestamp = Date.now()),
                        a
                    },
                    write: function(t, e, r, i, o) {
                        for (var a = 0; a < i; a++)
                            try {
                                n(e[r + a])
                            } catch (t) {
                                throw new Lt.ErrnoError(29)
                            }
                        return i && (t.node.timestamp = Date.now()),
                        a
                    }
                }),
                Lt.mkdev(i, o, a)
            },
            forceLoadFile: function(t) {
                if (t.isDevice || t.isFolder || t.link || t.contents)
                    return !0;
                if ("undefined" != typeof XMLHttpRequest)
                    throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                if (!b)
                    throw new Error("Cannot load without read() or XMLHttpRequest.");
                try {
                    t.contents = bn(b(t.url), !0),
                    t.usedBytes = t.contents.length
                } catch (t) {
                    throw new Lt.ErrnoError(29)
                }
            },
            createLazyFile: function(t, e, r, n, i) {
                function o() {
                    this.lengthKnown = !1,
                    this.chunks = []
                }
                if (o.prototype.get = function(t) {
                    if (!(t > this.length - 1 || t < 0)) {
                        var e = t % this.chunkSize
                          , r = t / this.chunkSize | 0;
                        return this.getter(r)[e]
                    }
                }
                ,
                o.prototype.setDataGetter = function(t) {
                    this.getter = t
                }
                ,
                o.prototype.cacheLength = function() {
                    var t = new XMLHttpRequest;
                    if (t.open("HEAD", r, !1),
                    t.send(null),
                    !(t.status >= 200 && t.status < 300 || 304 === t.status))
                        throw new Error("Couldn't load " + r + ". Status: " + t.status);
                    var e, n = Number(t.getResponseHeader("Content-length")), i = (e = t.getResponseHeader("Accept-Ranges")) && "bytes" === e, o = (e = t.getResponseHeader("Content-Encoding")) && "gzip" === e, a = 1048576;
                    i || (a = n);
                    var s = this;
                    s.setDataGetter((function(t) {
                        var e = t * a
                          , i = (t + 1) * a - 1;
                        if (i = Math.min(i, n - 1),
                        void 0 === s.chunks[t] && (s.chunks[t] = function(t, e) {
                            if (t > e)
                                throw new Error("invalid range (" + t + ", " + e + ") or no bytes requested!");
                            if (e > n - 1)
                                throw new Error("only " + n + " bytes available! programmer error!");
                            var i = new XMLHttpRequest;
                            if (i.open("GET", r, !1),
                            n !== a && i.setRequestHeader("Range", "bytes=" + t + "-" + e),
                            "undefined" != typeof Uint8Array && (i.responseType = "arraybuffer"),
                            i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"),
                            i.send(null),
                            !(i.status >= 200 && i.status < 300 || 304 === i.status))
                                throw new Error("Couldn't load " + r + ". Status: " + i.status);
                            return void 0 !== i.response ? new Uint8Array(i.response || []) : bn(i.responseText || "", !0)
                        }(e, i)),
                        void 0 === s.chunks[t])
                            throw new Error("doXHR failed!");
                        return s.chunks[t]
                    }
                    )),
                    !o && n || (a = n = 1,
                    n = this.getter(0).length,
                    a = n,
                    M("LazyFiles on gzip forces download of the whole file when length is accessed")),
                    this._length = n,
                    this._chunkSize = a,
                    this.lengthKnown = !0
                }
                ,
                "undefined" != typeof XMLHttpRequest) {
                    if (!l)
                        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var a = new o;
                    Object.defineProperties(a, {
                        length: {
                            get: function() {
                                return this.lengthKnown || this.cacheLength(),
                                this._length
                            }
                        },
                        chunkSize: {
                            get: function() {
                                return this.lengthKnown || this.cacheLength(),
                                this._chunkSize
                            }
                        }
                    });
                    var s = {
                        isDevice: !1,
                        contents: a
                    }
                } else
                    s = {
                        isDevice: !1,
                        url: r
                    };
                var f = Lt.createFile(t, e, s, n, i);
                s.contents ? f.contents = s.contents : s.url && (f.contents = null,
                f.url = s.url),
                Object.defineProperties(f, {
                    usedBytes: {
                        get: function() {
                            return this.contents.length
                        }
                    }
                });
                var h = {};
                return Object.keys(f.stream_ops).forEach((function(t) {
                    var e = f.stream_ops[t];
                    h[t] = function() {
                        return Lt.forceLoadFile(f),
                        e.apply(null, arguments)
                    }
                }
                )),
                h.read = function(t, e, r, n, i) {
                    Lt.forceLoadFile(f);
                    var o = t.node.contents;
                    if (i >= o.length)
                        return 0;
                    var a = Math.min(o.length - i, n);
                    if (o.slice)
                        for (var s = 0; s < a; s++)
                            e[r + s] = o[i + s];
                    else
                        for (s = 0; s < a; s++)
                            e[r + s] = o.get(i + s);
                    return a
                }
                ,
                f.stream_ops = h,
                f
            },
            createPreloadedFile: function(t, e, r, n, i, o, a, s, h, u) {
                Browser.init();
                var c = e ? Dt.resolve(Tt.join2(t, e)) : t;
                function d(r) {
                    function d(r) {
                        u && u(),
                        s || Lt.createDataFile(t, e, r, n, i, h),
                        o && o(),
                        bt()
                    }
                    var l = !1;
                    f.preloadPlugins.forEach((function(t) {
                        l || t.canHandle(c) && (t.handle(r, c, d, (function() {
                            a && a(),
                            bt()
                        }
                        )),
                        l = !0)
                    }
                    )),
                    l || d(r)
                }
                mt(),
                "string" == typeof r ? Browser.asyncLoad(r, (function(t) {
                    d(t)
                }
                ), a) : d(r)
            },
            indexedDB: function() {
                return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
            },
            DB_NAME: function() {
                return "EM_FS_" + window.location.pathname
            },
            DB_VERSION: 20,
            DB_STORE_NAME: "FILE_DATA",
            saveFilesToDB: function(t, e, r) {
                e = e || function() {}
                ,
                r = r || function() {}
                ;
                var n = Lt.indexedDB();
                try {
                    var i = n.open(Lt.DB_NAME(), Lt.DB_VERSION)
                } catch (t) {
                    return r(t)
                }
                i.onupgradeneeded = function() {
                    M("creating db"),
                    i.result.createObjectStore(Lt.DB_STORE_NAME)
                }
                ,
                i.onsuccess = function() {
                    var n = i.result.transaction([Lt.DB_STORE_NAME], "readwrite")
                      , o = n.objectStore(Lt.DB_STORE_NAME)
                      , a = 0
                      , s = 0
                      , f = t.length;
                    function h() {
                        0 == s ? e() : r()
                    }
                    t.forEach((function(t) {
                        var e = o.put(Lt.analyzePath(t).object.contents, t);
                        e.onsuccess = function() {
                            ++a + s == f && h()
                        }
                        ,
                        e.onerror = function() {
                            s++,
                            a + s == f && h()
                        }
                    }
                    )),
                    n.onerror = r
                }
                ,
                i.onerror = r
            },
            loadFilesFromDB: function(t, e, r) {
                e = e || function() {}
                ,
                r = r || function() {}
                ;
                var n = Lt.indexedDB();
                try {
                    var i = n.open(Lt.DB_NAME(), Lt.DB_VERSION)
                } catch (t) {
                    return r(t)
                }
                i.onupgradeneeded = r,
                i.onsuccess = function() {
                    var n = i.result;
                    try {
                        var o = n.transaction([Lt.DB_STORE_NAME], "readonly")
                    } catch (t) {
                        return void r(t)
                    }
                    var a = o.objectStore(Lt.DB_STORE_NAME)
                      , s = 0
                      , f = 0
                      , h = t.length;
                    function u() {
                        0 == f ? e() : r()
                    }
                    t.forEach((function(t) {
                        var e = a.get(t);
                        e.onsuccess = function() {
                            Lt.analyzePath(t).exists && Lt.unlink(t),
                            Lt.createDataFile(Tt.dirname(t), Tt.basename(t), e.result, !0, !0, !0),
                            ++s + f == h && u()
                        }
                        ,
                        e.onerror = function() {
                            f++,
                            s + f == h && u()
                        }
                    }
                    )),
                    o.onerror = r
                }
                ,
                i.onerror = r
            }
        }
          , jt = {
            mappings: {},
            DEFAULT_POLLMASK: 5,
            umask: 511,
            calculateAt: function(t, e, r) {
                if ("/" === e[0])
                    return e;
                var n;
                if (-100 === t)
                    n = Lt.cwd();
                else {
                    var i = Lt.getStream(t);
                    if (!i)
                        throw new Lt.ErrnoError(8);
                    n = i.path
                }
                if (0 == e.length) {
                    if (!r)
                        throw new Lt.ErrnoError(44);
                    return n
                }
                return Tt.join2(n, e)
            },
            doStat: function(t, e, r) {
                try {
                    var n = t(e)
                } catch (t) {
                    if (t && t.node && Tt.normalize(e) !== Tt.normalize(Lt.getPath(t.node)))
                        return -54;
                    throw t
                }
                return Y[r >> 2] = n.dev,
                Y[r + 4 >> 2] = 0,
                Y[r + 8 >> 2] = n.ino,
                Y[r + 12 >> 2] = n.mode,
                Y[r + 16 >> 2] = n.nlink,
                Y[r + 20 >> 2] = n.uid,
                Y[r + 24 >> 2] = n.gid,
                Y[r + 28 >> 2] = n.rdev,
                Y[r + 32 >> 2] = 0,
                At = [n.size >>> 0, (_t = n.size,
                +Math.abs(_t) >= 1 ? _t > 0 ? (0 | Math.min(+Math.floor(_t / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((_t - +(~~_t >>> 0)) / 4294967296) >>> 0 : 0)],
                Y[r + 40 >> 2] = At[0],
                Y[r + 44 >> 2] = At[1],
                Y[r + 48 >> 2] = 4096,
                Y[r + 52 >> 2] = n.blocks,
                Y[r + 56 >> 2] = n.atime.getTime() / 1e3 | 0,
                Y[r + 60 >> 2] = 0,
                Y[r + 64 >> 2] = n.mtime.getTime() / 1e3 | 0,
                Y[r + 68 >> 2] = 0,
                Y[r + 72 >> 2] = n.ctime.getTime() / 1e3 | 0,
                Y[r + 76 >> 2] = 0,
                At = [n.ino >>> 0, (_t = n.ino,
                +Math.abs(_t) >= 1 ? _t > 0 ? (0 | Math.min(+Math.floor(_t / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((_t - +(~~_t >>> 0)) / 4294967296) >>> 0 : 0)],
                Y[r + 80 >> 2] = At[0],
                Y[r + 84 >> 2] = At[1],
                0
            },
            doMsync: function(t, e, r, n, i) {
                var o = z.slice(t, t + r);
                Lt.msync(e, o, i, r, n)
            },
            doMkdir: function(t, e) {
                return "/" === (t = Tt.normalize(t))[t.length - 1] && (t = t.substr(0, t.length - 1)),
                Lt.mkdir(t, e, 0),
                0
            },
            doMknod: function(t, e, r) {
                switch (61440 & e) {
                case 32768:
                case 8192:
                case 24576:
                case 4096:
                case 49152:
                    break;
                default:
                    return -28
                }
                return Lt.mknod(t, e, r),
                0
            },
            doReadlink: function(t, e, r) {
                if (r <= 0)
                    return -28;
                var n = Lt.readlink(t)
                  , i = Math.min(r, j(n))
                  , o = N[e + i];
                return L(n, e, r + 1),
                N[e + i] = o,
                i
            },
            doAccess: function(t, e) {
                if (-8 & e)
                    return -28;
                var r;
                if (!(r = Lt.lookupPath(t, {
                    follow: !0
                }).node))
                    return -44;
                var n = "";
                return 4 & e && (n += "r"),
                2 & e && (n += "w"),
                1 & e && (n += "x"),
                n && Lt.nodePermissions(r, n) ? -2 : 0
            },
            doDup: function(t, e, r) {
                var n = Lt.getStream(r);
                return n && Lt.close(n),
                Lt.open(t, e, 0, r, r).fd
            },
            doReadv: function(t, e, r, n) {
                for (var i = 0, o = 0; o < r; o++) {
                    var a = Y[e + 8 * o >> 2]
                      , s = Y[e + (8 * o + 4) >> 2]
                      , f = Lt.read(t, N, a, s, n);
                    if (f < 0)
                        return -1;
                    if (i += f,
                    f < s)
                        break
                }
                return i
            },
            doWritev: function(t, e, r, n) {
                for (var i = 0, o = 0; o < r; o++) {
                    var a = Y[e + 8 * o >> 2]
                      , s = Y[e + (8 * o + 4) >> 2]
                      , f = Lt.write(t, N, a, s, n);
                    if (f < 0)
                        return -1;
                    i += f
                }
                return i
            },
            varargs: void 0,
            get: function() {
                return jt.varargs += 4,
                Y[jt.varargs - 4 >> 2]
            },
            getStr: function(t) {
                return P(t)
            },
            getStreamFromFD: function(t) {
                var e = Lt.getStream(t);
                if (!e)
                    throw new Lt.ErrnoError(8);
                return e
            },
            get64: function(t, e) {
                return t
            }
        };
        function Ut(t, e, r) {
            jt.varargs = r;
            try {
                var n = jt.getStreamFromFD(t);
                switch (e) {
                case 0:
                    return (i = jt.get()) < 0 ? -28 : Lt.open(n.path, n.flags, 0, i).fd;
                case 1:
                case 2:
                    return 0;
                case 3:
                    return n.flags;
                case 4:
                    var i = jt.get();
                    return n.flags |= i,
                    0;
                case 12:
                    i = jt.get();
                    return F[i + 0 >> 1] = 2,
                    0;
                case 13:
                case 14:
                    return 0;
                case 16:
                case 8:
                    return -28;
                case 9:
                    return Rt(28),
                    -1;
                default:
                    return -28
                }
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                -t.errno
            }
        }
        function Nt(t, e, r) {
            jt.varargs = r;
            try {
                var n = jt.getStr(t)
                  , i = r ? jt.get() : 0;
                return Lt.open(n, e, i).fd
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                -t.errno
            }
        }
        function zt(t, e, r, n, i) {}
        function Ft(t) {
            switch (t) {
            case 1:
                return 0;
            case 2:
                return 1;
            case 4:
                return 2;
            case 8:
                return 3;
            default:
                throw new TypeError("Unknown type size: " + t)
            }
        }
        function qt() {
            for (var t = new Array(256), e = 0; e < 256; ++e)
                t[e] = String.fromCharCode(e);
            Yt = t
        }
        var Yt = void 0;
        function Ht(t) {
            for (var e = "", r = t; z[r]; )
                e += Yt[z[r++]];
            return e
        }
        var Wt = {}
          , Kt = {}
          , Gt = {}
          , Zt = 48
          , Vt = 57;
        function Xt(t) {
            if (void 0 === t)
                return "_unknown";
            var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return e >= Zt && e <= Vt ? "_" + t : t
        }
        function $t(t, e) {
            return t = Xt(t),
            new Function("body","return function " + t + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)
        }
        function Qt(t, e) {
            var r = $t(e, (function(t) {
                this.name = e,
                this.message = t;
                var r = new Error(t).stack;
                void 0 !== r && (this.stack = this.toString() + "\n" + r.replace(/^Error(:[^\n]*)?\n/, ""))
            }
            ));
            return r.prototype = Object.create(t.prototype),
            r.prototype.constructor = r,
            r.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }
            ,
            r
        }
        var Jt = void 0;
        function te(t) {
            throw new Jt(t)
        }
        var ee = void 0;
        function re(t) {
            throw new ee(t)
        }
        function ne(t, e, r) {
            function n(e) {
                var n = r(e);
                n.length !== t.length && re("Mismatched type converter count");
                for (var i = 0; i < t.length; ++i)
                    ie(t[i], n[i])
            }
            t.forEach((function(t) {
                Gt[t] = e
            }
            ));
            var i = new Array(e.length)
              , o = []
              , a = 0;
            e.forEach((function(t, e) {
                Kt.hasOwnProperty(t) ? i[e] = Kt[t] : (o.push(t),
                Wt.hasOwnProperty(t) || (Wt[t] = []),
                Wt[t].push((function() {
                    i[e] = Kt[t],
                    ++a === o.length && n(i)
                }
                )))
            }
            )),
            0 === o.length && n(i)
        }
        function ie(t, e, r) {
            if (r = r || {},
            !("argPackAdvance"in e))
                throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var n = e.name;
            if (t || te('type "' + n + '" must have a positive integer typeid pointer'),
            Kt.hasOwnProperty(t)) {
                if (r.ignoreDuplicateRegistrations)
                    return;
                te("Cannot register type '" + n + "' twice")
            }
            if (Kt[t] = e,
            delete Gt[t],
            Wt.hasOwnProperty(t)) {
                var i = Wt[t];
                delete Wt[t],
                i.forEach((function(t) {
                    t()
                }
                ))
            }
        }
        function oe(t, e, r, n, i) {
            var o = Ft(r);
            ie(t, {
                name: e = Ht(e),
                fromWireType: function(t) {
                    return !!t
                },
                toWireType: function(t, e) {
                    return e ? n : i
                },
                argPackAdvance: 8,
                readValueFromPointer: function(t) {
                    var n;
                    if (1 === r)
                        n = N;
                    else if (2 === r)
                        n = F;
                    else {
                        if (4 !== r)
                            throw new TypeError("Unknown boolean type size: " + e);
                        n = Y
                    }
                    return this.fromWireType(n[t >> o])
                },
                destructorFunction: null
            })
        }
        function ae(t) {
            if (!(this instanceof Ae))
                return !1;
            if (!(t instanceof Ae))
                return !1;
            for (var e = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = t.$$.ptrType.registeredClass, i = t.$$.ptr; e.baseClass; )
                r = e.upcast(r),
                e = e.baseClass;
            for (; n.baseClass; )
                i = n.upcast(i),
                n = n.baseClass;
            return e === n && r === i
        }
        function se(t) {
            return {
                count: t.count,
                deleteScheduled: t.deleteScheduled,
                preservePointerOnDelete: t.preservePointerOnDelete,
                ptr: t.ptr,
                ptrType: t.ptrType,
                smartPtr: t.smartPtr,
                smartPtrType: t.smartPtrType
            }
        }
        function fe(t) {
            te(t.$$.ptrType.registeredClass.name + " instance already deleted")
        }
        var he = !1;
        function ue(t) {}
        function ce(t) {
            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
        }
        function de(t) {
            t.count.value -= 1,
            0 === t.count.value && ce(t)
        }
        function le(t) {
            return "undefined" == typeof FinalizationGroup ? (le = function(t) {
                return t
            }
            ,
            t) : (he = new FinalizationGroup((function(t) {
                for (var e = t.next(); !e.done; e = t.next()) {
                    var r = e.value;
                    r.ptr ? de(r) : console.warn("object already deleted: " + r.ptr)
                }
            }
            )),
            ue = function(t) {
                he.unregister(t.$$)
            }
            ,
            (le = function(t) {
                return he.register(t, t.$$, t.$$),
                t
            }
            )(t))
        }
        function pe() {
            if (this.$$.ptr || fe(this),
            this.$$.preservePointerOnDelete)
                return this.$$.count.value += 1,
                this;
            var t = le(Object.create(Object.getPrototypeOf(this), {
                $$: {
                    value: se(this.$$)
                }
            }));
            return t.$$.count.value += 1,
            t.$$.deleteScheduled = !1,
            t
        }
        function me() {
            this.$$.ptr || fe(this),
            this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && te("Object already scheduled for deletion"),
            ue(this),
            de(this.$$),
            this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0,
            this.$$.ptr = void 0)
        }
        function be() {
            return !this.$$.ptr
        }
        var ge = void 0
          , ve = [];
        function ye() {
            for (; ve.length; ) {
                var t = ve.pop();
                t.$$.deleteScheduled = !1,
                t.delete()
            }
        }
        function we() {
            return this.$$.ptr || fe(this),
            this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && te("Object already scheduled for deletion"),
            ve.push(this),
            1 === ve.length && ge && ge(ye),
            this.$$.deleteScheduled = !0,
            this
        }
        function _e() {
            Ae.prototype.isAliasOf = ae,
            Ae.prototype.clone = pe,
            Ae.prototype.delete = me,
            Ae.prototype.isDeleted = be,
            Ae.prototype.deleteLater = we
        }
        function Ae() {}
        var Me = {};
        function Ee(t, e, r) {
            if (void 0 === t[e].overloadTable) {
                var n = t[e];
                t[e] = function() {
                    return t[e].overloadTable.hasOwnProperty(arguments.length) || te("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[e].overloadTable + ")!"),
                    t[e].overloadTable[arguments.length].apply(this, arguments)
                }
                ,
                t[e].overloadTable = [],
                t[e].overloadTable[n.argCount] = n
            }
        }
        function Se(t, e, r) {
            f.hasOwnProperty(t) ? ((void 0 === r || void 0 !== f[t].overloadTable && void 0 !== f[t].overloadTable[r]) && te("Cannot register public name '" + t + "' twice"),
            Ee(f, t, t),
            f.hasOwnProperty(r) && te("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"),
            f[t].overloadTable[r] = e) : (f[t] = e,
            void 0 !== r && (f[t].numArguments = r))
        }
        function ke(t, e, r, n, i, o, a, s) {
            this.name = t,
            this.constructor = e,
            this.instancePrototype = r,
            this.rawDestructor = n,
            this.baseClass = i,
            this.getActualType = o,
            this.upcast = a,
            this.downcast = s,
            this.pureVirtualFunctions = []
        }
        function xe(t, e, r) {
            for (; e !== r; )
                e.upcast || te("Expected null or instance of " + r.name + ", got an instance of " + e.name),
                t = e.upcast(t),
                e = e.baseClass;
            return t
        }
        function Be(t, e) {
            if (null === e)
                return this.isReference && te("null is not a valid " + this.name),
                0;
            e.$$ || te('Cannot pass "' + vr(e) + '" as a ' + this.name),
            e.$$.ptr || te("Cannot pass deleted object as a pointer of type " + this.name);
            var r = e.$$.ptrType.registeredClass;
            return xe(e.$$.ptr, r, this.registeredClass)
        }
        function Re(t, e) {
            var r;
            if (null === e)
                return this.isReference && te("null is not a valid " + this.name),
                this.isSmartPointer ? (r = this.rawConstructor(),
                null !== t && t.push(this.rawDestructor, r),
                r) : 0;
            e.$$ || te('Cannot pass "' + vr(e) + '" as a ' + this.name),
            e.$$.ptr || te("Cannot pass deleted object as a pointer of type " + this.name),
            !this.isConst && e.$$.ptrType.isConst && te("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
            var n = e.$$.ptrType.registeredClass;
            if (r = xe(e.$$.ptr, n, this.registeredClass),
            this.isSmartPointer)
                switch (void 0 === e.$$.smartPtr && te("Passing raw pointer to smart pointer is illegal"),
                this.sharingPolicy) {
                case 0:
                    e.$$.smartPtrType === this ? r = e.$$.smartPtr : te("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                    break;
                case 1:
                    r = e.$$.smartPtr;
                    break;
                case 2:
                    if (e.$$.smartPtrType === this)
                        r = e.$$.smartPtr;
                    else {
                        var i = e.clone();
                        r = this.rawShare(r, br((function() {
                            i.delete()
                        }
                        ))),
                        null !== t && t.push(this.rawDestructor, r)
                    }
                    break;
                default:
                    te("Unsupporting sharing policy")
                }
            return r
        }
        function Te(t, e) {
            if (null === e)
                return this.isReference && te("null is not a valid " + this.name),
                0;
            e.$$ || te('Cannot pass "' + vr(e) + '" as a ' + this.name),
            e.$$.ptr || te("Cannot pass deleted object as a pointer of type " + this.name),
            e.$$.ptrType.isConst && te("Cannot convert argument of type " + e.$$.ptrType.name + " to parameter type " + this.name);
            var r = e.$$.ptrType.registeredClass;
            return xe(e.$$.ptr, r, this.registeredClass)
        }
        function Ce(t) {
            return this.fromWireType(H[t >> 2])
        }
        function De(t) {
            return this.rawGetPointee && (t = this.rawGetPointee(t)),
            t
        }
        function Ie(t) {
            this.rawDestructor && this.rawDestructor(t)
        }
        function Pe(t) {
            null !== t && t.delete()
        }
        function Oe(t, e, r) {
            if (e === r)
                return t;
            if (void 0 === r.baseClass)
                return null;
            var n = Oe(t, e, r.baseClass);
            return null === n ? null : r.downcast(n)
        }
        function Le() {
            return Object.keys(ze).length
        }
        function je() {
            var t = [];
            for (var e in ze)
                ze.hasOwnProperty(e) && t.push(ze[e]);
            return t
        }
        function Ue(t) {
            ge = t,
            ve.length && ge && ge(ye)
        }
        function Ne() {
            f.getInheritedInstanceCount = Le,
            f.getLiveInheritedInstances = je,
            f.flushPendingDeletes = ye,
            f.setDelayFunction = Ue
        }
        var ze = {};
        function Fe(t, e) {
            for (void 0 === e && te("ptr should not be undefined"); t.baseClass; )
                e = t.upcast(e),
                t = t.baseClass;
            return e
        }
        function qe(t, e) {
            return e = Fe(t, e),
            ze[e]
        }
        function Ye(t, e) {
            return e.ptrType && e.ptr || re("makeClassHandle requires ptr and ptrType"),
            !!e.smartPtrType !== !!e.smartPtr && re("Both smartPtrType and smartPtr must be specified"),
            e.count = {
                value: 1
            },
            le(Object.create(t, {
                $$: {
                    value: e
                }
            }))
        }
        function He(t) {
            var e = this.getPointee(t);
            if (!e)
                return this.destructor(t),
                null;
            var r = qe(this.registeredClass, e);
            if (void 0 !== r) {
                if (0 === r.$$.count.value)
                    return r.$$.ptr = e,
                    r.$$.smartPtr = t,
                    r.clone();
                var n = r.clone();
                return this.destructor(t),
                n
            }
            function i() {
                return this.isSmartPointer ? Ye(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: e,
                    smartPtrType: this,
                    smartPtr: t
                }) : Ye(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: t
                })
            }
            var o, a = this.registeredClass.getActualType(e), s = Me[a];
            if (!s)
                return i.call(this);
            o = this.isConst ? s.constPointerType : s.pointerType;
            var f = Oe(e, this.registeredClass, o.registeredClass);
            return null === f ? i.call(this) : this.isSmartPointer ? Ye(o.registeredClass.instancePrototype, {
                ptrType: o,
                ptr: f,
                smartPtrType: this,
                smartPtr: t
            }) : Ye(o.registeredClass.instancePrototype, {
                ptrType: o,
                ptr: f
            })
        }
        function We() {
            Ke.prototype.getPointee = De,
            Ke.prototype.destructor = Ie,
            Ke.prototype.argPackAdvance = 8,
            Ke.prototype.readValueFromPointer = Ce,
            Ke.prototype.deleteObject = Pe,
            Ke.prototype.fromWireType = He
        }
        function Ke(t, e, r, n, i, o, a, s, f, h, u) {
            this.name = t,
            this.registeredClass = e,
            this.isReference = r,
            this.isConst = n,
            this.isSmartPointer = i,
            this.pointeeType = o,
            this.sharingPolicy = a,
            this.rawGetPointee = s,
            this.rawConstructor = f,
            this.rawShare = h,
            this.rawDestructor = u,
            i || void 0 !== e.baseClass ? this.toWireType = Re : n ? (this.toWireType = Be,
            this.destructorFunction = null) : (this.toWireType = Te,
            this.destructorFunction = null)
        }
        function Ge(t, e, r) {
            f.hasOwnProperty(t) || re("Replacing nonexistant public symbol"),
            void 0 !== f[t].overloadTable && void 0 !== r ? f[t].overloadTable[r] = e : (f[t] = e,
            f[t].argCount = r)
        }
        function Ze(t, e, r) {
            var n = f["dynCall_" + t];
            return r && r.length ? n.apply(null, [e].concat(r)) : n.call(null, e)
        }
        function Ve(t, e, r) {
            return t.includes("j") ? Ze(t, e, r) : rt.get(e).apply(null, r)
        }
        function Xe(t, e) {
            var r = [];
            return function() {
                r.length = arguments.length;
                for (var n = 0; n < arguments.length; n++)
                    r[n] = arguments[n];
                return Ve(t, e, r)
            }
        }
        function $e(t, e) {
            var r = (t = Ht(t)).includes("j") ? Xe(t, e) : rt.get(e);
            return "function" != typeof r && te("unknown function pointer with signature " + t + ": " + e),
            r
        }
        var Qe = void 0;
        function Je(t) {
            var e = Mn(t)
              , r = Ht(e);
            return yn(e),
            r
        }
        function tr(t, e) {
            var r = []
              , n = {};
            throw e.forEach((function t(e) {
                n[e] || Kt[e] || (Gt[e] ? Gt[e].forEach(t) : (r.push(e),
                n[e] = !0))
            }
            )),
            new Qe(t + ": " + r.map(Je).join([", "]))
        }
        function er(t, e, r, n, i, o, a, s, f, h, u, c, d) {
            u = Ht(u),
            o = $e(i, o),
            s && (s = $e(a, s)),
            h && (h = $e(f, h)),
            d = $e(c, d);
            var l = Xt(u);
            Se(l, (function() {
                tr("Cannot construct " + u + " due to unbound types", [n])
            }
            )),
            ne([t, e, r], n ? [n] : [], (function(e) {
                var r, i;
                e = e[0],
                i = n ? (r = e.registeredClass).instancePrototype : Ae.prototype;
                var a = $t(l, (function() {
                    if (Object.getPrototypeOf(this) !== f)
                        throw new Jt("Use 'new' to construct " + u);
                    if (void 0 === c.constructor_body)
                        throw new Jt(u + " has no accessible constructor");
                    var t = c.constructor_body[arguments.length];
                    if (void 0 === t)
                        throw new Jt("Tried to invoke ctor of " + u + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(c.constructor_body).toString() + ") parameters instead!");
                    return t.apply(this, arguments)
                }
                ))
                  , f = Object.create(i, {
                    constructor: {
                        value: a
                    }
                });
                a.prototype = f;
                var c = new ke(u,a,f,d,r,o,s,h)
                  , p = new Ke(u,c,!0,!1,!1)
                  , m = new Ke(u + "*",c,!1,!1,!1)
                  , b = new Ke(u + " const*",c,!1,!0,!1);
                return Me[t] = {
                    pointerType: m,
                    constPointerType: b
                },
                Ge(l, a),
                [p, m, b]
            }
            ))
        }
        function rr(t, e) {
            for (var r = [], n = 0; n < t; n++)
                r.push(Y[(e >> 2) + n]);
            return r
        }
        function nr(t) {
            for (; t.length; ) {
                var e = t.pop();
                t.pop()(e)
            }
        }
        function ir(t, e, r, n, i, o) {
            C(e > 0);
            var a = rr(e, r);
            i = $e(n, i);
            var s = [o]
              , f = [];
            ne([], [t], (function(t) {
                var r = "constructor " + (t = t[0]).name;
                if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []),
                void 0 !== t.registeredClass.constructor_body[e - 1])
                    throw new Jt("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                return t.registeredClass.constructor_body[e - 1] = function() {
                    tr("Cannot construct " + t.name + " due to unbound types", a)
                }
                ,
                ne([], a, (function(n) {
                    return t.registeredClass.constructor_body[e - 1] = function() {
                        arguments.length !== e - 1 && te(r + " called with " + arguments.length + " arguments, expected " + (e - 1)),
                        f.length = 0,
                        s.length = e;
                        for (var t = 1; t < e; ++t)
                            s[t] = n[t].toWireType(f, arguments[t - 1]);
                        var o = i.apply(null, s);
                        return nr(f),
                        n[0].fromWireType(o)
                    }
                    ,
                    []
                }
                )),
                []
            }
            ))
        }
        function or(t, e) {
            if (!(t instanceof Function))
                throw new TypeError("new_ called with constructor type " + typeof t + " which is not a function");
            var r = $t(t.name || "unknownFunctionName", (function() {}
            ));
            r.prototype = t.prototype;
            var n = new r
              , i = t.apply(n, e);
            return i instanceof Object ? i : n
        }
        function ar(t, e, r, n, i) {
            var o = e.length;
            o < 2 && te("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var a = null !== e[1] && null !== r, s = !1, f = 1; f < e.length; ++f)
                if (null !== e[f] && void 0 === e[f].destructorFunction) {
                    s = !0;
                    break
                }
            var h = "void" !== e[0].name
              , u = ""
              , c = "";
            for (f = 0; f < o - 2; ++f)
                u += (0 !== f ? ", " : "") + "arg" + f,
                c += (0 !== f ? ", " : "") + "arg" + f + "Wired";
            var d = "return function " + Xt(t) + "(" + u + ") {\nif (arguments.length !== " + (o - 2) + ") {\nthrowBindingError('function " + t + " called with ' + arguments.length + ' arguments, expected " + (o - 2) + " args!');\n}\n";
            s && (d += "var destructors = [];\n");
            var l = s ? "destructors" : "null"
              , p = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]
              , m = [te, n, i, nr, e[0], e[1]];
            a && (d += "var thisWired = classParam.toWireType(" + l + ", this);\n");
            for (f = 0; f < o - 2; ++f)
                d += "var arg" + f + "Wired = argType" + f + ".toWireType(" + l + ", arg" + f + "); // " + e[f + 2].name + "\n",
                p.push("argType" + f),
                m.push(e[f + 2]);
            if (a && (c = "thisWired" + (c.length > 0 ? ", " : "") + c),
            d += (h ? "var rv = " : "") + "invoker(fn" + (c.length > 0 ? ", " : "") + c + ");\n",
            s)
                d += "runDestructors(destructors);\n";
            else
                for (f = a ? 1 : 2; f < e.length; ++f) {
                    var b = 1 === f ? "thisWired" : "arg" + (f - 2) + "Wired";
                    null !== e[f].destructorFunction && (d += b + "_dtor(" + b + "); // " + e[f].name + "\n",
                    p.push(b + "_dtor"),
                    m.push(e[f].destructorFunction))
                }
            return h && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
            d += "}\n",
            p.push(d),
            or(Function, p).apply(null, m)
        }
        function sr(t, e, r, n, i, o, a, s) {
            var f = rr(r, n);
            e = Ht(e),
            o = $e(i, o),
            ne([], [t], (function(t) {
                var n = (t = t[0]).name + "." + e;
                function i() {
                    tr("Cannot call " + n + " due to unbound types", f)
                }
                s && t.registeredClass.pureVirtualFunctions.push(e);
                var h = t.registeredClass.instancePrototype
                  , u = h[e];
                return void 0 === u || void 0 === u.overloadTable && u.className !== t.name && u.argCount === r - 2 ? (i.argCount = r - 2,
                i.className = t.name,
                h[e] = i) : (Ee(h, e, n),
                h[e].overloadTable[r - 2] = i),
                ne([], f, (function(i) {
                    var s = ar(n, i, t, o, a);
                    return void 0 === h[e].overloadTable ? (s.argCount = r - 2,
                    h[e] = s) : h[e].overloadTable[r - 2] = s,
                    []
                }
                )),
                []
            }
            ))
        }
        function fr(t, e, r) {
            return t instanceof Object || te(r + ' with invalid "this": ' + t),
            t instanceof e.registeredClass.constructor || te(r + ' incompatible with "this" of type ' + t.constructor.name),
            t.$$.ptr || te("cannot call emscripten binding method " + r + " on deleted object"),
            xe(t.$$.ptr, t.$$.ptrType.registeredClass, e.registeredClass)
        }
        function hr(t, e, r, n, i, o, a, s, f, h) {
            e = Ht(e),
            i = $e(n, i),
            ne([], [t], (function(t) {
                var n = (t = t[0]).name + "." + e
                  , u = {
                    get: function() {
                        tr("Cannot access " + n + " due to unbound types", [r, a])
                    },
                    enumerable: !0,
                    configurable: !0
                };
                return u.set = f ? function() {
                    tr("Cannot access " + n + " due to unbound types", [r, a])
                }
                : function(t) {
                    te(n + " is a read-only property")
                }
                ,
                Object.defineProperty(t.registeredClass.instancePrototype, e, u),
                ne([], f ? [r, a] : [r], (function(r) {
                    var a = r[0]
                      , u = {
                        get: function() {
                            var e = fr(this, t, n + " getter");
                            return a.fromWireType(i(o, e))
                        },
                        enumerable: !0
                    };
                    if (f) {
                        f = $e(s, f);
                        var c = r[1];
                        u.set = function(e) {
                            var r = fr(this, t, n + " setter")
                              , i = [];
                            f(h, r, c.toWireType(i, e)),
                            nr(i)
                        }
                    }
                    return Object.defineProperty(t.registeredClass.instancePrototype, e, u),
                    []
                }
                )),
                []
            }
            ))
        }
        var ur = []
          , cr = [{}, {
            value: void 0
        }, {
            value: null
        }, {
            value: !0
        }, {
            value: !1
        }];
        function dr(t) {
            t > 4 && 0 == --cr[t].refcount && (cr[t] = void 0,
            ur.push(t))
        }
        function lr() {
            for (var t = 0, e = 5; e < cr.length; ++e)
                void 0 !== cr[e] && ++t;
            return t
        }
        function pr() {
            for (var t = 5; t < cr.length; ++t)
                if (void 0 !== cr[t])
                    return cr[t];
            return null
        }
        function mr() {
            f.count_emval_handles = lr,
            f.get_first_emval = pr
        }
        function br(t) {
            switch (t) {
            case void 0:
                return 1;
            case null:
                return 2;
            case !0:
                return 3;
            case !1:
                return 4;
            default:
                var e = ur.length ? ur.pop() : cr.length;
                return cr[e] = {
                    refcount: 1,
                    value: t
                },
                e
            }
        }
        function gr(t, e) {
            ie(t, {
                name: e = Ht(e),
                fromWireType: function(t) {
                    var e = cr[t].value;
                    return dr(t),
                    e
                },
                toWireType: function(t, e) {
                    return br(e)
                },
                argPackAdvance: 8,
                readValueFromPointer: Ce,
                destructorFunction: null
            })
        }
        function vr(t) {
            if (null === t)
                return "null";
            var e = typeof t;
            return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
        }
        function yr(t, e) {
            switch (e) {
            case 2:
                return function(t) {
                    return this.fromWireType(W[t >> 2])
                }
                ;
            case 3:
                return function(t) {
                    return this.fromWireType(K[t >> 3])
                }
                ;
            default:
                throw new TypeError("Unknown float type: " + t)
            }
        }
        function wr(t, e, r) {
            var n = Ft(r);
            ie(t, {
                name: e = Ht(e),
                fromWireType: function(t) {
                    return t
                },
                toWireType: function(t, e) {
                    if ("number" != typeof e && "boolean" != typeof e)
                        throw new TypeError('Cannot convert "' + vr(e) + '" to ' + this.name);
                    return e
                },
                argPackAdvance: 8,
                readValueFromPointer: yr(e, n),
                destructorFunction: null
            })
        }
        function _r(t, e, r) {
            switch (e) {
            case 0:
                return r ? function(t) {
                    return N[t]
                }
                : function(t) {
                    return z[t]
                }
                ;
            case 1:
                return r ? function(t) {
                    return F[t >> 1]
                }
                : function(t) {
                    return q[t >> 1]
                }
                ;
            case 2:
                return r ? function(t) {
                    return Y[t >> 2]
                }
                : function(t) {
                    return H[t >> 2]
                }
                ;
            default:
                throw new TypeError("Unknown integer type: " + t)
            }
        }
        function Ar(t, e, r, n, i) {
            e = Ht(e),
            -1 === i && (i = 4294967295);
            var o = Ft(r)
              , a = function(t) {
                return t
            };
            if (0 === n) {
                var s = 32 - 8 * r;
                a = function(t) {
                    return t << s >>> s
                }
            }
            var f = e.includes("unsigned");
            ie(t, {
                name: e,
                fromWireType: a,
                toWireType: function(t, r) {
                    if ("number" != typeof r && "boolean" != typeof r)
                        throw new TypeError('Cannot convert "' + vr(r) + '" to ' + this.name);
                    if (r < n || r > i)
                        throw new TypeError('Passing a number "' + vr(r) + '" from JS side to C/C++ side to an argument of type "' + e + '", which is outside the valid range [' + n + ", " + i + "]!");
                    return f ? r >>> 0 : 0 | r
                },
                argPackAdvance: 8,
                readValueFromPointer: _r(e, o, 0 !== n),
                destructorFunction: null
            })
        }
        function Mr(t, e, r) {
            var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
            function i(t) {
                var e = H
                  , r = e[t >>= 2]
                  , i = e[t + 1];
                return new n(U,i,r)
            }
            ie(t, {
                name: r = Ht(r),
                fromWireType: i,
                argPackAdvance: 8,
                readValueFromPointer: i
            }, {
                ignoreDuplicateRegistrations: !0
            })
        }
        function Er(t, e) {
            var r = "std::string" === (e = Ht(e));
            ie(t, {
                name: e,
                fromWireType: function(t) {
                    var e, n = H[t >> 2];
                    if (r)
                        for (var i = t + 4, o = 0; o <= n; ++o) {
                            var a = t + 4 + o;
                            if (o == n || 0 == z[a]) {
                                var s = P(i, a - i);
                                void 0 === e ? e = s : (e += String.fromCharCode(0),
                                e += s),
                                i = a + 1
                            }
                        }
                    else {
                        var f = new Array(n);
                        for (o = 0; o < n; ++o)
                            f[o] = String.fromCharCode(z[t + 4 + o]);
                        e = f.join("")
                    }
                    return yn(t),
                    e
                },
                toWireType: function(t, e) {
                    e instanceof ArrayBuffer && (e = new Uint8Array(e));
                    var n = "string" == typeof e;
                    n || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || te("Cannot pass non-string to std::string");
                    var i = (r && n ? function() {
                        return j(e)
                    }
                    : function() {
                        return e.length
                    }
                    )()
                      , o = wn(4 + i + 1);
                    if (H[o >> 2] = i,
                    r && n)
                        L(e, o + 4, i + 1);
                    else if (n)
                        for (var a = 0; a < i; ++a) {
                            var s = e.charCodeAt(a);
                            s > 255 && (yn(o),
                            te("String has UTF-16 code units that do not fit in 8 bits")),
                            z[o + 4 + a] = s
                        }
                    else
                        for (a = 0; a < i; ++a)
                            z[o + 4 + a] = e[a];
                    return null !== t && t.push(yn, o),
                    o
                },
                argPackAdvance: 8,
                readValueFromPointer: Ce,
                destructorFunction: function(t) {
                    yn(t)
                }
            })
        }
        function Sr(t, e, r) {
            var n, i, o, a, s;
            r = Ht(r),
            2 === e ? (n = Z,
            i = V,
            a = X,
            o = function() {
                return q
            }
            ,
            s = 1) : 4 === e && (n = $,
            i = Q,
            a = J,
            o = function() {
                return H
            }
            ,
            s = 2),
            ie(t, {
                name: r,
                fromWireType: function(t) {
                    for (var r, i = H[t >> 2], a = o(), f = t + 4, h = 0; h <= i; ++h) {
                        var u = t + 4 + h * e;
                        if (h == i || 0 == a[u >> s]) {
                            var c = n(f, u - f);
                            void 0 === r ? r = c : (r += String.fromCharCode(0),
                            r += c),
                            f = u + e
                        }
                    }
                    return yn(t),
                    r
                },
                toWireType: function(t, n) {
                    "string" != typeof n && te("Cannot pass non-string to C++ string type " + r);
                    var o = a(n)
                      , f = wn(4 + o + e);
                    return H[f >> 2] = o >> s,
                    i(n, f + 4, o + e),
                    null !== t && t.push(yn, f),
                    f
                },
                argPackAdvance: 8,
                readValueFromPointer: Ce,
                destructorFunction: function(t) {
                    yn(t)
                }
            })
        }
        function kr(t, e) {
            ie(t, {
                isVoid: !0,
                name: e = Ht(e),
                argPackAdvance: 0,
                fromWireType: function() {},
                toWireType: function(t, e) {}
            })
        }
        function xr(t) {
            return t || te("Cannot use deleted val. handle = " + t),
            cr[t].value
        }
        function Br(t, e) {
            var r = Kt[t];
            return void 0 === r && te(e + " has unknown type " + Je(t)),
            r
        }
        function Rr(t, e, r) {
            t = xr(t),
            e = Br(e, "emval::as");
            var n = []
              , i = br(n);
            return Y[r >> 2] = i,
            e.toWireType(n, t)
        }
        var Tr = {};
        function Cr(t) {
            var e = Tr[t];
            return void 0 === e ? Ht(t) : e
        }
        var Dr = [];
        function Ir(t, e, r, n) {
            (t = Dr[t])(e = xr(e), r = Cr(r), null, n)
        }
        function Pr(t) {
            var e = Dr.length;
            return Dr.push(t),
            e
        }
        function Or(t, e) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = Br(Y[(e >> 2) + n], "parameter " + n);
            return r
        }
        function Lr(t, e) {
            for (var r = Or(t, e), n = r[0], i = n.name + "_$" + r.slice(1).map((function(t) {
                return t.name
            }
            )).join("_") + "$", o = ["retType"], a = [n], s = "", f = 0; f < t - 1; ++f)
                s += (0 !== f ? ", " : "") + "arg" + f,
                o.push("argType" + f),
                a.push(r[1 + f]);
            var h = "return function " + Xt("methodCaller_" + i) + "(handle, name, destructors, args) {\n"
              , u = 0;
            for (f = 0; f < t - 1; ++f)
                h += "    var arg" + f + " = argType" + f + ".readValueFromPointer(args" + (u ? "+" + u : "") + ");\n",
                u += r[f + 1].argPackAdvance;
            h += "    var rv = handle[name](" + s + ");\n";
            for (f = 0; f < t - 1; ++f)
                r[f + 1].deleteObject && (h += "    argType" + f + ".deleteObject(arg" + f + ");\n");
            return n.isVoid || (h += "    return retType.toWireType(destructors, rv);\n"),
            h += "};\n",
            o.push(h),
            Pr(or(Function, o).apply(null, a))
        }
        function jr(t) {
            t > 4 && (cr[t].refcount += 1)
        }
        function Ur(t) {
            nr(cr[t].value),
            dr(t)
        }
        function Nr(t, e) {
            return br((t = Br(t, "_emval_take_value")).readValueFromPointer(e))
        }
        function zr() {
            gt()
        }
        function Fr() {
            return void 0 === Fr.start && (Fr.start = Date.now()),
            1e3 * (Date.now() - Fr.start) | 0
        }
        function qr(t) {
            return t < 0 || 0 === t && 1 / t == -1 / 0
        }
        function Yr(t, e) {
            return (t >>> 0) + 4294967296 * e
        }
        function Hr(t, e) {
            return (t >>> 0) + 4294967296 * (e >>> 0)
        }
        function Wr(t, e) {
            if (t <= 0)
                return t;
            var r = e <= 32 ? Math.abs(1 << e - 1) : Math.pow(2, e - 1);
            return t >= r && (e <= 32 || t > r) && (t = -2 * r + t),
            t
        }
        function Kr(t, e) {
            return t >= 0 ? t : e <= 32 ? 2 * Math.abs(1 << e - 1) + t : Math.pow(2, e) + t
        }
        function Gr(t, e) {
            var r = t
              , n = e;
            function i(t) {
                var e;
                return n = function(t, e) {
                    return "double" !== e && "i64" !== e || 7 & t && (t += 4),
                    t
                }(n, t),
                "double" === t ? (e = K[n >> 3],
                n += 8) : "i64" == t ? (e = [Y[n >> 2], Y[n + 4 >> 2]],
                n += 8) : (t = "i32",
                e = Y[n >> 2],
                n += 4),
                e
            }
            for (var o, a, s, f = []; ; ) {
                var h = r;
                if (0 === (o = N[r >> 0]))
                    break;
                if (a = N[r + 1 >> 0],
                37 == o) {
                    var u = !1
                      , c = !1
                      , d = !1
                      , l = !1
                      , p = !1;
                    t: for (; ; ) {
                        switch (a) {
                        case 43:
                            u = !0;
                            break;
                        case 45:
                            c = !0;
                            break;
                        case 35:
                            d = !0;
                            break;
                        case 48:
                            if (l)
                                break t;
                            l = !0;
                            break;
                        case 32:
                            p = !0;
                            break;
                        default:
                            break t
                        }
                        r++,
                        a = N[r + 1 >> 0]
                    }
                    var m = 0;
                    if (42 == a)
                        m = i("i32"),
                        r++,
                        a = N[r + 1 >> 0];
                    else
                        for (; a >= 48 && a <= 57; )
                            m = 10 * m + (a - 48),
                            r++,
                            a = N[r + 1 >> 0];
                    var b, g = !1, v = -1;
                    if (46 == a) {
                        if (v = 0,
                        g = !0,
                        r++,
                        42 == (a = N[r + 1 >> 0]))
                            v = i("i32"),
                            r++;
                        else
                            for (; ; ) {
                                var y = N[r + 1 >> 0];
                                if (y < 48 || y > 57)
                                    break;
                                v = 10 * v + (y - 48),
                                r++
                            }
                        a = N[r + 1 >> 0]
                    }
                    switch (v < 0 && (v = 6,
                    g = !1),
                    String.fromCharCode(a)) {
                    case "h":
                        104 == N[r + 2 >> 0] ? (r++,
                        b = 1) : b = 2;
                        break;
                    case "l":
                        108 == N[r + 2 >> 0] ? (r++,
                        b = 8) : b = 4;
                        break;
                    case "L":
                    case "q":
                    case "j":
                        b = 8;
                        break;
                    case "z":
                    case "t":
                    case "I":
                        b = 4;
                        break;
                    default:
                        b = null
                    }
                    switch (b && r++,
                    a = N[r + 1 >> 0],
                    String.fromCharCode(a)) {
                    case "d":
                    case "i":
                    case "u":
                    case "o":
                    case "x":
                    case "X":
                    case "p":
                        var w = 100 == a || 105 == a;
                        if (s = i("i" + 8 * (b = b || 4)),
                        8 == b && (s = 117 == a ? Hr(s[0], s[1]) : Yr(s[0], s[1])),
                        b <= 4)
                            s = (w ? Wr : Kr)(s & Math.pow(256, b) - 1, 8 * b);
                        var _ = Math.abs(s)
                          , A = "";
                        if (100 == a || 105 == a)
                            S = Wr(s, 8 * b).toString(10);
                        else if (117 == a)
                            S = Kr(s, 8 * b).toString(10),
                            s = Math.abs(s);
                        else if (111 == a)
                            S = (d ? "0" : "") + _.toString(8);
                        else if (120 == a || 88 == a) {
                            if (A = d && 0 != s ? "0x" : "",
                            s < 0) {
                                s = -s,
                                S = (_ - 1).toString(16);
                                for (var M = [], E = 0; E < S.length; E++)
                                    M.push((15 - parseInt(S[E], 16)).toString(16));
                                for (S = M.join(""); S.length < 2 * b; )
                                    S = "f" + S
                            } else
                                S = _.toString(16);
                            88 == a && (A = A.toUpperCase(),
                            S = S.toUpperCase())
                        } else
                            112 == a && (0 === _ ? S = "(nil)" : (A = "0x",
                            S = _.toString(16)));
                        if (g)
                            for (; S.length < v; )
                                S = "0" + S;
                        for (s >= 0 && (u ? A = "+" + A : p && (A = " " + A)),
                        "-" == S.charAt(0) && (A = "-" + A,
                        S = S.substr(1)); A.length + S.length < m; )
                            c ? S += " " : l ? S = "0" + S : A = " " + A;
                        (S = A + S).split("").forEach((function(t) {
                            f.push(t.charCodeAt(0))
                        }
                        ));
                        break;
                    case "f":
                    case "F":
                    case "e":
                    case "E":
                    case "g":
                    case "G":
                        var S;
                        if (s = i("double"),
                        isNaN(s))
                            S = "nan",
                            l = !1;
                        else if (isFinite(s)) {
                            var k = !1
                              , x = Math.min(v, 20);
                            if (103 == a || 71 == a) {
                                k = !0,
                                v = v || 1;
                                var B = parseInt(s.toExponential(x).split("e")[1], 10);
                                v > B && B >= -4 ? (a = (103 == a ? "f" : "F").charCodeAt(0),
                                v -= B + 1) : (a = (103 == a ? "e" : "E").charCodeAt(0),
                                v--),
                                x = Math.min(v, 20)
                            }
                            101 == a || 69 == a ? (S = s.toExponential(x),
                            /[eE][-+]\d$/.test(S) && (S = S.slice(0, -1) + "0" + S.slice(-1))) : 102 != a && 70 != a || (S = s.toFixed(x),
                            0 === s && qr(s) && (S = "-" + S));
                            var R = S.split("e");
                            if (k && !d)
                                for (; R[0].length > 1 && R[0].includes(".") && ("0" == R[0].slice(-1) || "." == R[0].slice(-1)); )
                                    R[0] = R[0].slice(0, -1);
                            else
                                for (d && -1 == S.indexOf(".") && (R[0] += "."); v > x++; )
                                    R[0] += "0";
                            S = R[0] + (R.length > 1 ? "e" + R[1] : ""),
                            69 == a && (S = S.toUpperCase()),
                            s >= 0 && (u ? S = "+" + S : p && (S = " " + S))
                        } else
                            S = (s < 0 ? "-" : "") + "inf",
                            l = !1;
                        for (; S.length < m; )
                            c ? S += " " : S = !l || "-" != S[0] && "+" != S[0] ? (l ? "0" : " ") + S : S[0] + "0" + S.slice(1);
                        a < 97 && (S = S.toUpperCase()),
                        S.split("").forEach((function(t) {
                            f.push(t.charCodeAt(0))
                        }
                        ));
                        break;
                    case "s":
                        var T = i("i8*")
                          , C = T ? _n(T) : 6;
                        if (g && (C = Math.min(C, v)),
                        !c)
                            for (; C < m--; )
                                f.push(32);
                        if (T)
                            for (E = 0; E < C; E++)
                                f.push(z[T++ >> 0]);
                        else
                            f = f.concat(bn("(null)".substr(0, C), !0));
                        if (c)
                            for (; C < m--; )
                                f.push(32);
                        break;
                    case "c":
                        for (c && f.push(i("i8")); --m > 0; )
                            f.push(32);
                        c || f.push(i("i8"));
                        break;
                    case "n":
                        var D = i("i32*");
                        Y[D >> 2] = f.length;
                        break;
                    case "%":
                        f.push(o);
                        break;
                    default:
                        for (E = h; E < r + 2; E++)
                            f.push(N[E >> 0])
                    }
                    r += 2
                } else
                    f.push(o),
                    r += 1
            }
            return f
        }
        function Zr(t) {
            if (!t || !t.callee || !t.callee.name)
                return [null, "", ""];
            t.callee.toString();
            var e = t.callee.name
              , r = "("
              , n = !0;
            for (var i in t) {
                var o = t[i];
                n || (r += ", "),
                n = !1,
                r += "number" == typeof o || "string" == typeof o ? o : "(" + typeof o + ")"
            }
            r += ")";
            var a = t.callee.caller;
            return n && (r = ""),
            [t = a ? a.arguments : [], e, r]
        }
        function Vr(t) {
            var e = Bt()
              , r = e.lastIndexOf("_emscripten_log")
              , n = e.lastIndexOf("_emscripten_get_callstack")
              , i = e.indexOf("\n", Math.max(r, n)) + 1;
            e = e.slice(i),
            32 & t && x("EM_LOG_DEMANGLE is deprecated; ignoring"),
            8 & t && "undefined" == typeof emscripten_source_map && (x('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),
            t ^= 8,
            t |= 16);
            var o = null;
            if (128 & t)
                for (o = Zr(arguments); o[1].includes("_emscripten_"); )
                    o = Zr(o[0]);
            var a = e.split("\n");
            e = "";
            var s = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)")
              , f = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?")
              , h = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
            for (var u in a) {
                var c = a[u]
                  , d = ""
                  , l = ""
                  , p = 0
                  , m = 0
                  , b = h.exec(c);
                if (b && 5 == b.length)
                    d = b[1],
                    l = b[2],
                    p = b[3],
                    m = b[4];
                else {
                    if ((b = s.exec(c)) || (b = f.exec(c)),
                    !(b && b.length >= 4)) {
                        e += c + "\n";
                        continue
                    }
                    d = b[1],
                    l = b[2],
                    p = b[3],
                    m = 0 | b[4]
                }
                var g = !1;
                if (8 & t) {
                    var v = emscripten_source_map.originalPositionFor({
                        line: p,
                        column: m
                    });
                    (g = v && v.source) && (64 & t && (v.source = v.source.substring(v.source.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                    e += "    at " + d + " (" + v.source + ":" + v.line + ":" + v.column + ")\n")
                }
                (16 & t || !g) && (64 & t && (l = l.substring(l.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                e += (g ? "     = " + d : "    at " + d) + " (" + l + ":" + p + ":" + m + ")\n"),
                128 & t && o[0] && (o[1] == d && o[2].length > 0 && (e = e.replace(/\s+$/, ""),
                e += " with values: " + o[1] + o[2] + "\n"),
                o = Zr(o[0]))
            }
            return e = e.replace(/\s+$/, "")
        }
        function Xr(t, e) {
            24 & t && (e = e.replace(/\s+$/, ""),
            e += (e.length > 0 ? "\n" : "") + Vr(t)),
            1 & t ? 4 & t ? console.error(e) : 2 & t ? console.warn(e) : 512 & t ? console.info(e) : 256 & t ? console.debug(e) : console.log(e) : 6 & t ? E(e) : M(e)
        }
        function $r(t, e, r) {
            Xr(t, I(Gr(e, r), 0))
        }
        function Qr(t) {
            gt("OOM")
        }
        function Jr(t) {
            z.length;
            Qr()
        }
        var tn = {};
        function en() {
            return c || "./this.program"
        }
        function rn() {
            if (!rn.strings) {
                var t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: en()
                };
                for (var e in tn)
                    t[e] = tn[e];
                var r = [];
                for (var e in t)
                    r.push(e + "=" + t[e]);
                rn.strings = r
            }
            return rn.strings
        }
        function nn(t, e) {
            try {
                var r = 0;
                return rn().forEach((function(n, i) {
                    var o = e + r;
                    Y[t + 4 * i >> 2] = o,
                    tt(n, o),
                    r += n.length + 1
                }
                )),
                0
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function on(t, e) {
            try {
                var r = rn();
                Y[t >> 2] = r.length;
                var n = 0;
                return r.forEach((function(t) {
                    n += t.length + 1
                }
                )),
                Y[e >> 2] = n,
                0
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function an(t) {
            try {
                var e = jt.getStreamFromFD(t);
                return Lt.close(e),
                0
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function sn(t, e) {
            try {
                var r = jt.getStreamFromFD(t)
                  , n = r.tty ? 2 : Lt.isDir(r.mode) ? 3 : Lt.isLink(r.mode) ? 7 : 4;
                return N[e >> 0] = n,
                0
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function fn(t, e, r, n) {
            try {
                var i = jt.getStreamFromFD(t)
                  , o = jt.doReadv(i, e, r);
                return Y[n >> 2] = o,
                0
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function hn(t, e, r, n, i) {
            try {
                var o = jt.getStreamFromFD(t)
                  , a = 4294967296 * r + (e >>> 0)
                  , s = 9007199254740992;
                return a <= -s || a >= s ? -61 : (Lt.llseek(o, a, n),
                At = [o.position >>> 0, (_t = o.position,
                +Math.abs(_t) >= 1 ? _t > 0 ? (0 | Math.min(+Math.floor(_t / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((_t - +(~~_t >>> 0)) / 4294967296) >>> 0 : 0)],
                Y[i >> 2] = At[0],
                Y[i + 4 >> 2] = At[1],
                o.getdents && 0 === a && 0 === n && (o.getdents = null),
                0)
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function un(t, e, r, n) {
            try {
                var i = jt.getStreamFromFD(t)
                  , o = jt.doWritev(i, e, r);
                return Y[n >> 2] = o,
                0
            } catch (t) {
                return void 0 !== Lt && t instanceof Lt.ErrnoError || gt(t),
                t.errno
            }
        }
        function cn(t) {
            var e = Date.now();
            return Y[t >> 2] = e / 1e3 | 0,
            Y[t + 4 >> 2] = e % 1e3 * 1e3 | 0,
            0
        }
        function dn(t) {
            R(t)
        }
        var ln = function(t, e, r, n) {
            t || (t = this),
            this.parent = t,
            this.mount = t.mount,
            this.mounted = null,
            this.id = Lt.nextInode++,
            this.name = e,
            this.mode = r,
            this.node_ops = {},
            this.stream_ops = {},
            this.rdev = n
        }
          , pn = 365
          , mn = 146;
        function bn(t, e, r) {
            var n = r > 0 ? r : j(t) + 1
              , i = new Array(n)
              , o = O(t, i, 0, i.length);
            return e && (i.length = o),
            i
        }
        Object.defineProperties(ln.prototype, {
            read: {
                get: function() {
                    return (this.mode & pn) === pn
                },
                set: function(t) {
                    t ? this.mode |= pn : this.mode &= ~pn
                }
            },
            write: {
                get: function() {
                    return (this.mode & mn) === mn
                },
                set: function(t) {
                    t ? this.mode |= mn : this.mode &= ~mn
                }
            },
            isFolder: {
                get: function() {
                    return Lt.isDir(this.mode)
                }
            },
            isDevice: {
                get: function() {
                    return Lt.isChrdev(this.mode)
                }
            }
        }),
        Lt.FSNode = ln,
        Lt.staticInit(),
        qt(),
        Jt = f.BindingError = Qt(Error, "BindingError"),
        ee = f.InternalError = Qt(Error, "InternalError"),
        _e(),
        We(),
        Ne(),
        Qe = f.UnboundTypeError = Qt(Error, "UnboundTypeError"),
        mr();
        var gn, vn = {
            z: Ut,
            y: Nt,
            t: zt,
            D: oe,
            o: er,
            j: ir,
            g: sr,
            I: hr,
            C: gr,
            m: wr,
            c: Ar,
            b: Mr,
            n: Er,
            i: Sr,
            E: kr,
            r: Rr,
            e: Ir,
            p: dr,
            d: Lr,
            H: jr,
            q: Ur,
            w: Nr,
            a: zr,
            G: Fr,
            f: $r,
            u: Jr,
            v: nn,
            x: on,
            l: an,
            A: sn,
            B: fn,
            s: hn,
            k: un,
            F: cn,
            h: dn
        }, yn = (kt(),
        f.___wasm_call_ctors = function() {
            return (f.___wasm_call_ctors = f.asm.K).apply(null, arguments)
        }
        ,
        f._free = function() {
            return (yn = f._free = f.asm.L).apply(null, arguments)
        }
        ), wn = f._malloc = function() {
            return (wn = f._malloc = f.asm.M).apply(null, arguments)
        }
        , _n = f._strlen = function() {
            return (_n = f._strlen = f.asm.O).apply(null, arguments)
        }
        , An = f.___errno_location = function() {
            return (An = f.___errno_location = f.asm.P).apply(null, arguments)
        }
        , Mn = f.___getTypeName = function() {
            return (Mn = f.___getTypeName = f.asm.Q).apply(null, arguments)
        }
        ;
        f.___embind_register_native_and_builtin_types = function() {
            return (f.___embind_register_native_and_builtin_types = f.asm.R).apply(null, arguments)
        }
        ,
        f.dynCall_ijiii = function() {
            return (f.dynCall_ijiii = f.asm.S).apply(null, arguments)
        }
        ,
        f.dynCall_viiijj = function() {
            return (f.dynCall_viiijj = f.asm.T).apply(null, arguments)
        }
        ,
        f.dynCall_jij = function() {
            return (f.dynCall_jij = f.asm.U).apply(null, arguments)
        }
        ,
        f.dynCall_jii = function() {
            return (f.dynCall_jii = f.asm.V).apply(null, arguments)
        }
        ,
        f.dynCall_jiji = function() {
            return (f.dynCall_jiji = f.asm.W).apply(null, arguments)
        }
        ,
        f._ff_h264_cabac_tables = 77157;
        function En(t) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + t + ")",
            this.status = t
        }
        function Sn(t) {
            function e() {
                gn || (gn = !0,
                f.calledRun = !0,
                T || (st(),
                f.onRuntimeInitialized && f.onRuntimeInitialized(),
                ft()))
            }
            t = t || u,
            dt > 0 || (at(),
            dt > 0 || (f.setStatus ? (f.setStatus("Running..."),
            setTimeout((function() {
                setTimeout((function() {
                    f.setStatus("")
                }
                ), 1),
                e()
            }
            ), 1)) : e()))
        }
        if (pt = function t() {
            gn || Sn(),
            gn || (pt = t)
        }
        ,
        f.run = Sn,
        f.preInit)
            for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); f.preInit.length > 0; )
                f.preInit.pop()();
        Sn(),
        t.exports = f
    }
    )),
    o.register("67ZL8", (function(t, e) {
        var r, n, i = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function s(t) {
            if (r === setTimeout)
                return setTimeout(t, 0);
            if ((r === o || !r) && setTimeout)
                return r = setTimeout,
                setTimeout(t, 0);
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }
        !function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                r = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                n = a
            }
        }();
        var f, h = [], u = !1, c = -1;
        function d() {
            u && f && (u = !1,
            f.length ? h = f.concat(h) : c = -1,
            h.length && l())
        }
        function l() {
            if (!u) {
                var t = s(d);
                u = !0;
                for (var e = h.length; e; ) {
                    for (f = h,
                    h = []; ++c < e; )
                        f && f[c].run();
                    c = -1,
                    e = h.length
                }
                f = null,
                u = !1,
                function(t) {
                    if (n === clearTimeout)
                        return clearTimeout(t);
                    if ((n === a || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function p(t, e) {
            this.fun = t,
            this.array = e
        }
        function m() {}
        i.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
            h.push(new p(t,e)),
            1 !== h.length || u || s(l)
        }
        ,
        p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        i.title = "browser",
        i.browser = !0,
        i.env = {},
        i.argv = [],
        i.version = "",
        i.versions = {},
        i.on = m,
        i.addListener = m,
        i.once = m,
        i.off = m,
        i.removeListener = m,
        i.removeAllListeners = m,
        i.emit = m,
        i.prependListener = m,
        i.prependOnceListener = m,
        i.listeners = function(t) {
            return []
        }
        ,
        i.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        i.cwd = function() {
            return "/"
        }
        ,
        i.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        i.umask = function() {
            return 0
        }
    }
    )),
    o.register("3tvKv", (function(e, r) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        var n, i, a, s;
        t(e.exports, "Buffer", (()=>n), (t=>n = t)),
        t(e.exports, "SlowBuffer", (()=>s), (t=>s = t)),
        t(e.exports, "kMaxLength", (()=>i), (t=>i = t)),
        t(e.exports, "INSPECT_MAX_BYTES", (()=>a), (t=>a = t));
        var f = o("1VDzd")
          , h = o("7xT9b")
          , u = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        n = l,
        s = function(t) {
            +t != t && (t = 0);
            return l.alloc(+t)
        }
        ,
        a = 50;
        var c = 2147483647;
        function d(t) {
            if (t > c)
                throw new RangeError('The value "' + t + '" is invalid for option "size"');
            var e = new Uint8Array(t);
            return Object.setPrototypeOf(e, l.prototype),
            e
        }
        function l(t, e, r) {
            if ("number" == typeof t) {
                if ("string" == typeof e)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return b(t)
            }
            return p(t, e, r)
        }
        function p(t, e, r) {
            if ("string" == typeof t)
                return function(t, e) {
                    "string" == typeof e && "" !== e || (e = "utf8");
                    if (!l.isEncoding(e))
                        throw new TypeError("Unknown encoding: " + e);
                    var r = 0 | w(t, e)
                      , n = d(r)
                      , i = n.write(t, e);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(t, e);
            if (ArrayBuffer.isView(t))
                return function(t) {
                    if (K(t, Uint8Array)) {
                        var e = new Uint8Array(t);
                        return v(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return g(t)
                }(t);
            if (null == t)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            if (K(t, ArrayBuffer) || t && K(t.buffer, ArrayBuffer))
                return v(t, e, r);
            if ("undefined" != typeof SharedArrayBuffer && (K(t, SharedArrayBuffer) || t && K(t.buffer, SharedArrayBuffer)))
                return v(t, e, r);
            if ("number" == typeof t)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = t.valueOf && t.valueOf();
            if (null != n && n !== t)
                return l.from(n, e, r);
            var i = function(t) {
                if (l.isBuffer(t)) {
                    var e = 0 | y(t.length)
                      , r = d(e);
                    return 0 === r.length || t.copy(r, 0, 0, e),
                    r
                }
                if (void 0 !== t.length)
                    return "number" != typeof t.length || G(t.length) ? d(0) : g(t);
                if ("Buffer" === t.type && Array.isArray(t.data))
                    return g(t.data)
            }(t);
            if (i)
                return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                return l.from(t[Symbol.toPrimitive]("string"), e, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
        }
        function m(t) {
            if ("number" != typeof t)
                throw new TypeError('"size" argument must be of type number');
            if (t < 0)
                throw new RangeError('The value "' + t + '" is invalid for option "size"')
        }
        function b(t) {
            return m(t),
            d(t < 0 ? 0 : 0 | y(t))
        }
        function g(t) {
            for (var e = t.length < 0 ? 0 : 0 | y(t.length), r = d(e), n = 0; n < e; n += 1)
                r[n] = 255 & t[n];
            return r
        }
        function v(t, e, r) {
            if (e < 0 || t.byteLength < e)
                throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (r || 0))
                throw new RangeError('"length" is outside of buffer bounds');
            var n;
            return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,e) : new Uint8Array(t,e,r),
            Object.setPrototypeOf(n, l.prototype),
            n
        }
        function y(t) {
            if (t >= c)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
            return 0 | t
        }
        function w(t, e) {
            if (l.isBuffer(t))
                return t.length;
            if (ArrayBuffer.isView(t) || K(t, ArrayBuffer))
                return t.byteLength;
            if ("string" != typeof t)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
            var r = t.length
              , n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r)
                return 0;
            for (var i = !1; ; )
                switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return Y(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return H(t).length;
                default:
                    if (i)
                        return n ? -1 : Y(t).length;
                    e = ("" + e).toLowerCase(),
                    i = !0
                }
        }
        function _(t, e, r) {
            var n = !1;
            if ((void 0 === e || e < 0) && (e = 0),
            e > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (e >>>= 0))
                return "";
            for (t || (t = "utf8"); ; )
                switch (t) {
                case "hex":
                    return O(this, e, r);
                case "utf8":
                case "utf-8":
                    return C(this, e, r);
                case "ascii":
                    return I(this, e, r);
                case "latin1":
                case "binary":
                    return P(this, e, r);
                case "base64":
                    return T(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return L(this, e, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                    n = !0
                }
        }
        function A(t, e, r) {
            var n = t[e];
            t[e] = t[r],
            t[r] = n
        }
        function M(t, e, r, n, i) {
            if (0 === t.length)
                return -1;
            if ("string" == typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            G(r = +r) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length) {
                if (i)
                    return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!i)
                    return -1;
                r = 0
            }
            if ("string" == typeof e && (e = l.from(e, n)),
            l.isBuffer(e))
                return 0 === e.length ? -1 : E(t, e, r, n, i);
            if ("number" == typeof e)
                return e &= 255,
                "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : E(t, [e], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function E(t, e, r, n, i) {
            var o, a = 1, s = t.length, f = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2)
                    return -1;
                a = 2,
                s /= 2,
                f /= 2,
                r /= 2
            }
            function h(t, e) {
                return 1 === a ? t[e] : t.readUInt16BE(e * a)
            }
            if (i) {
                var u = -1;
                for (o = r; o < s; o++)
                    if (h(t, o) === h(e, -1 === u ? 0 : o - u)) {
                        if (-1 === u && (u = o),
                        o - u + 1 === f)
                            return u * a
                    } else
                        -1 !== u && (o -= o - u),
                        u = -1
            } else
                for (r + f > s && (r = s - f),
                o = r; o >= 0; o--) {
                    for (var c = !0, d = 0; d < f; d++)
                        if (h(t, o + d) !== h(e, d)) {
                            c = !1;
                            break
                        }
                    if (c)
                        return o
                }
            return -1
        }
        function S(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = e.length;
            n > o / 2 && (n = o / 2);
            for (var a = 0; a < n; ++a) {
                var s = parseInt(e.substr(2 * a, 2), 16);
                if (G(s))
                    return a;
                t[r + a] = s
            }
            return a
        }
        function k(t, e, r, n) {
            return W(Y(e, t.length - r), t, r, n)
        }
        function x(t, e, r, n) {
            return W(function(t) {
                for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, n)
        }
        function B(t, e, r, n) {
            return W(H(e), t, r, n)
        }
        function R(t, e, r, n) {
            return W(function(t, e) {
                for (var r, n, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
                    n = (r = t.charCodeAt(a)) >> 8,
                    i = r % 256,
                    o.push(i),
                    o.push(n);
                return o
            }(e, t.length - r), t, r, n)
        }
        function T(t, e, r) {
            return 0 === e && r === t.length ? f.fromByteArray(t) : f.fromByteArray(t.slice(e, r))
        }
        function C(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r; ) {
                var o, a, s, f, h = t[i], u = null, c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                if (i + c <= r)
                    switch (c) {
                    case 1:
                        h < 128 && (u = h);
                        break;
                    case 2:
                        128 == (192 & (o = t[i + 1])) && (f = (31 & h) << 6 | 63 & o) > 127 && (u = f);
                        break;
                    case 3:
                        o = t[i + 1],
                        a = t[i + 2],
                        128 == (192 & o) && 128 == (192 & a) && (f = (15 & h) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (f < 55296 || f > 57343) && (u = f);
                        break;
                    case 4:
                        o = t[i + 1],
                        a = t[i + 2],
                        s = t[i + 3],
                        128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (f = (15 & h) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && f < 1114112 && (u = f)
                    }
                null === u ? (u = 65533,
                c = 1) : u > 65535 && (u -= 65536,
                n.push(u >>> 10 & 1023 | 55296),
                u = 56320 | 1023 & u),
                n.push(u),
                i += c
            }
            return function(t) {
                var e = t.length;
                if (e <= D)
                    return String.fromCharCode.apply(String, t);
                var r = ""
                  , n = 0;
                for (; n < e; )
                    r += String.fromCharCode.apply(String, t.slice(n, n += D));
                return r
            }(n)
        }
        i = c,
        l.TYPED_ARRAY_SUPPORT = function() {
            try {
                var t = new Uint8Array(1)
                  , e = {
                    foo: function() {
                        return 42
                    }
                };
                return Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                42 === t.foo()
            } catch (t) {
                return !1
            }
        }(),
        l.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(l.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (l.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(l.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (l.isBuffer(this))
                    return this.byteOffset
            }
        }),
        l.poolSize = 8192,
        l.from = function(t, e, r) {
            return p(t, e, r)
        }
        ,
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        l.alloc = function(t, e, r) {
            return function(t, e, r) {
                return m(t),
                t <= 0 ? d(t) : void 0 !== e ? "string" == typeof r ? d(t).fill(e, r) : d(t).fill(e) : d(t)
            }(t, e, r)
        }
        ,
        l.allocUnsafe = function(t) {
            return b(t)
        }
        ,
        l.allocUnsafeSlow = function(t) {
            return b(t)
        }
        ,
        l.isBuffer = function(t) {
            return null != t && !0 === t._isBuffer && t !== l.prototype
        }
        ,
        l.compare = function(t, e) {
            if (K(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            K(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(t) || !l.isBuffer(e))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (t === e)
                return 0;
            for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                if (t[i] !== e[i]) {
                    r = t[i],
                    n = e[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        l.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        l.concat = function(t, e) {
            if (!Array.isArray(t))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length)
                return l.alloc(0);
            var r;
            if (void 0 === e)
                for (e = 0,
                r = 0; r < t.length; ++r)
                    e += t[r].length;
            var n = l.allocUnsafe(e)
              , i = 0;
            for (r = 0; r < t.length; ++r) {
                var o = t[r];
                if (K(o, Uint8Array))
                    i + o.length > n.length ? l.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i);
                else {
                    if (!l.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i)
                }
                i += o.length
            }
            return n
        }
        ,
        l.byteLength = w,
        l.prototype._isBuffer = !0,
        l.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2)
                A(this, e, e + 1);
            return this
        }
        ,
        l.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
                A(this, e, e + 3),
                A(this, e + 1, e + 2);
            return this
        }
        ,
        l.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
                A(this, e, e + 7),
                A(this, e + 1, e + 6),
                A(this, e + 2, e + 5),
                A(this, e + 3, e + 4);
            return this
        }
        ,
        l.prototype.toString = function() {
            var t = this.length;
            return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : _.apply(this, arguments)
        }
        ,
        l.prototype.toLocaleString = l.prototype.toString,
        l.prototype.equals = function(t) {
            if (!l.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === l.compare(this, t)
        }
        ,
        l.prototype.inspect = function() {
            var t = ""
              , e = a;
            return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(),
            this.length > e && (t += " ... "),
            "<Buffer " + t + ">"
        }
        ,
        u && (l.prototype[u] = l.prototype.inspect),
        l.prototype.compare = function(t, e, r, n, i) {
            if (K(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(t))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
            if (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && e >= r)
                return 0;
            if (n >= i)
                return -1;
            if (e >= r)
                return 1;
            if (this === t)
                return 0;
            for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0), s = Math.min(o, a), f = this.slice(n, i), h = t.slice(e, r), u = 0; u < s; ++u)
                if (f[u] !== h[u]) {
                    o = f[u],
                    a = h[u];
                    break
                }
            return o < a ? -1 : a < o ? 1 : 0
        }
        ,
        l.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }
        ,
        l.prototype.indexOf = function(t, e, r) {
            return M(this, t, e, r, !0)
        }
        ,
        l.prototype.lastIndexOf = function(t, e, r) {
            return M(this, t, e, r, !1)
        }
        ,
        l.prototype.write = function(t, e, r, n) {
            if (void 0 === e)
                n = "utf8",
                r = this.length,
                e = 0;
            else if (void 0 === r && "string" == typeof e)
                n = e,
                r = this.length,
                e = 0;
            else {
                if (!isFinite(e))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e >>>= 0,
                isFinite(r) ? (r >>>= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var i = this.length - e;
            if ((void 0 === r || r > i) && (r = i),
            t.length > 0 && (r < 0 || e < 0) || e > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
                switch (n) {
                case "hex":
                    return S(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return k(this, t, e, r);
                case "ascii":
                case "latin1":
                case "binary":
                    return x(this, t, e, r);
                case "base64":
                    return B(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return R(this, t, e, r);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    o = !0
                }
        }
        ,
        l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var D = 4096;
        function I(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i)
                n += String.fromCharCode(127 & t[i]);
            return n
        }
        function P(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i)
                n += String.fromCharCode(t[i]);
            return n
        }
        function O(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = e; o < r; ++o)
                i += Z[t[o]];
            return i
        }
        function L(t, e, r) {
            for (var n = t.slice(e, r), i = "", o = 0; o < n.length - 1; o += 2)
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }
        function j(t, e, r) {
            if (t % 1 != 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + e > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function U(t, e, r, n, i, o) {
            if (!l.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < o)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length)
                throw new RangeError("Index out of range")
        }
        function N(t, e, r, n, i, o) {
            if (r + n > t.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function z(t, e, r, n, i) {
            return e = +e,
            r >>>= 0,
            i || N(t, 0, r, 4),
            h.write(t, e, r, n, 23, 4),
            r + 4
        }
        function F(t, e, r, n, i) {
            return e = +e,
            r >>>= 0,
            i || N(t, 0, r, 8),
            h.write(t, e, r, n, 52, 8),
            r + 8
        }
        l.prototype.slice = function(t, e) {
            var r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
            var n = this.subarray(t, e);
            return Object.setPrototypeOf(n, l.prototype),
            n
        }
        ,
        l.prototype.readUintLE = l.prototype.readUIntLE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || j(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                n += this[t + o] * i;
            return n
        }
        ,
        l.prototype.readUintBE = l.prototype.readUIntBE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || j(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                n += this[t + --e] * i;
            return n
        }
        ,
        l.prototype.readUint8 = l.prototype.readUInt8 = function(t, e) {
            return t >>>= 0,
            e || j(t, 1, this.length),
            this[t]
        }
        ,
        l.prototype.readUint16LE = l.prototype.readUInt16LE = function(t, e) {
            return t >>>= 0,
            e || j(t, 2, this.length),
            this[t] | this[t + 1] << 8
        }
        ,
        l.prototype.readUint16BE = l.prototype.readUInt16BE = function(t, e) {
            return t >>>= 0,
            e || j(t, 2, this.length),
            this[t] << 8 | this[t + 1]
        }
        ,
        l.prototype.readUint32LE = l.prototype.readUInt32LE = function(t, e) {
            return t >>>= 0,
            e || j(t, 4, this.length),
            (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }
        ,
        l.prototype.readUint32BE = l.prototype.readUInt32BE = function(t, e) {
            return t >>>= 0,
            e || j(t, 4, this.length),
            16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }
        ,
        l.prototype.readIntLE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || j(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                n += this[t + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)),
            n
        }
        ,
        l.prototype.readIntBE = function(t, e, r) {
            t >>>= 0,
            e >>>= 0,
            r || j(t, e, this.length);
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
                o += this[t + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)),
            o
        }
        ,
        l.prototype.readInt8 = function(t, e) {
            return t >>>= 0,
            e || j(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }
        ,
        l.prototype.readInt16LE = function(t, e) {
            t >>>= 0,
            e || j(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        l.prototype.readInt16BE = function(t, e) {
            t >>>= 0,
            e || j(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        l.prototype.readInt32LE = function(t, e) {
            return t >>>= 0,
            e || j(t, 4, this.length),
            this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }
        ,
        l.prototype.readInt32BE = function(t, e) {
            return t >>>= 0,
            e || j(t, 4, this.length),
            this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }
        ,
        l.prototype.readFloatLE = function(t, e) {
            return t >>>= 0,
            e || j(t, 4, this.length),
            h.read(this, t, !0, 23, 4)
        }
        ,
        l.prototype.readFloatBE = function(t, e) {
            return t >>>= 0,
            e || j(t, 4, this.length),
            h.read(this, t, !1, 23, 4)
        }
        ,
        l.prototype.readDoubleLE = function(t, e) {
            return t >>>= 0,
            e || j(t, 8, this.length),
            h.read(this, t, !0, 52, 8)
        }
        ,
        l.prototype.readDoubleBE = function(t, e) {
            return t >>>= 0,
            e || j(t, 8, this.length),
            h.read(this, t, !1, 52, 8)
        }
        ,
        l.prototype.writeUintLE = l.prototype.writeUIntLE = function(t, e, r, n) {
            (t = +t,
            e >>>= 0,
            r >>>= 0,
            n) || U(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1
              , o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
                this[e + o] = t / i & 255;
            return e + r
        }
        ,
        l.prototype.writeUintBE = l.prototype.writeUIntBE = function(t, e, r, n) {
            (t = +t,
            e >>>= 0,
            r >>>= 0,
            n) || U(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1
              , o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[e + i] = t / o & 255;
            return e + r
        }
        ,
        l.prototype.writeUint8 = l.prototype.writeUInt8 = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 1, 255, 0),
            this[e] = 255 & t,
            e + 1
        }
        ,
        l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 2, 65535, 0),
            this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            e + 2
        }
        ,
        l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 2, 65535, 0),
            this[e] = t >>> 8,
            this[e + 1] = 255 & t,
            e + 2
        }
        ,
        l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 4, 4294967295, 0),
            this[e + 3] = t >>> 24,
            this[e + 2] = t >>> 16,
            this[e + 1] = t >>> 8,
            this[e] = 255 & t,
            e + 4
        }
        ,
        l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 4, 4294967295, 0),
            this[e] = t >>> 24,
            this[e + 1] = t >>> 16,
            this[e + 2] = t >>> 8,
            this[e + 3] = 255 & t,
            e + 4
        }
        ,
        l.prototype.writeIntLE = function(t, e, r, n) {
            if (t = +t,
            e >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                U(this, t, e, r, i - 1, -i)
            }
            var o = 0
              , a = 1
              , s = 0;
            for (this[e] = 255 & t; ++o < r && (a *= 256); )
                t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                this[e + o] = (t / a >> 0) - s & 255;
            return e + r
        }
        ,
        l.prototype.writeIntBE = function(t, e, r, n) {
            if (t = +t,
            e >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                U(this, t, e, r, i - 1, -i)
            }
            var o = r - 1
              , a = 1
              , s = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
                t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                this[e + o] = (t / a >> 0) - s & 255;
            return e + r
        }
        ,
        l.prototype.writeInt8 = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            this[e] = 255 & t,
            e + 1
        }
        ,
        l.prototype.writeInt16LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 2, 32767, -32768),
            this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            e + 2
        }
        ,
        l.prototype.writeInt16BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 2, 32767, -32768),
            this[e] = t >>> 8,
            this[e + 1] = 255 & t,
            e + 2
        }
        ,
        l.prototype.writeInt32LE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 4, 2147483647, -2147483648),
            this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            this[e + 2] = t >>> 16,
            this[e + 3] = t >>> 24,
            e + 4
        }
        ,
        l.prototype.writeInt32BE = function(t, e, r) {
            return t = +t,
            e >>>= 0,
            r || U(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            this[e] = t >>> 24,
            this[e + 1] = t >>> 16,
            this[e + 2] = t >>> 8,
            this[e + 3] = 255 & t,
            e + 4
        }
        ,
        l.prototype.writeFloatLE = function(t, e, r) {
            return z(this, t, e, !0, r)
        }
        ,
        l.prototype.writeFloatBE = function(t, e, r) {
            return z(this, t, e, !1, r)
        }
        ,
        l.prototype.writeDoubleLE = function(t, e, r) {
            return F(this, t, e, !0, r)
        }
        ,
        l.prototype.writeDoubleBE = function(t, e, r) {
            return F(this, t, e, !1, r)
        }
        ,
        l.prototype.copy = function(t, e, r, n) {
            if (!l.isBuffer(t))
                throw new TypeError("argument should be a Buffer");
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === t.length || 0 === this.length)
                return 0;
            if (e < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
            var i = n - r;
            return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
        }
        ,
        l.prototype.fill = function(t, e, r, n) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (n = e,
                e = 0,
                r = this.length) : "string" == typeof r && (n = r,
                r = this.length),
                void 0 !== n && "string" != typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !l.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                    var i = t.charCodeAt(0);
                    ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                }
            } else
                "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
            if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= e)
                return this;
            var o;
            if (e >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            t || (t = 0),
            "number" == typeof t)
                for (o = e; o < r; ++o)
                    this[o] = t;
            else {
                var a = l.isBuffer(t) ? t : l.from(t, n)
                  , s = a.length;
                if (0 === s)
                    throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                for (o = 0; o < r - e; ++o)
                    this[o + e] = a[o % s]
            }
            return this
        }
        ;
        var q = /[^+/0-9A-Za-z-_]/g;
        function Y(t, e) {
            var r;
            e = e || 1 / 0;
            for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189),
                        i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else
                    i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (i = null,
                r < 128) {
                    if ((e -= 1) < 0)
                        break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((e -= 4) < 0)
                        break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }
        function H(t) {
            return f.toByteArray(function(t) {
                if ((t = (t = t.split("=")[0]).trim().replace(q, "")).length < 2)
                    return "";
                for (; t.length % 4 != 0; )
                    t += "=";
                return t
            }(t))
        }
        function W(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
                e[i + r] = t[i];
            return i
        }
        function K(t, e) {
            return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
        }
        function G(t) {
            return t != t
        }
        var Z = function() {
            for (var t = "0123456789abcdef", e = new Array(256), r = 0; r < 16; ++r)
                for (var n = 16 * r, i = 0; i < 16; ++i)
                    e[n + i] = t[r] + t[i];
            return e
        }()
    }
    )),
    o.register("1VDzd", (function(e, r) {
        var n, i;
        t(e.exports, "toByteArray", (()=>n), (t=>n = t)),
        t(e.exports, "fromByteArray", (()=>i), (t=>i = t)),
        n = function(t) {
            var e, r, n = c(t), i = n[0], o = n[1], f = new s(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, i, o)), h = 0, u = o > 0 ? i - 4 : i;
            for (r = 0; r < u; r += 4)
                e = a[t.charCodeAt(r)] << 18 | a[t.charCodeAt(r + 1)] << 12 | a[t.charCodeAt(r + 2)] << 6 | a[t.charCodeAt(r + 3)],
                f[h++] = e >> 16 & 255,
                f[h++] = e >> 8 & 255,
                f[h++] = 255 & e;
            2 === o && (e = a[t.charCodeAt(r)] << 2 | a[t.charCodeAt(r + 1)] >> 4,
            f[h++] = 255 & e);
            1 === o && (e = a[t.charCodeAt(r)] << 10 | a[t.charCodeAt(r + 1)] << 4 | a[t.charCodeAt(r + 2)] >> 2,
            f[h++] = e >> 8 & 255,
            f[h++] = 255 & e);
            return f
        }
        ,
        i = function(t) {
            for (var e, r = t.length, n = r % 3, i = [], a = 16383, s = 0, f = r - n; s < f; s += a)
                i.push(d(t, s, s + a > f ? f : s + a));
            1 === n ? (e = t[r - 1],
            i.push(o[e >> 2] + o[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1],
            i.push(o[e >> 10] + o[e >> 4 & 63] + o[e << 2 & 63] + "="));
            return i.join("")
        }
        ;
        for (var o = [], a = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, u = f.length; h < u; ++h)
            o[h] = f[h],
            a[f.charCodeAt(h)] = h;
        function c(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e),
            [r, r === e ? 0 : 4 - r % 4]
        }
        function d(t, e, r) {
            for (var n, i, a = [], s = e; s < r; s += 3)
                n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
                a.push(o[(i = n) >> 18 & 63] + o[i >> 12 & 63] + o[i >> 6 & 63] + o[63 & i]);
            return a.join("")
        }
        a["-".charCodeAt(0)] = 62,
        a["_".charCodeAt(0)] = 63
    }
    )),
    o.register("7xT9b", (function(e, r) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        var n, i;
        t(e.exports, "write", (()=>n), (t=>n = t)),
        t(e.exports, "read", (()=>i), (t=>i = t)),
        i = function(t, e, r, n, i) {
            var o, a, s = 8 * i - n - 1, f = (1 << s) - 1, h = f >> 1, u = -7, c = r ? i - 1 : 0, d = r ? -1 : 1, l = t[e + c];
            for (c += d,
            o = l & (1 << -u) - 1,
            l >>= -u,
            u += s; u > 0; o = 256 * o + t[e + c],
            c += d,
            u -= 8)
                ;
            for (a = o & (1 << -u) - 1,
            o >>= -u,
            u += n; u > 0; a = 256 * a + t[e + c],
            c += d,
            u -= 8)
                ;
            if (0 === o)
                o = 1 - h;
            else {
                if (o === f)
                    return a ? NaN : 1 / 0 * (l ? -1 : 1);
                a += Math.pow(2, n),
                o -= h
            }
            return (l ? -1 : 1) * a * Math.pow(2, o - n)
        }
        ,
        n = function(t, e, r, n, i, o) {
            var a, s, f, h = 8 * o - i - 1, u = (1 << h) - 1, c = u >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : o - 1, p = n ? 1 : -1, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
            a = u) : (a = Math.floor(Math.log(e) / Math.LN2),
            e * (f = Math.pow(2, -a)) < 1 && (a--,
            f *= 2),
            (e += a + c >= 1 ? d / f : d * Math.pow(2, 1 - c)) * f >= 2 && (a++,
            f /= 2),
            a + c >= u ? (s = 0,
            a = u) : a + c >= 1 ? (s = (e * f - 1) * Math.pow(2, i),
            a += c) : (s = e * Math.pow(2, c - 1) * Math.pow(2, i),
            a = 0)); i >= 8; t[r + l] = 255 & s,
            l += p,
            s /= 256,
            i -= 8)
                ;
            for (a = a << i | s,
            h += i; h > 0; t[r + l] = 255 & a,
            l += p,
            a /= 256,
            h -= 8)
                ;
            t[r + l - p] |= 128 * m
        }
    }
    )),
    o.register("7BCkb", (function(t, e) {
        var r = o("67ZL8");
        function n(t) {
            if ("string" != typeof t)
                throw new TypeError("Path must be a string. Received " + JSON.stringify(t))
        }
        function i(t, e) {
            for (var r, n = "", i = 0, o = -1, a = 0, s = 0; s <= t.length; ++s) {
                if (s < t.length)
                    r = t.charCodeAt(s);
                else {
                    if (47 === r)
                        break;
                    r = 47
                }
                if (47 === r) {
                    if (o === s - 1 || 1 === a)
                        ;
                    else if (o !== s - 1 && 2 === a) {
                        if (n.length < 2 || 2 !== i || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2))
                            if (n.length > 2) {
                                var f = n.lastIndexOf("/");
                                if (f !== n.length - 1) {
                                    -1 === f ? (n = "",
                                    i = 0) : i = (n = n.slice(0, f)).length - 1 - n.lastIndexOf("/"),
                                    o = s,
                                    a = 0;
                                    continue
                                }
                            } else if (2 === n.length || 1 === n.length) {
                                n = "",
                                i = 0,
                                o = s,
                                a = 0;
                                continue
                            }
                        e && (n.length > 0 ? n += "/.." : n = "..",
                        i = 2)
                    } else
                        n.length > 0 ? n += "/" + t.slice(o + 1, s) : n = t.slice(o + 1, s),
                        i = s - o - 1;
                    o = s,
                    a = 0
                } else
                    46 === r && -1 !== a ? ++a : a = -1
            }
            return n
        }
        var a = {
            resolve: function() {
                for (var t, e = "", o = !1, a = arguments.length - 1; a >= -1 && !o; a--) {
                    var s;
                    a >= 0 ? s = arguments[a] : (void 0 === t && (t = r.cwd()),
                    s = t),
                    n(s),
                    0 !== s.length && (e = s + "/" + e,
                    o = 47 === s.charCodeAt(0))
                }
                return e = i(e, !o),
                o ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : "."
            },
            normalize: function(t) {
                if (n(t),
                0 === t.length)
                    return ".";
                var e = 47 === t.charCodeAt(0)
                  , r = 47 === t.charCodeAt(t.length - 1);
                return 0 !== (t = i(t, !e)).length || e || (t = "."),
                t.length > 0 && r && (t += "/"),
                e ? "/" + t : t
            },
            isAbsolute: function(t) {
                return n(t),
                t.length > 0 && 47 === t.charCodeAt(0)
            },
            join: function() {
                if (0 === arguments.length)
                    return ".";
                for (var t, e = 0; e < arguments.length; ++e) {
                    var r = arguments[e];
                    n(r),
                    r.length > 0 && (void 0 === t ? t = r : t += "/" + r)
                }
                return void 0 === t ? "." : a.normalize(t)
            },
            relative: function(t, e) {
                if (n(t),
                n(e),
                t === e)
                    return "";
                if ((t = a.resolve(t)) === (e = a.resolve(e)))
                    return "";
                for (var r = 1; r < t.length && 47 === t.charCodeAt(r); ++r)
                    ;
                for (var i = t.length, o = i - r, s = 1; s < e.length && 47 === e.charCodeAt(s); ++s)
                    ;
                for (var f = e.length - s, h = o < f ? o : f, u = -1, c = 0; c <= h; ++c) {
                    if (c === h) {
                        if (f > h) {
                            if (47 === e.charCodeAt(s + c))
                                return e.slice(s + c + 1);
                            if (0 === c)
                                return e.slice(s + c)
                        } else
                            o > h && (47 === t.charCodeAt(r + c) ? u = c : 0 === c && (u = 0));
                        break
                    }
                    var d = t.charCodeAt(r + c);
                    if (d !== e.charCodeAt(s + c))
                        break;
                    47 === d && (u = c)
                }
                var l = "";
                for (c = r + u + 1; c <= i; ++c)
                    c !== i && 47 !== t.charCodeAt(c) || (0 === l.length ? l += ".." : l += "/..");
                return l.length > 0 ? l + e.slice(s + u) : (s += u,
                47 === e.charCodeAt(s) && ++s,
                e.slice(s))
            },
            _makeLong: function(t) {
                return t
            },
            dirname: function(t) {
                if (n(t),
                0 === t.length)
                    return ".";
                for (var e = t.charCodeAt(0), r = 47 === e, i = -1, o = !0, a = t.length - 1; a >= 1; --a)
                    if (47 === (e = t.charCodeAt(a))) {
                        if (!o) {
                            i = a;
                            break
                        }
                    } else
                        o = !1;
                return -1 === i ? r ? "/" : "." : r && 1 === i ? "//" : t.slice(0, i)
            },
            basename: function(t, e) {
                if (void 0 !== e && "string" != typeof e)
                    throw new TypeError('"ext" argument must be a string');
                n(t);
                var r, i = 0, o = -1, a = !0;
                if (void 0 !== e && e.length > 0 && e.length <= t.length) {
                    if (e.length === t.length && e === t)
                        return "";
                    var s = e.length - 1
                      , f = -1;
                    for (r = t.length - 1; r >= 0; --r) {
                        var h = t.charCodeAt(r);
                        if (47 === h) {
                            if (!a) {
                                i = r + 1;
                                break
                            }
                        } else
                            -1 === f && (a = !1,
                            f = r + 1),
                            s >= 0 && (h === e.charCodeAt(s) ? -1 == --s && (o = r) : (s = -1,
                            o = f))
                    }
                    return i === o ? o = f : -1 === o && (o = t.length),
                    t.slice(i, o)
                }
                for (r = t.length - 1; r >= 0; --r)
                    if (47 === t.charCodeAt(r)) {
                        if (!a) {
                            i = r + 1;
                            break
                        }
                    } else
                        -1 === o && (a = !1,
                        o = r + 1);
                return -1 === o ? "" : t.slice(i, o)
            },
            extname: function(t) {
                n(t);
                for (var e = -1, r = 0, i = -1, o = !0, a = 0, s = t.length - 1; s >= 0; --s) {
                    var f = t.charCodeAt(s);
                    if (47 !== f)
                        -1 === i && (o = !1,
                        i = s + 1),
                        46 === f ? -1 === e ? e = s : 1 !== a && (a = 1) : -1 !== e && (a = -1);
                    else if (!o) {
                        r = s + 1;
                        break
                    }
                }
                return -1 === e || -1 === i || 0 === a || 1 === a && e === i - 1 && e === r + 1 ? "" : t.slice(e, i)
            },
            format: function(t) {
                if (null === t || "object" != typeof t)
                    throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
                return function(t, e) {
                    var r = e.dir || e.root
                      , n = e.base || (e.name || "") + (e.ext || "");
                    return r ? r === e.root ? r + n : r + t + n : n
                }("/", t)
            },
            parse: function(t) {
                n(t);
                var e = {
                    root: "",
                    dir: "",
                    base: "",
                    ext: "",
                    name: ""
                };
                if (0 === t.length)
                    return e;
                var r, i = t.charCodeAt(0), o = 47 === i;
                o ? (e.root = "/",
                r = 1) : r = 0;
                for (var a = -1, s = 0, f = -1, h = !0, u = t.length - 1, c = 0; u >= r; --u)
                    if (47 !== (i = t.charCodeAt(u)))
                        -1 === f && (h = !1,
                        f = u + 1),
                        46 === i ? -1 === a ? a = u : 1 !== c && (c = 1) : -1 !== a && (c = -1);
                    else if (!h) {
                        s = u + 1;
                        break
                    }
                return -1 === a || -1 === f || 0 === c || 1 === c && a === f - 1 && a === s + 1 ? -1 !== f && (e.base = e.name = 0 === s && o ? t.slice(1, f) : t.slice(s, f)) : (0 === s && o ? (e.name = t.slice(1, a),
                e.base = t.slice(1, f)) : (e.name = t.slice(s, a),
                e.base = t.slice(s, f)),
                e.ext = t.slice(a, f)),
                s > 0 ? e.dir = t.slice(0, s - 1) : o && (e.dir = "/"),
                e
            },
            sep: "/",
            delimiter: ":",
            win32: null,
            posix: null
        };
        a.posix = a,
        t.exports = a
    }
    )),
    o.register("4w6kb", (function(t, e) {}
    )),
    o.register("48PWR", (function(e, r) {
        var n, i, a, s, f, h, u, c, d, l, p, m, b, g, v, y, w, _, A, M, E, S, k, x, B, R, T, C, D, I, P, O, L, j, U, N, z, F, q;
        t(e.exports, "DiffieHellmanGroup", (()=>h), (t=>h = t)),
        t(e.exports, "privateEncrypt", (()=>x), (t=>x = t)),
        t(e.exports, "randomFillSync", (()=>i), (t=>i = t)),
        t(e.exports, "createCipheriv", (()=>_), (t=>_ = t)),
        t(e.exports, "Sign", (()=>j), (t=>j = t)),
        t(e.exports, "prng", (()=>f), (t=>f = t)),
        t(e.exports, "listCiphers", (()=>M), (t=>M = t)),
        t(e.exports, "publicDecrypt", (()=>c), (t=>c = t)),
        t(e.exports, "Hmac", (()=>R), (t=>R = t)),
        t(e.exports, "randomFill", (()=>S), (t=>S = t)),
        t(e.exports, "Verify", (()=>D), (t=>D = t)),
        t(e.exports, "createECDH", (()=>l), (t=>l = t)),
        t(e.exports, "createCredentials", (()=>T), (t=>T = t)),
        t(e.exports, "pbkdf2", (()=>g), (t=>g = t)),
        t(e.exports, "pbkdf2Sync", (()=>I), (t=>I = t)),
        t(e.exports, "Cipheriv", (()=>U), (t=>U = t)),
        t(e.exports, "createDiffieHellmanGroup", (()=>B), (t=>B = t)),
        t(e.exports, "privateDecrypt", (()=>a), (t=>a = t)),
        t(e.exports, "createHmac", (()=>C), (t=>C = t)),
        t(e.exports, "getDiffieHellman", (()=>u), (t=>u = t)),
        t(e.exports, "createDecipheriv", (()=>d), (t=>d = t)),
        t(e.exports, "createVerify", (()=>F), (t=>F = t)),
        t(e.exports, "constants", (()=>A), (t=>A = t)),
        t(e.exports, "randomBytes", (()=>O), (t=>O = t)),
        t(e.exports, "Decipheriv", (()=>L), (t=>L = t)),
        t(e.exports, "rng", (()=>E), (t=>E = t)),
        t(e.exports, "Hash", (()=>v), (t=>v = t)),
        t(e.exports, "getHashes", (()=>y), (t=>y = t)),
        t(e.exports, "DiffieHellman", (()=>z), (t=>z = t)),
        t(e.exports, "Decipher", (()=>k), (t=>k = t)),
        t(e.exports, "createDecipher", (()=>m), (t=>m = t)),
        t(e.exports, "Cipher", (()=>P), (t=>P = t)),
        t(e.exports, "createSign", (()=>q), (t=>q = t)),
        t(e.exports, "createCipher", (()=>b), (t=>b = t)),
        t(e.exports, "createDiffieHellman", (()=>w), (t=>w = t)),
        t(e.exports, "getCiphers", (()=>p), (t=>p = t)),
        t(e.exports, "createHash", (()=>N), (t=>N = t)),
        t(e.exports, "publicEncrypt", (()=>n), (t=>n = t)),
        t(e.exports, "pseudoRandomBytes", (()=>s), (t=>s = t)),
        O = E = s = f = o("6DQjm"),
        N = v = o("1O6Be"),
        C = R = o("3N3Qi");
        var Y = o("EFKRB")
          , H = Object.keys(Y)
          , W = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(H);
        y = function() {
            return W
        }
        ;
        var K = o("7kcyw");
        g = K.pbkdf2,
        I = K.pbkdf2Sync;
        var G = o("1YrPU");
        P = G.Cipher,
        b = G.createCipher,
        U = G.Cipheriv,
        _ = G.createCipheriv,
        k = G.Decipher,
        m = G.createDecipher,
        L = G.Decipheriv,
        d = G.createDecipheriv,
        p = G.getCiphers,
        M = G.listCiphers;
        var Z = o("7GgLc");
        h = Z.DiffieHellmanGroup,
        B = Z.createDiffieHellmanGroup,
        u = Z.getDiffieHellman,
        w = Z.createDiffieHellman,
        z = Z.DiffieHellman;
        var V = o("6Ta4n");
        q = V.createSign,
        j = V.Sign,
        F = V.createVerify,
        D = V.Verify,
        l = o("5nmn3");
        var X = o("3z2zV");
        n = X.publicEncrypt,
        x = X.privateEncrypt,
        c = X.publicDecrypt,
        a = X.privateDecrypt;
        var $ = o("6tbxE");
        S = $.randomFill,
        i = $.randomFillSync,
        T = function() {
            throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
        }
        ,
        A = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        }
    }
    )),
    o.register("6DQjm", (function(t, e) {
        var n = o("67ZL8")
          , i = 65536;
        var a = o("5Xfjk").Buffer
          , s = r.crypto || r.msCrypto;
        s && s.getRandomValues ? t.exports = function(t, e) {
            if (t > 4294967295)
                throw new RangeError("requested too many random bytes");
            var r = a.allocUnsafe(t);
            if (t > 0)
                if (t > i)
                    for (var o = 0; o < t; o += i)
                        s.getRandomValues(r.slice(o, o + i));
                else
                    s.getRandomValues(r);
            return "function" == typeof e ? n.nextTick((function() {
                e(null, r)
            }
            )) : r
        }
        : t.exports = function() {
            throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
        }
    }
    )),
    o.register("5Xfjk", (function(t, e) {
        var r = o("3tvKv")
          , n = r.Buffer;
        function i(t, e) {
            for (var r in t)
                e[r] = t[r]
        }
        function a(t, e, r) {
            return n(t, e, r)
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, t.exports),
        t.exports.Buffer = a),
        a.prototype = Object.create(n.prototype),
        i(n, a),
        a.from = function(t, e, r) {
            if ("number" == typeof t)
                throw new TypeError("Argument must not be a number");
            return n(t, e, r)
        }
        ,
        a.alloc = function(t, e, r) {
            if ("number" != typeof t)
                throw new TypeError("Argument must be a number");
            var i = n(t);
            return void 0 !== e ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0),
            i
        }
        ,
        a.allocUnsafe = function(t) {
            if ("number" != typeof t)
                throw new TypeError("Argument must be a number");
            return n(t)
        }
        ,
        a.allocUnsafeSlow = function(t) {
            if ("number" != typeof t)
                throw new TypeError("Argument must be a number");
            return r.SlowBuffer(t)
        }
    }
    )),
    o.register("1O6Be", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("6D5SR")
          , i = o("2Rz60")
          , a = o("5nQrl")
          , s = o("20tx4");
        function f(t) {
            s.call(this, "digest"),
            this._hash = t
        }
        r(f, s),
        f.prototype._update = function(t) {
            this._hash.update(t)
        }
        ,
        f.prototype._final = function() {
            return this._hash.digest()
        }
        ,
        t.exports = function(t) {
            return "md5" === (t = t.toLowerCase()) ? new n : "rmd160" === t || "ripemd160" === t ? new i : new f(a(t))
        }
    }
    )),
    o.register("1hy4s", (function(t, e) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            e && (t.super_ = e,
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : t.exports = function(t, e) {
            if (e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
        }
    }
    )),
    o.register("6D5SR", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("4ZpNB")
          , i = o("5Xfjk").Buffer
          , a = new Array(16);
        function s() {
            n.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878
        }
        function f(t, e) {
            return t << e | t >>> 32 - e
        }
        function h(t, e, r, n, i, o, a) {
            return f(t + (e & r | ~e & n) + i + o | 0, a) + e | 0
        }
        function u(t, e, r, n, i, o, a) {
            return f(t + (e & n | r & ~n) + i + o | 0, a) + e | 0
        }
        function c(t, e, r, n, i, o, a) {
            return f(t + (e ^ r ^ n) + i + o | 0, a) + e | 0
        }
        function d(t, e, r, n, i, o, a) {
            return f(t + (r ^ (e | ~n)) + i + o | 0, a) + e | 0
        }
        r(s, n),
        s.prototype._update = function() {
            for (var t = a, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(4 * e);
            var r = this._a
              , n = this._b
              , i = this._c
              , o = this._d;
            r = h(r, n, i, o, t[0], 3614090360, 7),
            o = h(o, r, n, i, t[1], 3905402710, 12),
            i = h(i, o, r, n, t[2], 606105819, 17),
            n = h(n, i, o, r, t[3], 3250441966, 22),
            r = h(r, n, i, o, t[4], 4118548399, 7),
            o = h(o, r, n, i, t[5], 1200080426, 12),
            i = h(i, o, r, n, t[6], 2821735955, 17),
            n = h(n, i, o, r, t[7], 4249261313, 22),
            r = h(r, n, i, o, t[8], 1770035416, 7),
            o = h(o, r, n, i, t[9], 2336552879, 12),
            i = h(i, o, r, n, t[10], 4294925233, 17),
            n = h(n, i, o, r, t[11], 2304563134, 22),
            r = h(r, n, i, o, t[12], 1804603682, 7),
            o = h(o, r, n, i, t[13], 4254626195, 12),
            i = h(i, o, r, n, t[14], 2792965006, 17),
            r = u(r, n = h(n, i, o, r, t[15], 1236535329, 22), i, o, t[1], 4129170786, 5),
            o = u(o, r, n, i, t[6], 3225465664, 9),
            i = u(i, o, r, n, t[11], 643717713, 14),
            n = u(n, i, o, r, t[0], 3921069994, 20),
            r = u(r, n, i, o, t[5], 3593408605, 5),
            o = u(o, r, n, i, t[10], 38016083, 9),
            i = u(i, o, r, n, t[15], 3634488961, 14),
            n = u(n, i, o, r, t[4], 3889429448, 20),
            r = u(r, n, i, o, t[9], 568446438, 5),
            o = u(o, r, n, i, t[14], 3275163606, 9),
            i = u(i, o, r, n, t[3], 4107603335, 14),
            n = u(n, i, o, r, t[8], 1163531501, 20),
            r = u(r, n, i, o, t[13], 2850285829, 5),
            o = u(o, r, n, i, t[2], 4243563512, 9),
            i = u(i, o, r, n, t[7], 1735328473, 14),
            r = c(r, n = u(n, i, o, r, t[12], 2368359562, 20), i, o, t[5], 4294588738, 4),
            o = c(o, r, n, i, t[8], 2272392833, 11),
            i = c(i, o, r, n, t[11], 1839030562, 16),
            n = c(n, i, o, r, t[14], 4259657740, 23),
            r = c(r, n, i, o, t[1], 2763975236, 4),
            o = c(o, r, n, i, t[4], 1272893353, 11),
            i = c(i, o, r, n, t[7], 4139469664, 16),
            n = c(n, i, o, r, t[10], 3200236656, 23),
            r = c(r, n, i, o, t[13], 681279174, 4),
            o = c(o, r, n, i, t[0], 3936430074, 11),
            i = c(i, o, r, n, t[3], 3572445317, 16),
            n = c(n, i, o, r, t[6], 76029189, 23),
            r = c(r, n, i, o, t[9], 3654602809, 4),
            o = c(o, r, n, i, t[12], 3873151461, 11),
            i = c(i, o, r, n, t[15], 530742520, 16),
            r = d(r, n = c(n, i, o, r, t[2], 3299628645, 23), i, o, t[0], 4096336452, 6),
            o = d(o, r, n, i, t[7], 1126891415, 10),
            i = d(i, o, r, n, t[14], 2878612391, 15),
            n = d(n, i, o, r, t[5], 4237533241, 21),
            r = d(r, n, i, o, t[12], 1700485571, 6),
            o = d(o, r, n, i, t[3], 2399980690, 10),
            i = d(i, o, r, n, t[10], 4293915773, 15),
            n = d(n, i, o, r, t[1], 2240044497, 21),
            r = d(r, n, i, o, t[8], 1873313359, 6),
            o = d(o, r, n, i, t[15], 4264355552, 10),
            i = d(i, o, r, n, t[6], 2734768916, 15),
            n = d(n, i, o, r, t[13], 1309151649, 21),
            r = d(r, n, i, o, t[4], 4149444226, 6),
            o = d(o, r, n, i, t[11], 3174756917, 10),
            i = d(i, o, r, n, t[2], 718787259, 15),
            n = d(n, i, o, r, t[9], 3951481745, 21),
            this._a = this._a + r | 0,
            this._b = this._b + n | 0,
            this._c = this._c + i | 0,
            this._d = this._d + o | 0
        }
        ,
        s.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = i.allocUnsafe(16);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
        }
        ,
        t.exports = s
    }
    )),
    o.register("4ZpNB", (function(t, e) {
        "use strict";
        var r = o("5Xfjk").Buffer
          , n = o("6pgpp").Transform;
        function i(t) {
            n.call(this),
            this._block = r.allocUnsafe(t),
            this._blockSize = t,
            this._blockOffset = 0,
            this._length = [0, 0, 0, 0],
            this._finalized = !1
        }
        o("1hy4s")(i, n),
        i.prototype._transform = function(t, e, r) {
            var n = null;
            try {
                this.update(t, e)
            } catch (t) {
                n = t
            }
            r(n)
        }
        ,
        i.prototype._flush = function(t) {
            var e = null;
            try {
                this.push(this.digest())
            } catch (t) {
                e = t
            }
            t(e)
        }
        ,
        i.prototype.update = function(t, e) {
            if (function(t, e) {
                if (!r.isBuffer(t) && "string" != typeof t)
                    throw new TypeError(e + " must be a string or a buffer")
            }(t, "Data"),
            this._finalized)
                throw new Error("Digest already called");
            r.isBuffer(t) || (t = r.from(t, e));
            for (var n = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize; ) {
                for (var o = this._blockOffset; o < this._blockSize; )
                    n[o++] = t[i++];
                this._update(),
                this._blockOffset = 0
            }
            for (; i < t.length; )
                n[this._blockOffset++] = t[i++];
            for (var a = 0, s = 8 * t.length; s > 0; ++a)
                this._length[a] += s,
                (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
            return this
        }
        ,
        i.prototype._update = function() {
            throw new Error("_update is not implemented")
        }
        ,
        i.prototype.digest = function(t) {
            if (this._finalized)
                throw new Error("Digest already called");
            this._finalized = !0;
            var e = this._digest();
            void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            this._blockOffset = 0;
            for (var r = 0; r < 4; ++r)
                this._length[r] = 0;
            return e
        }
        ,
        i.prototype._digest = function() {
            throw new Error("_digest is not implemented")
        }
        ,
        t.exports = i
    }
    )),
    o.register("6pgpp", (function(t, e) {
        (e = t.exports = o("3V2H5")).Stream = e,
        e.Readable = e,
        e.Writable = o("4VnTn"),
        e.Duplex = o("7g1aR"),
        e.Transform = o("7kLG5"),
        e.PassThrough = o("6JdhZ"),
        e.finished = o("4igKI"),
        e.pipeline = o("2FGSW")
    }
    )),
    o.register("3V2H5", (function(t, e) {
        var n, i = o("67ZL8");
        t.exports = k,
        k.ReadableState = S;
        o("1Q4w7").EventEmitter;
        var a = function(t, e) {
            return t.listeners(e).length
        }
          , s = o("dRYgb")
          , f = o("3tvKv").Buffer
          , h = r.Uint8Array || function() {}
        ;
        var u, c = o("4w6kb");
        u = c && c.debuglog ? c.debuglog("stream") : function() {}
        ;
        var d, l, p, m = o("12xgA"), b = o("247O5"), g = o("5XVI7").getHighWaterMark, v = o("3ggwF").codes, y = v.ERR_INVALID_ARG_TYPE, w = v.ERR_STREAM_PUSH_AFTER_EOF, _ = v.ERR_METHOD_NOT_IMPLEMENTED, A = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        o("1hy4s")(k, s);
        var M = b.errorOrDestroy
          , E = ["error", "close", "destroy", "pause", "resume"];
        function S(t, e, r) {
            n = n || o("7g1aR"),
            t = t || {},
            "boolean" != typeof r && (r = e instanceof n),
            this.objectMode = !!t.objectMode,
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            this.highWaterMark = g(this, t, "readableHighWaterMark", r),
            this.buffer = new m,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.paused = !0,
            this.emitClose = !1 !== t.emitClose,
            this.autoDestroy = !!t.autoDestroy,
            this.destroyed = !1,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            t.encoding && (d || (d = o("1ubTE").StringDecoder),
            this.decoder = new d(t.encoding),
            this.encoding = t.encoding)
        }
        function k(t) {
            if (n = n || o("7g1aR"),
            !(this instanceof k))
                return new k(t);
            var e = this instanceof n;
            this._readableState = new S(t,this,e),
            this.readable = !0,
            t && ("function" == typeof t.read && (this._read = t.read),
            "function" == typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this)
        }
        function x(t, e, r, n, i) {
            u("readableAddChunk", e);
            var o, a = t._readableState;
            if (null === e)
                a.reading = !1,
                function(t, e) {
                    if (u("onEofChunk"),
                    e.ended)
                        return;
                    if (e.decoder) {
                        var r = e.decoder.end();
                        r && r.length && (e.buffer.push(r),
                        e.length += e.objectMode ? 1 : r.length)
                    }
                    e.ended = !0,
                    e.sync ? C(t) : (e.needReadable = !1,
                    e.emittedReadable || (e.emittedReadable = !0,
                    D(t)))
                }(t, a);
            else if (i || (o = function(t, e) {
                var r;
                n = e,
                f.isBuffer(n) || n instanceof h || "string" == typeof e || void 0 === e || t.objectMode || (r = new y("chunk",["string", "Buffer", "Uint8Array"],e));
                var n;
                return r
            }(a, e)),
            o)
                M(t, o);
            else if (a.objectMode || e && e.length > 0)
                if ("string" == typeof e || a.objectMode || Object.getPrototypeOf(e) === f.prototype || (e = function(t) {
                    return f.from(t)
                }(e)),
                n)
                    a.endEmitted ? M(t, new A) : B(t, a, e, !0);
                else if (a.ended)
                    M(t, new w);
                else {
                    if (a.destroyed)
                        return !1;
                    a.reading = !1,
                    a.decoder && !r ? (e = a.decoder.write(e),
                    a.objectMode || 0 !== e.length ? B(t, a, e, !1) : I(t, a)) : B(t, a, e, !1)
                }
            else
                n || (a.reading = !1,
                I(t, a));
            return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
        }
        function B(t, e, r, n) {
            e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0,
            t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length,
            n ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && C(t)),
            I(t, e)
        }
        Object.defineProperty(k.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(t) {
                this._readableState && (this._readableState.destroyed = t)
            }
        }),
        k.prototype.destroy = b.destroy,
        k.prototype._undestroy = b.undestroy,
        k.prototype._destroy = function(t, e) {
            e(t)
        }
        ,
        k.prototype.push = function(t, e) {
            var r, n = this._readableState;
            return n.objectMode ? r = !0 : "string" == typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = f.from(t, e),
            e = ""),
            r = !0),
            x(this, t, e, !1, r)
        }
        ,
        k.prototype.unshift = function(t) {
            return x(this, t, null, !0, !1)
        }
        ,
        k.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        k.prototype.setEncoding = function(t) {
            d || (d = o("1ubTE").StringDecoder);
            var e = new d(t);
            this._readableState.decoder = e,
            this._readableState.encoding = this._readableState.decoder.encoding;
            for (var r = this._readableState.buffer.head, n = ""; null !== r; )
                n += e.write(r.data),
                r = r.next;
            return this._readableState.buffer.clear(),
            "" !== n && this._readableState.buffer.push(n),
            this._readableState.length = n.length,
            this
        }
        ;
        var R = 1073741824;
        function T(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                return t >= R ? t = R : (t--,
                t |= t >>> 1,
                t |= t >>> 2,
                t |= t >>> 4,
                t |= t >>> 8,
                t |= t >>> 16,
                t++),
                t
            }(t)),
            t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0,
            0))
        }
        function C(t) {
            var e = t._readableState;
            u("emitReadable", e.needReadable, e.emittedReadable),
            e.needReadable = !1,
            e.emittedReadable || (u("emitReadable", e.flowing),
            e.emittedReadable = !0,
            i.nextTick(D, t))
        }
        function D(t) {
            var e = t._readableState;
            u("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed || !e.length && !e.ended || (t.emit("readable"),
            e.emittedReadable = !1),
            e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark,
            U(t)
        }
        function I(t, e) {
            e.readingMore || (e.readingMore = !0,
            i.nextTick(P, t, e))
        }
        function P(t, e) {
            for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length); ) {
                var r = e.length;
                if (u("maybeReadMore read 0"),
                t.read(0),
                r === e.length)
                    break
            }
            e.readingMore = !1
        }
        function O(t) {
            var e = t._readableState;
            e.readableListening = t.listenerCount("readable") > 0,
            e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
        }
        function L(t) {
            u("readable nexttick read 0"),
            t.read(0)
        }
        function j(t, e) {
            u("resume", e.reading),
            e.reading || t.read(0),
            e.resumeScheduled = !1,
            t.emit("resume"),
            U(t),
            e.flowing && !e.reading && t.read(0)
        }
        function U(t) {
            var e = t._readableState;
            for (u("flow", e.flowing); e.flowing && null !== t.read(); )
                ;
        }
        function N(t, e) {
            return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length),
            e.buffer.clear()) : r = e.buffer.consume(t, e.decoder),
            r);
            var r
        }
        function z(t) {
            var e = t._readableState;
            u("endReadable", e.endEmitted),
            e.endEmitted || (e.ended = !0,
            i.nextTick(F, e, t))
        }
        function F(t, e) {
            if (u("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted && 0 === t.length && (t.endEmitted = !0,
            e.readable = !1,
            e.emit("end"),
            t.autoDestroy)) {
                var r = e._writableState;
                (!r || r.autoDestroy && r.finished) && e.destroy()
            }
        }
        function q(t, e) {
            for (var r = 0, n = t.length; r < n; r++)
                if (t[r] === e)
                    return r;
            return -1
        }
        k.prototype.read = function(t) {
            u("read", t),
            t = parseInt(t, 10);
            var e = this._readableState
              , r = t;
            if (0 !== t && (e.emittedReadable = !1),
            0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
                return u("read: emitReadable", e.length, e.ended),
                0 === e.length && e.ended ? z(this) : C(this),
                null;
            if (0 === (t = T(t, e)) && e.ended)
                return 0 === e.length && z(this),
                null;
            var n, i = e.needReadable;
            return u("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) && u("length less than watermark", i = !0),
            e.ended || e.reading ? u("reading or ended", i = !1) : i && (u("do read"),
            e.reading = !0,
            e.sync = !0,
            0 === e.length && (e.needReadable = !0),
            this._read(e.highWaterMark),
            e.sync = !1,
            e.reading || (t = T(r, e))),
            null === (n = t > 0 ? N(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark,
            t = 0) : (e.length -= t,
            e.awaitDrain = 0),
            0 === e.length && (e.ended || (e.needReadable = !0),
            r !== t && e.ended && z(this)),
            null !== n && this.emit("data", n),
            n
        }
        ,
        k.prototype._read = function(t) {
            M(this, new _("_read()"))
        }
        ,
        k.prototype.pipe = function(t, e) {
            var r = this
              , n = this._readableState;
            switch (n.pipesCount) {
            case 0:
                n.pipes = t;
                break;
            case 1:
                n.pipes = [n.pipes, t];
                break;
            default:
                n.pipes.push(t)
            }
            n.pipesCount += 1,
            u("pipe count=%d opts=%j", n.pipesCount, e);
            var o = (!e || !1 !== e.end) && t !== i.stdout && t !== i.stderr ? f : b;
            function s(e, i) {
                u("onunpipe"),
                e === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0,
                u("cleanup"),
                t.removeListener("close", p),
                t.removeListener("finish", m),
                t.removeListener("drain", h),
                t.removeListener("error", l),
                t.removeListener("unpipe", s),
                r.removeListener("end", f),
                r.removeListener("end", b),
                r.removeListener("data", d),
                c = !0,
                !n.awaitDrain || t._writableState && !t._writableState.needDrain || h())
            }
            function f() {
                u("onend"),
                t.end()
            }
            n.endEmitted ? i.nextTick(o) : r.once("end", o),
            t.on("unpipe", s);
            var h = function(t) {
                return function() {
                    var e = t._readableState;
                    u("pipeOnDrain", e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain && a(t, "data") && (e.flowing = !0,
                    U(t))
                }
            }(r);
            t.on("drain", h);
            var c = !1;
            function d(e) {
                u("ondata");
                var i = t.write(e);
                u("dest.write", i),
                !1 === i && ((1 === n.pipesCount && n.pipes === t || n.pipesCount > 1 && -1 !== q(n.pipes, t)) && !c && (u("false write response, pause", n.awaitDrain),
                n.awaitDrain++),
                r.pause())
            }
            function l(e) {
                u("onerror", e),
                b(),
                t.removeListener("error", l),
                0 === a(t, "error") && M(t, e)
            }
            function p() {
                t.removeListener("finish", m),
                b()
            }
            function m() {
                u("onfinish"),
                t.removeListener("close", p),
                b()
            }
            function b() {
                u("unpipe"),
                r.unpipe(t)
            }
            return r.on("data", d),
            function(t, e, r) {
                if ("function" == typeof t.prependListener)
                    return t.prependListener(e, r);
                t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
            }(t, "error", l),
            t.once("close", p),
            t.once("finish", m),
            t.emit("pipe", r),
            n.flowing || (u("pipe resume"),
            r.resume()),
            t
        }
        ,
        k.prototype.unpipe = function(t) {
            var e = this._readableState
              , r = {
                hasUnpiped: !1
            };
            if (0 === e.pipesCount)
                return this;
            if (1 === e.pipesCount)
                return t && t !== e.pipes || (t || (t = e.pipes),
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1,
                t && t.emit("unpipe", this, r)),
                this;
            if (!t) {
                var n = e.pipes
                  , i = e.pipesCount;
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1;
                for (var o = 0; o < i; o++)
                    n[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                return this
            }
            var a = q(e.pipes, t);
            return -1 === a || (e.pipes.splice(a, 1),
            e.pipesCount -= 1,
            1 === e.pipesCount && (e.pipes = e.pipes[0]),
            t.emit("unpipe", this, r)),
            this
        }
        ,
        k.prototype.on = function(t, e) {
            var r = s.prototype.on.call(this, t, e)
              , n = this._readableState;
            return "data" === t ? (n.readableListening = this.listenerCount("readable") > 0,
            !1 !== n.flowing && this.resume()) : "readable" === t && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
            n.flowing = !1,
            n.emittedReadable = !1,
            u("on readable", n.length, n.reading),
            n.length ? C(this) : n.reading || i.nextTick(L, this))),
            r
        }
        ,
        k.prototype.addListener = k.prototype.on,
        k.prototype.removeListener = function(t, e) {
            var r = s.prototype.removeListener.call(this, t, e);
            return "readable" === t && i.nextTick(O, this),
            r
        }
        ,
        k.prototype.removeAllListeners = function(t) {
            var e = s.prototype.removeAllListeners.apply(this, arguments);
            return "readable" !== t && void 0 !== t || i.nextTick(O, this),
            e
        }
        ,
        k.prototype.resume = function() {
            var t = this._readableState;
            return t.flowing || (u("resume"),
            t.flowing = !t.readableListening,
            function(t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0,
                i.nextTick(j, t, e))
            }(this, t)),
            t.paused = !1,
            this
        }
        ,
        k.prototype.pause = function() {
            return u("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (u("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this._readableState.paused = !0,
            this
        }
        ,
        k.prototype.wrap = function(t) {
            var e = this
              , r = this._readableState
              , n = !1;
            for (var i in t.on("end", (function() {
                if (u("wrapped end"),
                r.decoder && !r.ended) {
                    var t = r.decoder.end();
                    t && t.length && e.push(t)
                }
                e.push(null)
            }
            )),
            t.on("data", (function(i) {
                (u("wrapped data"),
                r.decoder && (i = r.decoder.write(i)),
                r.objectMode && null == i) || (r.objectMode || i && i.length) && (e.push(i) || (n = !0,
                t.pause()))
            }
            )),
            t)
                void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(i));
            for (var o = 0; o < E.length; o++)
                t.on(E[o], this.emit.bind(this, E[o]));
            return this._read = function(e) {
                u("wrapped _read", e),
                n && (n = !1,
                t.resume())
            }
            ,
            this
        }
        ,
        "function" == typeof Symbol && (k.prototype[Symbol.asyncIterator] = function() {
            return void 0 === l && (l = o("3pkSN")),
            l(this)
        }
        ),
        Object.defineProperty(k.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        Object.defineProperty(k.prototype, "readableBuffer", {
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer
            }
        }),
        Object.defineProperty(k.prototype, "readableFlowing", {
            enumerable: !1,
            get: function() {
                return this._readableState.flowing
            },
            set: function(t) {
                this._readableState && (this._readableState.flowing = t)
            }
        }),
        k._fromList = N,
        Object.defineProperty(k.prototype, "readableLength", {
            enumerable: !1,
            get: function() {
                return this._readableState.length
            }
        }),
        "function" == typeof Symbol && (k.from = function(t, e) {
            return void 0 === p && (p = o("5OO4U")),
            p(k, t, e)
        }
        )
    }
    )),
    o.register("1Q4w7", (function(t, e) {
        "use strict";
        var r, n = "object" == typeof Reflect ? Reflect : null, i = n && "function" == typeof n.apply ? n.apply : function(t, e, r) {
            return Function.prototype.apply.call(t, e, r)
        }
        ;
        r = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(t) {
            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
        }
        : function(t) {
            return Object.getOwnPropertyNames(t)
        }
        ;
        var o = Number.isNaN || function(t) {
            return t != t
        }
        ;
        function a() {
            a.init.call(this)
        }
        t.exports = a,
        t.exports.once = function(t, e) {
            return new Promise((function(r, n) {
                function i(r) {
                    t.removeListener(e, o),
                    n(r)
                }
                function o() {
                    "function" == typeof t.removeListener && t.removeListener("error", i),
                    r([].slice.call(arguments))
                }
                b(t, e, o, {
                    once: !0
                }),
                "error" !== e && function(t, e, r) {
                    "function" == typeof t.on && b(t, "error", e, r)
                }(t, i, {
                    once: !0
                })
            }
            ))
        }
        ,
        a.EventEmitter = a,
        a.prototype._events = void 0,
        a.prototype._eventsCount = 0,
        a.prototype._maxListeners = void 0;
        var s = 10;
        function f(t) {
            if ("function" != typeof t)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
        }
        function h(t) {
            return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners
        }
        function u(t, e, r, n) {
            var i, o, a, s;
            if (f(r),
            void 0 === (o = t._events) ? (o = t._events = Object.create(null),
            t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r),
            o = t._events),
            a = o[e]),
            void 0 === a)
                a = o[e] = r,
                ++t._eventsCount;
            else if ("function" == typeof a ? a = o[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r),
            (i = h(t)) > 0 && a.length > i && !a.warned) {
                a.warned = !0;
                var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning",
                u.emitter = t,
                u.type = e,
                u.count = a.length,
                s = u,
                console && console.warn && console.warn(s)
            }
            return t
        }
        function c() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function d(t, e, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            }
              , i = c.bind(n);
            return i.listener = r,
            n.wrapFn = i,
            i
        }
        function l(t, e, r) {
            var n = t._events;
            if (void 0 === n)
                return [];
            var i = n[e];
            return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(t) {
                for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                    e[r] = t[r].listener || t[r];
                return e
            }(i) : m(i, i.length)
        }
        function p(t) {
            var e = this._events;
            if (void 0 !== e) {
                var r = e[t];
                if ("function" == typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function m(t, e) {
            for (var r = new Array(e), n = 0; n < e; ++n)
                r[n] = t[n];
            return r
        }
        function b(t, e, r, n) {
            if ("function" == typeof t.on)
                n.once ? t.once(e, r) : t.on(e, r);
            else {
                if ("function" != typeof t.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                t.addEventListener(e, (function i(o) {
                    n.once && t.removeEventListener(e, i),
                    r(o)
                }
                ))
            }
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(t) {
                if ("number" != typeof t || t < 0 || o(t))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                s = t
            }
        }),
        a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        a.prototype.setMaxListeners = function(t) {
            if ("number" != typeof t || t < 0 || o(t))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
            return this._maxListeners = t,
            this
        }
        ,
        a.prototype.getMaxListeners = function() {
            return h(this)
        }
        ,
        a.prototype.emit = function(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e.push(arguments[r]);
            var n = "error" === t
              , o = this._events;
            if (void 0 !== o)
                n = n && void 0 === o.error;
            else if (!n)
                return !1;
            if (n) {
                var a;
                if (e.length > 0 && (a = e[0]),
                a instanceof Error)
                    throw a;
                var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                throw s.context = a,
                s
            }
            var f = o[t];
            if (void 0 === f)
                return !1;
            if ("function" == typeof f)
                i(f, this, e);
            else {
                var h = f.length
                  , u = m(f, h);
                for (r = 0; r < h; ++r)
                    i(u[r], this, e)
            }
            return !0
        }
        ,
        a.prototype.addListener = function(t, e) {
            return u(this, t, e, !1)
        }
        ,
        a.prototype.on = a.prototype.addListener,
        a.prototype.prependListener = function(t, e) {
            return u(this, t, e, !0)
        }
        ,
        a.prototype.once = function(t, e) {
            return f(e),
            this.on(t, d(this, t, e)),
            this
        }
        ,
        a.prototype.prependOnceListener = function(t, e) {
            return f(e),
            this.prependListener(t, d(this, t, e)),
            this
        }
        ,
        a.prototype.removeListener = function(t, e) {
            var r, n, i, o, a;
            if (f(e),
            void 0 === (n = this._events))
                return this;
            if (void 0 === (r = n[t]))
                return this;
            if (r === e || r.listener === e)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t],
                n.removeListener && this.emit("removeListener", t, r.listener || e));
            else if ("function" != typeof r) {
                for (i = -1,
                o = r.length - 1; o >= 0; o--)
                    if (r[o] === e || r[o].listener === e) {
                        a = r[o].listener,
                        i = o;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? r.shift() : function(t, e) {
                    for (; e + 1 < t.length; e++)
                        t[e] = t[e + 1];
                    t.pop()
                }(r, i),
                1 === r.length && (n[t] = r[0]),
                void 0 !== n.removeListener && this.emit("removeListener", t, a || e)
            }
            return this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.removeAllListeners = function(t) {
            var e, r, n;
            if (void 0 === (r = this._events))
                return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]),
                this;
            if (0 === arguments.length) {
                var i, o = Object.keys(r);
                for (n = 0; n < o.length; ++n)
                    "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (e = r[t]))
                this.removeListener(t, e);
            else if (void 0 !== e)
                for (n = e.length - 1; n >= 0; n--)
                    this.removeListener(t, e[n]);
            return this
        }
        ,
        a.prototype.listeners = function(t) {
            return l(this, t, !0)
        }
        ,
        a.prototype.rawListeners = function(t) {
            return l(this, t, !1)
        }
        ,
        a.listenerCount = function(t, e) {
            return "function" == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
        }
        ,
        a.prototype.listenerCount = p,
        a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? r(this._events) : []
        }
    }
    )),
    o.register("dRYgb", (function(t, e) {
        t.exports = o("1Q4w7").EventEmitter
    }
    )),
    o.register("12xgA", (function(t, e) {
        "use strict";
        function r(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function n(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function i(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var a = o("3tvKv").Buffer
          , s = o("4w6kb").inspect
          , f = s && s.custom || "inspect";
        t.exports = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            var e, o, h;
            return e = t,
            (o = [{
                key: "push",
                value: function(t) {
                    var e = {
                        data: t,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = e : this.head = e,
                    this.tail = e,
                    ++this.length
                }
            }, {
                key: "unshift",
                value: function(t) {
                    var e = {
                        data: t,
                        next: this.head
                    };
                    0 === this.length && (this.tail = e),
                    this.head = e,
                    ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var t = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        t
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null,
                    this.length = 0
                }
            }, {
                key: "join",
                value: function(t) {
                    if (0 === this.length)
                        return "";
                    for (var e = this.head, r = "" + e.data; e = e.next; )
                        r += t + e.data;
                    return r
                }
            }, {
                key: "concat",
                value: function(t) {
                    if (0 === this.length)
                        return a.alloc(0);
                    for (var e, r, n, i = a.allocUnsafe(t >>> 0), o = this.head, s = 0; o; )
                        e = o.data,
                        r = i,
                        n = s,
                        a.prototype.copy.call(e, r, n),
                        s += o.data.length,
                        o = o.next;
                    return i
                }
            }, {
                key: "consume",
                value: function(t, e) {
                    var r;
                    return t < this.head.data.length ? (r = this.head.data.slice(0, t),
                    this.head.data = this.head.data.slice(t)) : r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t),
                    r
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(t) {
                    var e = this.head
                      , r = 1
                      , n = e.data;
                    for (t -= n.length; e = e.next; ) {
                        var i = e.data
                          , o = t > i.length ? i.length : t;
                        if (o === i.length ? n += i : n += i.slice(0, t),
                        0 == (t -= o)) {
                            o === i.length ? (++r,
                            e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e,
                            e.data = i.slice(o));
                            break
                        }
                        ++r
                    }
                    return this.length -= r,
                    n
                }
            }, {
                key: "_getBuffer",
                value: function(t) {
                    var e = a.allocUnsafe(t)
                      , r = this.head
                      , n = 1;
                    for (r.data.copy(e),
                    t -= r.data.length; r = r.next; ) {
                        var i = r.data
                          , o = t > i.length ? i.length : t;
                        if (i.copy(e, e.length - t, 0, o),
                        0 == (t -= o)) {
                            o === i.length ? (++n,
                            r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r,
                            r.data = i.slice(o));
                            break
                        }
                        ++n
                    }
                    return this.length -= n,
                    e
                }
            }, {
                key: f,
                value: function(t, e) {
                    return s(this, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? r(Object(i), !0).forEach((function(e) {
                                n(t, e, i[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }
                            ))
                        }
                        return t
                    }({}, e, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]) && i(e.prototype, o),
            h && i(e, h),
            t
        }()
    }
    )),
    o.register("247O5", (function(t, e) {
        var r = o("67ZL8");
        function n(t, e) {
            a(t, e),
            i(t)
        }
        function i(t) {
            t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
        }
        function a(t, e) {
            t.emit("error", e)
        }
        t.exports = {
            destroy: function(t, e) {
                var o = this
                  , s = this._readableState && this._readableState.destroyed
                  , f = this._writableState && this._writableState.destroyed;
                return s || f ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                r.nextTick(a, this, t)) : r.nextTick(a, this, t)),
                this) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, (function(t) {
                    !e && t ? o._writableState ? o._writableState.errorEmitted ? r.nextTick(i, o) : (o._writableState.errorEmitted = !0,
                    r.nextTick(n, o, t)) : r.nextTick(n, o, t) : e ? (r.nextTick(i, o),
                    e(t)) : r.nextTick(i, o)
                }
                )),
                this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
                this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finalCalled = !1,
                this._writableState.prefinished = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
            },
            errorOrDestroy: function(t, e) {
                var r = t._readableState
                  , n = t._writableState;
                r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e)
            }
        }
    }
    )),
    o.register("5XVI7", (function(t, e) {
        "use strict";
        var r = o("3ggwF").codes.ERR_INVALID_OPT_VALUE;
        t.exports = {
            getHighWaterMark: function(t, e, n, i) {
                var o = function(t, e, r) {
                    return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null
                }(e, i, n);
                if (null != o) {
                    if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                        throw new r(i ? n : "highWaterMark",o);
                    return Math.floor(o)
                }
                return t.objectMode ? 16 : 16384
            }
        }
    }
    )),
    o.register("3ggwF", (function(e, r) {
        var n;
        t(e.exports, "codes", (()=>n), (t=>n = t));
        var i = {};
        function o(t, e, r) {
            r || (r = Error);
            var n = function(t) {
                var r, n;
                function i(r, n, i) {
                    return t.call(this, function(t, r, n) {
                        return "string" == typeof e ? e : e(t, r, n)
                    }(r, n, i)) || this
                }
                return n = t,
                (r = i).prototype = Object.create(n.prototype),
                r.prototype.constructor = r,
                r.__proto__ = n,
                i
            }(r);
            n.prototype.name = r.name,
            n.prototype.code = t,
            i[t] = n
        }
        function a(t, e) {
            if (Array.isArray(t)) {
                var r = t.length;
                return t = t.map((function(t) {
                    return String(t)
                }
                )),
                r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
            }
            return "of ".concat(e, " ").concat(String(t))
        }
        o("ERR_INVALID_OPT_VALUE", (function(t, e) {
            return 'The value "' + e + '" is invalid for option "' + t + '"'
        }
        ), TypeError),
        o("ERR_INVALID_ARG_TYPE", (function(t, e, r) {
            var n, i, o, s;
            if ("string" == typeof e && (i = "not ",
            e.substr(!o || o < 0 ? 0 : +o, i.length) === i) ? (n = "must not be",
            e = e.replace(/^not /, "")) : n = "must be",
            function(t, e, r) {
                return (void 0 === r || r > t.length) && (r = t.length),
                t.substring(r - e.length, r) === e
            }(t, " argument"))
                s = "The ".concat(t, " ").concat(n, " ").concat(a(e, "type"));
            else {
                var f = function(t, e, r) {
                    return "number" != typeof r && (r = 0),
                    !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                }(t, ".") ? "property" : "argument";
                s = 'The "'.concat(t, '" ').concat(f, " ").concat(n, " ").concat(a(e, "type"))
            }
            return s += ". Received type ".concat(typeof r)
        }
        ), TypeError),
        o("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        o("ERR_METHOD_NOT_IMPLEMENTED", (function(t) {
            return "The " + t + " method is not implemented"
        }
        )),
        o("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        o("ERR_STREAM_DESTROYED", (function(t) {
            return "Cannot call " + t + " after a stream was destroyed"
        }
        )),
        o("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        o("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        o("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        o("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        o("ERR_UNKNOWN_ENCODING", (function(t) {
            return "Unknown encoding: " + t
        }
        ), TypeError),
        o("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        n = i
    }
    )),
    o.register("7g1aR", (function(t, e) {
        var r = o("67ZL8")
          , n = Object.keys || function(t) {
            var e = [];
            for (var r in t)
                e.push(r);
            return e
        }
        ;
        t.exports = u;
        var i = o("3V2H5")
          , a = o("4VnTn");
        o("1hy4s")(u, i);
        for (var s = n(a.prototype), f = 0; f < s.length; f++) {
            var h = s[f];
            u.prototype[h] || (u.prototype[h] = a.prototype[h])
        }
        function u(t) {
            if (!(this instanceof u))
                return new u(t);
            i.call(this, t),
            a.call(this, t),
            this.allowHalfOpen = !0,
            t && (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen && (this.allowHalfOpen = !1,
            this.once("end", c)))
        }
        function c() {
            this._writableState.ended || r.nextTick(d, this)
        }
        function d(t) {
            t.end()
        }
        Object.defineProperty(u.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        Object.defineProperty(u.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(u.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }),
        Object.defineProperty(u.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(t) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t,
                this._writableState.destroyed = t)
            }
        })
    }
    )),
    o.register("4VnTn", (function(t, e) {
        var n, i = o("67ZL8");
        function a(t) {
            var e = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(t, e, r) {
                    var n = t.entry;
                    t.entry = null;
                    for (; n; ) {
                        var i = n.callback;
                        e.pendingcb--,
                        i(r),
                        n = n.next
                    }
                    e.corkedRequestsFree.next = t
                }(e, t)
            }
        }
        t.exports = k,
        k.WritableState = S;
        var s = {
            deprecate: o("66MZ1")
        }
          , f = o("dRYgb")
          , h = o("3tvKv").Buffer
          , u = r.Uint8Array || function() {}
        ;
        var c, d = o("247O5"), l = o("5XVI7").getHighWaterMark, p = o("3ggwF").codes, m = p.ERR_INVALID_ARG_TYPE, b = p.ERR_METHOD_NOT_IMPLEMENTED, g = p.ERR_MULTIPLE_CALLBACK, v = p.ERR_STREAM_CANNOT_PIPE, y = p.ERR_STREAM_DESTROYED, w = p.ERR_STREAM_NULL_VALUES, _ = p.ERR_STREAM_WRITE_AFTER_END, A = p.ERR_UNKNOWN_ENCODING, M = d.errorOrDestroy;
        function E() {}
        function S(t, e, r) {
            n = n || o("7g1aR"),
            t = t || {},
            "boolean" != typeof r && (r = e instanceof n),
            this.objectMode = !!t.objectMode,
            r && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            this.highWaterMark = l(this, t, "writableHighWaterMark", r),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var s = !1 === t.decodeStrings;
            this.decodeStrings = !s,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(t) {
                !function(t, e) {
                    var r = t._writableState
                      , n = r.sync
                      , o = r.writecb;
                    if ("function" != typeof o)
                        throw new g;
                    if (function(t) {
                        t.writing = !1,
                        t.writecb = null,
                        t.length -= t.writelen,
                        t.writelen = 0
                    }(r),
                    e)
                        !function(t, e, r, n, o) {
                            --e.pendingcb,
                            r ? (i.nextTick(o, n),
                            i.nextTick(D, t, e),
                            t._writableState.errorEmitted = !0,
                            M(t, n)) : (o(n),
                            t._writableState.errorEmitted = !0,
                            M(t, n),
                            D(t, e))
                        }(t, r, n, e, o);
                    else {
                        var a = T(r) || t.destroyed;
                        a || r.corked || r.bufferProcessing || !r.bufferedRequest || R(t, r),
                        n ? i.nextTick(B, t, r, a, o) : B(t, r, a, o)
                    }
                }(e, t)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.emitClose = !1 !== t.emitClose,
            this.autoDestroy = !!t.autoDestroy,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new a(this)
        }
        function k(t) {
            var e = this instanceof (n = n || o("7g1aR"));
            if (!e && !c.call(k, this))
                return new k(t);
            this._writableState = new S(t,this,e),
            this.writable = !0,
            t && ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
            f.call(this)
        }
        function x(t, e, r, n, i, o, a) {
            e.writelen = n,
            e.writecb = a,
            e.writing = !0,
            e.sync = !0,
            e.destroyed ? e.onwrite(new y("write")) : r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
            e.sync = !1
        }
        function B(t, e, r, n) {
            r || function(t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1,
                t.emit("drain"))
            }(t, e),
            e.pendingcb--,
            n(),
            D(t, e)
        }
        function R(t, e) {
            e.bufferProcessing = !0;
            var r = e.bufferedRequest;
            if (t._writev && r && r.next) {
                var n = e.bufferedRequestCount
                  , i = new Array(n)
                  , o = e.corkedRequestsFree;
                o.entry = r;
                for (var s = 0, f = !0; r; )
                    i[s] = r,
                    r.isBuf || (f = !1),
                    r = r.next,
                    s += 1;
                i.allBuffers = f,
                x(t, e, !0, e.length, i, "", o.finish),
                e.pendingcb++,
                e.lastBufferedRequest = null,
                o.next ? (e.corkedRequestsFree = o.next,
                o.next = null) : e.corkedRequestsFree = new a(e),
                e.bufferedRequestCount = 0
            } else {
                for (; r; ) {
                    var h = r.chunk
                      , u = r.encoding
                      , c = r.callback;
                    if (x(t, e, !1, e.objectMode ? 1 : h.length, h, u, c),
                    r = r.next,
                    e.bufferedRequestCount--,
                    e.writing)
                        break
                }
                null === r && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = r,
            e.bufferProcessing = !1
        }
        function T(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }
        function C(t, e) {
            t._final((function(r) {
                e.pendingcb--,
                r && M(t, r),
                e.prefinished = !0,
                t.emit("prefinish"),
                D(t, e)
            }
            ))
        }
        function D(t, e) {
            var r = T(e);
            if (r && (function(t, e) {
                e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? (e.prefinished = !0,
                t.emit("prefinish")) : (e.pendingcb++,
                e.finalCalled = !0,
                i.nextTick(C, t, e)))
            }(t, e),
            0 === e.pendingcb && (e.finished = !0,
            t.emit("finish"),
            e.autoDestroy))) {
                var n = t._readableState;
                (!n || n.autoDestroy && n.endEmitted) && t.destroy()
            }
            return r
        }
        o("1hy4s")(k, f),
        S.prototype.getBuffer = function() {
            for (var t = this.bufferedRequest, e = []; t; )
                e.push(t),
                t = t.next;
            return e
        }
        ,
        function() {
            try {
                Object.defineProperty(S.prototype, "buffer", {
                    get: s.deprecate((function() {
                        return this.getBuffer()
                    }
                    ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (t) {}
        }(),
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(k, Symbol.hasInstance, {
            value: function(t) {
                return !!c.call(this, t) || this === k && (t && t._writableState instanceof S)
            }
        })) : c = function(t) {
            return t instanceof this
        }
        ,
        k.prototype.pipe = function() {
            M(this, new v)
        }
        ,
        k.prototype.write = function(t, e, r) {
            var n, o = this._writableState, a = !1, s = !o.objectMode && (n = t,
            h.isBuffer(n) || n instanceof u);
            return s && !h.isBuffer(t) && (t = function(t) {
                return h.from(t)
            }(t)),
            "function" == typeof e && (r = e,
            e = null),
            s ? e = "buffer" : e || (e = o.defaultEncoding),
            "function" != typeof r && (r = E),
            o.ending ? function(t, e) {
                var r = new _;
                M(t, r),
                i.nextTick(e, r)
            }(this, r) : (s || function(t, e, r, n) {
                var o;
                return null === r ? o = new w : "string" == typeof r || e.objectMode || (o = new m("chunk",["string", "Buffer"],r)),
                !o || (M(t, o),
                i.nextTick(n, o),
                !1)
            }(this, o, t, r)) && (o.pendingcb++,
            a = function(t, e, r, n, i, o) {
                if (!r) {
                    var a = function(t, e, r) {
                        t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = h.from(e, r));
                        return e
                    }(e, n, i);
                    n !== a && (r = !0,
                    i = "buffer",
                    n = a)
                }
                var s = e.objectMode ? 1 : n.length;
                e.length += s;
                var f = e.length < e.highWaterMark;
                f || (e.needDrain = !0);
                if (e.writing || e.corked) {
                    var u = e.lastBufferedRequest;
                    e.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null
                    },
                    u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest,
                    e.bufferedRequestCount += 1
                } else
                    x(t, e, !1, s, n, i, o);
                return f
            }(this, o, s, t, e, r)),
            a
        }
        ,
        k.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        k.prototype.uncork = function() {
            var t = this._writableState;
            t.corked && (t.corked--,
            t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || R(this, t))
        }
        ,
        k.prototype.setDefaultEncoding = function(t) {
            if ("string" == typeof t && (t = t.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1))
                throw new A(t);
            return this._writableState.defaultEncoding = t,
            this
        }
        ,
        Object.defineProperty(k.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(k.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        k.prototype._write = function(t, e, r) {
            r(new b("_write()"))
        }
        ,
        k.prototype._writev = null,
        k.prototype.end = function(t, e, r) {
            var n = this._writableState;
            return "function" == typeof t ? (r = t,
            t = null,
            e = null) : "function" == typeof e && (r = e,
            e = null),
            null != t && this.write(t, e),
            n.corked && (n.corked = 1,
            this.uncork()),
            n.ending || function(t, e, r) {
                e.ending = !0,
                D(t, e),
                r && (e.finished ? i.nextTick(r) : t.once("finish", r));
                e.ended = !0,
                t.writable = !1
            }(this, n, r),
            this
        }
        ,
        Object.defineProperty(k.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }),
        Object.defineProperty(k.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(t) {
                this._writableState && (this._writableState.destroyed = t)
            }
        }),
        k.prototype.destroy = d.destroy,
        k.prototype._undestroy = d.undestroy,
        k.prototype._destroy = function(t, e) {
            e(t)
        }
    }
    )),
    o.register("66MZ1", (function(t, e) {
        function n(t) {
            try {
                if (!r.localStorage)
                    return !1
            } catch (t) {
                return !1
            }
            var e = r.localStorage[t];
            return null != e && "true" === String(e).toLowerCase()
        }
        t.exports = function(t, e) {
            if (n("noDeprecation"))
                return t;
            var r = !1;
            return function() {
                if (!r) {
                    if (n("throwDeprecation"))
                        throw new Error(e);
                    n("traceDeprecation") ? console.trace(e) : console.warn(e),
                    r = !0
                }
                return t.apply(this, arguments)
            }
        }
    }
    )),
    o.register("1ubTE", (function(e, r) {
        var n;
        t(e.exports, "StringDecoder", (()=>n), (t=>n = t));
        var i = o("5Xfjk").Buffer
          , a = i.isEncoding || function(t) {
            switch ((t = "" + t) && t.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function s(t) {
            var e;
            switch (this.encoding = function(t) {
                var e = function(t) {
                    if (!t)
                        return "utf8";
                    for (var e; ; )
                        switch (t) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return t;
                        default:
                            if (e)
                                return;
                            t = ("" + t).toLowerCase(),
                            e = !0
                        }
                }(t);
                if ("string" != typeof e && (i.isEncoding === a || !a(t)))
                    throw new Error("Unknown encoding: " + t);
                return e || t
            }(t),
            this.encoding) {
            case "utf16le":
                this.text = u,
                this.end = c,
                e = 4;
                break;
            case "utf8":
                this.fillLast = h,
                e = 4;
                break;
            case "base64":
                this.text = d,
                this.end = l,
                e = 3;
                break;
            default:
                return this.write = p,
                void (this.end = m)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = i.allocUnsafe(e)
        }
        function f(t) {
            return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
        }
        function h(t) {
            var e = this.lastTotal - this.lastNeed
              , r = function(t, e, r) {
                if (128 != (192 & e[0]))
                    return t.lastNeed = 0,
                    "�";
                if (t.lastNeed > 1 && e.length > 1) {
                    if (128 != (192 & e[1]))
                        return t.lastNeed = 1,
                        "�";
                    if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                        return t.lastNeed = 2,
                        "�"
                }
            }(this, t);
            return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length))
        }
        function u(t, e) {
            if ((t.length - e) % 2 == 0) {
                var r = t.toString("utf16le", e);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = t[t.length - 2],
                        this.lastChar[1] = t[t.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = t[t.length - 1],
            t.toString("utf16le", e, t.length - 1)
        }
        function c(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return e + this.lastChar.toString("utf16le", 0, r)
            }
            return e
        }
        function d(t, e) {
            var r = (t.length - e) % 3;
            return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2],
            this.lastChar[1] = t[t.length - 1]),
            t.toString("base64", e, t.length - r))
        }
        function l(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
        }
        function p(t) {
            return t.toString(this.encoding)
        }
        function m(t) {
            return t && t.length ? this.write(t) : ""
        }
        n = s,
        s.prototype.write = function(t) {
            if (0 === t.length)
                return "";
            var e, r;
            if (this.lastNeed) {
                if (void 0 === (e = this.fillLast(t)))
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
        }
        ,
        s.prototype.end = function(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + "�" : e
        }
        ,
        s.prototype.text = function(t, e) {
            var r = function(t, e, r) {
                var n = e.length - 1;
                if (n < r)
                    return 0;
                var i = f(e[n]);
                if (i >= 0)
                    return i > 0 && (t.lastNeed = i - 1),
                    i;
                if (--n < r || -2 === i)
                    return 0;
                if ((i = f(e[n])) >= 0)
                    return i > 0 && (t.lastNeed = i - 2),
                    i;
                if (--n < r || -2 === i)
                    return 0;
                if ((i = f(e[n])) >= 0)
                    return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3),
                    i;
                return 0
            }(this, t, e);
            if (!this.lastNeed)
                return t.toString("utf8", e);
            this.lastTotal = r;
            var n = t.length - (r - this.lastNeed);
            return t.copy(this.lastChar, 0, n),
            t.toString("utf8", e, n)
        }
        ,
        s.prototype.fillLast = function(t) {
            if (this.lastNeed <= t.length)
                return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            this.lastNeed -= t.length
        }
    }
    )),
    o.register("3pkSN", (function(t, e) {
        var r, n = o("67ZL8");
        function i(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var a = o("4igKI")
          , s = Symbol("lastResolve")
          , f = Symbol("lastReject")
          , h = Symbol("error")
          , u = Symbol("ended")
          , c = Symbol("lastPromise")
          , d = Symbol("handlePromise")
          , l = Symbol("stream");
        function p(t, e) {
            return {
                value: t,
                done: e
            }
        }
        function m(t) {
            var e = t[s];
            if (null !== e) {
                var r = t[l].read();
                null !== r && (t[c] = null,
                t[s] = null,
                t[f] = null,
                e(p(r, !1)))
            }
        }
        function b(t) {
            n.nextTick(m, t)
        }
        var g = Object.getPrototypeOf((function() {}
        ))
          , v = Object.setPrototypeOf((i(r = {
            get stream() {
                return this[l]
            },
            next: function() {
                var t = this
                  , e = this[h];
                if (null !== e)
                    return Promise.reject(e);
                if (this[u])
                    return Promise.resolve(p(void 0, !0));
                if (this[l].destroyed)
                    return new Promise((function(e, r) {
                        n.nextTick((function() {
                            t[h] ? r(t[h]) : e(p(void 0, !0))
                        }
                        ))
                    }
                    ));
                var r, i = this[c];
                if (i)
                    r = new Promise(function(t, e) {
                        return function(r, n) {
                            t.then((function() {
                                e[u] ? r(p(void 0, !0)) : e[d](r, n)
                            }
                            ), n)
                        }
                    }(i, this));
                else {
                    var o = this[l].read();
                    if (null !== o)
                        return Promise.resolve(p(o, !1));
                    r = new Promise(this[d])
                }
                return this[c] = r,
                r
            }
        }, Symbol.asyncIterator, (function() {
            return this
        }
        )),
        i(r, "return", (function() {
            var t = this;
            return new Promise((function(e, r) {
                t[l].destroy(null, (function(t) {
                    t ? r(t) : e(p(void 0, !0))
                }
                ))
            }
            ))
        }
        )),
        r), g);
        t.exports = function(t) {
            var e, r = Object.create(v, (i(e = {}, l, {
                value: t,
                writable: !0
            }),
            i(e, s, {
                value: null,
                writable: !0
            }),
            i(e, f, {
                value: null,
                writable: !0
            }),
            i(e, h, {
                value: null,
                writable: !0
            }),
            i(e, u, {
                value: t._readableState.endEmitted,
                writable: !0
            }),
            i(e, d, {
                value: function(t, e) {
                    var n = r[l].read();
                    n ? (r[c] = null,
                    r[s] = null,
                    r[f] = null,
                    t(p(n, !1))) : (r[s] = t,
                    r[f] = e)
                },
                writable: !0
            }),
            e));
            return r[c] = null,
            a(t, (function(t) {
                if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                    var e = r[f];
                    return null !== e && (r[c] = null,
                    r[s] = null,
                    r[f] = null,
                    e(t)),
                    void (r[h] = t)
                }
                var n = r[s];
                null !== n && (r[c] = null,
                r[s] = null,
                r[f] = null,
                n(p(void 0, !0))),
                r[u] = !0
            }
            )),
            t.on("readable", b.bind(null, r)),
            r
        }
    }
    )),
    o.register("4igKI", (function(t, e) {
        "use strict";
        var r = o("3ggwF").codes.ERR_STREAM_PREMATURE_CLOSE;
        function n() {}
        t.exports = function t(e, i, o) {
            if ("function" == typeof i)
                return t(e, null, i);
            i || (i = {}),
            o = function(t) {
                var e = !1;
                return function() {
                    if (!e) {
                        e = !0;
                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                            n[i] = arguments[i];
                        t.apply(this, n)
                    }
                }
            }(o || n);
            var a = i.readable || !1 !== i.readable && e.readable
              , s = i.writable || !1 !== i.writable && e.writable
              , f = function() {
                e.writable || u()
            }
              , h = e._writableState && e._writableState.finished
              , u = function() {
                s = !1,
                h = !0,
                a || o.call(e)
            }
              , c = e._readableState && e._readableState.endEmitted
              , d = function() {
                a = !1,
                c = !0,
                s || o.call(e)
            }
              , l = function(t) {
                o.call(e, t)
            }
              , p = function() {
                var t;
                return a && !c ? (e._readableState && e._readableState.ended || (t = new r),
                o.call(e, t)) : s && !h ? (e._writableState && e._writableState.ended || (t = new r),
                o.call(e, t)) : void 0
            }
              , m = function() {
                e.req.on("finish", u)
            };
            return !function(t) {
                return t.setHeader && "function" == typeof t.abort
            }(e) ? s && !e._writableState && (e.on("end", f),
            e.on("close", f)) : (e.on("complete", u),
            e.on("abort", p),
            e.req ? m() : e.on("request", m)),
            e.on("end", d),
            e.on("finish", u),
            !1 !== i.error && e.on("error", l),
            e.on("close", p),
            function() {
                e.removeListener("complete", u),
                e.removeListener("abort", p),
                e.removeListener("request", m),
                e.req && e.req.removeListener("finish", u),
                e.removeListener("end", f),
                e.removeListener("close", f),
                e.removeListener("finish", u),
                e.removeListener("end", d),
                e.removeListener("error", l),
                e.removeListener("close", p)
            }
        }
    }
    )),
    o.register("5OO4U", (function(t, e) {
        t.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    }
    )),
    o.register("7kLG5", (function(t, e) {
        "use strict";
        t.exports = u;
        var r = o("3ggwF").codes
          , n = r.ERR_METHOD_NOT_IMPLEMENTED
          , i = r.ERR_MULTIPLE_CALLBACK
          , a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING
          , s = r.ERR_TRANSFORM_WITH_LENGTH_0
          , f = o("7g1aR");
        function h(t, e) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n)
                return this.emit("error", new i);
            r.writechunk = null,
            r.writecb = null,
            null != e && this.push(e),
            n(t);
            var o = this._readableState;
            o.reading = !1,
            (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
        }
        function u(t) {
            if (!(this instanceof u))
                return new u(t);
            f.call(this, t),
            this._transformState = {
                afterTransform: h.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            t && ("function" == typeof t.transform && (this._transform = t.transform),
            "function" == typeof t.flush && (this._flush = t.flush)),
            this.on("prefinish", c)
        }
        function c() {
            var t = this;
            "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush((function(e, r) {
                d(t, e, r)
            }
            ))
        }
        function d(t, e, r) {
            if (e)
                return t.emit("error", e);
            if (null != r && t.push(r),
            t._writableState.length)
                throw new s;
            if (t._transformState.transforming)
                throw new a;
            return t.push(null)
        }
        o("1hy4s")(u, f),
        u.prototype.push = function(t, e) {
            return this._transformState.needTransform = !1,
            f.prototype.push.call(this, t, e)
        }
        ,
        u.prototype._transform = function(t, e, r) {
            r(new n("_transform()"))
        }
        ,
        u.prototype._write = function(t, e, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = t,
            n.writeencoding = e,
            !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }
        ,
        u.prototype._read = function(t) {
            var e = this._transformState;
            null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0,
            this._transform(e.writechunk, e.writeencoding, e.afterTransform))
        }
        ,
        u.prototype._destroy = function(t, e) {
            f.prototype._destroy.call(this, t, (function(t) {
                e(t)
            }
            ))
        }
    }
    )),
    o.register("6JdhZ", (function(t, e) {
        "use strict";
        t.exports = n;
        var r = o("7kLG5");
        function n(t) {
            if (!(this instanceof n))
                return new n(t);
            r.call(this, t)
        }
        o("1hy4s")(n, r),
        n.prototype._transform = function(t, e, r) {
            r(null, t)
        }
    }
    )),
    o.register("2FGSW", (function(t, e) {
        "use strict";
        var r;
        var n = o("3ggwF").codes
          , i = n.ERR_MISSING_ARGS
          , a = n.ERR_STREAM_DESTROYED;
        function s(t) {
            if (t)
                throw t
        }
        function f(t, e, n, i) {
            i = function(t) {
                var e = !1;
                return function() {
                    e || (e = !0,
                    t.apply(void 0, arguments))
                }
            }(i);
            var s = !1;
            t.on("close", (function() {
                s = !0
            }
            )),
            void 0 === r && (r = o("4igKI")),
            r(t, {
                readable: e,
                writable: n
            }, (function(t) {
                if (t)
                    return i(t);
                s = !0,
                i()
            }
            ));
            var f = !1;
            return function(e) {
                if (!s && !f)
                    return f = !0,
                    function(t) {
                        return t.setHeader && "function" == typeof t.abort
                    }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void i(e || new a("pipe"))
            }
        }
        function h(t) {
            t()
        }
        function u(t, e) {
            return t.pipe(e)
        }
        function c(t) {
            return t.length ? "function" != typeof t[t.length - 1] ? s : t.pop() : s
        }
        t.exports = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            var n, o = c(e);
            if (Array.isArray(e[0]) && (e = e[0]),
            e.length < 2)
                throw new i("streams");
            var a = e.map((function(t, r) {
                var i = r < e.length - 1;
                return f(t, i, r > 0, (function(t) {
                    n || (n = t),
                    t && a.forEach(h),
                    i || (a.forEach(h),
                    o(n))
                }
                ))
            }
            ));
            return e.reduce(u)
        }
    }
    )),
    o.register("2Rz60", (function(t, e) {
        "use strict";
        var r = o("3tvKv").Buffer
          , n = o("1hy4s")
          , i = o("4ZpNB")
          , a = new Array(16)
          , s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
          , f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
          , h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
          , u = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
          , c = [0, 1518500249, 1859775393, 2400959708, 2840853838]
          , d = [1352829926, 1548603684, 1836072691, 2053994217, 0];
        function l() {
            i.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520
        }
        function p(t, e) {
            return t << e | t >>> 32 - e
        }
        function m(t, e, r, n, i, o, a, s) {
            return p(t + (e ^ r ^ n) + o + a | 0, s) + i | 0
        }
        function b(t, e, r, n, i, o, a, s) {
            return p(t + (e & r | ~e & n) + o + a | 0, s) + i | 0
        }
        function g(t, e, r, n, i, o, a, s) {
            return p(t + ((e | ~r) ^ n) + o + a | 0, s) + i | 0
        }
        function v(t, e, r, n, i, o, a, s) {
            return p(t + (e & n | r & ~n) + o + a | 0, s) + i | 0
        }
        function y(t, e, r, n, i, o, a, s) {
            return p(t + (e ^ (r | ~n)) + o + a | 0, s) + i | 0
        }
        n(l, i),
        l.prototype._update = function() {
            for (var t = a, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(4 * e);
            for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, l = 0 | this._e, w = 0 | this._a, _ = 0 | this._b, A = 0 | this._c, M = 0 | this._d, E = 0 | this._e, S = 0; S < 80; S += 1) {
                var k, x;
                S < 16 ? (k = m(r, n, i, o, l, t[s[S]], c[0], h[S]),
                x = y(w, _, A, M, E, t[f[S]], d[0], u[S])) : S < 32 ? (k = b(r, n, i, o, l, t[s[S]], c[1], h[S]),
                x = v(w, _, A, M, E, t[f[S]], d[1], u[S])) : S < 48 ? (k = g(r, n, i, o, l, t[s[S]], c[2], h[S]),
                x = g(w, _, A, M, E, t[f[S]], d[2], u[S])) : S < 64 ? (k = v(r, n, i, o, l, t[s[S]], c[3], h[S]),
                x = b(w, _, A, M, E, t[f[S]], d[3], u[S])) : (k = y(r, n, i, o, l, t[s[S]], c[4], h[S]),
                x = m(w, _, A, M, E, t[f[S]], d[4], u[S])),
                r = l,
                l = o,
                o = p(i, 10),
                i = n,
                n = k,
                w = E,
                E = M,
                M = p(A, 10),
                A = _,
                _ = x
            }
            var B = this._b + i + M | 0;
            this._b = this._c + o + E | 0,
            this._c = this._d + l + w | 0,
            this._d = this._e + r + _ | 0,
            this._e = this._a + n + A | 0,
            this._a = B
        }
        ,
        l.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = r.alloc ? r.alloc(20) : new r(20);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
        }
        ,
        t.exports = l
    }
    )),
    o.register("5nQrl", (function(t, e) {
        var r = t.exports = function(t) {
            t = t.toLowerCase();
            var e = r[t];
            if (!e)
                throw new Error(t + " is not supported (we accept pull requests)");
            return new e
        }
        ;
        r.sha = o("1edfx"),
        r.sha1 = o("47Knm"),
        r.sha224 = o("34uO1"),
        r.sha256 = o("44US2"),
        r.sha384 = o("7haxt"),
        r.sha512 = o("6QduM")
    }
    )),
    o.register("1edfx", (function(t, e) {
        var r = o("1hy4s")
          , n = o("5ltnp")
          , i = o("5Xfjk").Buffer
          , a = [1518500249, 1859775393, -1894007588, -899497514]
          , s = new Array(80);
        function f() {
            this.init(),
            this._w = s,
            n.call(this, 64, 56)
        }
        function h(t) {
            return t << 30 | t >>> 2
        }
        function u(t, e, r, n) {
            return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
        }
        r(f, n),
        f.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ,
        f.prototype._update = function(t) {
            for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, c = 0; c < 16; ++c)
                r[c] = t.readInt32BE(4 * c);
            for (; c < 80; ++c)
                r[c] = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
            for (var d = 0; d < 80; ++d) {
                var l = ~~(d / 20)
                  , p = 0 | ((e = n) << 5 | e >>> 27) + u(l, i, o, s) + f + r[d] + a[l];
                f = s,
                s = o,
                o = h(i),
                i = n,
                n = p
            }
            this._a = n + this._a | 0,
            this._b = i + this._b | 0,
            this._c = o + this._c | 0,
            this._d = s + this._d | 0,
            this._e = f + this._e | 0
        }
        ,
        f.prototype._hash = function() {
            var t = i.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
        }
        ,
        t.exports = f
    }
    )),
    o.register("5ltnp", (function(t, e) {
        var r = o("5Xfjk").Buffer;
        function n(t, e) {
            this._block = r.alloc(t),
            this._finalSize = e,
            this._blockSize = t,
            this._len = 0
        }
        n.prototype.update = function(t, e) {
            "string" == typeof t && (e = e || "utf8",
            t = r.from(t, e));
            for (var n = this._block, i = this._blockSize, o = t.length, a = this._len, s = 0; s < o; ) {
                for (var f = a % i, h = Math.min(o - s, i - f), u = 0; u < h; u++)
                    n[f + u] = t[s + u];
                s += h,
                (a += h) % i == 0 && this._update(n)
            }
            return this._len += o,
            this
        }
        ,
        n.prototype.digest = function(t) {
            var e = this._len % this._blockSize;
            this._block[e] = 128,
            this._block.fill(0, e + 1),
            e >= this._finalSize && (this._update(this._block),
            this._block.fill(0));
            var r = 8 * this._len;
            if (r <= 4294967295)
                this._block.writeUInt32BE(r, this._blockSize - 4);
            else {
                var n = (4294967295 & r) >>> 0
                  , i = (r - n) / 4294967296;
                this._block.writeUInt32BE(i, this._blockSize - 8),
                this._block.writeUInt32BE(n, this._blockSize - 4)
            }
            this._update(this._block);
            var o = this._hash();
            return t ? o.toString(t) : o
        }
        ,
        n.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }
        ,
        t.exports = n
    }
    )),
    o.register("47Knm", (function(t, e) {
        var r = o("1hy4s")
          , n = o("5ltnp")
          , i = o("5Xfjk").Buffer
          , a = [1518500249, 1859775393, -1894007588, -899497514]
          , s = new Array(80);
        function f() {
            this.init(),
            this._w = s,
            n.call(this, 64, 56)
        }
        function h(t) {
            return t << 5 | t >>> 27
        }
        function u(t) {
            return t << 30 | t >>> 2
        }
        function c(t, e, r, n) {
            return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
        }
        r(f, n),
        f.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ,
        f.prototype._update = function(t) {
            for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, d = 0; d < 16; ++d)
                r[d] = t.readInt32BE(4 * d);
            for (; d < 80; ++d)
                r[d] = (e = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1 | e >>> 31;
            for (var l = 0; l < 80; ++l) {
                var p = ~~(l / 20)
                  , m = h(n) + c(p, i, o, s) + f + r[l] + a[p] | 0;
                f = s,
                s = o,
                o = u(i),
                i = n,
                n = m
            }
            this._a = n + this._a | 0,
            this._b = i + this._b | 0,
            this._c = o + this._c | 0,
            this._d = s + this._d | 0,
            this._e = f + this._e | 0
        }
        ,
        f.prototype._hash = function() {
            var t = i.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
        }
        ,
        t.exports = f
    }
    )),
    o.register("34uO1", (function(t, e) {
        var r = o("1hy4s")
          , n = o("44US2")
          , i = o("5ltnp")
          , a = o("5Xfjk").Buffer
          , s = new Array(64);
        function f() {
            this.init(),
            this._w = s,
            i.call(this, 64, 56)
        }
        r(f, n),
        f.prototype.init = function() {
            return this._a = 3238371032,
            this._b = 914150663,
            this._c = 812702999,
            this._d = 4144912697,
            this._e = 4290775857,
            this._f = 1750603025,
            this._g = 1694076839,
            this._h = 3204075428,
            this
        }
        ,
        f.prototype._hash = function() {
            var t = a.allocUnsafe(28);
            return t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
        }
        ,
        t.exports = f
    }
    )),
    o.register("44US2", (function(t, e) {
        var r = o("1hy4s")
          , n = o("5ltnp")
          , i = o("5Xfjk").Buffer
          , a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
          , s = new Array(64);
        function f() {
            this.init(),
            this._w = s,
            n.call(this, 64, 56)
        }
        function h(t, e, r) {
            return r ^ t & (e ^ r)
        }
        function u(t, e, r) {
            return t & e | r & (t | e)
        }
        function c(t) {
            return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
        }
        function d(t) {
            return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
        }
        function l(t) {
            return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
        }
        r(f, n),
        f.prototype.init = function() {
            return this._a = 1779033703,
            this._b = 3144134277,
            this._c = 1013904242,
            this._d = 2773480762,
            this._e = 1359893119,
            this._f = 2600822924,
            this._g = 528734635,
            this._h = 1541459225,
            this
        }
        ,
        f.prototype._update = function(t) {
            for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, p = 0 | this._f, m = 0 | this._g, b = 0 | this._h, g = 0; g < 16; ++g)
                r[g] = t.readInt32BE(4 * g);
            for (; g < 64; ++g)
                r[g] = 0 | (((e = r[g - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + r[g - 7] + l(r[g - 15]) + r[g - 16];
            for (var v = 0; v < 64; ++v) {
                var y = b + d(f) + h(f, p, m) + a[v] + r[v] | 0
                  , w = c(n) + u(n, i, o) | 0;
                b = m,
                m = p,
                p = f,
                f = s + y | 0,
                s = o,
                o = i,
                i = n,
                n = y + w | 0
            }
            this._a = n + this._a | 0,
            this._b = i + this._b | 0,
            this._c = o + this._c | 0,
            this._d = s + this._d | 0,
            this._e = f + this._e | 0,
            this._f = p + this._f | 0,
            this._g = m + this._g | 0,
            this._h = b + this._h | 0
        }
        ,
        f.prototype._hash = function() {
            var t = i.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
        }
        ,
        t.exports = f
    }
    )),
    o.register("7haxt", (function(t, e) {
        var r = o("1hy4s")
          , n = o("6QduM")
          , i = o("5ltnp")
          , a = o("5Xfjk").Buffer
          , s = new Array(160);
        function f() {
            this.init(),
            this._w = s,
            i.call(this, 128, 112)
        }
        r(f, n),
        f.prototype.init = function() {
            return this._ah = 3418070365,
            this._bh = 1654270250,
            this._ch = 2438529370,
            this._dh = 355462360,
            this._eh = 1731405415,
            this._fh = 2394180231,
            this._gh = 3675008525,
            this._hh = 1203062813,
            this._al = 3238371032,
            this._bl = 914150663,
            this._cl = 812702999,
            this._dl = 4144912697,
            this._el = 4290775857,
            this._fl = 1750603025,
            this._gl = 1694076839,
            this._hl = 3204075428,
            this
        }
        ,
        f.prototype._hash = function() {
            var t = a.allocUnsafe(48);
            function e(e, r, n) {
                t.writeInt32BE(e, n),
                t.writeInt32BE(r, n + 4)
            }
            return e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
        }
        ,
        t.exports = f
    }
    )),
    o.register("6QduM", (function(t, e) {
        var r = o("1hy4s")
          , n = o("5ltnp")
          , i = o("5Xfjk").Buffer
          , a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , s = new Array(160);
        function f() {
            this.init(),
            this._w = s,
            n.call(this, 128, 112)
        }
        function h(t, e, r) {
            return r ^ t & (e ^ r)
        }
        function u(t, e, r) {
            return t & e | r & (t | e)
        }
        function c(t, e) {
            return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
        }
        function d(t, e) {
            return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
        }
        function l(t, e) {
            return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
        }
        function p(t, e) {
            return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
        }
        function m(t, e) {
            return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
        }
        function b(t, e) {
            return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
        }
        function g(t, e) {
            return t >>> 0 < e >>> 0 ? 1 : 0
        }
        r(f, n),
        f.prototype.init = function() {
            return this._ah = 1779033703,
            this._bh = 3144134277,
            this._ch = 1013904242,
            this._dh = 2773480762,
            this._eh = 1359893119,
            this._fh = 2600822924,
            this._gh = 528734635,
            this._hh = 1541459225,
            this._al = 4089235720,
            this._bl = 2227873595,
            this._cl = 4271175723,
            this._dl = 1595750129,
            this._el = 2917565137,
            this._fl = 725511199,
            this._gl = 4215389547,
            this._hl = 327033209,
            this
        }
        ,
        f.prototype._update = function(t) {
            for (var e = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, v = 0 | this._gh, y = 0 | this._hh, w = 0 | this._al, _ = 0 | this._bl, A = 0 | this._cl, M = 0 | this._dl, E = 0 | this._el, S = 0 | this._fl, k = 0 | this._gl, x = 0 | this._hl, B = 0; B < 32; B += 2)
                e[B] = t.readInt32BE(4 * B),
                e[B + 1] = t.readInt32BE(4 * B + 4);
            for (; B < 160; B += 2) {
                var R = e[B - 30]
                  , T = e[B - 30 + 1]
                  , C = l(R, T)
                  , D = p(T, R)
                  , I = m(R = e[B - 4], T = e[B - 4 + 1])
                  , P = b(T, R)
                  , O = e[B - 14]
                  , L = e[B - 14 + 1]
                  , j = e[B - 32]
                  , U = e[B - 32 + 1]
                  , N = D + L | 0
                  , z = C + O + g(N, D) | 0;
                z = (z = z + I + g(N = N + P | 0, P) | 0) + j + g(N = N + U | 0, U) | 0,
                e[B] = z,
                e[B + 1] = N
            }
            for (var F = 0; F < 160; F += 2) {
                z = e[F],
                N = e[F + 1];
                var q = u(r, n, i)
                  , Y = u(w, _, A)
                  , H = c(r, w)
                  , W = c(w, r)
                  , K = d(s, E)
                  , G = d(E, s)
                  , Z = a[F]
                  , V = a[F + 1]
                  , X = h(s, f, v)
                  , $ = h(E, S, k)
                  , Q = x + G | 0
                  , J = y + K + g(Q, x) | 0;
                J = (J = (J = J + X + g(Q = Q + $ | 0, $) | 0) + Z + g(Q = Q + V | 0, V) | 0) + z + g(Q = Q + N | 0, N) | 0;
                var tt = W + Y | 0
                  , et = H + q + g(tt, W) | 0;
                y = v,
                x = k,
                v = f,
                k = S,
                f = s,
                S = E,
                s = o + J + g(E = M + Q | 0, M) | 0,
                o = i,
                M = A,
                i = n,
                A = _,
                n = r,
                _ = w,
                r = J + et + g(w = Q + tt | 0, Q) | 0
            }
            this._al = this._al + w | 0,
            this._bl = this._bl + _ | 0,
            this._cl = this._cl + A | 0,
            this._dl = this._dl + M | 0,
            this._el = this._el + E | 0,
            this._fl = this._fl + S | 0,
            this._gl = this._gl + k | 0,
            this._hl = this._hl + x | 0,
            this._ah = this._ah + r + g(this._al, w) | 0,
            this._bh = this._bh + n + g(this._bl, _) | 0,
            this._ch = this._ch + i + g(this._cl, A) | 0,
            this._dh = this._dh + o + g(this._dl, M) | 0,
            this._eh = this._eh + s + g(this._el, E) | 0,
            this._fh = this._fh + f + g(this._fl, S) | 0,
            this._gh = this._gh + v + g(this._gl, k) | 0,
            this._hh = this._hh + y + g(this._hl, x) | 0
        }
        ,
        f.prototype._hash = function() {
            var t = i.allocUnsafe(64);
            function e(e, r, n) {
                t.writeInt32BE(e, n),
                t.writeInt32BE(r, n + 4)
            }
            return e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
        }
        ,
        t.exports = f
    }
    )),
    o.register("20tx4", (function(t, e) {
        var r = o("5Xfjk").Buffer
          , n = o("6pgpp").Transform
          , i = o("1ubTE").StringDecoder;
        function a(t) {
            n.call(this),
            this.hashMode = "string" == typeof t,
            this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest,
            this._final && (this.__final = this._final,
            this._final = null),
            this._decoder = null,
            this._encoding = null
        }
        o("1hy4s")(a, n),
        a.prototype.update = function(t, e, n) {
            "string" == typeof t && (t = r.from(t, e));
            var i = this._update(t);
            return this.hashMode ? this : (n && (i = this._toString(i, n)),
            i)
        }
        ,
        a.prototype.setAutoPadding = function() {}
        ,
        a.prototype.getAuthTag = function() {
            throw new Error("trying to get auth tag in unsupported state")
        }
        ,
        a.prototype.setAuthTag = function() {
            throw new Error("trying to set auth tag in unsupported state")
        }
        ,
        a.prototype.setAAD = function() {
            throw new Error("trying to set aad in unsupported state")
        }
        ,
        a.prototype._transform = function(t, e, r) {
            var n;
            try {
                this.hashMode ? this._update(t) : this.push(this._update(t))
            } catch (t) {
                n = t
            } finally {
                r(n)
            }
        }
        ,
        a.prototype._flush = function(t) {
            var e;
            try {
                this.push(this.__final())
            } catch (t) {
                e = t
            }
            t(e)
        }
        ,
        a.prototype._finalOrDigest = function(t) {
            var e = this.__final() || r.alloc(0);
            return t && (e = this._toString(e, t, !0)),
            e
        }
        ,
        a.prototype._toString = function(t, e, r) {
            if (this._decoder || (this._decoder = new i(e),
            this._encoding = e),
            this._encoding !== e)
                throw new Error("can't switch encodings");
            var n = this._decoder.write(t);
            return r && (n += this._decoder.end()),
            n
        }
        ,
        t.exports = a
    }
    )),
    o.register("3N3Qi", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("4rAzS")
          , i = o("20tx4")
          , a = o("5Xfjk").Buffer
          , s = o("6tS9K")
          , f = o("2Rz60")
          , h = o("5nQrl")
          , u = a.alloc(128);
        function c(t, e) {
            i.call(this, "digest"),
            "string" == typeof e && (e = a.from(e));
            var r = "sha512" === t || "sha384" === t ? 128 : 64;
            (this._alg = t,
            this._key = e,
            e.length > r) ? e = ("rmd160" === t ? new f : h(t)).update(e).digest() : e.length < r && (e = a.concat([e, u], r));
            for (var n = this._ipad = a.allocUnsafe(r), o = this._opad = a.allocUnsafe(r), s = 0; s < r; s++)
                n[s] = 54 ^ e[s],
                o[s] = 92 ^ e[s];
            this._hash = "rmd160" === t ? new f : h(t),
            this._hash.update(n)
        }
        r(c, i),
        c.prototype._update = function(t) {
            this._hash.update(t)
        }
        ,
        c.prototype._final = function() {
            var t = this._hash.digest();
            return ("rmd160" === this._alg ? new f : h(this._alg)).update(this._opad).update(t).digest()
        }
        ,
        t.exports = function(t, e) {
            return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new c("rmd160",e) : "md5" === t ? new n(s,e) : new c(t,e)
        }
    }
    )),
    o.register("4rAzS", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("5Xfjk").Buffer
          , i = o("20tx4")
          , a = n.alloc(128)
          , s = 64;
        function f(t, e) {
            i.call(this, "digest"),
            "string" == typeof e && (e = n.from(e)),
            this._alg = t,
            this._key = e,
            e.length > s ? e = t(e) : e.length < s && (e = n.concat([e, a], s));
            for (var r = this._ipad = n.allocUnsafe(s), o = this._opad = n.allocUnsafe(s), f = 0; f < s; f++)
                r[f] = 54 ^ e[f],
                o[f] = 92 ^ e[f];
            this._hash = [r]
        }
        r(f, i),
        f.prototype._update = function(t) {
            this._hash.push(t)
        }
        ,
        f.prototype._final = function() {
            var t = this._alg(n.concat(this._hash));
            return this._alg(n.concat([this._opad, t]))
        }
        ,
        t.exports = f
    }
    )),
    o.register("6tS9K", (function(t, e) {
        var r = o("6D5SR");
        t.exports = function(t) {
            return (new r).update(t).digest()
        }
    }
    )),
    o.register("EFKRB", (function(t, e) {
        t.exports = o("dAOBS")
    }
    )),
    o.register("dAOBS", (function(t, e) {
        t.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')
    }
    )),
    o.register("7kcyw", (function(e, r) {
        var n, i;
        t(e.exports, "pbkdf2Sync", (()=>i), (t=>i = t)),
        t(e.exports, "pbkdf2", (()=>n), (t=>n = t)),
        n = o("wCIMt"),
        i = o("1az2p")
    }
    )),
    o.register("wCIMt", (function(t, e) {
        var n, i, a = o("5Xfjk").Buffer, s = o("yFN7A"), f = o("7euYO"), h = o("1az2p"), u = o("fo6uh"), c = r.crypto && r.crypto.subtle, d = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        }, l = [];
        function p() {
            return i || (i = r.process && r.process.nextTick ? r.process.nextTick : r.queueMicrotask ? r.queueMicrotask : r.setImmediate ? r.setImmediate : r.setTimeout)
        }
        function m(t, e, r, n, i) {
            return c.importKey("raw", t, {
                name: "PBKDF2"
            }, !1, ["deriveBits"]).then((function(t) {
                return c.deriveBits({
                    name: "PBKDF2",
                    salt: e,
                    iterations: r,
                    hash: {
                        name: i
                    }
                }, t, n << 3)
            }
            )).then((function(t) {
                return a.from(t)
            }
            ))
        }
        t.exports = function(t, e, i, o, b, g) {
            "function" == typeof b && (g = b,
            b = void 0);
            var v = d[(b = b || "sha1").toLowerCase()];
            if (v && "function" == typeof r.Promise) {
                if (s(i, o),
                t = u(t, f, "Password"),
                e = u(e, f, "Salt"),
                "function" != typeof g)
                    throw new Error("No callback provided to pbkdf2");
                !function(t, e) {
                    t.then((function(t) {
                        p()((function() {
                            e(null, t)
                        }
                        ))
                    }
                    ), (function(t) {
                        p()((function() {
                            e(t)
                        }
                        ))
                    }
                    ))
                }(function(t) {
                    if (r.process && !r.process.browser)
                        return Promise.resolve(!1);
                    if (!c || !c.importKey || !c.deriveBits)
                        return Promise.resolve(!1);
                    if (void 0 !== l[t])
                        return l[t];
                    var e = m(n = n || a.alloc(8), n, 10, 128, t).then((function() {
                        return !0
                    }
                    )).catch((function() {
                        return !1
                    }
                    ));
                    return l[t] = e,
                    e
                }(v).then((function(r) {
                    return r ? m(t, e, i, o, v) : h(t, e, i, o, b)
                }
                )), g)
            } else
                p()((function() {
                    var r;
                    try {
                        r = h(t, e, i, o, b)
                    } catch (t) {
                        return g(t)
                    }
                    g(null, r)
                }
                ))
        }
    }
    )),
    o.register("yFN7A", (function(t, e) {
        var r = Math.pow(2, 30) - 1;
        t.exports = function(t, e) {
            if ("number" != typeof t)
                throw new TypeError("Iterations not a number");
            if (t < 0)
                throw new TypeError("Bad iterations");
            if ("number" != typeof e)
                throw new TypeError("Key length not a number");
            if (e < 0 || e > r || e != e)
                throw new TypeError("Bad key length")
        }
    }
    )),
    o.register("7euYO", (function(t, e) {
        var n, i = o("67ZL8");
        if (r.process && r.process.browser)
            n = "utf-8";
        else if (r.process && r.process.version) {
            n = parseInt(i.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary"
        } else
            n = "utf-8";
        t.exports = n
    }
    )),
    o.register("1az2p", (function(t, e) {
        var r = o("6tS9K")
          , n = o("2Rz60")
          , i = o("5nQrl")
          , a = o("5Xfjk").Buffer
          , s = o("yFN7A")
          , f = o("7euYO")
          , h = o("fo6uh")
          , u = a.alloc(128)
          , c = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };
        function d(t, e, o) {
            var s = function(t) {
                function e(e) {
                    return i(t).update(e).digest()
                }
                function o(t) {
                    return (new n).update(t).digest()
                }
                return "rmd160" === t || "ripemd160" === t ? o : "md5" === t ? r : e
            }(t)
              , f = "sha512" === t || "sha384" === t ? 128 : 64;
            e.length > f ? e = s(e) : e.length < f && (e = a.concat([e, u], f));
            for (var h = a.allocUnsafe(f + c[t]), d = a.allocUnsafe(f + c[t]), l = 0; l < f; l++)
                h[l] = 54 ^ e[l],
                d[l] = 92 ^ e[l];
            var p = a.allocUnsafe(f + o + 4);
            h.copy(p, 0, 0, f),
            this.ipad1 = p,
            this.ipad2 = h,
            this.opad = d,
            this.alg = t,
            this.blocksize = f,
            this.hash = s,
            this.size = c[t]
        }
        d.prototype.run = function(t, e) {
            return t.copy(e, this.blocksize),
            this.hash(e).copy(this.opad, this.blocksize),
            this.hash(this.opad)
        }
        ,
        t.exports = function(t, e, r, n, i) {
            s(r, n);
            var o = new d(i = i || "sha1",t = h(t, f, "Password"),(e = h(e, f, "Salt")).length)
              , u = a.allocUnsafe(n)
              , l = a.allocUnsafe(e.length + 4);
            e.copy(l, 0, 0, e.length);
            for (var p = 0, m = c[i], b = Math.ceil(n / m), g = 1; g <= b; g++) {
                l.writeUInt32BE(g, e.length);
                for (var v = o.run(l, o.ipad1), y = v, w = 1; w < r; w++) {
                    y = o.run(y, o.ipad2);
                    for (var _ = 0; _ < m; _++)
                        v[_] ^= y[_]
                }
                v.copy(u, p),
                p += m
            }
            return u
        }
    }
    )),
    o.register("fo6uh", (function(t, e) {
        var r = o("5Xfjk").Buffer;
        t.exports = function(t, e, n) {
            if (r.isBuffer(t))
                return t;
            if ("string" == typeof t)
                return r.from(t, e);
            if (ArrayBuffer.isView(t))
                return r.from(t.buffer);
            throw new TypeError(n + " must be a string, a Buffer, a typed array or a DataView")
        }
    }
    )),
    o.register("1YrPU", (function(e, r) {
        var n, i, a, s, f, h, u, c, d, l;
        t(e.exports, "createCipher", (()=>n), (t=>n = t)),
        t(e.exports, "createCipheriv", (()=>i), (t=>i = t)),
        t(e.exports, "listCiphers", (()=>d), (t=>d = t)),
        t(e.exports, "Cipheriv", (()=>s), (t=>s = t)),
        t(e.exports, "createDecipheriv", (()=>u), (t=>u = t)),
        t(e.exports, "getCiphers", (()=>h), (t=>h = t)),
        t(e.exports, "Decipheriv", (()=>l), (t=>l = t)),
        t(e.exports, "createDecipher", (()=>c), (t=>c = t)),
        t(e.exports, "Cipher", (()=>a), (t=>a = t)),
        t(e.exports, "Decipher", (()=>f), (t=>f = t));
        var p = o("27E4M")
          , m = o("19viH")
          , b = o("5QID0")
          , g = o("29765")
          , v = o("1cBie");
        function y(t, e, r) {
            if (t = t.toLowerCase(),
            b[t])
                return m.createCipheriv(t, e, r);
            if (g[t])
                return new p({
                    key: e,
                    iv: r,
                    mode: t
                });
            throw new TypeError("invalid suite type")
        }
        function w(t, e, r) {
            if (t = t.toLowerCase(),
            b[t])
                return m.createDecipheriv(t, e, r);
            if (g[t])
                return new p({
                    key: e,
                    iv: r,
                    mode: t,
                    decrypt: !0
                });
            throw new TypeError("invalid suite type")
        }
        n = a = function(t, e) {
            var r, n;
            if (t = t.toLowerCase(),
            b[t])
                r = b[t].key,
                n = b[t].iv;
            else {
                if (!g[t])
                    throw new TypeError("invalid suite type");
                r = 8 * g[t].key,
                n = g[t].iv
            }
            var i = v(e, !1, r, n);
            return y(t, i.key, i.iv)
        }
        ,
        i = s = y,
        c = f = function(t, e) {
            var r, n;
            if (t = t.toLowerCase(),
            b[t])
                r = b[t].key,
                n = b[t].iv;
            else {
                if (!g[t])
                    throw new TypeError("invalid suite type");
                r = 8 * g[t].key,
                n = g[t].iv
            }
            var i = v(e, !1, r, n);
            return w(t, i.key, i.iv)
        }
        ,
        u = l = w,
        d = h = function() {
            return Object.keys(g).concat(m.getCiphers())
        }
    }
    )),
    o.register("27E4M", (function(t, e) {
        var r = o("20tx4")
          , n = o("7ccsm")
          , i = o("1hy4s")
          , a = o("5Xfjk").Buffer
          , s = {
            "des-ede3-cbc": n.CBC.instantiate(n.EDE),
            "des-ede3": n.EDE,
            "des-ede-cbc": n.CBC.instantiate(n.EDE),
            "des-ede": n.EDE,
            "des-cbc": n.CBC.instantiate(n.DES),
            "des-ecb": n.DES
        };
        function f(t) {
            r.call(this);
            var e, n = t.mode.toLowerCase(), i = s[n];
            e = t.decrypt ? "decrypt" : "encrypt";
            var o = t.key;
            a.isBuffer(o) || (o = a.from(o)),
            "des-ede" !== n && "des-ede-cbc" !== n || (o = a.concat([o, o.slice(0, 8)]));
            var f = t.iv;
            a.isBuffer(f) || (f = a.from(f)),
            this._des = i.create({
                key: o,
                iv: f,
                type: e
            })
        }
        s.des = s["des-cbc"],
        s.des3 = s["des-ede3-cbc"],
        t.exports = f,
        i(f, r),
        f.prototype._update = function(t) {
            return a.from(this._des.update(t))
        }
        ,
        f.prototype._final = function() {
            return a.from(this._des.final())
        }
    }
    )),
    o.register("7ccsm", (function(e, r) {
        var n, i, a;
        t(e.exports, "CBC", (()=>n), (t=>n = t)),
        t(e.exports, "EDE", (()=>i), (t=>i = t)),
        t(e.exports, "DES", (()=>a), (t=>a = t)),
        o("5jUWY"),
        o("5MZEO"),
        a = o("5W8z1"),
        n = o("hZZHQ"),
        i = o("EoJsk")
    }
    )),
    o.register("5jUWY", (function(e, r) {
        var n, i, o, a, s, f, h, u, c, d, l;
        t(e.exports, "pc1", (()=>f), (t=>f = t)),
        t(e.exports, "readUInt32BE", (()=>a), (t=>a = t)),
        t(e.exports, "ip", (()=>u), (t=>u = t)),
        t(e.exports, "pc2", (()=>i), (t=>i = t)),
        t(e.exports, "r28shl", (()=>h), (t=>h = t)),
        t(e.exports, "expand", (()=>n), (t=>n = t)),
        t(e.exports, "rip", (()=>l), (t=>l = t)),
        t(e.exports, "permute", (()=>d), (t=>d = t)),
        t(e.exports, "writeUInt32BE", (()=>o), (t=>o = t)),
        t(e.exports, "padSplit", (()=>c), (t=>c = t)),
        t(e.exports, "substitute", (()=>s), (t=>s = t)),
        a = function(t, e) {
            return (t[0 + e] << 24 | t[1 + e] << 16 | t[2 + e] << 8 | t[3 + e]) >>> 0
        }
        ,
        o = function(t, e, r) {
            t[0 + r] = e >>> 24,
            t[1 + r] = e >>> 16 & 255,
            t[2 + r] = e >>> 8 & 255,
            t[3 + r] = 255 & e
        }
        ,
        u = function(t, e, r, n) {
            for (var i = 0, o = 0, a = 6; a >= 0; a -= 2) {
                for (var s = 0; s <= 24; s += 8)
                    i <<= 1,
                    i |= e >>> s + a & 1;
                for (s = 0; s <= 24; s += 8)
                    i <<= 1,
                    i |= t >>> s + a & 1
            }
            for (a = 6; a >= 0; a -= 2) {
                for (s = 1; s <= 25; s += 8)
                    o <<= 1,
                    o |= e >>> s + a & 1;
                for (s = 1; s <= 25; s += 8)
                    o <<= 1,
                    o |= t >>> s + a & 1
            }
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        l = function(t, e, r, n) {
            for (var i = 0, o = 0, a = 0; a < 4; a++)
                for (var s = 24; s >= 0; s -= 8)
                    i <<= 1,
                    i |= e >>> s + a & 1,
                    i <<= 1,
                    i |= t >>> s + a & 1;
            for (a = 4; a < 8; a++)
                for (s = 24; s >= 0; s -= 8)
                    o <<= 1,
                    o |= e >>> s + a & 1,
                    o <<= 1,
                    o |= t >>> s + a & 1;
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        f = function(t, e, r, n) {
            for (var i = 0, o = 0, a = 7; a >= 5; a--) {
                for (var s = 0; s <= 24; s += 8)
                    i <<= 1,
                    i |= e >> s + a & 1;
                for (s = 0; s <= 24; s += 8)
                    i <<= 1,
                    i |= t >> s + a & 1
            }
            for (s = 0; s <= 24; s += 8)
                i <<= 1,
                i |= e >> s + a & 1;
            for (a = 1; a <= 3; a++) {
                for (s = 0; s <= 24; s += 8)
                    o <<= 1,
                    o |= e >> s + a & 1;
                for (s = 0; s <= 24; s += 8)
                    o <<= 1,
                    o |= t >> s + a & 1
            }
            for (s = 0; s <= 24; s += 8)
                o <<= 1,
                o |= t >> s + a & 1;
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        h = function(t, e) {
            return t << e & 268435455 | t >>> 28 - e
        }
        ;
        var p = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        i = function(t, e, r, n) {
            for (var i = 0, o = 0, a = p.length >>> 1, s = 0; s < a; s++)
                i <<= 1,
                i |= t >>> p[s] & 1;
            for (s = a; s < p.length; s++)
                o <<= 1,
                o |= e >>> p[s] & 1;
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        n = function(t, e, r) {
            var n = 0
              , i = 0;
            n = (1 & t) << 5 | t >>> 27;
            for (var o = 23; o >= 15; o -= 4)
                n <<= 6,
                n |= t >>> o & 63;
            for (o = 11; o >= 3; o -= 4)
                i |= t >>> o & 63,
                i <<= 6;
            i |= (31 & t) << 1 | t >>> 31,
            e[r + 0] = n >>> 0,
            e[r + 1] = i >>> 0
        }
        ;
        var m = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        s = function(t, e) {
            for (var r = 0, n = 0; n < 4; n++) {
                r <<= 4,
                r |= m[64 * n + (t >>> 18 - 6 * n & 63)]
            }
            for (n = 0; n < 4; n++) {
                r <<= 4,
                r |= m[256 + 64 * n + (e >>> 18 - 6 * n & 63)]
            }
            return r >>> 0
        }
        ;
        var b = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        d = function(t) {
            for (var e = 0, r = 0; r < b.length; r++)
                e <<= 1,
                e |= t >>> b[r] & 1;
            return e >>> 0
        }
        ,
        c = function(t, e, r) {
            for (var n = t.toString(2); n.length < e; )
                n = "0" + n;
            for (var i = [], o = 0; o < e; o += r)
                i.push(n.slice(o, o + r));
            return i.join(" ")
        }
    }
    )),
    o.register("5MZEO", (function(t, e) {
        "use strict";
        var r = o("10wuZ");
        function n(t) {
            this.options = t,
            this.type = this.options.type,
            this.blockSize = 8,
            this._init(),
            this.buffer = new Array(this.blockSize),
            this.bufferOff = 0
        }
        t.exports = n,
        n.prototype._init = function() {}
        ,
        n.prototype.update = function(t) {
            return 0 === t.length ? [] : "decrypt" === this.type ? this._updateDecrypt(t) : this._updateEncrypt(t)
        }
        ,
        n.prototype._buffer = function(t, e) {
            for (var r = Math.min(this.buffer.length - this.bufferOff, t.length - e), n = 0; n < r; n++)
                this.buffer[this.bufferOff + n] = t[e + n];
            return this.bufferOff += r,
            r
        }
        ,
        n.prototype._flushBuffer = function(t, e) {
            return this._update(this.buffer, 0, t, e),
            this.bufferOff = 0,
            this.blockSize
        }
        ,
        n.prototype._updateEncrypt = function(t) {
            var e = 0
              , r = 0
              , n = (this.bufferOff + t.length) / this.blockSize | 0
              , i = new Array(n * this.blockSize);
            0 !== this.bufferOff && (e += this._buffer(t, e),
            this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
            for (var o = t.length - (t.length - e) % this.blockSize; e < o; e += this.blockSize)
                this._update(t, e, i, r),
                r += this.blockSize;
            for (; e < t.length; e++,
            this.bufferOff++)
                this.buffer[this.bufferOff] = t[e];
            return i
        }
        ,
        n.prototype._updateDecrypt = function(t) {
            for (var e = 0, r = 0, n = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1, i = new Array(n * this.blockSize); n > 0; n--)
                e += this._buffer(t, e),
                r += this._flushBuffer(i, r);
            return e += this._buffer(t, e),
            i
        }
        ,
        n.prototype.final = function(t) {
            var e, r;
            return t && (e = this.update(t)),
            r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(),
            e ? e.concat(r) : r
        }
        ,
        n.prototype._pad = function(t, e) {
            if (0 === e)
                return !1;
            for (; e < t.length; )
                t[e++] = 0;
            return !0
        }
        ,
        n.prototype._finalEncrypt = function() {
            if (!this._pad(this.buffer, this.bufferOff))
                return [];
            var t = new Array(this.blockSize);
            return this._update(this.buffer, 0, t, 0),
            t
        }
        ,
        n.prototype._unpad = function(t) {
            return t
        }
        ,
        n.prototype._finalDecrypt = function() {
            r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
            var t = new Array(this.blockSize);
            return this._flushBuffer(t, 0),
            this._unpad(t)
        }
    }
    )),
    o.register("10wuZ", (function(t, e) {
        function r(t, e) {
            if (!t)
                throw new Error(e || "Assertion failed")
        }
        t.exports = r,
        r.equal = function(t, e, r) {
            if (t != e)
                throw new Error(r || "Assertion failed: " + t + " != " + e)
        }
    }
    )),
    o.register("5W8z1", (function(t, e) {
        "use strict";
        var r = o("10wuZ")
          , n = o("1hy4s")
          , i = o("5jUWY")
          , a = o("5MZEO");
        function s() {
            this.tmp = new Array(2),
            this.keys = null
        }
        function f(t) {
            a.call(this, t);
            var e = new s;
            this._desState = e,
            this.deriveKeys(e, t.key)
        }
        n(f, a),
        t.exports = f,
        f.create = function(t) {
            return new f(t)
        }
        ;
        var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        f.prototype.deriveKeys = function(t, e) {
            t.keys = new Array(32),
            r.equal(e.length, this.blockSize, "Invalid key length");
            var n = i.readUInt32BE(e, 0)
              , o = i.readUInt32BE(e, 4);
            i.pc1(n, o, t.tmp, 0),
            n = t.tmp[0],
            o = t.tmp[1];
            for (var a = 0; a < t.keys.length; a += 2) {
                var s = h[a >>> 1];
                n = i.r28shl(n, s),
                o = i.r28shl(o, s),
                i.pc2(n, o, t.keys, a)
            }
        }
        ,
        f.prototype._update = function(t, e, r, n) {
            var o = this._desState
              , a = i.readUInt32BE(t, e)
              , s = i.readUInt32BE(t, e + 4);
            i.ip(a, s, o.tmp, 0),
            a = o.tmp[0],
            s = o.tmp[1],
            "encrypt" === this.type ? this._encrypt(o, a, s, o.tmp, 0) : this._decrypt(o, a, s, o.tmp, 0),
            a = o.tmp[0],
            s = o.tmp[1],
            i.writeUInt32BE(r, a, n),
            i.writeUInt32BE(r, s, n + 4)
        }
        ,
        f.prototype._pad = function(t, e) {
            for (var r = t.length - e, n = e; n < t.length; n++)
                t[n] = r;
            return !0
        }
        ,
        f.prototype._unpad = function(t) {
            for (var e = t[t.length - 1], n = t.length - e; n < t.length; n++)
                r.equal(t[n], e);
            return t.slice(0, t.length - e)
        }
        ,
        f.prototype._encrypt = function(t, e, r, n, o) {
            for (var a = e, s = r, f = 0; f < t.keys.length; f += 2) {
                var h = t.keys[f]
                  , u = t.keys[f + 1];
                i.expand(s, t.tmp, 0),
                h ^= t.tmp[0],
                u ^= t.tmp[1];
                var c = i.substitute(h, u)
                  , d = s;
                s = (a ^ i.permute(c)) >>> 0,
                a = d
            }
            i.rip(s, a, n, o)
        }
        ,
        f.prototype._decrypt = function(t, e, r, n, o) {
            for (var a = r, s = e, f = t.keys.length - 2; f >= 0; f -= 2) {
                var h = t.keys[f]
                  , u = t.keys[f + 1];
                i.expand(a, t.tmp, 0),
                h ^= t.tmp[0],
                u ^= t.tmp[1];
                var c = i.substitute(h, u)
                  , d = a;
                a = (s ^ i.permute(c)) >>> 0,
                s = d
            }
            i.rip(a, s, n, o)
        }
    }
    )),
    o.register("hZZHQ", (function(e, r) {
        var n;
        t(e.exports, "instantiate", (()=>n), (t=>n = t));
        var i = o("10wuZ")
          , a = o("1hy4s")
          , s = {};
        function f(t) {
            i.equal(t.length, 8, "Invalid IV length"),
            this.iv = new Array(8);
            for (var e = 0; e < this.iv.length; e++)
                this.iv[e] = t[e]
        }
        n = function(t) {
            function e(e) {
                t.call(this, e),
                this._cbcInit()
            }
            a(e, t);
            for (var r = Object.keys(s), n = 0; n < r.length; n++) {
                var i = r[n];
                e.prototype[i] = s[i]
            }
            return e.create = function(t) {
                return new e(t)
            }
            ,
            e
        }
        ,
        s._cbcInit = function() {
            var t = new f(this.options.iv);
            this._cbcState = t
        }
        ,
        s._update = function(t, e, r, n) {
            var i = this._cbcState
              , o = this.constructor.super_.prototype
              , a = i.iv;
            if ("encrypt" === this.type) {
                for (var s = 0; s < this.blockSize; s++)
                    a[s] ^= t[e + s];
                o._update.call(this, a, 0, r, n);
                for (s = 0; s < this.blockSize; s++)
                    a[s] = r[n + s]
            } else {
                o._update.call(this, t, e, r, n);
                for (s = 0; s < this.blockSize; s++)
                    r[n + s] ^= a[s];
                for (s = 0; s < this.blockSize; s++)
                    a[s] = t[e + s]
            }
        }
    }
    )),
    o.register("EoJsk", (function(t, e) {
        "use strict";
        var r = o("10wuZ")
          , n = o("1hy4s")
          , i = o("5MZEO")
          , a = o("5W8z1");
        function s(t, e) {
            r.equal(e.length, 24, "Invalid key length");
            var n = e.slice(0, 8)
              , i = e.slice(8, 16)
              , o = e.slice(16, 24);
            this.ciphers = "encrypt" === t ? [a.create({
                type: "encrypt",
                key: n
            }), a.create({
                type: "decrypt",
                key: i
            }), a.create({
                type: "encrypt",
                key: o
            })] : [a.create({
                type: "decrypt",
                key: o
            }), a.create({
                type: "encrypt",
                key: i
            }), a.create({
                type: "decrypt",
                key: n
            })]
        }
        function f(t) {
            i.call(this, t);
            var e = new s(this.type,this.options.key);
            this._edeState = e
        }
        n(f, i),
        t.exports = f,
        f.create = function(t) {
            return new f(t)
        }
        ,
        f.prototype._update = function(t, e, r, n) {
            var i = this._edeState;
            i.ciphers[0]._update(t, e, r, n),
            i.ciphers[1]._update(r, n, r, n),
            i.ciphers[2]._update(r, n, r, n)
        }
        ,
        f.prototype._pad = a.prototype._pad,
        f.prototype._unpad = a.prototype._unpad
    }
    )),
    o.register("19viH", (function(e, r) {
        var n, i, a;
        t(e.exports, "createDecipheriv", (()=>a), (t=>a = t)),
        t(e.exports, "getCiphers", (()=>n), (t=>n = t)),
        t(e.exports, "createCipheriv", (()=>i), (t=>i = t));
        var s = o("24CY0")
          , f = o("tmYBv")
          , h = o("3oD6N");
        s.createCipher,
        i = s.createCipheriv,
        f.createDecipher,
        a = f.createDecipheriv,
        n = function() {
            return Object.keys(h)
        }
    }
    )),
    o.register("24CY0", (function(e, r) {
        var n, i;
        t(e.exports, "createCipheriv", (()=>n), (t=>n = t)),
        t(e.exports, "createCipher", (()=>i), (t=>i = t));
        var a = o("5QID0")
          , s = o("3gmtk")
          , f = o("5Xfjk").Buffer
          , h = o("7Ly5k")
          , u = o("20tx4")
          , c = o("39F6p")
          , d = o("1cBie");
        function l(t, e, r) {
            u.call(this),
            this._cache = new m,
            this._cipher = new c.AES(e),
            this._prev = f.from(r),
            this._mode = t,
            this._autopadding = !0
        }
        o("1hy4s")(l, u),
        l.prototype._update = function(t) {
            var e, r;
            this._cache.add(t);
            for (var n = []; e = this._cache.get(); )
                r = this._mode.encrypt(this, e),
                n.push(r);
            return f.concat(n)
        }
        ;
        var p = f.alloc(16, 16);
        function m() {
            this.cache = f.allocUnsafe(0)
        }
        function b(t, e, r) {
            var n = a[t.toLowerCase()];
            if (!n)
                throw new TypeError("invalid suite type");
            if ("string" == typeof e && (e = f.from(e)),
            e.length !== n.key / 8)
                throw new TypeError("invalid key length " + e.length);
            if ("string" == typeof r && (r = f.from(r)),
            "GCM" !== n.mode && r.length !== n.iv)
                throw new TypeError("invalid iv length " + r.length);
            return "stream" === n.type ? new h(n.module,e,r) : "auth" === n.type ? new s(n.module,e,r) : new l(n.module,e,r)
        }
        l.prototype._final = function() {
            var t = this._cache.flush();
            if (this._autopadding)
                return t = this._mode.encrypt(this, t),
                this._cipher.scrub(),
                t;
            if (!t.equals(p))
                throw this._cipher.scrub(),
                new Error("data not multiple of block length")
        }
        ,
        l.prototype.setAutoPadding = function(t) {
            return this._autopadding = !!t,
            this
        }
        ,
        m.prototype.add = function(t) {
            this.cache = f.concat([this.cache, t])
        }
        ,
        m.prototype.get = function() {
            if (this.cache.length > 15) {
                var t = this.cache.slice(0, 16);
                return this.cache = this.cache.slice(16),
                t
            }
            return null
        }
        ,
        m.prototype.flush = function() {
            for (var t = 16 - this.cache.length, e = f.allocUnsafe(t), r = -1; ++r < t; )
                e.writeUInt8(t, r);
            return f.concat([this.cache, e])
        }
        ,
        n = b,
        i = function(t, e) {
            var r = a[t.toLowerCase()];
            if (!r)
                throw new TypeError("invalid suite type");
            var n = d(e, !1, r.key, r.iv);
            return b(t, n.key, n.iv)
        }
    }
    )),
    o.register("5QID0", (function(t, e) {
        var r = {
            ECB: o("7dKIj"),
            CBC: o("5asYY"),
            CFB: o("7sKRE"),
            CFB8: o("1m26z"),
            CFB1: o("3VVqj"),
            OFB: o("1Vz1b"),
            CTR: o("5OmH3"),
            GCM: o("5OmH3")
        }
          , n = o("3oD6N");
        for (var i in n)
            n[i].module = r[n[i].mode];
        t.exports = n
    }
    )),
    o.register("7dKIj", (function(e, r) {
        var n, i;
        t(e.exports, "encrypt", (()=>n), (t=>n = t)),
        t(e.exports, "decrypt", (()=>i), (t=>i = t)),
        n = function(t, e) {
            return t._cipher.encryptBlock(e)
        }
        ,
        i = function(t, e) {
            return t._cipher.decryptBlock(e)
        }
    }
    )),
    o.register("5asYY", (function(e, r) {
        var n, i;
        t(e.exports, "encrypt", (()=>n), (t=>n = t)),
        t(e.exports, "decrypt", (()=>i), (t=>i = t));
        var a = o("2dw95");
        n = function(t, e) {
            var r = a(e, t._prev);
            return t._prev = t._cipher.encryptBlock(r),
            t._prev
        }
        ,
        i = function(t, e) {
            var r = t._prev;
            t._prev = e;
            var n = t._cipher.decryptBlock(e);
            return a(n, r)
        }
    }
    )),
    o.register("2dw95", (function(t, e) {
        var r = o("3tvKv").Buffer;
        t.exports = function(t, e) {
            for (var n = Math.min(t.length, e.length), i = new r(n), o = 0; o < n; ++o)
                i[o] = t[o] ^ e[o];
            return i
        }
    }
    )),
    o.register("7sKRE", (function(e, r) {
        var n;
        t(e.exports, "encrypt", (()=>n), (t=>n = t));
        var i = o("5Xfjk").Buffer
          , a = o("2dw95");
        function s(t, e, r) {
            var n = e.length
              , o = a(e, t._cache);
            return t._cache = t._cache.slice(n),
            t._prev = i.concat([t._prev, r ? e : o]),
            o
        }
        n = function(t, e, r) {
            for (var n, o = i.allocUnsafe(0); e.length; ) {
                if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev),
                t._prev = i.allocUnsafe(0)),
                !(t._cache.length <= e.length)) {
                    o = i.concat([o, s(t, e, r)]);
                    break
                }
                n = t._cache.length,
                o = i.concat([o, s(t, e.slice(0, n), r)]),
                e = e.slice(n)
            }
            return o
        }
    }
    )),
    o.register("1m26z", (function(e, r) {
        var n;
        t(e.exports, "encrypt", (()=>n), (t=>n = t));
        var i = o("5Xfjk").Buffer;
        function a(t, e, r) {
            var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
            return t._prev = i.concat([t._prev.slice(1), i.from([r ? e : n])]),
            n
        }
        n = function(t, e, r) {
            for (var n = e.length, o = i.allocUnsafe(n), s = -1; ++s < n; )
                o[s] = a(t, e[s], r);
            return o
        }
    }
    )),
    o.register("3VVqj", (function(e, r) {
        var n;
        t(e.exports, "encrypt", (()=>n), (t=>n = t));
        var i = o("5Xfjk").Buffer;
        function a(t, e, r) {
            for (var n, i, o = -1, a = 0; ++o < 8; )
                n = e & 1 << 7 - o ? 128 : 0,
                a += (128 & (i = t._cipher.encryptBlock(t._prev)[0] ^ n)) >> o % 8,
                t._prev = s(t._prev, r ? n : i);
            return a
        }
        function s(t, e) {
            var r = t.length
              , n = -1
              , o = i.allocUnsafe(t.length);
            for (t = i.concat([t, i.from([e])]); ++n < r; )
                o[n] = t[n] << 1 | t[n + 1] >> 7;
            return o
        }
        n = function(t, e, r) {
            for (var n = e.length, o = i.allocUnsafe(n), s = -1; ++s < n; )
                o[s] = a(t, e[s], r);
            return o
        }
    }
    )),
    o.register("1Vz1b", (function(e, r) {
        var n;
        t(e.exports, "encrypt", (()=>n), (t=>n = t));
        var i = o("3tvKv").Buffer
          , a = o("2dw95");
        function s(t) {
            return t._prev = t._cipher.encryptBlock(t._prev),
            t._prev
        }
        n = function(t, e) {
            for (; t._cache.length < e.length; )
                t._cache = i.concat([t._cache, s(t)]);
            var r = t._cache.slice(0, e.length);
            return t._cache = t._cache.slice(e.length),
            a(e, r)
        }
    }
    )),
    o.register("5OmH3", (function(e, r) {
        var n;
        t(e.exports, "encrypt", (()=>n), (t=>n = t));
        var i = o("2dw95")
          , a = o("5Xfjk").Buffer
          , s = o("5nNzw");
        function f(t) {
            var e = t._cipher.encryptBlockRaw(t._prev);
            return s(t._prev),
            e
        }
        n = function(t, e) {
            var r = Math.ceil(e.length / 16)
              , n = t._cache.length;
            t._cache = a.concat([t._cache, a.allocUnsafe(16 * r)]);
            for (var o = 0; o < r; o++) {
                var s = f(t)
                  , h = n + 16 * o;
                t._cache.writeUInt32BE(s[0], h + 0),
                t._cache.writeUInt32BE(s[1], h + 4),
                t._cache.writeUInt32BE(s[2], h + 8),
                t._cache.writeUInt32BE(s[3], h + 12)
            }
            var u = t._cache.slice(0, e.length);
            return t._cache = t._cache.slice(e.length),
            i(e, u)
        }
    }
    )),
    o.register("5nNzw", (function(t, e) {
        t.exports = function(t) {
            for (var e, r = t.length; r--; ) {
                if (255 !== (e = t.readUInt8(r))) {
                    e++,
                    t.writeUInt8(e, r);
                    break
                }
                t.writeUInt8(0, r)
            }
        }
    }
    )),
    o.register("3oD6N", (function(t, e) {
        t.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')
    }
    )),
    o.register("3gmtk", (function(t, e) {
        var r = o("39F6p")
          , n = o("5Xfjk").Buffer
          , i = o("20tx4")
          , a = o("1hy4s")
          , s = o("4Wovs")
          , f = o("2dw95")
          , h = o("5nNzw");
        function u(t, e, o, a) {
            i.call(this);
            var f = n.alloc(4, 0);
            this._cipher = new r.AES(e);
            var u = this._cipher.encryptBlock(f);
            this._ghash = new s(u),
            o = function(t, e, r) {
                if (12 === e.length)
                    return t._finID = n.concat([e, n.from([0, 0, 0, 1])]),
                    n.concat([e, n.from([0, 0, 0, 2])]);
                var i = new s(r)
                  , o = e.length
                  , a = o % 16;
                i.update(e),
                a && (a = 16 - a,
                i.update(n.alloc(a, 0))),
                i.update(n.alloc(8, 0));
                var f = 8 * o
                  , u = n.alloc(8);
                u.writeUIntBE(f, 0, 8),
                i.update(u),
                t._finID = i.state;
                var c = n.from(t._finID);
                return h(c),
                c
            }(this, o, u),
            this._prev = n.from(o),
            this._cache = n.allocUnsafe(0),
            this._secCache = n.allocUnsafe(0),
            this._decrypt = a,
            this._alen = 0,
            this._len = 0,
            this._mode = t,
            this._authTag = null,
            this._called = !1
        }
        a(u, i),
        u.prototype._update = function(t) {
            if (!this._called && this._alen) {
                var e = 16 - this._alen % 16;
                e < 16 && (e = n.alloc(e, 0),
                this._ghash.update(e))
            }
            this._called = !0;
            var r = this._mode.encrypt(this, t);
            return this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
            this._len += t.length,
            r
        }
        ,
        u.prototype._final = function() {
            if (this._decrypt && !this._authTag)
                throw new Error("Unsupported state or unable to authenticate data");
            var t = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
            if (this._decrypt && function(t, e) {
                var r = 0;
                t.length !== e.length && r++;
                for (var n = Math.min(t.length, e.length), i = 0; i < n; ++i)
                    r += t[i] ^ e[i];
                return r
            }(t, this._authTag))
                throw new Error("Unsupported state or unable to authenticate data");
            this._authTag = t,
            this._cipher.scrub()
        }
        ,
        u.prototype.getAuthTag = function() {
            if (this._decrypt || !n.isBuffer(this._authTag))
                throw new Error("Attempting to get auth tag in unsupported state");
            return this._authTag
        }
        ,
        u.prototype.setAuthTag = function(t) {
            if (!this._decrypt)
                throw new Error("Attempting to set auth tag in unsupported state");
            this._authTag = t
        }
        ,
        u.prototype.setAAD = function(t) {
            if (this._called)
                throw new Error("Attempting to set AAD in unsupported state");
            this._ghash.update(t),
            this._alen += t.length
        }
        ,
        t.exports = u
    }
    )),
    o.register("39F6p", (function(e, r) {
        var n;
        t(e.exports, "AES", (()=>n), (t=>n = t));
        var i = o("5Xfjk").Buffer;
        function a(t) {
            i.isBuffer(t) || (t = i.from(t));
            for (var e = t.length / 4 | 0, r = new Array(e), n = 0; n < e; n++)
                r[n] = t.readUInt32BE(4 * n);
            return r
        }
        function s(t) {
            for (; 0 < t.length; t++)
                t[0] = 0
        }
        function f(t, e, r, n, i) {
            for (var o, a, s, f, h = r[0], u = r[1], c = r[2], d = r[3], l = t[0] ^ e[0], p = t[1] ^ e[1], m = t[2] ^ e[2], b = t[3] ^ e[3], g = 4, v = 1; v < i; v++)
                o = h[l >>> 24] ^ u[p >>> 16 & 255] ^ c[m >>> 8 & 255] ^ d[255 & b] ^ e[g++],
                a = h[p >>> 24] ^ u[m >>> 16 & 255] ^ c[b >>> 8 & 255] ^ d[255 & l] ^ e[g++],
                s = h[m >>> 24] ^ u[b >>> 16 & 255] ^ c[l >>> 8 & 255] ^ d[255 & p] ^ e[g++],
                f = h[b >>> 24] ^ u[l >>> 16 & 255] ^ c[p >>> 8 & 255] ^ d[255 & m] ^ e[g++],
                l = o,
                p = a,
                m = s,
                b = f;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[m >>> 8 & 255] << 8 | n[255 & b]) ^ e[g++],
            a = (n[p >>> 24] << 24 | n[m >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & l]) ^ e[g++],
            s = (n[m >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ e[g++],
            f = (n[b >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & m]) ^ e[g++],
            [o >>>= 0, a >>>= 0, s >>>= 0, f >>>= 0]
        }
        var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
          , u = function() {
            for (var t = new Array(256), e = 0; e < 256; e++)
                t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            for (var r = [], n = [], i = [[], [], [], []], o = [[], [], [], []], a = 0, s = 0, f = 0; f < 256; ++f) {
                var h = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                h = h >>> 8 ^ 255 & h ^ 99,
                r[a] = h,
                n[h] = a;
                var u = t[a]
                  , c = t[u]
                  , d = t[c]
                  , l = 257 * t[h] ^ 16843008 * h;
                i[0][a] = l << 24 | l >>> 8,
                i[1][a] = l << 16 | l >>> 16,
                i[2][a] = l << 8 | l >>> 24,
                i[3][a] = l,
                l = 16843009 * d ^ 65537 * c ^ 257 * u ^ 16843008 * a,
                o[0][h] = l << 24 | l >>> 8,
                o[1][h] = l << 16 | l >>> 16,
                o[2][h] = l << 8 | l >>> 24,
                o[3][h] = l,
                0 === a ? a = s = 1 : (a = u ^ t[t[t[d ^ u]]],
                s ^= t[t[s]])
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: o
            }
        }();
        function c(t) {
            this._key = a(t),
            this._reset()
        }
        c.blockSize = 16,
        c.keySize = 32,
        c.prototype.blockSize = c.blockSize,
        c.prototype.keySize = c.keySize,
        c.prototype._reset = function() {
            for (var t = this._key, e = t.length, r = e + 6, n = 4 * (r + 1), i = [], o = 0; o < e; o++)
                i[o] = t[o];
            for (o = e; o < n; o++) {
                var a = i[o - 1];
                o % e == 0 ? (a = a << 8 | a >>> 24,
                a = u.SBOX[a >>> 24] << 24 | u.SBOX[a >>> 16 & 255] << 16 | u.SBOX[a >>> 8 & 255] << 8 | u.SBOX[255 & a],
                a ^= h[o / e | 0] << 24) : e > 6 && o % e == 4 && (a = u.SBOX[a >>> 24] << 24 | u.SBOX[a >>> 16 & 255] << 16 | u.SBOX[a >>> 8 & 255] << 8 | u.SBOX[255 & a]),
                i[o] = i[o - e] ^ a
            }
            for (var s = [], f = 0; f < n; f++) {
                var c = n - f
                  , d = i[c - (f % 4 ? 0 : 4)];
                s[f] = f < 4 || c <= 4 ? d : u.INV_SUB_MIX[0][u.SBOX[d >>> 24]] ^ u.INV_SUB_MIX[1][u.SBOX[d >>> 16 & 255]] ^ u.INV_SUB_MIX[2][u.SBOX[d >>> 8 & 255]] ^ u.INV_SUB_MIX[3][u.SBOX[255 & d]]
            }
            this._nRounds = r,
            this._keySchedule = i,
            this._invKeySchedule = s
        }
        ,
        c.prototype.encryptBlockRaw = function(t) {
            return f(t = a(t), this._keySchedule, u.SUB_MIX, u.SBOX, this._nRounds)
        }
        ,
        c.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t)
              , r = i.allocUnsafe(16);
            return r.writeUInt32BE(e[0], 0),
            r.writeUInt32BE(e[1], 4),
            r.writeUInt32BE(e[2], 8),
            r.writeUInt32BE(e[3], 12),
            r
        }
        ,
        c.prototype.decryptBlock = function(t) {
            var e = (t = a(t))[1];
            t[1] = t[3],
            t[3] = e;
            var r = f(t, this._invKeySchedule, u.INV_SUB_MIX, u.INV_SBOX, this._nRounds)
              , n = i.allocUnsafe(16);
            return n.writeUInt32BE(r[0], 0),
            n.writeUInt32BE(r[3], 4),
            n.writeUInt32BE(r[2], 8),
            n.writeUInt32BE(r[1], 12),
            n
        }
        ,
        c.prototype.scrub = function() {
            s(this._keySchedule),
            s(this._invKeySchedule),
            s(this._key)
        }
        ,
        n = c
    }
    )),
    o.register("4Wovs", (function(t, e) {
        var r = o("5Xfjk").Buffer
          , n = r.alloc(16, 0);
        function i(t) {
            var e = r.allocUnsafe(16);
            return e.writeUInt32BE(t[0] >>> 0, 0),
            e.writeUInt32BE(t[1] >>> 0, 4),
            e.writeUInt32BE(t[2] >>> 0, 8),
            e.writeUInt32BE(t[3] >>> 0, 12),
            e
        }
        function a(t) {
            this.h = t,
            this.state = r.alloc(16, 0),
            this.cache = r.allocUnsafe(0)
        }
        a.prototype.ghash = function(t) {
            for (var e = -1; ++e < t.length; )
                this.state[e] ^= t[e];
            this._multiply()
        }
        ,
        a.prototype._multiply = function() {
            for (var t, e, r, n = [(t = this.h).readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)], o = [0, 0, 0, 0], a = -1; ++a < 128; ) {
                for (0 != (this.state[~~(a / 8)] & 1 << 7 - a % 8) && (o[0] ^= n[0],
                o[1] ^= n[1],
                o[2] ^= n[2],
                o[3] ^= n[3]),
                r = 0 != (1 & n[3]),
                e = 3; e > 0; e--)
                    n[e] = n[e] >>> 1 | (1 & n[e - 1]) << 31;
                n[0] = n[0] >>> 1,
                r && (n[0] = -520093696 ^ n[0])
            }
            this.state = i(o)
        }
        ,
        a.prototype.update = function(t) {
            var e;
            for (this.cache = r.concat([this.cache, t]); this.cache.length >= 16; )
                e = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                this.ghash(e)
        }
        ,
        a.prototype.final = function(t, e) {
            return this.cache.length && this.ghash(r.concat([this.cache, n], 16)),
            this.ghash(i([0, t, 0, e])),
            this.state
        }
        ,
        t.exports = a
    }
    )),
    o.register("7Ly5k", (function(t, e) {
        var r = o("39F6p")
          , n = o("5Xfjk").Buffer
          , i = o("20tx4");
        function a(t, e, o, a) {
            i.call(this),
            this._cipher = new r.AES(e),
            this._prev = n.from(o),
            this._cache = n.allocUnsafe(0),
            this._secCache = n.allocUnsafe(0),
            this._decrypt = a,
            this._mode = t
        }
        o("1hy4s")(a, i),
        a.prototype._update = function(t) {
            return this._mode.encrypt(this, t, this._decrypt)
        }
        ,
        a.prototype._final = function() {
            this._cipher.scrub()
        }
        ,
        t.exports = a
    }
    )),
    o.register("1cBie", (function(t, e) {
        var r = o("5Xfjk").Buffer
          , n = o("6D5SR");
        t.exports = function(t, e, i, o) {
            if (r.isBuffer(t) || (t = r.from(t, "binary")),
            e && (r.isBuffer(e) || (e = r.from(e, "binary")),
            8 !== e.length))
                throw new RangeError("salt should be Buffer with 8 byte length");
            for (var a = i / 8, s = r.alloc(a), f = r.alloc(o || 0), h = r.alloc(0); a > 0 || o > 0; ) {
                var u = new n;
                u.update(h),
                u.update(t),
                e && u.update(e),
                h = u.digest();
                var c = 0;
                if (a > 0) {
                    var d = s.length - a;
                    c = Math.min(a, h.length),
                    h.copy(s, d, 0, c),
                    a -= c
                }
                if (c < h.length && o > 0) {
                    var l = f.length - o
                      , p = Math.min(o, h.length - c);
                    h.copy(f, l, c, c + p),
                    o -= p
                }
            }
            return h.fill(0),
            {
                key: s,
                iv: f
            }
        }
    }
    )),
    o.register("tmYBv", (function(e, r) {
        var n, i;
        t(e.exports, "createDecipheriv", (()=>n), (t=>n = t)),
        t(e.exports, "createDecipher", (()=>i), (t=>i = t));
        var a = o("3gmtk")
          , s = o("5Xfjk").Buffer
          , f = o("5QID0")
          , h = o("7Ly5k")
          , u = o("20tx4")
          , c = o("39F6p")
          , d = o("1cBie");
        function l(t, e, r) {
            u.call(this),
            this._cache = new p,
            this._last = void 0,
            this._cipher = new c.AES(e),
            this._prev = s.from(r),
            this._mode = t,
            this._autopadding = !0
        }
        function p() {
            this.cache = s.allocUnsafe(0)
        }
        function m(t, e, r) {
            var n = f[t.toLowerCase()];
            if (!n)
                throw new TypeError("invalid suite type");
            if ("string" == typeof r && (r = s.from(r)),
            "GCM" !== n.mode && r.length !== n.iv)
                throw new TypeError("invalid iv length " + r.length);
            if ("string" == typeof e && (e = s.from(e)),
            e.length !== n.key / 8)
                throw new TypeError("invalid key length " + e.length);
            return "stream" === n.type ? new h(n.module,e,r,!0) : "auth" === n.type ? new a(n.module,e,r,!0) : new l(n.module,e,r)
        }
        o("1hy4s")(l, u),
        l.prototype._update = function(t) {
            var e, r;
            this._cache.add(t);
            for (var n = []; e = this._cache.get(this._autopadding); )
                r = this._mode.decrypt(this, e),
                n.push(r);
            return s.concat(n)
        }
        ,
        l.prototype._final = function() {
            var t = this._cache.flush();
            if (this._autopadding)
                return function(t) {
                    var e = t[15];
                    if (e < 1 || e > 16)
                        throw new Error("unable to decrypt data");
                    var r = -1;
                    for (; ++r < e; )
                        if (t[r + (16 - e)] !== e)
                            throw new Error("unable to decrypt data");
                    if (16 === e)
                        return;
                    return t.slice(0, 16 - e)
                }(this._mode.decrypt(this, t));
            if (t)
                throw new Error("data not multiple of block length")
        }
        ,
        l.prototype.setAutoPadding = function(t) {
            return this._autopadding = !!t,
            this
        }
        ,
        p.prototype.add = function(t) {
            this.cache = s.concat([this.cache, t])
        }
        ,
        p.prototype.get = function(t) {
            var e;
            if (t) {
                if (this.cache.length > 16)
                    return e = this.cache.slice(0, 16),
                    this.cache = this.cache.slice(16),
                    e
            } else if (this.cache.length >= 16)
                return e = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                e;
            return null
        }
        ,
        p.prototype.flush = function() {
            if (this.cache.length)
                return this.cache
        }
        ,
        i = function(t, e) {
            var r = f[t.toLowerCase()];
            if (!r)
                throw new TypeError("invalid suite type");
            var n = d(e, !1, r.key, r.iv);
            return m(t, n.key, n.iv)
        }
        ,
        n = m
    }
    )),
    o.register("29765", (function(e, r) {
        var n, i, o, a, s, f, h, u;
        t(e.exports, "des-ede3-cbc", (()=>u), (t=>u = t)),
        t(e.exports, "des", (()=>h), (t=>h = t)),
        t(e.exports, "des-ede", (()=>f), (t=>f = t)),
        t(e.exports, "des-ede-cbc", (()=>a), (t=>a = t)),
        t(e.exports, "des3", (()=>i), (t=>i = t)),
        t(e.exports, "des-cbc", (()=>s), (t=>s = t)),
        t(e.exports, "des-ede3", (()=>o), (t=>o = t)),
        t(e.exports, "des-ecb", (()=>n), (t=>n = t)),
        n = {
            key: 8,
            iv: 0
        },
        s = h = {
            key: 8,
            iv: 8
        },
        u = i = {
            key: 24,
            iv: 8
        },
        o = {
            key: 24,
            iv: 0
        },
        a = {
            key: 16,
            iv: 8
        },
        f = {
            key: 16,
            iv: 0
        }
    }
    )),
    o.register("7GgLc", (function(e, r) {
        var n, i, a, s, f;
        t(e.exports, "createDiffieHellmanGroup", (()=>a), (t=>a = t)),
        t(e.exports, "createDiffieHellman", (()=>s), (t=>s = t)),
        t(e.exports, "DiffieHellman", (()=>n), (t=>n = t)),
        t(e.exports, "getDiffieHellman", (()=>f), (t=>f = t)),
        t(e.exports, "DiffieHellmanGroup", (()=>i), (t=>i = t));
        var h = o("3tvKv").Buffer
          , u = o("2nM5d")
          , c = o("6WzbI")
          , d = o("1YZ97");
        var l = {
            binary: !0,
            hex: !0,
            base64: !0
        };
        i = a = f = function(t) {
            var e = new h(c[t].prime,"hex")
              , r = new h(c[t].gen,"hex");
            return new d(e,r)
        }
        ,
        s = n = function t(e, r, n, i) {
            return h.isBuffer(r) || void 0 === l[r] ? t(e, "binary", r, n) : (r = r || "binary",
            i = i || "binary",
            n = n || new h([2]),
            h.isBuffer(n) || (n = new h(n,i)),
            "number" == typeof e ? new d(u(e, n),n,!0) : (h.isBuffer(e) || (e = new h(e,r)),
            new d(e,n,!0)))
        }
    }
    )),
    o.register("2nM5d", (function(t, e) {
        var r = o("6DQjm");
        t.exports = g,
        g.simpleSieve = m,
        g.fermatTest = b;
        var n = o("76R5V")
          , i = new n(24)
          , a = new (o("1QcBA"))
          , s = new n(1)
          , f = new n(2)
          , h = new n(5)
          , u = (new n(16),
        new n(8),
        new n(10))
          , c = new n(3)
          , d = (new n(7),
        new n(11))
          , l = new n(4)
          , p = (new n(12),
        null);
        function m(t) {
            for (var e = function() {
                if (null !== p)
                    return p;
                var t = [];
                t[0] = 2;
                for (var e = 1, r = 3; r < 1048576; r += 2) {
                    for (var n = Math.ceil(Math.sqrt(r)), i = 0; i < e && t[i] <= n && r % t[i] != 0; i++)
                        ;
                    e !== i && t[i] <= n || (t[e++] = r)
                }
                return p = t,
                t
            }(), r = 0; r < e.length; r++)
                if (0 === t.modn(e[r]))
                    return 0 === t.cmpn(e[r]);
            return !0
        }
        function b(t) {
            var e = n.mont(t);
            return 0 === f.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)
        }
        function g(t, e) {
            if (t < 16)
                return new n(2 === e || 5 === e ? [140, 123] : [140, 39]);
            var o, p;
            for (e = new n(e); ; ) {
                for (o = new n(r(Math.ceil(t / 8))); o.bitLength() > t; )
                    o.ishrn(1);
                if (o.isEven() && o.iadd(s),
                o.testn(1) || o.iadd(f),
                e.cmp(f)) {
                    if (!e.cmp(h))
                        for (; o.mod(u).cmp(c); )
                            o.iadd(l)
                } else
                    for (; o.mod(i).cmp(d); )
                        o.iadd(l);
                if (m(p = o.shrn(1)) && m(o) && b(p) && b(o) && a.test(p) && a.test(o))
                    return o
            }
        }
    }
    )),
    o.register("76R5V", (function(t, e) {
        !function(t, e) {
            function r(t, e) {
                if (!t)
                    throw new Error(e || "Assertion failed")
            }
            function n(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
            function i(t, e, r) {
                if (i.isBN(t))
                    return t;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== t && ("le" !== e && "be" !== e || (r = e,
                e = 10),
                this._init(t || 0, e || 10, r || "be"))
            }
            var a;
            "object" == typeof t ? t.exports = i : e.BN = i,
            i.BN = i,
            i.wordSize = 26;
            try {
                a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : o("4w6kb").Buffer
            } catch (t) {}
            function s(t, e) {
                var r = t.charCodeAt(e);
                return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
            }
            function f(t, e, r) {
                var n = s(t, r);
                return r - 1 >= e && (n |= s(t, r - 1) << 4),
                n
            }
            function h(t, e, r, n) {
                for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
                    var s = t.charCodeAt(a) - 48;
                    i *= n,
                    i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return i
            }
            i.isBN = function(t) {
                return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words)
            }
            ,
            i.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e
            }
            ,
            i.min = function(t, e) {
                return t.cmp(e) < 0 ? t : e
            }
            ,
            i.prototype._init = function(t, e, n) {
                if ("number" == typeof t)
                    return this._initNumber(t, e, n);
                if ("object" == typeof t)
                    return this._initArray(t, e, n);
                "hex" === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++,
                this.negative = 1),
                i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i),
                "le" === n && this._initArray(this.toArray(), e, n)))
            }
            ,
            i.prototype._initNumber = function(t, e, n) {
                t < 0 && (this.negative = 1,
                t = -t),
                t < 67108864 ? (this.words = [67108863 & t],
                this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                this.length = 2) : (r(t < 9007199254740992),
                this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === n && this._initArray(this.toArray(), e, n)
            }
            ,
            i.prototype._initArray = function(t, e, n) {
                if (r("number" == typeof t.length),
                t.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(t.length / 3),
                this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var o, a, s = 0;
                if ("be" === n)
                    for (i = t.length - 1,
                    o = 0; i >= 0; i -= 3)
                        a = t[i] | t[i - 1] << 8 | t[i - 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                else if ("le" === n)
                    for (i = 0,
                    o = 0; i < t.length; i += 3)
                        a = t[i] | t[i + 1] << 8 | t[i + 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                return this.strip()
            }
            ,
            i.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var i, o = 0, a = 0;
                if ("be" === r)
                    for (n = t.length - 1; n >= e; n -= 2)
                        i = f(t, e, n) << o,
                        this.words[a] |= 67108863 & i,
                        o >= 18 ? (o -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : o += 8;
                else
                    for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)
                        i = f(t, e, n) << o,
                        this.words[a] |= 67108863 & i,
                        o >= 18 ? (o -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : o += 8;
                this.strip()
            }
            ,
            i.prototype._parseBase = function(t, e, r) {
                this.words = [0],
                this.length = 1;
                for (var n = 0, i = 1; i <= 67108863; i *= e)
                    n++;
                n--,
                i = i / e | 0;
                for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, f = 0, u = r; u < s; u += n)
                    f = h(t, u, u + n, e),
                    this.imuln(i),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== a) {
                    var c = 1;
                    for (f = h(t, u, t.length, e),
                    u = 0; u < a; u++)
                        c *= e;
                    this.imuln(c),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                }
                this.strip()
            }
            ,
            i.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var e = 0; e < this.length; e++)
                    t.words[e] = this.words[e];
                t.length = this.length,
                t.negative = this.negative,
                t.red = this.red
            }
            ,
            i.prototype.clone = function() {
                var t = new i(null);
                return this.copy(t),
                t
            }
            ,
            i.prototype._expand = function(t) {
                for (; this.length < t; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            i.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            i.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            i.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            ;
            var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function l(t, e, r) {
                r.negative = e.negative ^ t.negative;
                var n = t.length + e.length | 0;
                r.length = n,
                n = n - 1 | 0;
                var i = 0 | t.words[0]
                  , o = 0 | e.words[0]
                  , a = i * o
                  , s = 67108863 & a
                  , f = a / 67108864 | 0;
                r.words[0] = s;
                for (var h = 1; h < n; h++) {
                    for (var u = f >>> 26, c = 67108863 & f, d = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= d; l++) {
                        var p = h - l | 0;
                        u += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + c) / 67108864 | 0,
                        c = 67108863 & a
                    }
                    r.words[h] = 0 | c,
                    f = 0 | u
                }
                return 0 !== f ? r.words[h] = 0 | f : r.length--,
                r.strip()
            }
            i.prototype.toString = function(t, e) {
                var n;
                if (e = 0 | e || 1,
                16 === (t = t || 10) || "hex" === t) {
                    n = "";
                    for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a]
                          , f = (16777215 & (s << i | o)).toString(16);
                        n = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? u[6 - f.length] + f + n : f + n,
                        (i += 2) >= 26 && (i -= 26,
                        a--)
                    }
                    for (0 !== o && (n = o.toString(16) + n); n.length % e != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var h = c[t]
                      , l = d[t];
                    n = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero(); ) {
                        var m = p.modn(l).toString(t);
                        n = (p = p.idivn(l)).isZero() ? m + n : u[h - m.length] + m + n
                    }
                    for (this.isZero() && (n = "0" + n); n.length % e != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                r(!1, "Base should be between 2 and 36")
            }
            ,
            i.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
            }
            ,
            i.prototype.toJSON = function() {
                return this.toString(16)
            }
            ,
            i.prototype.toBuffer = function(t, e) {
                return r(void 0 !== a),
                this.toArrayLike(a, t, e)
            }
            ,
            i.prototype.toArray = function(t, e) {
                return this.toArrayLike(Array, t, e)
            }
            ,
            i.prototype.toArrayLike = function(t, e, n) {
                var i = this.byteLength()
                  , o = n || Math.max(1, i);
                r(i <= o, "byte array longer than desired length"),
                r(o > 0, "Requested array length <= 0"),
                this.strip();
                var a, s, f = "le" === e, h = new t(o), u = this.clone();
                if (f) {
                    for (s = 0; !u.isZero(); s++)
                        a = u.andln(255),
                        u.iushrn(8),
                        h[s] = a;
                    for (; s < o; s++)
                        h[s] = 0
                } else {
                    for (s = 0; s < o - i; s++)
                        h[s] = 0;
                    for (s = 0; !u.isZero(); s++)
                        a = u.andln(255),
                        u.iushrn(8),
                        h[o - s - 1] = a
                }
                return h
            }
            ,
            Math.clz32 ? i.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            }
            : i.prototype._countBits = function(t) {
                var e = t
                  , r = 0;
                return e >= 4096 && (r += 13,
                e >>>= 13),
                e >= 64 && (r += 7,
                e >>>= 7),
                e >= 8 && (r += 4,
                e >>>= 4),
                e >= 2 && (r += 2,
                e >>>= 2),
                r + e
            }
            ,
            i.prototype._zeroBits = function(t) {
                if (0 === t)
                    return 26;
                var e = t
                  , r = 0;
                return 0 == (8191 & e) && (r += 13,
                e >>>= 13),
                0 == (127 & e) && (r += 7,
                e >>>= 7),
                0 == (15 & e) && (r += 4,
                e >>>= 4),
                0 == (3 & e) && (r += 2,
                e >>>= 2),
                0 == (1 & e) && r++,
                r
            }
            ,
            i.prototype.bitLength = function() {
                var t = this.words[this.length - 1]
                  , e = this._countBits(t);
                return 26 * (this.length - 1) + e
            }
            ,
            i.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var t = 0, e = 0; e < this.length; e++) {
                    var r = this._zeroBits(this.words[e]);
                    if (t += r,
                    26 !== r)
                        break
                }
                return t
            }
            ,
            i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            i.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }
            ,
            i.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }
            ,
            i.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            i.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            i.prototype.iuor = function(t) {
                for (; this.length < t.length; )
                    this.words[this.length++] = 0;
                for (var e = 0; e < t.length; e++)
                    this.words[e] = this.words[e] | t.words[e];
                return this.strip()
            }
            ,
            i.prototype.ior = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuor(t)
            }
            ,
            i.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }
            ,
            i.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }
            ,
            i.prototype.iuand = function(t) {
                var e;
                e = this.length > t.length ? t : this;
                for (var r = 0; r < e.length; r++)
                    this.words[r] = this.words[r] & t.words[r];
                return this.length = e.length,
                this.strip()
            }
            ,
            i.prototype.iand = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuand(t)
            }
            ,
            i.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }
            ,
            i.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }
            ,
            i.prototype.iuxor = function(t) {
                var e, r;
                this.length > t.length ? (e = this,
                r = t) : (e = t,
                r = this);
                for (var n = 0; n < r.length; n++)
                    this.words[n] = e.words[n] ^ r.words[n];
                if (this !== e)
                    for (; n < e.length; n++)
                        this.words[n] = e.words[n];
                return this.length = e.length,
                this.strip()
            }
            ,
            i.prototype.ixor = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuxor(t)
            }
            ,
            i.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }
            ,
            i.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }
            ,
            i.prototype.inotn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26)
                  , n = t % 26;
                this._expand(e),
                n > 0 && e--;
                for (var i = 0; i < e; i++)
                    this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n),
                this.strip()
            }
            ,
            i.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }
            ,
            i.prototype.setn = function(t, e) {
                r("number" == typeof t && t >= 0);
                var n = t / 26 | 0
                  , i = t % 26;
                return this._expand(n + 1),
                this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i),
                this.strip()
            }
            ,
            i.prototype.iadd = function(t) {
                var e, r, n;
                if (0 !== this.negative && 0 === t.negative)
                    return this.negative = 0,
                    e = this.isub(t),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== t.negative)
                    return t.negative = 0,
                    e = this.isub(t),
                    t.negative = 1,
                    e._normSign();
                this.length > t.length ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var i = 0, o = 0; o < n.length; o++)
                    e = (0 | r.words[o]) + (0 | n.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                for (; 0 !== i && o < r.length; o++)
                    e = (0 | r.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                if (this.length = r.length,
                0 !== i)
                    this.words[this.length] = i,
                    this.length++;
                else if (r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this
            }
            ,
            i.prototype.add = function(t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                e = this.sub(t),
                t.negative ^= 1,
                e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                e = t.sub(this),
                this.negative = 1,
                e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }
            ,
            i.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e = this.iadd(t);
                    return t.negative = 1,
                    e._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(t),
                    this.negative = 1,
                    this._normSign();
                var r, n, i = this.cmp(t);
                if (0 === i)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                i > 0 ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var o = 0, a = 0; a < n.length; a++)
                    o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & e;
                for (; 0 !== o && a < r.length; a++)
                    o = (e = (0 | r.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & e;
                if (0 === o && a < r.length && r !== this)
                    for (; a < r.length; a++)
                        this.words[a] = r.words[a];
                return this.length = Math.max(this.length, a),
                r !== this && (this.negative = 1),
                this.strip()
            }
            ,
            i.prototype.sub = function(t) {
                return this.clone().isub(t)
            }
            ;
            var p = function(t, e, r) {
                var n, i, o, a = t.words, s = e.words, f = r.words, h = 0, u = 0 | a[0], c = 8191 & u, d = u >>> 13, l = 0 | a[1], p = 8191 & l, m = l >>> 13, b = 0 | a[2], g = 8191 & b, v = b >>> 13, y = 0 | a[3], w = 8191 & y, _ = y >>> 13, A = 0 | a[4], M = 8191 & A, E = A >>> 13, S = 0 | a[5], k = 8191 & S, x = S >>> 13, B = 0 | a[6], R = 8191 & B, T = B >>> 13, C = 0 | a[7], D = 8191 & C, I = C >>> 13, P = 0 | a[8], O = 8191 & P, L = P >>> 13, j = 0 | a[9], U = 8191 & j, N = j >>> 13, z = 0 | s[0], F = 8191 & z, q = z >>> 13, Y = 0 | s[1], H = 8191 & Y, W = Y >>> 13, K = 0 | s[2], G = 8191 & K, Z = K >>> 13, V = 0 | s[3], X = 8191 & V, $ = V >>> 13, Q = 0 | s[4], J = 8191 & Q, tt = Q >>> 13, et = 0 | s[5], rt = 8191 & et, nt = et >>> 13, it = 0 | s[6], ot = 8191 & it, at = it >>> 13, st = 0 | s[7], ft = 8191 & st, ht = st >>> 13, ut = 0 | s[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | s[9], pt = 8191 & lt, mt = lt >>> 13;
                r.negative = t.negative ^ e.negative,
                r.length = 19;
                var bt = (h + (n = Math.imul(c, F)) | 0) + ((8191 & (i = (i = Math.imul(c, q)) + Math.imul(d, F) | 0)) << 13) | 0;
                h = ((o = Math.imul(d, q)) + (i >>> 13) | 0) + (bt >>> 26) | 0,
                bt &= 67108863,
                n = Math.imul(p, F),
                i = (i = Math.imul(p, q)) + Math.imul(m, F) | 0,
                o = Math.imul(m, q);
                var gt = (h + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, W) | 0) + Math.imul(d, H) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, W) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0,
                gt &= 67108863,
                n = Math.imul(g, F),
                i = (i = Math.imul(g, q)) + Math.imul(v, F) | 0,
                o = Math.imul(v, q),
                n = n + Math.imul(p, H) | 0,
                i = (i = i + Math.imul(p, W) | 0) + Math.imul(m, H) | 0,
                o = o + Math.imul(m, W) | 0;
                var vt = (h + (n = n + Math.imul(c, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, Z) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, Z) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0,
                vt &= 67108863,
                n = Math.imul(w, F),
                i = (i = Math.imul(w, q)) + Math.imul(_, F) | 0,
                o = Math.imul(_, q),
                n = n + Math.imul(g, H) | 0,
                i = (i = i + Math.imul(g, W) | 0) + Math.imul(v, H) | 0,
                o = o + Math.imul(v, W) | 0,
                n = n + Math.imul(p, G) | 0,
                i = (i = i + Math.imul(p, Z) | 0) + Math.imul(m, G) | 0,
                o = o + Math.imul(m, Z) | 0;
                var yt = (h + (n = n + Math.imul(c, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, $) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0,
                yt &= 67108863,
                n = Math.imul(M, F),
                i = (i = Math.imul(M, q)) + Math.imul(E, F) | 0,
                o = Math.imul(E, q),
                n = n + Math.imul(w, H) | 0,
                i = (i = i + Math.imul(w, W) | 0) + Math.imul(_, H) | 0,
                o = o + Math.imul(_, W) | 0,
                n = n + Math.imul(g, G) | 0,
                i = (i = i + Math.imul(g, Z) | 0) + Math.imul(v, G) | 0,
                o = o + Math.imul(v, Z) | 0,
                n = n + Math.imul(p, X) | 0,
                i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, X) | 0,
                o = o + Math.imul(m, $) | 0;
                var wt = (h + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0,
                wt &= 67108863,
                n = Math.imul(k, F),
                i = (i = Math.imul(k, q)) + Math.imul(x, F) | 0,
                o = Math.imul(x, q),
                n = n + Math.imul(M, H) | 0,
                i = (i = i + Math.imul(M, W) | 0) + Math.imul(E, H) | 0,
                o = o + Math.imul(E, W) | 0,
                n = n + Math.imul(w, G) | 0,
                i = (i = i + Math.imul(w, Z) | 0) + Math.imul(_, G) | 0,
                o = o + Math.imul(_, Z) | 0,
                n = n + Math.imul(g, X) | 0,
                i = (i = i + Math.imul(g, $) | 0) + Math.imul(v, X) | 0,
                o = o + Math.imul(v, $) | 0,
                n = n + Math.imul(p, J) | 0,
                i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, J) | 0,
                o = o + Math.imul(m, tt) | 0;
                var _t = (h + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0,
                _t &= 67108863,
                n = Math.imul(R, F),
                i = (i = Math.imul(R, q)) + Math.imul(T, F) | 0,
                o = Math.imul(T, q),
                n = n + Math.imul(k, H) | 0,
                i = (i = i + Math.imul(k, W) | 0) + Math.imul(x, H) | 0,
                o = o + Math.imul(x, W) | 0,
                n = n + Math.imul(M, G) | 0,
                i = (i = i + Math.imul(M, Z) | 0) + Math.imul(E, G) | 0,
                o = o + Math.imul(E, Z) | 0,
                n = n + Math.imul(w, X) | 0,
                i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, X) | 0,
                o = o + Math.imul(_, $) | 0,
                n = n + Math.imul(g, J) | 0,
                i = (i = i + Math.imul(g, tt) | 0) + Math.imul(v, J) | 0,
                o = o + Math.imul(v, tt) | 0,
                n = n + Math.imul(p, rt) | 0,
                i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0,
                o = o + Math.imul(m, nt) | 0;
                var At = (h + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, at) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0,
                At &= 67108863,
                n = Math.imul(D, F),
                i = (i = Math.imul(D, q)) + Math.imul(I, F) | 0,
                o = Math.imul(I, q),
                n = n + Math.imul(R, H) | 0,
                i = (i = i + Math.imul(R, W) | 0) + Math.imul(T, H) | 0,
                o = o + Math.imul(T, W) | 0,
                n = n + Math.imul(k, G) | 0,
                i = (i = i + Math.imul(k, Z) | 0) + Math.imul(x, G) | 0,
                o = o + Math.imul(x, Z) | 0,
                n = n + Math.imul(M, X) | 0,
                i = (i = i + Math.imul(M, $) | 0) + Math.imul(E, X) | 0,
                o = o + Math.imul(E, $) | 0,
                n = n + Math.imul(w, J) | 0,
                i = (i = i + Math.imul(w, tt) | 0) + Math.imul(_, J) | 0,
                o = o + Math.imul(_, tt) | 0,
                n = n + Math.imul(g, rt) | 0,
                i = (i = i + Math.imul(g, nt) | 0) + Math.imul(v, rt) | 0,
                o = o + Math.imul(v, nt) | 0,
                n = n + Math.imul(p, ot) | 0,
                i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0,
                o = o + Math.imul(m, at) | 0;
                var Mt = (h + (n = n + Math.imul(c, ft) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ht) | 0) + Math.imul(d, ft) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, ht) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0,
                Mt &= 67108863,
                n = Math.imul(O, F),
                i = (i = Math.imul(O, q)) + Math.imul(L, F) | 0,
                o = Math.imul(L, q),
                n = n + Math.imul(D, H) | 0,
                i = (i = i + Math.imul(D, W) | 0) + Math.imul(I, H) | 0,
                o = o + Math.imul(I, W) | 0,
                n = n + Math.imul(R, G) | 0,
                i = (i = i + Math.imul(R, Z) | 0) + Math.imul(T, G) | 0,
                o = o + Math.imul(T, Z) | 0,
                n = n + Math.imul(k, X) | 0,
                i = (i = i + Math.imul(k, $) | 0) + Math.imul(x, X) | 0,
                o = o + Math.imul(x, $) | 0,
                n = n + Math.imul(M, J) | 0,
                i = (i = i + Math.imul(M, tt) | 0) + Math.imul(E, J) | 0,
                o = o + Math.imul(E, tt) | 0,
                n = n + Math.imul(w, rt) | 0,
                i = (i = i + Math.imul(w, nt) | 0) + Math.imul(_, rt) | 0,
                o = o + Math.imul(_, nt) | 0,
                n = n + Math.imul(g, ot) | 0,
                i = (i = i + Math.imul(g, at) | 0) + Math.imul(v, ot) | 0,
                o = o + Math.imul(v, at) | 0,
                n = n + Math.imul(p, ft) | 0,
                i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, ft) | 0,
                o = o + Math.imul(m, ht) | 0;
                var Et = (h + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0,
                Et &= 67108863,
                n = Math.imul(U, F),
                i = (i = Math.imul(U, q)) + Math.imul(N, F) | 0,
                o = Math.imul(N, q),
                n = n + Math.imul(O, H) | 0,
                i = (i = i + Math.imul(O, W) | 0) + Math.imul(L, H) | 0,
                o = o + Math.imul(L, W) | 0,
                n = n + Math.imul(D, G) | 0,
                i = (i = i + Math.imul(D, Z) | 0) + Math.imul(I, G) | 0,
                o = o + Math.imul(I, Z) | 0,
                n = n + Math.imul(R, X) | 0,
                i = (i = i + Math.imul(R, $) | 0) + Math.imul(T, X) | 0,
                o = o + Math.imul(T, $) | 0,
                n = n + Math.imul(k, J) | 0,
                i = (i = i + Math.imul(k, tt) | 0) + Math.imul(x, J) | 0,
                o = o + Math.imul(x, tt) | 0,
                n = n + Math.imul(M, rt) | 0,
                i = (i = i + Math.imul(M, nt) | 0) + Math.imul(E, rt) | 0,
                o = o + Math.imul(E, nt) | 0,
                n = n + Math.imul(w, ot) | 0,
                i = (i = i + Math.imul(w, at) | 0) + Math.imul(_, ot) | 0,
                o = o + Math.imul(_, at) | 0,
                n = n + Math.imul(g, ft) | 0,
                i = (i = i + Math.imul(g, ht) | 0) + Math.imul(v, ft) | 0,
                o = o + Math.imul(v, ht) | 0,
                n = n + Math.imul(p, ct) | 0,
                i = (i = i + Math.imul(p, dt) | 0) + Math.imul(m, ct) | 0,
                o = o + Math.imul(m, dt) | 0;
                var St = (h + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, mt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0,
                St &= 67108863,
                n = Math.imul(U, H),
                i = (i = Math.imul(U, W)) + Math.imul(N, H) | 0,
                o = Math.imul(N, W),
                n = n + Math.imul(O, G) | 0,
                i = (i = i + Math.imul(O, Z) | 0) + Math.imul(L, G) | 0,
                o = o + Math.imul(L, Z) | 0,
                n = n + Math.imul(D, X) | 0,
                i = (i = i + Math.imul(D, $) | 0) + Math.imul(I, X) | 0,
                o = o + Math.imul(I, $) | 0,
                n = n + Math.imul(R, J) | 0,
                i = (i = i + Math.imul(R, tt) | 0) + Math.imul(T, J) | 0,
                o = o + Math.imul(T, tt) | 0,
                n = n + Math.imul(k, rt) | 0,
                i = (i = i + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0,
                o = o + Math.imul(x, nt) | 0,
                n = n + Math.imul(M, ot) | 0,
                i = (i = i + Math.imul(M, at) | 0) + Math.imul(E, ot) | 0,
                o = o + Math.imul(E, at) | 0,
                n = n + Math.imul(w, ft) | 0,
                i = (i = i + Math.imul(w, ht) | 0) + Math.imul(_, ft) | 0,
                o = o + Math.imul(_, ht) | 0,
                n = n + Math.imul(g, ct) | 0,
                i = (i = i + Math.imul(g, dt) | 0) + Math.imul(v, ct) | 0,
                o = o + Math.imul(v, dt) | 0;
                var kt = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0,
                kt &= 67108863,
                n = Math.imul(U, G),
                i = (i = Math.imul(U, Z)) + Math.imul(N, G) | 0,
                o = Math.imul(N, Z),
                n = n + Math.imul(O, X) | 0,
                i = (i = i + Math.imul(O, $) | 0) + Math.imul(L, X) | 0,
                o = o + Math.imul(L, $) | 0,
                n = n + Math.imul(D, J) | 0,
                i = (i = i + Math.imul(D, tt) | 0) + Math.imul(I, J) | 0,
                o = o + Math.imul(I, tt) | 0,
                n = n + Math.imul(R, rt) | 0,
                i = (i = i + Math.imul(R, nt) | 0) + Math.imul(T, rt) | 0,
                o = o + Math.imul(T, nt) | 0,
                n = n + Math.imul(k, ot) | 0,
                i = (i = i + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0,
                o = o + Math.imul(x, at) | 0,
                n = n + Math.imul(M, ft) | 0,
                i = (i = i + Math.imul(M, ht) | 0) + Math.imul(E, ft) | 0,
                o = o + Math.imul(E, ht) | 0,
                n = n + Math.imul(w, ct) | 0,
                i = (i = i + Math.imul(w, dt) | 0) + Math.imul(_, ct) | 0,
                o = o + Math.imul(_, dt) | 0;
                var xt = (h + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(v, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(v, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0,
                xt &= 67108863,
                n = Math.imul(U, X),
                i = (i = Math.imul(U, $)) + Math.imul(N, X) | 0,
                o = Math.imul(N, $),
                n = n + Math.imul(O, J) | 0,
                i = (i = i + Math.imul(O, tt) | 0) + Math.imul(L, J) | 0,
                o = o + Math.imul(L, tt) | 0,
                n = n + Math.imul(D, rt) | 0,
                i = (i = i + Math.imul(D, nt) | 0) + Math.imul(I, rt) | 0,
                o = o + Math.imul(I, nt) | 0,
                n = n + Math.imul(R, ot) | 0,
                i = (i = i + Math.imul(R, at) | 0) + Math.imul(T, ot) | 0,
                o = o + Math.imul(T, at) | 0,
                n = n + Math.imul(k, ft) | 0,
                i = (i = i + Math.imul(k, ht) | 0) + Math.imul(x, ft) | 0,
                o = o + Math.imul(x, ht) | 0,
                n = n + Math.imul(M, ct) | 0,
                i = (i = i + Math.imul(M, dt) | 0) + Math.imul(E, ct) | 0,
                o = o + Math.imul(E, dt) | 0;
                var Bt = (h + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0,
                Bt &= 67108863,
                n = Math.imul(U, J),
                i = (i = Math.imul(U, tt)) + Math.imul(N, J) | 0,
                o = Math.imul(N, tt),
                n = n + Math.imul(O, rt) | 0,
                i = (i = i + Math.imul(O, nt) | 0) + Math.imul(L, rt) | 0,
                o = o + Math.imul(L, nt) | 0,
                n = n + Math.imul(D, ot) | 0,
                i = (i = i + Math.imul(D, at) | 0) + Math.imul(I, ot) | 0,
                o = o + Math.imul(I, at) | 0,
                n = n + Math.imul(R, ft) | 0,
                i = (i = i + Math.imul(R, ht) | 0) + Math.imul(T, ft) | 0,
                o = o + Math.imul(T, ht) | 0,
                n = n + Math.imul(k, ct) | 0,
                i = (i = i + Math.imul(k, dt) | 0) + Math.imul(x, ct) | 0,
                o = o + Math.imul(x, dt) | 0;
                var Rt = (h + (n = n + Math.imul(M, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0,
                Rt &= 67108863,
                n = Math.imul(U, rt),
                i = (i = Math.imul(U, nt)) + Math.imul(N, rt) | 0,
                o = Math.imul(N, nt),
                n = n + Math.imul(O, ot) | 0,
                i = (i = i + Math.imul(O, at) | 0) + Math.imul(L, ot) | 0,
                o = o + Math.imul(L, at) | 0,
                n = n + Math.imul(D, ft) | 0,
                i = (i = i + Math.imul(D, ht) | 0) + Math.imul(I, ft) | 0,
                o = o + Math.imul(I, ht) | 0,
                n = n + Math.imul(R, ct) | 0,
                i = (i = i + Math.imul(R, dt) | 0) + Math.imul(T, ct) | 0,
                o = o + Math.imul(T, dt) | 0;
                var Tt = (h + (n = n + Math.imul(k, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0,
                Tt &= 67108863,
                n = Math.imul(U, ot),
                i = (i = Math.imul(U, at)) + Math.imul(N, ot) | 0,
                o = Math.imul(N, at),
                n = n + Math.imul(O, ft) | 0,
                i = (i = i + Math.imul(O, ht) | 0) + Math.imul(L, ft) | 0,
                o = o + Math.imul(L, ht) | 0,
                n = n + Math.imul(D, ct) | 0,
                i = (i = i + Math.imul(D, dt) | 0) + Math.imul(I, ct) | 0,
                o = o + Math.imul(I, dt) | 0;
                var Ct = (h + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, mt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(T, mt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0,
                Ct &= 67108863,
                n = Math.imul(U, ft),
                i = (i = Math.imul(U, ht)) + Math.imul(N, ft) | 0,
                o = Math.imul(N, ht),
                n = n + Math.imul(O, ct) | 0,
                i = (i = i + Math.imul(O, dt) | 0) + Math.imul(L, ct) | 0,
                o = o + Math.imul(L, dt) | 0;
                var Dt = (h + (n = n + Math.imul(D, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(D, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Dt >>> 26) | 0,
                Dt &= 67108863,
                n = Math.imul(U, ct),
                i = (i = Math.imul(U, dt)) + Math.imul(N, ct) | 0,
                o = Math.imul(N, dt);
                var It = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0,
                It &= 67108863;
                var Pt = (h + (n = Math.imul(U, pt)) | 0) + ((8191 & (i = (i = Math.imul(U, mt)) + Math.imul(N, pt) | 0)) << 13) | 0;
                return h = ((o = Math.imul(N, mt)) + (i >>> 13) | 0) + (Pt >>> 26) | 0,
                Pt &= 67108863,
                f[0] = bt,
                f[1] = gt,
                f[2] = vt,
                f[3] = yt,
                f[4] = wt,
                f[5] = _t,
                f[6] = At,
                f[7] = Mt,
                f[8] = Et,
                f[9] = St,
                f[10] = kt,
                f[11] = xt,
                f[12] = Bt,
                f[13] = Rt,
                f[14] = Tt,
                f[15] = Ct,
                f[16] = Dt,
                f[17] = It,
                f[18] = Pt,
                0 !== h && (f[19] = h,
                r.length++),
                r
            };
            function m(t, e, r) {
                return (new b).mulp(t, e, r)
            }
            function b(t, e) {
                this.x = t,
                this.y = e
            }
            Math.imul || (p = l),
            i.prototype.mulTo = function(t, e) {
                var r = this.length + t.length;
                return 10 === this.length && 10 === t.length ? p(this, t, e) : r < 63 ? l(this, t, e) : r < 1024 ? function(t, e, r) {
                    r.negative = e.negative ^ t.negative,
                    r.length = t.length + e.length;
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        var a = i;
                        i = 0;
                        for (var s = 67108863 & n, f = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= f; h++) {
                            var u = o - h
                              , c = (0 | t.words[u]) * (0 | e.words[h])
                              , d = 67108863 & c;
                            s = 67108863 & (d = d + s | 0),
                            i += (a = (a = a + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26,
                            a &= 67108863
                        }
                        r.words[o] = s,
                        n = a,
                        a = i
                    }
                    return 0 !== n ? r.words[o] = n : r.length--,
                    r.strip()
                }(this, t, e) : m(this, t, e)
            }
            ,
            b.prototype.makeRBT = function(t) {
                for (var e = new Array(t), r = i.prototype._countBits(t) - 1, n = 0; n < t; n++)
                    e[n] = this.revBin(n, r, t);
                return e
            }
            ,
            b.prototype.revBin = function(t, e, r) {
                if (0 === t || t === r - 1)
                    return t;
                for (var n = 0, i = 0; i < e; i++)
                    n |= (1 & t) << e - i - 1,
                    t >>= 1;
                return n
            }
            ,
            b.prototype.permute = function(t, e, r, n, i, o) {
                for (var a = 0; a < o; a++)
                    n[a] = e[t[a]],
                    i[a] = r[t[a]]
            }
            ,
            b.prototype.transform = function(t, e, r, n, i, o) {
                this.permute(o, t, e, r, n, i);
                for (var a = 1; a < i; a <<= 1)
                    for (var s = a << 1, f = Math.cos(2 * Math.PI / s), h = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                        for (var c = f, d = h, l = 0; l < a; l++) {
                            var p = r[u + l]
                              , m = n[u + l]
                              , b = r[u + l + a]
                              , g = n[u + l + a]
                              , v = c * b - d * g;
                            g = c * g + d * b,
                            b = v,
                            r[u + l] = p + b,
                            n[u + l] = m + g,
                            r[u + l + a] = p - b,
                            n[u + l + a] = m - g,
                            l !== s && (v = f * c - h * d,
                            d = f * d + h * c,
                            c = v)
                        }
            }
            ,
            b.prototype.guessLen13b = function(t, e) {
                var r = 1 | Math.max(e, t)
                  , n = 1 & r
                  , i = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    i++;
                return 1 << i + 1 + n
            }
            ,
            b.prototype.conjugate = function(t, e, r) {
                if (!(r <= 1))
                    for (var n = 0; n < r / 2; n++) {
                        var i = t[n];
                        t[n] = t[r - n - 1],
                        t[r - n - 1] = i,
                        i = e[n],
                        e[n] = -e[r - n - 1],
                        e[r - n - 1] = -i
                    }
            }
            ,
            b.prototype.normalize13b = function(t, e) {
                for (var r = 0, n = 0; n < e / 2; n++) {
                    var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                    t[n] = 67108863 & i,
                    r = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return t
            }
            ,
            b.prototype.convert13b = function(t, e, n, i) {
                for (var o = 0, a = 0; a < e; a++)
                    o += 0 | t[a],
                    n[2 * a] = 8191 & o,
                    o >>>= 13,
                    n[2 * a + 1] = 8191 & o,
                    o >>>= 13;
                for (a = 2 * e; a < i; ++a)
                    n[a] = 0;
                r(0 === o),
                r(0 == (-8192 & o))
            }
            ,
            b.prototype.stub = function(t) {
                for (var e = new Array(t), r = 0; r < t; r++)
                    e[r] = 0;
                return e
            }
            ,
            b.prototype.mulp = function(t, e, r) {
                var n = 2 * this.guessLen13b(t.length, e.length)
                  , i = this.makeRBT(n)
                  , o = this.stub(n)
                  , a = new Array(n)
                  , s = new Array(n)
                  , f = new Array(n)
                  , h = new Array(n)
                  , u = new Array(n)
                  , c = new Array(n)
                  , d = r.words;
                d.length = n,
                this.convert13b(t.words, t.length, a, n),
                this.convert13b(e.words, e.length, h, n),
                this.transform(a, o, s, f, n, i),
                this.transform(h, o, u, c, n, i);
                for (var l = 0; l < n; l++) {
                    var p = s[l] * u[l] - f[l] * c[l];
                    f[l] = s[l] * c[l] + f[l] * u[l],
                    s[l] = p
                }
                return this.conjugate(s, f, n),
                this.transform(s, f, d, o, n, i),
                this.conjugate(d, o, n),
                this.normalize13b(d, n),
                r.negative = t.negative ^ e.negative,
                r.length = t.length + e.length,
                r.strip()
            }
            ,
            i.prototype.mul = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length),
                this.mulTo(t, e)
            }
            ,
            i.prototype.mulf = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length),
                m(this, t, e)
            }
            ,
            i.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }
            ,
            i.prototype.imuln = function(t) {
                r("number" == typeof t),
                r(t < 67108864);
                for (var e = 0, n = 0; n < this.length; n++) {
                    var i = (0 | this.words[n]) * t
                      , o = (67108863 & i) + (67108863 & e);
                    e >>= 26,
                    e += i / 67108864 | 0,
                    e += o >>> 26,
                    this.words[n] = 67108863 & o
                }
                return 0 !== e && (this.words[n] = e,
                this.length++),
                this
            }
            ,
            i.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }
            ,
            i.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            i.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            i.prototype.pow = function(t) {
                var e = function(t) {
                    for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                        var n = r / 26 | 0
                          , i = r % 26;
                        e[r] = (t.words[n] & 1 << i) >>> i
                    }
                    return e
                }(t);
                if (0 === e.length)
                    return new i(1);
                for (var r = this, n = 0; n < e.length && 0 === e[n]; n++,
                r = r.sqr())
                    ;
                if (++n < e.length)
                    for (var o = r.sqr(); n < e.length; n++,
                    o = o.sqr())
                        0 !== e[n] && (r = r.mul(o));
                return r
            }
            ,
            i.prototype.iushln = function(t) {
                r("number" == typeof t && t >= 0);
                var e, n = t % 26, i = (t - n) / 26, o = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var a = 0;
                    for (e = 0; e < this.length; e++) {
                        var s = this.words[e] & o
                          , f = (0 | this.words[e]) - s << n;
                        this.words[e] = f | a,
                        a = s >>> 26 - n
                    }
                    a && (this.words[e] = a,
                    this.length++)
                }
                if (0 !== i) {
                    for (e = this.length - 1; e >= 0; e--)
                        this.words[e + i] = this.words[e];
                    for (e = 0; e < i; e++)
                        this.words[e] = 0;
                    this.length += i
                }
                return this.strip()
            }
            ,
            i.prototype.ishln = function(t) {
                return r(0 === this.negative),
                this.iushln(t)
            }
            ,
            i.prototype.iushrn = function(t, e, n) {
                var i;
                r("number" == typeof t && t >= 0),
                i = e ? (e - e % 26) / 26 : 0;
                var o = t % 26
                  , a = Math.min((t - o) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> o << o
                  , f = n;
                if (i -= a,
                i = Math.max(0, i),
                f) {
                    for (var h = 0; h < a; h++)
                        f.words[h] = this.words[h];
                    f.length = a
                }
                if (0 === a)
                    ;
                else if (this.length > a)
                    for (this.length -= a,
                    h = 0; h < this.length; h++)
                        this.words[h] = this.words[h + a];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var u = 0;
                for (h = this.length - 1; h >= 0 && (0 !== u || h >= i); h--) {
                    var c = 0 | this.words[h];
                    this.words[h] = u << 26 - o | c >>> o,
                    u = c & s
                }
                return f && 0 !== u && (f.words[f.length++] = u),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this.strip()
            }
            ,
            i.prototype.ishrn = function(t, e, n) {
                return r(0 === this.negative),
                this.iushrn(t, e, n)
            }
            ,
            i.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }
            ,
            i.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }
            ,
            i.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }
            ,
            i.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }
            ,
            i.prototype.testn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26
                  , n = (t - e) / 26
                  , i = 1 << e;
                return !(this.length <= n) && !!(this.words[n] & i)
            }
            ,
            i.prototype.imaskn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26
                  , n = (t - e) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= n)
                    return this;
                if (0 !== e && n++,
                this.length = Math.min(n, this.length),
                0 !== e) {
                    var i = 67108863 ^ 67108863 >>> e << e;
                    this.words[this.length - 1] &= i
                }
                return this.strip()
            }
            ,
            i.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }
            ,
            i.prototype.iaddn = function(t) {
                return r("number" == typeof t),
                r(t < 67108864),
                t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(t),
                this.negative = 1,
                this) : this._iaddn(t)
            }
            ,
            i.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                    this.words[e] -= 67108864,
                    e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1),
                this
            }
            ,
            i.prototype.isubn = function(t) {
                if (r("number" == typeof t),
                r(t < 67108864),
                t < 0)
                    return this.iaddn(-t);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(t),
                    this.negative = 1,
                    this;
                if (this.words[0] -= t,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        this.words[e] += 67108864,
                        this.words[e + 1] -= 1;
                return this.strip()
            }
            ,
            i.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }
            ,
            i.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }
            ,
            i.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            i.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            i.prototype._ishlnsubmul = function(t, e, n) {
                var i, o, a = t.length + n;
                this._expand(a);
                var s = 0;
                for (i = 0; i < t.length; i++) {
                    o = (0 | this.words[i + n]) + s;
                    var f = (0 | t.words[i]) * e;
                    s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0),
                    this.words[i + n] = 67108863 & o
                }
                for (; i < this.length - n; i++)
                    s = (o = (0 | this.words[i + n]) + s) >> 26,
                    this.words[i + n] = 67108863 & o;
                if (0 === s)
                    return this.strip();
                for (r(-1 === s),
                s = 0,
                i = 0; i < this.length; i++)
                    s = (o = -(0 | this.words[i]) + s) >> 26,
                    this.words[i] = 67108863 & o;
                return this.negative = 1,
                this.strip()
            }
            ,
            i.prototype._wordDiv = function(t, e) {
                var r = (this.length,
                t.length)
                  , n = this.clone()
                  , o = t
                  , a = 0 | o.words[o.length - 1];
                0 !== (r = 26 - this._countBits(a)) && (o = o.ushln(r),
                n.iushln(r),
                a = 0 | o.words[o.length - 1]);
                var s, f = n.length - o.length;
                if ("mod" !== e) {
                    (s = new i(null)).length = f + 1,
                    s.words = new Array(s.length);
                    for (var h = 0; h < s.length; h++)
                        s.words[h] = 0
                }
                var u = n.clone()._ishlnsubmul(o, 1, f);
                0 === u.negative && (n = u,
                s && (s.words[f] = 1));
                for (var c = f - 1; c >= 0; c--) {
                    var d = 67108864 * (0 | n.words[o.length + c]) + (0 | n.words[o.length + c - 1]);
                    for (d = Math.min(d / a | 0, 67108863),
                    n._ishlnsubmul(o, d, c); 0 !== n.negative; )
                        d--,
                        n.negative = 0,
                        n._ishlnsubmul(o, 1, c),
                        n.isZero() || (n.negative ^= 1);
                    s && (s.words[c] = d)
                }
                return s && s.strip(),
                n.strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                {
                    div: s || null,
                    mod: n
                }
            }
            ,
            i.prototype.divmod = function(t, e, n) {
                return r(!t.isZero()),
                this.isZero() ? {
                    div: new i(0),
                    mod: new i(0)
                } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e),
                "mod" !== e && (o = s.div.neg()),
                "div" !== e && (a = s.mod.neg(),
                n && 0 !== a.negative && a.iadd(t)),
                {
                    div: o,
                    mod: a
                }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e),
                "mod" !== e && (o = s.div.neg()),
                {
                    div: o,
                    mod: s.mod
                }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e),
                "div" !== e && (a = s.mod.neg(),
                n && 0 !== a.negative && a.isub(t)),
                {
                    div: s.div,
                    mod: a
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new i(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === e ? {
                    div: null,
                    mod: new i(this.modn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new i(this.modn(t.words[0]))
                } : this._wordDiv(t, e);
                var o, a, s
            }
            ,
            i.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }
            ,
            i.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }
            ,
            i.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }
            ,
            i.prototype.divRound = function(t) {
                var e = this.divmod(t);
                if (e.mod.isZero())
                    return e.div;
                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod
                  , n = t.ushrn(1)
                  , i = t.andln(1)
                  , o = r.cmp(n);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }
            ,
            i.prototype.modn = function(t) {
                r(t <= 67108863);
                for (var e = 67108864 % t, n = 0, i = this.length - 1; i >= 0; i--)
                    n = (e * n + (0 | this.words[i])) % t;
                return n
            }
            ,
            i.prototype.idivn = function(t) {
                r(t <= 67108863);
                for (var e = 0, n = this.length - 1; n >= 0; n--) {
                    var i = (0 | this.words[n]) + 67108864 * e;
                    this.words[n] = i / t | 0,
                    e = i % t
                }
                return this.strip()
            }
            ,
            i.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }
            ,
            i.prototype.egcd = function(t) {
                r(0 === t.negative),
                r(!t.isZero());
                var e = this
                  , n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var o = new i(1), a = new i(0), s = new i(0), f = new i(1), h = 0; e.isEven() && n.isEven(); )
                    e.iushrn(1),
                    n.iushrn(1),
                    ++h;
                for (var u = n.clone(), c = e.clone(); !e.isZero(); ) {
                    for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d,
                    l <<= 1)
                        ;
                    if (d > 0)
                        for (e.iushrn(d); d-- > 0; )
                            (o.isOdd() || a.isOdd()) && (o.iadd(u),
                            a.isub(c)),
                            o.iushrn(1),
                            a.iushrn(1);
                    for (var p = 0, m = 1; 0 == (n.words[0] & m) && p < 26; ++p,
                    m <<= 1)
                        ;
                    if (p > 0)
                        for (n.iushrn(p); p-- > 0; )
                            (s.isOdd() || f.isOdd()) && (s.iadd(u),
                            f.isub(c)),
                            s.iushrn(1),
                            f.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n),
                    o.isub(s),
                    a.isub(f)) : (n.isub(e),
                    s.isub(o),
                    f.isub(a))
                }
                return {
                    a: s,
                    b: f,
                    gcd: n.iushln(h)
                }
            }
            ,
            i.prototype._invmp = function(t) {
                r(0 === t.negative),
                r(!t.isZero());
                var e = this
                  , n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var o, a = new i(1), s = new i(0), f = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
                    for (var h = 0, u = 1; 0 == (e.words[0] & u) && h < 26; ++h,
                    u <<= 1)
                        ;
                    if (h > 0)
                        for (e.iushrn(h); h-- > 0; )
                            a.isOdd() && a.iadd(f),
                            a.iushrn(1);
                    for (var c = 0, d = 1; 0 == (n.words[0] & d) && c < 26; ++c,
                    d <<= 1)
                        ;
                    if (c > 0)
                        for (n.iushrn(c); c-- > 0; )
                            s.isOdd() && s.iadd(f),
                            s.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n),
                    a.isub(s)) : (n.isub(e),
                    s.isub(a))
                }
                return (o = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && o.iadd(t),
                o
            }
            ,
            i.prototype.gcd = function(t) {
                if (this.isZero())
                    return t.abs();
                if (t.isZero())
                    return this.abs();
                var e = this.clone()
                  , r = t.clone();
                e.negative = 0,
                r.negative = 0;
                for (var n = 0; e.isEven() && r.isEven(); n++)
                    e.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; e.isEven(); )
                        e.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var i = e.cmp(r);
                    if (i < 0) {
                        var o = e;
                        e = r,
                        r = o
                    } else if (0 === i || 0 === r.cmpn(1))
                        break;
                    e.isub(r)
                }
                return r.iushln(n)
            }
            ,
            i.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }
            ,
            i.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }
            ,
            i.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }
            ,
            i.prototype.andln = function(t) {
                return this.words[0] & t
            }
            ,
            i.prototype.bincn = function(t) {
                r("number" == typeof t);
                var e = t % 26
                  , n = (t - e) / 26
                  , i = 1 << e;
                if (this.length <= n)
                    return this._expand(n + 1),
                    this.words[n] |= i,
                    this;
                for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26,
                    s &= 67108863,
                    this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o,
                this.length++),
                this
            }
            ,
            i.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            i.prototype.cmpn = function(t) {
                var e, n = t < 0;
                if (0 !== this.negative && !n)
                    return -1;
                if (0 === this.negative && n)
                    return 1;
                if (this.strip(),
                this.length > 1)
                    e = 1;
                else {
                    n && (t = -t),
                    r(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            i.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return -1;
                if (0 === this.negative && 0 !== t.negative)
                    return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            i.prototype.ucmp = function(t) {
                if (this.length > t.length)
                    return 1;
                if (this.length < t.length)
                    return -1;
                for (var e = 0, r = this.length - 1; r >= 0; r--) {
                    var n = 0 | this.words[r]
                      , i = 0 | t.words[r];
                    if (n !== i) {
                        n < i ? e = -1 : n > i && (e = 1);
                        break
                    }
                }
                return e
            }
            ,
            i.prototype.gtn = function(t) {
                return 1 === this.cmpn(t)
            }
            ,
            i.prototype.gt = function(t) {
                return 1 === this.cmp(t)
            }
            ,
            i.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }
            ,
            i.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }
            ,
            i.prototype.ltn = function(t) {
                return -1 === this.cmpn(t)
            }
            ,
            i.prototype.lt = function(t) {
                return -1 === this.cmp(t)
            }
            ,
            i.prototype.lten = function(t) {
                return this.cmpn(t) <= 0
            }
            ,
            i.prototype.lte = function(t) {
                return this.cmp(t) <= 0
            }
            ,
            i.prototype.eqn = function(t) {
                return 0 === this.cmpn(t)
            }
            ,
            i.prototype.eq = function(t) {
                return 0 === this.cmp(t)
            }
            ,
            i.red = function(t) {
                return new M(t)
            }
            ,
            i.prototype.toRed = function(t) {
                return r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
            }
            ,
            i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            i.prototype._forceRed = function(t) {
                return this.red = t,
                this
            }
            ,
            i.prototype.forceRed = function(t) {
                return r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
            }
            ,
            i.prototype.redAdd = function(t) {
                return r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
            }
            ,
            i.prototype.redIAdd = function(t) {
                return r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
            }
            ,
            i.prototype.redSub = function(t) {
                return r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
            }
            ,
            i.prototype.redISub = function(t) {
                return r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
            }
            ,
            i.prototype.redShl = function(t) {
                return r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
            }
            ,
            i.prototype.redMul = function(t) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
            }
            ,
            i.prototype.redIMul = function(t) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
            }
            ,
            i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            i.prototype.redPow = function(t) {
                return r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
            }
            ;
            var g = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function v(t, e) {
                this.name = t,
                this.p = new i(e,16),
                this.n = this.p.bitLength(),
                this.k = new i(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function y() {
                v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function w() {
                v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function _() {
                v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function A() {
                v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function M(t) {
                if ("string" == typeof t) {
                    var e = i._prime(t);
                    this.m = e.p,
                    this.prime = e
                } else
                    r(t.gtn(1), "modulus must be greater than 1"),
                    this.m = t,
                    this.prime = null
            }
            function E(t) {
                M.call(this, t),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new i(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            v.prototype._tmp = function() {
                var t = new i(null);
                return t.words = new Array(Math.ceil(this.n / 13)),
                t
            }
            ,
            v.prototype.ireduce = function(t) {
                var e, r = t;
                do {
                    this.split(r, this.tmp),
                    e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                } while (e > this.n);
                var n = e < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0,
                r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                r
            }
            ,
            v.prototype.split = function(t, e) {
                t.iushrn(this.n, 0, e)
            }
            ,
            v.prototype.imulK = function(t) {
                return t.imul(this.k)
            }
            ,
            n(y, v),
            y.prototype.split = function(t, e) {
                for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
                    e.words[i] = t.words[i];
                if (e.length = n,
                t.length <= 9)
                    return t.words[0] = 0,
                    void (t.length = 1);
                var o = t.words[9];
                for (e.words[e.length++] = o & r,
                i = 10; i < t.length; i++) {
                    var a = 0 | t.words[i];
                    t.words[i - 10] = (a & r) << 4 | o >>> 22,
                    o = a
                }
                o >>>= 22,
                t.words[i - 10] = o,
                0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
            }
            ,
            y.prototype.imulK = function(t) {
                t.words[t.length] = 0,
                t.words[t.length + 1] = 0,
                t.length += 2;
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 0 | t.words[r];
                    e += 977 * n,
                    t.words[r] = 67108863 & e,
                    e = 64 * n + (e / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--,
                0 === t.words[t.length - 1] && t.length--),
                t
            }
            ,
            n(w, v),
            n(_, v),
            n(A, v),
            A.prototype.imulK = function(t) {
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 19 * (0 | t.words[r]) + e
                      , i = 67108863 & n;
                    n >>>= 26,
                    t.words[r] = i,
                    e = n
                }
                return 0 !== e && (t.words[t.length++] = e),
                t
            }
            ,
            i._prime = function(t) {
                if (g[t])
                    return g[t];
                var e;
                if ("k256" === t)
                    e = new y;
                else if ("p224" === t)
                    e = new w;
                else if ("p192" === t)
                    e = new _;
                else {
                    if ("p25519" !== t)
                        throw new Error("Unknown prime " + t);
                    e = new A
                }
                return g[t] = e,
                e
            }
            ,
            M.prototype._verify1 = function(t) {
                r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers")
            }
            ,
            M.prototype._verify2 = function(t, e) {
                r(0 == (t.negative | e.negative), "red works only with positives"),
                r(t.red && t.red === e.red, "red works only with red numbers")
            }
            ,
            M.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
            }
            ,
            M.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }
            ,
            M.prototype.add = function(t, e) {
                this._verify2(t, e);
                var r = t.add(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            M.prototype.iadd = function(t, e) {
                this._verify2(t, e);
                var r = t.iadd(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            M.prototype.sub = function(t, e) {
                this._verify2(t, e);
                var r = t.sub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            M.prototype.isub = function(t, e) {
                this._verify2(t, e);
                var r = t.isub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r
            }
            ,
            M.prototype.shl = function(t, e) {
                return this._verify1(t),
                this.imod(t.ushln(e))
            }
            ,
            M.prototype.imul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.imul(e))
            }
            ,
            M.prototype.mul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.mul(e))
            }
            ,
            M.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }
            ,
            M.prototype.sqr = function(t) {
                return this.mul(t, t)
            }
            ,
            M.prototype.sqrt = function(t) {
                if (t.isZero())
                    return t.clone();
                var e = this.m.andln(3);
                if (r(e % 2 == 1),
                3 === e) {
                    var n = this.m.add(new i(1)).iushrn(2);
                    return this.pow(t, n)
                }
                for (var o = this.m.subn(1), a = 0; !o.isZero() && 0 === o.andln(1); )
                    a++,
                    o.iushrn(1);
                r(!o.isZero());
                var s = new i(1).toRed(this)
                  , f = s.redNeg()
                  , h = this.m.subn(1).iushrn(1)
                  , u = this.m.bitLength();
                for (u = new i(2 * u * u).toRed(this); 0 !== this.pow(u, h).cmp(f); )
                    u.redIAdd(f);
                for (var c = this.pow(u, o), d = this.pow(t, o.addn(1).iushrn(1)), l = this.pow(t, o), p = a; 0 !== l.cmp(s); ) {
                    for (var m = l, b = 0; 0 !== m.cmp(s); b++)
                        m = m.redSqr();
                    r(b < p);
                    var g = this.pow(c, new i(1).iushln(p - b - 1));
                    d = d.redMul(g),
                    c = g.redSqr(),
                    l = l.redMul(c),
                    p = b
                }
                return d
            }
            ,
            M.prototype.invm = function(t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0,
                this.imod(e).redNeg()) : this.imod(e)
            }
            ,
            M.prototype.pow = function(t, e) {
                if (e.isZero())
                    return new i(1).toRed(this);
                if (0 === e.cmpn(1))
                    return t.clone();
                var r = new Array(16);
                r[0] = new i(1).toRed(this),
                r[1] = t;
                for (var n = 2; n < r.length; n++)
                    r[n] = this.mul(r[n - 1], t);
                var o = r[0]
                  , a = 0
                  , s = 0
                  , f = e.bitLength() % 26;
                for (0 === f && (f = 26),
                n = e.length - 1; n >= 0; n--) {
                    for (var h = e.words[n], u = f - 1; u >= 0; u--) {
                        var c = h >> u & 1;
                        o !== r[0] && (o = this.sqr(o)),
                        0 !== c || 0 !== a ? (a <<= 1,
                        a |= c,
                        (4 === ++s || 0 === n && 0 === u) && (o = this.mul(o, r[a]),
                        s = 0,
                        a = 0)) : s = 0
                    }
                    f = 26
                }
                return o
            }
            ,
            M.prototype.convertTo = function(t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e
            }
            ,
            M.prototype.convertFrom = function(t) {
                var e = t.clone();
                return e.red = null,
                e
            }
            ,
            i.mont = function(t) {
                return new E(t)
            }
            ,
            n(E, M),
            E.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }
            ,
            E.prototype.convertFrom = function(t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null,
                e
            }
            ,
            E.prototype.imul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return t.words[0] = 0,
                    t.length = 1,
                    t;
                var r = t.imul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            E.prototype.mul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return new i(0)._forceRed(this);
                var r = t.mul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , o = r.isub(n).iushrn(this.shift)
                  , a = o;
                return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            E.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(t, this)
    }
    )),
    o.register("1QcBA", (function(t, e) {
        var r = o("76R5V")
          , n = o("3rT9g");
        function i(t) {
            this.rand = t || new n.Rand
        }
        t.exports = i,
        i.create = function(t) {
            return new i(t)
        }
        ,
        i.prototype._randbelow = function(t) {
            var e = t.bitLength()
              , n = Math.ceil(e / 8);
            do {
                var i = new r(this.rand.generate(n))
            } while (i.cmp(t) >= 0);
            return i
        }
        ,
        i.prototype._randrange = function(t, e) {
            var r = e.sub(t);
            return t.add(this._randbelow(r))
        }
        ,
        i.prototype.test = function(t, e, n) {
            var i = t.bitLength()
              , o = r.mont(t)
              , a = new r(1).toRed(o);
            e || (e = Math.max(1, i / 48 | 0));
            for (var s = t.subn(1), f = 0; !s.testn(f); f++)
                ;
            for (var h = t.shrn(f), u = s.toRed(o); e > 0; e--) {
                var c = this._randrange(new r(2), s);
                n && n(c);
                var d = c.toRed(o).redPow(h);
                if (0 !== d.cmp(a) && 0 !== d.cmp(u)) {
                    for (var l = 1; l < f; l++) {
                        if (0 === (d = d.redSqr()).cmp(a))
                            return !1;
                        if (0 === d.cmp(u))
                            break
                    }
                    if (l === f)
                        return !1
                }
            }
            return !0
        }
        ,
        i.prototype.getDivisor = function(t, e) {
            var n = t.bitLength()
              , i = r.mont(t)
              , o = new r(1).toRed(i);
            e || (e = Math.max(1, n / 48 | 0));
            for (var a = t.subn(1), s = 0; !a.testn(s); s++)
                ;
            for (var f = t.shrn(s), h = a.toRed(i); e > 0; e--) {
                var u = this._randrange(new r(2), a)
                  , c = t.gcd(u);
                if (0 !== c.cmpn(1))
                    return c;
                var d = u.toRed(i).redPow(f);
                if (0 !== d.cmp(o) && 0 !== d.cmp(h)) {
                    for (var l = 1; l < s; l++) {
                        if (0 === (d = d.redSqr()).cmp(o))
                            return d.fromRed().subn(1).gcd(t);
                        if (0 === d.cmp(h))
                            break
                    }
                    if (l === s)
                        return (d = d.redSqr()).fromRed().subn(1).gcd(t)
                }
            }
            return !1
        }
    }
    )),
    o.register("3rT9g", (function(t, e) {
        var r;
        function n(t) {
            this.rand = t
        }
        if (t.exports = function(t) {
            return r || (r = new n(null)),
            r.generate(t)
        }
        ,
        t.exports.Rand = n,
        n.prototype.generate = function(t) {
            return this._rand(t)
        }
        ,
        n.prototype._rand = function(t) {
            if (this.rand.getBytes)
                return this.rand.getBytes(t);
            for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                e[r] = this.rand.getByte();
            return e
        }
        ,
        "object" == typeof self)
            self.crypto && self.crypto.getRandomValues ? n.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.crypto.getRandomValues(e),
                e
            }
            : self.msCrypto && self.msCrypto.getRandomValues ? n.prototype._rand = function(t) {
                var e = new Uint8Array(t);
                return self.msCrypto.getRandomValues(e),
                e
            }
            : "object" == typeof window && (n.prototype._rand = function() {
                throw new Error("Not implemented yet")
            }
            );
        else
            try {
                var i = o("4w6kb");
                if ("function" != typeof i.randomBytes)
                    throw new Error("Not supported");
                n.prototype._rand = function(t) {
                    return i.randomBytes(t)
                }
            } catch (t) {}
    }
    )),
    o.register("6WzbI", (function(t, e) {
        t.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')
    }
    )),
    o.register("1YZ97", (function(t, e) {
        var r = o("3tvKv").Buffer
          , n = o("76R5V")
          , i = new (o("1QcBA"))
          , a = new n(24)
          , s = new n(11)
          , f = new n(10)
          , h = new n(3)
          , u = new n(7)
          , c = o("2nM5d")
          , d = o("6DQjm");
        function l(t, e) {
            return e = e || "utf8",
            r.isBuffer(t) || (t = new r(t,e)),
            this._pub = new n(t),
            this
        }
        function p(t, e) {
            return e = e || "utf8",
            r.isBuffer(t) || (t = new r(t,e)),
            this._priv = new n(t),
            this
        }
        t.exports = b;
        var m = {};
        function b(t, e, r) {
            this.setGenerator(e),
            this.__prime = new n(t),
            this._prime = n.mont(this.__prime),
            this._primeLen = t.length,
            this._pub = void 0,
            this._priv = void 0,
            this._primeCode = void 0,
            r ? (this.setPublicKey = l,
            this.setPrivateKey = p) : this._primeCode = 8
        }
        function g(t, e) {
            var n = new r(t.toArray());
            return e ? n.toString(e) : n
        }
        Object.defineProperty(b.prototype, "verifyError", {
            enumerable: !0,
            get: function() {
                return "number" != typeof this._primeCode && (this._primeCode = function(t, e) {
                    var r = e.toString("hex")
                      , n = [r, t.toString(16)].join("_");
                    if (n in m)
                        return m[n];
                    var o, d = 0;
                    if (t.isEven() || !c.simpleSieve || !c.fermatTest(t) || !i.test(t))
                        return d += 1,
                        d += "02" === r || "05" === r ? 8 : 4,
                        m[n] = d,
                        d;
                    switch (i.test(t.shrn(1)) || (d += 2),
                    r) {
                    case "02":
                        t.mod(a).cmp(s) && (d += 8);
                        break;
                    case "05":
                        (o = t.mod(f)).cmp(h) && o.cmp(u) && (d += 8);
                        break;
                    default:
                        d += 4
                    }
                    return m[n] = d,
                    d
                }(this.__prime, this.__gen)),
                this._primeCode
            }
        }),
        b.prototype.generateKeys = function() {
            return this._priv || (this._priv = new n(d(this._primeLen))),
            this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(),
            this.getPublicKey()
        }
        ,
        b.prototype.computeSecret = function(t) {
            var e = (t = (t = new n(t)).toRed(this._prime)).redPow(this._priv).fromRed()
              , i = new r(e.toArray())
              , o = this.getPrime();
            if (i.length < o.length) {
                var a = new r(o.length - i.length);
                a.fill(0),
                i = r.concat([a, i])
            }
            return i
        }
        ,
        b.prototype.getPublicKey = function(t) {
            return g(this._pub, t)
        }
        ,
        b.prototype.getPrivateKey = function(t) {
            return g(this._priv, t)
        }
        ,
        b.prototype.getPrime = function(t) {
            return g(this.__prime, t)
        }
        ,
        b.prototype.getGenerator = function(t) {
            return g(this._gen, t)
        }
        ,
        b.prototype.setGenerator = function(t, e) {
            return e = e || "utf8",
            r.isBuffer(t) || (t = new r(t,e)),
            this.__gen = t,
            this._gen = new n(t),
            this
        }
    }
    )),
    o.register("6Ta4n", (function(t, e) {
        var r = o("5Xfjk").Buffer
          , n = o("1O6Be")
          , i = o("6pgpp")
          , a = o("1hy4s")
          , s = o("5iPOX")
          , f = o("6L7eW")
          , h = o("dAOBS");
        function u(t) {
            i.Writable.call(this);
            var e = h[t];
            if (!e)
                throw new Error("Unknown message digest");
            this._hashType = e.hash,
            this._hash = n(e.hash),
            this._tag = e.id,
            this._signType = e.sign
        }
        function c(t) {
            i.Writable.call(this);
            var e = h[t];
            if (!e)
                throw new Error("Unknown message digest");
            this._hash = n(e.hash),
            this._tag = e.id,
            this._signType = e.sign
        }
        function d(t) {
            return new u(t)
        }
        function l(t) {
            return new c(t)
        }
        Object.keys(h).forEach((function(t) {
            h[t].id = r.from(h[t].id, "hex"),
            h[t.toLowerCase()] = h[t]
        }
        )),
        a(u, i.Writable),
        u.prototype._write = function(t, e, r) {
            this._hash.update(t),
            r()
        }
        ,
        u.prototype.update = function(t, e) {
            return "string" == typeof t && (t = r.from(t, e)),
            this._hash.update(t),
            this
        }
        ,
        u.prototype.sign = function(t, e) {
            this.end();
            var r = this._hash.digest()
              , n = s(r, t, this._hashType, this._signType, this._tag);
            return e ? n.toString(e) : n
        }
        ,
        a(c, i.Writable),
        c.prototype._write = function(t, e, r) {
            this._hash.update(t),
            r()
        }
        ,
        c.prototype.update = function(t, e) {
            return "string" == typeof t && (t = r.from(t, e)),
            this._hash.update(t),
            this
        }
        ,
        c.prototype.verify = function(t, e, n) {
            "string" == typeof e && (e = r.from(e, n)),
            this.end();
            var i = this._hash.digest();
            return f(e, i, t, this._signType, this._tag)
        }
        ,
        t.exports = {
            Sign: d,
            Verify: l,
            createSign: d,
            createVerify: l
        }
    }
    )),
    o.register("5iPOX", (function(t, e) {
        var r = o("5Xfjk").Buffer
          , n = o("3N3Qi")
          , i = o("4iOFY")
          , a = o("4piDs").ec
          , s = o("bipxM")
          , f = o("1sSrw")
          , h = o("47Un3");
        function u(t, e, i, o) {
            if ((t = r.from(t.toArray())).length < e.byteLength()) {
                var a = r.alloc(e.byteLength() - t.length);
                t = r.concat([a, t])
            }
            var s = i.length
              , f = function(t, e) {
                t = (t = c(t, e)).mod(e);
                var n = r.from(t.toArray());
                if (n.length < e.byteLength()) {
                    var i = r.alloc(e.byteLength() - n.length);
                    n = r.concat([i, n])
                }
                return n
            }(i, e)
              , h = r.alloc(s);
            h.fill(1);
            var u = r.alloc(s);
            return u = n(o, u).update(h).update(r.from([0])).update(t).update(f).digest(),
            h = n(o, u).update(h).digest(),
            {
                k: u = n(o, u).update(h).update(r.from([1])).update(t).update(f).digest(),
                v: h = n(o, u).update(h).digest()
            }
        }
        function c(t, e) {
            var r = new s(t)
              , n = (t.length << 3) - e.bitLength();
            return n > 0 && r.ishrn(n),
            r
        }
        function d(t, e, i) {
            var o, a;
            do {
                for (o = r.alloc(0); 8 * o.length < t.bitLength(); )
                    e.v = n(i, e.k).update(e.v).digest(),
                    o = r.concat([o, e.v]);
                a = c(o, t),
                e.k = n(i, e.k).update(e.v).update(r.from([0])).digest(),
                e.v = n(i, e.k).update(e.v).digest()
            } while (-1 !== a.cmp(t));
            return a
        }
        function l(t, e, r, n) {
            return t.toRed(s.mont(r)).redPow(e).fromRed().mod(n)
        }
        t.exports = function(t, e, n, o, p) {
            var m = f(e);
            if (m.curve) {
                if ("ecdsa" !== o && "ecdsa/rsa" !== o)
                    throw new Error("wrong private key type");
                return function(t, e) {
                    var n = h[e.curve.join(".")];
                    if (!n)
                        throw new Error("unknown curve " + e.curve.join("."));
                    var i = new a(n).keyFromPrivate(e.privateKey).sign(t);
                    return r.from(i.toDER())
                }(t, m)
            }
            if ("dsa" === m.type) {
                if ("dsa" !== o)
                    throw new Error("wrong private key type");
                return function(t, e, n) {
                    var i, o = e.params.priv_key, a = e.params.p, f = e.params.q, h = e.params.g, p = new s(0), m = c(t, f).mod(f), b = !1, g = u(o, f, t, n);
                    for (; !1 === b; )
                        p = l(h, i = d(f, g, n), a, f),
                        0 === (b = i.invm(f).imul(m.add(o.mul(p))).mod(f)).cmpn(0) && (b = !1,
                        p = new s(0));
                    return function(t, e) {
                        t = t.toArray(),
                        e = e.toArray(),
                        128 & t[0] && (t = [0].concat(t));
                        128 & e[0] && (e = [0].concat(e));
                        var n = [48, t.length + e.length + 4, 2, t.length];
                        return n = n.concat(t, [2, e.length], e),
                        r.from(n)
                    }(p, b)
                }(t, m, n)
            }
            if ("rsa" !== o && "ecdsa/rsa" !== o)
                throw new Error("wrong private key type");
            t = r.concat([p, t]);
            for (var b = m.modulus.byteLength(), g = [0, 1]; t.length + g.length + 1 < b; )
                g.push(255);
            g.push(0);
            for (var v = -1; ++v < t.length; )
                g.push(t[v]);
            return i(g, m)
        }
        ,
        t.exports.getKey = u,
        t.exports.makeKey = d
    }
    )),
    o.register("4iOFY", (function(t, e) {
        var r = o("3tvKv").Buffer
          , n = o("1kuQN")
          , i = o("6DQjm");
        function a(t) {
            var e, r = t.modulus.byteLength();
            do {
                e = new n(i(r))
            } while (e.cmp(t.modulus) >= 0 || !e.umod(t.prime1) || !e.umod(t.prime2));
            return e
        }
        function s(t, e) {
            var i = function(t) {
                var e = a(t);
                return {
                    blinder: e.toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed(),
                    unblinder: e.invm(t.modulus)
                }
            }(e)
              , o = e.modulus.byteLength()
              , s = new n(t).mul(i.blinder).umod(e.modulus)
              , f = s.toRed(n.mont(e.prime1))
              , h = s.toRed(n.mont(e.prime2))
              , u = e.coefficient
              , c = e.prime1
              , d = e.prime2
              , l = f.redPow(e.exponent1).fromRed()
              , p = h.redPow(e.exponent2).fromRed()
              , m = l.isub(p).imul(u).umod(c).imul(d);
            return p.iadd(m).imul(i.unblinder).umod(e.modulus).toArrayLike(r, "be", o)
        }
        s.getr = a,
        t.exports = s
    }
    )),
    o.register("1kuQN", (function(t, e) {
        !function(t, e) {
            function r(t, e) {
                if (!t)
                    throw new Error(e || "Assertion failed")
            }
            function n(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
            function i(t, e, r) {
                if (i.isBN(t))
                    return t;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== t && ("le" !== e && "be" !== e || (r = e,
                e = 10),
                this._init(t || 0, e || 10, r || "be"))
            }
            var a;
            "object" == typeof t ? t.exports = i : e.BN = i,
            i.BN = i,
            i.wordSize = 26;
            try {
                a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : o("4w6kb").Buffer
            } catch (t) {}
            function s(t, e) {
                var n = t.charCodeAt(e);
                return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + t)
            }
            function f(t, e, r) {
                var n = s(t, r);
                return r - 1 >= e && (n |= s(t, r - 1) << 4),
                n
            }
            function h(t, e, n, i) {
                for (var o = 0, a = 0, s = Math.min(t.length, n), f = e; f < s; f++) {
                    var h = t.charCodeAt(f) - 48;
                    o *= i,
                    a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h,
                    r(h >= 0 && a < i, "Invalid character"),
                    o += a
                }
                return o
            }
            function u(t, e) {
                t.words = e.words,
                t.length = e.length,
                t.negative = e.negative,
                t.red = e.red
            }
            if (i.isBN = function(t) {
                return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words)
            }
            ,
            i.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e
            }
            ,
            i.min = function(t, e) {
                return t.cmp(e) < 0 ? t : e
            }
            ,
            i.prototype._init = function(t, e, n) {
                if ("number" == typeof t)
                    return this._initNumber(t, e, n);
                if ("object" == typeof t)
                    return this._initArray(t, e, n);
                "hex" === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++,
                this.negative = 1),
                i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i),
                "le" === n && this._initArray(this.toArray(), e, n)))
            }
            ,
            i.prototype._initNumber = function(t, e, n) {
                t < 0 && (this.negative = 1,
                t = -t),
                t < 67108864 ? (this.words = [67108863 & t],
                this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                this.length = 2) : (r(t < 9007199254740992),
                this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === n && this._initArray(this.toArray(), e, n)
            }
            ,
            i.prototype._initArray = function(t, e, n) {
                if (r("number" == typeof t.length),
                t.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(t.length / 3),
                this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var o, a, s = 0;
                if ("be" === n)
                    for (i = t.length - 1,
                    o = 0; i >= 0; i -= 3)
                        a = t[i] | t[i - 1] << 8 | t[i - 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                else if ("le" === n)
                    for (i = 0,
                    o = 0; i < t.length; i += 3)
                        a = t[i] | t[i + 1] << 8 | t[i + 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                return this._strip()
            }
            ,
            i.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var i, o = 0, a = 0;
                if ("be" === r)
                    for (n = t.length - 1; n >= e; n -= 2)
                        i = f(t, e, n) << o,
                        this.words[a] |= 67108863 & i,
                        o >= 18 ? (o -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : o += 8;
                else
                    for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)
                        i = f(t, e, n) << o,
                        this.words[a] |= 67108863 & i,
                        o >= 18 ? (o -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : o += 8;
                this._strip()
            }
            ,
            i.prototype._parseBase = function(t, e, r) {
                this.words = [0],
                this.length = 1;
                for (var n = 0, i = 1; i <= 67108863; i *= e)
                    n++;
                n--,
                i = i / e | 0;
                for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, f = 0, u = r; u < s; u += n)
                    f = h(t, u, u + n, e),
                    this.imuln(i),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== a) {
                    var c = 1;
                    for (f = h(t, u, t.length, e),
                    u = 0; u < a; u++)
                        c *= e;
                    this.imuln(c),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                }
                this._strip()
            }
            ,
            i.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var e = 0; e < this.length; e++)
                    t.words[e] = this.words[e];
                t.length = this.length,
                t.negative = this.negative,
                t.red = this.red
            }
            ,
            i.prototype._move = function(t) {
                u(t, this)
            }
            ,
            i.prototype.clone = function() {
                var t = new i(null);
                return this.copy(t),
                t
            }
            ,
            i.prototype._expand = function(t) {
                for (; this.length < t; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            i.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            i.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            "undefined" != typeof Symbol && "function" == typeof Symbol.for)
                try {
                    i.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
                } catch (t) {
                    i.prototype.inspect = c
                }
            else
                i.prototype.inspect = c;
            function c() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            i.prototype.toString = function(t, e) {
                var n;
                if (e = 0 | e || 1,
                16 === (t = t || 10) || "hex" === t) {
                    n = "";
                    for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a]
                          , f = (16777215 & (s << i | o)).toString(16);
                        n = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? d[6 - f.length] + f + n : f + n,
                        (i += 2) >= 26 && (i -= 26,
                        a--)
                    }
                    for (0 !== o && (n = o.toString(16) + n); n.length % e != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var h = l[t]
                      , u = p[t];
                    n = "";
                    var c = this.clone();
                    for (c.negative = 0; !c.isZero(); ) {
                        var m = c.modrn(u).toString(t);
                        n = (c = c.idivn(u)).isZero() ? m + n : d[h - m.length] + m + n
                    }
                    for (this.isZero() && (n = "0" + n); n.length % e != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                r(!1, "Base should be between 2 and 36")
            }
            ,
            i.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
            }
            ,
            i.prototype.toJSON = function() {
                return this.toString(16, 2)
            }
            ,
            a && (i.prototype.toBuffer = function(t, e) {
                return this.toArrayLike(a, t, e)
            }
            ),
            i.prototype.toArray = function(t, e) {
                return this.toArrayLike(Array, t, e)
            }
            ;
            function m(t, e, r) {
                r.negative = e.negative ^ t.negative;
                var n = t.length + e.length | 0;
                r.length = n,
                n = n - 1 | 0;
                var i = 0 | t.words[0]
                  , o = 0 | e.words[0]
                  , a = i * o
                  , s = 67108863 & a
                  , f = a / 67108864 | 0;
                r.words[0] = s;
                for (var h = 1; h < n; h++) {
                    for (var u = f >>> 26, c = 67108863 & f, d = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= d; l++) {
                        var p = h - l | 0;
                        u += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + c) / 67108864 | 0,
                        c = 67108863 & a
                    }
                    r.words[h] = 0 | c,
                    f = 0 | u
                }
                return 0 !== f ? r.words[h] = 0 | f : r.length--,
                r._strip()
            }
            i.prototype.toArrayLike = function(t, e, n) {
                this._strip();
                var i = this.byteLength()
                  , o = n || Math.max(1, i);
                r(i <= o, "byte array longer than desired length"),
                r(o > 0, "Requested array length <= 0");
                var a = function(t, e) {
                    return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                }(t, o);
                return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, i),
                a
            }
            ,
            i.prototype._toArrayLikeLE = function(t, e) {
                for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                    var a = this.words[i] << o | n;
                    t[r++] = 255 & a,
                    r < t.length && (t[r++] = a >> 8 & 255),
                    r < t.length && (t[r++] = a >> 16 & 255),
                    6 === o ? (r < t.length && (t[r++] = a >> 24 & 255),
                    n = 0,
                    o = 0) : (n = a >>> 24,
                    o += 2)
                }
                if (r < t.length)
                    for (t[r++] = n; r < t.length; )
                        t[r++] = 0
            }
            ,
            i.prototype._toArrayLikeBE = function(t, e) {
                for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                    var a = this.words[i] << o | n;
                    t[r--] = 255 & a,
                    r >= 0 && (t[r--] = a >> 8 & 255),
                    r >= 0 && (t[r--] = a >> 16 & 255),
                    6 === o ? (r >= 0 && (t[r--] = a >> 24 & 255),
                    n = 0,
                    o = 0) : (n = a >>> 24,
                    o += 2)
                }
                if (r >= 0)
                    for (t[r--] = n; r >= 0; )
                        t[r--] = 0
            }
            ,
            Math.clz32 ? i.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            }
            : i.prototype._countBits = function(t) {
                var e = t
                  , r = 0;
                return e >= 4096 && (r += 13,
                e >>>= 13),
                e >= 64 && (r += 7,
                e >>>= 7),
                e >= 8 && (r += 4,
                e >>>= 4),
                e >= 2 && (r += 2,
                e >>>= 2),
                r + e
            }
            ,
            i.prototype._zeroBits = function(t) {
                if (0 === t)
                    return 26;
                var e = t
                  , r = 0;
                return 0 == (8191 & e) && (r += 13,
                e >>>= 13),
                0 == (127 & e) && (r += 7,
                e >>>= 7),
                0 == (15 & e) && (r += 4,
                e >>>= 4),
                0 == (3 & e) && (r += 2,
                e >>>= 2),
                0 == (1 & e) && r++,
                r
            }
            ,
            i.prototype.bitLength = function() {
                var t = this.words[this.length - 1]
                  , e = this._countBits(t);
                return 26 * (this.length - 1) + e
            }
            ,
            i.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var t = 0, e = 0; e < this.length; e++) {
                    var r = this._zeroBits(this.words[e]);
                    if (t += r,
                    26 !== r)
                        break
                }
                return t
            }
            ,
            i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            i.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }
            ,
            i.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }
            ,
            i.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            i.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            i.prototype.iuor = function(t) {
                for (; this.length < t.length; )
                    this.words[this.length++] = 0;
                for (var e = 0; e < t.length; e++)
                    this.words[e] = this.words[e] | t.words[e];
                return this._strip()
            }
            ,
            i.prototype.ior = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuor(t)
            }
            ,
            i.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }
            ,
            i.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }
            ,
            i.prototype.iuand = function(t) {
                var e;
                e = this.length > t.length ? t : this;
                for (var r = 0; r < e.length; r++)
                    this.words[r] = this.words[r] & t.words[r];
                return this.length = e.length,
                this._strip()
            }
            ,
            i.prototype.iand = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuand(t)
            }
            ,
            i.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }
            ,
            i.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }
            ,
            i.prototype.iuxor = function(t) {
                var e, r;
                this.length > t.length ? (e = this,
                r = t) : (e = t,
                r = this);
                for (var n = 0; n < r.length; n++)
                    this.words[n] = e.words[n] ^ r.words[n];
                if (this !== e)
                    for (; n < e.length; n++)
                        this.words[n] = e.words[n];
                return this.length = e.length,
                this._strip()
            }
            ,
            i.prototype.ixor = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuxor(t)
            }
            ,
            i.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }
            ,
            i.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }
            ,
            i.prototype.inotn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26)
                  , n = t % 26;
                this._expand(e),
                n > 0 && e--;
                for (var i = 0; i < e; i++)
                    this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n),
                this._strip()
            }
            ,
            i.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }
            ,
            i.prototype.setn = function(t, e) {
                r("number" == typeof t && t >= 0);
                var n = t / 26 | 0
                  , i = t % 26;
                return this._expand(n + 1),
                this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i),
                this._strip()
            }
            ,
            i.prototype.iadd = function(t) {
                var e, r, n;
                if (0 !== this.negative && 0 === t.negative)
                    return this.negative = 0,
                    e = this.isub(t),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== t.negative)
                    return t.negative = 0,
                    e = this.isub(t),
                    t.negative = 1,
                    e._normSign();
                this.length > t.length ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var i = 0, o = 0; o < n.length; o++)
                    e = (0 | r.words[o]) + (0 | n.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                for (; 0 !== i && o < r.length; o++)
                    e = (0 | r.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                if (this.length = r.length,
                0 !== i)
                    this.words[this.length] = i,
                    this.length++;
                else if (r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this
            }
            ,
            i.prototype.add = function(t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                e = this.sub(t),
                t.negative ^= 1,
                e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                e = t.sub(this),
                this.negative = 1,
                e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }
            ,
            i.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e = this.iadd(t);
                    return t.negative = 1,
                    e._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(t),
                    this.negative = 1,
                    this._normSign();
                var r, n, i = this.cmp(t);
                if (0 === i)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                i > 0 ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var o = 0, a = 0; a < n.length; a++)
                    o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & e;
                for (; 0 !== o && a < r.length; a++)
                    o = (e = (0 | r.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & e;
                if (0 === o && a < r.length && r !== this)
                    for (; a < r.length; a++)
                        this.words[a] = r.words[a];
                return this.length = Math.max(this.length, a),
                r !== this && (this.negative = 1),
                this._strip()
            }
            ,
            i.prototype.sub = function(t) {
                return this.clone().isub(t)
            }
            ;
            var b = function(t, e, r) {
                var n, i, o, a = t.words, s = e.words, f = r.words, h = 0, u = 0 | a[0], c = 8191 & u, d = u >>> 13, l = 0 | a[1], p = 8191 & l, m = l >>> 13, b = 0 | a[2], g = 8191 & b, v = b >>> 13, y = 0 | a[3], w = 8191 & y, _ = y >>> 13, A = 0 | a[4], M = 8191 & A, E = A >>> 13, S = 0 | a[5], k = 8191 & S, x = S >>> 13, B = 0 | a[6], R = 8191 & B, T = B >>> 13, C = 0 | a[7], D = 8191 & C, I = C >>> 13, P = 0 | a[8], O = 8191 & P, L = P >>> 13, j = 0 | a[9], U = 8191 & j, N = j >>> 13, z = 0 | s[0], F = 8191 & z, q = z >>> 13, Y = 0 | s[1], H = 8191 & Y, W = Y >>> 13, K = 0 | s[2], G = 8191 & K, Z = K >>> 13, V = 0 | s[3], X = 8191 & V, $ = V >>> 13, Q = 0 | s[4], J = 8191 & Q, tt = Q >>> 13, et = 0 | s[5], rt = 8191 & et, nt = et >>> 13, it = 0 | s[6], ot = 8191 & it, at = it >>> 13, st = 0 | s[7], ft = 8191 & st, ht = st >>> 13, ut = 0 | s[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | s[9], pt = 8191 & lt, mt = lt >>> 13;
                r.negative = t.negative ^ e.negative,
                r.length = 19;
                var bt = (h + (n = Math.imul(c, F)) | 0) + ((8191 & (i = (i = Math.imul(c, q)) + Math.imul(d, F) | 0)) << 13) | 0;
                h = ((o = Math.imul(d, q)) + (i >>> 13) | 0) + (bt >>> 26) | 0,
                bt &= 67108863,
                n = Math.imul(p, F),
                i = (i = Math.imul(p, q)) + Math.imul(m, F) | 0,
                o = Math.imul(m, q);
                var gt = (h + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, W) | 0) + Math.imul(d, H) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, W) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0,
                gt &= 67108863,
                n = Math.imul(g, F),
                i = (i = Math.imul(g, q)) + Math.imul(v, F) | 0,
                o = Math.imul(v, q),
                n = n + Math.imul(p, H) | 0,
                i = (i = i + Math.imul(p, W) | 0) + Math.imul(m, H) | 0,
                o = o + Math.imul(m, W) | 0;
                var vt = (h + (n = n + Math.imul(c, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, Z) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, Z) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0,
                vt &= 67108863,
                n = Math.imul(w, F),
                i = (i = Math.imul(w, q)) + Math.imul(_, F) | 0,
                o = Math.imul(_, q),
                n = n + Math.imul(g, H) | 0,
                i = (i = i + Math.imul(g, W) | 0) + Math.imul(v, H) | 0,
                o = o + Math.imul(v, W) | 0,
                n = n + Math.imul(p, G) | 0,
                i = (i = i + Math.imul(p, Z) | 0) + Math.imul(m, G) | 0,
                o = o + Math.imul(m, Z) | 0;
                var yt = (h + (n = n + Math.imul(c, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, $) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0,
                yt &= 67108863,
                n = Math.imul(M, F),
                i = (i = Math.imul(M, q)) + Math.imul(E, F) | 0,
                o = Math.imul(E, q),
                n = n + Math.imul(w, H) | 0,
                i = (i = i + Math.imul(w, W) | 0) + Math.imul(_, H) | 0,
                o = o + Math.imul(_, W) | 0,
                n = n + Math.imul(g, G) | 0,
                i = (i = i + Math.imul(g, Z) | 0) + Math.imul(v, G) | 0,
                o = o + Math.imul(v, Z) | 0,
                n = n + Math.imul(p, X) | 0,
                i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, X) | 0,
                o = o + Math.imul(m, $) | 0;
                var wt = (h + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0,
                wt &= 67108863,
                n = Math.imul(k, F),
                i = (i = Math.imul(k, q)) + Math.imul(x, F) | 0,
                o = Math.imul(x, q),
                n = n + Math.imul(M, H) | 0,
                i = (i = i + Math.imul(M, W) | 0) + Math.imul(E, H) | 0,
                o = o + Math.imul(E, W) | 0,
                n = n + Math.imul(w, G) | 0,
                i = (i = i + Math.imul(w, Z) | 0) + Math.imul(_, G) | 0,
                o = o + Math.imul(_, Z) | 0,
                n = n + Math.imul(g, X) | 0,
                i = (i = i + Math.imul(g, $) | 0) + Math.imul(v, X) | 0,
                o = o + Math.imul(v, $) | 0,
                n = n + Math.imul(p, J) | 0,
                i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, J) | 0,
                o = o + Math.imul(m, tt) | 0;
                var _t = (h + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0,
                _t &= 67108863,
                n = Math.imul(R, F),
                i = (i = Math.imul(R, q)) + Math.imul(T, F) | 0,
                o = Math.imul(T, q),
                n = n + Math.imul(k, H) | 0,
                i = (i = i + Math.imul(k, W) | 0) + Math.imul(x, H) | 0,
                o = o + Math.imul(x, W) | 0,
                n = n + Math.imul(M, G) | 0,
                i = (i = i + Math.imul(M, Z) | 0) + Math.imul(E, G) | 0,
                o = o + Math.imul(E, Z) | 0,
                n = n + Math.imul(w, X) | 0,
                i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, X) | 0,
                o = o + Math.imul(_, $) | 0,
                n = n + Math.imul(g, J) | 0,
                i = (i = i + Math.imul(g, tt) | 0) + Math.imul(v, J) | 0,
                o = o + Math.imul(v, tt) | 0,
                n = n + Math.imul(p, rt) | 0,
                i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0,
                o = o + Math.imul(m, nt) | 0;
                var At = (h + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, at) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0,
                At &= 67108863,
                n = Math.imul(D, F),
                i = (i = Math.imul(D, q)) + Math.imul(I, F) | 0,
                o = Math.imul(I, q),
                n = n + Math.imul(R, H) | 0,
                i = (i = i + Math.imul(R, W) | 0) + Math.imul(T, H) | 0,
                o = o + Math.imul(T, W) | 0,
                n = n + Math.imul(k, G) | 0,
                i = (i = i + Math.imul(k, Z) | 0) + Math.imul(x, G) | 0,
                o = o + Math.imul(x, Z) | 0,
                n = n + Math.imul(M, X) | 0,
                i = (i = i + Math.imul(M, $) | 0) + Math.imul(E, X) | 0,
                o = o + Math.imul(E, $) | 0,
                n = n + Math.imul(w, J) | 0,
                i = (i = i + Math.imul(w, tt) | 0) + Math.imul(_, J) | 0,
                o = o + Math.imul(_, tt) | 0,
                n = n + Math.imul(g, rt) | 0,
                i = (i = i + Math.imul(g, nt) | 0) + Math.imul(v, rt) | 0,
                o = o + Math.imul(v, nt) | 0,
                n = n + Math.imul(p, ot) | 0,
                i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0,
                o = o + Math.imul(m, at) | 0;
                var Mt = (h + (n = n + Math.imul(c, ft) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ht) | 0) + Math.imul(d, ft) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, ht) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0,
                Mt &= 67108863,
                n = Math.imul(O, F),
                i = (i = Math.imul(O, q)) + Math.imul(L, F) | 0,
                o = Math.imul(L, q),
                n = n + Math.imul(D, H) | 0,
                i = (i = i + Math.imul(D, W) | 0) + Math.imul(I, H) | 0,
                o = o + Math.imul(I, W) | 0,
                n = n + Math.imul(R, G) | 0,
                i = (i = i + Math.imul(R, Z) | 0) + Math.imul(T, G) | 0,
                o = o + Math.imul(T, Z) | 0,
                n = n + Math.imul(k, X) | 0,
                i = (i = i + Math.imul(k, $) | 0) + Math.imul(x, X) | 0,
                o = o + Math.imul(x, $) | 0,
                n = n + Math.imul(M, J) | 0,
                i = (i = i + Math.imul(M, tt) | 0) + Math.imul(E, J) | 0,
                o = o + Math.imul(E, tt) | 0,
                n = n + Math.imul(w, rt) | 0,
                i = (i = i + Math.imul(w, nt) | 0) + Math.imul(_, rt) | 0,
                o = o + Math.imul(_, nt) | 0,
                n = n + Math.imul(g, ot) | 0,
                i = (i = i + Math.imul(g, at) | 0) + Math.imul(v, ot) | 0,
                o = o + Math.imul(v, at) | 0,
                n = n + Math.imul(p, ft) | 0,
                i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, ft) | 0,
                o = o + Math.imul(m, ht) | 0;
                var Et = (h + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0,
                Et &= 67108863,
                n = Math.imul(U, F),
                i = (i = Math.imul(U, q)) + Math.imul(N, F) | 0,
                o = Math.imul(N, q),
                n = n + Math.imul(O, H) | 0,
                i = (i = i + Math.imul(O, W) | 0) + Math.imul(L, H) | 0,
                o = o + Math.imul(L, W) | 0,
                n = n + Math.imul(D, G) | 0,
                i = (i = i + Math.imul(D, Z) | 0) + Math.imul(I, G) | 0,
                o = o + Math.imul(I, Z) | 0,
                n = n + Math.imul(R, X) | 0,
                i = (i = i + Math.imul(R, $) | 0) + Math.imul(T, X) | 0,
                o = o + Math.imul(T, $) | 0,
                n = n + Math.imul(k, J) | 0,
                i = (i = i + Math.imul(k, tt) | 0) + Math.imul(x, J) | 0,
                o = o + Math.imul(x, tt) | 0,
                n = n + Math.imul(M, rt) | 0,
                i = (i = i + Math.imul(M, nt) | 0) + Math.imul(E, rt) | 0,
                o = o + Math.imul(E, nt) | 0,
                n = n + Math.imul(w, ot) | 0,
                i = (i = i + Math.imul(w, at) | 0) + Math.imul(_, ot) | 0,
                o = o + Math.imul(_, at) | 0,
                n = n + Math.imul(g, ft) | 0,
                i = (i = i + Math.imul(g, ht) | 0) + Math.imul(v, ft) | 0,
                o = o + Math.imul(v, ht) | 0,
                n = n + Math.imul(p, ct) | 0,
                i = (i = i + Math.imul(p, dt) | 0) + Math.imul(m, ct) | 0,
                o = o + Math.imul(m, dt) | 0;
                var St = (h + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, mt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0,
                St &= 67108863,
                n = Math.imul(U, H),
                i = (i = Math.imul(U, W)) + Math.imul(N, H) | 0,
                o = Math.imul(N, W),
                n = n + Math.imul(O, G) | 0,
                i = (i = i + Math.imul(O, Z) | 0) + Math.imul(L, G) | 0,
                o = o + Math.imul(L, Z) | 0,
                n = n + Math.imul(D, X) | 0,
                i = (i = i + Math.imul(D, $) | 0) + Math.imul(I, X) | 0,
                o = o + Math.imul(I, $) | 0,
                n = n + Math.imul(R, J) | 0,
                i = (i = i + Math.imul(R, tt) | 0) + Math.imul(T, J) | 0,
                o = o + Math.imul(T, tt) | 0,
                n = n + Math.imul(k, rt) | 0,
                i = (i = i + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0,
                o = o + Math.imul(x, nt) | 0,
                n = n + Math.imul(M, ot) | 0,
                i = (i = i + Math.imul(M, at) | 0) + Math.imul(E, ot) | 0,
                o = o + Math.imul(E, at) | 0,
                n = n + Math.imul(w, ft) | 0,
                i = (i = i + Math.imul(w, ht) | 0) + Math.imul(_, ft) | 0,
                o = o + Math.imul(_, ht) | 0,
                n = n + Math.imul(g, ct) | 0,
                i = (i = i + Math.imul(g, dt) | 0) + Math.imul(v, ct) | 0,
                o = o + Math.imul(v, dt) | 0;
                var kt = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0,
                kt &= 67108863,
                n = Math.imul(U, G),
                i = (i = Math.imul(U, Z)) + Math.imul(N, G) | 0,
                o = Math.imul(N, Z),
                n = n + Math.imul(O, X) | 0,
                i = (i = i + Math.imul(O, $) | 0) + Math.imul(L, X) | 0,
                o = o + Math.imul(L, $) | 0,
                n = n + Math.imul(D, J) | 0,
                i = (i = i + Math.imul(D, tt) | 0) + Math.imul(I, J) | 0,
                o = o + Math.imul(I, tt) | 0,
                n = n + Math.imul(R, rt) | 0,
                i = (i = i + Math.imul(R, nt) | 0) + Math.imul(T, rt) | 0,
                o = o + Math.imul(T, nt) | 0,
                n = n + Math.imul(k, ot) | 0,
                i = (i = i + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0,
                o = o + Math.imul(x, at) | 0,
                n = n + Math.imul(M, ft) | 0,
                i = (i = i + Math.imul(M, ht) | 0) + Math.imul(E, ft) | 0,
                o = o + Math.imul(E, ht) | 0,
                n = n + Math.imul(w, ct) | 0,
                i = (i = i + Math.imul(w, dt) | 0) + Math.imul(_, ct) | 0,
                o = o + Math.imul(_, dt) | 0;
                var xt = (h + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(v, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(v, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0,
                xt &= 67108863,
                n = Math.imul(U, X),
                i = (i = Math.imul(U, $)) + Math.imul(N, X) | 0,
                o = Math.imul(N, $),
                n = n + Math.imul(O, J) | 0,
                i = (i = i + Math.imul(O, tt) | 0) + Math.imul(L, J) | 0,
                o = o + Math.imul(L, tt) | 0,
                n = n + Math.imul(D, rt) | 0,
                i = (i = i + Math.imul(D, nt) | 0) + Math.imul(I, rt) | 0,
                o = o + Math.imul(I, nt) | 0,
                n = n + Math.imul(R, ot) | 0,
                i = (i = i + Math.imul(R, at) | 0) + Math.imul(T, ot) | 0,
                o = o + Math.imul(T, at) | 0,
                n = n + Math.imul(k, ft) | 0,
                i = (i = i + Math.imul(k, ht) | 0) + Math.imul(x, ft) | 0,
                o = o + Math.imul(x, ht) | 0,
                n = n + Math.imul(M, ct) | 0,
                i = (i = i + Math.imul(M, dt) | 0) + Math.imul(E, ct) | 0,
                o = o + Math.imul(E, dt) | 0;
                var Bt = (h + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0,
                Bt &= 67108863,
                n = Math.imul(U, J),
                i = (i = Math.imul(U, tt)) + Math.imul(N, J) | 0,
                o = Math.imul(N, tt),
                n = n + Math.imul(O, rt) | 0,
                i = (i = i + Math.imul(O, nt) | 0) + Math.imul(L, rt) | 0,
                o = o + Math.imul(L, nt) | 0,
                n = n + Math.imul(D, ot) | 0,
                i = (i = i + Math.imul(D, at) | 0) + Math.imul(I, ot) | 0,
                o = o + Math.imul(I, at) | 0,
                n = n + Math.imul(R, ft) | 0,
                i = (i = i + Math.imul(R, ht) | 0) + Math.imul(T, ft) | 0,
                o = o + Math.imul(T, ht) | 0,
                n = n + Math.imul(k, ct) | 0,
                i = (i = i + Math.imul(k, dt) | 0) + Math.imul(x, ct) | 0,
                o = o + Math.imul(x, dt) | 0;
                var Rt = (h + (n = n + Math.imul(M, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0,
                Rt &= 67108863,
                n = Math.imul(U, rt),
                i = (i = Math.imul(U, nt)) + Math.imul(N, rt) | 0,
                o = Math.imul(N, nt),
                n = n + Math.imul(O, ot) | 0,
                i = (i = i + Math.imul(O, at) | 0) + Math.imul(L, ot) | 0,
                o = o + Math.imul(L, at) | 0,
                n = n + Math.imul(D, ft) | 0,
                i = (i = i + Math.imul(D, ht) | 0) + Math.imul(I, ft) | 0,
                o = o + Math.imul(I, ht) | 0,
                n = n + Math.imul(R, ct) | 0,
                i = (i = i + Math.imul(R, dt) | 0) + Math.imul(T, ct) | 0,
                o = o + Math.imul(T, dt) | 0;
                var Tt = (h + (n = n + Math.imul(k, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0,
                Tt &= 67108863,
                n = Math.imul(U, ot),
                i = (i = Math.imul(U, at)) + Math.imul(N, ot) | 0,
                o = Math.imul(N, at),
                n = n + Math.imul(O, ft) | 0,
                i = (i = i + Math.imul(O, ht) | 0) + Math.imul(L, ft) | 0,
                o = o + Math.imul(L, ht) | 0,
                n = n + Math.imul(D, ct) | 0,
                i = (i = i + Math.imul(D, dt) | 0) + Math.imul(I, ct) | 0,
                o = o + Math.imul(I, dt) | 0;
                var Ct = (h + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, mt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(T, mt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0,
                Ct &= 67108863,
                n = Math.imul(U, ft),
                i = (i = Math.imul(U, ht)) + Math.imul(N, ft) | 0,
                o = Math.imul(N, ht),
                n = n + Math.imul(O, ct) | 0,
                i = (i = i + Math.imul(O, dt) | 0) + Math.imul(L, ct) | 0,
                o = o + Math.imul(L, dt) | 0;
                var Dt = (h + (n = n + Math.imul(D, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(D, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Dt >>> 26) | 0,
                Dt &= 67108863,
                n = Math.imul(U, ct),
                i = (i = Math.imul(U, dt)) + Math.imul(N, ct) | 0,
                o = Math.imul(N, dt);
                var It = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0,
                It &= 67108863;
                var Pt = (h + (n = Math.imul(U, pt)) | 0) + ((8191 & (i = (i = Math.imul(U, mt)) + Math.imul(N, pt) | 0)) << 13) | 0;
                return h = ((o = Math.imul(N, mt)) + (i >>> 13) | 0) + (Pt >>> 26) | 0,
                Pt &= 67108863,
                f[0] = bt,
                f[1] = gt,
                f[2] = vt,
                f[3] = yt,
                f[4] = wt,
                f[5] = _t,
                f[6] = At,
                f[7] = Mt,
                f[8] = Et,
                f[9] = St,
                f[10] = kt,
                f[11] = xt,
                f[12] = Bt,
                f[13] = Rt,
                f[14] = Tt,
                f[15] = Ct,
                f[16] = Dt,
                f[17] = It,
                f[18] = Pt,
                0 !== h && (f[19] = h,
                r.length++),
                r
            };
            function g(t, e, r) {
                r.negative = e.negative ^ t.negative,
                r.length = t.length + e.length;
                for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var a = i;
                    i = 0;
                    for (var s = 67108863 & n, f = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= f; h++) {
                        var u = o - h
                          , c = (0 | t.words[u]) * (0 | e.words[h])
                          , d = 67108863 & c;
                        s = 67108863 & (d = d + s | 0),
                        i += (a = (a = a + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26,
                        a &= 67108863
                    }
                    r.words[o] = s,
                    n = a,
                    a = i
                }
                return 0 !== n ? r.words[o] = n : r.length--,
                r._strip()
            }
            function v(t, e, r) {
                return g(t, e, r)
            }
            function y(t, e) {
                this.x = t,
                this.y = e
            }
            Math.imul || (b = m),
            i.prototype.mulTo = function(t, e) {
                var r = this.length + t.length;
                return 10 === this.length && 10 === t.length ? b(this, t, e) : r < 63 ? m(this, t, e) : r < 1024 ? g(this, t, e) : v(this, t, e)
            }
            ,
            y.prototype.makeRBT = function(t) {
                for (var e = new Array(t), r = i.prototype._countBits(t) - 1, n = 0; n < t; n++)
                    e[n] = this.revBin(n, r, t);
                return e
            }
            ,
            y.prototype.revBin = function(t, e, r) {
                if (0 === t || t === r - 1)
                    return t;
                for (var n = 0, i = 0; i < e; i++)
                    n |= (1 & t) << e - i - 1,
                    t >>= 1;
                return n
            }
            ,
            y.prototype.permute = function(t, e, r, n, i, o) {
                for (var a = 0; a < o; a++)
                    n[a] = e[t[a]],
                    i[a] = r[t[a]]
            }
            ,
            y.prototype.transform = function(t, e, r, n, i, o) {
                this.permute(o, t, e, r, n, i);
                for (var a = 1; a < i; a <<= 1)
                    for (var s = a << 1, f = Math.cos(2 * Math.PI / s), h = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                        for (var c = f, d = h, l = 0; l < a; l++) {
                            var p = r[u + l]
                              , m = n[u + l]
                              , b = r[u + l + a]
                              , g = n[u + l + a]
                              , v = c * b - d * g;
                            g = c * g + d * b,
                            b = v,
                            r[u + l] = p + b,
                            n[u + l] = m + g,
                            r[u + l + a] = p - b,
                            n[u + l + a] = m - g,
                            l !== s && (v = f * c - h * d,
                            d = f * d + h * c,
                            c = v)
                        }
            }
            ,
            y.prototype.guessLen13b = function(t, e) {
                var r = 1 | Math.max(e, t)
                  , n = 1 & r
                  , i = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    i++;
                return 1 << i + 1 + n
            }
            ,
            y.prototype.conjugate = function(t, e, r) {
                if (!(r <= 1))
                    for (var n = 0; n < r / 2; n++) {
                        var i = t[n];
                        t[n] = t[r - n - 1],
                        t[r - n - 1] = i,
                        i = e[n],
                        e[n] = -e[r - n - 1],
                        e[r - n - 1] = -i
                    }
            }
            ,
            y.prototype.normalize13b = function(t, e) {
                for (var r = 0, n = 0; n < e / 2; n++) {
                    var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                    t[n] = 67108863 & i,
                    r = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return t
            }
            ,
            y.prototype.convert13b = function(t, e, n, i) {
                for (var o = 0, a = 0; a < e; a++)
                    o += 0 | t[a],
                    n[2 * a] = 8191 & o,
                    o >>>= 13,
                    n[2 * a + 1] = 8191 & o,
                    o >>>= 13;
                for (a = 2 * e; a < i; ++a)
                    n[a] = 0;
                r(0 === o),
                r(0 == (-8192 & o))
            }
            ,
            y.prototype.stub = function(t) {
                for (var e = new Array(t), r = 0; r < t; r++)
                    e[r] = 0;
                return e
            }
            ,
            y.prototype.mulp = function(t, e, r) {
                var n = 2 * this.guessLen13b(t.length, e.length)
                  , i = this.makeRBT(n)
                  , o = this.stub(n)
                  , a = new Array(n)
                  , s = new Array(n)
                  , f = new Array(n)
                  , h = new Array(n)
                  , u = new Array(n)
                  , c = new Array(n)
                  , d = r.words;
                d.length = n,
                this.convert13b(t.words, t.length, a, n),
                this.convert13b(e.words, e.length, h, n),
                this.transform(a, o, s, f, n, i),
                this.transform(h, o, u, c, n, i);
                for (var l = 0; l < n; l++) {
                    var p = s[l] * u[l] - f[l] * c[l];
                    f[l] = s[l] * c[l] + f[l] * u[l],
                    s[l] = p
                }
                return this.conjugate(s, f, n),
                this.transform(s, f, d, o, n, i),
                this.conjugate(d, o, n),
                this.normalize13b(d, n),
                r.negative = t.negative ^ e.negative,
                r.length = t.length + e.length,
                r._strip()
            }
            ,
            i.prototype.mul = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length),
                this.mulTo(t, e)
            }
            ,
            i.prototype.mulf = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length),
                v(this, t, e)
            }
            ,
            i.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }
            ,
            i.prototype.imuln = function(t) {
                var e = t < 0;
                e && (t = -t),
                r("number" == typeof t),
                r(t < 67108864);
                for (var n = 0, i = 0; i < this.length; i++) {
                    var o = (0 | this.words[i]) * t
                      , a = (67108863 & o) + (67108863 & n);
                    n >>= 26,
                    n += o / 67108864 | 0,
                    n += a >>> 26,
                    this.words[i] = 67108863 & a
                }
                return 0 !== n && (this.words[i] = n,
                this.length++),
                e ? this.ineg() : this
            }
            ,
            i.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }
            ,
            i.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            i.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            i.prototype.pow = function(t) {
                var e = function(t) {
                    for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                        var n = r / 26 | 0
                          , i = r % 26;
                        e[r] = t.words[n] >>> i & 1
                    }
                    return e
                }(t);
                if (0 === e.length)
                    return new i(1);
                for (var r = this, n = 0; n < e.length && 0 === e[n]; n++,
                r = r.sqr())
                    ;
                if (++n < e.length)
                    for (var o = r.sqr(); n < e.length; n++,
                    o = o.sqr())
                        0 !== e[n] && (r = r.mul(o));
                return r
            }
            ,
            i.prototype.iushln = function(t) {
                r("number" == typeof t && t >= 0);
                var e, n = t % 26, i = (t - n) / 26, o = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var a = 0;
                    for (e = 0; e < this.length; e++) {
                        var s = this.words[e] & o
                          , f = (0 | this.words[e]) - s << n;
                        this.words[e] = f | a,
                        a = s >>> 26 - n
                    }
                    a && (this.words[e] = a,
                    this.length++)
                }
                if (0 !== i) {
                    for (e = this.length - 1; e >= 0; e--)
                        this.words[e + i] = this.words[e];
                    for (e = 0; e < i; e++)
                        this.words[e] = 0;
                    this.length += i
                }
                return this._strip()
            }
            ,
            i.prototype.ishln = function(t) {
                return r(0 === this.negative),
                this.iushln(t)
            }
            ,
            i.prototype.iushrn = function(t, e, n) {
                var i;
                r("number" == typeof t && t >= 0),
                i = e ? (e - e % 26) / 26 : 0;
                var o = t % 26
                  , a = Math.min((t - o) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> o << o
                  , f = n;
                if (i -= a,
                i = Math.max(0, i),
                f) {
                    for (var h = 0; h < a; h++)
                        f.words[h] = this.words[h];
                    f.length = a
                }
                if (0 === a)
                    ;
                else if (this.length > a)
                    for (this.length -= a,
                    h = 0; h < this.length; h++)
                        this.words[h] = this.words[h + a];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var u = 0;
                for (h = this.length - 1; h >= 0 && (0 !== u || h >= i); h--) {
                    var c = 0 | this.words[h];
                    this.words[h] = u << 26 - o | c >>> o,
                    u = c & s
                }
                return f && 0 !== u && (f.words[f.length++] = u),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this._strip()
            }
            ,
            i.prototype.ishrn = function(t, e, n) {
                return r(0 === this.negative),
                this.iushrn(t, e, n)
            }
            ,
            i.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }
            ,
            i.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }
            ,
            i.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }
            ,
            i.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }
            ,
            i.prototype.testn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26
                  , n = (t - e) / 26
                  , i = 1 << e;
                return !(this.length <= n) && !!(this.words[n] & i)
            }
            ,
            i.prototype.imaskn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26
                  , n = (t - e) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= n)
                    return this;
                if (0 !== e && n++,
                this.length = Math.min(n, this.length),
                0 !== e) {
                    var i = 67108863 ^ 67108863 >>> e << e;
                    this.words[this.length - 1] &= i
                }
                return this._strip()
            }
            ,
            i.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }
            ,
            i.prototype.iaddn = function(t) {
                return r("number" == typeof t),
                r(t < 67108864),
                t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(t),
                this.negative = 1,
                this) : this._iaddn(t)
            }
            ,
            i.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                    this.words[e] -= 67108864,
                    e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1),
                this
            }
            ,
            i.prototype.isubn = function(t) {
                if (r("number" == typeof t),
                r(t < 67108864),
                t < 0)
                    return this.iaddn(-t);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(t),
                    this.negative = 1,
                    this;
                if (this.words[0] -= t,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        this.words[e] += 67108864,
                        this.words[e + 1] -= 1;
                return this._strip()
            }
            ,
            i.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }
            ,
            i.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }
            ,
            i.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            i.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            i.prototype._ishlnsubmul = function(t, e, n) {
                var i, o, a = t.length + n;
                this._expand(a);
                var s = 0;
                for (i = 0; i < t.length; i++) {
                    o = (0 | this.words[i + n]) + s;
                    var f = (0 | t.words[i]) * e;
                    s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0),
                    this.words[i + n] = 67108863 & o
                }
                for (; i < this.length - n; i++)
                    s = (o = (0 | this.words[i + n]) + s) >> 26,
                    this.words[i + n] = 67108863 & o;
                if (0 === s)
                    return this._strip();
                for (r(-1 === s),
                s = 0,
                i = 0; i < this.length; i++)
                    s = (o = -(0 | this.words[i]) + s) >> 26,
                    this.words[i] = 67108863 & o;
                return this.negative = 1,
                this._strip()
            }
            ,
            i.prototype._wordDiv = function(t, e) {
                var r = (this.length,
                t.length)
                  , n = this.clone()
                  , o = t
                  , a = 0 | o.words[o.length - 1];
                0 !== (r = 26 - this._countBits(a)) && (o = o.ushln(r),
                n.iushln(r),
                a = 0 | o.words[o.length - 1]);
                var s, f = n.length - o.length;
                if ("mod" !== e) {
                    (s = new i(null)).length = f + 1,
                    s.words = new Array(s.length);
                    for (var h = 0; h < s.length; h++)
                        s.words[h] = 0
                }
                var u = n.clone()._ishlnsubmul(o, 1, f);
                0 === u.negative && (n = u,
                s && (s.words[f] = 1));
                for (var c = f - 1; c >= 0; c--) {
                    var d = 67108864 * (0 | n.words[o.length + c]) + (0 | n.words[o.length + c - 1]);
                    for (d = Math.min(d / a | 0, 67108863),
                    n._ishlnsubmul(o, d, c); 0 !== n.negative; )
                        d--,
                        n.negative = 0,
                        n._ishlnsubmul(o, 1, c),
                        n.isZero() || (n.negative ^= 1);
                    s && (s.words[c] = d)
                }
                return s && s._strip(),
                n._strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                {
                    div: s || null,
                    mod: n
                }
            }
            ,
            i.prototype.divmod = function(t, e, n) {
                return r(!t.isZero()),
                this.isZero() ? {
                    div: new i(0),
                    mod: new i(0)
                } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e),
                "mod" !== e && (o = s.div.neg()),
                "div" !== e && (a = s.mod.neg(),
                n && 0 !== a.negative && a.iadd(t)),
                {
                    div: o,
                    mod: a
                }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e),
                "mod" !== e && (o = s.div.neg()),
                {
                    div: o,
                    mod: s.mod
                }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e),
                "div" !== e && (a = s.mod.neg(),
                n && 0 !== a.negative && a.isub(t)),
                {
                    div: s.div,
                    mod: a
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new i(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === e ? {
                    div: null,
                    mod: new i(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new i(this.modrn(t.words[0]))
                } : this._wordDiv(t, e);
                var o, a, s
            }
            ,
            i.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }
            ,
            i.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }
            ,
            i.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }
            ,
            i.prototype.divRound = function(t) {
                var e = this.divmod(t);
                if (e.mod.isZero())
                    return e.div;
                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod
                  , n = t.ushrn(1)
                  , i = t.andln(1)
                  , o = r.cmp(n);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }
            ,
            i.prototype.modrn = function(t) {
                var e = t < 0;
                e && (t = -t),
                r(t <= 67108863);
                for (var n = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
                    i = (n * i + (0 | this.words[o])) % t;
                return e ? -i : i
            }
            ,
            i.prototype.modn = function(t) {
                return this.modrn(t)
            }
            ,
            i.prototype.idivn = function(t) {
                var e = t < 0;
                e && (t = -t),
                r(t <= 67108863);
                for (var n = 0, i = this.length - 1; i >= 0; i--) {
                    var o = (0 | this.words[i]) + 67108864 * n;
                    this.words[i] = o / t | 0,
                    n = o % t
                }
                return this._strip(),
                e ? this.ineg() : this
            }
            ,
            i.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }
            ,
            i.prototype.egcd = function(t) {
                r(0 === t.negative),
                r(!t.isZero());
                var e = this
                  , n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var o = new i(1), a = new i(0), s = new i(0), f = new i(1), h = 0; e.isEven() && n.isEven(); )
                    e.iushrn(1),
                    n.iushrn(1),
                    ++h;
                for (var u = n.clone(), c = e.clone(); !e.isZero(); ) {
                    for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d,
                    l <<= 1)
                        ;
                    if (d > 0)
                        for (e.iushrn(d); d-- > 0; )
                            (o.isOdd() || a.isOdd()) && (o.iadd(u),
                            a.isub(c)),
                            o.iushrn(1),
                            a.iushrn(1);
                    for (var p = 0, m = 1; 0 == (n.words[0] & m) && p < 26; ++p,
                    m <<= 1)
                        ;
                    if (p > 0)
                        for (n.iushrn(p); p-- > 0; )
                            (s.isOdd() || f.isOdd()) && (s.iadd(u),
                            f.isub(c)),
                            s.iushrn(1),
                            f.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n),
                    o.isub(s),
                    a.isub(f)) : (n.isub(e),
                    s.isub(o),
                    f.isub(a))
                }
                return {
                    a: s,
                    b: f,
                    gcd: n.iushln(h)
                }
            }
            ,
            i.prototype._invmp = function(t) {
                r(0 === t.negative),
                r(!t.isZero());
                var e = this
                  , n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var o, a = new i(1), s = new i(0), f = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
                    for (var h = 0, u = 1; 0 == (e.words[0] & u) && h < 26; ++h,
                    u <<= 1)
                        ;
                    if (h > 0)
                        for (e.iushrn(h); h-- > 0; )
                            a.isOdd() && a.iadd(f),
                            a.iushrn(1);
                    for (var c = 0, d = 1; 0 == (n.words[0] & d) && c < 26; ++c,
                    d <<= 1)
                        ;
                    if (c > 0)
                        for (n.iushrn(c); c-- > 0; )
                            s.isOdd() && s.iadd(f),
                            s.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n),
                    a.isub(s)) : (n.isub(e),
                    s.isub(a))
                }
                return (o = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && o.iadd(t),
                o
            }
            ,
            i.prototype.gcd = function(t) {
                if (this.isZero())
                    return t.abs();
                if (t.isZero())
                    return this.abs();
                var e = this.clone()
                  , r = t.clone();
                e.negative = 0,
                r.negative = 0;
                for (var n = 0; e.isEven() && r.isEven(); n++)
                    e.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; e.isEven(); )
                        e.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var i = e.cmp(r);
                    if (i < 0) {
                        var o = e;
                        e = r,
                        r = o
                    } else if (0 === i || 0 === r.cmpn(1))
                        break;
                    e.isub(r)
                }
                return r.iushln(n)
            }
            ,
            i.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }
            ,
            i.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }
            ,
            i.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }
            ,
            i.prototype.andln = function(t) {
                return this.words[0] & t
            }
            ,
            i.prototype.bincn = function(t) {
                r("number" == typeof t);
                var e = t % 26
                  , n = (t - e) / 26
                  , i = 1 << e;
                if (this.length <= n)
                    return this._expand(n + 1),
                    this.words[n] |= i,
                    this;
                for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26,
                    s &= 67108863,
                    this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o,
                this.length++),
                this
            }
            ,
            i.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            i.prototype.cmpn = function(t) {
                var e, n = t < 0;
                if (0 !== this.negative && !n)
                    return -1;
                if (0 === this.negative && n)
                    return 1;
                if (this._strip(),
                this.length > 1)
                    e = 1;
                else {
                    n && (t = -t),
                    r(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            i.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return -1;
                if (0 === this.negative && 0 !== t.negative)
                    return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            i.prototype.ucmp = function(t) {
                if (this.length > t.length)
                    return 1;
                if (this.length < t.length)
                    return -1;
                for (var e = 0, r = this.length - 1; r >= 0; r--) {
                    var n = 0 | this.words[r]
                      , i = 0 | t.words[r];
                    if (n !== i) {
                        n < i ? e = -1 : n > i && (e = 1);
                        break
                    }
                }
                return e
            }
            ,
            i.prototype.gtn = function(t) {
                return 1 === this.cmpn(t)
            }
            ,
            i.prototype.gt = function(t) {
                return 1 === this.cmp(t)
            }
            ,
            i.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }
            ,
            i.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }
            ,
            i.prototype.ltn = function(t) {
                return -1 === this.cmpn(t)
            }
            ,
            i.prototype.lt = function(t) {
                return -1 === this.cmp(t)
            }
            ,
            i.prototype.lten = function(t) {
                return this.cmpn(t) <= 0
            }
            ,
            i.prototype.lte = function(t) {
                return this.cmp(t) <= 0
            }
            ,
            i.prototype.eqn = function(t) {
                return 0 === this.cmpn(t)
            }
            ,
            i.prototype.eq = function(t) {
                return 0 === this.cmp(t)
            }
            ,
            i.red = function(t) {
                return new k(t)
            }
            ,
            i.prototype.toRed = function(t) {
                return r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
            }
            ,
            i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            i.prototype._forceRed = function(t) {
                return this.red = t,
                this
            }
            ,
            i.prototype.forceRed = function(t) {
                return r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
            }
            ,
            i.prototype.redAdd = function(t) {
                return r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
            }
            ,
            i.prototype.redIAdd = function(t) {
                return r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
            }
            ,
            i.prototype.redSub = function(t) {
                return r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
            }
            ,
            i.prototype.redISub = function(t) {
                return r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
            }
            ,
            i.prototype.redShl = function(t) {
                return r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
            }
            ,
            i.prototype.redMul = function(t) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
            }
            ,
            i.prototype.redIMul = function(t) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
            }
            ,
            i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            i.prototype.redPow = function(t) {
                return r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
            }
            ;
            var w = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function _(t, e) {
                this.name = t,
                this.p = new i(e,16),
                this.n = this.p.bitLength(),
                this.k = new i(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function A() {
                _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function M() {
                _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function E() {
                _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function S() {
                _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function k(t) {
                if ("string" == typeof t) {
                    var e = i._prime(t);
                    this.m = e.p,
                    this.prime = e
                } else
                    r(t.gtn(1), "modulus must be greater than 1"),
                    this.m = t,
                    this.prime = null
            }
            function x(t) {
                k.call(this, t),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new i(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            _.prototype._tmp = function() {
                var t = new i(null);
                return t.words = new Array(Math.ceil(this.n / 13)),
                t
            }
            ,
            _.prototype.ireduce = function(t) {
                var e, r = t;
                do {
                    this.split(r, this.tmp),
                    e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                } while (e > this.n);
                var n = e < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0,
                r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                r
            }
            ,
            _.prototype.split = function(t, e) {
                t.iushrn(this.n, 0, e)
            }
            ,
            _.prototype.imulK = function(t) {
                return t.imul(this.k)
            }
            ,
            n(A, _),
            A.prototype.split = function(t, e) {
                for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
                    e.words[i] = t.words[i];
                if (e.length = n,
                t.length <= 9)
                    return t.words[0] = 0,
                    void (t.length = 1);
                var o = t.words[9];
                for (e.words[e.length++] = o & r,
                i = 10; i < t.length; i++) {
                    var a = 0 | t.words[i];
                    t.words[i - 10] = (a & r) << 4 | o >>> 22,
                    o = a
                }
                o >>>= 22,
                t.words[i - 10] = o,
                0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
            }
            ,
            A.prototype.imulK = function(t) {
                t.words[t.length] = 0,
                t.words[t.length + 1] = 0,
                t.length += 2;
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 0 | t.words[r];
                    e += 977 * n,
                    t.words[r] = 67108863 & e,
                    e = 64 * n + (e / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--,
                0 === t.words[t.length - 1] && t.length--),
                t
            }
            ,
            n(M, _),
            n(E, _),
            n(S, _),
            S.prototype.imulK = function(t) {
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 19 * (0 | t.words[r]) + e
                      , i = 67108863 & n;
                    n >>>= 26,
                    t.words[r] = i,
                    e = n
                }
                return 0 !== e && (t.words[t.length++] = e),
                t
            }
            ,
            i._prime = function(t) {
                if (w[t])
                    return w[t];
                var e;
                if ("k256" === t)
                    e = new A;
                else if ("p224" === t)
                    e = new M;
                else if ("p192" === t)
                    e = new E;
                else {
                    if ("p25519" !== t)
                        throw new Error("Unknown prime " + t);
                    e = new S
                }
                return w[t] = e,
                e
            }
            ,
            k.prototype._verify1 = function(t) {
                r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers")
            }
            ,
            k.prototype._verify2 = function(t, e) {
                r(0 == (t.negative | e.negative), "red works only with positives"),
                r(t.red && t.red === e.red, "red works only with red numbers")
            }
            ,
            k.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)),
                t)
            }
            ,
            k.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }
            ,
            k.prototype.add = function(t, e) {
                this._verify2(t, e);
                var r = t.add(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            k.prototype.iadd = function(t, e) {
                this._verify2(t, e);
                var r = t.iadd(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            k.prototype.sub = function(t, e) {
                this._verify2(t, e);
                var r = t.sub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            k.prototype.isub = function(t, e) {
                this._verify2(t, e);
                var r = t.isub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r
            }
            ,
            k.prototype.shl = function(t, e) {
                return this._verify1(t),
                this.imod(t.ushln(e))
            }
            ,
            k.prototype.imul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.imul(e))
            }
            ,
            k.prototype.mul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.mul(e))
            }
            ,
            k.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }
            ,
            k.prototype.sqr = function(t) {
                return this.mul(t, t)
            }
            ,
            k.prototype.sqrt = function(t) {
                if (t.isZero())
                    return t.clone();
                var e = this.m.andln(3);
                if (r(e % 2 == 1),
                3 === e) {
                    var n = this.m.add(new i(1)).iushrn(2);
                    return this.pow(t, n)
                }
                for (var o = this.m.subn(1), a = 0; !o.isZero() && 0 === o.andln(1); )
                    a++,
                    o.iushrn(1);
                r(!o.isZero());
                var s = new i(1).toRed(this)
                  , f = s.redNeg()
                  , h = this.m.subn(1).iushrn(1)
                  , u = this.m.bitLength();
                for (u = new i(2 * u * u).toRed(this); 0 !== this.pow(u, h).cmp(f); )
                    u.redIAdd(f);
                for (var c = this.pow(u, o), d = this.pow(t, o.addn(1).iushrn(1)), l = this.pow(t, o), p = a; 0 !== l.cmp(s); ) {
                    for (var m = l, b = 0; 0 !== m.cmp(s); b++)
                        m = m.redSqr();
                    r(b < p);
                    var g = this.pow(c, new i(1).iushln(p - b - 1));
                    d = d.redMul(g),
                    c = g.redSqr(),
                    l = l.redMul(c),
                    p = b
                }
                return d
            }
            ,
            k.prototype.invm = function(t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0,
                this.imod(e).redNeg()) : this.imod(e)
            }
            ,
            k.prototype.pow = function(t, e) {
                if (e.isZero())
                    return new i(1).toRed(this);
                if (0 === e.cmpn(1))
                    return t.clone();
                var r = new Array(16);
                r[0] = new i(1).toRed(this),
                r[1] = t;
                for (var n = 2; n < r.length; n++)
                    r[n] = this.mul(r[n - 1], t);
                var o = r[0]
                  , a = 0
                  , s = 0
                  , f = e.bitLength() % 26;
                for (0 === f && (f = 26),
                n = e.length - 1; n >= 0; n--) {
                    for (var h = e.words[n], u = f - 1; u >= 0; u--) {
                        var c = h >> u & 1;
                        o !== r[0] && (o = this.sqr(o)),
                        0 !== c || 0 !== a ? (a <<= 1,
                        a |= c,
                        (4 === ++s || 0 === n && 0 === u) && (o = this.mul(o, r[a]),
                        s = 0,
                        a = 0)) : s = 0
                    }
                    f = 26
                }
                return o
            }
            ,
            k.prototype.convertTo = function(t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e
            }
            ,
            k.prototype.convertFrom = function(t) {
                var e = t.clone();
                return e.red = null,
                e
            }
            ,
            i.mont = function(t) {
                return new x(t)
            }
            ,
            n(x, k),
            x.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }
            ,
            x.prototype.convertFrom = function(t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null,
                e
            }
            ,
            x.prototype.imul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return t.words[0] = 0,
                    t.length = 1,
                    t;
                var r = t.imul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            x.prototype.mul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return new i(0)._forceRed(this);
                var r = t.mul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , o = r.isub(n).iushrn(this.shift)
                  , a = o;
                return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            x.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(t, this)
    }
    )),
    o.register("4piDs", (function(t, e) {
        "use strict";
        var r = t.exports;
        r.version = o("1O8Z7").version,
        r.utils = o("6siRR"),
        r.rand = o("3rT9g"),
        r.curve = o("1XF1C"),
        r.curves = o("17Toh"),
        r.ec = o("7gCTa"),
        r.eddsa = o("5ugYt")
    }
    )),
    o.register("1O8Z7", (function(t, e) {
        t.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}')
    }
    )),
    o.register("6siRR", (function(t, e) {
        "use strict";
        var r = t.exports
          , n = o("76R5V")
          , i = o("10wuZ")
          , a = o("4ntP3");
        r.assert = i,
        r.toArray = a.toArray,
        r.zero2 = a.zero2,
        r.toHex = a.toHex,
        r.encode = a.encode,
        r.getNAF = function(t, e, r) {
            var n = new Array(Math.max(t.bitLength(), r) + 1);
            n.fill(0);
            for (var i = 1 << e + 1, o = t.clone(), a = 0; a < n.length; a++) {
                var s, f = o.andln(i - 1);
                o.isOdd() ? (s = f > (i >> 1) - 1 ? (i >> 1) - f : f,
                o.isubn(s)) : s = 0,
                n[a] = s,
                o.iushrn(1)
            }
            return n
        }
        ,
        r.getJSF = function(t, e) {
            var r = [[], []];
            t = t.clone(),
            e = e.clone();
            for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
                var a, s, f = t.andln(3) + i & 3, h = e.andln(3) + o & 3;
                3 === f && (f = -1),
                3 === h && (h = -1),
                a = 0 == (1 & f) ? 0 : 3 !== (n = t.andln(7) + i & 7) && 5 !== n || 2 !== h ? f : -f,
                r[0].push(a),
                s = 0 == (1 & h) ? 0 : 3 !== (n = e.andln(7) + o & 7) && 5 !== n || 2 !== f ? h : -h,
                r[1].push(s),
                2 * i === a + 1 && (i = 1 - i),
                2 * o === s + 1 && (o = 1 - o),
                t.iushrn(1),
                e.iushrn(1)
            }
            return r
        }
        ,
        r.cachedProperty = function(t, e, r) {
            var n = "_" + e;
            t.prototype[e] = function() {
                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
            }
        }
        ,
        r.parseBytes = function(t) {
            return "string" == typeof t ? r.toArray(t, "hex") : t
        }
        ,
        r.intFromLE = function(t) {
            return new n(t,"hex","le")
        }
    }
    )),
    o.register("4ntP3", (function(t, e) {
        "use strict";
        var r = t.exports;
        function n(t) {
            return 1 === t.length ? "0" + t : t
        }
        function i(t) {
            for (var e = "", r = 0; r < t.length; r++)
                e += n(t[r].toString(16));
            return e
        }
        r.toArray = function(t, e) {
            if (Array.isArray(t))
                return t.slice();
            if (!t)
                return [];
            var r = [];
            if ("string" != typeof t) {
                for (var n = 0; n < t.length; n++)
                    r[n] = 0 | t[n];
                return r
            }
            if ("hex" === e) {
                (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                for (n = 0; n < t.length; n += 2)
                    r.push(parseInt(t[n] + t[n + 1], 16))
            } else
                for (n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n)
                      , o = i >> 8
                      , a = 255 & i;
                    o ? r.push(o, a) : r.push(a)
                }
            return r
        }
        ,
        r.zero2 = n,
        r.toHex = i,
        r.encode = function(t, e) {
            return "hex" === e ? i(t) : t
        }
    }
    )),
    o.register("1XF1C", (function(t, e) {
        "use strict";
        var r = t.exports;
        r.base = o("4FtDO"),
        r.short = o("4VjJp"),
        r.mont = o("5Nn8B"),
        r.edwards = o("4rPiY")
    }
    )),
    o.register("4FtDO", (function(t, e) {
        "use strict";
        var r = o("76R5V")
          , n = o("6siRR")
          , i = n.getNAF
          , a = n.getJSF
          , s = n.assert;
        function f(t, e) {
            this.type = t,
            this.p = new r(e.p,16),
            this.red = e.prime ? r.red(e.prime) : r.mont(this.p),
            this.zero = new r(0).toRed(this.red),
            this.one = new r(1).toRed(this.red),
            this.two = new r(2).toRed(this.red),
            this.n = e.n && new r(e.n,16),
            this.g = e.g && this.pointFromJSON(e.g, e.gRed),
            this._wnafT1 = new Array(4),
            this._wnafT2 = new Array(4),
            this._wnafT3 = new Array(4),
            this._wnafT4 = new Array(4),
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var n = this.n && this.p.div(this.n);
            !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        function h(t, e) {
            this.curve = t,
            this.type = e,
            this.precomputed = null
        }
        t.exports = f,
        f.prototype.point = function() {
            throw new Error("Not implemented")
        }
        ,
        f.prototype.validate = function() {
            throw new Error("Not implemented")
        }
        ,
        f.prototype._fixedNafMul = function(t, e) {
            s(t.precomputed);
            var r = t._getDoubles()
              , n = i(e, 1, this._bitLength)
              , o = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
            o /= 3;
            var a, f, h = [];
            for (a = 0; a < n.length; a += r.step) {
                f = 0;
                for (var u = a + r.step - 1; u >= a; u--)
                    f = (f << 1) + n[u];
                h.push(f)
            }
            for (var c = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = o; l > 0; l--) {
                for (a = 0; a < h.length; a++)
                    (f = h[a]) === l ? d = d.mixedAdd(r.points[a]) : f === -l && (d = d.mixedAdd(r.points[a].neg()));
                c = c.add(d)
            }
            return c.toP()
        }
        ,
        f.prototype._wnafMul = function(t, e) {
            var r = 4
              , n = t._getNAFPoints(r);
            r = n.wnd;
            for (var o = n.points, a = i(e, r, this._bitLength), f = this.jpoint(null, null, null), h = a.length - 1; h >= 0; h--) {
                for (var u = 0; h >= 0 && 0 === a[h]; h--)
                    u++;
                if (h >= 0 && u++,
                f = f.dblp(u),
                h < 0)
                    break;
                var c = a[h];
                s(0 !== c),
                f = "affine" === t.type ? c > 0 ? f.mixedAdd(o[c - 1 >> 1]) : f.mixedAdd(o[-c - 1 >> 1].neg()) : c > 0 ? f.add(o[c - 1 >> 1]) : f.add(o[-c - 1 >> 1].neg())
            }
            return "affine" === t.type ? f.toP() : f
        }
        ,
        f.prototype._wnafMulAdd = function(t, e, r, n, o) {
            var s, f, h, u = this._wnafT1, c = this._wnafT2, d = this._wnafT3, l = 0;
            for (s = 0; s < n; s++) {
                var p = (h = e[s])._getNAFPoints(t);
                u[s] = p.wnd,
                c[s] = p.points
            }
            for (s = n - 1; s >= 1; s -= 2) {
                var m = s - 1
                  , b = s;
                if (1 === u[m] && 1 === u[b]) {
                    var g = [e[m], null, null, e[b]];
                    0 === e[m].y.cmp(e[b].y) ? (g[1] = e[m].add(e[b]),
                    g[2] = e[m].toJ().mixedAdd(e[b].neg())) : 0 === e[m].y.cmp(e[b].y.redNeg()) ? (g[1] = e[m].toJ().mixedAdd(e[b]),
                    g[2] = e[m].add(e[b].neg())) : (g[1] = e[m].toJ().mixedAdd(e[b]),
                    g[2] = e[m].toJ().mixedAdd(e[b].neg()));
                    var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                      , y = a(r[m], r[b]);
                    for (l = Math.max(y[0].length, l),
                    d[m] = new Array(l),
                    d[b] = new Array(l),
                    f = 0; f < l; f++) {
                        var w = 0 | y[0][f]
                          , _ = 0 | y[1][f];
                        d[m][f] = v[3 * (w + 1) + (_ + 1)],
                        d[b][f] = 0,
                        c[m] = g
                    }
                } else
                    d[m] = i(r[m], u[m], this._bitLength),
                    d[b] = i(r[b], u[b], this._bitLength),
                    l = Math.max(d[m].length, l),
                    l = Math.max(d[b].length, l)
            }
            var A = this.jpoint(null, null, null)
              , M = this._wnafT4;
            for (s = l; s >= 0; s--) {
                for (var E = 0; s >= 0; ) {
                    var S = !0;
                    for (f = 0; f < n; f++)
                        M[f] = 0 | d[f][s],
                        0 !== M[f] && (S = !1);
                    if (!S)
                        break;
                    E++,
                    s--
                }
                if (s >= 0 && E++,
                A = A.dblp(E),
                s < 0)
                    break;
                for (f = 0; f < n; f++) {
                    var k = M[f];
                    0 !== k && (k > 0 ? h = c[f][k - 1 >> 1] : k < 0 && (h = c[f][-k - 1 >> 1].neg()),
                    A = "affine" === h.type ? A.mixedAdd(h) : A.add(h))
                }
            }
            for (s = 0; s < n; s++)
                c[s] = null;
            return o ? A : A.toP()
        }
        ,
        f.BasePoint = h,
        h.prototype.eq = function() {
            throw new Error("Not implemented")
        }
        ,
        h.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        f.prototype.decodePoint = function(t, e) {
            t = n.toArray(t, e);
            var r = this.p.byteLength();
            if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
                return 6 === t[0] ? s(t[t.length - 1] % 2 == 0) : 7 === t[0] && s(t[t.length - 1] % 2 == 1),
                this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
            if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
                return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
            throw new Error("Unknown point format")
        }
        ,
        h.prototype.encodeCompressed = function(t) {
            return this.encode(t, !0)
        }
        ,
        h.prototype._encode = function(t) {
            var e = this.curve.p.byteLength()
              , r = this.getX().toArray("be", e);
            return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
        }
        ,
        h.prototype.encode = function(t, e) {
            return n.encode(this._encode(e), t)
        }
        ,
        h.prototype.precompute = function(t) {
            if (this.precomputed)
                return this;
            var e = {
                doubles: null,
                naf: null,
                beta: null
            };
            return e.naf = this._getNAFPoints(8),
            e.doubles = this._getDoubles(4, t),
            e.beta = this._getBeta(),
            this.precomputed = e,
            this
        }
        ,
        h.prototype._hasDoubles = function(t) {
            if (!this.precomputed)
                return !1;
            var e = this.precomputed.doubles;
            return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
        }
        ,
        h.prototype._getDoubles = function(t, e) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < e; i += t) {
                for (var o = 0; o < t; o++)
                    n = n.dbl();
                r.push(n)
            }
            return {
                step: t,
                points: r
            }
        }
        ,
        h.prototype._getNAFPoints = function(t) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
                e[i] = e[i - 1].add(n);
            return {
                wnd: t,
                points: e
            }
        }
        ,
        h.prototype._getBeta = function() {
            return null
        }
        ,
        h.prototype.dblp = function(t) {
            for (var e = this, r = 0; r < t; r++)
                e = e.dbl();
            return e
        }
    }
    )),
    o.register("4VjJp", (function(t, e) {
        "use strict";
        var r = o("6siRR")
          , n = o("76R5V")
          , i = o("1hy4s")
          , a = o("4FtDO")
          , s = r.assert;
        function f(t) {
            a.call(this, "short", t),
            this.a = new n(t.a,16).toRed(this.red),
            this.b = new n(t.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = 0 === this.a.fromRed().cmpn(0),
            this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
            this.endo = this._getEndomorphism(t),
            this._endoWnafT1 = new Array(4),
            this._endoWnafT2 = new Array(4)
        }
        function h(t, e, r, i) {
            a.BasePoint.call(this, t, "affine"),
            null === e && null === r ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new n(e,16),
            this.y = new n(r,16),
            i && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        function u(t, e, r, i) {
            a.BasePoint.call(this, t, "jacobian"),
            null === e && null === r && null === i ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new n(0)) : (this.x = new n(e,16),
            this.y = new n(r,16),
            this.z = new n(i,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        i(f, a),
        t.exports = f,
        f.prototype._getEndomorphism = function(t) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var e, r;
                if (t.beta)
                    e = new n(t.beta,16).toRed(this.red);
                else {
                    var i = this._getEndoRoots(this.p);
                    e = (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
                }
                if (t.lambda)
                    r = new n(t.lambda,16);
                else {
                    var o = this._getEndoRoots(this.n);
                    0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1],
                    s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                }
                return {
                    beta: e,
                    lambda: r,
                    basis: t.basis ? t.basis.map((function(t) {
                        return {
                            a: new n(t.a,16),
                            b: new n(t.b,16)
                        }
                    }
                    )) : this._getEndoBasis(r)
                }
            }
        }
        ,
        f.prototype._getEndoRoots = function(t) {
            var e = t === this.p ? this.red : n.mont(t)
              , r = new n(2).toRed(e).redInvm()
              , i = r.redNeg()
              , o = new n(3).toRed(e).redNeg().redSqrt().redMul(r);
            return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()]
        }
        ,
        f.prototype._getEndoBasis = function(t) {
            for (var e, r, i, o, a, s, f, h, u, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, l = this.n.clone(), p = new n(1), m = new n(0), b = new n(0), g = new n(1), v = 0; 0 !== d.cmpn(0); ) {
                var y = l.div(d);
                h = l.sub(y.mul(d)),
                u = b.sub(y.mul(p));
                var w = g.sub(y.mul(m));
                if (!i && h.cmp(c) < 0)
                    e = f.neg(),
                    r = p,
                    i = h.neg(),
                    o = u;
                else if (i && 2 == ++v)
                    break;
                f = h,
                l = d,
                d = h,
                b = p,
                p = u,
                g = m,
                m = w
            }
            a = h.neg(),
            s = u;
            var _ = i.sqr().add(o.sqr());
            return a.sqr().add(s.sqr()).cmp(_) >= 0 && (a = e,
            s = r),
            i.negative && (i = i.neg(),
            o = o.neg()),
            a.negative && (a = a.neg(),
            s = s.neg()),
            [{
                a: i,
                b: o
            }, {
                a: a,
                b: s
            }]
        }
        ,
        f.prototype._endoSplit = function(t) {
            var e = this.endo.basis
              , r = e[0]
              , n = e[1]
              , i = n.b.mul(t).divRound(this.n)
              , o = r.b.neg().mul(t).divRound(this.n)
              , a = i.mul(r.a)
              , s = o.mul(n.a)
              , f = i.mul(r.b)
              , h = o.mul(n.b);
            return {
                k1: t.sub(a).sub(s),
                k2: f.add(h).neg()
            }
        }
        ,
        f.prototype.pointFromX = function(t, e) {
            (t = new n(t,16)).red || (t = t.toRed(this.red));
            var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b)
              , i = r.redSqrt();
            if (0 !== i.redSqr().redSub(r).cmp(this.zero))
                throw new Error("invalid point");
            var o = i.fromRed().isOdd();
            return (e && !o || !e && o) && (i = i.redNeg()),
            this.point(t, i)
        }
        ,
        f.prototype.validate = function(t) {
            if (t.inf)
                return !0;
            var e = t.x
              , r = t.y
              , n = this.a.redMul(e)
              , i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0)
        }
        ,
        f.prototype._endoWnafMulAdd = function(t, e, r) {
            for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                var a = this._endoSplit(e[o])
                  , s = t[o]
                  , f = s._getBeta();
                a.k1.negative && (a.k1.ineg(),
                s = s.neg(!0)),
                a.k2.negative && (a.k2.ineg(),
                f = f.neg(!0)),
                n[2 * o] = s,
                n[2 * o + 1] = f,
                i[2 * o] = a.k1,
                i[2 * o + 1] = a.k2
            }
            for (var h = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++)
                n[u] = null,
                i[u] = null;
            return h
        }
        ,
        i(h, a.BasePoint),
        f.prototype.point = function(t, e, r) {
            return new h(this,t,e,r)
        }
        ,
        f.prototype.pointFromJSON = function(t, e) {
            return h.fromJSON(this, t, e)
        }
        ,
        h.prototype._getBeta = function() {
            if (this.curve.endo) {
                var t = this.precomputed;
                if (t && t.beta)
                    return t.beta;
                var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (t) {
                    var r = this.curve
                      , n = function(t) {
                        return r.point(t.x.redMul(r.endo.beta), t.y)
                    };
                    t.beta = e,
                    e.precomputed = {
                        beta: null,
                        naf: t.naf && {
                            wnd: t.naf.wnd,
                            points: t.naf.points.map(n)
                        },
                        doubles: t.doubles && {
                            step: t.doubles.step,
                            points: t.doubles.points.map(n)
                        }
                    }
                }
                return e
            }
        }
        ,
        h.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }
        ,
        h.fromJSON = function(t, e, r) {
            "string" == typeof e && (e = JSON.parse(e));
            var n = t.point(e[0], e[1], r);
            if (!e[2])
                return n;
            function i(e) {
                return t.point(e[0], e[1], r)
            }
            var o = e[2];
            return n.precomputed = {
                beta: null,
                doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [n].concat(o.doubles.points.map(i))
                },
                naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [n].concat(o.naf.points.map(i))
                }
            },
            n
        }
        ,
        h.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        h.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        h.prototype.add = function(t) {
            if (this.inf)
                return t;
            if (t.inf)
                return this;
            if (this.eq(t))
                return this.dbl();
            if (this.neg().eq(t))
                return this.curve.point(null, null);
            if (0 === this.x.cmp(t.x))
                return this.curve.point(null, null);
            var e = this.y.redSub(t.y);
            0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
            var r = e.redSqr().redISub(this.x).redISub(t.x)
              , n = e.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n)
        }
        ,
        h.prototype.dbl = function() {
            if (this.inf)
                return this;
            var t = this.y.redAdd(this.y);
            if (0 === t.cmpn(0))
                return this.curve.point(null, null);
            var e = this.curve.a
              , r = this.x.redSqr()
              , n = t.redInvm()
              , i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n)
              , o = i.redSqr().redISub(this.x.redAdd(this.x))
              , a = i.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, a)
        }
        ,
        h.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        h.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        h.prototype.mul = function(t) {
            return t = new n(t,16),
            this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
        }
        ,
        h.prototype.mulAdd = function(t, e, r) {
            var n = [this, e]
              , i = [t, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }
        ,
        h.prototype.jmulAdd = function(t, e, r) {
            var n = [this, e]
              , i = [t, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }
        ,
        h.prototype.eq = function(t) {
            return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
        }
        ,
        h.prototype.neg = function(t) {
            if (this.inf)
                return this;
            var e = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
                var r = this.precomputed
                  , n = function(t) {
                    return t.neg()
                };
                e.precomputed = {
                    naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(n)
                    },
                    doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(n)
                    }
                }
            }
            return e
        }
        ,
        h.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }
        ,
        i(u, a.BasePoint),
        f.prototype.jpoint = function(t, e, r) {
            return new u(this,t,e,r)
        }
        ,
        u.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var t = this.z.redInvm()
              , e = t.redSqr()
              , r = this.x.redMul(e)
              , n = this.y.redMul(e).redMul(t);
            return this.curve.point(r, n)
        }
        ,
        u.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        u.prototype.add = function(t) {
            if (this.isInfinity())
                return t;
            if (t.isInfinity())
                return this;
            var e = t.z.redSqr()
              , r = this.z.redSqr()
              , n = this.x.redMul(e)
              , i = t.x.redMul(r)
              , o = this.y.redMul(e.redMul(t.z))
              , a = t.y.redMul(r.redMul(this.z))
              , s = n.redSub(i)
              , f = o.redSub(a);
            if (0 === s.cmpn(0))
                return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var h = s.redSqr()
              , u = h.redMul(s)
              , c = n.redMul(h)
              , d = f.redSqr().redIAdd(u).redISub(c).redISub(c)
              , l = f.redMul(c.redISub(d)).redISub(o.redMul(u))
              , p = this.z.redMul(t.z).redMul(s);
            return this.curve.jpoint(d, l, p)
        }
        ,
        u.prototype.mixedAdd = function(t) {
            if (this.isInfinity())
                return t.toJ();
            if (t.isInfinity())
                return this;
            var e = this.z.redSqr()
              , r = this.x
              , n = t.x.redMul(e)
              , i = this.y
              , o = t.y.redMul(e).redMul(this.z)
              , a = r.redSub(n)
              , s = i.redSub(o);
            if (0 === a.cmpn(0))
                return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var f = a.redSqr()
              , h = f.redMul(a)
              , u = r.redMul(f)
              , c = s.redSqr().redIAdd(h).redISub(u).redISub(u)
              , d = s.redMul(u.redISub(c)).redISub(i.redMul(h))
              , l = this.z.redMul(a);
            return this.curve.jpoint(c, d, l)
        }
        ,
        u.prototype.dblp = function(t) {
            if (0 === t)
                return this;
            if (this.isInfinity())
                return this;
            if (!t)
                return this.dbl();
            var e;
            if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (e = 0; e < t; e++)
                    r = r.dbl();
                return r
            }
            var n = this.curve.a
              , i = this.curve.tinv
              , o = this.x
              , a = this.y
              , s = this.z
              , f = s.redSqr().redSqr()
              , h = a.redAdd(a);
            for (e = 0; e < t; e++) {
                var u = o.redSqr()
                  , c = h.redSqr()
                  , d = c.redSqr()
                  , l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f))
                  , p = o.redMul(c)
                  , m = l.redSqr().redISub(p.redAdd(p))
                  , b = p.redISub(m)
                  , g = l.redMul(b);
                g = g.redIAdd(g).redISub(d);
                var v = h.redMul(s);
                e + 1 < t && (f = f.redMul(d)),
                o = m,
                s = v,
                h = g
            }
            return this.curve.jpoint(o, h.redMul(i), s)
        }
        ,
        u.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        u.prototype._zeroDbl = function() {
            var t, e, r;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , i = this.y.redSqr()
                  , o = i.redSqr()
                  , a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n)
                  , f = s.redSqr().redISub(a).redISub(a)
                  , h = o.redIAdd(o);
                h = (h = h.redIAdd(h)).redIAdd(h),
                t = f,
                e = s.redMul(a.redISub(f)).redISub(h),
                r = this.y.redAdd(this.y)
            } else {
                var u = this.x.redSqr()
                  , c = this.y.redSqr()
                  , d = c.redSqr()
                  , l = this.x.redAdd(c).redSqr().redISub(u).redISub(d);
                l = l.redIAdd(l);
                var p = u.redAdd(u).redIAdd(u)
                  , m = p.redSqr()
                  , b = d.redIAdd(d);
                b = (b = b.redIAdd(b)).redIAdd(b),
                t = m.redISub(l).redISub(l),
                e = p.redMul(l.redISub(t)).redISub(b),
                r = (r = this.y.redMul(this.z)).redIAdd(r)
            }
            return this.curve.jpoint(t, e, r)
        }
        ,
        u.prototype._threeDbl = function() {
            var t, e, r;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , i = this.y.redSqr()
                  , o = i.redSqr()
                  , a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
                  , f = s.redSqr().redISub(a).redISub(a);
                t = f;
                var h = o.redIAdd(o);
                h = (h = h.redIAdd(h)).redIAdd(h),
                e = s.redMul(a.redISub(f)).redISub(h),
                r = this.y.redAdd(this.y)
            } else {
                var u = this.z.redSqr()
                  , c = this.y.redSqr()
                  , d = this.x.redMul(c)
                  , l = this.x.redSub(u).redMul(this.x.redAdd(u));
                l = l.redAdd(l).redIAdd(l);
                var p = d.redIAdd(d)
                  , m = (p = p.redIAdd(p)).redAdd(p);
                t = l.redSqr().redISub(m),
                r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(u);
                var b = c.redSqr();
                b = (b = (b = b.redIAdd(b)).redIAdd(b)).redIAdd(b),
                e = l.redMul(p.redISub(t)).redISub(b)
            }
            return this.curve.jpoint(t, e, r)
        }
        ,
        u.prototype._dbl = function() {
            var t = this.curve.a
              , e = this.x
              , r = this.y
              , n = this.z
              , i = n.redSqr().redSqr()
              , o = e.redSqr()
              , a = r.redSqr()
              , s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i))
              , f = e.redAdd(e)
              , h = (f = f.redIAdd(f)).redMul(a)
              , u = s.redSqr().redISub(h.redAdd(h))
              , c = h.redISub(u)
              , d = a.redSqr();
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var l = s.redMul(c).redISub(d)
              , p = r.redAdd(r).redMul(n);
            return this.curve.jpoint(u, l, p)
        }
        ,
        u.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var t = this.x.redSqr()
              , e = this.y.redSqr()
              , r = this.z.redSqr()
              , n = e.redSqr()
              , i = t.redAdd(t).redIAdd(t)
              , o = i.redSqr()
              , a = this.x.redAdd(e).redSqr().redISub(t).redISub(n)
              , s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr()
              , f = n.redIAdd(n);
            f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
            var h = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f)
              , u = e.redMul(h);
            u = (u = u.redIAdd(u)).redIAdd(u);
            var c = this.x.redMul(s).redISub(u);
            c = (c = c.redIAdd(c)).redIAdd(c);
            var d = this.y.redMul(h.redMul(f.redISub(h)).redISub(a.redMul(s)));
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
            return this.curve.jpoint(c, d, l)
        }
        ,
        u.prototype.mul = function(t, e) {
            return t = new n(t,e),
            this.curve._wnafMul(this, t)
        }
        ,
        u.prototype.eq = function(t) {
            if ("affine" === t.type)
                return this.eq(t.toJ());
            if (this === t)
                return !0;
            var e = this.z.redSqr()
              , r = t.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))
                return !1;
            var n = e.redMul(this.z)
              , i = r.redMul(t.z);
            return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
        }
        ,
        u.prototype.eqXToP = function(t) {
            var e = this.z.redSqr()
              , r = t.toRed(this.curve.red).redMul(e);
            if (0 === this.x.cmp(r))
                return !0;
            for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
                if (n.iadd(this.curve.n),
                n.cmp(this.curve.p) >= 0)
                    return !1;
                if (r.redIAdd(i),
                0 === this.x.cmp(r))
                    return !0
            }
        }
        ,
        u.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        u.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
    }
    )),
    o.register("5Nn8B", (function(t, e) {
        "use strict";
        var r = o("76R5V")
          , n = o("1hy4s")
          , i = o("4FtDO")
          , a = o("6siRR");
        function s(t) {
            i.call(this, "mont", t),
            this.a = new r(t.a,16).toRed(this.red),
            this.b = new r(t.b,16).toRed(this.red),
            this.i4 = new r(4).toRed(this.red).redInvm(),
            this.two = new r(2).toRed(this.red),
            this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }
        function f(t, e, n) {
            i.BasePoint.call(this, t, "projective"),
            null === e && null === n ? (this.x = this.curve.one,
            this.z = this.curve.zero) : (this.x = new r(e,16),
            this.z = new r(n,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        n(s, i),
        t.exports = s,
        s.prototype.validate = function(t) {
            var e = t.normalize().x
              , r = e.redSqr()
              , n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
            return 0 === n.redSqrt().redSqr().cmp(n)
        }
        ,
        n(f, i.BasePoint),
        s.prototype.decodePoint = function(t, e) {
            return this.point(a.toArray(t, e), 1)
        }
        ,
        s.prototype.point = function(t, e) {
            return new f(this,t,e)
        }
        ,
        s.prototype.pointFromJSON = function(t) {
            return f.fromJSON(this, t)
        }
        ,
        f.prototype.precompute = function() {}
        ,
        f.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }
        ,
        f.fromJSON = function(t, e) {
            return new f(t,e[0],e[1] || t.one)
        }
        ,
        f.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        f.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
        ,
        f.prototype.dbl = function() {
            var t = this.x.redAdd(this.z).redSqr()
              , e = this.x.redSub(this.z).redSqr()
              , r = t.redSub(e)
              , n = t.redMul(e)
              , i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
            return this.curve.point(n, i)
        }
        ,
        f.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        f.prototype.diffAdd = function(t, e) {
            var r = this.x.redAdd(this.z)
              , n = this.x.redSub(this.z)
              , i = t.x.redAdd(t.z)
              , o = t.x.redSub(t.z).redMul(r)
              , a = i.redMul(n)
              , s = e.z.redMul(o.redAdd(a).redSqr())
              , f = e.x.redMul(o.redISub(a).redSqr());
            return this.curve.point(s, f)
        }
        ,
        f.prototype.mul = function(t) {
            for (var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1))
                i.push(e.andln(1));
            for (var o = i.length - 1; o >= 0; o--)
                0 === i[o] ? (r = r.diffAdd(n, this),
                n = n.dbl()) : (n = r.diffAdd(n, this),
                r = r.dbl());
            return n
        }
        ,
        f.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        f.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        f.prototype.eq = function(t) {
            return 0 === this.getX().cmp(t.getX())
        }
        ,
        f.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()),
            this.z = this.curve.one,
            this
        }
        ,
        f.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
    }
    )),
    o.register("4rPiY", (function(t, e) {
        "use strict";
        var r = o("6siRR")
          , n = o("76R5V")
          , i = o("1hy4s")
          , a = o("4FtDO")
          , s = r.assert;
        function f(t) {
            this.twisted = 1 != (0 | t.a),
            this.mOneA = this.twisted && -1 == (0 | t.a),
            this.extended = this.mOneA,
            a.call(this, "edwards", t),
            this.a = new n(t.a,16).umod(this.red.m),
            this.a = this.a.toRed(this.red),
            this.c = new n(t.c,16).toRed(this.red),
            this.c2 = this.c.redSqr(),
            this.d = new n(t.d,16).toRed(this.red),
            this.dd = this.d.redAdd(this.d),
            s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
            this.oneC = 1 == (0 | t.c)
        }
        function h(t, e, r, i, o) {
            a.BasePoint.call(this, t, "projective"),
            null === e && null === r && null === i ? (this.x = this.curve.zero,
            this.y = this.curve.one,
            this.z = this.curve.one,
            this.t = this.curve.zero,
            this.zOne = !0) : (this.x = new n(e,16),
            this.y = new n(r,16),
            this.z = i ? new n(i,16) : this.curve.one,
            this.t = o && new n(o,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one,
            this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
            this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        i(f, a),
        t.exports = f,
        f.prototype._mulA = function(t) {
            return this.mOneA ? t.redNeg() : this.a.redMul(t)
        }
        ,
        f.prototype._mulC = function(t) {
            return this.oneC ? t : this.c.redMul(t)
        }
        ,
        f.prototype.jpoint = function(t, e, r, n) {
            return this.point(t, e, r, n)
        }
        ,
        f.prototype.pointFromX = function(t, e) {
            (t = new n(t,16)).red || (t = t.toRed(this.red));
            var r = t.redSqr()
              , i = this.c2.redSub(this.a.redMul(r))
              , o = this.one.redSub(this.c2.redMul(this.d).redMul(r))
              , a = i.redMul(o.redInvm())
              , s = a.redSqrt();
            if (0 !== s.redSqr().redSub(a).cmp(this.zero))
                throw new Error("invalid point");
            var f = s.fromRed().isOdd();
            return (e && !f || !e && f) && (s = s.redNeg()),
            this.point(t, s)
        }
        ,
        f.prototype.pointFromY = function(t, e) {
            (t = new n(t,16)).red || (t = t.toRed(this.red));
            var r = t.redSqr()
              , i = r.redSub(this.c2)
              , o = r.redMul(this.d).redMul(this.c2).redSub(this.a)
              , a = i.redMul(o.redInvm());
            if (0 === a.cmp(this.zero)) {
                if (e)
                    throw new Error("invalid point");
                return this.point(this.zero, t)
            }
            var s = a.redSqrt();
            if (0 !== s.redSqr().redSub(a).cmp(this.zero))
                throw new Error("invalid point");
            return s.fromRed().isOdd() !== e && (s = s.redNeg()),
            this.point(s, t)
        }
        ,
        f.prototype.validate = function(t) {
            if (t.isInfinity())
                return !0;
            t.normalize();
            var e = t.x.redSqr()
              , r = t.y.redSqr()
              , n = e.redMul(this.a).redAdd(r)
              , i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
            return 0 === n.cmp(i)
        }
        ,
        i(h, a.BasePoint),
        f.prototype.pointFromJSON = function(t) {
            return h.fromJSON(this, t)
        }
        ,
        f.prototype.point = function(t, e, r, n) {
            return new h(this,t,e,r,n)
        }
        ,
        h.fromJSON = function(t, e) {
            return new h(t,e[0],e[1],e[2])
        }
        ,
        h.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        h.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
        }
        ,
        h.prototype._extDbl = function() {
            var t = this.x.redSqr()
              , e = this.y.redSqr()
              , r = this.z.redSqr();
            r = r.redIAdd(r);
            var n = this.curve._mulA(t)
              , i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e)
              , o = n.redAdd(e)
              , a = o.redSub(r)
              , s = n.redSub(e)
              , f = i.redMul(a)
              , h = o.redMul(s)
              , u = i.redMul(s)
              , c = a.redMul(o);
            return this.curve.point(f, h, c, u)
        }
        ,
        h.prototype._projDbl = function() {
            var t, e, r, n, i, o, a = this.x.redAdd(this.y).redSqr(), s = this.x.redSqr(), f = this.y.redSqr();
            if (this.curve.twisted) {
                var h = (n = this.curve._mulA(s)).redAdd(f);
                this.zOne ? (t = a.redSub(s).redSub(f).redMul(h.redSub(this.curve.two)),
                e = h.redMul(n.redSub(f)),
                r = h.redSqr().redSub(h).redSub(h)) : (i = this.z.redSqr(),
                o = h.redSub(i).redISub(i),
                t = a.redSub(s).redISub(f).redMul(o),
                e = h.redMul(n.redSub(f)),
                r = h.redMul(o))
            } else
                n = s.redAdd(f),
                i = this.curve._mulC(this.z).redSqr(),
                o = n.redSub(i).redSub(i),
                t = this.curve._mulC(a.redISub(n)).redMul(o),
                e = this.curve._mulC(n).redMul(s.redISub(f)),
                r = n.redMul(o);
            return this.curve.point(t, e, r)
        }
        ,
        h.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }
        ,
        h.prototype._extAdd = function(t) {
            var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x))
              , r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x))
              , n = this.t.redMul(this.curve.dd).redMul(t.t)
              , i = this.z.redMul(t.z.redAdd(t.z))
              , o = r.redSub(e)
              , a = i.redSub(n)
              , s = i.redAdd(n)
              , f = r.redAdd(e)
              , h = o.redMul(a)
              , u = s.redMul(f)
              , c = o.redMul(f)
              , d = a.redMul(s);
            return this.curve.point(h, u, d, c)
        }
        ,
        h.prototype._projAdd = function(t) {
            var e, r, n = this.z.redMul(t.z), i = n.redSqr(), o = this.x.redMul(t.x), a = this.y.redMul(t.y), s = this.curve.d.redMul(o).redMul(a), f = i.redSub(s), h = i.redAdd(s), u = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a), c = n.redMul(f).redMul(u);
            return this.curve.twisted ? (e = n.redMul(h).redMul(a.redSub(this.curve._mulA(o))),
            r = f.redMul(h)) : (e = n.redMul(h).redMul(a.redSub(o)),
            r = this.curve._mulC(f).redMul(h)),
            this.curve.point(c, e, r)
        }
        ,
        h.prototype.add = function(t) {
            return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
        }
        ,
        h.prototype.mul = function(t) {
            return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
        }
        ,
        h.prototype.mulAdd = function(t, e, r) {
            return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
        }
        ,
        h.prototype.jmulAdd = function(t, e, r) {
            return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
        }
        ,
        h.prototype.normalize = function() {
            if (this.zOne)
                return this;
            var t = this.z.redInvm();
            return this.x = this.x.redMul(t),
            this.y = this.y.redMul(t),
            this.t && (this.t = this.t.redMul(t)),
            this.z = this.curve.one,
            this.zOne = !0,
            this
        }
        ,
        h.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }
        ,
        h.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
        ,
        h.prototype.getY = function() {
            return this.normalize(),
            this.y.fromRed()
        }
        ,
        h.prototype.eq = function(t) {
            return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
        }
        ,
        h.prototype.eqXToP = function(t) {
            var e = t.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(e))
                return !0;
            for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ; ) {
                if (r.iadd(this.curve.n),
                r.cmp(this.curve.p) >= 0)
                    return !1;
                if (e.redIAdd(n),
                0 === this.x.cmp(e))
                    return !0
            }
        }
        ,
        h.prototype.toP = h.prototype.normalize,
        h.prototype.mixedAdd = h.prototype.add
    }
    )),
    o.register("17Toh", (function(t, e) {
        "use strict";
        var r, n = t.exports, i = o("1aWBr"), a = o("1XF1C"), s = o("6siRR").assert;
        function f(t) {
            "short" === t.type ? this.curve = new a.short(t) : "edwards" === t.type ? this.curve = new a.edwards(t) : this.curve = new a.mont(t),
            this.g = this.curve.g,
            this.n = this.curve.n,
            this.hash = t.hash,
            s(this.g.validate(), "Invalid curve"),
            s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        function h(t, e) {
            Object.defineProperty(n, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var r = new f(e);
                    return Object.defineProperty(n, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: r
                    }),
                    r
                }
            })
        }
        n.PresetCurve = f,
        h("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: i.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }),
        h("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: i.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }),
        h("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: i.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }),
        h("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: i.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }),
        h("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: i.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }),
        h("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: i.sha256,
            gRed: !1,
            g: ["9"]
        }),
        h("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: i.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            r = o("7syQE")
        } catch (t) {
            r = void 0
        }
        h("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: i.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
        })
    }
    )),
    o.register("1aWBr", (function(t, e) {
        var r = t.exports;
        r.utils = o("6Yfsw"),
        r.common = o("4BMde"),
        r.sha = o("74IzC"),
        r.ripemd = o("3SATA"),
        r.hmac = o("4s0E8"),
        r.sha1 = r.sha.sha1,
        r.sha256 = r.sha.sha256,
        r.sha224 = r.sha.sha224,
        r.sha384 = r.sha.sha384,
        r.sha512 = r.sha.sha512,
        r.ripemd160 = r.ripemd.ripemd160
    }
    )),
    o.register("6Yfsw", (function(e, r) {
        var n, i, a, s, f, h, u, c, d, l, p, m, b, g, v, y, w, _, A, M, E, S, k, x, B, R;
        t(e.exports, "sum32", (()=>R), (t=>R = t)),
        t(e.exports, "rotr32", (()=>i), (t=>i = t)),
        t(e.exports, "rotr64_hi", (()=>B), (t=>B = t)),
        t(e.exports, "htonl", (()=>u), (t=>u = t)),
        t(e.exports, "rotl32", (()=>g), (t=>g = t)),
        t(e.exports, "toHex", (()=>b), (t=>b = t)),
        t(e.exports, "sum32_4", (()=>k), (t=>k = t)),
        t(e.exports, "split32", (()=>_), (t=>_ = t)),
        t(e.exports, "inherits", (()=>v), (t=>v = t)),
        t(e.exports, "zero2", (()=>A), (t=>A = t)),
        t(e.exports, "sum64_4_lo", (()=>E), (t=>E = t)),
        t(e.exports, "sum32_3", (()=>a), (t=>a = t)),
        t(e.exports, "sum32_5", (()=>w), (t=>w = t)),
        t(e.exports, "toArray", (()=>p), (t=>p = t)),
        t(e.exports, "join32", (()=>h), (t=>h = t)),
        t(e.exports, "sum64_hi", (()=>x), (t=>x = t)),
        t(e.exports, "sum64_5_lo", (()=>l), (t=>l = t)),
        t(e.exports, "rotr64_lo", (()=>m), (t=>m = t)),
        t(e.exports, "shr64_lo", (()=>y), (t=>y = t)),
        t(e.exports, "zero8", (()=>s), (t=>s = t)),
        t(e.exports, "sum64_5_hi", (()=>S), (t=>S = t)),
        t(e.exports, "sum64", (()=>c), (t=>c = t)),
        t(e.exports, "sum64_4_hi", (()=>d), (t=>d = t)),
        t(e.exports, "toHex32", (()=>f), (t=>f = t)),
        t(e.exports, "sum64_lo", (()=>M), (t=>M = t)),
        t(e.exports, "shr64_hi", (()=>n), (t=>n = t));
        var T = o("10wuZ")
          , C = o("1hy4s");
        function D(t, e) {
            return 55296 == (64512 & t.charCodeAt(e)) && (!(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1)))
        }
        function I(t) {
            return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
        }
        function P(t) {
            return 1 === t.length ? "0" + t : t
        }
        function O(t) {
            return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
        }
        v = C,
        p = function(t, e) {
            if (Array.isArray(t))
                return t.slice();
            if (!t)
                return [];
            var r = [];
            if ("string" == typeof t)
                if (e) {
                    if ("hex" === e)
                        for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t),
                        i = 0; i < t.length; i += 2)
                            r.push(parseInt(t[i] + t[i + 1], 16))
                } else
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var o = t.charCodeAt(i);
                        o < 128 ? r[n++] = o : o < 2048 ? (r[n++] = o >> 6 | 192,
                        r[n++] = 63 & o | 128) : D(t, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++i)),
                        r[n++] = o >> 18 | 240,
                        r[n++] = o >> 12 & 63 | 128,
                        r[n++] = o >> 6 & 63 | 128,
                        r[n++] = 63 & o | 128) : (r[n++] = o >> 12 | 224,
                        r[n++] = o >> 6 & 63 | 128,
                        r[n++] = 63 & o | 128)
                    }
            else
                for (i = 0; i < t.length; i++)
                    r[i] = 0 | t[i];
            return r
        }
        ,
        b = function(t) {
            for (var e = "", r = 0; r < t.length; r++)
                e += P(t[r].toString(16));
            return e
        }
        ,
        u = I,
        f = function(t, e) {
            for (var r = "", n = 0; n < t.length; n++) {
                var i = t[n];
                "little" === e && (i = I(i)),
                r += O(i.toString(16))
            }
            return r
        }
        ,
        A = P,
        s = O,
        h = function(t, e, r, n) {
            var i = r - e;
            T(i % 4 == 0);
            for (var o = new Array(i / 4), a = 0, s = e; a < o.length; a++,
            s += 4) {
                var f;
                f = "big" === n ? t[s] << 24 | t[s + 1] << 16 | t[s + 2] << 8 | t[s + 3] : t[s + 3] << 24 | t[s + 2] << 16 | t[s + 1] << 8 | t[s],
                o[a] = f >>> 0
            }
            return o
        }
        ,
        _ = function(t, e) {
            for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++,
            i += 4) {
                var o = t[n];
                "big" === e ? (r[i] = o >>> 24,
                r[i + 1] = o >>> 16 & 255,
                r[i + 2] = o >>> 8 & 255,
                r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24,
                r[i + 2] = o >>> 16 & 255,
                r[i + 1] = o >>> 8 & 255,
                r[i] = 255 & o)
            }
            return r
        }
        ,
        i = function(t, e) {
            return t >>> e | t << 32 - e
        }
        ,
        g = function(t, e) {
            return t << e | t >>> 32 - e
        }
        ,
        R = function(t, e) {
            return t + e >>> 0
        }
        ,
        a = function(t, e, r) {
            return t + e + r >>> 0
        }
        ,
        k = function(t, e, r, n) {
            return t + e + r + n >>> 0
        }
        ,
        w = function(t, e, r, n, i) {
            return t + e + r + n + i >>> 0
        }
        ,
        c = function(t, e, r, n) {
            var i = t[e]
              , o = n + t[e + 1] >>> 0
              , a = (o < n ? 1 : 0) + r + i;
            t[e] = a >>> 0,
            t[e + 1] = o
        }
        ,
        x = function(t, e, r, n) {
            return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
        }
        ,
        M = function(t, e, r, n) {
            return e + n >>> 0
        }
        ,
        d = function(t, e, r, n, i, o, a, s) {
            var f = 0
              , h = e;
            return f += (h = h + n >>> 0) < e ? 1 : 0,
            f += (h = h + o >>> 0) < o ? 1 : 0,
            t + r + i + a + (f += (h = h + s >>> 0) < s ? 1 : 0) >>> 0
        }
        ,
        E = function(t, e, r, n, i, o, a, s) {
            return e + n + o + s >>> 0
        }
        ,
        S = function(t, e, r, n, i, o, a, s, f, h) {
            var u = 0
              , c = e;
            return u += (c = c + n >>> 0) < e ? 1 : 0,
            u += (c = c + o >>> 0) < o ? 1 : 0,
            u += (c = c + s >>> 0) < s ? 1 : 0,
            t + r + i + a + f + (u += (c = c + h >>> 0) < h ? 1 : 0) >>> 0
        }
        ,
        l = function(t, e, r, n, i, o, a, s, f, h) {
            return e + n + o + s + h >>> 0
        }
        ,
        B = function(t, e, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }
        ,
        m = function(t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }
        ,
        n = function(t, e, r) {
            return t >>> r
        }
        ,
        y = function(t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }
    }
    )),
    o.register("4BMde", (function(e, r) {
        var n;
        t(e.exports, "BlockHash", (()=>n), (t=>n = t));
        var i = o("6Yfsw")
          , a = o("10wuZ");
        function s() {
            this.pending = null,
            this.pendingTotal = 0,
            this.blockSize = this.constructor.blockSize,
            this.outSize = this.constructor.outSize,
            this.hmacStrength = this.constructor.hmacStrength,
            this.padLength = this.constructor.padLength / 8,
            this.endian = "big",
            this._delta8 = this.blockSize / 8,
            this._delta32 = this.blockSize / 32
        }
        n = s,
        s.prototype.update = function(t, e) {
            if (t = i.toArray(t, e),
            this.pending ? this.pending = this.pending.concat(t) : this.pending = t,
            this.pendingTotal += t.length,
            this.pending.length >= this._delta8) {
                var r = (t = this.pending).length % this._delta8;
                this.pending = t.slice(t.length - r, t.length),
                0 === this.pending.length && (this.pending = null),
                t = i.join32(t, 0, t.length - r, this.endian);
                for (var n = 0; n < t.length; n += this._delta32)
                    this._update(t, n, n + this._delta32)
            }
            return this
        }
        ,
        s.prototype.digest = function(t) {
            return this.update(this._pad()),
            a(null === this.pending),
            this._digest(t)
        }
        ,
        s.prototype._pad = function() {
            var t = this.pendingTotal
              , e = this._delta8
              , r = e - (t + this.padLength) % e
              , n = new Array(r + this.padLength);
            n[0] = 128;
            for (var i = 1; i < r; i++)
                n[i] = 0;
            if (t <<= 3,
            "big" === this.endian) {
                for (var o = 8; o < this.padLength; o++)
                    n[i++] = 0;
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = t >>> 24 & 255,
                n[i++] = t >>> 16 & 255,
                n[i++] = t >>> 8 & 255,
                n[i++] = 255 & t
            } else
                for (n[i++] = 255 & t,
                n[i++] = t >>> 8 & 255,
                n[i++] = t >>> 16 & 255,
                n[i++] = t >>> 24 & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8; o < this.padLength; o++)
                    n[i++] = 0;
            return n
        }
    }
    )),
    o.register("74IzC", (function(e, r) {
        var n, i, a, s, f;
        t(e.exports, "sha224", (()=>a), (t=>a = t)),
        t(e.exports, "sha1", (()=>f), (t=>f = t)),
        t(e.exports, "sha384", (()=>s), (t=>s = t)),
        t(e.exports, "sha512", (()=>n), (t=>n = t)),
        t(e.exports, "sha256", (()=>i), (t=>i = t)),
        f = o("6wSOL"),
        a = o("1xUmN"),
        i = o("1ZRVp"),
        s = o("BDTm2"),
        n = o("4lY0l")
    }
    )),
    o.register("6wSOL", (function(t, e) {
        "use strict";
        var r = o("6Yfsw")
          , n = o("4BMde")
          , i = o("79phS")
          , a = r.rotl32
          , s = r.sum32
          , f = r.sum32_5
          , h = i.ft_1
          , u = n.BlockHash
          , c = [1518500249, 1859775393, 2400959708, 3395469782];
        function d() {
            if (!(this instanceof d))
                return new d;
            u.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.W = new Array(80)
        }
        r.inherits(d, u),
        t.exports = d,
        d.blockSize = 512,
        d.outSize = 160,
        d.hmacStrength = 80,
        d.padLength = 64,
        d.prototype._update = function(t, e) {
            for (var r = this.W, n = 0; n < 16; n++)
                r[n] = t[e + n];
            for (; n < r.length; n++)
                r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
            var i = this.h[0]
              , o = this.h[1]
              , u = this.h[2]
              , d = this.h[3]
              , l = this.h[4];
            for (n = 0; n < r.length; n++) {
                var p = ~~(n / 20)
                  , m = f(a(i, 5), h(p, o, u, d), l, r[n], c[p]);
                l = d,
                d = u,
                u = a(o, 30),
                o = i,
                i = m
            }
            this.h[0] = s(this.h[0], i),
            this.h[1] = s(this.h[1], o),
            this.h[2] = s(this.h[2], u),
            this.h[3] = s(this.h[3], d),
            this.h[4] = s(this.h[4], l)
        }
        ,
        d.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
        }
    }
    )),
    o.register("79phS", (function(e, r) {
        var n, i, a, s, f, h, u;
        t(e.exports, "g1_256", (()=>s), (t=>s = t)),
        t(e.exports, "s1_256", (()=>i), (t=>i = t)),
        t(e.exports, "ch32", (()=>a), (t=>a = t)),
        t(e.exports, "s0_256", (()=>u), (t=>u = t)),
        t(e.exports, "g0_256", (()=>h), (t=>h = t)),
        t(e.exports, "ft_1", (()=>f), (t=>f = t)),
        t(e.exports, "maj32", (()=>n), (t=>n = t));
        var c = o("6Yfsw").rotr32;
        function d(t, e, r) {
            return t & e ^ ~t & r
        }
        function l(t, e, r) {
            return t & e ^ t & r ^ e & r
        }
        function p(t, e, r) {
            return t ^ e ^ r
        }
        f = function(t, e, r, n) {
            return 0 === t ? d(e, r, n) : 1 === t || 3 === t ? p(e, r, n) : 2 === t ? l(e, r, n) : void 0
        }
        ,
        a = d,
        n = l,
        u = function(t) {
            return c(t, 2) ^ c(t, 13) ^ c(t, 22)
        }
        ,
        i = function(t) {
            return c(t, 6) ^ c(t, 11) ^ c(t, 25)
        }
        ,
        h = function(t) {
            return c(t, 7) ^ c(t, 18) ^ t >>> 3
        }
        ,
        s = function(t) {
            return c(t, 17) ^ c(t, 19) ^ t >>> 10
        }
    }
    )),
    o.register("1xUmN", (function(t, e) {
        "use strict";
        var r = o("6Yfsw")
          , n = o("1ZRVp");
        function i() {
            if (!(this instanceof i))
                return new i;
            n.call(this),
            this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        r.inherits(i, n),
        t.exports = i,
        i.blockSize = 512,
        i.outSize = 224,
        i.hmacStrength = 192,
        i.padLength = 64,
        i.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big")
        }
    }
    )),
    o.register("1ZRVp", (function(t, e) {
        "use strict";
        var r = o("6Yfsw")
          , n = o("4BMde")
          , i = o("79phS")
          , a = o("10wuZ")
          , s = r.sum32
          , f = r.sum32_4
          , h = r.sum32_5
          , u = i.ch32
          , c = i.maj32
          , d = i.s0_256
          , l = i.s1_256
          , p = i.g0_256
          , m = i.g1_256
          , b = n.BlockHash
          , g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function v() {
            if (!(this instanceof v))
                return new v;
            b.call(this),
            this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            this.k = g,
            this.W = new Array(64)
        }
        r.inherits(v, b),
        t.exports = v,
        v.blockSize = 512,
        v.outSize = 256,
        v.hmacStrength = 192,
        v.padLength = 64,
        v.prototype._update = function(t, e) {
            for (var r = this.W, n = 0; n < 16; n++)
                r[n] = t[e + n];
            for (; n < r.length; n++)
                r[n] = f(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
            var i = this.h[0]
              , o = this.h[1]
              , b = this.h[2]
              , g = this.h[3]
              , v = this.h[4]
              , y = this.h[5]
              , w = this.h[6]
              , _ = this.h[7];
            for (a(this.k.length === r.length),
            n = 0; n < r.length; n++) {
                var A = h(_, l(v), u(v, y, w), this.k[n], r[n])
                  , M = s(d(i), c(i, o, b));
                _ = w,
                w = y,
                y = v,
                v = s(g, A),
                g = b,
                b = o,
                o = i,
                i = s(A, M)
            }
            this.h[0] = s(this.h[0], i),
            this.h[1] = s(this.h[1], o),
            this.h[2] = s(this.h[2], b),
            this.h[3] = s(this.h[3], g),
            this.h[4] = s(this.h[4], v),
            this.h[5] = s(this.h[5], y),
            this.h[6] = s(this.h[6], w),
            this.h[7] = s(this.h[7], _)
        }
        ,
        v.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
        }
    }
    )),
    o.register("BDTm2", (function(t, e) {
        "use strict";
        var r = o("6Yfsw")
          , n = o("4lY0l");
        function i() {
            if (!(this instanceof i))
                return new i;
            n.call(this),
            this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        r.inherits(i, n),
        t.exports = i,
        i.blockSize = 1024,
        i.outSize = 384,
        i.hmacStrength = 192,
        i.padLength = 128,
        i.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big")
        }
    }
    )),
    o.register("4lY0l", (function(t, e) {
        "use strict";
        var r = o("6Yfsw")
          , n = o("4BMde")
          , i = o("10wuZ")
          , a = r.rotr64_hi
          , s = r.rotr64_lo
          , f = r.shr64_hi
          , h = r.shr64_lo
          , u = r.sum64
          , c = r.sum64_hi
          , d = r.sum64_lo
          , l = r.sum64_4_hi
          , p = r.sum64_4_lo
          , m = r.sum64_5_hi
          , b = r.sum64_5_lo
          , g = n.BlockHash
          , v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function y() {
            if (!(this instanceof y))
                return new y;
            g.call(this),
            this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
            this.k = v,
            this.W = new Array(160)
        }
        function w(t, e, r, n, i) {
            var o = t & r ^ ~t & i;
            return o < 0 && (o += 4294967296),
            o
        }
        function _(t, e, r, n, i, o) {
            var a = e & n ^ ~e & o;
            return a < 0 && (a += 4294967296),
            a
        }
        function A(t, e, r, n, i) {
            var o = t & r ^ t & i ^ r & i;
            return o < 0 && (o += 4294967296),
            o
        }
        function M(t, e, r, n, i, o) {
            var a = e & n ^ e & o ^ n & o;
            return a < 0 && (a += 4294967296),
            a
        }
        function E(t, e) {
            var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
            return r < 0 && (r += 4294967296),
            r
        }
        function S(t, e) {
            var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
            return r < 0 && (r += 4294967296),
            r
        }
        function k(t, e) {
            var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
            return r < 0 && (r += 4294967296),
            r
        }
        function x(t, e) {
            var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
            return r < 0 && (r += 4294967296),
            r
        }
        function B(t, e) {
            var r = a(t, e, 1) ^ a(t, e, 8) ^ f(t, e, 7);
            return r < 0 && (r += 4294967296),
            r
        }
        function R(t, e) {
            var r = s(t, e, 1) ^ s(t, e, 8) ^ h(t, e, 7);
            return r < 0 && (r += 4294967296),
            r
        }
        function T(t, e) {
            var r = a(t, e, 19) ^ a(e, t, 29) ^ f(t, e, 6);
            return r < 0 && (r += 4294967296),
            r
        }
        function C(t, e) {
            var r = s(t, e, 19) ^ s(e, t, 29) ^ h(t, e, 6);
            return r < 0 && (r += 4294967296),
            r
        }
        r.inherits(y, g),
        t.exports = y,
        y.blockSize = 1024,
        y.outSize = 512,
        y.hmacStrength = 192,
        y.padLength = 128,
        y.prototype._prepareBlock = function(t, e) {
            for (var r = this.W, n = 0; n < 32; n++)
                r[n] = t[e + n];
            for (; n < r.length; n += 2) {
                var i = T(r[n - 4], r[n - 3])
                  , o = C(r[n - 4], r[n - 3])
                  , a = r[n - 14]
                  , s = r[n - 13]
                  , f = B(r[n - 30], r[n - 29])
                  , h = R(r[n - 30], r[n - 29])
                  , u = r[n - 32]
                  , c = r[n - 31];
                r[n] = l(i, o, a, s, f, h, u, c),
                r[n + 1] = p(i, o, a, s, f, h, u, c)
            }
        }
        ,
        y.prototype._update = function(t, e) {
            this._prepareBlock(t, e);
            var r = this.W
              , n = this.h[0]
              , o = this.h[1]
              , a = this.h[2]
              , s = this.h[3]
              , f = this.h[4]
              , h = this.h[5]
              , l = this.h[6]
              , p = this.h[7]
              , g = this.h[8]
              , v = this.h[9]
              , y = this.h[10]
              , B = this.h[11]
              , R = this.h[12]
              , T = this.h[13]
              , C = this.h[14]
              , D = this.h[15];
            i(this.k.length === r.length);
            for (var I = 0; I < r.length; I += 2) {
                var P = C
                  , O = D
                  , L = k(g, v)
                  , j = x(g, v)
                  , U = w(g, v, y, B, R)
                  , N = _(g, v, y, B, R, T)
                  , z = this.k[I]
                  , F = this.k[I + 1]
                  , q = r[I]
                  , Y = r[I + 1]
                  , H = m(P, O, L, j, U, N, z, F, q, Y)
                  , W = b(P, O, L, j, U, N, z, F, q, Y);
                P = E(n, o),
                O = S(n, o),
                L = A(n, o, a, s, f),
                j = M(n, o, a, s, f, h);
                var K = c(P, O, L, j)
                  , G = d(P, O, L, j);
                C = R,
                D = T,
                R = y,
                T = B,
                y = g,
                B = v,
                g = c(l, p, H, W),
                v = d(p, p, H, W),
                l = f,
                p = h,
                f = a,
                h = s,
                a = n,
                s = o,
                n = c(H, W, K, G),
                o = d(H, W, K, G)
            }
            u(this.h, 0, n, o),
            u(this.h, 2, a, s),
            u(this.h, 4, f, h),
            u(this.h, 6, l, p),
            u(this.h, 8, g, v),
            u(this.h, 10, y, B),
            u(this.h, 12, R, T),
            u(this.h, 14, C, D)
        }
        ,
        y.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
        }
    }
    )),
    o.register("3SATA", (function(e, r) {
        var n;
        t(e.exports, "ripemd160", (()=>n), (t=>n = t));
        var i = o("6Yfsw")
          , a = o("4BMde")
          , s = i.rotl32
          , f = i.sum32
          , h = i.sum32_3
          , u = i.sum32_4
          , c = a.BlockHash;
        function d() {
            if (!(this instanceof d))
                return new d;
            c.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.endian = "little"
        }
        function l(t, e, r, n) {
            return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
        }
        function p(t) {
            return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
        }
        function m(t) {
            return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
        }
        i.inherits(d, c),
        n = d,
        d.blockSize = 512,
        d.outSize = 160,
        d.hmacStrength = 192,
        d.padLength = 64,
        d.prototype._update = function(t, e) {
            for (var r = this.h[0], n = this.h[1], i = this.h[2], o = this.h[3], a = this.h[4], c = r, d = n, w = i, _ = o, A = a, M = 0; M < 80; M++) {
                var E = f(s(u(r, l(M, n, i, o), t[b[M] + e], p(M)), v[M]), a);
                r = a,
                a = o,
                o = s(i, 10),
                i = n,
                n = E,
                E = f(s(u(c, l(79 - M, d, w, _), t[g[M] + e], m(M)), y[M]), A),
                c = A,
                A = _,
                _ = s(w, 10),
                w = d,
                d = E
            }
            E = h(this.h[1], i, _),
            this.h[1] = h(this.h[2], o, A),
            this.h[2] = h(this.h[3], a, c),
            this.h[3] = h(this.h[4], r, d),
            this.h[4] = h(this.h[0], n, w),
            this.h[0] = E
        }
        ,
        d.prototype._digest = function(t) {
            return "hex" === t ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
        }
        ;
        var b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
          , g = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
          , v = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
          , y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    }
    )),
    o.register("4s0E8", (function(t, e) {
        "use strict";
        var r = o("6Yfsw")
          , n = o("10wuZ");
        function i(t, e, n) {
            if (!(this instanceof i))
                return new i(t,e,n);
            this.Hash = t,
            this.blockSize = t.blockSize / 8,
            this.outSize = t.outSize / 8,
            this.inner = null,
            this.outer = null,
            this._init(r.toArray(e, n))
        }
        t.exports = i,
        i.prototype._init = function(t) {
            t.length > this.blockSize && (t = (new this.Hash).update(t).digest()),
            n(t.length <= this.blockSize);
            for (var e = t.length; e < this.blockSize; e++)
                t.push(0);
            for (e = 0; e < t.length; e++)
                t[e] ^= 54;
            for (this.inner = (new this.Hash).update(t),
            e = 0; e < t.length; e++)
                t[e] ^= 106;
            this.outer = (new this.Hash).update(t)
        }
        ,
        i.prototype.update = function(t, e) {
            return this.inner.update(t, e),
            this
        }
        ,
        i.prototype.digest = function(t) {
            return this.outer.update(this.inner.digest()),
            this.outer.digest(t)
        }
    }
    )),
    o.register("7syQE", (function(t, e) {
        t.exports = {
            doubles: {
                step: 4,
                points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
            },
            naf: {
                wnd: 7,
                points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
            }
        }
    }
    )),
    o.register("7gCTa", (function(t, e) {
        "use strict";
        var r = o("76R5V")
          , n = o("51Lb1")
          , i = o("6siRR")
          , a = o("17Toh")
          , s = o("3rT9g")
          , f = i.assert
          , h = o("2zFx4")
          , u = o("4TPYV");
        function c(t) {
            if (!(this instanceof c))
                return new c(t);
            "string" == typeof t && (f(Object.prototype.hasOwnProperty.call(a, t), "Unknown curve " + t),
            t = a[t]),
            t instanceof a.PresetCurve && (t = {
                curve: t
            }),
            this.curve = t.curve.curve,
            this.n = this.curve.n,
            this.nh = this.n.ushrn(1),
            this.g = this.curve.g,
            this.g = t.curve.g,
            this.g.precompute(t.curve.n.bitLength() + 1),
            this.hash = t.hash || t.curve.hash
        }
        t.exports = c,
        c.prototype.keyPair = function(t) {
            return new h(this,t)
        }
        ,
        c.prototype.keyFromPrivate = function(t, e) {
            return h.fromPrivate(this, t, e)
        }
        ,
        c.prototype.keyFromPublic = function(t, e) {
            return h.fromPublic(this, t, e)
        }
        ,
        c.prototype.genKeyPair = function(t) {
            t || (t = {});
            for (var e = new n({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || s(this.hash.hmacStrength),
                entropyEnc: t.entropy && t.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), i = this.n.byteLength(), o = this.n.sub(new r(2)); ; ) {
                var a = new r(e.generate(i));
                if (!(a.cmp(o) > 0))
                    return a.iaddn(1),
                    this.keyFromPrivate(a)
            }
        }
        ,
        c.prototype._truncateToN = function(t, e) {
            var r = 8 * t.byteLength() - this.n.bitLength();
            return r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
        }
        ,
        c.prototype.sign = function(t, e, i, o) {
            "object" == typeof i && (o = i,
            i = null),
            o || (o = {}),
            e = this.keyFromPrivate(e, i),
            t = this._truncateToN(new r(t,16));
            for (var a = this.n.byteLength(), s = e.getPrivate().toArray("be", a), f = t.toArray("be", a), h = new n({
                hash: this.hash,
                entropy: s,
                nonce: f,
                pers: o.pers,
                persEnc: o.persEnc || "utf8"
            }), c = this.n.sub(new r(1)), d = 0; ; d++) {
                var l = o.k ? o.k(d) : new r(h.generate(this.n.byteLength()));
                if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(c) >= 0)) {
                    var p = this.g.mul(l);
                    if (!p.isInfinity()) {
                        var m = p.getX()
                          , b = m.umod(this.n);
                        if (0 !== b.cmpn(0)) {
                            var g = l.invm(this.n).mul(b.mul(e.getPrivate()).iadd(t));
                            if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                                var v = (p.getY().isOdd() ? 1 : 0) | (0 !== m.cmp(b) ? 2 : 0);
                                return o.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g),
                                v ^= 1),
                                new u({
                                    r: b,
                                    s: g,
                                    recoveryParam: v
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        c.prototype.verify = function(t, e, n, i) {
            t = this._truncateToN(new r(t,16)),
            n = this.keyFromPublic(n, i);
            var o = (e = new u(e,"hex")).r
              , a = e.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
                return !1;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
                return !1;
            var s, f = a.invm(this.n), h = f.mul(t).umod(this.n), c = f.mul(o).umod(this.n);
            return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(h, n.getPublic(), c)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(h, n.getPublic(), c)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
        }
        ,
        c.prototype.recoverPubKey = function(t, e, n, i) {
            f((3 & n) === n, "The recovery param is more than two bits"),
            e = new u(e,i);
            var o = this.n
              , a = new r(t)
              , s = e.r
              , h = e.s
              , c = 1 & n
              , d = n >> 1;
            if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
                throw new Error("Unable to find sencond key candinate");
            s = d ? this.curve.pointFromX(s.add(this.curve.n), c) : this.curve.pointFromX(s, c);
            var l = e.r.invm(o)
              , p = o.sub(a).mul(l).umod(o)
              , m = h.mul(l).umod(o);
            return this.g.mulAdd(p, s, m)
        }
        ,
        c.prototype.getKeyRecoveryParam = function(t, e, r, n) {
            if (null !== (e = new u(e,n)).recoveryParam)
                return e.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var o;
                try {
                    o = this.recoverPubKey(t, e, i)
                } catch (t) {
                    continue
                }
                if (o.eq(r))
                    return i
            }
            throw new Error("Unable to find valid recovery factor")
        }
    }
    )),
    o.register("51Lb1", (function(t, e) {
        "use strict";
        var r = o("1aWBr")
          , n = o("4ntP3")
          , i = o("10wuZ");
        function a(t) {
            if (!(this instanceof a))
                return new a(t);
            this.hash = t.hash,
            this.predResist = !!t.predResist,
            this.outLen = this.hash.outSize,
            this.minEntropy = t.minEntropy || this.hash.hmacStrength,
            this._reseed = null,
            this.reseedInterval = null,
            this.K = null,
            this.V = null;
            var e = n.toArray(t.entropy, t.entropyEnc || "hex")
              , r = n.toArray(t.nonce, t.nonceEnc || "hex")
              , o = n.toArray(t.pers, t.persEnc || "hex");
            i(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._init(e, r, o)
        }
        t.exports = a,
        a.prototype._init = function(t, e, r) {
            var n = t.concat(e).concat(r);
            this.K = new Array(this.outLen / 8),
            this.V = new Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++)
                this.K[i] = 0,
                this.V[i] = 1;
            this._update(n),
            this._reseed = 1,
            this.reseedInterval = 281474976710656
        }
        ,
        a.prototype._hmac = function() {
            return new r.hmac(this.hash,this.K)
        }
        ,
        a.prototype._update = function(t) {
            var e = this._hmac().update(this.V).update([0]);
            t && (e = e.update(t)),
            this.K = e.digest(),
            this.V = this._hmac().update(this.V).digest(),
            t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(),
            this.V = this._hmac().update(this.V).digest())
        }
        ,
        a.prototype.reseed = function(t, e, r, o) {
            "string" != typeof e && (o = r,
            r = e,
            e = null),
            t = n.toArray(t, e),
            r = n.toArray(r, o),
            i(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(t.concat(r || [])),
            this._reseed = 1
        }
        ,
        a.prototype.generate = function(t, e, r, i) {
            if (this._reseed > this.reseedInterval)
                throw new Error("Reseed is required");
            "string" != typeof e && (i = r,
            r = e,
            e = null),
            r && (r = n.toArray(r, i || "hex"),
            this._update(r));
            for (var o = []; o.length < t; )
                this.V = this._hmac().update(this.V).digest(),
                o = o.concat(this.V);
            var a = o.slice(0, t);
            return this._update(r),
            this._reseed++,
            n.encode(a, e)
        }
    }
    )),
    o.register("2zFx4", (function(t, e) {
        "use strict";
        var r = o("76R5V")
          , n = o("6siRR").assert;
        function i(t, e) {
            this.ec = t,
            this.priv = null,
            this.pub = null,
            e.priv && this._importPrivate(e.priv, e.privEnc),
            e.pub && this._importPublic(e.pub, e.pubEnc)
        }
        t.exports = i,
        i.fromPublic = function(t, e, r) {
            return e instanceof i ? e : new i(t,{
                pub: e,
                pubEnc: r
            })
        }
        ,
        i.fromPrivate = function(t, e, r) {
            return e instanceof i ? e : new i(t,{
                priv: e,
                privEnc: r
            })
        }
        ,
        i.prototype.validate = function() {
            var t = this.getPublic();
            return t.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }
        ,
        i.prototype.getPublic = function(t, e) {
            return "string" == typeof t && (e = t,
            t = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
        }
        ,
        i.prototype.getPrivate = function(t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv
        }
        ,
        i.prototype._importPrivate = function(t, e) {
            this.priv = new r(t,e || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        i.prototype._importPublic = function(t, e) {
            if (t.x || t.y)
                return "mont" === this.ec.curve.type ? n(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || n(t.x && t.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(t.x, t.y));
            this.pub = this.ec.curve.decodePoint(t, e)
        }
        ,
        i.prototype.derive = function(t) {
            return t.validate() || n(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
        }
        ,
        i.prototype.sign = function(t, e, r) {
            return this.ec.sign(t, this, e, r)
        }
        ,
        i.prototype.verify = function(t, e) {
            return this.ec.verify(t, e, this)
        }
        ,
        i.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    }
    )),
    o.register("4TPYV", (function(t, e) {
        "use strict";
        var r = o("76R5V")
          , n = o("6siRR")
          , i = n.assert;
        function a(t, e) {
            if (t instanceof a)
                return t;
            this._importDER(t, e) || (i(t.r && t.s, "Signature without r or s"),
            this.r = new r(t.r,16),
            this.s = new r(t.s,16),
            void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
        }
        function s() {
            this.place = 0
        }
        function f(t, e) {
            var r = t[e.place++];
            if (!(128 & r))
                return r;
            var n = 15 & r;
            if (0 === n || n > 4)
                return !1;
            for (var i = 0, o = 0, a = e.place; o < n; o++,
            a++)
                i <<= 8,
                i |= t[a],
                i >>>= 0;
            return !(i <= 127) && (e.place = a,
            i)
        }
        function h(t) {
            for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
                e++;
            return 0 === e ? t : t.slice(e)
        }
        function u(t, e) {
            if (e < 128)
                t.push(e);
            else {
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r; )
                    t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
        }
        t.exports = a,
        a.prototype._importDER = function(t, e) {
            t = n.toArray(t, e);
            var i = new s;
            if (48 !== t[i.place++])
                return !1;
            var o = f(t, i);
            if (!1 === o)
                return !1;
            if (o + i.place !== t.length)
                return !1;
            if (2 !== t[i.place++])
                return !1;
            var a = f(t, i);
            if (!1 === a)
                return !1;
            var h = t.slice(i.place, a + i.place);
            if (i.place += a,
            2 !== t[i.place++])
                return !1;
            var u = f(t, i);
            if (!1 === u)
                return !1;
            if (t.length !== u + i.place)
                return !1;
            var c = t.slice(i.place, u + i.place);
            if (0 === h[0]) {
                if (!(128 & h[1]))
                    return !1;
                h = h.slice(1)
            }
            if (0 === c[0]) {
                if (!(128 & c[1]))
                    return !1;
                c = c.slice(1)
            }
            return this.r = new r(h),
            this.s = new r(c),
            this.recoveryParam = null,
            !0
        }
        ,
        a.prototype.toDER = function(t) {
            var e = this.r.toArray()
              , r = this.s.toArray();
            for (128 & e[0] && (e = [0].concat(e)),
            128 & r[0] && (r = [0].concat(r)),
            e = h(e),
            r = h(r); !(r[0] || 128 & r[1]); )
                r = r.slice(1);
            var i = [2];
            u(i, e.length),
            (i = i.concat(e)).push(2),
            u(i, r.length);
            var o = i.concat(r)
              , a = [48];
            return u(a, o.length),
            a = a.concat(o),
            n.encode(a, t)
        }
    }
    )),
    o.register("5ugYt", (function(t, e) {
        "use strict";
        var r = o("1aWBr")
          , n = o("17Toh")
          , i = o("6siRR")
          , a = i.assert
          , s = i.parseBytes
          , f = o("5Cxey")
          , h = o("2bWdP");
        function u(t) {
            if (a("ed25519" === t, "only tested with ed25519 so far"),
            !(this instanceof u))
                return new u(t);
            t = n[t].curve,
            this.curve = t,
            this.g = t.g,
            this.g.precompute(t.n.bitLength() + 1),
            this.pointClass = t.point().constructor,
            this.encodingLength = Math.ceil(t.n.bitLength() / 8),
            this.hash = r.sha512
        }
        t.exports = u,
        u.prototype.sign = function(t, e) {
            t = s(t);
            var r = this.keyFromSecret(e)
              , n = this.hashInt(r.messagePrefix(), t)
              , i = this.g.mul(n)
              , o = this.encodePoint(i)
              , a = this.hashInt(o, r.pubBytes(), t).mul(r.priv())
              , f = n.add(a).umod(this.curve.n);
            return this.makeSignature({
                R: i,
                S: f,
                Rencoded: o
            })
        }
        ,
        u.prototype.verify = function(t, e, r) {
            t = s(t),
            e = this.makeSignature(e);
            var n = this.keyFromPublic(r)
              , i = this.hashInt(e.Rencoded(), n.pubBytes(), t)
              , o = this.g.mul(e.S());
            return e.R().add(n.pub().mul(i)).eq(o)
        }
        ,
        u.prototype.hashInt = function() {
            for (var t = this.hash(), e = 0; e < arguments.length; e++)
                t.update(arguments[e]);
            return i.intFromLE(t.digest()).umod(this.curve.n)
        }
        ,
        u.prototype.keyFromPublic = function(t) {
            return f.fromPublic(this, t)
        }
        ,
        u.prototype.keyFromSecret = function(t) {
            return f.fromSecret(this, t)
        }
        ,
        u.prototype.makeSignature = function(t) {
            return t instanceof h ? t : new h(this,t)
        }
        ,
        u.prototype.encodePoint = function(t) {
            var e = t.getY().toArray("le", this.encodingLength);
            return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0,
            e
        }
        ,
        u.prototype.decodePoint = function(t) {
            var e = (t = i.parseBytes(t)).length - 1
              , r = t.slice(0, e).concat(-129 & t[e])
              , n = 0 != (128 & t[e])
              , o = i.intFromLE(r);
            return this.curve.pointFromY(o, n)
        }
        ,
        u.prototype.encodeInt = function(t) {
            return t.toArray("le", this.encodingLength)
        }
        ,
        u.prototype.decodeInt = function(t) {
            return i.intFromLE(t)
        }
        ,
        u.prototype.isPoint = function(t) {
            return t instanceof this.pointClass
        }
    }
    )),
    o.register("5Cxey", (function(t, e) {
        "use strict";
        var r = o("6siRR")
          , n = r.assert
          , i = r.parseBytes
          , a = r.cachedProperty;
        function s(t, e) {
            this.eddsa = t,
            this._secret = i(e.secret),
            t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = i(e.pub)
        }
        s.fromPublic = function(t, e) {
            return e instanceof s ? e : new s(t,{
                pub: e
            })
        }
        ,
        s.fromSecret = function(t, e) {
            return e instanceof s ? e : new s(t,{
                secret: e
            })
        }
        ,
        s.prototype.secret = function() {
            return this._secret
        }
        ,
        a(s, "pubBytes", (function() {
            return this.eddsa.encodePoint(this.pub())
        }
        )),
        a(s, "pub", (function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }
        )),
        a(s, "privBytes", (function() {
            var t = this.eddsa
              , e = this.hash()
              , r = t.encodingLength - 1
              , n = e.slice(0, t.encodingLength);
            return n[0] &= 248,
            n[r] &= 127,
            n[r] |= 64,
            n
        }
        )),
        a(s, "priv", (function() {
            return this.eddsa.decodeInt(this.privBytes())
        }
        )),
        a(s, "hash", (function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }
        )),
        a(s, "messagePrefix", (function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }
        )),
        s.prototype.sign = function(t) {
            return n(this._secret, "KeyPair can only verify"),
            this.eddsa.sign(t, this)
        }
        ,
        s.prototype.verify = function(t, e) {
            return this.eddsa.verify(t, e, this)
        }
        ,
        s.prototype.getSecret = function(t) {
            return n(this._secret, "KeyPair is public only"),
            r.encode(this.secret(), t)
        }
        ,
        s.prototype.getPublic = function(t) {
            return r.encode(this.pubBytes(), t)
        }
        ,
        t.exports = s
    }
    )),
    o.register("2bWdP", (function(t, e) {
        "use strict";
        var r = o("76R5V")
          , n = o("6siRR")
          , i = n.assert
          , a = n.cachedProperty
          , s = n.parseBytes;
        function f(t, e) {
            this.eddsa = t,
            "object" != typeof e && (e = s(e)),
            Array.isArray(e) && (e = {
                R: e.slice(0, t.encodingLength),
                S: e.slice(t.encodingLength)
            }),
            i(e.R && e.S, "Signature without R or S"),
            t.isPoint(e.R) && (this._R = e.R),
            e.S instanceof r && (this._S = e.S),
            this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded,
            this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
        }
        a(f, "S", (function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }
        )),
        a(f, "R", (function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }
        )),
        a(f, "Rencoded", (function() {
            return this.eddsa.encodePoint(this.R())
        }
        )),
        a(f, "Sencoded", (function() {
            return this.eddsa.encodeInt(this.S())
        }
        )),
        f.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }
        ,
        f.prototype.toHex = function() {
            return n.encode(this.toBytes(), "hex").toUpperCase()
        }
        ,
        t.exports = f
    }
    )),
    o.register("bipxM", (function(t, e) {
        !function(t, e) {
            function r(t, e) {
                if (!t)
                    throw new Error(e || "Assertion failed")
            }
            function n(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
            function i(t, e, r) {
                if (i.isBN(t))
                    return t;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== t && ("le" !== e && "be" !== e || (r = e,
                e = 10),
                this._init(t || 0, e || 10, r || "be"))
            }
            var a;
            "object" == typeof t ? t.exports = i : e.BN = i,
            i.BN = i,
            i.wordSize = 26;
            try {
                a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : o("4w6kb").Buffer
            } catch (t) {}
            function s(t, e) {
                var n = t.charCodeAt(e);
                return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + t)
            }
            function f(t, e, r) {
                var n = s(t, r);
                return r - 1 >= e && (n |= s(t, r - 1) << 4),
                n
            }
            function h(t, e, n, i) {
                for (var o = 0, a = 0, s = Math.min(t.length, n), f = e; f < s; f++) {
                    var h = t.charCodeAt(f) - 48;
                    o *= i,
                    a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h,
                    r(h >= 0 && a < i, "Invalid character"),
                    o += a
                }
                return o
            }
            function u(t, e) {
                t.words = e.words,
                t.length = e.length,
                t.negative = e.negative,
                t.red = e.red
            }
            if (i.isBN = function(t) {
                return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words)
            }
            ,
            i.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e
            }
            ,
            i.min = function(t, e) {
                return t.cmp(e) < 0 ? t : e
            }
            ,
            i.prototype._init = function(t, e, n) {
                if ("number" == typeof t)
                    return this._initNumber(t, e, n);
                if ("object" == typeof t)
                    return this._initArray(t, e, n);
                "hex" === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++,
                this.negative = 1),
                i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i),
                "le" === n && this._initArray(this.toArray(), e, n)))
            }
            ,
            i.prototype._initNumber = function(t, e, n) {
                t < 0 && (this.negative = 1,
                t = -t),
                t < 67108864 ? (this.words = [67108863 & t],
                this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                this.length = 2) : (r(t < 9007199254740992),
                this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === n && this._initArray(this.toArray(), e, n)
            }
            ,
            i.prototype._initArray = function(t, e, n) {
                if (r("number" == typeof t.length),
                t.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(t.length / 3),
                this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var o, a, s = 0;
                if ("be" === n)
                    for (i = t.length - 1,
                    o = 0; i >= 0; i -= 3)
                        a = t[i] | t[i - 1] << 8 | t[i - 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                else if ("le" === n)
                    for (i = 0,
                    o = 0; i < t.length; i += 3)
                        a = t[i] | t[i + 1] << 8 | t[i + 2] << 16,
                        this.words[o] |= a << s & 67108863,
                        this.words[o + 1] = a >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        o++);
                return this._strip()
            }
            ,
            i.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var i, o = 0, a = 0;
                if ("be" === r)
                    for (n = t.length - 1; n >= e; n -= 2)
                        i = f(t, e, n) << o,
                        this.words[a] |= 67108863 & i,
                        o >= 18 ? (o -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : o += 8;
                else
                    for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)
                        i = f(t, e, n) << o,
                        this.words[a] |= 67108863 & i,
                        o >= 18 ? (o -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : o += 8;
                this._strip()
            }
            ,
            i.prototype._parseBase = function(t, e, r) {
                this.words = [0],
                this.length = 1;
                for (var n = 0, i = 1; i <= 67108863; i *= e)
                    n++;
                n--,
                i = i / e | 0;
                for (var o = t.length - r, a = o % n, s = Math.min(o, o - a) + r, f = 0, u = r; u < s; u += n)
                    f = h(t, u, u + n, e),
                    this.imuln(i),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== a) {
                    var c = 1;
                    for (f = h(t, u, t.length, e),
                    u = 0; u < a; u++)
                        c *= e;
                    this.imuln(c),
                    this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                }
                this._strip()
            }
            ,
            i.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var e = 0; e < this.length; e++)
                    t.words[e] = this.words[e];
                t.length = this.length,
                t.negative = this.negative,
                t.red = this.red
            }
            ,
            i.prototype._move = function(t) {
                u(t, this)
            }
            ,
            i.prototype.clone = function() {
                var t = new i(null);
                return this.copy(t),
                t
            }
            ,
            i.prototype._expand = function(t) {
                for (; this.length < t; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            i.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            i.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            "undefined" != typeof Symbol && "function" == typeof Symbol.for)
                try {
                    i.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
                } catch (t) {
                    i.prototype.inspect = c
                }
            else
                i.prototype.inspect = c;
            function c() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            i.prototype.toString = function(t, e) {
                var n;
                if (e = 0 | e || 1,
                16 === (t = t || 10) || "hex" === t) {
                    n = "";
                    for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a]
                          , f = (16777215 & (s << i | o)).toString(16);
                        n = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? d[6 - f.length] + f + n : f + n,
                        (i += 2) >= 26 && (i -= 26,
                        a--)
                    }
                    for (0 !== o && (n = o.toString(16) + n); n.length % e != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var h = l[t]
                      , u = p[t];
                    n = "";
                    var c = this.clone();
                    for (c.negative = 0; !c.isZero(); ) {
                        var m = c.modrn(u).toString(t);
                        n = (c = c.idivn(u)).isZero() ? m + n : d[h - m.length] + m + n
                    }
                    for (this.isZero() && (n = "0" + n); n.length % e != 0; )
                        n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n),
                    n
                }
                r(!1, "Base should be between 2 and 36")
            }
            ,
            i.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
            }
            ,
            i.prototype.toJSON = function() {
                return this.toString(16, 2)
            }
            ,
            a && (i.prototype.toBuffer = function(t, e) {
                return this.toArrayLike(a, t, e)
            }
            ),
            i.prototype.toArray = function(t, e) {
                return this.toArrayLike(Array, t, e)
            }
            ;
            function m(t, e, r) {
                r.negative = e.negative ^ t.negative;
                var n = t.length + e.length | 0;
                r.length = n,
                n = n - 1 | 0;
                var i = 0 | t.words[0]
                  , o = 0 | e.words[0]
                  , a = i * o
                  , s = 67108863 & a
                  , f = a / 67108864 | 0;
                r.words[0] = s;
                for (var h = 1; h < n; h++) {
                    for (var u = f >>> 26, c = 67108863 & f, d = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= d; l++) {
                        var p = h - l | 0;
                        u += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + c) / 67108864 | 0,
                        c = 67108863 & a
                    }
                    r.words[h] = 0 | c,
                    f = 0 | u
                }
                return 0 !== f ? r.words[h] = 0 | f : r.length--,
                r._strip()
            }
            i.prototype.toArrayLike = function(t, e, n) {
                this._strip();
                var i = this.byteLength()
                  , o = n || Math.max(1, i);
                r(i <= o, "byte array longer than desired length"),
                r(o > 0, "Requested array length <= 0");
                var a = function(t, e) {
                    return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                }(t, o);
                return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, i),
                a
            }
            ,
            i.prototype._toArrayLikeLE = function(t, e) {
                for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                    var a = this.words[i] << o | n;
                    t[r++] = 255 & a,
                    r < t.length && (t[r++] = a >> 8 & 255),
                    r < t.length && (t[r++] = a >> 16 & 255),
                    6 === o ? (r < t.length && (t[r++] = a >> 24 & 255),
                    n = 0,
                    o = 0) : (n = a >>> 24,
                    o += 2)
                }
                if (r < t.length)
                    for (t[r++] = n; r < t.length; )
                        t[r++] = 0
            }
            ,
            i.prototype._toArrayLikeBE = function(t, e) {
                for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                    var a = this.words[i] << o | n;
                    t[r--] = 255 & a,
                    r >= 0 && (t[r--] = a >> 8 & 255),
                    r >= 0 && (t[r--] = a >> 16 & 255),
                    6 === o ? (r >= 0 && (t[r--] = a >> 24 & 255),
                    n = 0,
                    o = 0) : (n = a >>> 24,
                    o += 2)
                }
                if (r >= 0)
                    for (t[r--] = n; r >= 0; )
                        t[r--] = 0
            }
            ,
            Math.clz32 ? i.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            }
            : i.prototype._countBits = function(t) {
                var e = t
                  , r = 0;
                return e >= 4096 && (r += 13,
                e >>>= 13),
                e >= 64 && (r += 7,
                e >>>= 7),
                e >= 8 && (r += 4,
                e >>>= 4),
                e >= 2 && (r += 2,
                e >>>= 2),
                r + e
            }
            ,
            i.prototype._zeroBits = function(t) {
                if (0 === t)
                    return 26;
                var e = t
                  , r = 0;
                return 0 == (8191 & e) && (r += 13,
                e >>>= 13),
                0 == (127 & e) && (r += 7,
                e >>>= 7),
                0 == (15 & e) && (r += 4,
                e >>>= 4),
                0 == (3 & e) && (r += 2,
                e >>>= 2),
                0 == (1 & e) && r++,
                r
            }
            ,
            i.prototype.bitLength = function() {
                var t = this.words[this.length - 1]
                  , e = this._countBits(t);
                return 26 * (this.length - 1) + e
            }
            ,
            i.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var t = 0, e = 0; e < this.length; e++) {
                    var r = this._zeroBits(this.words[e]);
                    if (t += r,
                    26 !== r)
                        break
                }
                return t
            }
            ,
            i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            i.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }
            ,
            i.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }
            ,
            i.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            i.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            i.prototype.iuor = function(t) {
                for (; this.length < t.length; )
                    this.words[this.length++] = 0;
                for (var e = 0; e < t.length; e++)
                    this.words[e] = this.words[e] | t.words[e];
                return this._strip()
            }
            ,
            i.prototype.ior = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuor(t)
            }
            ,
            i.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }
            ,
            i.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }
            ,
            i.prototype.iuand = function(t) {
                var e;
                e = this.length > t.length ? t : this;
                for (var r = 0; r < e.length; r++)
                    this.words[r] = this.words[r] & t.words[r];
                return this.length = e.length,
                this._strip()
            }
            ,
            i.prototype.iand = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuand(t)
            }
            ,
            i.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }
            ,
            i.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }
            ,
            i.prototype.iuxor = function(t) {
                var e, r;
                this.length > t.length ? (e = this,
                r = t) : (e = t,
                r = this);
                for (var n = 0; n < r.length; n++)
                    this.words[n] = e.words[n] ^ r.words[n];
                if (this !== e)
                    for (; n < e.length; n++)
                        this.words[n] = e.words[n];
                return this.length = e.length,
                this._strip()
            }
            ,
            i.prototype.ixor = function(t) {
                return r(0 == (this.negative | t.negative)),
                this.iuxor(t)
            }
            ,
            i.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }
            ,
            i.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }
            ,
            i.prototype.inotn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26)
                  , n = t % 26;
                this._expand(e),
                n > 0 && e--;
                for (var i = 0; i < e; i++)
                    this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n),
                this._strip()
            }
            ,
            i.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }
            ,
            i.prototype.setn = function(t, e) {
                r("number" == typeof t && t >= 0);
                var n = t / 26 | 0
                  , i = t % 26;
                return this._expand(n + 1),
                this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i),
                this._strip()
            }
            ,
            i.prototype.iadd = function(t) {
                var e, r, n;
                if (0 !== this.negative && 0 === t.negative)
                    return this.negative = 0,
                    e = this.isub(t),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== t.negative)
                    return t.negative = 0,
                    e = this.isub(t),
                    t.negative = 1,
                    e._normSign();
                this.length > t.length ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var i = 0, o = 0; o < n.length; o++)
                    e = (0 | r.words[o]) + (0 | n.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                for (; 0 !== i && o < r.length; o++)
                    e = (0 | r.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                if (this.length = r.length,
                0 !== i)
                    this.words[this.length] = i,
                    this.length++;
                else if (r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this
            }
            ,
            i.prototype.add = function(t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                e = this.sub(t),
                t.negative ^= 1,
                e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                e = t.sub(this),
                this.negative = 1,
                e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }
            ,
            i.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e = this.iadd(t);
                    return t.negative = 1,
                    e._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(t),
                    this.negative = 1,
                    this._normSign();
                var r, n, i = this.cmp(t);
                if (0 === i)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                i > 0 ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var o = 0, a = 0; a < n.length; a++)
                    o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & e;
                for (; 0 !== o && a < r.length; a++)
                    o = (e = (0 | r.words[a]) + o) >> 26,
                    this.words[a] = 67108863 & e;
                if (0 === o && a < r.length && r !== this)
                    for (; a < r.length; a++)
                        this.words[a] = r.words[a];
                return this.length = Math.max(this.length, a),
                r !== this && (this.negative = 1),
                this._strip()
            }
            ,
            i.prototype.sub = function(t) {
                return this.clone().isub(t)
            }
            ;
            var b = function(t, e, r) {
                var n, i, o, a = t.words, s = e.words, f = r.words, h = 0, u = 0 | a[0], c = 8191 & u, d = u >>> 13, l = 0 | a[1], p = 8191 & l, m = l >>> 13, b = 0 | a[2], g = 8191 & b, v = b >>> 13, y = 0 | a[3], w = 8191 & y, _ = y >>> 13, A = 0 | a[4], M = 8191 & A, E = A >>> 13, S = 0 | a[5], k = 8191 & S, x = S >>> 13, B = 0 | a[6], R = 8191 & B, T = B >>> 13, C = 0 | a[7], D = 8191 & C, I = C >>> 13, P = 0 | a[8], O = 8191 & P, L = P >>> 13, j = 0 | a[9], U = 8191 & j, N = j >>> 13, z = 0 | s[0], F = 8191 & z, q = z >>> 13, Y = 0 | s[1], H = 8191 & Y, W = Y >>> 13, K = 0 | s[2], G = 8191 & K, Z = K >>> 13, V = 0 | s[3], X = 8191 & V, $ = V >>> 13, Q = 0 | s[4], J = 8191 & Q, tt = Q >>> 13, et = 0 | s[5], rt = 8191 & et, nt = et >>> 13, it = 0 | s[6], ot = 8191 & it, at = it >>> 13, st = 0 | s[7], ft = 8191 & st, ht = st >>> 13, ut = 0 | s[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | s[9], pt = 8191 & lt, mt = lt >>> 13;
                r.negative = t.negative ^ e.negative,
                r.length = 19;
                var bt = (h + (n = Math.imul(c, F)) | 0) + ((8191 & (i = (i = Math.imul(c, q)) + Math.imul(d, F) | 0)) << 13) | 0;
                h = ((o = Math.imul(d, q)) + (i >>> 13) | 0) + (bt >>> 26) | 0,
                bt &= 67108863,
                n = Math.imul(p, F),
                i = (i = Math.imul(p, q)) + Math.imul(m, F) | 0,
                o = Math.imul(m, q);
                var gt = (h + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, W) | 0) + Math.imul(d, H) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, W) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0,
                gt &= 67108863,
                n = Math.imul(g, F),
                i = (i = Math.imul(g, q)) + Math.imul(v, F) | 0,
                o = Math.imul(v, q),
                n = n + Math.imul(p, H) | 0,
                i = (i = i + Math.imul(p, W) | 0) + Math.imul(m, H) | 0,
                o = o + Math.imul(m, W) | 0;
                var vt = (h + (n = n + Math.imul(c, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, Z) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, Z) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0,
                vt &= 67108863,
                n = Math.imul(w, F),
                i = (i = Math.imul(w, q)) + Math.imul(_, F) | 0,
                o = Math.imul(_, q),
                n = n + Math.imul(g, H) | 0,
                i = (i = i + Math.imul(g, W) | 0) + Math.imul(v, H) | 0,
                o = o + Math.imul(v, W) | 0,
                n = n + Math.imul(p, G) | 0,
                i = (i = i + Math.imul(p, Z) | 0) + Math.imul(m, G) | 0,
                o = o + Math.imul(m, Z) | 0;
                var yt = (h + (n = n + Math.imul(c, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, $) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0,
                yt &= 67108863,
                n = Math.imul(M, F),
                i = (i = Math.imul(M, q)) + Math.imul(E, F) | 0,
                o = Math.imul(E, q),
                n = n + Math.imul(w, H) | 0,
                i = (i = i + Math.imul(w, W) | 0) + Math.imul(_, H) | 0,
                o = o + Math.imul(_, W) | 0,
                n = n + Math.imul(g, G) | 0,
                i = (i = i + Math.imul(g, Z) | 0) + Math.imul(v, G) | 0,
                o = o + Math.imul(v, Z) | 0,
                n = n + Math.imul(p, X) | 0,
                i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, X) | 0,
                o = o + Math.imul(m, $) | 0;
                var wt = (h + (n = n + Math.imul(c, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0,
                wt &= 67108863,
                n = Math.imul(k, F),
                i = (i = Math.imul(k, q)) + Math.imul(x, F) | 0,
                o = Math.imul(x, q),
                n = n + Math.imul(M, H) | 0,
                i = (i = i + Math.imul(M, W) | 0) + Math.imul(E, H) | 0,
                o = o + Math.imul(E, W) | 0,
                n = n + Math.imul(w, G) | 0,
                i = (i = i + Math.imul(w, Z) | 0) + Math.imul(_, G) | 0,
                o = o + Math.imul(_, Z) | 0,
                n = n + Math.imul(g, X) | 0,
                i = (i = i + Math.imul(g, $) | 0) + Math.imul(v, X) | 0,
                o = o + Math.imul(v, $) | 0,
                n = n + Math.imul(p, J) | 0,
                i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, J) | 0,
                o = o + Math.imul(m, tt) | 0;
                var _t = (h + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0,
                _t &= 67108863,
                n = Math.imul(R, F),
                i = (i = Math.imul(R, q)) + Math.imul(T, F) | 0,
                o = Math.imul(T, q),
                n = n + Math.imul(k, H) | 0,
                i = (i = i + Math.imul(k, W) | 0) + Math.imul(x, H) | 0,
                o = o + Math.imul(x, W) | 0,
                n = n + Math.imul(M, G) | 0,
                i = (i = i + Math.imul(M, Z) | 0) + Math.imul(E, G) | 0,
                o = o + Math.imul(E, Z) | 0,
                n = n + Math.imul(w, X) | 0,
                i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, X) | 0,
                o = o + Math.imul(_, $) | 0,
                n = n + Math.imul(g, J) | 0,
                i = (i = i + Math.imul(g, tt) | 0) + Math.imul(v, J) | 0,
                o = o + Math.imul(v, tt) | 0,
                n = n + Math.imul(p, rt) | 0,
                i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0,
                o = o + Math.imul(m, nt) | 0;
                var At = (h + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, at) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, at) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0,
                At &= 67108863,
                n = Math.imul(D, F),
                i = (i = Math.imul(D, q)) + Math.imul(I, F) | 0,
                o = Math.imul(I, q),
                n = n + Math.imul(R, H) | 0,
                i = (i = i + Math.imul(R, W) | 0) + Math.imul(T, H) | 0,
                o = o + Math.imul(T, W) | 0,
                n = n + Math.imul(k, G) | 0,
                i = (i = i + Math.imul(k, Z) | 0) + Math.imul(x, G) | 0,
                o = o + Math.imul(x, Z) | 0,
                n = n + Math.imul(M, X) | 0,
                i = (i = i + Math.imul(M, $) | 0) + Math.imul(E, X) | 0,
                o = o + Math.imul(E, $) | 0,
                n = n + Math.imul(w, J) | 0,
                i = (i = i + Math.imul(w, tt) | 0) + Math.imul(_, J) | 0,
                o = o + Math.imul(_, tt) | 0,
                n = n + Math.imul(g, rt) | 0,
                i = (i = i + Math.imul(g, nt) | 0) + Math.imul(v, rt) | 0,
                o = o + Math.imul(v, nt) | 0,
                n = n + Math.imul(p, ot) | 0,
                i = (i = i + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0,
                o = o + Math.imul(m, at) | 0;
                var Mt = (h + (n = n + Math.imul(c, ft) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ht) | 0) + Math.imul(d, ft) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, ht) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0,
                Mt &= 67108863,
                n = Math.imul(O, F),
                i = (i = Math.imul(O, q)) + Math.imul(L, F) | 0,
                o = Math.imul(L, q),
                n = n + Math.imul(D, H) | 0,
                i = (i = i + Math.imul(D, W) | 0) + Math.imul(I, H) | 0,
                o = o + Math.imul(I, W) | 0,
                n = n + Math.imul(R, G) | 0,
                i = (i = i + Math.imul(R, Z) | 0) + Math.imul(T, G) | 0,
                o = o + Math.imul(T, Z) | 0,
                n = n + Math.imul(k, X) | 0,
                i = (i = i + Math.imul(k, $) | 0) + Math.imul(x, X) | 0,
                o = o + Math.imul(x, $) | 0,
                n = n + Math.imul(M, J) | 0,
                i = (i = i + Math.imul(M, tt) | 0) + Math.imul(E, J) | 0,
                o = o + Math.imul(E, tt) | 0,
                n = n + Math.imul(w, rt) | 0,
                i = (i = i + Math.imul(w, nt) | 0) + Math.imul(_, rt) | 0,
                o = o + Math.imul(_, nt) | 0,
                n = n + Math.imul(g, ot) | 0,
                i = (i = i + Math.imul(g, at) | 0) + Math.imul(v, ot) | 0,
                o = o + Math.imul(v, at) | 0,
                n = n + Math.imul(p, ft) | 0,
                i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, ft) | 0,
                o = o + Math.imul(m, ht) | 0;
                var Et = (h + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0,
                Et &= 67108863,
                n = Math.imul(U, F),
                i = (i = Math.imul(U, q)) + Math.imul(N, F) | 0,
                o = Math.imul(N, q),
                n = n + Math.imul(O, H) | 0,
                i = (i = i + Math.imul(O, W) | 0) + Math.imul(L, H) | 0,
                o = o + Math.imul(L, W) | 0,
                n = n + Math.imul(D, G) | 0,
                i = (i = i + Math.imul(D, Z) | 0) + Math.imul(I, G) | 0,
                o = o + Math.imul(I, Z) | 0,
                n = n + Math.imul(R, X) | 0,
                i = (i = i + Math.imul(R, $) | 0) + Math.imul(T, X) | 0,
                o = o + Math.imul(T, $) | 0,
                n = n + Math.imul(k, J) | 0,
                i = (i = i + Math.imul(k, tt) | 0) + Math.imul(x, J) | 0,
                o = o + Math.imul(x, tt) | 0,
                n = n + Math.imul(M, rt) | 0,
                i = (i = i + Math.imul(M, nt) | 0) + Math.imul(E, rt) | 0,
                o = o + Math.imul(E, nt) | 0,
                n = n + Math.imul(w, ot) | 0,
                i = (i = i + Math.imul(w, at) | 0) + Math.imul(_, ot) | 0,
                o = o + Math.imul(_, at) | 0,
                n = n + Math.imul(g, ft) | 0,
                i = (i = i + Math.imul(g, ht) | 0) + Math.imul(v, ft) | 0,
                o = o + Math.imul(v, ht) | 0,
                n = n + Math.imul(p, ct) | 0,
                i = (i = i + Math.imul(p, dt) | 0) + Math.imul(m, ct) | 0,
                o = o + Math.imul(m, dt) | 0;
                var St = (h + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(d, mt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0,
                St &= 67108863,
                n = Math.imul(U, H),
                i = (i = Math.imul(U, W)) + Math.imul(N, H) | 0,
                o = Math.imul(N, W),
                n = n + Math.imul(O, G) | 0,
                i = (i = i + Math.imul(O, Z) | 0) + Math.imul(L, G) | 0,
                o = o + Math.imul(L, Z) | 0,
                n = n + Math.imul(D, X) | 0,
                i = (i = i + Math.imul(D, $) | 0) + Math.imul(I, X) | 0,
                o = o + Math.imul(I, $) | 0,
                n = n + Math.imul(R, J) | 0,
                i = (i = i + Math.imul(R, tt) | 0) + Math.imul(T, J) | 0,
                o = o + Math.imul(T, tt) | 0,
                n = n + Math.imul(k, rt) | 0,
                i = (i = i + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0,
                o = o + Math.imul(x, nt) | 0,
                n = n + Math.imul(M, ot) | 0,
                i = (i = i + Math.imul(M, at) | 0) + Math.imul(E, ot) | 0,
                o = o + Math.imul(E, at) | 0,
                n = n + Math.imul(w, ft) | 0,
                i = (i = i + Math.imul(w, ht) | 0) + Math.imul(_, ft) | 0,
                o = o + Math.imul(_, ht) | 0,
                n = n + Math.imul(g, ct) | 0,
                i = (i = i + Math.imul(g, dt) | 0) + Math.imul(v, ct) | 0,
                o = o + Math.imul(v, dt) | 0;
                var kt = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0,
                kt &= 67108863,
                n = Math.imul(U, G),
                i = (i = Math.imul(U, Z)) + Math.imul(N, G) | 0,
                o = Math.imul(N, Z),
                n = n + Math.imul(O, X) | 0,
                i = (i = i + Math.imul(O, $) | 0) + Math.imul(L, X) | 0,
                o = o + Math.imul(L, $) | 0,
                n = n + Math.imul(D, J) | 0,
                i = (i = i + Math.imul(D, tt) | 0) + Math.imul(I, J) | 0,
                o = o + Math.imul(I, tt) | 0,
                n = n + Math.imul(R, rt) | 0,
                i = (i = i + Math.imul(R, nt) | 0) + Math.imul(T, rt) | 0,
                o = o + Math.imul(T, nt) | 0,
                n = n + Math.imul(k, ot) | 0,
                i = (i = i + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0,
                o = o + Math.imul(x, at) | 0,
                n = n + Math.imul(M, ft) | 0,
                i = (i = i + Math.imul(M, ht) | 0) + Math.imul(E, ft) | 0,
                o = o + Math.imul(E, ht) | 0,
                n = n + Math.imul(w, ct) | 0,
                i = (i = i + Math.imul(w, dt) | 0) + Math.imul(_, ct) | 0,
                o = o + Math.imul(_, dt) | 0;
                var xt = (h + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(v, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(v, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0,
                xt &= 67108863,
                n = Math.imul(U, X),
                i = (i = Math.imul(U, $)) + Math.imul(N, X) | 0,
                o = Math.imul(N, $),
                n = n + Math.imul(O, J) | 0,
                i = (i = i + Math.imul(O, tt) | 0) + Math.imul(L, J) | 0,
                o = o + Math.imul(L, tt) | 0,
                n = n + Math.imul(D, rt) | 0,
                i = (i = i + Math.imul(D, nt) | 0) + Math.imul(I, rt) | 0,
                o = o + Math.imul(I, nt) | 0,
                n = n + Math.imul(R, ot) | 0,
                i = (i = i + Math.imul(R, at) | 0) + Math.imul(T, ot) | 0,
                o = o + Math.imul(T, at) | 0,
                n = n + Math.imul(k, ft) | 0,
                i = (i = i + Math.imul(k, ht) | 0) + Math.imul(x, ft) | 0,
                o = o + Math.imul(x, ht) | 0,
                n = n + Math.imul(M, ct) | 0,
                i = (i = i + Math.imul(M, dt) | 0) + Math.imul(E, ct) | 0,
                o = o + Math.imul(E, dt) | 0;
                var Bt = (h + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0,
                Bt &= 67108863,
                n = Math.imul(U, J),
                i = (i = Math.imul(U, tt)) + Math.imul(N, J) | 0,
                o = Math.imul(N, tt),
                n = n + Math.imul(O, rt) | 0,
                i = (i = i + Math.imul(O, nt) | 0) + Math.imul(L, rt) | 0,
                o = o + Math.imul(L, nt) | 0,
                n = n + Math.imul(D, ot) | 0,
                i = (i = i + Math.imul(D, at) | 0) + Math.imul(I, ot) | 0,
                o = o + Math.imul(I, at) | 0,
                n = n + Math.imul(R, ft) | 0,
                i = (i = i + Math.imul(R, ht) | 0) + Math.imul(T, ft) | 0,
                o = o + Math.imul(T, ht) | 0,
                n = n + Math.imul(k, ct) | 0,
                i = (i = i + Math.imul(k, dt) | 0) + Math.imul(x, ct) | 0,
                o = o + Math.imul(x, dt) | 0;
                var Rt = (h + (n = n + Math.imul(M, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0,
                Rt &= 67108863,
                n = Math.imul(U, rt),
                i = (i = Math.imul(U, nt)) + Math.imul(N, rt) | 0,
                o = Math.imul(N, nt),
                n = n + Math.imul(O, ot) | 0,
                i = (i = i + Math.imul(O, at) | 0) + Math.imul(L, ot) | 0,
                o = o + Math.imul(L, at) | 0,
                n = n + Math.imul(D, ft) | 0,
                i = (i = i + Math.imul(D, ht) | 0) + Math.imul(I, ft) | 0,
                o = o + Math.imul(I, ht) | 0,
                n = n + Math.imul(R, ct) | 0,
                i = (i = i + Math.imul(R, dt) | 0) + Math.imul(T, ct) | 0,
                o = o + Math.imul(T, dt) | 0;
                var Tt = (h + (n = n + Math.imul(k, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0,
                Tt &= 67108863,
                n = Math.imul(U, ot),
                i = (i = Math.imul(U, at)) + Math.imul(N, ot) | 0,
                o = Math.imul(N, at),
                n = n + Math.imul(O, ft) | 0,
                i = (i = i + Math.imul(O, ht) | 0) + Math.imul(L, ft) | 0,
                o = o + Math.imul(L, ht) | 0,
                n = n + Math.imul(D, ct) | 0,
                i = (i = i + Math.imul(D, dt) | 0) + Math.imul(I, ct) | 0,
                o = o + Math.imul(I, dt) | 0;
                var Ct = (h + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, mt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(T, mt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0,
                Ct &= 67108863,
                n = Math.imul(U, ft),
                i = (i = Math.imul(U, ht)) + Math.imul(N, ft) | 0,
                o = Math.imul(N, ht),
                n = n + Math.imul(O, ct) | 0,
                i = (i = i + Math.imul(O, dt) | 0) + Math.imul(L, ct) | 0,
                o = o + Math.imul(L, dt) | 0;
                var Dt = (h + (n = n + Math.imul(D, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(D, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Dt >>> 26) | 0,
                Dt &= 67108863,
                n = Math.imul(U, ct),
                i = (i = Math.imul(U, dt)) + Math.imul(N, ct) | 0,
                o = Math.imul(N, dt);
                var It = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0,
                It &= 67108863;
                var Pt = (h + (n = Math.imul(U, pt)) | 0) + ((8191 & (i = (i = Math.imul(U, mt)) + Math.imul(N, pt) | 0)) << 13) | 0;
                return h = ((o = Math.imul(N, mt)) + (i >>> 13) | 0) + (Pt >>> 26) | 0,
                Pt &= 67108863,
                f[0] = bt,
                f[1] = gt,
                f[2] = vt,
                f[3] = yt,
                f[4] = wt,
                f[5] = _t,
                f[6] = At,
                f[7] = Mt,
                f[8] = Et,
                f[9] = St,
                f[10] = kt,
                f[11] = xt,
                f[12] = Bt,
                f[13] = Rt,
                f[14] = Tt,
                f[15] = Ct,
                f[16] = Dt,
                f[17] = It,
                f[18] = Pt,
                0 !== h && (f[19] = h,
                r.length++),
                r
            };
            function g(t, e, r) {
                r.negative = e.negative ^ t.negative,
                r.length = t.length + e.length;
                for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var a = i;
                    i = 0;
                    for (var s = 67108863 & n, f = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= f; h++) {
                        var u = o - h
                          , c = (0 | t.words[u]) * (0 | e.words[h])
                          , d = 67108863 & c;
                        s = 67108863 & (d = d + s | 0),
                        i += (a = (a = a + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26,
                        a &= 67108863
                    }
                    r.words[o] = s,
                    n = a,
                    a = i
                }
                return 0 !== n ? r.words[o] = n : r.length--,
                r._strip()
            }
            function v(t, e, r) {
                return g(t, e, r)
            }
            function y(t, e) {
                this.x = t,
                this.y = e
            }
            Math.imul || (b = m),
            i.prototype.mulTo = function(t, e) {
                var r = this.length + t.length;
                return 10 === this.length && 10 === t.length ? b(this, t, e) : r < 63 ? m(this, t, e) : r < 1024 ? g(this, t, e) : v(this, t, e)
            }
            ,
            y.prototype.makeRBT = function(t) {
                for (var e = new Array(t), r = i.prototype._countBits(t) - 1, n = 0; n < t; n++)
                    e[n] = this.revBin(n, r, t);
                return e
            }
            ,
            y.prototype.revBin = function(t, e, r) {
                if (0 === t || t === r - 1)
                    return t;
                for (var n = 0, i = 0; i < e; i++)
                    n |= (1 & t) << e - i - 1,
                    t >>= 1;
                return n
            }
            ,
            y.prototype.permute = function(t, e, r, n, i, o) {
                for (var a = 0; a < o; a++)
                    n[a] = e[t[a]],
                    i[a] = r[t[a]]
            }
            ,
            y.prototype.transform = function(t, e, r, n, i, o) {
                this.permute(o, t, e, r, n, i);
                for (var a = 1; a < i; a <<= 1)
                    for (var s = a << 1, f = Math.cos(2 * Math.PI / s), h = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                        for (var c = f, d = h, l = 0; l < a; l++) {
                            var p = r[u + l]
                              , m = n[u + l]
                              , b = r[u + l + a]
                              , g = n[u + l + a]
                              , v = c * b - d * g;
                            g = c * g + d * b,
                            b = v,
                            r[u + l] = p + b,
                            n[u + l] = m + g,
                            r[u + l + a] = p - b,
                            n[u + l + a] = m - g,
                            l !== s && (v = f * c - h * d,
                            d = f * d + h * c,
                            c = v)
                        }
            }
            ,
            y.prototype.guessLen13b = function(t, e) {
                var r = 1 | Math.max(e, t)
                  , n = 1 & r
                  , i = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    i++;
                return 1 << i + 1 + n
            }
            ,
            y.prototype.conjugate = function(t, e, r) {
                if (!(r <= 1))
                    for (var n = 0; n < r / 2; n++) {
                        var i = t[n];
                        t[n] = t[r - n - 1],
                        t[r - n - 1] = i,
                        i = e[n],
                        e[n] = -e[r - n - 1],
                        e[r - n - 1] = -i
                    }
            }
            ,
            y.prototype.normalize13b = function(t, e) {
                for (var r = 0, n = 0; n < e / 2; n++) {
                    var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                    t[n] = 67108863 & i,
                    r = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return t
            }
            ,
            y.prototype.convert13b = function(t, e, n, i) {
                for (var o = 0, a = 0; a < e; a++)
                    o += 0 | t[a],
                    n[2 * a] = 8191 & o,
                    o >>>= 13,
                    n[2 * a + 1] = 8191 & o,
                    o >>>= 13;
                for (a = 2 * e; a < i; ++a)
                    n[a] = 0;
                r(0 === o),
                r(0 == (-8192 & o))
            }
            ,
            y.prototype.stub = function(t) {
                for (var e = new Array(t), r = 0; r < t; r++)
                    e[r] = 0;
                return e
            }
            ,
            y.prototype.mulp = function(t, e, r) {
                var n = 2 * this.guessLen13b(t.length, e.length)
                  , i = this.makeRBT(n)
                  , o = this.stub(n)
                  , a = new Array(n)
                  , s = new Array(n)
                  , f = new Array(n)
                  , h = new Array(n)
                  , u = new Array(n)
                  , c = new Array(n)
                  , d = r.words;
                d.length = n,
                this.convert13b(t.words, t.length, a, n),
                this.convert13b(e.words, e.length, h, n),
                this.transform(a, o, s, f, n, i),
                this.transform(h, o, u, c, n, i);
                for (var l = 0; l < n; l++) {
                    var p = s[l] * u[l] - f[l] * c[l];
                    f[l] = s[l] * c[l] + f[l] * u[l],
                    s[l] = p
                }
                return this.conjugate(s, f, n),
                this.transform(s, f, d, o, n, i),
                this.conjugate(d, o, n),
                this.normalize13b(d, n),
                r.negative = t.negative ^ e.negative,
                r.length = t.length + e.length,
                r._strip()
            }
            ,
            i.prototype.mul = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length),
                this.mulTo(t, e)
            }
            ,
            i.prototype.mulf = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length),
                v(this, t, e)
            }
            ,
            i.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }
            ,
            i.prototype.imuln = function(t) {
                var e = t < 0;
                e && (t = -t),
                r("number" == typeof t),
                r(t < 67108864);
                for (var n = 0, i = 0; i < this.length; i++) {
                    var o = (0 | this.words[i]) * t
                      , a = (67108863 & o) + (67108863 & n);
                    n >>= 26,
                    n += o / 67108864 | 0,
                    n += a >>> 26,
                    this.words[i] = 67108863 & a
                }
                return 0 !== n && (this.words[i] = n,
                this.length++),
                e ? this.ineg() : this
            }
            ,
            i.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }
            ,
            i.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            i.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            i.prototype.pow = function(t) {
                var e = function(t) {
                    for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                        var n = r / 26 | 0
                          , i = r % 26;
                        e[r] = t.words[n] >>> i & 1
                    }
                    return e
                }(t);
                if (0 === e.length)
                    return new i(1);
                for (var r = this, n = 0; n < e.length && 0 === e[n]; n++,
                r = r.sqr())
                    ;
                if (++n < e.length)
                    for (var o = r.sqr(); n < e.length; n++,
                    o = o.sqr())
                        0 !== e[n] && (r = r.mul(o));
                return r
            }
            ,
            i.prototype.iushln = function(t) {
                r("number" == typeof t && t >= 0);
                var e, n = t % 26, i = (t - n) / 26, o = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var a = 0;
                    for (e = 0; e < this.length; e++) {
                        var s = this.words[e] & o
                          , f = (0 | this.words[e]) - s << n;
                        this.words[e] = f | a,
                        a = s >>> 26 - n
                    }
                    a && (this.words[e] = a,
                    this.length++)
                }
                if (0 !== i) {
                    for (e = this.length - 1; e >= 0; e--)
                        this.words[e + i] = this.words[e];
                    for (e = 0; e < i; e++)
                        this.words[e] = 0;
                    this.length += i
                }
                return this._strip()
            }
            ,
            i.prototype.ishln = function(t) {
                return r(0 === this.negative),
                this.iushln(t)
            }
            ,
            i.prototype.iushrn = function(t, e, n) {
                var i;
                r("number" == typeof t && t >= 0),
                i = e ? (e - e % 26) / 26 : 0;
                var o = t % 26
                  , a = Math.min((t - o) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> o << o
                  , f = n;
                if (i -= a,
                i = Math.max(0, i),
                f) {
                    for (var h = 0; h < a; h++)
                        f.words[h] = this.words[h];
                    f.length = a
                }
                if (0 === a)
                    ;
                else if (this.length > a)
                    for (this.length -= a,
                    h = 0; h < this.length; h++)
                        this.words[h] = this.words[h + a];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var u = 0;
                for (h = this.length - 1; h >= 0 && (0 !== u || h >= i); h--) {
                    var c = 0 | this.words[h];
                    this.words[h] = u << 26 - o | c >>> o,
                    u = c & s
                }
                return f && 0 !== u && (f.words[f.length++] = u),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this._strip()
            }
            ,
            i.prototype.ishrn = function(t, e, n) {
                return r(0 === this.negative),
                this.iushrn(t, e, n)
            }
            ,
            i.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }
            ,
            i.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }
            ,
            i.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }
            ,
            i.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }
            ,
            i.prototype.testn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26
                  , n = (t - e) / 26
                  , i = 1 << e;
                return !(this.length <= n) && !!(this.words[n] & i)
            }
            ,
            i.prototype.imaskn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26
                  , n = (t - e) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= n)
                    return this;
                if (0 !== e && n++,
                this.length = Math.min(n, this.length),
                0 !== e) {
                    var i = 67108863 ^ 67108863 >>> e << e;
                    this.words[this.length - 1] &= i
                }
                return this._strip()
            }
            ,
            i.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }
            ,
            i.prototype.iaddn = function(t) {
                return r("number" == typeof t),
                r(t < 67108864),
                t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(t),
                this.negative = 1,
                this) : this._iaddn(t)
            }
            ,
            i.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                    this.words[e] -= 67108864,
                    e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1),
                this
            }
            ,
            i.prototype.isubn = function(t) {
                if (r("number" == typeof t),
                r(t < 67108864),
                t < 0)
                    return this.iaddn(-t);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(t),
                    this.negative = 1,
                    this;
                if (this.words[0] -= t,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        this.words[e] += 67108864,
                        this.words[e + 1] -= 1;
                return this._strip()
            }
            ,
            i.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }
            ,
            i.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }
            ,
            i.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            i.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            i.prototype._ishlnsubmul = function(t, e, n) {
                var i, o, a = t.length + n;
                this._expand(a);
                var s = 0;
                for (i = 0; i < t.length; i++) {
                    o = (0 | this.words[i + n]) + s;
                    var f = (0 | t.words[i]) * e;
                    s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0),
                    this.words[i + n] = 67108863 & o
                }
                for (; i < this.length - n; i++)
                    s = (o = (0 | this.words[i + n]) + s) >> 26,
                    this.words[i + n] = 67108863 & o;
                if (0 === s)
                    return this._strip();
                for (r(-1 === s),
                s = 0,
                i = 0; i < this.length; i++)
                    s = (o = -(0 | this.words[i]) + s) >> 26,
                    this.words[i] = 67108863 & o;
                return this.negative = 1,
                this._strip()
            }
            ,
            i.prototype._wordDiv = function(t, e) {
                var r = (this.length,
                t.length)
                  , n = this.clone()
                  , o = t
                  , a = 0 | o.words[o.length - 1];
                0 !== (r = 26 - this._countBits(a)) && (o = o.ushln(r),
                n.iushln(r),
                a = 0 | o.words[o.length - 1]);
                var s, f = n.length - o.length;
                if ("mod" !== e) {
                    (s = new i(null)).length = f + 1,
                    s.words = new Array(s.length);
                    for (var h = 0; h < s.length; h++)
                        s.words[h] = 0
                }
                var u = n.clone()._ishlnsubmul(o, 1, f);
                0 === u.negative && (n = u,
                s && (s.words[f] = 1));
                for (var c = f - 1; c >= 0; c--) {
                    var d = 67108864 * (0 | n.words[o.length + c]) + (0 | n.words[o.length + c - 1]);
                    for (d = Math.min(d / a | 0, 67108863),
                    n._ishlnsubmul(o, d, c); 0 !== n.negative; )
                        d--,
                        n.negative = 0,
                        n._ishlnsubmul(o, 1, c),
                        n.isZero() || (n.negative ^= 1);
                    s && (s.words[c] = d)
                }
                return s && s._strip(),
                n._strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                {
                    div: s || null,
                    mod: n
                }
            }
            ,
            i.prototype.divmod = function(t, e, n) {
                return r(!t.isZero()),
                this.isZero() ? {
                    div: new i(0),
                    mod: new i(0)
                } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e),
                "mod" !== e && (o = s.div.neg()),
                "div" !== e && (a = s.mod.neg(),
                n && 0 !== a.negative && a.iadd(t)),
                {
                    div: o,
                    mod: a
                }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e),
                "mod" !== e && (o = s.div.neg()),
                {
                    div: o,
                    mod: s.mod
                }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e),
                "div" !== e && (a = s.mod.neg(),
                n && 0 !== a.negative && a.isub(t)),
                {
                    div: s.div,
                    mod: a
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new i(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === e ? {
                    div: null,
                    mod: new i(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new i(this.modrn(t.words[0]))
                } : this._wordDiv(t, e);
                var o, a, s
            }
            ,
            i.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }
            ,
            i.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }
            ,
            i.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }
            ,
            i.prototype.divRound = function(t) {
                var e = this.divmod(t);
                if (e.mod.isZero())
                    return e.div;
                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod
                  , n = t.ushrn(1)
                  , i = t.andln(1)
                  , o = r.cmp(n);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }
            ,
            i.prototype.modrn = function(t) {
                var e = t < 0;
                e && (t = -t),
                r(t <= 67108863);
                for (var n = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
                    i = (n * i + (0 | this.words[o])) % t;
                return e ? -i : i
            }
            ,
            i.prototype.modn = function(t) {
                return this.modrn(t)
            }
            ,
            i.prototype.idivn = function(t) {
                var e = t < 0;
                e && (t = -t),
                r(t <= 67108863);
                for (var n = 0, i = this.length - 1; i >= 0; i--) {
                    var o = (0 | this.words[i]) + 67108864 * n;
                    this.words[i] = o / t | 0,
                    n = o % t
                }
                return this._strip(),
                e ? this.ineg() : this
            }
            ,
            i.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }
            ,
            i.prototype.egcd = function(t) {
                r(0 === t.negative),
                r(!t.isZero());
                var e = this
                  , n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var o = new i(1), a = new i(0), s = new i(0), f = new i(1), h = 0; e.isEven() && n.isEven(); )
                    e.iushrn(1),
                    n.iushrn(1),
                    ++h;
                for (var u = n.clone(), c = e.clone(); !e.isZero(); ) {
                    for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d,
                    l <<= 1)
                        ;
                    if (d > 0)
                        for (e.iushrn(d); d-- > 0; )
                            (o.isOdd() || a.isOdd()) && (o.iadd(u),
                            a.isub(c)),
                            o.iushrn(1),
                            a.iushrn(1);
                    for (var p = 0, m = 1; 0 == (n.words[0] & m) && p < 26; ++p,
                    m <<= 1)
                        ;
                    if (p > 0)
                        for (n.iushrn(p); p-- > 0; )
                            (s.isOdd() || f.isOdd()) && (s.iadd(u),
                            f.isub(c)),
                            s.iushrn(1),
                            f.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n),
                    o.isub(s),
                    a.isub(f)) : (n.isub(e),
                    s.isub(o),
                    f.isub(a))
                }
                return {
                    a: s,
                    b: f,
                    gcd: n.iushln(h)
                }
            }
            ,
            i.prototype._invmp = function(t) {
                r(0 === t.negative),
                r(!t.isZero());
                var e = this
                  , n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var o, a = new i(1), s = new i(0), f = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
                    for (var h = 0, u = 1; 0 == (e.words[0] & u) && h < 26; ++h,
                    u <<= 1)
                        ;
                    if (h > 0)
                        for (e.iushrn(h); h-- > 0; )
                            a.isOdd() && a.iadd(f),
                            a.iushrn(1);
                    for (var c = 0, d = 1; 0 == (n.words[0] & d) && c < 26; ++c,
                    d <<= 1)
                        ;
                    if (c > 0)
                        for (n.iushrn(c); c-- > 0; )
                            s.isOdd() && s.iadd(f),
                            s.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n),
                    a.isub(s)) : (n.isub(e),
                    s.isub(a))
                }
                return (o = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && o.iadd(t),
                o
            }
            ,
            i.prototype.gcd = function(t) {
                if (this.isZero())
                    return t.abs();
                if (t.isZero())
                    return this.abs();
                var e = this.clone()
                  , r = t.clone();
                e.negative = 0,
                r.negative = 0;
                for (var n = 0; e.isEven() && r.isEven(); n++)
                    e.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; e.isEven(); )
                        e.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var i = e.cmp(r);
                    if (i < 0) {
                        var o = e;
                        e = r,
                        r = o
                    } else if (0 === i || 0 === r.cmpn(1))
                        break;
                    e.isub(r)
                }
                return r.iushln(n)
            }
            ,
            i.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }
            ,
            i.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }
            ,
            i.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }
            ,
            i.prototype.andln = function(t) {
                return this.words[0] & t
            }
            ,
            i.prototype.bincn = function(t) {
                r("number" == typeof t);
                var e = t % 26
                  , n = (t - e) / 26
                  , i = 1 << e;
                if (this.length <= n)
                    return this._expand(n + 1),
                    this.words[n] |= i,
                    this;
                for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26,
                    s &= 67108863,
                    this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o,
                this.length++),
                this
            }
            ,
            i.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            i.prototype.cmpn = function(t) {
                var e, n = t < 0;
                if (0 !== this.negative && !n)
                    return -1;
                if (0 === this.negative && n)
                    return 1;
                if (this._strip(),
                this.length > 1)
                    e = 1;
                else {
                    n && (t = -t),
                    r(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            i.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return -1;
                if (0 === this.negative && 0 !== t.negative)
                    return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            i.prototype.ucmp = function(t) {
                if (this.length > t.length)
                    return 1;
                if (this.length < t.length)
                    return -1;
                for (var e = 0, r = this.length - 1; r >= 0; r--) {
                    var n = 0 | this.words[r]
                      , i = 0 | t.words[r];
                    if (n !== i) {
                        n < i ? e = -1 : n > i && (e = 1);
                        break
                    }
                }
                return e
            }
            ,
            i.prototype.gtn = function(t) {
                return 1 === this.cmpn(t)
            }
            ,
            i.prototype.gt = function(t) {
                return 1 === this.cmp(t)
            }
            ,
            i.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }
            ,
            i.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }
            ,
            i.prototype.ltn = function(t) {
                return -1 === this.cmpn(t)
            }
            ,
            i.prototype.lt = function(t) {
                return -1 === this.cmp(t)
            }
            ,
            i.prototype.lten = function(t) {
                return this.cmpn(t) <= 0
            }
            ,
            i.prototype.lte = function(t) {
                return this.cmp(t) <= 0
            }
            ,
            i.prototype.eqn = function(t) {
                return 0 === this.cmpn(t)
            }
            ,
            i.prototype.eq = function(t) {
                return 0 === this.cmp(t)
            }
            ,
            i.red = function(t) {
                return new k(t)
            }
            ,
            i.prototype.toRed = function(t) {
                return r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
            }
            ,
            i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            i.prototype._forceRed = function(t) {
                return this.red = t,
                this
            }
            ,
            i.prototype.forceRed = function(t) {
                return r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
            }
            ,
            i.prototype.redAdd = function(t) {
                return r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
            }
            ,
            i.prototype.redIAdd = function(t) {
                return r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
            }
            ,
            i.prototype.redSub = function(t) {
                return r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
            }
            ,
            i.prototype.redISub = function(t) {
                return r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
            }
            ,
            i.prototype.redShl = function(t) {
                return r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
            }
            ,
            i.prototype.redMul = function(t) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
            }
            ,
            i.prototype.redIMul = function(t) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
            }
            ,
            i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            i.prototype.redPow = function(t) {
                return r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
            }
            ;
            var w = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function _(t, e) {
                this.name = t,
                this.p = new i(e,16),
                this.n = this.p.bitLength(),
                this.k = new i(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function A() {
                _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function M() {
                _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function E() {
                _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function S() {
                _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function k(t) {
                if ("string" == typeof t) {
                    var e = i._prime(t);
                    this.m = e.p,
                    this.prime = e
                } else
                    r(t.gtn(1), "modulus must be greater than 1"),
                    this.m = t,
                    this.prime = null
            }
            function x(t) {
                k.call(this, t),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new i(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            _.prototype._tmp = function() {
                var t = new i(null);
                return t.words = new Array(Math.ceil(this.n / 13)),
                t
            }
            ,
            _.prototype.ireduce = function(t) {
                var e, r = t;
                do {
                    this.split(r, this.tmp),
                    e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                } while (e > this.n);
                var n = e < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0,
                r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                r
            }
            ,
            _.prototype.split = function(t, e) {
                t.iushrn(this.n, 0, e)
            }
            ,
            _.prototype.imulK = function(t) {
                return t.imul(this.k)
            }
            ,
            n(A, _),
            A.prototype.split = function(t, e) {
                for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
                    e.words[i] = t.words[i];
                if (e.length = n,
                t.length <= 9)
                    return t.words[0] = 0,
                    void (t.length = 1);
                var o = t.words[9];
                for (e.words[e.length++] = o & r,
                i = 10; i < t.length; i++) {
                    var a = 0 | t.words[i];
                    t.words[i - 10] = (a & r) << 4 | o >>> 22,
                    o = a
                }
                o >>>= 22,
                t.words[i - 10] = o,
                0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
            }
            ,
            A.prototype.imulK = function(t) {
                t.words[t.length] = 0,
                t.words[t.length + 1] = 0,
                t.length += 2;
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 0 | t.words[r];
                    e += 977 * n,
                    t.words[r] = 67108863 & e,
                    e = 64 * n + (e / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--,
                0 === t.words[t.length - 1] && t.length--),
                t
            }
            ,
            n(M, _),
            n(E, _),
            n(S, _),
            S.prototype.imulK = function(t) {
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 19 * (0 | t.words[r]) + e
                      , i = 67108863 & n;
                    n >>>= 26,
                    t.words[r] = i,
                    e = n
                }
                return 0 !== e && (t.words[t.length++] = e),
                t
            }
            ,
            i._prime = function(t) {
                if (w[t])
                    return w[t];
                var e;
                if ("k256" === t)
                    e = new A;
                else if ("p224" === t)
                    e = new M;
                else if ("p192" === t)
                    e = new E;
                else {
                    if ("p25519" !== t)
                        throw new Error("Unknown prime " + t);
                    e = new S
                }
                return w[t] = e,
                e
            }
            ,
            k.prototype._verify1 = function(t) {
                r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers")
            }
            ,
            k.prototype._verify2 = function(t, e) {
                r(0 == (t.negative | e.negative), "red works only with positives"),
                r(t.red && t.red === e.red, "red works only with red numbers")
            }
            ,
            k.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)),
                t)
            }
            ,
            k.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }
            ,
            k.prototype.add = function(t, e) {
                this._verify2(t, e);
                var r = t.add(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            k.prototype.iadd = function(t, e) {
                this._verify2(t, e);
                var r = t.iadd(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            k.prototype.sub = function(t, e) {
                this._verify2(t, e);
                var r = t.sub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            k.prototype.isub = function(t, e) {
                this._verify2(t, e);
                var r = t.isub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r
            }
            ,
            k.prototype.shl = function(t, e) {
                return this._verify1(t),
                this.imod(t.ushln(e))
            }
            ,
            k.prototype.imul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.imul(e))
            }
            ,
            k.prototype.mul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.mul(e))
            }
            ,
            k.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }
            ,
            k.prototype.sqr = function(t) {
                return this.mul(t, t)
            }
            ,
            k.prototype.sqrt = function(t) {
                if (t.isZero())
                    return t.clone();
                var e = this.m.andln(3);
                if (r(e % 2 == 1),
                3 === e) {
                    var n = this.m.add(new i(1)).iushrn(2);
                    return this.pow(t, n)
                }
                for (var o = this.m.subn(1), a = 0; !o.isZero() && 0 === o.andln(1); )
                    a++,
                    o.iushrn(1);
                r(!o.isZero());
                var s = new i(1).toRed(this)
                  , f = s.redNeg()
                  , h = this.m.subn(1).iushrn(1)
                  , u = this.m.bitLength();
                for (u = new i(2 * u * u).toRed(this); 0 !== this.pow(u, h).cmp(f); )
                    u.redIAdd(f);
                for (var c = this.pow(u, o), d = this.pow(t, o.addn(1).iushrn(1)), l = this.pow(t, o), p = a; 0 !== l.cmp(s); ) {
                    for (var m = l, b = 0; 0 !== m.cmp(s); b++)
                        m = m.redSqr();
                    r(b < p);
                    var g = this.pow(c, new i(1).iushln(p - b - 1));
                    d = d.redMul(g),
                    c = g.redSqr(),
                    l = l.redMul(c),
                    p = b
                }
                return d
            }
            ,
            k.prototype.invm = function(t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0,
                this.imod(e).redNeg()) : this.imod(e)
            }
            ,
            k.prototype.pow = function(t, e) {
                if (e.isZero())
                    return new i(1).toRed(this);
                if (0 === e.cmpn(1))
                    return t.clone();
                var r = new Array(16);
                r[0] = new i(1).toRed(this),
                r[1] = t;
                for (var n = 2; n < r.length; n++)
                    r[n] = this.mul(r[n - 1], t);
                var o = r[0]
                  , a = 0
                  , s = 0
                  , f = e.bitLength() % 26;
                for (0 === f && (f = 26),
                n = e.length - 1; n >= 0; n--) {
                    for (var h = e.words[n], u = f - 1; u >= 0; u--) {
                        var c = h >> u & 1;
                        o !== r[0] && (o = this.sqr(o)),
                        0 !== c || 0 !== a ? (a <<= 1,
                        a |= c,
                        (4 === ++s || 0 === n && 0 === u) && (o = this.mul(o, r[a]),
                        s = 0,
                        a = 0)) : s = 0
                    }
                    f = 26
                }
                return o
            }
            ,
            k.prototype.convertTo = function(t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e
            }
            ,
            k.prototype.convertFrom = function(t) {
                var e = t.clone();
                return e.red = null,
                e
            }
            ,
            i.mont = function(t) {
                return new x(t)
            }
            ,
            n(x, k),
            x.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }
            ,
            x.prototype.convertFrom = function(t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null,
                e
            }
            ,
            x.prototype.imul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return t.words[0] = 0,
                    t.length = 1,
                    t;
                var r = t.imul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            x.prototype.mul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return new i(0)._forceRed(this);
                var r = t.mul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , o = r.isub(n).iushrn(this.shift)
                  , a = o;
                return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            x.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(t, this)
    }
    )),
    o.register("1sSrw", (function(t, e) {
        var r = o("4WJwb")
          , n = o("5Air7")
          , i = o("3HG0C")
          , a = o("19viH")
          , s = o("7kcyw")
          , f = o("5Xfjk").Buffer;
        function h(t) {
            var e;
            "object" != typeof t || f.isBuffer(t) || (e = t.passphrase,
            t = t.key),
            "string" == typeof t && (t = f.from(t));
            var o, h, u = i(t, e), c = u.tag, d = u.data;
            switch (c) {
            case "CERTIFICATE":
                h = r.certificate.decode(d, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
                switch (h || (h = r.PublicKey.decode(d, "der")),
                o = h.algorithm.algorithm.join(".")) {
                case "1.2.840.113549.1.1.1":
                    return r.RSAPublicKey.decode(h.subjectPublicKey.data, "der");
                case "1.2.840.10045.2.1":
                    return h.subjectPrivateKey = h.subjectPublicKey,
                    {
                        type: "ec",
                        data: h
                    };
                case "1.2.840.10040.4.1":
                    return h.algorithm.params.pub_key = r.DSAparam.decode(h.subjectPublicKey.data, "der"),
                    {
                        type: "dsa",
                        data: h.algorithm.params
                    };
                default:
                    throw new Error("unknown key id " + o)
                }
            case "ENCRYPTED PRIVATE KEY":
                d = function(t, e) {
                    var r = t.algorithm.decrypt.kde.kdeparams.salt
                      , i = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10)
                      , o = n[t.algorithm.decrypt.cipher.algo.join(".")]
                      , h = t.algorithm.decrypt.cipher.iv
                      , u = t.subjectPrivateKey
                      , c = parseInt(o.split("-")[1], 10) / 8
                      , d = s.pbkdf2Sync(e, r, i, c, "sha1")
                      , l = a.createDecipheriv(o, d, h)
                      , p = [];
                    return p.push(l.update(u)),
                    p.push(l.final()),
                    f.concat(p)
                }(d = r.EncryptedPrivateKey.decode(d, "der"), e);
            case "PRIVATE KEY":
                switch (o = (h = r.PrivateKey.decode(d, "der")).algorithm.algorithm.join(".")) {
                case "1.2.840.113549.1.1.1":
                    return r.RSAPrivateKey.decode(h.subjectPrivateKey, "der");
                case "1.2.840.10045.2.1":
                    return {
                        curve: h.algorithm.curve,
                        privateKey: r.ECPrivateKey.decode(h.subjectPrivateKey, "der").privateKey
                    };
                case "1.2.840.10040.4.1":
                    return h.algorithm.params.priv_key = r.DSAparam.decode(h.subjectPrivateKey, "der"),
                    {
                        type: "dsa",
                        params: h.algorithm.params
                    };
                default:
                    throw new Error("unknown key id " + o)
                }
            case "RSA PUBLIC KEY":
                return r.RSAPublicKey.decode(d, "der");
            case "RSA PRIVATE KEY":
                return r.RSAPrivateKey.decode(d, "der");
            case "DSA PRIVATE KEY":
                return {
                    type: "dsa",
                    params: r.DSAPrivateKey.decode(d, "der")
                };
            case "EC PRIVATE KEY":
                return {
                    curve: (d = r.ECPrivateKey.decode(d, "der")).parameters.value,
                    privateKey: d.privateKey
                };
            default:
                throw new Error("unknown key type " + c)
            }
        }
        t.exports = h,
        h.signature = r.signature
    }
    )),
    o.register("4WJwb", (function(e, r) {
        var n, i, a, s, f, h, u, c, d, l;
        t(e.exports, "signature", (()=>h), (t=>h = t)),
        t(e.exports, "certificate", (()=>u), (t=>u = t)),
        t(e.exports, "RSAPrivateKey", (()=>c), (t=>c = t)),
        t(e.exports, "RSAPublicKey", (()=>d), (t=>d = t)),
        t(e.exports, "DSAPrivateKey", (()=>l), (t=>l = t)),
        t(e.exports, "ECPrivateKey", (()=>f), (t=>f = t)),
        t(e.exports, "PublicKey", (()=>a), (t=>a = t)),
        t(e.exports, "PrivateKey", (()=>s), (t=>s = t)),
        t(e.exports, "DSAparam", (()=>n), (t=>n = t)),
        t(e.exports, "EncryptedPrivateKey", (()=>i), (t=>i = t));
        var p = o("Rokcf");
        u = o("Ecu7R");
        var m = p.define("RSAPrivateKey", (function() {
            this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
        }
        ));
        c = m;
        var b = p.define("RSAPublicKey", (function() {
            this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
        }
        ));
        d = b;
        var g = p.define("SubjectPublicKeyInfo", (function() {
            this.seq().obj(this.key("algorithm").use(v), this.key("subjectPublicKey").bitstr())
        }
        ));
        a = g;
        var v = p.define("AlgorithmIdentifier", (function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
        }
        ))
          , y = p.define("PrivateKeyInfo", (function() {
            this.seq().obj(this.key("version").int(), this.key("algorithm").use(v), this.key("subjectPrivateKey").octstr())
        }
        ));
        s = y;
        var w = p.define("EncryptedPrivateKeyInfo", (function() {
            this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
        }
        ));
        i = w;
        var _ = p.define("DSAPrivateKey", (function() {
            this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
        }
        ));
        l = _,
        n = p.define("DSAparam", (function() {
            this.int()
        }
        ));
        var A = p.define("ECPrivateKey", (function() {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(M), this.key("publicKey").optional().explicit(1).bitstr())
        }
        ));
        f = A;
        var M = p.define("ECParameters", (function() {
            this.choice({
                namedCurve: this.objid()
            })
        }
        ));
        h = p.define("signature", (function() {
            this.seq().obj(this.key("r").int(), this.key("s").int())
        }
        ))
    }
    )),
    o.register("Rokcf", (function(t, e) {
        "use strict";
        const r = t.exports;
        r.bignum = o("76R5V"),
        r.define = o("4FLBk").define,
        r.base = o("nDGga"),
        r.constants = o("6YmND"),
        r.decoders = o("1WLYP"),
        r.encoders = o("2ZBN8")
    }
    )),
    o.register("4FLBk", (function(t, e) {
        "use strict";
        var r = o("2ZBN8")
          , n = o("1WLYP")
          , i = o("1hy4s");
        function a(t, e) {
            this.name = t,
            this.body = e,
            this.decoders = {},
            this.encoders = {}
        }
        t.exports.define = function(t, e) {
            return new a(t,e)
        }
        ,
        a.prototype._createNamed = function(t) {
            const e = this.name;
            function r(t) {
                this._initNamed(t, e)
            }
            return i(r, t),
            r.prototype._initNamed = function(e, r) {
                t.call(this, e, r)
            }
            ,
            new r(this)
        }
        ,
        a.prototype._getDecoder = function(t) {
            return t = t || "der",
            this.decoders.hasOwnProperty(t) || (this.decoders[t] = this._createNamed(n[t])),
            this.decoders[t]
        }
        ,
        a.prototype.decode = function(t, e, r) {
            return this._getDecoder(e).decode(t, r)
        }
        ,
        a.prototype._getEncoder = function(t) {
            return t = t || "der",
            this.encoders.hasOwnProperty(t) || (this.encoders[t] = this._createNamed(r[t])),
            this.encoders[t]
        }
        ,
        a.prototype.encode = function(t, e, r) {
            return this._getEncoder(e).encode(t, r)
        }
    }
    )),
    o.register("2ZBN8", (function(t, e) {
        "use strict";
        const r = t.exports;
        r.der = o("4vpTD"),
        r.pem = o("5LmdF")
    }
    )),
    o.register("4vpTD", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("5F0ru").Buffer
          , i = o("ptaFy")
          , a = o("52JIA");
        function s(t) {
            this.enc = "der",
            this.name = t.name,
            this.entity = t,
            this.tree = new f,
            this.tree._init(t.body)
        }
        function f(t) {
            i.call(this, "der", t)
        }
        function h(t) {
            return t < 10 ? "0" + t : t
        }
        t.exports = s,
        s.prototype.encode = function(t, e) {
            return this.tree._encode(t, e).join()
        }
        ,
        r(f, i),
        f.prototype._encodeComposite = function(t, e, r, i) {
            const o = function(t, e, r, n) {
                let i;
                "seqof" === t ? t = "seq" : "setof" === t && (t = "set");
                if (a.tagByName.hasOwnProperty(t))
                    i = a.tagByName[t];
                else {
                    if ("number" != typeof t || (0 | t) !== t)
                        return n.error("Unknown tag: " + t);
                    i = t
                }
                if (i >= 31)
                    return n.error("Multi-octet tag encoding unsupported");
                e || (i |= 32);
                return i |= a.tagClassByName[r || "universal"] << 6,
                i
            }(t, e, r, this.reporter);
            if (i.length < 128) {
                const t = n.alloc(2);
                return t[0] = o,
                t[1] = i.length,
                this._createEncoderBuffer([t, i])
            }
            let s = 1;
            for (let t = i.length; t >= 256; t >>= 8)
                s++;
            const f = n.alloc(2 + s);
            f[0] = o,
            f[1] = 128 | s;
            for (let t = 1 + s, e = i.length; e > 0; t--,
            e >>= 8)
                f[t] = 255 & e;
            return this._createEncoderBuffer([f, i])
        }
        ,
        f.prototype._encodeStr = function(t, e) {
            if ("bitstr" === e)
                return this._createEncoderBuffer([0 | t.unused, t.data]);
            if ("bmpstr" === e) {
                const e = n.alloc(2 * t.length);
                for (let r = 0; r < t.length; r++)
                    e.writeUInt16BE(t.charCodeAt(r), 2 * r);
                return this._createEncoderBuffer(e)
            }
            return "numstr" === e ? this._isNumstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === e ? this._isPrintstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(e) || "objDesc" === e ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: " + e + " unsupported")
        }
        ,
        f.prototype._encodeObjid = function(t, e, r) {
            if ("string" == typeof t) {
                if (!e)
                    return this.reporter.error("string objid given, but no values map found");
                if (!e.hasOwnProperty(t))
                    return this.reporter.error("objid not found in values map");
                t = e[t].split(/[\s.]+/g);
                for (let e = 0; e < t.length; e++)
                    t[e] |= 0
            } else if (Array.isArray(t)) {
                t = t.slice();
                for (let e = 0; e < t.length; e++)
                    t[e] |= 0
            }
            if (!Array.isArray(t))
                return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t));
            if (!r) {
                if (t[1] >= 40)
                    return this.reporter.error("Second objid identifier OOB");
                t.splice(0, 2, 40 * t[0] + t[1])
            }
            let i = 0;
            for (let e = 0; e < t.length; e++) {
                let r = t[e];
                for (i++; r >= 128; r >>= 7)
                    i++
            }
            const o = n.alloc(i);
            let a = o.length - 1;
            for (let e = t.length - 1; e >= 0; e--) {
                let r = t[e];
                for (o[a--] = 127 & r; (r >>= 7) > 0; )
                    o[a--] = 128 | 127 & r
            }
            return this._createEncoderBuffer(o)
        }
        ,
        f.prototype._encodeTime = function(t, e) {
            let r;
            const n = new Date(t);
            return "gentime" === e ? r = [h(n.getUTCFullYear()), h(n.getUTCMonth() + 1), h(n.getUTCDate()), h(n.getUTCHours()), h(n.getUTCMinutes()), h(n.getUTCSeconds()), "Z"].join("") : "utctime" === e ? r = [h(n.getUTCFullYear() % 100), h(n.getUTCMonth() + 1), h(n.getUTCDate()), h(n.getUTCHours()), h(n.getUTCMinutes()), h(n.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e + " time is not supported yet"),
            this._encodeStr(r, "octstr")
        }
        ,
        f.prototype._encodeNull = function() {
            return this._createEncoderBuffer("")
        }
        ,
        f.prototype._encodeInt = function(t, e) {
            if ("string" == typeof t) {
                if (!e)
                    return this.reporter.error("String int or enum given, but no values map");
                if (!e.hasOwnProperty(t))
                    return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
                t = e[t]
            }
            if ("number" != typeof t && !n.isBuffer(t)) {
                const e = t.toArray();
                !t.sign && 128 & e[0] && e.unshift(0),
                t = n.from(e)
            }
            if (n.isBuffer(t)) {
                let e = t.length;
                0 === t.length && e++;
                const r = n.alloc(e);
                return t.copy(r),
                0 === t.length && (r[0] = 0),
                this._createEncoderBuffer(r)
            }
            if (t < 128)
                return this._createEncoderBuffer(t);
            if (t < 256)
                return this._createEncoderBuffer([0, t]);
            let r = 1;
            for (let e = t; e >= 256; e >>= 8)
                r++;
            const i = new Array(r);
            for (let e = i.length - 1; e >= 0; e--)
                i[e] = 255 & t,
                t >>= 8;
            return 128 & i[0] && i.unshift(0),
            this._createEncoderBuffer(n.from(i))
        }
        ,
        f.prototype._encodeBool = function(t) {
            return this._createEncoderBuffer(t ? 255 : 0)
        }
        ,
        f.prototype._use = function(t, e) {
            return "function" == typeof t && (t = t(e)),
            t._getEncoder("der").tree
        }
        ,
        f.prototype._skipDefault = function(t, e, r) {
            const n = this._baseState;
            let i;
            if (null === n.default)
                return !1;
            const o = t.join();
            if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, e, r).join()),
            o.length !== n.defaultBuffer.length)
                return !1;
            for (i = 0; i < o.length; i++)
                if (o[i] !== n.defaultBuffer[i])
                    return !1;
            return !0
        }
    }
    )),
    o.register("5F0ru", (function(t, e) {
        var r, n = o("67ZL8"), i = o("3tvKv"), a = i.Buffer, s = {};
        for (r in i)
            i.hasOwnProperty(r) && "SlowBuffer" !== r && "Buffer" !== r && (s[r] = i[r]);
        var f = s.Buffer = {};
        for (r in a)
            a.hasOwnProperty(r) && "allocUnsafe" !== r && "allocUnsafeSlow" !== r && (f[r] = a[r]);
        if (s.Buffer.prototype = a.prototype,
        f.from && f.from !== Uint8Array.from || (f.from = function(t, e, r) {
            if ("number" == typeof t)
                throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
            if (t && void 0 === t.length)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            return a(t, e, r)
        }
        ),
        f.alloc || (f.alloc = function(t, e, r) {
            if ("number" != typeof t)
                throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
            if (t < 0 || t >= 2147483648)
                throw new RangeError('The value "' + t + '" is invalid for option "size"');
            var n = a(t);
            return e && 0 !== e.length ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0),
            n
        }
        ),
        !s.kStringMaxLength)
            try {
                s.kStringMaxLength = n.binding("buffer").kStringMaxLength
            } catch (t) {}
        s.constants || (s.constants = {
            MAX_LENGTH: s.kMaxLength
        },
        s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)),
        t.exports = s
    }
    )),
    o.register("ptaFy", (function(t, e) {
        "use strict";
        var r = o("5SJwq").Reporter
          , n = o("1M0SC").EncoderBuffer
          , i = o("1M0SC").DecoderBuffer
          , a = o("10wuZ");
        const s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"]
          , f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);
        function h(t, e, r) {
            const n = {};
            this._baseState = n,
            n.name = r,
            n.enc = t,
            n.parent = e || null,
            n.children = null,
            n.tag = null,
            n.args = null,
            n.reverseArgs = null,
            n.choice = null,
            n.optional = !1,
            n.any = !1,
            n.obj = !1,
            n.use = null,
            n.useDecoder = null,
            n.key = null,
            n.default = null,
            n.explicit = null,
            n.implicit = null,
            n.contains = null,
            n.parent || (n.children = [],
            this._wrap())
        }
        t.exports = h;
        const u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
        h.prototype.clone = function() {
            const t = this._baseState
              , e = {};
            u.forEach((function(r) {
                e[r] = t[r]
            }
            ));
            const r = new this.constructor(e.parent);
            return r._baseState = e,
            r
        }
        ,
        h.prototype._wrap = function() {
            const t = this._baseState;
            f.forEach((function(e) {
                this[e] = function() {
                    const r = new this.constructor(this);
                    return t.children.push(r),
                    r[e].apply(r, arguments)
                }
            }
            ), this)
        }
        ,
        h.prototype._init = function(t) {
            const e = this._baseState;
            a(null === e.parent),
            t.call(this),
            e.children = e.children.filter((function(t) {
                return t._baseState.parent === this
            }
            ), this),
            a.equal(e.children.length, 1, "Root node can have only one child")
        }
        ,
        h.prototype._useArgs = function(t) {
            const e = this._baseState
              , r = t.filter((function(t) {
                return t instanceof this.constructor
            }
            ), this);
            t = t.filter((function(t) {
                return !(t instanceof this.constructor)
            }
            ), this),
            0 !== r.length && (a(null === e.children),
            e.children = r,
            r.forEach((function(t) {
                t._baseState.parent = this
            }
            ), this)),
            0 !== t.length && (a(null === e.args),
            e.args = t,
            e.reverseArgs = t.map((function(t) {
                if ("object" != typeof t || t.constructor !== Object)
                    return t;
                const e = {};
                return Object.keys(t).forEach((function(r) {
                    r == (0 | r) && (r |= 0);
                    const n = t[r];
                    e[n] = r
                }
                )),
                e
            }
            )))
        }
        ,
        ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach((function(t) {
            h.prototype[t] = function() {
                const e = this._baseState;
                throw new Error(t + " not implemented for encoding: " + e.enc)
            }
        }
        )),
        s.forEach((function(t) {
            h.prototype[t] = function() {
                const e = this._baseState
                  , r = Array.prototype.slice.call(arguments);
                return a(null === e.tag),
                e.tag = t,
                this._useArgs(r),
                this
            }
        }
        )),
        h.prototype.use = function(t) {
            a(t);
            const e = this._baseState;
            return a(null === e.use),
            e.use = t,
            this
        }
        ,
        h.prototype.optional = function() {
            return this._baseState.optional = !0,
            this
        }
        ,
        h.prototype.def = function(t) {
            const e = this._baseState;
            return a(null === e.default),
            e.default = t,
            e.optional = !0,
            this
        }
        ,
        h.prototype.explicit = function(t) {
            const e = this._baseState;
            return a(null === e.explicit && null === e.implicit),
            e.explicit = t,
            this
        }
        ,
        h.prototype.implicit = function(t) {
            const e = this._baseState;
            return a(null === e.explicit && null === e.implicit),
            e.implicit = t,
            this
        }
        ,
        h.prototype.obj = function() {
            const t = this._baseState
              , e = Array.prototype.slice.call(arguments);
            return t.obj = !0,
            0 !== e.length && this._useArgs(e),
            this
        }
        ,
        h.prototype.key = function(t) {
            const e = this._baseState;
            return a(null === e.key),
            e.key = t,
            this
        }
        ,
        h.prototype.any = function() {
            return this._baseState.any = !0,
            this
        }
        ,
        h.prototype.choice = function(t) {
            const e = this._baseState;
            return a(null === e.choice),
            e.choice = t,
            this._useArgs(Object.keys(t).map((function(e) {
                return t[e]
            }
            ))),
            this
        }
        ,
        h.prototype.contains = function(t) {
            const e = this._baseState;
            return a(null === e.use),
            e.contains = t,
            this
        }
        ,
        h.prototype._decode = function(t, e) {
            const r = this._baseState;
            if (null === r.parent)
                return t.wrapResult(r.children[0]._decode(t, e));
            let n, o = r.default, a = !0, s = null;
            if (null !== r.key && (s = t.enterKey(r.key)),
            r.optional) {
                let n = null;
                if (null !== r.explicit ? n = r.explicit : null !== r.implicit ? n = r.implicit : null !== r.tag && (n = r.tag),
                null !== n || r.any) {
                    if (a = this._peekTag(t, n, r.any),
                    t.isError(a))
                        return a
                } else {
                    const n = t.save();
                    try {
                        null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e),
                        a = !0
                    } catch (t) {
                        a = !1
                    }
                    t.restore(n)
                }
            }
            if (r.obj && a && (n = t.enterObject()),
            a) {
                if (null !== r.explicit) {
                    const e = this._decodeTag(t, r.explicit);
                    if (t.isError(e))
                        return e;
                    t = e
                }
                const n = t.offset;
                if (null === r.use && null === r.choice) {
                    let e;
                    r.any && (e = t.save());
                    const n = this._decodeTag(t, null !== r.implicit ? r.implicit : r.tag, r.any);
                    if (t.isError(n))
                        return n;
                    r.any ? o = t.raw(e) : t = n
                }
                if (e && e.track && null !== r.tag && e.track(t.path(), n, t.length, "tagged"),
                e && e.track && null !== r.tag && e.track(t.path(), t.offset, t.length, "content"),
                r.any || (o = null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e)),
                t.isError(o))
                    return o;
                if (r.any || null !== r.choice || null === r.children || r.children.forEach((function(r) {
                    r._decode(t, e)
                }
                )),
                r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                    const n = new i(o);
                    o = this._getUse(r.contains, t._reporterState.obj)._decode(n, e)
                }
            }
            return r.obj && a && (o = t.leaveObject(n)),
            null === r.key || null === o && !0 !== a ? null !== s && t.exitKey(s) : t.leaveKey(s, r.key, o),
            o
        }
        ,
        h.prototype._decodeGeneric = function(t, e, r) {
            const n = this._baseState;
            return "seq" === t || "set" === t ? null : "seqof" === t || "setof" === t ? this._decodeList(e, t, n.args[0], r) : /str$/.test(t) ? this._decodeStr(e, t, r) : "objid" === t && n.args ? this._decodeObjid(e, n.args[0], n.args[1], r) : "objid" === t ? this._decodeObjid(e, null, null, r) : "gentime" === t || "utctime" === t ? this._decodeTime(e, t, r) : "null_" === t ? this._decodeNull(e, r) : "bool" === t ? this._decodeBool(e, r) : "objDesc" === t ? this._decodeStr(e, t, r) : "int" === t || "enum" === t ? this._decodeInt(e, n.args && n.args[0], r) : null !== n.use ? this._getUse(n.use, e._reporterState.obj)._decode(e, r) : e.error("unknown tag: " + t)
        }
        ,
        h.prototype._getUse = function(t, e) {
            const r = this._baseState;
            return r.useDecoder = this._use(t, e),
            a(null === r.useDecoder._baseState.parent),
            r.useDecoder = r.useDecoder._baseState.children[0],
            r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(),
            r.useDecoder._baseState.implicit = r.implicit),
            r.useDecoder
        }
        ,
        h.prototype._decodeChoice = function(t, e) {
            const r = this._baseState;
            let n = null
              , i = !1;
            return Object.keys(r.choice).some((function(o) {
                const a = t.save()
                  , s = r.choice[o];
                try {
                    const r = s._decode(t, e);
                    if (t.isError(r))
                        return !1;
                    n = {
                        type: o,
                        value: r
                    },
                    i = !0
                } catch (e) {
                    return t.restore(a),
                    !1
                }
                return !0
            }
            ), this),
            i ? n : t.error("Choice not matched")
        }
        ,
        h.prototype._createEncoderBuffer = function(t) {
            return new n(t,this.reporter)
        }
        ,
        h.prototype._encode = function(t, e, r) {
            const n = this._baseState;
            if (null !== n.default && n.default === t)
                return;
            const i = this._encodeValue(t, e, r);
            return void 0 === i || this._skipDefault(i, e, r) ? void 0 : i
        }
        ,
        h.prototype._encodeValue = function(t, e, n) {
            const i = this._baseState;
            if (null === i.parent)
                return i.children[0]._encode(t, e || new r);
            let o = null;
            if (this.reporter = e,
            i.optional && void 0 === t) {
                if (null === i.default)
                    return;
                t = i.default
            }
            let a = null
              , s = !1;
            if (i.any)
                o = this._createEncoderBuffer(t);
            else if (i.choice)
                o = this._encodeChoice(t, e);
            else if (i.contains)
                a = this._getUse(i.contains, n)._encode(t, e),
                s = !0;
            else if (i.children)
                a = i.children.map((function(r) {
                    if ("null_" === r._baseState.tag)
                        return r._encode(null, e, t);
                    if (null === r._baseState.key)
                        return e.error("Child should have a key");
                    const n = e.enterKey(r._baseState.key);
                    if ("object" != typeof t)
                        return e.error("Child expected, but input is not object");
                    const i = r._encode(t[r._baseState.key], e, t);
                    return e.leaveKey(n),
                    i
                }
                ), this).filter((function(t) {
                    return t
                }
                )),
                a = this._createEncoderBuffer(a);
            else if ("seqof" === i.tag || "setof" === i.tag) {
                if (!i.args || 1 !== i.args.length)
                    return e.error("Too many args for : " + i.tag);
                if (!Array.isArray(t))
                    return e.error("seqof/setof, but data is not Array");
                const r = this.clone();
                r._baseState.implicit = null,
                a = this._createEncoderBuffer(t.map((function(r) {
                    const n = this._baseState;
                    return this._getUse(n.args[0], t)._encode(r, e)
                }
                ), r))
            } else
                null !== i.use ? o = this._getUse(i.use, n)._encode(t, e) : (a = this._encodePrimitive(i.tag, t),
                s = !0);
            if (!i.any && null === i.choice) {
                const t = null !== i.implicit ? i.implicit : i.tag
                  , r = null === i.implicit ? "universal" : "context";
                null === t ? null === i.use && e.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(t, s, r, a))
            }
            return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)),
            o
        }
        ,
        h.prototype._encodeChoice = function(t, e) {
            const r = this._baseState
              , n = r.choice[t.type];
            return n || a(!1, t.type + " not found in " + JSON.stringify(Object.keys(r.choice))),
            n._encode(t.value, e)
        }
        ,
        h.prototype._encodePrimitive = function(t, e) {
            const r = this._baseState;
            if (/str$/.test(t))
                return this._encodeStr(e, t);
            if ("objid" === t && r.args)
                return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
            if ("objid" === t)
                return this._encodeObjid(e, null, null);
            if ("gentime" === t || "utctime" === t)
                return this._encodeTime(e, t);
            if ("null_" === t)
                return this._encodeNull();
            if ("int" === t || "enum" === t)
                return this._encodeInt(e, r.args && r.reverseArgs[0]);
            if ("bool" === t)
                return this._encodeBool(e);
            if ("objDesc" === t)
                return this._encodeStr(e, t);
            throw new Error("Unsupported tag: " + t)
        }
        ,
        h.prototype._isNumstr = function(t) {
            return /^[0-9 ]*$/.test(t)
        }
        ,
        h.prototype._isPrintstr = function(t) {
            return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(t)
        }
    }
    )),
    o.register("5SJwq", (function(e, r) {
        var n;
        t(e.exports, "Reporter", (()=>n), (t=>n = t));
        var i = o("1hy4s");
        function a(t) {
            this._reporterState = {
                obj: null,
                path: [],
                options: t || {},
                errors: []
            }
        }
        function s(t, e) {
            this.path = t,
            this.rethrow(e)
        }
        n = a,
        a.prototype.isError = function(t) {
            return t instanceof s
        }
        ,
        a.prototype.save = function() {
            const t = this._reporterState;
            return {
                obj: t.obj,
                pathLen: t.path.length
            }
        }
        ,
        a.prototype.restore = function(t) {
            const e = this._reporterState;
            e.obj = t.obj,
            e.path = e.path.slice(0, t.pathLen)
        }
        ,
        a.prototype.enterKey = function(t) {
            return this._reporterState.path.push(t)
        }
        ,
        a.prototype.exitKey = function(t) {
            const e = this._reporterState;
            e.path = e.path.slice(0, t - 1)
        }
        ,
        a.prototype.leaveKey = function(t, e, r) {
            const n = this._reporterState;
            this.exitKey(t),
            null !== n.obj && (n.obj[e] = r)
        }
        ,
        a.prototype.path = function() {
            return this._reporterState.path.join("/")
        }
        ,
        a.prototype.enterObject = function() {
            const t = this._reporterState
              , e = t.obj;
            return t.obj = {},
            e
        }
        ,
        a.prototype.leaveObject = function(t) {
            const e = this._reporterState
              , r = e.obj;
            return e.obj = t,
            r
        }
        ,
        a.prototype.error = function(t) {
            let e;
            const r = this._reporterState
              , n = t instanceof s;
            if (e = n ? t : new s(r.path.map((function(t) {
                return "[" + JSON.stringify(t) + "]"
            }
            )).join(""),t.message || t,t.stack),
            !r.options.partial)
                throw e;
            return n || r.errors.push(e),
            e
        }
        ,
        a.prototype.wrapResult = function(t) {
            const e = this._reporterState;
            return e.options.partial ? {
                result: this.isError(t) ? null : t,
                errors: e.errors
            } : t
        }
        ,
        i(s, Error),
        s.prototype.rethrow = function(t) {
            if (this.message = t + " at: " + (this.path || "(shallow)"),
            Error.captureStackTrace && Error.captureStackTrace(this, s),
            !this.stack)
                try {
                    throw new Error(this.message)
                } catch (t) {
                    this.stack = t.stack
                }
            return this
        }
    }
    )),
    o.register("1M0SC", (function(e, r) {
        var n, i;
        t(e.exports, "DecoderBuffer", (()=>n), (t=>n = t)),
        t(e.exports, "EncoderBuffer", (()=>i), (t=>i = t));
        var a = o("1hy4s")
          , s = o("5SJwq").Reporter
          , f = o("5F0ru").Buffer;
        function h(t, e) {
            s.call(this, e),
            f.isBuffer(t) ? (this.base = t,
            this.offset = 0,
            this.length = t.length) : this.error("Input not Buffer")
        }
        function u(t, e) {
            if (Array.isArray(t))
                this.length = 0,
                this.value = t.map((function(t) {
                    return u.isEncoderBuffer(t) || (t = new u(t,e)),
                    this.length += t.length,
                    t
                }
                ), this);
            else if ("number" == typeof t) {
                if (!(0 <= t && t <= 255))
                    return e.error("non-byte EncoderBuffer value");
                this.value = t,
                this.length = 1
            } else if ("string" == typeof t)
                this.value = t,
                this.length = f.byteLength(t);
            else {
                if (!f.isBuffer(t))
                    return e.error("Unsupported type: " + typeof t);
                this.value = t,
                this.length = t.length
            }
        }
        a(h, s),
        n = h,
        h.isDecoderBuffer = function(t) {
            if (t instanceof h)
                return !0;
            return "object" == typeof t && f.isBuffer(t.base) && "DecoderBuffer" === t.constructor.name && "number" == typeof t.offset && "number" == typeof t.length && "function" == typeof t.save && "function" == typeof t.restore && "function" == typeof t.isEmpty && "function" == typeof t.readUInt8 && "function" == typeof t.skip && "function" == typeof t.raw
        }
        ,
        h.prototype.save = function() {
            return {
                offset: this.offset,
                reporter: s.prototype.save.call(this)
            }
        }
        ,
        h.prototype.restore = function(t) {
            const e = new h(this.base);
            return e.offset = t.offset,
            e.length = this.offset,
            this.offset = t.offset,
            s.prototype.restore.call(this, t.reporter),
            e
        }
        ,
        h.prototype.isEmpty = function() {
            return this.offset === this.length
        }
        ,
        h.prototype.readUInt8 = function(t) {
            return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
        }
        ,
        h.prototype.skip = function(t, e) {
            if (!(this.offset + t <= this.length))
                return this.error(e || "DecoderBuffer overrun");
            const r = new h(this.base);
            return r._reporterState = this._reporterState,
            r.offset = this.offset,
            r.length = this.offset + t,
            this.offset += t,
            r
        }
        ,
        h.prototype.raw = function(t) {
            return this.base.slice(t ? t.offset : this.offset, this.length)
        }
        ,
        i = u,
        u.isEncoderBuffer = function(t) {
            if (t instanceof u)
                return !0;
            return "object" == typeof t && "EncoderBuffer" === t.constructor.name && "number" == typeof t.length && "function" == typeof t.join
        }
        ,
        u.prototype.join = function(t, e) {
            return t || (t = f.alloc(this.length)),
            e || (e = 0),
            0 === this.length || (Array.isArray(this.value) ? this.value.forEach((function(r) {
                r.join(t, e),
                e += r.length
            }
            )) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : f.isBuffer(this.value) && this.value.copy(t, e),
            e += this.length)),
            t
        }
    }
    )),
    o.register("52JIA", (function(e, r) {
        var n, i, o, a;
        function s(t) {
            const e = {};
            return Object.keys(t).forEach((function(r) {
                (0 | r) == r && (r |= 0);
                const n = t[r];
                e[n] = r
            }
            )),
            e
        }
        t(e.exports, "tagByName", (()=>a), (t=>a = t)),
        t(e.exports, "tagClass", (()=>i), (t=>i = t)),
        t(e.exports, "tagClassByName", (()=>n), (t=>n = t)),
        t(e.exports, "tag", (()=>o), (t=>o = t)),
        n = s(i = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }),
        a = s(o = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        })
    }
    )),
    o.register("5LmdF", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("4vpTD");
        function i(t) {
            n.call(this, t),
            this.enc = "pem"
        }
        r(i, n),
        t.exports = i,
        i.prototype.encode = function(t, e) {
            const r = n.prototype.encode.call(this, t).toString("base64")
              , i = ["-----BEGIN " + e.label + "-----"];
            for (let t = 0; t < r.length; t += 64)
                i.push(r.slice(t, t + 64));
            return i.push("-----END " + e.label + "-----"),
            i.join("\n")
        }
    }
    )),
    o.register("1WLYP", (function(t, e) {
        "use strict";
        const r = t.exports;
        r.der = o("3Jms9"),
        r.pem = o("4IXaL")
    }
    )),
    o.register("3Jms9", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("76R5V")
          , i = o("1M0SC").DecoderBuffer
          , a = o("ptaFy")
          , s = o("52JIA");
        function f(t) {
            this.enc = "der",
            this.name = t.name,
            this.entity = t,
            this.tree = new h,
            this.tree._init(t.body)
        }
        function h(t) {
            a.call(this, "der", t)
        }
        function u(t, e) {
            let r = t.readUInt8(e);
            if (t.isError(r))
                return r;
            const n = s.tagClass[r >> 6]
              , i = 0 == (32 & r);
            if (31 == (31 & r)) {
                let n = r;
                for (r = 0; 128 == (128 & n); ) {
                    if (n = t.readUInt8(e),
                    t.isError(n))
                        return n;
                    r <<= 7,
                    r |= 127 & n
                }
            } else
                r &= 31;
            return {
                cls: n,
                primitive: i,
                tag: r,
                tagStr: s.tag[r]
            }
        }
        function c(t, e, r) {
            let n = t.readUInt8(r);
            if (t.isError(n))
                return n;
            if (!e && 128 === n)
                return null;
            if (0 == (128 & n))
                return n;
            const i = 127 & n;
            if (i > 4)
                return t.error("length octect is too long");
            n = 0;
            for (let e = 0; e < i; e++) {
                n <<= 8;
                const e = t.readUInt8(r);
                if (t.isError(e))
                    return e;
                n |= e
            }
            return n
        }
        t.exports = f,
        f.prototype.decode = function(t, e) {
            return i.isDecoderBuffer(t) || (t = new i(t,e)),
            this.tree._decode(t, e)
        }
        ,
        r(h, a),
        h.prototype._peekTag = function(t, e, r) {
            if (t.isEmpty())
                return !1;
            const n = t.save()
              , i = u(t, 'Failed to peek tag: "' + e + '"');
            return t.isError(i) ? i : (t.restore(n),
            i.tag === e || i.tagStr === e || i.tagStr + "of" === e || r)
        }
        ,
        h.prototype._decodeTag = function(t, e, r) {
            const n = u(t, 'Failed to decode tag of "' + e + '"');
            if (t.isError(n))
                return n;
            let i = c(t, n.primitive, 'Failed to get length of "' + e + '"');
            if (t.isError(i))
                return i;
            if (!r && n.tag !== e && n.tagStr !== e && n.tagStr + "of" !== e)
                return t.error('Failed to match tag: "' + e + '"');
            if (n.primitive || null !== i)
                return t.skip(i, 'Failed to match body of: "' + e + '"');
            const o = t.save()
              , a = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
            return t.isError(a) ? a : (i = t.offset - o.offset,
            t.restore(o),
            t.skip(i, 'Failed to match body of: "' + e + '"'))
        }
        ,
        h.prototype._skipUntilEnd = function(t, e) {
            for (; ; ) {
                const r = u(t, e);
                if (t.isError(r))
                    return r;
                const n = c(t, r.primitive, e);
                if (t.isError(n))
                    return n;
                let i;
                if (i = r.primitive || null !== n ? t.skip(n) : this._skipUntilEnd(t, e),
                t.isError(i))
                    return i;
                if ("end" === r.tagStr)
                    break
            }
        }
        ,
        h.prototype._decodeList = function(t, e, r, n) {
            const i = [];
            for (; !t.isEmpty(); ) {
                const e = this._peekTag(t, "end");
                if (t.isError(e))
                    return e;
                const o = r.decode(t, "der", n);
                if (t.isError(o) && e)
                    break;
                i.push(o)
            }
            return i
        }
        ,
        h.prototype._decodeStr = function(t, e) {
            if ("bitstr" === e) {
                const e = t.readUInt8();
                return t.isError(e) ? e : {
                    unused: e,
                    data: t.raw()
                }
            }
            if ("bmpstr" === e) {
                const e = t.raw();
                if (e.length % 2 == 1)
                    return t.error("Decoding of string type: bmpstr length mismatch");
                let r = "";
                for (let t = 0; t < e.length / 2; t++)
                    r += String.fromCharCode(e.readUInt16BE(2 * t));
                return r
            }
            if ("numstr" === e) {
                const e = t.raw().toString("ascii");
                return this._isNumstr(e) ? e : t.error("Decoding of string type: numstr unsupported characters")
            }
            if ("octstr" === e)
                return t.raw();
            if ("objDesc" === e)
                return t.raw();
            if ("printstr" === e) {
                const e = t.raw().toString("ascii");
                return this._isPrintstr(e) ? e : t.error("Decoding of string type: printstr unsupported characters")
            }
            return /str$/.test(e) ? t.raw().toString() : t.error("Decoding of string type: " + e + " unsupported")
        }
        ,
        h.prototype._decodeObjid = function(t, e, r) {
            let n;
            const i = [];
            let o = 0
              , a = 0;
            for (; !t.isEmpty(); )
                a = t.readUInt8(),
                o <<= 7,
                o |= 127 & a,
                0 == (128 & a) && (i.push(o),
                o = 0);
            128 & a && i.push(o);
            const s = i[0] / 40 | 0
              , f = i[0] % 40;
            if (n = r ? i : [s, f].concat(i.slice(1)),
            e) {
                let t = e[n.join(" ")];
                void 0 === t && (t = e[n.join(".")]),
                void 0 !== t && (n = t)
            }
            return n
        }
        ,
        h.prototype._decodeTime = function(t, e) {
            const r = t.raw().toString();
            let n, i, o, a, s, f;
            if ("gentime" === e)
                n = 0 | r.slice(0, 4),
                i = 0 | r.slice(4, 6),
                o = 0 | r.slice(6, 8),
                a = 0 | r.slice(8, 10),
                s = 0 | r.slice(10, 12),
                f = 0 | r.slice(12, 14);
            else {
                if ("utctime" !== e)
                    return t.error("Decoding " + e + " time is not supported yet");
                n = 0 | r.slice(0, 2),
                i = 0 | r.slice(2, 4),
                o = 0 | r.slice(4, 6),
                a = 0 | r.slice(6, 8),
                s = 0 | r.slice(8, 10),
                f = 0 | r.slice(10, 12),
                n = n < 70 ? 2e3 + n : 1900 + n
            }
            return Date.UTC(n, i - 1, o, a, s, f, 0)
        }
        ,
        h.prototype._decodeNull = function() {
            return null
        }
        ,
        h.prototype._decodeBool = function(t) {
            const e = t.readUInt8();
            return t.isError(e) ? e : 0 !== e
        }
        ,
        h.prototype._decodeInt = function(t, e) {
            const r = t.raw();
            let i = new n(r);
            return e && (i = e[i.toString(10)] || i),
            i
        }
        ,
        h.prototype._use = function(t, e) {
            return "function" == typeof t && (t = t(e)),
            t._getDecoder("der").tree
        }
    }
    )),
    o.register("4IXaL", (function(t, e) {
        "use strict";
        var r = o("1hy4s")
          , n = o("5F0ru").Buffer
          , i = o("3Jms9");
        function a(t) {
            i.call(this, t),
            this.enc = "pem"
        }
        r(a, i),
        t.exports = a,
        a.prototype.decode = function(t, e) {
            const r = t.toString().split(/[\r\n]+/g)
              , o = e.label.toUpperCase()
              , a = /^-----(BEGIN|END) ([^-]+)-----$/;
            let s = -1
              , f = -1;
            for (let t = 0; t < r.length; t++) {
                const e = r[t].match(a);
                if (null !== e && e[2] === o) {
                    if (-1 !== s) {
                        if ("END" !== e[1])
                            break;
                        f = t;
                        break
                    }
                    if ("BEGIN" !== e[1])
                        break;
                    s = t
                }
            }
            if (-1 === s || -1 === f)
                throw new Error("PEM section not found for: " + o);
            const h = r.slice(s + 1, f).join("");
            h.replace(/[^a-z0-9+/=]+/gi, "");
            const u = n.from(h, "base64");
            return i.prototype.decode.call(this, u, e)
        }
    }
    )),
    o.register("nDGga", (function(t, e) {
        "use strict";
        const r = t.exports;
        r.Reporter = o("5SJwq").Reporter,
        r.DecoderBuffer = o("1M0SC").DecoderBuffer,
        r.EncoderBuffer = o("1M0SC").EncoderBuffer,
        r.Node = o("ptaFy")
    }
    )),
    o.register("6YmND", (function(t, e) {
        "use strict";
        const r = t.exports;
        r._reverse = function(t) {
            const e = {};
            return Object.keys(t).forEach((function(r) {
                (0 | r) == r && (r |= 0);
                const n = t[r];
                e[n] = r
            }
            )),
            e
        }
        ,
        r.der = o("52JIA")
    }
    )),
    o.register("Ecu7R", (function(t, e) {
        "use strict";
        var r = o("Rokcf")
          , n = r.define("Time", (function() {
            this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime()
            })
        }
        ))
          , i = r.define("AttributeTypeValue", (function() {
            this.seq().obj(this.key("type").objid(), this.key("value").any())
        }
        ))
          , a = r.define("AlgorithmIdentifier", (function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
        }
        ))
          , s = r.define("SubjectPublicKeyInfo", (function() {
            this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr())
        }
        ))
          , f = r.define("RelativeDistinguishedName", (function() {
            this.setof(i)
        }
        ))
          , h = r.define("RDNSequence", (function() {
            this.seqof(f)
        }
        ))
          , u = r.define("Name", (function() {
            this.choice({
                rdnSequence: this.use(h)
            })
        }
        ))
          , c = r.define("Validity", (function() {
            this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n))
        }
        ))
          , d = r.define("Extension", (function() {
            this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
        }
        ))
          , l = r.define("TBSCertificate", (function() {
            this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(u), this.key("validity").use(c), this.key("subject").use(u), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional())
        }
        ))
          , p = r.define("X509Certificate", (function() {
            this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr())
        }
        ));
        t.exports = p
    }
    )),
    o.register("5Air7", (function(t, e) {
        t.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')
    }
    )),
    o.register("3HG0C", (function(t, e) {
        var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m
          , n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m
          , i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m
          , a = o("1cBie")
          , s = o("19viH")
          , f = o("5Xfjk").Buffer;
        t.exports = function(t, e) {
            var o, h = t.toString(), u = h.match(r);
            if (u) {
                var c = "aes" + u[1]
                  , d = f.from(u[2], "hex")
                  , l = f.from(u[3].replace(/[\r\n]/g, ""), "base64")
                  , p = a(e, d.slice(0, 8), parseInt(u[1], 10)).key
                  , m = []
                  , b = s.createDecipheriv(c, p, d);
                m.push(b.update(l)),
                m.push(b.final()),
                o = f.concat(m)
            } else {
                var g = h.match(i);
                o = f.from(g[2].replace(/[\r\n]/g, ""), "base64")
            }
            return {
                tag: h.match(n)[1],
                data: o
            }
        }
    }
    )),
    o.register("47Un3", (function(t, e) {
        t.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')
    }
    )),
    o.register("6L7eW", (function(t, e) {
        var r = o("5Xfjk").Buffer
          , n = o("bipxM")
          , i = o("4piDs").ec
          , a = o("1sSrw")
          , s = o("47Un3");
        function f(t, e) {
            if (t.cmpn(0) <= 0)
                throw new Error("invalid sig");
            if (t.cmp(e) >= e)
                throw new Error("invalid sig")
        }
        t.exports = function(t, e, o, h, u) {
            var c = a(o);
            if ("ec" === c.type) {
                if ("ecdsa" !== h && "ecdsa/rsa" !== h)
                    throw new Error("wrong public key type");
                return function(t, e, r) {
                    var n = s[r.data.algorithm.curve.join(".")];
                    if (!n)
                        throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
                    var o = new i(n)
                      , a = r.data.subjectPrivateKey.data;
                    return o.verify(e, t, a)
                }(t, e, c)
            }
            if ("dsa" === c.type) {
                if ("dsa" !== h)
                    throw new Error("wrong public key type");
                return function(t, e, r) {
                    var i = r.data.p
                      , o = r.data.q
                      , s = r.data.g
                      , h = r.data.pub_key
                      , u = a.signature.decode(t, "der")
                      , c = u.s
                      , d = u.r;
                    f(c, o),
                    f(d, o);
                    var l = n.mont(i)
                      , p = c.invm(o);
                    return 0 === s.toRed(l).redPow(new n(e).mul(p).mod(o)).fromRed().mul(h.toRed(l).redPow(d.mul(p).mod(o)).fromRed()).mod(i).mod(o).cmp(d)
                }(t, e, c)
            }
            if ("rsa" !== h && "ecdsa/rsa" !== h)
                throw new Error("wrong public key type");
            e = r.concat([u, e]);
            for (var d = c.modulus.byteLength(), l = [1], p = 0; e.length + l.length + 2 < d; )
                l.push(255),
                p++;
            l.push(0);
            for (var m = -1; ++m < e.length; )
                l.push(e[m]);
            l = r.from(l);
            var b = n.mont(c.modulus);
            t = (t = new n(t).toRed(b)).redPow(new n(c.publicExponent)),
            t = r.from(t.fromRed().toArray());
            var g = p < 8 ? 1 : 0;
            for (d = Math.min(t.length, l.length),
            t.length !== l.length && (g = 1),
            m = -1; ++m < d; )
                g |= t[m] ^ l[m];
            return 0 === g
        }
    }
    )),
    o.register("5nmn3", (function(t, e) {
        var r = o("3tvKv").Buffer
          , n = o("4piDs")
          , i = o("76R5V");
        t.exports = function(t) {
            return new s(t)
        }
        ;
        var a = {
            secp256k1: {
                name: "secp256k1",
                byteLength: 32
            },
            secp224r1: {
                name: "p224",
                byteLength: 28
            },
            prime256v1: {
                name: "p256",
                byteLength: 32
            },
            prime192v1: {
                name: "p192",
                byteLength: 24
            },
            ed25519: {
                name: "ed25519",
                byteLength: 32
            },
            secp384r1: {
                name: "p384",
                byteLength: 48
            },
            secp521r1: {
                name: "p521",
                byteLength: 66
            }
        };
        function s(t) {
            this.curveType = a[t],
            this.curveType || (this.curveType = {
                name: t
            }),
            this.curve = new n.ec(this.curveType.name),
            this.keys = void 0
        }
        function f(t, e, n) {
            Array.isArray(t) || (t = t.toArray());
            var i = new r(t);
            if (n && i.length < n) {
                var o = new r(n - i.length);
                o.fill(0),
                i = r.concat([o, i])
            }
            return e ? i.toString(e) : i
        }
        a.p224 = a.secp224r1,
        a.p256 = a.secp256r1 = a.prime256v1,
        a.p192 = a.secp192r1 = a.prime192v1,
        a.p384 = a.secp384r1,
        a.p521 = a.secp521r1,
        s.prototype.generateKeys = function(t, e) {
            return this.keys = this.curve.genKeyPair(),
            this.getPublicKey(t, e)
        }
        ,
        s.prototype.computeSecret = function(t, e, n) {
            return e = e || "utf8",
            r.isBuffer(t) || (t = new r(t,e)),
            f(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength)
        }
        ,
        s.prototype.getPublicKey = function(t, e) {
            var r = this.keys.getPublic("compressed" === e, !0);
            return "hybrid" === e && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6),
            f(r, t)
        }
        ,
        s.prototype.getPrivateKey = function(t) {
            return f(this.keys.getPrivate(), t)
        }
        ,
        s.prototype.setPublicKey = function(t, e) {
            return e = e || "utf8",
            r.isBuffer(t) || (t = new r(t,e)),
            this.keys._importPublic(t),
            this
        }
        ,
        s.prototype.setPrivateKey = function(t, e) {
            e = e || "utf8",
            r.isBuffer(t) || (t = new r(t,e));
            var n = new i(t);
            return n = n.toString(16),
            this.keys = this.curve.genKeyPair(),
            this.keys._importPrivate(n),
            this
        }
    }
    )),
    o.register("3z2zV", (function(e, r) {
        var n, i, a, s;
        t(e.exports, "privateDecrypt", (()=>a), (t=>a = t)),
        t(e.exports, "privateEncrypt", (()=>s), (t=>s = t)),
        t(e.exports, "publicEncrypt", (()=>n), (t=>n = t)),
        t(e.exports, "publicDecrypt", (()=>i), (t=>i = t)),
        n = o("4Xm6P"),
        a = o("2btEm"),
        s = function(t, e) {
            return n(t, e, !0)
        }
        ,
        i = function(t, e) {
            return a(t, e, !0)
        }
    }
    )),
    o.register("4Xm6P", (function(t, e) {
        var r = o("1sSrw")
          , n = o("6DQjm")
          , i = o("1O6Be")
          , a = o("YDCwH")
          , s = o("5CGj9")
          , f = o("76R5V")
          , h = o("4PoW1")
          , u = o("4iOFY")
          , c = o("5Xfjk").Buffer;
        t.exports = function(t, e, o) {
            var d;
            d = t.padding ? t.padding : o ? 1 : 4;
            var l, p = r(t);
            if (4 === d)
                l = function(t, e) {
                    var r = t.modulus.byteLength()
                      , o = e.length
                      , h = i("sha1").update(c.alloc(0)).digest()
                      , u = h.length
                      , d = 2 * u;
                    if (o > r - d - 2)
                        throw new Error("message too long");
                    var l = c.alloc(r - o - d - 2)
                      , p = r - u - 1
                      , m = n(u)
                      , b = s(c.concat([h, l, c.alloc(1, 1), e], p), a(m, p))
                      , g = s(m, a(b, u));
                    return new f(c.concat([c.alloc(1), g, b], r))
                }(p, e);
            else if (1 === d)
                l = function(t, e, r) {
                    var i, o = e.length, a = t.modulus.byteLength();
                    if (o > a - 11)
                        throw new Error("message too long");
                    i = r ? c.alloc(a - o - 3, 255) : function(t) {
                        var e, r = c.allocUnsafe(t), i = 0, o = n(2 * t), a = 0;
                        for (; i < t; )
                            a === o.length && (o = n(2 * t),
                            a = 0),
                            (e = o[a++]) && (r[i++] = e);
                        return r
                    }(a - o - 3);
                    return new f(c.concat([c.from([0, r ? 1 : 2]), i, c.alloc(1), e], a))
                }(p, e, o);
            else {
                if (3 !== d)
                    throw new Error("unknown padding");
                if ((l = new f(e)).cmp(p.modulus) >= 0)
                    throw new Error("data too long for modulus")
            }
            return o ? u(l, p) : h(l, p)
        }
    }
    )),
    o.register("YDCwH", (function(t, e) {
        var r = o("1O6Be")
          , n = o("5Xfjk").Buffer;
        function i(t) {
            var e = n.allocUnsafe(4);
            return e.writeUInt32BE(t, 0),
            e
        }
        t.exports = function(t, e) {
            for (var o, a = n.alloc(0), s = 0; a.length < e; )
                o = i(s++),
                a = n.concat([a, r("sha1").update(t).update(o).digest()]);
            return a.slice(0, e)
        }
    }
    )),
    o.register("5CGj9", (function(t, e) {
        t.exports = function(t, e) {
            for (var r = t.length, n = -1; ++n < r; )
                t[n] ^= e[n];
            return t
        }
    }
    )),
    o.register("4PoW1", (function(t, e) {
        var r = o("76R5V")
          , n = o("5Xfjk").Buffer;
        t.exports = function(t, e) {
            return n.from(t.toRed(r.mont(e.modulus)).redPow(new r(e.publicExponent)).fromRed().toArray())
        }
    }
    )),
    o.register("2btEm", (function(t, e) {
        var r = o("1sSrw")
          , n = o("YDCwH")
          , i = o("5CGj9")
          , a = o("76R5V")
          , s = o("4iOFY")
          , f = o("1O6Be")
          , h = o("4PoW1")
          , u = o("5Xfjk").Buffer;
        t.exports = function(t, e, o) {
            var c;
            c = t.padding ? t.padding : o ? 1 : 4;
            var d, l = r(t), p = l.modulus.byteLength();
            if (e.length > p || new a(e).cmp(l.modulus) >= 0)
                throw new Error("decryption error");
            d = o ? h(new a(e), l) : s(e, l);
            var m = u.alloc(p - d.length);
            if (d = u.concat([m, d], p),
            4 === c)
                return function(t, e) {
                    var r = t.modulus.byteLength()
                      , o = f("sha1").update(u.alloc(0)).digest()
                      , a = o.length;
                    if (0 !== e[0])
                        throw new Error("decryption error");
                    var s = e.slice(1, a + 1)
                      , h = e.slice(a + 1)
                      , c = i(s, n(h, a))
                      , d = i(h, n(c, r - a - 1));
                    if (function(t, e) {
                        t = u.from(t),
                        e = u.from(e);
                        var r = 0
                          , n = t.length;
                        t.length !== e.length && (r++,
                        n = Math.min(t.length, e.length));
                        var i = -1;
                        for (; ++i < n; )
                            r += t[i] ^ e[i];
                        return r
                    }(o, d.slice(0, a)))
                        throw new Error("decryption error");
                    var l = a;
                    for (; 0 === d[l]; )
                        l++;
                    if (1 !== d[l++])
                        throw new Error("decryption error");
                    return d.slice(l)
                }(l, d);
            if (1 === c)
                return function(t, e, r) {
                    var n = e.slice(0, 2)
                      , i = 2
                      , o = 0;
                    for (; 0 !== e[i++]; )
                        if (i >= e.length) {
                            o++;
                            break
                        }
                    var a = e.slice(2, i - 1);
                    ("0002" !== n.toString("hex") && !r || "0001" !== n.toString("hex") && r) && o++;
                    a.length < 8 && o++;
                    if (o)
                        throw new Error("decryption error");
                    return e.slice(i)
                }(0, d, o);
            if (3 === c)
                return d;
            throw new Error("unknown padding")
        }
    }
    )),
    o.register("6tbxE", (function(e, n) {
        var i, a;
        t(e.exports, "randomFill", (()=>a), (t=>a = t)),
        t(e.exports, "randomFillSync", (()=>i), (t=>i = t));
        var s = o("67ZL8");
        function f() {
            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
        }
        var h = o("5Xfjk")
          , u = (o("6DQjm"),
        h.Buffer)
          , c = h.kMaxLength
          , d = r.crypto || r.msCrypto
          , l = Math.pow(2, 32) - 1;
        function p(t, e) {
            if ("number" != typeof t || t != t)
                throw new TypeError("offset must be a number");
            if (t > l || t < 0)
                throw new TypeError("offset must be a uint32");
            if (t > c || t > e)
                throw new RangeError("offset out of range")
        }
        function m(t, e, r) {
            if ("number" != typeof t || t != t)
                throw new TypeError("size must be a number");
            if (t > l || t < 0)
                throw new TypeError("size must be a uint32");
            if (t + e > r || t > c)
                throw new RangeError("buffer too small")
        }
        function b(t, e, r, n) {
            var i = t.buffer
              , o = new Uint8Array(i,e,r);
            if (d.getRandomValues(o),
            !n)
                return t;
            s.nextTick((function() {
                n(null, t)
            }
            ))
        }
        d && d.getRandomValues ? (a = function(t, e, n, i) {
            if (!(u.isBuffer(t) || t instanceof r.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            if ("function" == typeof e)
                i = e,
                e = 0,
                n = t.length;
            else if ("function" == typeof n)
                i = n,
                n = t.length - e;
            else if ("function" != typeof i)
                throw new TypeError('"cb" argument must be a function');
            return p(e, t.length),
            m(n, e, t.length),
            b(t, e, n, i)
        }
        ,
        i = function(t, e, n) {
            void 0 === e && (e = 0);
            if (!(u.isBuffer(t) || t instanceof r.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            p(e, t.length),
            void 0 === n && (n = t.length - e);
            return m(n, e, t.length),
            b(t, e, n)
        }
        ) : (a = f,
        i = f)
    }
    )),
    "undefined" == typeof importScripts ? o("617MK") : o("330vN")
}();
