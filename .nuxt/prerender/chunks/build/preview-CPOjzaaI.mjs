import { ref } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue/index.mjs';
import { parse } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/cookie-es/dist/index.mjs';
import { getRequestHeader, setCookie, getCookie, deleteCookie } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/h3/dist/index.mjs';
import destr from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/destr/dist/index.mjs';
import { isEqual } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/klona/dist/index.mjs';
import { u as useRoute, b as useNuxtApp } from './server.mjs';
import { u as useRequestEvent } from './ssr-BFzxi7jQ.mjs';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie("previewToken").value || false || void 0;
  };
  const setPreviewToken = (token) => {
    useCookie("previewToken").value = token;
    useRoute().query.preview = token || "";
  };
  const isEnabled = () => {
    const query = useRoute().query;
    if (Object.prototype.hasOwnProperty.call(query, "preview") && !query.preview) {
      return false;
    }
    if (query.preview || useCookie("previewToken").value) {
      return true;
    }
    return false;
  };
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  };
};

export { useContentPreview as u };
//# sourceMappingURL=preview-CPOjzaaI.mjs.map
