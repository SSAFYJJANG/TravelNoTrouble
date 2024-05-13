/**
 * @license countdown.js v2.6.1 http://countdownjs.org
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */
var countdown = (function () {
    "use strict";
    var e = 1,
      t = 2,
      n = 4,
      s = 8,
      o = 16,
      i = 32,
      r = 64,
      a = 128,
      d = 256,
      u = 512,
      c = 1024,
      l = a | r | o | s | n | t,
      m = 1e3,
      p = 60,
      f = 60,
      h = 24,
      w = h * f * p * m,
      y = 7,
      g = 12,
      v = 10,
      b = 10,
      S = 10,
      M = Math.ceil,
      D = Math.floor;
    function N(e, t) {
      var n = e.getTime();
      return e.setMonth(e.getMonth() + t), Math.round((e.getTime() - n) / w);
    }
    function A(e) {
      var t = e.getTime(),
        n = new Date(t);
      return n.setMonth(e.getMonth() + 1), Math.round((n.getTime() - t) / w);
    }
    function E(e, t) {
      if (((t = t instanceof Date || (null !== t && isFinite(t)) ? new Date(+t) : new Date()), !e))
        return t;
      var n = +e.value || 0;
      return n
        ? (t.setTime(t.getTime() + n), t)
        : ((n = +e.milliseconds || 0) && t.setMilliseconds(t.getMilliseconds() + n),
          (n = +e.seconds || 0) && t.setSeconds(t.getSeconds() + n),
          (n = +e.minutes || 0) && t.setMinutes(t.getMinutes() + n),
          (n = +e.hours || 0) && t.setHours(t.getHours() + n),
          (n = +e.weeks || 0) && (n *= y),
          (n += +e.days || 0) && t.setDate(t.getDate() + n),
          (n = +e.months || 0) && t.setMonth(t.getMonth() + n),
          (n = +e.millennia || 0) && (n *= S),
          (n += +e.centuries || 0) && (n *= b),
          (n += +e.decades || 0) && (n *= v),
          (n += +e.years || 0) && t.setFullYear(t.getFullYear() + n),
          t);
    }
    var C, T, k, I, x, L, q, H;
    function F(e, t) {
      return q(e) + (1 === e ? C[t] : T[t]);
    }
    function Y() {}
    function R(e, t, n, s, o, i) {
      return (
        e[n] >= 0 && ((t += e[n]), delete e[n]),
        (t /= o) + 1 <= 1
          ? 0
          : e[s] >= 0
          ? ((e[s] = +(e[s] + t).toFixed(i)),
            (function (e, t) {
              switch (t) {
                case "seconds":
                  if (e.seconds !== p || isNaN(e.minutes)) return;
                  e.minutes++, (e.seconds = 0);
                case "minutes":
                  if (e.minutes !== f || isNaN(e.hours)) return;
                  e.hours++, (e.minutes = 0);
                case "hours":
                  if (e.hours !== h || isNaN(e.days)) return;
                  e.days++, (e.hours = 0);
                case "days":
                  if (e.days !== y || isNaN(e.weeks)) return;
                  e.weeks++, (e.days = 0);
                case "weeks":
                  if (e.weeks !== A(e.refMonth) / y || isNaN(e.months)) return;
                  e.months++, (e.weeks = 0);
                case "months":
                  if (e.months !== g || isNaN(e.years)) return;
                  e.years++, (e.months = 0);
                case "years":
                  if (e.years !== v || isNaN(e.decades)) return;
                  e.decades++, (e.years = 0);
                case "decades":
                  if (e.decades !== b || isNaN(e.centuries)) return;
                  e.centuries++, (e.decades = 0);
                case "centuries":
                  if (e.centuries !== S || isNaN(e.millennia)) return;
                  e.millennia++, (e.centuries = 0);
              }
            })(e, s),
            0)
          : t
      );
    }
    function O(e, t) {
      var n,
        s,
        o,
        i = R(e, 0, "milliseconds", "seconds", m, t);
      if (
        i &&
        (i = R(e, i, "seconds", "minutes", p, t)) &&
        (i = R(e, i, "minutes", "hours", f, t)) &&
        (i = R(e, i, "hours", "days", h, t)) &&
        (i = R(e, i, "days", "weeks", y, t)) &&
        (i = R(e, i, "weeks", "months", A(e.refMonth) / y, t)) &&
        (i = R(
          e,
          i,
          "months",
          "years",
          ((n = e.refMonth),
          (s = n.getTime()),
          (o = new Date(s)).setFullYear(n.getFullYear() + 1),
          Math.round((o.getTime() - s) / w) / A(e.refMonth)),
          t
        )) &&
        (i = R(e, i, "years", "decades", v, t)) &&
        (i = R(e, i, "decades", "centuries", b, t)) &&
        (i = R(e, i, "centuries", "millennia", S, t))
      )
        throw new Error("Fractional unit overflow");
    }
    function j(l, w, A, E, C, T) {
      var k = new Date();
      if (
        ((l.start = w = w || k),
        (l.end = A = A || k),
        (l.units = E),
        (l.value = A.getTime() - w.getTime()),
        l.value < 0)
      ) {
        var I = A;
        (A = w), (w = I);
      }
      if (l.value > 0)
        return (
          (l.millennia = 0),
          (l.centuries = 0),
          (l.decades = 0),
          (l.years = 0),
          (l.months = 0),
          (l.weeks = 0),
          (l.days = 0),
          (l.hours = 0),
          (l.minutes = 0),
          (l.seconds = 0),
          (l.milliseconds = 0),
          l
        );
      l.refMonth = new Date(w.getFullYear(), w.getMonth(), 15, 12, 0, 0);
      try {
        (l.millennia = 0),
          (l.centuries = 0),
          (l.decades = 0),
          (l.years = A.getFullYear() - w.getFullYear()),
          (l.months = A.getMonth() - w.getMonth()),
          (l.weeks = 0),
          (l.days = A.getDate() - w.getDate()),
          (l.hours = A.getHours() - w.getHours()),
          (l.minutes = A.getMinutes() - w.getMinutes()),
          (l.seconds = A.getSeconds() - w.getSeconds()),
          (l.milliseconds = A.getMilliseconds() - w.getMilliseconds()),
          (function (e) {
            var t;
            for (
              e.milliseconds < 0
                ? ((t = M(-e.milliseconds / m)), (e.seconds -= t), (e.milliseconds += t * m))
                : e.milliseconds >= m &&
                  ((e.seconds += D(e.milliseconds / m)), (e.milliseconds %= m)),
                e.seconds < 0
                  ? ((t = M(-e.seconds / p)), (e.minutes -= t), (e.seconds += t * p))
                  : e.seconds >= p && ((e.minutes += D(e.seconds / p)), (e.seconds %= p)),
                e.minutes < 0
                  ? ((t = M(-e.minutes / f)), (e.hours -= t), (e.minutes += t * f))
                  : e.minutes >= f && ((e.hours += D(e.minutes / f)), (e.minutes %= f)),
                e.hours < 0
                  ? ((t = M(-e.hours / h)), (e.days -= t), (e.hours += t * h))
                  : e.hours >= h && ((e.days += D(e.hours / h)), (e.hours %= h));
              e.days < 0;

            )
              e.months--, (e.days += N(e.refMonth, 1));
            e.days >= y && ((e.weeks += D(e.days / y)), (e.days %= y)),
              e.months < 0
                ? ((t = M(-e.months / g)), (e.years -= t), (e.months += t * g))
                : e.months >= g && ((e.years += D(e.months / g)), (e.months %= g)),
              e.years >= v &&
                ((e.decades += D(e.years / v)),
                (e.years %= v),
                e.decades >= b &&
                  ((e.centuries += D(e.decades / b)),
                  (e.decades %= b),
                  e.centuries >= S && ((e.millennia += D(e.centuries / S)), (e.centuries %= S))));
          })(l),
          (function (l, w, M, A) {
            var E = 0;
            !(w & c) || E >= M
              ? ((l.centuries += l.millennia * S), delete l.millennia)
              : l.millennia && E++,
              !(w & u) || E >= M
                ? ((l.decades += l.centuries * b), delete l.centuries)
                : l.centuries && E++,
              !(w & d) || E >= M
                ? ((l.years += l.decades * v), delete l.decades)
                : l.decades && E++,
              !(w & a) || E >= M ? ((l.months += l.years * g), delete l.years) : l.years && E++,
              !(w & r) || E >= M
                ? (l.months && (l.days += N(l.refMonth, l.months)),
                  delete l.months,
                  l.days >= y && ((l.weeks += D(l.days / y)), (l.days %= y)))
                : l.months && E++,
              !(w & i) || E >= M ? ((l.days += l.weeks * y), delete l.weeks) : l.weeks && E++,
              !(w & o) || E >= M ? ((l.hours += l.days * h), delete l.days) : l.days && E++,
              !(w & s) || E >= M ? ((l.minutes += l.hours * f), delete l.hours) : l.hours && E++,
              !(w & n) || E >= M
                ? ((l.seconds += l.minutes * p), delete l.minutes)
                : l.minutes && E++,
              !(w & t) || E >= M
                ? ((l.milliseconds += l.seconds * m), delete l.seconds)
                : l.seconds && E++,
              (w & e && !(E >= M)) || O(l, A);
          })(l, E, C, T);
      } finally {
        delete l.refMonth;
      }
      return l;
    }
    function U(i, r, a, d, u) {
      var c;
      (a = +a || l), (d = d > 0 ? d : NaN), (u = u > 0 ? (u < 20 ? Math.round(u) : 20) : 0);
      var w = null;
      "function" == typeof i
        ? ((c = i), (i = null))
        : i instanceof Date ||
          (null !== i && isFinite(i)
            ? (i = new Date(+i))
            : ("object" == typeof w && (w = i), (i = null)));
      var g = null;
      if (
        ("function" == typeof r
          ? ((c = r), (r = null))
          : r instanceof Date ||
            (null !== r && isFinite(r)
              ? (r = new Date(+r))
              : ("object" == typeof r && (g = r), (r = null))),
        w && (i = E(w, r)),
        g && (r = E(g, i)),
        !i && !r)
      )
        return new Y();
      if (!c) return j(new Y(), i, r, a, d, u);
      var v,
        b = (function (i) {
          return i & e
            ? m / 30
            : i & t
            ? m
            : i & n
            ? m * p
            : i & s
            ? m * p * f
            : i & o
            ? m * p * f * h
            : m * p * f * h * y;
        })(a),
        S = function () {
          c(j(new Y(), i, r, a, d, u), v);
        };
      return S(), (v = setInterval(S, b));
    }
    (Y.prototype.toString = function (e) {
      var t = H(this),
        n = t.length;
      if (!n) return e ? "" + e : x;
      if (1 === n) return t[0];
      var s = k + t.pop();
      return t.join(I) + s;
    }),
      (Y.prototype.toHTML = function (e, t) {
        e = e || "span";
        var n = H(this),
          s = n.length;
        if (!s) return (t = t || x) ? "<" + e + ">" + t + "</" + e + ">" : t;
        for (var o = 0; o < s; o++) n[o] = "<" + e + ">" + n[o] + "</" + e + ">";
        if (1 === s) return n[0];
        var i = k + n.pop();
        return n.join(I) + i;
      }),
      (Y.prototype.addTo = function (e) {
        return E(this, e);
      }),
      (H = function (e) {
        var t = [],
          n = e.millennia;
        return (
          n && t.push(L(n, 10)),
          (n = e.centuries) && t.push(L(n, 9)),
          (n = e.decades) && t.push(L(n, 8)),
          (n = e.years) && t.push(L(n, 7)),
          (n = e.months) && t.push(L(n, 6)),
          (n = e.weeks) && t.push(L(n, 5)),
          (n = e.days) && t.push(L(n, 4)),
          (n = e.hours) && t.push(L(n, 3)),
          (n = e.minutes) && t.push(L(n, 2)),
          (n = e.seconds) && t.push(L(n, 1)),
          (n = e.milliseconds) && t.push(L(n, 0)),
          t
        );
      }),
      (U.MILLISECONDS = e),
      (U.SECONDS = t),
      (U.MINUTES = n),
      (U.HOURS = s),
      (U.DAYS = o),
      (U.WEEKS = i),
      (U.MONTHS = r),
      (U.YEARS = a),
      (U.DECADES = d),
      (U.CENTURIES = u),
      (U.MILLENNIA = c),
      (U.DEFAULTS = l),
      (U.ALL = c | u | d | a | r | i | o | s | n | t | e);
    var $ = (U.setFormat = function (e) {
        if (e) {
          if ("singular" in e || "plural" in e) {
            var t = e.singular || [];
            t.split && (t = t.split("|"));
            var n = e.plural || [];
            n.split && (n = n.split("|"));
            for (var s = 0; s <= 10; s++) (C[s] = t[s] || C[s]), (T[s] = n[s] || T[s]);
          }
          "string" == typeof e.last && (k = e.last),
            "string" == typeof e.delim && (I = e.delim),
            "string" == typeof e.empty && (x = e.empty),
            "function" == typeof e.formatNumber && (q = e.formatNumber),
            "function" == typeof e.formatter && (L = e.formatter);
        }
      }),
      _ = (U.resetFormat = function () {
        (C =
          " millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split(
            "|"
          )),
          (T =
            " milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split(
              "|"
            )),
          (k = " and "),
          (I = ", "),
          (x = ""),
          (q = function (e) {
            return e;
          }),
          (L = F);
      });
    return (
      (U.setLabels = function (e, t, n, s, o, i, r) {
        $({ singular: e, plural: t, last: n, delim: s, empty: o, formatNumber: i, formatter: r });
      }),
      (U.resetLabels = _),
      _(),
      "undefined" != typeof module && module.exports
        ? (module.exports = U)
        : "undefined" != typeof window &&
          "function" == typeof window.define &&
          void 0 !== window.define.amd &&
          window.define("countdown", [], function () {
            return U;
          }),
      U
    );
  })(),
  DIRECTIVE_KEY_MAP = {
    Y: "years",
    m: "months",
    n: "daysToMonth",
    d: "daysToWeek",
    w: "weeks",
    W: "weeksToMonth",
    H: "hours",
    M: "minutes",
    S: "seconds",
    D: "days",
    I: "totalHours",
    N: "totalMinutes",
    T: "totalSeconds",
  };
function escapedRegExp(e) {
  var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  return new RegExp(t);
}
function strftime(e) {
  return function (t) {
    var n = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
    if (n)
      for (var s = 0, o = n.length; s < o; ++s) {
        var i = n[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
          r = escapedRegExp(i[0]),
          a = i[1] || "",
          d = i[3] || "",
          u = null;
        (i = i[2]),
          DIRECTIVE_KEY_MAP.hasOwnProperty(i) && ((u = DIRECTIVE_KEY_MAP[i]), (u = Number(e[u]))),
          null !== u &&
            ("!" === a && (u = pluralize(d, u)),
            "" === a && u < 10 && (u = "0" + u.toString()),
            (t = t.replace(r, u.toString())));
      }
    return (t = t.replace(/%%/, "%"));
  };
}
function pluralize(e, t) {
  var n = "s",
    s = "";
  return (
    e &&
      (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length
        ? (n = e[0])
        : ((s = e[0]), (n = e[1]))),
    Math.abs(t) > 1 ? n : s
  );
}
var matchers = [];
function parseDateString(e) {
  if (e instanceof Date) return e;
  if (!String(e).match(matchers)) throw new Error("Couldn't cast `" + e + "` to a date object.");
  {
    String(e).match(/^[0-9]*$/) && (e = Number(e)),
      String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/"));
    const t = new Date(e);
    if (isValidDate(t)) return t;
  }
}
function isValidDate(e) {
  return e instanceof Date && !isNaN(e);
}
matchers.push(/^[0-9]*$/.source),
  matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
  matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
  (matchers = new RegExp(matchers.join("|")));
var isBuilder = document.querySelector("html").classList.contains("is-builder"),
  countdowns = [];
function initCountdown(e) {
  document.querySelectorAll(".countdown:not(.countdown-inited)").forEach(function (t) {
    const n = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
    t.classList.add("countdown-inited");
    var s = parseDateString(t.getAttribute("data-due-date"));
    if (
      (countdowns.find((t) => t.id === e.getAttribute("id")) && (countdowns = []),
      e.getAttribute("id"))
    ) {
      let o = countdown(
        s,
        function (e) {
          e.strftime = strftime(e);
          var n = t
              .closest(".countdown-cont")
              .querySelector("div.daysCountdown")
              .getAttribute("title"),
            s = t
              .closest(".countdown-cont")
              .querySelector("div.hoursCountdown")
              .getAttribute("title"),
            o = t
              .closest(".countdown-cont")
              .querySelector("div.minutesCountdown")
              .getAttribute("title"),
            i = t
              .closest(".countdown-cont")
              .querySelector("div.secondsCountdown")
              .getAttribute("title");
          let r = d(t.closest(".countdown-cont").classList, "display"),
            a = d(
              t
                .closest(".countdown-cont")
                .querySelector(
                  "div.daysCountdown, div.hoursCountdown, div.minutesCountdown, div.secondsCountdown"
                ).classList,
              "display"
            );
          function d(e, t) {
            const n = new RegExp(`^${t}-\\d+$`);
            for (let t = 0; t < e.length; t++) if (n.test(e[t])) return e[t];
            return null;
          }
          t.innerHTML = e.strftime(
            [
              '<div class="row">',
              '<div class="col-3">',
              '<div class="number-wrap">',
              '<span class="number ',
              r || "display-2",
              '"><b>%D</b></span>',
              '<span mbr-text class="period ',
              a || "display-7",
              '">',
              n,
              "</span>",
              '<span class="dot">:</span>',
              "</div>",
              "</div>",
              '<div class="col-3">',
              '<div class="number-wrap">',
              '<span class="number ',
              r || "display-2",
              '"><b>%H</b></span>',
              '<span mbr-text class="period ',
              a || "display-7",
              '">',
              s,
              "</span>",
              '<span class="dot">:</span>',
              "</div>",
              "</div>",
              '<div class="col-3">',
              '<div class="number-wrap">',
              '<span class="number ',
              r || "display-2",
              '"><b>%M</b></span>',
              '<span mbr-text class="period ',
              a || "display-7",
              '">',
              o,
              "</span>",
              '<span class="dot">:</span>',
              "</div>",
              "</div>",
              '<div class="col-3">',
              '<div class="number-wrap">',
              '<span class="number ',
              r || "display-2",
              '"><b>%S</b></span>',
              '<span mbr-text class="period ',
              a || "display-7",
              '">',
              i,
              "</span>",
              "</div>",
              "</div>",
              "</div>",
            ].join("")
          );
        },
        n
      );
      const i = { id: e.getAttribute("id"), timerId: o };
      i.id && countdowns.push(i);
    }
  }),
    document.querySelectorAll(".countdown:not(.countdown-inited)").forEach(function (e) {
      new countdown(e.getAttribute("data-due-date"), function (t) {
        e.textContent = t.strftime("%D days %H:%M:%S");
      });
    });
}
function initCountdownBuild() {
  document.querySelectorAll(".countdown:not(.countdown-inited)").forEach(function (e) {
    const t = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
    e.classList.add("countdown-inited");
    var n = parseDateString(e.getAttribute("data-due-date"));
    countdown(
      n,
      function (t) {
        t.strftime = strftime(t);
        var n = e
            .closest(".countdown-cont")
            .querySelector("div.daysCountdown")
            .getAttribute("title"),
          s = e
            .closest(".countdown-cont")
            .querySelector("div.hoursCountdown")
            .getAttribute("title"),
          o = e
            .closest(".countdown-cont")
            .querySelector("div.minutesCountdown")
            .getAttribute("title"),
          i = e
            .closest(".countdown-cont")
            .querySelector("div.secondsCountdown")
            .getAttribute("title");
        e.innerHTML = t.strftime(
          [
            '<div class="row">',
            '<div class="col-3">',
            '<div class="number-wrap">',
            '<span class="number display-2"><b>%D</b></span>',
            '<span mbr-text class="period display-7">',
            n,
            "</span>",
            '<span class="dot">:</span>',
            "</div>",
            "</div>",
            '<div class="col-3">',
            '<div class="number-wrap">',
            '<span class="number display-2"><b>%H</b></span>',
            '<span mbr-text class="period display-7">',
            s,
            "</span>",
            '<span class="dot">:</span>',
            "</div>",
            "</div>",
            '<div class="col-3">',
            '<div class="number-wrap">',
            '<span class="number display-2"><b>%M</b></span>',
            '<span mbr-text class="period display-7">',
            o,
            "</span>",
            '<span class="dot">:</span>',
            "</div>",
            "</div>",
            '<div class="col-3">',
            '<div class="number-wrap">',
            '<span class="number display-2"><b>%S</b></span>',
            '<span mbr-text class="period display-7">',
            i,
            "</span>",
            "</div>",
            "</div>",
            "</div>",
          ].join("")
        );
      },
      t
    );
  });
}
function changeCountdown(e, t) {
  var n = e.querySelector(".countdown");
  t.search(/\d\d\d\d\/\d\d\/\d\d/g) > -1 &&
    (n.classList.remove("countdown-inited"), initCountdown(e));
}
isBuilder
  ? $(document)
      .on("add.cards", function (e) {
        0 != $(".countdown").length && initCountdown(e.target);
      })
      .on("changeParameter.cards", function (e, t, n) {
        if ("countdown" === t) {
          let t = countdowns.find((t) => t.id === e.target.getAttribute("id")),
            s = countdowns.findIndex((t) => t.id === e.target.getAttribute("id"));
          t && (clearTimeout(t.timerId), countdowns.splice(s, 1)), changeCountdown(e.target, n);
        }
      })
      .on("delete.cards", function (e) {
        if (e.target.querySelector(".countdown")) {
          const t = countdowns.find((t) => t.id === e.target.getAttribute("id"));
          let n = countdowns.findIndex((t) => t.id === e.target.getAttribute("id"));
          -1 !== n && (clearTimeout(t.timerId), countdowns.splice(n, 1));
        }
      })
  : 0 != document.querySelectorAll(".countdown").length && initCountdownBuild();
