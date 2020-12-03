!(function (t) {
  const e = {}

  function i (n) {
    if (e[n]) { return e[n].exports }
    const o = e[n] = {
      i: n,
      l: !1,
      exports: {}
    }
    return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
  }
  i.m = t, i.c = e, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, i.r = function (t) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: 'Module'
    }), Object.defineProperty(t, '__esModule', {
      value: !0
    })
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) { return t }
    if (4 & e && typeof t === 'object' && t && t.__esModule) { return t }
    const n = Object.create(null)
    if (i.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: t
    }), 2 & e && typeof t !== 'string') {
      for (const o in t) {
        i.d(n, o, function (e) {
          return t[e]
        }.bind(null, o))
      }
    }
    return n
  }, i.n = function (t) {
    const e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    }
    return i.d(e, 'a', e), e
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = '', i(i.s = 1)
}([, function (t, e) {
  function i (t, e) {
    if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function') }
  }

  function n (t, e) {
    for (let i = 0; i < e.length; i++) {
      const n = e[i]
      n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }
  const o = navigator.userAgent
  if (!o.includes('trident/7')) {
    const a = document.querySelectorAll('a[href^="#"]')
    Array.prototype.forEach.call(a, function (t) {
      t.addEventListener('click', function () {
        let e; let i; let n; let o; let a; const r = document.querySelectorAll(t.getAttribute('href'))[0]
        let l = 0
        window.innerWidth < 768 && (l = 0), Velocity(document.querySelector('html'), {
          scrollTop: (e = r, i = e.getBoundingClientRect(), n = i.left, o = i.top, a = document.body.getBoundingClientRect(), {
            left: n - a.left,
            top: o - a.top
          }).top + l + 'px'
        }, {
          duration: 750,
          easing: 'ease-in-out'
        })
      })
    })
  }
  window.oiran = new spine.SpinePlayer('player', {
    jsonUrl: '/marketing/js/iclp3/assets/S_103_CHA_cosA.json',
    atlasUrl: '/marketing/js/iclp3/assets/S_103_CHA_cosA.atlas',
    animation: '00_idle_v1',
    alpha: !0,
    backgroundColor: '#00000000',
    showControls: !1,
    skin: 'skin_cosA_v1',
    viewport: {
      animations: {
        '00_idle_v1': {
          x: 0,
          y: 0,
          width: 1100,
          height: 550,
          padLeft: '100%',
          padTop: '0px'
        },
        '01_tap_2_v1': {
          x: 0,
          y: 0,
          width: 1050,
          height: 550,
          padLeft: '100%',
          padTop: '0px'
        },
        '02_levup_v1': {
          x: 50,
          y: -50,
          width: 1100,
          height: 550,
          padLeft: '100%',
          padRight: '0px',
          padTop: '0px',
          padBottom: '0px'
        },
        '03_levup_v1': {
          x: 60,
          y: -70,
          width: 1100,
          height: 550,
          padLeft: '100%',
          padRight: '0px',
          padTop: '0px',
          padBottom: '0px'
        },
        '10_finish_in': {
          x: 280,
          y: -1300,
          width: 2200,
          height: 1500,
          padLeft: '100%',
          padRight: '0px',
          padTop: '0px',
          padBottom: '0px'
        }
      }
    }
  })
  const r = document.getElementById('firstview')
  let l = !1
  let s = 0
  let d = !1
  window.back = function () {
    document.body.classList.remove('fin')
  }
  const c = function () {
    d || (clearTimeout(l), oiran.setAnimation('01_tap_2_v1'), r.classList.add('click'), l = setTimeout(function () {
      oiran.setAnimation('00_idle_v1')
    }, 500), s++), s != 5 || d || (clearTimeout(l), d = !0, oiran.setAnimation('02_levup_v1'), setTimeout(function () {
      const t = oiran.skeleton.data.findSkin('skin_cosA_v2')
      oiran.skeleton.setSkin(t), oiran.setAnimation('00_idle_v1'), d = !1
    }, 1130)), s != 10 || d || (clearTimeout(l), d = !0, oiran.setAnimation('03_levup_v1'), setTimeout(function () {
      const t = oiran.skeleton.data.findSkin('skin_cosA_v3')
      oiran.skeleton.setSkin(t), oiran.setAnimation('00_idle_v1'), d = !1
    }, 2180)), s != 15 || d || (clearTimeout(l), d = !0, oiran.setAnimation('10_finish_in'), setTimeout(function () {
      oiran.setAnimation('00_idle_v1'), d = !1
    }, 1500), document.body.classList.add('fin')), (s == 50 && !d || s == 100 && !d || s == 200 && !d || s == 300 && !d || s == 400 && !d || s == 500 && !d || s == 600 && !d || s == 700 && !d || s == 800 && !d || s == 900 && !d || s == 1e3 && !d || s == 2e3 && !d || s == 3e3 && !d || s == 4e3 && !d || s == 5e3 && !d || s == 6e3 && !d || s == 7e3 && !d || s == 8e3 && !d || s == 9e3 && !d) && (clearTimeout(l), d = !0, oiran.setAnimation('02_levup_v1'), setTimeout(function () {
      oiran.setAnimation('00_idle_v1'), d = !1
    }, 1130)), s != 9999 || d || (clearTimeout(l), d = !0, oiran.setAnimation('10_finish_in'), setTimeout(function () {
      oiran.setAnimation('00_idle_v1')
    }, 1500), document.body.classList.add('last'))
  }
  const u = document.getElementById('cvs')
  const h = u.getContext('2d')
  const m = []
  const p = new Image()
  // p.src = "https://files.vjpromo.com/bannerflow/oiranslot/ic/10/assets/images/heart.png";
  p.src = '/marketing/img/iclp3/heart.png'
  const f = (function () {
    function t () {
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
      const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      const o = arguments.length > 2 ? arguments[2] : void 0
      i(this, t), this.x = e, this.y = n, this.globalAlpha = 0
      const a = window.innerWidth
      a < 768 && (this.y = n + (window.pageYOffset || document.documentElement.scrollTop)), this.radius = 1 + Math.random(), this.angle = 360 * Math.random(), this.speed = Math.random() * o + 0.2, this.velocityX = Math.cos(this.angle) * this.speed, this.velocityY = Math.sin(this.angle) * this.speed, this.startTime = (new Date()).getTime(), this.duration = 400, this.currentDiration = 0, this.initialVelocityX = this.velocityX, this.initialVelocityY = this.velocityY
    }
    let e, o, a
    return e = t, (o = [{
      key: 'animate',
      value () {
        this.currentDuration = (new Date()).getTime() - this.startTime, this.currentDuration <= 350 ? (this.x += 8 * this.initialVelocityX, this.y += 8 * this.initialVelocityY, this.globalAlpha += 0.05) : (this.x += this.velocityX, this.y += this.velocityY, this.globalAlpha > 0 && (this.globalAlpha -= 0.05))
      }
    }, {
      key: 'render',
      value () {
        h.beginPath(), h.drawImage(p, this.x - 25, this.y - 60, 60, 60), h.globalAlpha = this.globalAlpha, h.fill()
      }
    }]) && n(e.prototype, o), a && n(e, a), t
  }())
  const v = function () {
    window.innerWidth
    u.width = window.innerWidth, u.height = 500
  }
  v(),
  (function t () {
    h.clearRect(0, 0, u.width, u.height), Array.prototype.forEach.call(m, function (t, e) {
      t.animate(), t.render(), (t.y > u.height || t.x < 0 || t.x > u.width || t.globalAlpha <= 0) && (console.log(t.globalAlpha), m.splice(e, 1))
    }), requestAnimationFrame(t)
  }())
  let y = !1
  window.addEventListener('resize', function () {
    y || (requestAnimationFrame(function () {
      y = !1, v()
    }), y = !0)
  }, {
    passive: !0
  })
  let g; let _ = -1
  let w = ['　', '　', '　', '　']

  function b () {
    for (let t = [(_ = ('0000' + ++_).slice(-4))[0], _[1], _[2], _[3]], e = 0; e < w.length; e++) { w[e] != t[e] && T(e, w[e], t[e]) }
    w = [_[0], _[1], _[2], _[3]]
  }

  function T (t, e, i) {
    const n = document.getElementsByClassName('number fliptop')[t]
    const o = document.getElementsByClassName('number flipbottom')[t]
    n.style.animation = 'none', o.style.animation = 'none', o.innerHTML = i, n.innerHTML = e, clearTimeout(g), document.getElementsByClassName('number lower')[t].innerHTML = e, document.getElementsByClassName('back')[t].innerHTML = i, g = setTimeout(function () {
      o.style.animation = 'flipb 0.5s linear forwards', n.style.animation = 'flipt 0.5s linear forwards'
    }, 10), g = setTimeout(function () {
      n.innerHTML = i, document.getElementsByClassName('number lower')[t].innerHTML = i, w[t] = i
    }, 490), g
  }
  b(), window.addEventListener('click', function (t) {
    t.target.classList[0] == 'firstview__taparea' && (d || !o.includes('Trident') && (c(), (function () {
      for (let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random() * u.width, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random() * u.height, i = 0.6, n = 0; n < 10; n++) {
        const o = new f(t, e, i)
        m.push(o)
      }
    }(t.clientX, t.clientY)), b()))
  }), o.includes('Trident') && (document.getElementById('firstview__touch').style.display = 'none', document.getElementById('firstview__counter').style.display = 'none')
}]))
