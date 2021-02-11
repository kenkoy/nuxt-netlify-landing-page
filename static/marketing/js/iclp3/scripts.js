! function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 1)
}([, function (t, e) {
    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var o = navigator.userAgent;
    if (-1 === o.indexOf("trident/7")) {
        var a = document.querySelectorAll('a[href^="#"]');
        Array.prototype.forEach.call(a, (function (t) {
            t.addEventListener("click", (function () {
                var e, i, n, o, a, r = document.querySelectorAll(t.getAttribute("href"))[0],
                    l = 0;
                window.innerWidth < 768 && (l = 0), Velocity(document.querySelector("html"), {
                    scrollTop: (e = r, i = e.getBoundingClientRect(), n = i.left, o = i.top, a = document.body.getBoundingClientRect(), {
                        left: n - a.left,
                        top: o - a.top
                    }).top + l + "px"
                }, {
                    duration: 750,
                    easing: "ease-in-out"
                })
            }))
        }))
    }
    window.oiran = new spine.SpinePlayer("player", {
        jsonUrl: "/marketing/js/iclp3/assets/S_103_CHA_cosA.json",
        atlasUrl: "/marketing/js/iclp3/assets/S_103_CHA_cosA.atlas",
        animation: "00_idle_v1",
        alpha: !0,
        backgroundColor: "#00000000",
        showControls: !1,
        skin: "skin_cosA_v1",
        viewport: {
            animations: {
                "00_idle_v1": {
                    x: 0,
                    y: 0,
                    width: 1100,
                    height: 550,
                    padLeft: "100%",
                    padTop: "0px"
                },
                "01_tap_2_v1": {
                    x: 0,
                    y: 0,
                    width: 1050,
                    height: 550,
                    padLeft: "100%",
                    padTop: "0px"
                },
                "02_levup_v1": {
                    x: 50,
                    y: -50,
                    width: 1100,
                    height: 550,
                    padLeft: "100%",
                    padRight: "0px",
                    padTop: "0px",
                    padBottom: "0px"
                },
                "03_levup_v1": {
                    x: 60,
                    y: -70,
                    width: 1100,
                    height: 550,
                    padLeft: "100%",
                    padRight: "0px",
                    padTop: "0px",
                    padBottom: "0px"
                },
                "10_finish_in": {
                    x: 280,
                    y: -1300,
                    width: 2200,
                    height: 1500,
                    padLeft: "100%",
                    padRight: "0px",
                    padTop: "0px",
                    padBottom: "0px"
                }
            }
        }
    });
    var r = document.getElementById("firstview"),
        l = !1,
        s = 0,
        d = !1;
    window.back = function () {
        document.body.classList.remove("fin")
    };
    var c = function () {
        d || (clearTimeout(l), oiran.setAnimation("01_tap_2_v1"), r.classList.add("click"), l = setTimeout((function () {
            oiran.setAnimation("00_idle_v1")
        }), 500), s++), 5 != s || d || (clearTimeout(l), d = !0, oiran.setAnimation("02_levup_v1"), setTimeout((function () {
            var t = oiran.skeleton.data.findSkin("skin_cosA_v2");
            oiran.skeleton.setSkin(t), oiran.setAnimation("00_idle_v1"), d = !1
        }), 1130)), 10 != s || d || (clearTimeout(l), d = !0, oiran.setAnimation("03_levup_v1"), setTimeout((function () {
            var t = oiran.skeleton.data.findSkin("skin_cosA_v3");
            oiran.skeleton.setSkin(t), oiran.setAnimation("00_idle_v1"), d = !1
        }), 2180)), 15 != s || d || (clearTimeout(l), d = !0, oiran.setAnimation("10_finish_in"), setTimeout((function () {
            oiran.setAnimation("00_idle_v1"), d = !1
        }), 1500), document.body.classList.add("fin")), (50 == s && !d || 100 == s && !d || 200 == s && !d || 300 == s && !d || 400 == s && !d || 500 == s && !d || 600 == s && !d || 700 == s && !d || 800 == s && !d || 900 == s && !d || 1e3 == s && !d || 2e3 == s && !d || 3e3 == s && !d || 4e3 == s && !d || 5e3 == s && !d || 6e3 == s && !d || 7e3 == s && !d || 8e3 == s && !d || 9e3 == s && !d) && (clearTimeout(l), d = !0, oiran.setAnimation("02_levup_v1"), setTimeout((function () {
            oiran.setAnimation("00_idle_v1"), d = !1
        }), 1130)), 9999 != s || d || (clearTimeout(l), d = !0, oiran.setAnimation("10_finish_in"), setTimeout((function () {
            oiran.setAnimation("00_idle_v1")
        }), 1500), document.body.classList.add("last"))
    },
        u = document.getElementById("cvs"),
        h = u.getContext("2d"),
        m = [],
        p = new Image;
    // p.src = "https://files.vjpromo.com/bannerflow/oiranslot/ic/10/assets/images/heart.png";
    p.src = "/marketing/img/iclp3/heart.png";
    var f = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                o = arguments.length > 2 ? arguments[2] : void 0;
            i(this, t), this.x = e, this.y = n, this.globalAlpha = 0;
            var a = window.innerWidth;
            a < 768 && (this.y = n + (window.pageYOffset || document.documentElement.scrollTop)), this.radius = 1 + Math.random(), this.angle = 360 * Math.random(), this.speed = Math.random() * o + .2, this.velocityX = Math.cos(this.angle) * this.speed, this.velocityY = Math.sin(this.angle) * this.speed, this.startTime = (new Date).getTime(), this.duration = 400, this.currentDiration = 0, this.initialVelocityX = this.velocityX, this.initialVelocityY = this.velocityY
        }
        var e, o, a;
        return e = t, (o = [{
            key: "animate",
            value: function () {
                this.currentDuration = (new Date).getTime() - this.startTime, this.currentDuration <= 350 ? (this.x += 8 * this.initialVelocityX, this.y += 8 * this.initialVelocityY, this.globalAlpha += .05) : (this.x += this.velocityX, this.y += this.velocityY, this.globalAlpha > 0 && (this.globalAlpha -= .05))
            }
        }, {
            key: "render",
            value: function () {
                h.beginPath(), h.drawImage(p, this.x - 25, this.y - 60, 60, 60), h.globalAlpha = this.globalAlpha, h.fill()
            }
        }]) && n(e.prototype, o), a && n(e, a), t
    }(),
        v = function () {
            window.innerWidth;
            u.width = window.innerWidth, u.height = 500
        };
    v(),
        function t() {
            h.clearRect(0, 0, u.width, u.height), Array.prototype.forEach.call(m, (function (t, e) {
                t.animate(), t.render(), (t.y > u.height || t.x < 0 || t.x > u.width || t.globalAlpha <= 0) && (console.log(t.globalAlpha), m.splice(e, 1))
            })), requestAnimationFrame(t)
        }();
    var y = !1;
    window.addEventListener("resize", (function () {
        y || (requestAnimationFrame((function () {
            y = !1, v()
        })), y = !0)
    }), {
        passive: !0
    });
    var g, _ = -1,
        w = ["　", "　", "　", "　"];

    function b() {
        for (var t = [(_ = ("0000" + ++_).slice(-4))[0], _[1], _[2], _[3]], e = 0; e < w.length; e++) w[e] != t[e] && T(e, w[e], t[e]);
        w = [_[0], _[1], _[2], _[3]]
    }

    function T(t, e, i) {
        var n = document.getElementsByClassName("number fliptop")[t],
            o = document.getElementsByClassName("number flipbottom")[t];
        n.style.animation = "none", o.style.animation = "none", o.innerHTML = i, n.innerHTML = e, clearTimeout(g), document.getElementsByClassName("number lower")[t].innerHTML = e, document.getElementsByClassName("back")[t].innerHTML = i, g = setTimeout((function () {
            o.style.animation = "flipb 0.5s linear forwards", n.style.animation = "flipt 0.5s linear forwards"
        }), 10), g = setTimeout((function () {
            n.innerHTML = i, document.getElementsByClassName("number lower")[t].innerHTML = i, w[t] = i
        }), 490), g
    }
    b(), window.addEventListener("click", (function (t) {
        "firstview__taparea" == t.target.classList[0] && (d || -1 === o.indexOf("Trident") && (c(), function () {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random() * u.width, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random() * u.height, i = .6, n = 0; n < 10; n++) {
                var o = new f(t, e, i);
                m.push(o)
            }
        }(t.clientX, t.clientY), b()))
    })), -1 !== o.indexOf("Trident") && (document.getElementById("firstview__touch").style.display = "none", document.getElementById("firstview__counter").style.display = "none")
}]);