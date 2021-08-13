(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-07dd5348"], {
    "0595": function(e, t, n) {
        "use strict";
        n("0d18")
    },
    "0d18": function(e, t, n) {},
    1742: function(e, t, n) {},
    "35ac": function(e, t, n) {},
    3724: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "player-wrap"
            }, [e.loading ? n("div", {
                staticClass: "player-loading"
            }, [e._v("视频加载中...")]) : e._e(), e._v(" "), e.rtcStream ? [e.controls ? [n("video", {
                attrs: {
                    autoplay: "",
                    controls: "",
                    controlslist: "nodownload nofullscreen noremoteplayback",
                    disablePictureInPicture: ""
                },
                domProps: {
                    srcObject: e.rtcStream
                }
            })] : [n("video", {
                attrs: {
                    autoplay: ""
                },
                domProps: {
                    srcObject: e.rtcStream
                }
            })]] : e._e()], 2)
        }
          , s = []
          , i = (n("96cf"),
        n("3b8d"))
          , c = n("4ec3")
          , o = {
            name: "WebrtcPlayer",
            rtcPeerConnection: null,
            data: function() {
                return {
                    iceConnectionState: "",
                    rtcPeerConnectionInit: !1,
                    rtcStream: null,
                    loading: !0
                }
            },
            props: {
                streamPath: {
                    type: String,
                    default: ""
                },
                controls: {
                    type: Boolean,
                    default: !0
                }
            },
            created: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.initRtcPeerConnection();
                            case 2:
                                if (console.log("initRtcPeerConnectioned"),
                                !this.streamPath) {
                                    e.next = 10;
                                    break
                                }
                                return this.loading = !0,
                                e.next = 7,
                                this.play(this.streamPath);
                            case 7:
                                this.loading = !1,
                                console.log("played"),
                                this.$emit("doPlayed");
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )));
                function t() {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            methods: {
                initRtcPeerConnection: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, r = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = new RTCPeerConnection,
                                    t.addTransceiver("audio", {
                                        direction: "recvonly"
                                    }),
                                    t.addTransceiver("video", {
                                        direction: "recvonly"
                                    }),
                                
                                    t.onsignalingstatechange = function(e) {
                                        console.log("onsignalingstatechange", e)
                                    }
                                    ,
                                    t.oniceconnectionstatechange = function(e) {
                                        console.log("oniceconnectionstatechange", t.iceConnectionState)
                                    }
                                    ,
                                    t.onicecandidate = function(e) {
                                        console.log("onicecandidate", e)
                                    }
                                    ,
                                    t.ontrack = function(e) {
                                        console.log("ontrack", e),
                                        "video" === e.track.kind && (r.rtcStream = e.streams[0])
                                    }
                                    ,
                                    e.next = 9,
                                    t.createOffer();
                                case 9:
                                    return n = e.sent,
                                    e.next = 12,
                                    t.setLocalDescription(n);
                                case 12:
                                    this.rtcPeerConnectionInit = !0,
                                    this.$options.rtcPeerConnection = t;
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                play: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                        var n, r, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = this.$options.rtcPeerConnection,
                                    r = n.localDescription.toJSON(),
                                    e.prev = 2,
                                    e.next = 5,
                                    Object(c["n"])(t, r);
                                case 5:
                                    if (s = e.sent,
                                    console.log(s),
                                    !s.errmsg) {
                                        e.next = 11;
                                        break
                                    }
                                    return this.$message({
                                        type: "error",
                                        message: s.errmsg
                                    }),
                                    this.close(),
                                    e.abrupt("return");
                                case 11:
                                    n.setRemoteDescription(new RTCSessionDescription({
                                        type: 'answer',
                                        sdp: s.sdp
                                    })),
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14,
                                    e.t0 = e["catch"](2),
                                    console.error(e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[2, 14]])
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                close: function() {
                    var e = this.$options.rtcPeerConnection;
                    e && e.close()
                }
            },
            destroyed: function() {
                this.close()
            }
        }
          , a = o
          , l = n("2877")
          , u = Object(l["a"])(a, r, s, !1, null, "1871937e", null);
        t["a"] = u.exports
    },
    "3e19": function(e, t, n) {
        "use strict";
        n("35ac")
    },
    "7fa6": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "app-container"
            }, [n("el-row", {
                attrs: {
                    gutter: 10
                }
            }, [n("el-col", {
                attrs: {
                    span: 6
                }
            }, [n("el-input", {
                staticStyle: {
                    "margin-bottom": "10px"
                },
                attrs: {
                    size: "mini",
                    placeholder: "搜索关键词"
                },
                model: {
                    value: e.searchKey,
                    callback: function(t) {
                        e.searchKey = t
                    },
                    expression: "searchKey"
                }
            }), e._v(" "), n("el-tree", {
                staticClass: "tree-block",
                attrs: {
                    "node-key": "uuid",
                    data: e.treeListFilter,
                    "default-expanded-keys": e.treeListFilterKeys,
                    props: {
                        children: "children",
                        label: "label"
                    }
                },
                on: {
                    "node-click": e.onTreeNodeSelect
                }
            })], 1), e._v(" "), n("el-col", {
                attrs: {
                    span: 12
                }
            }, [n("div", {
                staticClass: "btn-group"
            }, [n("el-button-group", [n("el-button", {
                attrs: {
                    type: e.oneScreen ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.onChangeShowType(e.SCREEN_NUM.one)
                    }
                }
            }, [e._v("单屏")]), e._v(" "), n("el-button", {
                attrs: {
                    type: e.fourScreen ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.onChangeShowType(e.SCREEN_NUM.four)
                    }
                }
            }, [e._v("四分屏")]), e._v(" "), n("el-button", {
                attrs: {
                    type: e.nineScreen ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.onChangeShowType(e.SCREEN_NUM.nine)
                    }
                }
            }, [e._v("九分屏")]), e._v(" "), e.isSupportFullscreen ? n("el-button", {
                staticClass: "fullscreen-btn",
                attrs: {
                    icon: "el-icon-rank",
                    title: "全屏"
                },
                on: {
                    click: e.onFullscreen
                }
            }) : e._e()], 1)], 1), e._v(" "), n("div", {
                ref: "fullscreenDom",
                staticClass: "screen-block"
            }, [n("el-row", {
                staticStyle: {
                    height: "100%"
                }
            }, [e.oneScreen ? [n("el-col", {
                staticStyle: {
                    height: "100%"
                },
                attrs: {
                    span: 24
                }
            }, [n("div", {
                staticClass: "screen-item",
                class: {
                    selected: 1 === e.selectIndex
                },
                on: {
                    click: function(t) {
                        return e.onSelectItem(1)
                    }
                }
            }, [e.screenList[0] ? [n("player", {
                key: e.screenList[0].uuid,
                attrs: {
                    screen: e.screenList[0],
                    type: e.playType
                }
            })] : [n("p", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [e._v("无信号")])]], 2)])] : e.fourScreen ? [e._l(4, (function(t) {
                return [n("el-col", {
                    staticStyle: {
                        height: "50%"
                    },
                    attrs: {
                        span: 12
                    }
                }, [n("div", {
                    staticClass: "screen-item",
                    class: {
                        selected: e.selectIndex === t
                    },
                    on: {
                        click: function(n) {
                            return e.onSelectItem(t)
                        }
                    }
                }, [e.screenList[t - 1] ? n("player", {
                    key: e.screenList[t - 1].uuid,
                    attrs: {
                        screen: e.screenList[t - 1],
                        type: e.playType
                    }
                }) : [n("p", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [e._v("无信号")])]], 2)])]
            }
            ))] : e.nineScreen ? [e._l(9, (function(t) {
                return [n("el-col", {
                    staticStyle: {
                        height: "33.33%"
                    },
                    attrs: {
                        span: 8
                    }
                }, [n("div", {
                    staticClass: "screen-item",
                    class: {
                        selected: e.selectIndex === t
                    },
                    on: {
                        click: function(n) {
                            return e.onSelectItem(t)
                        }
                    }
                }, [e.screenList[t - 1] ? n("player", {
                    key: e.screenList[t - 1].uuid,
                    attrs: {
                        screen: e.screenList[t - 1],
                        type: e.playType
                    }
                }) : [n("p", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [e._v("无信号")])]], 2)])]
            }
            ))] : e.sixteenScreen ? [e._l(16, (function(t) {
                return [n("el-col", {
                    staticStyle: {
                        height: "25%"
                    },
                    attrs: {
                        span: 6
                    }
                }, [n("div", {
                    staticClass: "screen-item",
                    class: {
                        selected: e.selectIndex === t
                    },
                    on: {
                        click: function(n) {
                            return e.onSelectItem(t)
                        }
                    }
                }, [e.screenList[t - 1] ? n("player", {
                    key: e.screenList[t - 1].uuid,
                    attrs: {
                        screen: e.screenList[t - 1],
                        type: e.playType
                    }
                }) : [n("p", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [e._v("无信号")])]], 2)])]
            }
            ))] : e._e()], 2)], 1), e._v(" "), !e.oneScreen && e.gb28181ChannelList.length > 0 ? n("div", {
                staticStyle: {
                    "text-align": "center",
                    "margin-top": "10px"
                }
            }, [n("pagination", {
                attrs: {
                    "current-page": 0,
                    "page-size": e.screenPageSize,
                    total: e.gb28181ChannelList.length
                },
                on: {
                    "current-change": e.onCurrentChange
                }
            })], 1) : e._e()]), e._v(" "), n("el-col", {
                attrs: {
                    span: 6
                }
            }, [n("div", {
                staticClass: "operation-block"
            }, [e.currentSelectItem ? [n("ptz-cmd", {
                attrs: {
                    "temp-item": e.currentSelectItem
                },
                on: {
                    "update:tempItem": function(t) {
                        e.currentSelectItem = t
                    },
                    "update:temp-item": function(t) {
                        e.currentSelectItem = t
                    }
                }
            })] : e._e()], 2)])], 1)], 1)
        }
          , s = []
          , i = (n("8e6e"),
        n("456d"),
        n("ac6a"),
        n("bd86"))
          , c = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "el-pagination is-background"
            }, [n("ul", {
                staticClass: "el-pager",
                on: {
                    click: e.onPagerClick
                }
            }, [e.pageCount > 0 ? n("li", {
                staticClass: "number",
                class: {
                    active: 1 === e.currentPage,
                    disabled: e.disabled
                }
            }, [e._v("1\n    ")]) : e._e(), e._v(" "), e.showPrevMore ? n("li", {
                staticClass: "el-icon more btn-quickprev",
                class: [e.quickprevIconClass, {
                    disabled: e.disabled
                }],
                on: {
                    mouseenter: function(t) {
                        return e.onMouseenter("left")
                    },
                    mouseleave: function(t) {
                        e.quickprevIconClass = "el-icon-more"
                    }
                }
            }) : e._e(), e._v(" "), e._l(e.pagers, (function(t) {
                return n("li", {
                    key: t,
                    staticClass: "number",
                    class: {
                        active: e.currentPage === t,
                        disabled: e.disabled
                    }
                }, [e._v(e._s(t) + "\n    ")])
            }
            )), e._v(" "), e.showNextMore ? n("li", {
                staticClass: "el-icon more btn-quicknext",
                class: [e.quicknextIconClass, {
                    disabled: e.disabled
                }],
                on: {
                    mouseenter: function(t) {
                        return e.onMouseenter("right")
                    },
                    mouseleave: function(t) {
                        e.quicknextIconClass = "el-icon-more"
                    }
                }
            }) : e._e(), e._v(" "), e.pageCount > 1 ? n("li", {
                staticClass: "number",
                class: {
                    active: e.currentPage === e.pageCount,
                    disabled: e.disabled
                }
            }, [e._v(e._s(e.pageCount) + "\n    ")]) : e._e()], 2)])
        }
          , o = []
          , a = (n("c5f6"),
        {
            name: "Pagination",
            props: {
                currentPage: Number,
                pageSize: Number,
                total: Number,
                pagerCount: Number,
                disabled: Boolean
            },
            watch: {
                showPrevMore: function(e) {
                    e || (this.quickprevIconClass = "el-icon-more")
                },
                showNextMore: function(e) {
                    e || (this.quicknextIconClass = "el-icon-more")
                }
            },
            methods: {
                onPagerClick: function(e) {
                    var t = e.target;
                    if ("UL" !== t.tagName && !this.disabled) {
                        var n = Number(e.target.textContent)
                          , r = this.pageCount
                          , s = this.currentPage
                          , i = this.pagerCount - 2;
                        -1 !== t.className.indexOf("more") && (-1 !== t.className.indexOf("quickprev") ? n = s - i : -1 !== t.className.indexOf("quicknext") && (n = s + i)),
                        isNaN(n) || (n < 1 && (n = 1),
                        n > r && (n = r)),
                        this.$emit("current-change", n)
                    }
                },
                onMouseenter: function(e) {
                    this.disabled || ("left" === e ? this.quickprevIconClass = "el-icon-d-arrow-left" : this.quicknextIconClass = "el-icon-d-arrow-right")
                }
            },
            computed: {
                pagers: function() {
                    var e = this.pagerCount
                      , t = (e - 1) / 2
                      , n = Number(this.currentPage)
                      , r = Number(this.pageCount)
                      , s = !1
                      , i = !1;
                    r > e && (n > e - t && (s = !0),
                    n < r - t && (i = !0));
                    var c = [];
                    if (s && !i)
                        for (var o = r - (e - 2), a = o; a < r; a++)
                            c.push(a);
                    else if (!s && i)
                        for (var l = 2; l < e; l++)
                            c.push(l);
                    else if (s && i)
                        for (var u = Math.floor(e / 2) - 1, p = n - u; p <= n + u; p++)
                            c.push(p);
                    else
                        for (var d = 2; d < r; d++)
                            c.push(d);
                    return this.showPrevMore = s,
                    this.showNextMore = i,
                    c
                },
                pageCount: function() {
                    return "number" === typeof this.total ? Math.max(1, Math.ceil(this.total / this.pageSize)) : null
                }
            },
            data: function() {
                return {
                    current: null,
                    showPrevMore: !1,
                    showNextMore: !1,
                    quicknextIconClass: "el-icon-more",
                    quickprevIconClass: "el-icon-more"
                }
            }
        })
          , l = a
          , u = n("2877")
          , p = Object(u["a"])(l, c, o, !1, null, null, null)
          , d = p.exports
          , h = n("93bf")
          , f = n.n(h)
          , v = n("2f62")
          , m = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "player-wrap"
            //}, [e.stream ? ["webrtc" === e.type ? n("webrtc-player", {
            }, [e.stream ? [true ? n("webrtc-player", {
                attrs: {
                    "stream-path": e.stream
                }
            }) : n("jessibuca-player", {
                attrs: {
                    "stream-path": e.stream
                }
            })] : n("div", {
                staticClass: "player-wrap-loading"
            }, [e._v("\n    加载中...\n  ")])], 2)
        }
          , b = []
          , g = n("3724")
          , y = n("a7ca")
          , w = n("4ec3");
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    Object(i["a"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var x = {
            name: "Player",
            components: {
                JessibucaPlayer: y["a"],
                WebrtcPlayer: g["a"]
            },
            props: {
                screen: {
                    type: Object,
                    default: function() {
                        return {
                            id: "",
                            deviceId: "",
                            label: ""
                        }
                    }
                },
                type: {
                    type: String,
                    default: "jessibuca"
                }
            },
            computed: z({}, Object(v["b"])({
                autoInvite: function(e) {
                    return e.gb28181AutoInvite
                }
            })),
            data: function() {
                return {
                    stream: ""
                }
            },
            created: function() {
                this.init()
            },
            methods: {
                init: function() {
                    //this.autoInvite ? this.handleInvite() : this.doInvite()
                    true? this.handleInvite() : this.doInvite()
                },
                doInvite: function() {
                    var e = this
                      , t = {
                        id: this.screen.id,
                        channel: this.screen.deviceId
                    };
                    Object(w["o"])(t).then((function() {
                        e.handleInvite()
                    }
                    )).catch((function(t) {
                        e.handleInvite()
                    }
                    ))
                },
                handleInvite: function() {
                    var e = this;
                    this.$nextTick((function() {
                       // e.screen.liveSubSP ? e.stream = e.screen.liveSubSP : e.stream = e.screen.id + "/" + e.screen.deviceId
                       e.screen.liveSubSP ? e.stream = e.screen.liveSubSP : e.stream = e.screen.id 
                    }
                    ))
                },
                bye: function() {
                    this.autoInvite || Object(w["b"])({
                        id: this.screen.id,
                        channel: this.screen.deviceId
                    })
                }
            },
            destroyed: function() {
                this.bye()
            }
        }
          , P = x
          , S = (n("0595"),
        Object(u["a"])(P, m, b, !1, null, "6475dbf0", null))
          , O = S.exports
          , k = n("d7f4")
          , _ = n("ed08");
        function j(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(n), !0).forEach((function(t) {
                    Object(i["a"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var L = {
            one: "one",
            four: "four",
            nine: "nine",
            sixteen: "sixteen"
        }
          , N = {
            one: 1,
            four: 4,
            nine: 9,
            sixteen: 16
        };
        function M() {
            for (var e = [], t = 0; t < 16; t++)
                e.push(null);
            return e
        }
        var T = {
            name: "screen",
            components: {
                Player: O,
                PtzCmd: k["a"],
                Pagination: d
            },
            data: function() {
                return {
                    searchKey: "",
                    showType: L.one,
                    SCREEN_NUM: L,
                    selectIndex: 1,
                    treeList: [],
                    screenList: M(),
                    isSupportFullscreen: f.a.isEnabled,
                    playType: "jessibuca"
                }
            },
            watch: {
                gb28181List: {
                    handler: function(e) {
                        0 === this.treeList.length && (this.treeList = e.filter((function(e) {
                            return e.children.length
                        }
                        )))
                    },
                    immediate: !0
                }
            },
            created: function() {
                var e = this.$route.query.type;
                e && (this.playType = e)
            },
            computed: I(I({}, Object(v["b"])({
                gb28181List: function(e) {
                    return e.Gb28181List.map((function(e, t) {
                        var n = {
                            uuid: Object(_["m"])(),
                            id: e.ID,
                            label: e.ID,
                            children: []
                        }
                          , r = n.children.length;
                        return n.children = (e.Channels || []).map((function(n, s) {
                            var i = {
                                uuid: Object(_["m"])(),
                                id: e.ID,
                                deviceId: n.DeviceID,
                                liveSubSP: n.LiveSubSP,
                                label: n.Name,
                                isChannel: !0,
                                _index: t * r + s
                            };
                            return i
                        }
                        )),
                        n
                    }
                    ))
                },
                gb28181ChannelList: function(e) {
                    return e.Gb28181ChannelList.map((function(e, t) {
                        var n = {
                            uuid: Object(_["m"])(),
                            id: e.device.ID,
                            deviceId: e.DeviceID,
                            liveSubSP: e.LiveSubSP,
                            label: e.Name,
                            isChannel: !0,
                            _index: t
                        };
                        return n
                    }
                    ))
                }
            })), {}, {
                treeListFilter: function() {
                    var e = []
                      , t = this.searchKey.trim();
                    return t ? this.treeList.forEach((function(n) {
                        var r = {
                            uuid: n.uuid,
                            id: n.id,
                            label: n.label,
                            children: []
                        };
                        n.children.forEach((function(e) {
                            -1 !== e.label.indexOf(t) && r.children.push(e)
                        }
                        )),
                        r.children.length > 0 && e.push(r)
                    }
                    )) : e = this.treeList,
                    e
                },
                treeListFilterKeys: function() {
                    var e = []
                      , t = this.searchKey.trim();
                    return t && (e = this.treeListFilter.map((function(e) {
                        return e.uuid
                    }
                    ))),
                    e
                },
                oneScreen: function() {
                    return this.showType === L.one
                },
                fourScreen: function() {
                    return this.showType === L.four
                },
                nineScreen: function() {
                    return this.showType === L.nine
                },
                sixteenScreen: function() {
                    return this.showType === L.sixteen
                },
                currentSelectItem: function() {
                    return this.screenList[this.selectIndex - 1]
                },
                screenPageSize: function() {
                    return N[this.showType]
                }
            }),
            methods: {
                onSelectItem: function(e) {
                    this.selectIndex = e
                },
                onTreeNodeSelect: function(e) {
                    e.isChannel && this.selectIndex && (this.screenList.splice(this.selectIndex - 1, 1, e),
                    this.nextSelectIndex())
                },
                onChangeShowType: function(e) {
                    this.showType = e,
                    this.selectIndex = 1,
                    this.screenList = M()
                },
                nextSelectIndex: function() {
                    var e = {
                        one: 1,
                        four: 4,
                        nine: 9,
                        sixteen: 16
                    };
                    this.selectIndex < e[this.showType] ? this.selectIndex += 1 : this.selectIndex = 1
                },
                onFullscreen: function() {
                    var e = this.$refs.fullscreenDom;
                    e && (this.selectIndex = 0,
                    f.a.request(e))
                },
                onCurrentChange: function(e) {
                    this.updateSelectScreen(e)
                },
                updateSelectScreen: function(e) {
                    var t = this;
                    this.screenList = M();
                    var n = this.gb28181ChannelList.slice((e - 1) * this.screenPageSize, e * this.screenPageSize);
                    n.length > 0 && (this.selectIndex = 1,
                    n.forEach((function(e) {
                        t.$nextTick((function() {
                            t.onTreeNodeSelect(e)
                        }
                        ))
                    }
                    )),
                    this.selectIndex = 1)
                }
            }
        }
          , D = T
          , $ = (n("3e19"),
        Object(u["a"])(D, r, s, !1, null, "437945d4", null));
        t["default"] = $.exports
    },
    "88a2": function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "b", (function() {
                return a
            }
            )),
            n.d(t, "a", (function() {
                return r
            }
            ));
            n("6b54");
            var r = {
                stop: "stop",
                right: "right",
                left: "left",
                up: "up",
                down: "down",
                leftUp: "leftUp",
                leftDown: "leftDown",
                rightUp: "rightUp",
                rightDown: "rightDown",
                zoomFar: "zoomFar",
                zoomNear: "zoomNear",
                apertureFar: "apertureFar",
                apertureNear: "apertureNear",
                focusFar: "focusFar",
                focusNear: "focusNear",
                setPos: "setPos",
                calPos: "calPos",
                delPos: "delPos",
                wiperOpen: "wiperOpen",
                wiperClose: "wiperClose"
            }
              , s = {
                stop: 0,
                right: 1,
                left: 2,
                up: 8,
                down: 4,
                leftUp: 10,
                leftDown: 6,
                rightUp: 9,
                rightDown: 5,
                zoomFar: 16,
                zoomNear: 32,
                apertureFar: 72,
                apertureNear: 68,
                focusFar: 66,
                focusNear: 65,
                wiperOpen: 140,
                wiperClose: 141,
                setPos: 129,
                calPos: 130,
                delPos: 131
            }
              , i = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250]
              , c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 16]
              , o = [16, 48, 80, 112, 144, 160, 176, 192, 208, 224];
            function a(e) {
                var t, n, i, c, o = e.type, a = e.speed, h = e.index, f = l(a);
                switch (t = s[o],
                o) {
                case r.up:
                case r.down:
                case r.apertureFar:
                case r.apertureNear:
                    i = f;
                    break;
                case r.right:
                case r.left:
                case r.focusFar:
                case r.focusNear:
                    n = f;
                    break;
                case r.leftUp:
                case r.leftDown:
                case r.rightUp:
                case r.rightDown:
                    n = f,
                    i = f;
                    break;
                case r.zoomFar:
                case r.zoomNear:
                    c = u(a);
                    break;
                case r.calPos:
                case r.delPos:
                case r.setPos:
                    i = p(h);
                    break;
                case r.wiperClose:
                case r.wiperOpen:
                    n = 1;
                    break;
                default:
                    break
                }
                return d(t, n, i, c)
            }
            function l(e) {
                e = e || 5;
                var t = e - 1
                  , n = i[t] || i[4];
                return n
            }
            function u(e) {
                e = e || 5;
                var t = e - 1
                  , n = o[t] || o[4];
                return n
            }
            function p(e) {
                return c[e - 1]
            }
            function d(t, n, r, s) {
                var i = e.alloc(8);
                return i[0] = 165,
                i[1] = 15,
                i[2] = 1,
                t && (i[3] = t),
                n && (i[4] = n),
                r && (i[5] = r),
                s && (i[6] = s),
                i[7] = (i[0] + i[1] + i[2] + i[3] + i[4] + i[5] + i[6]) % 256,
                h(i)
            }
            function h(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e[n].toString(16);
                    1 === r.length && (r = "0" + r),
                    t += r.toUpperCase()
                }
                return t
            }
        }
        ).call(this, n("b639").Buffer)
    },
    a7ca: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "player-wrap"
            }, [n("div", {
                ref: "container",
                attrs: {
                    id: "container"
                }
            })])
        }
          , s = []
          , i = (n("8e6e"),
        n("ac6a"),
        n("456d"),
        n("bd86"))
          , c = n("2f62")
          , o = n("4ec3");
        n("ed08");
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function(t) {
                    Object(i["a"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var u = {
            name: "JessicaPlayer",
            jessibuca: null,
            data: function() {
                return {}
            },
            props: {
                streamPath: {
                    type: String,
                    default: ""
                }
            },
            computed: l({}, Object(c["b"])({
                plugins: function(e) {
                    return e.plugins
                }
            })),
            mounted: function() {
                this.create()
            },
            methods: {
                create: function() {
                    var e = this
                      , t = new window.Jessibuca({
                        container: this.$refs.container,
                        forceNoOffscreen: !0,
                        videoBuffer: .2,
                        loadingText: "加载中"
                    });
                    t.onLog = function(e) {
                        return console.error(e)
                    }
                    ,
                    t.hasLoaded() ? (this.play(),
                    this.$emit("doPlayed")) : t.onLoad = function() {
                        e.play(),
                        e.$emit("doPlayed")
                    }
                    ,
                    t.on("timeout", (function() {
                        console.log("timeout"),
                        e.$message({
                            type: "error",
                            message: "播放超时"
                        })
                    }
                    )),
                    this.$options.jessibuca = t
                },
                play: function() {
                    if (this.streamPath) {
                        var e = this.getJessibucaHref()
                          , t = e + this.streamPath;
                        this.$options.jessibuca && this.$options.jessibuca.play(t),
                        this.$options.jessibuca.cancelMute()
                    }
                },
                getJessibucaHref: function() {
                    var e = o["a"].jessibucaHref
                      , t = this.getJessibucaConfig();
                     // console.log("getJessibucaHref",e,location.hostname,t);
                   // return t && (t.ListenAddrTLS && "https:" === location.protocol ? e = "wss://" + location.hostname + t.ListenAddrTLS + "/jessica/" : t.ListenAddr && (e = "ws://" + location.hostname + t.ListenAddr + "/jessica/")),
                   return t && (t.ListenAddrTLS && "https:" === location.protocol ? e = "wss://" + location.hostname + t.ListenAddrTLS : t.ListenAddr && (e = "ws://" + location.hostname + t.ListenAddr )),
                    e
                },
                getJessibucaConfig: function() {
                    return this.$store.getters.getConfig("Jessica")
                }
            },
            destroyed: function() {
                this.$options.jessibuca && this.$options.jessibuca.destroy()
            }
        }
          , p = u
          , d = (n("f42d"),
        n("2877"))
          , h = Object(d["a"])(p, r, s, !1, null, "08c674f2", null);
        t["a"] = h.exports
    },
    d7f4: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "ptz-cmd-block"
            }, [n("div", {
                staticClass: "control"
            }, e._l(8, (function(t) {
                return n("svg", {
                    class: "arrow" + t,
                    attrs: {
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        width: "64",
                        height: "64"
                    },
                    on: {
                        click: function(n) {
                            return e.ptzCmdDirection(t)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M682.666667 955.733333H341.333333a17.066667 17.066667 0 0 1-17.066666-17.066666V529.066667H85.333333a17.066667 17.066667 0 0 1-12.066133-29.1328l426.666667-426.666667a17.0496 17.0496 0 0 1 24.132266 0l426.666667 426.666667A17.066667 17.066667 0 0 1 938.666667 529.066667H699.733333v409.6a17.066667 17.066667 0 0 1-17.066666 17.066666z m-324.266667-34.133333h307.2V512a17.066667 17.066667 0 0 1 17.066667-17.066667h214.801066L512 109.4656 126.532267 494.933333H341.333333a17.066667 17.066667 0 0 1 17.066667 17.066667v409.6z",
                        "p-id": "6849"
                    }
                })])
            }
            )), 0), e._v(" "), n("div", {
                staticClass: "control control2"
            }, [n("el-tooltip", {
                attrs: {
                    effect: "light",
                    content: "镜头放大",
                    placement: "top",
                    "open-delay": 200
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.zoomFar)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M994.990643 859.352971L713.884166 578.246494A381.208198 381.208198 0 0 0 767.307984 383.653992C767.307984 171.765089 595.542895 0 383.653992 0S0 171.765089 0 383.653992s171.765089 383.653992 383.653992 383.653992c71.119859 0 137.507985-19.694238 194.592502-53.423818l281.106477 281.090491a95.913498 95.913498 0 1 0 135.637672-135.621686zM383.653992 671.394486c-158.912681 0-287.740494-128.827813-287.740494-287.740494S224.741311 95.913498 383.653992 95.913498s287.740494 128.827813 287.740494 287.740494-128.827813 287.740494-287.740494 287.740494z m159.85583-335.697243h-111.899081v-111.899081a47.956749 47.956749 0 1 0-95.913498 0v111.899081h-111.899081a47.956749 47.956749 0 1 0 0 95.913498h111.899081v111.899081a47.956749 47.956749 0 1 0 95.913498 0v-111.899081h111.899081a47.956749 47.956749 0 1 0 0-95.913498z"
                }
            })])]), e._v(" "), n("el-tooltip", {
                attrs: {
                    effect: "light",
                    content: "镜头缩小",
                    placement: "top",
                    "open-delay": 200
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.zoomNear)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M994.990643 859.352971L713.884166 578.246494A381.208198 381.208198 0 0 0 767.307984 383.653992C767.307984 171.765089 595.542895 0 383.653992 0S0 171.765089 0 383.653992s171.765089 383.653992 383.653992 383.653992c71.119859 0 137.507985-19.694238 194.592502-53.423818l281.106477 281.090491a95.913498 95.913498 0 1 0 135.637672-135.621686zM383.653992 671.394486c-158.912681 0-287.740494-128.827813-287.740494-287.740494S224.741311 95.913498 383.653992 95.913498s287.740494 128.827813 287.740494 287.740494-128.827813 287.740494-287.740494 287.740494z m159.85583-335.697243H223.798162a47.956749 47.956749 0 1 0 0 95.913498h319.71166a47.956749 47.956749 0 1 0 0-95.913498z"
                }
            })])])], 1), e._v(" "), n("div", {
                staticClass: "control control3"
            }, [n("el-tooltip", {
                attrs: {
                    effect: "light",
                    content: "光圈缩小",
                    placement: "top",
                    "open-delay": 200
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.apertureFar)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M956.39 400.827C922.164 266.675 828.186 155.703 701.502 99.874l94.522 443.782L956.39 400.827zM206.208 189.167C106.183 286.191 56.845 424.181 72.696 562.659l351.347-309.096-217.835-64.396zM643.118 78.847a446.363 446.363 0 0 0-138.947-16.775 448.047 448.047 0 0 0-250.583 86.934l437.868 146.949-48.338-217.108zM83.786 623.979c34.443 133.772 128.248 244.407 254.583 300.291l-95.915-426.55L83.786 623.979zM969.893 496.089a372.746 372.746 0 0 0-2.37-34.138l-329.972 303.78 196.157 69.256c91.522-88.456 141.056-211.704 136.185-338.898zM396.862 945.166a447.857 447.857 0 0 0 139.077 16.766 447.784 447.784 0 0 0 250.322-86.718L349.286 733.05l47.576 212.116z"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    fill: "#333333",
                    d: "M397.253 471.171h245.668c22.593 0 40.923 18.32 40.923 40.913 0 22.592-18.33 40.922-40.923 40.922H397.253c-22.592 0-40.922-18.33-40.922-40.922 0-22.593 18.33-40.913 40.922-40.913z"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    fill: "#333333",
                    d: "M479.17 634.879V389.21c0-22.593 18.32-40.923 40.913-40.923s40.923 18.33 40.923 40.923v245.668c0 22.592-18.33 40.922-40.923 40.922s-40.913-18.329-40.913-40.921z"
                }
            })])]), e._v(" "), n("el-tooltip", {
                attrs: {
                    effect: "light",
                    content: "光圈放大",
                    placement: "top",
                    "open-delay": 200
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.apertureNear)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M956.39 400.827C922.164 266.675 828.186 155.703 701.502 99.874l94.522 443.782L956.39 400.827z m-750.182-211.66C106.183 286.191 56.845 424.181 72.696 562.659l351.347-309.096-217.835-64.396z m436.91-110.32a446.363 446.363 0 0 0-138.947-16.775 448.047 448.047 0 0 0-250.583 86.934l437.868 146.949-48.338-217.108zM83.786 623.979c34.443 133.772 128.248 244.407 254.583 300.291l-95.915-426.55L83.786 623.979z m886.107-127.89a372.746 372.746 0 0 0-2.37-34.138l-329.972 303.78 196.157 69.256c91.522-88.456 141.056-211.704 136.185-338.898zM396.862 945.166a447.857 447.857 0 0 0 139.077 16.766 447.784 447.784 0 0 0 250.322-86.718L349.286 733.05l47.576 212.116z m0.391-474.039h245.668c22.593 0 40.923 18.32 40.923 40.912 0 22.593-18.33 40.923-40.923 40.923H397.253c-22.592 0-40.922-18.33-40.922-40.923 0-22.592 18.33-40.912 40.922-40.912z"
                }
            })])])], 1), e._v(" "), n("div", {
                staticClass: "control control4"
            }, [n("el-tooltip", {
                attrs: {
                    effect: "light",
                    content: "聚焦近",
                    placement: "top",
                    "open-delay": 200
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.focusFar)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M849.07153297 646.81872559c9.30432153 0 17.26391602 3.30249 23.82934617 9.88769507 6.60992408 6.59509253 9.88769508 14.52502465 9.88769508 23.79473901v101.14617896c0 27.90801978-9.87780761 51.70275879-29.61364722 71.47814965-19.75067115 19.77539086-43.56518578 29.66308594-71.48803711 29.66308594h-101.1165166c-9.32409644 0-17.25402856-3.29754663-23.83428954-9.9865725-6.59509253-6.49127173-9.90252662-14.52502465-9.90252662-23.7947383 0-9.26971435 3.30743408-17.20458984 9.90252662-23.79473901 6.58026099-6.59014916 14.51019311-9.88769508 23.83428954-9.88769507h101.1165166c9.29937744 0 17.26391602-3.29754663 23.82440137-9.88769579 6.61486816-6.59014916 9.88769508-14.52008057 9.88769579-23.89361573v-101.04235815c0-9.36859107 3.28765845-17.30346656 9.89758254-23.78979493 6.57531762-6.69396997 14.52502465-9.99151587 23.83923363-9.99151587l-0.06427025 0.09887671zM242.38726782 141.3103025h101.10168506c9.30432153 0 17.2688601 3.29754663 23.819458 9.88769578 6.62475562 6.59509253 9.89758325 14.52502465 9.89758254 23.7947383 0 9.37353516-3.27282691 17.30346656-9.89758254 23.79473901-6.5505979 6.69396997-14.51513648 9.9865725-23.81451463 9.9865725h-101.10168433c-9.31915307 0-17.2688601 3.19372583-23.82934547 9.88769508-6.62475562 6.49127173-9.91241479 14.52502465-9.91241479 23.794739v101.04235816c0 9.36859107-3.28271508 17.30346656-9.89758324 23.89361573-6.57531762 6.59014916-14.51513648 9.88769508-23.81451392 9.88769507-9.31420898 0-17.25402856-3.29754663-23.82934547-9.88769507C144.49908423 360.80230689 141.21142578 352.86743141 141.21142578 343.49884033V242.45648217c0-27.91296386 9.86792016-51.70275879 29.62353539-71.47814965 19.75067115-19.77539086 43.57507324-29.66308594 71.48803711-29.66308594h0.06426954zM174.9877932 646.81872559c9.30432153 0 17.24414039 3.30249 23.81451393 9.88769507 6.62475562 6.59509253 9.90252662 14.52502465 9.90252662 23.79473901v101.14617896c0 9.26971435 3.27282691 17.19964576 9.89758324 23.78979492 6.57531762 6.59014916 14.51513648 9.88769508 23.81451393 9.88769579h101.12640404c9.29937744 0 17.25402856 3.29754663 23.82934547 9.88769507 6.60992408 6.59014916 9.88769508 14.52502465 9.88769579 23.89361572 0 9.26971435-3.27777099 17.20458984-9.88769579 23.79473901-6.57531762 6.59014916-14.52996803 9.88769508-23.82934547 9.88769508H242.41693092c-27.91296386 0-51.71264625-9.88769508-71.47814895-29.66308594-19.75561523-19.67651344-29.62353539-43.57012915-29.62353539-71.47814965v-101.04235816c0-9.26971435 3.27282691-17.30346656 9.88769507-23.89361573 6.58026099-6.59509253 14.52502465-9.88769508 23.81451464-9.88769507h-0.02966309zM680.57037329 141.3103025h101.1165166c27.92285133 0 51.73736596 9.88769508 71.48803711 29.56420922 19.73583961 19.77539086 29.61364722 43.57012915 29.61364722 71.47814965v101.14617896c0 9.26971435-3.27777099 17.30346656-9.88769508 23.78979493-6.56542945 6.69396997-14.52502465 9.88769508-23.82934617 9.88769506-9.29937744 0-17.26391602-3.19372583-23.82440139-9.88769506-6.61486816-6.48632836-9.88769508-14.52008057-9.88769579-23.78979493V242.35266137c0-9.26971435-3.28765845-17.19964576-9.90252661-23.78979492-6.57037354-6.59509253-14.52008057-9.88769508-23.83428955-9.88769579h-101.10168433c-9.31420898 0-17.2688601-3.29754663-23.82934618-9.88769507-6.60992408-6.59509253-9.89758325-14.52502465-9.89758254-23.79473902 0-9.37353516 3.28765845-17.30346656 9.89758254-23.89361571 6.56048608-6.59014916 14.51513648-9.88769508 23.82934618-9.88769508l0.04943799 0.09887672z"
                }
            })])]), e._v(" "), n("el-tooltip", {
                attrs: {
                    effect: "light",
                    content: "聚焦远",
                    placement: "top",
                    "open-delay": 200
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.focusNear)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M512 170.666667A341.333333 341.333333 0 1 1 170.666667 512 341.333333 341.333333 0 0 1 512 170.666667m0-42.666667a384 384 0 1 0 384 384A384 384 0 0 0 512 128z"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    fill: "#333333",
                    d: "M298.666667 533.333333H170.666667a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 0 42.666666zM853.333333 533.333333h-128a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 0 42.666666zM512 320a21.333333 21.333333 0 0 1-21.333333-21.333333V170.666667a21.333333 21.333333 0 0 1 42.666666 0v128a21.333333 21.333333 0 0 1-21.333333 21.333333zM512 874.666667a21.333333 21.333333 0 0 1-21.333333-21.333334v-128a21.333333 21.333333 0 0 1 42.666666 0v128a21.333333 21.333333 0 0 1-21.333333 21.333334z"
                }
            })])])], 1), e._v(" "), n("div", {
                staticClass: "control-pos"
            }, [n("el-select", {
                attrs: {
                    size: "small",
                    placeholder: "请选择预置点"
                },
                model: {
                    value: e.ptzPositionIndex,
                    callback: function(t) {
                        e.ptzPositionIndex = t
                    },
                    expression: "ptzPositionIndex"
                }
            }, e._l(10, (function(e) {
                return n("el-option", {
                    key: e,
                    attrs: {
                        label: "预置点" + e,
                        value: e
                    }
                })
            }
            )), 1), e._v(" "), n("div", {
                staticStyle: {
                    "margin-top": "10px"
                }
            }, [n("el-button", {
                attrs: {
                    type: "primary",
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.setPos)
                    }
                }
            }, [e._v("设置")]), e._v(" "), n("el-button", {
                attrs: {
                    type: "success ",
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.calPos)
                    }
                }
            }, [e._v("调用")]), e._v(" "), n("el-button", {
                attrs: {
                    type: "danger",
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.delPos)
                    }
                }
            }, [e._v("删除")])], 1)], 1), e._v(" "), n("div", {
                staticClass: "control-speed"
            }, [e._v("\n    速度(1-10)：\n    "), n("el-input-number", {
                attrs: {
                    size: "small",
                    min: 1,
                    max: 10,
                    label: "速度"
                },
                model: {
                    value: e.ptzSpeed,
                    callback: function(t) {
                        e.ptzSpeed = t
                    },
                    expression: "ptzSpeed"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "wiper-control"
            }, [n("el-button", {
                attrs: {
                    type: "success",
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.wiperOpen)
                    }
                }
            }, [e._v("雨刷开")]), e._v(" "), n("el-button", {
                attrs: {
                    type: "danger",
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return e.ptzCmd(e.ptzType.wiperClose)
                    }
                }
            }, [e._v("雨刷关")])], 1)])
        }
          , s = []
          , i = n("88a2")
          , c = n("4ec3")
          , o = [i["a"].up, i["a"].right, i["a"].down, i["a"].left, i["a"].leftUp, i["a"].rightUp, i["a"].leftDown, i["a"].rightDown]
          , a = {
            name: "PtzCmd",
            props: {
                tempItem: {
                    type: Object
                }
            },
            data: function() {
                return {
                    ptzType: i["a"],
                    arrowTips: ["上", "右", "下", "左", "左上", "右上", "左下", "右下"],
                    ptzSpeed: 5,
                    ptzPositionIndex: 1
                }
            },
            methods: {
                ptzCmdDirection: function(e) {
                    var t = o[e - 1];
                    this.ptzCmd(t)
                },
                startPtzCmdCycle: function() {
                    this.ptzCmd(i["a"].right, !0)
                },
                stopPtzCmdCycle: function() {
                    this.ptzCmd(i["a"].stop)
                },
                ptzCmd: function(e, t) {
                    var n = {
                        type: e,
                        speed: this.ptzSpeed,
                        index: this.ptzPositionIndex,
                        cycle: t
                    }
                      , r = this.tempItem
                      , s = Object(i["b"])(n)
                      , o = Object(i["b"])({
                        type: i["a"].stop
                    });
                    Object(c["r"])({
                        id: r.id,
                        channel: r.deviceId || r.channel,
                        ptzcmd: s
                    }),
                    setTimeout((function() {
                        Object(c["r"])({
                            id: r.id,
                            channel: r.deviceId || r.channel,
                            ptzcmd: o
                        })
                    }
                    ), 500)
                }
            }
        }
          , l = a
          , u = (n("ee95"),
        n("2877"))
          , p = Object(u["a"])(l, r, s, !1, null, "926addc2", null);
        t["a"] = p.exports
    },
    ee95: function(e, t, n) {
        "use strict";
        n("f976")
    },
    f42d: function(e, t, n) {
        "use strict";
        n("1742")
    },
    f976: function(e, t, n) {}
}]);
