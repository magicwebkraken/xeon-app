"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7185],
  {
    69062: function (t, e, r) {
      var n = r(64836);
      e.Z = void 0;
      var i = n(r(53564)),
        s = r(85893);
      e.Z = (0, i.default)(
        (0, s.jsx)("path", {
          d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z",
        }),
        "FileCopy"
      );
    },
    49872: function (t, e, r) {
      var n = r(64836);
      e.Z = void 0;
      var i = n(r(53564)),
        s = r(85893);
      e.Z = (0, i.default)(
        (0, s.jsx)("path", {
          d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zM13 9V3.5L18.5 9z",
        }),
        "Task"
      );
    },
    5556: function (t, e, r) {
      r.d(e, {
        K: function () {
          return f;
        },
        v: function () {
          return d;
        },
      });
      var n = r(92314),
        i = r(455),
        s = r(36024);
      let a = BigInt(0),
        o = BigInt(36);
      function l(t) {
        let e = (t = t.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
        let s = (0, i.Pw)((0, n.w)(r));
        for (let t = 0; t < 40; t += 2)
          s[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
            (15 & s[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
        return "0x" + e.join("");
      }
      let u = {};
      for (let t = 0; t < 10; t++) u[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        u[String.fromCharCode(65 + t)] = String(10 + t);
      function h(t) {
        let e = (t =
          (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
          .split("")
          .map((t) => u[t])
          .join("");
        for (; e.length >= 15; ) {
          let t = e.substring(0, 15);
          e = (parseInt(t, 10) % 97) + e.substring(t.length);
        }
        let r = String(98 - (parseInt(e, 10) % 97));
        for (; r.length < 2; ) r = "0" + r;
        return r;
      }
      let c = (function () {
        let t = {};
        for (let e = 0; e < 36; e++)
          t["0123456789abcdefghijklmnopqrstuvwxyz"[e]] = BigInt(e);
        return t;
      })();
      function f(t) {
        if (
          ((0, s.en)("string" == typeof t, "invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        ) {
          t.startsWith("0x") || (t = "0x" + t);
          let e = l(t);
          return (
            (0, s.en)(
              !t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t,
              "bad address checksum",
              "address",
              t
            ),
            e
          );
        }
        if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (0, s.en)(
            t.substring(2, 4) === h(t),
            "bad icap checksum",
            "address",
            t
          );
          let e = (function (t) {
            t = t.toLowerCase();
            let e = a;
            for (let r = 0; r < t.length; r++) e = e * o + c[t[r]];
            return e;
          })(t.substring(4)).toString(16);
          for (; e.length < 40; ) e = "0" + e;
          return l("0x" + e);
        }
        (0, s.en)(!1, "invalid address", "address", t);
      }
      function d(t) {
        let e = BigInt(f(t)).toString(36).toUpperCase();
        for (; e.length < 30; ) e = "0" + e;
        return "XE" + h("XE00" + e) + e;
      }
    },
    79554: function (t, e, r) {
      r.d(e, {
        RC: function () {
          return s;
        },
        UJ: function () {
          return a;
        },
        ru: function () {
          return l;
        },
      });
      var n = r(36024),
        i = r(5556);
      function s(t) {
        return t && "function" == typeof t.getAddress;
      }
      function a(t) {
        try {
          return (0, i.K)(t), !0;
        } catch (t) {}
        return !1;
      }
      async function o(t, e) {
        let r = await e;
        return (
          (null == r || "0x0000000000000000000000000000000000000000" === r) &&
            ((0, n.hu)(
              "string" != typeof t,
              "unconfigured name",
              "UNCONFIGURED_NAME",
              { value: t }
            ),
            (0, n.en)(
              !1,
              "invalid AddressLike value; did not resolve to a value address",
              "target",
              t
            )),
          (0, i.K)(r)
        );
      }
      function l(t, e) {
        return "string" == typeof t
          ? t.match(/^0x[0-9a-f]{40}$/i)
            ? (0, i.K)(t)
            : ((0, n.hu)(
                null != e,
                "ENS resolution requires a provider",
                "UNSUPPORTED_OPERATION",
                { operation: "resolveName" }
              ),
              o(t, e.resolveName(t)))
          : s(t)
          ? o(t, t.getAddress())
          : t && "function" == typeof t.then
          ? o(t, t)
          : void (0, n.en)(!1, "unsupported addressable value", "target", t);
      }
    },
    11126: function (t, e, r) {
      r.d(e, {
        N: function () {
          return n;
        },
      });
      let n = "0x0000000000000000000000000000000000000000";
    },
    29369: function (t, e, r) {
      r.d(e, {
        M: function () {
          return n;
        },
      });
      let n =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    9053: function (t, e, r) {
      r.d(e, {
        c: function () {
          return i;
        },
        v: function () {
          return n;
        },
      });
      let n = "Ξ",
        i = "\x19Ethereum Signed Message:\n";
    },
    28283: function (t, e, r) {
      r.d(e, {
        js: function () {
          return b;
        },
        zH: function () {
          return w;
        },
        Sf: function () {
          return v;
        },
        O6: function () {
          return P;
        },
      });
      var n = r(55301),
        i = r(7147),
        s = r(98610),
        a = r(52625),
        o = r(79903),
        l = r(43775);
      let [u, h] = o.ZP.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        c = new Uint32Array(80),
        f = new Uint32Array(80);
      class d extends a.N {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: a,
            Dl: o,
            Eh: l,
            El: u,
            Fh: h,
            Fl: c,
            Gh: f,
            Gl: d,
            Hh: p,
            Hl: g,
          } = this;
          return [t, e, r, n, i, s, a, o, l, u, h, c, f, d, p, g];
        }
        set(t, e, r, n, i, s, a, o, l, u, h, c, f, d, p, g) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | a),
            (this.Dl = 0 | o),
            (this.Eh = 0 | l),
            (this.El = 0 | u),
            (this.Fh = 0 | h),
            (this.Fl = 0 | c),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4)
            (c[r] = t.getUint32(e)), (f[r] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | c[t - 15],
              r = 0 | f[t - 15],
              n =
                o.ZP.rotrSH(e, r, 1) ^
                o.ZP.rotrSH(e, r, 8) ^
                o.ZP.shrSH(e, r, 7),
              i =
                o.ZP.rotrSL(e, r, 1) ^
                o.ZP.rotrSL(e, r, 8) ^
                o.ZP.shrSL(e, r, 7),
              s = 0 | c[t - 2],
              a = 0 | f[t - 2],
              l =
                o.ZP.rotrSH(s, a, 19) ^
                o.ZP.rotrBH(s, a, 61) ^
                o.ZP.shrSH(s, a, 6),
              u =
                o.ZP.rotrSL(s, a, 19) ^
                o.ZP.rotrBL(s, a, 61) ^
                o.ZP.shrSL(s, a, 6),
              h = o.ZP.add4L(i, u, f[t - 7], f[t - 16]),
              d = o.ZP.add4H(h, n, l, c[t - 7], c[t - 16]);
            (c[t] = 0 | d), (f[t] = 0 | h);
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: s,
            Ch: a,
            Cl: l,
            Dh: d,
            Dl: p,
            Eh: g,
            El: y,
            Fh: m,
            Fl: b,
            Gh: w,
            Gl: v,
            Hh: P,
            Hl: E,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e =
                o.ZP.rotrSH(g, y, 14) ^
                o.ZP.rotrSH(g, y, 18) ^
                o.ZP.rotrBH(g, y, 41),
              x =
                o.ZP.rotrSL(g, y, 14) ^
                o.ZP.rotrSL(g, y, 18) ^
                o.ZP.rotrBL(g, y, 41),
              A = (g & m) ^ (~g & w),
              I = (y & b) ^ (~y & v),
              N = o.ZP.add5L(E, x, I, h[t], f[t]),
              O = o.ZP.add5H(N, P, e, A, u[t], c[t]),
              R = 0 | N,
              T =
                o.ZP.rotrSH(r, n, 28) ^
                o.ZP.rotrBH(r, n, 34) ^
                o.ZP.rotrBH(r, n, 39),
              S =
                o.ZP.rotrSL(r, n, 28) ^
                o.ZP.rotrBL(r, n, 34) ^
                o.ZP.rotrBL(r, n, 39),
              k = (r & i) ^ (r & a) ^ (i & a),
              B = (n & s) ^ (n & l) ^ (s & l);
            (P = 0 | w),
              (E = 0 | v),
              (w = 0 | m),
              (v = 0 | b),
              (m = 0 | g),
              (b = 0 | y),
              ({ h: g, l: y } = o.ZP.add(0 | d, 0 | p, 0 | O, 0 | R)),
              (d = 0 | a),
              (p = 0 | l),
              (a = 0 | i),
              (l = 0 | s),
              (i = 0 | r),
              (s = 0 | n);
            let U = o.ZP.add3L(R, S, B);
            (r = o.ZP.add3H(U, O, T, k)), (n = 0 | U);
          }
          ({ h: r, l: n } = o.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: s } = o.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)),
            ({ h: a, l: l } = o.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | l)),
            ({ h: d, l: p } = o.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: g, l: y } = o.ZP.add(0 | this.Eh, 0 | this.El, 0 | g, 0 | y)),
            ({ h: m, l: b } = o.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | m, 0 | b)),
            ({ h: w, l: v } = o.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | w, 0 | v)),
            ({ h: P, l: E } = o.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | P, 0 | E)),
            this.set(r, n, i, s, a, l, d, p, g, y, m, b, w, v, P, E);
        }
        roundClean() {
          c.fill(0), f.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let p = (0, l.hE)(() => new d());
      var g = r(36024);
      let y = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if ("undefined" != typeof global) return global;
          throw Error("unable to locate global object");
        })(),
        m = y.crypto || y.msCrypto;
      function b(t) {
        switch (t) {
          case "sha256":
            return s.J.create();
          case "sha512":
            return p.create();
        }
        (0, g.en)(!1, "invalid hashing algorithm name", "algorithm", t);
      }
      function w(t, e) {
        let r = { sha256: s.J, sha512: p }[t];
        return (
          (0, g.en)(null != r, "invalid hmac algorithm", "algorithm", t),
          n.b.create(r, e)
        );
      }
      function v(t, e, r, n, a) {
        let o = { sha256: s.J, sha512: p }[a];
        return (
          (0, g.en)(null != o, "invalid pbkdf2 algorithm", "algorithm", a),
          (0, i.n)(o, t, e, { c: r, dkLen: n })
        );
      }
      function P(t) {
        (0, g.hu)(
          null != m,
          "platform does not support secure random numbers",
          "UNSUPPORTED_OPERATION",
          { operation: "randomBytes" }
        ),
          (0, g.en)(
            Number.isInteger(t) && t > 0 && t <= 1024,
            "invalid length",
            "length",
            t
          );
        let e = new Uint8Array(t);
        return m.getRandomValues(e), e;
      }
    },
    62102: function (t, e, r) {
      r.d(e, {
        G: function () {
          return l;
        },
      });
      var n = r(28283),
        i = r(455);
      let s = !1,
        a = function (t, e, r) {
          return (0, n.zH)(t, e).update(r).digest();
        },
        o = a;
      function l(t, e, r) {
        let n = (0, i.Pw)(e, "key"),
          s = (0, i.Pw)(r, "data");
        return (0, i.Dv)(o(t, n, s));
      }
      (l._ = a),
        (l.lock = function () {
          s = !0;
        }),
        (l.register = function (t) {
          if (s) throw Error("computeHmac is locked");
          o = t;
        }),
        Object.freeze(l);
    },
    92314: function (t, e, r) {
      r.d(e, {
        w: function () {
          return I;
        },
      });
      var n = r(26678),
        i = r(79903),
        s = r(43775);
      let [a, o, l] = [[], [], []],
        u = BigInt(0),
        h = BigInt(1),
        c = BigInt(2),
        f = BigInt(7),
        d = BigInt(256),
        p = BigInt(113);
      for (let t = 0, e = h, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          a.push(2 * (5 * n + r)),
          o.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = u;
        for (let t = 0; t < 7; t++)
          (e = ((e << h) ^ ((e >> f) * p)) % d) & c &&
            (i ^= h << ((h << BigInt(t)) - h));
        l.push(i);
      }
      let [g, y] = (0, i.Vl)(l, !0),
        m = (t, e, r) => (r > 32 ? (0, i.SD)(t, e, r) : (0, i.EP)(t, e, r)),
        b = (t, e, r) => (r > 32 ? (0, i.mk)(t, e, r) : (0, i.gm)(t, e, r));
      class w extends s.kb {
        constructor(t, e, r, i = !1, a = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = a),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.Rx)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, s.Jq)(this.state));
        }
        keccak() {
          !(function (t, e = 24) {
            let r = new Uint32Array(10);
            for (let n = 24 - e; n < 24; n++) {
              for (let e = 0; e < 10; e++)
                r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
              for (let e = 0; e < 10; e += 2) {
                let n = (e + 8) % 10,
                  i = (e + 2) % 10,
                  s = r[i],
                  a = r[i + 1],
                  o = m(s, a, 1) ^ r[n],
                  l = b(s, a, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10)
                  (t[e + r] ^= o), (t[e + r + 1] ^= l);
              }
              let e = t[2],
                i = t[3];
              for (let r = 0; r < 24; r++) {
                let n = o[r],
                  s = m(e, i, n),
                  l = b(e, i, n),
                  u = a[r];
                (e = t[u]), (i = t[u + 1]), (t[u] = s), (t[u + 1] = l);
              }
              for (let e = 0; e < 50; e += 10) {
                for (let n = 0; n < 10; n++) r[n] = t[e + n];
                for (let n = 0; n < 10; n++)
                  t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (t[0] ^= g[n]), (t[1] ^= y[n]);
            }
            r.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, n.Gg)(this);
          let { blockLen: e, state: r } = this,
            i = (t = (0, s.O0)(t)).length;
          for (let n = 0; n < i; ) {
            let s = Math.min(e - this.pos, i - n);
            for (let e = 0; e < s; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.Gg)(this, !1), (0, n.aI)(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + s), n),
              (this.posOut += s),
              (n += s);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.Rx)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.J8)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            t || (t = new w(e, r, n, s, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = s),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let v = (0, s.hE)(() => new w(136, 1, 32));
      var P = r(455);
      let E = !1,
        x = function (t) {
          return v(t);
        },
        A = x;
      function I(t) {
        let e = (0, P.Pw)(t, "data");
        return (0, P.Dv)(A(e));
      }
      (I._ = x),
        (I.lock = function () {
          E = !0;
        }),
        (I.register = function (t) {
          if (E) throw TypeError("keccak256 is locked");
          A = t;
        }),
        Object.freeze(I);
    },
    94969: function (t, e, r) {
      r.d(e, {
        n: function () {
          return l;
        },
      });
      var n = r(28283),
        i = r(455);
      let s = !1,
        a = function (t, e, r, i, s) {
          return (0, n.Sf)(t, e, r, i, s);
        },
        o = a;
      function l(t, e, r, n, s) {
        let a = (0, i.Pw)(t, "password"),
          l = (0, i.Pw)(e, "salt");
        return (0, i.Dv)(o(a, l, r, n, s));
      }
      (l._ = a),
        (l.lock = function () {
          s = !0;
        }),
        (l.register = function (t) {
          if (s) throw Error("pbkdf2 is locked");
          o = t;
        }),
        Object.freeze(l);
    },
    44096: function (t, e, r) {
      r.d(e, {
        O: function () {
          return o;
        },
      });
      var n = r(28283);
      let i = !1,
        s = function (t) {
          return new Uint8Array((0, n.O6)(t));
        },
        a = s;
      function o(t) {
        return a(t);
      }
      (o._ = s),
        (o.lock = function () {
          i = !0;
        }),
        (o.register = function (t) {
          if (i) throw Error("randomBytes is locked");
          a = t;
        }),
        Object.freeze(o);
    },
    57462: function (t, e, r) {
      r.d(e, {
        b: function () {
          return A;
        },
      });
      var n = r(52625),
        i = r(43775);
      let s = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        a = Uint8Array.from({ length: 16 }, (t, e) => e),
        o = a.map((t) => (9 * t + 5) % 16),
        l = [a],
        u = [o];
      for (let t = 0; t < 4; t++)
        for (let e of [l, u]) e.push(e[t].map((t) => s[t]));
      let h = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((t) => new Uint8Array(t)),
        c = l.map((t, e) => t.map((t) => h[e][t])),
        f = u.map((t, e) => t.map((t) => h[e][t])),
        d = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        p = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        g = (t, e) => (t << e) | (t >>> (32 - e));
      function y(t, e, r, n) {
        return 0 === t
          ? e ^ r ^ n
          : 1 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e | ~r) ^ n
          : 3 === t
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n);
      }
      let m = new Uint32Array(16);
      class b extends n.N {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          let { h0: t, h1: e, h2: r, h3: n, h4: i } = this;
          return [t, e, r, n, i];
        }
        set(t, e, r, n, i) {
          (this.h0 = 0 | t),
            (this.h1 = 0 | e),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | i);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) m[r] = t.getUint32(e, !0);
          let r = 0 | this.h0,
            n = r,
            i = 0 | this.h1,
            s = i,
            a = 0 | this.h2,
            o = a,
            h = 0 | this.h3,
            b = h,
            w = 0 | this.h4,
            v = w;
          for (let t = 0; t < 5; t++) {
            let e = 4 - t,
              P = d[t],
              E = p[t],
              x = l[t],
              A = u[t],
              I = c[t],
              N = f[t];
            for (let e = 0; e < 16; e++) {
              let n = (g(r + y(t, i, a, h) + m[x[e]] + P, I[e]) + w) | 0;
              (r = w), (w = h), (h = 0 | g(a, 10)), (a = i), (i = n);
            }
            for (let t = 0; t < 16; t++) {
              let r = (g(n + y(e, s, o, b) + m[A[t]] + E, N[t]) + v) | 0;
              (n = v), (v = b), (b = 0 | g(o, 10)), (o = s), (s = r);
            }
          }
          this.set(
            (this.h1 + a + b) | 0,
            (this.h2 + h + v) | 0,
            (this.h3 + w + n) | 0,
            (this.h4 + r + s) | 0,
            (this.h0 + i + o) | 0
          );
        }
        roundClean() {
          m.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      let w = (0, i.hE)(() => new b());
      var v = r(455);
      let P = !1,
        E = function (t) {
          return w(t);
        },
        x = E;
      function A(t) {
        let e = (0, v.Pw)(t, "data");
        return (0, v.Dv)(x(e));
      }
      (A._ = E),
        (A.lock = function () {
          P = !0;
        }),
        (A.register = function (t) {
          if (P) throw TypeError("ripemd160 is locked");
          x = t;
        }),
        Object.freeze(A);
    },
    96126: function (t, e, r) {
      r.d(e, {
        f: function () {
          return v;
        },
        g: function () {
          return P;
        },
      });
      var n = r(26678),
        i = r(98610),
        s = r(7147),
        a = r(43775);
      let o = (t, e) => (t << e) | (t >>> (32 - e));
      function l(t, e, r, n, i, s) {
        let a = t[e++] ^ r[n++],
          l = t[e++] ^ r[n++],
          u = t[e++] ^ r[n++],
          h = t[e++] ^ r[n++],
          c = t[e++] ^ r[n++],
          f = t[e++] ^ r[n++],
          d = t[e++] ^ r[n++],
          p = t[e++] ^ r[n++],
          g = t[e++] ^ r[n++],
          y = t[e++] ^ r[n++],
          m = t[e++] ^ r[n++],
          b = t[e++] ^ r[n++],
          w = t[e++] ^ r[n++],
          v = t[e++] ^ r[n++],
          P = t[e++] ^ r[n++],
          E = t[e++] ^ r[n++],
          x = a,
          A = l,
          I = u,
          N = h,
          O = c,
          R = f,
          T = d,
          S = p,
          k = g,
          B = y,
          U = m,
          L = b,
          C = w,
          D = v,
          G = P,
          F = E;
        for (let t = 0; t < 8; t += 2)
          (O ^= o((x + C) | 0, 7)),
            (k ^= o((O + x) | 0, 9)),
            (C ^= o((k + O) | 0, 13)),
            (x ^= o((C + k) | 0, 18)),
            (B ^= o((R + A) | 0, 7)),
            (D ^= o((B + R) | 0, 9)),
            (A ^= o((D + B) | 0, 13)),
            (R ^= o((A + D) | 0, 18)),
            (G ^= o((U + T) | 0, 7)),
            (I ^= o((G + U) | 0, 9)),
            (T ^= o((I + G) | 0, 13)),
            (U ^= o((T + I) | 0, 18)),
            (N ^= o((F + L) | 0, 7)),
            (S ^= o((N + F) | 0, 9)),
            (L ^= o((S + N) | 0, 13)),
            (F ^= o((L + S) | 0, 18)),
            (A ^= o((x + N) | 0, 7)),
            (I ^= o((A + x) | 0, 9)),
            (N ^= o((I + A) | 0, 13)),
            (x ^= o((N + I) | 0, 18)),
            (T ^= o((R + O) | 0, 7)),
            (S ^= o((T + R) | 0, 9)),
            (O ^= o((S + T) | 0, 13)),
            (R ^= o((O + S) | 0, 18)),
            (L ^= o((U + B) | 0, 7)),
            (k ^= o((L + U) | 0, 9)),
            (B ^= o((k + L) | 0, 13)),
            (U ^= o((B + k) | 0, 18)),
            (C ^= o((F + G) | 0, 7)),
            (D ^= o((C + F) | 0, 9)),
            (G ^= o((D + C) | 0, 13)),
            (F ^= o((G + D) | 0, 18));
        (i[s++] = (a + x) | 0),
          (i[s++] = (l + A) | 0),
          (i[s++] = (u + I) | 0),
          (i[s++] = (h + N) | 0),
          (i[s++] = (c + O) | 0),
          (i[s++] = (f + R) | 0),
          (i[s++] = (d + T) | 0),
          (i[s++] = (p + S) | 0),
          (i[s++] = (g + k) | 0),
          (i[s++] = (y + B) | 0),
          (i[s++] = (m + U) | 0),
          (i[s++] = (b + L) | 0),
          (i[s++] = (w + C) | 0),
          (i[s++] = (v + D) | 0),
          (i[s++] = (P + G) | 0),
          (i[s++] = (E + F) | 0);
      }
      function u(t, e, r, n, i) {
        let s = n + 0,
          a = n + 16 * i;
        for (let n = 0; n < 16; n++) r[a + n] = t[e + (2 * i - 1) * 16 + n];
        for (let n = 0; n < i; n++, s += 16, e += 16)
          l(r, a, t, e, r, s), n > 0 && (a += 16), l(r, s, t, (e += 16), r, a);
      }
      function h(t, e, r) {
        let {
          N: o,
          r: l,
          p: u,
          dkLen: h,
          asyncTick: c,
          maxmem: f,
          onProgress: d,
        } = (0, a.U5)({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, r);
        if (
          ((0, n.Rx)(o),
          (0, n.Rx)(l),
          (0, n.Rx)(u),
          (0, n.Rx)(h),
          (0, n.Rx)(c),
          (0, n.Rx)(f),
          void 0 !== d && "function" != typeof d)
        )
          throw Error("progressCb should be function");
        let p = 128 * l,
          g = p / 4;
        if (o <= 1 || (o & (o - 1)) != 0 || o >= 2 ** (p / 8) || o > 4294967296)
          throw Error(
            "Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32"
          );
        if (u < 0 || u > ((4294967296 - 1) * 32) / p)
          throw Error(
            "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)"
          );
        if (h < 0 || h > (4294967296 - 1) * 32)
          throw Error(
            "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32"
          );
        let y = p * (o + u);
        if (y > f)
          throw Error(
            `Scrypt: parameters too large, ${y} (128 * r * (N + p)) > ${f} (maxmem)`
          );
        let m = (0, s.n)(i.J, t, e, { c: 1, dkLen: p * u }),
          b = (0, a.Jq)(m),
          w = (0, a.Jq)(new Uint8Array(p * o)),
          v = (0, a.Jq)(new Uint8Array(p)),
          P = () => {};
        if (d) {
          let t = 2 * o * u,
            e = Math.max(Math.floor(t / 1e4), 1),
            r = 0;
          P = () => {
            r++, d && (!(r % e) || r === t) && d(r / t);
          };
        }
        return {
          N: o,
          r: l,
          p: u,
          dkLen: h,
          blockSize32: g,
          V: w,
          B32: b,
          B: m,
          tmp: v,
          blockMixCb: P,
          asyncTick: c,
        };
      }
      function c(t, e, r, n, a) {
        let o = (0, s.n)(i.J, t, r, { c: 1, dkLen: e });
        return r.fill(0), n.fill(0), a.fill(0), o;
      }
      async function f(t, e, r) {
        let {
          N: n,
          r: i,
          p: s,
          dkLen: o,
          blockSize32: l,
          V: f,
          B32: d,
          B: p,
          tmp: g,
          blockMixCb: y,
          asyncTick: m,
        } = h(t, e, r);
        for (let t = 0; t < s; t++) {
          let e = l * t;
          for (let t = 0; t < l; t++) f[t] = d[e + t];
          let r = 0;
          await (0, a.oY)(n - 1, m, () => {
            u(f, r, f, (r += l), i), y();
          }),
            u(f, (n - 1) * l, d, e, i),
            y(),
            await (0, a.oY)(n, m, () => {
              let t = d[e + l - 16] % n;
              for (let r = 0; r < l; r++) g[r] = d[e + r] ^ f[t * l + r];
              u(g, 0, d, e, i), y();
            });
        }
        return c(t, o, p, f, g);
      }
      var d = r(455);
      let p = !1,
        g = !1,
        y = async function (t, e, r, n, i, s, a) {
          return await f(t, e, { N: r, r: n, p: i, dkLen: s, onProgress: a });
        },
        m = function (t, e, r, n, i, s) {
          return (function (t, e, r) {
            let {
              N: n,
              r: i,
              p: s,
              dkLen: a,
              blockSize32: o,
              V: l,
              B32: f,
              B: d,
              tmp: p,
              blockMixCb: g,
            } = h(t, e, r);
            for (let t = 0; t < s; t++) {
              let e = o * t;
              for (let t = 0; t < o; t++) l[t] = f[e + t];
              for (let t = 0, e = 0; t < n - 1; t++)
                u(l, e, l, (e += o), i), g();
              u(l, (n - 1) * o, f, e, i), g();
              for (let t = 0; t < n; t++) {
                let t = f[e + o - 16] % n;
                for (let r = 0; r < o; r++) p[r] = f[e + r] ^ l[t * o + r];
                u(p, 0, f, e, i), g();
              }
            }
            return c(t, a, d, l, p);
          })(t, e, { N: r, r: n, p: i, dkLen: s });
        },
        b = y,
        w = m;
      async function v(t, e, r, n, i, s, a) {
        let o = (0, d.Pw)(t, "passwd"),
          l = (0, d.Pw)(e, "salt");
        return (0, d.Dv)(await b(o, l, r, n, i, s, a));
      }
      function P(t, e, r, n, i, s) {
        let a = (0, d.Pw)(t, "passwd"),
          o = (0, d.Pw)(e, "salt");
        return (0, d.Dv)(w(a, o, r, n, i, s));
      }
      (v._ = y),
        (v.lock = function () {
          g = !0;
        }),
        (v.register = function (t) {
          if (g) throw Error("scrypt is locked");
          b = t;
        }),
        Object.freeze(v),
        (P._ = m),
        (P.lock = function () {
          p = !0;
        }),
        (P.register = function (t) {
          if (p) throw Error("scryptSync is locked");
          w = t;
        }),
        Object.freeze(P);
    },
    82258: function (t, e, r) {
      r.d(e, {
        J: function () {
          return c;
        },
        o: function () {
          return f;
        },
      });
      var n = r(28283),
        i = r(455);
      let s = function (t) {
          return (0, n.js)("sha256").update(t).digest();
        },
        a = function (t) {
          return (0, n.js)("sha512").update(t).digest();
        },
        o = s,
        l = a,
        u = !1,
        h = !1;
      function c(t) {
        let e = (0, i.Pw)(t, "data");
        return (0, i.Dv)(o(e));
      }
      function f(t) {
        let e = (0, i.Pw)(t, "data");
        return (0, i.Dv)(l(e));
      }
      (c._ = s),
        (c.lock = function () {
          u = !0;
        }),
        (c.register = function (t) {
          if (u) throw Error("sha256 is locked");
          o = t;
        }),
        Object.freeze(c),
        (f._ = a),
        (f.lock = function () {
          h = !0;
        }),
        (f.register = function (t) {
          if (h) throw Error("sha512 is locked");
          l = t;
        }),
        Object.freeze(c);
    },
    26183: function (t, e, r) {
      r.d(e, {
        P: function () {
          return g;
        },
      });
      var n = r(29369),
        i = r(455),
        s = r(12229),
        a = r(36024);
      let o = BigInt(0),
        l = BigInt(1),
        u = BigInt(2),
        h = BigInt(27),
        c = BigInt(28),
        f = BigInt(35),
        d = {};
      function p(t) {
        return (0, i.U3)((0, s.ot)(t), 32);
      }
      class g {
        #t;
        #e;
        #r;
        #n;
        get r() {
          return this.#t;
        }
        set r(t) {
          (0, a.en)(32 === (0, i.M5)(t), "invalid r", "value", t),
            (this.#t = (0, i.Dv)(t));
        }
        get s() {
          return this.#e;
        }
        set s(t) {
          (0, a.en)(32 === (0, i.M5)(t), "invalid s", "value", t);
          let e = (0, i.Dv)(t);
          (0, a.en)(
            8 > parseInt(e.substring(0, 3)),
            "non-canonical s",
            "value",
            e
          ),
            (this.#e = e);
        }
        get v() {
          return this.#r;
        }
        set v(t) {
          let e = (0, s.Dx)(t, "value");
          (0, a.en)(27 === e || 28 === e, "invalid v", "v", t), (this.#r = e);
        }
        get networkV() {
          return this.#n;
        }
        get legacyChainId() {
          let t = this.networkV;
          return null == t ? null : g.getChainId(t);
        }
        get yParity() {
          return 27 === this.v ? 0 : 1;
        }
        get yParityAndS() {
          let t = (0, i.Pw)(this.s);
          return this.yParity && (t[0] |= 128), (0, i.Dv)(t);
        }
        get compactSerialized() {
          return (0, i.zo)([this.r, this.yParityAndS]);
        }
        get serialized() {
          return (0, i.zo)([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
        }
        constructor(t, e, r, n) {
          (0, a.NK)(t, d, "Signature"),
            (this.#t = e),
            (this.#e = r),
            (this.#r = n),
            (this.#n = null);
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
        }
        clone() {
          let t = new g(d, this.r, this.s, this.v);
          return this.networkV && (t.#n = this.networkV), t;
        }
        toJSON() {
          let t = this.networkV;
          return {
            _type: "signature",
            networkV: null != t ? t.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v,
          };
        }
        static getChainId(t) {
          let e = (0, s.yT)(t, "v");
          return e == h || e == c
            ? o
            : ((0, a.en)(e >= f, "invalid EIP-155 v", "v", t), (e - f) / u);
        }
        static getChainIdV(t, e) {
          return (0, s.yT)(t) * u + BigInt(35 + e - 27);
        }
        static getNormalizedV(t) {
          let e = (0, s.yT)(t);
          return e === o || e === h
            ? 27
            : e === l || e === c
            ? 28
            : ((0, a.en)(e >= f, "invalid v", "v", t), e & l ? 27 : 28);
        }
        static from(t) {
          function e(e, r) {
            (0, a.en)(e, r, "signature", t);
          }
          if (null == t) return new g(d, n.M, n.M, 27);
          if ("string" == typeof t) {
            let r = (0, i.Pw)(t, "signature");
            if (64 === r.length) {
              let t = (0, i.Dv)(r.slice(0, 32)),
                e = r.slice(32, 64),
                n = 128 & e[0] ? 28 : 27;
              return (e[0] &= 127), new g(d, t, (0, i.Dv)(e), n);
            }
            if (65 === r.length) {
              let t = (0, i.Dv)(r.slice(0, 32)),
                n = r.slice(32, 64);
              e((128 & n[0]) == 0, "non-canonical s");
              let s = g.getNormalizedV(r[64]);
              return new g(d, t, (0, i.Dv)(n), s);
            }
            e(!1, "invalid raw signature length");
          }
          if (t instanceof g) return t.clone();
          let r = t.r;
          e(null != r, "missing r");
          let o = p(r),
            l = (function (t, r) {
              if (null != t) return p(t);
              if (null != r) {
                e((0, i.A7)(r, 32), "invalid yParityAndS");
                let t = (0, i.Pw)(r);
                return (t[0] &= 127), (0, i.Dv)(t);
              }
              e(!1, "missing s");
            })(t.s, t.yParityAndS);
          e((128 & (0, i.Pw)(l)[0]) == 0, "non-canonical s");
          let { networkV: u, v: h } = (function (t, r, n) {
              if (null != t) {
                let e = (0, s.yT)(t);
                return {
                  networkV: e >= f ? e : void 0,
                  v: g.getNormalizedV(e),
                };
              }
              if (null != r)
                return (
                  e((0, i.A7)(r, 32), "invalid yParityAndS"),
                  { v: 128 & (0, i.Pw)(r)[0] ? 28 : 27 }
                );
              if (null != n) {
                switch ((0, s.Dx)(n, "sig.yParity")) {
                  case 0:
                    return { v: 27 };
                  case 1:
                    return { v: 28 };
                }
                e(!1, "invalid yParity");
              }
              e(!1, "missing v");
            })(t.v, t.yParityAndS, t.yParity),
            c = new g(d, o, l, h);
          return (
            u && (c.#n = u),
            e(
              null == t.yParity ||
                (0, s.Dx)(t.yParity, "sig.yParity") === c.yParity,
              "yParity mismatch"
            ),
            e(
              null == t.yParityAndS || t.yParityAndS === c.yParityAndS,
              "yParityAndS mismatch"
            ),
            c
          );
        }
      }
    },
    90481: function (t, e, r) {
      r.d(e, {
        E: function () {
          return ta;
        },
      });
      var n = {};
      r.r(n),
        r.d(n, {
          dQ: function () {
            return b;
          },
          ci: function () {
            return u;
          },
          bytesToNumberBE: function () {
            return f;
          },
          ty: function () {
            return d;
          },
          eV: function () {
            return m;
          },
          n$: function () {
            return P;
          },
          ql: function () {
            return y;
          },
          hexToBytes: function () {
            return c;
          },
          tL: function () {
            return p;
          },
          S5: function () {
            return g;
          },
          FF: function () {
            return x;
          },
        });
      var i = r(98610);
      BigInt(0);
      let s = BigInt(1),
        a = BigInt(2),
        o = (t) => t instanceof Uint8Array,
        l = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, "0")
        );
      function u(t) {
        if (!o(t)) throw Error("Uint8Array expected");
        let e = "";
        for (let r = 0; r < t.length; r++) e += l[t[r]];
        return e;
      }
      function h(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return BigInt("" === t ? "0" : `0x${t}`);
      }
      function c(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let r = new Uint8Array(e / 2);
        for (let e = 0; e < r.length; e++) {
          let n = 2 * e,
            i = Number.parseInt(t.slice(n, n + 2), 16);
          if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
          r[e] = i;
        }
        return r;
      }
      function f(t) {
        return h(u(t));
      }
      function d(t) {
        if (!o(t)) throw Error("Uint8Array expected");
        return h(u(Uint8Array.from(t).reverse()));
      }
      function p(t, e) {
        return c(t.toString(16).padStart(2 * e, "0"));
      }
      function g(t, e) {
        return p(t, e).reverse();
      }
      function y(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = c(e);
          } catch (r) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${r}`
            );
          }
        else if (o(e)) n = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function m(...t) {
        let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
          r = 0;
        return (
          t.forEach((t) => {
            if (!o(t)) throw Error("Uint8Array expected");
            e.set(t, r), (r += t.length);
          }),
          e
        );
      }
      let b = (t) => (a << BigInt(t - 1)) - s,
        w = (t) => new Uint8Array(t),
        v = (t) => Uint8Array.from(t);
      function P(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = w(t),
          i = w(t),
          s = 0,
          a = () => {
            n.fill(1), i.fill(0), (s = 0);
          },
          o = (...t) => r(i, n, ...t),
          l = (t = w()) => {
            (i = o(v([0]), t)),
              (n = o()),
              0 !== t.length && ((i = o(v([1]), t)), (n = o()));
          },
          u = () => {
            if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = o()).slice();
              r.push(e), (t += n.length);
            }
            return m(...r);
          };
        return (t, e) => {
          let r;
          for (a(), l(t); !(r = e(u())); ) l();
          return a(), r;
        };
      }
      let E = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) =>
          "string" == typeof t || t instanceof Uint8Array,
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function x(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = E[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let s = t[e];
          if ((!n || void 0 !== s) && !i(s, t))
            throw Error(
              `Invalid param ${String(e)}=${s} (${typeof s}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let A =
          BigInt(0),
        I = BigInt(1),
        N = BigInt(2),
        O = BigInt(3),
        R = BigInt(4),
        T = BigInt(5),
        S = BigInt(8);
      function k(t, e) {
        let r = t % e;
        return r >= A ? r : e + r;
      }
      function B(t, e, r) {
        let n = t;
        for (; e-- > A; ) (n *= n), (n %= r);
        return n;
      }
      function U(t, e) {
        if (t === A || e <= A)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = k(t, e),
          n = e,
          i = A,
          s = I,
          a = I,
          o = A;
        for (; r !== A; ) {
          let t = n / r,
            e = n % r,
            l = i - a * t,
            u = s - o * t;
          (n = r), (r = e), (i = a), (s = o), (a = l), (o = u);
        }
        if (n !== I) throw Error("invert: does not exist");
        return k(i, e);
      }
      BigInt(9), BigInt(16);
      let L = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function C(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function D(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function G(t) {
        let e = D(t);
        return e + Math.ceil(e / 2);
      }
      var F = r(55301),
        $ = r(43775);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let H =
          BigInt(0),
        M = BigInt(1);
      function K(t) {
        return (
          x(
            t.Fp,
            L.reduce((t, e) => ((t[e] = "function"), t), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          x(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...C(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      let { bytesToNumberBE: V, hexToBytes: z } = n,
        _ = {
          Err: class extends Error {
            constructor(t = "") {
              super(t);
            }
          },
          _parseInt(t) {
            let { Err: e } = _;
            if (t.length < 2 || 2 !== t[0])
              throw new e("Invalid signature integer tag");
            let r = t[1],
              n = t.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new e("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new e("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1]))
              throw new e(
                "Invalid signature integer: unnecessary leading zero"
              );
            return { d: V(n), l: t.subarray(r + 2) };
          },
          toSig(t) {
            let { Err: e } = _,
              r = "string" == typeof t ? z(t) : t;
            if (!(r instanceof Uint8Array)) throw Error("ui8a expected");
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
            if (r[1] !== n - 2)
              throw new e("Invalid signature: incorrect length");
            let { d: i, l: s } = _._parseInt(r.subarray(2)),
              { d: a, l: o } = _._parseInt(s);
            if (o.length)
              throw new e("Invalid signature: left bytes after parsing");
            return { r: i, s: a };
          },
          hexFromSig(t) {
            let e = (t) => (8 & Number.parseInt(t[0], 16) ? "00" + t : t),
              r = (t) => {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              n = e(r(t.s)),
              i = e(r(t.r)),
              s = n.length / 2,
              a = i.length / 2,
              o = r(s),
              l = r(a);
            return `30${r(a + s + 4)}02${l}${i}02${o}${n}`;
          },
        },
        Z = BigInt(0),
        j = BigInt(1),
        q = (BigInt(2), BigInt(3));
      BigInt(4);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let W =
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
        J = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        Y = BigInt(1),
        X = BigInt(2),
        Q = (t, e) => (t + e / X) / e,
        tt = (function (t, e, r = !1, n = {}) {
          if (t <= A) throw Error(`Expected Field ORDER > 0, got ${t}`);
          let { nBitLength: i, nByteLength: s } = C(t, e);
          if (s > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let a = (function (t) {
              if (t % R === O) {
                let e = (t + I) / R;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              if (t % S === T) {
                let e = (t - T) / S;
                return function (t, r) {
                  let n = t.mul(r, N),
                    i = t.pow(n, e),
                    s = t.mul(r, i),
                    a = t.mul(t.mul(s, N), i),
                    o = t.mul(s, t.sub(a, t.ONE));
                  if (!t.eql(t.sqr(o), r))
                    throw Error("Cannot find square root");
                  return o;
                };
              }
              return (function (t) {
                let e, r, n;
                let i = (t - I) / N;
                for (e = t - I, r = 0; e % N === A; e /= N, r++);
                for (
                  n = N;
                  n < t &&
                  (function (t, e, r) {
                    if (r <= A || e < A)
                      throw Error("Expected power/modulo > 0");
                    if (r === I) return A;
                    let n = I;
                    for (; e > A; )
                      e & I && (n = (n * t) % r), (t = (t * t) % r), (e >>= I);
                    return n;
                  })(n, i, t) !==
                    t - I;
                  n++
                );
                if (1 === r) {
                  let e = (t + I) / R;
                  return function (t, r) {
                    let n = t.pow(r, e);
                    if (!t.eql(t.sqr(n), r))
                      throw Error("Cannot find square root");
                    return n;
                  };
                }
                let s = (e + I) / N;
                return function (t, a) {
                  if (t.pow(a, i) === t.neg(t.ONE))
                    throw Error("Cannot find square root");
                  let o = r,
                    l = t.pow(t.mul(t.ONE, n), e),
                    u = t.pow(a, s),
                    h = t.pow(a, e);
                  for (; !t.eql(h, t.ONE); ) {
                    if (t.eql(h, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let r = t.sqr(h); e < o && !t.eql(r, t.ONE); e++)
                      r = t.sqr(r);
                    let r = t.pow(l, I << BigInt(o - e - 1));
                    (l = t.sqr(r)),
                      (u = t.mul(u, r)),
                      (h = t.mul(h, l)),
                      (o = e);
                  }
                  return u;
                };
              })(t);
            })(t),
            o = Object.freeze({
              ORDER: t,
              BITS: i,
              BYTES: s,
              MASK: b(i),
              ZERO: A,
              ONE: I,
              create: (e) => k(e, t),
              isValid: (e) => {
                if ("bigint" != typeof e)
                  throw Error(
                    `Invalid field element: expected bigint, got ${typeof e}`
                  );
                return A <= e && e < t;
              },
              is0: (t) => t === A,
              isOdd: (t) => (t & I) === I,
              neg: (e) => k(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => k(e * e, t),
              add: (e, r) => k(e + r, t),
              sub: (e, r) => k(e - r, t),
              mul: (e, r) => k(e * r, t),
              pow: (t, e) =>
                (function (t, e, r) {
                  if (r < A) throw Error("Expected power > 0");
                  if (r === A) return t.ONE;
                  if (r === I) return e;
                  let n = t.ONE,
                    i = e;
                  for (; r > A; )
                    r & I && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= I);
                  return n;
                })(o, t, e),
              div: (e, r) => k(e * U(r, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => U(e, t),
              sqrt: n.sqrt || ((t) => a(o, t)),
              invertBatch: (t) =>
                (function (t, e) {
                  let r = Array(e.length),
                    n = e.reduce(
                      (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                      t.ONE
                    ),
                    i = t.inv(n);
                  return (
                    e.reduceRight(
                      (e, n, i) =>
                        t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                      i
                    ),
                    r
                  );
                })(o, t),
              cmov: (t, e, r) => (r ? e : t),
              toBytes: (t) => (r ? g(t, s) : p(t, s)),
              fromBytes: (t) => {
                if (t.length !== s)
                  throw Error(`Fp.fromBytes: expected ${s}, got ${t.length}`);
                return r ? d(t) : f(t);
              },
            });
          return Object.freeze(o);
        })(W, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              o = BigInt(88),
              l = (t * t * t) % W,
              u = (l * l * t) % W,
              h = (B(u, e, W) * u) % W,
              c = (B(h, e, W) * u) % W,
              f = (B(c, X, W) * l) % W,
              d = (B(f, n, W) * f) % W,
              p = (B(d, i, W) * d) % W,
              g = (B(p, a, W) * p) % W,
              y = (B(g, o, W) * g) % W,
              m = (B(y, a, W) * p) % W,
              b = (B(m, e, W) * u) % W,
              w = (B(b, s, W) * d) % W,
              v = (B(w, r, W) * l) % W,
              P = B(v, X, W);
            if (!tt.eql(tt.sqr(P), t)) throw Error("Cannot find square root");
            return P;
          },
        }),
        te = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = K(t);
                  return (
                    x(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                i = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function a(t) {
                return k(t, n);
              }
              let {
                  ProjectivePoint: o,
                  normPrivateKeyToScalar: l,
                  weierstrassEquation: h,
                  isWithinCurveOrder: w,
                } = (function (t) {
                  let e =
                      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ (function (
                        t
                      ) {
                        let e = K(t);
                        x(
                          e,
                          { a: "field", b: "field" },
                          {
                            allowedPrivateKeyLengths: "array",
                            wrapPrivateKey: "boolean",
                            isTorsionFree: "function",
                            clearCofactor: "function",
                            allowInfinityPoint: "boolean",
                            fromBytes: "function",
                            toBytes: "function",
                          }
                        );
                        let { endo: r, Fp: n, a: i } = e;
                        if (r) {
                          if (!n.eql(i, n.ZERO))
                            throw Error(
                              "Endomorphism can only be defined for Koblitz curves that have a=0"
                            );
                          if (
                            "object" != typeof r ||
                            "bigint" != typeof r.beta ||
                            "function" != typeof r.splitScalar
                          )
                            throw Error(
                              "Expected endomorphism with beta: bigint and splitScalar: function"
                            );
                        }
                        return Object.freeze({ ...e });
                      })(t),
                    { Fp: r } = e,
                    n =
                      e.toBytes ||
                      ((t, e, n) => {
                        let i = e.toAffine();
                        return m(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    i =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(t) {
                    let { a: n, b: i } = e,
                      s = r.sqr(t),
                      a = r.mul(s, t);
                    return r.add(r.add(a, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(t) {
                    return "bigint" == typeof t && Z < t && t < e.n;
                  }
                  function o(t) {
                    if (!a(t))
                      throw Error(
                        "Expected valid bigint: 0 < bigint < curve.n"
                      );
                  }
                  function l(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: s,
                      n: a,
                    } = e;
                    if (n && "bigint" != typeof t) {
                      if (
                        (t instanceof Uint8Array && (t = u(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("Invalid key");
                      t = t.padStart(2 * i, "0");
                    }
                    try {
                      r = "bigint" == typeof t ? t : f(y("private key", t, i));
                    } catch (e) {
                      throw Error(
                        `private key must be ${i} bytes, hex or bigint, not ${typeof t}`
                      );
                    }
                    return s && (r = k(r, a)), o(r), r;
                  }
                  let h = new Map();
                  function c(t) {
                    if (!(t instanceof d))
                      throw Error("ProjectivePoint expected");
                  }
                  class d {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !r.isValid(e)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (t instanceof d)
                        throw Error("projective point not allowed");
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? d.ZERO : new d(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(d.fromAffine);
                    }
                    static fromHex(t) {
                      let e = d.fromAffine(i(y("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return d.BASE.multiply(l(t));
                    }
                    _setWindowSize(t) {
                      (this._WINDOW_SIZE = t), h.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: n } = this.toAffine();
                      if (!r.isValid(t) || !r.isValid(n))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(n),
                        a = s(t);
                      if (!r.eql(i, a))
                        throw Error("bad point: equation left != right");
                      if (!this.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      c(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: s, py: a, pz: o } = t,
                        l = r.eql(r.mul(e, o), r.mul(s, i)),
                        u = r.eql(r.mul(n, o), r.mul(a, i));
                      return l && u;
                    }
                    negate() {
                      return new d(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, q),
                        { px: s, py: a, pz: o } = this,
                        l = r.ZERO,
                        u = r.ZERO,
                        h = r.ZERO,
                        c = r.mul(s, s),
                        f = r.mul(a, a),
                        p = r.mul(o, o),
                        g = r.mul(s, a);
                      return (
                        (g = r.add(g, g)),
                        (h = r.mul(s, o)),
                        (h = r.add(h, h)),
                        (l = r.mul(t, h)),
                        (u = r.mul(i, p)),
                        (u = r.add(l, u)),
                        (l = r.sub(f, u)),
                        (u = r.add(f, u)),
                        (u = r.mul(l, u)),
                        (l = r.mul(g, l)),
                        (h = r.mul(i, h)),
                        (p = r.mul(t, p)),
                        (g = r.sub(c, p)),
                        (g = r.mul(t, g)),
                        (g = r.add(g, h)),
                        (h = r.add(c, c)),
                        (c = r.add(h, c)),
                        (c = r.add(c, p)),
                        (c = r.mul(c, g)),
                        (u = r.add(u, c)),
                        (p = r.mul(a, o)),
                        (p = r.add(p, p)),
                        (c = r.mul(p, g)),
                        (l = r.sub(l, c)),
                        (h = r.mul(p, f)),
                        (h = r.add(h, h)),
                        new d(l, u, (h = r.add(h, h)))
                      );
                    }
                    add(t) {
                      c(t);
                      let { px: n, py: i, pz: s } = this,
                        { px: a, py: o, pz: l } = t,
                        u = r.ZERO,
                        h = r.ZERO,
                        f = r.ZERO,
                        p = e.a,
                        g = r.mul(e.b, q),
                        y = r.mul(n, a),
                        m = r.mul(i, o),
                        b = r.mul(s, l),
                        w = r.add(n, i),
                        v = r.add(a, o);
                      (w = r.mul(w, v)),
                        (v = r.add(y, m)),
                        (w = r.sub(w, v)),
                        (v = r.add(n, s));
                      let P = r.add(a, l);
                      return (
                        (v = r.mul(v, P)),
                        (P = r.add(y, b)),
                        (v = r.sub(v, P)),
                        (P = r.add(i, s)),
                        (u = r.add(o, l)),
                        (P = r.mul(P, u)),
                        (u = r.add(m, b)),
                        (P = r.sub(P, u)),
                        (f = r.mul(p, v)),
                        (u = r.mul(g, b)),
                        (f = r.add(u, f)),
                        (u = r.sub(m, f)),
                        (f = r.add(m, f)),
                        (h = r.mul(u, f)),
                        (m = r.add(y, y)),
                        (m = r.add(m, y)),
                        (b = r.mul(p, b)),
                        (v = r.mul(g, v)),
                        (m = r.add(m, b)),
                        (b = r.sub(y, b)),
                        (b = r.mul(p, b)),
                        (v = r.add(v, b)),
                        (y = r.mul(m, v)),
                        (h = r.add(h, y)),
                        (y = r.mul(P, v)),
                        (u = r.mul(w, u)),
                        (u = r.sub(u, y)),
                        (y = r.mul(w, m)),
                        (f = r.mul(P, f)),
                        new d(u, h, (f = r.add(f, y)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(t) {
                      return g.wNAFCached(this, h, t, (t) => {
                        let e = r.invertBatch(t.map((t) => t.pz));
                        return t
                          .map((t, r) => t.toAffine(e[r]))
                          .map(d.fromAffine);
                      });
                    }
                    multiplyUnsafe(t) {
                      let n = d.ZERO;
                      if (t === Z) return n;
                      if ((o(t), t === j)) return this;
                      let { endo: i } = e;
                      if (!i) return g.unsafeLadder(this, t);
                      let {
                          k1neg: s,
                          k1: a,
                          k2neg: l,
                          k2: u,
                        } = i.splitScalar(t),
                        h = n,
                        c = n,
                        f = this;
                      for (; a > Z || u > Z; )
                        a & j && (h = h.add(f)),
                          u & j && (c = c.add(f)),
                          (f = f.double()),
                          (a >>= j),
                          (u >>= j);
                      return (
                        s && (h = h.negate()),
                        l && (c = c.negate()),
                        (c = new d(r.mul(c.px, i.beta), c.py, c.pz)),
                        h.add(c)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      o(t);
                      let { endo: s } = e;
                      if (s) {
                        let {
                            k1neg: e,
                            k1: a,
                            k2neg: o,
                            k2: l,
                          } = s.splitScalar(t),
                          { p: u, f: h } = this.wNAF(a),
                          { p: c, f: f } = this.wNAF(l);
                        (u = g.constTimeNegate(e, u)),
                          (c = g.constTimeNegate(o, c)),
                          (c = new d(r.mul(c.px, s.beta), c.py, c.pz)),
                          (n = u.add(c)),
                          (i = h.add(f));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return d.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = d.BASE,
                        i = (t, e) =>
                          e !== Z && e !== j && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        s = i(this, e).add(i(t, r));
                      return s.is0() ? void 0 : s;
                    }
                    toAffine(t) {
                      let { px: e, py: n, pz: i } = this,
                        s = this.is0();
                      null == t && (t = s ? r.ONE : r.inv(i));
                      let a = r.mul(e, t),
                        o = r.mul(n, t),
                        l = r.mul(i, t);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: o };
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === j) return !0;
                      if (r) return r(d, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === j
                        ? this
                        : r
                        ? r(d, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return this.assertValidity(), n(d, this, t);
                    }
                    toHex(t = !0) {
                      return u(this.toRawBytes(t));
                    }
                  }
                  (d.BASE = new d(e.Gx, e.Gy, r.ONE)),
                    (d.ZERO = new d(r.ZERO, r.ONE, r.ZERO));
                  let p = e.nBitLength,
                    g = (function (t, e) {
                      let r = (t, e) => {
                          let r = e.negate();
                          return t ? r : e;
                        },
                        n = (t) => ({
                          windows: Math.ceil(e / t) + 1,
                          windowSize: 2 ** (t - 1),
                        });
                      return {
                        constTimeNegate: r,
                        unsafeLadder(e, r) {
                          let n = t.ZERO,
                            i = e;
                          for (; r > H; )
                            r & M && (n = n.add(i)),
                              (i = i.double()),
                              (r >>= M);
                          return n;
                        },
                        precomputeWindow(t, e) {
                          let { windows: r, windowSize: i } = n(e),
                            s = [],
                            a = t,
                            o = a;
                          for (let t = 0; t < r; t++) {
                            (o = a), s.push(o);
                            for (let t = 1; t < i; t++)
                              (o = o.add(a)), s.push(o);
                            a = o.double();
                          }
                          return s;
                        },
                        wNAF(e, i, s) {
                          let { windows: a, windowSize: o } = n(e),
                            l = t.ZERO,
                            u = t.BASE,
                            h = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            f = BigInt(e);
                          for (let t = 0; t < a; t++) {
                            let e = t * o,
                              n = Number(s & h);
                            (s >>= f), n > o && ((n -= c), (s += M));
                            let a = e + Math.abs(n) - 1,
                              d = t % 2 != 0,
                              p = n < 0;
                            0 === n
                              ? (u = u.add(r(d, i[e])))
                              : (l = l.add(r(p, i[a])));
                          }
                          return { p: l, f: u };
                        },
                        wNAFCached(t, e, r, n) {
                          let i = t._WINDOW_SIZE || 1,
                            s = e.get(t);
                          return (
                            s ||
                              ((s = this.precomputeWindow(t, i)),
                              1 !== i && e.set(t, n(s))),
                            this.wNAF(i, s, r)
                          );
                        },
                      };
                    })(d, e.endo ? Math.ceil(p / 2) : p);
                  return {
                    CURVE: e,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: l,
                    weierstrassEquation: s,
                    isWithinCurveOrder: a,
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let i = e.toAffine(),
                      s = r.toBytes(i.x),
                      a = m;
                    return n
                      ? a(Uint8Array.from([e.hasEvenY() ? 2 : 3]), s)
                      : a(Uint8Array.from([4]), s, r.toBytes(i.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      a = t.subarray(1);
                    if (e === i && (2 === n || 3 === n)) {
                      let t = f(a);
                      if (!(Z < t && t < r.ORDER))
                        throw Error("Point is not on curve");
                      let e = h(t),
                        i = r.sqrt(e);
                      return (
                        ((1 & n) == 1) != ((i & j) === j) && (i = r.neg(i)),
                        { x: t, y: i }
                      );
                    }
                    if (e === s && 4 === n)
                      return {
                        x: r.fromBytes(a.subarray(0, r.BYTES)),
                        y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${e} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`
                    );
                  },
                }),
                v = (t) => u(p(t, e.nByteLength)),
                E = (t, e, r) => f(t.slice(e, r));
              class A {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new A(
                    E((t = y("compactSignature", t, 2 * r)), 0, r),
                    E(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = _.toSig(y("DER", t));
                  return new A(e, r);
                }
                assertValidity() {
                  if (!w(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!w(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(t) {
                  return new A(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: i, s, recovery: l } = this,
                    u = R(y("msgHash", t));
                  if (null == l || ![0, 1, 2, 3].includes(l))
                    throw Error("recovery id invalid");
                  let h = 2 === l || 3 === l ? i + e.n : i;
                  if (h >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let c = (1 & l) == 0 ? "02" : "03",
                    f = o.fromHex(c + v(h)),
                    d = U(h, n),
                    p = a(-u * d),
                    g = a(s * d),
                    m = o.BASE.multiplyAndAddUnsafe(f, p, g);
                  if (!m) throw Error("point at infinify");
                  return m.assertValidity(), m;
                }
                hasHighS() {
                  return this.s > n >> j;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new A(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return c(this.toDERHex());
                }
                toDERHex() {
                  return _.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return c(this.toCompactHex());
                }
                toCompactHex() {
                  return v(this.r) + v(this.s);
                }
              }
              function N(t) {
                let e = t instanceof Uint8Array,
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === i || n === s
                  : r
                  ? n === 2 * i || n === 2 * s
                  : t instanceof o;
              }
              let O =
                  e.bits2int ||
                  function (t) {
                    let r = f(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                R =
                  e.bits2int_modN ||
                  function (t) {
                    return a(O(t));
                  },
                T = b(e.nBitLength);
              function S(t) {
                if ("bigint" != typeof t) throw Error("bigint expected");
                if (!(Z <= t && t < T))
                  throw Error(`bigint expected < 2^${e.nBitLength}`);
                return p(t, e.nByteLength);
              }
              let B = { lowS: e.lowS, prehash: !1 },
                L = { lowS: e.lowS, prehash: !1 };
              return (
                o.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return o.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (N(t)) throw Error("first arg must be private key");
                    if (!N(e)) throw Error("second arg must be public key");
                    return o.fromHex(e).multiply(l(t)).toRawBytes(r);
                  },
                  sign: function (t, i, s = B) {
                    let { seed: u, k2sig: h } = (function (t, i, s = B) {
                      if (["recovered", "canonical"].some((t) => t in s))
                        throw Error("sign() legacy options not supported");
                      let { hash: u, randomBytes: h } = e,
                        { lowS: c, prehash: f, extraEntropy: d } = s;
                      null == c && (c = !0),
                        (t = y("msgHash", t)),
                        f && (t = y("prehashed msgHash", u(t)));
                      let p = R(t),
                        g = l(i),
                        b = [S(g), S(p)];
                      if (null != d) {
                        let t = !0 === d ? h(r.BYTES) : d;
                        b.push(y("extraEntropy", t));
                      }
                      return {
                        seed: m(...b),
                        k2sig: function (t) {
                          let e = O(t);
                          if (!w(e)) return;
                          let r = U(e, n),
                            i = o.BASE.multiply(e).toAffine(),
                            s = a(i.x);
                          if (s === Z) return;
                          let l = a(r * a(p + s * g));
                          if (l === Z) return;
                          let u = (i.x === s ? 0 : 2) | Number(i.y & j),
                            h = l;
                          if (c && l > n >> j)
                            (h = l > n >> j ? a(-l) : l), (u ^= 1);
                          return new A(s, h, u);
                        },
                      };
                    })(t, i, s);
                    return P(e.hash.outputLen, e.nByteLength, e.hmac)(u, h);
                  },
                  verify: function (t, r, i, s = L) {
                    let l, u;
                    if (
                      ((r = y("msgHash", r)),
                      (i = y("publicKey", i)),
                      "strict" in s)
                    )
                      throw Error("options.strict was renamed to lowS");
                    let { lowS: h, prehash: c } = s;
                    try {
                      if ("string" == typeof t || t instanceof Uint8Array)
                        try {
                          u = A.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof _.Err)) throw e;
                          u = A.fromCompact(t);
                        }
                      else if (
                        "object" == typeof t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s
                      ) {
                        let { r: e, s: r } = t;
                        u = new A(e, r);
                      } else throw Error("PARSE");
                      l = o.fromHex(i);
                    } catch (t) {
                      if ("PARSE" === t.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string"
                        );
                      return !1;
                    }
                    if (h && u.hasHighS()) return !1;
                    c && (r = e.hash(r));
                    let { r: f, s: d } = u,
                      p = R(r),
                      g = U(d, n),
                      m = a(p * g),
                      b = a(f * g),
                      w = o.BASE.multiplyAndAddUnsafe(l, m, b)?.toAffine();
                    return !!w && a(w.x) === f;
                  },
                  ProjectivePoint: o,
                  Signature: A,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return l(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: l,
                    randomPrivateKey: () => {
                      let t = G(e.n);
                      return (function (t, e, r = !1) {
                        let n = t.length,
                          i = D(e),
                          s = G(e);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            `expected ${s}-1024 bytes of input, got ${n}`
                          );
                        let a = k(r ? f(t) : d(t), e - I) + I;
                        return r ? g(a, i) : p(a, i);
                      })(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = o.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => (0, F.b)(e, t, (0, $.eV)(...r)),
              randomBytes: $.O6,
            });
          return Object.freeze({ ...r(e), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: tt,
            n: J,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -Y * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  s = Q(e * t, J),
                  a = Q(-r * t, J),
                  o = k(t - s * e - a * n, J),
                  l = k(-s * r - a * e, J),
                  u = o > i,
                  h = l > i;
                if ((u && (o = J - o), h && (l = J - l), o > i || l > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: u, k1: o, k2neg: h, k2: l };
              },
            },
          },
          i.J
        );
      BigInt(0), te.ProjectivePoint;
      var tr = r(36024),
        tn = r(455),
        ti = r(12229),
        ts = r(26183);
      class ta {
        #i;
        constructor(t) {
          (0, tr.en)(
            32 === (0, tn.M5)(t),
            "invalid private key",
            "privateKey",
            "[REDACTED]"
          ),
            (this.#i = (0, tn.Dv)(t));
        }
        get privateKey() {
          return this.#i;
        }
        get publicKey() {
          return ta.computePublicKey(this.#i);
        }
        get compressedPublicKey() {
          return ta.computePublicKey(this.#i, !0);
        }
        sign(t) {
          (0, tr.en)(
            32 === (0, tn.M5)(t),
            "invalid digest length",
            "digest",
            t
          );
          let e = te.sign((0, tn.h_)(t), (0, tn.h_)(this.#i), { lowS: !0 });
          return ts.P.from({
            r: (0, ti.m9)(e.r, 32),
            s: (0, ti.m9)(e.s, 32),
            v: e.recovery ? 28 : 27,
          });
        }
        computeSharedSecret(t) {
          let e = ta.computePublicKey(t);
          return (0, tn.Dv)(
            te.getSharedSecret((0, tn.h_)(this.#i), (0, tn.Pw)(e), !1)
          );
        }
        static computePublicKey(t, e) {
          let r = (0, tn.Pw)(t, "key");
          if (32 === r.length) {
            let t = te.getPublicKey(r, !!e);
            return (0, tn.Dv)(t);
          }
          if (64 === r.length) {
            let t = new Uint8Array(65);
            (t[0] = 4), t.set(r, 1), (r = t);
          }
          let n = te.ProjectivePoint.fromHex(r);
          return (0, tn.Dv)(n.toRawBytes(e));
        }
        static recoverPublicKey(t, e) {
          (0, tr.en)(
            32 === (0, tn.M5)(t),
            "invalid digest length",
            "digest",
            t
          );
          let r = ts.P.from(e),
            n = te.Signature.fromCompact((0, tn.h_)((0, tn.zo)([r.r, r.s]))),
            i = (n = n.addRecoveryBit(r.yParity)).recoverPublicKey(
              (0, tn.h_)(t)
            );
          return (
            (0, tr.en)(
              null != i,
              "invalid signautre for digest",
              "signature",
              e
            ),
            "0x" + i.toHex(!1)
          );
        }
        static addPoints(t, e, r) {
          let n = te.ProjectivePoint.fromHex(
              ta.computePublicKey(t).substring(2)
            ),
            i = te.ProjectivePoint.fromHex(ta.computePublicKey(e).substring(2));
          return "0x" + n.add(i).toHex(!!r);
        }
      }
    },
    32186: function (t, e, r) {
      r.d(e, {
        id: function () {
          return s;
        },
      });
      var n = r(92314),
        i = r(97155);
      function s(t) {
        return (0, n.w)((0, i.Y0)(t));
      }
    },
    69576: function (t, e, r) {
      r.d(e, {
        n: function () {
          return u;
        },
        r: function () {
          return l;
        },
      });
      var n = r(92314),
        i = r(9053),
        s = r(71205),
        a = r(97155),
        o = r(455);
      function l(t) {
        return (
          "string" == typeof t && (t = (0, a.Y0)(t)),
          (0, n.w)((0, o.zo)([(0, a.Y0)(i.c), (0, a.Y0)(String(t.length)), t]))
        );
      }
      function u(t, e) {
        let r = l(t);
        return (0, s.R)(r, e);
      }
    },
    31386: function (t, e, r) {
      r.d(e, {
        B: function () {
          return N;
        },
        E: function () {
          return I;
        },
      });
      var n = r(5556),
        i = r(92314),
        s = r(71205),
        a = r(455),
        o = r(12229),
        l = r(36024),
        u = r(5857),
        h = r(32186);
      let c = new Uint8Array(32);
      c.fill(0);
      let f = BigInt(-1),
        d = BigInt(0),
        p = BigInt(1),
        g = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        y = (0, o.m9)(p, 32),
        m = (0, o.m9)(d, 32),
        b = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        w = ["name", "version", "chainId", "verifyingContract", "salt"];
      function v(t) {
        return function (e) {
          return (
            (0, l.en)(
              "string" == typeof e,
              `invalid domain value for ${JSON.stringify(t)}`,
              `domain.${t}`,
              e
            ),
            e
          );
        };
      }
      let P = {
        name: v("name"),
        version: v("version"),
        chainId: function (t) {
          let e = (0, o.yT)(t, "domain.chainId");
          return ((0, l.en)(e >= 0, "invalid chain ID", "domain.chainId", t),
          Number.isSafeInteger(e))
            ? Number(e)
            : (0, o.B4)(e);
        },
        verifyingContract: function (t) {
          try {
            return (0, n.K)(t).toLowerCase();
          } catch (t) {}
          (0, l.en)(
            !1,
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t
          );
        },
        salt: function (t) {
          let e = (0, a.Pw)(t, "domain.salt");
          return (
            (0, l.en)(
              32 === e.length,
              'invalid domain value "salt"',
              "domain.salt",
              t
            ),
            (0, a.Dv)(e)
          );
        },
      };
      function E(t) {
        {
          let e = t.match(/^(u?)int(\d+)$/);
          if (e) {
            let r = "" === e[1],
              n = parseInt(e[2]);
            (0, l.en)(
              n % 8 == 0 && 0 !== n && n <= 256 && e[2] === String(n),
              "invalid numeric width",
              "type",
              t
            );
            let i = (0, o.sS)(g, r ? n - 1 : n),
              s = r ? (i + p) * f : d;
            return function (e) {
              let n = (0, o.yT)(e, "value");
              return (
                (0, l.en)(
                  n >= s && n <= i,
                  `value out-of-bounds for ${t}`,
                  "value",
                  n
                ),
                (0, o.m9)(r ? (0, o.$j)(n, 256) : n, 32)
              );
            };
          }
        }
        {
          let e = t.match(/^bytes(\d+)$/);
          if (e) {
            let r = parseInt(e[1]);
            return (
              (0, l.en)(
                0 !== r && r <= 32 && e[1] === String(r),
                "invalid bytes width",
                "type",
                t
              ),
              function (e) {
                let n = (0, a.Pw)(e);
                return (
                  (0, l.en)(
                    n.length === r,
                    `invalid length for ${t}`,
                    "value",
                    e
                  ),
                  (function (t) {
                    let e = (0, a.Pw)(t),
                      r = e.length % 32;
                    return r ? (0, a.zo)([e, c.slice(r)]) : (0, a.Dv)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, a.U3)((0, n.K)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? y : m;
            };
          case "bytes":
            return function (t) {
              return (0, i.w)(t);
            };
          case "string":
            return function (t) {
              return (0, h.id)(t);
            };
        }
        return null;
      }
      function x(t, e) {
        return `${t}(${e
          .map(({ name: t, type: e }) => e + " " + t)
          .join(",")})`;
      }
      function A(t) {
        let e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
        return e
          ? {
              base: e[1],
              index: e[2] + e[4],
              array: {
                base: e[1],
                prefix: e[1] + e[2],
                count: e[5] ? parseInt(e[5]) : -1,
              },
            }
          : { base: t };
      }
      class I {
        primaryType;
        #s;
        get types() {
          return JSON.parse(this.#s);
        }
        #a;
        #o;
        constructor(t) {
          (this.#a = new Map()), (this.#o = new Map());
          let e = new Map(),
            r = new Map(),
            n = new Map(),
            i = {};
          for (let s in (Object.keys(t).forEach((s) => {
            (i[s] = t[s].map(({ name: e, type: r }) => {
              let { base: n, index: i } = A(r);
              return (
                "int" !== n || t.int || (n = "int256"),
                "uint" !== n || t.uint || (n = "uint256"),
                { name: e, type: n + (i || "") }
              );
            })),
              e.set(s, new Set()),
              r.set(s, []),
              n.set(s, new Set());
          }),
          (this.#s = JSON.stringify(i)),
          i)) {
            let n = new Set();
            for (let a of i[s]) {
              (0, l.en)(
                !n.has(a.name),
                `duplicate variable name ${JSON.stringify(
                  a.name
                )} in ${JSON.stringify(s)}`,
                "types",
                t
              ),
                n.add(a.name);
              let i = A(a.type).base;
              (0, l.en)(
                i !== s,
                `circular type reference to ${JSON.stringify(i)}`,
                "types",
                t
              ),
                E(i) ||
                  ((0, l.en)(
                    r.has(i),
                    `unknown type ${JSON.stringify(i)}`,
                    "types",
                    t
                  ),
                  r.get(i).push(s),
                  e.get(s).add(i));
            }
          }
          let s = Array.from(r.keys()).filter((t) => 0 === r.get(t).length);
          for (let [a, o] of ((0, l.en)(
            0 !== s.length,
            "missing primary type",
            "types",
            t
          ),
          (0, l.en)(
            1 === s.length,
            `ambiguous primary types or unused types: ${s
              .map((t) => JSON.stringify(t))
              .join(", ")}`,
            "types",
            t
          ),
          (0, u.h)(this, { primaryType: s[0] }),
          !(function i(s, a) {
            for (let o of ((0, l.en)(
              !a.has(s),
              `circular type reference to ${JSON.stringify(s)}`,
              "types",
              t
            ),
            a.add(s),
            e.get(s)))
              if (r.has(o)) for (let t of (i(o, a), a)) n.get(t).add(o);
            a.delete(s);
          })(this.primaryType, new Set()),
          n)) {
            let t = Array.from(o);
            t.sort(),
              this.#a.set(a, x(a, i[a]) + t.map((t) => x(t, i[t])).join(""));
          }
        }
        getEncoder(t) {
          let e = this.#o.get(t);
          return e || ((e = this.#l(t)), this.#o.set(t, e)), e;
        }
        #l(t) {
          {
            let e = E(t);
            if (e) return e;
          }
          let e = A(t).array;
          if (e) {
            let t = e.prefix,
              r = this.getEncoder(t);
            return (n) => {
              (0, l.en)(
                -1 === e.count || e.count === n.length,
                `array length mismatch; expected length ${e.count}`,
                "value",
                n
              );
              let s = n.map(r);
              return this.#a.has(t) && (s = s.map(i.w)), (0, i.w)((0, a.zo)(s));
            };
          }
          let r = this.types[t];
          if (r) {
            let e = (0, h.id)(this.#a.get(t));
            return (t) => {
              let n = r.map(({ name: e, type: r }) => {
                let n = this.getEncoder(r)(t[e]);
                return this.#a.has(r) ? (0, i.w)(n) : n;
              });
              return n.unshift(e), (0, a.zo)(n);
            };
          }
          (0, l.en)(!1, `unknown type: ${t}`, "type", t);
        }
        encodeType(t) {
          let e = this.#a.get(t);
          return (
            (0, l.en)(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, i.w)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (E(t)) return r(t, e);
          let n = A(t).array;
          if (n)
            return (
              (0, l.en)(
                -1 === n.count || n.count === e.length,
                `array length mismatch; expected length ${n.count}`,
                "value",
                e
              ),
              e.map((t) => this._visit(n.prefix, t, r))
            );
          let i = this.types[t];
          if (i)
            return i.reduce(
              (t, { name: n, type: i }) => (
                (t[n] = this._visit(i, e[n], r)), t
              ),
              {}
            );
          (0, l.en)(!1, `unknown type: ${t}`, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new I(t);
        }
        static getPrimaryType(t) {
          return I.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return I.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          let e = [];
          for (let r in t) {
            if (null == t[r]) continue;
            let n = b[r];
            (0, l.en)(
              n,
              `invalid typed-data domain key: ${JSON.stringify(r)}`,
              "domain",
              t
            ),
              e.push({ name: r, type: n });
          }
          return (
            e.sort((t, e) => w.indexOf(t.name) - w.indexOf(e.name)),
            I.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, a.zo)(["0x1901", I.hashDomain(t), I.from(e).hash(r)]);
        }
        static hash(t, e, r) {
          return (0, i.w)(I.encode(t, e, r));
        }
        static async resolveNames(t, e, r, n) {
          for (let e in (t = Object.assign({}, t))) null == t[e] && delete t[e];
          let i = {};
          t.verifyingContract &&
            !(0, a.A7)(t.verifyingContract, 20) &&
            (i[t.verifyingContract] = "0x");
          let s = I.from(e);
          for (let t in (s.visit(
            r,
            (t, e) => ("address" !== t || (0, a.A7)(e, 20) || (i[e] = "0x"), e)
          ),
          i))
            i[t] = await n(t);
          return (
            t.verifyingContract &&
              i[t.verifyingContract] &&
              (t.verifyingContract = i[t.verifyingContract]),
            (r = s.visit(r, (t, e) => ("address" === t && i[e] ? i[e] : e))),
            { domain: t, value: r }
          );
        }
        static getPayload(t, e, r) {
          I.hashDomain(t);
          let n = {},
            i = [];
          w.forEach((e) => {
            let r = t[e];
            null != r && ((n[e] = P[e](r)), i.push({ name: e, type: b[e] }));
          });
          let s = I.from(e),
            u = Object.assign({}, (e = s.types));
          return (
            (0, l.en)(
              null == u.EIP712Domain,
              "types must not contain EIP712Domain type",
              "types.EIP712Domain",
              e
            ),
            (u.EIP712Domain = i),
            s.encode(r),
            {
              types: u,
              domain: n,
              primaryType: s.primaryType,
              message: s.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, a.Dv)((0, a.Pw)(e));
                if (t.match(/^u?int/)) return (0, o.yT)(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      (0, l.en)(
                        "string" == typeof e,
                        "invalid string",
                        "value",
                        e
                      ),
                      e
                    );
                }
                (0, l.en)(!1, "unsupported type", "type", t);
              }),
            }
          );
        }
      }
      function N(t, e, r, n) {
        return (0, s.R)(I.hash(t, e, r), n);
      }
    },
    16396: function (t, e, r) {
      r.d(e, {
        b: function () {
          return f;
        },
        g: function () {
          return c;
        },
      });
      var n = r(79554),
        i = r(45250),
        s = r(36024),
        a = r(5857),
        o = r(12229),
        l = r(54101);
      function u(t, e) {
        if (t.provider) return t.provider;
        (0, s.hu)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
          operation: e,
        });
      }
      async function h(t, e) {
        let r = (0, l.kK)(e);
        if ((null != r.to && (r.to = (0, n.ru)(r.to, t)), null != r.from)) {
          let e = r.from;
          r.from = Promise.all([t.getAddress(), (0, n.ru)(e, t)]).then(
            ([t, e]) => (
              (0, s.en)(
                t.toLowerCase() === e.toLowerCase(),
                "transaction from mismatch",
                "tx.from",
                e
              ),
              t
            )
          );
        } else r.from = t.getAddress();
        return await (0, a.m)(r);
      }
      class c {
        provider;
        constructor(t) {
          (0, a.h)(this, { provider: t || null });
        }
        async getNonce(t) {
          return u(this, "getTransactionCount").getTransactionCount(
            await this.getAddress(),
            t
          );
        }
        async populateCall(t) {
          return await h(this, t);
        }
        async populateTransaction(t) {
          let e = u(this, "populateTransaction"),
            r = await h(this, t);
          null == r.nonce && (r.nonce = await this.getNonce("pending")),
            null == r.gasLimit && (r.gasLimit = await this.estimateGas(r));
          let n = await this.provider.getNetwork();
          if (null != r.chainId) {
            let e = (0, o.yT)(r.chainId);
            (0, s.en)(
              e === n.chainId,
              "transaction chainId mismatch",
              "tx.chainId",
              t.chainId
            );
          } else r.chainId = n.chainId;
          let i = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
          if (
            (null != r.gasPrice && (2 === r.type || i)
              ? (0, s.en)(
                  !1,
                  "eip-1559 transaction do not support gasPrice",
                  "tx",
                  t
                )
              : (0 === r.type || 1 === r.type) &&
                i &&
                (0, s.en)(
                  !1,
                  "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                  "tx",
                  t
                ),
            (2 === r.type || null == r.type) &&
              null != r.maxFeePerGas &&
              null != r.maxPriorityFeePerGas)
          )
            r.type = 2;
          else if (0 === r.type || 1 === r.type) {
            let t = await e.getFeeData();
            (0, s.hu)(
              null != t.gasPrice,
              "network does not support gasPrice",
              "UNSUPPORTED_OPERATION",
              { operation: "getGasPrice" }
            ),
              null == r.gasPrice && (r.gasPrice = t.gasPrice);
          } else {
            let t = await e.getFeeData();
            if (null == r.type) {
              if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                if (((r.type = 2), null != r.gasPrice)) {
                  let t = r.gasPrice;
                  delete r.gasPrice,
                    (r.maxFeePerGas = t),
                    (r.maxPriorityFeePerGas = t);
                } else
                  null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas),
                    null == r.maxPriorityFeePerGas &&
                      (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
              } else
                null != t.gasPrice
                  ? ((0, s.hu)(
                      !i,
                      "network does not support EIP-1559",
                      "UNSUPPORTED_OPERATION",
                      { operation: "populateTransaction" }
                    ),
                    null == r.gasPrice && (r.gasPrice = t.gasPrice),
                    (r.type = 0))
                  : (0, s.hu)(
                      !1,
                      "failed to get consistent fee data",
                      "UNSUPPORTED_OPERATION",
                      { operation: "signer.getFeeData" }
                    );
            } else
              (2 === r.type || 3 === r.type) &&
                (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas),
                null == r.maxPriorityFeePerGas &&
                  (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
          }
          return await (0, a.m)(r);
        }
        async estimateGas(t) {
          return u(this, "estimateGas").estimateGas(await this.populateCall(t));
        }
        async call(t) {
          return u(this, "call").call(await this.populateCall(t));
        }
        async resolveName(t) {
          let e = u(this, "resolveName");
          return await e.resolveName(t);
        }
        async sendTransaction(t) {
          let e = u(this, "sendTransaction"),
            r = await this.populateTransaction(t);
          delete r.from;
          let n = i.Y.from(r);
          return await e.broadcastTransaction(await this.signTransaction(n));
        }
      }
      class f extends c {
        address;
        constructor(t, e) {
          super(e), (0, a.h)(this, { address: t });
        }
        async getAddress() {
          return this.address;
        }
        connect(t) {
          return new f(this.address, t);
        }
        #u(t, e) {
          (0, s.hu)(
            !1,
            `VoidSigner cannot sign ${t}`,
            "UNSUPPORTED_OPERATION",
            { operation: e }
          );
        }
        async signTransaction(t) {
          this.#u("transactions", "signTransaction");
        }
        async signMessage(t) {
          this.#u("messages", "signMessage");
        }
        async signTypedData(t, e, r) {
          this.#u("typed-data", "signTypedData");
        }
      }
    },
    54101: function (t, e, r) {
      r.d(e, {
        IX: function () {
          return g;
        },
        Mw: function () {
          return y;
        },
        Zb: function () {
          return p;
        },
        gO: function () {
          return d;
        },
        jW: function () {
          return c;
        },
        kK: function () {
          return f;
        },
      });
      var n = r(5857),
        i = r(455),
        s = r(12229),
        a = r(36024),
        o = r(1891);
      let l = BigInt(0);
      function u(t) {
        return null == t ? null : t;
      }
      function h(t) {
        return null == t ? null : t.toString();
      }
      class c {
        gasPrice;
        maxFeePerGas;
        maxPriorityFeePerGas;
        constructor(t, e, r) {
          (0, n.h)(this, {
            gasPrice: u(t),
            maxFeePerGas: u(e),
            maxPriorityFeePerGas: u(r),
          });
        }
        toJSON() {
          let { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: r } = this;
          return {
            _type: "FeeData",
            gasPrice: h(t),
            maxFeePerGas: h(e),
            maxPriorityFeePerGas: h(r),
          };
        }
      }
      function f(t) {
        let e = {};
        for (let r of (t.to && (e.to = t.to),
        t.from && (e.from = t.from),
        t.data && (e.data = (0, i.Dv)(t.data)),
        "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(
          /,/
        )))
          r in t && null != t[r] && (e[r] = (0, s.yT)(t[r], `request.${r}`));
        for (let r of "type,nonce".split(/,/))
          r in t && null != t[r] && (e[r] = (0, s.Dx)(t[r], `request.${r}`));
        return (
          t.accessList && (e.accessList = (0, o.z)(t.accessList)),
          "blockTag" in t && (e.blockTag = t.blockTag),
          "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead),
          "customData" in t && (e.customData = t.customData),
          "blobVersionedHashes" in t &&
            t.blobVersionedHashes &&
            (e.blobVersionedHashes = t.blobVersionedHashes.slice()),
          "kzg" in t && (e.kzg = t.kzg),
          "blobs" in t &&
            t.blobs &&
            (e.blobs = t.blobs.map((t) =>
              (0, i.Zq)(t) ? (0, i.Dv)(t) : Object.assign({}, t)
            )),
          e
        );
      }
      class d {
        provider;
        number;
        hash;
        timestamp;
        parentHash;
        parentBeaconBlockRoot;
        nonce;
        difficulty;
        gasLimit;
        gasUsed;
        stateRoot;
        receiptsRoot;
        blobGasUsed;
        excessBlobGas;
        miner;
        prevRandao;
        extraData;
        baseFeePerGas;
        #h;
        constructor(t, e) {
          (this.#h = t.transactions.map((t) =>
            "string" != typeof t ? new y(t, e) : t
          )),
            (0, n.h)(this, {
              provider: e,
              hash: u(t.hash),
              number: t.number,
              timestamp: t.timestamp,
              parentHash: t.parentHash,
              parentBeaconBlockRoot: t.parentBeaconBlockRoot,
              nonce: t.nonce,
              difficulty: t.difficulty,
              gasLimit: t.gasLimit,
              gasUsed: t.gasUsed,
              blobGasUsed: t.blobGasUsed,
              excessBlobGas: t.excessBlobGas,
              miner: t.miner,
              prevRandao: u(t.prevRandao),
              extraData: t.extraData,
              baseFeePerGas: u(t.baseFeePerGas),
              stateRoot: t.stateRoot,
              receiptsRoot: t.receiptsRoot,
            });
        }
        get transactions() {
          return this.#h.map((t) => ("string" == typeof t ? t : t.hash));
        }
        get prefetchedTransactions() {
          let t = this.#h.slice();
          return 0 === t.length
            ? []
            : ((0, a.hu)(
                "object" == typeof t[0],
                "transactions were not prefetched with block request",
                "UNSUPPORTED_OPERATION",
                { operation: "transactionResponses()" }
              ),
              t);
        }
        toJSON() {
          let {
            baseFeePerGas: t,
            difficulty: e,
            extraData: r,
            gasLimit: n,
            gasUsed: i,
            hash: s,
            miner: a,
            prevRandao: o,
            nonce: l,
            number: u,
            parentHash: c,
            parentBeaconBlockRoot: f,
            stateRoot: d,
            receiptsRoot: p,
            timestamp: g,
            transactions: y,
          } = this;
          return {
            _type: "Block",
            baseFeePerGas: h(t),
            difficulty: h(e),
            extraData: r,
            gasLimit: h(n),
            gasUsed: h(i),
            blobGasUsed: h(this.blobGasUsed),
            excessBlobGas: h(this.excessBlobGas),
            hash: s,
            miner: a,
            prevRandao: o,
            nonce: l,
            number: u,
            parentHash: c,
            timestamp: g,
            parentBeaconBlockRoot: f,
            stateRoot: d,
            receiptsRoot: p,
            transactions: y,
          };
        }
        [Symbol.iterator]() {
          let t = 0,
            e = this.transactions;
          return {
            next: () =>
              t < this.length
                ? { value: e[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get length() {
          return this.#h.length;
        }
        get date() {
          return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
        }
        async getTransaction(t) {
          let e;
          if ("number" == typeof t) e = this.#h[t];
          else {
            let r = t.toLowerCase();
            for (let t of this.#h) {
              if ("string" == typeof t) {
                if (t !== r) continue;
                e = t;
                break;
              }
              if (t.hash !== r) {
                e = t;
                break;
              }
            }
          }
          if (null == e) throw Error("no such tx");
          return "string" == typeof e
            ? await this.provider.getTransaction(e)
            : e;
        }
        getPrefetchedTransaction(t) {
          let e = this.prefetchedTransactions;
          if ("number" == typeof t) return e[t];
          for (let r of ((t = t.toLowerCase()), e)) if (r.hash === t) return r;
          (0, a.en)(!1, "no matching transaction", "indexOrHash", t);
        }
        isMined() {
          return !!this.hash;
        }
        isLondon() {
          return !!this.baseFeePerGas;
        }
        orphanedEvent() {
          if (!this.isMined()) throw Error("");
          return { orphan: "drop-block", hash: this.hash, number: this.number };
        }
      }
      class p {
        provider;
        transactionHash;
        blockHash;
        blockNumber;
        removed;
        address;
        data;
        topics;
        index;
        transactionIndex;
        constructor(t, e) {
          this.provider = e;
          let r = Object.freeze(t.topics.slice());
          (0, n.h)(this, {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            removed: t.removed,
            address: t.address,
            data: t.data,
            topics: r,
            index: t.index,
            transactionIndex: t.transactionIndex,
          });
        }
        toJSON() {
          let {
            address: t,
            blockHash: e,
            blockNumber: r,
            data: n,
            index: i,
            removed: s,
            topics: a,
            transactionHash: o,
            transactionIndex: l,
          } = this;
          return {
            _type: "log",
            address: t,
            blockHash: e,
            blockNumber: r,
            data: n,
            index: i,
            removed: s,
            topics: a,
            transactionHash: o,
            transactionIndex: l,
          };
        }
        async getBlock() {
          let t = await this.provider.getBlock(this.blockHash);
          return (
            (0, a.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
          );
        }
        async getTransaction() {
          let t = await this.provider.getTransaction(this.transactionHash);
          return (
            (0, a.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
          );
        }
        async getTransactionReceipt() {
          let t = await this.provider.getTransactionReceipt(
            this.transactionHash
          );
          return (
            (0, a.hu)(
              !!t,
              "failed to find transaction receipt",
              "UNKNOWN_ERROR",
              {}
            ),
            t
          );
        }
        removedEvent() {
          return {
            orphan: "drop-log",
            log: {
              transactionHash: this.transactionHash,
              blockHash: this.blockHash,
              blockNumber: this.blockNumber,
              address: this.address,
              data: this.data,
              topics: Object.freeze(this.topics.slice()),
              index: this.index,
            },
          };
        }
      }
      class g {
        provider;
        to;
        from;
        contractAddress;
        hash;
        index;
        blockHash;
        blockNumber;
        logsBloom;
        gasUsed;
        blobGasUsed;
        cumulativeGasUsed;
        gasPrice;
        blobGasPrice;
        type;
        status;
        root;
        #c;
        constructor(t, e) {
          this.#c = Object.freeze(t.logs.map((t) => new p(t, e)));
          let r = l;
          null != t.effectiveGasPrice
            ? (r = t.effectiveGasPrice)
            : null != t.gasPrice && (r = t.gasPrice),
            (0, n.h)(this, {
              provider: e,
              to: t.to,
              from: t.from,
              contractAddress: t.contractAddress,
              hash: t.hash,
              index: t.index,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              logsBloom: t.logsBloom,
              gasUsed: t.gasUsed,
              cumulativeGasUsed: t.cumulativeGasUsed,
              blobGasUsed: t.blobGasUsed,
              gasPrice: r,
              blobGasPrice: t.blobGasPrice,
              type: t.type,
              status: t.status,
              root: t.root,
            });
        }
        get logs() {
          return this.#c;
        }
        toJSON() {
          let {
            to: t,
            from: e,
            contractAddress: r,
            hash: n,
            index: i,
            blockHash: s,
            blockNumber: a,
            logsBloom: o,
            logs: l,
            status: u,
            root: c,
          } = this;
          return {
            _type: "TransactionReceipt",
            blockHash: s,
            blockNumber: a,
            contractAddress: r,
            cumulativeGasUsed: h(this.cumulativeGasUsed),
            from: e,
            gasPrice: h(this.gasPrice),
            blobGasUsed: h(this.blobGasUsed),
            blobGasPrice: h(this.blobGasPrice),
            gasUsed: h(this.gasUsed),
            hash: n,
            index: i,
            logs: l,
            logsBloom: o,
            root: c,
            status: u,
            to: t,
          };
        }
        get length() {
          return this.logs.length;
        }
        [Symbol.iterator]() {
          let t = 0;
          return {
            next: () =>
              t < this.length
                ? { value: this.logs[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get fee() {
          return this.gasUsed * this.gasPrice;
        }
        async getBlock() {
          let t = await this.provider.getBlock(this.blockHash);
          if (null == t) throw Error("TODO");
          return t;
        }
        async getTransaction() {
          let t = await this.provider.getTransaction(this.hash);
          if (null == t) throw Error("TODO");
          return t;
        }
        async getResult() {
          return await this.provider.getTransactionResult(this.hash);
        }
        async confirmations() {
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        removedEvent() {
          return b(this);
        }
        reorderedEvent(t) {
          return (
            (0, a.hu)(
              !t || t.isMined(),
              "unmined 'other' transction cannot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "reorderedEvent(other)" }
            ),
            m(this, t)
          );
        }
      }
      class y {
        provider;
        blockNumber;
        blockHash;
        index;
        hash;
        type;
        to;
        from;
        nonce;
        gasLimit;
        gasPrice;
        maxPriorityFeePerGas;
        maxFeePerGas;
        maxFeePerBlobGas;
        data;
        value;
        chainId;
        signature;
        accessList;
        blobVersionedHashes;
        #f;
        constructor(t, e) {
          (this.provider = e),
            (this.blockNumber = null != t.blockNumber ? t.blockNumber : null),
            (this.blockHash = null != t.blockHash ? t.blockHash : null),
            (this.hash = t.hash),
            (this.index = t.index),
            (this.type = t.type),
            (this.from = t.from),
            (this.to = t.to || null),
            (this.gasLimit = t.gasLimit),
            (this.nonce = t.nonce),
            (this.data = t.data),
            (this.value = t.value),
            (this.gasPrice = t.gasPrice),
            (this.maxPriorityFeePerGas =
              null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null),
            (this.maxFeePerGas =
              null != t.maxFeePerGas ? t.maxFeePerGas : null),
            (this.maxFeePerBlobGas =
              null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null),
            (this.chainId = t.chainId),
            (this.signature = t.signature),
            (this.accessList = null != t.accessList ? t.accessList : null),
            (this.blobVersionedHashes =
              null != t.blobVersionedHashes ? t.blobVersionedHashes : null),
            (this.#f = -1);
        }
        toJSON() {
          let {
            blockNumber: t,
            blockHash: e,
            index: r,
            hash: n,
            type: i,
            to: s,
            from: a,
            nonce: o,
            data: l,
            signature: u,
            accessList: c,
            blobVersionedHashes: f,
          } = this;
          return {
            _type: "TransactionResponse",
            accessList: c,
            blockNumber: t,
            blockHash: e,
            blobVersionedHashes: f,
            chainId: h(this.chainId),
            data: l,
            from: a,
            gasLimit: h(this.gasLimit),
            gasPrice: h(this.gasPrice),
            hash: n,
            maxFeePerGas: h(this.maxFeePerGas),
            maxPriorityFeePerGas: h(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: h(this.maxFeePerBlobGas),
            nonce: o,
            signature: u,
            to: s,
            index: r,
            type: i,
            value: h(this.value),
          };
        }
        async getBlock() {
          let t = this.blockNumber;
          if (null == t) {
            let e = await this.getTransaction();
            e && (t = e.blockNumber);
          }
          if (null == t) return null;
          let e = this.provider.getBlock(t);
          if (null == e) throw Error("TODO");
          return e;
        }
        async getTransaction() {
          return this.provider.getTransaction(this.hash);
        }
        async confirmations() {
          if (null == this.blockNumber) {
            let { tx: t, blockNumber: e } = await (0, n.m)({
              tx: this.getTransaction(),
              blockNumber: this.provider.getBlockNumber(),
            });
            return null == t || null == t.blockNumber
              ? 0
              : e - t.blockNumber + 1;
          }
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        async wait(t, e) {
          let r = null == t ? 1 : t,
            i = null == e ? 0 : e,
            s = this.#f,
            o = -1,
            u = -1 === s,
            h = async () => {
              if (u) return null;
              let { blockNumber: t, nonce: e } = await (0, n.m)({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from),
              });
              if (e < this.nonce) {
                s = t;
                return;
              }
              if (u) return null;
              let i = await this.getTransaction();
              if (!i || null == i.blockNumber)
                for (
                  -1 === o && (o = s - 3) < this.#f && (o = this.#f);
                  o <= t;

                ) {
                  if (u) return null;
                  let e = await this.provider.getBlock(o, !0);
                  if (null == e) break;
                  for (let t of e) if (t === this.hash) return;
                  for (let n = 0; n < e.length; n++) {
                    let i = await e.getTransaction(n);
                    if (i.from === this.from && i.nonce === this.nonce) {
                      if (u) return null;
                      let e = await this.provider.getTransactionReceipt(i.hash);
                      if (null == e || t - e.blockNumber + 1 < r) return;
                      let n = "replaced";
                      i.data === this.data &&
                      i.to === this.to &&
                      i.value === this.value
                        ? (n = "repriced")
                        : "0x" === i.data &&
                          i.from === i.to &&
                          i.value === l &&
                          (n = "cancelled"),
                        (0, a.hu)(
                          !1,
                          "transaction was replaced",
                          "TRANSACTION_REPLACED",
                          {
                            cancelled: "replaced" === n || "cancelled" === n,
                            reason: n,
                            replacement: i.replaceableTransaction(s),
                            hash: i.hash,
                            receipt: e,
                          }
                        );
                    }
                  }
                  o++;
                }
            },
            c = (t) => {
              if (null == t || 0 !== t.status) return t;
              (0, a.hu)(
                !1,
                "transaction execution reverted",
                "CALL_EXCEPTION",
                {
                  action: "sendTransaction",
                  data: null,
                  reason: null,
                  invocation: null,
                  revert: null,
                  transaction: { to: t.to, from: t.from, data: "" },
                  receipt: t,
                }
              );
            },
            f = await this.provider.getTransactionReceipt(this.hash);
          if (0 === r) return c(f);
          if (f) {
            if ((await f.confirmations()) >= r) return c(f);
          } else if ((await h(), 0 === r)) return null;
          let d = new Promise((t, e) => {
            let n = [],
              o = () => {
                n.forEach((t) => t());
              };
            if (
              (n.push(() => {
                u = !0;
              }),
              i > 0)
            ) {
              let t = setTimeout(() => {
                o(), e((0, a.wf)("wait for transaction timeout", "TIMEOUT"));
              }, i);
              n.push(() => {
                clearTimeout(t);
              });
            }
            let l = async (n) => {
              if ((await n.confirmations()) >= r) {
                o();
                try {
                  t(c(n));
                } catch (t) {
                  e(t);
                }
              }
            };
            if (
              (n.push(() => {
                this.provider.off(this.hash, l);
              }),
              this.provider.on(this.hash, l),
              s >= 0)
            ) {
              let t = async () => {
                try {
                  await h();
                } catch (t) {
                  if ((0, a.VZ)(t, "TRANSACTION_REPLACED")) {
                    o(), e(t);
                    return;
                  }
                }
                u || this.provider.once("block", t);
              };
              n.push(() => {
                this.provider.off("block", t);
              }),
                this.provider.once("block", t);
            }
          });
          return await d;
        }
        isMined() {
          return null != this.blockHash;
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        removedEvent() {
          return (
            (0, a.hu)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            b(this)
          );
        }
        reorderedEvent(t) {
          return (
            (0, a.hu)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            (0, a.hu)(
              !t || t.isMined(),
              "unmined 'other' transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            m(this, t)
          );
        }
        replaceableTransaction(t) {
          (0, a.en)(
            Number.isInteger(t) && t >= 0,
            "invalid startBlock",
            "startBlock",
            t
          );
          let e = new y(this, this.provider);
          return (e.#f = t), e;
        }
      }
      function m(t, e) {
        return { orphan: "reorder-transaction", tx: t, other: e };
      }
      function b(t) {
        return { orphan: "drop-transaction", tx: t };
      }
    },
    1891: function (t, e, r) {
      r.d(e, {
        z: function () {
          return o;
        },
      });
      var n = r(5556),
        i = r(36024),
        s = r(455);
      function a(t, e) {
        return {
          address: (0, n.K)(t),
          storageKeys: e.map(
            (t, e) => (
              (0, i.en)(
                (0, s.A7)(t, 32),
                "invalid slot",
                `storageKeys[${e}]`,
                t
              ),
              t.toLowerCase()
            )
          ),
        };
      }
      function o(t) {
        if (Array.isArray(t))
          return t.map((e, r) =>
            Array.isArray(e)
              ? ((0, i.en)(
                  2 === e.length,
                  "invalid slot set",
                  `value[${r}]`,
                  e
                ),
                a(e[0], e[1]))
              : ((0, i.en)(
                  null != e && "object" == typeof e,
                  "invalid address-slot set",
                  "value",
                  t
                ),
                a(e.address, e.storageKeys))
          );
        (0, i.en)(
          null != t && "object" == typeof t,
          "invalid access list",
          "value",
          t
        );
        let e = Object.keys(t).map((e) => {
          let r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return a(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
    },
    71205: function (t, e, r) {
      r.d(e, {
        R: function () {
          return o;
        },
        d: function () {
          return a;
        },
      });
      var n = r(5556),
        i = r(90481),
        s = r(92314);
      function a(t) {
        let e;
        return (
          (e =
            "string" == typeof t ? i.E.computePublicKey(t, !1) : t.publicKey),
          (0, n.K)((0, s.w)("0x" + e.substring(4)).substring(26))
        );
      }
      function o(t, e) {
        return a(i.E.recoverPublicKey(t, e));
      }
    },
    45250: function (t, e, r) {
      r.d(e, {
        Y: function () {
          return S;
        },
      });
      var n = r(5556),
        i = r(11126),
        s = r(82258),
        a = r(26183),
        o = r(92314),
        l = r(90481),
        u = r(36024),
        h = r(12229),
        c = r(455),
        f = r(89746),
        d = r(24796),
        p = r(1891),
        g = r(71205);
      let y = BigInt(0),
        m = BigInt(2),
        b = BigInt(27),
        w = BigInt(28),
        v = BigInt(35),
        P = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      function E(t, e) {
        let r = t.toString(16);
        for (; r.length < 2; ) r = "0" + r;
        return "0x" + (r += (0, s.J)(e).substring(4));
      }
      function x(t) {
        return "0x" === t ? null : (0, n.K)(t);
      }
      function A(t, e) {
        try {
          return (0, p.z)(t);
        } catch (r) {
          (0, u.en)(!1, r.message, e, t);
        }
      }
      function I(t, e) {
        return "0x" === t ? 0 : (0, h.Dx)(t, e);
      }
      function N(t, e) {
        if ("0x" === t) return y;
        let r = (0, h.yT)(t, e);
        return (0, u.en)(r <= P, "value exceeds uint size", e, r), r;
      }
      function O(t, e) {
        let r = (0, h.yT)(t, "value"),
          n = (0, h.ot)(r);
        return (0, u.en)(n.length <= 32, "value too large", `tx.${e}`, r), n;
      }
      function R(t) {
        return (0, p.z)(t).map((t) => [t.address, t.storageKeys]);
      }
      function T(t, e) {
        let r;
        try {
          if (((r = I(e[0], "yParity")), 0 !== r && 1 !== r))
            throw Error("bad yParity");
        } catch (t) {
          (0, u.en)(!1, "invalid yParity", "yParity", e[0]);
        }
        let n = (0, c.U3)(e[1], 32),
          i = (0, c.U3)(e[2], 32),
          s = a.P.from({ r: n, s: i, yParity: r });
        t.signature = s;
      }
      class S {
        #d;
        #p;
        #g;
        #y;
        #m;
        #b;
        #w;
        #v;
        #P;
        #E;
        #x;
        #A;
        #I;
        #N;
        #O;
        #R;
        get type() {
          return this.#d;
        }
        set type(t) {
          switch (t) {
            case null:
              this.#d = null;
              break;
            case 0:
            case "legacy":
              this.#d = 0;
              break;
            case 1:
            case "berlin":
            case "eip-2930":
              this.#d = 1;
              break;
            case 2:
            case "london":
            case "eip-1559":
              this.#d = 2;
              break;
            case 3:
            case "cancun":
            case "eip-4844":
              this.#d = 3;
              break;
            default:
              (0, u.en)(!1, "unsupported transaction type", "type", t);
          }
        }
        get typeName() {
          switch (this.type) {
            case 0:
              return "legacy";
            case 1:
              return "eip-2930";
            case 2:
              return "eip-1559";
            case 3:
              return "eip-4844";
          }
          return null;
        }
        get to() {
          let t = this.#p;
          return null == t && 3 === this.type ? i.N : t;
        }
        set to(t) {
          this.#p = null == t ? null : (0, n.K)(t);
        }
        get nonce() {
          return this.#y;
        }
        set nonce(t) {
          this.#y = (0, h.Dx)(t, "value");
        }
        get gasLimit() {
          return this.#m;
        }
        set gasLimit(t) {
          this.#m = (0, h.yT)(t);
        }
        get gasPrice() {
          let t = this.#b;
          return null == t && (0 === this.type || 1 === this.type) ? y : t;
        }
        set gasPrice(t) {
          this.#b = null == t ? null : (0, h.yT)(t, "gasPrice");
        }
        get maxPriorityFeePerGas() {
          let t = this.#w;
          return null == t
            ? 2 === this.type || 3 === this.type
              ? y
              : null
            : t;
        }
        set maxPriorityFeePerGas(t) {
          this.#w = null == t ? null : (0, h.yT)(t, "maxPriorityFeePerGas");
        }
        get maxFeePerGas() {
          let t = this.#v;
          return null == t
            ? 2 === this.type || 3 === this.type
              ? y
              : null
            : t;
        }
        set maxFeePerGas(t) {
          this.#v = null == t ? null : (0, h.yT)(t, "maxFeePerGas");
        }
        get data() {
          return this.#g;
        }
        set data(t) {
          this.#g = (0, c.Dv)(t);
        }
        get value() {
          return this.#P;
        }
        set value(t) {
          this.#P = (0, h.yT)(t, "value");
        }
        get chainId() {
          return this.#E;
        }
        set chainId(t) {
          this.#E = (0, h.yT)(t);
        }
        get signature() {
          return this.#x || null;
        }
        set signature(t) {
          this.#x = null == t ? null : a.P.from(t);
        }
        get accessList() {
          let t = this.#A || null;
          return null == t
            ? 1 === this.type || 2 === this.type || 3 === this.type
              ? []
              : null
            : t;
        }
        set accessList(t) {
          this.#A = null == t ? null : (0, p.z)(t);
        }
        get maxFeePerBlobGas() {
          let t = this.#I;
          return null == t && 3 === this.type ? y : t;
        }
        set maxFeePerBlobGas(t) {
          this.#I = null == t ? null : (0, h.yT)(t, "maxFeePerBlobGas");
        }
        get blobVersionedHashes() {
          let t = this.#N;
          return null == t && 3 === this.type ? [] : t;
        }
        set blobVersionedHashes(t) {
          if (null != t) {
            (0, u.en)(
              Array.isArray(t),
              "blobVersionedHashes must be an Array",
              "value",
              t
            ),
              (t = t.slice());
            for (let e = 0; e < t.length; e++)
              (0, u.en)(
                (0, c.A7)(t[e], 32),
                "invalid blobVersionedHash",
                `value[${e}]`,
                t[e]
              );
          }
          this.#N = t;
        }
        get blobs() {
          return null == this.#R
            ? null
            : this.#R.map((t) => Object.assign({}, t));
        }
        set blobs(t) {
          if (null == t) {
            this.#R = null;
            return;
          }
          let e = [],
            r = [];
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ((0, c.Zq)(i)) {
              (0, u.hu)(
                this.#O,
                "adding a raw blob requires a KZG library",
                "UNSUPPORTED_OPERATION",
                { operation: "set blobs()" }
              );
              let t = (0, c.Pw)(i);
              if (
                ((0, u.en)(
                  t.length <= 131072,
                  "blob is too large",
                  `blobs[${n}]`,
                  i
                ),
                131072 !== t.length)
              ) {
                let e = new Uint8Array(131072);
                e.set(t), (t = e);
              }
              let s = this.#O.blobToKzgCommitment(t),
                a = (0, c.Dv)(this.#O.computeBlobKzgProof(t, s));
              e.push({
                data: (0, c.Dv)(t),
                commitment: (0, c.Dv)(s),
                proof: a,
              }),
                r.push(E(1, s));
            } else {
              let t = (0, c.Dv)(i.commitment);
              e.push({
                data: (0, c.Dv)(i.data),
                commitment: t,
                proof: (0, c.Dv)(i.proof),
              }),
                r.push(E(1, t));
            }
          }
          (this.#R = e), (this.#N = r);
        }
        get kzg() {
          return this.#O;
        }
        set kzg(t) {
          this.#O = t;
        }
        constructor() {
          (this.#d = null),
            (this.#p = null),
            (this.#y = 0),
            (this.#m = y),
            (this.#b = null),
            (this.#w = null),
            (this.#v = null),
            (this.#g = "0x"),
            (this.#P = y),
            (this.#E = y),
            (this.#x = null),
            (this.#A = null),
            (this.#I = null),
            (this.#N = null),
            (this.#R = null),
            (this.#O = null);
        }
        get hash() {
          return null == this.signature ? null : (0, o.w)(this.#T(!0, !1));
        }
        get unsignedHash() {
          return (0, o.w)(this.unsignedSerialized);
        }
        get from() {
          return null == this.signature
            ? null
            : (0, g.R)(this.unsignedHash, this.signature);
        }
        get fromPublicKey() {
          return null == this.signature
            ? null
            : l.E.recoverPublicKey(this.unsignedHash, this.signature);
        }
        isSigned() {
          return null != this.signature;
        }
        #T(t, e) {
          (0, u.hu)(
            !t || null != this.signature,
            "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" }
          );
          let r = t ? this.signature : null;
          switch (this.inferType()) {
            case 0:
              return (function (t, e) {
                let r = [
                    O(t.nonce, "nonce"),
                    O(t.gasPrice || 0, "gasPrice"),
                    O(t.gasLimit, "gasLimit"),
                    t.to || "0x",
                    O(t.value, "value"),
                    t.data,
                  ],
                  n = y;
                if (t.chainId != y)
                  (n = (0, h.yT)(t.chainId, "tx.chainId")),
                    (0, u.en)(
                      !e || null == e.networkV || e.legacyChainId === n,
                      "tx.chainId/sig.v mismatch",
                      "sig",
                      e
                    );
                else if (t.signature) {
                  let e = t.signature.legacyChainId;
                  null != e && (n = e);
                }
                if (!e)
                  return (
                    n !== y &&
                      (r.push((0, h.ot)(n)), r.push("0x"), r.push("0x")),
                    (0, d.e)(r)
                  );
                let i = BigInt(27 + e.yParity);
                return (
                  n !== y
                    ? (i = a.P.getChainIdV(n, e.v))
                    : BigInt(e.v) !== i &&
                      (0, u.en)(!1, "tx.chainId/sig.v mismatch", "sig", e),
                  r.push((0, h.ot)(i)),
                  r.push((0, h.ot)(e.r)),
                  r.push((0, h.ot)(e.s)),
                  (0, d.e)(r)
                );
              })(this, r);
            case 1:
              return (function (t, e) {
                let r = [
                  O(t.chainId, "chainId"),
                  O(t.nonce, "nonce"),
                  O(t.gasPrice || 0, "gasPrice"),
                  O(t.gasLimit, "gasLimit"),
                  t.to || "0x",
                  O(t.value, "value"),
                  t.data,
                  R(t.accessList || []),
                ];
                return (
                  e &&
                    (r.push(O(e.yParity, "recoveryParam")),
                    r.push((0, h.ot)(e.r)),
                    r.push((0, h.ot)(e.s))),
                  (0, c.zo)(["0x01", (0, d.e)(r)])
                );
              })(this, r);
            case 2:
              return (function (t, e) {
                let r = [
                  O(t.chainId, "chainId"),
                  O(t.nonce, "nonce"),
                  O(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                  O(t.maxFeePerGas || 0, "maxFeePerGas"),
                  O(t.gasLimit, "gasLimit"),
                  t.to || "0x",
                  O(t.value, "value"),
                  t.data,
                  R(t.accessList || []),
                ];
                return (
                  e &&
                    (r.push(O(e.yParity, "yParity")),
                    r.push((0, h.ot)(e.r)),
                    r.push((0, h.ot)(e.s))),
                  (0, c.zo)(["0x02", (0, d.e)(r)])
                );
              })(this, r);
            case 3:
              return (function (t, e, r) {
                let n = [
                  O(t.chainId, "chainId"),
                  O(t.nonce, "nonce"),
                  O(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                  O(t.maxFeePerGas || 0, "maxFeePerGas"),
                  O(t.gasLimit, "gasLimit"),
                  t.to || i.N,
                  O(t.value, "value"),
                  t.data,
                  R(t.accessList || []),
                  O(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
                  (function (t, e) {
                    (0, u.en)(Array.isArray(t), `invalid ${e}`, "value", t);
                    for (let e = 0; e < t.length; e++)
                      (0, u.en)(
                        (0, c.A7)(t[e], 32),
                        "invalid ${ param } hash",
                        `value[${e}]`,
                        t[e]
                      );
                    return t;
                  })(t.blobVersionedHashes || [], "blobVersionedHashes"),
                ];
                return e &&
                  (n.push(O(e.yParity, "yParity")),
                  n.push((0, h.ot)(e.r)),
                  n.push((0, h.ot)(e.s)),
                  r)
                  ? (0, c.zo)([
                      "0x03",
                      (0, d.e)([
                        n,
                        r.map((t) => t.data),
                        r.map((t) => t.commitment),
                        r.map((t) => t.proof),
                      ]),
                    ])
                  : (0, c.zo)(["0x03", (0, d.e)(n)]);
              })(this, r, e ? this.blobs : null);
          }
          (0, u.hu)(
            !1,
            "unsupported transaction type",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" }
          );
        }
        get serialized() {
          return this.#T(!0, !0);
        }
        get unsignedSerialized() {
          return this.#T(!1, !1);
        }
        inferType() {
          let t = this.inferTypes();
          return t.indexOf(2) >= 0 ? 2 : t.pop();
        }
        inferTypes() {
          let t = null != this.gasPrice,
            e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            r = null != this.accessList,
            n = null != this.#I || this.#N;
          null != this.maxFeePerGas &&
            null != this.maxPriorityFeePerGas &&
            (0, u.hu)(
              this.maxFeePerGas >= this.maxPriorityFeePerGas,
              "priorityFee cannot be more than maxFee",
              "BAD_DATA",
              { value: this }
            ),
            (0, u.hu)(
              !e || (0 !== this.type && 1 !== this.type),
              "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas",
              "BAD_DATA",
              { value: this }
            ),
            (0, u.hu)(
              0 !== this.type || !r,
              "legacy transaction cannot have accessList",
              "BAD_DATA",
              { value: this }
            );
          let i = [];
          return (
            null != this.type
              ? i.push(this.type)
              : e
              ? i.push(2)
              : t
              ? (i.push(1), r || i.push(0))
              : r
              ? (i.push(1), i.push(2))
              : ((n && this.to) || (i.push(0), i.push(1), i.push(2)),
                i.push(3)),
            i.sort(),
            i
          );
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        clone() {
          return S.from(this);
        }
        toJSON() {
          let t = (t) => (null == t ? null : t.toString());
          return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: t(this.gasLimit),
            gasPrice: t(this.gasPrice),
            maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
            maxFeePerGas: t(this.maxFeePerGas),
            value: t(this.value),
            chainId: t(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList,
          };
        }
        static from(t) {
          if (null == t) return new S();
          if ("string" == typeof t) {
            let e = (0, c.Pw)(t);
            if (e[0] >= 127)
              return S.from(
                (function (t) {
                  let e = (0, f.O)(t);
                  (0, u.en)(
                    Array.isArray(e) && (9 === e.length || 6 === e.length),
                    "invalid field count for legacy transaction",
                    "data",
                    t
                  );
                  let r = {
                    type: 0,
                    nonce: I(e[0], "nonce"),
                    gasPrice: N(e[1], "gasPrice"),
                    gasLimit: N(e[2], "gasLimit"),
                    to: x(e[3]),
                    value: N(e[4], "value"),
                    data: (0, c.Dv)(e[5]),
                    chainId: y,
                  };
                  if (6 === e.length) return r;
                  let n = N(e[6], "v"),
                    i = N(e[7], "r"),
                    s = N(e[8], "s");
                  if (i === y && s === y) r.chainId = n;
                  else {
                    let t = (n - v) / m;
                    t < y && (t = y),
                      (r.chainId = t),
                      (0, u.en)(
                        t !== y || n === b || n === w,
                        "non-canonical legacy v",
                        "v",
                        e[6]
                      ),
                      (r.signature = a.P.from({
                        r: (0, c.U3)(e[7], 32),
                        s: (0, c.U3)(e[8], 32),
                        v: n,
                      }));
                  }
                  return r;
                })(e)
              );
            switch (e[0]) {
              case 1:
                return S.from(
                  (function (t) {
                    let e = (0, f.O)((0, c.Pw)(t).slice(1));
                    (0, u.en)(
                      Array.isArray(e) && (8 === e.length || 11 === e.length),
                      "invalid field count for transaction type: 1",
                      "data",
                      (0, c.Dv)(t)
                    );
                    let r = {
                      type: 1,
                      chainId: N(e[0], "chainId"),
                      nonce: I(e[1], "nonce"),
                      gasPrice: N(e[2], "gasPrice"),
                      gasLimit: N(e[3], "gasLimit"),
                      to: x(e[4]),
                      value: N(e[5], "value"),
                      data: (0, c.Dv)(e[6]),
                      accessList: A(e[7], "accessList"),
                    };
                    return 8 === e.length || T(r, e.slice(8)), r;
                  })(e)
                );
              case 2:
                return S.from(
                  (function (t) {
                    let e = (0, f.O)((0, c.Pw)(t).slice(1));
                    (0, u.en)(
                      Array.isArray(e) && (9 === e.length || 12 === e.length),
                      "invalid field count for transaction type: 2",
                      "data",
                      (0, c.Dv)(t)
                    );
                    let r = {
                      type: 2,
                      chainId: N(e[0], "chainId"),
                      nonce: I(e[1], "nonce"),
                      maxPriorityFeePerGas: N(e[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: N(e[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: N(e[4], "gasLimit"),
                      to: x(e[5]),
                      value: N(e[6], "value"),
                      data: (0, c.Dv)(e[7]),
                      accessList: A(e[8], "accessList"),
                    };
                    return 9 === e.length || T(r, e.slice(9)), r;
                  })(e)
                );
              case 3:
                return S.from(
                  (function (t) {
                    let e = (0, f.O)((0, c.Pw)(t).slice(1)),
                      r = "3",
                      n = null;
                    if (4 === e.length && Array.isArray(e[0])) {
                      r = "3 (network format)";
                      let t = e[1],
                        i = e[2],
                        s = e[3];
                      (0, u.en)(
                        Array.isArray(t),
                        "invalid network format: blobs not an array",
                        "fields[1]",
                        t
                      ),
                        (0, u.en)(
                          Array.isArray(i),
                          "invalid network format: commitments not an array",
                          "fields[2]",
                          i
                        ),
                        (0, u.en)(
                          Array.isArray(s),
                          "invalid network format: proofs not an array",
                          "fields[3]",
                          s
                        ),
                        (0, u.en)(
                          t.length === i.length,
                          "invalid network format: blobs/commitments length mismatch",
                          "fields",
                          e
                        ),
                        (0, u.en)(
                          t.length === s.length,
                          "invalid network format: blobs/proofs length mismatch",
                          "fields",
                          e
                        ),
                        (n = []);
                      for (let r = 0; r < e[1].length; r++)
                        n.push({ data: t[r], commitment: i[r], proof: s[r] });
                      e = e[0];
                    }
                    (0, u.en)(
                      Array.isArray(e) && (11 === e.length || 14 === e.length),
                      `invalid field count for transaction type: ${r}`,
                      "data",
                      (0, c.Dv)(t)
                    );
                    let i = {
                      type: 3,
                      chainId: N(e[0], "chainId"),
                      nonce: I(e[1], "nonce"),
                      maxPriorityFeePerGas: N(e[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: N(e[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: N(e[4], "gasLimit"),
                      to: x(e[5]),
                      value: N(e[6], "value"),
                      data: (0, c.Dv)(e[7]),
                      accessList: A(e[8], "accessList"),
                      maxFeePerBlobGas: N(e[9], "maxFeePerBlobGas"),
                      blobVersionedHashes: e[10],
                    };
                    n && (i.blobs = n),
                      (0, u.en)(
                        null != i.to,
                        `invalid address for transaction type: ${r}`,
                        "data",
                        t
                      ),
                      (0, u.en)(
                        Array.isArray(i.blobVersionedHashes),
                        "invalid blobVersionedHashes: must be an array",
                        "data",
                        t
                      );
                    for (let e = 0; e < i.blobVersionedHashes.length; e++)
                      (0, u.en)(
                        (0, c.A7)(i.blobVersionedHashes[e], 32),
                        `invalid blobVersionedHash at index ${e}: must be length 32`,
                        "data",
                        t
                      );
                    return 11 === e.length || T(i, e.slice(11)), i;
                  })(e)
                );
            }
            (0, u.hu)(
              !1,
              "unsupported transaction type",
              "UNSUPPORTED_OPERATION",
              { operation: "from" }
            );
          }
          let e = new S();
          return (
            null != t.type && (e.type = t.type),
            null != t.to && (e.to = t.to),
            null != t.nonce && (e.nonce = t.nonce),
            null != t.gasLimit && (e.gasLimit = t.gasLimit),
            null != t.gasPrice && (e.gasPrice = t.gasPrice),
            null != t.maxPriorityFeePerGas &&
              (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
            null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
            null != t.maxFeePerBlobGas &&
              (e.maxFeePerBlobGas = t.maxFeePerBlobGas),
            null != t.data && (e.data = t.data),
            null != t.value && (e.value = t.value),
            null != t.chainId && (e.chainId = t.chainId),
            null != t.signature && (e.signature = a.P.from(t.signature)),
            null != t.accessList && (e.accessList = t.accessList),
            null != t.blobVersionedHashes &&
              (e.blobVersionedHashes = t.blobVersionedHashes),
            null != t.kzg && (e.kzg = t.kzg),
            null != t.blobs && (e.blobs = t.blobs),
            null != t.hash &&
              ((0, u.en)(
                e.isSigned(),
                "unsigned transaction cannot define '.hash'",
                "tx",
                t
              ),
              (0, u.en)(e.hash === t.hash, "hash mismatch", "tx", t)),
            null != t.from &&
              ((0, u.en)(
                e.isSigned(),
                "unsigned transaction cannot define '.from'",
                "tx",
                t
              ),
              (0, u.en)(
                e.from.toLowerCase() === (t.from || "").toLowerCase(),
                "from mismatch",
                "tx",
                t
              )),
            e
          );
        }
      }
    },
    9148: function (t, e, r) {
      r.d(e, {
        G: function () {
          return c;
        },
        X: function () {
          return h;
        },
      });
      var n = r(455),
        i = r(36024),
        s = r(12229);
      let a = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        o = null,
        l = BigInt(0),
        u = BigInt(58);
      function h(t) {
        let e = (0, n.Pw)(t),
          r = (0, s.Gh)(e),
          i = "";
        for (; r; ) (i = a[Number(r % u)] + i), (r /= u);
        for (let t = 0; t < e.length && !e[t]; t++) i = a[0] + i;
        return i;
      }
      function c(t) {
        let e = l;
        for (let r = 0; r < t.length; r++)
          (e *= u),
            (e += (function (t) {
              if (null == o) {
                o = {};
                for (let t = 0; t < a.length; t++) o[a[t]] = BigInt(t);
              }
              let e = o[t];
              return (
                (0, i.en)(null != e, "invalid base58 value", "letter", t), e
              );
            })(t[r]));
        return e;
      }
    },
    89746: function (t, e, r) {
      r.d(e, {
        O: function () {
          return l;
        },
      });
      var n = r(455),
        i = r(36024);
      function s(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function a(t, e, r, n) {
        let s = [];
        for (; r < e + 1 + n; ) {
          let a = o(t, r);
          s.push(a.result),
            (r += a.consumed),
            (0, i.hu)(
              r <= e + 1 + n,
              "child data too short",
              "BUFFER_OVERRUN",
              { buffer: t, length: n, offset: e }
            );
        }
        return { consumed: 1 + n, result: s };
      }
      function o(t, e) {
        (0, i.hu)(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
          buffer: t,
          length: 0,
          offset: 1,
        });
        let r = (e) => {
          (0, i.hu)(
            e <= t.length,
            "data short segment too short",
            "BUFFER_OVERRUN",
            { buffer: t, length: t.length, offset: e }
          );
        };
        if (t[e] >= 248) {
          let n = t[e] - 247;
          r(e + 1 + n);
          let i = s(t, e + 1, n);
          return r(e + 1 + n + i), a(t, e, e + 1 + n, n + i);
        }
        if (t[e] >= 192) {
          let n = t[e] - 192;
          return r(e + 1 + n), a(t, e, e + 1, n);
        }
        if (t[e] >= 184) {
          let i = t[e] - 183;
          r(e + 1 + i);
          let a = s(t, e + 1, i);
          r(e + 1 + i + a);
          let o = (0, n.Dv)(t.slice(e + 1 + i, e + 1 + i + a));
          return { consumed: 1 + i + a, result: o };
        }
        if (t[e] >= 128) {
          let i = t[e] - 128;
          r(e + 1 + i);
          let s = (0, n.Dv)(t.slice(e + 1, e + 1 + i));
          return { consumed: 1 + i, result: s };
        }
        return {
          consumed: 1,
          result: (function (t) {
            let e = t.toString(16);
            for (; e.length < 2; ) e = "0" + e;
            return "0x" + e;
          })(t[e]),
        };
      }
      function l(t) {
        let e = (0, n.Pw)(t, "data"),
          r = o(e, 0);
        return (
          (0, i.en)(
            r.consumed === e.length,
            "unexpected junk after rlp payload",
            "data",
            t
          ),
          r.result
        );
      }
    },
    24796: function (t, e, r) {
      r.d(e, {
        e: function () {
          return a;
        },
      });
      var n = r(455);
      function i(t) {
        let e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      let s = "0123456789abcdef";
      function a(t) {
        let e = "0x";
        for (let r of (function t(e) {
          if (Array.isArray(e)) {
            let r = [];
            if (
              (e.forEach(function (e) {
                r = r.concat(t(e));
              }),
              r.length <= 55)
            )
              return r.unshift(192 + r.length), r;
            let n = i(r.length);
            return n.unshift(247 + n.length), n.concat(r);
          }
          let r = Array.prototype.slice.call((0, n.Pw)(e, "object"));
          if (1 === r.length && r[0] <= 127) return r;
          if (r.length <= 55) return r.unshift(128 + r.length), r;
          let s = i(r.length);
          return s.unshift(183 + s.length), s.concat(r);
        })(t))
          e += s[r >> 4] + s[15 & r];
        return e;
      }
    },
    97155: function (t, e, r) {
      r.d(e, {
        XL: function () {
          return h;
        },
        Y0: function () {
          return l;
        },
        ZN: function () {
          return u;
        },
        te: function () {
          return a;
        },
      });
      var n = r(455),
        i = r(36024);
      function s(t, e, r, n, i) {
        if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
          return t;
        }
        return "OVERRUN" === t ? r.length - e - 1 : 0;
      }
      let a = Object.freeze({
        error: function (t, e, r, n, s) {
          (0, i.en)(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", r);
        },
        ignore: s,
        replace: function (t, e, r, n, a) {
          return "OVERLONG" === t
            ? ((0, i.en)(
                "number" == typeof a,
                "invalid bad code point for replacement",
                "badCodepoint",
                a
              ),
              n.push(a),
              0)
            : (n.push(65533), s(t, e, r, n, a));
        },
      });
      function o(t, e) {
        null == e && (e = a.error);
        let r = (0, n.Pw)(t, "bytes"),
          i = [],
          s = 0;
        for (; s < r.length; ) {
          let t = r[s++];
          if (t >> 7 == 0) {
            i.push(t);
            continue;
          }
          let n = null,
            a = null;
          if ((224 & t) == 192) (n = 1), (a = 127);
          else if ((240 & t) == 224) (n = 2), (a = 2047);
          else if ((248 & t) == 240) (n = 3), (a = 65535);
          else {
            (192 & t) == 128
              ? (s += e("UNEXPECTED_CONTINUE", s - 1, r, i))
              : (s += e("BAD_PREFIX", s - 1, r, i));
            continue;
          }
          if (s - 1 + n >= r.length) {
            s += e("OVERRUN", s - 1, r, i);
            continue;
          }
          let o = t & ((1 << (8 - n - 1)) - 1);
          for (let t = 0; t < n; t++) {
            let t = r[s];
            if ((192 & t) != 128) {
              (s += e("MISSING_CONTINUE", s, r, i)), (o = null);
              break;
            }
            (o = (o << 6) | (63 & t)), s++;
          }
          if (null !== o) {
            if (o > 1114111) {
              s += e("OUT_OF_RANGE", s - 1 - n, r, i, o);
              continue;
            }
            if (o >= 55296 && o <= 57343) {
              s += e("UTF16_SURROGATE", s - 1 - n, r, i, o);
              continue;
            }
            if (o <= a) {
              s += e("OVERLONG", s - 1 - n, r, i, o);
              continue;
            }
            i.push(o);
          }
        }
        return i;
      }
      function l(t, e) {
        (0, i.en)("string" == typeof t, "invalid string value", "str", t),
          null != e && ((0, i.fA)(e), (t = t.normalize(e)));
        let r = [];
        for (let e = 0; e < t.length; e++) {
          let n = t.charCodeAt(e);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            e++;
            let s = t.charCodeAt(e);
            (0, i.en)(
              e < t.length && (64512 & s) == 56320,
              "invalid surrogate pair",
              "str",
              t
            );
            let a = 65536 + ((1023 & n) << 10) + (1023 & s);
            r.push((a >> 18) | 240),
              r.push(((a >> 12) & 63) | 128),
              r.push(((a >> 6) & 63) | 128),
              r.push((63 & a) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return new Uint8Array(r);
      }
      function u(t, e) {
        return o(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : String.fromCharCode(
                  (((t -= 65536) >> 10) & 1023) + 55296,
                  (1023 & t) + 56320
                )
          )
          .join("");
      }
      function h(t, e) {
        return o(l(t, e));
      }
    },
    6301: function (t, e, r) {
      r.d(e, {
        E: function () {
          return i;
        },
      });
      var n = r(455);
      function i(t) {
        let e = (0, n.Pw)(t, "randomBytes");
        (e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128);
        let r = (0, n.Dv)(e);
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join("-");
      }
    },
    82477: function (t, e, r) {
      r.d(e, {
        c: function () {
          return d;
        },
      });
      var n = r(79554),
        i = r(5556),
        s = r(69576),
        a = r(31386),
        o = r(16396),
        l = r(54101),
        u = r(71205),
        h = r(45250),
        c = r(36024),
        f = r(5857);
      class d extends o.g {
        address;
        #S;
        constructor(t, e) {
          super(e),
            (0, c.en)(
              t && "function" == typeof t.sign,
              "invalid private key",
              "privateKey",
              "[ REDACTED ]"
            ),
            (this.#S = t);
          let r = (0, u.d)(this.signingKey.publicKey);
          (0, f.h)(this, { address: r });
        }
        get signingKey() {
          return this.#S;
        }
        get privateKey() {
          return this.signingKey.privateKey;
        }
        async getAddress() {
          return this.address;
        }
        connect(t) {
          return new d(this.#S, t);
        }
        async signTransaction(t) {
          t = (0, l.kK)(t);
          let { to: e, from: r } = await (0, f.m)({
            to: t.to ? (0, n.ru)(t.to, this.provider) : void 0,
            from: t.from ? (0, n.ru)(t.from, this.provider) : void 0,
          });
          null != e && (t.to = e),
            null != r && (t.from = r),
            null != t.from &&
              ((0, c.en)(
                (0, i.K)(t.from) === this.address,
                "transaction from address mismatch",
                "tx.from",
                t.from
              ),
              delete t.from);
          let s = h.Y.from(t);
          return (
            (s.signature = this.signingKey.sign(s.unsignedHash)), s.serialized
          );
        }
        async signMessage(t) {
          return this.signMessageSync(t);
        }
        signMessageSync(t) {
          return this.signingKey.sign((0, s.r)(t)).serialized;
        }
        async signTypedData(t, e, r) {
          let n = await a.E.resolveNames(t, e, r, async (t) => {
            (0, c.hu)(
              null != this.provider,
              "cannot resolve ENS names without a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "resolveName", info: { name: t } }
            );
            let e = await this.provider.resolveName(t);
            return (
              (0, c.hu)(
                null != e,
                "unconfigured ENS name",
                "UNCONFIGURED_NAME",
                { value: t }
              ),
              e
            );
          });
          return this.signingKey.sign(a.E.hash(n.domain, e, n.value))
            .serialized;
        }
      }
    },
    82824: function (t, e, r) {
      r.d(e, {
        Y7: function () {
          return R;
        },
        cD: function () {
          return w;
        },
        gk: function () {
          return O;
        },
        ny: function () {
          return T;
        },
        oN: function () {
          return S;
        },
      });
      var n = r(82258),
        i = r(62102),
        s = r(57462),
        a = r(90481),
        o = r(44096),
        l = r(16396),
        u = r(71205),
        h = r(455),
        c = r(9148),
        f = r(36024),
        d = r(5857),
        p = r(12229),
        g = r(14120),
        y = r(82477),
        m = r(85073),
        b = r(31654);
      let w = "m/44'/60'/0'/0/0",
        v = new Uint8Array([
          66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100,
        ]),
        P = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        );
      function E(t, e) {
        let r = "";
        for (; t; )
          (r = "0123456789abcdef"[t % 16] + r), (t = Math.trunc(t / 16));
        for (; r.length < 2 * e; ) r = "0" + r;
        return "0x" + r;
      }
      function x(t) {
        let e = (0, h.Pw)(t),
          r = (0, h.QB)((0, n.J)((0, n.J)(e)), 0, 4),
          i = (0, h.zo)([e, r]);
        return (0, c.X)(i);
      }
      let A = {};
      function I(t, e, r, n) {
        let s = new Uint8Array(37);
        2147483648 & t
          ? ((0, f.hu)(
              null != n,
              "cannot derive child of neutered node",
              "UNSUPPORTED_OPERATION",
              { operation: "deriveChild" }
            ),
            s.set((0, h.Pw)(n), 1))
          : s.set((0, h.Pw)(r));
        for (let e = 24; e >= 0; e -= 8)
          s[33 + (e >> 3)] = (t >> (24 - e)) & 255;
        let a = (0, h.Pw)((0, i.G)("sha512", e, s));
        return { IL: a.slice(0, 32), IR: a.slice(32) };
      }
      function N(t, e) {
        let r = e.split("/");
        (0, f.en)(r.length > 0, "invalid path", "path", e),
          "m" === r[0] &&
            ((0, f.en)(
              0 === t.depth,
              `cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth ${t.depth}`,
              "path",
              e
            ),
            r.shift());
        let n = t;
        for (let t = 0; t < r.length; t++) {
          let e = r[t];
          if (e.match(/^[0-9]+'$/)) {
            let r = parseInt(e.substring(0, e.length - 1));
            (0, f.en)(r < 2147483648, "invalid path index", `path[${t}]`, e),
              (n = n.deriveChild(2147483648 + r));
          } else if (e.match(/^[0-9]+$/)) {
            let r = parseInt(e);
            (0, f.en)(r < 2147483648, "invalid path index", `path[${t}]`, e),
              (n = n.deriveChild(r));
          } else (0, f.en)(!1, "invalid path component", `path[${t}]`, e);
        }
        return n;
      }
      class O extends y.c {
        publicKey;
        fingerprint;
        parentFingerprint;
        mnemonic;
        chainCode;
        path;
        index;
        depth;
        constructor(t, e, r, i, a, o, l, u, c) {
          super(e, c),
            (0, f.NK)(t, A, "HDNodeWallet"),
            (0, d.h)(this, { publicKey: e.compressedPublicKey });
          let p = (0, h.QB)((0, s.b)((0, n.J)(this.publicKey)), 0, 4);
          (0, d.h)(this, {
            parentFingerprint: r,
            fingerprint: p,
            chainCode: i,
            path: a,
            index: o,
            depth: l,
          }),
            (0, d.h)(this, { mnemonic: u });
        }
        connect(t) {
          return new O(
            A,
            this.signingKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.mnemonic,
            t
          );
        }
        #k() {
          let t = { address: this.address, privateKey: this.privateKey },
            e = this.mnemonic;
          return (
            this.path &&
              e &&
              "en" === e.wordlist.locale &&
              "" === e.password &&
              (t.mnemonic = {
                path: this.path,
                locale: "en",
                entropy: e.entropy,
              }),
            t
          );
        }
        async encrypt(t, e) {
          return await (0, b.BZ)(this.#k(), t, { progressCallback: e });
        }
        encryptSync(t) {
          return (0, b.B7)(this.#k(), t);
        }
        get extendedKey() {
          return (
            (0, f.hu)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" }
            ),
            x(
              (0, h.zo)([
                "0x0488ADE4",
                E(this.depth, 1),
                this.parentFingerprint,
                E(this.index, 4),
                this.chainCode,
                (0, h.zo)(["0x00", this.privateKey]),
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        neuter() {
          return new R(
            A,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.provider
          );
        }
        deriveChild(t) {
          let e = (0, p.Dx)(t, "index");
          (0, f.en)(e <= 4294967295, "invalid index", "index", e);
          let r = this.path;
          r && ((r += "/" + (2147483647 & e)), 2147483648 & e && (r += "'"));
          let { IR: n, IL: i } = I(
            e,
            this.chainCode,
            this.publicKey,
            this.privateKey
          );
          return new O(
            A,
            new a.E(
              (0, p.m9)(((0, p.Gh)(i) + BigInt(this.privateKey)) % P, 32)
            ),
            this.fingerprint,
            (0, h.Dv)(n),
            r,
            e,
            this.depth + 1,
            this.mnemonic,
            this.provider
          );
        }
        derivePath(t) {
          return N(this, t);
        }
        static #B(t, e) {
          (0, f.en)((0, h.Zq)(t), "invalid seed", "seed", "[REDACTED]");
          let r = (0, h.Pw)(t, "seed");
          (0, f.en)(
            r.length >= 16 && r.length <= 64,
            "invalid seed",
            "seed",
            "[REDACTED]"
          );
          let n = (0, h.Pw)((0, i.G)("sha512", v, r));
          return new O(
            A,
            new a.E((0, h.Dv)(n.slice(0, 32))),
            "0x00000000",
            (0, h.Dv)(n.slice(32)),
            "m",
            0,
            0,
            e,
            null
          );
        }
        static fromExtendedKey(t) {
          let e = (0, p.ot)((0, c.G)(t));
          (0, f.en)(
            82 === e.length || x(e.slice(0, 78)) === t,
            "invalid extended key",
            "extendedKey",
            "[ REDACTED ]"
          );
          let r = e[4],
            n = (0, h.Dv)(e.slice(5, 9)),
            i = parseInt((0, h.Dv)(e.slice(9, 13)).substring(2), 16),
            s = (0, h.Dv)(e.slice(13, 45)),
            o = e.slice(45, 78);
          switch ((0, h.Dv)(e.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf": {
              let t = (0, h.Dv)(o);
              return new R(A, (0, u.d)(t), t, n, s, null, i, r, null);
            }
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== o[0]) break;
              return new O(
                A,
                new a.E(o.slice(1)),
                n,
                s,
                null,
                i,
                r,
                null,
                null
              );
          }
          (0, f.en)(
            !1,
            "invalid extended key prefix",
            "extendedKey",
            "[ REDACTED ]"
          );
        }
        static createRandom(t, e, r) {
          null == t && (t = ""),
            null == e && (e = w),
            null == r && (r = g.d.wordlist());
          let n = m.t.fromEntropy((0, o.O)(16), t, r);
          return O.#B(n.computeSeed(), n).derivePath(e);
        }
        static fromMnemonic(t, e) {
          return e || (e = w), O.#B(t.computeSeed(), t).derivePath(e);
        }
        static fromPhrase(t, e, r, n) {
          null == e && (e = ""),
            null == r && (r = w),
            null == n && (n = g.d.wordlist());
          let i = m.t.fromPhrase(t, e, n);
          return O.#B(i.computeSeed(), i).derivePath(r);
        }
        static fromSeed(t) {
          return O.#B(t, null);
        }
      }
      class R extends l.b {
        publicKey;
        fingerprint;
        parentFingerprint;
        chainCode;
        path;
        index;
        depth;
        constructor(t, e, r, i, a, o, l, u, c) {
          super(e, c),
            (0, f.NK)(t, A, "HDNodeVoidWallet"),
            (0, d.h)(this, { publicKey: r });
          let p = (0, h.QB)((0, s.b)((0, n.J)(r)), 0, 4);
          (0, d.h)(this, {
            publicKey: r,
            fingerprint: p,
            parentFingerprint: i,
            chainCode: a,
            path: o,
            index: l,
            depth: u,
          });
        }
        connect(t) {
          return new R(
            A,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            t
          );
        }
        get extendedKey() {
          return (
            (0, f.hu)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" }
            ),
            x(
              (0, h.zo)([
                "0x0488B21E",
                E(this.depth, 1),
                this.parentFingerprint,
                E(this.index, 4),
                this.chainCode,
                this.publicKey,
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        deriveChild(t) {
          let e = (0, p.Dx)(t, "index");
          (0, f.en)(e <= 4294967295, "invalid index", "index", e);
          let r = this.path;
          r && ((r += "/" + (2147483647 & e)), 2147483648 & e && (r += "'"));
          let { IR: n, IL: i } = I(e, this.chainCode, this.publicKey, null),
            s = a.E.addPoints(i, this.publicKey, !0);
          return new R(
            A,
            (0, u.d)(s),
            s,
            this.fingerprint,
            (0, h.Dv)(n),
            r,
            e,
            this.depth + 1,
            this.provider
          );
        }
        derivePath(t) {
          return N(this, t);
        }
      }
      function T(t) {
        let e = (0, p.Dx)(t, "index");
        return (
          (0, f.en)(
            e >= 0 && e < 2147483648,
            "invalid account index",
            "index",
            e
          ),
          `m/44'/60'/${e}'/0/0`
        );
      }
      function S(t) {
        let e = (0, p.Dx)(t, "index");
        return (
          (0, f.en)(
            e >= 0 && e < 2147483648,
            "invalid account index",
            "index",
            e
          ),
          `m/44'/60'/0'/0/${e}`
        );
      }
    },
    4767: function (t, e, r) {
      r.d(e, {
        F: function () {
          return c;
        },
        b: function () {
          return h;
        },
      });
      var n = r(18637),
        i = r(5556),
        s = r(94969),
        a = r(32186),
        o = r(36024),
        l = r(455),
        u = r(55006);
      function h(t) {
        try {
          if (JSON.parse(t).encseed) return !0;
        } catch (t) {}
        return !1;
      }
      function c(t, e) {
        let r = JSON.parse(t),
          h = (0, u.Ij)(e),
          c = (0, i.K)((0, u.ZA)(r, "ethaddr:string!")),
          f = (0, u.p3)((0, u.ZA)(r, "encseed:string!"));
        (0, o.en)(f && f.length % 16 == 0, "invalid encseed", "json", t);
        let d = (0, l.Pw)((0, s.n)(h, h, 2e3, 32, "sha256")).slice(0, 16),
          p = f.slice(0, 16),
          g = f.slice(16),
          y = new n.nq(d, p),
          m = (0, n.lI)((0, l.Pw)(y.decrypt(g))),
          b = "";
        for (let t = 0; t < m.length; t++) b += String.fromCharCode(m[t]);
        return { address: c, privateKey: (0, a.id)(b) };
      }
    },
    31654: function (t, e, r) {
      r.d(e, {
        B7: function () {
          return A;
        },
        BZ: function () {
          return I;
        },
        D_: function () {
          return y;
        },
        Y0: function () {
          return P;
        },
        zy: function () {
          return w;
        },
      });
      var n = r(18637),
        i = r(5556),
        s = r(92314),
        a = r(94969),
        o = r(96126),
        l = r(44096),
        u = r(71205),
        h = r(455),
        c = r(36024),
        f = r(6301),
        d = r(55006),
        p = r(90742);
      let g = "m/44'/60'/0'/0/0";
      function y(t) {
        try {
          let e = JSON.parse(t),
            r = null != e.version ? parseInt(e.version) : 0;
          if (3 === r) return !0;
        } catch (t) {}
        return !1;
      }
      function m(t, e) {
        let r = (0, h.Pw)(e),
          a = (0, d.ZA)(t, "crypto.ciphertext:data!"),
          o = (0, h.Dv)((0, s.w)((0, h.zo)([r.slice(16, 32), a]))).substring(2);
        (0, c.en)(
          o === (0, d.ZA)(t, "crypto.mac:string!").toLowerCase(),
          "incorrect password",
          "password",
          "[ REDACTED ]"
        );
        let l = (function (t, e, r) {
            if ("aes-128-ctr" === (0, d.ZA)(t, "crypto.cipher:string")) {
              let i = (0, d.ZA)(t, "crypto.cipherparams.iv:data!"),
                s = new n.MH(e, i);
              return (0, h.Dv)(s.decrypt(r));
            }
            (0, c.hu)(!1, "unsupported cipher", "UNSUPPORTED_OPERATION", {
              operation: "decrypt",
            });
          })(t, r.slice(0, 16), a),
          f = (0, u.d)(l);
        if (t.address) {
          let e = t.address.toLowerCase();
          e.startsWith("0x") || (e = "0x" + e),
            (0, c.en)(
              (0, i.K)(e) === f,
              "keystore address/privateKey mismatch",
              "address",
              t.address
            );
        }
        let p = { address: f, privateKey: l };
        if ("0.1" === (0, d.ZA)(t, "x-ethers.version:string")) {
          let e = r.slice(32, 64),
            i = (0, d.ZA)(t, "x-ethers.mnemonicCiphertext:data!"),
            s = (0, d.ZA)(t, "x-ethers.mnemonicCounter:data!"),
            a = new n.MH(e, s);
          p.mnemonic = {
            path: (0, d.ZA)(t, "x-ethers.path:string") || g,
            locale: (0, d.ZA)(t, "x-ethers.locale:string") || "en",
            entropy: (0, h.Dv)((0, h.Pw)(a.decrypt(i))),
          };
        }
        return p;
      }
      function b(t) {
        let e = (0, d.ZA)(t, "crypto.kdf:string");
        if (e && "string" == typeof e) {
          if ("scrypt" === e.toLowerCase()) {
            let r = (0, d.ZA)(t, "crypto.kdfparams.salt:data!"),
              n = (0, d.ZA)(t, "crypto.kdfparams.n:int!"),
              i = (0, d.ZA)(t, "crypto.kdfparams.r:int!"),
              s = (0, d.ZA)(t, "crypto.kdfparams.p:int!");
            (0, c.en)(n > 0 && (n & (n - 1)) == 0, "invalid kdf.N", "kdf.N", n),
              (0, c.en)(i > 0 && s > 0, "invalid kdf", "kdf", e);
            let a = (0, d.ZA)(t, "crypto.kdfparams.dklen:int!");
            return (
              (0, c.en)(32 === a, "invalid kdf.dklen", "kdf.dflen", a),
              { name: "scrypt", salt: r, N: n, r: i, p: s, dkLen: 64 }
            );
          }
          if ("pbkdf2" === e.toLowerCase()) {
            let e = (0, d.ZA)(t, "crypto.kdfparams.salt:data!"),
              r = (0, d.ZA)(t, "crypto.kdfparams.prf:string!"),
              n = r.split("-").pop();
            (0, c.en)(
              "sha256" === n || "sha512" === n,
              "invalid kdf.pdf",
              "kdf.pdf",
              r
            );
            let i = (0, d.ZA)(t, "crypto.kdfparams.c:int!"),
              s = (0, d.ZA)(t, "crypto.kdfparams.dklen:int!");
            return (
              (0, c.en)(32 === s, "invalid kdf.dklen", "kdf.dklen", s),
              { name: "pbkdf2", salt: e, count: i, dkLen: s, algorithm: n }
            );
          }
        }
        (0, c.en)(!1, "unsupported key-derivation function", "kdf", e);
      }
      function w(t, e) {
        let r = JSON.parse(t),
          n = (0, d.Ij)(e),
          i = b(r);
        if ("pbkdf2" === i.name) {
          let { salt: t, count: e, dkLen: s, algorithm: o } = i;
          return m(r, (0, a.n)(n, t, e, s, o));
        }
        (0, c.hu)("scrypt" === i.name, "cannot be reached", "UNKNOWN_ERROR", {
          params: i,
        });
        let { salt: s, N: l, r: u, p: h, dkLen: f } = i;
        return m(r, (0, o.g)(n, s, l, u, h, f));
      }
      function v(t) {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      }
      async function P(t, e, r) {
        let n = JSON.parse(t),
          i = (0, d.Ij)(e),
          s = b(n);
        if ("pbkdf2" === s.name) {
          r && (r(0), await v(0));
          let { salt: t, count: e, dkLen: o, algorithm: l } = s,
            u = (0, a.n)(i, t, e, o, l);
          return r && (r(1), await v(0)), m(n, u);
        }
        (0, c.hu)("scrypt" === s.name, "cannot be reached", "UNKNOWN_ERROR", {
          params: s,
        });
        let { salt: l, N: u, r: h, p: f, dkLen: p } = s;
        return m(n, await (0, o.f)(i, l, u, h, f, p, r));
      }
      function E(t) {
        let e =
            null != t.salt ? (0, h.Pw)(t.salt, "options.salt") : (0, l.O)(32),
          r = 131072,
          n = 8,
          i = 1;
        return (
          t.scrypt &&
            (t.scrypt.N && (r = t.scrypt.N),
            t.scrypt.r && (n = t.scrypt.r),
            t.scrypt.p && (i = t.scrypt.p)),
          (0, c.en)(
            "number" == typeof r &&
              r > 0 &&
              Number.isSafeInteger(r) &&
              (BigInt(r) & BigInt(r - 1)) === BigInt(0),
            "invalid scrypt N parameter",
            "options.N",
            r
          ),
          (0, c.en)(
            "number" == typeof n && n > 0 && Number.isSafeInteger(n),
            "invalid scrypt r parameter",
            "options.r",
            n
          ),
          (0, c.en)(
            "number" == typeof i && i > 0 && Number.isSafeInteger(i),
            "invalid scrypt p parameter",
            "options.p",
            i
          ),
          { name: "scrypt", dkLen: 32, salt: e, N: r, r: n, p: i }
        );
      }
      function x(t, e, r, i) {
        let a = (0, h.Pw)(r.privateKey, "privateKey"),
          o = null != i.iv ? (0, h.Pw)(i.iv, "options.iv") : (0, l.O)(16);
        (0, c.en)(
          16 === o.length,
          "invalid options.iv length",
          "options.iv",
          i.iv
        );
        let u =
          null != i.uuid ? (0, h.Pw)(i.uuid, "options.uuid") : (0, l.O)(16);
        (0, c.en)(
          16 === u.length,
          "invalid options.uuid length",
          "options.uuid",
          i.iv
        );
        let y = t.slice(0, 16),
          m = t.slice(16, 32),
          b = new n.MH(y, o),
          w = (0, h.Pw)(b.encrypt(a)),
          v = (0, s.w)((0, h.zo)([m, w])),
          P = {
            address: r.address.substring(2).toLowerCase(),
            id: (0, f.E)(u),
            version: 3,
            Crypto: {
              cipher: "aes-128-ctr",
              cipherparams: { iv: (0, h.Dv)(o).substring(2) },
              ciphertext: (0, h.Dv)(w).substring(2),
              kdf: "scrypt",
              kdfparams: {
                salt: (0, h.Dv)(e.salt).substring(2),
                n: e.N,
                dklen: 32,
                p: e.p,
                r: e.r,
              },
              mac: v.substring(2),
            },
          };
        if (r.mnemonic) {
          let e = null != i.client ? i.client : `ethers/${p.i}`,
            s = r.mnemonic.path || g,
            a = r.mnemonic.locale || "en",
            o = t.slice(32, 64),
            u = (0, h.Pw)(r.mnemonic.entropy, "account.mnemonic.entropy"),
            c = (0, l.O)(16),
            f = new n.MH(o, c),
            y = (0, h.Pw)(f.encrypt(u)),
            m = new Date(),
            b =
              "UTC--" +
              (m.getUTCFullYear() +
                "-" +
                (0, d.VP)(m.getUTCMonth() + 1, 2) +
                "-" +
                (0, d.VP)(m.getUTCDate(), 2) +
                "T" +
                (0, d.VP)(m.getUTCHours(), 2) +
                "-" +
                (0, d.VP)(m.getUTCMinutes(), 2) +
                "-") +
              (0, d.VP)(m.getUTCSeconds(), 2) +
              ".0Z--" +
              P.address;
          P["x-ethers"] = {
            client: e,
            gethFilename: b,
            path: s,
            locale: a,
            mnemonicCounter: (0, h.Dv)(c).substring(2),
            mnemonicCiphertext: (0, h.Dv)(y).substring(2),
            version: "0.1",
          };
        }
        return JSON.stringify(P);
      }
      function A(t, e, r) {
        null == r && (r = {});
        let n = (0, d.Ij)(e),
          i = E(r),
          s = (0, o.g)(n, i.salt, i.N, i.r, i.p, 64);
        return x((0, h.Pw)(s), i, t, r);
      }
      async function I(t, e, r) {
        null == r && (r = {});
        let n = (0, d.Ij)(e),
          i = E(r),
          s = await (0, o.f)(n, i.salt, i.N, i.r, i.p, 64, r.progressCallback);
        return x((0, h.Pw)(s), i, t, r);
      }
    },
    85073: function (t, e, r) {
      r.d(e, {
        t: function () {
          return p;
        },
      });
      var n = r(82258),
        i = r(94969),
        s = r(36024),
        a = r(455),
        o = r(5857),
        l = r(97155),
        u = r(14120);
      function h(t) {
        return (((1 << t) - 1) << (8 - t)) & 255;
      }
      function c(t, e) {
        (0, s.fA)("NFKD"), null == e && (e = u.d.wordlist());
        let r = e.split(t);
        (0, s.en)(
          r.length % 3 == 0 && r.length >= 12 && r.length <= 24,
          "invalid mnemonic length",
          "mnemonic",
          "[ REDACTED ]"
        );
        let i = new Uint8Array(Math.ceil((11 * r.length) / 8)),
          o = 0;
        for (let t = 0; t < r.length; t++) {
          let n = e.getWordIndex(r[t].normalize("NFKD"));
          (0, s.en)(
            n >= 0,
            `invalid mnemonic word at index ${t}`,
            "mnemonic",
            "[ REDACTED ]"
          );
          for (let t = 0; t < 11; t++)
            n & (1 << (10 - t)) && (i[o >> 3] |= 1 << (7 - (o % 8))), o++;
        }
        let l = (32 * r.length) / 3,
          c = h(r.length / 3),
          f = (0, a.Pw)((0, n.J)(i.slice(0, l / 8)))[0] & c;
        return (
          (0, s.en)(
            f === (i[i.length - 1] & c),
            "invalid mnemonic checksum",
            "mnemonic",
            "[ REDACTED ]"
          ),
          (0, a.Dv)(i.slice(0, l / 8))
        );
      }
      function f(t, e) {
        (0, s.en)(
          t.length % 4 == 0 && t.length >= 16 && t.length <= 32,
          "invalid entropy size",
          "entropy",
          "[ REDACTED ]"
        ),
          null == e && (e = u.d.wordlist());
        let r = [0],
          i = 11;
        for (let e = 0; e < t.length; e++)
          i > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= t[e]), (i -= 8))
            : ((r[r.length - 1] <<= i),
              (r[r.length - 1] |= t[e] >> (8 - i)),
              r.push(t[e] & (((1 << (8 - i)) - 1) & 255)),
              (i += 3));
        let a = t.length / 4,
          o = parseInt((0, n.J)(t).substring(2, 4), 16) & h(a);
        return (
          (r[r.length - 1] <<= a),
          (r[r.length - 1] |= o >> (8 - a)),
          e.join(r.map((t) => e.getWord(t)))
        );
      }
      let d = {};
      class p {
        phrase;
        password;
        wordlist;
        entropy;
        constructor(t, e, r, n, i) {
          null == n && (n = ""),
            null == i && (i = u.d.wordlist()),
            (0, s.NK)(t, d, "Mnemonic"),
            (0, o.h)(this, { phrase: r, password: n, wordlist: i, entropy: e });
        }
        computeSeed() {
          let t = (0, l.Y0)("mnemonic" + this.password, "NFKD");
          return (0, i.n)(
            (0, l.Y0)(this.phrase, "NFKD"),
            t,
            2048,
            64,
            "sha512"
          );
        }
        static fromPhrase(t, e, r) {
          let n = c(t, r);
          return (t = f((0, a.Pw)(n), r)), new p(d, n, t, e, r);
        }
        static fromEntropy(t, e, r) {
          let n = (0, a.Pw)(t, "entropy"),
            i = f(n, r);
          return new p(d, (0, a.Dv)(n), i, e, r);
        }
        static entropyToPhrase(t, e) {
          return f((0, a.Pw)(t, "entropy"), e);
        }
        static phraseToEntropy(t, e) {
          return c(t, e);
        }
        static isValidMnemonic(t, e) {
          try {
            return c(t, e), !0;
          } catch (t) {}
          return !1;
        }
      }
    },
    55006: function (t, e, r) {
      r.d(e, {
        Ij: function () {
          return l;
        },
        VP: function () {
          return o;
        },
        ZA: function () {
          return u;
        },
        p3: function () {
          return a;
        },
      });
      var n = r(455),
        i = r(97155),
        s = r(36024);
      function a(t) {
        return (
          "string" != typeof t || t.startsWith("0x") || (t = "0x" + t),
          (0, n.h_)(t)
        );
      }
      function o(t, e) {
        for (t = String(t); t.length < e; ) t = "0" + t;
        return t;
      }
      function l(t) {
        return "string" == typeof t ? (0, i.Y0)(t, "NFKC") : (0, n.h_)(t);
      }
      function u(t, e) {
        let r = e.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
        (0, s.en)(null != r, "invalid path", "path", e);
        let n = r[1],
          i = r[3],
          o = "!" === r[4],
          l = t;
        for (let t of n.toLowerCase().split(".")) {
          if (Array.isArray(l)) {
            if (!t.match(/^[0-9]+$/)) break;
            l = l[parseInt(t)];
          } else if ("object" == typeof l) {
            let e = null;
            for (let r in l)
              if (r.toLowerCase() === t) {
                e = l[r];
                break;
              }
            l = e;
          } else l = null;
          if (null == l) break;
        }
        if (
          ((0, s.en)(!o || null != l, "missing required value", "path", n),
          i && null != l)
        ) {
          if ("int" === i) {
            if ("string" == typeof l && l.match(/^-?[0-9]+$/))
              return parseInt(l);
            if (Number.isSafeInteger(l)) return l;
          }
          if ("number" === i && "string" == typeof l && l.match(/^-?[0-9.]*$/))
            return parseFloat(l);
          if ("data" === i && "string" == typeof l) return a(l);
          if (("array" === i && Array.isArray(l)) || i === typeof l) return l;
          (0, s.en)(!1, `wrong type found for ${i} `, "path", n);
        }
        return l;
      }
    },
    41746: function (t, e, r) {
      r.d(e, {
        w: function () {
          return c;
        },
      });
      var n = r(90481),
        i = r(36024),
        s = r(82477),
        a = r(82824),
        o = r(4767),
        l = r(31654),
        u = r(85073);
      function h(t) {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      }
      class c extends s.c {
        constructor(t, e) {
          "string" != typeof t || t.startsWith("0x") || (t = "0x" + t),
            super("string" == typeof t ? new n.E(t) : t, e);
        }
        connect(t) {
          return new c(this.signingKey, t);
        }
        async encrypt(t, e) {
          let r = { address: this.address, privateKey: this.privateKey };
          return await (0, l.BZ)(r, t, { progressCallback: e });
        }
        encryptSync(t) {
          let e = { address: this.address, privateKey: this.privateKey };
          return (0, l.B7)(e, t);
        }
        static #U(t) {
          if (
            ((0, i.en)(t, "invalid JSON wallet", "json", "[ REDACTED ]"),
            "mnemonic" in t && t.mnemonic && "en" === t.mnemonic.locale)
          ) {
            let e = u.t.fromEntropy(t.mnemonic.entropy),
              r = a.gk.fromMnemonic(e, t.mnemonic.path);
            if (r.address === t.address && r.privateKey === t.privateKey)
              return r;
            console.log(
              "WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key"
            );
          }
          let e = new c(t.privateKey);
          return (
            (0, i.en)(
              e.address === t.address,
              "address/privateKey mismatch",
              "json",
              "[ REDACTED ]"
            ),
            e
          );
        }
        static async fromEncryptedJson(t, e, r) {
          let n = null;
          return (
            (0, l.D_)(t)
              ? (n = await (0, l.Y0)(t, e, r))
              : (0, o.b)(t) &&
                (r && (r(0), await h(0)),
                (n = (0, o.F)(t, e)),
                r && (r(1), await h(0))),
            c.#U(n)
          );
        }
        static fromEncryptedJsonSync(t, e) {
          let r = null;
          return (
            (0, l.D_)(t)
              ? (r = (0, l.zy)(t, e))
              : (0, o.b)(t)
              ? (r = (0, o.F)(t, e))
              : (0, i.en)(!1, "invalid JSON wallet", "json", "[ REDACTED ]"),
            c.#U(r)
          );
        }
        static createRandom(t) {
          let e = a.gk.createRandom();
          return t ? e.connect(t) : e;
        }
        static fromPhrase(t, e) {
          let r = a.gk.fromPhrase(t);
          return e ? r.connect(e) : r;
        }
      }
    },
    801: function (t, e, r) {
      r.d(e, {
        _: function () {
          return o;
        },
      });
      var n = r(36024);
      let i = " !#$%&'()*+,-./<=>?@[]^_`{|}~",
        s = /^[a-z]*$/i;
      function a(t, e) {
        let r = 97;
        return t.reduce(
          (t, n) => (
            n === e
              ? r++
              : n.match(s)
              ? t.push(String.fromCharCode(r) + n)
              : ((r = 97), t.push(n)),
            t
          ),
          []
        );
      }
      function o(t) {
        return (
          (0, n.en)("0" === t[0], "unsupported auwl data", "data", t),
          (function (t, e) {
            for (let r = i.length - 1; r >= 0; r--)
              t = t.split(i[r]).join(e.substring(2 * r, 2 * r + 2));
            let r = [],
              n = t.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (t, e, n, i) => {
                if (n) for (let t = parseInt(n); t >= 0; t--) r.push(";");
                else r.push(e.toLowerCase());
                return "";
              });
            if (n) throw Error(`leftovers: ${JSON.stringify(n)}`);
            return a(a(r, ";"), ":");
          })(t.substring(1 + 2 * i.length), t.substring(1, 1 + 2 * i.length))
        );
      }
    },
    14120: function (t, e, r) {
      r.d(e, {
        d: function () {
          return s;
        },
      });
      var n = r(62649);
      let i = null;
      class s extends n.e {
        constructor() {
          super(
            "en",
            "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO",
            "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"
          );
        }
        static wordlist() {
          return null == i && (i = new s()), i;
        }
      }
    },
    62649: function (t, e, r) {
      r.d(e, {
        e: function () {
          return o;
        },
      });
      var n = r(32186),
        i = r(36024),
        s = r(801),
        a = r(57033);
      class o extends a.D {
        #g;
        #L;
        constructor(t, e, r) {
          super(t), (this.#g = e), (this.#L = r), (this.#C = null);
        }
        get _data() {
          return this.#g;
        }
        _decodeWords() {
          return (0, s._)(this.#g);
        }
        #C;
        #D() {
          if (null == this.#C) {
            let t = this._decodeWords();
            if ((0, n.id)(t.join("\n") + "\n") !== this.#L)
              throw Error(`BIP39 Wordlist for ${this.locale} FAILED`);
            this.#C = t;
          }
          return this.#C;
        }
        getWord(t) {
          let e = this.#D();
          return (
            (0, i.en)(
              t >= 0 && t < e.length,
              `invalid word index: ${t}`,
              "index",
              t
            ),
            e[t]
          );
        }
        getWordIndex(t) {
          return this.#D().indexOf(t);
        }
      }
    },
    57033: function (t, e, r) {
      r.d(e, {
        D: function () {
          return i;
        },
      });
      var n = r(5857);
      class i {
        locale;
        constructor(t) {
          (0, n.h)(this, { locale: t });
        }
        split(t) {
          return t.toLowerCase().split(/\s+/g);
        }
        join(t) {
          return t.join(" ");
        }
      }
    },
    26678: function (t, e, r) {
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`Wrong positive integer: ${t}`);
      }
      function i(t, ...e) {
        if (!(t instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Expected Uint8Array of length ${e}, not of length=${t.length}`
          );
      }
      function s(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(t.outputLen), n(t.blockLen);
      }
      function a(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function o(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(e, {
        Gg: function () {
          return a;
        },
        J8: function () {
          return o;
        },
        Rx: function () {
          return n;
        },
        aI: function () {
          return i;
        },
        vp: function () {
          return s;
        },
      });
    },
    52625: function (t, e, r) {
      r.d(e, {
        N: function () {
          return s;
        },
      });
      var n = r(26678),
        i = r(43775);
      class s extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.Gg)(this);
          let { view: e, buffer: r, blockLen: s } = this,
            a = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < a; ) {
            let o = Math.min(s - this.pos, a - n);
            if (o === s) {
              let e = (0, i.GL)(t);
              for (; s <= a - n; n += s) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === s && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.Gg)(this), (0, n.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: s, isLE: a } = this,
            { pos: o } = this;
          (e[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > s - o && (this.process(r, 0), (o = 0));
          for (let t = o; t < s; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              s = BigInt(4294967295),
              a = Number((r >> i) & s),
              o = Number(r & s),
              l = n ? 4 : 0,
              u = n ? 0 : 4;
            t.setUint32(e + l, a, n), t.setUint32(e + u, o, n);
          })(r, s - 8, BigInt(8 * this.length), a),
            this.process(r, 0);
          let l = (0, i.GL)(t),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let h = u / 4,
            c = this.get();
          if (h > c.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < h; t++) l.setUint32(4 * t, c[t], a);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (t.length = n),
            (t.pos = a),
            (t.finished = i),
            (t.destroyed = s),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
    },
    79903: function (t, e, r) {
      r.d(e, {
        EP: function () {
          return o;
        },
        SD: function () {
          return u;
        },
        Vl: function () {
          return a;
        },
        gm: function () {
          return l;
        },
        mk: function () {
          return h;
        },
      });
      let n = BigInt(4294967296 - 1),
        i = BigInt(32);
      function s(t, e = !1) {
        return e
          ? { h: Number(t & n), l: Number((t >> i) & n) }
          : { h: 0 | Number((t >> i) & n), l: 0 | Number(t & n) };
      }
      function a(t, e = !1) {
        let r = new Uint32Array(t.length),
          n = new Uint32Array(t.length);
        for (let i = 0; i < t.length; i++) {
          let { h: a, l: o } = s(t[i], e);
          [r[i], n[i]] = [a, o];
        }
        return [r, n];
      }
      let o = (t, e, r) => (t << r) | (e >>> (32 - r)),
        l = (t, e, r) => (e << r) | (t >>> (32 - r)),
        u = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        h = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
      e.ZP = {
        fromBig: s,
        split: a,
        toBig: (t, e) => (BigInt(t >>> 0) << i) | BigInt(e >>> 0),
        shrSH: (t, e, r) => t >>> r,
        shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
        rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
        rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
        rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
        rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
        rotr32H: (t, e) => e,
        rotr32L: (t, e) => t,
        rotlSH: o,
        rotlSL: l,
        rotlBH: u,
        rotlBL: h,
        add: function (t, e, r, n) {
          let i = (e >>> 0) + (n >>> 0);
          return { h: (t + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
        add3H: (t, e, r, n) => (e + r + n + ((t / 4294967296) | 0)) | 0,
        add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (t, e, r, n, i) => (e + r + n + i + ((t / 4294967296) | 0)) | 0,
        add5H: (t, e, r, n, i, s) =>
          (e + r + n + i + s + ((t / 4294967296) | 0)) | 0,
        add5L: (t, e, r, n, i) =>
          (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
    },
    55301: function (t, e, r) {
      r.d(e, {
        b: function () {
          return a;
        },
      });
      var n = r(26678),
        i = r(43775);
      class s extends i.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, n.vp)(t);
          let r = (0, i.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let s = this.blockLen,
            a = new Uint8Array(s);
          a.set(r.length > s ? t.create().update(r).digest() : r);
          for (let t = 0; t < a.length; t++) a[t] ^= 54;
          this.iHash.update(a), (this.oHash = t.create());
          for (let t = 0; t < a.length; t++) a[t] ^= 106;
          this.oHash.update(a), a.fill(0);
        }
        update(t) {
          return (0, n.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, n.Gg)(this),
            (0, n.aI)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = s),
            (t.outputLen = a),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let a = (t, e, r) => new s(t, e).update(r).digest();
      a.create = (t, e) => new s(t, e);
    },
    7147: function (t, e, r) {
      r.d(e, {
        n: function () {
          return a;
        },
      });
      var n = r(26678),
        i = r(55301),
        s = r(43775);
      function a(t, e, r, a) {
        var o;
        let l;
        let {
            c: u,
            dkLen: h,
            DK: c,
            PRF: f,
            PRFSalt: d,
          } = (function (t, e, r, a) {
            (0, n.vp)(t);
            let {
              c: o,
              dkLen: l,
              asyncTick: u,
            } = (0, s.U5)({ dkLen: 32, asyncTick: 10 }, a);
            if (((0, n.Rx)(o), (0, n.Rx)(l), (0, n.Rx)(u), o < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let h = (0, s.O0)(e),
              c = (0, s.O0)(r),
              f = new Uint8Array(l),
              d = i.b.create(t, h),
              p = d._cloneInto().update(c);
            return { c: o, dkLen: l, asyncTick: u, DK: f, PRF: d, PRFSalt: p };
          })(t, e, r, a),
          p = new Uint8Array(4),
          g = (0, s.GL)(p),
          y = new Uint8Array(f.outputLen);
        for (let t = 1, e = 0; e < h; t++, e += f.outputLen) {
          let r = c.subarray(e, e + f.outputLen);
          g.setInt32(0, t, !1),
            (l = d._cloneInto(l)).update(p).digestInto(y),
            r.set(y.subarray(0, r.length));
          for (let t = 1; t < u; t++) {
            f._cloneInto(l).update(y).digestInto(y);
            for (let t = 0; t < r.length; t++) r[t] ^= y[t];
          }
        }
        return (
          (o = l), f.destroy(), d.destroy(), o && o.destroy(), y.fill(0), c
        );
      }
    },
    98610: function (t, e, r) {
      r.d(e, {
        J: function () {
          return c;
        },
      });
      var n = r(52625),
        i = r(43775);
      let s = (t, e, r) => (t & e) ^ (~t & r),
        a = (t, e, r) => (t & e) ^ (t & r) ^ (e & r),
        o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        l = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        u = new Uint32Array(64);
      class h extends n.N {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | l[0]),
            (this.B = 0 | l[1]),
            (this.C = 0 | l[2]),
            (this.D = 0 | l[3]),
            (this.E = 0 | l[4]),
            (this.F = 0 | l[5]),
            (this.G = 0 | l[6]),
            (this.H = 0 | l[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [t, e, r, n, i, s, a, o];
        }
        set(t, e, r, n, i, s, a, o) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) u[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = u[t - 15],
              r = u[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              s = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            u[t] = (s + u[t - 7] + n + u[t - 16]) | 0;
          }
          let { A: r, B: n, C: l, D: h, E: c, F: f, G: d, H: p } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (p +
                  ((0, i.np)(c, 6) ^ (0, i.np)(c, 11) ^ (0, i.np)(c, 25)) +
                  s(c, f, d) +
                  o[t] +
                  u[t]) |
                0,
              g =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  a(r, n, l)) |
                0;
            (p = d),
              (d = f),
              (f = c),
              (c = (h + e) | 0),
              (h = l),
              (l = n),
              (n = r),
              (r = (e + g) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (l = (l + this.C) | 0),
            (h = (h + this.D) | 0),
            (c = (c + this.E) | 0),
            (f = (f + this.F) | 0),
            (d = (d + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, l, h, c, f, d, p);
        }
        roundClean() {
          u.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let c = (0, i.hE)(() => new h());
    },
    43775: function (t, e, r) {
      r.d(e, {
        kb: function () {
          return f;
        },
        oY: function () {
          return u;
        },
        U5: function () {
          return p;
        },
        eV: function () {
          return c;
        },
        GL: function () {
          return a;
        },
        O6: function () {
          return y;
        },
        np: function () {
          return o;
        },
        O0: function () {
          return h;
        },
        Jq: function () {
          return s;
        },
        hE: function () {
          return g;
        },
      });
      let n =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        i = (t) => t instanceof Uint8Array,
        s = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        a = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        o = (t, e) => (t << (32 - e)) | (t >>> e);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      let l = async () => {};
      async function u(t, e, r) {
        let n = Date.now();
        for (let i = 0; i < t; i++) {
          r(i);
          let t = Date.now() - n;
          (t >= 0 && t < e) || (await l(), (n += t));
        }
      }
      function h(t) {
        if (
          ("string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(`utf8ToBytes expected string, got ${typeof t}`);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          !i(t))
        )
          throw Error(`expected Uint8Array, got ${typeof t}`);
        return t;
      }
      function c(...t) {
        let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
          r = 0;
        return (
          t.forEach((t) => {
            if (!i(t)) throw Error("Uint8Array expected");
            e.set(t, r), (r += t.length);
          }),
          e
        );
      }
      class f {
        clone() {
          return this._cloneInto();
        }
      }
      let d = {}.toString;
      function p(t, e) {
        if (void 0 !== e && "[object Object]" !== d.call(e))
          throw Error("Options should be object or undefined");
        return Object.assign(t, e);
      }
      function g(t) {
        let e = (e) => t().update(h(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function y(t = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    18637: function (t, e, r) {
      r.d(e, {
        nq: function () {
          return L;
        },
        MH: function () {
          return G;
        },
        lI: function () {
          return F;
        },
      });
      /*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */ var n,
        i,
        s,
        a,
        o,
        l,
        u,
        h,
        c = function (t, e, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
        },
        f = function (t, e, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        };
      let d = { 16: 10, 24: 12, 32: 14 },
        p = [
          1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
          188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
        ],
        g = [
          99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
          118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156,
          164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241,
          113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226,
          235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179,
          41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190,
          57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2,
          127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182,
          218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196,
          167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136,
          70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92,
          194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
          78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
          166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181,
          102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248,
          152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140,
          161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
        ],
        y = [
          82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
          251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222,
          233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
          250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
          109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164,
          92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94,
          21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10,
          247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
          193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
          151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
          53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
          41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
          198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221,
          168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81,
          127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
          224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
          23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
        ],
        m = [
          3328402341, 4168907908, 4000806809, 4135287693, 4294111757,
          3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241,
          1445669757, 3892248089, 3050821474, 1303096294, 3967186586,
          2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171,
          2387036105, 4226871307, 1101901292, 3017069671, 1604494077,
          1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402,
          3791519004, 1033081774, 1277568618, 1815492186, 2118074177,
          4126668546, 2211236943, 1748251740, 1369810420, 3521504564,
          4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908,
          2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135,
          798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438,
          1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972,
          874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614,
          1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
          1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
          1075847264, 3825007647, 2041688520, 3059440621, 3563743934,
          2378943302, 1740553945, 1916352843, 2487896798, 2555137236,
          2958579944, 2244988746, 3151024235, 3320835882, 1336584933,
          3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663,
          3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106,
          1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413,
          563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573,
          1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300,
          403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436,
          773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572,
          3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905,
          2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882,
          3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493,
          2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571,
          201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935,
          3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010,
          2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682,
          1235855840, 3630984372, 2891339514, 4092916743, 3488279077,
          3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016,
          1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513,
          3421038627, 2715671932, 3899946140, 1042226977, 2521517021,
          1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956,
          3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891,
          1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535,
          664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707,
          2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602,
          3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671,
          1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982,
          3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163,
          2824099068, 1841019862, 739644986,
        ],
        b = [
          2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027,
          2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147,
          434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938,
          1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592,
          3963727277, 1739838676, 4250903202, 3930435503, 3206782108,
          4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059,
          1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980,
          4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049,
          1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536,
          2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848,
          1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793,
          2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018,
          4217086112, 4137964114, 1299594043, 1639438038, 3464344499,
          2068982057, 1054729187, 1901997871, 2534638724, 4121318227,
          1757008337, 0, 750906861, 1614815264, 535035132, 3363418545,
          3988151131, 3201591914, 1183697867, 3647454910, 1265776953,
          3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087,
          3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261,
          3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428,
          3123027871, 3813386408, 4087501137, 4267549603, 3229630528,
          2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548,
          3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083,
          1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855,
          2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534,
          1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144,
          2551808385, 3516813135, 2141445340, 1715741218, 2119445034,
          2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540,
          2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026,
          1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516,
          1570751170, 1857934291, 4014189740, 2797888098, 2822345105,
          2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319,
          3084545389, 2348912013, 1689376213, 3533459022, 3762923945,
          3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810,
          3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758,
          607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877,
          2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234,
          2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067,
          33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753,
          2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800,
          3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444,
          3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045,
          2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245,
          3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313,
          2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766,
        ],
        w = [
          1671808611, 2089089148, 2006576759, 2072901243, 4061003762,
          1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671,
          729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426,
          2191335298, 3376449993, 2106063485, 4195741690, 1508618841,
          1204391495, 4027317232, 2917941677, 3563566036, 2734514082,
          2951366063, 2629772188, 2767672228, 1922491506, 3227229120,
          3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767,
          4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329,
          1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279,
          593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466,
          118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711,
          2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610,
          455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283,
          3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444,
          1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412,
          2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753,
          1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
          4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739,
          2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960,
          1011120188, 2679776671, 2833468328, 1374921297, 2751356323,
          1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005,
          3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895,
          4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324,
          1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711,
          2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699,
          1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154,
          2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740,
          3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546,
          978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276,
          3260915650, 3547250131, 2901361580, 1655096418, 2443721105,
          2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799,
          1840765549, 2374762893, 3580146133, 1322425422, 2850048425,
          1823791212, 1459268694, 4094161908, 3928346602, 1706019429,
          2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469,
          779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072,
          3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315,
          2323976074, 1888542832, 1044544574, 3049550261, 1722469478,
          1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557,
          1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430,
          3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385,
          2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169,
          3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649,
          2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440,
          1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308,
          3151392187, 372911126,
        ],
        v = [
          1667474886, 2088535288, 2004326894, 2071694838, 4075949567,
          1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926,
          724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711,
          2189597983, 3385409673, 2105378810, 4210693615, 1499065266,
          1195886990, 4042263547, 2913856577, 3570689971, 2728590687,
          2947541573, 2627518243, 2762274643, 1920112356, 3233831835,
          3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142,
          4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529,
          1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789,
          589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191,
          117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286,
          2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380,
          454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198,
          3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939,
          1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667,
          2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178,
          1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
          4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214,
          2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760,
          1010582648, 2678045221, 2829640523, 1364325282, 2745433693,
          1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505,
          3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645,
          4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699,
          1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621,
          2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854,
          1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924,
          2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440,
          3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716,
          976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736,
          3267517855, 3553849021, 2897014595, 1650632388, 2442242105,
          2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254,
          1835907034, 2374863873, 3587531953, 1313788572, 2846482505,
          1819063512, 1448540844, 4109633523, 3941213647, 1701162954,
          2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314,
          774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627,
          3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845,
          2324333839, 1886425312, 1044267644, 3048588401, 1718004428,
          1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282,
          1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215,
          3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025,
          2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609,
          3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649,
          2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520,
          1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848,
          3149649517, 370555436,
        ],
        P = [
          1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
          2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485,
          1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703,
          1172967064, 1576976609, 3274667266, 2169303058, 2370213795,
          1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213,
          1484005843, 1239443753, 2395588676, 1975683434, 4102977912,
          2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444,
          1675577880, 3843699074, 2538681184, 1649639237, 2976151520,
          3144396420, 4269907996, 4178062228, 1883793496, 2403728665,
          2497604743, 1383856311, 2876494627, 1917518562, 3810496343,
          1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610,
          599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432,
          1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293,
          2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582,
          3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
          2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
          2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
          2709260871, 2084704233, 4169408201, 0, 159417987, 841739592,
          504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415,
          168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535,
          3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374,
          3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893,
          766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109,
          4144047775, 1551037884, 1147550661, 1543208500, 2336434550,
          3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808,
          2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059,
          3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682,
          1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455,
          3644379585, 2362090238, 2564033334, 2801107407, 2776292904,
          3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698,
          4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924,
          1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923,
          3441850377, 1851332852, 3969562369, 2203032232, 3868552805,
          2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284,
          699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047,
          4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806,
          395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715,
          1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171,
          4211818798, 3009879386, 2463879762, 3910161971, 1842759443,
          2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029,
          3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775,
          1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
          3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
          4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
          3576870512, 1215061108, 3501741890,
        ],
        E = [
          1347548327, 1400783205, 3273267108, 2520393566, 3409685355,
          4045380933, 2880240216, 2471224067, 1428173050, 4138563181,
          2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155,
          1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728,
          2743944855, 3328955385, 3875770207, 2501218972, 3955191162,
          3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409,
          2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132,
          3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975,
          2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428,
          3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120,
          53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122,
          1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468,
          3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033,
          1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602,
          1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868,
          4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618,
          2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166,
          0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663,
          1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604,
          975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021,
          2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560,
          487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081,
          1286567175, 3152976349, 4255350624, 2683765030, 3160175349,
          3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617,
          3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061,
          296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347,
          1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879,
          3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419,
          3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554,
          2607439820, 1649704518, 3270937875, 3901806776, 1580087799,
          4118987695, 3198115200, 2087309459, 2842678573, 3016697106,
          1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472,
          32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392,
          3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259,
          818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840,
          1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904,
          1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889,
          77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242,
          870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476,
          4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235,
          2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891,
          2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253,
          2334669897, 1107234197, 1899603969, 3725069491, 2631447780,
          2422494913, 1635502980, 1893020342, 1950903388, 1120974935,
        ],
        x = [
          2807058932, 1699970625, 2764249623, 1586903591, 1808481195,
          1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228,
          1277555970, 3623636965, 3419915562, 1149249077, 2744104290,
          1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588,
          2544078150, 4190530515, 1608975247, 2627016082, 2062270317,
          1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554,
          2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312,
          984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180,
          2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798,
          4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195,
          3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107,
          2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658,
          3201631749, 1646252340, 4270507174, 1402811438, 1436590835,
          3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366,
          2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892,
          3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497,
          1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938,
          516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170,
          4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260,
          1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075,
          3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128,
          3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854,
          428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354,
          1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452,
          3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051,
          840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177,
          376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744,
          752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444,
          2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
          2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569,
          2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044,
          2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634,
          2594734927, 1852171925, 3867060991, 3473416636, 3907448597,
          2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639,
          2486224549, 1723872674, 3157750862, 3399941250, 3501252752,
          3625268135, 2555048196, 3673637356, 1343127501, 4130281361,
          3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410,
          532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963,
          492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225,
          344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695,
          3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069,
          1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571,
          3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716,
          3835484340, 3247465558, 2220981195, 3060847922, 1551124588,
          1463996600,
        ],
        A = [
          4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623,
          4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
          3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053,
          3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
          2405426947, 2459735317, 1836772287, 1381620373, 3196267988,
          1948373848, 3764988233, 3385345166, 3263785589, 2390325492,
          1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789,
          3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355,
          2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426,
          1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895,
          3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221,
          3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454,
          878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212,
          2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718,
          1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912,
          2566595609, 3186202582, 1078185097, 3651041127, 3896688048,
          2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296,
          0, 2156299017, 736970802, 292596766, 1517440620, 251657213,
          2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339,
          908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416,
          3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620,
          454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591,
          1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156,
          4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431,
          1669664834, 2535604243, 3323011204, 1243905413, 3141400786,
          4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727,
          3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
          4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628,
          3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
          2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
          3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
          410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844,
          1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
          1865862730, 2668221674, 2960971305, 2763173681, 1059270954,
          2777952454, 2724642869, 1320957812, 2194319100, 2429595872,
          2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550,
          4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417,
          1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011,
          3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729,
          322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828,
          4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015,
          1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990,
          3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240,
          1455525988, 3414450555, 850817237, 1817998408, 3092726480,
        ],
        I = [
          0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
          708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
          1181045119, 1417561698, 1517767529, 3767586992, 4003061179,
          4236429990, 4069246893, 3635733660, 3602770327, 3299278474,
          3400528769, 2430122216, 2664543715, 2362090238, 2193862645,
          2835123396, 2801107407, 3035535058, 3135740889, 3678124923,
          3576870512, 3341394285, 3374361702, 3810496343, 3977675356,
          4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
          3110650942, 2472011535, 2640243204, 2403728665, 2169303058,
          1001089995, 899835584, 666464733, 699432150, 59727847, 226906860,
          530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414,
          1942435775, 2110667444, 1876241833, 1641816226, 2910219766,
          2743034109, 2976151520, 3211623147, 2505202138, 2606453969,
          2302690252, 2269728455, 3711829422, 3543599269, 3240894392,
          3475313331, 3843699074, 3943906441, 4178062228, 4144047775,
          1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
          2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896,
          800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
          2017778566, 1784663195, 1683407248, 1315562145, 1080094634,
          1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864,
          1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334,
          2328828971, 2227573024, 2935566865, 2700099354, 3001755655,
          3168937228, 3868552805, 3902563182, 4203181171, 4102977912,
          3736164937, 3501741890, 3265478751, 3433712980, 1106041591,
          1340463100, 1576976609, 1408749034, 2043211483, 2009195472,
          1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354,
          159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380,
          3178106961, 3009879386, 2572697195, 2538681184, 2236228733,
          2336434550, 3509871135, 3745345300, 3441850377, 3274667266,
          3910161971, 3877198648, 4110568485, 4211818798, 2597806476,
          2497604743, 2261089178, 2295101073, 2733856160, 2902087851,
          3202437046, 2968011453, 3936291284, 3835036895, 4136440770,
          4169408201, 3535486456, 3702665459, 3467192302, 3231722213,
          2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
          1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330,
          404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
          3801332234, 4035489047, 4269907996, 3569255213, 3669462566,
          3366754619, 3332740144, 2631065433, 2463879762, 2160117071,
          2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497,
          33778362, 270040487, 504459436, 875451293, 975658646, 675039627,
          641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
          1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972,
          632953703, 260388950, 25965917, 328671808, 496906059, 1206477858,
          1239443753, 1543208500, 1441952575, 2144161806, 1908694277,
          1675577880, 1842759443, 3610369226, 3644379585, 3408119516,
          3307916247, 4011190502, 3776767469, 4077384432, 4245618683,
          2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
          2438237621, 2203032232, 2370213795,
        ],
        N = [
          0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
          824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388,
          2135319889, 1649704518, 1767536459, 2967507152, 3152976349,
          2801566410, 2918353863, 2631447780, 2547432937, 2328143614,
          2177544179, 3901806776, 3818836405, 4270639778, 4118987695,
          3299409036, 3483825537, 3535072918, 3652904859, 2077965243,
          1893020342, 1841768865, 1724457132, 1474502543, 1559041666,
          1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372,
          261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454,
          3710368113, 3593056380, 3875770207, 3960309330, 4045380933,
          4195456072, 2471224067, 2554718734, 2237133081, 2388260884,
          3212035895, 3028143674, 2842678573, 2724322336, 4138563181,
          4255350624, 3769721975, 3955191162, 3667219033, 3516619604,
          3431546947, 3347532110, 2933734917, 2782082824, 3099667487,
          3016697106, 2196052529, 2313884476, 2499348523, 2683765030,
          1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
          1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751,
          53458370, 839224033, 957055980, 605657339, 790073846, 2373340630,
          2256028891, 2607439820, 2422494913, 2706270690, 2856345839,
          3075636216, 3160175349, 3573941694, 3725069491, 3273267108,
          3356761769, 4181598602, 4063242375, 4011996048, 3828103837,
          1033297158, 915985419, 730517276, 545572369, 296679730, 446754879,
          129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177,
          1239331162, 1120974935, 1606591296, 1422699085, 4148292826,
          4233094615, 3781033664, 3931371469, 3682191598, 3497509347,
          3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
          2988687269, 2198438022, 2282195339, 2501218972, 2652609425,
          1201765386, 1286567175, 1371368976, 1521706781, 1805211710,
          1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672,
          46346101, 870912086, 954669403, 636813900, 788204353, 2358957921,
          2274680428, 2592523643, 2441661558, 2695033685, 2880240216,
          3065962831, 3182487618, 3572145929, 3756299780, 3270937875,
          3388507166, 4174560061, 4091327024, 4006521127, 3854606378,
          1014646705, 930369212, 711349675, 560487590, 272786309, 457992840,
          106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326,
          1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114,
          401639597, 486441376, 768917123, 651868046, 1003007129, 818324884,
          1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
          2125135846, 1673061617, 1756818940, 2970356327, 3120694122,
          2802849917, 2887651696, 2637442643, 2520393566, 2334669897,
          2149987652, 3917234703, 3799141122, 4284502037, 4100872472,
          3309594171, 3460984630, 3545789473, 3629546796, 2050466060,
          1899603969, 1814803222, 1730525723, 1443857720, 1560382517,
          1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235,
          243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545,
          3704300486, 3620022987, 3874428392, 3990953189, 4042459122,
          4227665663, 2460449204, 2578018489, 2226875310, 2411029155,
          3198115200, 3046200461, 2827177882, 2743944855,
        ],
        O = [
          0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
          590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588,
          1367295589, 1180849278, 1265195639, 3501252752, 3720081049,
          3399941250, 3350065803, 3835484340, 3919042237, 4270507174,
          4085369519, 3102249176, 3051593425, 2734591178, 2952102595,
          2361698556, 2177869557, 2530391278, 2614737639, 3145456443,
          3060847922, 2708326185, 2892417312, 2404901663, 2187128086,
          2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
          3292445032, 3876557655, 3926170974, 4246310725, 4027744588,
          1808481195, 1723872674, 1910319033, 2094410160, 1608975247,
          1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201,
          344873464, 935293895, 984907214, 766078933, 547512796, 1844882806,
          1627235199, 2011214180, 2062270317, 1507497298, 1423022939,
          1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861,
          830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679,
          2807058932, 2858115069, 2305455554, 2220981195, 2474404304,
          2658625497, 3575528878, 3625268135, 3473416636, 3254988725,
          3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
          3683022916, 3432737375, 3247465558, 3802222185, 4020912224,
          4172763771, 4122762354, 3201631749, 3017672716, 2764249623,
          2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613,
          188127444, 472615631, 287343814, 840019705, 1058709744, 671593195,
          621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577,
          1463996600, 1080017571, 1297403050, 3673637356, 3623636965,
          3235995134, 3454686199, 4007360968, 3822090177, 4107101658,
          4190530515, 2997825956, 3215212461, 2830708150, 2779915199,
          2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165,
          273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755,
          1646252340, 1863638845, 2013908262, 1963115311, 1446242576,
          1530455833, 1277555970, 1093597963, 1636604631, 1820824798,
          2073724613, 1989249228, 1436590835, 1487645946, 1337376481,
          1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051,
          821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645,
          2787207260, 2232435299, 2283490410, 2667994737, 2450346104,
          3647212047, 3564045318, 3279033885, 3464042516, 3980931627,
          3762502690, 4150144569, 4199882800, 3070356634, 3121275539,
          2904027272, 2686254721, 2200818878, 2384911031, 2570832044,
          2486224549, 3747192018, 3528626907, 3310321856, 3359936201,
          3950355702, 3867060991, 4049844452, 4234721005, 1739656202,
          1790575107, 2108100632, 1890328081, 1402811438, 1586903591,
          1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217,
          1002783846, 919489135, 567498868, 752375421, 209336225, 24197544,
          376187827, 459744698, 945164165, 895287692, 574624663, 793451934,
          1679968233, 1764313568, 2117360635, 1933530610, 1343127501,
          1560637892, 1243112415, 1192455638, 3704280881, 3519142200,
          3336358691, 3419915562, 3907448597, 3857572124, 4075877127,
          4294704398, 3029510009, 3113855344, 2927934315, 2744104290,
          2159976285, 2377486676, 2594734927, 2544078150,
        ],
        R = [
          0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
          1059270954, 1214797936, 1097159550, 1517440620, 1400849762,
          1817998408, 1699839814, 2118541908, 2001430874, 2429595872,
          2581445614, 2194319100, 2345119218, 3034881240, 3186202582,
          2801699524, 2951971274, 3635996816, 3518358430, 3399679628,
          3283088770, 4237083816, 4118925222, 4002861748, 3885750714,
          1002142683, 850817237, 698445255, 548169417, 529487843, 377642221,
          227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577,
          1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
          2724642869, 3111247143, 2960971305, 2405426947, 2253581325,
          2638606623, 2487810577, 3808662347, 3926825029, 4044981591,
          4162096729, 3342319475, 3459953789, 3576539503, 3693126241,
          1986918061, 2137062819, 1685577905, 1836772287, 1381620373,
          1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417,
          621982671, 439452389, 322734571, 137073913, 19308535, 3871163981,
          4021308739, 4104605777, 4255800159, 3263785589, 3414450555,
          3499326569, 3651041127, 2933202493, 2815956275, 3167684641,
          3049390895, 2330014213, 2213296395, 2566595609, 2448830231,
          1305906550, 1155237496, 1607244650, 1455525988, 1776460110,
          1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818,
          514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718,
          3557504664, 3474729866, 3323011204, 4180808110, 4030667424,
          3945269170, 3794078908, 2507040230, 2623762152, 2272556026,
          2390325492, 2975484382, 3092726480, 2738905026, 2857194700,
          3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
          3252932727, 3673476453, 3556361835, 2763173681, 2915017791,
          3064510765, 3215307299, 2156299017, 2307622919, 2459735317,
          2610011675, 2081048481, 1963412655, 1846563261, 1729977011,
          1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015,
          645401037, 796197571, 274084841, 425408743, 38544885, 188821243,
          3613494426, 3731654548, 3313212038, 3430322568, 4082475170,
          4200115116, 3780097726, 3896688048, 2668221674, 2516901860,
          2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
          2687165888, 1202797690, 1320957812, 1437280870, 1554391400,
          1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348,
          499347990, 349075736, 736970802, 585122620, 972512814, 821712160,
          2595684844, 2478443234, 2293045232, 2174754046, 3196267988,
          3079546586, 2895723464, 2777952454, 3537852828, 3687994002,
          3234156416, 3385345166, 4142626212, 4293295786, 3841024952,
          3992742070, 174567692, 57326082, 410887952, 292596766, 777231668,
          660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912,
          1494807662, 1715193156, 1865862730, 1948373848, 2100090966,
          2701949495, 2818666809, 3004591147, 3122358053, 2235061775,
          2352307457, 2535604243, 2653899549, 3915653703, 3764988233,
          4219352155, 4067639125, 3444575871, 3294430577, 3746175075,
          3594982253, 836553431, 953270745, 600235211, 718002117, 367585007,
          484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355,
          1654886325, 1568718495, 1418573201, 1335535747, 1184342925,
        ];
      function T(t) {
        let e = [];
        for (let r = 0; r < t.length; r += 4)
          e.push((t[r] << 24) | (t[r + 1] << 16) | (t[r + 2] << 8) | t[r + 3]);
        return e;
      }
      class S {
        get key() {
          return c(this, n, "f").slice();
        }
        constructor(t) {
          let e;
          if (
            (n.set(this, void 0),
            i.set(this, void 0),
            s.set(this, void 0),
            !(this instanceof S))
          )
            throw Error("AES must be instanitated with `new`");
          f(this, n, new Uint8Array(t), "f");
          let r = d[this.key.length];
          if (null == r)
            throw TypeError("invalid key size (must be 16, 24 or 32 bytes)");
          f(this, s, [], "f"), f(this, i, [], "f");
          for (let t = 0; t <= r; t++)
            c(this, s, "f").push([0, 0, 0, 0]),
              c(this, i, "f").push([0, 0, 0, 0]);
          let a = (r + 1) * 4,
            o = this.key.length / 4,
            l = T(this.key);
          for (let t = 0; t < o; t++)
            (e = t >> 2),
              (c(this, s, "f")[e][t % 4] = l[t]),
              (c(this, i, "f")[r - e][t % 4] = l[t]);
          let u = 0,
            h = o,
            y;
          for (; h < a; ) {
            if (
              ((y = l[o - 1]),
              (l[0] ^=
                (g[(y >> 16) & 255] << 24) ^
                (g[(y >> 8) & 255] << 16) ^
                (g[255 & y] << 8) ^
                g[(y >> 24) & 255] ^
                (p[u] << 24)),
              (u += 1),
              8 != o)
            )
              for (let t = 1; t < o; t++) l[t] ^= l[t - 1];
            else {
              for (let t = 1; t < o / 2; t++) l[t] ^= l[t - 1];
              (y = l[o / 2 - 1]),
                (l[o / 2] ^=
                  g[255 & y] ^
                  (g[(y >> 8) & 255] << 8) ^
                  (g[(y >> 16) & 255] << 16) ^
                  (g[(y >> 24) & 255] << 24));
              for (let t = o / 2 + 1; t < o; t++) l[t] ^= l[t - 1];
            }
            let t = 0,
              e,
              n;
            for (; t < o && h < a; )
              (e = h >> 2),
                (n = h % 4),
                (c(this, s, "f")[e][n] = l[t]),
                (c(this, i, "f")[r - e][n] = l[t++]),
                h++;
          }
          for (let t = 1; t < r; t++)
            for (let e = 0; e < 4; e++)
              (y = c(this, i, "f")[t][e]),
                (c(this, i, "f")[t][e] =
                  I[(y >> 24) & 255] ^
                  N[(y >> 16) & 255] ^
                  O[(y >> 8) & 255] ^
                  R[255 & y]);
        }
        encrypt(t) {
          if (16 != t.length)
            throw TypeError("invalid plaintext size (must be 16 bytes)");
          let e = c(this, s, "f").length - 1,
            r = [0, 0, 0, 0],
            n = T(t);
          for (let t = 0; t < 4; t++) n[t] ^= c(this, s, "f")[0][t];
          for (let t = 1; t < e; t++) {
            for (let e = 0; e < 4; e++)
              r[e] =
                m[(n[e] >> 24) & 255] ^
                b[(n[(e + 1) % 4] >> 16) & 255] ^
                w[(n[(e + 2) % 4] >> 8) & 255] ^
                v[255 & n[(e + 3) % 4]] ^
                c(this, s, "f")[t][e];
            n = r.slice();
          }
          let i = new Uint8Array(16),
            a = 0;
          for (let t = 0; t < 4; t++)
            (a = c(this, s, "f")[e][t]),
              (i[4 * t] = (g[(n[t] >> 24) & 255] ^ (a >> 24)) & 255),
              (i[4 * t + 1] =
                (g[(n[(t + 1) % 4] >> 16) & 255] ^ (a >> 16)) & 255),
              (i[4 * t + 2] =
                (g[(n[(t + 2) % 4] >> 8) & 255] ^ (a >> 8)) & 255),
              (i[4 * t + 3] = (g[255 & n[(t + 3) % 4]] ^ a) & 255);
          return i;
        }
        decrypt(t) {
          if (16 != t.length)
            throw TypeError("invalid ciphertext size (must be 16 bytes)");
          let e = c(this, i, "f").length - 1,
            r = [0, 0, 0, 0],
            n = T(t);
          for (let t = 0; t < 4; t++) n[t] ^= c(this, i, "f")[0][t];
          for (let t = 1; t < e; t++) {
            for (let e = 0; e < 4; e++)
              r[e] =
                P[(n[e] >> 24) & 255] ^
                E[(n[(e + 3) % 4] >> 16) & 255] ^
                x[(n[(e + 2) % 4] >> 8) & 255] ^
                A[255 & n[(e + 1) % 4]] ^
                c(this, i, "f")[t][e];
            n = r.slice();
          }
          let s = new Uint8Array(16),
            a = 0;
          for (let t = 0; t < 4; t++)
            (a = c(this, i, "f")[e][t]),
              (s[4 * t] = (y[(n[t] >> 24) & 255] ^ (a >> 24)) & 255),
              (s[4 * t + 1] =
                (y[(n[(t + 3) % 4] >> 16) & 255] ^ (a >> 16)) & 255),
              (s[4 * t + 2] =
                (y[(n[(t + 2) % 4] >> 8) & 255] ^ (a >> 8)) & 255),
              (s[4 * t + 3] = (y[255 & n[(t + 1) % 4]] ^ a) & 255);
          return s;
        }
      }
      (n = new WeakMap()), (i = new WeakMap()), (s = new WeakMap());
      class k {
        constructor(t, e, r) {
          if (r && !(this instanceof r))
            throw Error(`${t} must be instantiated with "new"`);
          Object.defineProperties(this, {
            aes: { enumerable: !0, value: new S(e) },
            name: { enumerable: !0, value: t },
          });
        }
      }
      var B = function (t, e, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        },
        U = function (t, e, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
        };
      class L extends k {
        constructor(t, e) {
          if (
            (super("ECC", t, L), a.set(this, void 0), o.set(this, void 0), e)
          ) {
            if (e.length % 16)
              throw TypeError("invalid iv size (must be 16 bytes)");
            B(this, a, new Uint8Array(e), "f");
          } else B(this, a, new Uint8Array(16), "f");
          B(this, o, this.iv, "f");
        }
        get iv() {
          return new Uint8Array(U(this, a, "f"));
        }
        encrypt(t) {
          if (t.length % 16)
            throw TypeError(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          let e = new Uint8Array(t.length);
          for (let r = 0; r < t.length; r += 16) {
            for (let e = 0; e < 16; e++) U(this, o, "f")[e] ^= t[r + e];
            B(this, o, this.aes.encrypt(U(this, o, "f")), "f"),
              e.set(U(this, o, "f"), r);
          }
          return e;
        }
        decrypt(t) {
          if (t.length % 16)
            throw TypeError(
              "invalid ciphertext size (must be multiple of 16 bytes)"
            );
          let e = new Uint8Array(t.length);
          for (let r = 0; r < t.length; r += 16) {
            let n = this.aes.decrypt(t.subarray(r, r + 16));
            for (let i = 0; i < 16; i++)
              (e[r + i] = n[i] ^ U(this, o, "f")[i]),
                (U(this, o, "f")[i] = t[r + i]);
          }
          return e;
        }
      }
      (a = new WeakMap()),
        (o = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakSet();
      var C = function (t, e, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        },
        D = function (t, e, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
        };
      class G extends k {
        constructor(t, e) {
          super("CTR", t, G),
            l.set(this, void 0),
            u.set(this, void 0),
            h.set(this, void 0),
            C(this, h, new Uint8Array(16), "f"),
            D(this, h, "f").fill(0),
            C(this, l, D(this, h, "f"), "f"),
            C(this, u, 16, "f"),
            null == e && (e = 1),
            "number" == typeof e
              ? this.setCounterValue(e)
              : this.setCounterBytes(e);
        }
        get counter() {
          return new Uint8Array(D(this, h, "f"));
        }
        setCounterValue(t) {
          if (!Number.isInteger(t) || t < 0 || t > Number.MAX_SAFE_INTEGER)
            throw TypeError("invalid counter initial integer value");
          for (let e = 15; e >= 0; --e)
            (D(this, h, "f")[e] = t % 256), (t = Math.floor(t / 256));
        }
        setCounterBytes(t) {
          if (16 !== t.length)
            throw TypeError("invalid counter initial Uint8Array value length");
          D(this, h, "f").set(t);
        }
        increment() {
          for (let t = 15; t >= 0; t--)
            if (255 === D(this, h, "f")[t]) D(this, h, "f")[t] = 0;
            else {
              D(this, h, "f")[t]++;
              break;
            }
        }
        encrypt(t) {
          var e, r;
          let n = new Uint8Array(t);
          for (let t = 0; t < n.length; t++)
            16 === D(this, u, "f") &&
              (C(this, l, this.aes.encrypt(D(this, h, "f")), "f"),
              C(this, u, 0, "f"),
              this.increment()),
              (n[t] ^= D(this, l, "f")[
                (C(this, u, ((r = D(this, u, "f")), (e = r++), r), "f"), e)
              ]);
          return n;
        }
        decrypt(t) {
          return this.encrypt(t);
        }
      }
      function F(t) {
        if (t.length < 16) throw TypeError("PKCS#7 invalid length");
        let e = t[t.length - 1];
        if (e > 16) throw TypeError("PKCS#7 padding byte out of range");
        let r = t.length - e;
        for (let n = 0; n < e; n++)
          if (t[r + n] !== e) throw TypeError("PKCS#7 invalid padding byte");
        return new Uint8Array(t.subarray(0, r));
      }
      (l = new WeakMap()),
        (u = new WeakMap()),
        (h = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
    },
  },
]);
