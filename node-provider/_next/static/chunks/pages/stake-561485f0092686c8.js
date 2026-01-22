(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8797],
  {
    37833: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stake",
        function () {
          return n(81447);
        },
      ]);
    },
    81447: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eo;
          },
        });
      var a = n(85893);
      n(36501);
      var i = n(2711),
        r = n.n(i);
      n(37611);
      var o = n(67294);
      n(87405), n(83421), n(52966), n(75850);
      var s = n(64893),
        l = n(12824),
        p = n(30082),
        d = n(20564),
        c = n(66792),
        u = n(14899),
        m = n(23673),
        x = n(85703),
        f = n(82729);
      n(3313);
      var y = n(45697),
        h = n.n(y),
        b = n(13711),
        g = n(55764),
        v = n(16829),
        S = n(44905),
        w = n(69077),
        T = n(95162),
        j = n(82032),
        k = n(64072);
      function P(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function D(e, t, n) {
        return t && C(e.prototype, t), n && C(e, n), e;
      }
      function M(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Z(e, t);
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Z(e, t) {
        return (Z =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function R(e) {
        var t = (function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = E(e);
          return (
            (n = t
              ? Reflect.construct(a, arguments, E(this).constructor)
              : a.apply(this, arguments)),
            n && ("object" == typeof n || "function" == typeof n)
              ? n
              : (function (e) {
                  if (void 0 === e)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(this)
          );
        };
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function F(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          a = String(e);
        if (0 === n) return a;
        var i = a.match(/(.*?)([0-9]+)(.*)/),
          r = i ? i[1] : "",
          o = i ? i[3] : "",
          s = i ? i[2] : a,
          l =
            s.length >= n
              ? s
              : (
                  (
                    (function (e) {
                      if (Array.isArray(e)) return O(e);
                    })((t = Array(n))) ||
                    (function (e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    (function (e, t) {
                      if (e) {
                        if ("string" == typeof e) return O(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(e);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return O(e, void 0);
                      }
                    })(t) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  )
                    .map(function () {
                      return "0";
                    })
                    .join("") + s
                ).slice(-1 * n);
        return "".concat(r).concat(l).concat(o);
      }
      var N = { daysInHours: !1, zeroPadTime: 2 },
        _ = (function (e) {
          M(n, e);
          var t = R(n);
          function n() {
            var e;
            return (
              P(this, n),
              (e = t.apply(this, arguments)),
              (e.state = { count: e.props.count || 3 }),
              (e.startCountdown = function () {
                e.interval = window.setInterval(function () {
                  0 == e.state.count - 1
                    ? (e.stopCountdown(),
                      e.props.onComplete && e.props.onComplete())
                    : e.setState(function (e) {
                        return { count: e.count - 1 };
                      });
                }, 1e3);
              }),
              (e.stopCountdown = function () {
                clearInterval(e.interval);
              }),
              (e.addTime = function (t) {
                e.stopCountdown(),
                  e.setState(function (e) {
                    return { count: e.count + t };
                  }, e.startCountdown);
              }),
              e
            );
          }
          return (
            D(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startCountdown();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.interval);
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children
                    ? (0, o.cloneElement)(this.props.children, {
                        count: this.state.count,
                      })
                    : null;
                },
              },
            ]),
            n
          );
        })(o.Component);
      _.propTypes = {
        count: y.number,
        children: y.element,
        onComplete: y.func,
      };
      var I = (function (e) {
        M(n, e);
        var t = R(n);
        function n(e) {
          var a;
          if (
            (P(this, n),
            ((a = t.call(this, e)).mounted = !1),
            (a.initialTimestamp = a.calcOffsetStartTimestamp()),
            (a.offsetStartTimestamp = a.props.autoStart
              ? 0
              : a.initialTimestamp),
            (a.offsetTime = 0),
            (a.legacyMode = !1),
            (a.legacyCountdownRef = (0, o.createRef)()),
            (a.tick = function () {
              var e = a.calcTimeDelta(),
                t = e.completed && !a.props.overtime ? void 0 : a.props.onTick;
              a.setTimeDeltaState(e, void 0, t);
            }),
            (a.start = function () {
              if (!a.isStarted()) {
                var e = a.offsetStartTimestamp;
                (a.offsetStartTimestamp = 0),
                  (a.offsetTime += e ? a.calcOffsetStartTimestamp() - e : 0);
                var t = a.calcTimeDelta();
                a.setTimeDeltaState(t, "STARTED", a.props.onStart),
                  a.props.controlled ||
                    (t.completed && !a.props.overtime) ||
                    (a.clearTimer(),
                    (a.interval = window.setInterval(
                      a.tick,
                      a.props.intervalDelay
                    )));
              }
            }),
            (a.pause = function () {
              a.isPaused() ||
                (a.clearTimer(),
                (a.offsetStartTimestamp = a.calcOffsetStartTimestamp()),
                a.setTimeDeltaState(
                  a.state.timeDelta,
                  "PAUSED",
                  a.props.onPause
                ));
            }),
            (a.stop = function () {
              a.isStopped() ||
                (a.clearTimer(),
                (a.offsetStartTimestamp = a.calcOffsetStartTimestamp()),
                (a.offsetTime = a.offsetStartTimestamp - a.initialTimestamp),
                a.setTimeDeltaState(
                  a.calcTimeDelta(),
                  "STOPPED",
                  a.props.onStop
                ));
            }),
            (a.isStarted = function () {
              return a.isStatus("STARTED");
            }),
            (a.isPaused = function () {
              return a.isStatus("PAUSED");
            }),
            (a.isStopped = function () {
              return a.isStatus("STOPPED");
            }),
            (a.isCompleted = function () {
              return a.isStatus("COMPLETED");
            }),
            e.date)
          ) {
            var i = a.calcTimeDelta();
            a.state = {
              timeDelta: i,
              status: i.completed ? "COMPLETED" : "STOPPED",
            };
          } else a.legacyMode = !0;
          return a;
        }
        return (
          D(n, [
            {
              key: "componentDidMount",
              value: function () {
                !this.legacyMode &&
                  ((this.mounted = !0),
                  this.props.onMount &&
                    this.props.onMount(this.calcTimeDelta()),
                  this.props.autoStart && this.start());
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.legacyMode ||
                  this.props.date === e.date ||
                  ((this.initialTimestamp = this.calcOffsetStartTimestamp()),
                  (this.offsetStartTimestamp = this.initialTimestamp),
                  (this.offsetTime = 0),
                  this.setTimeDeltaState(this.calcTimeDelta()));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.legacyMode || ((this.mounted = !1), this.clearTimer());
              },
            },
            {
              key: "calcTimeDelta",
              value: function () {
                var e = this.props,
                  t = e.date,
                  n = e.now,
                  a = e.precision,
                  i = e.controlled,
                  r = e.overtime;
                return (function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = n.now,
                    i = void 0 === a ? Date.now : a,
                    r = n.precision,
                    o = n.controlled,
                    s = n.offsetTime,
                    l = n.overtime;
                  (t =
                    "string" == typeof e
                      ? new Date(e).getTime()
                      : e instanceof Date
                      ? e.getTime()
                      : e),
                    o || (t += void 0 === s ? 0 : s);
                  var p = o ? t : t - i(),
                    d = Math.round(
                      1e3 *
                        parseFloat(
                          ((l ? p : Math.max(0, p)) / 1e3).toFixed(
                            Math.min(20, Math.max(0, void 0 === r ? 0 : r))
                          )
                        )
                    ),
                    c = Math.abs(d) / 1e3;
                  return {
                    total: d,
                    days: Math.floor(c / 86400),
                    hours: Math.floor((c / 3600) % 24),
                    minutes: Math.floor((c / 60) % 60),
                    seconds: Math.floor(c % 60),
                    milliseconds: Number(((c % 1) * 1e3).toFixed()),
                    completed: d <= 0,
                  };
                })(t, {
                  now: n,
                  precision: a,
                  controlled: i,
                  offsetTime: this.offsetTime,
                  overtime: r,
                });
              },
            },
            {
              key: "calcOffsetStartTimestamp",
              value: function () {
                return Date.now();
              },
            },
            {
              key: "addTime",
              value: function (e) {
                this.legacyCountdownRef.current.addTime(e);
              },
            },
            {
              key: "clearTimer",
              value: function () {
                window.clearInterval(this.interval);
              },
            },
            {
              key: "isStatus",
              value: function (e) {
                return this.state.status === e;
              },
            },
            {
              key: "setTimeDeltaState",
              value: function (e, t, n) {
                var a = this;
                if (this.mounted) {
                  var i = e.completed && !this.state.timeDelta.completed,
                    r = e.completed && "STARTED" === t;
                  return (
                    i && !this.props.overtime && this.clearTimer(),
                    this.setState(
                      function (n) {
                        var i = t || n.status;
                        return (
                          e.completed && !a.props.overtime
                            ? (i = "COMPLETED")
                            : t || "COMPLETED" !== i || (i = "STOPPED"),
                          { timeDelta: e, status: i }
                        );
                      },
                      function () {
                        n && n(a.state.timeDelta),
                          a.props.onComplete &&
                            (i || r) &&
                            a.props.onComplete(e, r);
                      }
                    )
                  );
                }
              },
            },
            {
              key: "getApi",
              value: function () {
                return (this.api = this.api || {
                  start: this.start,
                  pause: this.pause,
                  stop: this.stop,
                  isStarted: this.isStarted,
                  isPaused: this.isPaused,
                  isStopped: this.isStopped,
                  isCompleted: this.isCompleted,
                });
              },
            },
            {
              key: "getRenderProps",
              value: function () {
                var e,
                  t,
                  n,
                  a,
                  i,
                  r,
                  o,
                  s,
                  l,
                  p,
                  d,
                  c,
                  u = this.props,
                  m = u.daysInHours,
                  x = u.zeroPadTime,
                  f = u.zeroPadDays,
                  y = this.state.timeDelta;
                return Object.assign(Object.assign({}, y), {
                  api: this.getApi(),
                  props: this.props,
                  formatted:
                    ((e = { daysInHours: m, zeroPadTime: x, zeroPadDays: f }),
                    (t = y.days),
                    (n = y.hours),
                    (a = y.minutes),
                    (i = y.seconds),
                    (o = (r = Object.assign(Object.assign({}, N), e))
                      .daysInHours),
                    (s = r.zeroPadTime),
                    (p = void 0 === (l = r.zeroPadDays) ? s : l),
                    (d = Math.min(2, s)),
                    (c = o ? F(n + 24 * t, s) : F(n, d)),
                    {
                      days: o ? "" : F(t, p),
                      hours: c,
                      minutes: F(a, d),
                      seconds: F(i, d),
                    }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                if (this.legacyMode) {
                  var e = this.props,
                    t = e.count,
                    n = e.children,
                    a = e.onComplete;
                  return (0, o.createElement)(
                    _,
                    { ref: this.legacyCountdownRef, count: t, onComplete: a },
                    n
                  );
                }
                var i = this.props,
                  r = i.className,
                  s = i.overtime,
                  l = i.children,
                  p = i.renderer,
                  d = this.getRenderProps();
                if (p) return p(d);
                if (l && this.state.timeDelta.completed && !s)
                  return (0, o.cloneElement)(l, { countdown: d });
                var c = d.formatted,
                  u = c.days,
                  m = c.hours,
                  x = c.minutes,
                  f = c.seconds;
                return (0, o.createElement)(
                  "span",
                  { className: r },
                  d.total < 0 ? "-" : "",
                  u,
                  u ? ":" : "",
                  m,
                  ":",
                  x,
                  ":",
                  f
                );
              },
            },
          ]),
          n
        );
      })(o.Component);
      (I.defaultProps = Object.assign(Object.assign({}, N), {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0,
      })),
        (I.propTypes = {
          date: (0, y.oneOfType)([(0, y.instanceOf)(Date), y.string, y.number]),
          daysInHours: y.bool,
          zeroPadTime: y.number,
          zeroPadDays: y.number,
          controlled: y.bool,
          intervalDelay: y.number,
          precision: y.number,
          autoStart: y.bool,
          overtime: y.bool,
          className: y.string,
          children: y.element,
          renderer: y.func,
          now: y.func,
          onMount: y.func,
          onStart: y.func,
          onPause: y.func,
          onStop: y.func,
          onTick: y.func,
          onComplete: y.func,
        });
      var A = n(3714);
      let z = () => {
          let e = new Date(),
            t = e.getDay(),
            n = e.getHours();
          e.getMinutes(), e.getSeconds();
          let a = (5 - t + 7) % 7;
          0 === a && n >= 13 && (a = 7);
          let i = new Date(e);
          return (
            i.setDate(e.getDate() + a),
            i.setHours(13, 0, 0, 0),
            Math.floor((i - e) / 1e3)
          );
        },
        U = (e) => {
          let { days: t, hours: n, minutes: i, seconds: r } = e;
          return (0, a.jsxs)("span", {
            children: [t, "d:", n, "h:", i, "m:", r, "s"],
          });
        };
      var H = () => {
        let e = z(),
          t = Date.now() + 1e3 * e;
        return (0, a.jsx)(A.Z, {
          variant: "body1",
          fontFamily: "PoppinsR",
          children: (0, a.jsx)(I, { date: t, renderer: U }),
        });
      };
      let B = "0xc668695dcbcf682de106da94bde65c9bc79362d3";
      var L = "0xb081919c68aa5d50e3bc0ef213dc391512dd45a1",
        W = [
          {
            inputs: [
              {
                internalType: "address",
                name: "_spilAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_rewardToken",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Claimed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "uint256",
                name: "epoch",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "epochStart",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "epochEnd",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "epochRewardRate",
                type: "uint256",
              },
            ],
            name: "Epoch",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Staked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Unstaked",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "calculateRewards",
            outputs: [
              { internalType: "uint256", name: "rewards", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "currentEpoch",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "address", name: "_to", type: "address" },
            ],
            name: "emergencyWithdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "address", name: "_to", type: "address" },
            ],
            name: "emergencyWithdrawETH",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "epochData",
            outputs: [
              { internalType: "uint256", name: "epochStart", type: "uint256" },
              { internalType: "uint256", name: "epochEnd", type: "uint256" },
              {
                internalType: "uint256",
                name: "epochRewardRate",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "rewardToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_antibottime_",
                type: "uint256",
              },
            ],
            name: "setAntibotTime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bool", name: "_paused_", type: "bool" }],
            name: "setPaused",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "spillToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "stake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "stakers",
            outputs: [
              {
                internalType: "uint256",
                name: "lastClaimedEpoch",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalStakedAmount",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "users", type: "address[]" },
            ],
            name: "stakersInfo",
            outputs: [
              { internalType: "uint256[][]", name: "", type: "uint256[][]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "startInitial",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_rewards", type: "uint256" },
            ],
            name: "startNewEpoch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "totalRewardsClaimed",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalStaked",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "unstake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
      function $() {
        let e = (0, f._)([
          "\n  display: flex;\n  width: 100%;\n  flex-direction: ",
          ";\n  align-items: ",
          ";\n  justify-content: ",
          ";\n  padding: ",
          ";\n  margin: ",
          ";\n  gap: ",
          ";\n  @media (max-width: 899px) {\n    flex-direction: ",
          ";\n  }\n",
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        let e = (0, f._)([
          "\nwidth: 33.3%;\nbackground-color: rgba(27, 24, 33, 0.8);\n/* color:# ; */\n  color:#707070 ;\n  &.Mui-selected {\n    color: #4cc054  !important; \n    background-color: #000 ;\n  }\n  & .Mui-focusVisible {\n\n    background-color: #000 !important ;\n  }\n  @media (max-width: 599px) {\n    font-size: 14px;\n  }\n",
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        let e = (0, f._)([
          "\n  max-width: 100%;\n  .MuiTabs-flexContainer {\n    display: flex; \n    &>.MuiButtonBase-root{\n      font-family: PoppinsM;\n      background-color:transparent;\n      padding:5px 16px;\n      min-height:38px;\n      border-radius:2px;\n      &.Mui-selected {\n        color: #fff;\n        background: #0066ff;\n        border-bottom: none;\n      }\n    }\n    @media (max-width: 599px){\n      flex-direction:column;\n    }\n}\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        let e = (0, f._)([
          "\n  /* width: 100%;\n  height: auto;\n  display: block; */\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        let e = (0, f._)([
          "\n  width: 100%;\n  padding: ",
          " ;\n  font-size: 16px;\n  color: #fff;\n  background-color: #000;\n  border: none;\n  border-radius: 8px;\n  font-family: PoppinsR;\n  :focus {\n    outline: none;\n  }\n",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      let J = (0, v.default)(c.ZP)(
          $(),
          (e) => (e.fd ? e.fd : "row"),
          (e) => (e.ai ? e.ai : "center"),
          (e) => (e.jc ? e.jc : "center"),
          (e) => (e.p ? e.p : "0px"),
          (e) => (e.m ? e.m : "0"),
          (e) => (e.g ? e.g : "0"),
          (e) => e.fd899
        ),
        K = (0, v.default)(g.Z)(G());
      (0, v.default)(b.Z)(V()), v.default.img(X());
      let Y = v.default.input(q(), (e) => (e.p ? e.p : "7px 10px"));
      function Q(e) {
        let { children: t, value: n, index: i, ...r } = e;
        return (0, a.jsx)("div", {
          role: "tabpanel",
          hidden: n !== i,
          id: "simple-tabpanel-".concat(i),
          "aria-labelledby": "simple-tab-".concat(i),
          ...r,
          style: {
            width: "100%",
            backgroundColor: "rgba(27,24,33,0.60) !important",
          },
          children:
            n === i &&
            (0, a.jsx)(p.Z, { sx: { paddingBottom: "25px" }, children: t }),
        });
      }
      function ee(e) {
        return {
          id: "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      Q.propTypes = {
        children: h().node,
        index: h().number.isRequired,
        value: h().number.isRequired,
      };
      var et = () => {
          let [e, t] = (0, o.useState)(0),
            n = (0, w.mA)(),
            [i, r] = (0, o.useState)(),
            [s, l] = (0, o.useState)("Connect Wallet"),
            [d, c] = (0, o.useState)(!1),
            [u, m] = (0, o.useState)(!1),
            [f, y] = (0, o.useState)("a"),
            [h, g] = (0, o.useState)(0),
            [v, P] = (0, o.useState)(0),
            [C, D] = (0, o.useState)(0),
            [M, E] = (0, o.useState)(0),
            [Z, R] = (0, o.useState)(0),
            [O, F] = (0, o.useState)(),
            [N, _] = (0, o.useState)(0),
            [I, A] = (0, o.useState)(0),
            [z, U] = (0, o.useState)(0),
            [$, G] = (0, o.useState)(0),
            [V, X] = (0, o.useState)(!0),
            [q, et] = (0, o.useState)(!1),
            [en, ea] = (0, o.useState)(!1),
            [ei, er] = (0, o.useState)(),
            [eo, es] = (0, o.useState)(),
            [el, ep] = (0, o.useState)(!1),
            [ed, ec] = (0, o.useState)(!1),
            [eu, em] = (0, o.useState)(!1),
            [ex, ef] = (0, o.useState)(0),
            [ey, eh] = (0, o.useState)(!1),
            [eb, eg] = (0, o.useState)("1"),
            { open: ev, close: eS } = (0, T.k_)(),
            { isConnected: ew, address: eT } = (0, w.mA)(),
            { chain: ej } = (0, w.LN)(),
            { chains: ek, switchNetwork: eP } = (0, w.g0)(),
            eC = ek.map((e) => (null == e ? void 0 : e.id)),
            eD = async () => {
              try {
                let e = await fetch(
                    "".concat(API_URL).concat("addStakingDetails"),
                    {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify({
                        walletAddress: eT,
                        transactionHash: el,
                        amount: v,
                      }),
                    }
                  ),
                  t = await e.json();
                (null == t ? void 0 : t.message) === "succes" || ea(!1);
              } catch (e) {
                ea(!1);
              }
            },
            eM = async () => {
              try {
                let e = await fetch(
                    "".concat(API_URL).concat("addClaimRewardDetails"),
                    {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify({
                        walletAddress: eT,
                        transactionHash: ed,
                        amount: I,
                      }),
                    }
                  ),
                  t = await e.json();
                null == t || t.message, ea(!1);
              } catch (e) {
                ea(!1);
              }
            };
          (0, w.KQ)({
            address: null == n ? void 0 : n.address,
            token: B,
            chainId: null == ej ? void 0 : ej.id,
            watch: !0,
            onSettled(e, t) {
              e && _(() => Number(null == e ? void 0 : e.formatted)),
                t && (_(0), console.error(t));
            },
          }),
            (0, w.do)({
              address: L,
              abi: W,
              functionName: "calculateRewards",
              args: [null == n ? void 0 : n.address],
              watch: !0,
              onSettled(e, t) {
                e &&
                  A(() => (0 >= S.dF(e) ? 0 : parseFloat(S.dF(e)).toFixed(2))),
                  t && console.error("calculateRewards error", t);
              },
            }),
            (0, w.do)({
              address: L,
              abi: W,
              functionName: "stakers",
              args: [null == n ? void 0 : n.address],
              watch: !0,
              enabled: !!(null == n ? void 0 : n.address),
              onSettled(e, t) {
                e && (U(() => parseInt(e[1])), G(() => S.dF(e[1]))),
                  t && (U(0), G(0), console.error(t));
              },
            }),
            (0, o.useEffect)(() => {
              setTimeout(() => {
                F("");
              }, 5e3);
            }, [O]),
            (0, o.useEffect)(() => {}, [N, z, I]);
          let eE = (0, w.GG)({
              mode: "recklesslyUnprepared",
              address: B,
              abi: j.ww,
              functionName: "approve",
              args: [L, C],
              overrides: { from: null == n ? void 0 : n.address },
              onError(e) {
                F(!0), ea(!1), console.error("Approve error: ", e);
              },
              onSuccess(e) {
                er(e.hash);
              },
            }),
            eZ = async () => {
              if ("" == h || h <= 0.001 || isNaN(h) || h > N || h <= 0) {
                F(!0);
                return;
              }
              ea(!0), null == eE || eE.write();
            };
          (0, w.BX)({
            hash: ei,
            enabled: ei,
            onSettled(e, t) {
              t ? (ea(!1), X(!1)) : (ea(!1), F(!0));
            },
          }),
            (0, w.do)({
              address: B,
              abi: j.ww,
              chainId: null == ej ? void 0 : ej.id,
              functionName: "allowance",
              args: [null == n ? void 0 : n.address, L],
              watch: !0,
              onSuccess(e) {
                ef(S.dF(e)), S.dF(e) >= h ? X(!1) : X(!0);
              },
              onError(e) {
                X(!0);
              },
            });
          let eR = (0, w.GG)({
            mode: "recklesslyUnprepared",
            address: L,
            abi: W,
            functionName: "stake",
            args: [C],
            overrides: { from: null == n ? void 0 : n.address },
            onError(e) {
              console.error("Stake error: ", e), ea(!1);
            },
            onSuccess(e) {
              ep(null == e ? void 0 : e.hash);
            },
          });
          (0, w.BX)({
            hash: el,
            enabled: el,
            onSettled(e, t) {
              t || eD(), ea(!1);
            },
          });
          let eO = async () => {
              if ("" == h || h <= 0.001 || isNaN(h) || h > N || h <= 0) {
                F(!0);
                return;
              }
              ea(!0), P(h), null == eR || eR.write();
            },
            eF = (e, t) => {
              if ("srch" == t) {
                let t = e.target.value.toLowerCase();
                if (!t.includes("e")) {
                  if ((g(t), t >= ex ? X(!0) : X(!1), t >= 0.01)) {
                    if (t.includes(".")) {
                      let [e, n] = t.split(".");
                      if (n.length >= 4) {
                        if (parseInt(n.substring(0, 4)) > 0)
                          parseFloat(t).toFixed(4),
                            D(
                              S.fi(
                                "".concat(e, ".").concat(n.substring(0, 4))
                              ).toString()
                            );
                        else {
                          let e = t.split(".")[0];
                          D(S.fi("".concat(e)).toString());
                        }
                      } else if (parseInt(n.substring(0, n.length)) > 0)
                        parseFloat(t).toFixed(4),
                          D(
                            S.fi(
                              "".concat(e, ".").concat(n.substring(0, n.length))
                            ).toString()
                          );
                      else {
                        let e = t.split(".")[0];
                        D(S.fi(null == e ? void 0 : e.toString()).toString());
                      }
                    } else
                      D(S.fi(null == t ? void 0 : t.toString()).toString());
                  }
                  t > N ? F(!0) : t <= 0 ? F(!0) : F(!1);
                }
              } else
                e >= ex ? X(!0) : X(!1),
                  e > 0 &&
                    D(S.fi(null == e ? void 0 : e.toString()).toString()),
                  g(e),
                  e > N ? F(!0) : e <= 0 ? F(!0) : F(!1);
            },
            [eN, e_] = (0, o.useState)(""),
            eI = (0, w.GG)({
              mode: "recklesslyUnprepared",
              address: L,
              abi: W,
              functionName: "unstake",
              args: [Z],
              overrides: { from: null == n ? void 0 : n.address },
              onError(e) {
                console.error("Unstake error: ", e), ea(!1);
              },
              onSuccess(e) {
                em(null == e ? void 0 : e.hash);
              },
            });
          (0, w.BX)({
            hash: eu,
            enabled: eu,
            onSettled(e, t) {
              t ? (ea(!1), console.error(t)) : (ea(!1), F(!0));
            },
          });
          let eA = async () => {
              if ("" == M || M <= 0.001 || isNaN(M) || M > z || M <= 0) {
                F(!0);
                return;
              }
              ea(!0), null == eI || eI.write();
            },
            ez = (e, t) => {
              let n;
              if ("srch" == t) {
                let t = e.target.value.toLowerCase();
                if ((E(t), t >= 0.01)) {
                  if (t.includes(".")) {
                    let [e, a] = t.split(".");
                    if (a.length >= 4) {
                      if (parseInt(a.substring(0, 4)) > 0)
                        parseFloat(t).toFixed(4),
                          R(
                            (n = S.fi(
                              "".concat(e, ".").concat(a.substring(0, 4))
                            )).toString()
                          );
                      else {
                        let e = t.split(".")[0];
                        R((n = S.fi("".concat(e))).toString());
                      }
                    } else if (parseInt(a.substring(0, a.length)) > 0)
                      parseFloat(t).toFixed(4),
                        R(
                          (n = S.fi(
                            "".concat(e, ".").concat(a.substring(0, a.length))
                          )).toString()
                        );
                    else {
                      let e = t.split(".")[0];
                      R(
                        (n = S.fi(null == e ? void 0 : e.toString())).toString()
                      );
                    }
                  } else
                    R((n = S.fi(null == t ? void 0 : t.toString())).toString());
                }
                t > z ? F(!0) : t <= 0 ? F(!0) : F(!1);
              } else
                try {
                  e > 0 && ((n = S.fi(e.toString())), R(n.toString())),
                    E(e),
                    e > z ? F(!0) : e <= 0 ? F(!0) : F(!1);
                } catch (e) {
                  console.error(e);
                }
            },
            eU = (0, w.GG)({
              mode: "recklesslyUnprepared",
              address: L,
              abi: W,
              functionName: "claim",
              overrides: { from: null == n ? void 0 : n.address },
              onError(e) {
                ea(!1), console.error("Claim error ", e);
              },
              onSuccess(e) {
                ec(null == e ? void 0 : e.hash);
              },
            });
          (0, w.BX)({
            hash: ed,
            enabled: ed,
            onSettled(e, t) {
              t || eM(), ea(!1);
            },
          });
          let eH = async () => {
              if (I <= 0) {
                alert("You have no rewards yet");
                return;
              }
              ea(!0), null == eU || eU.write();
            },
            [eB, eL] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              eL(!0);
            }, []),
            (0, a.jsx)(p.Z, {
              sx: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                paddingBottom: "30px",
                justifyContent: "center",
              },
              children: (0, a.jsx)(p.Z, {
                width: "100%",
                borderRadius: "10px",
                bgcolor: "rgba(27, 24, 33, 0.6)",
                children: (0, a.jsxs)(J, {
                  item: !0,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  fd: "column",
                  jc: "start",
                  sx: { borderRadius: "10px" },
                  children: [
                    (0, a.jsxs)(b.Z, {
                      sx: {
                        zIndex: "1",
                        width: "calc(100%)",
                        borderRadius: "6px 6px 0 0",
                        borderBottom: "none",
                      },
                      value: e,
                      onChange: (e, n) => {
                        t(n);
                      },
                      "aria-label": "basic tabs example",
                      children: [
                        (0, a.jsx)(K, { label: "Stake", ...ee(0) }),
                        (0, a.jsx)(K, { label: "Unstake", ...ee(1) }),
                        (0, a.jsx)(K, { label: "Rewards", ...ee(2) }),
                      ],
                    }),
                    (0, a.jsxs)(Q, {
                      value: e,
                      index: 0,
                      children: [
                        (0, a.jsx)(p.Z, {
                          borderRadius: "0 0 10px 10px",
                          padding: "20px 20px 0px",
                          children: (0, a.jsxs)(J, {
                            container: !0,
                            g: "5px 0",
                            children: [
                              (0, a.jsxs)(J, {
                                item: !0,
                                xs: 12,
                                lg: 12,
                                jc: "space-between",
                                g: "20px",
                                children: [
                                  (0, a.jsx)(x.Z, {
                                    variant: "body1",
                                    fontFamily: "PoppinsR",
                                    children: "Enter the amount to stake",
                                  }),
                                  (0, a.jsxs)(x.Z, {
                                    variant: "body1",
                                    fontFamily: "PoppinsR",
                                    color: "#707070",
                                    children: ["Balance:", N.toFixed(2)],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(J, {
                                container: !0,
                                item: !0,
                                xs: 12,
                                lg: 12,
                                jc: "space-between",
                                sx: { background: "transparent" },
                                children: [
                                  (0, a.jsx)(J, {
                                    item: !0,
                                    xs: 9.5,
                                    sm: 9.5,
                                    md: 9.5,
                                    lg: 9.5,
                                    jc: "start",
                                    sx: { padding: "0px 0px !important" },
                                    children: (0, a.jsx)(Y, {
                                      p: "12px 10px",
                                      placeholder: "00.00 $XEON",
                                      type: "number",
                                      min: "0",
                                      onChange: (e, t) => eF(e, "srch"),
                                      sx: { backgrounColor: "#000" },
                                      value: h,
                                    }),
                                  }),
                                  (0, a.jsx)(J, {
                                    item: !0,
                                    xs: 2,
                                    sm: 2,
                                    md: 2,
                                    lg: 2.3,
                                    jc: "center",
                                    p: "0px 0px",
                                    sx: { padding: "0px 0px !important" },
                                    children: (0, a.jsx)(k.Z, {
                                      p: "9px 40px",
                                      p599: "10px 40px",
                                      br: "8px",
                                      bgc: "#000",
                                      m: "10px 0px",
                                      w: "calc(100%-70px)",
                                      onClick: (e, t) => eF(N, "max"),
                                      children: "Max",
                                    }),
                                  }),
                                ],
                              }),
                              O
                                ? (0, a.jsx)("p", {
                                    className:
                                      "text-left d-block text-danger mb-0",
                                    style: {
                                      width: "100%",
                                      top: "-1rem",
                                      left: "12px",
                                      fontSize: "13px",
                                      color: "red",
                                      textAlign: "left",
                                    },
                                    children: "Invalid amount entered.",
                                  })
                                : (0, a.jsx)("p", { className: "m-0" }),
                            ],
                          }),
                        }),
                        eB && ew
                          ? (0, a.jsx)(a.Fragment, {
                              children: eC.includes(null == ej ? void 0 : ej.id)
                                ? (0, a.jsx)(a.Fragment, {
                                    children: V
                                      ? (0, a.jsx)(a.Fragment, {
                                          children: en
                                            ? (0, a.jsx)(k.Z, {
                                                m: "0px 20px",
                                                w: "calc(100% - 40px)",
                                                br: "8px",
                                                p: "10px 16px",
                                                disabled: !0,
                                                children: "Processing...",
                                              })
                                            : (0, a.jsx)(k.Z, {
                                                m: "0px 20px",
                                                w: "calc(100% - 40px)",
                                                br: "8px",
                                                p: "10px 16px",
                                                onClick: eZ,
                                                children: "Approve",
                                              }),
                                        })
                                      : (0, a.jsx)(a.Fragment, {
                                          children: en
                                            ? (0, a.jsx)(k.Z, {
                                                m: "0px 20px",
                                                w: "calc(100% - 40px)",
                                                br: "8px",
                                                p: "10px 16px",
                                                disabled: !0,
                                                children: "Processing...",
                                              })
                                            : (0, a.jsx)(k.Z, {
                                                m: "0px 20px",
                                                w: "calc(100% - 40px)",
                                                br: "8px",
                                                p: "10px 16px",
                                                onClick: eO,
                                                children: "Send",
                                              }),
                                        }),
                                  })
                                : (0, a.jsx)(k.Z, {
                                    m: "0px 20px",
                                    w: "calc(100% - 40px)",
                                    br: "8px",
                                    p: "10px 16px",
                                    onClick: () => eP(1),
                                    children: "Switch Network",
                                  }),
                            })
                          : (0, a.jsx)(k.Z, {
                              m: "0px 20px",
                              w: "calc(100% - 40px)",
                              br: "8px",
                              p: "10px 16px",
                              onClick: () => {
                                ev();
                              },
                              children: "Connect Wallet",
                            }),
                        (0, a.jsxs)(p.Z, {
                          padding: "24px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                          alignItems: "start",
                          g: "0px",
                          children: [
                            (0, a.jsx)(x.Z, {
                              variant: "body1",
                              fontFamily: "PoppinsR",
                              children: "Note:",
                            }),
                            (0, a.jsx)(x.Z, {
                              variant: "body1",
                              fontFamily: "PoppinsR",
                              color: "white",
                              children:
                                "Rewards will be distributed every Friday.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(Q, {
                      value: e,
                      index: 1,
                      children: (0, a.jsx)(p.Z, {
                        padding: "20px 20px 102px",
                        borderRadius: "0 0 10px 10px",
                        children: (0, a.jsxs)(J, {
                          container: !0,
                          g: "0px",
                          children: [
                            (0, a.jsxs)(J, {
                              item: !0,
                              xs: 12,
                              lg: 12,
                              jc: "space-between",
                              g: "20px",
                              children: [
                                (0, a.jsx)(x.Z, {
                                  variant: "body1",
                                  fontFamily: "PoppinsR",
                                  children: "Enter the amount to Unstake",
                                }),
                                (0, a.jsxs)(x.Z, {
                                  variant: "body1",
                                  fontFamily: "PoppinsR",
                                  color: "#707070",
                                  children: ["Staked $XEON: ", $],
                                }),
                              ],
                            }),
                            (0, a.jsxs)(J, {
                              container: !0,
                              item: !0,
                              xs: 12,
                              md: 12,
                              lg: 12,
                              jc: "space-between",
                              sx: { background: "transparent" },
                              children: [
                                (0, a.jsx)(J, {
                                  item: !0,
                                  xs: 9.5,
                                  sm: 9.5,
                                  md: 9.5,
                                  lg: 9.5,
                                  jc: "start",
                                  children: (0, a.jsx)(Y, {
                                    placeholder: "00.00 $XEON",
                                    p: "12px 10px",
                                    type: "number",
                                    min: "0",
                                    onChange: (e, t) => ez(e, "srch"),
                                    value: M,
                                  }),
                                }),
                                (0, a.jsx)(J, {
                                  item: !0,
                                  xs: 2,
                                  sm: 2.3,
                                  md: 2.3,
                                  lg: 2.3,
                                  sx: { padding: "0px 0px !important" },
                                  children: (0, a.jsx)(k.Z, {
                                    p: "8px 50px",
                                    br: "8px",
                                    fs: "15px",
                                    p599: "10px 40px",
                                    bgc: "#000",
                                    m: "10px 0px ",
                                    w: "calc(100% - 70px)",
                                    onClick: (e, t) => ez($, "max"),
                                    children: "Max",
                                  }),
                                }),
                              ],
                            }),
                            O
                              ? (0, a.jsx)("p", {
                                  className:
                                    "text-left d-block text-danger mb-0",
                                  style: {
                                    width: "100%",
                                    top: "-1rem",
                                    left: "12px",
                                    fontSize: "13px",
                                    color: "red",
                                    textAlign: "left",
                                  },
                                  children: "Invalid amount entered.",
                                })
                              : (0, a.jsx)("p", { className: "m-0" }),
                            (0, a.jsx)(J, {
                              item: !0,
                              xs: 12,
                              m: "0px 0px 0px",
                              jc: "start",
                              children:
                                eB && ew
                                  ? (0, a.jsx)(a.Fragment, {
                                      children: eC.includes(
                                        null == ej ? void 0 : ej.id
                                      )
                                        ? (0, a.jsx)(a.Fragment, {
                                            children: en
                                              ? (0, a.jsx)(k.Z, {
                                                  m: "0px ",
                                                  w: "calc(100% )",
                                                  br: "8px",
                                                  p: "10px 16px",
                                                  disabled: !0,
                                                  children: "Processing...",
                                                })
                                              : (0, a.jsx)(k.Z, {
                                                  m: "0px ",
                                                  w: "calc(100% )",
                                                  br: "8px",
                                                  p: "10px 16px",
                                                  onClick: eA,
                                                  children: "Withdraw",
                                                }),
                                          })
                                        : (0, a.jsx)(k.Z, {
                                            m: "0px 20px",
                                            w: "calc(100% - 40px)",
                                            br: "8px",
                                            p: "10px 16px",
                                            onClick: () => eP(1),
                                            children: "Switch Network",
                                          }),
                                    })
                                  : (0, a.jsx)(k.Z, {
                                      m: "0px ",
                                      w: "calc(100% )",
                                      br: "8px",
                                      p: "10px 16px",
                                      onClick: () => {
                                        ev();
                                      },
                                      children: "Connect Wallet",
                                    }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)(Q, {
                      value: e,
                      index: 2,
                      children: (0, a.jsx)(p.Z, {
                        padding: "20px 20px 85px",
                        borderRadius: "0 0 10px 10px",
                        children: (0, a.jsxs)(J, {
                          container: !0,
                          g: "10px 0px",
                          children: [
                            (0, a.jsxs)(J, {
                              item: !0,
                              xs: 12,
                              lg: 12,
                              fd: "column",
                              jc: "start",
                              ai: "start",
                              g: "5px",
                              children: [
                                (0, a.jsx)(x.Z, {
                                  variant: "body1",
                                  fontFamily: "PoppinsR",
                                  children: "Claim Rewards",
                                }),
                                I > 0 &&
                                  (0, a.jsx)(x.Z, {
                                    variant: "h6",
                                    fontFamily: "PoppinsR",
                                    fontSize: { xs: "", lg: "27px" },
                                    children: I,
                                  }),
                              ],
                            }),
                            (0, a.jsx)(J, {
                              item: !0,
                              xs: 12,
                              lg: 12,
                              m: "0px 0px 20px",
                              jc: "center",
                              children: en
                                ? (0, a.jsx)(k.Z, {
                                    p: "10px 16px",
                                    br: "8px",
                                    m: "0px",
                                    w: "100%",
                                    disabled: !0,
                                    children: "Processing...",
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                    children:
                                      I > 0
                                        ? (0, a.jsx)(k.Z, {
                                            disabled: !ew,
                                            p: "10px 16px",
                                            br: "8px",
                                            m: "0px",
                                            w: "100%",
                                            onClick: eH,
                                            children: "Claim",
                                          })
                                        : (0, a.jsx)(p.Z, {
                                            sx: {
                                              width: "100%",
                                              padding: "10px 10px",
                                              minHeight: "40px",
                                              fontSize: "16px",
                                              color: "#fff",
                                              backgroundColor: "#000",
                                              border: "none",
                                              borderRadius: "8px",
                                              fontfamily: "PoppinsR",
                                            },
                                            children: (0, a.jsx)(H, {}),
                                          }),
                                  }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        en = n(48462);
      function ea() {
        let e = (0, f._)([
          "\n  display: flex;\n  width: 100%;\n  flex-direction: ",
          ";\n  align-items: ",
          ";\n  justify-content: ",
          ";\n  padding: ",
          ";\n  margin: ",
          ";\n  gap: ",
          ";\n  @media (max-width: 899px) {\n    flex-direction: ",
          ";\n  }\n",
        ]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function ei() {
        let e = (0, f._)([
          "\n  width: 100%;\n  padding: ",
          " ;\n  font-size: 16px;\n  color: #fff;\n  background-color: #000;\n  border: none;\n  border-radius: 5px;\n  font-family: PoppinsR;\n  :focus {\n    outline: none;\n  }\n",
        ]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      n(25675),
        (0, v.default)(c.ZP)(
          ea(),
          (e) => (e.fd ? e.fd : "row"),
          (e) => (e.ai ? e.ai : "center"),
          (e) => (e.jc ? e.jc : "center"),
          (e) => (e.p ? e.p : "0px"),
          (e) => (e.m ? e.m : "0"),
          (e) => (e.g ? e.g : "0"),
          (e) => e.fd899
        ),
        v.default.input(ei(), (e) => (e.p ? e.p : "7px 10px")),
        (0, v.default)(en.ZP)((e) => {
          let { theme: t } = e;
          return {
            height: 8,
            padding: "15px 0",
            "& .MuiSlider-thumb": {
              height: 15,
              width: 15,
              backgroundColor: "#4cc054",
              boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
              "&:focus, &:hover, &.Mui-active": {
                boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
                "@media (hover: none)": {},
              },
              "&:before": {
                boxShadow:
                  "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
              },
            },
            "& .MuiSlider-valueLabel": {
              fontSize: 14,
              fontWeight: "normal",
              position: "absolute",
              top: 0,
              transform: " translateY(16px) !important",
              backgroundColor: "unset",
              "&::before": { display: "none" },
              "& *": { background: "transparent" },
            },
            "& .MuiSlider-track": {
              position: "relative",
              border: "none",
              height: 6,
              backgroundColor: "#4cc054",
            },
            "& .MuiSlider-rail": {
              opacity: 0.5,
              boxShadow: "inset 0px 0px 4px -2px #000",
              backgroundColor: "#000",
            },
          };
        });
      var er = () => {
        let [e, t] = (0, o.useState)(0),
          [n, i] = (0, o.useState)(0),
          [r, s] = (0, o.useState)(""),
          [f, y] = (0, o.useState)("");
        function h(e) {
          return e >= 1e9
            ? (e / 1e9).toFixed(2) + "B"
            : e >= 1e6
            ? (e / 1e6).toFixed(2) + "M"
            : e >= 1e3
            ? (e / 1e3).toFixed(2) + "K"
            : e.toString();
        }
        let b = async () => {
          try {
            let e = await fetch(
              "https://api.dexscreener.com/latest/dex/search?q=0xc668695dcbCf682dE106Da94bDE65c9bc79362d3"
            );
            if (!e.ok) throw Error("HTTP error! status: ".concat(e.status));
            let t = await e.json();
            s(() => {
              var e;
              return h(
                null == t
                  ? void 0
                  : null === (e = t.pairs[0]) || void 0 === e
                  ? void 0
                  : e.priceUsd
              );
            }),
              y(() => {
                var e;
                return h(
                  null == t
                    ? void 0
                    : null === (e = t.pairs[0]) || void 0 === e
                    ? void 0
                    : e.fdv
                );
              });
          } catch (e) {
            console.error("Price error: ", e);
          }
        };
        (0, w.do)({
          address: L,
          abi: W,
          functionName: "totalStaked",
          chainId: 1,
          onSettled(e, n) {
            e &&
              (console.log("TotalStakeds data: ", S.dF(e)),
              t(() => h(parseFloat(S.dF(e)) * r)),
              i(((S.dF(e) / 1e9) * 100).toFixed(3))),
              n && (t(0), i(0), console.error(n));
          },
        }),
          (0, o.useEffect)(() => {
            b();
            let e = setInterval(() => {
              b();
            }, 15e3);
            return () => clearInterval(e);
          }, []);
        let g = [
          {
            title: "$XEON Price",
            detail: (0, a.jsxs)(x.Z, {
              variant: "body1",
              fontSize: { xs: "", lg: "25px" },
              children: [r, " $"],
            }),
          },
          {
            title: "$XEON Marketcap",
            detail: (0, a.jsx)(x.Z, {
              variant: "body1",
              fontSize: { xs: "", lg: "25px" },
              children: f,
            }),
          },
          {
            title: "Total $XEON Staked",
            detail: (0, a.jsx)(
              () =>
                (0, a.jsxs)(p.Z, {
                  display: "flex",
                  flexDirection: "column",
                  children: [
                    (0, a.jsxs)(x.Z, { variant: "h6", children: [n, "%"] }),
                    (0, a.jsxs)(x.Z, {
                      variant: "body2",
                      color: "#707070",
                      children: ["$", e],
                    }),
                  ],
                }),
              {}
            ),
          },
        ];
        return (0, a.jsx)(l.Z, {
          page: "stake",
          children: (0, a.jsxs)(d.Z, {
            maxWidth: "xxl",
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "50px",
            },
            children: [
              (0, a.jsxs)(p.Z, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                children: [
                  (0, a.jsx)(m.Z, { children: "Staking" }),
                  (0, a.jsx)(u.Z, { children: "Xeon AI Staking" }),
                ],
              }),
              (0, a.jsxs)(c.ZP, {
                container: !0,
                gap: "20px",
                children: [
                  (0, a.jsx)(c.ZP, {
                    item: !0,
                    container: !0,
                    xs: 12,
                    lg: 12,
                    sx: { display: "flex", gap: "15px" },
                    children: g.map((e) =>
                      (0, a.jsx)(
                        c.ZP,
                        {
                          item: !0,
                          xs: 12,
                          lg: 3.88,
                          children: (0, a.jsxs)(p.Z, {
                            sx: {
                              padding: "20px",
                              minHeight: "80px",
                              width: "calc(100% - 40px)",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "start",
                              alignItems: "start",
                              gap: "7px",
                              borderRadius: "10px",
                              background: "rgba(27, 24, 33, 60%)",
                            },
                            children: [
                              (0, a.jsx)(m.Z, {
                                variant: "body1",
                                color: "#4cc054",
                                children: e.title,
                              }),
                              e.detail,
                            ],
                          }),
                        },
                        e.title
                      )
                    ),
                  }),
                  (0, a.jsx)(c.ZP, {
                    item: !0,
                    container: !0,
                    display: "flex",
                    alignItems: "start",
                    gap: "15px",
                    children: (0, a.jsx)(c.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 12,
                      lg: 5.9,
                      children: (0, a.jsx)(et, {}),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function eo() {
        return (
          (0, o.useEffect)(() => {
            r().init({ duration: 1200 });
          }),
          (0, a.jsx)(s.Z, { children: (0, a.jsx)(er, {}) })
        );
      }
    },
    3313: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        5702, 457, 168, 1425, 2090, 8784, 8360, 2032, 4300, 7151, 2888, 9774,
        179,
      ],
      function () {
        return e((e.s = 37833));
      }
    ),
      (_N_E = e.O());
  },
]);
