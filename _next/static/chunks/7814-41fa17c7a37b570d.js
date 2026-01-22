(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7814],
  {
    86383: function (e, t, n) {
      "use strict";
      n.d(t, {
        MG: function () {
          return s;
        },
        V_: function () {
          return i;
        },
        zv: function () {
          return a;
        },
      });
      let a = "0xc668695dcbcf682de106da94bde65c9bc79362d3";
      var i = "0x3eb3401b2defc1dd18a6089b737ee414f14ad0f2",
        s = [
          {
            inputs: [
              { internalType: "address", name: "_token", type: "address" },
              {
                internalType: "uint256",
                name: "_lockupPeriod",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "initialOwner",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "FailedInnerCall", type: "error" },
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
          { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
            ],
            name: "ClaimReward",
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
                name: "amountTokens",
                type: "uint256",
              },
            ],
            name: "DepositRewards",
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
              {
                indexed: !1,
                internalType: "bool",
                name: "_wasCompounded",
                type: "bool",
              },
            ],
            name: "DistributeReward",
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
            name: "Stake",
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
            name: "Unstake",
            type: "event",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "blackList",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bool", name: "_compound", type: "bool" },
              {
                internalType: "uint256",
                name: "_compMinTokensToReceive",
                type: "uint256",
              },
            ],
            name: "claimReward",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_wallet", type: "address" },
              { internalType: "bool", name: "_compound", type: "bool" },
              {
                internalType: "uint256",
                name: "_compMinTokensToReceive",
                type: "uint256",
              },
            ],
            name: "claimRewardAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "depositRewards",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "extension",
            outputs: [
              {
                internalType: "contract IPoolExtension",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "wallet", type: "address" },
            ],
            name: "getUnpaid",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lockupPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "rewards",
            outputs: [
              { internalType: "uint256", name: "excluded", type: "uint256" },
              { internalType: "uint256", name: "realised", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "rewardsPerShare",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_wallet", type: "address" },
              { internalType: "bool", name: "_bool", type: "bool" },
            ],
            name: "setBlackList",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_seconds", type: "uint256" },
            ],
            name: "setLockupPeriod",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IPoolExtension",
                name: "_extension",
                type: "address",
              },
            ],
            name: "setPoolExtension",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_limit", type: "uint256" },
            ],
            name: "setUserLimit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "shares",
            outputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "uint256", name: "stakedTime", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "stake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address[]",
                name: "_wallets",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
              },
            ],
            name: "stakeForWallets",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "token",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalDistributed",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalRewards",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSharesDeposited",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalStakedUsers",
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
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "unstake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "usersLimit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
    },
    43787: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
      });
      let a = "https://vpn.shadownode.org/api/";
    },
    77814: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var a = n(85893),
        i = n(67294),
        s = n(30082),
        r = n(59258),
        o = n(14556),
        d = n(86920),
        l = n(88274),
        p = n(2302),
        u = n(64564),
        c = n(17081),
        y = n(39264),
        m = n(44905),
        x = n(41746),
        f = n(69077),
        h = n(73360),
        b = n(82032),
        g = n(36811),
        w = n(64072),
        v = n(69062),
        j = n(49872),
        T = n(82729),
        S = n(32776),
        k = n(11262),
        Z = n(80370),
        F = n(16829);
      function D() {
        let e = (0, T._)([
          "\n\n    &>.MuiPaper-root{\n        background-color: #fff !important;\n    }\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function C(e) {
        let { isAgree: t, setIsAgree: n } = e,
          [s, d] = i.useState(!1),
          p = () => {
            d(!1);
          };
        return (0, a.jsxs)(i.Fragment, {
          children: [
            (0, a.jsx)(w.Z, {
              m: "10px 0",
              c: "#fff",
              bgc: "linear-gradient(to right,#FF5D5D,#EA3737)",
              hbgc: "linear-gradient(to right,#FF5D5D,#EA3737)",
              hc: "#fff",
              onClick: () => {
                d(!0);
              },
              children: "Stake Now",
            }),
            (0, a.jsxs)(r.Z, {
              open: s,
              onClose: p,
              "aria-labelledby": "alert-dialog-title",
              "aria-describedby": "alert-dialog-description",
              children: [
                (0, a.jsx)(o.Z, {
                  id: "alert-dialog-title",
                  sx: { color: "#fff" },
                  children: "Disclaimer:",
                }),
                (0, a.jsx)(l.Z, {
                  children: (0, a.jsx)(Z.Z, {
                    id: "alert-dialog-description",
                    sx: { color: "#fff" },
                    children:
                      "Before you continue, bear in mind that staked tokens can only be unstaked after a 30 day period.",
                  }),
                }),
                (0, a.jsxs)(k.Z, {
                  children: [
                    (0, a.jsx)(S.Z, {
                      sx: { color: "#fff" },
                      onClick: p,
                      children: "Disagree",
                    }),
                    (0, a.jsx)(S.Z, {
                      sx: { color: "#fff" },
                      onClick: () => {
                        n(!0);
                      },
                      autoFocus: !0,
                      children: "Agree",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      n(87717), (0, F.default)(r.Z)(D());
      var A = n(57059),
        M = n(43787),
        N = n(86383),
        E = n(14899),
        _ = n(23673),
        I = (e) => {
          let {
              PopupOpen: t,
              setPopupOpen: n,
              handleClose: T,
              handleClickPopupOpen: S,
            } = e,
            [k, Z] = (0, i.useState)(0),
            { chain: F } = (0, f.LN)(),
            D = (0, f.mA)(),
            [I, P] = (0, i.useState)(m.fi("250").toString()),
            [O, R] = (0, i.useState)(),
            [z, G] = (0, i.useState)(0),
            [L, U] = (0, i.useState)(0),
            [W, B] = (0, i.useState)(0),
            [Y, K] = (0, i.useState)(0),
            [V, q] = (0, i.useState)(0),
            [H, J] = (0, i.useState)(25e-6),
            [Q, X] = (0, i.useState)(!1),
            [$, ee] = (0, i.useState)(!1),
            [et, en] = (0, i.useState)(),
            [ea, ei] = (0, i.useState)(!1),
            [es, er] = (0, i.useState)(!1),
            [eo, ed] = (0, i.useState)(!1),
            [el, ep] = (0, i.useState)(!0),
            [eu, ec] = (0, i.useState)(0),
            [ey, em] = (0, i.useState)(1),
            [ex, ef] = (0, i.useState)(1),
            [eh, eb] = (0, i.useState)(""),
            [eg, ew] = i.useState(),
            [ev, ej] = (0, i.useState)(!1),
            [eT, eS] = (0, i.useState)(),
            [ek, eZ] = (0, i.useState)(!1),
            [eF, eD] = (0, i.useState)(!1),
            [eC, eA] = (0, i.useState)(!1),
            [eM, eN] = (0, i.useState)(!1),
            [eE, e_] = (0, i.useState)(!1),
            eI = async () => {
              navigator.clipboard.writeText(null == eT ? void 0 : eT.address),
                e_(!0);
            },
            eP = async () => {
              try {
                let e = await fetch("".concat(M.T).concat("getServerData"), {
                    method: "GET",
                    headers: { "content-type": "application/json" },
                  }),
                  t = await e.json();
                (null == t ? void 0 : t.message) === "succes"
                  ? ew(null == t ? void 0 : t.data)
                  : ew([{}]);
              } catch (e) {
                ew([{}]);
              }
            };
          (0, i.useEffect)(() => {
            eP();
          }, []);
          let eO = async () => {
              try {
                let e = await fetch("".concat(M.T).concat("addNewNodeUser"), {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                      walletAddress: eL,
                      serverType: eh,
                      paymentWalletAddress: null == eT ? void 0 : eT.address,
                      paymentWalletPrivateKey:
                        null == eT ? void 0 : eT.privateKey,
                    }),
                  }),
                  t = await e.json();
                (null == t ? void 0 : t.message) === "succes" || ee(!1);
              } catch (e) {
                ee(!1);
              }
            },
            eR = async (e, t) => {
              try {
                let n = await fetch("".concat(M.T).concat("addNewWallet"), {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                      walletAddress: eL,
                      status: e,
                      paymentWalletAddress: null == t ? void 0 : t.address,
                      paymentWalletPrivateKey:
                        null == t ? void 0 : t.privateKey,
                    }),
                  }),
                  a = await n.json();
                (null == a ? void 0 : a.message) === "succes" ||
                  (null == a ? void 0 : a.message) === "updated" ||
                  (eR(e, t), ee(!1));
              } catch (n) {
                eR(e, t), ee(!1);
              }
            };
          function ez(e) {
            return (Number(e) / Number(1e9)) * 100;
          }
          let { isConnected: eG, address: eL } = (0, f.mA)();
          (0, f.KQ)({
            address: null == D ? void 0 : D.address,
            token: N.zv,
            chainId: null == F ? void 0 : F.id,
            watch: !0,
            onSettled(e, t) {
              e &&
                (console.log("balance data", null == e ? void 0 : e.formatted),
                G(() => Number(null == e ? void 0 : e.formatted)),
                ez(z) < H ? ep(!1) : ez(z) >= H && ep(!0)),
                t && G(0);
            },
          }),
            (0, f.KQ)({
              address: null == eT ? void 0 : eT.address,
              chainId: null == F ? void 0 : F.id,
              token: N.zv,
              enabled: !!ek,
              onSettled(e, t) {
                e &&
                  ((eD(() => Number(null == e ? void 0 : e.formatted)),
                  Number(null == e ? void 0 : e.formatted) >= 0.3)
                    ? (ec(!0), eO(), eR("paid", eT), em(5))
                    : ec((e) => e + 1)),
                  t && eD(0);
              },
            }),
            (0, f.do)({
              address: N.V_,
              abi: N.MG,
              functionName: "shares",
              args: [null == D ? void 0 : D.address],
              watch: !0,
              enabled: !!ev,
              onSettled(e, t) {
                e &&
                  (console.log("stakers data parse: ", m.dF(e[0])),
                  B(() => parseInt(e[0])),
                  q(() => ez(m.dF(e[0]))),
                  K(() => m.dF(e[0])),
                  ez(m.dF(e[0])) >= H
                    ? (console.log("here"), ed(!0), er(!0))
                    : (ed(!1), er(!1))),
                  t && (B(0), K(0), q(0));
              },
            }),
            (0, i.useEffect)(() => {
              setTimeout(() => {
                R("");
              }, 5e3);
            }, [O]),
            (0, i.useEffect)(() => {}, [z, W, L]);
          let eU = (0, f.GG)({
              address: N.zv,
              abi: b.ww,
              functionName: "approve",
              args: [N.V_, I],
              onSettled(e, t) {
                t ? (R(!0), ee(!1)) : en(e.hash);
              },
            }),
            eW = async () => {
              ee(!0), Q ? null == eU || eU.write() : eB.write();
            };
          (0, f.BX)({
            hash: et,
            enabled: !!et,
            onSettled(e, t) {
              t ? (ee(!1), X(!1)) : eB.write();
            },
          }),
            (0, f.do)({
              address: N.zv,
              abi: b.ww,
              chainId: null == F ? void 0 : F.id,
              functionName: "allowance",
              args: [null == D ? void 0 : D.address, N.V_],
              watch: !0,
              onSuccess(e) {
                console.log("allownace", e), e >= I ? X(!1) : X(!0);
              },
              onError(e) {
                X(!0);
              },
            });
          let eB = (0, f.GG)({
            mode: "recklesslyUnprepared",
            address: N.V_,
            abi: N.MG,
            functionName: "stake",
            args: [I],
            overrides: { from: null == D ? void 0 : D.address },
            onError(e) {
              ee(!1);
            },
            onSuccess(e) {
              ei(null == e ? void 0 : e.hash);
            },
          });
          (0, f.BX)({
            hash: ea,
            enabled: !!ea,
            onSettled(e, t) {
              ej(!0), ee(!1);
            },
          });
          let eY = (e) => {
              ef(e);
            },
            eK = () => {
              eb(1 === ex ? "managed" : "unmanaged"), em(3);
            },
            eV = () => {
              let e = x.w.createRandom();
              eS(e), eR("unpaid", e);
            },
            eq = async () => {
              try {
                let e = await fetch(
                    ""
                      .concat(M.T)
                      .concat(
                        "getNodeUserDataByWalletAddress",
                        "?walletAddress="
                      )
                      .concat(null == D ? void 0 : D.address),
                    {
                      method: "GET",
                      headers: { "content-type": "application/json" },
                    }
                  ),
                  t = await e.json();
                console.log("setisNodeOwner", t),
                  (null == t ? void 0 : t.message) ===
                  "walletAddress dose not Exist"
                    ? (ep(!0), eA(!1), ej(!0))
                    : (eA(!0), ep(!1));
              } catch (e) {}
            };
          (0, i.useEffect)(() => {
            eq();
          }, [eL, F]);
          let [eH, eJ] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              eJ(!0);
            }, []),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(r.Z, {
                onClose: T,
                open: t,
                children:
                  5 === ey
                    ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(s.Z, {
                          padding: "20px",
                          children: [
                            (0, a.jsxs)(s.Z, {
                              sx: {
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                              },
                              children: [
                                (0, a.jsx)(E.Z, {
                                  color: "#fff",
                                  textAlign: "center !important",
                                  children: "Congratulations!",
                                }),
                                (0, a.jsx)(g.Z, {
                                  textAlign: "center",
                                  children:
                                    "You Have Successfully Purchased The Node. Welcome To Xeon AI!",
                                }),
                                (0, a.jsx)(g.Z, {
                                  textAlign: "center",
                                  children:
                                    "Your node will be set up within 3 to 6 hours. After this time, you can connect your wallet to access the node dashboard.",
                                }),
                              ],
                            }),
                            (0, a.jsxs)(s.Z, {
                              sx: {
                                width: "calc(100% - 40px)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px 0px",
                                padding: "20px",
                              },
                              children: [
                                (0, a.jsx)(_.Z, {
                                  children: "Ticket ID # 043",
                                }),
                                (0, a.jsx)(g.Z, {
                                  textAlign: "center",
                                  children:
                                    "This is your ticket ID. You can use this when talking to support if your node isn't live within the given time",
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          eC
                            ? (0, a.jsx)(o.Z, {
                                sx: {
                                  m: 0,
                                  p: "10px 20px 0px 20px",
                                  fontSize: "30px",
                                  fontFamily: "poppinsL",
                                  color: "#fff",
                                },
                                children:
                                  "Attention: Single Node Provider Limitation",
                              })
                            : (0, a.jsx)(o.Z, {
                                sx: {
                                  m: 0,
                                  p: "10px 20px 0px 20px",
                                  fontSize: "30px",
                                  fontFamily: "poppinsL",
                                  color: "#fff",
                                },
                                children: "Setup A Node",
                              }),
                          (0, a.jsx)(d.Z, {
                            "aria-label": "close",
                            onClick: T,
                            sx: { position: "absolute", right: 8, top: 8 },
                            children: (0, a.jsx)(A.Z, {
                              sx: {
                                color: "white",
                                backgroundColor: "#663CED",
                              },
                            }),
                          }),
                          (0, a.jsxs)(l.Z, {
                            dividers: !0,
                            children: [
                              eC
                                ? (0, a.jsx)(g.Z, {
                                    varaint: "body1",
                                    children:
                                      "Each wallet can be a provider for only one node at a time. Please ensure you are not currently registered as a provider for another node before\xa0proceeding.",
                                  })
                                : (0, a.jsx)(g.Z, {
                                    varaint: "body1",
                                    children:
                                      "We will guide you through a straight forward setup process to prepare your node for our network. Please follow each step carefully to ensure accurate configuration and secure integration.",
                                  }),
                              (0, a.jsxs)(s.Z, {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "start",
                                gap: "10px",
                                children: [
                                  !eC &&
                                    (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(_.Z, { children: "Step 1" }),
                                        (0, a.jsx)(g.Z, {
                                          variant: "body2",
                                          children:
                                            "Stake 0.25% Supply of the SvpN tokens?",
                                        }),
                                      ],
                                    }),
                                  eC
                                    ? (0, a.jsx)(w.Z, {
                                        c: "#fff",
                                        bgc: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                        hc: "#fff",
                                        m: "0px 0px",
                                        br: "5px",
                                        p: "4px 25px",
                                        fs: "14px",
                                        disabled: !0,
                                        onClick: () => eq(),
                                        children: "Stake",
                                      })
                                    : (0, a.jsx)(a.Fragment, {
                                        children: es
                                          ? (0, a.jsx)(w.Z, {
                                              c: "#fff",
                                              bgc: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                              hc: "#fff",
                                              m: "0px 0px",
                                              br: "5px",
                                              p: "4px 25px",
                                              fs: "14px",
                                              disabled: ez(z) < H,
                                              onClick: () => em(2),
                                              children: "Next",
                                            })
                                          : (0, a.jsx)(a.Fragment, {
                                              children:
                                                V >= H
                                                  ? (0, a.jsx)(w.Z, {
                                                      m: "10px 0",
                                                      onClick: () => em(2),
                                                      children: "Next",
                                                    })
                                                  : (0, a.jsx)(a.Fragment, {
                                                      children: eM
                                                        ? (0, a.jsx)(
                                                            a.Fragment,
                                                            {
                                                              children: Q
                                                                ? (0, a.jsx)(
                                                                    w.Z,
                                                                    {
                                                                      m: "0px 0px",
                                                                      br: "5px",
                                                                      p: "4px 25px",
                                                                      fs: "14px",
                                                                      c: "#fff",
                                                                      bgc: "linear-gradient(to right,#FF5D5D,#EA3737)",
                                                                      hbgc: "linear-gradient(to right,#FF5D5D,#EA3737)",
                                                                      hc: "#fff",
                                                                      disabled:
                                                                        !0 ===
                                                                          $ ||
                                                                        ez(z) <
                                                                          H,
                                                                      onClick:
                                                                        () => {
                                                                          eW();
                                                                        },
                                                                      children:
                                                                        "Approve and Stake",
                                                                    }
                                                                  )
                                                                : (0, a.jsx)(
                                                                    w.Z,
                                                                    {
                                                                      m: "0px 0px",
                                                                      br: "5px",
                                                                      p: "4px 25px",
                                                                      fs: "14px",
                                                                      c: "#fff",
                                                                      bgc: "linear-gradient(to right,#FF5D5D,#EA3737)",
                                                                      hbgc: "linear-gradient(to right,#FF5D5D,#EA3737)",
                                                                      hc: "#fff",
                                                                      disabled:
                                                                        !0 ===
                                                                          $ ||
                                                                        ez(z) <
                                                                          H,
                                                                      onClick:
                                                                        () => {
                                                                          eW();
                                                                        },
                                                                      children:
                                                                        "Stake",
                                                                    }
                                                                  ),
                                                            }
                                                          )
                                                        : (0, a.jsx)(C, {
                                                            isAgree: eM,
                                                            setIsAgree: eN,
                                                          }),
                                                    }),
                                            }),
                                      }),
                                  eC
                                    ? (0, a.jsx)(g.Z, {
                                        fontSize: "14px",
                                        color: "#ff3b3b",
                                        children: "You already own a node.",
                                      })
                                    : (0, a.jsx)(a.Fragment, {
                                        children:
                                          ez(z) < H &&
                                          (0, a.jsx)(g.Z, {
                                            fontSize: "14px",
                                            color: "#ff3b3b",
                                            children:
                                              "You don't have enough tokens to stake. 2,500,000 $XEON required to become node provider.",
                                          }),
                                      }),
                                ],
                              }),
                              (0, a.jsx)(p.Z, {
                                sx: {
                                  height: "5px",
                                  color: "#888789",
                                  width: "100%",
                                  borderColor: "whitesmoke",
                                  marginTop: "10px",
                                },
                              }),
                              (0, a.jsxs)(s.Z, {
                                padding: { xs: "15px 0px", lg: "10px 0px" },
                                sx: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                },
                                children: [
                                  (0, a.jsx)(_.Z, { children: "Step 2" }),
                                  (0, a.jsx)(g.Z, {
                                    variant: "body2",
                                    children:
                                      "Please choose the type of node you wish to purchase",
                                  }),
                                  (0, a.jsx)(s.Z, {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "start",
                                    alignItems: "start",
                                    gap: "5px",
                                    children: (0, a.jsxs)(h.dS, {
                                      children: [
                                        (0, a.jsxs)(s.Z, {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "10px",
                                          children: [
                                            (0, a.jsx)(g.Z, { children: "1." }),
                                            (0, a.jsx)(u.Z, {
                                              control: (0, a.jsx)(c.Z, {
                                                checked: 1 === ex,
                                                sx: { color: "#ffffff89" },
                                              }),
                                              label: "Managed Node",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)(g.Z, {
                                          variant: "body1",
                                          paddingBottom: "15px",
                                          children:
                                            "In a managed node setup, the Xeon AI takes care of all technical aspects, updates, and maintenance tasks.",
                                        }),
                                        (0, a.jsxs)(s.Z, {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "10px",
                                          children: [
                                            (0, a.jsx)(g.Z, { children: "2." }),
                                            (0, a.jsx)(y.Z, {
                                              title: "coming soon",
                                              placement: "right",
                                              children: (0, a.jsx)(u.Z, {
                                                sx: {
                                                  color: "#ffffff6a !important",
                                                },
                                                onClick: () => eY(1),
                                                control: (0, a.jsx)(c.Z, {
                                                  checked: 2 === ex,
                                                  sx: { color: "#ffffff6a" },
                                                }),
                                                label: "Unmanaged Node",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)(g.Z, {
                                          variant: "body1",
                                          children:
                                            "An unmanaged node requires users to handle all technical aspects, updates, and maintenance tasks themselves.",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)(w.Z, {
                                    c: "#fff",
                                    bgc: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                    hc: "#fff",
                                    m: "0px 0px",
                                    br: "5px",
                                    p: "5px 30px",
                                    disabled: !(ey > 1),
                                    onClick: () => eK(),
                                    children: "Next",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(p.Z, {
                                sx: {
                                  height: "5px",
                                  color: "#888789",
                                  width: "100%",
                                  borderColor: "whitesmoke",
                                },
                              }),
                              (0, a.jsxs)(s.Z, {
                                padding: { xs: "15px 0px", lg: "10px 0px" },
                                sx: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "5px",
                                },
                                children: [
                                  (0, a.jsx)(_.Z, { children: "Step 3" }),
                                  (0, a.jsx)(g.Z, {
                                    variant: "body2",
                                    children:
                                      "You need to pay a yearly fee of 0.3 ETH to purchase the node.",
                                  }),
                                  (0, a.jsx)(g.Z, {
                                    variant: "body1",
                                    children:
                                      "By clicking on 'Transfer' a unique wallet address will show up where you will have to deposit the amount. Once the amount has been sent, click on \"confirm\".",
                                  }),
                                  eT &&
                                    (0, a.jsxs)(g.Z, {
                                      variant: "body1",
                                      children: [
                                        null == eT ? void 0 : eT.address,
                                        (0, a.jsx)(d.Z, {
                                          sx: { color: "#fff" },
                                          onClick: () => eI(),
                                          children: eE
                                            ? (0, a.jsx)(j.Z, {})
                                            : (0, a.jsx)(v.Z, {}),
                                        }),
                                      ],
                                    }),
                                  eu > 0 &&
                                    (0, a.jsx)(g.Z, {
                                      fontSize: "14px",
                                      color: "#ff3b3b",
                                      children:
                                        "Your payment appears to not have been received yet. If this is an error, contact us at info@shadownode.org.",
                                    }),
                                  eT
                                    ? (0, a.jsx)(w.Z, {
                                        c: "#fff",
                                        bgc: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                        hc: "#fff",
                                        m: "0px 0px",
                                        br: "5px",
                                        p: "5px 30px",
                                        onClick: () => eZ(!ek),
                                        children:
                                          eu > 0 ? "Try Again" : "Confirm",
                                      })
                                    : (0, a.jsx)(w.Z, {
                                        disabled: !(ey > 2),
                                        c: "#fff",
                                        bgc: "linear-gradient(110deg,#663CED 30%,#FFA5FD)",
                                        hc: "#fff",
                                        m: "0px 0px",
                                        br: "5px",
                                        p: "5px 30px",
                                        onClick: () => eV(),
                                        children: "Transfer",
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
              }),
            })
          );
        };
    },
    87717: function () {},
  },
]);
