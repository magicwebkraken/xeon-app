(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4313],
  {
    34285: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/node-provider",
        function () {
          return n(33058);
        },
      ]);
    },
    64893: function (e, t, n) {
      "use strict";
      var a = n(85893),
        s = n(95162),
        i = n(66403),
        l = n(35194),
        r = n(69077);
      let d = n(35936).a,
        o = [i.R, l.F],
        c = (0, s.o1)({
          chains: o,
          projectId: d,
          metadata: {
            name: "Web3Modal",
            description: "Web3Modal Example",
            url: "https://web3modal.com",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
        });
      (0, s.OY)({ wagmiConfig: c, projectId: d, chains: o }),
        (t.Z = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(r.eM, { config: c, children: t }),
          });
        });
    },
    33058: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        });
      var a = n(85893);
      n(36501);
      var s = n(2711),
        i = n.n(s);
      n(37611);
      var l = n(67294);
      n(87405), n(83421), n(52966);
      var r = n(30082),
        d = n(20564),
        o = n(66792),
        c = n(16829),
        x = n(44905);
      n(41746);
      var u = n(69077),
        p = n(95162),
        h = n(82032),
        g = n(36811),
        f = n(64072),
        m = n(25675),
        j = n.n(m),
        S = n(43787),
        y = n(93796),
        b = n(64564),
        v = n(54877),
        w = n(91758),
        Z = n(39264),
        N = n(86383),
        E = n(12824),
        D = n(23673),
        C = n(14899),
        k = n(82729);
      function I() {
        let e = (0, k._)([
          "\n  \n   background: ",
          "; \n   /* border : 1px solid #707070;  */\n   border-radius: ",
          ";  \n   padding :",
          " ;\n   ",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      let P = (0, c.default)(r.Z)(
        I(),
        (e) => (e.bg ? e.bg : "rgba(27,24,33,0.6)"),
        (e) => (e.br ? e.br : "8px"),
        (e) => (e.p ? e.p : "30px 20px 20px")
      );
      var F = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(P, { ...e, children: t });
        },
        _ = n(77814);
      let M = (e) => {
          let { status: t } = e;
          return (0, a.jsx)(r.Z, {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            children: (0, a.jsxs)(g.Z, {
              variant: "body2",
              fontSize: "24px",
              color: "white",
              children: [
                (0, a.jsx)("span", {
                  style: { fontSize: "12px" },
                  children:
                    t && "Inactive" === t ? "\uD83D\uDD34" : "\uD83D\uDFE2",
                }),
                t && t,
              ],
            }),
          });
        },
        G = () =>
          (0, a.jsxs)(r.Z, {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            children: [
              (0, a.jsxs)(F, {
                bg: "#000",
                p: "6px 20px 6px 5px",
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  gap: "5px",
                },
                children: [
                  (0, a.jsx)(j(), {
                    src: "/download.png",
                    alt: "download",
                    width: 15,
                    height: 15,
                  }),
                  (0, a.jsxs)(r.Z, {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    children: [
                      (0, a.jsx)(g.Z, {
                        variant: "body2",
                        fontSize: { xs: "", lg: "10px" },
                        children: "Download",
                      }),
                      (0, a.jsx)(g.Z, {
                        variant: "body2",
                        fontSize: { xs: "", lg: "12px" },
                        sx: { whiteSpace: "noWrap" },
                        children: "0 MB/s",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(F, {
                bg: "#000",
                p: "6px 20px 6px 5px",
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  gap: "5px",
                },
                children: [
                  (0, a.jsx)(j(), {
                    src: "/upload.png",
                    alt: "download",
                    width: 15,
                    height: 15,
                  }),
                  (0, a.jsxs)(r.Z, {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    children: [
                      (0, a.jsx)(g.Z, {
                        variant: "body2",
                        fontSize: { xs: "", lg: "10px" },
                        children: "Upload",
                      }),
                      (0, a.jsx)(g.Z, {
                        variant: "body1",
                        fontSize: { xs: "", lg: "12px" },
                        sx: { whiteSpace: "noWrap" },
                        children: "0 MB/s",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        T = [
          {
            title: "Total Nodes",
            detail: (0, a.jsx)(g.Z, {
              variant: "body1",
              fontSize: { xs: "", lg: "24px" },
              children: "40",
            }),
          },
          {
            title: "Past Payout",
            detail: (0, a.jsx)(g.Z, {
              variant: "body1",
              fontSize: { xs: "", lg: "24px" },
              children: "--",
            }),
          },
          {
            title: "TVL By Node Providers",
            detail: (0, a.jsx)(g.Z, {
              variant: "body1",
              fontSize: { xs: "", lg: "24px" },
              children: "--",
            }),
          },
        ];
      g.Z, f.Z;
      var z = () => {
          let [e, t] = (0, l.useState)(0),
            [n, s] = (0, l.useState)(!1),
            [i, c] = (0, l.useState)("00.00"),
            [m, j] = l.useState("eth"),
            { chain: k } = (0, u.LN)(),
            I = (0, u.mA)(),
            [P, z] = (0, l.useState)(0),
            [A, H] = (0, l.useState)(x.fi("2500000").toString()),
            [V, R] = (0, l.useState)(),
            [O, W] = (0, l.useState)(0),
            [B, U] = (0, l.useState)(0),
            [Y, K] = (0, l.useState)(0),
            [L, X] = (0, l.useState)(0),
            [Q, J] = (0, l.useState)(0),
            [$, q] = (0, l.useState)(0),
            [ee, et] = (0, l.useState)(0),
            [en, ea] = (0, l.useState)(0.25),
            [es, ei] = (0, l.useState)(!0),
            [el, er] = (0, l.useState)(!1),
            [ed, eo] = (0, l.useState)(!1),
            [ec, ex] = l.useState("false"),
            [eu, ep] = l.useState(!1),
            [eh, eg] = (0, l.useState)(0),
            [ef, em] = (0, l.useState)(),
            [ej, eS] = (0, l.useState)(),
            [ey, eb] = (0, l.useState)(),
            [ev, ew] = (0, l.useState)(),
            [eZ, eN] = (0, l.useState)(!1),
            [eE, eD] = (0, l.useState)(!1),
            [eC, ek] = (0, l.useState)(!1),
            [eI, eP] = (0, l.useState)(!0),
            [eF, e_] = (0, l.useState)(!1),
            [eM, eG] = (0, l.useState)(1),
            [eT, ez] = (0, l.useState)(0),
            [eA, eH] = (0, l.useState)(""),
            [eV, eR] = l.useState("New York"),
            [eO, eW] = l.useState(),
            [eB, eU] = l.useState({}),
            [eY, eK] = (0, l.useState)(!1),
            [eL, eX] = (0, l.useState)(null),
            [eQ, eJ] = (0, l.useState)(),
            [e$, eq] = (0, l.useState)(!1),
            [e0, e1] = (0, l.useState)(!1),
            [e2, e3] = (0, l.useState)({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            }),
            [e4, e5] = (0, l.useState)(!1),
            [e8, e6] = (0, l.useState)([]),
            [e7, e9] = (0, l.useState)(!1),
            [te, tt] = (0, l.useState)(!1),
            [tn, ta] = (0, l.useState)(!1),
            [ts, ti] = (0, l.useState)(!1),
            [tl, tr] = (0, l.useState)("1"),
            { open: td, close: to } = (0, p.k_)(),
            tc = (e) => {
              ex(e), ep(() => "false" !== e);
            };
          function tx(e) {
            return new Date(1e3 * e).toLocaleString(void 0, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !0,
            });
          }
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              let e = (function (e) {
                let t = e + 2592e3 - Math.floor(Date.now() / 1e3);
                return {
                  days: Math.floor(t / 86400),
                  hours: Math.floor((t % 86400) / 3600),
                  minutes: Math.floor((t % 3600) / 60),
                  seconds: t % 60,
                };
              })(eh);
              e.days > 0 && e.hours > 0 && e3(e);
            }, 1e3);
            return () => clearInterval(e);
          }, [eh]);
          let tu = async () => {
            try {
              let e = await fetch("".concat(S.T).concat("getServerData"), {
                  method: "GET",
                  headers: { "content-type": "application/json" },
                }),
                t = await e.json();
              (null == t ? void 0 : t.message) === "succes"
                ? eW(null == t ? void 0 : t.data)
                : eW([{}]);
            } catch (e) {
              eW([{}]);
            }
          };
          (0, l.useEffect)(() => {
            tu();
          }, []);
          let tp = async () => {
              try {
                let e = await fetch("".concat(S.T).concat("addNewNodeUser"), {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                      userId: eL,
                      walletAddress: tf,
                      serverType: eA,
                      countryName: null == eB ? void 0 : eB.country,
                      serverName: null == eB ? void 0 : eB.city,
                      ip: null == eB ? void 0 : eB.ip,
                      paymentWalletAddress: null == eQ ? void 0 : eQ.address,
                      paymentWalletPrivateKey:
                        null == eQ ? void 0 : eQ.privateKey,
                    }),
                  }),
                  t = await e.json();
                (null == t ? void 0 : t.message) === "succes" || eo(!1);
              } catch (e) {
                eo(!1);
              }
            },
            { switchNetwork: th } = (0, u.g0)(),
            { isConnected: tg, address: tf } = (0, u.mA)();
          (0, u.KQ)({
            address: null == I ? void 0 : I.address,
            token: N.zv,
            chainId: null == k ? void 0 : k.id,
            watch: !0,
            onSettled(e, t) {
              e && W(() => Number(null == e ? void 0 : e.formatted)), t && W(0);
            },
          }),
            (0, u.KQ)({
              address: null == eQ ? void 0 : eQ.address,
              chainId: null == k ? void 0 : k.id,
              enabled: !!e$,
              onSettled(e, t) {
                e &&
                  (e1(() => Number(null == e ? void 0 : e.formatted)),
                  0.3 === Number(null == e ? void 0 : e.formatted) &&
                    (tp(), eG(5))),
                  t && e1(0);
              },
            }),
            (0, u.KQ)({
              address: N.V_,
              chainId: null == k ? void 0 : k.id,
              watch: !0,
              onSettled(e, t) {
                e && U(() => Number(null == e ? void 0 : e.formatted)),
                  t && U(0);
              },
            }),
            (0, u.do)({
              address: N.V_,
              abi: N.MG,
              functionName: "getUnpaid",
              args: [null == I ? void 0 : I.address],
              watch: !0,
              onSettled(e, t) {
                e &&
                  K(() => (0 >= x.dF(e) ? 0 : parseFloat(x.dF(e)).toFixed(5)));
              },
            }),
            (0, u.do)({
              address: N.V_,
              abi: N.MG,
              functionName: "shares",
              args: [null == I ? void 0 : I.address],
              watch: !0,
              onSettled(e, t) {
                e &&
                  (X(() => parseInt(e[0])),
                  et(() => (x.dF(e[0]) / 1e9) * 100),
                  J(() => x.dF(e[0])),
                  q(() => e[0]),
                  eg(() => parseInt(e[1])),
                  tx(parseInt(e[1])),
                  em(tx(parseInt(e[1]) + 2592e3)),
                  0 === x.dF(e[0]) && e_(!1)),
                  t && (X(0), J(0), et(0));
              },
            }),
            (0, u.do)({
              address: N.V_,
              abi: N.MG,
              functionName: "lockupPeriod",
              watch: !0,
              onSettled(e, t) {
                e && eS(() => parseInt(e));
              },
            });
          let [tm, tj] = (0, l.useState)(null);
          (0, l.useEffect)(() => {
            Date.now(), tj(new Date(1e3 * (eh + ej)));
          }, [eh, ej]),
            (0, l.useEffect)(() => {
              setTimeout(() => {
                R("");
              }, 5e3);
            }, [V]),
            (0, l.useEffect)(() => {}, [O, L, Y]);
          let tS = (e) => {
            setTimeout(() => {
              eo(!1);
            }, e);
          };
          (0, u.GG)({
            address: N.zv,
            abi: h.ww,
            functionName: "approve",
            args: [N.V_, A],
            onError(e) {
              R(!0), eo(!1);
            },
            onSuccess(e) {
              eb(e.hash);
            },
          }),
            (0, u.BX)({
              hash: ey,
              enabled: ey,
              onSettled(e, t) {
                t ? (eo(!1), ei(!1)) : ty.write();
              },
            }),
            (0, u.do)({
              address: N.zv,
              abi: h.ww,
              chainId: null == k ? void 0 : k.id,
              functionName: "allowance",
              args: [null == I ? void 0 : I.address, N.V_],
              watch: !0,
              onSuccess(e) {
                e >= A ? ei(!1) : ei(!0);
              },
              onError(e) {
                ei(!0);
              },
            });
          let ty = (0, u.GG)({
            mode: "recklesslyUnprepared",
            address: N.V_,
            abi: N.MG,
            functionName: "stake",
            args: [A],
            overrides: { from: null == I ? void 0 : I.address },
            onError(e) {
              eo(!1);
            },
            onSuccess(e) {
              eN(null == e ? void 0 : e.hash);
            },
          });
          (0, u.BX)({
            hash: eZ,
            enabled: eZ,
            onSettled(e, t) {
              eo(!1), ek(!1);
            },
          });
          let [tb, tv] = (0, l.useState)(""),
            tw = (0, u.GG)({
              address: N.V_,
              abi: N.MG,
              functionName: "unstake",
              args: [$],
              onError(e) {
                eo(!1);
              },
              onSuccess(e) {
                eD(null == e ? void 0 : e.hash);
              },
            });
          (0, u.BX)({
            hash: eE,
            enabled: eE,
            onSettled(e, t) {
              t ? eo(!1) : (eo(!1), R(!0));
            },
          });
          let tZ = async () => {
              eo(!0), null == tw || tw.write();
            },
            tN = (0, u.GG)({
              address: N.V_,
              abi: N.MG,
              functionName: "claimReward",
              args: [eu, 0],
              onError(e) {
                tS(1e3);
              },
              onSuccess(e) {
                tS(28e3);
              },
            }),
            tE = async () => {
              if (Y <= 0) {
                alert("You have no rewards yet");
                return;
              }
              if (Y > B) {
                alert("Pool value is not enught");
                return;
              }
              eo(!0), null == tN || tN.write();
            },
            tD = async () => {
              try {
                let e = await fetch(
                    ""
                      .concat(S.T)
                      .concat(
                        "getNodeUserDataByWalletAddress",
                        "?walletAddress="
                      )
                      .concat(tf),
                    {
                      method: "GET",
                      headers: { "content-type": "application/json" },
                    }
                  ),
                  t = await e.json();
                if (
                  (console.log("response", t),
                  (null == t ? void 0 : t.message) ===
                    "walletAddress dose not Exist")
                )
                  return e5(!1), null == t ? void 0 : t.data[0];
                return e5(!0), null == t ? void 0 : t.data[0];
              } catch (e) {
                e5(!1), eK(!0);
              }
            };
          (0, l.useEffect)(() => {
            (async () => {
              e6(await tD());
            })();
          }, [tf, k]);
          let [tC, tk] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            tk(!0);
          }, []);
          let [tI, tP] = l.useState(!1),
            tF = () => {
              tP(!0);
            };
          return (0, a.jsx)(a.Fragment, {
            children:
              tC &&
              (0, a.jsx)(E.Z, {
                page: "node-provider",
                children: (0, a.jsxs)(d.Z, {
                  maxWidth: "xxl",
                  sx: {
                    display: "".concat(!1 == n ? "flex" : "none"),
                    flexDirection: "column",
                    gap: "10px",
                    position: "relative",
                    marginTop: "50px",
                  },
                  children: [
                    (0, a.jsxs)(r.Z, {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                      children: [
                        (0, a.jsx)(D.Z, { children: "Node Provider" }),
                        (0, a.jsxs)(r.Z, {
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          children: [
                            (0, a.jsx)(C.Z, {
                              children: "XEON Node Dashboard",
                            }),
                            tg &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(f.Z, {
                                    c: "#fff",
                                    bgc: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                    hc: "#fff",
                                    m: "0px 20px",
                                    br: "5px",
                                    p: "4px 20px",
                                    onClick: () => tF(),
                                    children: "Setup A Node",
                                  }),
                                  (0, a.jsx)(_.Z, {
                                    PopupOpen: tI,
                                    setPopupOpen: tP,
                                    handleClose: () => {
                                      tP(!1);
                                    },
                                    handleClickPopupOpen: tF,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.ZP, {
                      container: !0,
                      xs: 12,
                      sx: { display: "flex", gap: "10px" },
                      children: T.map((e) =>
                        (0, a.jsx)(
                          o.ZP,
                          {
                            item: !0,
                            xs: 12,
                            lg: 3.92,
                            children: (0, a.jsxs)(r.Z, {
                              sx: {
                                padding: "20px",
                                minHeight: "80px",
                                width: "calc(100% - 40px)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "start",
                                gap: "10px",
                                borderRadius: "10px",
                                background: "rgba(27, 24, 33, 0.6)",
                              },
                              children: [
                                (0, a.jsx)(g.Z, {
                                  variant: "body1",
                                  color: "#fff",
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
                    (0, a.jsx)(F, {
                      p: { xs: "0px", lg: "25px 20px 25px" },
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        height: "100%",
                        minHeight: "calc(100vh - 500px)",
                      },
                      children:
                        tg && e4
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(C.Z, {
                                  textAlign: "left",
                                  fontSize: { xs: "24px", lg: "24px" },
                                  children: "Your Node",
                                }),
                                (0, a.jsxs)(o.ZP, {
                                  container: !0,
                                  gap: "20px",
                                  children: [
                                    (0, a.jsx)(o.ZP, {
                                      item: !0,
                                      xs: 12,
                                      lg: 5.85,
                                      children: (0, a.jsxs)(F, {
                                        bg: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                        sx: {
                                          padding: "20px",
                                          minHeight: "150px",
                                          width: "calc(100% - 40px)",
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "start",
                                          alignItems: "start",
                                          gap: "10px",
                                        },
                                        children: [
                                          (0, a.jsx)(g.Z, {
                                            variant: "h6",
                                            color: "white",
                                            children: "XEON-Node #041",
                                          }),
                                          (0, a.jsx)(g.Z, {
                                            variant: "body1",
                                            children:
                                              tC &&
                                              ""
                                                .concat(
                                                  null == tf
                                                    ? void 0
                                                    : tf.slice(0, 4),
                                                  "*******"
                                                )
                                                .concat(
                                                  null == tf
                                                    ? void 0
                                                    : tf.slice(
                                                        (null == tf
                                                          ? void 0
                                                          : tf.length) - 4,
                                                        null == tf
                                                          ? void 0
                                                          : tf.length
                                                      )
                                                ),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsxs)(o.ZP, {
                                      item: !0,
                                      container: !0,
                                      xs: 12,
                                      lg: 5.85,
                                      sx: { borderRadius: "10px" },
                                      children: [
                                        (0, a.jsxs)(o.ZP, {
                                          item: !0,
                                          xs: 12,
                                          lg: 5,
                                          sx: {
                                            padding: "20px",
                                            minHeight: "80px",
                                            width: "calc(100% - 40px)",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "start",
                                            alignItems: "start",
                                            gap: "10px",
                                            background: "rgba(27, 24, 33, 1)",
                                          },
                                          children: [
                                            (0, a.jsx)(D.Z, {
                                              children: "Node Earning",
                                            }),
                                            (0, a.jsxs)(g.Z, {
                                              variant: "body1",
                                              children: [Y, " ETH"],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)(o.ZP, {
                                          item: !0,
                                          xs: 12,
                                          lg: 7,
                                          sx: {
                                            borderLeft: "1px solid #373141",
                                            padding: "20px",
                                            minHeight: "80px",
                                            width: "calc(100% - 40px)",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "start",
                                            alignItems: "start",
                                            gap: "5px",
                                            background: "rgba(27, 24, 33, 1)",
                                          },
                                          children: [
                                            (0, a.jsx)(D.Z, {
                                              children: "Claim rewards in:",
                                            }),
                                            (0, a.jsx)(y.Z, {
                                              children: (0, a.jsxs)(w.Z, {
                                                row: !0,
                                                "aria-labelledby":
                                                  "demo-controlled-radio-buttons-group",
                                                name: "controlled-radio-buttons-group",
                                                value: m,
                                                onChange: (e) => {
                                                  j(e.target.value);
                                                },
                                                children: [
                                                  (0, a.jsx)(Z.Z, {
                                                    title:
                                                      "Your rewards will be withdrawn into your\xa0wallet.",
                                                    placement: "top",
                                                    children: (0, a.jsx)(b.Z, {
                                                      sx: { color: "#fff" },
                                                      onClick: () =>
                                                        tc("false"),
                                                      value: "false",
                                                      control: (0, a.jsx)(v.Z, {
                                                        sx: {
                                                          color: "#683FEE",
                                                          "&.Mui-checked": {
                                                            color: "#683FEE",
                                                          },
                                                        },
                                                      }),
                                                      label: "$ETH",
                                                    }),
                                                  }),
                                                  (0, a.jsx)(Z.Z, {
                                                    title:
                                                      "Your rewards will be reinvested into staking and will not be withdrawn\xa0to\xa0your\xa0wallet.",
                                                    placement: "top",
                                                    children: (0, a.jsx)(b.Z, {
                                                      sx: { color: "#fff" },
                                                      onClick: () => tc("true"),
                                                      value: "true",
                                                      control: (0, a.jsx)(v.Z, {
                                                        sx: {
                                                          color: "#683FEE",
                                                          "&.Mui-checked": {
                                                            color: "#683FEE",
                                                          },
                                                        },
                                                      }),
                                                      label:
                                                        "Claim And Restake",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)(f.Z, {
                                              bgc: "#000 !important",
                                              c: "#fff",
                                              hc: "#fff",
                                              m: "0px 0px",
                                              br: "7px",
                                              p: "4px 25px",
                                              fs: "16px",
                                              disabled: !0 === ed,
                                              onClick: tE,
                                              children: "Claim Now",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)(o.ZP, {
                                      item: !0,
                                      container: !0,
                                      xs: 12,
                                      lg: 12,
                                      sx: { display: "flex", gap: "15px" },
                                      children: [
                                        (0, a.jsx)(o.ZP, {
                                          item: !0,
                                          xs: 12,
                                          lg: 2.87,
                                          padding: { xs: "0px" },
                                          children: (0, a.jsxs)(r.Z, {
                                            sx: {
                                              padding: "20px",
                                              minHeight: "80px",
                                              width: "calc(100% - 40px)",
                                              display: "flex",
                                              flexDirection: "column",
                                              justifyContent: "start",
                                              alignItems: "start",
                                              gap: "10px",
                                              borderRadius: "10px",
                                              background: "rgba(27, 24, 33, 1)",
                                            },
                                            children: [
                                              (0, a.jsx)(D.Z, {
                                                children: "Node Location",
                                              }),
                                              (0, a.jsx)(g.Z, {
                                                variant: "body1",
                                                fontSize: {
                                                  xs: "",
                                                  lg: "24px",
                                                },
                                                children: "40",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(o.ZP, {
                                          item: !0,
                                          xs: 12,
                                          lg: 2.87,
                                          padding: { xs: "0px" },
                                          children: (0, a.jsxs)(r.Z, {
                                            sx: {
                                              padding: "20px",
                                              minHeight: "80px",
                                              width: "calc(100% - 40px)",
                                              display: "flex",
                                              flexDirection: "column",
                                              justifyContent: "start",
                                              alignItems: "start",
                                              gap: "10px",
                                              borderRadius: "10px",
                                              background: "rgba(27, 24, 33, 1)",
                                            },
                                            children: [
                                              (0, a.jsx)(D.Z, {
                                                children: "Node Status",
                                              }),
                                              (0, a.jsx)(M, {
                                                status:
                                                  null == e8
                                                    ? void 0
                                                    : e8.status,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(o.ZP, {
                                          item: !0,
                                          xs: 12,
                                          lg: 2.87,
                                          padding: { xs: "0px" },
                                          children: (0, a.jsxs)(r.Z, {
                                            sx: {
                                              padding: "20px",
                                              minHeight: "80px",
                                              width: "calc(100% - 40px)",
                                              display: "flex",
                                              flexDirection: "column",
                                              justifyContent: "start",
                                              alignItems: "start",
                                              gap: "10px",
                                              borderRadius: "10px",
                                              background: "rgba(27, 24, 33, 1)",
                                            },
                                            children: [
                                              (0, a.jsx)(D.Z, {
                                                children: "Speed",
                                              }),
                                              (0, a.jsx)(G, {}),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(o.ZP, {
                                          item: !0,
                                          xs: 12,
                                          lg: 2.87,
                                          padding: { xs: "0px" },
                                          children: (0, a.jsxs)(r.Z, {
                                            sx: {
                                              padding: "20px",
                                              minHeight: "80px",
                                              width: "calc(100% - 40px)",
                                              display: "flex",
                                              flexDirection: "column",
                                              justifyContent: "start",
                                              alignItems: "start",
                                              gap: "10px",
                                              borderRadius: "10px",
                                              background: "rgba(27, 24, 33, 1)",
                                            },
                                            children: [
                                              (0, a.jsx)(D.Z, {
                                                children: "Unstake XEON",
                                              }),
                                              (0, a.jsx)(f.Z, {
                                                bgc: "#000 !important",
                                                c: "#fff",
                                                hc: "#fff",
                                                m: "0px 0px",
                                                br: "7px",
                                                p: "5px 25px",
                                                fs: "16px",
                                                disabled: !0 === ed,
                                                onClick: () => {
                                                  tZ();
                                                },
                                                children: "Unstake",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, a.jsx)(r.Z, {
                              width: "100%",
                              height: "100%",
                              minHeight: "calc(100vh - 550px)",
                              sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              },
                              children: (0, a.jsx)(g.Z, {
                                variant: "h4",
                                color: "#959595",
                                children: "You Haven't Setup Any Nodes",
                              }),
                            }),
                    }),
                  ],
                }),
              }),
          });
        },
        A = n(64893);
      function H() {
        return (
          (0, l.useEffect)(() => {
            i().init({ duration: 1200 });
          }),
          (0, a.jsx)(A.Z, { children: (0, a.jsx)(z, {}) })
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        5702, 457, 168, 1425, 2090, 8784, 7185, 8360, 2032, 4300, 7814, 2888,
        9774, 179,
      ],
      function () {
        return e((e.s = 34285));
      }
    ),
      (_N_E = e.O());
  },
]);
