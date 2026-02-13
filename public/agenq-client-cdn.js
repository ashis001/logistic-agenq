(function () {
  'use strict';
  function g0(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default') ? o.default : o;
  }
  var ni = { exports: {} },
    wn = {};
  var Bf;
  function h0() {
    if (Bf) return wn;
    Bf = 1;
    var o = Symbol.for('react.transitional.element'),
      y = Symbol.for('react.fragment');
    function v(f, _, C) {
      var Z = null;
      if ((C !== void 0 && (Z = '' + C), _.key !== void 0 && (Z = '' + _.key), 'key' in _)) {
        C = {};
        for (var $ in _) $ !== 'key' && (C[$] = _[$]);
      } else C = _;
      return (
        (_ = C.ref),
        { $$typeof: o, type: f, key: Z, ref: _ !== void 0 ? _ : null, props: C }
      );
    }
    return ((wn.Fragment = y), (wn.jsx = v), (wn.jsxs = v), wn);
  }
  var jf;
  function v0() {
    return (jf || ((jf = 1), (ni.exports = h0())), ni.exports);
  }
  var U = v0(),
    ai = { exports: {} },
    lt = {};
  var qf;
  function p0() {
    if (qf) return lt;
    qf = 1;
    var o = Symbol.for('react.transitional.element'),
      y = Symbol.for('react.portal'),
      v = Symbol.for('react.fragment'),
      f = Symbol.for('react.strict_mode'),
      _ = Symbol.for('react.profiler'),
      C = Symbol.for('react.consumer'),
      Z = Symbol.for('react.context'),
      $ = Symbol.for('react.forward_ref'),
      N = Symbol.for('react.suspense'),
      z = Symbol.for('react.memo'),
      Y = Symbol.for('react.lazy'),
      w = Symbol.for('react.activity'),
      at = Symbol.iterator;
    function xt(d) {
      return d === null || typeof d != 'object'
        ? null
        : ((d = (at && d[at]) || d['@@iterator']), typeof d == 'function' ? d : null);
    }
    var Tt = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      dt = Object.assign,
      qt = {};
    function H(d, O, L) {
      ((this.props = d), (this.context = O), (this.refs = qt), (this.updater = L || Tt));
    }
    ((H.prototype.isReactComponent = {}),
      (H.prototype.setState = function (d, O) {
        if (typeof d != 'object' && typeof d != 'function' && d != null)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.',
          );
        this.updater.enqueueSetState(this, d, O, 'setState');
      }),
      (H.prototype.forceUpdate = function (d) {
        this.updater.enqueueForceUpdate(this, d, 'forceUpdate');
      }));
    function yt() {}
    yt.prototype = H.prototype;
    function nt(d, O, L) {
      ((this.props = d), (this.context = O), (this.refs = qt), (this.updater = L || Tt));
    }
    var P = (nt.prototype = new yt());
    ((P.constructor = nt), dt(P, H.prototype), (P.isPureReactComponent = !0));
    var it = Array.isArray;
    function mt() {}
    var J = { H: null, A: null, T: null, S: null },
      At = Object.prototype.hasOwnProperty;
    function pt(d, O, L) {
      var B = L.ref;
      return { $$typeof: o, type: d, key: O, ref: B !== void 0 ? B : null, props: L };
    }
    function Yt(d, O) {
      return pt(d.type, O, d.props);
    }
    function Qt(d) {
      return typeof d == 'object' && d !== null && d.$$typeof === o;
    }
    function m(d) {
      var O = { '=': '=0', ':': '=2' };
      return (
        '$' +
        d.replace(/[=:]/g, function (L) {
          return O[L];
        })
      );
    }
    var T = /\/+/g;
    function j(d, O) {
      return typeof d == 'object' && d !== null && d.key != null ? m('' + d.key) : O.toString(36);
    }
    function I(d) {
      switch (d.status) {
        case 'fulfilled':
          return d.value;
        case 'rejected':
          throw d.reason;
        default:
          switch (
            (typeof d.status == 'string'
              ? d.then(mt, mt)
              : ((d.status = 'pending'),
                d.then(
                  function (O) {
                    d.status === 'pending' && ((d.status = 'fulfilled'), (d.value = O));
                  },
                  function (O) {
                    d.status === 'pending' && ((d.status = 'rejected'), (d.reason = O));
                  },
                )),
            d.status)
          ) {
            case 'fulfilled':
              return d.value;
            case 'rejected':
              throw d.reason;
          }
      }
      throw d;
    }
    function S(d, O, L, B, V) {
      var K = typeof d;
      (K === 'undefined' || K === 'boolean') && (d = null);
      var et = !1;
      if (d === null) et = !0;
      else
        switch (K) {
          case 'bigint':
          case 'string':
          case 'number':
            et = !0;
            break;
          case 'object':
            switch (d.$$typeof) {
              case o:
              case y:
                et = !0;
                break;
              case Y:
                return ((et = d._init), S(et(d._payload), O, L, B, V));
            }
        }
      if (et)
        return (
          (V = V(d)),
          (et = B === '' ? '.' + j(d, 0) : B),
          it(V)
            ? ((L = ''),
              et != null && (L = et.replace(T, '$&/') + '/'),
              S(V, O, L, '', function (ot) {
                return ot;
              }))
            : V != null &&
              (Qt(V) &&
                (V = Yt(
                  V,
                  L +
                    (V.key == null || (d && d.key === V.key)
                      ? ''
                      : ('' + V.key).replace(T, '$&/') + '/') +
                    et,
                )),
              O.push(V)),
          1
        );
      et = 0;
      var R = B === '' ? '.' : B + ':';
      if (it(d))
        for (var q = 0; q < d.length; q++)
          ((B = d[q]), (K = R + j(B, q)), (et += S(B, O, L, K, V)));
      else if (((q = xt(d)), typeof q == 'function'))
        for (d = q.call(d), q = 0; !(B = d.next()).done; )
          ((B = B.value), (K = R + j(B, q++)), (et += S(B, O, L, K, V)));
      else if (K === 'object') {
        if (typeof d.then == 'function') return S(I(d), O, L, B, V);
        throw (
          (O = String(d)),
          Error(
            'Objects are not valid as a React child (found: ' +
              (O === '[object Object]'
                ? 'object with keys {' + Object.keys(d).join(', ') + '}'
                : O) +
              '). If you meant to render a collection of children, use an array instead.',
          )
        );
      }
      return et;
    }
    function D(d, O, L) {
      if (d == null) return d;
      var B = [],
        V = 0;
      return (
        S(d, B, '', '', function (K) {
          return O.call(L, K, V++);
        }),
        B
      );
    }
    function k(d) {
      if (d._status === -1) {
        var O = d._result;
        ((O = O()),
          O.then(
            function (L) {
              (d._status === 0 || d._status === -1) && ((d._status = 1), (d._result = L));
            },
            function (L) {
              (d._status === 0 || d._status === -1) && ((d._status = 2), (d._result = L));
            },
          ),
          d._status === -1 && ((d._status = 0), (d._result = O)));
      }
      if (d._status === 1) return d._result.default;
      throw d._result;
    }
    var tt =
        typeof reportError == 'function'
          ? reportError
          : function (d) {
              if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                var O = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof d == 'object' && d !== null && typeof d.message == 'string'
                      ? String(d.message)
                      : String(d),
                  error: d,
                });
                if (!window.dispatchEvent(O)) return;
              } else if (typeof process == 'object' && typeof process.emit == 'function') {
                process.emit('uncaughtException', d);
                return;
              }
              console.error(d);
            },
      ut = {
        map: D,
        forEach: function (d, O, L) {
          D(
            d,
            function () {
              O.apply(this, arguments);
            },
            L,
          );
        },
        count: function (d) {
          var O = 0;
          return (
            D(d, function () {
              O++;
            }),
            O
          );
        },
        toArray: function (d) {
          return (
            D(d, function (O) {
              return O;
            }) || []
          );
        },
        only: function (d) {
          if (!Qt(d))
            throw Error('React.Children.only expected to receive a single React element child.');
          return d;
        },
      };
    return (
      (lt.Activity = w),
      (lt.Children = ut),
      (lt.Component = H),
      (lt.Fragment = v),
      (lt.Profiler = _),
      (lt.PureComponent = nt),
      (lt.StrictMode = f),
      (lt.Suspense = N),
      (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
      (lt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (d) {
          return J.H.useMemoCache(d);
        },
      }),
      (lt.cache = function (d) {
        return function () {
          return d.apply(null, arguments);
        };
      }),
      (lt.cacheSignal = function () {
        return null;
      }),
      (lt.cloneElement = function (d, O, L) {
        if (d == null)
          throw Error('The argument must be a React element, but you passed ' + d + '.');
        var B = dt({}, d.props),
          V = d.key;
        if (O != null)
          for (K in (O.key !== void 0 && (V = '' + O.key), O))
            !At.call(O, K) ||
              K === 'key' ||
              K === '__self' ||
              K === '__source' ||
              (K === 'ref' && O.ref === void 0) ||
              (B[K] = O[K]);
        var K = arguments.length - 2;
        if (K === 1) B.children = L;
        else if (1 < K) {
          for (var et = Array(K), R = 0; R < K; R++) et[R] = arguments[R + 2];
          B.children = et;
        }
        return pt(d.type, V, B);
      }),
      (lt.createContext = function (d) {
        return (
          (d = {
            $$typeof: Z,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (d.Provider = d),
          (d.Consumer = { $$typeof: C, _context: d }),
          d
        );
      }),
      (lt.createElement = function (d, O, L) {
        var B,
          V = {},
          K = null;
        if (O != null)
          for (B in (O.key !== void 0 && (K = '' + O.key), O))
            At.call(O, B) && B !== 'key' && B !== '__self' && B !== '__source' && (V[B] = O[B]);
        var et = arguments.length - 2;
        if (et === 1) V.children = L;
        else if (1 < et) {
          for (var R = Array(et), q = 0; q < et; q++) R[q] = arguments[q + 2];
          V.children = R;
        }
        if (d && d.defaultProps)
          for (B in ((et = d.defaultProps), et)) V[B] === void 0 && (V[B] = et[B]);
        return pt(d, K, V);
      }),
      (lt.createRef = function () {
        return { current: null };
      }),
      (lt.forwardRef = function (d) {
        return { $$typeof: $, render: d };
      }),
      (lt.isValidElement = Qt),
      (lt.lazy = function (d) {
        return { $$typeof: Y, _payload: { _status: -1, _result: d }, _init: k };
      }),
      (lt.memo = function (d, O) {
        return { $$typeof: z, type: d, compare: O === void 0 ? null : O };
      }),
      (lt.startTransition = function (d) {
        var O = J.T,
          L = {};
        J.T = L;
        try {
          var B = d(),
            V = J.S;
          (V !== null && V(L, B),
            typeof B == 'object' && B !== null && typeof B.then == 'function' && B.then(mt, tt));
        } catch (K) {
          tt(K);
        } finally {
          (O !== null && L.types !== null && (O.types = L.types), (J.T = O));
        }
      }),
      (lt.unstable_useCacheRefresh = function () {
        return J.H.useCacheRefresh();
      }),
      (lt.use = function (d) {
        return J.H.use(d);
      }),
      (lt.useActionState = function (d, O, L) {
        return J.H.useActionState(d, O, L);
      }),
      (lt.useCallback = function (d, O) {
        return J.H.useCallback(d, O);
      }),
      (lt.useContext = function (d) {
        return J.H.useContext(d);
      }),
      (lt.useDebugValue = function () {}),
      (lt.useDeferredValue = function (d, O) {
        return J.H.useDeferredValue(d, O);
      }),
      (lt.useEffect = function (d, O) {
        return J.H.useEffect(d, O);
      }),
      (lt.useEffectEvent = function (d) {
        return J.H.useEffectEvent(d);
      }),
      (lt.useId = function () {
        return J.H.useId();
      }),
      (lt.useImperativeHandle = function (d, O, L) {
        return J.H.useImperativeHandle(d, O, L);
      }),
      (lt.useInsertionEffect = function (d, O) {
        return J.H.useInsertionEffect(d, O);
      }),
      (lt.useLayoutEffect = function (d, O) {
        return J.H.useLayoutEffect(d, O);
      }),
      (lt.useMemo = function (d, O) {
        return J.H.useMemo(d, O);
      }),
      (lt.useOptimistic = function (d, O) {
        return J.H.useOptimistic(d, O);
      }),
      (lt.useReducer = function (d, O, L) {
        return J.H.useReducer(d, O, L);
      }),
      (lt.useRef = function (d) {
        return J.H.useRef(d);
      }),
      (lt.useState = function (d) {
        return J.H.useState(d);
      }),
      (lt.useSyncExternalStore = function (d, O, L) {
        return J.H.useSyncExternalStore(d, O, L);
      }),
      (lt.useTransition = function () {
        return J.H.useTransition();
      }),
      (lt.version = '19.2.3'),
      lt
    );
  }
  var Lf;
  function ui() {
    return (Lf || ((Lf = 1), (ai.exports = p0())), ai.exports);
  }
  var G = ui();
  const b0 = g0(G);
  var ii = { exports: {} },
    Yn = {},
    ci = { exports: {} },
    fi = {};
  var wf;
  function S0() {
    return (
      wf ||
        ((wf = 1),
        (function (o) {
          function y(S, D) {
            var k = S.length;
            S.push(D);
            t: for (; 0 < k; ) {
              var tt = (k - 1) >>> 1,
                ut = S[tt];
              if (0 < _(ut, D)) ((S[tt] = D), (S[k] = ut), (k = tt));
              else break t;
            }
          }
          function v(S) {
            return S.length === 0 ? null : S[0];
          }
          function f(S) {
            if (S.length === 0) return null;
            var D = S[0],
              k = S.pop();
            if (k !== D) {
              S[0] = k;
              t: for (var tt = 0, ut = S.length, d = ut >>> 1; tt < d; ) {
                var O = 2 * (tt + 1) - 1,
                  L = S[O],
                  B = O + 1,
                  V = S[B];
                if (0 > _(L, k))
                  B < ut && 0 > _(V, L)
                    ? ((S[tt] = V), (S[B] = k), (tt = B))
                    : ((S[tt] = L), (S[O] = k), (tt = O));
                else if (B < ut && 0 > _(V, k)) ((S[tt] = V), (S[B] = k), (tt = B));
                else break t;
              }
            }
            return D;
          }
          function _(S, D) {
            var k = S.sortIndex - D.sortIndex;
            return k !== 0 ? k : S.id - D.id;
          }
          if (
            ((o.unstable_now = void 0),
            typeof performance == 'object' && typeof performance.now == 'function')
          ) {
            var C = performance;
            o.unstable_now = function () {
              return C.now();
            };
          } else {
            var Z = Date,
              $ = Z.now();
            o.unstable_now = function () {
              return Z.now() - $;
            };
          }
          var N = [],
            z = [],
            Y = 1,
            w = null,
            at = 3,
            xt = !1,
            Tt = !1,
            dt = !1,
            qt = !1,
            H = typeof setTimeout == 'function' ? setTimeout : null,
            yt = typeof clearTimeout == 'function' ? clearTimeout : null,
            nt = typeof setImmediate < 'u' ? setImmediate : null;
          function P(S) {
            for (var D = v(z); D !== null; ) {
              if (D.callback === null) f(z);
              else if (D.startTime <= S) (f(z), (D.sortIndex = D.expirationTime), y(N, D));
              else break;
              D = v(z);
            }
          }
          function it(S) {
            if (((dt = !1), P(S), !Tt))
              if (v(N) !== null) ((Tt = !0), mt || ((mt = !0), m()));
              else {
                var D = v(z);
                D !== null && I(it, D.startTime - S);
              }
          }
          var mt = !1,
            J = -1,
            At = 5,
            pt = -1;
          function Yt() {
            return qt ? !0 : !(o.unstable_now() - pt < At);
          }
          function Qt() {
            if (((qt = !1), mt)) {
              var S = o.unstable_now();
              pt = S;
              var D = !0;
              try {
                t: {
                  ((Tt = !1), dt && ((dt = !1), yt(J), (J = -1)), (xt = !0));
                  var k = at;
                  try {
                    e: {
                      for (P(S), w = v(N); w !== null && !(w.expirationTime > S && Yt()); ) {
                        var tt = w.callback;
                        if (typeof tt == 'function') {
                          ((w.callback = null), (at = w.priorityLevel));
                          var ut = tt(w.expirationTime <= S);
                          if (((S = o.unstable_now()), typeof ut == 'function')) {
                            ((w.callback = ut), P(S), (D = !0));
                            break e;
                          }
                          (w === v(N) && f(N), P(S));
                        } else f(N);
                        w = v(N);
                      }
                      if (w !== null) D = !0;
                      else {
                        var d = v(z);
                        (d !== null && I(it, d.startTime - S), (D = !1));
                      }
                    }
                    break t;
                  } finally {
                    ((w = null), (at = k), (xt = !1));
                  }
                  D = void 0;
                }
              } finally {
                D ? m() : (mt = !1);
              }
            }
          }
          var m;
          if (typeof nt == 'function')
            m = function () {
              nt(Qt);
            };
          else if (typeof MessageChannel < 'u') {
            var T = new MessageChannel(),
              j = T.port2;
            ((T.port1.onmessage = Qt),
              (m = function () {
                j.postMessage(null);
              }));
          } else
            m = function () {
              H(Qt, 0);
            };
          function I(S, D) {
            J = H(function () {
              S(o.unstable_now());
            }, D);
          }
          ((o.unstable_IdlePriority = 5),
            (o.unstable_ImmediatePriority = 1),
            (o.unstable_LowPriority = 4),
            (o.unstable_NormalPriority = 3),
            (o.unstable_Profiling = null),
            (o.unstable_UserBlockingPriority = 2),
            (o.unstable_cancelCallback = function (S) {
              S.callback = null;
            }),
            (o.unstable_forceFrameRate = function (S) {
              0 > S || 125 < S
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (At = 0 < S ? Math.floor(1e3 / S) : 5);
            }),
            (o.unstable_getCurrentPriorityLevel = function () {
              return at;
            }),
            (o.unstable_next = function (S) {
              switch (at) {
                case 1:
                case 2:
                case 3:
                  var D = 3;
                  break;
                default:
                  D = at;
              }
              var k = at;
              at = D;
              try {
                return S();
              } finally {
                at = k;
              }
            }),
            (o.unstable_requestPaint = function () {
              qt = !0;
            }),
            (o.unstable_runWithPriority = function (S, D) {
              switch (S) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  S = 3;
              }
              var k = at;
              at = S;
              try {
                return D();
              } finally {
                at = k;
              }
            }),
            (o.unstable_scheduleCallback = function (S, D, k) {
              var tt = o.unstable_now();
              switch (
                (typeof k == 'object' && k !== null
                  ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? tt + k : tt))
                  : (k = tt),
                S)
              ) {
                case 1:
                  var ut = -1;
                  break;
                case 2:
                  ut = 250;
                  break;
                case 5:
                  ut = 1073741823;
                  break;
                case 4:
                  ut = 1e4;
                  break;
                default:
                  ut = 5e3;
              }
              return (
                (ut = k + ut),
                (S = {
                  id: Y++,
                  callback: D,
                  priorityLevel: S,
                  startTime: k,
                  expirationTime: ut,
                  sortIndex: -1,
                }),
                k > tt
                  ? ((S.sortIndex = k),
                    y(z, S),
                    v(N) === null &&
                      S === v(z) &&
                      (dt ? (yt(J), (J = -1)) : (dt = !0), I(it, k - tt)))
                  : ((S.sortIndex = ut), y(N, S), Tt || xt || ((Tt = !0), mt || ((mt = !0), m()))),
                S
              );
            }),
            (o.unstable_shouldYield = Yt),
            (o.unstable_wrapCallback = function (S) {
              var D = at;
              return function () {
                var k = at;
                at = D;
                try {
                  return S.apply(this, arguments);
                } finally {
                  at = k;
                }
              };
            }));
        })(fi)),
      fi
    );
  }
  var Yf;
  function E0() {
    return (Yf || ((Yf = 1), (ci.exports = S0())), ci.exports);
  }
  var oi = { exports: {} },
    ne = {};
  var Gf;
  function T0() {
    if (Gf) return ne;
    Gf = 1;
    var o = ui();
    function y(N) {
      var z = 'https://react.dev/errors/' + N;
      if (1 < arguments.length) {
        z += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var Y = 2; Y < arguments.length; Y++)
          z += '&args[]=' + encodeURIComponent(arguments[Y]);
      }
      return (
        'Minified React error #' +
        N +
        '; visit ' +
        z +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function v() {}
    var f = {
        d: {
          f: v,
          r: function () {
            throw Error(y(522));
          },
          D: v,
          C: v,
          L: v,
          m: v,
          X: v,
          S: v,
          M: v,
        },
        p: 0,
        findDOMNode: null,
      },
      _ = Symbol.for('react.portal');
    function C(N, z, Y) {
      var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: _,
        key: w == null ? null : '' + w,
        children: N,
        containerInfo: z,
        implementation: Y,
      };
    }
    var Z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function $(N, z) {
      if (N === 'font') return '';
      if (typeof z == 'string') return z === 'use-credentials' ? z : '';
    }
    return (
      (ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
      (ne.createPortal = function (N, z) {
        var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!z || (z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)) throw Error(y(299));
        return C(N, z, null, Y);
      }),
      (ne.flushSync = function (N) {
        var z = Z.T,
          Y = f.p;
        try {
          if (((Z.T = null), (f.p = 2), N)) return N();
        } finally {
          ((Z.T = z), (f.p = Y), f.d.f());
        }
      }),
      (ne.preconnect = function (N, z) {
        typeof N == 'string' &&
          (z
            ? ((z = z.crossOrigin),
              (z = typeof z == 'string' ? (z === 'use-credentials' ? z : '') : void 0))
            : (z = null),
          f.d.C(N, z));
      }),
      (ne.prefetchDNS = function (N) {
        typeof N == 'string' && f.d.D(N);
      }),
      (ne.preinit = function (N, z) {
        if (typeof N == 'string' && z && typeof z.as == 'string') {
          var Y = z.as,
            w = $(Y, z.crossOrigin),
            at = typeof z.integrity == 'string' ? z.integrity : void 0,
            xt = typeof z.fetchPriority == 'string' ? z.fetchPriority : void 0;
          Y === 'style'
            ? f.d.S(N, typeof z.precedence == 'string' ? z.precedence : void 0, {
                crossOrigin: w,
                integrity: at,
                fetchPriority: xt,
              })
            : Y === 'script' &&
              f.d.X(N, {
                crossOrigin: w,
                integrity: at,
                fetchPriority: xt,
                nonce: typeof z.nonce == 'string' ? z.nonce : void 0,
              });
        }
      }),
      (ne.preinitModule = function (N, z) {
        if (typeof N == 'string')
          if (typeof z == 'object' && z !== null) {
            if (z.as == null || z.as === 'script') {
              var Y = $(z.as, z.crossOrigin);
              f.d.M(N, {
                crossOrigin: Y,
                integrity: typeof z.integrity == 'string' ? z.integrity : void 0,
                nonce: typeof z.nonce == 'string' ? z.nonce : void 0,
              });
            }
          } else z == null && f.d.M(N);
      }),
      (ne.preload = function (N, z) {
        if (typeof N == 'string' && typeof z == 'object' && z !== null && typeof z.as == 'string') {
          var Y = z.as,
            w = $(Y, z.crossOrigin);
          f.d.L(N, Y, {
            crossOrigin: w,
            integrity: typeof z.integrity == 'string' ? z.integrity : void 0,
            nonce: typeof z.nonce == 'string' ? z.nonce : void 0,
            type: typeof z.type == 'string' ? z.type : void 0,
            fetchPriority: typeof z.fetchPriority == 'string' ? z.fetchPriority : void 0,
            referrerPolicy: typeof z.referrerPolicy == 'string' ? z.referrerPolicy : void 0,
            imageSrcSet: typeof z.imageSrcSet == 'string' ? z.imageSrcSet : void 0,
            imageSizes: typeof z.imageSizes == 'string' ? z.imageSizes : void 0,
            media: typeof z.media == 'string' ? z.media : void 0,
          });
        }
      }),
      (ne.preloadModule = function (N, z) {
        if (typeof N == 'string')
          if (z) {
            var Y = $(z.as, z.crossOrigin);
            f.d.m(N, {
              as: typeof z.as == 'string' && z.as !== 'script' ? z.as : void 0,
              crossOrigin: Y,
              integrity: typeof z.integrity == 'string' ? z.integrity : void 0,
            });
          } else f.d.m(N);
      }),
      (ne.requestFormReset = function (N) {
        f.d.r(N);
      }),
      (ne.unstable_batchedUpdates = function (N, z) {
        return N(z);
      }),
      (ne.useFormState = function (N, z, Y) {
        return Z.H.useFormState(N, z, Y);
      }),
      (ne.useFormStatus = function () {
        return Z.H.useHostTransitionStatus();
      }),
      (ne.version = '19.2.3'),
      ne
    );
  }
  var Xf;
  function A0() {
    if (Xf) return oi.exports;
    Xf = 1;
    function o() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
        } catch (y) {
          console.error(y);
        }
    }
    return (o(), (oi.exports = T0()), oi.exports);
  }
  var Qf;
  function z0() {
    if (Qf) return Yn;
    Qf = 1;
    var o = E0(),
      y = ui(),
      v = A0();
    function f(t) {
      var e = 'https://react.dev/errors/' + t;
      if (1 < arguments.length) {
        e += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++)
          e += '&args[]=' + encodeURIComponent(arguments[l]);
      }
      return (
        'Minified React error #' +
        t +
        '; visit ' +
        e +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function _(t) {
      return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
    }
    function C(t) {
      var e = t,
        l = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
        while (t);
      }
      return e.tag === 3 ? l : null;
    }
    function Z(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
          return e.dehydrated;
      }
      return null;
    }
    function $(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
          return e.dehydrated;
      }
      return null;
    }
    function N(t) {
      if (C(t) !== t) throw Error(f(188));
    }
    function z(t) {
      var e = t.alternate;
      if (!e) {
        if (((e = C(t)), e === null)) throw Error(f(188));
        return e !== t ? null : t;
      }
      for (var l = t, n = e; ; ) {
        var a = l.return;
        if (a === null) break;
        var u = a.alternate;
        if (u === null) {
          if (((n = a.return), n !== null)) {
            l = n;
            continue;
          }
          break;
        }
        if (a.child === u.child) {
          for (u = a.child; u; ) {
            if (u === l) return (N(a), t);
            if (u === n) return (N(a), e);
            u = u.sibling;
          }
          throw Error(f(188));
        }
        if (l.return !== n.return) ((l = a), (n = u));
        else {
          for (var i = !1, c = a.child; c; ) {
            if (c === l) {
              ((i = !0), (l = a), (n = u));
              break;
            }
            if (c === n) {
              ((i = !0), (n = a), (l = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) {
            for (c = u.child; c; ) {
              if (c === l) {
                ((i = !0), (l = u), (n = a));
                break;
              }
              if (c === n) {
                ((i = !0), (n = u), (l = a));
                break;
              }
              c = c.sibling;
            }
            if (!i) throw Error(f(189));
          }
        }
        if (l.alternate !== n) throw Error(f(190));
      }
      if (l.tag !== 3) throw Error(f(188));
      return l.stateNode.current === l ? t : e;
    }
    function Y(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (((e = Y(t)), e !== null)) return e;
        t = t.sibling;
      }
      return null;
    }
    var w = Object.assign,
      at = Symbol.for('react.element'),
      xt = Symbol.for('react.transitional.element'),
      Tt = Symbol.for('react.portal'),
      dt = Symbol.for('react.fragment'),
      qt = Symbol.for('react.strict_mode'),
      H = Symbol.for('react.profiler'),
      yt = Symbol.for('react.consumer'),
      nt = Symbol.for('react.context'),
      P = Symbol.for('react.forward_ref'),
      it = Symbol.for('react.suspense'),
      mt = Symbol.for('react.suspense_list'),
      J = Symbol.for('react.memo'),
      At = Symbol.for('react.lazy'),
      pt = Symbol.for('react.activity'),
      Yt = Symbol.for('react.memo_cache_sentinel'),
      Qt = Symbol.iterator;
    function m(t) {
      return t === null || typeof t != 'object'
        ? null
        : ((t = (Qt && t[Qt]) || t['@@iterator']), typeof t == 'function' ? t : null);
    }
    var T = Symbol.for('react.client.reference');
    function j(t) {
      if (t == null) return null;
      if (typeof t == 'function') return t.$$typeof === T ? null : t.displayName || t.name || null;
      if (typeof t == 'string') return t;
      switch (t) {
        case dt:
          return 'Fragment';
        case H:
          return 'Profiler';
        case qt:
          return 'StrictMode';
        case it:
          return 'Suspense';
        case mt:
          return 'SuspenseList';
        case pt:
          return 'Activity';
      }
      if (typeof t == 'object')
        switch (t.$$typeof) {
          case Tt:
            return 'Portal';
          case nt:
            return t.displayName || 'Context';
          case yt:
            return (t._context.displayName || 'Context') + '.Consumer';
          case P:
            var e = t.render;
            return (
              (t = t.displayName),
              t ||
                ((t = e.displayName || e.name || ''),
                (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
              t
            );
          case J:
            return ((e = t.displayName || null), e !== null ? e : j(t.type) || 'Memo');
          case At:
            ((e = t._payload), (t = t._init));
            try {
              return j(t(e));
            } catch {}
        }
      return null;
    }
    var I = Array.isArray,
      S = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      k = { pending: !1, data: null, method: null, action: null },
      tt = [],
      ut = -1;
    function d(t) {
      return { current: t };
    }
    function O(t) {
      0 > ut || ((t.current = tt[ut]), (tt[ut] = null), ut--);
    }
    function L(t, e) {
      (ut++, (tt[ut] = t.current), (t.current = e));
    }
    var B = d(null),
      V = d(null),
      K = d(null),
      et = d(null);
    function R(t, e) {
      switch ((L(K, e), L(V, t), L(B, null), e.nodeType)) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? Ld(t) : 0;
          break;
        default:
          if (((t = e.tagName), (e = e.namespaceURI))) ((e = Ld(e)), (t = wd(e, t)));
          else
            switch (t) {
              case 'svg':
                t = 1;
                break;
              case 'math':
                t = 2;
                break;
              default:
                t = 0;
            }
      }
      (O(B), L(B, t));
    }
    function q() {
      (O(B), O(V), O(K));
    }
    function ot(t) {
      t.memoizedState !== null && L(et, t);
      var e = B.current,
        l = wd(e, t.type);
      e !== l && (L(V, t), L(B, l));
    }
    function Nt(t) {
      (V.current === t && (O(B), O(V)), et.current === t && (O(et), (Ua._currentValue = k)));
    }
    var jt, ae;
    function Nl(t) {
      if (jt === void 0)
        try {
          throw Error();
        } catch (l) {
          var e = l.stack.trim().match(/\n( *(at )?)/);
          ((jt = (e && e[1]) || ''),
            (ae =
              -1 <
              l.stack.indexOf(`
    at`)
                ? ' (<anonymous>)'
                : -1 < l.stack.indexOf('@')
                  ? '@unknown:0:0'
                  : ''));
        }
      return (
        `
` +
        jt +
        t +
        ae
      );
    }
    var vi = !1;
    function pi(t, e) {
      if (!t || vi) return '';
      vi = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var n = {
          DetermineComponentFrameRoot: function () {
            try {
              if (e) {
                var M = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(M.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(M, []);
                  } catch (E) {
                    var b = E;
                  }
                  Reflect.construct(t, [], M);
                } else {
                  try {
                    M.call();
                  } catch (E) {
                    b = E;
                  }
                  t.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  b = E;
                }
                (M = t()) && typeof M.catch == 'function' && M.catch(function () {});
              }
            } catch (E) {
              if (E && b && typeof E.stack == 'string') return [E.stack, b.stack];
            }
            return [null, null];
          },
        };
        n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
        var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name');
        a &&
          a.configurable &&
          Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
            value: 'DetermineComponentFrameRoot',
          });
        var u = n.DetermineComponentFrameRoot(),
          i = u[0],
          c = u[1];
        if (i && c) {
          var s = i.split(`
`),
            p = c.split(`
`);
          for (a = n = 0; n < s.length && !s[n].includes('DetermineComponentFrameRoot'); ) n++;
          for (; a < p.length && !p[a].includes('DetermineComponentFrameRoot'); ) a++;
          if (n === s.length || a === p.length)
            for (n = s.length - 1, a = p.length - 1; 1 <= n && 0 <= a && s[n] !== p[a]; ) a--;
          for (; 1 <= n && 0 <= a; n--, a--)
            if (s[n] !== p[a]) {
              if (n !== 1 || a !== 1)
                do
                  if ((n--, a--, 0 > a || s[n] !== p[a])) {
                    var A =
                      `
` + s[n].replace(' at new ', ' at ');
                    return (
                      t.displayName &&
                        A.includes('<anonymous>') &&
                        (A = A.replace('<anonymous>', t.displayName)),
                      A
                    );
                  }
                while (1 <= n && 0 <= a);
              break;
            }
        }
      } finally {
        ((vi = !1), (Error.prepareStackTrace = l));
      }
      return (l = t ? t.displayName || t.name : '') ? Nl(l) : '';
    }
    function Xy(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Nl(t.type);
        case 16:
          return Nl('Lazy');
        case 13:
          return t.child !== e && e !== null ? Nl('Suspense Fallback') : Nl('Suspense');
        case 19:
          return Nl('SuspenseList');
        case 0:
        case 15:
          return pi(t.type, !1);
        case 11:
          return pi(t.type.render, !1);
        case 1:
          return pi(t.type, !0);
        case 31:
          return Nl('Activity');
        default:
          return '';
      }
    }
    function go(t) {
      try {
        var e = '',
          l = null;
        do ((e += Xy(t, l)), (l = t), (t = t.return));
        while (t);
        return e;
      } catch (n) {
        return (
          `
Error generating stack: ` +
          n.message +
          `
` +
          n.stack
        );
      }
    }
    var bi = Object.prototype.hasOwnProperty,
      Si = o.unstable_scheduleCallback,
      Ei = o.unstable_cancelCallback,
      Qy = o.unstable_shouldYield,
      Zy = o.unstable_requestPaint,
      ye = o.unstable_now,
      Vy = o.unstable_getCurrentPriorityLevel,
      ho = o.unstable_ImmediatePriority,
      vo = o.unstable_UserBlockingPriority,
      Ya = o.unstable_NormalPriority,
      Ky = o.unstable_LowPriority,
      po = o.unstable_IdlePriority,
      Jy = o.log,
      ky = o.unstable_setDisableYieldValue,
      Vn = null,
      me = null;
    function cl(t) {
      if ((typeof Jy == 'function' && ky(t), me && typeof me.setStrictMode == 'function'))
        try {
          me.setStrictMode(Vn, t);
        } catch {}
    }
    var ge = Math.clz32 ? Math.clz32 : Fy,
      Wy = Math.log,
      $y = Math.LN2;
    function Fy(t) {
      return ((t >>>= 0), t === 0 ? 32 : (31 - ((Wy(t) / $y) | 0)) | 0);
    }
    var Ga = 256,
      Xa = 262144,
      Qa = 4194304;
    function Ul(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return t;
      }
    }
    function Za(t, e, l) {
      var n = t.pendingLanes;
      if (n === 0) return 0;
      var a = 0,
        u = t.suspendedLanes,
        i = t.pingedLanes;
      t = t.warmLanes;
      var c = n & 134217727;
      return (
        c !== 0
          ? ((n = c & ~u),
            n !== 0
              ? (a = Ul(n))
              : ((i &= c), i !== 0 ? (a = Ul(i)) : l || ((l = c & ~t), l !== 0 && (a = Ul(l)))))
          : ((c = n & ~u),
            c !== 0
              ? (a = Ul(c))
              : i !== 0
                ? (a = Ul(i))
                : l || ((l = n & ~t), l !== 0 && (a = Ul(l)))),
        a === 0
          ? 0
          : e !== 0 &&
              e !== a &&
              (e & u) === 0 &&
              ((u = a & -a), (l = e & -e), u >= l || (u === 32 && (l & 4194048) !== 0))
            ? e
            : a
      );
    }
    function Kn(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Iy(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function bo() {
      var t = Qa;
      return ((Qa <<= 1), (Qa & 62914560) === 0 && (Qa = 4194304), t);
    }
    function Ti(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function Jn(t, e) {
      ((t.pendingLanes |= e),
        e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
    }
    function Py(t, e, l, n, a, u) {
      var i = t.pendingLanes;
      ((t.pendingLanes = l),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.warmLanes = 0),
        (t.expiredLanes &= l),
        (t.entangledLanes &= l),
        (t.errorRecoveryDisabledLanes &= l),
        (t.shellSuspendCounter = 0));
      var c = t.entanglements,
        s = t.expirationTimes,
        p = t.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var A = 31 - ge(l),
          M = 1 << A;
        ((c[A] = 0), (s[A] = -1));
        var b = p[A];
        if (b !== null)
          for (p[A] = null, A = 0; A < b.length; A++) {
            var E = b[A];
            E !== null && (E.lane &= -536870913);
          }
        l &= ~M;
      }
      (n !== 0 && So(t, n, 0),
        u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
    }
    function So(t, e, l) {
      ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
      var n = 31 - ge(e);
      ((t.entangledLanes |= e),
        (t.entanglements[n] = t.entanglements[n] | 1073741824 | (l & 261930)));
    }
    function Eo(t, e) {
      var l = (t.entangledLanes |= e);
      for (t = t.entanglements; l; ) {
        var n = 31 - ge(l),
          a = 1 << n;
        ((a & e) | (t[n] & e) && (t[n] |= e), (l &= ~a));
      }
    }
    function To(t, e) {
      var l = e & -e;
      return ((l = (l & 42) !== 0 ? 1 : Ai(l)), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l);
    }
    function Ai(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function zi(t) {
      return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function Ao() {
      var t = D.p;
      return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : f0(t.type));
    }
    function zo(t, e) {
      var l = D.p;
      try {
        return ((D.p = t), e());
      } finally {
        D.p = l;
      }
    }
    var fl = Math.random().toString(36).slice(2),
      It = '__reactFiber$' + fl,
      ie = '__reactProps$' + fl,
      tn = '__reactContainer$' + fl,
      _i = '__reactEvents$' + fl,
      tm = '__reactListeners$' + fl,
      em = '__reactHandles$' + fl,
      _o = '__reactResources$' + fl,
      kn = '__reactMarker$' + fl;
    function xi(t) {
      (delete t[It], delete t[ie], delete t[_i], delete t[tm], delete t[em]);
    }
    function en(t) {
      var e = t[It];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if ((e = l[tn] || l[It])) {
          if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
            for (t = Kd(t); t !== null; ) {
              if ((l = t[It])) return l;
              t = Kd(t);
            }
          return e;
        }
        ((t = l), (l = t.parentNode));
      }
      return null;
    }
    function ln(t) {
      if ((t = t[It] || t[tn])) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function Wn(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(f(33));
    }
    function nn(t) {
      var e = t[_o];
      return (e || (e = t[_o] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
    }
    function $t(t) {
      t[kn] = !0;
    }
    var xo = new Set(),
      Oo = {};
    function Hl(t, e) {
      (an(t, e), an(t + 'Capture', e));
    }
    function an(t, e) {
      for (Oo[t] = e, t = 0; t < e.length; t++) xo.add(e[t]);
    }
    var lm = RegExp(
        '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
      ),
      Mo = {},
      Do = {};
    function nm(t) {
      return bi.call(Do, t)
        ? !0
        : bi.call(Mo, t)
          ? !1
          : lm.test(t)
            ? (Do[t] = !0)
            : ((Mo[t] = !0), !1);
    }
    function Va(t, e, l) {
      if (nm(e))
        if (l === null) t.removeAttribute(e);
        else {
          switch (typeof l) {
            case 'undefined':
            case 'function':
            case 'symbol':
              t.removeAttribute(e);
              return;
            case 'boolean':
              var n = e.toLowerCase().slice(0, 5);
              if (n !== 'data-' && n !== 'aria-') {
                t.removeAttribute(e);
                return;
              }
          }
          t.setAttribute(e, '' + l);
        }
    }
    function Ka(t, e, l) {
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
          case 'boolean':
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, '' + l);
      }
    }
    function Xe(t, e, l, n) {
      if (n === null) t.removeAttribute(l);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
          case 'boolean':
            t.removeAttribute(l);
            return;
        }
        t.setAttributeNS(e, l, '' + n);
      }
    }
    function Ae(t) {
      switch (typeof t) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
          return t;
        case 'object':
          return t;
        default:
          return '';
      }
    }
    function Ro(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
    }
    function am(t, e, l) {
      var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (
        !t.hasOwnProperty(e) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
      ) {
        var a = n.get,
          u = n.set;
        return (
          Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (i) {
              ((l = '' + i), u.call(this, i));
            },
          }),
          Object.defineProperty(t, e, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return l;
            },
            setValue: function (i) {
              l = '' + i;
            },
            stopTracking: function () {
              ((t._valueTracker = null), delete t[e]);
            },
          }
        );
      }
    }
    function Oi(t) {
      if (!t._valueTracker) {
        var e = Ro(t) ? 'checked' : 'value';
        t._valueTracker = am(t, e, '' + t[e]);
      }
    }
    function Co(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var l = e.getValue(),
        n = '';
      return (
        t && (n = Ro(t) ? (t.checked ? 'true' : 'false') : t.value),
        (t = n),
        t !== l ? (e.setValue(t), !0) : !1
      );
    }
    function Ja(t) {
      if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var um = /[\n"\\]/g;
    function ze(t) {
      return t.replace(um, function (e) {
        return '\\' + e.charCodeAt(0).toString(16) + ' ';
      });
    }
    function Mi(t, e, l, n, a, u, i, c) {
      ((t.name = ''),
        i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean'
          ? (t.type = i)
          : t.removeAttribute('type'),
        e != null
          ? i === 'number'
            ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + Ae(e))
            : t.value !== '' + Ae(e) && (t.value = '' + Ae(e))
          : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
        e != null
          ? Di(t, i, Ae(e))
          : l != null
            ? Di(t, i, Ae(l))
            : n != null && t.removeAttribute('value'),
        a == null && u != null && (t.defaultChecked = !!u),
        a != null && (t.checked = a && typeof a != 'function' && typeof a != 'symbol'),
        c != null && typeof c != 'function' && typeof c != 'symbol' && typeof c != 'boolean'
          ? (t.name = '' + Ae(c))
          : t.removeAttribute('name'));
    }
    function No(t, e, l, n, a, u, i, c) {
      if (
        (u != null &&
          typeof u != 'function' &&
          typeof u != 'symbol' &&
          typeof u != 'boolean' &&
          (t.type = u),
        e != null || l != null)
      ) {
        if (!((u !== 'submit' && u !== 'reset') || e != null)) {
          Oi(t);
          return;
        }
        ((l = l != null ? '' + Ae(l) : ''),
          (e = e != null ? '' + Ae(e) : l),
          c || e === t.value || (t.value = e),
          (t.defaultValue = e));
      }
      ((n = n ?? a),
        (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
        (t.checked = c ? t.checked : !!n),
        (t.defaultChecked = !!n),
        i != null &&
          typeof i != 'function' &&
          typeof i != 'symbol' &&
          typeof i != 'boolean' &&
          (t.name = i),
        Oi(t));
    }
    function Di(t, e, l) {
      (e === 'number' && Ja(t.ownerDocument) === t) ||
        t.defaultValue === '' + l ||
        (t.defaultValue = '' + l);
    }
    function un(t, e, l, n) {
      if (((t = t.options), e)) {
        e = {};
        for (var a = 0; a < l.length; a++) e['$' + l[a]] = !0;
        for (l = 0; l < t.length; l++)
          ((a = e.hasOwnProperty('$' + t[l].value)),
            t[l].selected !== a && (t[l].selected = a),
            a && n && (t[l].defaultSelected = !0));
      } else {
        for (l = '' + Ae(l), e = null, a = 0; a < t.length; a++) {
          if (t[a].value === l) {
            ((t[a].selected = !0), n && (t[a].defaultSelected = !0));
            return;
          }
          e !== null || t[a].disabled || (e = t[a]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Uo(t, e, l) {
      if (e != null && ((e = '' + Ae(e)), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? '' + Ae(l) : '';
    }
    function Ho(t, e, l, n) {
      if (e == null) {
        if (n != null) {
          if (l != null) throw Error(f(92));
          if (I(n)) {
            if (1 < n.length) throw Error(f(93));
            n = n[0];
          }
          l = n;
        }
        (l == null && (l = ''), (e = l));
      }
      ((l = Ae(e)),
        (t.defaultValue = l),
        (n = t.textContent),
        n === l && n !== '' && n !== null && (t.value = n),
        Oi(t));
    }
    function cn(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var im = new Set(
      'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
        ' ',
      ),
    );
    function Bo(t, e, l) {
      var n = e.indexOf('--') === 0;
      l == null || typeof l == 'boolean' || l === ''
        ? n
          ? t.setProperty(e, '')
          : e === 'float'
            ? (t.cssFloat = '')
            : (t[e] = '')
        : n
          ? t.setProperty(e, l)
          : typeof l != 'number' || l === 0 || im.has(e)
            ? e === 'float'
              ? (t.cssFloat = l)
              : (t[e] = ('' + l).trim())
            : (t[e] = l + 'px');
    }
    function jo(t, e, l) {
      if (e != null && typeof e != 'object') throw Error(f(62));
      if (((t = t.style), l != null)) {
        for (var n in l)
          !l.hasOwnProperty(n) ||
            (e != null && e.hasOwnProperty(n)) ||
            (n.indexOf('--') === 0
              ? t.setProperty(n, '')
              : n === 'float'
                ? (t.cssFloat = '')
                : (t[n] = ''));
        for (var a in e) ((n = e[a]), e.hasOwnProperty(a) && l[a] !== n && Bo(t, a, n));
      } else for (var u in e) e.hasOwnProperty(u) && Bo(t, u, e[u]);
    }
    function Ri(t) {
      if (t.indexOf('-') === -1) return !1;
      switch (t) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var cm = new Map([
        ['acceptCharset', 'accept-charset'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
        ['crossOrigin', 'crossorigin'],
        ['accentHeight', 'accent-height'],
        ['alignmentBaseline', 'alignment-baseline'],
        ['arabicForm', 'arabic-form'],
        ['baselineShift', 'baseline-shift'],
        ['capHeight', 'cap-height'],
        ['clipPath', 'clip-path'],
        ['clipRule', 'clip-rule'],
        ['colorInterpolation', 'color-interpolation'],
        ['colorInterpolationFilters', 'color-interpolation-filters'],
        ['colorProfile', 'color-profile'],
        ['colorRendering', 'color-rendering'],
        ['dominantBaseline', 'dominant-baseline'],
        ['enableBackground', 'enable-background'],
        ['fillOpacity', 'fill-opacity'],
        ['fillRule', 'fill-rule'],
        ['floodColor', 'flood-color'],
        ['floodOpacity', 'flood-opacity'],
        ['fontFamily', 'font-family'],
        ['fontSize', 'font-size'],
        ['fontSizeAdjust', 'font-size-adjust'],
        ['fontStretch', 'font-stretch'],
        ['fontStyle', 'font-style'],
        ['fontVariant', 'font-variant'],
        ['fontWeight', 'font-weight'],
        ['glyphName', 'glyph-name'],
        ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
        ['glyphOrientationVertical', 'glyph-orientation-vertical'],
        ['horizAdvX', 'horiz-adv-x'],
        ['horizOriginX', 'horiz-origin-x'],
        ['imageRendering', 'image-rendering'],
        ['letterSpacing', 'letter-spacing'],
        ['lightingColor', 'lighting-color'],
        ['markerEnd', 'marker-end'],
        ['markerMid', 'marker-mid'],
        ['markerStart', 'marker-start'],
        ['overlinePosition', 'overline-position'],
        ['overlineThickness', 'overline-thickness'],
        ['paintOrder', 'paint-order'],
        ['panose-1', 'panose-1'],
        ['pointerEvents', 'pointer-events'],
        ['renderingIntent', 'rendering-intent'],
        ['shapeRendering', 'shape-rendering'],
        ['stopColor', 'stop-color'],
        ['stopOpacity', 'stop-opacity'],
        ['strikethroughPosition', 'strikethrough-position'],
        ['strikethroughThickness', 'strikethrough-thickness'],
        ['strokeDasharray', 'stroke-dasharray'],
        ['strokeDashoffset', 'stroke-dashoffset'],
        ['strokeLinecap', 'stroke-linecap'],
        ['strokeLinejoin', 'stroke-linejoin'],
        ['strokeMiterlimit', 'stroke-miterlimit'],
        ['strokeOpacity', 'stroke-opacity'],
        ['strokeWidth', 'stroke-width'],
        ['textAnchor', 'text-anchor'],
        ['textDecoration', 'text-decoration'],
        ['textRendering', 'text-rendering'],
        ['transformOrigin', 'transform-origin'],
        ['underlinePosition', 'underline-position'],
        ['underlineThickness', 'underline-thickness'],
        ['unicodeBidi', 'unicode-bidi'],
        ['unicodeRange', 'unicode-range'],
        ['unitsPerEm', 'units-per-em'],
        ['vAlphabetic', 'v-alphabetic'],
        ['vHanging', 'v-hanging'],
        ['vIdeographic', 'v-ideographic'],
        ['vMathematical', 'v-mathematical'],
        ['vectorEffect', 'vector-effect'],
        ['vertAdvY', 'vert-adv-y'],
        ['vertOriginX', 'vert-origin-x'],
        ['vertOriginY', 'vert-origin-y'],
        ['wordSpacing', 'word-spacing'],
        ['writingMode', 'writing-mode'],
        ['xmlnsXlink', 'xmlns:xlink'],
        ['xHeight', 'x-height'],
      ]),
      fm =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ka(t) {
      return fm.test('' + t)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : t;
    }
    function Qe() {}
    var Ci = null;
    function Ni(t) {
      return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
      );
    }
    var fn = null,
      on = null;
    function qo(t) {
      var e = ln(t);
      if (e && (t = e.stateNode)) {
        var l = t[ie] || null;
        t: switch (((t = e.stateNode), e.type)) {
          case 'input':
            if (
              (Mi(
                t,
                l.value,
                l.defaultValue,
                l.defaultValue,
                l.checked,
                l.defaultChecked,
                l.type,
                l.name,
              ),
              (e = l.name),
              l.type === 'radio' && e != null)
            ) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (
                l = l.querySelectorAll('input[name="' + ze('' + e) + '"][type="radio"]'), e = 0;
                e < l.length;
                e++
              ) {
                var n = l[e];
                if (n !== t && n.form === t.form) {
                  var a = n[ie] || null;
                  if (!a) throw Error(f(90));
                  Mi(
                    n,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (e = 0; e < l.length; e++) ((n = l[e]), n.form === t.form && Co(n));
            }
            break t;
          case 'textarea':
            Uo(t, l.value, l.defaultValue);
            break t;
          case 'select':
            ((e = l.value), e != null && un(t, !!l.multiple, e, !1));
        }
      }
    }
    var Ui = !1;
    function Lo(t, e, l) {
      if (Ui) return t(e, l);
      Ui = !0;
      try {
        var n = t(e);
        return n;
      } finally {
        if (
          ((Ui = !1),
          (fn !== null || on !== null) &&
            (Bu(), fn && ((e = fn), (t = on), (on = fn = null), qo(e), t)))
        )
          for (e = 0; e < t.length; e++) qo(t[e]);
      }
    }
    function $n(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var n = l[ie] || null;
      if (n === null) return null;
      l = n[e];
      t: switch (e) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          ((n = !n.disabled) ||
            ((t = t.type),
            (n = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
            (t = !n));
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (l && typeof l != 'function') throw Error(f(231, e, typeof l));
      return l;
    }
    var Ze = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
      ),
      Hi = !1;
    if (Ze)
      try {
        var Fn = {};
        (Object.defineProperty(Fn, 'passive', {
          get: function () {
            Hi = !0;
          },
        }),
          window.addEventListener('test', Fn, Fn),
          window.removeEventListener('test', Fn, Fn));
      } catch {
        Hi = !1;
      }
    var ol = null,
      Bi = null,
      Wa = null;
    function wo() {
      if (Wa) return Wa;
      var t,
        e = Bi,
        l = e.length,
        n,
        a = 'value' in ol ? ol.value : ol.textContent,
        u = a.length;
      for (t = 0; t < l && e[t] === a[t]; t++);
      var i = l - t;
      for (n = 1; n <= i && e[l - n] === a[u - n]; n++);
      return (Wa = a.slice(t, 1 < n ? 1 - n : void 0));
    }
    function $a(t) {
      var e = t.keyCode;
      return (
        'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
      );
    }
    function Fa() {
      return !0;
    }
    function Yo() {
      return !1;
    }
    function ce(t) {
      function e(l, n, a, u, i) {
        ((this._reactName = l),
          (this._targetInst = a),
          (this.type = n),
          (this.nativeEvent = u),
          (this.target = i),
          (this.currentTarget = null));
        for (var c in t) t.hasOwnProperty(c) && ((l = t[c]), (this[c] = l ? l(u) : u[c]));
        return (
          (this.isDefaultPrevented = (
            u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
          )
            ? Fa
            : Yo),
          (this.isPropagationStopped = Yo),
          this
        );
      }
      return (
        w(e.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var l = this.nativeEvent;
            l &&
              (l.preventDefault
                ? l.preventDefault()
                : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
              (this.isDefaultPrevented = Fa));
          },
          stopPropagation: function () {
            var l = this.nativeEvent;
            l &&
              (l.stopPropagation
                ? l.stopPropagation()
                : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
              (this.isPropagationStopped = Fa));
          },
          persist: function () {},
          isPersistent: Fa,
        }),
        e
      );
    }
    var Bl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Ia = ce(Bl),
      In = w({}, Bl, { view: 0, detail: 0 }),
      om = ce(In),
      ji,
      qi,
      Pn,
      Pa = w({}, In, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: wi,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
          return t.relatedTarget === void 0
            ? t.fromElement === t.srcElement
              ? t.toElement
              : t.fromElement
            : t.relatedTarget;
        },
        movementX: function (t) {
          return 'movementX' in t
            ? t.movementX
            : (t !== Pn &&
                (Pn && t.type === 'mousemove'
                  ? ((ji = t.screenX - Pn.screenX), (qi = t.screenY - Pn.screenY))
                  : (qi = ji = 0),
                (Pn = t)),
              ji);
        },
        movementY: function (t) {
          return 'movementY' in t ? t.movementY : qi;
        },
      }),
      Go = ce(Pa),
      sm = w({}, Pa, { dataTransfer: 0 }),
      rm = ce(sm),
      dm = w({}, In, { relatedTarget: 0 }),
      Li = ce(dm),
      ym = w({}, Bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      mm = ce(ym),
      gm = w({}, Bl, {
        clipboardData: function (t) {
          return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
        },
      }),
      hm = ce(gm),
      vm = w({}, Bl, { data: 0 }),
      Xo = ce(vm),
      pm = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      bm = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      Sm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function Em(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = Sm[t]) ? !!e[t] : !1;
    }
    function wi() {
      return Em;
    }
    var Tm = w({}, In, {
        key: function (t) {
          if (t.key) {
            var e = pm[t.key] || t.key;
            if (e !== 'Unidentified') return e;
          }
          return t.type === 'keypress'
            ? ((t = $a(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
            : t.type === 'keydown' || t.type === 'keyup'
              ? bm[t.keyCode] || 'Unidentified'
              : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: wi,
        charCode: function (t) {
          return t.type === 'keypress' ? $a(t) : 0;
        },
        keyCode: function (t) {
          return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
        },
        which: function (t) {
          return t.type === 'keypress'
            ? $a(t)
            : t.type === 'keydown' || t.type === 'keyup'
              ? t.keyCode
              : 0;
        },
      }),
      Am = ce(Tm),
      zm = w({}, Pa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Qo = ce(zm),
      _m = w({}, In, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: wi,
      }),
      xm = ce(_m),
      Om = w({}, Bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Mm = ce(Om),
      Dm = w({}, Pa, {
        deltaX: function (t) {
          return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
        },
        deltaY: function (t) {
          return 'deltaY' in t
            ? t.deltaY
            : 'wheelDeltaY' in t
              ? -t.wheelDeltaY
              : 'wheelDelta' in t
                ? -t.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Rm = ce(Dm),
      Cm = w({}, Bl, { newState: 0, oldState: 0 }),
      Nm = ce(Cm),
      Um = [9, 13, 27, 32],
      Yi = Ze && 'CompositionEvent' in window,
      ta = null;
    Ze && 'documentMode' in document && (ta = document.documentMode);
    var Hm = Ze && 'TextEvent' in window && !ta,
      Zo = Ze && (!Yi || (ta && 8 < ta && 11 >= ta)),
      Vo = ' ',
      Ko = !1;
    function Jo(t, e) {
      switch (t) {
        case 'keyup':
          return Um.indexOf(e.keyCode) !== -1;
        case 'keydown':
          return e.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0;
        default:
          return !1;
      }
    }
    function ko(t) {
      return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
    }
    var sn = !1;
    function Bm(t, e) {
      switch (t) {
        case 'compositionend':
          return ko(e);
        case 'keypress':
          return e.which !== 32 ? null : ((Ko = !0), Vo);
        case 'textInput':
          return ((t = e.data), t === Vo && Ko ? null : t);
        default:
          return null;
      }
    }
    function jm(t, e) {
      if (sn)
        return t === 'compositionend' || (!Yi && Jo(t, e))
          ? ((t = wo()), (Wa = Bi = ol = null), (sn = !1), t)
          : null;
      switch (t) {
        case 'paste':
          return null;
        case 'keypress':
          if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case 'compositionend':
          return Zo && e.locale !== 'ko' ? null : e.data;
        default:
          return null;
      }
    }
    var qm = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Wo(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === 'input' ? !!qm[t.type] : e === 'textarea';
    }
    function $o(t, e, l, n) {
      (fn ? (on ? on.push(n) : (on = [n])) : (fn = n),
        (e = Xu(e, 'onChange')),
        0 < e.length &&
          ((l = new Ia('onChange', 'change', null, l, n)), t.push({ event: l, listeners: e })));
    }
    var ea = null,
      la = null;
    function Lm(t) {
      Nd(t, 0);
    }
    function tu(t) {
      var e = Wn(t);
      if (Co(e)) return t;
    }
    function Fo(t, e) {
      if (t === 'change') return e;
    }
    var Io = !1;
    if (Ze) {
      var Gi;
      if (Ze) {
        var Xi = 'oninput' in document;
        if (!Xi) {
          var Po = document.createElement('div');
          (Po.setAttribute('oninput', 'return;'), (Xi = typeof Po.oninput == 'function'));
        }
        Gi = Xi;
      } else Gi = !1;
      Io = Gi && (!document.documentMode || 9 < document.documentMode);
    }
    function ts() {
      ea && (ea.detachEvent('onpropertychange', es), (la = ea = null));
    }
    function es(t) {
      if (t.propertyName === 'value' && tu(la)) {
        var e = [];
        ($o(e, la, t, Ni(t)), Lo(Lm, e));
      }
    }
    function wm(t, e, l) {
      t === 'focusin'
        ? (ts(), (ea = e), (la = l), ea.attachEvent('onpropertychange', es))
        : t === 'focusout' && ts();
    }
    function Ym(t) {
      if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return tu(la);
    }
    function Gm(t, e) {
      if (t === 'click') return tu(e);
    }
    function Xm(t, e) {
      if (t === 'input' || t === 'change') return tu(e);
    }
    function Qm(t, e) {
      return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
    }
    var he = typeof Object.is == 'function' ? Object.is : Qm;
    function na(t, e) {
      if (he(t, e)) return !0;
      if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
      var l = Object.keys(t),
        n = Object.keys(e);
      if (l.length !== n.length) return !1;
      for (n = 0; n < l.length; n++) {
        var a = l[n];
        if (!bi.call(e, a) || !he(t[a], e[a])) return !1;
      }
      return !0;
    }
    function ls(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function ns(t, e) {
      var l = ls(t);
      t = 0;
      for (var n; l; ) {
        if (l.nodeType === 3) {
          if (((n = t + l.textContent.length), t <= e && n >= e)) return { node: l, offset: e - t };
          t = n;
        }
        t: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break t;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = ls(l);
      }
    }
    function as(t, e) {
      return t && e
        ? t === e
          ? !0
          : t && t.nodeType === 3
            ? !1
            : e && e.nodeType === 3
              ? as(t, e.parentNode)
              : 'contains' in t
                ? t.contains(e)
                : t.compareDocumentPosition
                  ? !!(t.compareDocumentPosition(e) & 16)
                  : !1
        : !1;
    }
    function us(t) {
      t =
        t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
          ? t.ownerDocument.defaultView
          : window;
      for (var e = Ja(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == 'string';
        } catch {
          l = !1;
        }
        if (l) t = e.contentWindow;
        else break;
        e = Ja(t.document);
      }
      return e;
    }
    function Qi(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        e &&
        ((e === 'input' &&
          (t.type === 'text' ||
            t.type === 'search' ||
            t.type === 'tel' ||
            t.type === 'url' ||
            t.type === 'password')) ||
          e === 'textarea' ||
          t.contentEditable === 'true')
      );
    }
    var Zm = Ze && 'documentMode' in document && 11 >= document.documentMode,
      rn = null,
      Zi = null,
      aa = null,
      Vi = !1;
    function is(t, e, l) {
      var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Vi ||
        rn == null ||
        rn !== Ja(n) ||
        ((n = rn),
        'selectionStart' in n && Qi(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (aa && na(aa, n)) ||
          ((aa = n),
          (n = Xu(Zi, 'onSelect')),
          0 < n.length &&
            ((e = new Ia('onSelect', 'select', null, e, l)),
            t.push({ event: e, listeners: n }),
            (e.target = rn))));
    }
    function jl(t, e) {
      var l = {};
      return (
        (l[t.toLowerCase()] = e.toLowerCase()),
        (l['Webkit' + t] = 'webkit' + e),
        (l['Moz' + t] = 'moz' + e),
        l
      );
    }
    var dn = {
        animationend: jl('Animation', 'AnimationEnd'),
        animationiteration: jl('Animation', 'AnimationIteration'),
        animationstart: jl('Animation', 'AnimationStart'),
        transitionrun: jl('Transition', 'TransitionRun'),
        transitionstart: jl('Transition', 'TransitionStart'),
        transitioncancel: jl('Transition', 'TransitionCancel'),
        transitionend: jl('Transition', 'TransitionEnd'),
      },
      Ki = {},
      cs = {};
    Ze &&
      ((cs = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete dn.animationend.animation,
        delete dn.animationiteration.animation,
        delete dn.animationstart.animation),
      'TransitionEvent' in window || delete dn.transitionend.transition);
    function ql(t) {
      if (Ki[t]) return Ki[t];
      if (!dn[t]) return t;
      var e = dn[t],
        l;
      for (l in e) if (e.hasOwnProperty(l) && l in cs) return (Ki[t] = e[l]);
      return t;
    }
    var fs = ql('animationend'),
      os = ql('animationiteration'),
      ss = ql('animationstart'),
      Vm = ql('transitionrun'),
      Km = ql('transitionstart'),
      Jm = ql('transitioncancel'),
      rs = ql('transitionend'),
      ds = new Map(),
      Ji =
        'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' ',
        );
    Ji.push('scrollEnd');
    function Ue(t, e) {
      (ds.set(t, e), Hl(e, [t]));
    }
    var eu =
        typeof reportError == 'function'
          ? reportError
          : function (t) {
              if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                var e = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof t == 'object' && t !== null && typeof t.message == 'string'
                      ? String(t.message)
                      : String(t),
                  error: t,
                });
                if (!window.dispatchEvent(e)) return;
              } else if (typeof process == 'object' && typeof process.emit == 'function') {
                process.emit('uncaughtException', t);
                return;
              }
              console.error(t);
            },
      _e = [],
      yn = 0,
      ki = 0;
    function lu() {
      for (var t = yn, e = (ki = yn = 0); e < t; ) {
        var l = _e[e];
        _e[e++] = null;
        var n = _e[e];
        _e[e++] = null;
        var a = _e[e];
        _e[e++] = null;
        var u = _e[e];
        if (((_e[e++] = null), n !== null && a !== null)) {
          var i = n.pending;
          (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)), (n.pending = a));
        }
        u !== 0 && ys(l, a, u);
      }
    }
    function nu(t, e, l, n) {
      ((_e[yn++] = t),
        (_e[yn++] = e),
        (_e[yn++] = l),
        (_e[yn++] = n),
        (ki |= n),
        (t.lanes |= n),
        (t = t.alternate),
        t !== null && (t.lanes |= n));
    }
    function Wi(t, e, l, n) {
      return (nu(t, e, l, n), au(t));
    }
    function Ll(t, e) {
      return (nu(t, null, null, e), au(t));
    }
    function ys(t, e, l) {
      t.lanes |= l;
      var n = t.alternate;
      n !== null && (n.lanes |= l);
      for (var a = !1, u = t.return; u !== null; )
        ((u.childLanes |= l),
          (n = u.alternate),
          n !== null && (n.childLanes |= l),
          u.tag === 22 && ((t = u.stateNode), t === null || t._visibility & 1 || (a = !0)),
          (t = u),
          (u = u.return));
      return t.tag === 3
        ? ((u = t.stateNode),
          a &&
            e !== null &&
            ((a = 31 - ge(l)),
            (t = u.hiddenUpdates),
            (n = t[a]),
            n === null ? (t[a] = [e]) : n.push(e),
            (e.lane = l | 536870912)),
          u)
        : null;
    }
    function au(t) {
      if (50 < xa) throw ((xa = 0), (af = null), Error(f(185)));
      for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
      return t.tag === 3 ? t.stateNode : null;
    }
    var mn = {};
    function km(t, e, l, n) {
      ((this.tag = t),
        (this.key = l),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = e),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = n),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function ve(t, e, l, n) {
      return new km(t, e, l, n);
    }
    function $i(t) {
      return ((t = t.prototype), !(!t || !t.isReactComponent));
    }
    function Ve(t, e) {
      var l = t.alternate;
      return (
        l === null
          ? ((l = ve(t.tag, e, t.key, t.mode)),
            (l.elementType = t.elementType),
            (l.type = t.type),
            (l.stateNode = t.stateNode),
            (l.alternate = t),
            (t.alternate = l))
          : ((l.pendingProps = e),
            (l.type = t.type),
            (l.flags = 0),
            (l.subtreeFlags = 0),
            (l.deletions = null)),
        (l.flags = t.flags & 65011712),
        (l.childLanes = t.childLanes),
        (l.lanes = t.lanes),
        (l.child = t.child),
        (l.memoizedProps = t.memoizedProps),
        (l.memoizedState = t.memoizedState),
        (l.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (l.sibling = t.sibling),
        (l.index = t.index),
        (l.ref = t.ref),
        (l.refCleanup = t.refCleanup),
        l
      );
    }
    function ms(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return (
        l === null
          ? ((t.childLanes = 0),
            (t.lanes = e),
            (t.child = null),
            (t.subtreeFlags = 0),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.dependencies = null),
            (t.stateNode = null))
          : ((t.childLanes = l.childLanes),
            (t.lanes = l.lanes),
            (t.child = l.child),
            (t.subtreeFlags = 0),
            (t.deletions = null),
            (t.memoizedProps = l.memoizedProps),
            (t.memoizedState = l.memoizedState),
            (t.updateQueue = l.updateQueue),
            (t.type = l.type),
            (e = l.dependencies),
            (t.dependencies =
              e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
        t
      );
    }
    function uu(t, e, l, n, a, u) {
      var i = 0;
      if (((n = t), typeof t == 'function')) $i(t) && (i = 1);
      else if (typeof t == 'string')
        i = Pg(t, l, B.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
      else
        t: switch (t) {
          case pt:
            return ((t = ve(31, l, e, a)), (t.elementType = pt), (t.lanes = u), t);
          case dt:
            return wl(l.children, a, u, e);
          case qt:
            ((i = 8), (a |= 24));
            break;
          case H:
            return ((t = ve(12, l, e, a | 2)), (t.elementType = H), (t.lanes = u), t);
          case it:
            return ((t = ve(13, l, e, a)), (t.elementType = it), (t.lanes = u), t);
          case mt:
            return ((t = ve(19, l, e, a)), (t.elementType = mt), (t.lanes = u), t);
          default:
            if (typeof t == 'object' && t !== null)
              switch (t.$$typeof) {
                case nt:
                  i = 10;
                  break t;
                case yt:
                  i = 9;
                  break t;
                case P:
                  i = 11;
                  break t;
                case J:
                  i = 14;
                  break t;
                case At:
                  ((i = 16), (n = null));
                  break t;
              }
            ((i = 29), (l = Error(f(130, t === null ? 'null' : typeof t, ''))), (n = null));
        }
      return ((e = ve(i, l, e, a)), (e.elementType = t), (e.type = n), (e.lanes = u), e);
    }
    function wl(t, e, l, n) {
      return ((t = ve(7, t, n, e)), (t.lanes = l), t);
    }
    function Fi(t, e, l) {
      return ((t = ve(6, t, null, e)), (t.lanes = l), t);
    }
    function gs(t) {
      var e = ve(18, null, null, 0);
      return ((e.stateNode = t), e);
    }
    function Ii(t, e, l) {
      return (
        (e = ve(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = l),
        (e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation,
        }),
        e
      );
    }
    var hs = new WeakMap();
    function xe(t, e) {
      if (typeof t == 'object' && t !== null) {
        var l = hs.get(t);
        return l !== void 0 ? l : ((e = { value: t, source: e, stack: go(e) }), hs.set(t, e), e);
      }
      return { value: t, source: e, stack: go(e) };
    }
    var gn = [],
      hn = 0,
      iu = null,
      ua = 0,
      Oe = [],
      Me = 0,
      sl = null,
      Le = 1,
      we = '';
    function Ke(t, e) {
      ((gn[hn++] = ua), (gn[hn++] = iu), (iu = t), (ua = e));
    }
    function vs(t, e, l) {
      ((Oe[Me++] = Le), (Oe[Me++] = we), (Oe[Me++] = sl), (sl = t));
      var n = Le;
      t = we;
      var a = 32 - ge(n) - 1;
      ((n &= ~(1 << a)), (l += 1));
      var u = 32 - ge(e) + a;
      if (30 < u) {
        var i = a - (a % 5);
        ((u = (n & ((1 << i) - 1)).toString(32)),
          (n >>= i),
          (a -= i),
          (Le = (1 << (32 - ge(e) + a)) | (l << a) | n),
          (we = u + t));
      } else ((Le = (1 << u) | (l << a) | n), (we = t));
    }
    function Pi(t) {
      t.return !== null && (Ke(t, 1), vs(t, 1, 0));
    }
    function tc(t) {
      for (; t === iu; ) ((iu = gn[--hn]), (gn[hn] = null), (ua = gn[--hn]), (gn[hn] = null));
      for (; t === sl; )
        ((sl = Oe[--Me]),
          (Oe[Me] = null),
          (we = Oe[--Me]),
          (Oe[Me] = null),
          (Le = Oe[--Me]),
          (Oe[Me] = null));
    }
    function ps(t, e) {
      ((Oe[Me++] = Le), (Oe[Me++] = we), (Oe[Me++] = sl), (Le = e.id), (we = e.overflow), (sl = t));
    }
    var Pt = null,
      Ut = null,
      vt = !1,
      rl = null,
      De = !1,
      ec = Error(f(519));
    function dl(t) {
      var e = Error(
        f(
          418,
          1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML',
          '',
        ),
      );
      throw (ia(xe(e, t)), ec);
    }
    function bs(t) {
      var e = t.stateNode,
        l = t.type,
        n = t.memoizedProps;
      switch (((e[It] = t), (e[ie] = n), l)) {
        case 'dialog':
          (rt('cancel', e), rt('close', e));
          break;
        case 'iframe':
        case 'object':
        case 'embed':
          rt('load', e);
          break;
        case 'video':
        case 'audio':
          for (l = 0; l < Ma.length; l++) rt(Ma[l], e);
          break;
        case 'source':
          rt('error', e);
          break;
        case 'img':
        case 'image':
        case 'link':
          (rt('error', e), rt('load', e));
          break;
        case 'details':
          rt('toggle', e);
          break;
        case 'input':
          (rt('invalid', e),
            No(e, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0));
          break;
        case 'select':
          rt('invalid', e);
          break;
        case 'textarea':
          (rt('invalid', e), Ho(e, n.value, n.defaultValue, n.children));
      }
      ((l = n.children),
        (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
        e.textContent === '' + l ||
        n.suppressHydrationWarning === !0 ||
        jd(e.textContent, l)
          ? (n.popover != null && (rt('beforetoggle', e), rt('toggle', e)),
            n.onScroll != null && rt('scroll', e),
            n.onScrollEnd != null && rt('scrollend', e),
            n.onClick != null && (e.onclick = Qe),
            (e = !0))
          : (e = !1),
        e || dl(t, !0));
    }
    function Ss(t) {
      for (Pt = t.return; Pt; )
        switch (Pt.tag) {
          case 5:
          case 31:
          case 13:
            De = !1;
            return;
          case 27:
          case 3:
            De = !0;
            return;
          default:
            Pt = Pt.return;
        }
    }
    function vn(t) {
      if (t !== Pt) return !1;
      if (!vt) return (Ss(t), (vt = !0), !1);
      var e = t.tag,
        l;
      if (
        ((l = e !== 3 && e !== 27) &&
          ((l = e === 5) &&
            ((l = t.type), (l = !(l !== 'form' && l !== 'button') || Sf(t.type, t.memoizedProps))),
          (l = !l)),
        l && Ut && dl(t),
        Ss(t),
        e === 13)
      ) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
          throw Error(f(317));
        Ut = Vd(t);
      } else if (e === 31) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
          throw Error(f(317));
        Ut = Vd(t);
      } else
        e === 27
          ? ((e = Ut), xl(t.type) ? ((t = _f), (_f = null), (Ut = t)) : (Ut = e))
          : (Ut = Pt ? Ce(t.stateNode.nextSibling) : null);
      return !0;
    }
    function Yl() {
      ((Ut = Pt = null), (vt = !1));
    }
    function lc() {
      var t = rl;
      return (t !== null && (re === null ? (re = t) : re.push.apply(re, t), (rl = null)), t);
    }
    function ia(t) {
      rl === null ? (rl = [t]) : rl.push(t);
    }
    var nc = d(null),
      Gl = null,
      Je = null;
    function yl(t, e, l) {
      (L(nc, e._currentValue), (e._currentValue = l));
    }
    function ke(t) {
      ((t._currentValue = nc.current), O(nc));
    }
    function ac(t, e, l) {
      for (; t !== null; ) {
        var n = t.alternate;
        if (
          ((t.childLanes & e) !== e
            ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
            : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
          t === l)
        )
          break;
        t = t.return;
      }
    }
    function uc(t, e, l, n) {
      var a = t.child;
      for (a !== null && (a.return = t); a !== null; ) {
        var u = a.dependencies;
        if (u !== null) {
          var i = a.child;
          u = u.firstContext;
          t: for (; u !== null; ) {
            var c = u;
            u = a;
            for (var s = 0; s < e.length; s++)
              if (c.context === e[s]) {
                ((u.lanes |= l),
                  (c = u.alternate),
                  c !== null && (c.lanes |= l),
                  ac(u.return, l, t),
                  n || (i = null));
                break t;
              }
            u = c.next;
          }
        } else if (a.tag === 18) {
          if (((i = a.return), i === null)) throw Error(f(341));
          ((i.lanes |= l),
            (u = i.alternate),
            u !== null && (u.lanes |= l),
            ac(i, l, t),
            (i = null));
        } else i = a.child;
        if (i !== null) i.return = a;
        else
          for (i = a; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (((a = i.sibling), a !== null)) {
              ((a.return = i.return), (i = a));
              break;
            }
            i = i.return;
          }
        a = i;
      }
    }
    function pn(t, e, l, n) {
      t = null;
      for (var a = e, u = !1; a !== null; ) {
        if (!u) {
          if ((a.flags & 524288) !== 0) u = !0;
          else if ((a.flags & 262144) !== 0) break;
        }
        if (a.tag === 10) {
          var i = a.alternate;
          if (i === null) throw Error(f(387));
          if (((i = i.memoizedProps), i !== null)) {
            var c = a.type;
            he(a.pendingProps.value, i.value) || (t !== null ? t.push(c) : (t = [c]));
          }
        } else if (a === et.current) {
          if (((i = a.alternate), i === null)) throw Error(f(387));
          i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (t !== null ? t.push(Ua) : (t = [Ua]));
        }
        a = a.return;
      }
      (t !== null && uc(e, t, l, n), (e.flags |= 262144));
    }
    function cu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!he(t.context._currentValue, t.memoizedValue)) return !0;
        t = t.next;
      }
      return !1;
    }
    function Xl(t) {
      ((Gl = t), (Je = null), (t = t.dependencies), t !== null && (t.firstContext = null));
    }
    function te(t) {
      return Es(Gl, t);
    }
    function fu(t, e) {
      return (Gl === null && Xl(t), Es(t, e));
    }
    function Es(t, e) {
      var l = e._currentValue;
      if (((e = { context: e, memoizedValue: l, next: null }), Je === null)) {
        if (t === null) throw Error(f(308));
        ((Je = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
      } else Je = Je.next = e;
      return l;
    }
    var Wm =
        typeof AbortController < 'u'
          ? AbortController
          : function () {
              var t = [],
                e = (this.signal = {
                  aborted: !1,
                  addEventListener: function (l, n) {
                    t.push(n);
                  },
                });
              this.abort = function () {
                ((e.aborted = !0),
                  t.forEach(function (l) {
                    return l();
                  }));
              };
            },
      $m = o.unstable_scheduleCallback,
      Fm = o.unstable_NormalPriority,
      Zt = {
        $$typeof: nt,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ic() {
      return { controller: new Wm(), data: new Map(), refCount: 0 };
    }
    function ca(t) {
      (t.refCount--,
        t.refCount === 0 &&
          $m(Fm, function () {
            t.controller.abort();
          }));
    }
    var fa = null,
      cc = 0,
      bn = 0,
      Sn = null;
    function Im(t, e) {
      if (fa === null) {
        var l = (fa = []);
        ((cc = 0),
          (bn = rf()),
          (Sn = {
            status: 'pending',
            value: void 0,
            then: function (n) {
              l.push(n);
            },
          }));
      }
      return (cc++, e.then(Ts, Ts), e);
    }
    function Ts() {
      if (--cc === 0 && fa !== null) {
        Sn !== null && (Sn.status = 'fulfilled');
        var t = fa;
        ((fa = null), (bn = 0), (Sn = null));
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Pm(t, e) {
      var l = [],
        n = {
          status: 'pending',
          value: null,
          reason: null,
          then: function (a) {
            l.push(a);
          },
        };
      return (
        t.then(
          function () {
            ((n.status = 'fulfilled'), (n.value = e));
            for (var a = 0; a < l.length; a++) (0, l[a])(e);
          },
          function (a) {
            for (n.status = 'rejected', n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0);
          },
        ),
        n
      );
    }
    var As = S.S;
    S.S = function (t, e) {
      ((id = ye()),
        typeof e == 'object' && e !== null && typeof e.then == 'function' && Im(t, e),
        As !== null && As(t, e));
    };
    var Ql = d(null);
    function fc() {
      var t = Ql.current;
      return t !== null ? t : Rt.pooledCache;
    }
    function ou(t, e) {
      e === null ? L(Ql, Ql.current) : L(Ql, e.pool);
    }
    function zs() {
      var t = fc();
      return t === null ? null : { parent: Zt._currentValue, pool: t };
    }
    var En = Error(f(460)),
      oc = Error(f(474)),
      su = Error(f(542)),
      ru = { then: function () {} };
    function _s(t) {
      return ((t = t.status), t === 'fulfilled' || t === 'rejected');
    }
    function xs(t, e, l) {
      switch (
        ((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(Qe, Qe), (e = l)), e.status)
      ) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw ((t = e.reason), Ms(t), t);
        default:
          if (typeof e.status == 'string') e.then(Qe, Qe);
          else {
            if (((t = Rt), t !== null && 100 < t.shellSuspendCounter)) throw Error(f(482));
            ((t = e),
              (t.status = 'pending'),
              t.then(
                function (n) {
                  if (e.status === 'pending') {
                    var a = e;
                    ((a.status = 'fulfilled'), (a.value = n));
                  }
                },
                function (n) {
                  if (e.status === 'pending') {
                    var a = e;
                    ((a.status = 'rejected'), (a.reason = n));
                  }
                },
              ));
          }
          switch (e.status) {
            case 'fulfilled':
              return e.value;
            case 'rejected':
              throw ((t = e.reason), Ms(t), t);
          }
          throw ((Vl = e), En);
      }
    }
    function Zl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == 'object' && typeof l.then == 'function'
          ? ((Vl = l), En)
          : l;
      }
    }
    var Vl = null;
    function Os() {
      if (Vl === null) throw Error(f(459));
      var t = Vl;
      return ((Vl = null), t);
    }
    function Ms(t) {
      if (t === En || t === su) throw Error(f(483));
    }
    var Tn = null,
      oa = 0;
    function du(t) {
      var e = oa;
      return ((oa += 1), Tn === null && (Tn = []), xs(Tn, t, e));
    }
    function sa(t, e) {
      ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
    }
    function yu(t, e) {
      throw e.$$typeof === at
        ? Error(f(525))
        : ((t = Object.prototype.toString.call(e)),
          Error(
            f(
              31,
              t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t,
            ),
          ));
    }
    function Ds(t) {
      function e(g, r) {
        if (t) {
          var h = g.deletions;
          h === null ? ((g.deletions = [r]), (g.flags |= 16)) : h.push(r);
        }
      }
      function l(g, r) {
        if (!t) return null;
        for (; r !== null; ) (e(g, r), (r = r.sibling));
        return null;
      }
      function n(g) {
        for (var r = new Map(); g !== null; )
          (g.key !== null ? r.set(g.key, g) : r.set(g.index, g), (g = g.sibling));
        return r;
      }
      function a(g, r) {
        return ((g = Ve(g, r)), (g.index = 0), (g.sibling = null), g);
      }
      function u(g, r, h) {
        return (
          (g.index = h),
          t
            ? ((h = g.alternate),
              h !== null
                ? ((h = h.index), h < r ? ((g.flags |= 67108866), r) : h)
                : ((g.flags |= 67108866), r))
            : ((g.flags |= 1048576), r)
        );
      }
      function i(g) {
        return (t && g.alternate === null && (g.flags |= 67108866), g);
      }
      function c(g, r, h, x) {
        return r === null || r.tag !== 6
          ? ((r = Fi(h, g.mode, x)), (r.return = g), r)
          : ((r = a(r, h)), (r.return = g), r);
      }
      function s(g, r, h, x) {
        var W = h.type;
        return W === dt
          ? A(g, r, h.props.children, x, h.key)
          : r !== null &&
              (r.elementType === W ||
                (typeof W == 'object' && W !== null && W.$$typeof === At && Zl(W) === r.type))
            ? ((r = a(r, h.props)), sa(r, h), (r.return = g), r)
            : ((r = uu(h.type, h.key, h.props, null, g.mode, x)), sa(r, h), (r.return = g), r);
      }
      function p(g, r, h, x) {
        return r === null ||
          r.tag !== 4 ||
          r.stateNode.containerInfo !== h.containerInfo ||
          r.stateNode.implementation !== h.implementation
          ? ((r = Ii(h, g.mode, x)), (r.return = g), r)
          : ((r = a(r, h.children || [])), (r.return = g), r);
      }
      function A(g, r, h, x, W) {
        return r === null || r.tag !== 7
          ? ((r = wl(h, g.mode, x, W)), (r.return = g), r)
          : ((r = a(r, h)), (r.return = g), r);
      }
      function M(g, r, h) {
        if ((typeof r == 'string' && r !== '') || typeof r == 'number' || typeof r == 'bigint')
          return ((r = Fi('' + r, g.mode, h)), (r.return = g), r);
        if (typeof r == 'object' && r !== null) {
          switch (r.$$typeof) {
            case xt:
              return (
                (h = uu(r.type, r.key, r.props, null, g.mode, h)),
                sa(h, r),
                (h.return = g),
                h
              );
            case Tt:
              return ((r = Ii(r, g.mode, h)), (r.return = g), r);
            case At:
              return ((r = Zl(r)), M(g, r, h));
          }
          if (I(r) || m(r)) return ((r = wl(r, g.mode, h, null)), (r.return = g), r);
          if (typeof r.then == 'function') return M(g, du(r), h);
          if (r.$$typeof === nt) return M(g, fu(g, r), h);
          yu(g, r);
        }
        return null;
      }
      function b(g, r, h, x) {
        var W = r !== null ? r.key : null;
        if ((typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint')
          return W !== null ? null : c(g, r, '' + h, x);
        if (typeof h == 'object' && h !== null) {
          switch (h.$$typeof) {
            case xt:
              return h.key === W ? s(g, r, h, x) : null;
            case Tt:
              return h.key === W ? p(g, r, h, x) : null;
            case At:
              return ((h = Zl(h)), b(g, r, h, x));
          }
          if (I(h) || m(h)) return W !== null ? null : A(g, r, h, x, null);
          if (typeof h.then == 'function') return b(g, r, du(h), x);
          if (h.$$typeof === nt) return b(g, r, fu(g, h), x);
          yu(g, h);
        }
        return null;
      }
      function E(g, r, h, x, W) {
        if ((typeof x == 'string' && x !== '') || typeof x == 'number' || typeof x == 'bigint')
          return ((g = g.get(h) || null), c(r, g, '' + x, W));
        if (typeof x == 'object' && x !== null) {
          switch (x.$$typeof) {
            case xt:
              return ((g = g.get(x.key === null ? h : x.key) || null), s(r, g, x, W));
            case Tt:
              return ((g = g.get(x.key === null ? h : x.key) || null), p(r, g, x, W));
            case At:
              return ((x = Zl(x)), E(g, r, h, x, W));
          }
          if (I(x) || m(x)) return ((g = g.get(h) || null), A(r, g, x, W, null));
          if (typeof x.then == 'function') return E(g, r, h, du(x), W);
          if (x.$$typeof === nt) return E(g, r, h, fu(r, x), W);
          yu(r, x);
        }
        return null;
      }
      function X(g, r, h, x) {
        for (
          var W = null, bt = null, Q = r, ft = (r = 0), ht = null;
          Q !== null && ft < h.length;
          ft++
        ) {
          Q.index > ft ? ((ht = Q), (Q = null)) : (ht = Q.sibling);
          var St = b(g, Q, h[ft], x);
          if (St === null) {
            Q === null && (Q = ht);
            break;
          }
          (t && Q && St.alternate === null && e(g, Q),
            (r = u(St, r, ft)),
            bt === null ? (W = St) : (bt.sibling = St),
            (bt = St),
            (Q = ht));
        }
        if (ft === h.length) return (l(g, Q), vt && Ke(g, ft), W);
        if (Q === null) {
          for (; ft < h.length; ft++)
            ((Q = M(g, h[ft], x)),
              Q !== null &&
                ((r = u(Q, r, ft)), bt === null ? (W = Q) : (bt.sibling = Q), (bt = Q)));
          return (vt && Ke(g, ft), W);
        }
        for (Q = n(Q); ft < h.length; ft++)
          ((ht = E(Q, g, ft, h[ft], x)),
            ht !== null &&
              (t && ht.alternate !== null && Q.delete(ht.key === null ? ft : ht.key),
              (r = u(ht, r, ft)),
              bt === null ? (W = ht) : (bt.sibling = ht),
              (bt = ht)));
        return (
          t &&
            Q.forEach(function (Cl) {
              return e(g, Cl);
            }),
          vt && Ke(g, ft),
          W
        );
      }
      function F(g, r, h, x) {
        if (h == null) throw Error(f(151));
        for (
          var W = null, bt = null, Q = r, ft = (r = 0), ht = null, St = h.next();
          Q !== null && !St.done;
          ft++, St = h.next()
        ) {
          Q.index > ft ? ((ht = Q), (Q = null)) : (ht = Q.sibling);
          var Cl = b(g, Q, St.value, x);
          if (Cl === null) {
            Q === null && (Q = ht);
            break;
          }
          (t && Q && Cl.alternate === null && e(g, Q),
            (r = u(Cl, r, ft)),
            bt === null ? (W = Cl) : (bt.sibling = Cl),
            (bt = Cl),
            (Q = ht));
        }
        if (St.done) return (l(g, Q), vt && Ke(g, ft), W);
        if (Q === null) {
          for (; !St.done; ft++, St = h.next())
            ((St = M(g, St.value, x)),
              St !== null &&
                ((r = u(St, r, ft)), bt === null ? (W = St) : (bt.sibling = St), (bt = St)));
          return (vt && Ke(g, ft), W);
        }
        for (Q = n(Q); !St.done; ft++, St = h.next())
          ((St = E(Q, g, ft, St.value, x)),
            St !== null &&
              (t && St.alternate !== null && Q.delete(St.key === null ? ft : St.key),
              (r = u(St, r, ft)),
              bt === null ? (W = St) : (bt.sibling = St),
              (bt = St)));
        return (
          t &&
            Q.forEach(function (sh) {
              return e(g, sh);
            }),
          vt && Ke(g, ft),
          W
        );
      }
      function Dt(g, r, h, x) {
        if (
          (typeof h == 'object' &&
            h !== null &&
            h.type === dt &&
            h.key === null &&
            (h = h.props.children),
          typeof h == 'object' && h !== null)
        ) {
          switch (h.$$typeof) {
            case xt:
              t: {
                for (var W = h.key; r !== null; ) {
                  if (r.key === W) {
                    if (((W = h.type), W === dt)) {
                      if (r.tag === 7) {
                        (l(g, r.sibling), (x = a(r, h.props.children)), (x.return = g), (g = x));
                        break t;
                      }
                    } else if (
                      r.elementType === W ||
                      (typeof W == 'object' && W !== null && W.$$typeof === At && Zl(W) === r.type)
                    ) {
                      (l(g, r.sibling), (x = a(r, h.props)), sa(x, h), (x.return = g), (g = x));
                      break t;
                    }
                    l(g, r);
                    break;
                  } else e(g, r);
                  r = r.sibling;
                }
                h.type === dt
                  ? ((x = wl(h.props.children, g.mode, x, h.key)), (x.return = g), (g = x))
                  : ((x = uu(h.type, h.key, h.props, null, g.mode, x)),
                    sa(x, h),
                    (x.return = g),
                    (g = x));
              }
              return i(g);
            case Tt:
              t: {
                for (W = h.key; r !== null; ) {
                  if (r.key === W)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === h.containerInfo &&
                      r.stateNode.implementation === h.implementation
                    ) {
                      (l(g, r.sibling), (x = a(r, h.children || [])), (x.return = g), (g = x));
                      break t;
                    } else {
                      l(g, r);
                      break;
                    }
                  else e(g, r);
                  r = r.sibling;
                }
                ((x = Ii(h, g.mode, x)), (x.return = g), (g = x));
              }
              return i(g);
            case At:
              return ((h = Zl(h)), Dt(g, r, h, x));
          }
          if (I(h)) return X(g, r, h, x);
          if (m(h)) {
            if (((W = m(h)), typeof W != 'function')) throw Error(f(150));
            return ((h = W.call(h)), F(g, r, h, x));
          }
          if (typeof h.then == 'function') return Dt(g, r, du(h), x);
          if (h.$$typeof === nt) return Dt(g, r, fu(g, h), x);
          yu(g, h);
        }
        return (typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint'
          ? ((h = '' + h),
            r !== null && r.tag === 6
              ? (l(g, r.sibling), (x = a(r, h)), (x.return = g), (g = x))
              : (l(g, r), (x = Fi(h, g.mode, x)), (x.return = g), (g = x)),
            i(g))
          : l(g, r);
      }
      return function (g, r, h, x) {
        try {
          oa = 0;
          var W = Dt(g, r, h, x);
          return ((Tn = null), W);
        } catch (Q) {
          if (Q === En || Q === su) throw Q;
          var bt = ve(29, Q, null, g.mode);
          return ((bt.lanes = x), (bt.return = g), bt);
        }
      };
    }
    var Kl = Ds(!0),
      Rs = Ds(!1),
      ml = !1;
    function sc(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function rc(t, e) {
      ((t = t.updateQueue),
        e.updateQueue === t &&
          (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null,
          }));
    }
    function gl(t) {
      return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function hl(t, e, l) {
      var n = t.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), (Et & 2) !== 0)) {
        var a = n.pending;
        return (
          a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
          (n.pending = e),
          (e = au(t)),
          ys(t, null, l),
          e
        );
      }
      return (nu(t, n, e, l), au(t));
    }
    function ra(t, e, l) {
      if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))) {
        var n = e.lanes;
        ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Eo(t, l));
      }
    }
    function dc(t, e) {
      var l = t.updateQueue,
        n = t.alternate;
      if (n !== null && ((n = n.updateQueue), l === n)) {
        var a = null,
          u = null;
        if (((l = l.firstBaseUpdate), l !== null)) {
          do {
            var i = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
            (u === null ? (a = u = i) : (u = u.next = i), (l = l.next));
          } while (l !== null);
          u === null ? (a = u = e) : (u = u.next = e);
        } else a = u = e;
        ((l = {
          baseState: n.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: u,
          shared: n.shared,
          callbacks: n.callbacks,
        }),
          (t.updateQueue = l));
        return;
      }
      ((t = l.lastBaseUpdate),
        t === null ? (l.firstBaseUpdate = e) : (t.next = e),
        (l.lastBaseUpdate = e));
    }
    var yc = !1;
    function da() {
      if (yc) {
        var t = Sn;
        if (t !== null) throw t;
      }
    }
    function ya(t, e, l, n) {
      yc = !1;
      var a = t.updateQueue;
      ml = !1;
      var u = a.firstBaseUpdate,
        i = a.lastBaseUpdate,
        c = a.shared.pending;
      if (c !== null) {
        a.shared.pending = null;
        var s = c,
          p = s.next;
        ((s.next = null), i === null ? (u = p) : (i.next = p), (i = s));
        var A = t.alternate;
        A !== null &&
          ((A = A.updateQueue),
          (c = A.lastBaseUpdate),
          c !== i && (c === null ? (A.firstBaseUpdate = p) : (c.next = p), (A.lastBaseUpdate = s)));
      }
      if (u !== null) {
        var M = a.baseState;
        ((i = 0), (A = p = s = null), (c = u));
        do {
          var b = c.lane & -536870913,
            E = b !== c.lane;
          if (E ? (gt & b) === b : (n & b) === b) {
            (b !== 0 && b === bn && (yc = !0),
              A !== null &&
                (A = A.next =
                  { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null }));
            t: {
              var X = t,
                F = c;
              b = e;
              var Dt = l;
              switch (F.tag) {
                case 1:
                  if (((X = F.payload), typeof X == 'function')) {
                    M = X.call(Dt, M, b);
                    break t;
                  }
                  M = X;
                  break t;
                case 3:
                  X.flags = (X.flags & -65537) | 128;
                case 0:
                  if (
                    ((X = F.payload),
                    (b = typeof X == 'function' ? X.call(Dt, M, b) : X),
                    b == null)
                  )
                    break t;
                  M = w({}, M, b);
                  break t;
                case 2:
                  ml = !0;
              }
            }
            ((b = c.callback),
              b !== null &&
                ((t.flags |= 64),
                E && (t.flags |= 8192),
                (E = a.callbacks),
                E === null ? (a.callbacks = [b]) : E.push(b)));
          } else
            ((E = { lane: b, tag: c.tag, payload: c.payload, callback: c.callback, next: null }),
              A === null ? ((p = A = E), (s = M)) : (A = A.next = E),
              (i |= b));
          if (((c = c.next), c === null)) {
            if (((c = a.shared.pending), c === null)) break;
            ((E = c),
              (c = E.next),
              (E.next = null),
              (a.lastBaseUpdate = E),
              (a.shared.pending = null));
          }
        } while (!0);
        (A === null && (s = M),
          (a.baseState = s),
          (a.firstBaseUpdate = p),
          (a.lastBaseUpdate = A),
          u === null && (a.shared.lanes = 0),
          (El |= i),
          (t.lanes = i),
          (t.memoizedState = M));
      }
    }
    function Cs(t, e) {
      if (typeof t != 'function') throw Error(f(191, t));
      t.call(e);
    }
    function Ns(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) Cs(l[t], e);
    }
    var An = d(null),
      mu = d(0);
    function Us(t, e) {
      ((t = nl), L(mu, t), L(An, e), (nl = t | e.baseLanes));
    }
    function mc() {
      (L(mu, nl), L(An, An.current));
    }
    function gc() {
      ((nl = mu.current), O(An), O(mu));
    }
    var pe = d(null),
      Re = null;
    function vl(t) {
      var e = t.alternate;
      (L(Gt, Gt.current & 1),
        L(pe, t),
        Re === null && (e === null || An.current !== null || e.memoizedState !== null) && (Re = t));
    }
    function hc(t) {
      (L(Gt, Gt.current), L(pe, t), Re === null && (Re = t));
    }
    function Hs(t) {
      t.tag === 22 ? (L(Gt, Gt.current), L(pe, t), Re === null && (Re = t)) : pl();
    }
    function pl() {
      (L(Gt, Gt.current), L(pe, pe.current));
    }
    function be(t) {
      (O(pe), Re === t && (Re = null), O(Gt));
    }
    var Gt = d(0);
    function gu(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && ((l = l.dehydrated), l === null || Af(l) || zf(l))) return e;
        } else if (
          e.tag === 19 &&
          (e.memoizedProps.revealOrder === 'forwards' ||
            e.memoizedProps.revealOrder === 'backwards' ||
            e.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
            e.memoizedProps.revealOrder === 'together')
        ) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
      return null;
    }
    var We = 0,
      ct = null,
      Ot = null,
      Vt = null,
      hu = !1,
      zn = !1,
      Jl = !1,
      vu = 0,
      ma = 0,
      _n = null,
      tg = 0;
    function Lt() {
      throw Error(f(321));
    }
    function vc(t, e) {
      if (e === null) return !1;
      for (var l = 0; l < e.length && l < t.length; l++) if (!he(t[l], e[l])) return !1;
      return !0;
    }
    function pc(t, e, l, n, a, u) {
      return (
        (We = u),
        (ct = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (S.H = t === null || t.memoizedState === null ? vr : Uc),
        (Jl = !1),
        (u = l(n, a)),
        (Jl = !1),
        zn && (u = js(e, l, n, a)),
        Bs(t),
        u
      );
    }
    function Bs(t) {
      S.H = va;
      var e = Ot !== null && Ot.next !== null;
      if (((We = 0), (Vt = Ot = ct = null), (hu = !1), (ma = 0), (_n = null), e))
        throw Error(f(300));
      t === null || Kt || ((t = t.dependencies), t !== null && cu(t) && (Kt = !0));
    }
    function js(t, e, l, n) {
      ct = t;
      var a = 0;
      do {
        if ((zn && (_n = null), (ma = 0), (zn = !1), 25 <= a)) throw Error(f(301));
        if (((a += 1), (Vt = Ot = null), t.updateQueue != null)) {
          var u = t.updateQueue;
          ((u.lastEffect = null),
            (u.events = null),
            (u.stores = null),
            u.memoCache != null && (u.memoCache.index = 0));
        }
        ((S.H = pr), (u = e(l, n)));
      } while (zn);
      return u;
    }
    function eg() {
      var t = S.H,
        e = t.useState()[0];
      return (
        (e = typeof e.then == 'function' ? ga(e) : e),
        (t = t.useState()[0]),
        (Ot !== null ? Ot.memoizedState : null) !== t && (ct.flags |= 1024),
        e
      );
    }
    function bc() {
      var t = vu !== 0;
      return ((vu = 0), t);
    }
    function Sc(t, e, l) {
      ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
    }
    function Ec(t) {
      if (hu) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          (e !== null && (e.pending = null), (t = t.next));
        }
        hu = !1;
      }
      ((We = 0), (Vt = Ot = ct = null), (zn = !1), (ma = vu = 0), (_n = null));
    }
    function ue() {
      var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (Vt === null ? (ct.memoizedState = Vt = t) : (Vt = Vt.next = t), Vt);
    }
    function Xt() {
      if (Ot === null) {
        var t = ct.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Ot.next;
      var e = Vt === null ? ct.memoizedState : Vt.next;
      if (e !== null) ((Vt = e), (Ot = t));
      else {
        if (t === null) throw ct.alternate === null ? Error(f(467)) : Error(f(310));
        ((Ot = t),
          (t = {
            memoizedState: Ot.memoizedState,
            baseState: Ot.baseState,
            baseQueue: Ot.baseQueue,
            queue: Ot.queue,
            next: null,
          }),
          Vt === null ? (ct.memoizedState = Vt = t) : (Vt = Vt.next = t));
      }
      return Vt;
    }
    function pu() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ga(t) {
      var e = ma;
      return (
        (ma += 1),
        _n === null && (_n = []),
        (t = xs(_n, t, e)),
        (e = ct),
        (Vt === null ? e.memoizedState : Vt.next) === null &&
          ((e = e.alternate), (S.H = e === null || e.memoizedState === null ? vr : Uc)),
        t
      );
    }
    function bu(t) {
      if (t !== null && typeof t == 'object') {
        if (typeof t.then == 'function') return ga(t);
        if (t.$$typeof === nt) return te(t);
      }
      throw Error(f(438, String(t)));
    }
    function Tc(t) {
      var e = null,
        l = ct.updateQueue;
      if ((l !== null && (e = l.memoCache), e == null)) {
        var n = ct.alternate;
        n !== null &&
          ((n = n.updateQueue),
          n !== null &&
            ((n = n.memoCache),
            n != null &&
              (e = {
                data: n.data.map(function (a) {
                  return a.slice();
                }),
                index: 0,
              })));
      }
      if (
        (e == null && (e = { data: [], index: 0 }),
        l === null && ((l = pu()), (ct.updateQueue = l)),
        (l.memoCache = e),
        (l = e.data[e.index]),
        l === void 0)
      )
        for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = Yt;
      return (e.index++, l);
    }
    function $e(t, e) {
      return typeof e == 'function' ? e(t) : e;
    }
    function Su(t) {
      var e = Xt();
      return Ac(e, Ot, t);
    }
    function Ac(t, e, l) {
      var n = t.queue;
      if (n === null) throw Error(f(311));
      n.lastRenderedReducer = l;
      var a = t.baseQueue,
        u = n.pending;
      if (u !== null) {
        if (a !== null) {
          var i = a.next;
          ((a.next = u.next), (u.next = i));
        }
        ((e.baseQueue = a = u), (n.pending = null));
      }
      if (((u = t.baseState), a === null)) t.memoizedState = u;
      else {
        e = a.next;
        var c = (i = null),
          s = null,
          p = e,
          A = !1;
        do {
          var M = p.lane & -536870913;
          if (M !== p.lane ? (gt & M) === M : (We & M) === M) {
            var b = p.revertLane;
            if (b === 0)
              (s !== null &&
                (s = s.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null,
                  }),
                M === bn && (A = !0));
            else if ((We & b) === b) {
              ((p = p.next), b === bn && (A = !0));
              continue;
            } else
              ((M = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
                s === null ? ((c = s = M), (i = u)) : (s = s.next = M),
                (ct.lanes |= b),
                (El |= b));
            ((M = p.action), Jl && l(u, M), (u = p.hasEagerState ? p.eagerState : l(u, M)));
          } else
            ((b = {
              lane: M,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
              s === null ? ((c = s = b), (i = u)) : (s = s.next = b),
              (ct.lanes |= M),
              (El |= M));
          p = p.next;
        } while (p !== null && p !== e);
        if (
          (s === null ? (i = u) : (s.next = c),
          !he(u, t.memoizedState) && ((Kt = !0), A && ((l = Sn), l !== null)))
        )
          throw l;
        ((t.memoizedState = u), (t.baseState = i), (t.baseQueue = s), (n.lastRenderedState = u));
      }
      return (a === null && (n.lanes = 0), [t.memoizedState, n.dispatch]);
    }
    function zc(t) {
      var e = Xt(),
        l = e.queue;
      if (l === null) throw Error(f(311));
      l.lastRenderedReducer = t;
      var n = l.dispatch,
        a = l.pending,
        u = e.memoizedState;
      if (a !== null) {
        l.pending = null;
        var i = (a = a.next);
        do ((u = t(u, i.action)), (i = i.next));
        while (i !== a);
        (he(u, e.memoizedState) || (Kt = !0),
          (e.memoizedState = u),
          e.baseQueue === null && (e.baseState = u),
          (l.lastRenderedState = u));
      }
      return [u, n];
    }
    function qs(t, e, l) {
      var n = ct,
        a = Xt(),
        u = vt;
      if (u) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else l = e();
      var i = !he((Ot || a).memoizedState, l);
      if (
        (i && ((a.memoizedState = l), (Kt = !0)),
        (a = a.queue),
        Oc(Ys.bind(null, n, a, t), [t]),
        a.getSnapshot !== e || i || (Vt !== null && Vt.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          xn(9, { destroy: void 0 }, ws.bind(null, n, a, l, e), null),
          Rt === null)
        )
          throw Error(f(349));
        u || (We & 127) !== 0 || Ls(n, e, l);
      }
      return l;
    }
    function Ls(t, e, l) {
      ((t.flags |= 16384),
        (t = { getSnapshot: e, value: l }),
        (e = ct.updateQueue),
        e === null
          ? ((e = pu()), (ct.updateQueue = e), (e.stores = [t]))
          : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
    }
    function ws(t, e, l, n) {
      ((e.value = l), (e.getSnapshot = n), Gs(e) && Xs(t));
    }
    function Ys(t, e, l) {
      return l(function () {
        Gs(e) && Xs(t);
      });
    }
    function Gs(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !he(t, l);
      } catch {
        return !0;
      }
    }
    function Xs(t) {
      var e = Ll(t, 2);
      e !== null && de(e, t, 2);
    }
    function _c(t) {
      var e = ue();
      if (typeof t == 'function') {
        var l = t;
        if (((t = l()), Jl)) {
          cl(!0);
          try {
            l();
          } finally {
            cl(!1);
          }
        }
      }
      return (
        (e.memoizedState = e.baseState = t),
        (e.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $e,
          lastRenderedState: t,
        }),
        e
      );
    }
    function Qs(t, e, l, n) {
      return ((t.baseState = l), Ac(t, Ot, typeof n == 'function' ? n : $e));
    }
    function lg(t, e, l, n, a) {
      if (Au(t)) throw Error(f(485));
      if (((t = e.action), t !== null)) {
        var u = {
          payload: a,
          action: t,
          next: null,
          isTransition: !0,
          status: 'pending',
          value: null,
          reason: null,
          listeners: [],
          then: function (i) {
            u.listeners.push(i);
          },
        };
        (S.T !== null ? l(!0) : (u.isTransition = !1),
          n(u),
          (l = e.pending),
          l === null
            ? ((u.next = e.pending = u), Zs(e, u))
            : ((u.next = l.next), (e.pending = l.next = u)));
      }
    }
    function Zs(t, e) {
      var l = e.action,
        n = e.payload,
        a = t.state;
      if (e.isTransition) {
        var u = S.T,
          i = {};
        S.T = i;
        try {
          var c = l(a, n),
            s = S.S;
          (s !== null && s(i, c), Vs(t, e, c));
        } catch (p) {
          xc(t, e, p);
        } finally {
          (u !== null && i.types !== null && (u.types = i.types), (S.T = u));
        }
      } else
        try {
          ((u = l(a, n)), Vs(t, e, u));
        } catch (p) {
          xc(t, e, p);
        }
    }
    function Vs(t, e, l) {
      l !== null && typeof l == 'object' && typeof l.then == 'function'
        ? l.then(
            function (n) {
              Ks(t, e, n);
            },
            function (n) {
              return xc(t, e, n);
            },
          )
        : Ks(t, e, l);
    }
    function Ks(t, e, l) {
      ((e.status = 'fulfilled'),
        (e.value = l),
        Js(e),
        (t.state = l),
        (e = t.pending),
        e !== null &&
          ((l = e.next), l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Zs(t, l))));
    }
    function xc(t, e, l) {
      var n = t.pending;
      if (((t.pending = null), n !== null)) {
        n = n.next;
        do ((e.status = 'rejected'), (e.reason = l), Js(e), (e = e.next));
        while (e !== n);
      }
      t.action = null;
    }
    function Js(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function ks(t, e) {
      return e;
    }
    function Ws(t, e) {
      if (vt) {
        var l = Rt.formState;
        if (l !== null) {
          t: {
            var n = ct;
            if (vt) {
              if (Ut) {
                e: {
                  for (var a = Ut, u = De; a.nodeType !== 8; ) {
                    if (!u) {
                      a = null;
                      break e;
                    }
                    if (((a = Ce(a.nextSibling)), a === null)) {
                      a = null;
                      break e;
                    }
                  }
                  ((u = a.data), (a = u === 'F!' || u === 'F' ? a : null));
                }
                if (a) {
                  ((Ut = Ce(a.nextSibling)), (n = a.data === 'F!'));
                  break t;
                }
              }
              dl(n);
            }
            n = !1;
          }
          n && (e = l[0]);
        }
      }
      return (
        (l = ue()),
        (l.memoizedState = l.baseState = e),
        (n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ks,
          lastRenderedState: e,
        }),
        (l.queue = n),
        (l = mr.bind(null, ct, n)),
        (n.dispatch = l),
        (n = _c(!1)),
        (u = Nc.bind(null, ct, !1, n.queue)),
        (n = ue()),
        (a = { state: e, dispatch: null, action: t, pending: null }),
        (n.queue = a),
        (l = lg.bind(null, ct, a, u, l)),
        (a.dispatch = l),
        (n.memoizedState = t),
        [e, l, !1]
      );
    }
    function $s(t) {
      var e = Xt();
      return Fs(e, Ot, t);
    }
    function Fs(t, e, l) {
      if (
        ((e = Ac(t, e, ks)[0]),
        (t = Su($e)[0]),
        typeof e == 'object' && e !== null && typeof e.then == 'function')
      )
        try {
          var n = ga(e);
        } catch (i) {
          throw i === En ? su : i;
        }
      else n = e;
      e = Xt();
      var a = e.queue,
        u = a.dispatch;
      return (
        l !== e.memoizedState &&
          ((ct.flags |= 2048), xn(9, { destroy: void 0 }, ng.bind(null, a, l), null)),
        [n, u, t]
      );
    }
    function ng(t, e) {
      t.action = e;
    }
    function Is(t) {
      var e = Xt(),
        l = Ot;
      if (l !== null) return Fs(e, l, t);
      (Xt(), (e = e.memoizedState), (l = Xt()));
      var n = l.queue.dispatch;
      return ((l.memoizedState = t), [e, n, !1]);
    }
    function xn(t, e, l, n) {
      return (
        (t = { tag: t, create: l, deps: n, inst: e, next: null }),
        (e = ct.updateQueue),
        e === null && ((e = pu()), (ct.updateQueue = e)),
        (l = e.lastEffect),
        l === null
          ? (e.lastEffect = t.next = t)
          : ((n = l.next), (l.next = t), (t.next = n), (e.lastEffect = t)),
        t
      );
    }
    function Ps() {
      return Xt().memoizedState;
    }
    function Eu(t, e, l, n) {
      var a = ue();
      ((ct.flags |= t),
        (a.memoizedState = xn(1 | e, { destroy: void 0 }, l, n === void 0 ? null : n)));
    }
    function Tu(t, e, l, n) {
      var a = Xt();
      n = n === void 0 ? null : n;
      var u = a.memoizedState.inst;
      Ot !== null && n !== null && vc(n, Ot.memoizedState.deps)
        ? (a.memoizedState = xn(e, u, l, n))
        : ((ct.flags |= t), (a.memoizedState = xn(1 | e, u, l, n)));
    }
    function tr(t, e) {
      Eu(8390656, 8, t, e);
    }
    function Oc(t, e) {
      Tu(2048, 8, t, e);
    }
    function ag(t) {
      ct.flags |= 4;
      var e = ct.updateQueue;
      if (e === null) ((e = pu()), (ct.updateQueue = e), (e.events = [t]));
      else {
        var l = e.events;
        l === null ? (e.events = [t]) : l.push(t);
      }
    }
    function er(t) {
      var e = Xt().memoizedState;
      return (
        ag({ ref: e, nextImpl: t }),
        function () {
          if ((Et & 2) !== 0) throw Error(f(440));
          return e.impl.apply(void 0, arguments);
        }
      );
    }
    function lr(t, e) {
      return Tu(4, 2, t, e);
    }
    function nr(t, e) {
      return Tu(4, 4, t, e);
    }
    function ar(t, e) {
      if (typeof e == 'function') {
        t = t();
        var l = e(t);
        return function () {
          typeof l == 'function' ? l() : e(null);
        };
      }
      if (e != null)
        return (
          (t = t()),
          (e.current = t),
          function () {
            e.current = null;
          }
        );
    }
    function ur(t, e, l) {
      ((l = l != null ? l.concat([t]) : null), Tu(4, 4, ar.bind(null, e, t), l));
    }
    function Mc() {}
    function ir(t, e) {
      var l = Xt();
      e = e === void 0 ? null : e;
      var n = l.memoizedState;
      return e !== null && vc(e, n[1]) ? n[0] : ((l.memoizedState = [t, e]), t);
    }
    function cr(t, e) {
      var l = Xt();
      e = e === void 0 ? null : e;
      var n = l.memoizedState;
      if (e !== null && vc(e, n[1])) return n[0];
      if (((n = t()), Jl)) {
        cl(!0);
        try {
          t();
        } finally {
          cl(!1);
        }
      }
      return ((l.memoizedState = [n, e]), n);
    }
    function Dc(t, e, l) {
      return l === void 0 || ((We & 1073741824) !== 0 && (gt & 261930) === 0)
        ? (t.memoizedState = e)
        : ((t.memoizedState = l), (t = fd()), (ct.lanes |= t), (El |= t), l);
    }
    function fr(t, e, l, n) {
      return he(l, e)
        ? l
        : An.current !== null
          ? ((t = Dc(t, l, n)), he(t, e) || (Kt = !0), t)
          : (We & 42) === 0 || ((We & 1073741824) !== 0 && (gt & 261930) === 0)
            ? ((Kt = !0), (t.memoizedState = l))
            : ((t = fd()), (ct.lanes |= t), (El |= t), e);
    }
    function or(t, e, l, n, a) {
      var u = D.p;
      D.p = u !== 0 && 8 > u ? u : 8;
      var i = S.T,
        c = {};
      ((S.T = c), Nc(t, !1, e, l));
      try {
        var s = a(),
          p = S.S;
        if (
          (p !== null && p(c, s), s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var A = Pm(s, n);
          ha(t, e, A, Te(t));
        } else ha(t, e, n, Te(t));
      } catch (M) {
        ha(t, e, { then: function () {}, status: 'rejected', reason: M }, Te());
      } finally {
        ((D.p = u), i !== null && c.types !== null && (i.types = c.types), (S.T = i));
      }
    }
    function ug() {}
    function Rc(t, e, l, n) {
      if (t.tag !== 5) throw Error(f(476));
      var a = sr(t).queue;
      or(
        t,
        a,
        e,
        k,
        l === null
          ? ug
          : function () {
              return (rr(t), l(n));
            },
      );
    }
    function sr(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: k,
        baseState: k,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $e,
          lastRenderedState: k,
        },
        next: null,
      };
      var l = {};
      return (
        (e.next = {
          memoizedState: l,
          baseState: l,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: $e,
            lastRenderedState: l,
          },
          next: null,
        }),
        (t.memoizedState = e),
        (t = t.alternate),
        t !== null && (t.memoizedState = e),
        e
      );
    }
    function rr(t) {
      var e = sr(t);
      (e.next === null && (e = t.alternate.memoizedState), ha(t, e.next.queue, {}, Te()));
    }
    function Cc() {
      return te(Ua);
    }
    function dr() {
      return Xt().memoizedState;
    }
    function yr() {
      return Xt().memoizedState;
    }
    function ig(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = Te();
            t = gl(l);
            var n = hl(e, t, l);
            (n !== null && (de(n, e, l), ra(n, e, l)), (e = { cache: ic() }), (t.payload = e));
            return;
        }
        e = e.return;
      }
    }
    function cg(t, e, l) {
      var n = Te();
      ((l = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Au(t) ? gr(e, l) : ((l = Wi(t, e, l, n)), l !== null && (de(l, t, n), hr(l, e, n))));
    }
    function mr(t, e, l) {
      var n = Te();
      ha(t, e, l, n);
    }
    function ha(t, e, l, n) {
      var a = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Au(t)) gr(e, a);
      else {
        var u = t.alternate;
        if (
          t.lanes === 0 &&
          (u === null || u.lanes === 0) &&
          ((u = e.lastRenderedReducer), u !== null)
        )
          try {
            var i = e.lastRenderedState,
              c = u(i, l);
            if (((a.hasEagerState = !0), (a.eagerState = c), he(c, i)))
              return (nu(t, e, a, 0), Rt === null && lu(), !1);
          } catch {}
        if (((l = Wi(t, e, a, n)), l !== null)) return (de(l, t, n), hr(l, e, n), !0);
      }
      return !1;
    }
    function Nc(t, e, l, n) {
      if (
        ((n = {
          lane: 2,
          revertLane: rf(),
          gesture: null,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Au(t))
      ) {
        if (e) throw Error(f(479));
      } else ((e = Wi(t, l, n, 2)), e !== null && de(e, t, 2));
    }
    function Au(t) {
      var e = t.alternate;
      return t === ct || (e !== null && e === ct);
    }
    function gr(t, e) {
      zn = hu = !0;
      var l = t.pending;
      (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e));
    }
    function hr(t, e, l) {
      if ((l & 4194048) !== 0) {
        var n = e.lanes;
        ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Eo(t, l));
      }
    }
    var va = {
      readContext: te,
      use: bu,
      useCallback: Lt,
      useContext: Lt,
      useEffect: Lt,
      useImperativeHandle: Lt,
      useLayoutEffect: Lt,
      useInsertionEffect: Lt,
      useMemo: Lt,
      useReducer: Lt,
      useRef: Lt,
      useState: Lt,
      useDebugValue: Lt,
      useDeferredValue: Lt,
      useTransition: Lt,
      useSyncExternalStore: Lt,
      useId: Lt,
      useHostTransitionStatus: Lt,
      useFormState: Lt,
      useActionState: Lt,
      useOptimistic: Lt,
      useMemoCache: Lt,
      useCacheRefresh: Lt,
    };
    va.useEffectEvent = Lt;
    var vr = {
        readContext: te,
        use: bu,
        useCallback: function (t, e) {
          return ((ue().memoizedState = [t, e === void 0 ? null : e]), t);
        },
        useContext: te,
        useEffect: tr,
        useImperativeHandle: function (t, e, l) {
          ((l = l != null ? l.concat([t]) : null), Eu(4194308, 4, ar.bind(null, e, t), l));
        },
        useLayoutEffect: function (t, e) {
          return Eu(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
          Eu(4, 2, t, e);
        },
        useMemo: function (t, e) {
          var l = ue();
          e = e === void 0 ? null : e;
          var n = t();
          if (Jl) {
            cl(!0);
            try {
              t();
            } finally {
              cl(!1);
            }
          }
          return ((l.memoizedState = [n, e]), n);
        },
        useReducer: function (t, e, l) {
          var n = ue();
          if (l !== void 0) {
            var a = l(e);
            if (Jl) {
              cl(!0);
              try {
                l(e);
              } finally {
                cl(!1);
              }
            }
          } else a = e;
          return (
            (n.memoizedState = n.baseState = a),
            (t = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: a,
            }),
            (n.queue = t),
            (t = t.dispatch = cg.bind(null, ct, t)),
            [n.memoizedState, t]
          );
        },
        useRef: function (t) {
          var e = ue();
          return ((t = { current: t }), (e.memoizedState = t));
        },
        useState: function (t) {
          t = _c(t);
          var e = t.queue,
            l = mr.bind(null, ct, e);
          return ((e.dispatch = l), [t.memoizedState, l]);
        },
        useDebugValue: Mc,
        useDeferredValue: function (t, e) {
          var l = ue();
          return Dc(l, t, e);
        },
        useTransition: function () {
          var t = _c(!1);
          return ((t = or.bind(null, ct, t.queue, !0, !1)), (ue().memoizedState = t), [!1, t]);
        },
        useSyncExternalStore: function (t, e, l) {
          var n = ct,
            a = ue();
          if (vt) {
            if (l === void 0) throw Error(f(407));
            l = l();
          } else {
            if (((l = e()), Rt === null)) throw Error(f(349));
            (gt & 127) !== 0 || Ls(n, e, l);
          }
          a.memoizedState = l;
          var u = { value: l, getSnapshot: e };
          return (
            (a.queue = u),
            tr(Ys.bind(null, n, u, t), [t]),
            (n.flags |= 2048),
            xn(9, { destroy: void 0 }, ws.bind(null, n, u, l, e), null),
            l
          );
        },
        useId: function () {
          var t = ue(),
            e = Rt.identifierPrefix;
          if (vt) {
            var l = we,
              n = Le;
            ((l = (n & ~(1 << (32 - ge(n) - 1))).toString(32) + l),
              (e = '_' + e + 'R_' + l),
              (l = vu++),
              0 < l && (e += 'H' + l.toString(32)),
              (e += '_'));
          } else ((l = tg++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
          return (t.memoizedState = e);
        },
        useHostTransitionStatus: Cc,
        useFormState: Ws,
        useActionState: Ws,
        useOptimistic: function (t) {
          var e = ue();
          e.memoizedState = e.baseState = t;
          var l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((e.queue = l), (e = Nc.bind(null, ct, !0, l)), (l.dispatch = e), [t, e]);
        },
        useMemoCache: Tc,
        useCacheRefresh: function () {
          return (ue().memoizedState = ig.bind(null, ct));
        },
        useEffectEvent: function (t) {
          var e = ue(),
            l = { impl: t };
          return (
            (e.memoizedState = l),
            function () {
              if ((Et & 2) !== 0) throw Error(f(440));
              return l.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Uc = {
        readContext: te,
        use: bu,
        useCallback: ir,
        useContext: te,
        useEffect: Oc,
        useImperativeHandle: ur,
        useInsertionEffect: lr,
        useLayoutEffect: nr,
        useMemo: cr,
        useReducer: Su,
        useRef: Ps,
        useState: function () {
          return Su($e);
        },
        useDebugValue: Mc,
        useDeferredValue: function (t, e) {
          var l = Xt();
          return fr(l, Ot.memoizedState, t, e);
        },
        useTransition: function () {
          var t = Su($e)[0],
            e = Xt().memoizedState;
          return [typeof t == 'boolean' ? t : ga(t), e];
        },
        useSyncExternalStore: qs,
        useId: dr,
        useHostTransitionStatus: Cc,
        useFormState: $s,
        useActionState: $s,
        useOptimistic: function (t, e) {
          var l = Xt();
          return Qs(l, Ot, t, e);
        },
        useMemoCache: Tc,
        useCacheRefresh: yr,
      };
    Uc.useEffectEvent = er;
    var pr = {
      readContext: te,
      use: bu,
      useCallback: ir,
      useContext: te,
      useEffect: Oc,
      useImperativeHandle: ur,
      useInsertionEffect: lr,
      useLayoutEffect: nr,
      useMemo: cr,
      useReducer: zc,
      useRef: Ps,
      useState: function () {
        return zc($e);
      },
      useDebugValue: Mc,
      useDeferredValue: function (t, e) {
        var l = Xt();
        return Ot === null ? Dc(l, t, e) : fr(l, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = zc($e)[0],
          e = Xt().memoizedState;
        return [typeof t == 'boolean' ? t : ga(t), e];
      },
      useSyncExternalStore: qs,
      useId: dr,
      useHostTransitionStatus: Cc,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (t, e) {
        var l = Xt();
        return Ot !== null ? Qs(l, Ot, t, e) : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: Tc,
      useCacheRefresh: yr,
    };
    pr.useEffectEvent = er;
    function Hc(t, e, l, n) {
      ((e = t.memoizedState),
        (l = l(n, e)),
        (l = l == null ? e : w({}, e, l)),
        (t.memoizedState = l),
        t.lanes === 0 && (t.updateQueue.baseState = l));
    }
    var Bc = {
      enqueueSetState: function (t, e, l) {
        t = t._reactInternals;
        var n = Te(),
          a = gl(n);
        ((a.payload = e),
          l != null && (a.callback = l),
          (e = hl(t, a, n)),
          e !== null && (de(e, t, n), ra(e, t, n)));
      },
      enqueueReplaceState: function (t, e, l) {
        t = t._reactInternals;
        var n = Te(),
          a = gl(n);
        ((a.tag = 1),
          (a.payload = e),
          l != null && (a.callback = l),
          (e = hl(t, a, n)),
          e !== null && (de(e, t, n), ra(e, t, n)));
      },
      enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var l = Te(),
          n = gl(l);
        ((n.tag = 2),
          e != null && (n.callback = e),
          (e = hl(t, n, l)),
          e !== null && (de(e, t, l), ra(e, t, l)));
      },
    };
    function br(t, e, l, n, a, u, i) {
      return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == 'function'
          ? t.shouldComponentUpdate(n, u, i)
          : e.prototype && e.prototype.isPureReactComponent
            ? !na(l, n) || !na(a, u)
            : !0
      );
    }
    function Sr(t, e, l, n) {
      ((t = e.state),
        typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(l, n),
        typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
          e.UNSAFE_componentWillReceiveProps(l, n),
        e.state !== t && Bc.enqueueReplaceState(e, e.state, null));
    }
    function kl(t, e) {
      var l = e;
      if ('ref' in e) {
        l = {};
        for (var n in e) n !== 'ref' && (l[n] = e[n]);
      }
      if ((t = t.defaultProps)) {
        l === e && (l = w({}, l));
        for (var a in t) l[a] === void 0 && (l[a] = t[a]);
      }
      return l;
    }
    function Er(t) {
      eu(t);
    }
    function Tr(t) {
      console.error(t);
    }
    function Ar(t) {
      eu(t);
    }
    function zu(t, e) {
      try {
        var l = t.onUncaughtError;
        l(e.value, { componentStack: e.stack });
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    function zr(t, e, l) {
      try {
        var n = t.onCaughtError;
        n(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }
    function jc(t, e, l) {
      return (
        (l = gl(l)),
        (l.tag = 3),
        (l.payload = { element: null }),
        (l.callback = function () {
          zu(t, e);
        }),
        l
      );
    }
    function _r(t) {
      return ((t = gl(t)), (t.tag = 3), t);
    }
    function xr(t, e, l, n) {
      var a = l.type.getDerivedStateFromError;
      if (typeof a == 'function') {
        var u = n.value;
        ((t.payload = function () {
          return a(u);
        }),
          (t.callback = function () {
            zr(e, l, n);
          }));
      }
      var i = l.stateNode;
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (t.callback = function () {
          (zr(e, l, n),
            typeof a != 'function' && (Tl === null ? (Tl = new Set([this])) : Tl.add(this)));
          var c = n.stack;
          this.componentDidCatch(n.value, { componentStack: c !== null ? c : '' });
        });
    }
    function fg(t, e, l, n, a) {
      if (((l.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')) {
        if (((e = l.alternate), e !== null && pn(e, l, a, !0), (l = pe.current), l !== null)) {
          switch (l.tag) {
            case 31:
            case 13:
              return (
                Re === null ? ju() : l.alternate === null && wt === 0 && (wt = 3),
                (l.flags &= -257),
                (l.flags |= 65536),
                (l.lanes = a),
                n === ru
                  ? (l.flags |= 16384)
                  : ((e = l.updateQueue),
                    e === null ? (l.updateQueue = new Set([n])) : e.add(n),
                    ff(t, n, a)),
                !1
              );
            case 22:
              return (
                (l.flags |= 65536),
                n === ru
                  ? (l.flags |= 16384)
                  : ((e = l.updateQueue),
                    e === null
                      ? ((e = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([n]),
                        }),
                        (l.updateQueue = e))
                      : ((l = e.retryQueue), l === null ? (e.retryQueue = new Set([n])) : l.add(n)),
                    ff(t, n, a)),
                !1
              );
          }
          throw Error(f(435, l.tag));
        }
        return (ff(t, n, a), ju(), !1);
      }
      if (vt)
        return (
          (e = pe.current),
          e !== null
            ? ((e.flags & 65536) === 0 && (e.flags |= 256),
              (e.flags |= 65536),
              (e.lanes = a),
              n !== ec && ((t = Error(f(422), { cause: n })), ia(xe(t, l))))
            : (n !== ec && ((e = Error(f(423), { cause: n })), ia(xe(e, l))),
              (t = t.current.alternate),
              (t.flags |= 65536),
              (a &= -a),
              (t.lanes |= a),
              (n = xe(n, l)),
              (a = jc(t.stateNode, n, a)),
              dc(t, a),
              wt !== 4 && (wt = 2)),
          !1
        );
      var u = Error(f(520), { cause: n });
      if (((u = xe(u, l)), _a === null ? (_a = [u]) : _a.push(u), wt !== 4 && (wt = 2), e === null))
        return !0;
      ((n = xe(n, l)), (l = e));
      do {
        switch (l.tag) {
          case 3:
            return (
              (l.flags |= 65536),
              (t = a & -a),
              (l.lanes |= t),
              (t = jc(l.stateNode, n, t)),
              dc(l, t),
              !1
            );
          case 1:
            if (
              ((e = l.type),
              (u = l.stateNode),
              (l.flags & 128) === 0 &&
                (typeof e.getDerivedStateFromError == 'function' ||
                  (u !== null &&
                    typeof u.componentDidCatch == 'function' &&
                    (Tl === null || !Tl.has(u)))))
            )
              return (
                (l.flags |= 65536),
                (a &= -a),
                (l.lanes |= a),
                (a = _r(a)),
                xr(a, t, l, n),
                dc(l, a),
                !1
              );
        }
        l = l.return;
      } while (l !== null);
      return !1;
    }
    var qc = Error(f(461)),
      Kt = !1;
    function ee(t, e, l, n) {
      e.child = t === null ? Rs(e, null, l, n) : Kl(e, t.child, l, n);
    }
    function Or(t, e, l, n, a) {
      l = l.render;
      var u = e.ref;
      if ('ref' in n) {
        var i = {};
        for (var c in n) c !== 'ref' && (i[c] = n[c]);
      } else i = n;
      return (
        Xl(e),
        (n = pc(t, e, l, i, u, a)),
        (c = bc()),
        t !== null && !Kt
          ? (Sc(t, e, a), Fe(t, e, a))
          : (vt && c && Pi(e), (e.flags |= 1), ee(t, e, n, a), e.child)
      );
    }
    function Mr(t, e, l, n, a) {
      if (t === null) {
        var u = l.type;
        return typeof u == 'function' && !$i(u) && u.defaultProps === void 0 && l.compare === null
          ? ((e.tag = 15), (e.type = u), Dr(t, e, u, n, a))
          : ((t = uu(l.type, null, n, e, e.mode, a)),
            (t.ref = e.ref),
            (t.return = e),
            (e.child = t));
      }
      if (((u = t.child), !Vc(t, a))) {
        var i = u.memoizedProps;
        if (((l = l.compare), (l = l !== null ? l : na), l(i, n) && t.ref === e.ref))
          return Fe(t, e, a);
      }
      return ((e.flags |= 1), (t = Ve(u, n)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    function Dr(t, e, l, n, a) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (na(u, n) && t.ref === e.ref)
          if (((Kt = !1), (e.pendingProps = n = u), Vc(t, a)))
            (t.flags & 131072) !== 0 && (Kt = !0);
          else return ((e.lanes = t.lanes), Fe(t, e, a));
      }
      return Lc(t, e, l, n, a);
    }
    function Rr(t, e, l, n) {
      var a = n.children,
        u = t !== null ? t.memoizedState : null;
      if (
        (t === null &&
          e.stateNode === null &&
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        n.mode === 'hidden')
      ) {
        if ((e.flags & 128) !== 0) {
          if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
            for (n = e.child = t.child, a = 0; n !== null; )
              ((a = a | n.lanes | n.childLanes), (n = n.sibling));
            n = a & ~u;
          } else ((n = 0), (e.child = null));
          return Cr(t, e, u, l, n);
        }
        if ((l & 536870912) !== 0)
          ((e.memoizedState = { baseLanes: 0, cachePool: null }),
            t !== null && ou(e, u !== null ? u.cachePool : null),
            u !== null ? Us(e, u) : mc(),
            Hs(e));
        else return ((n = e.lanes = 536870912), Cr(t, e, u !== null ? u.baseLanes | l : l, l, n));
      } else
        u !== null
          ? (ou(e, u.cachePool), Us(e, u), pl(), (e.memoizedState = null))
          : (t !== null && ou(e, null), mc(), pl());
      return (ee(t, e, a, l), e.child);
    }
    function pa(t, e) {
      return (
        (t !== null && t.tag === 22) ||
          e.stateNode !== null ||
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        e.sibling
      );
    }
    function Cr(t, e, l, n, a) {
      var u = fc();
      return (
        (u = u === null ? null : { parent: Zt._currentValue, pool: u }),
        (e.memoizedState = { baseLanes: l, cachePool: u }),
        t !== null && ou(e, null),
        mc(),
        Hs(e),
        t !== null && pn(t, e, n, !0),
        (e.childLanes = a),
        null
      );
    }
    function _u(t, e) {
      return (
        (e = Ou({ mode: e.mode, children: e.children }, t.mode)),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function Nr(t, e, l) {
      return (
        Kl(e, t.child, null, l),
        (t = _u(e, e.pendingProps)),
        (t.flags |= 2),
        be(e),
        (e.memoizedState = null),
        t
      );
    }
    function og(t, e, l) {
      var n = e.pendingProps,
        a = (e.flags & 128) !== 0;
      if (((e.flags &= -129), t === null)) {
        if (vt) {
          if (n.mode === 'hidden') return ((t = _u(e, n)), (e.lanes = 536870912), pa(null, t));
          if (
            (hc(e),
            (t = Ut)
              ? ((t = Zd(t, De)),
                (t = t !== null && t.data === '&' ? t : null),
                t !== null &&
                  ((e.memoizedState = {
                    dehydrated: t,
                    treeContext: sl !== null ? { id: Le, overflow: we } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (l = gs(t)),
                  (l.return = e),
                  (e.child = l),
                  (Pt = e),
                  (Ut = null)))
              : (t = null),
            t === null)
          )
            throw dl(e);
          return ((e.lanes = 536870912), null);
        }
        return _u(e, n);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if ((hc(e), a))
          if (e.flags & 256) ((e.flags &= -257), (e = Nr(t, e, l)));
          else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
          else throw Error(f(558));
        else if ((Kt || pn(t, e, l, !1), (a = (l & t.childLanes) !== 0), Kt || a)) {
          if (((n = Rt), n !== null && ((i = To(n, l)), i !== 0 && i !== u.retryLane)))
            throw ((u.retryLane = i), Ll(t, i), de(n, t, i), qc);
          (ju(), (e = Nr(t, e, l)));
        } else
          ((t = u.treeContext),
            (Ut = Ce(i.nextSibling)),
            (Pt = e),
            (vt = !0),
            (rl = null),
            (De = !1),
            t !== null && ps(e, t),
            (e = _u(e, n)),
            (e.flags |= 4096));
        return e;
      }
      return (
        (t = Ve(t.child, { mode: n.mode, children: n.children })),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function xu(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Lc(t, e, l, n, a) {
      return (
        Xl(e),
        (l = pc(t, e, l, n, void 0, a)),
        (n = bc()),
        t !== null && !Kt
          ? (Sc(t, e, a), Fe(t, e, a))
          : (vt && n && Pi(e), (e.flags |= 1), ee(t, e, l, a), e.child)
      );
    }
    function Ur(t, e, l, n, a, u) {
      return (
        Xl(e),
        (e.updateQueue = null),
        (l = js(e, n, l, a)),
        Bs(t),
        (n = bc()),
        t !== null && !Kt
          ? (Sc(t, e, u), Fe(t, e, u))
          : (vt && n && Pi(e), (e.flags |= 1), ee(t, e, l, u), e.child)
      );
    }
    function Hr(t, e, l, n, a) {
      if ((Xl(e), e.stateNode === null)) {
        var u = mn,
          i = l.contextType;
        (typeof i == 'object' && i !== null && (u = te(i)),
          (u = new l(n, u)),
          (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
          (u.updater = Bc),
          (e.stateNode = u),
          (u._reactInternals = e),
          (u = e.stateNode),
          (u.props = n),
          (u.state = e.memoizedState),
          (u.refs = {}),
          sc(e),
          (i = l.contextType),
          (u.context = typeof i == 'object' && i !== null ? te(i) : mn),
          (u.state = e.memoizedState),
          (i = l.getDerivedStateFromProps),
          typeof i == 'function' && (Hc(e, l, i, n), (u.state = e.memoizedState)),
          typeof l.getDerivedStateFromProps == 'function' ||
            typeof u.getSnapshotBeforeUpdate == 'function' ||
            (typeof u.UNSAFE_componentWillMount != 'function' &&
              typeof u.componentWillMount != 'function') ||
            ((i = u.state),
            typeof u.componentWillMount == 'function' && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
            i !== u.state && Bc.enqueueReplaceState(u, u.state, null),
            ya(e, n, u, a),
            da(),
            (u.state = e.memoizedState)),
          typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
          (n = !0));
      } else if (t === null) {
        u = e.stateNode;
        var c = e.memoizedProps,
          s = kl(l, c);
        u.props = s;
        var p = u.context,
          A = l.contextType;
        ((i = mn), typeof A == 'object' && A !== null && (i = te(A)));
        var M = l.getDerivedStateFromProps;
        ((A = typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
          (c = e.pendingProps !== c),
          A ||
            (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
              typeof u.componentWillReceiveProps != 'function') ||
            ((c || p !== i) && Sr(e, u, n, i)),
          (ml = !1));
        var b = e.memoizedState;
        ((u.state = b),
          ya(e, n, u, a),
          da(),
          (p = e.memoizedState),
          c || b !== p || ml
            ? (typeof M == 'function' && (Hc(e, l, M, n), (p = e.memoizedState)),
              (s = ml || br(e, l, s, n, b, p, i))
                ? (A ||
                    (typeof u.UNSAFE_componentWillMount != 'function' &&
                      typeof u.componentWillMount != 'function') ||
                    (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                    typeof u.UNSAFE_componentWillMount == 'function' &&
                      u.UNSAFE_componentWillMount()),
                  typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
                : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
                  (e.memoizedProps = n),
                  (e.memoizedState = p)),
              (u.props = n),
              (u.state = p),
              (u.context = i),
              (n = s))
            : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308), (n = !1)));
      } else {
        ((u = e.stateNode),
          rc(t, e),
          (i = e.memoizedProps),
          (A = kl(l, i)),
          (u.props = A),
          (M = e.pendingProps),
          (b = u.context),
          (p = l.contextType),
          (s = mn),
          typeof p == 'object' && p !== null && (s = te(p)),
          (c = l.getDerivedStateFromProps),
          (p = typeof c == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
            (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
              typeof u.componentWillReceiveProps != 'function') ||
            ((i !== M || b !== s) && Sr(e, u, n, s)),
          (ml = !1),
          (b = e.memoizedState),
          (u.state = b),
          ya(e, n, u, a),
          da());
        var E = e.memoizedState;
        i !== M || b !== E || ml || (t !== null && t.dependencies !== null && cu(t.dependencies))
          ? (typeof c == 'function' && (Hc(e, l, c, n), (E = e.memoizedState)),
            (A =
              ml ||
              br(e, l, A, n, b, E, s) ||
              (t !== null && t.dependencies !== null && cu(t.dependencies)))
              ? (p ||
                  (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                    typeof u.componentWillUpdate != 'function') ||
                  (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(n, E, s),
                  typeof u.UNSAFE_componentWillUpdate == 'function' &&
                    u.UNSAFE_componentWillUpdate(n, E, s)),
                typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
                typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
              : (typeof u.componentDidUpdate != 'function' ||
                  (i === t.memoizedProps && b === t.memoizedState) ||
                  (e.flags |= 4),
                typeof u.getSnapshotBeforeUpdate != 'function' ||
                  (i === t.memoizedProps && b === t.memoizedState) ||
                  (e.flags |= 1024),
                (e.memoizedProps = n),
                (e.memoizedState = E)),
            (u.props = n),
            (u.state = E),
            (u.context = s),
            (n = A))
          : (typeof u.componentDidUpdate != 'function' ||
              (i === t.memoizedProps && b === t.memoizedState) ||
              (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (i === t.memoizedProps && b === t.memoizedState) ||
              (e.flags |= 1024),
            (n = !1));
      }
      return (
        (u = n),
        xu(t, e),
        (n = (e.flags & 128) !== 0),
        u || n
          ? ((u = e.stateNode),
            (l = n && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
            (e.flags |= 1),
            t !== null && n
              ? ((e.child = Kl(e, t.child, null, a)), (e.child = Kl(e, null, l, a)))
              : ee(t, e, l, a),
            (e.memoizedState = u.state),
            (t = e.child))
          : (t = Fe(t, e, a)),
        t
      );
    }
    function Br(t, e, l, n) {
      return (Yl(), (e.flags |= 256), ee(t, e, l, n), e.child);
    }
    var wc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Yc(t) {
      return { baseLanes: t, cachePool: zs() };
    }
    function Gc(t, e, l) {
      return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= Ee), t);
    }
    function jr(t, e, l) {
      var n = e.pendingProps,
        a = !1,
        u = (e.flags & 128) !== 0,
        i;
      if (
        ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0),
        i && ((a = !0), (e.flags &= -129)),
        (i = (e.flags & 32) !== 0),
        (e.flags &= -33),
        t === null)
      ) {
        if (vt) {
          if (
            (a ? vl(e) : pl(),
            (t = Ut)
              ? ((t = Zd(t, De)),
                (t = t !== null && t.data !== '&' ? t : null),
                t !== null &&
                  ((e.memoizedState = {
                    dehydrated: t,
                    treeContext: sl !== null ? { id: Le, overflow: we } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (l = gs(t)),
                  (l.return = e),
                  (e.child = l),
                  (Pt = e),
                  (Ut = null)))
              : (t = null),
            t === null)
          )
            throw dl(e);
          return (zf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        }
        var c = n.children;
        return (
          (n = n.fallback),
          a
            ? (pl(),
              (a = e.mode),
              (c = Ou({ mode: 'hidden', children: c }, a)),
              (n = wl(n, a, l, null)),
              (c.return = e),
              (n.return = e),
              (c.sibling = n),
              (e.child = c),
              (n = e.child),
              (n.memoizedState = Yc(l)),
              (n.childLanes = Gc(t, i, l)),
              (e.memoizedState = wc),
              pa(null, n))
            : (vl(e), Xc(e, c))
        );
      }
      var s = t.memoizedState;
      if (s !== null && ((c = s.dehydrated), c !== null)) {
        if (u)
          e.flags & 256
            ? (vl(e), (e.flags &= -257), (e = Qc(t, e, l)))
            : e.memoizedState !== null
              ? (pl(), (e.child = t.child), (e.flags |= 128), (e = null))
              : (pl(),
                (c = n.fallback),
                (a = e.mode),
                (n = Ou({ mode: 'visible', children: n.children }, a)),
                (c = wl(c, a, l, null)),
                (c.flags |= 2),
                (n.return = e),
                (c.return = e),
                (n.sibling = c),
                (e.child = n),
                Kl(e, t.child, null, l),
                (n = e.child),
                (n.memoizedState = Yc(l)),
                (n.childLanes = Gc(t, i, l)),
                (e.memoizedState = wc),
                (e = pa(null, n)));
        else if ((vl(e), zf(c))) {
          if (((i = c.nextSibling && c.nextSibling.dataset), i)) var p = i.dgst;
          ((i = p),
            (n = Error(f(419))),
            (n.stack = ''),
            (n.digest = i),
            ia({ value: n, source: null, stack: null }),
            (e = Qc(t, e, l)));
        } else if ((Kt || pn(t, e, l, !1), (i = (l & t.childLanes) !== 0), Kt || i)) {
          if (((i = Rt), i !== null && ((n = To(i, l)), n !== 0 && n !== s.retryLane)))
            throw ((s.retryLane = n), Ll(t, n), de(i, t, n), qc);
          (Af(c) || ju(), (e = Qc(t, e, l)));
        } else
          Af(c)
            ? ((e.flags |= 192), (e.child = t.child), (e = null))
            : ((t = s.treeContext),
              (Ut = Ce(c.nextSibling)),
              (Pt = e),
              (vt = !0),
              (rl = null),
              (De = !1),
              t !== null && ps(e, t),
              (e = Xc(e, n.children)),
              (e.flags |= 4096));
        return e;
      }
      return a
        ? (pl(),
          (c = n.fallback),
          (a = e.mode),
          (s = t.child),
          (p = s.sibling),
          (n = Ve(s, { mode: 'hidden', children: n.children })),
          (n.subtreeFlags = s.subtreeFlags & 65011712),
          p !== null ? (c = Ve(p, c)) : ((c = wl(c, a, l, null)), (c.flags |= 2)),
          (c.return = e),
          (n.return = e),
          (n.sibling = c),
          (e.child = n),
          pa(null, n),
          (n = e.child),
          (c = t.child.memoizedState),
          c === null
            ? (c = Yc(l))
            : ((a = c.cachePool),
              a !== null
                ? ((s = Zt._currentValue), (a = a.parent !== s ? { parent: s, pool: s } : a))
                : (a = zs()),
              (c = { baseLanes: c.baseLanes | l, cachePool: a })),
          (n.memoizedState = c),
          (n.childLanes = Gc(t, i, l)),
          (e.memoizedState = wc),
          pa(t.child, n))
        : (vl(e),
          (l = t.child),
          (t = l.sibling),
          (l = Ve(l, { mode: 'visible', children: n.children })),
          (l.return = e),
          (l.sibling = null),
          t !== null &&
            ((i = e.deletions), i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
          (e.child = l),
          (e.memoizedState = null),
          l);
    }
    function Xc(t, e) {
      return ((e = Ou({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
    }
    function Ou(t, e) {
      return ((t = ve(22, t, null, e)), (t.lanes = 0), t);
    }
    function Qc(t, e, l) {
      return (
        Kl(e, t.child, null, l),
        (t = Xc(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
      );
    }
    function qr(t, e, l) {
      t.lanes |= e;
      var n = t.alternate;
      (n !== null && (n.lanes |= e), ac(t.return, e, l));
    }
    function Zc(t, e, l, n, a, u) {
      var i = t.memoizedState;
      i === null
        ? (t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: l,
            tailMode: a,
            treeForkCount: u,
          })
        : ((i.isBackwards = e),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = n),
          (i.tail = l),
          (i.tailMode = a),
          (i.treeForkCount = u));
    }
    function Lr(t, e, l) {
      var n = e.pendingProps,
        a = n.revealOrder,
        u = n.tail;
      n = n.children;
      var i = Gt.current,
        c = (i & 2) !== 0;
      if (
        (c ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
        L(Gt, i),
        ee(t, e, n, l),
        (n = vt ? ua : 0),
        !c && t !== null && (t.flags & 128) !== 0)
      )
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && qr(t, l, e);
          else if (t.tag === 19) qr(t, l, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      switch (a) {
        case 'forwards':
          for (l = e.child, a = null; l !== null; )
            ((t = l.alternate), t !== null && gu(t) === null && (a = l), (l = l.sibling));
          ((l = a),
            l === null ? ((a = e.child), (e.child = null)) : ((a = l.sibling), (l.sibling = null)),
            Zc(e, !1, a, l, u, n));
          break;
        case 'backwards':
        case 'unstable_legacy-backwards':
          for (l = null, a = e.child, e.child = null; a !== null; ) {
            if (((t = a.alternate), t !== null && gu(t) === null)) {
              e.child = a;
              break;
            }
            ((t = a.sibling), (a.sibling = l), (l = a), (a = t));
          }
          Zc(e, !0, l, null, u, n);
          break;
        case 'together':
          Zc(e, !1, null, null, void 0, n);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Fe(t, e, l) {
      if (
        (t !== null && (e.dependencies = t.dependencies), (El |= e.lanes), (l & e.childLanes) === 0)
      )
        if (t !== null) {
          if ((pn(t, e, l, !1), (l & e.childLanes) === 0)) return null;
        } else return null;
      if (t !== null && e.child !== t.child) throw Error(f(153));
      if (e.child !== null) {
        for (
          t = e.child, l = Ve(t, t.pendingProps), e.child = l, l.return = e;
          t.sibling !== null;
        )
          ((t = t.sibling), (l = l.sibling = Ve(t, t.pendingProps)), (l.return = e));
        l.sibling = null;
      }
      return e.child;
    }
    function Vc(t, e) {
      return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && cu(t)));
    }
    function sg(t, e, l) {
      switch (e.tag) {
        case 3:
          (R(e, e.stateNode.containerInfo), yl(e, Zt, t.memoizedState.cache), Yl());
          break;
        case 27:
        case 5:
          ot(e);
          break;
        case 4:
          R(e, e.stateNode.containerInfo);
          break;
        case 10:
          yl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return ((e.flags |= 128), hc(e), null);
          break;
        case 13:
          var n = e.memoizedState;
          if (n !== null)
            return n.dehydrated !== null
              ? (vl(e), (e.flags |= 128), null)
              : (l & e.child.childLanes) !== 0
                ? jr(t, e, l)
                : (vl(e), (t = Fe(t, e, l)), t !== null ? t.sibling : null);
          vl(e);
          break;
        case 19:
          var a = (t.flags & 128) !== 0;
          if (
            ((n = (l & e.childLanes) !== 0),
            n || (pn(t, e, l, !1), (n = (l & e.childLanes) !== 0)),
            a)
          ) {
            if (n) return Lr(t, e, l);
            e.flags |= 128;
          }
          if (
            ((a = e.memoizedState),
            a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
            L(Gt, Gt.current),
            n)
          )
            break;
          return null;
        case 22:
          return ((e.lanes = 0), Rr(t, e, l, e.pendingProps));
        case 24:
          yl(e, Zt, t.memoizedState.cache);
      }
      return Fe(t, e, l);
    }
    function wr(t, e, l) {
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps) Kt = !0;
        else {
          if (!Vc(t, l) && (e.flags & 128) === 0) return ((Kt = !1), sg(t, e, l));
          Kt = (t.flags & 131072) !== 0;
        }
      else ((Kt = !1), vt && (e.flags & 1048576) !== 0 && vs(e, ua, e.index));
      switch (((e.lanes = 0), e.tag)) {
        case 16:
          t: {
            var n = e.pendingProps;
            if (((t = Zl(e.elementType)), (e.type = t), typeof t == 'function'))
              $i(t)
                ? ((n = kl(t, n)), (e.tag = 1), (e = Hr(null, e, t, n, l)))
                : ((e.tag = 0), (e = Lc(null, e, t, n, l)));
            else {
              if (t != null) {
                var a = t.$$typeof;
                if (a === P) {
                  ((e.tag = 11), (e = Or(null, e, t, n, l)));
                  break t;
                } else if (a === J) {
                  ((e.tag = 14), (e = Mr(null, e, t, n, l)));
                  break t;
                }
              }
              throw ((e = j(t) || t), Error(f(306, e, '')));
            }
          }
          return e;
        case 0:
          return Lc(t, e, e.type, e.pendingProps, l);
        case 1:
          return ((n = e.type), (a = kl(n, e.pendingProps)), Hr(t, e, n, a, l));
        case 3:
          t: {
            if ((R(e, e.stateNode.containerInfo), t === null)) throw Error(f(387));
            n = e.pendingProps;
            var u = e.memoizedState;
            ((a = u.element), rc(t, e), ya(e, n, null, l));
            var i = e.memoizedState;
            if (
              ((n = i.cache),
              yl(e, Zt, n),
              n !== u.cache && uc(e, [Zt], l, !0),
              da(),
              (n = i.element),
              u.isDehydrated)
            )
              if (
                ((u = { element: n, isDehydrated: !1, cache: i.cache }),
                (e.updateQueue.baseState = u),
                (e.memoizedState = u),
                e.flags & 256)
              ) {
                e = Br(t, e, n, l);
                break t;
              } else if (n !== a) {
                ((a = xe(Error(f(424)), e)), ia(a), (e = Br(t, e, n, l)));
                break t;
              } else
                for (
                  t = e.stateNode.containerInfo,
                    t.nodeType === 9
                      ? (t = t.body)
                      : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                    Ut = Ce(t.firstChild),
                    Pt = e,
                    vt = !0,
                    rl = null,
                    De = !0,
                    l = Rs(e, null, n, l),
                    e.child = l;
                  l;
                )
                  ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            else {
              if ((Yl(), n === a)) {
                e = Fe(t, e, l);
                break t;
              }
              ee(t, e, n, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return (
            xu(t, e),
            t === null
              ? (l = $d(e.type, null, e.pendingProps, null))
                ? (e.memoizedState = l)
                : vt ||
                  ((l = e.type),
                  (t = e.pendingProps),
                  (n = Qu(K.current).createElement(l)),
                  (n[It] = e),
                  (n[ie] = t),
                  le(n, l, t),
                  $t(n),
                  (e.stateNode = n))
              : (e.memoizedState = $d(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
            null
          );
        case 27:
          return (
            ot(e),
            t === null &&
              vt &&
              ((n = e.stateNode = Jd(e.type, e.pendingProps, K.current)),
              (Pt = e),
              (De = !0),
              (a = Ut),
              xl(e.type) ? ((_f = a), (Ut = Ce(n.firstChild))) : (Ut = a)),
            ee(t, e, e.pendingProps.children, l),
            xu(t, e),
            t === null && (e.flags |= 4194304),
            e.child
          );
        case 5:
          return (
            t === null &&
              vt &&
              ((a = n = Ut) &&
                ((n = Yg(n, e.type, e.pendingProps, De)),
                n !== null
                  ? ((e.stateNode = n), (Pt = e), (Ut = Ce(n.firstChild)), (De = !1), (a = !0))
                  : (a = !1)),
              a || dl(e)),
            ot(e),
            (a = e.type),
            (u = e.pendingProps),
            (i = t !== null ? t.memoizedProps : null),
            (n = u.children),
            Sf(a, u) ? (n = null) : i !== null && Sf(a, i) && (e.flags |= 32),
            e.memoizedState !== null && ((a = pc(t, e, eg, null, null, l)), (Ua._currentValue = a)),
            xu(t, e),
            ee(t, e, n, l),
            e.child
          );
        case 6:
          return (
            t === null &&
              vt &&
              ((t = l = Ut) &&
                ((l = Gg(l, e.pendingProps, De)),
                l !== null ? ((e.stateNode = l), (Pt = e), (Ut = null), (t = !0)) : (t = !1)),
              t || dl(e)),
            null
          );
        case 13:
          return jr(t, e, l);
        case 4:
          return (
            R(e, e.stateNode.containerInfo),
            (n = e.pendingProps),
            t === null ? (e.child = Kl(e, null, n, l)) : ee(t, e, n, l),
            e.child
          );
        case 11:
          return Or(t, e, e.type, e.pendingProps, l);
        case 7:
          return (ee(t, e, e.pendingProps, l), e.child);
        case 8:
          return (ee(t, e, e.pendingProps.children, l), e.child);
        case 12:
          return (ee(t, e, e.pendingProps.children, l), e.child);
        case 10:
          return ((n = e.pendingProps), yl(e, e.type, n.value), ee(t, e, n.children, l), e.child);
        case 9:
          return (
            (a = e.type._context),
            (n = e.pendingProps.children),
            Xl(e),
            (a = te(a)),
            (n = n(a)),
            (e.flags |= 1),
            ee(t, e, n, l),
            e.child
          );
        case 14:
          return Mr(t, e, e.type, e.pendingProps, l);
        case 15:
          return Dr(t, e, e.type, e.pendingProps, l);
        case 19:
          return Lr(t, e, l);
        case 31:
          return og(t, e, l);
        case 22:
          return Rr(t, e, l, e.pendingProps);
        case 24:
          return (
            Xl(e),
            (n = te(Zt)),
            t === null
              ? ((a = fc()),
                a === null &&
                  ((a = Rt),
                  (u = ic()),
                  (a.pooledCache = u),
                  u.refCount++,
                  u !== null && (a.pooledCacheLanes |= l),
                  (a = u)),
                (e.memoizedState = { parent: n, cache: a }),
                sc(e),
                yl(e, Zt, a))
              : ((t.lanes & l) !== 0 && (rc(t, e), ya(e, null, null, l), da()),
                (a = t.memoizedState),
                (u = e.memoizedState),
                a.parent !== n
                  ? ((a = { parent: n, cache: n }),
                    (e.memoizedState = a),
                    e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a),
                    yl(e, Zt, n))
                  : ((n = u.cache), yl(e, Zt, n), n !== a.cache && uc(e, [Zt], l, !0))),
            ee(t, e, e.pendingProps.children, l),
            e.child
          );
        case 29:
          throw e.pendingProps;
      }
      throw Error(f(156, e.tag));
    }
    function Ie(t) {
      t.flags |= 4;
    }
    function Kc(t, e, l, n, a) {
      if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
        if (((t.flags |= 16777216), (a & 335544128) === a))
          if (t.stateNode.complete) t.flags |= 8192;
          else if (dd()) t.flags |= 8192;
          else throw ((Vl = ru), oc);
      } else t.flags &= -16777217;
    }
    function Yr(t, e) {
      if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (((t.flags |= 16777216), !e0(e)))
        if (dd()) t.flags |= 8192;
        else throw ((Vl = ru), oc);
    }
    function Mu(t, e) {
      (e !== null && (t.flags |= 4),
        t.flags & 16384 && ((e = t.tag !== 22 ? bo() : 536870912), (t.lanes |= e), (Rn |= e)));
    }
    function ba(t, e) {
      if (!vt)
        switch (t.tailMode) {
          case 'hidden':
            e = t.tail;
            for (var l = null; e !== null; ) (e.alternate !== null && (l = e), (e = e.sibling));
            l === null ? (t.tail = null) : (l.sibling = null);
            break;
          case 'collapsed':
            l = t.tail;
            for (var n = null; l !== null; ) (l.alternate !== null && (n = l), (l = l.sibling));
            n === null
              ? e || t.tail === null
                ? (t.tail = null)
                : (t.tail.sibling = null)
              : (n.sibling = null);
        }
    }
    function Ht(t) {
      var e = t.alternate !== null && t.alternate.child === t.child,
        l = 0,
        n = 0;
      if (e)
        for (var a = t.child; a !== null; )
          ((l |= a.lanes | a.childLanes),
            (n |= a.subtreeFlags & 65011712),
            (n |= a.flags & 65011712),
            (a.return = t),
            (a = a.sibling));
      else
        for (a = t.child; a !== null; )
          ((l |= a.lanes | a.childLanes),
            (n |= a.subtreeFlags),
            (n |= a.flags),
            (a.return = t),
            (a = a.sibling));
      return ((t.subtreeFlags |= n), (t.childLanes = l), e);
    }
    function rg(t, e, l) {
      var n = e.pendingProps;
      switch ((tc(e), e.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Ht(e), null);
        case 1:
          return (Ht(e), null);
        case 3:
          return (
            (l = e.stateNode),
            (n = null),
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            ke(Zt),
            q(),
            l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
            (t === null || t.child === null) &&
              (vn(e)
                ? Ie(e)
                : t === null ||
                  (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                  ((e.flags |= 1024), lc())),
            Ht(e),
            null
          );
        case 26:
          var a = e.type,
            u = e.memoizedState;
          return (
            t === null
              ? (Ie(e), u !== null ? (Ht(e), Yr(e, u)) : (Ht(e), Kc(e, a, null, n, l)))
              : u
                ? u !== t.memoizedState
                  ? (Ie(e), Ht(e), Yr(e, u))
                  : (Ht(e), (e.flags &= -16777217))
                : ((t = t.memoizedProps), t !== n && Ie(e), Ht(e), Kc(e, a, t, n, l)),
            null
          );
        case 27:
          if ((Nt(e), (l = K.current), (a = e.type), t !== null && e.stateNode != null))
            t.memoizedProps !== n && Ie(e);
          else {
            if (!n) {
              if (e.stateNode === null) throw Error(f(166));
              return (Ht(e), null);
            }
            ((t = B.current), vn(e) ? bs(e) : ((t = Jd(a, n, l)), (e.stateNode = t), Ie(e)));
          }
          return (Ht(e), null);
        case 5:
          if ((Nt(e), (a = e.type), t !== null && e.stateNode != null))
            t.memoizedProps !== n && Ie(e);
          else {
            if (!n) {
              if (e.stateNode === null) throw Error(f(166));
              return (Ht(e), null);
            }
            if (((u = B.current), vn(e))) bs(e);
            else {
              var i = Qu(K.current);
              switch (u) {
                case 1:
                  u = i.createElementNS('http://www.w3.org/2000/svg', a);
                  break;
                case 2:
                  u = i.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                  break;
                default:
                  switch (a) {
                    case 'svg':
                      u = i.createElementNS('http://www.w3.org/2000/svg', a);
                      break;
                    case 'math':
                      u = i.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                      break;
                    case 'script':
                      ((u = i.createElement('div')),
                        (u.innerHTML = '<script><\/script>'),
                        (u = u.removeChild(u.firstChild)));
                      break;
                    case 'select':
                      ((u =
                        typeof n.is == 'string'
                          ? i.createElement('select', { is: n.is })
                          : i.createElement('select')),
                        n.multiple ? (u.multiple = !0) : n.size && (u.size = n.size));
                      break;
                    default:
                      u =
                        typeof n.is == 'string'
                          ? i.createElement(a, { is: n.is })
                          : i.createElement(a);
                  }
              }
              ((u[It] = e), (u[ie] = n));
              t: for (i = e.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  ((i.child.return = i), (i = i.child));
                  continue;
                }
                if (i === e) break t;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === e) break t;
                  i = i.return;
                }
                ((i.sibling.return = i.return), (i = i.sibling));
              }
              e.stateNode = u;
              t: switch ((le(u, a, n), a)) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  n = !!n.autoFocus;
                  break t;
                case 'img':
                  n = !0;
                  break t;
                default:
                  n = !1;
              }
              n && Ie(e);
            }
          }
          return (
            Ht(e),
            Kc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
            null
          );
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== n && Ie(e);
          else {
            if (typeof n != 'string' && e.stateNode === null) throw Error(f(166));
            if (((t = K.current), vn(e))) {
              if (((t = e.stateNode), (l = e.memoizedProps), (n = null), (a = Pt), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    n = a.memoizedProps;
                }
              ((t[It] = e),
                (t = !!(
                  t.nodeValue === l ||
                  (n !== null && n.suppressHydrationWarning === !0) ||
                  jd(t.nodeValue, l)
                )),
                t || dl(e, !0));
            } else ((t = Qu(t).createTextNode(n)), (t[It] = e), (e.stateNode = t));
          }
          return (Ht(e), null);
        case 31:
          if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
            if (((n = vn(e)), l !== null)) {
              if (t === null) {
                if (!n) throw Error(f(318));
                if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                  throw Error(f(557));
                t[It] = e;
              } else (Yl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
              (Ht(e), (t = !1));
            } else
              ((l = lc()),
                t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l),
                (t = !0));
            if (!t) return e.flags & 256 ? (be(e), e) : (be(e), null);
            if ((e.flags & 128) !== 0) throw Error(f(558));
          }
          return (Ht(e), null);
        case 13:
          if (
            ((n = e.memoizedState),
            t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
          ) {
            if (((a = vn(e)), n !== null && n.dehydrated !== null)) {
              if (t === null) {
                if (!a) throw Error(f(318));
                if (((a = e.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                  throw Error(f(317));
                a[It] = e;
              } else (Yl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
              (Ht(e), (a = !1));
            } else
              ((a = lc()),
                t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return e.flags & 256 ? (be(e), e) : (be(e), null);
          }
          return (
            be(e),
            (e.flags & 128) !== 0
              ? ((e.lanes = l), e)
              : ((l = n !== null),
                (t = t !== null && t.memoizedState !== null),
                l &&
                  ((n = e.child),
                  (a = null),
                  n.alternate !== null &&
                    n.alternate.memoizedState !== null &&
                    n.alternate.memoizedState.cachePool !== null &&
                    (a = n.alternate.memoizedState.cachePool.pool),
                  (u = null),
                  n.memoizedState !== null &&
                    n.memoizedState.cachePool !== null &&
                    (u = n.memoizedState.cachePool.pool),
                  u !== a && (n.flags |= 2048)),
                l !== t && l && (e.child.flags |= 8192),
                Mu(e, e.updateQueue),
                Ht(e),
                null)
          );
        case 4:
          return (q(), t === null && gf(e.stateNode.containerInfo), Ht(e), null);
        case 10:
          return (ke(e.type), Ht(e), null);
        case 19:
          if ((O(Gt), (n = e.memoizedState), n === null)) return (Ht(e), null);
          if (((a = (e.flags & 128) !== 0), (u = n.rendering), u === null))
            if (a) ba(n, !1);
            else {
              if (wt !== 0 || (t !== null && (t.flags & 128) !== 0))
                for (t = e.child; t !== null; ) {
                  if (((u = gu(t)), u !== null)) {
                    for (
                      e.flags |= 128,
                        ba(n, !1),
                        t = u.updateQueue,
                        e.updateQueue = t,
                        Mu(e, t),
                        e.subtreeFlags = 0,
                        t = l,
                        l = e.child;
                      l !== null;
                    )
                      (ms(l, t), (l = l.sibling));
                    return (L(Gt, (Gt.current & 1) | 2), vt && Ke(e, n.treeForkCount), e.child);
                  }
                  t = t.sibling;
                }
              n.tail !== null &&
                ye() > Uu &&
                ((e.flags |= 128), (a = !0), ba(n, !1), (e.lanes = 4194304));
            }
          else {
            if (!a)
              if (((t = gu(u)), t !== null)) {
                if (
                  ((e.flags |= 128),
                  (a = !0),
                  (t = t.updateQueue),
                  (e.updateQueue = t),
                  Mu(e, t),
                  ba(n, !0),
                  n.tail === null && n.tailMode === 'hidden' && !u.alternate && !vt)
                )
                  return (Ht(e), null);
              } else
                2 * ye() - n.renderingStartTime > Uu &&
                  l !== 536870912 &&
                  ((e.flags |= 128), (a = !0), ba(n, !1), (e.lanes = 4194304));
            n.isBackwards
              ? ((u.sibling = e.child), (e.child = u))
              : ((t = n.last), t !== null ? (t.sibling = u) : (e.child = u), (n.last = u));
          }
          return n.tail !== null
            ? ((t = n.tail),
              (n.rendering = t),
              (n.tail = t.sibling),
              (n.renderingStartTime = ye()),
              (t.sibling = null),
              (l = Gt.current),
              L(Gt, a ? (l & 1) | 2 : l & 1),
              vt && Ke(e, n.treeForkCount),
              t)
            : (Ht(e), null);
        case 22:
        case 23:
          return (
            be(e),
            gc(),
            (n = e.memoizedState !== null),
            t !== null
              ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
              : n && (e.flags |= 8192),
            n
              ? (l & 536870912) !== 0 &&
                (e.flags & 128) === 0 &&
                (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192))
              : Ht(e),
            (l = e.updateQueue),
            l !== null && Mu(e, l.retryQueue),
            (l = null),
            t !== null &&
              t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (l = t.memoizedState.cachePool.pool),
            (n = null),
            e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            n !== l && (e.flags |= 2048),
            t !== null && O(Ql),
            null
          );
        case 24:
          return (
            (l = null),
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            ke(Zt),
            Ht(e),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(f(156, e.tag));
    }
    function dg(t, e) {
      switch ((tc(e), e.tag)) {
        case 1:
          return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
        case 3:
          return (
            ke(Zt),
            q(),
            (t = e.flags),
            (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 26:
        case 27:
        case 5:
          return (Nt(e), null);
        case 31:
          if (e.memoizedState !== null) {
            if ((be(e), e.alternate === null)) throw Error(f(340));
            Yl();
          }
          return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
        case 13:
          if ((be(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
            if (e.alternate === null) throw Error(f(340));
            Yl();
          }
          return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
        case 19:
          return (O(Gt), null);
        case 4:
          return (q(), null);
        case 10:
          return (ke(e.type), null);
        case 22:
        case 23:
          return (
            be(e),
            gc(),
            t !== null && O(Ql),
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 24:
          return (ke(Zt), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Gr(t, e) {
      switch ((tc(e), e.tag)) {
        case 3:
          (ke(Zt), q());
          break;
        case 26:
        case 27:
        case 5:
          Nt(e);
          break;
        case 4:
          q();
          break;
        case 31:
          e.memoizedState !== null && be(e);
          break;
        case 13:
          be(e);
          break;
        case 19:
          O(Gt);
          break;
        case 10:
          ke(e.type);
          break;
        case 22:
        case 23:
          (be(e), gc(), t !== null && O(Ql));
          break;
        case 24:
          ke(Zt);
      }
    }
    function Sa(t, e) {
      try {
        var l = e.updateQueue,
          n = l !== null ? l.lastEffect : null;
        if (n !== null) {
          var a = n.next;
          l = a;
          do {
            if ((l.tag & t) === t) {
              n = void 0;
              var u = l.create,
                i = l.inst;
              ((n = u()), (i.destroy = n));
            }
            l = l.next;
          } while (l !== a);
        }
      } catch (c) {
        _t(e, e.return, c);
      }
    }
    function bl(t, e, l) {
      try {
        var n = e.updateQueue,
          a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var u = a.next;
          n = u;
          do {
            if ((n.tag & t) === t) {
              var i = n.inst,
                c = i.destroy;
              if (c !== void 0) {
                ((i.destroy = void 0), (a = e));
                var s = l,
                  p = c;
                try {
                  p();
                } catch (A) {
                  _t(a, s, A);
                }
              }
            }
            n = n.next;
          } while (n !== u);
        }
      } catch (A) {
        _t(e, e.return, A);
      }
    }
    function Xr(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          Ns(e, l);
        } catch (n) {
          _t(t, t.return, n);
        }
      }
    }
    function Qr(t, e, l) {
      ((l.props = kl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
      try {
        l.componentWillUnmount();
      } catch (n) {
        _t(t, e, n);
      }
    }
    function Ea(t, e) {
      try {
        var l = t.ref;
        if (l !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var n = t.stateNode;
              break;
            case 30:
              n = t.stateNode;
              break;
            default:
              n = t.stateNode;
          }
          typeof l == 'function' ? (t.refCleanup = l(n)) : (l.current = n);
        }
      } catch (a) {
        _t(t, e, a);
      }
    }
    function Ye(t, e) {
      var l = t.ref,
        n = t.refCleanup;
      if (l !== null)
        if (typeof n == 'function')
          try {
            n();
          } catch (a) {
            _t(t, e, a);
          } finally {
            ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
          }
        else if (typeof l == 'function')
          try {
            l(null);
          } catch (a) {
            _t(t, e, a);
          }
        else l.current = null;
    }
    function Zr(t) {
      var e = t.type,
        l = t.memoizedProps,
        n = t.stateNode;
      try {
        t: switch (e) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            l.autoFocus && n.focus();
            break t;
          case 'img':
            l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
        }
      } catch (a) {
        _t(t, t.return, a);
      }
    }
    function Jc(t, e, l) {
      try {
        var n = t.stateNode;
        (Hg(n, t.type, l, e), (n[ie] = e));
      } catch (a) {
        _t(t, t.return, a);
      }
    }
    function Vr(t) {
      return (
        t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && xl(t.type)) || t.tag === 4
      );
    }
    function kc(t) {
      t: for (;;) {
        for (; t.sibling === null; ) {
          if (t.return === null || Vr(t.return)) return null;
          t = t.return;
        }
        for (
          t.sibling.return = t.return, t = t.sibling;
          t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
        ) {
          if ((t.tag === 27 && xl(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
            continue t;
          ((t.child.return = t), (t = t.child));
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Wc(t, e, l) {
      var n = t.tag;
      if (n === 5 || n === 6)
        ((t = t.stateNode),
          e
            ? (l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l
              ).insertBefore(t, e)
            : ((e = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
              e.appendChild(t),
              (l = l._reactRootContainer),
              l != null || e.onclick !== null || (e.onclick = Qe)));
      else if (
        n !== 4 &&
        (n === 27 && xl(t.type) && ((l = t.stateNode), (e = null)), (t = t.child), t !== null)
      )
        for (Wc(t, e, l), t = t.sibling; t !== null; ) (Wc(t, e, l), (t = t.sibling));
    }
    function Du(t, e, l) {
      var n = t.tag;
      if (n === 5 || n === 6) ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
      else if (n !== 4 && (n === 27 && xl(t.type) && (l = t.stateNode), (t = t.child), t !== null))
        for (Du(t, e, l), t = t.sibling; t !== null; ) (Du(t, e, l), (t = t.sibling));
    }
    function Kr(t) {
      var e = t.stateNode,
        l = t.memoizedProps;
      try {
        for (var n = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
        (le(e, n, l), (e[It] = t), (e[ie] = l));
      } catch (u) {
        _t(t, t.return, u);
      }
    }
    var Pe = !1,
      Jt = !1,
      $c = !1,
      Jr = typeof WeakSet == 'function' ? WeakSet : Set,
      Ft = null;
    function yg(t, e) {
      if (((t = t.containerInfo), (pf = $u), (t = us(t)), Qi(t))) {
        if ('selectionStart' in t) var l = { start: t.selectionStart, end: t.selectionEnd };
        else
          t: {
            l = ((l = t.ownerDocument) && l.defaultView) || window;
            var n = l.getSelection && l.getSelection();
            if (n && n.rangeCount !== 0) {
              l = n.anchorNode;
              var a = n.anchorOffset,
                u = n.focusNode;
              n = n.focusOffset;
              try {
                (l.nodeType, u.nodeType);
              } catch {
                l = null;
                break t;
              }
              var i = 0,
                c = -1,
                s = -1,
                p = 0,
                A = 0,
                M = t,
                b = null;
              e: for (;;) {
                for (
                  var E;
                  M !== l || (a !== 0 && M.nodeType !== 3) || (c = i + a),
                    M !== u || (n !== 0 && M.nodeType !== 3) || (s = i + n),
                    M.nodeType === 3 && (i += M.nodeValue.length),
                    (E = M.firstChild) !== null;
                )
                  ((b = M), (M = E));
                for (;;) {
                  if (M === t) break e;
                  if (
                    (b === l && ++p === a && (c = i),
                    b === u && ++A === n && (s = i),
                    (E = M.nextSibling) !== null)
                  )
                    break;
                  ((M = b), (b = M.parentNode));
                }
                M = E;
              }
              l = c === -1 || s === -1 ? null : { start: c, end: s };
            } else l = null;
          }
        l = l || { start: 0, end: 0 };
      } else l = null;
      for (bf = { focusedElem: t, selectionRange: l }, $u = !1, Ft = e; Ft !== null; )
        if (((e = Ft), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
          ((t.return = e), (Ft = t));
        else
          for (; Ft !== null; ) {
            switch (((e = Ft), (u = e.alternate), (t = e.flags), e.tag)) {
              case 0:
                if (
                  (t & 4) !== 0 &&
                  ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null)
                )
                  for (l = 0; l < t.length; l++) ((a = t[l]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((t & 1024) !== 0 && u !== null) {
                  ((t = void 0),
                    (l = e),
                    (a = u.memoizedProps),
                    (u = u.memoizedState),
                    (n = l.stateNode));
                  try {
                    var X = kl(l.type, a);
                    ((t = n.getSnapshotBeforeUpdate(X, u)),
                      (n.__reactInternalSnapshotBeforeUpdate = t));
                  } catch (F) {
                    _t(l, l.return, F);
                  }
                }
                break;
              case 3:
                if ((t & 1024) !== 0) {
                  if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)) Tf(t);
                  else if (l === 1)
                    switch (t.nodeName) {
                      case 'HEAD':
                      case 'HTML':
                      case 'BODY':
                        Tf(t);
                        break;
                      default:
                        t.textContent = '';
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((t & 1024) !== 0) throw Error(f(163));
            }
            if (((t = e.sibling), t !== null)) {
              ((t.return = e.return), (Ft = t));
              break;
            }
            Ft = e.return;
          }
    }
    function kr(t, e, l) {
      var n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          (el(t, l), n & 4 && Sa(5, l));
          break;
        case 1:
          if ((el(t, l), n & 4))
            if (((t = l.stateNode), e === null))
              try {
                t.componentDidMount();
              } catch (i) {
                _t(l, l.return, i);
              }
            else {
              var a = kl(l.type, e.memoizedProps);
              e = e.memoizedState;
              try {
                t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
              } catch (i) {
                _t(l, l.return, i);
              }
            }
          (n & 64 && Xr(l), n & 512 && Ea(l, l.return));
          break;
        case 3:
          if ((el(t, l), n & 64 && ((t = l.updateQueue), t !== null))) {
            if (((e = null), l.child !== null))
              switch (l.child.tag) {
                case 27:
                case 5:
                  e = l.child.stateNode;
                  break;
                case 1:
                  e = l.child.stateNode;
              }
            try {
              Ns(t, e);
            } catch (i) {
              _t(l, l.return, i);
            }
          }
          break;
        case 27:
          e === null && n & 4 && Kr(l);
        case 26:
        case 5:
          (el(t, l), e === null && n & 4 && Zr(l), n & 512 && Ea(l, l.return));
          break;
        case 12:
          el(t, l);
          break;
        case 31:
          (el(t, l), n & 4 && Fr(t, l));
          break;
        case 13:
          (el(t, l),
            n & 4 && Ir(t, l),
            n & 64 &&
              ((t = l.memoizedState),
              t !== null &&
                ((t = t.dehydrated), t !== null && ((l = Tg.bind(null, l)), Xg(t, l)))));
          break;
        case 22:
          if (((n = l.memoizedState !== null || Pe), !n)) {
            ((e = (e !== null && e.memoizedState !== null) || Jt), (a = Pe));
            var u = Jt;
            ((Pe = n),
              (Jt = e) && !u ? ll(t, l, (l.subtreeFlags & 8772) !== 0) : el(t, l),
              (Pe = a),
              (Jt = u));
          }
          break;
        case 30:
          break;
        default:
          el(t, l);
      }
    }
    function Wr(t) {
      var e = t.alternate;
      (e !== null && ((t.alternate = null), Wr(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 && ((e = t.stateNode), e !== null && xi(e)),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null));
    }
    var Bt = null,
      fe = !1;
    function tl(t, e, l) {
      for (l = l.child; l !== null; ) ($r(t, e, l), (l = l.sibling));
    }
    function $r(t, e, l) {
      if (me && typeof me.onCommitFiberUnmount == 'function')
        try {
          me.onCommitFiberUnmount(Vn, l);
        } catch {}
      switch (l.tag) {
        case 26:
          (Jt || Ye(l, e),
            tl(t, e, l),
            l.memoizedState
              ? l.memoizedState.count--
              : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
          break;
        case 27:
          Jt || Ye(l, e);
          var n = Bt,
            a = fe;
          (xl(l.type) && ((Bt = l.stateNode), (fe = !1)),
            tl(t, e, l),
            Ra(l.stateNode),
            (Bt = n),
            (fe = a));
          break;
        case 5:
          Jt || Ye(l, e);
        case 6:
          if (((n = Bt), (a = fe), (Bt = null), tl(t, e, l), (Bt = n), (fe = a), Bt !== null))
            if (fe)
              try {
                (Bt.nodeType === 9
                  ? Bt.body
                  : Bt.nodeName === 'HTML'
                    ? Bt.ownerDocument.body
                    : Bt
                ).removeChild(l.stateNode);
              } catch (u) {
                _t(l, e, u);
              }
            else
              try {
                Bt.removeChild(l.stateNode);
              } catch (u) {
                _t(l, e, u);
              }
          break;
        case 18:
          Bt !== null &&
            (fe
              ? ((t = Bt),
                Xd(
                  t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                  l.stateNode,
                ),
                Ln(t))
              : Xd(Bt, l.stateNode));
          break;
        case 4:
          ((n = Bt),
            (a = fe),
            (Bt = l.stateNode.containerInfo),
            (fe = !0),
            tl(t, e, l),
            (Bt = n),
            (fe = a));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (bl(2, l, e), Jt || bl(4, l, e), tl(t, e, l));
          break;
        case 1:
          (Jt ||
            (Ye(l, e),
            (n = l.stateNode),
            typeof n.componentWillUnmount == 'function' && Qr(l, e, n)),
            tl(t, e, l));
          break;
        case 21:
          tl(t, e, l);
          break;
        case 22:
          ((Jt = (n = Jt) || l.memoizedState !== null), tl(t, e, l), (Jt = n));
          break;
        default:
          tl(t, e, l);
      }
    }
    function Fr(t, e) {
      if (
        e.memoizedState === null &&
        ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
      ) {
        t = t.dehydrated;
        try {
          Ln(t);
        } catch (l) {
          _t(e, e.return, l);
        }
      }
    }
    function Ir(t, e) {
      if (
        e.memoizedState === null &&
        ((t = e.alternate),
        t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
      )
        try {
          Ln(t);
        } catch (l) {
          _t(e, e.return, l);
        }
    }
    function mg(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return (e === null && (e = t.stateNode = new Jr()), e);
        case 22:
          return (
            (t = t.stateNode),
            (e = t._retryCache),
            e === null && (e = t._retryCache = new Jr()),
            e
          );
        default:
          throw Error(f(435, t.tag));
      }
    }
    function Ru(t, e) {
      var l = mg(t);
      e.forEach(function (n) {
        if (!l.has(n)) {
          l.add(n);
          var a = Ag.bind(null, t, n);
          n.then(a, a);
        }
      });
    }
    function oe(t, e) {
      var l = e.deletions;
      if (l !== null)
        for (var n = 0; n < l.length; n++) {
          var a = l[n],
            u = t,
            i = e,
            c = i;
          t: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (xl(c.type)) {
                  ((Bt = c.stateNode), (fe = !1));
                  break t;
                }
                break;
              case 5:
                ((Bt = c.stateNode), (fe = !1));
                break t;
              case 3:
              case 4:
                ((Bt = c.stateNode.containerInfo), (fe = !0));
                break t;
            }
            c = c.return;
          }
          if (Bt === null) throw Error(f(160));
          ($r(u, i, a),
            (Bt = null),
            (fe = !1),
            (u = a.alternate),
            u !== null && (u.return = null),
            (a.return = null));
        }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (Pr(e, t), (e = e.sibling));
    }
    var He = null;
    function Pr(t, e) {
      var l = t.alternate,
        n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (oe(e, t), se(t), n & 4 && (bl(3, t, t.return), Sa(3, t), bl(5, t, t.return)));
          break;
        case 1:
          (oe(e, t),
            se(t),
            n & 512 && (Jt || l === null || Ye(l, l.return)),
            n & 64 &&
              Pe &&
              ((t = t.updateQueue),
              t !== null &&
                ((n = t.callbacks),
                n !== null &&
                  ((l = t.shared.hiddenCallbacks),
                  (t.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
          break;
        case 26:
          var a = He;
          if ((oe(e, t), se(t), n & 512 && (Jt || l === null || Ye(l, l.return)), n & 4)) {
            var u = l !== null ? l.memoizedState : null;
            if (((n = t.memoizedState), l === null))
              if (n === null)
                if (t.stateNode === null) {
                  t: {
                    ((n = t.type), (l = t.memoizedProps), (a = a.ownerDocument || a));
                    e: switch (n) {
                      case 'title':
                        ((u = a.getElementsByTagName('title')[0]),
                          (!u ||
                            u[kn] ||
                            u[It] ||
                            u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                            u.hasAttribute('itemprop')) &&
                            ((u = a.createElement(n)),
                            a.head.insertBefore(u, a.querySelector('head > title'))),
                          le(u, n, l),
                          (u[It] = t),
                          $t(u),
                          (n = u));
                        break t;
                      case 'link':
                        var i = Pd('link', 'href', a).get(n + (l.href || ''));
                        if (i) {
                          for (var c = 0; c < i.length; c++)
                            if (
                              ((u = i[c]),
                              u.getAttribute('href') ===
                                (l.href == null || l.href === '' ? null : l.href) &&
                                u.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                                u.getAttribute('title') === (l.title == null ? null : l.title) &&
                                u.getAttribute('crossorigin') ===
                                  (l.crossOrigin == null ? null : l.crossOrigin))
                            ) {
                              i.splice(c, 1);
                              break e;
                            }
                        }
                        ((u = a.createElement(n)), le(u, n, l), a.head.appendChild(u));
                        break;
                      case 'meta':
                        if ((i = Pd('meta', 'content', a).get(n + (l.content || '')))) {
                          for (c = 0; c < i.length; c++)
                            if (
                              ((u = i[c]),
                              u.getAttribute('content') ===
                                (l.content == null ? null : '' + l.content) &&
                                u.getAttribute('name') === (l.name == null ? null : l.name) &&
                                u.getAttribute('property') ===
                                  (l.property == null ? null : l.property) &&
                                u.getAttribute('http-equiv') ===
                                  (l.httpEquiv == null ? null : l.httpEquiv) &&
                                u.getAttribute('charset') ===
                                  (l.charSet == null ? null : l.charSet))
                            ) {
                              i.splice(c, 1);
                              break e;
                            }
                        }
                        ((u = a.createElement(n)), le(u, n, l), a.head.appendChild(u));
                        break;
                      default:
                        throw Error(f(468, n));
                    }
                    ((u[It] = t), $t(u), (n = u));
                  }
                  t.stateNode = n;
                } else t0(a, t.type, t.stateNode);
              else t.stateNode = Id(a, n, t.memoizedProps);
            else
              u !== n
                ? (u === null
                    ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                    : u.count--,
                  n === null ? t0(a, t.type, t.stateNode) : Id(a, n, t.memoizedProps))
                : n === null && t.stateNode !== null && Jc(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          (oe(e, t),
            se(t),
            n & 512 && (Jt || l === null || Ye(l, l.return)),
            l !== null && n & 4 && Jc(t, t.memoizedProps, l.memoizedProps));
          break;
        case 5:
          if ((oe(e, t), se(t), n & 512 && (Jt || l === null || Ye(l, l.return)), t.flags & 32)) {
            a = t.stateNode;
            try {
              cn(a, '');
            } catch (X) {
              _t(t, t.return, X);
            }
          }
          (n & 4 &&
            t.stateNode != null &&
            ((a = t.memoizedProps), Jc(t, a, l !== null ? l.memoizedProps : a)),
            n & 1024 && ($c = !0));
          break;
        case 6:
          if ((oe(e, t), se(t), n & 4)) {
            if (t.stateNode === null) throw Error(f(162));
            ((n = t.memoizedProps), (l = t.stateNode));
            try {
              l.nodeValue = n;
            } catch (X) {
              _t(t, t.return, X);
            }
          }
          break;
        case 3:
          if (
            ((Ku = null),
            (a = He),
            (He = Zu(e.containerInfo)),
            oe(e, t),
            (He = a),
            se(t),
            n & 4 && l !== null && l.memoizedState.isDehydrated)
          )
            try {
              Ln(e.containerInfo);
            } catch (X) {
              _t(t, t.return, X);
            }
          $c && (($c = !1), td(t));
          break;
        case 4:
          ((n = He), (He = Zu(t.stateNode.containerInfo)), oe(e, t), se(t), (He = n));
          break;
        case 12:
          (oe(e, t), se(t));
          break;
        case 31:
          (oe(e, t),
            se(t),
            n & 4 && ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ru(t, n))));
          break;
        case 13:
          (oe(e, t),
            se(t),
            t.child.flags & 8192 &&
              (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
              (Nu = ye()),
            n & 4 && ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ru(t, n))));
          break;
        case 22:
          a = t.memoizedState !== null;
          var s = l !== null && l.memoizedState !== null,
            p = Pe,
            A = Jt;
          if (((Pe = p || a), (Jt = A || s), oe(e, t), (Jt = A), (Pe = p), se(t), n & 8192))
            t: for (
              e = t.stateNode,
                e._visibility = a ? e._visibility & -2 : e._visibility | 1,
                a && (l === null || s || Pe || Jt || Wl(t)),
                l = null,
                e = t;
              ;
            ) {
              if (e.tag === 5 || e.tag === 26) {
                if (l === null) {
                  s = l = e;
                  try {
                    if (((u = s.stateNode), a))
                      ((i = u.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'));
                    else {
                      c = s.stateNode;
                      var M = s.memoizedProps.style,
                        b = M != null && M.hasOwnProperty('display') ? M.display : null;
                      c.style.display = b == null || typeof b == 'boolean' ? '' : ('' + b).trim();
                    }
                  } catch (X) {
                    _t(s, s.return, X);
                  }
                }
              } else if (e.tag === 6) {
                if (l === null) {
                  s = e;
                  try {
                    s.stateNode.nodeValue = a ? '' : s.memoizedProps;
                  } catch (X) {
                    _t(s, s.return, X);
                  }
                }
              } else if (e.tag === 18) {
                if (l === null) {
                  s = e;
                  try {
                    var E = s.stateNode;
                    a ? Qd(E, !0) : Qd(s.stateNode, !1);
                  } catch (X) {
                    _t(s, s.return, X);
                  }
                }
              } else if (
                ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
                e.child !== null
              ) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break t;
                (l === e && (l = null), (e = e.return));
              }
              (l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling));
            }
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((l = n.retryQueue), l !== null && ((n.retryQueue = null), Ru(t, l))));
          break;
        case 19:
          (oe(e, t),
            se(t),
            n & 4 && ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ru(t, n))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (oe(e, t), se(t));
      }
    }
    function se(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, n = t.return; n !== null; ) {
            if (Vr(n)) {
              l = n;
              break;
            }
            n = n.return;
          }
          if (l == null) throw Error(f(160));
          switch (l.tag) {
            case 27:
              var a = l.stateNode,
                u = kc(t);
              Du(t, u, a);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (cn(i, ''), (l.flags &= -33));
              var c = kc(t);
              Du(t, c, i);
              break;
            case 3:
            case 4:
              var s = l.stateNode.containerInfo,
                p = kc(t);
              Wc(t, p, s);
              break;
            default:
              throw Error(f(161));
          }
        } catch (A) {
          _t(t, t.return, A);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function td(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          (td(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
        }
    }
    function el(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; ) (kr(t, e.alternate, e), (e = e.sibling));
    }
    function Wl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (bl(4, e, e.return), Wl(e));
            break;
          case 1:
            Ye(e, e.return);
            var l = e.stateNode;
            (typeof l.componentWillUnmount == 'function' && Qr(e, e.return, l), Wl(e));
            break;
          case 27:
            Ra(e.stateNode);
          case 26:
          case 5:
            (Ye(e, e.return), Wl(e));
            break;
          case 22:
            e.memoizedState === null && Wl(e);
            break;
          case 30:
            Wl(e);
            break;
          default:
            Wl(e);
        }
        t = t.sibling;
      }
    }
    function ll(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var n = e.alternate,
          a = t,
          u = e,
          i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            (ll(a, u, l), Sa(4, u));
            break;
          case 1:
            if ((ll(a, u, l), (n = u), (a = n.stateNode), typeof a.componentDidMount == 'function'))
              try {
                a.componentDidMount();
              } catch (p) {
                _t(n, n.return, p);
              }
            if (((n = u), (a = n.updateQueue), a !== null)) {
              var c = n.stateNode;
              try {
                var s = a.shared.hiddenCallbacks;
                if (s !== null)
                  for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) Cs(s[a], c);
              } catch (p) {
                _t(n, n.return, p);
              }
            }
            (l && i & 64 && Xr(u), Ea(u, u.return));
            break;
          case 27:
            Kr(u);
          case 26:
          case 5:
            (ll(a, u, l), l && n === null && i & 4 && Zr(u), Ea(u, u.return));
            break;
          case 12:
            ll(a, u, l);
            break;
          case 31:
            (ll(a, u, l), l && i & 4 && Fr(a, u));
            break;
          case 13:
            (ll(a, u, l), l && i & 4 && Ir(a, u));
            break;
          case 22:
            (u.memoizedState === null && ll(a, u, l), Ea(u, u.return));
            break;
          case 30:
            break;
          default:
            ll(a, u, l);
        }
        e = e.sibling;
      }
    }
    function Fc(t, e) {
      var l = null;
      (t !== null &&
        t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
        (t = null),
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (t = e.memoizedState.cachePool.pool),
        t !== l && (t != null && t.refCount++, l != null && ca(l)));
    }
    function Ic(t, e) {
      ((t = null),
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        (e = e.memoizedState.cache),
        e !== t && (e.refCount++, t != null && ca(t)));
    }
    function Be(t, e, l, n) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (ed(t, e, l, n), (e = e.sibling));
    }
    function ed(t, e, l, n) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Be(t, e, l, n), a & 2048 && Sa(9, e));
          break;
        case 1:
          Be(t, e, l, n);
          break;
        case 3:
          (Be(t, e, l, n),
            a & 2048 &&
              ((t = null),
              e.alternate !== null && (t = e.alternate.memoizedState.cache),
              (e = e.memoizedState.cache),
              e !== t && (e.refCount++, t != null && ca(t))));
          break;
        case 12:
          if (a & 2048) {
            (Be(t, e, l, n), (t = e.stateNode));
            try {
              var u = e.memoizedProps,
                i = u.id,
                c = u.onPostCommit;
              typeof c == 'function' &&
                c(i, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
            } catch (s) {
              _t(e, e.return, s);
            }
          } else Be(t, e, l, n);
          break;
        case 31:
          Be(t, e, l, n);
          break;
        case 13:
          Be(t, e, l, n);
          break;
        case 23:
          break;
        case 22:
          ((u = e.stateNode),
            (i = e.alternate),
            e.memoizedState !== null
              ? u._visibility & 2
                ? Be(t, e, l, n)
                : Ta(t, e)
              : u._visibility & 2
                ? Be(t, e, l, n)
                : ((u._visibility |= 2), On(t, e, l, n, (e.subtreeFlags & 10256) !== 0 || !1)),
            a & 2048 && Fc(i, e));
          break;
        case 24:
          (Be(t, e, l, n), a & 2048 && Ic(e.alternate, e));
          break;
        default:
          Be(t, e, l, n);
      }
    }
    function On(t, e, l, n, a) {
      for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
        var u = t,
          i = e,
          c = l,
          s = n,
          p = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            (On(u, i, c, s, a), Sa(8, i));
            break;
          case 23:
            break;
          case 22:
            var A = i.stateNode;
            (i.memoizedState !== null
              ? A._visibility & 2
                ? On(u, i, c, s, a)
                : Ta(u, i)
              : ((A._visibility |= 2), On(u, i, c, s, a)),
              a && p & 2048 && Fc(i.alternate, i));
            break;
          case 24:
            (On(u, i, c, s, a), a && p & 2048 && Ic(i.alternate, i));
            break;
          default:
            On(u, i, c, s, a);
        }
        e = e.sibling;
      }
    }
    function Ta(t, e) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) {
          var l = t,
            n = e,
            a = n.flags;
          switch (n.tag) {
            case 22:
              (Ta(l, n), a & 2048 && Fc(n.alternate, n));
              break;
            case 24:
              (Ta(l, n), a & 2048 && Ic(n.alternate, n));
              break;
            default:
              Ta(l, n);
          }
          e = e.sibling;
        }
    }
    var Aa = 8192;
    function Mn(t, e, l) {
      if (t.subtreeFlags & Aa) for (t = t.child; t !== null; ) (ld(t, e, l), (t = t.sibling));
    }
    function ld(t, e, l) {
      switch (t.tag) {
        case 26:
          (Mn(t, e, l),
            t.flags & Aa &&
              t.memoizedState !== null &&
              th(l, He, t.memoizedState, t.memoizedProps));
          break;
        case 5:
          Mn(t, e, l);
          break;
        case 3:
        case 4:
          var n = He;
          ((He = Zu(t.stateNode.containerInfo)), Mn(t, e, l), (He = n));
          break;
        case 22:
          t.memoizedState === null &&
            ((n = t.alternate),
            n !== null && n.memoizedState !== null
              ? ((n = Aa), (Aa = 16777216), Mn(t, e, l), (Aa = n))
              : Mn(t, e, l));
          break;
        default:
          Mn(t, e, l);
      }
    }
    function nd(t) {
      var e = t.alternate;
      if (e !== null && ((t = e.child), t !== null)) {
        e.child = null;
        do ((e = t.sibling), (t.sibling = null), (t = e));
        while (t !== null);
      }
    }
    function za(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var l = 0; l < e.length; l++) {
            var n = e[l];
            ((Ft = n), ud(n, t));
          }
        nd(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (ad(t), (t = t.sibling));
    }
    function ad(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (za(t), t.flags & 2048 && bl(9, t, t.return));
          break;
        case 3:
          za(t);
          break;
        case 12:
          za(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null &&
          e._visibility & 2 &&
          (t.return === null || t.return.tag !== 13)
            ? ((e._visibility &= -3), Cu(t))
            : za(t);
          break;
        default:
          za(t);
      }
    }
    function Cu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var l = 0; l < e.length; l++) {
            var n = e[l];
            ((Ft = n), ud(n, t));
          }
        nd(t);
      }
      for (t = t.child; t !== null; ) {
        switch (((e = t), e.tag)) {
          case 0:
          case 11:
          case 15:
            (bl(8, e, e.return), Cu(e));
            break;
          case 22:
            ((l = e.stateNode), l._visibility & 2 && ((l._visibility &= -3), Cu(e)));
            break;
          default:
            Cu(e);
        }
        t = t.sibling;
      }
    }
    function ud(t, e) {
      for (; Ft !== null; ) {
        var l = Ft;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            bl(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var n = l.memoizedState.cachePool.pool;
              n != null && n.refCount++;
            }
            break;
          case 24:
            ca(l.memoizedState.cache);
        }
        if (((n = l.child), n !== null)) ((n.return = l), (Ft = n));
        else
          t: for (l = t; Ft !== null; ) {
            n = Ft;
            var a = n.sibling,
              u = n.return;
            if ((Wr(n), n === l)) {
              Ft = null;
              break t;
            }
            if (a !== null) {
              ((a.return = u), (Ft = a));
              break t;
            }
            Ft = u;
          }
      }
    }
    var gg = {
        getCacheForType: function (t) {
          var e = te(Zt),
            l = e.data.get(t);
          return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
        },
        cacheSignal: function () {
          return te(Zt).controller.signal;
        },
      },
      hg = typeof WeakMap == 'function' ? WeakMap : Map,
      Et = 0,
      Rt = null,
      st = null,
      gt = 0,
      zt = 0,
      Se = null,
      Sl = !1,
      Dn = !1,
      Pc = !1,
      nl = 0,
      wt = 0,
      El = 0,
      $l = 0,
      tf = 0,
      Ee = 0,
      Rn = 0,
      _a = null,
      re = null,
      ef = !1,
      Nu = 0,
      id = 0,
      Uu = 1 / 0,
      Hu = null,
      Tl = null,
      Wt = 0,
      Al = null,
      Cn = null,
      al = 0,
      lf = 0,
      nf = null,
      cd = null,
      xa = 0,
      af = null;
    function Te() {
      return (Et & 2) !== 0 && gt !== 0 ? gt & -gt : S.T !== null ? rf() : Ao();
    }
    function fd() {
      if (Ee === 0)
        if ((gt & 536870912) === 0 || vt) {
          var t = Xa;
          ((Xa <<= 1), (Xa & 3932160) === 0 && (Xa = 262144), (Ee = t));
        } else Ee = 536870912;
      return ((t = pe.current), t !== null && (t.flags |= 32), Ee);
    }
    function de(t, e, l) {
      (((t === Rt && (zt === 2 || zt === 9)) || t.cancelPendingCommit !== null) &&
        (Nn(t, 0), zl(t, gt, Ee, !1)),
        Jn(t, l),
        ((Et & 2) === 0 || t !== Rt) &&
          (t === Rt && ((Et & 2) === 0 && ($l |= l), wt === 4 && zl(t, gt, Ee, !1)), Ge(t)));
    }
    function od(t, e, l) {
      if ((Et & 6) !== 0) throw Error(f(327));
      var n = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Kn(t, e),
        a = n ? bg(t, e) : cf(t, e, !0),
        u = n;
      do {
        if (a === 0) {
          Dn && !n && zl(t, e, 0, !1);
          break;
        } else {
          if (((l = t.current.alternate), u && !vg(l))) {
            ((a = cf(t, e, !1)), (u = !1));
            continue;
          }
          if (a === 2) {
            if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
            else
              ((i = t.pendingLanes & -536870913),
                (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
            if (i !== 0) {
              e = i;
              t: {
                var c = t;
                a = _a;
                var s = c.current.memoizedState.isDehydrated;
                if ((s && (Nn(c, i).flags |= 256), (i = cf(c, i, !1)), i !== 2)) {
                  if (Pc && !s) {
                    ((c.errorRecoveryDisabledLanes |= u), ($l |= u), (a = 4));
                    break t;
                  }
                  ((u = re),
                    (re = a),
                    u !== null && (re === null ? (re = u) : re.push.apply(re, u)));
                }
                a = i;
              }
              if (((u = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Nn(t, 0), zl(t, e, 0, !0));
            break;
          }
          t: {
            switch (((n = t), (u = a), u)) {
              case 0:
              case 1:
                throw Error(f(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                zl(n, e, Ee, !Sl);
                break t;
              case 2:
                re = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(f(329));
            }
            if ((e & 62914560) === e && ((a = Nu + 300 - ye()), 10 < a)) {
              if ((zl(n, e, Ee, !Sl), Za(n, 0, !0) !== 0)) break t;
              ((al = e),
                (n.timeoutHandle = Yd(
                  sd.bind(null, n, l, re, Hu, ef, e, Ee, $l, Rn, Sl, u, 'Throttled', -0, 0),
                  a,
                )));
              break t;
            }
            sd(n, l, re, Hu, ef, e, Ee, $l, Rn, Sl, u, null, -0, 0);
          }
        }
        break;
      } while (!0);
      Ge(t);
    }
    function sd(t, e, l, n, a, u, i, c, s, p, A, M, b, E) {
      if (((t.timeoutHandle = -1), (M = e.subtreeFlags), M & 8192 || (M & 16785408) === 16785408)) {
        ((M = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Qe,
        }),
          ld(e, u, M));
        var X = (u & 62914560) === u ? Nu - ye() : (u & 4194048) === u ? id - ye() : 0;
        if (((X = eh(M, X)), X !== null)) {
          ((al = u),
            (t.cancelPendingCommit = X(pd.bind(null, t, e, u, l, n, a, i, c, s, A, M, null, b, E))),
            zl(t, u, i, !p));
          return;
        }
      }
      pd(t, e, u, l, n, a, i, c, s);
    }
    function vg(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if (
          (l === 0 || l === 11 || l === 15) &&
          e.flags & 16384 &&
          ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
        )
          for (var n = 0; n < l.length; n++) {
            var a = l[n],
              u = a.getSnapshot;
            a = a.value;
            try {
              if (!he(u(), a)) return !1;
            } catch {
              return !1;
            }
          }
        if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) ((l.return = e), (e = l));
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      }
      return !0;
    }
    function zl(t, e, l, n) {
      ((e &= ~tf),
        (e &= ~$l),
        (t.suspendedLanes |= e),
        (t.pingedLanes &= ~e),
        n && (t.warmLanes |= e),
        (n = t.expirationTimes));
      for (var a = e; 0 < a; ) {
        var u = 31 - ge(a),
          i = 1 << u;
        ((n[u] = -1), (a &= ~i));
      }
      l !== 0 && So(t, l, e);
    }
    function Bu() {
      return (Et & 6) === 0 ? (Oa(0), !1) : !0;
    }
    function uf() {
      if (st !== null) {
        if (zt === 0) var t = st.return;
        else ((t = st), (Je = Gl = null), Ec(t), (Tn = null), (oa = 0), (t = st));
        for (; t !== null; ) (Gr(t.alternate, t), (t = t.return));
        st = null;
      }
    }
    function Nn(t, e) {
      var l = t.timeoutHandle;
      (l !== -1 && ((t.timeoutHandle = -1), qg(l)),
        (l = t.cancelPendingCommit),
        l !== null && ((t.cancelPendingCommit = null), l()),
        (al = 0),
        uf(),
        (Rt = t),
        (st = l = Ve(t.current, null)),
        (gt = e),
        (zt = 0),
        (Se = null),
        (Sl = !1),
        (Dn = Kn(t, e)),
        (Pc = !1),
        (Rn = Ee = tf = $l = El = wt = 0),
        (re = _a = null),
        (ef = !1),
        (e & 8) !== 0 && (e |= e & 32));
      var n = t.entangledLanes;
      if (n !== 0)
        for (t = t.entanglements, n &= e; 0 < n; ) {
          var a = 31 - ge(n),
            u = 1 << a;
          ((e |= t[a]), (n &= ~u));
        }
      return ((nl = e), lu(), l);
    }
    function rd(t, e) {
      ((ct = null),
        (S.H = va),
        e === En || e === su
          ? ((e = Os()), (zt = 3))
          : e === oc
            ? ((e = Os()), (zt = 4))
            : (zt =
                e === qc
                  ? 8
                  : e !== null && typeof e == 'object' && typeof e.then == 'function'
                    ? 6
                    : 1),
        (Se = e),
        st === null && ((wt = 1), zu(t, xe(e, t.current))));
    }
    function dd() {
      var t = pe.current;
      return t === null
        ? !0
        : (gt & 4194048) === gt
          ? Re === null
          : (gt & 62914560) === gt || (gt & 536870912) !== 0
            ? t === Re
            : !1;
    }
    function yd() {
      var t = S.H;
      return ((S.H = va), t === null ? va : t);
    }
    function md() {
      var t = S.A;
      return ((S.A = gg), t);
    }
    function ju() {
      ((wt = 4),
        Sl || ((gt & 4194048) !== gt && pe.current !== null) || (Dn = !0),
        ((El & 134217727) === 0 && ($l & 134217727) === 0) || Rt === null || zl(Rt, gt, Ee, !1));
    }
    function cf(t, e, l) {
      var n = Et;
      Et |= 2;
      var a = yd(),
        u = md();
      ((Rt !== t || gt !== e) && ((Hu = null), Nn(t, e)), (e = !1));
      var i = wt;
      t: do
        try {
          if (zt !== 0 && st !== null) {
            var c = st,
              s = Se;
            switch (zt) {
              case 8:
                (uf(), (i = 6));
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                pe.current === null && (e = !0);
                var p = zt;
                if (((zt = 0), (Se = null), Un(t, c, s, p), l && Dn)) {
                  i = 0;
                  break t;
                }
                break;
              default:
                ((p = zt), (zt = 0), (Se = null), Un(t, c, s, p));
            }
          }
          (pg(), (i = wt));
          break;
        } catch (A) {
          rd(t, A);
        }
      while (!0);
      return (
        e && t.shellSuspendCounter++,
        (Je = Gl = null),
        (Et = n),
        (S.H = a),
        (S.A = u),
        st === null && ((Rt = null), (gt = 0), lu()),
        i
      );
    }
    function pg() {
      for (; st !== null; ) gd(st);
    }
    function bg(t, e) {
      var l = Et;
      Et |= 2;
      var n = yd(),
        a = md();
      Rt !== t || gt !== e ? ((Hu = null), (Uu = ye() + 500), Nn(t, e)) : (Dn = Kn(t, e));
      t: do
        try {
          if (zt !== 0 && st !== null) {
            e = st;
            var u = Se;
            e: switch (zt) {
              case 1:
                ((zt = 0), (Se = null), Un(t, e, u, 1));
                break;
              case 2:
              case 9:
                if (_s(u)) {
                  ((zt = 0), (Se = null), hd(e));
                  break;
                }
                ((e = function () {
                  ((zt !== 2 && zt !== 9) || Rt !== t || (zt = 7), Ge(t));
                }),
                  u.then(e, e));
                break t;
              case 3:
                zt = 7;
                break t;
              case 4:
                zt = 5;
                break t;
              case 7:
                _s(u) ? ((zt = 0), (Se = null), hd(e)) : ((zt = 0), (Se = null), Un(t, e, u, 7));
                break;
              case 5:
                var i = null;
                switch (st.tag) {
                  case 26:
                    i = st.memoizedState;
                  case 5:
                  case 27:
                    var c = st;
                    if (i ? e0(i) : c.stateNode.complete) {
                      ((zt = 0), (Se = null));
                      var s = c.sibling;
                      if (s !== null) st = s;
                      else {
                        var p = c.return;
                        p !== null ? ((st = p), qu(p)) : (st = null);
                      }
                      break e;
                    }
                }
                ((zt = 0), (Se = null), Un(t, e, u, 5));
                break;
              case 6:
                ((zt = 0), (Se = null), Un(t, e, u, 6));
                break;
              case 8:
                (uf(), (wt = 6));
                break t;
              default:
                throw Error(f(462));
            }
          }
          Sg();
          break;
        } catch (A) {
          rd(t, A);
        }
      while (!0);
      return (
        (Je = Gl = null),
        (S.H = n),
        (S.A = a),
        (Et = l),
        st !== null ? 0 : ((Rt = null), (gt = 0), lu(), wt)
      );
    }
    function Sg() {
      for (; st !== null && !Qy(); ) gd(st);
    }
    function gd(t) {
      var e = wr(t.alternate, t, nl);
      ((t.memoizedProps = t.pendingProps), e === null ? qu(t) : (st = e));
    }
    function hd(t) {
      var e = t,
        l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Ur(l, e, e.pendingProps, e.type, void 0, gt);
          break;
        case 11:
          e = Ur(l, e, e.pendingProps, e.type.render, e.ref, gt);
          break;
        case 5:
          Ec(e);
        default:
          (Gr(l, e), (e = st = ms(e, nl)), (e = wr(l, e, nl)));
      }
      ((t.memoizedProps = t.pendingProps), e === null ? qu(t) : (st = e));
    }
    function Un(t, e, l, n) {
      ((Je = Gl = null), Ec(e), (Tn = null), (oa = 0));
      var a = e.return;
      try {
        if (fg(t, a, e, l, gt)) {
          ((wt = 1), zu(t, xe(l, t.current)), (st = null));
          return;
        }
      } catch (u) {
        if (a !== null) throw ((st = a), u);
        ((wt = 1), zu(t, xe(l, t.current)), (st = null));
        return;
      }
      e.flags & 32768
        ? (vt || n === 1
            ? (t = !0)
            : Dn || (gt & 536870912) !== 0
              ? (t = !1)
              : ((Sl = t = !0),
                (n === 2 || n === 9 || n === 3 || n === 6) &&
                  ((n = pe.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
          vd(e, t))
        : qu(e);
    }
    function qu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          vd(e, Sl);
          return;
        }
        t = e.return;
        var l = rg(e.alternate, e, nl);
        if (l !== null) {
          st = l;
          return;
        }
        if (((e = e.sibling), e !== null)) {
          st = e;
          return;
        }
        st = e = t;
      } while (e !== null);
      wt === 0 && (wt = 5);
    }
    function vd(t, e) {
      do {
        var l = dg(t.alternate, t);
        if (l !== null) {
          ((l.flags &= 32767), (st = l));
          return;
        }
        if (
          ((l = t.return),
          l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
          !e && ((t = t.sibling), t !== null))
        ) {
          st = t;
          return;
        }
        st = t = l;
      } while (t !== null);
      ((wt = 6), (st = null));
    }
    function pd(t, e, l, n, a, u, i, c, s) {
      t.cancelPendingCommit = null;
      do Lu();
      while (Wt !== 0);
      if ((Et & 6) !== 0) throw Error(f(327));
      if (e !== null) {
        if (e === t.current) throw Error(f(177));
        if (
          ((u = e.lanes | e.childLanes),
          (u |= ki),
          Py(t, l, u, i, c, s),
          t === Rt && ((st = Rt = null), (gt = 0)),
          (Cn = e),
          (Al = t),
          (al = l),
          (lf = u),
          (nf = a),
          (cd = n),
          (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
            ? ((t.callbackNode = null),
              (t.callbackPriority = 0),
              zg(Ya, function () {
                return (Ad(), null);
              }))
            : ((t.callbackNode = null), (t.callbackPriority = 0)),
          (n = (e.flags & 13878) !== 0),
          (e.subtreeFlags & 13878) !== 0 || n)
        ) {
          ((n = S.T), (S.T = null), (a = D.p), (D.p = 2), (i = Et), (Et |= 4));
          try {
            yg(t, e, l);
          } finally {
            ((Et = i), (D.p = a), (S.T = n));
          }
        }
        ((Wt = 1), bd(), Sd(), Ed());
      }
    }
    function bd() {
      if (Wt === 1) {
        Wt = 0;
        var t = Al,
          e = Cn,
          l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          ((l = S.T), (S.T = null));
          var n = D.p;
          D.p = 2;
          var a = Et;
          Et |= 4;
          try {
            Pr(e, t);
            var u = bf,
              i = us(t.containerInfo),
              c = u.focusedElem,
              s = u.selectionRange;
            if (i !== c && c && c.ownerDocument && as(c.ownerDocument.documentElement, c)) {
              if (s !== null && Qi(c)) {
                var p = s.start,
                  A = s.end;
                if ((A === void 0 && (A = p), 'selectionStart' in c))
                  ((c.selectionStart = p), (c.selectionEnd = Math.min(A, c.value.length)));
                else {
                  var M = c.ownerDocument || document,
                    b = (M && M.defaultView) || window;
                  if (b.getSelection) {
                    var E = b.getSelection(),
                      X = c.textContent.length,
                      F = Math.min(s.start, X),
                      Dt = s.end === void 0 ? F : Math.min(s.end, X);
                    !E.extend && F > Dt && ((i = Dt), (Dt = F), (F = i));
                    var g = ns(c, F),
                      r = ns(c, Dt);
                    if (
                      g &&
                      r &&
                      (E.rangeCount !== 1 ||
                        E.anchorNode !== g.node ||
                        E.anchorOffset !== g.offset ||
                        E.focusNode !== r.node ||
                        E.focusOffset !== r.offset)
                    ) {
                      var h = M.createRange();
                      (h.setStart(g.node, g.offset),
                        E.removeAllRanges(),
                        F > Dt
                          ? (E.addRange(h), E.extend(r.node, r.offset))
                          : (h.setEnd(r.node, r.offset), E.addRange(h)));
                    }
                  }
                }
              }
              for (M = [], E = c; (E = E.parentNode); )
                E.nodeType === 1 && M.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
              for (typeof c.focus == 'function' && c.focus(), c = 0; c < M.length; c++) {
                var x = M[c];
                ((x.element.scrollLeft = x.left), (x.element.scrollTop = x.top));
              }
            }
            (($u = !!pf), (bf = pf = null));
          } finally {
            ((Et = a), (D.p = n), (S.T = l));
          }
        }
        ((t.current = e), (Wt = 2));
      }
    }
    function Sd() {
      if (Wt === 2) {
        Wt = 0;
        var t = Al,
          e = Cn,
          l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          ((l = S.T), (S.T = null));
          var n = D.p;
          D.p = 2;
          var a = Et;
          Et |= 4;
          try {
            kr(t, e.alternate, e);
          } finally {
            ((Et = a), (D.p = n), (S.T = l));
          }
        }
        Wt = 3;
      }
    }
    function Ed() {
      if (Wt === 4 || Wt === 3) {
        ((Wt = 0), Zy());
        var t = Al,
          e = Cn,
          l = al,
          n = cd;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? (Wt = 5)
          : ((Wt = 0), (Cn = Al = null), Td(t, t.pendingLanes));
        var a = t.pendingLanes;
        if (
          (a === 0 && (Tl = null),
          zi(l),
          (e = e.stateNode),
          me && typeof me.onCommitFiberRoot == 'function')
        )
          try {
            me.onCommitFiberRoot(Vn, e, void 0, (e.current.flags & 128) === 128);
          } catch {}
        if (n !== null) {
          ((e = S.T), (a = D.p), (D.p = 2), (S.T = null));
          try {
            for (var u = t.onRecoverableError, i = 0; i < n.length; i++) {
              var c = n[i];
              u(c.value, { componentStack: c.stack });
            }
          } finally {
            ((S.T = e), (D.p = a));
          }
        }
        ((al & 3) !== 0 && Lu(),
          Ge(t),
          (a = t.pendingLanes),
          (l & 261930) !== 0 && (a & 42) !== 0
            ? t === af
              ? xa++
              : ((xa = 0), (af = t))
            : (xa = 0),
          Oa(0));
      }
    }
    function Td(t, e) {
      (t.pooledCacheLanes &= e) === 0 &&
        ((e = t.pooledCache), e != null && ((t.pooledCache = null), ca(e)));
    }
    function Lu() {
      return (bd(), Sd(), Ed(), Ad());
    }
    function Ad() {
      if (Wt !== 5) return !1;
      var t = Al,
        e = lf;
      lf = 0;
      var l = zi(al),
        n = S.T,
        a = D.p;
      try {
        ((D.p = 32 > l ? 32 : l), (S.T = null), (l = nf), (nf = null));
        var u = Al,
          i = al;
        if (((Wt = 0), (Cn = Al = null), (al = 0), (Et & 6) !== 0)) throw Error(f(331));
        var c = Et;
        if (
          ((Et |= 4),
          ad(u.current),
          ed(u, u.current, i, l),
          (Et = c),
          Oa(0, !1),
          me && typeof me.onPostCommitFiberRoot == 'function')
        )
          try {
            me.onPostCommitFiberRoot(Vn, u);
          } catch {}
        return !0;
      } finally {
        ((D.p = a), (S.T = n), Td(t, e));
      }
    }
    function zd(t, e, l) {
      ((e = xe(l, e)),
        (e = jc(t.stateNode, e, 2)),
        (t = hl(t, e, 2)),
        t !== null && (Jn(t, 2), Ge(t)));
    }
    function _t(t, e, l) {
      if (t.tag === 3) zd(t, t, l);
      else
        for (; e !== null; ) {
          if (e.tag === 3) {
            zd(e, t, l);
            break;
          } else if (e.tag === 1) {
            var n = e.stateNode;
            if (
              typeof e.type.getDerivedStateFromError == 'function' ||
              (typeof n.componentDidCatch == 'function' && (Tl === null || !Tl.has(n)))
            ) {
              ((t = xe(l, t)),
                (l = _r(2)),
                (n = hl(e, l, 2)),
                n !== null && (xr(l, n, e, t), Jn(n, 2), Ge(n)));
              break;
            }
          }
          e = e.return;
        }
    }
    function ff(t, e, l) {
      var n = t.pingCache;
      if (n === null) {
        n = t.pingCache = new hg();
        var a = new Set();
        n.set(e, a);
      } else ((a = n.get(e)), a === void 0 && ((a = new Set()), n.set(e, a)));
      a.has(l) || ((Pc = !0), a.add(l), (t = Eg.bind(null, t, e, l)), e.then(t, t));
    }
    function Eg(t, e, l) {
      var n = t.pingCache;
      (n !== null && n.delete(e),
        (t.pingedLanes |= t.suspendedLanes & l),
        (t.warmLanes &= ~l),
        Rt === t &&
          (gt & l) === l &&
          (wt === 4 || (wt === 3 && (gt & 62914560) === gt && 300 > ye() - Nu)
            ? (Et & 2) === 0 && Nn(t, 0)
            : (tf |= l),
          Rn === gt && (Rn = 0)),
        Ge(t));
    }
    function _d(t, e) {
      (e === 0 && (e = bo()), (t = Ll(t, e)), t !== null && (Jn(t, e), Ge(t)));
    }
    function Tg(t) {
      var e = t.memoizedState,
        l = 0;
      (e !== null && (l = e.retryLane), _d(t, l));
    }
    function Ag(t, e) {
      var l = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var n = t.stateNode,
            a = t.memoizedState;
          a !== null && (l = a.retryLane);
          break;
        case 19:
          n = t.stateNode;
          break;
        case 22:
          n = t.stateNode._retryCache;
          break;
        default:
          throw Error(f(314));
      }
      (n !== null && n.delete(e), _d(t, l));
    }
    function zg(t, e) {
      return Si(t, e);
    }
    var wu = null,
      Hn = null,
      of = !1,
      Yu = !1,
      sf = !1,
      _l = 0;
    function Ge(t) {
      (t !== Hn && t.next === null && (Hn === null ? (wu = Hn = t) : (Hn = Hn.next = t)),
        (Yu = !0),
        of || ((of = !0), xg()));
    }
    function Oa(t, e) {
      if (!sf && Yu) {
        sf = !0;
        do
          for (var l = !1, n = wu; n !== null; ) {
            if (t !== 0) {
              var a = n.pendingLanes;
              if (a === 0) var u = 0;
              else {
                var i = n.suspendedLanes,
                  c = n.pingedLanes;
                ((u = (1 << (31 - ge(42 | t) + 1)) - 1),
                  (u &= a & ~(i & ~c)),
                  (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
              }
              u !== 0 && ((l = !0), Dd(n, u));
            } else
              ((u = gt),
                (u = Za(
                  n,
                  n === Rt ? u : 0,
                  n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
                )),
                (u & 3) === 0 || Kn(n, u) || ((l = !0), Dd(n, u)));
            n = n.next;
          }
        while (l);
        sf = !1;
      }
    }
    function _g() {
      xd();
    }
    function xd() {
      Yu = of = !1;
      var t = 0;
      _l !== 0 && jg() && (t = _l);
      for (var e = ye(), l = null, n = wu; n !== null; ) {
        var a = n.next,
          u = Od(n, e);
        (u === 0
          ? ((n.next = null), l === null ? (wu = a) : (l.next = a), a === null && (Hn = l))
          : ((l = n), (t !== 0 || (u & 3) !== 0) && (Yu = !0)),
          (n = a));
      }
      ((Wt !== 0 && Wt !== 5) || Oa(t), _l !== 0 && (_l = 0));
    }
    function Od(t, e) {
      for (
        var l = t.suspendedLanes,
          n = t.pingedLanes,
          a = t.expirationTimes,
          u = t.pendingLanes & -62914561;
        0 < u;
      ) {
        var i = 31 - ge(u),
          c = 1 << i,
          s = a[i];
        (s === -1
          ? ((c & l) === 0 || (c & n) !== 0) && (a[i] = Iy(c, e))
          : s <= e && (t.expiredLanes |= c),
          (u &= ~c));
      }
      if (
        ((e = Rt),
        (l = gt),
        (l = Za(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
        (n = t.callbackNode),
        l === 0 || (t === e && (zt === 2 || zt === 9)) || t.cancelPendingCommit !== null)
      )
        return (
          n !== null && n !== null && Ei(n),
          (t.callbackNode = null),
          (t.callbackPriority = 0)
        );
      if ((l & 3) === 0 || Kn(t, l)) {
        if (((e = l & -l), e === t.callbackPriority)) return e;
        switch ((n !== null && Ei(n), zi(l))) {
          case 2:
          case 8:
            l = vo;
            break;
          case 32:
            l = Ya;
            break;
          case 268435456:
            l = po;
            break;
          default:
            l = Ya;
        }
        return (
          (n = Md.bind(null, t)),
          (l = Si(l, n)),
          (t.callbackPriority = e),
          (t.callbackNode = l),
          e
        );
      }
      return (
        n !== null && n !== null && Ei(n),
        (t.callbackPriority = 2),
        (t.callbackNode = null),
        2
      );
    }
    function Md(t, e) {
      if (Wt !== 0 && Wt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
      var l = t.callbackNode;
      if (Lu() && t.callbackNode !== l) return null;
      var n = gt;
      return (
        (n = Za(t, t === Rt ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
        n === 0
          ? null
          : (od(t, n, e),
            Od(t, ye()),
            t.callbackNode != null && t.callbackNode === l ? Md.bind(null, t) : null)
      );
    }
    function Dd(t, e) {
      if (Lu()) return null;
      od(t, e, !0);
    }
    function xg() {
      Lg(function () {
        (Et & 6) !== 0 ? Si(ho, _g) : xd();
      });
    }
    function rf() {
      if (_l === 0) {
        var t = bn;
        (t === 0 && ((t = Ga), (Ga <<= 1), (Ga & 261888) === 0 && (Ga = 256)), (_l = t));
      }
      return _l;
    }
    function Rd(t) {
      return t == null || typeof t == 'symbol' || typeof t == 'boolean'
        ? null
        : typeof t == 'function'
          ? t
          : ka('' + t);
    }
    function Cd(t, e) {
      var l = e.ownerDocument.createElement('input');
      return (
        (l.name = e.name),
        (l.value = e.value),
        t.id && l.setAttribute('form', t.id),
        e.parentNode.insertBefore(l, e),
        (t = new FormData(t)),
        l.parentNode.removeChild(l),
        t
      );
    }
    function Og(t, e, l, n, a) {
      if (e === 'submit' && l && l.stateNode === a) {
        var u = Rd((a[ie] || null).action),
          i = n.submitter;
        i &&
          ((e = (e = i[ie] || null) ? Rd(e.formAction) : i.getAttribute('formAction')),
          e !== null && ((u = e), (i = null)));
        var c = new Ia('action', 'action', null, n, a);
        t.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (n.defaultPrevented) {
                  if (_l !== 0) {
                    var s = i ? Cd(a, i) : new FormData(a);
                    Rc(l, { pending: !0, data: s, method: a.method, action: u }, null, s);
                  }
                } else
                  typeof u == 'function' &&
                    (c.preventDefault(),
                    (s = i ? Cd(a, i) : new FormData(a)),
                    Rc(l, { pending: !0, data: s, method: a.method, action: u }, u, s));
              },
              currentTarget: a,
            },
          ],
        });
      }
    }
    for (var df = 0; df < Ji.length; df++) {
      var yf = Ji[df],
        Mg = yf.toLowerCase(),
        Dg = yf[0].toUpperCase() + yf.slice(1);
      Ue(Mg, 'on' + Dg);
    }
    (Ue(fs, 'onAnimationEnd'),
      Ue(os, 'onAnimationIteration'),
      Ue(ss, 'onAnimationStart'),
      Ue('dblclick', 'onDoubleClick'),
      Ue('focusin', 'onFocus'),
      Ue('focusout', 'onBlur'),
      Ue(Vm, 'onTransitionRun'),
      Ue(Km, 'onTransitionStart'),
      Ue(Jm, 'onTransitionCancel'),
      Ue(rs, 'onTransitionEnd'),
      an('onMouseEnter', ['mouseout', 'mouseover']),
      an('onMouseLeave', ['mouseout', 'mouseover']),
      an('onPointerEnter', ['pointerout', 'pointerover']),
      an('onPointerLeave', ['pointerout', 'pointerover']),
      Hl(
        'onChange',
        'change click focusin focusout input keydown keyup selectionchange'.split(' '),
      ),
      Hl(
        'onSelect',
        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
          ' ',
        ),
      ),
      Hl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      Hl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
      Hl(
        'onCompositionStart',
        'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
      ),
      Hl(
        'onCompositionUpdate',
        'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
      ));
    var Ma =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' ',
        ),
      Rg = new Set(
        'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ma),
      );
    function Nd(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var n = t[l],
          a = n.event;
        n = n.listeners;
        t: {
          var u = void 0;
          if (e)
            for (var i = n.length - 1; 0 <= i; i--) {
              var c = n[i],
                s = c.instance,
                p = c.currentTarget;
              if (((c = c.listener), s !== u && a.isPropagationStopped())) break t;
              ((u = c), (a.currentTarget = p));
              try {
                u(a);
              } catch (A) {
                eu(A);
              }
              ((a.currentTarget = null), (u = s));
            }
          else
            for (i = 0; i < n.length; i++) {
              if (
                ((c = n[i]),
                (s = c.instance),
                (p = c.currentTarget),
                (c = c.listener),
                s !== u && a.isPropagationStopped())
              )
                break t;
              ((u = c), (a.currentTarget = p));
              try {
                u(a);
              } catch (A) {
                eu(A);
              }
              ((a.currentTarget = null), (u = s));
            }
        }
      }
    }
    function rt(t, e) {
      var l = e[_i];
      l === void 0 && (l = e[_i] = new Set());
      var n = t + '__bubble';
      l.has(n) || (Ud(e, t, 2, !1), l.add(n));
    }
    function mf(t, e, l) {
      var n = 0;
      (e && (n |= 4), Ud(l, t, n, e));
    }
    var Gu = '_reactListening' + Math.random().toString(36).slice(2);
    function gf(t) {
      if (!t[Gu]) {
        ((t[Gu] = !0),
          xo.forEach(function (l) {
            l !== 'selectionchange' && (Rg.has(l) || mf(l, !1, t), mf(l, !0, t));
          }));
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Gu] || ((e[Gu] = !0), mf('selectionchange', !1, e));
      }
    }
    function Ud(t, e, l, n) {
      switch (f0(e)) {
        case 2:
          var a = ah;
          break;
        case 8:
          a = uh;
          break;
        default:
          a = Rf;
      }
      ((l = a.bind(null, e, l, t)),
        (a = void 0),
        !Hi || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (a = !0),
        n
          ? a !== void 0
            ? t.addEventListener(e, l, { capture: !0, passive: a })
            : t.addEventListener(e, l, !0)
          : a !== void 0
            ? t.addEventListener(e, l, { passive: a })
            : t.addEventListener(e, l, !1));
    }
    function hf(t, e, l, n, a) {
      var u = n;
      if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
        t: for (;;) {
          if (n === null) return;
          var i = n.tag;
          if (i === 3 || i === 4) {
            var c = n.stateNode.containerInfo;
            if (c === a) break;
            if (i === 4)
              for (i = n.return; i !== null; ) {
                var s = i.tag;
                if ((s === 3 || s === 4) && i.stateNode.containerInfo === a) return;
                i = i.return;
              }
            for (; c !== null; ) {
              if (((i = en(c)), i === null)) return;
              if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
                n = u = i;
                continue t;
              }
              c = c.parentNode;
            }
          }
          n = n.return;
        }
      Lo(function () {
        var p = u,
          A = Ni(l),
          M = [];
        t: {
          var b = ds.get(t);
          if (b !== void 0) {
            var E = Ia,
              X = t;
            switch (t) {
              case 'keypress':
                if ($a(l) === 0) break t;
              case 'keydown':
              case 'keyup':
                E = Am;
                break;
              case 'focusin':
                ((X = 'focus'), (E = Li));
                break;
              case 'focusout':
                ((X = 'blur'), (E = Li));
                break;
              case 'beforeblur':
              case 'afterblur':
                E = Li;
                break;
              case 'click':
                if (l.button === 2) break t;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                E = Go;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                E = rm;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                E = xm;
                break;
              case fs:
              case os:
              case ss:
                E = mm;
                break;
              case rs:
                E = Mm;
                break;
              case 'scroll':
              case 'scrollend':
                E = om;
                break;
              case 'wheel':
                E = Rm;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                E = hm;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                E = Qo;
                break;
              case 'toggle':
              case 'beforetoggle':
                E = Nm;
            }
            var F = (e & 4) !== 0,
              Dt = !F && (t === 'scroll' || t === 'scrollend'),
              g = F ? (b !== null ? b + 'Capture' : null) : b;
            F = [];
            for (var r = p, h; r !== null; ) {
              var x = r;
              if (
                ((h = x.stateNode),
                (x = x.tag),
                (x !== 5 && x !== 26 && x !== 27) ||
                  h === null ||
                  g === null ||
                  ((x = $n(r, g)), x != null && F.push(Da(r, x, h))),
                Dt)
              )
                break;
              r = r.return;
            }
            0 < F.length && ((b = new E(b, X, null, l, A)), M.push({ event: b, listeners: F }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (
              ((b = t === 'mouseover' || t === 'pointerover'),
              (E = t === 'mouseout' || t === 'pointerout'),
              b && l !== Ci && (X = l.relatedTarget || l.fromElement) && (en(X) || X[tn]))
            )
              break t;
            if (
              (E || b) &&
              ((b =
                A.window === A
                  ? A
                  : (b = A.ownerDocument)
                    ? b.defaultView || b.parentWindow
                    : window),
              E
                ? ((X = l.relatedTarget || l.toElement),
                  (E = p),
                  (X = X ? en(X) : null),
                  X !== null &&
                    ((Dt = C(X)), (F = X.tag), X !== Dt || (F !== 5 && F !== 27 && F !== 6)) &&
                    (X = null))
                : ((E = null), (X = p)),
              E !== X)
            ) {
              if (
                ((F = Go),
                (x = 'onMouseLeave'),
                (g = 'onMouseEnter'),
                (r = 'mouse'),
                (t === 'pointerout' || t === 'pointerover') &&
                  ((F = Qo), (x = 'onPointerLeave'), (g = 'onPointerEnter'), (r = 'pointer')),
                (Dt = E == null ? b : Wn(E)),
                (h = X == null ? b : Wn(X)),
                (b = new F(x, r + 'leave', E, l, A)),
                (b.target = Dt),
                (b.relatedTarget = h),
                (x = null),
                en(A) === p &&
                  ((F = new F(g, r + 'enter', X, l, A)),
                  (F.target = h),
                  (F.relatedTarget = Dt),
                  (x = F)),
                (Dt = x),
                E && X)
              )
                e: {
                  for (F = Cg, g = E, r = X, h = 0, x = g; x; x = F(x)) h++;
                  x = 0;
                  for (var W = r; W; W = F(W)) x++;
                  for (; 0 < h - x; ) ((g = F(g)), h--);
                  for (; 0 < x - h; ) ((r = F(r)), x--);
                  for (; h--; ) {
                    if (g === r || (r !== null && g === r.alternate)) {
                      F = g;
                      break e;
                    }
                    ((g = F(g)), (r = F(r)));
                  }
                  F = null;
                }
              else F = null;
              (E !== null && Hd(M, b, E, F, !1), X !== null && Dt !== null && Hd(M, Dt, X, F, !0));
            }
          }
          t: {
            if (
              ((b = p ? Wn(p) : window),
              (E = b.nodeName && b.nodeName.toLowerCase()),
              E === 'select' || (E === 'input' && b.type === 'file'))
            )
              var bt = Fo;
            else if (Wo(b))
              if (Io) bt = Xm;
              else {
                bt = Ym;
                var Q = wm;
              }
            else
              ((E = b.nodeName),
                !E || E.toLowerCase() !== 'input' || (b.type !== 'checkbox' && b.type !== 'radio')
                  ? p && Ri(p.elementType) && (bt = Fo)
                  : (bt = Gm));
            if (bt && (bt = bt(t, p))) {
              $o(M, bt, l, A);
              break t;
            }
            (Q && Q(t, b, p),
              t === 'focusout' &&
                p &&
                b.type === 'number' &&
                p.memoizedProps.value != null &&
                Di(b, 'number', b.value));
          }
          switch (((Q = p ? Wn(p) : window), t)) {
            case 'focusin':
              (Wo(Q) || Q.contentEditable === 'true') && ((rn = Q), (Zi = p), (aa = null));
              break;
            case 'focusout':
              aa = Zi = rn = null;
              break;
            case 'mousedown':
              Vi = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              ((Vi = !1), is(M, l, A));
              break;
            case 'selectionchange':
              if (Zm) break;
            case 'keydown':
            case 'keyup':
              is(M, l, A);
          }
          var ft;
          if (Yi)
            t: {
              switch (t) {
                case 'compositionstart':
                  var ht = 'onCompositionStart';
                  break t;
                case 'compositionend':
                  ht = 'onCompositionEnd';
                  break t;
                case 'compositionupdate':
                  ht = 'onCompositionUpdate';
                  break t;
              }
              ht = void 0;
            }
          else
            sn
              ? Jo(t, l) && (ht = 'onCompositionEnd')
              : t === 'keydown' && l.keyCode === 229 && (ht = 'onCompositionStart');
          (ht &&
            (Zo &&
              l.locale !== 'ko' &&
              (sn || ht !== 'onCompositionStart'
                ? ht === 'onCompositionEnd' && sn && (ft = wo())
                : ((ol = A), (Bi = 'value' in ol ? ol.value : ol.textContent), (sn = !0))),
            (Q = Xu(p, ht)),
            0 < Q.length &&
              ((ht = new Xo(ht, t, null, l, A)),
              M.push({ event: ht, listeners: Q }),
              ft ? (ht.data = ft) : ((ft = ko(l)), ft !== null && (ht.data = ft)))),
            (ft = Hm ? Bm(t, l) : jm(t, l)) &&
              ((ht = Xu(p, 'onBeforeInput')),
              0 < ht.length &&
                ((Q = new Xo('onBeforeInput', 'beforeinput', null, l, A)),
                M.push({ event: Q, listeners: ht }),
                (Q.data = ft))),
            Og(M, t, p, l, A));
        }
        Nd(M, e);
      });
    }
    function Da(t, e, l) {
      return { instance: t, listener: e, currentTarget: l };
    }
    function Xu(t, e) {
      for (var l = e + 'Capture', n = []; t !== null; ) {
        var a = t,
          u = a.stateNode;
        if (
          ((a = a.tag),
          (a !== 5 && a !== 26 && a !== 27) ||
            u === null ||
            ((a = $n(t, l)),
            a != null && n.unshift(Da(t, a, u)),
            (a = $n(t, e)),
            a != null && n.push(Da(t, a, u))),
          t.tag === 3)
        )
          return n;
        t = t.return;
      }
      return [];
    }
    function Cg(t) {
      if (t === null) return null;
      do t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Hd(t, e, l, n, a) {
      for (var u = e._reactName, i = []; l !== null && l !== n; ) {
        var c = l,
          s = c.alternate,
          p = c.stateNode;
        if (((c = c.tag), s !== null && s === n)) break;
        ((c !== 5 && c !== 26 && c !== 27) ||
          p === null ||
          ((s = p),
          a
            ? ((p = $n(l, u)), p != null && i.unshift(Da(l, p, s)))
            : a || ((p = $n(l, u)), p != null && i.push(Da(l, p, s)))),
          (l = l.return));
      }
      i.length !== 0 && t.push({ event: e, listeners: i });
    }
    var Ng = /\r\n?/g,
      Ug = /\u0000|\uFFFD/g;
    function Bd(t) {
      return (typeof t == 'string' ? t : '' + t)
        .replace(
          Ng,
          `
`,
        )
        .replace(Ug, '');
    }
    function jd(t, e) {
      return ((e = Bd(e)), Bd(t) === e);
    }
    function Mt(t, e, l, n, a, u) {
      switch (l) {
        case 'children':
          typeof n == 'string'
            ? e === 'body' || (e === 'textarea' && n === '') || cn(t, n)
            : (typeof n == 'number' || typeof n == 'bigint') && e !== 'body' && cn(t, '' + n);
          break;
        case 'className':
          Ka(t, 'class', n);
          break;
        case 'tabIndex':
          Ka(t, 'tabindex', n);
          break;
        case 'dir':
        case 'role':
        case 'viewBox':
        case 'width':
        case 'height':
          Ka(t, l, n);
          break;
        case 'style':
          jo(t, n, u);
          break;
        case 'data':
          if (e !== 'object') {
            Ka(t, 'data', n);
            break;
          }
        case 'src':
        case 'href':
          if (n === '' && (e !== 'a' || l !== 'href')) {
            t.removeAttribute(l);
            break;
          }
          if (
            n == null ||
            typeof n == 'function' ||
            typeof n == 'symbol' ||
            typeof n == 'boolean'
          ) {
            t.removeAttribute(l);
            break;
          }
          ((n = ka('' + n)), t.setAttribute(l, n));
          break;
        case 'action':
        case 'formAction':
          if (typeof n == 'function') {
            t.setAttribute(
              l,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          } else
            typeof u == 'function' &&
              (l === 'formAction'
                ? (e !== 'input' && Mt(t, e, 'name', a.name, a, null),
                  Mt(t, e, 'formEncType', a.formEncType, a, null),
                  Mt(t, e, 'formMethod', a.formMethod, a, null),
                  Mt(t, e, 'formTarget', a.formTarget, a, null))
                : (Mt(t, e, 'encType', a.encType, a, null),
                  Mt(t, e, 'method', a.method, a, null),
                  Mt(t, e, 'target', a.target, a, null)));
          if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
            t.removeAttribute(l);
            break;
          }
          ((n = ka('' + n)), t.setAttribute(l, n));
          break;
        case 'onClick':
          n != null && (t.onclick = Qe);
          break;
        case 'onScroll':
          n != null && rt('scroll', t);
          break;
        case 'onScrollEnd':
          n != null && rt('scrollend', t);
          break;
        case 'dangerouslySetInnerHTML':
          if (n != null) {
            if (typeof n != 'object' || !('__html' in n)) throw Error(f(61));
            if (((l = n.__html), l != null)) {
              if (a.children != null) throw Error(f(60));
              t.innerHTML = l;
            }
          }
          break;
        case 'multiple':
          t.multiple = n && typeof n != 'function' && typeof n != 'symbol';
          break;
        case 'muted':
          t.muted = n && typeof n != 'function' && typeof n != 'symbol';
          break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'defaultValue':
        case 'defaultChecked':
        case 'innerHTML':
        case 'ref':
          break;
        case 'autoFocus':
          break;
        case 'xlinkHref':
          if (
            n == null ||
            typeof n == 'function' ||
            typeof n == 'boolean' ||
            typeof n == 'symbol'
          ) {
            t.removeAttribute('xlink:href');
            break;
          }
          ((l = ka('' + n)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
          break;
        case 'contentEditable':
        case 'spellCheck':
        case 'draggable':
        case 'value':
        case 'autoReverse':
        case 'externalResourcesRequired':
        case 'focusable':
        case 'preserveAlpha':
          n != null && typeof n != 'function' && typeof n != 'symbol'
            ? t.setAttribute(l, '' + n)
            : t.removeAttribute(l);
          break;
        case 'inert':
        case 'allowFullScreen':
        case 'async':
        case 'autoPlay':
        case 'controls':
        case 'default':
        case 'defer':
        case 'disabled':
        case 'disablePictureInPicture':
        case 'disableRemotePlayback':
        case 'formNoValidate':
        case 'hidden':
        case 'loop':
        case 'noModule':
        case 'noValidate':
        case 'open':
        case 'playsInline':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'itemScope':
          n && typeof n != 'function' && typeof n != 'symbol'
            ? t.setAttribute(l, '')
            : t.removeAttribute(l);
          break;
        case 'capture':
        case 'download':
          n === !0
            ? t.setAttribute(l, '')
            : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
              ? t.setAttribute(l, n)
              : t.removeAttribute(l);
          break;
        case 'cols':
        case 'rows':
        case 'size':
        case 'span':
          n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
            ? t.setAttribute(l, n)
            : t.removeAttribute(l);
          break;
        case 'rowSpan':
        case 'start':
          n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
            ? t.removeAttribute(l)
            : t.setAttribute(l, n);
          break;
        case 'popover':
          (rt('beforetoggle', t), rt('toggle', t), Va(t, 'popover', n));
          break;
        case 'xlinkActuate':
          Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
          break;
        case 'xlinkArcrole':
          Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
          break;
        case 'xlinkRole':
          Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
          break;
        case 'xlinkShow':
          Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
          break;
        case 'xlinkTitle':
          Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
          break;
        case 'xlinkType':
          Xe(t, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
          break;
        case 'xmlBase':
          Xe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
          break;
        case 'xmlLang':
          Xe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
          break;
        case 'xmlSpace':
          Xe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
          break;
        case 'is':
          Va(t, 'is', n);
          break;
        case 'innerText':
        case 'textContent':
          break;
        default:
          (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
            ((l = cm.get(l) || l), Va(t, l, n));
      }
    }
    function vf(t, e, l, n, a, u) {
      switch (l) {
        case 'style':
          jo(t, n, u);
          break;
        case 'dangerouslySetInnerHTML':
          if (n != null) {
            if (typeof n != 'object' || !('__html' in n)) throw Error(f(61));
            if (((l = n.__html), l != null)) {
              if (a.children != null) throw Error(f(60));
              t.innerHTML = l;
            }
          }
          break;
        case 'children':
          typeof n == 'string'
            ? cn(t, n)
            : (typeof n == 'number' || typeof n == 'bigint') && cn(t, '' + n);
          break;
        case 'onScroll':
          n != null && rt('scroll', t);
          break;
        case 'onScrollEnd':
          n != null && rt('scrollend', t);
          break;
        case 'onClick':
          n != null && (t.onclick = Qe);
          break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'innerHTML':
        case 'ref':
          break;
        case 'innerText':
        case 'textContent':
          break;
        default:
          if (!Oo.hasOwnProperty(l))
            t: {
              if (
                l[0] === 'o' &&
                l[1] === 'n' &&
                ((a = l.endsWith('Capture')),
                (e = l.slice(2, a ? l.length - 7 : void 0)),
                (u = t[ie] || null),
                (u = u != null ? u[l] : null),
                typeof u == 'function' && t.removeEventListener(e, u, a),
                typeof n == 'function')
              ) {
                (typeof u != 'function' &&
                  u !== null &&
                  (l in t ? (t[l] = null) : t.hasAttribute(l) && t.removeAttribute(l)),
                  t.addEventListener(e, n, a));
                break t;
              }
              l in t ? (t[l] = n) : n === !0 ? t.setAttribute(l, '') : Va(t, l, n);
            }
      }
    }
    function le(t, e, l) {
      switch (e) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
          break;
        case 'img':
          (rt('error', t), rt('load', t));
          var n = !1,
            a = !1,
            u;
          for (u in l)
            if (l.hasOwnProperty(u)) {
              var i = l[u];
              if (i != null)
                switch (u) {
                  case 'src':
                    n = !0;
                    break;
                  case 'srcSet':
                    a = !0;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    throw Error(f(137, e));
                  default:
                    Mt(t, e, u, i, l, null);
                }
            }
          (a && Mt(t, e, 'srcSet', l.srcSet, l, null), n && Mt(t, e, 'src', l.src, l, null));
          return;
        case 'input':
          rt('invalid', t);
          var c = (u = i = a = null),
            s = null,
            p = null;
          for (n in l)
            if (l.hasOwnProperty(n)) {
              var A = l[n];
              if (A != null)
                switch (n) {
                  case 'name':
                    a = A;
                    break;
                  case 'type':
                    i = A;
                    break;
                  case 'checked':
                    s = A;
                    break;
                  case 'defaultChecked':
                    p = A;
                    break;
                  case 'value':
                    u = A;
                    break;
                  case 'defaultValue':
                    c = A;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    if (A != null) throw Error(f(137, e));
                    break;
                  default:
                    Mt(t, e, n, A, l, null);
                }
            }
          No(t, u, c, s, p, i, a, !1);
          return;
        case 'select':
          (rt('invalid', t), (n = i = u = null));
          for (a in l)
            if (l.hasOwnProperty(a) && ((c = l[a]), c != null))
              switch (a) {
                case 'value':
                  u = c;
                  break;
                case 'defaultValue':
                  i = c;
                  break;
                case 'multiple':
                  n = c;
                default:
                  Mt(t, e, a, c, l, null);
              }
          ((e = u),
            (l = i),
            (t.multiple = !!n),
            e != null ? un(t, !!n, e, !1) : l != null && un(t, !!n, l, !0));
          return;
        case 'textarea':
          (rt('invalid', t), (u = a = n = null));
          for (i in l)
            if (l.hasOwnProperty(i) && ((c = l[i]), c != null))
              switch (i) {
                case 'value':
                  n = c;
                  break;
                case 'defaultValue':
                  a = c;
                  break;
                case 'children':
                  u = c;
                  break;
                case 'dangerouslySetInnerHTML':
                  if (c != null) throw Error(f(91));
                  break;
                default:
                  Mt(t, e, i, c, l, null);
              }
          Ho(t, n, a, u);
          return;
        case 'option':
          for (s in l)
            l.hasOwnProperty(s) &&
              ((n = l[s]), n != null) &&
              (s === 'selected'
                ? (t.selected = n && typeof n != 'function' && typeof n != 'symbol')
                : Mt(t, e, s, n, l, null));
          return;
        case 'dialog':
          (rt('beforetoggle', t), rt('toggle', t), rt('cancel', t), rt('close', t));
          break;
        case 'iframe':
        case 'object':
          rt('load', t);
          break;
        case 'video':
        case 'audio':
          for (n = 0; n < Ma.length; n++) rt(Ma[n], t);
          break;
        case 'image':
          (rt('error', t), rt('load', t));
          break;
        case 'details':
          rt('toggle', t);
          break;
        case 'embed':
        case 'source':
        case 'link':
          (rt('error', t), rt('load', t));
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'hr':
        case 'keygen':
        case 'meta':
        case 'param':
        case 'track':
        case 'wbr':
        case 'menuitem':
          for (p in l)
            if (l.hasOwnProperty(p) && ((n = l[p]), n != null))
              switch (p) {
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, e));
                default:
                  Mt(t, e, p, n, l, null);
              }
          return;
        default:
          if (Ri(e)) {
            for (A in l)
              l.hasOwnProperty(A) && ((n = l[A]), n !== void 0 && vf(t, e, A, n, l, void 0));
            return;
          }
      }
      for (c in l) l.hasOwnProperty(c) && ((n = l[c]), n != null && Mt(t, e, c, n, l, null));
    }
    function Hg(t, e, l, n) {
      switch (e) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
          break;
        case 'input':
          var a = null,
            u = null,
            i = null,
            c = null,
            s = null,
            p = null,
            A = null;
          for (E in l) {
            var M = l[E];
            if (l.hasOwnProperty(E) && M != null)
              switch (E) {
                case 'checked':
                  break;
                case 'value':
                  break;
                case 'defaultValue':
                  s = M;
                default:
                  n.hasOwnProperty(E) || Mt(t, e, E, null, n, M);
              }
          }
          for (var b in n) {
            var E = n[b];
            if (((M = l[b]), n.hasOwnProperty(b) && (E != null || M != null)))
              switch (b) {
                case 'type':
                  u = E;
                  break;
                case 'name':
                  a = E;
                  break;
                case 'checked':
                  p = E;
                  break;
                case 'defaultChecked':
                  A = E;
                  break;
                case 'value':
                  i = E;
                  break;
                case 'defaultValue':
                  c = E;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (E != null) throw Error(f(137, e));
                  break;
                default:
                  E !== M && Mt(t, e, b, E, n, M);
              }
          }
          Mi(t, i, c, s, p, A, u, a);
          return;
        case 'select':
          E = i = c = b = null;
          for (u in l)
            if (((s = l[u]), l.hasOwnProperty(u) && s != null))
              switch (u) {
                case 'value':
                  break;
                case 'multiple':
                  E = s;
                default:
                  n.hasOwnProperty(u) || Mt(t, e, u, null, n, s);
              }
          for (a in n)
            if (((u = n[a]), (s = l[a]), n.hasOwnProperty(a) && (u != null || s != null)))
              switch (a) {
                case 'value':
                  b = u;
                  break;
                case 'defaultValue':
                  c = u;
                  break;
                case 'multiple':
                  i = u;
                default:
                  u !== s && Mt(t, e, a, u, n, s);
              }
          ((e = c),
            (l = i),
            (n = E),
            b != null
              ? un(t, !!l, b, !1)
              : !!n != !!l && (e != null ? un(t, !!l, e, !0) : un(t, !!l, l ? [] : '', !1)));
          return;
        case 'textarea':
          E = b = null;
          for (c in l)
            if (((a = l[c]), l.hasOwnProperty(c) && a != null && !n.hasOwnProperty(c)))
              switch (c) {
                case 'value':
                  break;
                case 'children':
                  break;
                default:
                  Mt(t, e, c, null, n, a);
              }
          for (i in n)
            if (((a = n[i]), (u = l[i]), n.hasOwnProperty(i) && (a != null || u != null)))
              switch (i) {
                case 'value':
                  b = a;
                  break;
                case 'defaultValue':
                  E = a;
                  break;
                case 'children':
                  break;
                case 'dangerouslySetInnerHTML':
                  if (a != null) throw Error(f(91));
                  break;
                default:
                  a !== u && Mt(t, e, i, a, n, u);
              }
          Uo(t, b, E);
          return;
        case 'option':
          for (var X in l)
            ((b = l[X]),
              l.hasOwnProperty(X) &&
                b != null &&
                !n.hasOwnProperty(X) &&
                (X === 'selected' ? (t.selected = !1) : Mt(t, e, X, null, n, b)));
          for (s in n)
            ((b = n[s]),
              (E = l[s]),
              n.hasOwnProperty(s) &&
                b !== E &&
                (b != null || E != null) &&
                (s === 'selected'
                  ? (t.selected = b && typeof b != 'function' && typeof b != 'symbol')
                  : Mt(t, e, s, b, n, E)));
          return;
        case 'img':
        case 'link':
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'embed':
        case 'hr':
        case 'keygen':
        case 'meta':
        case 'param':
        case 'source':
        case 'track':
        case 'wbr':
        case 'menuitem':
          for (var F in l)
            ((b = l[F]),
              l.hasOwnProperty(F) && b != null && !n.hasOwnProperty(F) && Mt(t, e, F, null, n, b));
          for (p in n)
            if (
              ((b = n[p]), (E = l[p]), n.hasOwnProperty(p) && b !== E && (b != null || E != null))
            )
              switch (p) {
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (b != null) throw Error(f(137, e));
                  break;
                default:
                  Mt(t, e, p, b, n, E);
              }
          return;
        default:
          if (Ri(e)) {
            for (var Dt in l)
              ((b = l[Dt]),
                l.hasOwnProperty(Dt) &&
                  b !== void 0 &&
                  !n.hasOwnProperty(Dt) &&
                  vf(t, e, Dt, void 0, n, b));
            for (A in n)
              ((b = n[A]),
                (E = l[A]),
                !n.hasOwnProperty(A) ||
                  b === E ||
                  (b === void 0 && E === void 0) ||
                  vf(t, e, A, b, n, E));
            return;
          }
      }
      for (var g in l)
        ((b = l[g]),
          l.hasOwnProperty(g) && b != null && !n.hasOwnProperty(g) && Mt(t, e, g, null, n, b));
      for (M in n)
        ((b = n[M]),
          (E = l[M]),
          !n.hasOwnProperty(M) || b === E || (b == null && E == null) || Mt(t, e, M, b, n, E));
    }
    function qd(t) {
      switch (t) {
        case 'css':
        case 'script':
        case 'font':
        case 'img':
        case 'image':
        case 'input':
        case 'link':
          return !0;
        default:
          return !1;
      }
    }
    function Bg() {
      if (typeof performance.getEntriesByType == 'function') {
        for (
          var t = 0, e = 0, l = performance.getEntriesByType('resource'), n = 0;
          n < l.length;
          n++
        ) {
          var a = l[n],
            u = a.transferSize,
            i = a.initiatorType,
            c = a.duration;
          if (u && c && qd(i)) {
            for (i = 0, c = a.responseEnd, n += 1; n < l.length; n++) {
              var s = l[n],
                p = s.startTime;
              if (p > c) break;
              var A = s.transferSize,
                M = s.initiatorType;
              A && qd(M) && ((s = s.responseEnd), (i += A * (s < c ? 1 : (c - p) / (s - p))));
            }
            if ((--n, (e += (8 * (u + i)) / (a.duration / 1e3)), t++, 10 < t)) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number')
        ? t
        : 5;
    }
    var pf = null,
      bf = null;
    function Qu(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Ld(t) {
      switch (t) {
        case 'http://www.w3.org/2000/svg':
          return 1;
        case 'http://www.w3.org/1998/Math/MathML':
          return 2;
        default:
          return 0;
      }
    }
    function wd(t, e) {
      if (t === 0)
        switch (e) {
          case 'svg':
            return 1;
          case 'math':
            return 2;
          default:
            return 0;
        }
      return t === 1 && e === 'foreignObject' ? 0 : t;
    }
    function Sf(t, e) {
      return (
        t === 'textarea' ||
        t === 'noscript' ||
        typeof e.children == 'string' ||
        typeof e.children == 'number' ||
        typeof e.children == 'bigint' ||
        (typeof e.dangerouslySetInnerHTML == 'object' &&
          e.dangerouslySetInnerHTML !== null &&
          e.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Ef = null;
    function jg() {
      var t = window.event;
      return t && t.type === 'popstate' ? (t === Ef ? !1 : ((Ef = t), !0)) : ((Ef = null), !1);
    }
    var Yd = typeof setTimeout == 'function' ? setTimeout : void 0,
      qg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
      Gd = typeof Promise == 'function' ? Promise : void 0,
      Lg =
        typeof queueMicrotask == 'function'
          ? queueMicrotask
          : typeof Gd < 'u'
            ? function (t) {
                return Gd.resolve(null).then(t).catch(wg);
              }
            : Yd;
    function wg(t) {
      setTimeout(function () {
        throw t;
      });
    }
    function xl(t) {
      return t === 'head';
    }
    function Xd(t, e) {
      var l = e,
        n = 0;
      do {
        var a = l.nextSibling;
        if ((t.removeChild(l), a && a.nodeType === 8))
          if (((l = a.data), l === '/$' || l === '/&')) {
            if (n === 0) {
              (t.removeChild(a), Ln(e));
              return;
            }
            n--;
          } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') n++;
          else if (l === 'html') Ra(t.ownerDocument.documentElement);
          else if (l === 'head') {
            ((l = t.ownerDocument.head), Ra(l));
            for (var u = l.firstChild; u; ) {
              var i = u.nextSibling,
                c = u.nodeName;
              (u[kn] ||
                c === 'SCRIPT' ||
                c === 'STYLE' ||
                (c === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
                l.removeChild(u),
                (u = i));
            }
          } else l === 'body' && Ra(t.ownerDocument.body);
        l = a;
      } while (l);
      Ln(e);
    }
    function Qd(t, e) {
      var l = t;
      t = 0;
      do {
        var n = l.nextSibling;
        if (
          (l.nodeType === 1
            ? e
              ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
              : ((l.style.display = l._stashedDisplay || ''),
                l.getAttribute('style') === '' && l.removeAttribute('style'))
            : l.nodeType === 3 &&
              (e
                ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
                : (l.nodeValue = l._stashedText || '')),
          n && n.nodeType === 8)
        )
          if (((l = n.data), l === '/$')) {
            if (t === 0) break;
            t--;
          } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || t++;
        l = n;
      } while (l);
    }
    function Tf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (((e = e.nextSibling), l.nodeName)) {
          case 'HTML':
          case 'HEAD':
          case 'BODY':
            (Tf(l), xi(l));
            continue;
          case 'SCRIPT':
          case 'STYLE':
            continue;
          case 'LINK':
            if (l.rel.toLowerCase() === 'stylesheet') continue;
        }
        t.removeChild(l);
      }
    }
    function Yg(t, e, l, n) {
      for (; t.nodeType === 1; ) {
        var a = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!n && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
        } else if (n) {
          if (!t[kn])
            switch (e) {
              case 'meta':
                if (!t.hasAttribute('itemprop')) break;
                return t;
              case 'link':
                if (
                  ((u = t.getAttribute('rel')),
                  u === 'stylesheet' && t.hasAttribute('data-precedence'))
                )
                  break;
                if (
                  u !== a.rel ||
                  t.getAttribute('href') !== (a.href == null || a.href === '' ? null : a.href) ||
                  t.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin) ||
                  t.getAttribute('title') !== (a.title == null ? null : a.title)
                )
                  break;
                return t;
              case 'style':
                if (t.hasAttribute('data-precedence')) break;
                return t;
              case 'script':
                if (
                  ((u = t.getAttribute('src')),
                  (u !== (a.src == null ? null : a.src) ||
                    t.getAttribute('type') !== (a.type == null ? null : a.type) ||
                    t.getAttribute('crossorigin') !==
                      (a.crossOrigin == null ? null : a.crossOrigin)) &&
                    u &&
                    t.hasAttribute('async') &&
                    !t.hasAttribute('itemprop'))
                )
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === 'input' && t.type === 'hidden') {
          var u = a.name == null ? null : '' + a.name;
          if (a.type === 'hidden' && t.getAttribute('name') === u) return t;
        } else return t;
        if (((t = Ce(t.nextSibling)), t === null)) break;
      }
      return null;
    }
    function Gg(t, e, l) {
      if (e === '') return null;
      for (; t.nodeType !== 3; )
        if (
          ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !l) ||
          ((t = Ce(t.nextSibling)), t === null)
        )
          return null;
      return t;
    }
    function Zd(t, e) {
      for (; t.nodeType !== 8; )
        if (
          ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
          ((t = Ce(t.nextSibling)), t === null)
        )
          return null;
      return t;
    }
    function Af(t) {
      return t.data === '$?' || t.data === '$~';
    }
    function zf(t) {
      return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading');
    }
    function Xg(t, e) {
      var l = t.ownerDocument;
      if (t.data === '$~') t._reactRetry = e;
      else if (t.data !== '$?' || l.readyState !== 'loading') e();
      else {
        var n = function () {
          (e(), l.removeEventListener('DOMContentLoaded', n));
        };
        (l.addEventListener('DOMContentLoaded', n), (t._reactRetry = n));
      }
    }
    function Ce(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (
            ((e = t.data),
            e === '$' ||
              e === '$!' ||
              e === '$?' ||
              e === '$~' ||
              e === '&' ||
              e === 'F!' ||
              e === 'F')
          )
            break;
          if (e === '/$' || e === '/&') return null;
        }
      }
      return t;
    }
    var _f = null;
    function Vd(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === '/$' || l === '/&') {
            if (e === 0) return Ce(t.nextSibling);
            e--;
          } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Kd(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
            if (e === 0) return t;
            e--;
          } else (l !== '/$' && l !== '/&') || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Jd(t, e, l) {
      switch (((e = Qu(l)), t)) {
        case 'html':
          if (((t = e.documentElement), !t)) throw Error(f(452));
          return t;
        case 'head':
          if (((t = e.head), !t)) throw Error(f(453));
          return t;
        case 'body':
          if (((t = e.body), !t)) throw Error(f(454));
          return t;
        default:
          throw Error(f(451));
      }
    }
    function Ra(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      xi(t);
    }
    var Ne = new Map(),
      kd = new Set();
    function Zu(t) {
      return typeof t.getRootNode == 'function'
        ? t.getRootNode()
        : t.nodeType === 9
          ? t
          : t.ownerDocument;
    }
    var ul = D.d;
    D.d = { f: Qg, r: Zg, D: Vg, C: Kg, L: Jg, m: kg, X: $g, S: Wg, M: Fg };
    function Qg() {
      var t = ul.f(),
        e = Bu();
      return t || e;
    }
    function Zg(t) {
      var e = ln(t);
      e !== null && e.tag === 5 && e.type === 'form' ? rr(e) : ul.r(t);
    }
    var Bn = typeof document > 'u' ? null : document;
    function Wd(t, e, l) {
      var n = Bn;
      if (n && typeof e == 'string' && e) {
        var a = ze(e);
        ((a = 'link[rel="' + t + '"][href="' + a + '"]'),
          typeof l == 'string' && (a += '[crossorigin="' + l + '"]'),
          kd.has(a) ||
            (kd.add(a),
            (t = { rel: t, crossOrigin: l, href: e }),
            n.querySelector(a) === null &&
              ((e = n.createElement('link')), le(e, 'link', t), $t(e), n.head.appendChild(e))));
      }
    }
    function Vg(t) {
      (ul.D(t), Wd('dns-prefetch', t, null));
    }
    function Kg(t, e) {
      (ul.C(t, e), Wd('preconnect', t, e));
    }
    function Jg(t, e, l) {
      ul.L(t, e, l);
      var n = Bn;
      if (n && t && e) {
        var a = 'link[rel="preload"][as="' + ze(e) + '"]';
        e === 'image' && l && l.imageSrcSet
          ? ((a += '[imagesrcset="' + ze(l.imageSrcSet) + '"]'),
            typeof l.imageSizes == 'string' && (a += '[imagesizes="' + ze(l.imageSizes) + '"]'))
          : (a += '[href="' + ze(t) + '"]');
        var u = a;
        switch (e) {
          case 'style':
            u = jn(t);
            break;
          case 'script':
            u = qn(t);
        }
        Ne.has(u) ||
          ((t = w(
            { rel: 'preload', href: e === 'image' && l && l.imageSrcSet ? void 0 : t, as: e },
            l,
          )),
          Ne.set(u, t),
          n.querySelector(a) !== null ||
            (e === 'style' && n.querySelector(Ca(u))) ||
            (e === 'script' && n.querySelector(Na(u))) ||
            ((e = n.createElement('link')), le(e, 'link', t), $t(e), n.head.appendChild(e)));
      }
    }
    function kg(t, e) {
      ul.m(t, e);
      var l = Bn;
      if (l && t) {
        var n = e && typeof e.as == 'string' ? e.as : 'script',
          a = 'link[rel="modulepreload"][as="' + ze(n) + '"][href="' + ze(t) + '"]',
          u = a;
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            u = qn(t);
        }
        if (
          !Ne.has(u) &&
          ((t = w({ rel: 'modulepreload', href: t }, e)), Ne.set(u, t), l.querySelector(a) === null)
        ) {
          switch (n) {
            case 'audioworklet':
            case 'paintworklet':
            case 'serviceworker':
            case 'sharedworker':
            case 'worker':
            case 'script':
              if (l.querySelector(Na(u))) return;
          }
          ((n = l.createElement('link')), le(n, 'link', t), $t(n), l.head.appendChild(n));
        }
      }
    }
    function Wg(t, e, l) {
      ul.S(t, e, l);
      var n = Bn;
      if (n && t) {
        var a = nn(n).hoistableStyles,
          u = jn(t);
        e = e || 'default';
        var i = a.get(u);
        if (!i) {
          var c = { loading: 0, preload: null };
          if ((i = n.querySelector(Ca(u)))) c.loading = 5;
          else {
            ((t = w({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)),
              (l = Ne.get(u)) && xf(t, l));
            var s = (i = n.createElement('link'));
            ($t(s),
              le(s, 'link', t),
              (s._p = new Promise(function (p, A) {
                ((s.onload = p), (s.onerror = A));
              })),
              s.addEventListener('load', function () {
                c.loading |= 1;
              }),
              s.addEventListener('error', function () {
                c.loading |= 2;
              }),
              (c.loading |= 4),
              Vu(i, e, n));
          }
          ((i = { type: 'stylesheet', instance: i, count: 1, state: c }), a.set(u, i));
        }
      }
    }
    function $g(t, e) {
      ul.X(t, e);
      var l = Bn;
      if (l && t) {
        var n = nn(l).hoistableScripts,
          a = qn(t),
          u = n.get(a);
        u ||
          ((u = l.querySelector(Na(a))),
          u ||
            ((t = w({ src: t, async: !0 }, e)),
            (e = Ne.get(a)) && Of(t, e),
            (u = l.createElement('script')),
            $t(u),
            le(u, 'link', t),
            l.head.appendChild(u)),
          (u = { type: 'script', instance: u, count: 1, state: null }),
          n.set(a, u));
      }
    }
    function Fg(t, e) {
      ul.M(t, e);
      var l = Bn;
      if (l && t) {
        var n = nn(l).hoistableScripts,
          a = qn(t),
          u = n.get(a);
        u ||
          ((u = l.querySelector(Na(a))),
          u ||
            ((t = w({ src: t, async: !0, type: 'module' }, e)),
            (e = Ne.get(a)) && Of(t, e),
            (u = l.createElement('script')),
            $t(u),
            le(u, 'link', t),
            l.head.appendChild(u)),
          (u = { type: 'script', instance: u, count: 1, state: null }),
          n.set(a, u));
      }
    }
    function $d(t, e, l, n) {
      var a = (a = K.current) ? Zu(a) : null;
      if (!a) throw Error(f(446));
      switch (t) {
        case 'meta':
        case 'title':
          return null;
        case 'style':
          return typeof l.precedence == 'string' && typeof l.href == 'string'
            ? ((e = jn(l.href)),
              (l = nn(a).hoistableStyles),
              (n = l.get(e)),
              n || ((n = { type: 'style', instance: null, count: 0, state: null }), l.set(e, n)),
              n)
            : { type: 'void', instance: null, count: 0, state: null };
        case 'link':
          if (
            l.rel === 'stylesheet' &&
            typeof l.href == 'string' &&
            typeof l.precedence == 'string'
          ) {
            t = jn(l.href);
            var u = nn(a).hoistableStyles,
              i = u.get(t);
            if (
              (i ||
                ((a = a.ownerDocument || a),
                (i = {
                  type: 'stylesheet',
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                u.set(t, i),
                (u = a.querySelector(Ca(t))) && !u._p && ((i.instance = u), (i.state.loading = 5)),
                Ne.has(t) ||
                  ((l = {
                    rel: 'preload',
                    as: 'style',
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy,
                  }),
                  Ne.set(t, l),
                  u || Ig(a, t, l, i.state))),
              e && n === null)
            )
              throw Error(f(528, ''));
            return i;
          }
          if (e && n !== null) throw Error(f(529, ''));
          return null;
        case 'script':
          return (
            (e = l.async),
            (l = l.src),
            typeof l == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
              ? ((e = qn(l)),
                (l = nn(a).hoistableScripts),
                (n = l.get(e)),
                n || ((n = { type: 'script', instance: null, count: 0, state: null }), l.set(e, n)),
                n)
              : { type: 'void', instance: null, count: 0, state: null }
          );
        default:
          throw Error(f(444, t));
      }
    }
    function jn(t) {
      return 'href="' + ze(t) + '"';
    }
    function Ca(t) {
      return 'link[rel="stylesheet"][' + t + ']';
    }
    function Fd(t) {
      return w({}, t, { 'data-precedence': t.precedence, precedence: null });
    }
    function Ig(t, e, l, n) {
      t.querySelector('link[rel="preload"][as="style"][' + e + ']')
        ? (n.loading = 1)
        : ((e = t.createElement('link')),
          (n.preload = e),
          e.addEventListener('load', function () {
            return (n.loading |= 1);
          }),
          e.addEventListener('error', function () {
            return (n.loading |= 2);
          }),
          le(e, 'link', l),
          $t(e),
          t.head.appendChild(e));
    }
    function qn(t) {
      return '[src="' + ze(t) + '"]';
    }
    function Na(t) {
      return 'script[async]' + t;
    }
    function Id(t, e, l) {
      if ((e.count++, e.instance === null))
        switch (e.type) {
          case 'style':
            var n = t.querySelector('style[data-href~="' + ze(l.href) + '"]');
            if (n) return ((e.instance = n), $t(n), n);
            var a = w({}, l, {
              'data-href': l.href,
              'data-precedence': l.precedence,
              href: null,
              precedence: null,
            });
            return (
              (n = (t.ownerDocument || t).createElement('style')),
              $t(n),
              le(n, 'style', a),
              Vu(n, l.precedence, t),
              (e.instance = n)
            );
          case 'stylesheet':
            a = jn(l.href);
            var u = t.querySelector(Ca(a));
            if (u) return ((e.state.loading |= 4), (e.instance = u), $t(u), u);
            ((n = Fd(l)),
              (a = Ne.get(a)) && xf(n, a),
              (u = (t.ownerDocument || t).createElement('link')),
              $t(u));
            var i = u;
            return (
              (i._p = new Promise(function (c, s) {
                ((i.onload = c), (i.onerror = s));
              })),
              le(u, 'link', n),
              (e.state.loading |= 4),
              Vu(u, l.precedence, t),
              (e.instance = u)
            );
          case 'script':
            return (
              (u = qn(l.src)),
              (a = t.querySelector(Na(u)))
                ? ((e.instance = a), $t(a), a)
                : ((n = l),
                  (a = Ne.get(u)) && ((n = w({}, l)), Of(n, a)),
                  (t = t.ownerDocument || t),
                  (a = t.createElement('script')),
                  $t(a),
                  le(a, 'link', n),
                  t.head.appendChild(a),
                  (e.instance = a))
            );
          case 'void':
            return null;
          default:
            throw Error(f(443, e.type));
        }
      else
        e.type === 'stylesheet' &&
          (e.state.loading & 4) === 0 &&
          ((n = e.instance), (e.state.loading |= 4), Vu(n, l.precedence, t));
      return e.instance;
    }
    function Vu(t, e, l) {
      for (
        var n = l.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          a = n.length ? n[n.length - 1] : null,
          u = a,
          i = 0;
        i < n.length;
        i++
      ) {
        var c = n[i];
        if (c.dataset.precedence === e) u = c;
        else if (u !== a) break;
      }
      u
        ? u.parentNode.insertBefore(t, u.nextSibling)
        : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
    }
    function xf(t, e) {
      (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title));
    }
    function Of(t, e) {
      (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity));
    }
    var Ku = null;
    function Pd(t, e, l) {
      if (Ku === null) {
        var n = new Map(),
          a = (Ku = new Map());
        a.set(l, n);
      } else ((a = Ku), (n = a.get(l)), n || ((n = new Map()), a.set(l, n)));
      if (n.has(t)) return n;
      for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
        var u = l[a];
        if (
          !(u[kn] || u[It] || (t === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
          u.namespaceURI !== 'http://www.w3.org/2000/svg'
        ) {
          var i = u.getAttribute(e) || '';
          i = t + i;
          var c = n.get(i);
          c ? c.push(u) : n.set(i, [u]);
        }
      }
      return n;
    }
    function t0(t, e, l) {
      ((t = t.ownerDocument || t),
        t.head.insertBefore(l, e === 'title' ? t.querySelector('head > title') : null));
    }
    function Pg(t, e, l) {
      if (l === 1 || e.itemProp != null) return !1;
      switch (t) {
        case 'meta':
        case 'title':
          return !0;
        case 'style':
          if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break;
          return !0;
        case 'link':
          if (
            typeof e.rel != 'string' ||
            typeof e.href != 'string' ||
            e.href === '' ||
            e.onLoad ||
            e.onError
          )
            break;
          return e.rel === 'stylesheet'
            ? ((t = e.disabled), typeof e.precedence == 'string' && t == null)
            : !0;
        case 'script':
          if (
            e.async &&
            typeof e.async != 'function' &&
            typeof e.async != 'symbol' &&
            !e.onLoad &&
            !e.onError &&
            e.src &&
            typeof e.src == 'string'
          )
            return !0;
      }
      return !1;
    }
    function e0(t) {
      return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
    }
    function th(t, e, l, n) {
      if (
        l.type === 'stylesheet' &&
        (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
        (l.state.loading & 4) === 0
      ) {
        if (l.instance === null) {
          var a = jn(n.href),
            u = e.querySelector(Ca(a));
          if (u) {
            ((e = u._p),
              e !== null &&
                typeof e == 'object' &&
                typeof e.then == 'function' &&
                (t.count++, (t = Ju.bind(t)), e.then(t, t)),
              (l.state.loading |= 4),
              (l.instance = u),
              $t(u));
            return;
          }
          ((u = e.ownerDocument || e),
            (n = Fd(n)),
            (a = Ne.get(a)) && xf(n, a),
            (u = u.createElement('link')),
            $t(u));
          var i = u;
          ((i._p = new Promise(function (c, s) {
            ((i.onload = c), (i.onerror = s));
          })),
            le(u, 'link', n),
            (l.instance = u));
        }
        (t.stylesheets === null && (t.stylesheets = new Map()),
          t.stylesheets.set(l, e),
          (e = l.state.preload) &&
            (l.state.loading & 3) === 0 &&
            (t.count++,
            (l = Ju.bind(t)),
            e.addEventListener('load', l),
            e.addEventListener('error', l)));
      }
    }
    var Mf = 0;
    function eh(t, e) {
      return (
        t.stylesheets && t.count === 0 && Wu(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount
          ? function (l) {
              var n = setTimeout(function () {
                if ((t.stylesheets && Wu(t, t.stylesheets), t.unsuspend)) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              }, 6e4 + e);
              0 < t.imgBytes && Mf === 0 && (Mf = 62500 * Bg());
              var a = setTimeout(
                function () {
                  if (
                    ((t.waitingForImages = !1),
                    t.count === 0 && (t.stylesheets && Wu(t, t.stylesheets), t.unsuspend))
                  ) {
                    var u = t.unsuspend;
                    ((t.unsuspend = null), u());
                  }
                },
                (t.imgBytes > Mf ? 50 : 800) + e,
              );
              return (
                (t.unsuspend = l),
                function () {
                  ((t.unsuspend = null), clearTimeout(n), clearTimeout(a));
                }
              );
            }
          : null
      );
    }
    function Ju() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) Wu(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          ((this.unsuspend = null), t());
        }
      }
    }
    var ku = null;
    function Wu(t, e) {
      ((t.stylesheets = null),
        t.unsuspend !== null &&
          (t.count++, (ku = new Map()), e.forEach(lh, t), (ku = null), Ju.call(t)));
    }
    function lh(t, e) {
      if (!(e.state.loading & 4)) {
        var l = ku.get(t);
        if (l) var n = l.get(null);
        else {
          ((l = new Map()), ku.set(t, l));
          for (
            var a = t.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
            u < a.length;
            u++
          ) {
            var i = a[u];
            (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
              (l.set(i.dataset.precedence, i), (n = i));
          }
          n && l.set(null, n);
        }
        ((a = e.instance),
          (i = a.getAttribute('data-precedence')),
          (u = l.get(i) || n),
          u === n && l.set(null, a),
          l.set(i, a),
          this.count++,
          (n = Ju.bind(this)),
          a.addEventListener('load', n),
          a.addEventListener('error', n),
          u
            ? u.parentNode.insertBefore(a, u.nextSibling)
            : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(a, t.firstChild)),
          (e.state.loading |= 4));
      }
    }
    var Ua = {
      $$typeof: nt,
      Provider: null,
      Consumer: null,
      _currentValue: k,
      _currentValue2: k,
      _threadCount: 0,
    };
    function nh(t, e, l, n, a, u, i, c, s) {
      ((this.tag = 1),
        (this.containerInfo = t),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ti(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ti(0)),
        (this.hiddenUpdates = Ti(null)),
        (this.identifierPrefix = n),
        (this.onUncaughtError = a),
        (this.onCaughtError = u),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = s),
        (this.incompleteTransitions = new Map()));
    }
    function l0(t, e, l, n, a, u, i, c, s, p, A, M) {
      return (
        (t = new nh(t, e, l, i, s, p, A, M, c)),
        (e = 1),
        u === !0 && (e |= 24),
        (u = ve(3, null, null, e)),
        (t.current = u),
        (u.stateNode = t),
        (e = ic()),
        e.refCount++,
        (t.pooledCache = e),
        e.refCount++,
        (u.memoizedState = { element: n, isDehydrated: l, cache: e }),
        sc(u),
        t
      );
    }
    function n0(t) {
      return t ? ((t = mn), t) : mn;
    }
    function a0(t, e, l, n, a, u) {
      ((a = n0(a)),
        n.context === null ? (n.context = a) : (n.pendingContext = a),
        (n = gl(e)),
        (n.payload = { element: l }),
        (u = u === void 0 ? null : u),
        u !== null && (n.callback = u),
        (l = hl(t, n, e)),
        l !== null && (de(l, t, e), ra(l, t, e)));
    }
    function u0(t, e) {
      if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function Df(t, e) {
      (u0(t, e), (t = t.alternate) && u0(t, e));
    }
    function i0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Ll(t, 67108864);
        (e !== null && de(e, t, 67108864), Df(t, 67108864));
      }
    }
    function c0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Te();
        e = Ai(e);
        var l = Ll(t, e);
        (l !== null && de(l, t, e), Df(t, e));
      }
    }
    var $u = !0;
    function ah(t, e, l, n) {
      var a = S.T;
      S.T = null;
      var u = D.p;
      try {
        ((D.p = 2), Rf(t, e, l, n));
      } finally {
        ((D.p = u), (S.T = a));
      }
    }
    function uh(t, e, l, n) {
      var a = S.T;
      S.T = null;
      var u = D.p;
      try {
        ((D.p = 8), Rf(t, e, l, n));
      } finally {
        ((D.p = u), (S.T = a));
      }
    }
    function Rf(t, e, l, n) {
      if ($u) {
        var a = Cf(n);
        if (a === null) (hf(t, e, n, Fu, l), o0(t, n));
        else if (ch(a, t, e, l, n)) n.stopPropagation();
        else if ((o0(t, n), e & 4 && -1 < ih.indexOf(t))) {
          for (; a !== null; ) {
            var u = ln(a);
            if (u !== null)
              switch (u.tag) {
                case 3:
                  if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                    var i = Ul(u.pendingLanes);
                    if (i !== 0) {
                      var c = u;
                      for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                        var s = 1 << (31 - ge(i));
                        ((c.entanglements[1] |= s), (i &= ~s));
                      }
                      (Ge(u), (Et & 6) === 0 && ((Uu = ye() + 500), Oa(0)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((c = Ll(u, 2)), c !== null && de(c, u, 2), Bu(), Df(u, 2));
              }
            if (((u = Cf(n)), u === null && hf(t, e, n, Fu, l), u === a)) break;
            a = u;
          }
          a !== null && n.stopPropagation();
        } else hf(t, e, n, null, l);
      }
    }
    function Cf(t) {
      return ((t = Ni(t)), Nf(t));
    }
    var Fu = null;
    function Nf(t) {
      if (((Fu = null), (t = en(t)), t !== null)) {
        var e = C(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (((t = Z(e)), t !== null)) return t;
            t = null;
          } else if (l === 31) {
            if (((t = $(e)), t !== null)) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return ((Fu = t), null);
    }
    function f0(t) {
      switch (t) {
        case 'beforetoggle':
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'toggle':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 2;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 8;
        case 'message':
          switch (Vy()) {
            case ho:
              return 2;
            case vo:
              return 8;
            case Ya:
            case Ky:
              return 32;
            case po:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Uf = !1,
      Ol = null,
      Ml = null,
      Dl = null,
      Ha = new Map(),
      Ba = new Map(),
      Rl = [],
      ih =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
          ' ',
        );
    function o0(t, e) {
      switch (t) {
        case 'focusin':
        case 'focusout':
          Ol = null;
          break;
        case 'dragenter':
        case 'dragleave':
          Ml = null;
          break;
        case 'mouseover':
        case 'mouseout':
          Dl = null;
          break;
        case 'pointerover':
        case 'pointerout':
          Ha.delete(e.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          Ba.delete(e.pointerId);
      }
    }
    function ja(t, e, l, n, a, u) {
      return t === null || t.nativeEvent !== u
        ? ((t = {
            blockedOn: e,
            domEventName: l,
            eventSystemFlags: n,
            nativeEvent: u,
            targetContainers: [a],
          }),
          e !== null && ((e = ln(e)), e !== null && i0(e)),
          t)
        : ((t.eventSystemFlags |= n),
          (e = t.targetContainers),
          a !== null && e.indexOf(a) === -1 && e.push(a),
          t);
    }
    function ch(t, e, l, n, a) {
      switch (e) {
        case 'focusin':
          return ((Ol = ja(Ol, t, e, l, n, a)), !0);
        case 'dragenter':
          return ((Ml = ja(Ml, t, e, l, n, a)), !0);
        case 'mouseover':
          return ((Dl = ja(Dl, t, e, l, n, a)), !0);
        case 'pointerover':
          var u = a.pointerId;
          return (Ha.set(u, ja(Ha.get(u) || null, t, e, l, n, a)), !0);
        case 'gotpointercapture':
          return ((u = a.pointerId), Ba.set(u, ja(Ba.get(u) || null, t, e, l, n, a)), !0);
      }
      return !1;
    }
    function s0(t) {
      var e = en(t.target);
      if (e !== null) {
        var l = C(e);
        if (l !== null) {
          if (((e = l.tag), e === 13)) {
            if (((e = Z(l)), e !== null)) {
              ((t.blockedOn = e),
                zo(t.priority, function () {
                  c0(l);
                }));
              return;
            }
          } else if (e === 31) {
            if (((e = $(l)), e !== null)) {
              ((t.blockedOn = e),
                zo(t.priority, function () {
                  c0(l);
                }));
              return;
            }
          } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Iu(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = Cf(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var n = new l.constructor(l.type, l);
          ((Ci = n), l.target.dispatchEvent(n), (Ci = null));
        } else return ((e = ln(l)), e !== null && i0(e), (t.blockedOn = l), !1);
        e.shift();
      }
      return !0;
    }
    function r0(t, e, l) {
      Iu(t) && l.delete(e);
    }
    function fh() {
      ((Uf = !1),
        Ol !== null && Iu(Ol) && (Ol = null),
        Ml !== null && Iu(Ml) && (Ml = null),
        Dl !== null && Iu(Dl) && (Dl = null),
        Ha.forEach(r0),
        Ba.forEach(r0));
    }
    function Pu(t, e) {
      t.blockedOn === e &&
        ((t.blockedOn = null),
        Uf || ((Uf = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, fh)));
    }
    var ti = null;
    function d0(t) {
      ti !== t &&
        ((ti = t),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
          ti === t && (ti = null);
          for (var e = 0; e < t.length; e += 3) {
            var l = t[e],
              n = t[e + 1],
              a = t[e + 2];
            if (typeof n != 'function') {
              if (Nf(n || l) === null) continue;
              break;
            }
            var u = ln(l);
            u !== null &&
              (t.splice(e, 3),
              (e -= 3),
              Rc(u, { pending: !0, data: a, method: l.method, action: n }, n, a));
          }
        }));
    }
    function Ln(t) {
      function e(s) {
        return Pu(s, t);
      }
      (Ol !== null && Pu(Ol, t),
        Ml !== null && Pu(Ml, t),
        Dl !== null && Pu(Dl, t),
        Ha.forEach(e),
        Ba.forEach(e));
      for (var l = 0; l < Rl.length; l++) {
        var n = Rl[l];
        n.blockedOn === t && (n.blockedOn = null);
      }
      for (; 0 < Rl.length && ((l = Rl[0]), l.blockedOn === null); )
        (s0(l), l.blockedOn === null && Rl.shift());
      if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
        for (n = 0; n < l.length; n += 3) {
          var a = l[n],
            u = l[n + 1],
            i = a[ie] || null;
          if (typeof u == 'function') i || d0(l);
          else if (i) {
            var c = null;
            if (u && u.hasAttribute('formAction')) {
              if (((a = u), (i = u[ie] || null))) c = i.formAction;
              else if (Nf(a) !== null) continue;
            } else c = i.action;
            (typeof c == 'function' ? (l[n + 1] = c) : (l.splice(n, 3), (n -= 3)), d0(l));
          }
        }
    }
    function y0() {
      function t(u) {
        u.canIntercept &&
          u.info === 'react-transition' &&
          u.intercept({
            handler: function () {
              return new Promise(function (i) {
                return (a = i);
              });
            },
            focusReset: 'manual',
            scroll: 'manual',
          });
      }
      function e() {
        (a !== null && (a(), (a = null)), n || setTimeout(l, 20));
      }
      function l() {
        if (!n && !navigation.transition) {
          var u = navigation.currentEntry;
          u &&
            u.url != null &&
            navigation.navigate(u.url, {
              state: u.getState(),
              info: 'react-transition',
              history: 'replace',
            });
        }
      }
      if (typeof navigation == 'object') {
        var n = !1,
          a = null;
        return (
          navigation.addEventListener('navigate', t),
          navigation.addEventListener('navigatesuccess', e),
          navigation.addEventListener('navigateerror', e),
          setTimeout(l, 100),
          function () {
            ((n = !0),
              navigation.removeEventListener('navigate', t),
              navigation.removeEventListener('navigatesuccess', e),
              navigation.removeEventListener('navigateerror', e),
              a !== null && (a(), (a = null)));
          }
        );
      }
    }
    function Hf(t) {
      this._internalRoot = t;
    }
    ((ei.prototype.render = Hf.prototype.render =
      function (t) {
        var e = this._internalRoot;
        if (e === null) throw Error(f(409));
        var l = e.current,
          n = Te();
        a0(l, n, t, e, null, null);
      }),
      (ei.prototype.unmount = Hf.prototype.unmount =
        function () {
          var t = this._internalRoot;
          if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            (a0(t.current, 2, null, t, null, null), Bu(), (e[tn] = null));
          }
        }));
    function ei(t) {
      this._internalRoot = t;
    }
    ei.prototype.unstable_scheduleHydration = function (t) {
      if (t) {
        var e = Ao();
        t = { blockedOn: null, target: t, priority: e };
        for (var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++);
        (Rl.splice(l, 0, t), l === 0 && s0(t));
      }
    };
    var m0 = y.version;
    if (m0 !== '19.2.3') throw Error(f(527, m0, '19.2.3'));
    D.findDOMNode = function (t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == 'function'
          ? Error(f(188))
          : ((t = Object.keys(t).join(',')), Error(f(268, t)));
      return ((t = z(e)), (t = t !== null ? Y(t) : null), (t = t === null ? null : t.stateNode), t);
    };
    var oh = {
      bundleType: 0,
      version: '19.2.3',
      rendererPackageName: 'react-dom',
      currentDispatcherRef: S,
      reconcilerVersion: '19.2.3',
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
      var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!li.isDisabled && li.supportsFiber)
        try {
          ((Vn = li.inject(oh)), (me = li));
        } catch {}
    }
    return (
      (Yn.createRoot = function (t, e) {
        if (!_(t)) throw Error(f(299));
        var l = !1,
          n = '',
          a = Er,
          u = Tr,
          i = Ar;
        return (
          e != null &&
            (e.unstable_strictMode === !0 && (l = !0),
            e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
            e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
            e.onCaughtError !== void 0 && (u = e.onCaughtError),
            e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
          (e = l0(t, 1, !1, null, null, l, n, null, a, u, i, y0)),
          (t[tn] = e.current),
          gf(t),
          new Hf(e)
        );
      }),
      (Yn.hydrateRoot = function (t, e, l) {
        if (!_(t)) throw Error(f(299));
        var n = !1,
          a = '',
          u = Er,
          i = Tr,
          c = Ar,
          s = null;
        return (
          l != null &&
            (l.unstable_strictMode === !0 && (n = !0),
            l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
            l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
            l.onCaughtError !== void 0 && (i = l.onCaughtError),
            l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
            l.formState !== void 0 && (s = l.formState)),
          (e = l0(t, 1, !0, e, l ?? null, n, a, s, u, i, c, y0)),
          (e.context = n0(null)),
          (l = e.current),
          (n = Te()),
          (n = Ai(n)),
          (a = gl(n)),
          (a.callback = null),
          hl(l, a, n),
          (l = n),
          (e.current.lanes = l),
          Jn(e, l),
          Ge(e),
          (t[tn] = e.current),
          gf(t),
          new ei(e)
        );
      }),
      (Yn.version = '19.2.3'),
      Yn
    );
  }
  var Zf;
  function _0() {
    if (Zf) return ii.exports;
    Zf = 1;
    function o() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
        } catch (y) {
          console.error(y);
        }
    }
    return (o(), (ii.exports = z0()), ii.exports);
  }
  var x0 = _0();
  const O0 = 'agent-mount-state',
    M0 = 'agent-session-id',
    Gn = 'agent-workflow-active',
    D0 = '1.6.15',
    R0 =
      'wss://manual-recording-backen-dev-cbhacpf0cea5b3fe.canadacentral-01.azurewebsites.net/runtime/chat',
    C0 = 'https://manual-recording-backen-dev-cbhacpf0cea5b3fe.canadacentral-01.azurewebsites.net/',
    Vf = 3,
    Kf = 3e3,
    N0 = 'https://cdn.agenqglobal.com/audio/thinking_sound_v2.mp3',
    Jf = G.createContext(null),
    U0 = O0;
  function H0({ children: o, agentId: y, projectId: v, customerCode: f }) {
    const _ = `${U0}-${y}`,
      [C, Z] = G.useState(),
      [$, N] = G.useState(),
      [z, Y] = G.useState(!0),
      [w, at] = G.useState(() =>
        typeof window > 'u' ? 'CLOSED' : localStorage.getItem(_) || 'CLOSED',
      );
    (G.useEffect(() => {
      typeof window > 'u' || localStorage.setItem(_, w);
    }, [w, _]),
      G.useEffect(() => {
        !y ||
          !v ||
          !f ||
          (Y(!0),
          fetch(`${C0}/runtime/init`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ agentId: y, projectId: v, customerCode: f }),
          })
            .then((dt) => {
              if (!dt.ok) throw new Error('Failed to fetch agent details');
              return dt.json();
            })
            .then((dt) => {
              (Z(dt.agent_name), N(dt.image_url));
            })
            .catch((dt) => {
              console.error('❌ Error fetching agent details:', dt);
            })
            .finally(() => {
              Y(!1);
            }));
      }, [y, v, f]));
    const [xt, Tt] = G.useState(() => {
      if (typeof window > 'u') return { corner: 'bottom-right', x: 20, y: 20 };
      const dt = localStorage.getItem(`${_}-pos`);
      try {
        return dt ? JSON.parse(dt) : { corner: 'bottom-right', x: 20, y: 20 };
      } catch {
        return { corner: 'bottom-right', x: 20, y: 20 };
      }
    });
    return (
      G.useEffect(() => {
        typeof window > 'u' || localStorage.setItem(`${_}-pos`, JSON.stringify(xt));
      }, [xt, _]),
      U.jsx(Jf.Provider, {
        value: {
          state: w,
          setState: at,
          agentId: y,
          agentName: C,
          agentImage: $,
          isLoading: z,
          position: xt,
          setPosition: Tt,
        },
        children: o,
      })
    );
  }
  function Xn() {
    const o = G.useContext(Jf);
    if (!o) throw new Error('useMountState must be used inside MountStateProvider');
    return o;
  }
  const B0 = (o) => o.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    j0 = (o) =>
      o.replace(/^([A-Z])|[\s-_]+(\w)/g, (y, v, f) => (f ? f.toUpperCase() : v.toLowerCase())),
    kf = (o) => {
      const y = j0(o);
      return y.charAt(0).toUpperCase() + y.slice(1);
    },
    Wf = (...o) =>
      o
        .filter((y, v, f) => !!y && y.trim() !== '' && f.indexOf(y) === v)
        .join(' ')
        .trim(),
    q0 = (o) => {
      for (const y in o) if (y.startsWith('aria-') || y === 'role' || y === 'title') return !0;
    };
  var L0 = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  const w0 = G.forwardRef(
    (
      {
        color: o = 'currentColor',
        size: y = 24,
        strokeWidth: v = 2,
        absoluteStrokeWidth: f,
        className: _ = '',
        children: C,
        iconNode: Z,
        ...$
      },
      N,
    ) =>
      G.createElement(
        'svg',
        {
          ref: N,
          ...L0,
          width: y,
          height: y,
          stroke: o,
          strokeWidth: f ? (Number(v) * 24) / Number(y) : v,
          className: Wf('lucide', _),
          ...(!C && !q0($) && { 'aria-hidden': 'true' }),
          ...$,
        },
        [...Z.map(([z, Y]) => G.createElement(z, Y)), ...(Array.isArray(C) ? C : [C])],
      ),
  );
  const il = (o, y) => {
    const v = G.forwardRef(({ className: f, ..._ }, C) =>
      G.createElement(w0, {
        ref: C,
        iconNode: y,
        className: Wf(`lucide-${B0(kf(o))}`, `lucide-${o}`, f),
        ..._,
      }),
    );
    return ((v.displayName = kf(o)), v);
  };
  const $f = il('ellipsis', [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
    ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
  ]);
  const Y0 = il('loader-circle', [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]]);
  const G0 = il('message-square', [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
  ]);
  const X0 = il('pause', [
    ['rect', { x: '14', y: '3', width: '5', height: '18', rx: '1', key: 'kaeet6' }],
    ['rect', { x: '5', y: '3', width: '5', height: '18', rx: '1', key: '1wsw3u' }],
  ]);
  const Q0 = il('play', [
    [
      'path',
      {
        d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z',
        key: '10ikf1',
      },
    ],
  ]);
  const Z0 = il('send', [
    [
      'path',
      {
        d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
        key: '1ffxy3',
      },
    ],
    ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
  ]);
  const V0 = il('square', [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
  ]);
  const Ff = il('x', [
      ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
      ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
    ]),
    If = M0;
  function Pf(o) {
    return o ? `${If}-${o}` : If;
  }
  function K0(o) {
    return localStorage.getItem(Pf(o));
  }
  function J0(o, y) {
    localStorage.setItem(Pf(y), o);
  }
  let kt = null,
    to = null,
    eo = null;
  function lo(o) {
    eo = o;
  }
  const si = [];
  function Fl(o) {
    (console.log('⚡ socket status:', o), eo?.(o));
  }
  function no(o, y, v, f) {
    if (
      ((to = f), kt && (kt.readyState === WebSocket.OPEN || kt.readyState === WebSocket.CONNECTING))
    ) {
      (console.log('♻️ Reusing existing socket connection'),
        Fl(kt.readyState === WebSocket.OPEN ? 'online' : 'connecting'));
      return;
    }
    (Fl('connecting'),
      (kt = new WebSocket(R0)),
      (kt.onopen = () => {
        (Fl('online'), console.log('✅ socket connected'));
        const _ = K0(o);
        for (
          je(
            _
              ? { type: 'resume_session', sessionId: _, customerCode: v, projectId: y, agentId: o }
              : { type: 'create_session', agentId: o, customerCode: v, projectId: y },
          );
          si.length;
        )
          kt?.send(JSON.stringify(si.shift()));
      }),
      (kt.onmessage = (_) => {
        const C = JSON.parse(_.data);
        (to?.(C),
          (C.type === 'session_created' || C.type === 'session_resumed') && J0(C.sessionId, o));
      }),
      (kt.onerror = () => {
        (Fl('error'), console.error('❌ socket error'));
      }),
      (kt.onclose = () => {
        (Fl('offline'), console.log('🔌 socket closed'));
      }));
  }
  function k0() {
    kt && (kt.close(), (kt = null), Fl('offline'));
  }
  function je(o) {
    if (!kt || kt.readyState !== WebSocket.OPEN) {
      si.push(o);
      return;
    }
    kt.send(JSON.stringify(o));
  }
  function Il(o) {
    je(o);
  }
  function W0(o) {
    kt &&
      kt.readyState === WebSocket.OPEN &&
      (o instanceof Blob || o instanceof ArrayBuffer
        ? kt.send(o)
        : console.error('❌ sendBinary called with non-binary data', o));
  }
  const ao = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        connectSocket: no,
        disconnectSocket: k0,
        onSocketStatus: lo,
        safeSend: je,
        sendBinary: W0,
        sendMessage: Il,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  function ri(o) {
    window.dispatchEvent(new CustomEvent('agenq-cursor-move', { detail: o }));
  }
  function Pl() {
    window.dispatchEvent(new CustomEvent('agenq-cursor-hide'));
  }
  function di(o = 'Agent') {
    const y = window.innerWidth * (0.3 + Math.random() * 0.4),
      v = window.innerHeight * (0.3 + Math.random() * 0.4);
    ri({ x: y, y: v, label: o, message: '', type: 'info' });
  }
  function $0(o) {
    const y = o.identifier?.target || 'element';
    switch (o.action) {
      case 'click':
        return `Clicking ${y}`;
      case 'update':
        return `Filling ${y} with "${o.value}"`;
      case 'navigation':
        return `Navigating to ${o.value}`;
      default:
        return 'Performing action';
    }
  }
  let qa = !1;
  async function F0(o, y) {
    let v = null;
    const f = y || 'Agent';
    try {
      if ((qa || (qa = !0), o.action === 'navigation'))
        return new Promise((C) => {
          (setTimeout(() => {
            window.location.href = o.value || '/';
          }, 10),
            C());
        });
      if (((v = await I0(o.identifier, o.backups)), !v))
        throw new Error('Target element not found after retries');
      const _ = v.getBoundingClientRect();
      switch (
        (ri({ x: _.left, y: _.top + _.height / 2, label: f, message: $0(o), type: 'info' }),
        uy(v),
        o.action)
      ) {
        case 'click':
          (v.scrollIntoView({ behavior: 'smooth', block: 'center' }), await uo(250), v.click());
          break;
        case 'update':
          (iy(v, o.value || ''), await cy(v, o));
          break;
        default:
          throw new Error('Unknown action: ' + o.action);
      }
    } catch (_) {
      if (
        (console.error('❌ Action Execution Failed:', { error: _, message: _.message, action: o }),
        qa && v)
      ) {
        const C = v.getBoundingClientRect();
        ri({
          x: C.left,
          y: C.top + C.height / 2,
          label: f,
          message: _.message || 'Action failed',
          type: 'error',
        });
      }
      throw ((qa = !1), Pl(), _);
    }
  }
  async function I0(o, y) {
    const v = Date.now(),
      f = 5e3,
      _ = [];
    (o && _.push(o),
      y && _.push(...y),
      o?.agenqid && _.push({ type: 'agenq-id', target: o.agenqid, tag: o.tag }));
    const C = (Z) => (Z.type === 'agenq-id' ? 3 : Z.type === 'xpath' ? 2 : 1);
    for (_.sort((Z, $) => C($) - C(Z)); Date.now() - v < f; ) {
      for (const Z of _) {
        const $ = P0(Z);
        if ($) return $;
      }
      await uo(100);
    }
    return null;
  }
  function P0(o) {
    if (!o) return null;
    const { type: y, target: v, tag: f } = o;
    let _ = null;
    switch (y) {
      case 'id':
        _ = document.getElementById(v);
        break;
      case 'name':
        _ = document.querySelector(`[name="${v}"]`);
        break;
      case 'class':
        _ = document.querySelector(`.${v}`);
        break;
      case 'xpath':
        _ = ty(v);
        break;
      case 'innertext':
        _ = ey(v, f);
        break;
      case 'placeholder':
        _ = ly(v, f);
        break;
      case 'btn-type':
        _ = ny(v);
        break;
      case 'label':
        _ = ay(v, f);
        break;
      case 'agenq-id':
        _ = document.querySelector(`[agenq-id="${v}"]`);
        break;
      default:
        return null;
    }
    if (_ && f && _.tagName.toLowerCase() !== f.toLowerCase())
      throw new Error(`Tag mismatch: expected <${f}> but got <${_.tagName.toLowerCase()}>`);
    return _;
  }
  function ty(o) {
    return document.evaluate(o, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
      .singleNodeValue;
  }
  function ey(o, y) {
    const v = y ?? '*';
    return (
      Array.from(document.querySelectorAll(v)).find((_) => _.textContent?.trim() === o.trim()) ||
      null
    );
  }
  function ly(o, y) {
    const v = y ?? 'input,textarea',
      f = Array.from(document.querySelectorAll(v)),
      _ = o.trim().toLowerCase();
    return f.find((C) => (C.placeholder?.toLowerCase() || '').includes(_)) || null;
  }
  function ny(o) {
    return document.querySelector(`button[type="${o}"], input[type="${o}"]`);
  }
  function ay(o, y) {
    const v = Array.from(document.querySelectorAll('label')),
      f = o.trim(),
      _ = v.find((C) => C.innerText.trim() === f);
    return _
      ? _.htmlFor
        ? y === 'label'
          ? _
          : document.getElementById(_.htmlFor)
        : y === 'label'
          ? _
          : _.querySelector('input, select, textarea, button')
      : null;
  }
  function uy(o) {
    const y = o;
    y.disabled && ((y.disabled = !1), y.removeAttribute('disabled'));
  }
  function iy(o, y) {
    const v = o,
      f = Object.getPrototypeOf(v),
      C = Object.getOwnPropertyDescriptor(f, 'value')?.set;
    if (!C) throw new Error('Cannot access native input setter');
    (v.focus(),
      C.call(v, y),
      v.dispatchEvent(new Event('input', { bubbles: !0 })),
      v.dispatchEvent(new Event('change', { bubbles: !0 })));
  }
  async function cy(o, y) {
    if (y.action === 'update' && o.value !== y.value) throw new Error('Input verification failed');
  }
  function uo(o) {
    return new Promise((y) => setTimeout(y, o));
  }
  let yi = !1,
    La = null;
  function fy() {
    (console.log('⏸ Workflow Paused'), (yi = !0));
  }
  function oy() {
    (console.log('▶️ Workflow Resumed'), (yi = !1), La && (La(), (La = null)));
  }
  async function sy() {
    yi &&
      (console.log('⏸ Waiting for resume...'),
      await new Promise((o) => {
        La = o;
      }),
      console.log('▶️ Resuming execution...'));
  }
  async function io(o, y, v, f, _) {
    try {
      localStorage.setItem(`${Gn}-${y}`, JSON.stringify({ active: !0, step: o }));
    } catch (C) {
      console.error('Failed to save workflow state', C);
    }
    try {
      if (o.method === 'text') {
        (di(v || 'Agent'),
          f(o.content.message),
          console.log('✅ Text step: sending immediate success'),
          je({ type: 'success' }));
        return;
      }
      if (o.method === 'confirmation') {
        ry(o.content);
        return;
      }
      if (o.method === 'action') {
        if (o.content.action === 'navigation') {
          (_ && (await _()), await co(o.content, v, f), je({ type: 'success' }));
          return;
        }
        (await wa(1e3),
          await co(o.content, v, f),
          _ &&
            (await Promise.race([
              _(),
              new Promise((C) =>
                setTimeout(() => {
                  (console.warn('⚠️ Audio wait timed out (10s), proceeding...'), C(null));
                }, 1e4),
              ),
            ])),
          await sy(),
          je({ type: 'success' }));
        return;
      }
    } catch (C) {
      (console.error('❌ Step failed:', C),
        await wa(2e3),
        Pl(),
        f('Action failed.'),
        di('Failed'),
        await wa(1e3),
        je({ type: 'failure', reason: 'action_failed' }));
    }
  }
  async function co(o, y, v) {
    let f = 0;
    for (;;)
      try {
        await F0(o, y);
        break;
      } catch (_) {
        if (f >= Vf) throw _;
        (f++,
          console.warn(`⚠️ Action failed, retrying (${f}/${Vf})...`),
          v(`Action failed. Retrying in ${Kf / 1e3}s...`),
          di(`Retrying (${f})...`),
          await wa(Kf));
      }
  }
  function wa(o) {
    return new Promise((y) => setTimeout(y, o));
  }
  function ry(o) {
    console.log('⏳ Waiting for confirmation:', o);
    const y = setInterval(() => {
      if (o.type === 'url') {
        const v = window.location.pathname;
        v === o.value &&
          (console.log('✅ URL confirmed:', v), clearInterval(y), je({ type: 'success' }), Pl());
      }
      o.type === 'element' &&
        document.querySelector(o.value) &&
        (clearInterval(y), je({ type: 'success' }));
    }, 500);
  }
  const fo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, handleWorkflowStep: io, pauseWorkflow: fy, resumeWorkflow: oy },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  class dy {
    audioContext = null;
    mediaStream = null;
    processor = null;
    source = null;
    onDataAvailable;
    constructor(y) {
      this.onDataAvailable = y;
    }
    async start() {
      if (!this.audioContext)
        try {
          ((this.mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: {
              channelCount: 1,
              echoCancellation: !0,
              noiseSuppression: !0,
              autoGainControl: !0,
              sampleRate: 16e3,
            },
          })),
            (this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
              sampleRate: 16e3,
            })),
            (this.source = this.audioContext.createMediaStreamSource(this.mediaStream)),
            (this.processor = this.audioContext.createScriptProcessor(4096, 1, 1)),
            (this.processor.onaudioprocess = (y) => {
              const v = y.inputBuffer.getChannelData(0),
                f = this.convertFloat32ToInt16(v);
              this.onDataAvailable(new Blob([f], { type: 'audio/pcm' }));
            }),
            this.source.connect(this.processor),
            this.processor.connect(this.audioContext.destination));
        } catch (y) {
          throw (console.error('Error starting audio recorder:', y), this.stop(), y);
        }
    }
    stop() {
      (this.processor && (this.processor.disconnect(), (this.processor = null)),
        this.source && (this.source.disconnect(), (this.source = null)),
        this.mediaStream &&
          (this.mediaStream.getTracks().forEach((y) => y.stop()), (this.mediaStream = null)),
        this.audioContext && (this.audioContext.close(), (this.audioContext = null)));
    }
    convertFloat32ToInt16(y) {
      let v = y.length,
        f = new Int16Array(v);
      for (; v--; ) {
        let _ = Math.max(-1, Math.min(1, y[v]));
        f[v] = _ < 0 ? _ * 32768 : _ * 32767;
      }
      return f;
    }
  }
  const oo = G.createContext(null);
  function yy({ children: o, agentId: y, projectId: v, customerCode: f }) {
    const [_, C] = G.useState([]),
      [Z, $] = G.useState(!1),
      [N, z] = G.useState(!1),
      [Y, w] = G.useState(!1),
      [at, xt] = G.useState('offline');
    function Tt(R, q) {
      C((ot) => {
        const Nt = ot[ot.length - 1];
        return Nt && Nt.role === R && Nt.content === q
          ? (console.log('⚠️ Ignored duplicate message:', q), ot)
          : [
              ...ot,
              { id: crypto.randomUUID(), role: R, content: q, timestamp: new Date().toISOString() },
            ];
      });
    }
    function dt(R) {
      const q = R.trim();
      q && (Tt('user', q), $(!0), Il({ text: q }));
    }
    function qt() {
      C([]);
    }
    const H = G.useRef(null),
      yt = G.useRef(null),
      nt = G.useRef(null),
      P = G.useRef([]),
      it = G.useRef(!1),
      mt = G.useRef(!1),
      [J, At] = G.useState(!0),
      pt = G.useRef(!0);
    G.useEffect(() => {
      (console.log('🔊 isPlaying state changed:', {
        newValue: J,
        previousRef: pt.current,
        stackTrace: new Error().stack
          ?.split(
            `
`,
          )
          .slice(2, 4).join(`
`),
      }),
        (pt.current = J));
    }, [J]);
    const Yt = G.useRef(!1),
      Qt = () => {
        if (yt.current && yt.current.readyState === 'open')
          try {
            MediaSource.isTypeSupported('audio/mpeg')
              ? yt.current.sourceBuffers.length === 0 &&
                ((nt.current = yt.current.addSourceBuffer('audio/mpeg')),
                nt.current.addEventListener('updateend', T),
                console.log('✅ SourceBuffer created'))
              : console.error('MSE audio/mpeg not supported');
          } catch (R) {
            console.error('MSE addSourceBuffer failed', R);
          }
      };
    (G.useEffect(() => {
      if (typeof window < 'u') {
        H.current = new Audio();
        const R = () => {
            (console.log('🔊 Audio Event: PLAYING → isEmitting = true'), w(!0), (Yt.current = !1));
          },
          q = () => {
            (console.log('🔇 Audio Event: SILENT → isEmitting = false'), w(!1), (Yt.current = !1));
          },
          ot = () => {
            (console.log('⏳ Audio Event: WAITING → isEmitting = false'), w(!1), (Yt.current = !0));
          };
        (H.current.addEventListener('playing', R),
          H.current.addEventListener('pause', q),
          H.current.addEventListener('ended', q),
          H.current.addEventListener('waiting', ot),
          H.current.addEventListener('suspend', q),
          H.current.addEventListener('stalled', q),
          (yt.current = new MediaSource()));
        const Nt = URL.createObjectURL(yt.current);
        return (
          (H.current.src = Nt),
          yt.current.addEventListener('sourceopen', Qt),
          console.log('🎧 Initializing Audio Element and MediaSource...', H.current),
          () => {
            (H.current &&
              (H.current.pause(),
              (H.current.src = ''),
              H.current.removeEventListener('playing', R),
              H.current.removeEventListener('pause', q),
              H.current.removeEventListener('ended', q),
              H.current.removeEventListener('waiting', ot),
              H.current.removeEventListener('suspend', q),
              H.current.removeEventListener('stalled', q)),
              yt.current && yt.current.removeEventListener('sourceopen', Qt),
              URL.revokeObjectURL(Nt),
              w(!1));
          }
        );
      }
    }, []),
      G.useEffect(() => {
        if (Z && J) {
          const R = new Audio(N0);
          ((R.volume = 0.5), R.play().catch((q) => console.warn('Thinking sound failed', q)));
        }
      }, [Z, J]));
    function m(R) {
      const q = window.atob(R),
        ot = q.length,
        Nt = new Uint8Array(ot);
      for (let jt = 0; jt < ot; jt++) Nt[jt] = q.charCodeAt(jt);
      return Nt.buffer;
    }
    function T() {
      if (
        (console.log('🔄 processQueue called', {
          hasBuffer: !!nt.current,
          queueLen: P.current.length,
          updating: nt.current?.updating,
          isPlaying: pt.current,
          needsPlayTrigger: mt.current,
          isAudioWaiting: Yt.current,
        }),
        !nt.current || P.current.length === 0 || nt.current.updating)
      ) {
        ((it.current = !1),
          H.current &&
            Yt.current &&
            !H.current.paused &&
            pt.current &&
            (console.log('🎬 Resuming from WAITING after buffer update'),
            H.current.play().catch((q) => console.warn('Resume from WAITING failed:', q))),
          mt.current &&
            H.current &&
            pt.current &&
            (console.log('🎬 Triggering delayed play (needsPlayTrigger)', {
              paused: H.current.paused,
              readyState: H.current.readyState,
            }),
            (mt.current = !1),
            H.current.play().catch((q) => console.warn('Delayed play failed:', q))));
        return;
      }
      it.current = !0;
      const R = P.current.shift();
      if (R)
        try {
          (console.log('📤 APPENDING BUFFER', {
            chunkSize: R.byteLength,
            remainingInQueue: P.current.length,
            bufferUpdating: nt.current.updating,
          }),
            nt.current.appendBuffer(R));
        } catch (q) {
          (console.error('❌ SourceBuffer append failed', q), (it.current = !1));
        }
      else it.current = !1;
    }
    function j(R) {
      if (
        (console.log('🎵 queueAudio called', {
          isPlaying: pt.current,
          isEmitting: Y,
          queueLength: P.current.length,
          audioPaused: H.current?.paused,
          audioReadyState: H.current?.readyState,
          base64Length: R?.length,
        }),
        !pt.current)
      ) {
        console.warn('⚠️ Skipping audio queue (isPlaying=false)', {
          isPlayingState: J,
          isPlayingRef: pt.current,
        });
        return;
      }
      const q = m(R);
      (console.log('📥 Queueing Audio Chunk:', q.byteLength),
        P.current.push(q),
        console.log('🎵 Audio Queue State:', {
          length: P.current.length,
          chunks: P.current.map((jt, ae) => ({
            index: ae,
            size: jt.byteLength,
            sizeKB: (jt.byteLength / 1024).toFixed(2) + ' KB',
          })),
          totalBytes: P.current.reduce((jt, ae) => jt + ae.byteLength, 0),
          totalKB: (P.current.reduce((jt, ae) => jt + ae.byteLength, 0) / 1024).toFixed(2) + ' KB',
          isProcessing: it.current,
          bufferUpdating: nt.current?.updating,
        }));
      const ot = Yt.current;
      (ot &&
        (console.log('📊 Audio was waiting, will trigger play after buffer update'),
        (mt.current = !0)),
        (Yt.current = !1),
        it.current || T(),
        H.current?.paused || (ot && H.current)
          ? (console.log('▶️ Triggering Play', {
              reason: H.current?.paused ? 'paused' : 'was-waiting',
              readyState: H.current?.readyState,
              networkState: H.current?.networkState,
              paused: H.current?.paused,
              currentSrc: H.current?.currentSrc?.substring(0, 50),
              currentTime: H.current?.currentTime,
              duration: H.current?.duration,
            }),
            (mt.current = !1),
            H.current
              .play()
              .then(() => {
                console.log('✅ Play started successfully');
              })
              .catch((jt) => {
                console.error('❌ Auto-play failed:', jt);
              }))
          : console.log('▶️ Audio already playing', {
              hasRef: !!H.current,
              paused: H.current?.paused,
              readyState: H.current?.readyState,
              wasWaiting: ot,
            }));
    }
    function I() {
      const R = new Error().stack
        ?.split(
          `
`,
        )
        .slice(1, 6).join(`
`);
      (console.log('⏸️ pauseAudio called - STACK TRACE:', {
        isPlaying: pt.current,
        isEmitting: Y,
        queueLength: P.current.length,
        audioPaused: H.current?.paused,
        callStack: R,
      }),
        H.current &&
          ((mt.current = !1),
          H.current.pause(),
          At(!1),
          w(!1),
          (P.current = []),
          console.log('⏸️ pauseAudio complete', { isPlaying: !1, queueCleared: !0 }),
          Il({ type: 'pause_session' }),
          Promise.resolve()
            .then(() => fo)
            .then((q) => q.pauseWorkflow())));
    }
    function S() {
      const R = new Error().stack
        ?.split(
          `
`,
        )
        .slice(1, 6).join(`
`);
      (console.log('▶️ resumeAudio called - STACK TRACE:', {
        currentIsPlaying: pt.current,
        currentIsEmitting: Y,
        queueLength: P.current.length,
        callStack: R,
      }),
        At(!0),
        (pt.current = !0),
        Il({ type: 'resume_session' }),
        console.log('▶️ resumeAudio complete', { isPlaying: !0, isPlayingRef: !0 }),
        Promise.resolve()
          .then(() => fo)
          .then((q) => q.resumeWorkflow()));
    }
    async function D() {
      return new Promise((R) => {
        const q = setInterval(() => {
          const ot = H.current;
          if (!ot) {
            (clearInterval(q), R());
            return;
          }
          const Nt = P.current.length > 0 || nt.current?.updating,
            jt = Yt.current,
            ae = !ot.paused && !ot.ended && ot.currentTime < ot.duration;
          !Nt &&
            (!ae || jt) &&
            (console.log('🔊 Audio considered finished (Queue empty + Stalled/Ended)'),
            clearInterval(q),
            R());
        }, 100);
      });
    }
    function k() {
      (Il({ type: 'terminate_workflow', sessionId: y }),
        Il({ type: 'terminate_workflow' }),
        z(!1),
        $(!1),
        (P.current = []),
        H.current && (H.current.pause(), At(!1), w(!1)),
        y && localStorage.removeItem(`${Gn}-${y}`),
        Pl());
    }
    const { state: tt, setState: ut, agentName: d } = Xn();
    function O() {
      if (
        (console.log('🔄 Reinitializing MediaSource and Audio Element'),
        nt.current && (nt.current.removeEventListener('updateend', T), (nt.current = null)),
        yt.current)
      ) {
        if (yt.current.readyState === 'open')
          try {
            yt.current.endOfStream();
          } catch (q) {
            console.warn('Failed to end MediaSource', q);
          }
        (yt.current.removeEventListener('sourceopen', Qt), (yt.current = null));
      }
      if (H.current) {
        const q = H.current.src;
        (H.current.pause(), (H.current.src = ''), q.startsWith('blob:') && URL.revokeObjectURL(q));
      }
      yt.current = new MediaSource();
      const R = URL.createObjectURL(yt.current);
      (yt.current.addEventListener('sourceopen', Qt),
        H.current && (H.current.src = R),
        (P.current = []),
        (it.current = !1),
        (mt.current = !1),
        (Yt.current = !1),
        console.log('✅ MediaSource reinitialized', {
          newUrl: R,
          mediaSourceReady: yt.current.readyState,
        }));
    }
    function L() {
      (console.log('🔌 connect called', {
        agentId: y,
        currentIsPlaying: pt.current,
        currentIsEmitting: Y,
        queueLength: P.current.length,
        connectionStatus: at,
      }),
        y &&
          (O(),
          At(!0),
          (pt.current = !0),
          console.log('🔌 Reset isPlaying = true on connect'),
          lo(xt),
          no(y, v, f, (R) => {
            if (R.type === 'audio_chunk') {
              const q = R.audio_data ?? R.data;
              if (!q) {
                console.warn('🎧 Audio chunk missing audio_data field', R);
                return;
              }
              (console.log('🎧 CLIENT RX AUDIO CHUNK', {
                audioDataLength: q.length,
                isPlaying: pt.current,
                isEmitting: Y,
                isTyping: Z,
                audioRefExists: !!H.current,
                audioPaused: H.current?.paused,
                queueLength: P.current.length,
                bufferUpdating: nt.current?.updating,
              }),
                j(q),
                $(!1));
              return;
            }
            if (R.type === 'user_message') {
              Tt('user', R.text);
              return;
            }
            if (R.type === 'thinking') {
              $(!0);
              return;
            }
            if (R.type === 'ai_reply') {
              ($(!1), Tt('assistant', R.text));
              return;
            }
            if (R.type === 'step' || R.type === 'step_resume') {
              ($(!1),
                z(!0),
                tt === 'EXPANDED' && ut('OPEN'),
                io(R.data, y, d || 'Agent', (q) => Tt('assistant', q), D));
              return;
            }
            if (R.type === 'workflow_complete') {
              ($(!1),
                z(!1),
                Pl(),
                Tt('assistant', R.message || '✅ Done'),
                localStorage.removeItem(`${Gn}-${y}`));
              return;
            }
            if (R.type === 'workflow_failed') {
              ($(!1),
                z(!1),
                Pl(),
                Tt('assistant', R.message || '❌ Workflow failed'),
                localStorage.removeItem(`${Gn}-${y}`));
              return;
            }
            if (R.type === 'session_resumed') {
              (console.log('🔄 Session Resumed', {
                paused: R.paused,
                currentIsPlaying: pt.current,
                queueLength: P.current.length,
              }),
                R.paused
                  ? (At(!1), console.log('🔄 Set isPlaying = false (server says paused)'))
                  : (At(!0), console.log('🔄 Set isPlaying = true (server says active)')));
              return;
            }
            if (R.type === 'session_history') {
              const ot = (R.data || []).map((Nt) => ({
                id: crypto.randomUUID(),
                role: Nt.role,
                content: Nt.content,
              }));
              C(ot);
              return;
            }
          })));
    }
    function B() {
      (console.log('🔌 disconnect called', {
        isPlaying: pt.current,
        isEmitting: Y,
        queueLength: P.current.length,
        audioPaused: H.current?.paused,
      }),
        Promise.resolve()
          .then(() => ao)
          .then((R) => R.disconnectSocket()),
        xt('offline'),
        z(!1),
        w(!1),
        (mt.current = !1),
        (P.current = []),
        (it.current = !1),
        H.current && H.current.pause(),
        console.log('🔌 disconnect complete', {
          isPlaying: pt.current,
          queueLength: P.current.length,
        }));
    }
    G.useEffect(() => {
      if (!y) return;
      const R = typeof window < 'u' ? localStorage.getItem(`${Gn}-${y}`) : !1;
      (R && at === 'online' && z(!0), (tt === 'OPEN' || tt === 'EXPANDED' || R) && L());
    }, [y, tt]);
    const V = G.useRef(null);
    G.useEffect(() => {
      const R = at === 'online' && (tt === 'OPEN' || tt === 'EXPANDED') && !Y && !Z && !N && J;
      (R ? K() : et(),
        console.log('🎙️ Recording State Changed:', R),
        console.log({
          connectionStatus: at,
          mountState: tt,
          isEmitting: Y,
          isTyping: Z,
          isWorkflowRunning: N,
          isPlaying: J,
        }));
    }, [at, tt, Y, Z, N, J]);
    function K() {
      if (V.current) return;
      console.log('🎤 Starting Microphone...');
      const R = new dy((q) => {
        const ot = new FileReader();
        ((ot.onloadend = () => {
          ot.result instanceof ArrayBuffer &&
            Promise.resolve()
              .then(() => ao)
              .then((Nt) => Nt.sendBinary(ot.result));
        }),
          ot.readAsArrayBuffer(q));
      });
      R.start()
        .then(() => {
          V.current = R;
        })
        .catch((q) => {
          console.error('Failed to start recorder', q);
        });
    }
    function et() {
      V.current && (console.log('🛑 Stopping Microphone...'), V.current.stop(), (V.current = null));
    }
    return U.jsx(oo.Provider, {
      value: {
        messages: _,
        send: dt,
        clear: qt,
        connectionStatus: at,
        isTyping: Z,
        connect: L,
        disconnect: B,
        isPlaying: J,
        isEmitting: Y,
        isWorkflowRunning: N,
        pauseAudio: I,
        resumeAudio: S,
        terminateWorkflow: k,
      },
      children: o,
    });
  }
  function mi() {
    const o = G.useContext(oo);
    if (!o) throw new Error('useChat must be inside ChatProvider');
    return o;
  }
  const Ct = {
      brand: '#0ea5e9',
      brandDark: '#0369a1',
      surface: '#ffffff',
      headerBg: '#f8fafc',
      assistantBubbleBg: '#e0f2fe',
      assistantBubbleText: '#0369a1',
      userBubbleBg: '#f1f5f9',
      userBubbleText: '#334155',
      glowListening: '#22c55e',
      glowSpeaking: '#0ea5e9',
      glowIdle: '#d1d5db',
      glowThinking: '#eab308',
      inputBorder: '#e2e8f0',
      inputShadow: '0 1px 2px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
      btnShadow: '0 6px 14px rgba(14,165,233,0.25)',
    },
    qe = { outline: 'none', width: '1rem', height: '1rem' },
    Qn = (o) => {
      switch (o) {
        case 'listening':
          return Ct.glowListening;
        case 'speaking':
          return Ct.glowSpeaking;
        case 'thinking':
          return Ct.glowThinking;
        default:
          return Ct.glowIdle;
      }
    },
    my = (o, y, v) => {
      const f = {
        outline: 'none',
        width: '380px',
        height: '520px',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 50,
        backgroundColor: Ct.surface,
        border: `4px solid ${Qn(o)}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: 'all 500ms cubic-bezier(0.23, 1, 0.32, 1)',
        opacity: y ? 1 : 0,
        transform: y ? 'scale(1)' : 'scale(0.95)',
        pointerEvents: y ? 'auto' : 'none',
      };
      if (!v)
        return {
          ...f,
          bottom: '2rem',
          right: '1.5rem',
          transform: y ? 'translateY(0) scale(1)' : 'translateY(1rem) scale(0.95)',
        };
      const { corner: _, x: C, y: Z } = v,
        $ = 1,
        N = _.toLowerCase();
      (N.includes('top')
        ? ((f.top = Z + $), y || (f.transform = 'translateY(-20px) scale(0.9)'))
        : ((f.bottom = Z + $), y || (f.transform = 'translateY(20px) scale(0.9)')),
        N.includes('left') ? (f.left = C) : (f.right = C));
      const z = f.top !== void 0 ? 'top' : 'bottom',
        Y = f.left !== void 0 ? 'left' : 'right';
      return ((f.transformOrigin = `${z} ${Y}`), f);
    },
    gy = {
      outline: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Ct.headerBg,
      padding: '1rem',
      borderBottom: `1px solid ${Ct.inputBorder}`,
    },
    hy = {
      outline: 'none',
      width: '2.5rem',
      height: '2.5rem',
      aspectRatio: '1 / 1',
      objectFit: 'cover',
      borderRadius: '9999px',
      flexShrink: 0,
      userSelect: 'none',
      pointerEvents: 'none',
    },
    vy = { outline: 'none', fontSize: '1.125rem', fontWeight: 600, color: Ct.brandDark },
    py = {
      outline: 'none',
      padding: '0.5rem',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      color: '#64748b',
    },
    by = {
      outline: 'none',
      padding: '1rem',
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      backgroundColor: Ct.surface,
    },
    Sy = (o) => {
      const y = o === 'user';
      return {
        fontSize: '0.85rem',
        lineHeight: 1.45,
        padding: '0.6rem 0.9rem',
        maxWidth: '75%',
        marginBottom: '0.25rem',
        borderRadius: '0.75rem',
        width: 'fit-content',
        alignSelf: y ? 'flex-end' : 'flex-start',
        backgroundColor: y ? Ct.userBubbleBg : Ct.assistantBubbleBg,
        color: y ? Ct.userBubbleText : Ct.assistantBubbleText,
        borderTopLeftRadius: y ? '0.75rem' : 0,
        borderTopRightRadius: y ? 0 : '0.75rem',
        userSelect: 'text',
        cursor: 'text',
      };
    },
    Zn = 44,
    Ey = (o) => ({
      outline: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: Ct.headerBg,
      borderTop: `1px solid ${Ct.inputBorder}`,
      zIndex: 2,
      gap: '0.5rem',
    }),
    Ty = {
      outline: 'none',
      flex: 1,
      height: `${Zn}px`,
      backgroundColor: Ct.surface,
      borderRadius: `${Zn / 2}px`,
      padding: '0 14px',
      fontSize: '0.95rem',
      border: `1px solid ${Ct.inputBorder}`,
      boxShadow: Ct.inputShadow,
      userSelect: 'text',
      cursor: 'text',
    },
    Ay = (o) => ({
      outline: 'none',
      height: `${Zn}px`,
      width: `${Zn}px`,
      minWidth: `${Zn}px`,
      padding: '0',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${Ct.brand} 0%, ${Ct.brandDark} 100%)`,
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      border: 'none',
      boxShadow: Ct.btnShadow,
      transition: 'transform 120ms ease, box-shadow 120ms ease',
    }),
    zy = {
      height: '54px',
      width: '54px',
      borderRadius: '9999px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      cursor: 'pointer',
      transition: 'transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease',
      border: 'none',
    },
    gi = (o, y, v) => ({
      ...zy,
      background: `linear-gradient(135deg, ${o} 0%, ${y} 100%)`,
      boxShadow: `0 6px 14px ${v}`,
    }),
    so = gi('#f87171', '#ef4444', 'rgba(239, 68, 68, 0.35)'),
    _y = gi(Ct.brand, Ct.brandDark, 'rgba(59, 130, 246, 0.35)'),
    xy = gi('#22c55e', '#16a34a', 'rgba(34, 197, 94, 0.35)'),
    Oy = {
      fontSize: '0.8rem',
      padding: '0.5rem 0.9rem',
      maxWidth: '14rem',
      marginBottom: '0.25rem',
      borderRadius: '0.75rem',
      width: 'fit-content',
      alignSelf: 'flex-start',
      backgroundColor: Ct.assistantBubbleBg,
      color: Ct.assistantBubbleText,
      borderTopLeftRadius: 0,
      borderTopRightRadius: '0.75rem',
      userSelect: 'text',
      cursor: 'text',
    },
    My = (o) => {
      const y = Qn(o),
        v = o === 'listening' || o === 'speaking';
      return {
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '9999px',
        boxShadow: `0 0 0 6px ${y} inset, 0 0 15px ${y}`,
        transition: 'box-shadow 250ms ease, transform 250ms ease',
        transform: o !== 'idle' ? 'scale(1.04)' : 'scale(1)',
        animation: v ? 'pulseRing 1.8s ease-in-out infinite' : 'none',
      };
    },
    Dy = {
      outline: 'none',
      width: '6.25rem',
      height: '6.25rem',
      objectFit: 'cover',
      borderRadius: '9999px',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    Ry = (o, y = !1) => {
      const v = y ? Ct.glowIdle : Qn(o);
      return {
        padding: '0.35rem 0.9rem',
        borderRadius: '9999px',
        fontWeight: 600,
        fontSize: '0.9rem',
        backgroundColor: o === 'idle' && !y ? 'rgba(107, 114, 128, 0.2)' : v,
        color: o === 'idle' ? '#374151' : '#ffffff',
        boxShadow: o === 'idle' && !y ? '0 2px 4px rgba(0,0,0,0.05)' : `0 3px 8px ${v}80`,
        textTransform: 'capitalize',
        minWidth: '7rem',
        textAlign: 'center',
        transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };
    },
    hi = (o, y = 0) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '9999px',
      backgroundColor: o,
      opacity: 0,
      animation: `avatarRingPulse 2.4s ease-out ${y}s infinite`,
      zIndex: 0,
    }),
    Cy = Qn;
  function ro({ agentState: o, agentImage: y, isOnline: v, size: f = 'normal' }) {
    const _ = Qn(o),
      C = o === 'listening' || o === 'speaking',
      Z = f === 'small' ? '3.5rem' : '6.25rem';
    return U.jsxs('div', {
      style: {
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '9999px',
        backgroundColor: '#f3f4f6',
        cursor: 'pointer',
        width: Z,
        height: Z,
      },
      children: [
        C &&
          U.jsxs(U.Fragment, {
            children: [
              U.jsx('div', { style: hi(_, 0) }),
              U.jsx('div', { style: hi(_, 0.8) }),
              U.jsx('div', { style: hi(_, 1.6) }),
            ],
          }),
        U.jsx('div', {
          style: { ...My(o), width: '100%', height: '100%' },
          children: U.jsx('img', {
            src: y,
            alt: 'Voice Assistant',
            style: { ...Dy, width: '100%', height: '100%' },
          }),
        }),
        U.jsx('div', {
          'data-drag-handle': 'true',
          style: {
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            width: f === 'small' ? '12px' : '16px',
            height: f === 'small' ? '12px' : '16px',
            borderRadius: '50%',
            backgroundColor: v ? '#22c55e' : '#f59e0b',
            border: '2px solid #fff',
            zIndex: 10,
            cursor: 'grab',
          },
          title: 'Drag to move',
        }),
      ],
    });
  }
  function Ny() {
    const {
        state: y,
        setState: v,
        agentImage: f,
        isLoading: _,
        position: C,
        setPosition: Z,
      } = Xn(),
      {
        connectionStatus: $,
        connect: N,
        disconnect: z,
        isPlaying: Y,
        pauseAudio: w,
        resumeAudio: at,
        isTyping: xt,
        isEmitting: Tt,
        isWorkflowRunning: dt,
        terminateWorkflow: qt,
      } = mi(),
      [H, yt] = G.useState(!1),
      nt = G.useRef(!1),
      [P, it] = G.useState(null),
      mt = G.useRef({ x: 0, y: 0 }),
      J = G.useRef({ x: 0, y: 0 }),
      At = G.useRef(!1),
      pt = G.useRef(null),
      Yt = G.useRef(null);
    G.useEffect(() => {
      const B = (K) => {
          if (!nt.current) return;
          const et = K.clientX ?? K.touches?.[0]?.clientX,
            R = K.clientY ?? K.touches?.[0]?.clientY;
          if (et == null || R == null) return;
          const q = et - J.current.x,
            ot = R - J.current.y;
          ((Math.abs(q) > 3 || Math.abs(ot) > 3) && (At.current = !0),
            it({ x: et - mt.current.x, y: R - mt.current.y }));
        },
        V = (K) => {
          if (!nt.current) return;
          ((nt.current = !1), yt(!1), it(null));
          const et = K.clientX ?? K.changedTouches?.[0]?.clientX ?? J.current.x,
            R = K.clientY ?? K.changedTouches?.[0]?.clientY ?? J.current.y,
            { innerWidth: q, innerHeight: ot } = window,
            Nt = q / 2,
            jt = ot / 2;
          let ae = 'bottom-right';
          (et < Nt && R < jt
            ? (ae = 'top-left')
            : et >= Nt && R < jt
              ? (ae = 'top-right')
              : et < Nt && R >= jt && (ae = 'bottom-left'),
            Z({ corner: ae, x: 20, y: 20 }));
        };
      return (
        window.addEventListener('mousemove', B, { passive: !0 }),
        window.addEventListener('mouseup', V, { passive: !1 }),
        window.addEventListener('touchmove', B, { passive: !0 }),
        window.addEventListener('touchend', V, { passive: !1 }),
        () => {
          (window.removeEventListener('mousemove', B),
            window.removeEventListener('mouseup', V),
            window.removeEventListener('touchmove', B),
            window.removeEventListener('touchend', V));
        }
      );
    }, [y, v, N, Z]);
    const Qt = (B) => {
      if (B.target.closest('button, input, textarea, select, [data-nodrag]')) return;
      ((nt.current = !0), yt(!0), (At.current = !1));
      const K = B.currentTarget.getBoundingClientRect(),
        et = B.clientX ?? B.touches?.[0]?.clientX,
        R = B.clientY ?? B.touches?.[0]?.clientY;
      ((mt.current = { x: et - K.left, y: R - K.top }),
        (J.current = { x: et, y: R }),
        it({ x: K.left, y: K.top }));
    };
    if (y === 'EXPANDED' || _ || !f) return null;
    const T = !Y,
      j = $ === 'online',
      D = xt ? 'thinking' : Tt ? 'speaking' : j && Y ? 'listening' : 'idle',
      k = (() => {
        if (H && P) return { top: P.y, left: P.x, bottom: 'auto', right: 'auto' };
        const B = {},
          { corner: V, x: K, y: et } = C;
        return (
          V.includes('top') ? (B.top = et) : (B.bottom = et),
          V.includes('left') ? (B.left = K) : (B.right = K),
          B
        );
      })(),
      tt = C.corner.includes('top'),
      ut = C.corner.includes('left'),
      d = tt ? 'column' : 'column-reverse',
      O = ut ? 'flex-start' : 'flex-end',
      L = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        borderRadius: '1.5rem',
        border: `2px solid ${Cy(D)}`,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        transition: 'border-color 0.3s ease',
        cursor: H ? 'grabbing' : 'default',
      };
    return U.jsxs('div', {
      onMouseDown: Qt,
      onTouchStart: Qt,
      style: {
        position: 'fixed',
        zIndex: 9999,
        cursor: H ? 'grabbing' : 'grab',
        userSelect: 'none',
        display: 'flex',
        flexDirection: d,
        alignItems: O,
        gap: '20px',
        ...k,
        transition: H ? 'none' : 'top 0.3s, left 0.3s, right 0.3s, bottom 0.3s',
        touchAction: 'none',
      },
      children: [
        y === 'OPEN' &&
          U.jsxs('div', {
            ref: Yt,
            style: L,
            children: [
              U.jsx('div', {
                onClick: () => !At.current && v('EXPANDED'),
                style: { cursor: 'pointer' },
                children: U.jsx(ro, { agentState: D, agentImage: f, isOnline: j, size: 'normal' }),
              }),
              U.jsxs('div', {
                style: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
                children: [
                  U.jsx('div', {
                    style: Ry(D, T),
                    children: U.jsxs('span', {
                      style: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem' },
                      children: [
                        D === 'listening' && U.jsx($f, { style: qe }),
                        D === 'thinking' &&
                          U.jsx(Y0, { style: { ...qe, animation: 'spin 1s linear infinite' } }),
                        D === 'speaking' && U.jsx($f, { style: qe }),
                        U.jsx('span', {
                          style: { textTransform: 'capitalize' },
                          children: T ? 'Paused' : D,
                        }),
                      ],
                    }),
                  }),
                  dt &&
                    U.jsx('button', {
                      style: {
                        ...so,
                        width: '2rem',
                        height: '2rem',
                        minWidth: '2rem',
                        minHeight: '2rem',
                        display: 'none',
                      },
                      onClick: () => qt(),
                      title: 'Stop Workflow',
                      'data-nodrag': !0,
                      children: U.jsx(V0, {
                        style: { ...qe, width: '14px', height: '14px', fill: 'currentColor' },
                      }),
                    }),
                ],
              }),
              U.jsxs('div', {
                style: { display: 'flex', gap: '0.75rem' },
                children: [
                  U.jsx('button', {
                    style: so,
                    onClick: () => {
                      (z(), v('CLOSED'));
                    },
                    title: 'Close / Disconnect',
                    'data-nodrag': !0,
                    disabled: D === 'thinking',
                    children: U.jsx(Ff, { style: qe }),
                  }),
                  U.jsx('button', {
                    style: _y,
                    onClick: () => v('EXPANDED'),
                    title: 'Open Chat',
                    'data-nodrag': !0,
                    children: U.jsx(G0, { style: qe }),
                  }),
                  U.jsx('button', {
                    style: xy,
                    onClick: () => {
                      Y ? w() : at();
                    },
                    title: Y ? 'Pause' : 'Resume',
                    'data-nodrag': !0,
                    children: T ? U.jsx(Q0, { style: qe }) : U.jsx(X0, { style: qe }),
                  }),
                ],
              }),
            ],
          }),
        y === 'CLOSED' &&
          U.jsx('div', {
            ref: pt,
            style: { cursor: 'grab' },
            onClick: () => {
              !At.current && y === 'CLOSED' && (v('OPEN'), N());
            },
            children: U.jsx(ro, { agentState: D, agentImage: f, isOnline: j, size: 'small' }),
          }),
        U.jsx('style', {
          children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes avatarRingPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.05);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.05);
          }
        }
      `,
        }),
      ],
    });
  }
  function Uy() {
    const { state: o, setState: y, agentName: v, agentImage: f, position: _ } = Xn(),
      {
        messages: C,
        send: Z,
        connectionStatus: $,
        isTyping: N,
        isEmitting: z,
        isWorkflowRunning: Y,
        isPlaying: w,
      } = mi(),
      [at, xt] = G.useState(''),
      Tt = G.useRef(null),
      dt = o === 'EXPANDED';
    G.useEffect(() => {
      Tt.current?.scrollIntoView({ behavior: 'smooth' });
    }, [C, N, dt]);
    function qt() {
      at.trim() && (Z(at), xt(''));
    }
    const H = $ === 'online',
      P = N ? 'thinking' : z ? 'speaking' : H && w ? 'listening' : 'idle';
    return U.jsxs('div', {
      style: my(P, dt, _),
      children: [
        U.jsxs('div', {
          style: gy,
          children: [
            U.jsxs('div', {
              style: {
                position: 'relative',
                display: 'inline-block',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
              },
              children: [
                P === 'listening' &&
                  U.jsx('div', {
                    className: 'animate-pulse-ring',
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '2px solid #22c55e',
                      pointerEvents: 'none',
                      zIndex: 0,
                    },
                  }),
                P === 'speaking' &&
                  U.jsx('div', {
                    className: 'animate-spin-slow',
                    style: {
                      position: 'absolute',
                      top: '-4px',
                      left: '-4px',
                      right: '-4px',
                      bottom: '-4px',
                      borderRadius: '50%',
                      border: '2px dashed #0ea5e9',
                      pointerEvents: 'none',
                      opacity: 0.6,
                      zIndex: 5,
                    },
                  }),
                U.jsx('img', {
                  src: f || '',
                  alt: v || 'Agent',
                  style: { ...hy, width: '100%', height: '100%', zIndex: 10, position: 'relative' },
                  onError: (it) => (it.currentTarget.style.display = 'none'),
                }),
                U.jsx('div', {
                  style: {
                    position: 'absolute',
                    bottom: '2px',
                    right: '0px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: H ? '#22c55e' : '#f59e0b',
                    border: '1.5px solid #fff',
                  },
                }),
              ],
            }),
            U.jsxs('h1', { style: vy, children: [v || 'Agent', ' Chat'] }),
            U.jsx('button', {
              style: py,
              onClick: () => y('OPEN'),
              title: 'Minimize',
              children: U.jsx(Ff, { style: qe }),
            }),
          ],
        }),
        U.jsxs('div', {
          style: by,
          children: [
            C.map((it) =>
              it.role === 'system'
                ? null
                : U.jsx(
                    'div',
                    {
                      style: { display: 'flex', flexDirection: 'column' },
                      className: 'animate-message-enter',
                      children: U.jsx('p', { style: Sy(it.role), children: it.content }),
                    },
                    it.id,
                  ),
            ),
            N &&
              U.jsx('div', {
                style: { display: 'flex', flexDirection: 'column' },
                children: U.jsx('p', {
                  style: Oy,
                  className: 'animate-fade-in',
                  children: U.jsxs('div', {
                    className: 'typing-bubble',
                    children: [U.jsx('span', {}), U.jsx('span', {}), U.jsx('span', {})],
                  }),
                }),
              }),
            U.jsx('div', { ref: Tt }),
          ],
        }),
        U.jsxs('div', {
          style: Ey(),
          children: [
            U.jsx('input', {
              style: { ...Ty, opacity: Y ? 0.6 : 1, cursor: Y ? 'not-allowed' : 'text' },
              placeholder: Y ? 'Workflow running...' : 'Enter your message...',
              value: at,
              onChange: (it) => xt(it.target.value),
              disabled: Y,
              onKeyDown: (it) => {
                it.key === 'Enter' && at && qt();
              },
            }),
            U.jsx('button', {
              style: { ...Ay(), opacity: Y ? 0.6 : 1, cursor: Y ? 'not-allowed' : 'pointer' },
              onClick: qt,
              disabled: Y,
              children: U.jsx(Z0, { style: qe }),
            }),
          ],
        }),
        U.jsx('style', {
          children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
        }),
      ],
    });
  }
  function Hy() {
    const [o, y] = G.useState(!1),
      [v, f] = G.useState('info'),
      { isPlaying: _ } = mi(),
      [C, Z] = G.useState({ x: 100, y: 100, label: 'AgenQ', message: '' });
    if (
      (G.useEffect(() => {
        function z(w) {
          (Z(w.detail), f(w.detail.type || 'info'), y(!0));
        }
        function Y() {
          y(!1);
        }
        return (
          window.addEventListener('agenq-cursor-move', z),
          window.addEventListener('agenq-cursor-hide', Y),
          () => {
            (window.removeEventListener('agenq-cursor-move', z),
              window.removeEventListener('agenq-cursor-hide', Y));
          }
        );
      }, []),
      !o)
    )
      return null;
    const $ = v === 'error' ? '#ef4444' : '#000';
    return U.jsxs('div', {
      style: {
        position: 'fixed',
        zIndex: 999999999,
        left: `${C.x}px`,
        top: `${C.y}px`,
        transform: 'translate(-100%, 0)',
        transition: 'all 0.5s ease-out',
        display: 'flex',
        alignItems: 'flex-start',
        pointerEvents: 'none',
      },
      children: [
        U.jsx('div', {
          style: {
            marginTop: '1.5rem',
            backgroundColor: $,
            color: '#ffffff',
            borderRadius: '1rem',
            padding: '0.5rem 1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            maxWidth: '320px',
            wordWrap: 'break-word',
          },
          children: U.jsxs('div', {
            style: { fontWeight: 'bold', fontSize: '0.8rem', opacity: 0.8 },
            children: ['@', C.label || 'AgenQ'],
          }),
        }),
        U.jsx('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'scaleX(-1)',
            color: $,
            fill: $,
          },
          children: U.jsx('path', {
            d: 'M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z',
            fill: $,
            stroke: 'none',
          }),
        }),
      ],
    });
  }
  function By({ projectId: o, customerCode: y }) {
    const f = new URLSearchParams(window.location.search).get('recorder') === 'true',
      { agentId: _ } = Xn();
    return f
      ? null
      : U.jsxs(yy, {
          agentId: _,
          projectId: o,
          customerCode: y,
          children: [U.jsx(Ny, {}), U.jsx(Uy, {}), U.jsx(Hy, {})],
        });
  }
  const yo = 'agenq-id',
    jy = ['input', 'button', 'select', 'textarea', 'a'],
    qy = ['div', 'span', 'label', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td'];
  class Ly {
    observer = null;
    counters = new Map();
    processed = new WeakSet();
    constructor() {}
    start() {
      this.observer ||
        (this.scan(document.body),
        (this.observer = new MutationObserver((y) => {
          for (const v of y)
            v.type === 'childList' &&
              v.addedNodes.forEach((f) => {
                f.nodeType === Node.ELEMENT_NODE && this.scan(f);
              });
        })),
        this.observer.observe(document.body, { childList: !0, subtree: !0 }));
    }
    stop() {
      (this.observer?.disconnect(), (this.observer = null));
    }
    scan(y) {
      if (this.shouldIgnore(y)) return;
      (this.processElement(y),
        y.querySelectorAll('*').forEach((f) => {
          this.processElement(f);
        }));
    }
    processElement(y) {
      if (this.processed.has(y) || this.shouldIgnore(y)) return;
      if (y.hasAttribute(yo)) {
        this.processed.add(y);
        return;
      }
      const v = y.tagName.toLowerCase();
      let f = '';
      if (
        (jy.includes(v)
          ? (f = this.getKeyForTracked(y))
          : qy.includes(v) && (f = this.getKeyForGeneric(y)),
        f)
      ) {
        const _ = (this.counters.get(f) || 0) + 1;
        this.counters.set(f, _);
        const C = `${f}-${_}`;
        y.setAttribute(yo, C);
      }
      this.processed.add(y);
    }
    getKeyForTracked(y) {
      const v = y.tagName.toLowerCase();
      if (v === 'input') return `input-${y.type || 'text'}`;
      if (v === 'button') {
        const f = y.innerText?.trim();
        if (f && f.length < 20) {
          const _ = f.replace(/[^a-z0-9]/gi, '-').toLowerCase();
          if (_) return `button-${_}`;
        }
        return 'button';
      }
      return v === 'select' ? 'select' : v === 'textarea' ? 'textarea' : v === 'a' ? 'link' : v;
    }
    getKeyForGeneric(y) {
      const v = y.tagName.toLowerCase();
      return this.hasDirectText(y) ? `${v}-text` : '';
    }
    hasDirectText(y) {
      for (let v = 0; v < y.childNodes.length; v++) {
        const f = y.childNodes[v];
        if (f.nodeType === Node.TEXT_NODE && f.textContent?.trim()) return !0;
      }
      return !1;
    }
    shouldIgnore(y) {
      return !!(
        y.getAttribute('data-recorder-ignore') === 'true' ||
        y.closest('[data-recorder-ignore="true"]')
      );
    }
  }
  const mo = new Ly();
  function wy() {
    (console.log('RECORDER MODULE _ CHANGE ON RADIO BUTTON AND CHECKBOX'),
      console.log('RECORDER MODULE _ CHANGE ON RADIO BUTTON AND CHECKBOX'));
    const [o, y] = G.useState(!1),
      [v, f] = G.useState(!1),
      [_, C] = G.useState(null),
      Z = G.useRef(new WeakMap()),
      { agentId: $ } = Xn(),
      N = G.useRef(0),
      z = new URLSearchParams(window.location.search),
      Y = z.get('recorder') === 'true' && $,
      w = z.get('workflowId') || null,
      at = (() => {
        try {
          return new URL(document.referrer).origin || '*';
        } catch {
          return '*';
        }
      })();
    function xt(m) {
      if (!m) return '';
      if (m.id !== '') return `//*[@id="${m.id}"]`;
      if (m === document.body) return '/html/body';
      let T = 0;
      const j = m.parentNode ? m.parentNode.childNodes : [];
      for (let I = 0; I < j.length; I++) {
        const S = j[I];
        if (S === m) return xt(m.parentNode) + '/' + m.tagName.toLowerCase() + '[' + (T + 1) + ']';
        S.nodeType === 1 && S.tagName === m.tagName && T++;
      }
      return '';
    }
    function Tt(m) {
      if (!(m instanceof Element)) return '';
      const T = [];
      let j = m;
      for (; j && j.nodeType === Node.ELEMENT_NODE && j !== document.documentElement; ) {
        const I = j.tagName.toLowerCase(),
          S = j.id ? `#${j.id}` : '';
        if (S) {
          T.unshift(I + S);
          break;
        }
        const D = j.parentElement;
        if (!D) break;
        const tt =
          Array.from(D.children)
            .filter((ut) => ut.tagName === j.tagName)
            .indexOf(j) + 1;
        (T.unshift(`${I}:nth-of-type(${tt})`), (j = D));
      }
      return T.join(' > ');
    }
    function dt(m) {
      if (m.id) {
        const j = document.querySelector(`label[for="${CSS.escape(m.id)}"]`);
        if (j) return j.innerText.trim();
      }
      let T = m;
      for (; T; ) {
        if (T.tagName && T.tagName.toLowerCase() === 'label') return T.innerText.trim();
        T = T.parentElement;
      }
      return null;
    }
    function qt(m) {
      if (m instanceof HTMLSelectElement) return m.value;
      if (m instanceof HTMLInputElement) {
        const T = (m.type || '').toLowerCase();
        return T === 'password'
          ? '***'
          : T === 'checkbox' || T === 'radio'
            ? m.checked
              ? 'on'
              : 'off'
            : m.value;
      }
      return m instanceof HTMLTextAreaElement ? m.value : null;
    }
    function H(m) {
      const T = m,
        j = m instanceof HTMLAnchorElement,
        I = m.tagName.toLowerCase(),
        S = qt(m);
      return {
        tag: I,
        id: m.id || null,
        name: T.name || null,
        type: T.type || null,
        classes: m.className || '',
        text:
          j || I === 'button' || I === 'div' || I === 'span' || I === 'label'
            ? m.innerText.trim().slice(0, 140)
            : null,
        href: j ? m.href : null,
        value: S,
        checked: typeof T.checked == 'boolean' ? !!T.checked : null,
        placeholder: T.placeholder || null,
        label: dt(m),
        ariaLabel: m.getAttribute && m.getAttribute('aria-label'),
        dataTestId: m.getAttribute && m.getAttribute('data-testid'),
        role: m.getAttribute('role'),
        cssPath: Tt(m),
        xpath: xt(m),
        agenqId: m.getAttribute('agenq-id'),
      };
    }
    function yt(m) {
      let T = m;
      for (; T; ) {
        if (T.dataset?.recorderIgnore === 'true') return !0;
        T = T.parentElement;
      }
      return !1;
    }
    function nt(m) {
      let T = { type: 'xpath', target: m.xpath, tag: m.tag };
      return (
        m.label
          ? (T = { type: 'label', target: m.label, tag: m.tag })
          : m.id
            ? (T = { type: 'id', target: m.id, tag: m.tag })
            : (m.tag === 'button' ||
                m.tag === 'a' ||
                m.tag === 'label' ||
                m.tag === 'span' ||
                m.tag === 'div') &&
              (m.role === 'option' || m.role === 'menuitem'
                ? (T = { type: 'innertext', target: m.text || '', tag: m.tag })
                : m.text && (T = { type: 'innertext', target: m.text, tag: m.tag })),
        (T.type === 'xpath' || !T.target) &&
          (m.type &&
          (m.tag === 'button' ||
            (m.tag === 'input' && ['submit', 'reset', 'button'].includes(m.type.toLowerCase())))
            ? (T = { type: 'btn-type', target: m.type, tag: m.tag })
            : m.name
              ? (T = { type: 'name', target: m.name, tag: m.tag })
              : m.placeholder
                ? (T = { type: 'placeholder', target: m.placeholder, tag: m.tag })
                : m.classes &&
                  (T = {
                    type: 'class',
                    target: m.classes.trim().replace(/\s+/g, '.'),
                    tag: m.tag,
                  })),
        !T.target && m.xpath && (T = { type: 'xpath', target: m.xpath, tag: m.tag }),
        m.agenqId && (T.agenqid = m.agenqId),
        T
      );
    }
    function P(m) {
      const T = [];
      if (
        (m.agenqId && T.push({ type: 'agenq-id', target: m.agenqId, tag: m.tag }),
        m.id && T.push({ type: 'id', target: m.id, tag: m.tag }),
        (m.tag === 'button' || m.tag === 'a' || m.tag === 'label' || m.role === 'option') &&
          m.text &&
          T.push({ type: 'innertext', target: m.text, tag: m.tag }),
        m.name && T.push({ type: 'name', target: m.name, tag: m.tag }),
        m.placeholder && T.push({ type: 'placeholder', target: m.placeholder, tag: m.tag }),
        m.label && T.push({ type: 'label', target: m.label, tag: m.tag }),
        m.xpath && T.push({ type: 'xpath', target: m.xpath, tag: m.tag }),
        m.cssPath && T.push({ type: 'cssPath', target: m.cssPath, tag: m.tag }),
        m.classes)
      ) {
        const I = m.classes.trim().replace(/\s+/g, '.');
        I.length > 0 && T.push({ type: 'class', target: I, tag: m.tag });
      }
      const j = nt(m);
      return T.filter((I) => !(I.type === j.type && I.target === j.target));
    }
    function it(m) {
      const { step: T, ...j } = m;
      (console.log('WORKFLOW_STEP:', JSON.stringify(j, null, 2)),
        sessionStorage.setItem('recorder_step_count', N.current.toString()));
    }
    function mt(m, T) {
      const j = { __RECORDER__: !0, type: m, agentId: $, workflowId: w, payload: T };
      window.parent &&
        window.parent !== window &&
        window.parent.postMessage(j, at === '*' ? '*' : at);
    }
    (G.useEffect(() => {
      const m = sessionStorage.getItem('recorder_step_count');
      m && (N.current = parseInt(m, 10));
      const T = sessionStorage.getItem('recorder_last_url'),
        j = window.location.pathname;
      (T &&
        T !== j &&
        (it({ step: N.current++, method: 'action', content: { action: 'navigation', value: j } }),
        it({ step: N.current++, method: 'confirmation', content: { type: 'url', value: j } }),
        sessionStorage.setItem('recorder_step_count', N.current.toString())),
        sessionStorage.setItem('recorder_last_url', j));
    }, []),
      G.useEffect(() => (mo.start(), () => mo.stop()), []),
      G.useEffect(() => {
        if (o) {
          const m = () => {
            document.querySelectorAll('form, input, select, textarea').forEach((j) => {
              j.setAttribute('autocomplete', 'off');
            });
          };
          m();
          const T = new MutationObserver(() => {
            m();
          });
          return (T.observe(document.body, { childList: !0, subtree: !0 }), () => T.disconnect());
        }
      }, [o]));
    function J(m) {
      if (_) return;
      if (v) {
        (m.preventDefault(), m.stopPropagation());
        const tt = m.target,
          ut = H(tt);
        (mt('event', {
          ts: Date.now(),
          event: 'click',
          x: m.clientX,
          y: m.clientY,
          target: ut,
          page: {
            url: location.href,
            title: document.title,
            viewport: { w: innerWidth, h: innerHeight },
          },
          backups: P(ut),
        }),
          it({
            step: N.current++,
            method: 'action',
            content: { identifier: nt(ut), action: 'click' },
          }),
          f(!1));
        return;
      }
      let T = m.target;
      if (!T || yt(T)) return;
      if (T.tagName.toLowerCase() === 'input') {
        const tt = (T.getAttribute('type') || '').toLowerCase();
        if (tt === 'checkbox' || tt === 'radio') {
          let ut = T.parentElement,
            d = !1;
          for (; ut; ) {
            if (ut.tagName.toLowerCase() === 'label') {
              ((T = ut), (d = !0));
              break;
            }
            ut = ut.parentElement;
          }
          if (!d && T.id) {
            const O = document.querySelector(`label[for="${CSS.escape(T.id)}"]`);
            O && (T = O);
          }
        }
      }
      const j = (T.closest && T.closest(Qt)) || T,
        I = H(j),
        S = I.tag,
        D = (S === 'div' || S === 'span' || S === 'p' || S === 'li' || S === 'td') && I.text,
        k =
          ['a', 'button', 'input', 'select', 'textarea', 'label'].includes(S) ||
          I.role === 'button' ||
          I.role === 'link' ||
          I.role === 'menuitem' ||
          I.role === 'option';
      if (D && !k) {
        (m.preventDefault(), m.stopPropagation(), C({ event: m, desc: I }));
        return;
      }
      if (I.tag === 'input') {
        const tt = (I.type || '').toLowerCase();
        if (!['submit', 'reset', 'button', 'checkbox', 'radio'].includes(tt)) return;
      }
      (mt('event', {
        ts: Date.now(),
        event: 'click',
        x: m.clientX,
        y: m.clientY,
        target: I,
        page: {
          url: location.href,
          title: document.title,
          viewport: { w: innerWidth, h: innerHeight },
        },
        backups: P(I),
      }),
        it({
          step: N.current++,
          method: 'action',
          content: { identifier: nt(I), action: 'click' },
        }));
    }
    function At(m) {
      const T = m.target;
      if (
        T instanceof HTMLInputElement ||
        T instanceof HTMLSelectElement ||
        T instanceof HTMLTextAreaElement
      ) {
        if (yt(T)) return;
        (o && T.setAttribute('autocomplete', 'off'), Z.current.set(T, qt(T)));
      }
    }
    function pt(m) {
      const T = m.target;
      if (T instanceof HTMLInputElement) {
        const j = (T.type || '').toLowerCase();
        if (j === 'checkbox' || j === 'radio') return;
      }
      if (
        T instanceof HTMLInputElement ||
        T instanceof HTMLSelectElement ||
        T instanceof HTMLTextAreaElement
      ) {
        if (yt(T)) return;
        const j = Z.current.get(T),
          I = qt(T);
        if (j !== I) {
          const S = H(T);
          (mt('event', {
            ts: Date.now(),
            event: 'change',
            target: S,
            before: j || null,
            after: I || null,
            page: {
              url: location.href,
              title: document.title,
              viewport: { w: innerWidth, h: innerHeight },
            },
            backups: P(S),
          }),
            it({
              step: N.current++,
              method: 'action',
              content: { identifier: nt(S), action: 'update', value: I || '' },
            }));
        }
        Z.current.delete(T);
      }
    }
    function Yt(m) {
      const T = m.target;
      if (T instanceof HTMLSelectElement) {
        if (yt(T)) return;
        const j = H(T);
        (mt('event', {
          ts: Date.now(),
          event: 'change',
          target: j,
          before: null,
          after: qt(T),
          page: {
            url: location.href,
            title: document.title,
            viewport: { w: innerWidth, h: innerHeight },
          },
          backups: P(j),
        }),
          it({
            step: N.current++,
            method: 'action',
            content: { identifier: nt(j), action: 'update', value: qt(T) || '' },
          }));
      }
    }
    if (
      (G.useEffect(() => {
        function m(T) {
          const j = T.data;
          !j ||
            (!j.__RECORDER__ && !j.__recorder__) ||
            (typeof j.__selector__ == 'boolean' && f(j.__selector__),
            j.type === 'control' &&
              (typeof j.payload?.recording == 'boolean' &&
                (y(j.payload.recording), mt('status', { recording: j.payload.recording })),
              typeof j.payload?.hardMode == 'boolean' && f(j.payload.hardMode),
              typeof j.payload?.selector == 'boolean' && f(j.payload.selector)));
        }
        return (
          window.addEventListener('message', m),
          mt('hello', { url: location.href, title: document.title }),
          () => window.removeEventListener('message', m)
        );
      }, []),
      G.useEffect(() => {
        if (o)
          return (
            window.addEventListener('click', J, !0),
            window.addEventListener('focusin', At, !0),
            window.addEventListener('focusout', pt, !0),
            window.addEventListener('change', Yt, !0),
            () => {
              (window.removeEventListener('click', J, !0),
                window.removeEventListener('focusin', At, !0),
                window.removeEventListener('focusout', pt, !0),
                window.removeEventListener('change', Yt, !0));
            }
          );
      }, [o, v]),
      G.useEffect(() => {
        if (v) {
          const m = document.createElement('style');
          return (
            (m.id = 'recorder-hard-mode-cursor'),
            (m.innerHTML = `
        * { cursor: crosshair !important; }
      `),
            document.head.appendChild(m),
            () => {
              const T = document.getElementById('recorder-hard-mode-cursor');
              T && T.remove();
            }
          );
        }
      }, [v]),
      !Y)
    )
      return null;
    const Qt =
      'a, button, input, select, textarea, [role="button"], [type="button"], [type="submit"], [type="reset"], [role="combobox"], [role="option"], [role="menuitem"]';
    return U.jsxs(U.Fragment, {
      children: [
        U.jsxs('div', {
          className: 'fixed bottom-4 left-4 z-50 flex gap-2 items-center',
          children: [
            U.jsx('button', {
              'data-recorder-ignore': 'true',
              onClick: (m) => {
                m.preventDefault();
                const T = !o;
                (y(T), mt('status', { recording: T }));
              },
              title: o ? 'Stop recording' : 'Start recording',
              className: `p-2 rounded-full shadow-lg text-white font-medium text-xs transition-colors ${o ? 'bg-red-600 hover:bg-red-700' : 'bg-zinc-900 hover:bg-zinc-800'}`,
              style: { minWidth: '80px' },
              children: o ? '● REC' : '○ REC',
            }),
            o &&
              U.jsx('button', {
                'data-recorder-ignore': 'true',
                onClick: (m) => {
                  (m.preventDefault(), f(!v));
                },
                title: 'Strict/Hard Record Next Click',
                className: `p-2 rounded-full shadow-lg text-white font-bold text-xs transition-colors border-2 ${v ? 'bg-red-600 border-red-400 animate-pulse' : 'bg-zinc-800 border-zinc-600 hover:bg-zinc-700'}`,
                style: {
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: '!',
              }),
          ],
        }),
        _ &&
          U.jsxs('div', {
            className:
              'fixed bottom-20 left-4 z-50 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 rounded-lg shadow-xl w-64 text-sm',
            children: [
              U.jsxs('p', {
                className: 'font-medium mb-2 text-zinc-900 dark:text-zinc-100',
                children: [
                  'Record interaction on this ',
                  U.jsxs('code', { children: ['<', _.desc.tag, '>'] }),
                  '?',
                ],
              }),
              U.jsx('div', {
                className: 'mb-3 text-xs text-zinc-500 truncate',
                children: _.desc.text?.slice(0, 50),
              }),
              U.jsxs('div', {
                className: 'flex gap-2 justify-end',
                children: [
                  U.jsx('button', {
                    onClick: (m) => {
                      (m.stopPropagation(), C(null));
                    },
                    className:
                      'px-3 py-1.5 rounded bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-200',
                    children: 'Cancel',
                  }),
                  U.jsx('button', {
                    onClick: (m) => {
                      if ((m.stopPropagation(), !_)) return;
                      const { event: T, desc: j } = _;
                      (mt('event', {
                        ts: Date.now(),
                        event: 'click',
                        x: T.clientX,
                        y: T.clientY,
                        target: j,
                        page: {
                          url: location.href,
                          title: document.title,
                          viewport: { w: innerWidth, h: innerHeight },
                        },
                        backups: P(j),
                      }),
                        it({
                          step: N.current++,
                          method: 'action',
                          content: { identifier: nt(j), action: 'click' },
                        }),
                        C(null));
                    },
                    className:
                      'px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium',
                    children: 'Record',
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  }
  function Yy({ agentId: o, projectId: y, customerCode: v }) {
    return (
      console.log('Loading AgenQ agent version:', D0),
      console.log('🤖 AgenQ mounted for agent:', o),
      U.jsxs(H0, {
        agentId: o.toLowerCase(),
        projectId: y.toLowerCase(),
        customerCode: v.toUpperCase(),
        children: [
          U.jsx(By, { projectId: y.toLowerCase(), customerCode: v.toUpperCase() }),
          U.jsx(wy, {}),
        ],
      })
    );
  }
  const Gy =
    '@keyframes gentle-float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.cursor-float{animation:gentle-float 1.8s ease-in-out infinite}.typing-bubble{display:flex;gap:6px;padding:10px 14px;background:#f2f2f2;color:#333;border-radius:14px;width:fit-content;animation:fadeIn .3s ease-in}.typing-bubble span{width:6px;height:6px;background:#aaa;border-radius:50%;animation:bounce 1.2s infinite ease-in-out}.typing-bubble span:nth-child(1){animation-delay:0s}.typing-bubble span:nth-child(2){animation-delay:.2s}.typing-bubble span:nth-child(3){animation-delay:.4s}@keyframes message-enter{0%{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.animate-message-enter{animation:message-enter .4s cubic-bezier(.16,1,.3,1) forwards}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.animate-fade-in{animation:fade-in .3s ease-in-out forwards}@keyframes pulse-ring{0%{transform:scale(.8);opacity:.8}to{transform:scale(1.3);opacity:0}}.animate-pulse-ring{animation:pulse-ring 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes wave{0%,to{transform:scaleY(1);opacity:.6}50%{transform:scaleY(1.5);opacity:1}}.animate-wave-bar{animation:wave 1s ease-in-out infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin 3s linear infinite}';
  (function () {
    typeof window > 'u' ||
      (window.AGENQ = {
        render(y = {}) {
          console.log('🔍 AGENQ.render called with raw options:', y);
          const v = y.agentId || y.agent_id || 'default-agent',
            f = y.projectId || y.project_id || 'default-project',
            _ = y.customerCode || y.customer_code || 'default-customer';
          console.log('✅ AGENQ.render using effective config:', {
            agentId: v,
            projectId: f,
            customerCode: _,
          });
          let C = document.getElementById('agenq-root');
          if (
            (C ||
              ((C = document.createElement('div')),
              (C.id = 'agenq-root'),
              document.body.appendChild(C)),
            C.shadowRoot)
          ) {
            console.warn('⚠️ AgenQ already mounted, skipping.');
            return;
          }
          const Z = C.attachShadow({ mode: 'open' }),
            $ = document.createElement('style');
          (($.textContent = Gy), Z.appendChild($));
          const N = document.createElement('div');
          (Z.appendChild(N),
            x0
              .createRoot(N)
              .render(
                U.jsx(b0.StrictMode, {
                  children: U.jsx(Yy, { agentId: v, projectId: f, customerCode: _ }),
                }),
              ),
            console.log('🎉 AGENQ mounted in Shadow DOM:', v));
        },
      });
  })();
})();
