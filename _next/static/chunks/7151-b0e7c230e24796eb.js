"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7151],
  {
    75850: function (n, t, e) {
      var o = e(82729);
      e(85893), e(67294);
      var r = e(45697),
        i = e.n(r),
        u = (e(30082), e(55764)),
        a = e(16829);
      function c() {
        let n = (0, o._)([
          "\nwidth: 50%;\nbackground-color: #b9b9b9;\ncolor:#000 !important;\n  color: rgba(255, 255, 255, 0.5);\n  & .Mui-selected {\n    color: #000 !important;\n  }\n  & .Mui-focusVisible {\n    background-color: #fff;\n  }\n  @media (max-width: 599px) {\n    font-size: 14px;\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        let n = (0, o._)([
          "\n  /* width: 100%;\n  height: auto;\n  display: block; */\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        let n = (0, o._)([
          "\n  width: 100%;\n  padding: 7px 10px;\n  font-size: 16px;\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  font-family: PoppinsR;\n  :focus {\n    outline: none;\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      e(73360),
        e(95162),
        e(82032),
        e(36811),
        e(64072),
        (0, a.default)(u.Z)(c()),
        a.default.img(d()),
        a.default.input(l()),
        i().node,
        i().number.isRequired,
        i().number.isRequired;
    },
    64893: function (n, t, e) {
      var o = e(85893),
        r = e(95162),
        i = e(66403),
        u = e(35194),
        a = e(69077);
      let c = e(35936).a,
        d = [i.R, u.F],
        l = (0, r.o1)({
          chains: d,
          projectId: c,
          metadata: {
            name: "Web3Modal",
            description: "Web3Modal Example",
            url: "https://web3modal.com",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
        });
      (0, r.OY)({ wagmiConfig: l, projectId: c, chains: d }),
        (t.Z = (n) => {
          let { children: t } = n;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(a.eM, { config: l, children: t }),
          });
        });
    },
  },
]);
