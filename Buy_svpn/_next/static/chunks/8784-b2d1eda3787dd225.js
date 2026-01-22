"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8784],
  {
    90742: function (t, e, n) {
      n.d(e, {
        i: function () {
          return r;
        },
      });
      let r = "6.13.4";
    },
    455: function (t, e, n) {
      n.d(e, {
        A7: function () {
          return l;
        },
        Dv: function () {
          return f;
        },
        M5: function () {
          return h;
        },
        Ou: function () {
          return d;
        },
        Pw: function () {
          return u;
        },
        QB: function () {
          return g;
        },
        SK: function () {
          return p;
        },
        U3: function () {
          return v;
        },
        Zq: function () {
          return a;
        },
        h_: function () {
          return o;
        },
        zo: function () {
          return c;
        },
      });
      var r = n(36024);
      function i(t, e, n) {
        if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
        if ("string" == typeof t && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
          let e = new Uint8Array((t.length - 2) / 2),
            n = 2;
          for (let r = 0; r < e.length; r++)
            (e[r] = parseInt(t.substring(n, n + 2), 16)), (n += 2);
          return e;
        }
        (0, r.en)(!1, "invalid BytesLike value", e || "value", t);
      }
      function u(t, e) {
        return i(t, e, !1);
      }
      function o(t, e) {
        return i(t, e, !0);
      }
      function l(t, e) {
        return (
          !!("string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/)) &&
          ("number" != typeof e || t.length === 2 + 2 * e) &&
          (!0 !== e || t.length % 2 == 0)
        );
      }
      function a(t) {
        return l(t, !0) || t instanceof Uint8Array;
      }
      let s = "0123456789abcdef";
      function f(t) {
        let e = u(t),
          n = "0x";
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          n += s[(240 & r) >> 4] + s[15 & r];
        }
        return n;
      }
      function c(t) {
        return "0x" + t.map((t) => f(t).substring(2)).join("");
      }
      function h(t) {
        return l(t, !0) ? (t.length - 2) / 2 : u(t).length;
      }
      function g(t, e, n) {
        let i = u(t);
        return (
          null != n &&
            n > i.length &&
            (0, r.hu)(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
              buffer: i,
              length: i.length,
              offset: n,
            }),
          f(i.slice(null == e ? 0 : e, null == n ? i.length : n))
        );
      }
      function d(t) {
        let e = f(t).substring(2);
        for (; e.startsWith("00"); ) e = e.substring(2);
        return "0x" + e;
      }
      function m(t, e, n) {
        let i = u(t);
        (0, r.hu)(
          e >= i.length,
          "padding exceeds data length",
          "BUFFER_OVERRUN",
          { buffer: new Uint8Array(i), length: e, offset: e + 1 }
        );
        let o = new Uint8Array(e);
        return o.fill(0), n ? o.set(i, e - i.length) : o.set(i, 0), f(o);
      }
      function v(t, e) {
        return m(t, e, !0);
      }
      function p(t, e) {
        return m(t, e, !1);
      }
    },
    36024: function (t, e, n) {
      n.d(e, {
        Hl: function () {
          return l;
        },
        NK: function () {
          return d;
        },
        VZ: function () {
          return o;
        },
        en: function () {
          return f;
        },
        fA: function () {
          return g;
        },
        fG: function () {
          return c;
        },
        hu: function () {
          return s;
        },
        wf: function () {
          return a;
        },
      });
      var r = n(90742),
        i = n(5857);
      function u(t) {
        if (null == t) return "null";
        if (Array.isArray(t)) return "[ " + t.map(u).join(", ") + " ]";
        if (t instanceof Uint8Array) {
          let e = "0123456789abcdef",
            n = "0x";
          for (let r = 0; r < t.length; r++) n += e[t[r] >> 4] + e[15 & t[r]];
          return n;
        }
        if ("object" == typeof t && "function" == typeof t.toJSON)
          return u(t.toJSON());
        switch (typeof t) {
          case "boolean":
          case "symbol":
          case "number":
            return t.toString();
          case "bigint":
            return BigInt(t).toString();
          case "string":
            return JSON.stringify(t);
          case "object": {
            let e = Object.keys(t);
            return (
              e.sort(),
              "{ " + e.map((e) => `${u(e)}: ${u(t[e])}`).join(", ") + " }"
            );
          }
        }
        return "[ COULD NOT SERIALIZE ]";
      }
      function o(t, e) {
        return t && t.code === e;
      }
      function l(t) {
        return o(t, "CALL_EXCEPTION");
      }
      function a(t, e, n) {
        let o,
          l = t;
        {
          let i = [];
          if (n) {
            if ("message" in n || "code" in n || "name" in n)
              throw Error(`value will overwrite populated values: ${u(n)}`);
            for (let t in n) {
              if ("shortMessage" === t) continue;
              let e = n[t];
              i.push(t + "=" + u(e));
            }
          }
          i.push(`code=${e}`),
            i.push(`version=${r.i}`),
            i.length && (t += " (" + i.join(", ") + ")");
        }
        switch (e) {
          case "INVALID_ARGUMENT":
            o = TypeError(t);
            break;
          case "NUMERIC_FAULT":
          case "BUFFER_OVERRUN":
            o = RangeError(t);
            break;
          default:
            o = Error(t);
        }
        return (
          (0, i.h)(o, { code: e }),
          n && Object.assign(o, n),
          null == o.shortMessage && (0, i.h)(o, { shortMessage: l }),
          o
        );
      }
      function s(t, e, n, r) {
        if (!t) throw a(e, n, r);
      }
      function f(t, e, n, r) {
        s(t, e, "INVALID_ARGUMENT", { argument: n, value: r });
      }
      function c(t, e, n) {
        null == n && (n = ""),
          n && (n = ": " + n),
          s(t >= e, "missing arguemnt" + n, "MISSING_ARGUMENT", {
            count: t,
            expectedCount: e,
          }),
          s(t <= e, "too many arguments" + n, "UNEXPECTED_ARGUMENT", {
            count: t,
            expectedCount: e,
          });
      }
      let h = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
        try {
          if ("test" !== "test".normalize(e)) throw Error("bad");
          if ("NFD" === e) {
            let t = String.fromCharCode(233).normalize("NFD"),
              e = String.fromCharCode(101, 769);
            if (t !== e) throw Error("broken");
          }
          t.push(e);
        } catch (t) {}
        return t;
      }, []);
      function g(t) {
        s(
          h.indexOf(t) >= 0,
          "platform missing String.prototype.normalize",
          "UNSUPPORTED_OPERATION",
          { operation: "String.prototype.normalize", info: { form: t } }
        );
      }
      function d(t, e, n) {
        if ((null == n && (n = ""), t !== e)) {
          let t = n,
            e = "new";
          n && ((t += "."), (e += " " + n)),
            s(
              !1,
              `private constructor; use ${t}from* methods`,
              "UNSUPPORTED_OPERATION",
              { operation: e }
            );
        }
      }
    },
    89288: function (t, e, n) {
      n.d(e, {
        x: function () {
          return v;
        },
      });
      var r = n(455),
        i = n(36024),
        u = n(12229),
        o = n(5857);
      let l = BigInt(-1),
        a = BigInt(0),
        s = BigInt(1),
        f = BigInt(5),
        c = {},
        h = "0000";
      for (; h.length < 80; ) h += h;
      function g(t) {
        let e = h;
        for (; e.length < t; ) e += e;
        return BigInt("1" + e.substring(0, t));
      }
      function d(t, e, n) {
        let r = BigInt(e.width);
        if (e.signed) {
          let e = s << (r - s);
          (0, i.hu)(
            null == n || (t >= -e && t < e),
            "overflow",
            "NUMERIC_FAULT",
            { operation: n, fault: "overflow", value: t }
          ),
            (t =
              t > a
                ? (0, u._Y)((0, u.sS)(t, r), r)
                : -(0, u._Y)((0, u.sS)(-t, r), r));
        } else {
          let e = s << r;
          (0, i.hu)(
            null == n || (t >= 0 && t < e),
            "overflow",
            "NUMERIC_FAULT",
            { operation: n, fault: "overflow", value: t }
          ),
            (t = ((t % e) + e) % e & (e - s));
        }
        return t;
      }
      function m(t) {
        "number" == typeof t && (t = `fixed128x${t}`);
        let e = !0,
          n = 128,
          r = 18;
        if ("string" == typeof t) {
          if ("fixed" === t);
          else if ("ufixed" === t) e = !1;
          else {
            let u = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            (0, i.en)(u, "invalid fixed format", "format", t),
              (e = "u" !== u[1]),
              (n = parseInt(u[2])),
              (r = parseInt(u[3]));
          }
        } else if (t) {
          let u = t,
            o = (t, e, n) =>
              null == u[t]
                ? n
                : ((0, i.en)(
                    typeof u[t] === e,
                    "invalid fixed format (" + t + " not " + e + ")",
                    "format." + t,
                    u[t]
                  ),
                  u[t]);
          (e = o("signed", "boolean", e)),
            (n = o("width", "number", n)),
            (r = o("decimals", "number", r));
        }
        (0, i.en)(
          n % 8 == 0,
          "invalid FixedNumber width (not byte aligned)",
          "format.width",
          n
        ),
          (0, i.en)(
            r <= 80,
            "invalid FixedNumber decimals (too large)",
            "format.decimals",
            r
          );
        let u = (e ? "" : "u") + "fixed" + String(n) + "x" + String(r);
        return { signed: e, width: n, decimals: r, name: u };
      }
      class v {
        format;
        #t;
        #e;
        #n;
        _value;
        constructor(t, e, n) {
          (0, i.NK)(t, c, "FixedNumber"), (this.#e = e), (this.#t = n);
          let r = (function (t, e) {
            let n = "";
            t < a && ((n = "-"), (t *= l));
            let r = t.toString();
            if (0 === e) return n + r;
            for (; r.length <= e; ) r = h + r;
            let i = r.length - e;
            for (
              r = r.substring(0, i) + "." + r.substring(i);
              "0" === r[0] && "." !== r[1];

            )
              r = r.substring(1);
            for (; "0" === r[r.length - 1] && "." !== r[r.length - 2]; )
              r = r.substring(0, r.length - 1);
            return n + r;
          })(e, n.decimals);
          (0, o.h)(this, { format: n.name, _value: r }),
            (this.#n = g(n.decimals));
        }
        get signed() {
          return this.#t.signed;
        }
        get width() {
          return this.#t.width;
        }
        get decimals() {
          return this.#t.decimals;
        }
        get value() {
          return this.#e;
        }
        #r(t) {
          (0, i.en)(
            this.format === t.format,
            "incompatible format; use fixedNumber.toFormat",
            "other",
            t
          );
        }
        #i(t, e) {
          return new v(c, (t = d(t, this.#t, e)), this.#t);
        }
        #u(t, e) {
          return this.#r(t), this.#i(this.#e + t.#e, e);
        }
        addUnsafe(t) {
          return this.#u(t);
        }
        add(t) {
          return this.#u(t, "add");
        }
        #o(t, e) {
          return this.#r(t), this.#i(this.#e - t.#e, e);
        }
        subUnsafe(t) {
          return this.#o(t);
        }
        sub(t) {
          return this.#o(t, "sub");
        }
        #l(t, e) {
          return this.#r(t), this.#i((this.#e * t.#e) / this.#n, e);
        }
        mulUnsafe(t) {
          return this.#l(t);
        }
        mul(t) {
          return this.#l(t, "mul");
        }
        mulSignal(t) {
          this.#r(t);
          let e = this.#e * t.#e;
          return (
            (0, i.hu)(
              e % this.#n === a,
              "precision lost during signalling mul",
              "NUMERIC_FAULT",
              { operation: "mulSignal", fault: "underflow", value: this }
            ),
            this.#i(e / this.#n, "mulSignal")
          );
        }
        #a(t, e) {
          return (
            (0, i.hu)(t.#e !== a, "division by zero", "NUMERIC_FAULT", {
              operation: "div",
              fault: "divide-by-zero",
              value: this,
            }),
            this.#r(t),
            this.#i((this.#e * this.#n) / t.#e, e)
          );
        }
        divUnsafe(t) {
          return this.#a(t);
        }
        div(t) {
          return this.#a(t, "div");
        }
        divSignal(t) {
          (0, i.hu)(t.#e !== a, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this,
          }),
            this.#r(t);
          let e = this.#e * this.#n;
          return (
            (0, i.hu)(
              e % t.#e === a,
              "precision lost during signalling div",
              "NUMERIC_FAULT",
              { operation: "divSignal", fault: "underflow", value: this }
            ),
            this.#i(e / t.#e, "divSignal")
          );
        }
        cmp(t) {
          let e = this.value,
            n = t.value,
            r = this.decimals - t.decimals;
          return (r > 0 ? (n *= g(r)) : r < 0 && (e *= g(-r)), e < n)
            ? -1
            : e > n
            ? 1
            : 0;
        }
        eq(t) {
          return 0 === this.cmp(t);
        }
        lt(t) {
          return 0 > this.cmp(t);
        }
        lte(t) {
          return 0 >= this.cmp(t);
        }
        gt(t) {
          return this.cmp(t) > 0;
        }
        gte(t) {
          return this.cmp(t) >= 0;
        }
        floor() {
          let t = this.#e;
          return (
            this.#e < a && (t -= this.#n - s),
            (t = (this.#e / this.#n) * this.#n),
            this.#i(t, "floor")
          );
        }
        ceiling() {
          let t = this.#e;
          return (
            this.#e > a && (t += this.#n - s),
            (t = (this.#e / this.#n) * this.#n),
            this.#i(t, "ceiling")
          );
        }
        round(t) {
          if ((null == t && (t = 0), t >= this.decimals)) return this;
          let e = this.decimals - t,
            n = f * g(e - 1),
            r = this.value + n,
            i = g(e);
          return d((r = (r / i) * i), this.#t, "round"), new v(c, r, this.#t);
        }
        isZero() {
          return this.#e === a;
        }
        isNegative() {
          return this.#e < a;
        }
        toString() {
          return this._value;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return v.fromString(this.toString(), t);
        }
        static fromValue(t, e, n) {
          let r = null == e ? 0 : (0, u.Dx)(e),
            o = m(n),
            l = (0, u.yT)(t, "value"),
            s = r - o.decimals;
          if (s > 0) {
            let e = g(s);
            (0, i.hu)(
              l % e === a,
              "value loses precision for format",
              "NUMERIC_FAULT",
              { operation: "fromValue", fault: "underflow", value: t }
            ),
              (l /= e);
          } else s < 0 && (l *= g(-s));
          return d(l, o, "fromValue"), new v(c, l, o);
        }
        static fromString(t, e) {
          let n = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          (0, i.en)(
            n && n[2].length + n[3].length > 0,
            "invalid FixedNumber string value",
            "value",
            t
          );
          let r = m(e),
            u = n[2] || "0",
            o = n[3] || "";
          for (; o.length < r.decimals; ) o += h;
          (0, i.hu)(
            o.substring(r.decimals).match(/^0*$/),
            "too many decimals for format",
            "NUMERIC_FAULT",
            { operation: "fromString", fault: "underflow", value: t }
          ),
            (o = o.substring(0, r.decimals));
          let l = BigInt(n[1] + u + o);
          return d(l, r, "fromString"), new v(c, l, r);
        }
        static fromBytes(t, e) {
          let n = (0, u.Gh)((0, r.Pw)(t, "value")),
            i = m(e);
          return (
            i.signed && (n = (0, u._Y)(n, i.width)),
            d(n, i, "fromBytes"),
            new v(c, n, i)
          );
        }
      }
    },
    12229: function (t, e, n) {
      n.d(e, {
        $j: function () {
          return a;
        },
        B4: function () {
          return b;
        },
        Dx: function () {
          return d;
        },
        Gh: function () {
          return g;
        },
        He: function () {
          return m;
        },
        Qf: function () {
          return c;
        },
        _Y: function () {
          return l;
        },
        m9: function () {
          return v;
        },
        ot: function () {
          return p;
        },
        sS: function () {
          return s;
        },
        yT: function () {
          return f;
        },
      });
      var r = n(455),
        i = n(36024);
      let u = BigInt(0),
        o = BigInt(1);
      function l(t, e) {
        let n = c(t, "value"),
          r = BigInt(d(e, "width"));
        return ((0, i.hu)(n >> r === u, "overflow", "NUMERIC_FAULT", {
          operation: "fromTwos",
          fault: "overflow",
          value: t,
        }),
        n >> (r - o))
          ? -((~n & ((o << r) - o)) + o)
          : n;
      }
      function a(t, e) {
        let n = f(t, "value"),
          r = BigInt(d(e, "width")),
          l = o << (r - o);
        return n < u
          ? ((n = -n),
            (0, i.hu)(n <= l, "too low", "NUMERIC_FAULT", {
              operation: "toTwos",
              fault: "overflow",
              value: t,
            }),
            (~n & ((o << r) - o)) + o)
          : ((0, i.hu)(n < l, "too high", "NUMERIC_FAULT", {
              operation: "toTwos",
              fault: "overflow",
              value: t,
            }),
            n);
      }
      function s(t, e) {
        return c(t, "value") & ((o << BigInt(d(e, "bits"))) - o);
      }
      function f(t, e) {
        switch (typeof t) {
          case "bigint":
            return t;
          case "number":
            return (
              (0, i.en)(Number.isInteger(t), "underflow", e || "value", t),
              (0, i.en)(
                t >= -9007199254740991 && t <= 9007199254740991,
                "overflow",
                e || "value",
                t
              ),
              BigInt(t)
            );
          case "string":
            try {
              if ("" === t) throw Error("empty string");
              if ("-" === t[0] && "-" !== t[1]) return -BigInt(t.substring(1));
              return BigInt(t);
            } catch (n) {
              (0, i.en)(
                !1,
                `invalid BigNumberish string: ${n.message}`,
                e || "value",
                t
              );
            }
        }
        (0, i.en)(!1, "invalid BigNumberish value", e || "value", t);
      }
      function c(t, e) {
        let n = f(t, e);
        return (
          (0, i.hu)(
            n >= u,
            "unsigned value cannot be negative",
            "NUMERIC_FAULT",
            { fault: "overflow", operation: "getUint", value: t }
          ),
          n
        );
      }
      let h = "0123456789abcdef";
      function g(t) {
        if (t instanceof Uint8Array) {
          let e = "0x0";
          for (let n of t) e += h[n >> 4] + h[15 & n];
          return BigInt(e);
        }
        return f(t);
      }
      function d(t, e) {
        switch (typeof t) {
          case "bigint":
            return (
              (0, i.en)(
                t >= -9007199254740991 && t <= 9007199254740991,
                "overflow",
                e || "value",
                t
              ),
              Number(t)
            );
          case "number":
            return (
              (0, i.en)(Number.isInteger(t), "underflow", e || "value", t),
              (0, i.en)(
                t >= -9007199254740991 && t <= 9007199254740991,
                "overflow",
                e || "value",
                t
              ),
              t
            );
          case "string":
            try {
              if ("" === t) throw Error("empty string");
              return d(BigInt(t), e);
            } catch (n) {
              (0, i.en)(
                !1,
                `invalid numeric string: ${n.message}`,
                e || "value",
                t
              );
            }
        }
        (0, i.en)(!1, "invalid numeric value", e || "value", t);
      }
      function m(t) {
        return d(g(t));
      }
      function v(t, e) {
        let n = c(t, "value").toString(16);
        if (null == e) n.length % 2 && (n = "0" + n);
        else {
          let r = d(e, "width");
          for (
            (0, i.hu)(
              2 * r >= n.length,
              `value exceeds width (${r} bytes)`,
              "NUMERIC_FAULT",
              { operation: "toBeHex", fault: "overflow", value: t }
            );
            n.length < 2 * r;

          )
            n = "0" + n;
        }
        return "0x" + n;
      }
      function p(t) {
        let e = c(t, "value");
        if (e === u) return new Uint8Array([]);
        let n = e.toString(16);
        n.length % 2 && (n = "0" + n);
        let r = new Uint8Array(n.length / 2);
        for (let t = 0; t < r.length; t++) {
          let e = 2 * t;
          r[t] = parseInt(n.substring(e, e + 2), 16);
        }
        return r;
      }
      function b(t) {
        let e = (0, r.Dv)((0, r.Zq)(t) ? t : p(t)).substring(2);
        for (; e.startsWith("0"); ) e = e.substring(1);
        return "" === e && (e = "0"), "0x" + e;
      }
    },
    5857: function (t, e, n) {
      async function r(t) {
        let e = Object.keys(t);
        return (await Promise.all(e.map((e) => Promise.resolve(t[e])))).reduce(
          (t, n, r) => ((t[e[r]] = n), t),
          {}
        );
      }
      function i(t, e, n) {
        for (let r in e) {
          let i = e[r],
            u = n ? n[r] : null;
          u &&
            (function (t, e, n) {
              let r = e.split("|").map((t) => t.trim());
              for (let n = 0; n < r.length; n++)
                switch (e) {
                  case "any":
                    return;
                  case "bigint":
                  case "boolean":
                  case "number":
                  case "string":
                    if (typeof t === e) return;
                }
              let i = Error(`invalid value for type ${e}`);
              throw (
                ((i.code = "INVALID_ARGUMENT"),
                (i.argument = `value.${n}`),
                (i.value = t),
                i)
              );
            })(i, u, r),
            Object.defineProperty(t, r, {
              enumerable: !0,
              value: i,
              writable: !1,
            });
        }
      }
      n.d(e, {
        h: function () {
          return i;
        },
        m: function () {
          return r;
        },
      });
    },
    44905: function (t, e, n) {
      n.d(e, {
        bM: function () {
          return l;
        },
        dF: function () {
          return s;
        },
        fi: function () {
          return f;
        },
        vz: function () {
          return a;
        },
      });
      var r = n(36024),
        i = n(89288),
        u = n(12229);
      let o = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function l(t, e) {
        let n = 18;
        if ("string" == typeof e) {
          let t = o.indexOf(e);
          (0, r.en)(t >= 0, "invalid unit", "unit", e), (n = 3 * t);
        } else null != e && (n = (0, u.Dx)(e, "unit"));
        return i.x.fromValue(t, n, { decimals: n, width: 512 }).toString();
      }
      function a(t, e) {
        (0, r.en)("string" == typeof t, "value must be a string", "value", t);
        let n = 18;
        if ("string" == typeof e) {
          let t = o.indexOf(e);
          (0, r.en)(t >= 0, "invalid unit", "unit", e), (n = 3 * t);
        } else null != e && (n = (0, u.Dx)(e, "unit"));
        return i.x.fromString(t, { decimals: n, width: 512 }).value;
      }
      function s(t) {
        return l(t, 18);
      }
      function f(t) {
        return a(t, 18);
      }
    },
    35194: function (t, e, n) {
      n.d(e, {
        F: function () {
          return r;
        },
      });
      let r = (0, n(86164).a)({
        id: 11155111,
        network: "sepolia",
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
        rpcUrls: {
          alchemy: {
            http: ["https://eth-sepolia.g.alchemy.com/v2"],
            webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"],
          },
          infura: {
            http: ["https://sepolia.infura.io/v3"],
            webSocket: ["wss://sepolia.infura.io/ws/v3"],
          },
          default: { http: ["https://rpc.sepolia.org"] },
          public: { http: ["https://rpc.sepolia.org"] },
        },
        blockExplorers: {
          etherscan: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
          default: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
            blockCreated: 3914906,
          },
        },
        testnet: !0,
      });
    },
  },
]);
