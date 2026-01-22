(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8276],
  {
    62961: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/history",
        function () {
          return n(29266);
        },
      ]);
    },
    43787: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
      });
      let i = "https://vpn.shadownode.org/api/";
    },
    29266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        });
      var i = n(85893);
      n(36501);
      var l = n(2711),
        r = n.n(l);
      n(37611);
      var a = n(67294);
      n(87405);
      var c = n(83421);
      n(52966), n(73360);
      var o = n(82729),
        d = n(68797),
        s = n(67793),
        u = n(53106),
        h = n(94761),
        x = n(64225),
        p = n(26407),
        f = n(1475),
        m = n(64072),
        g = n(45697),
        v = n.n(g),
        y = n(30082),
        j = n(95162),
        b = n(16829),
        _ = n(66792),
        w = n(69077),
        Z = n(85703),
        k = n(43787);
      function S() {
        let e = (0, o._)([
          "\n  min-height: calc(100vh - 500px);\n  background-color: gray;\n  /* opacity: 0.6; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      (0, b.default)(_.ZP)(S());
      let C = [
        { id: "no", label: "No.", minWidth: 100 },
        { id: "type", label: "Type", minWidth: 100 },
        { id: "period", label: "Period", minWidth: 100 },
        { id: "tx", label: "Tx", minWidth: 100 },
        {
          id: "activation_exp",
          label: "Acitivation_Expiry_Date",
          minWidth: 100,
        },
        { id: "subscription_code", label: "Subscription_Code", minWidth: 100 },
      ];
      function D(e, t, n, i, l, r) {
        return {
          no: e,
          type: t,
          period: n,
          tx: i,
          activation_exp: l,
          subscription_code: r,
        };
      }
      v().node, v().number.isRequired, v().number.isRequired;
      var E = () => {
          let { open: e, close: t } = (0, j.k_)(),
            n = async () => {
              await e();
            },
            { isConnected: l, address: r } = (0, w.mA)(),
            [c, o] = a.useState(0),
            [g, v] = a.useState(0),
            [b, _] = a.useState(10),
            [S, E] = a.useState(""),
            [T, W] = a.useState([]),
            [F, A] = a.useState(!0),
            H = async () => {
              try {
                let e = await fetch(
                    ""
                      .concat(k.T)
                      .concat("getDataByWalletAddress", "?walletAddress=")
                      .concat(r),
                    {
                      method: "GET",
                      headers: { "content-type": "application/json" },
                    }
                  ),
                  t = await e.json();
                if ((null == t ? void 0 : t.message) !== "succes") return !1;
                {
                  let e = t.data.map((e, t) =>
                    (null == e ? void 0 : e.package_type) === "Monthly"
                      ? D(
                          t + 1,
                          null == e ? void 0 : e.package_type,
                          "1 Month",
                          null == e ? void 0 : e.verification_code,
                          (function (e) {
                            let t = new Date(e);
                            return new Date(t.getTime() + 2592e6).toISOString();
                          })(null == e ? void 0 : e.createdAt),
                          null == e ? void 0 : e.payment_id
                        )
                      : D(
                          t + 1,
                          null == e ? void 0 : e.package_type,
                          "12 Months",
                          null == e ? void 0 : e.verification_code,
                          (function (e) {
                            let t = new Date(e);
                            return new Date(
                              t.getTime() + 31536e6
                            ).toISOString();
                          })(null == e ? void 0 : e.createdAt),
                          null == e ? void 0 : e.payment_id
                        )
                  );
                  W(e), A(!1);
                }
              } catch (e) {
                A(!1);
              }
            };
          a.useEffect(() => {
            H();
          });
          let [I, N] = a.useState(!1);
          return (
            a.useEffect(() => {
              N(!0);
            }),
            (0, i.jsx)(i.Fragment, {
              children:
                I &&
                (0, i.jsx)(i.Fragment, {
                  children: l
                    ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.Z, {
                          sx: {
                            width: "100%",
                            overflow: "hidden",
                            minHeight: "calc(100vh - 400px)",
                            background: "transparent",
                          },
                          children:
                            (null == T ? void 0 : T.length) > 0
                              ? (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(x.Z, {
                                    sx: {
                                      minHeight: "calc(100vh - 400px)",
                                      backgroundColor: "#161616",
                                      width: "100%",
                                      padding: "15px 0px 0px 15px",
                                    },
                                    children: (0, i.jsxs)(s.Z, {
                                      stickyHeader: !0,
                                      "aria-label": "sticky table",
                                      children: [
                                        (0, i.jsx)(p.Z, {
                                          sx: { backgroundColor: "black" },
                                          children: (0, i.jsx)(f.Z, {
                                            children: C.map((e) =>
                                              (0, i.jsx)(
                                                h.Z,
                                                {
                                                  align: e.align,
                                                  style: {
                                                    minWidth: e.minWidth,
                                                    color: "#4cc054",
                                                    backgroundColor: "#161616",
                                                  },
                                                  children: e.label,
                                                },
                                                e.id
                                              )
                                            ),
                                          }),
                                        }),
                                        (0, i.jsx)(u.Z, {
                                          children:
                                            null == T
                                              ? void 0
                                              : T.map((e) =>
                                                  (0, i.jsx)(
                                                    f.Z,
                                                    {
                                                      hover: !0,
                                                      role: "checkbox",
                                                      tabIndex: -1,
                                                      children: C.map((t) => {
                                                        let n = e[t.id];
                                                        return (0, i.jsx)(
                                                          h.Z,
                                                          {
                                                            align: t.align,
                                                            sx: {
                                                              color: "white",
                                                            },
                                                            children:
                                                              t.format &&
                                                              "number" ==
                                                                typeof n
                                                                ? t.format(n)
                                                                : n,
                                                          },
                                                          t.id
                                                        );
                                                      }),
                                                    },
                                                    null == e ? void 0 : e.code
                                                  )
                                                ),
                                        }),
                                      ],
                                    }),
                                  }),
                                })
                              : (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(y.Z, {
                                    width: "100%",
                                    minHeight: "calc(100vh - 400px)",
                                    flexDirection: "column",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "#161616",
                                    borderRadius: "20px",
                                    children: (0, i.jsx)(Z.Z, {
                                      variant: "body1",
                                      children:
                                        "You don't have any Subscription.",
                                    }),
                                  }),
                                }),
                        }),
                      })
                    : (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(y.Z, {
                          width: "100%",
                          minHeight: "calc(100vh - 400px)",
                          flexDirection: "column",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#161616",
                          borderRadius: "10px",
                          children: (0, i.jsx)(m.Z, {
                            w: "190px",
                            onClick: () => n(),
                            children: "Connect Wallet",
                          }),
                        }),
                      }),
                }),
            })
          );
        },
        T = n(12824),
        W = n(20564);
      n(23673);
      var F = n(14899),
        A = (e) => {
          let [t, n] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              setTimeout(() => {
                n(!1);
              }, 6e3);
            }),
            (0, i.jsx)(T.Z, {
              page: "history",
              children: (0, i.jsxs)(W.Z, {
                maxWidth: "xxl",
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "50px",
                },
                children: [
                  (0, i.jsx)(y.Z, {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    children: (0, i.jsx)(F.Z, { children: "History" }),
                  }),
                  (0, i.jsx)(E, {}),
                ],
              }),
            })
          );
        };
      function H() {
        return (
          (0, a.useEffect)(() => {
            r().init({ duration: 1200 });
          }),
          (0, i.jsx)(c.Z, { children: (0, i.jsx)(A, {}) })
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [5702, 457, 168, 1425, 2090, 8360, 4300, 2888, 9774, 179],
      function () {
        return e((e.s = 62961));
      }
    ),
      (_N_E = e.O());
  },
]);
