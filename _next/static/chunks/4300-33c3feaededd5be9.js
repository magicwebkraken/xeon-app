(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4300],
  {
    85703: function (n, t, i) {
      "use strict";
      var e = i(85893),
        r = i(13475);
      i(67294),
        (t.Z = (n) => {
          let { children: t } = n;
          return (0, e.jsx)(r.Z, {
            variant: "body2",
            color: "#fff",
            fontFamily: "PoppinsSB",
            textAlign: "left",
            ...n,
            children: t,
          });
        });
    },
    46323: function (n, t, i) {
      "use strict";
      i.r(t);
      var e = i(82729),
        r = i(85893),
        o = i(67294),
        a = i(16829),
        l = i(32776),
        s = i(13475),
        d = i(30082),
        c = i(81328),
        u = i(55770),
        p = i(78070),
        x = i(36303),
        f = i(95162),
        h = i(69077),
        g = i(25675),
        m = i.n(g),
        w = i(64072);
      function b() {
        let n = (0, e._)([
          "\n  width: 100%;\n  height: auto;\n  max-width: ",
          ";\n  /* max-height: ",
          "; */\n  margin: ",
          ";\n  position: relative;\n  z-index: 999;\n  /* align-items: ",
          "; */\n  @media (max-width: 599px) {\n    max-width: ",
          ";\n    margin: ",
          ";\n    display: ",
          ";\n    visibility: ",
          ";\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        let n = (0, e._)([
          "\n  background: ",
          ";\n  font-size: ",
          ";\n  border-radius: 10px;\n  width: ",
          ";\n  font-family: ",
          ";\n  margin: ",
          ";\n  padding: ",
          ";\n  color: ",
          ";\n  border: ",
          ";\n  transition: 0.5s;\n  text-transform: none;\n  cursor: ",
          ";\n  /* box-shadow: inset 0 3px 6px #ffffff88; */\n  z-index: 0;\n  & .Mui-disabled {\n    color: #707070 !important;\n    border-color: #707070 !important;\n  }\n  :hover {\n    color: ",
          ";\n    background: ",
          ";\n    box-shadow: none;\n  }\n  @media (max-width: 599px) {\n    font-size: ",
          ";\n  }\n\n  & > .MuiButtonBase-root {\n    & > .MuiTouchRipple-root {\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, e._)([
          "\n  & > .MuiPaper-root {\n    margin-top: 10px;\n    border-radius: 10px;\n    background: #fff;\n    /* border: 1px solid #fff; */\n    min-width: 150px;\n    backdrop-filter: blur(1);\n    @media (max-width: 599px) {\n      background: #fff;\n    }\n    & > .MuiList-root {\n      padding: 0;\n      & > .MuiButtonBase-root {\n        display: flex;\n        flex-direction: column;\n        align-items: start;\n        border-bottom: 1px solid #fff;\n        color: #000;\n        padding: 10px 10px;\n        font-size: 16px;\n        font-family: PoppinsB;\n        @media (max-width: 599px) {\n          font-size: 14px;\n        }\n      }\n      & :last-child {\n        border-bottom: none;\n      }\n    }\n  }\n  /* background-color: aqua; */\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        let n = (0, e._)(["\n  /* background-color: aqua; */\n"]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, e._)([
          "\n  color: #fff;\n  padding: 0 10px 0 15px;\n  min-width: 10px;\n  text-align: center;\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      (0, a.default)(m())(
        b(),
        (n) => (n.mw ? n.mw : "30px"),
        (n) => (n.mh ? n.mh : "100px"),
        (n) => (n.m ? n.m : "0"),
        (n) => (n.ai ? n.ai : "center"),
        (n) => (n.mw599 ? n.mw599 : ""),
        (n) => (n.m599 ? n.m599 : "0"),
        (n) => (n.disp ? n.disp : ""),
        (n) => (n.vis ? n.vis : "")
      );
      let Z = (0, a.default)(l.Z)(
          v(),
          (n) => (n.bgc ? n.bgc : "transparent"),
          (n) => (n.fs ? n.fs : "16px"),
          (n) => (n.w ? n.w : "150px"),
          (n) => (n.fm ? n.fm : "PoppinsSB"),
          (n) => (n.m ? n.m : "0 5px"),
          (n) => (n.p ? n.p : "0px 16px"),
          (n) => (n.c ? n.c : "#ffff"),
          (n) => (n.b ? n.b : "1px solid #fff"),
          (n) => (n.cur ? n.cur : "pointer"),
          (n) => (n.c ? n.c : "#fff"),
          (n) => (n.bgc ? n.bgc : "transparent"),
          (n) => (n.fs599 ? n.fs599 : "12px")
        ),
        C = (0, a.default)(c.Z)(y()),
        S = (0, a.default)(u.Z)(j());
      (0, a.default)(s.Z)(k()),
        (t.default = () => {
          let { open: n, close: t } = (0, f.k_)(),
            { disconnect: i } = (0, h.qL)(),
            { isConnected: e, address: a } = (0, h.mA)(),
            { connect: l, connectors: s, pendingConnector: c } = (0, h.$4)(),
            { chain: u } = (0, h.LN)(),
            {
              chains: g,
              error: m,
              isLoading: b,
              pendingChainId: v,
              switchNetwork: y,
            } = (0, h.g0)();
          (0, h.g0)({ throwForSwitchChainNotSupported: !0 });
          let j = [1, 8453, 42161],
            [k, F] = (0, o.useState)(!0),
            [P, E] = (0, o.useState)("Connect Wallet"),
            [_, z] = (0, o.useState)(e ? u.id : null),
            [B, I] = (0, o.useState)(""),
            [D, L] = (0, o.useState)(0),
            [W, M] = (0, o.useState)(""),
            [R, A] = (0, o.useState)(),
            [N, H] = (0, o.useState)(0),
            T = (0, h.mA)();
          (0, o.useEffect)(() => {
            e && (j.includes(null == u ? void 0 : u.id) ? F(!0) : F(!1));
          }, [_]),
            (0, o.useEffect)(() => {
              e ? E(u.name) : E("Connect Wallet");
            }, [e, u]),
            (0, o.useEffect)(() => {
              e
                ? I(
                    ""
                      .concat(null == a ? void 0 : a.slice(0, 4), "....")
                      .concat(
                        null == a
                          ? void 0
                          : a.slice(
                              (null == a ? void 0 : a.length) - 5,
                              (null == a ? void 0 : a.length) - 1
                            )
                      )
                  )
                : I("Connect Wallet");
            }, [a]);
          let q = (n, t) => {
              n.close(), y(t);
            },
            K = (0, h.KQ)({
              address: null == T ? void 0 : T.address,
              watch: !0,
              onError(n) {},
              onSuccess(n) {
                L(() =>
                  n
                    ? Math.round(100 * (null == n ? void 0 : n.formatted)) / 100
                    : 0
                );
              },
            });
          return (
            (0, o.useEffect)(() => {
              var n;
              L(() => {
                var n;
                if (!K) return 0;
                return parseFloat(
                  parseFloat(
                    null == K
                      ? void 0
                      : null === (n = K.data) || void 0 === n
                      ? void 0
                      : n.formatted
                  ).toFixed(3)
                );
              }),
                A(null == u ? void 0 : u.icon),
                M(
                  null == u
                    ? void 0
                    : null === (n = u.nativeCurrency) || void 0 === n
                    ? void 0
                    : n.symbol
                ),
                H(null == u ? void 0 : u.id);
            }, [D, W, N, u, n]),
            (0, o.useEffect)(() => {
              e
                ? I(
                    ""
                      .concat(null == a ? void 0 : a.slice(0, 4), "....")
                      .concat(
                        null == a
                          ? void 0
                          : a.slice(
                              (null == a ? void 0 : a.length) - 4,
                              null == a ? void 0 : a.length
                            )
                      )
                  )
                : I("Connect Wallet");
            }, [a]),
            (0, o.useEffect)(() => {
              e && z(null == u ? void 0 : u.id);
            }, [u]),
            (0, o.useEffect)(() => {
              e && u.id;
            }, [_]),
            (0, r.jsx)(r.Fragment, {
              children: e
                ? (0, r.jsx)(r.Fragment, {
                    children: k
                      ? (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsx)(p.ZP, {
                            variant: "popover",
                            popupId: "demo-popup-menu",
                            children: (n) =>
                              (0, r.jsxs)(o.Fragment, {
                                children: [
                                  (0, r.jsxs)(Z, {
                                    suppressHydrationWarning: !0,
                                    variant: "filled",
                                    w: "fit-content",
                                    ...(0, x.vW)(n),
                                    children: [
                                      (0, r.jsxs)(d.Z, {
                                        sx: {
                                          display: { xs: "none", md: "flex" },
                                          borderRight: "2.5px solid #fff",
                                          marginRight: "5px",
                                          paddingRight: "5px",
                                        },
                                        children: [
                                          e ? D : "",
                                          e
                                            ? " ".concat(
                                                u.nativeCurrency.symbol
                                              )
                                            : "",
                                        ],
                                      }),
                                      B,
                                    ],
                                  }),
                                  (0, r.jsxs)(C, {
                                    ...(0, x.wK)(n),
                                    children: [
                                      g.map((t, i) =>
                                        (0, r.jsx)(
                                          S,
                                          {
                                            sx: {
                                              background:
                                                u.id === t.id
                                                  ? "#ffffff5c !important"
                                                  : "",
                                            },
                                            onClick: () => q(n, t.id),
                                            children: t.name,
                                          },
                                          i
                                        )
                                      ),
                                      (0, r.jsx)(S, {
                                        onClick: i,
                                        children: "Disconnect",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          }),
                        })
                      : (0, r.jsx)(p.ZP, {
                          variant: "popover",
                          popupId: "demo-popup-menu",
                          children: (n) =>
                            (0, r.jsxs)(o.Fragment, {
                              children: [
                                (0, r.jsx)(Z, {
                                  variant: "filled",
                                  w: "fit-content",
                                  c: "#ff0202",
                                  bgc: "#ffffff12",
                                  hbgc: "#ffffff12",
                                  hc: "#ff0101",
                                  b: "1px solid #ff0000",
                                  ...(0, x.vW)(n),
                                  children: "Switch Network",
                                }),
                                (0, r.jsx)(C, {
                                  ...(0, x.wK)(n),
                                  children: g.map((t, i) =>
                                    (0, r.jsx)(
                                      S,
                                      {
                                        onClick: () => q(n, t.id),
                                        children: t.name,
                                      },
                                      i
                                    )
                                  ),
                                }),
                              ],
                            }),
                        }),
                  })
                : (0, r.jsx)(w.Z, {
                    bgc: "linear-gradient(110deg,#663CED 40%,#FFA5FD)",
                    m: "0px",
                    br: "7px",
                    p: "5px 30px",
                    suppressHydrationWarning: !0,
                    onClick: () => n(),
                    children: "Connect Wallet",
                  }),
            })
          );
        });
    },
    14899: function (n, t, i) {
      "use strict";
      var e = i(85893);
      i(67294), i(16829);
      var r = i(3714);
      t.Z = (n) => {
        let { children: t } = n;
        return (0, e.jsx)(r.Z, {
          fontSize: { xs: "30px", lg: "40px" },
          fontFamily: "PoppinsR",
          ...n,
          children: t,
        });
      };
    },
    3714: function (n, t, i) {
      "use strict";
      var e = i(85893),
        r = i(13475);
      i(67294),
        (t.Z = (n) => {
          let { children: t } = n;
          return (0, e.jsx)(r.Z, {
            variant: "body2",
            color: "#fff",
            fontFamily: "PoppinsL",
            textAlign: "left",
            ...n,
            children: t,
          });
        });
    },
    23673: function (n, t, i) {
      "use strict";
      var e = i(85893);
      i(67294), i(16829);
      var r = i(3714);
      t.Z = (n) => {
        let { children: t } = n;
        return (0, e.jsx)(r.Z, {
          variant: "body2",
          color: "#835DFF",
          ...n,
          children: t,
        });
      };
    },
    12824: function (n, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return nx;
        },
      });
      var e = i(82729),
        r = i(85893);
      i(31154);
      var o = i(67294),
        a = i(4342),
        l = i(80224),
        s = i(30082),
        d = i(39332),
        c = i(30618),
        u = i(73429),
        p = i(2302),
        x = i(86920),
        f = i(58938),
        h = i(41468),
        g = i(82115),
        m = i(52842),
        w = i(57653),
        b = i(64601),
        v = i(7884),
        y = i(76346),
        j = i(63771),
        k = i(16829),
        Z = i(3714);
      function C() {
        let n = (0, e._)([
          "\n    display: flex; \n    flex-direction: row;  \n    gap:10px;\n    /* max-width: 300px; */\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      let S = (0, k.default)(s.Z)(C());
      var F = (n) =>
        (0, r.jsxs)(S, {
          children: [
            (0, r.jsx)(Z.Z, { fontWeight: "600", children: n.h1txt }),
            (0, r.jsx)(Z.Z, {
              textTransform: n.txtrans,
              fontWeight: n.fntw,
              color: n.clrsub ? n.clrsub : "white",
              children: n.subtxt,
            }),
          ],
        });
      function P() {
        let n = (0, e._)([
          "\n    display: flex;\n    background: ",
          ";\n    backdrop-filter:blur(10px);   \n    padding: 10px 10px; \n    border-radius: ",
          "; \n    width : ",
          ";  \n    position: fixed; \n    z-index: 1200;\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      let E = (0, k.default)(s.Z)(
        P(),
        (n) => (n.bg ? n.bg : "#262033"),
        (n) => (n.br ? n.br : "0px"),
        (n) => (n.w ? n.w : "100%")
      );
      var _ = (n) =>
          (0, r.jsxs)(E, {
            sx: {
              flexDirection: { xs: "row", sm: "row", lg: "row" },
              gap: { xs: "10px", sm: "20px", lg: "50px" },
              justifyContent: { xs: "center", sm: "center", lg: "center" },
              alignItems: { xs: "center" },
            },
            ...n,
            children: [
              (0, r.jsx)(F, {
                h1txt: "Your IP:",
                subtxt: null == n ? void 0 : n.IP,
              }),
              (0, r.jsxs)(s.Z, {
                display: { xs: "none", md: "flex", lg: "flex" },
                gap: { xs: "10px", sm: "20px", lg: "50px" },
                children: [
                  (0, r.jsx)(F, {
                    h1txt: "Location:",
                    subtxt: null == n ? void 0 : n.location,
                  }),
                  (0, r.jsx)(F, {
                    h1txt: "ISP:",
                    subtxt: null == n ? void 0 : n.ISP,
                  }),
                ],
              }),
              (0, r.jsx)(F, {
                h1txt: "Status:",
                subtxt: "Unprotected",
                clrsub: "#FF2A2A ",
              }),
            ],
          }),
        z = i(87066),
        B = i(81090);
      function I() {
        let n = (0, e._)([
          "\n  background-color: #fff;\n  color: #000;\n  font-family: OpenSansBold;\n  text-transform: none;\n  font-size: 14px;\n  z-index: 999 !important;\n  background-color: white;\n  margin: 0 5px;\n  display: flex;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function D() {
        let n = (0, e._)([
          "\n  background-color:#000;\n  // position:fixed;\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  marginLeft:64px;\n  // width:",
          "\n  // @media(max-width:600px){\n  //   width:calc(100% - 10px) !important;\n  // }\n",
        ]);
        return (
          (D = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        let n = (0, e._)([
          "\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n\n  @media (max-width: 599px) {\n    display: flex;\n    flex-direction: row;\n    height: auto !important;\n  }\n",
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        let n = (0, e._)([
          "\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  @media(max-width : 599px){\n    padding: 0 20px;\n  }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        let n = (0, e._)([
          "\n  @media (max-width: 599px) {\n    display: none;\n  }\n",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        let n = (0, e._)([
          "\n  @media (max-width: 599px) {\n    display: none;\n  }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        let n = (0, e._)([
          "\n& .MuiDrawer-paper {\n        top: 40px !important;\n    }\n  @media (max-width: 599px) {\n    width: 0;\n    height: auto;\n    & .MuiDrawer-paper {\n        top: auto !important;\n        bottom: 0 !important;\n        height: auto !important;\n    }\n  }\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        let n = (0, e._)([
          "\n  @media (max-width: 599px) {\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    height: auto;\n    padding: 0 auto;\n  }\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function H() {
        let n = (0, e._)([
          "\n  border: ",
          ";\n  border-radius: 5px;\n  padding: 9px 8px 9px 8px;\n  height: 40px;\n  background-color: #272727;\n  color: #fff;\n  font-size: 16px;\n  width:100%;\n  max-width: ",
          ";\n  :focus {\n    outline: 1px solid var(--primary-color);\n  }\n  // @media (max-width: 599px) {\n  //   flex-direction: ",
          ";\n  //   align-items: flex-start;\n  //   width: ",
          ";\n  // }\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      let {
        AppBar: T,
        Grid: q,
        IconButton: K,
        ListItemText: G,
        Drawer: U,
        List: X,
        OutlinedInput: $,
        Toolbar: O,
      } = i(70317);
      (0, k.default)(T)(I()),
        (0, k.default)(O)(D(), (n) =>
          !0 === n.open
            ? "calc(100% - 240px) !important"
            : "calc(100% - 65px) !important"
        );
      let Q = k.default.div(L());
      k.default.div(W());
      let V = (0, k.default)(K)(M()),
        Y = (0, k.default)(G)(R()),
        J = (0, k.default)(U)(A()),
        nn = (0, k.default)(X)(N());
      (0, k.default)($)(
        H(),
        (n) => (n.b ? n.b : "none"),
        (n) => (n.w ? n.w : "calc(100% - 30px)"),
        (n) => (n.fd ? n.fd : "row"),
        (n) => n.w599
      );
      var nt = i(61730),
        ni = i(46323);
      i(85703);
      var ne = i(64072),
        nr = i(25675),
        no = i.n(nr);
      function na() {
        let n = (0, e._)([
          '\nbackground-image: url("/MainBackground.png"); \nbackground-position: "center"; \nbackground-repeat:no-repeat; \nbackground-size: cover;\n',
        ]);
        return (
          (na = function () {
            return n;
          }),
          n
        );
      }
      let nl = (0, a.ZP)(s.Z)(na()),
        ns = (n) => ({
          width: (0, nt.Z)(n.breakpoints.down("sm")) ? "100%" : 240,
          transition: n.transitions.create("width", {
            easing: n.transitions.easing.sharp,
            duration: n.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
        }),
        nd = (n) => ({
          transition: n.transitions.create("width", {
            easing: n.transitions.easing.sharp,
            duration: n.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
          width: "100%",
          [n.breakpoints.up("sm")]: {
            width: "calc(".concat(n.spacing(8), " + 1px)"),
          },
        }),
        nc = (0, a.ZP)("div")((n) => {
          let { theme: t } = n;
          return {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: t.spacing(0, 1),
            [t.breakpoints.down("sm")]: { display: "none" },
            top: "40px !important",
            ...t.mixins.toolbar,
          };
        }),
        nu = (0, a.ZP)(c.Z, { shouldForwardProp: (n) => "open" !== n })((n) => {
          let { theme: t, open: i } = n;
          return {
            zIndex: t.zIndex.drawer + 1,
            top: "40px !important",
            transition: t.transitions.create(["width", "margin"], {
              easing: t.transitions.easing.sharp,
              duration: t.transitions.duration.leavingScreen,
            }),
            ...(i && {
              marginLeft: 220,
              width: "calc(100% - ".concat(220, "px)"),
              transition: t.transitions.create(["width", "margin"], {
                easing: t.transitions.easing.sharp,
                duration: t.transitions.duration.enteringScreen,
              }),
            }),
          };
        }),
        np = (0, a.ZP)(J, { shouldForwardProp: (n) => "open" !== n })((n) => {
          let { theme: t, open: i } = n;
          return {
            width: 220,
            flexShrink: 0,
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            ...(i && { ...ns(t), "& .MuiDrawer-paper": ns(t) }),
            ...(!i && { ...nd(t), "& .MuiDrawer-paper": nd(t) }),
          };
        });
      var nx = (n) => {
        let { children: t, page: i } = n,
          [e, a] = o.useState("All");
        (0, d.useRouter)();
        let c = (0, l.Z)(),
          [k, Z] = o.useState(!1),
          [C, S] = o.useState(null);
        o.useEffect(() => {
          {
            let n = () => {
              Z(window.innerWidth > 1200);
            };
            return (
              n(),
              window.addEventListener("resize", n),
              () => {
                window.removeEventListener("resize", n);
              }
            );
          }
        }, []);
        let [F, P] = o.useState(!1);
        o.useEffect(() => {
          P(!0);
        }, []);
        let [E, I] = o.useState(null);
        return (
          o.useEffect(() => {
            (async () => {
              try {
                let n = await z.Z.get("https://api.ipify.org?format=json");
                await z.Z.get(
                  "https://ipapi.co/".concat(
                    null == n ? void 0 : n.data.ip,
                    "/json/"
                  )
                )
                  .then(function (n) {
                    let t = n.data;
                    I({
                      ip: null == t ? void 0 : t.ip,
                      city: null == t ? void 0 : t.city,
                      region: null == t ? void 0 : t.region,
                      country: null == t ? void 0 : t.country_name,
                      asn: null == t ? void 0 : t.asn,
                      isp: null == t ? void 0 : t.org,
                    });
                  })
                  .catch(function (n) {
                    console.error(n);
                  });
              } catch (n) {
                console.error("Error fetching location:", n);
              }
            })();
          }, []),
          (0, r.jsxs)(s.Z, {
            children: [
              (0, r.jsx)(_, {
                IP: (null == E ? void 0 : E.ip)
                  ? null == E
                    ? void 0
                    : E.ip
                  : "loading",
                location: (null == E ? void 0 : E.city)
                  ? ""
                      .concat(null == E ? void 0 : E.city, "  ")
                      .concat(null == E ? void 0 : E.region)
                  : "loading",
                ISP: (null == E ? void 0 : E.isp)
                  ? " ".concat(null == E ? void 0 : E.isp)
                  : "loading",
              }),
              (0, r.jsxs)(s.Z, {
                sx: { display: "flex" },
                children: [
                  (0, r.jsx)(nu, {
                    position: "fixed",
                    open: k,
                    children: (0, r.jsxs)(u.Z, {
                      sx: { backgroundColor: "#131019" },
                      children: [
                        (0, r.jsx)(V, {
                          color: "inherit",
                          "aria-label": "open drawer",
                          onClick: () => {
                            Z(!0);
                          },
                          edge: "start",
                          sx: { marginRight: 5, ...(k && { display: "none" }) },
                          children: (0, r.jsx)(f.Z, {
                            sx: { color: "#7E58FC", background: "#262033" },
                          }),
                        }),
                        (0, r.jsx)(s.Z, {
                          sx: {
                            marginTop: "10px",
                            display: { xs: "block", sm: "none" },
                          },
                          children: (0, r.jsx)(no(), {
                            alt: "Logo",
                            src: v.Z,
                            priority: !0,
                            style: { width: "130px", height: "auto" },
                          }),
                        }),
                        (0, r.jsx)(s.Z, {
                          sx: {
                            marginLeft: "auto",
                            display: {
                              xs: "flex",
                              sm: "none",
                              md: "none",
                              lg: "none",
                            },
                            justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                            flexDirection: { xs: "row", sm: "row" },
                          },
                          children: F && (0, r.jsx)(ni.default, {}),
                        }),
                        (0, r.jsxs)(s.Z, {
                          sx: {
                            marginLeft: "auto",
                            display: {
                              xs: "none",
                              sm: "flex",
                              md: "flex",
                              lg: "flex",
                            },
                            justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                            flexDirection: { xs: "row", sm: "row" },
                          },
                          children: [
                            F &&
                              (0, r.jsxs)(ne.Z, {
                                bgc: "linear-gradient(to right, #ff007a42 0%, transparent 60%)",
                                br: "8px",
                                p599: "12px 5px",
                                w: "250px",
                                b: "1px solid #730138",
                                onClick: () => window.open("https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xba5d1a3523cf1fa29ebe985c58de1c9c9ee86fdf"),
                                children: [
                                  (0, r.jsx)(no(), {
                                    src: "/uniswap.png",
                                    width: 25,
                                    height: 25,
                                  }),
                                  "Buy $XEON",
                                ],
                              }),
                            F && (0, r.jsx)(ni.default, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(np, {
                    variant: "permanent",
                    open: k,
                    children: [
                      (0, r.jsx)(nc, {
                        sx: { backgroundColor: "#131019" },
                        children: (0, r.jsxs)(x.Z, {
                          onClick: () => {
                            Z(!1);
                          },
                          children: [
                            (0, r.jsx)(no(), {
                              alt: "Logo",
                              src: v.Z,
                              priority: !0,
                              style: {
                                marginRight: "20px",
                                width: "150px",
                                height: "auto",
                              },
                            }),
                            "rtl" === c.direction
                              ? (0, r.jsx)(g.Z, { sx: { color: "#7E58FC" } })
                              : (0, r.jsx)(h.Z, { sx: { color: "#7E58FC" } }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(p.Z, {}),
                      (0, r.jsx)(Q, {
                        children: (0, r.jsx)(nn, {
                          children: [
                            { text: "Dashboard", link: "" },
                            { text: "Node Provider", link: "node-provider" },
                            { text: "Buy Subscription", link: "Buy_svpn" },
                            { text: "History", link: "history" },
                          ].map((n, t) =>
                            (0, r.jsx)(
                              m.ZP,
                              {
                                disablePadding: !0,
                                sx: {
                                  display: { xs: "flex", sm: "block" },
                                  justifyContent: "center",
                                  padding: { xs: "10px 0", sm: "0" },
                                },
                                children: (0, r.jsxs)(w.Z, {
                                  href: "/".concat(n.link),
                                  sx: {
                                    backgroundColor:
                                      i === n.link ? "#262033" : "",
                                    minHeight: 35,
                                    justifyContent: k ? "initial" : "center",
                                    flexGrow: 0,
                                    px: 1.5,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    mx: { xs: 0, sm: 2 },
                                    my: { xs: 0, sm: 1 },
                                    borderRadius: "3px",
                                    ":hover": {
                                      backgroundColor:
                                        i === n.link ? "#262033" : "",
                                    },
                                  },
                                  children: [
                                    (0, r.jsx)(b.Z, {
                                      sx: {
                                        minWidth: 0,
                                        mr: k ? 1 : 0,
                                        justifyContent: "center",
                                      },
                                      children:
                                        0 === t
                                          ? (0, r.jsx)(y.Z, {
                                              sx: {
                                                display: "block",
                                                color:
                                                  i === n.link
                                                    ? "#7E58FC"
                                                    : "#747474",
                                              },
                                            })
                                          : 1 === t
                                          ? (0, r.jsx)(no(), {
                                              alt: "user",
                                              src: "/staking.png",
                                              width: 24,
                                              height: 24,
                                              priority: !0,
                                              style: {
                                                display: "block",
                                                filter:
                                                  i === n.link
                                                    ? "none"
                                                    : "grayscale(1)",
                                              },
                                            })
                                          : 2 === t
                                          ? (0, r.jsx)(no(), {
                                              alt: "user",
                                              src: "/Node.png",
                                              width: 24,
                                              height: 24,
                                              priority: !0,
                                              style: {
                                                display: "block",
                                                filter:
                                                  i === n.link
                                                    ? "none"
                                                    : "grayscale(1)",
                                              },
                                            })
                                          : 3 === t
                                          ? (0, r.jsx)(j.Z, {
                                              sx: {
                                                display: "block",
                                                color:
                                                  i === n.link
                                                    ? "#7E58FC"
                                                    : "#747474",
                                              },
                                            })
                                          : (0, r.jsx)(B.Z, {
                                              sx: {
                                                display: "block",
                                                color:
                                                  i === n.link
                                                    ? "#7E58FC"
                                                    : "#747474",
                                              },
                                            }),
                                    }),
                                    (0, r.jsx)(Y, {
                                      primary: n.text,
                                      sx: {
                                        color:
                                          i === n.link ? "#7E58FC" : "#747474",
                                        opacity: k ? 1 : 0,
                                        fontFamily: "PoppinsR",
                                        margin: "10px 0",
                                      },
                                    }),
                                  ],
                                }),
                              },
                              n.text
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(nl, {
                    component: "main",
                    sx: {
                      width: "100%",
                      flexGrow: 1,
                      minHeight: "calc(100vh - 0px)",
                      paddingBottom: { xs: "110px", sm: "50px" },
                    },
                    children: (0, r.jsxs)(s.Z, {
                      sx: {
                        borderRadius: "0px",
                        minHeight: "calc(100vh - 0px)",
                      },
                      children: [
                        (0, r.jsx)(nc, {
                          sx: { display: { xs: "flex !important" } },
                        }),
                        t,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    31154: function () {},
  },
]);
