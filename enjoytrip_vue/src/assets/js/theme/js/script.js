!(function () {
  var e,
    t,
    n,
    o = "function" == typeof jQuery;
  function r(e, t) {
    var n = Array.from(e.querySelectorAll(t));
    return e.matches && e.matches(t) && n.splice(0, 0, e), n;
  }
  function i(e) {
    var t = e.getBoundingClientRect(),
      n = document.documentElement;
    return {
      top: t.top + window.pageYOffset - n.clientTop,
      left: t.left + window.pageXOffset - n.clientLeft,
    };
  }
  function a(e) {
    return parseFloat(getComputedStyle(e, null).height.replace("px", ""));
  }
  function l(e) {
    return parseFloat(getComputedStyle(e, null).width.replace("px", ""));
  }
  function s(e) {
    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
  }
  function c(e) {
    if (!e) return -1;
    var t = 0;
    do {
      t++;
    } while ((e = e.previousElementSibling));
    return t;
  }
  function d(e) {
    var t = [],
      n = {
        blackberry: "BlackBerry",
        android: "Android",
        windows: "IEMobile",
        opera: "Opera Mini",
        ios: "iPhone|iPad|iPod",
      };
    return (
      "*" === (e = void 0 === e ? "*" : e.toLowerCase())
        ? (t = Object.values(n))
        : e in n && t.push(n[e]),
      !(!t.length || !navigator.userAgent.match(new RegExp(t.join("|"), "i")))
    );
  }
  o && (e = jQuery),
    (t = e
      ? e("html").hasClass("is-builder")
      : document.querySelector("html").classList.contains("is-builder")),
    (Element.prototype.parents = function (e) {
      for (var t = [], n = this, o = void 0 !== e; null !== (n = n.parentElement); )
        n.nodeType === Node.ELEMENT_NODE && ((o && !n.matches(e)) || t.push(n));
      return t;
    }),
    (Element.prototype.footerReveal = function () {
      var e = this,
        t = e.previousElementSibling,
        n = !!document.documentMode;
      function o() {
        !n && e.offsetHeight <= window.outerHeight
          ? ((e.style.zIndex = "-999"),
            (e.style.position = "fixed"),
            (e.style.bottom = "0"),
            (e.style.width = t.offsetWidth + "px"),
            (t.style.marginBottom = e.offsetHeight + "px"))
          : ((e.style.zIndex = ""),
            (e.style.position = ""),
            (e.style.bottom = ""),
            (e.style.width = ""),
            (t.style.marginBottom = ""));
      }
      return (
        o(),
        window.addEventListener("resize", function () {
          o();
        }),
        window.addEventListener("load", function () {
          o();
        }),
        e
      );
    }),
    (n = "smartresize"),
    (window[n] = function (e) {
      var t,
        o,
        r,
        i,
        a = new CustomEvent(n);
      return e
        ? this.addEventListener(
            "resize",
            ((t = e),
            function () {
              var e = this,
                n = arguments;
              i ? clearTimeout(i) : r && t.apply(e, n),
                (i = setTimeout(function () {
                  r || t.apply(e, n), (i = null);
                }, o || 100));
            })
          )
        : this.dispatchEvent(a);
    });
  var u = (function () {
    var e = document.createElement("div"),
      t = document.querySelector("body");
    e.setAttribute("style", "height: 50vh; position: absolute; top: -1000px; left: -1000px;"),
      t.appendChild(e);
    var n = parseInt(window.innerHeight / 2, 10),
      o = parseInt(
        (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height,
        10
      );
    return t.removeChild(e), o == n;
  })();
  if (
    (s(function () {
      function n(e) {
        e.style.height = (9 * l(e.parentNode)) / 16 + "px";
      }
      function s(e) {
        setTimeout(function () {
          r(e, ".mbr-parallax-background").forEach(function (e) {
            jarallax && (jarallax(e, { speed: 0.6 }), (e.style.position = "relative"));
          });
        }, 0);
      }
      if (
        (document.querySelector("html").classList.add(d() ? "mobile" : "desktop"),
        window.addEventListener("scroll", function () {
          document.querySelectorAll(".mbr-navbar--sticky").forEach(function (e) {
            var t = window.scrollTop > 10 ? "add" : "remove";
            e.classList[t]("mbr-navbar--stuck"),
              e.classList.contains(".mbr-navbar--open") || e.classList[t]("mbr-navbar--short");
          });
        }),
        d() && navigator.userAgent.match(/Chrome/i)
          ? (function (e, t) {
              var n = [e, e];
              (n[t > e ? 0 : 1] = t),
                window.smartresize(function () {
                  var e = window.innerHeight;
                  n.indexOf(e) < 0 && (e = n[window.innerWidth > e ? 1 : 0]);
                  var t = document.querySelector(".mbr-section--full-height");
                  t && (t.style.height = e + "px");
                });
            })(window.innerWidth, window.innerHeight)
          : u ||
            (window.smartresize(function () {
              var e = document.querySelector(".mbr-section--full-height");
              e && (e.style.height = window.innerHeight + "px");
            }),
            document.addEventListener("add.cards", function (e) {
              document.querySelector("html").classList.contains("mbr-site-loaded") &&
                r(e.target, ".mbr-section--full-height").length &&
                window.dispatchEvent(new CustomEvent("resize"));
            })),
        window.addEventListener("smartresize", function () {
          document.querySelectorAll(".mbr-section--16by9").forEach(n);
        }),
        o &&
          e(document).on("add.cards changeParameter.cards", function (e) {
            var t = r(e.target, ".mbr-section--16by9");
            t.length
              ? t.forEach(function (e) {
                  e.setAttribute("data-16by9", "true"), n(e);
                })
              : r(e.target, "[data-16by9]").forEach(function (e) {
                  (e.styles.height = ""), e.removeAttribute("data-16by9");
                });
          }),
        "undefined" != typeof jarallax && !d())
      ) {
        if (
          (window.addEventListener("update.parallax", function (e) {
            setTimeout(function () {
              if (e) {
                var e = document.querySelector(".mbr-parallax-background");
                e.jarallax("coverImage"), e.jarallax("clipContainer"), e.jarallax("onScroll");
              }
            }, 0);
          }),
          t)
        ) {
          if (!o) return;
          e(document).on("add.cards", function (t) {
            s(t.target), e(window).trigger("update.parallax");
          }),
            e(document).on("changeParameter.cards", function (t, n, o, r) {
              if ("bg" === n)
                switch (
                  ((i = t.target),
                  jarallax && jarallax(i, "destroy"),
                  (i.style.position = ""),
                  e(t.target).find(".mbr-background-video-preview").remove(),
                  e(t.target).find(".mbr-background-video").remove(),
                  r)
                ) {
                  case "type":
                  case "parallax":
                    !0 === o.parallax && s(t.target);
                    break;
                  case "value":
                    "image" === o.type && !0 === o.parallax && s(t.target);
                }
              var i;
              e(window).trigger("update.parallax");
            });
        } else s(document.body);
        window.addEventListener("shown.bs.tab", function () {
          window.dispatchEvent(new CustomEvent("update.parallax"));
        });
      }
      var c,
        m,
        f = 0,
        h = null,
        p = !d();
      function g(e) {
        r(e, "[data-bg-video]").forEach(function (e) {
          var n = e.getAttribute("data-bg-video");
          if (!n) return;
          var o = new URLSearchParams(n),
            r = Number(o.has("t") ? o.get("t") : 0) || 0,
            i = n.match(
              /(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/
            ),
            a = e.querySelector(".mbr-background-video-preview") || document.createElement("div");
          a.classList.add("mbr-background-video-preview"),
            (a.style.display = "none"),
            (a.style.backgroundSize = "cover"),
            (a.style.backgroundPosition = "center"),
            e.querySelector(".mbr-background-video-preview") || e.childNodes[0].before(a);
          if (i && (/youtu\.?be/g.test(i[3]) || /vimeo/g.test(i[3]))) {
            if (i && /youtu\.?be/g.test(i[3])) {
              i[6] = i[6].replace("shorts", "embed");
              var l = "http" + ("https:" === location.protocol ? "s" : "") + ":";
              l += "//img.youtube.com/vi/" + i[6] + "/maxresdefault.jpg";
              var s = new Image();
              (s.onload = function () {
                if (120 === (s.naturalWidth || s.width)) {
                  var n = s.src.split("/").pop();
                  switch (n) {
                    case "maxresdefault.jpg":
                      s.src = s.src.replace(n, "sddefault.jpg");
                      break;
                    case "sddefault.jpg":
                      s.src = s.src.replace(n, "hqdefault.jpg");
                      break;
                    default:
                      t &&
                        ((a.style.backgroundImage = 'url("images/no-video.jpg")'),
                        (a.style.display = "block"));
                  }
                } else
                  (a.style.backgroundImage = 'url("' + s.src + '")'), (a.style.display = "block");
                e.querySelector(".mbr-background-video") &&
                  e.querySelector(".mbr-background-video").remove();
                var o = document.createElement("div");
                const l = document.createElement("div"),
                  c = document.createElement("div"),
                  d = document.createElement("div");
                d.classList.add("mbr-video-foreground"),
                  d.appendChild(o),
                  c.appendChild(d),
                  l.appendChild(c),
                  o.classList.add("mbr-background-video");
                e.childNodes[1].before(l);
                var u = {
                    height: s.naturalHeight,
                    width: s.naturalWidth,
                    scale: s.naturalHeight / s.naturalWidth,
                  },
                  m = {
                    height: o.parentNode.clientHeight,
                    width: o.parentNode.clientWidth,
                    scale: o.parentNode.clientHeight / o.parentNode.clientWidth,
                  },
                  f = {
                    height: u.height < m.height ? u.height : m.height,
                    width: u.width > m.width ? u.width : m.width,
                  };
                f.height / f.width != u.scale && (f.height = f.width * u.scale);
                var h = new YouTubePlayer(o, {
                  modestBranding: !0,
                  autoplay: !0,
                  controls: !1,
                  origin: "*",
                  iv_load_policy: !1,
                  keyboard: !1,
                  captions: !1,
                  annotations: !1,
                  related: !1,
                  start: r,
                });
                (l.style.overflow = "hidden"),
                  (l.style.position = "absolute"),
                  (l.style.width = "100%"),
                  (l.style.height = "100%"),
                  (l.style.top = "0"),
                  (l.style.left = "0"),
                  (c.style.background = "#000"),
                  (c.style.top = "0"),
                  (c.style.right = "0"),
                  (c.style.bottom = "0"),
                  (c.style.left = "0"),
                  (d.style.position = "absolute"),
                  (d.style.top = "0"),
                  (d.style.left = "0"),
                  (d.style.width = "100%"),
                  (d.style.height = "100%"),
                  (d.style.pointerEvents = "none"),
                  (o.style.marginTop = "0"),
                  (o.style.maxWidth = "initial"),
                  (o.style.transitionProperty = "opacity"),
                  (o.style.transitionDuration = "1000ms"),
                  (o.style.pointerEvents = "none"),
                  (o.style.position = "absolute"),
                  (o.style.top = "0"),
                  (o.style.left = "0"),
                  (o.style.width = "100%"),
                  (o.style.height = "100%"),
                  (o.parentNode.style.overflow = "hidden"),
                  (o.style.transform = "scale(1.2)"),
                  h.load(i[6], !0, r),
                  h.play(),
                  h.setLoop(!0),
                  h.mute(),
                  h.on("ended", () => h.play()),
                  (function (e, t) {
                    let n = {},
                      o = {};
                    (o.width = window.outerWidth), (o.height = window.outerHeight);
                    let r = e._opts.width / e._opts.height;
                    (n.width = o.width),
                      (n.height = Math.ceil(n.width / r)),
                      (n.marginTop = Math.ceil(-(n.height - o.height) / 2)),
                      n.height < o.height &&
                        ((n.height = o.height),
                        (n.width = Math.ceil(n.height * r)),
                        (n.marginLeft = Math.ceil(-(n.width - o.width) / 2))),
                      e.setSize(n.width, n.height);
                  })(h);
              }),
                s.setAttribute("src", l);
            } else if (i && /vimeo/g.test(i[3])) {
              var c = new XMLHttpRequest();
              c.open("GET", "https://vimeo.com/api/v2/video/" + i[6] + ".json", !0),
                (c.onreadystatechange = function () {
                  if (4 === this.readyState)
                    if (this.status >= 200 && this.status < 400) {
                      var e = JSON.parse(this.responseText);
                      (a.style.backgroundImage = 'url("' + e[0].thumbnail_large + '")'),
                        (a.style.display = "block");
                    } else
                      t &&
                        ((a.style.backgroundImage = 'url("images/no-video.jpg")'),
                        (a.style.display = "block"));
                }),
                c.send(),
                (c = null),
                e.querySelector(".mbr-background-video") &&
                  e.querySelector(".mbr-background-video").remove(),
                (f = document.createElement("div")).classList.add("mbr-background-video");
              e.childNodes[1].before(f);
              var d = {
                  id: n,
                  loop: !0,
                  background: !0,
                  responsive: !0,
                  autoplay: !0,
                  byline: !1,
                  title: !1,
                  muted: !0,
                  controls: !1,
                },
                u = new Vimeo.Player(f, d),
                m = u.element.parentNode;
              (m.style.overflow = "hidden"),
                (u.element.style.pointerEvents = "none"),
                (u.element.style.marginLeft =
                  "-" + (u.element.scrollWidth - m.scrollWidth) / 2 + "px"),
                (u.element.style.minHeight = "100vh"),
                (u.element.style.minWidth = "177.77vh");
            }
          } else if (t)
            (a.style.backgroundImage = 'url("images/video-placeholder.jpg")'),
              (a.style.display = "block");
          else if (!t) {
            var f = document.createElement("video"),
              h = document.createElement("source");
            f.append(h),
              e.childNodes[1].before(f),
              (h.src = n),
              (f.autoplay = !0),
              (f.loop = !0),
              (f.muted = !0),
              f.setAttribute("muted", ""),
              (f.playsinline = !0),
              f.setAttribute("playsinline", ""),
              (f.style.position = "absolute"),
              (f.style.left = "50%"),
              (f.style.top = "50%"),
              (f.style.bottom = "0"),
              (f.style.right = "0"),
              (f.style.minWidth = "100%"),
              (f.style.minHeight = "100%"),
              (f.style.transform = "translateX(-50%) translateY(-50%)");
            let t = "";
            e.querySelector(".mbr-fallback-image") &&
              ((t = window.getComputedStyle(
                e.querySelector(".mbr-fallback-image")
              ).backgroundImage),
              (t = t.match(/\((.*?)\)/)[1].replace(/('|")/g, "")),
              f.setAttribute("poster", t)),
              (f.parentNode.style.overflow = "hidden");
          }
        });
      }
      if (
        (window.addEventListener("scroll", function () {
          m && clearTimeout(m);
          var e = document.documentElement.scrollTop,
            t = e <= f || p;
          if (((f = e), h)) {
            var n = e > h.breakPoint;
            t
              ? n != h.fixed &&
                (p
                  ? ((h.fixed = n), h.elm.classList.toggle("is-fixed"))
                  : (m = setTimeout(function () {
                      (h.fixed = n), h.elm.classList.toggle("is-fixed");
                    }, 40)))
              : ((h.fixed = !1), h.elm.classList.remove("is-fixed"));
          }
        }),
        o &&
          e(document).on("add.cards delete.cards", function (e) {
            c && clearTimeout(c),
              (c = setTimeout(function () {
                h && ((h.fixed = !1), h.elm.classList.remove("is-fixed"));
                var e = document.querySelector(".mbr-fixed-top");
                e &&
                  ((h = { breakPoint: i(e).top + 3 * a(e), fixed: !1, elm: e }),
                  e.dispatchEvent(new CustomEvent("scroll")));
              }, 650));
          }),
        window.smartresize(function () {
          document.querySelectorAll(".mbr-embedded-video").forEach(function (e) {
            e.style.height =
              (
                (l(e) * parseInt(e.getAttribute("height") || 315)) /
                parseInt(e.getAttribute("width") || 560)
              ).toFixed() + "px";
          });
        }),
        o &&
          e(document).on("add.cards", function (e) {
            document.querySelector("html").classList.contains("mbr-site-loaded") &&
              r(e.target, "iframe").length &&
              window.dispatchEvent(new CustomEvent("resize"));
          }),
        t)
      ) {
        if (!o) return;
        var y = [];
        e(document).on("add.cards", function (e) {
          e.target !== document &&
            !y.some((t) => t === e.target) &&
            e.target.hasAttribute("mbr-data-bg-video") &&
            (y.push(e.target), g(e.target));
        });
      } else g(document.body);
      t &&
        e(document).on("changeParameter.cards", function (e, t, n, o) {
          if ("bg" === t)
            switch (o) {
              case "type":
              case "value":
                "video" === n.type && g(e.target);
            }
        }),
        document.querySelector("html").classList.add("mbr-site-loaded"),
        window.dispatchEvent(new CustomEvent("resize")),
        window.dispatchEvent(new CustomEvent("scroll")),
        t ||
          document.addEventListener("click", function (e) {
            try {
              var t = e.target;
              if (
                t.parents().some(function (e) {
                  e.classList.contains("carousel");
                })
              )
                return;
              do {
                if (t.hash) {
                  var n = /#bottom|#top/g.test(t.hash);
                  document.querySelectorAll(n ? "body" : t.hash).forEach(function (n) {
                    e.preventDefault();
                    var o = document.querySelector(".navbar-fixed-top"),
                      r = "#bottom" == t.hash ? a(n) - window.innerHeight : i(n).top - (o ? 60 : 0);
                    n.classList.contains("panel-collapse") ||
                      n.classList.contains("tab-pane") ||
                      t.classList.contains("carousel-control") ||
                      t.parents(".carousel-controls").length ||
                      window.scrollTo({ top: r, left: 0, behavior: "smooth" });
                  });
                  break;
                }
              } while ((t = t.parentNode));
            } catch (e) {}
          }),
        document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function (e) {
          var t = e.querySelector("img"),
            n = e.parentNode,
            o = t.width,
            r = t.height;
          function i() {
            if (
              ((t.style.width = ""), (t.style.maxWidth = ""), (t.style.marginLeft = ""), r && o)
            ) {
              var i = r / o;
              (e.style.position = "absolute"),
                (e.style.top = "0"),
                (e.style.left = "0"),
                (e.style.right = "0"),
                (e.style.bottom = "0");
              var s = a(n) / l(n);
              if (s > i) {
                var c = (100 * (s - i)) / i;
                (t.style.width = c + 100 + "%"),
                  (t.style.maxWidth = c + 100 + "%"),
                  (t.style.marginLeft = -c / 2 + "%");
              }
            }
          }
          t.addEventListener(
            "load",
            function () {
              (o = t.width), (r = t.height), i();
            },
            { once: !0 }
          ),
            window.addEventListener("resize", i),
            i();
        });
    }),
    t ||
      (o &&
        e.fn.socialLikes &&
        e(document).on("add.cards", function (e) {
          r(e.target, ".mbr-social-likes").forEach(function (e) {
            e.addEventListener("counter.social-likes", function (e, t, n) {
              n > 999 &&
                e.target.querySelectorAll(".social-likes__counter").forEach(function (e) {
                  e.innerHTML = Math.floor(n / 1e3) + "k";
                });
            }),
              e.socialLikes({ initHtml: !1 });
          });
        }),
      Array.from(document.body.children)
        .filter(function (e) {
          return !e.matches("style, script");
        })
        .forEach(function (e) {
          e.classList.contains("mbr-reveal") &&
            e.addEventListener("add.cards", function () {
              e.footerReveal();
            });
        }),
      s(function () {
        if (!d() && document.querySelectorAll("input[name=animation]").length) {
          document.querySelectorAll("input[name=animation]").forEach(function (e) {
            e.remove();
          });
          var e = Array.from(
            document.querySelectorAll(
              "p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info, .item"
            )
          );
          function t() {
            var t = window.innerHeight,
              n = document.documentElement.scrollTop || document.body.scrollTop,
              o = n + t - 100;
            e.forEach(function (e) {
              var t = e,
                r = t.offsetHeight,
                i = (function (e) {
                  var t = 0;
                  do {
                    (t += e.offsetTop || 0), (e = e.offsetParent);
                  } while (e);
                  return t;
                })(t);
              ((i + r >= n && i - 50 <= o) ||
                (function (e) {
                  if (
                    e.parents(".carousel-item").some(function (e) {
                      return "none" !== getComputedStyle(e, null).display;
                    })
                  )
                    return !1;
                  var t = e.parents(".carousel-item").parentNode;
                  if (!t) return !1;
                  if (t.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)
                    return !1;
                  if (t.getAttribute("data-visible") > 1) {
                    var n = t.getAttribute("data-visible");
                    return (
                      !(
                        !e.parents().some(function (e) {
                          return e.matches(".cloneditem-" + (n - 1));
                        }) ||
                        !e.parents(".cloneditem-" + (n - 1)).some(function (e) {
                          return e.getAttribute("data-cloned-index") >= n;
                        })
                      ) || (e.classList.remove("animate__animated animate__delay-1s hidden"), !1)
                    );
                  }
                  return !0;
                })(e)) &&
                e.classList.contains("hidden") &&
                (e.classList.remove("hidden"),
                e.classList.add("animate__fadeIn"),
                e.classList.add("animate__delay-1s"),
                e.addEventListener(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  function () {
                    e.classList.remove("animate__animated animate__delay-1s animate__fadeIn");
                  },
                  { once: !0 }
                ));
            });
          }
          (e = (e = e.filter(function (e) {
            if (
              !e.parents().filter(function (e) {
                if (
                  e.matches(
                    "a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal, .item"
                  )
                )
                  return !0;
              }).length
            )
              return !0;
          })).filter(function (e) {
            if (
              !e.parents().filter(function (t) {
                return t.matches("form") && !e.matches("li");
              }).length
            )
              return !0;
          })).forEach(function (e) {
            e.classList.add("hidden"),
              e.classList.add("animate__animated"),
              e.classList.add("animate__delay-1s");
          }),
            window.addEventListener("scroll", t),
            window.addEventListener("resize", t),
            window.dispatchEvent(new CustomEvent("scroll"));
        }
      })),
    s(function () {
      if (document.querySelectorAll(".mbr-arrow-up").length) {
        var e = document.querySelector("#scrollToTop");
        (e.style.display = "none"),
          window.addEventListener("scroll", function () {
            var t,
              n = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
              );
            (document.documentElement.scrollTop || document.body.scrollTop) >
              n / 2 - document.documentElement.clientHeight / 2 ||
            window.scrollY > window.innerHeight
              ? (((t = e).style.display = "block"),
                (function e() {
                  var n = parseFloat(t.style.opacity);
                  (n += 0.1) > 1 || ((t.style.opacity = n), requestAnimationFrame(e));
                })())
              : (function (e) {
                  !(function t() {
                    (e.style.opacity -= 0.1) < 0
                      ? (e.style.display = "none")
                      : requestAnimationFrame(t);
                  })();
                })(e);
          }),
          e.addEventListener("click", function () {
            return window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), !1;
          });
      }
    }),
    !t)
  ) {
    var m = document.querySelector(".mbr-arrow");
    m &&
      m.addEventListener("click", function (e) {
        var t = e.target.closest("section").nextElementSibling;
        t.classList.contains("engine") && (t = t.closest("section").nextElementSibling),
          window.scrollTo(0, i(t).top);
      });
  }
  if (document.querySelectorAll("nav.navbar").length) {
    var f = a(document.querySelector("nav.navbar"));
    document.querySelector(".mbr-after-navbar.mbr-fullscreen") &&
      (document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop = f + "px");
  }
  if (
    (!t &&
      (window.navigator.userAgent.indexOf("MSIE ") > 0 ||
        navigator.userAgent.match(/Trident.*rv\:11\./)) &&
      e(document).on("add.cards", function (e) {
        var t = e.target;
        if (t.classList.contains("mbr-fullscreen")) {
          var n = function () {
            (t.style.height = "auto"),
              t.offsetHeight <= window.innerHeight && (t.style.height = "1px");
          };
          window.addEventListener("load", n), window.addEventListener("resize", n);
        }
        (t.classList.contains("mbr-slider") || t.classList.contains("mbr-gallery")) &&
          (t.querySelectorAll(".carousel-indicators").forEach(function (e) {
            e.classList.add("ie-fix"),
              e.querySelectorAll("li").forEach(function (e) {
                (e.style.display = "inline-block"), (e.style.width = "30px");
              });
          }),
          t.classList.contains("mbr-slider") &&
            t.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function (e) {
              e.style.height = "1px";
            }));
      }),
    s(function () {
      if (!t) {
        var e = function (e) {
            if (e.target)
              return "VIDEO" == e.target.tagName
                ? (e.preventDefault(), void e.stopPropagation())
                : void n(e.target);
          },
          n = function (t) {
            var n = t.parents("section")[0].querySelector("iframe"),
              o = n.getAttribute("src");
            if (
              (t.parents("section").forEach(function (e) {
                e.style.zIndex = "5000";
              }),
              o)
            ) {
              if (
                (-1 !== o.indexOf("youtu") &&
                  n.contentWindow.postMessage(
                    '{"event":"command","func":"playVideo","args":""}',
                    "*"
                  ),
                -1 !== o.indexOf("vimeo"))
              ) {
                var r = new Vimeo.Player(n);
                r.play();
              }
            } else {
              let e = n.parentNode.querySelector("video");
              e && e.play && e.play();
            }
            var i = t.parents("section")[0],
              a = i.querySelector(i.querySelector("[data-modal]").getAttribute("data-modal"));
            (a.style.display = "table"),
              a.addEventListener("click", function (t) {
                if ("VIDEO" !== t.target.tagName) {
                  if (o)
                    -1 !== o.indexOf("youtu") &&
                      n.contentWindow.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        "*"
                      ),
                      -1 !== o.indexOf("vimeo") && r.pause();
                  else {
                    let e = n.parentNode.querySelector("video");
                    e && e.pause && e.pause();
                  }
                  (a.style.display = "none"),
                    a.removeEventListener("click", e),
                    (i.style.zIndex = "0");
                }
              });
          };
        document.querySelectorAll(".modalWindow-video > iframe").forEach(function (e) {
          var t = e.getAttribute("data-src");
          if (t) {
            e.removeAttribute("data-src");
            var n = t.match(
              /(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/
            );
            if (-1 !== t.indexOf("youtu"))
              e.setAttribute("src", "https://youtube.com/embed/" + n[6] + "?rel=0&enablejsapi=1");
            else if (-1 !== t.indexOf("vimeo"))
              e.setAttribute(
                "src",
                "https://player.vimeo.com/video/" + n[6] + "?autoplay=0&loop=0"
              );
            else if (/\.mp4|\.webm|\.ogg|\.ogv|\.m4a|\.m4v/.test(t)) {
              let n = document.createElement("video");
              n.onloadeddata = function (e) {
                e.target.videoHeight > e.target.videoWidth
                  ? (e.target.style.height = window.innerHeight - 0.2 * window.innerHeight + "px")
                  : (e.target.style.height = "100%");
              };
              let o = e.parents("section")[0].querySelector("img");
              o && n.setAttribute("poster", o.src),
                n.setAttribute("controls", ""),
                n.setAttribute("playsinline", ""),
                n.setAttribute("loop", ""),
                n.setAttribute("src", t),
                (e.style.display = "none"),
                (n.style.width = "100%"),
                e.after(n);
            }
          }
        }),
          document.querySelector("[data-modal]") &&
            document.querySelectorAll("[data-modal]").forEach(function (t) {
              t.addEventListener("click", e);
            });
      }
    }),
    !t)
  ) {
    const e = document.querySelectorAll(".dropdown-toggle.show"),
      t = document.querySelectorAll(".dropdown-menu.show, .dropdown.open"),
      n = document.querySelectorAll(".dropdown.open");
    if (
      (e.forEach((e) => {
        e.classList.remove("show"), (e.ariaExpanded = "false");
      }),
      t.forEach((e) => e.classList.remove("show")),
      n.forEach((e) => e.classList.remove("open")),
      !d())
    ) {
      var h = document.querySelector("section.menu");
      if (h) {
        var p = window.innerWidth;
        h.querySelector(".navbar").classList.contains("collapsed") ||
          (p > 991 &&
            (h.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function (e) {
              e.addEventListener("mouseover", function () {
                if (!e.classList.contains("open")) {
                  e.querySelector("a").parentNode.classList.toggle("open");
                }
              }),
                e.addEventListener("mouseout", function () {
                  if (e.classList.contains("open")) {
                    e.querySelector("a").parentNode.classList.toggle("open");
                  }
                });
            }),
            h
              .querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown")
              .forEach(function (e) {
                e.addEventListener("mouseover", function () {
                  e.classList.contains("open") || e.classList.toggle("open");
                }),
                  e.addEventListener("mouseout", function () {
                    e.classList.contains("open") && e.classList.toggle("open");
                  });
              })));
      }
    }
  }
  function g(e) {
    var t = e.querySelector(".carousel-item"),
      n = e.querySelector(".carousel-indicators > li");
    t.classList.add("active"), n && n.classList.add("active");
  }
  function y(e) {
    var t = e,
      n = t.getAttribute("id") + "-carousel",
      o = t.getAttribute("data-bs-version") && t.getAttribute("data-bs-version").startsWith("5");
    null === t.getAttribute("id") && (n = t.classList.value.match(/cid-.*?(?=\s|$)/) + "-carousel"),
      t.querySelectorAll(".carousel").forEach(function (e) {
        e.setAttribute("id", n);
      }),
      t.querySelector(".carousel-controls") &&
        t.querySelectorAll(".carousel-controls").forEach(function (e) {
          e.querySelectorAll("a").forEach(function (e) {
            e.setAttribute("href", "#" + n),
              o
                ? e.setAttribute("data-bs-target", "#" + n)
                : e.setAttribute("data-target", "#" + n);
          });
        }),
      t.querySelectorAll(".carousel-indicators > li").forEach(function (e) {
        o ? e.setAttribute("data-bs-target", "#" + n) : e.setAttribute("data-target", "#" + n);
      }),
      g(t);
  }
  if (
    (t ||
      (void 0 === window.initClientPlugin &&
        0 != document.body.querySelectorAll(".clients").length &&
        ((window.initClientPlugin = !0),
        document.body.querySelectorAll(".clients").forEach(function (e) {
          var t, n, o;
          e.getAttribute("data-isinit") ||
            (y(e),
            (n = (t = e).querySelectorAll(".carousel-item").length),
            (o = t.querySelector(".carousel-inner").getAttribute("data-visible")),
            n < o && (o = n),
            t.querySelectorAll(".carousel-inner").forEach(function (e) {
              e.setAttribute("class", "carousel-inner slides" + o);
            }),
            t.querySelectorAll(".clonedCol").forEach(function (e) {
              e.remove();
            }),
            t.querySelectorAll(".carousel-item .col-md-12").forEach(function (e) {
              o < 2
                ? e.setAttribute("class", "col-md-12")
                : "5" == o
                ? e.setAttribute("class", "col-md-12 col-lg-15")
                : e.setAttribute("class", "col-md-12 col-lg-" + 12 / o);
            }),
            t.querySelectorAll(".carousel-item .row").forEach(function (e) {
              e.setAttribute("style", "-webkit-flex-grow: 1; flex-grow: 1; margin: 0;");
            }),
            t.querySelectorAll(".carousel-item").forEach(function (e) {
              for (var t = e, n = 1; n < o; n++) {
                (t = t.nextElementSibling) ||
                  (t =
                    e.parentNode.children[0] === e
                      ? e.nextElementSibling
                      : e.parentNode.children[0]);
                var r = c(t),
                  i = t.querySelector(".col-md-12").cloneNode(!0);
                i.classList.add("cloneditem-" + n),
                  i.classList.add("clonedCol"),
                  i.setAttribute("data-cloned-index", r),
                  e.children[0].appendChild(i);
              }
            }));
        })),
      void 0 === window.initPopupBtnPlugin &&
        0 != document.body.querySelectorAll("section.popup-btn-cards").length &&
        ((window.initPopupBtnPlugin = !0),
        document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function (e) {
          e.classList.add("popup-btn");
        })),
      void 0 === window.initTestimonialsPlugin &&
        0 != document.body.querySelectorAll(".testimonials-slider").length &&
        ((window.initTestimonialsPlugin = !0),
        document.querySelectorAll(".testimonials-slider").forEach(function (e) {
          y(e);
        })),
      void 0 === window.initSwitchArrowPlugin &&
        ((window.initSwitchArrowPlugin = !0),
        s(function () {
          0 != document.querySelectorAll(".accordionStyles").length &&
            document
              .querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]')
              .forEach(function (e) {
                e.classList.contains("collapsed") || e.classList.add("collapsed");
              });
        }),
        document
          .querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]')
          .forEach(function (e) {
            e.addEventListener("click", function () {
              var t = e.closest(".accordionStyles").getAttribute("id"),
                n = e.closest(".card").querySelector(".panel-collapse"),
                o = e.querySelector("span.sign")
                  ? e.querySelector("span.sign")
                  : e.querySelector("span.mbr-iconfont");
              if (
                n.classList.contains("collapsing") &&
                (-1 != t.indexOf("toggle") || -1 != t.indexOf("accordion")) &&
                (e.classList.contains("collapsed")
                  ? (o.classList.remove("mbri-arrow-up"), o.classList.add("mbri-arrow-down"))
                  : (o.classList.remove("mbri-arrow-down"), o.classList.add("mbri-arrow-up")),
                -1 != t.indexOf("accordion"))
              ) {
                var r = e.closest(".accordionStyles");
                Array.from(r.children)
                  .filter(function (e) {
                    return e.querySelector("span.sign") !== o;
                  })
                  .forEach(function (e) {
                    var t = e.querySelector("span.sign")
                      ? e.querySelector("span.sign")
                      : e.querySelector("span.mbr-iconfont");
                    t.classList.remove("mbri-arrow-up"), t.classList.add("mbri-arrow-down");
                  });
              }
            });
          })),
      0 != document.querySelectorAll(".mbr-slider.carousel").length &&
        document.querySelectorAll(".mbr-slider.carousel").forEach(function (t) {
          var n = t,
            r = n.querySelectorAll(".carousel-control"),
            i = n.querySelectorAll(".carousel-indicators li"),
            a = function (e) {
              !(function (e) {
                e.stopPropagation(), e.preventDefault();
              })(e);
            };
          n.addEventListener("slide.bs.carousel", function () {
            r.forEach(function (e) {
              e.addEventListener("click", a);
            }),
              i.forEach(function (e) {
                e.addEventListener("click", a);
              }),
              o && e(n).carousel({ keyboard: !1 });
          }),
            n.addEventListener("slid.bs.carousel", function () {
              r.forEach(function (e) {
                e.removeEventListener("click", a);
              }),
                i.forEach(function (e) {
                  e.removeEventListener("click", a);
                }),
                o && e(n).carousel({ keyboard: !0 }),
                n.querySelectorAll(".carousel-item.active").length > 1 &&
                  (n.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),
                  n.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"));
            });
        })),
    t)
  ) {
    if (!o) return;
    e(document).on("add.cards", function (t) {
      if (e(t.target).find(".form-with-styler").length) {
        var n = e(t.target).find(".form-with-styler");
        e(n)
          .find('select:not("[multiple]")')
          .each(function () {
            e(this).styler && e(this).styler();
          }),
          e(n)
            .find("input[type=number]")
            .each(function () {
              e(this).styler &&
                (e(this).styler(), e(this).parent().parent().removeClass("form-control"));
            }),
          e(n)
            .find("input[type=date]")
            .each(function () {
              e(this).datetimepicker && e(this).datetimepicker({ format: "Y-m-d", timepicker: !1 });
            }),
          e(n)
            .find("input[type=time]")
            .each(function () {
              e(this).datetimepicker && e(this).datetimepicker({ format: "H:i", datepicker: !1 });
            });
      }
    });
  }
  function v(e, t, n) {
    var o = e.closest(".card"),
      r = o.parentElement.classList;
    o.getAttribute("style") ||
      o.setAttribute("style", "-webkit-flex-basis: auto; flex-basis: auto;"),
      r.contains("row") && (r.remove("row"), r.add("media-container-row")),
      e.querySelectorAll(".svg-gradient > *").forEach(function (e) {
        e.setAttribute("id", t);
      });
    var i = e.cloneNode(!0);
    Array.from(e.children).forEach(function (e) {
      if ("SVG" !== e.tagName) return e.remove();
    }),
      e.setAttribute(
        "data-pie",
        `{ ${(function (e) {
          var t = "",
            n = e.querySelector("svg linearGradient");
          if (n) {
            for (var o = [], r = Array.from(n.children), i = 0; i < r.length; i++)
              o.push(`"${r[i].getAttribute("stop-color")}"`);
            (t = `"lineargradient": [${o}],`),
              Array.from(e.querySelectorAll("svg")).some(function (e) {
                return e.classList.contains("svg-gradient");
              }) ||
                e.querySelectorAll("svg").forEach(function (e) {
                  e.classList.add("svg-gradient");
                });
          }
          return t;
        })(
          e.closest("section")
        )} "percent": ${n}, "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#${t})", "fontSize": "1.3rem", "number": false }`
      ),
      Array.from(i.children).forEach(function (t) {
        switch (!0) {
          case t.matches("p"):
            (t.innerText = n + "%"), e.appendChild(t);
            break;
          case t.matches("svg"):
            break;
          default:
            e.appendChild(t);
        }
      });
  }
  function b(e) {
    var t = e.closest("section").getAttribute("id") + "-svg-gradient",
      n = +e.getAttribute("data-goal");
    v(e, t, n);
  }
  function w() {
    if (!document.querySelector(".loop-container")) return;
    const e = (t) => {
      const n = { current: 0, target: 0 },
        o = +t.children[0].dataset.speed || 0.05,
        r = t.querySelector(".item"),
        i = r.dataset.direction;
      if (r) {
        const a = () => {
          t.querySelectorAll(".item").forEach((e) => {
            const t = e.dataset.linewords;
            e.textContent = t + " ";
          });
        };
        a(),
          (t.style.cssText = "position: relative; display: inline-flex; white-space: nowrap;"),
          (t.children[1].style.cssText = `position: absolute; left: ${100 * -i}%;`);
        const l = () => {
            var e, r, a;
            (n.target += o),
              (n.current = ((e = n.current), (r = n.target), e * (1 - (a = 0.2)) + r * a)),
              n.target > 100 && ((n.current -= n.target), (n.target = 0));
            const s = n.current * i;
            (t.style.transform = `translateX(${s}%)`), window.requestAnimationFrame(l);
          },
          s = () => {
            window.addEventListener("scroll", () => (n.target += 1.5 * o));
          },
          c = new MutationObserver(() => {
            document.querySelectorAll(".loop-container").forEach((e) => {
              e.style.transform = "";
            }),
              c.disconnect(),
              e(t);
          });
        c.observe(r, {
          attributes: !0,
          attributeFilter: ["data-direction", "data-speed", "data-linewords"],
        }),
          s(),
          l();
      }
    };
    document.querySelectorAll(".loop-container").forEach((t) => e(t));
  }
  function E() {
    const e = Array.from(document.querySelectorAll(".ticker__item"));
    if (0 === e.length) return;
    const t = e.map((e) => e.textContent),
      n = new MutationObserver(function () {
        e.forEach((e, t) => {
          const n = e.dataset.word;
          e.textContent = n;
        });
      });
    e.forEach((e, o) => {
      (e.textContent = t[o]), n.observe(e, { attributes: !0, attributeFilter: ["data-word"] });
    });
    document.querySelectorAll(".ticker__item").forEach((e) => {
      const t = e.dataset.word;
      e.textContent = t;
    });
  }
  document.querySelectorAll('input[type="range"]').forEach(function (e) {
    e.addEventListener("change", function (e) {
      e.target.parents(".form-group").forEach(function (t) {
        t.querySelector(".value").innerHTML = e.target.value;
      });
    });
  }),
    t
      ? e(document).on("add.cards changeParameter.cards", function (e, t) {
          "undefined" != typeof CircularProgressBar && new CircularProgressBar("pie_progress"),
            t
              ? (function (e, t) {
                  if (
                    e.classList.contains("circle-progress-section") &&
                    t.includes("progress") &&
                    "progressCount" != t
                  )
                    if (t.includes("Color"))
                      e.querySelectorAll(".pie_progress").forEach(function (t) {
                        var n = e.getAttribute("id") + "-svg-gradient",
                          o = +t.getAttribute("data-goal");
                        v(t, n, o);
                      });
                    else {
                      var n = e.getAttribute("id") + "-svg-gradient",
                        o = e.querySelector("." + t),
                        r = +o.getAttribute("data-goal");
                      v(o, n, r);
                    }
                })(e.target, t)
              : e.target.querySelectorAll(".pie_progress").length &&
                e.target.querySelectorAll(".pie_progress").forEach(function (e) {
                  b(e);
                });
        })
      : document.querySelectorAll(".pie_progress").length &&
        ("undefined" != typeof CircularProgressBar && new CircularProgressBar("pie_progress"),
        document.querySelectorAll(".pie_progress").forEach(function (e) {
          b(e);
        })),
    t && o
      ? e(document)
          .on("add.cards", function (t) {
            e(t.target).hasClass("testimonials-slider") && y(t.target);
          })
          .on("changeParameter.cards", function (t, n, o) {
            "testimonialsSlides" === n &&
              0 == e(t.target).find(".carousel-item.active").length &&
              g(t.target);
          })
      : void 0 === window.initTestimonialsPlugin &&
        ((window.initTestimonialsPlugin = !0),
        document.querySelectorAll(".testimonials-slider").forEach(function (e) {
          y(e);
        })),
    s(function () {
      t ||
        Array.from(document.body.children)
          .filter(function (e) {
            return !e.matches("style, script");
          })
          .forEach(function (e) {
            if (window.Event && "function" == typeof window.Event) var t = new Event("add.cards");
            else (t = document.createEvent("CustomEvent")).initEvent("add.cards", !0, !0);
            e.dispatchEvent(t);
          });
    }),
    s(() => {
      window.addEventListener("scroll", () => {
        const e = document.querySelector(".navbar-dropdown"),
          t = document.querySelector(".navbar-collapse");
        if (e && !e.classList.contains("opacityScrollOff")) {
          const n = document.documentElement.scrollTop > 1;
          e.classList.toggle("opacityScroll", !n), t.classList.toggle("opacityScroll", !n);
        }
      });
    }),
    t ? e(document).on("add.cards", w) : window.addEventListener("DOMContentLoaded", w),
    t ? e(document).on("add.cards", E) : window.addEventListener("DOMContentLoaded", E);
})();
