import { inject, shallowRef, unref, shallowReactive, nextTick, defineComponent, reactive, computed, h, provide, ref, watch, getCurrentInstance, watchEffect, onMounted, defineAsyncComponent, camelize, capitalize, isRef, customRef, getCurrentScope, onScopeDispose, toRef as toRef$1, readonly, onUnmounted, Transition, resolveComponent, TransitionGroup, useSSRContext, createSSRApp } from "vue";
var TAGS_ALLOWED = ["link", "meta", "script", "style", "noscript", "template"];
var TAGS_UNIQUE = ["title", "base"];
var resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (TAGS_UNIQUE.includes(tag)) {
    return tag;
  }
  if (!TAGS_ALLOWED.includes(tag)) {
    return null;
  }
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([
    tag,
    Object.entries(attrs).map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? [key, ""] : null;
      }
      return [key, value];
    }).filter((item) => item != null).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
    content
  ]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (identifier && !identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var ensureLeadingSlash = (str) => str[0] === "/" ? str : `/${str}`;
var ensureEndingSlash = (str) => str[str.length - 1] === "/" || str.endsWith(".html") ? str : `${str}/`;
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => {
  if (isLinkHttp(link)) {
    return true;
  }
  if (link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link)) {
    return true;
  }
  return false;
};
var isLinkWithProtocol = (link) => /^[a-z][a-z0-9+.-]*:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var normalizeRoutePath = (path) => {
  const [pathname, ...queryAndHash] = path.split(/(\?|#)/);
  if (!pathname || pathname.endsWith("/"))
    return path;
  let routePath = pathname.replace(/(^|\/)README.md$/i, "$1index.html");
  if (routePath.endsWith(".md")) {
    routePath = routePath.substring(0, routePath.length - 3) + ".html";
  } else if (!routePath.endsWith(".html")) {
    routePath = routePath + ".html";
  }
  if (routePath.endsWith("/index.html")) {
    routePath = routePath.substring(0, routePath.length - 10);
  }
  return routePath + queryAndHash.join("");
};
var removeEndingSlash = (str) => str[str.length - 1] === "/" ? str.slice(0, -1) : str;
var removeLeadingSlash = (str) => str[0] === "/" ? str.slice(1) : str;
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b2) => {
    const levelDelta = b2.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
var isString = (val) => typeof val === "string";
const redirects$1 = JSON.parse("{}");
const routes$1 = Object.fromEntries([
  ["/", { loader: () => import(
    /* webpackChunkName: "v-4ec95bbd" */
    "./assets/index.html-CoVaf_pl.js"
  ), meta: { "y": "h", "t": "主页", "i": "home" } }],
  ["/blog/", { loader: () => import(
    /* webpackChunkName: "v-6be3fd1e" */
    "./assets/index.html-jp0-7RpW.js"
  ), meta: { "y": "a", "t": "简介" } }],
  ["/demo/", { loader: () => import(
    /* webpackChunkName: "v-53116c3d" */
    "./assets/index.html-DJ2SlVbo.js"
  ), meta: { "y": "a", "t": "主要功能与配置演示", "i": "laptop-code" } }],
  ["/demo/disable.html", { loader: () => import(
    /* webpackChunkName: "v-c3be2b32" */
    "./assets/disable.html-DA5wsOv8.js"
  ), meta: { "y": "a", "t": "布局与功能禁用", "i": "gears", "O": 4 } }],
  ["/demo/encrypt.html", { loader: () => import(
    /* webpackChunkName: "v-64ab010a" */
    "./assets/encrypt.html-BTV7XXD3.js"
  ), meta: { "y": "a", "t": "密码加密的文章", "i": "lock" } }],
  ["/demo/layout.html", { loader: () => import(
    /* webpackChunkName: "v-74022db9" */
    "./assets/layout.html-S8C94WDj.js"
  ), meta: { "y": "a", "t": "布局", "i": "object-group", "O": 2 } }],
  ["/demo/markdown.html", { loader: () => import(
    /* webpackChunkName: "v-793f96d8" */
    "./assets/markdown.html-BS3LXMxL.js"
  ), meta: { "y": "a", "t": "Markdown 展示", "i": "fab fa-markdown", "O": 2 } }],
  ["/demo/page.html", { loader: () => import(
    /* webpackChunkName: "v-124387f4" */
    "./assets/page.html-C2yNK5Xa.js"
  ), meta: { "y": "a", "t": "页面配置", "i": "file", "O": 3 } }],
  ["/guide/", { loader: () => import(
    /* webpackChunkName: "v-cd2467a0" */
    "./assets/index.html-BFvkV8MR.js"
  ), meta: { "y": "a", "t": "简介", "i": "lightbulb" } }],
  ["/blog/music_updata_log/1-10.html", { loader: () => import(
    /* webpackChunkName: "v-ca2259ac" */
    "./assets/1-10.html-Dqeey_UD.js"
  ), meta: { "y": "a", "t": "第1-10次更新", "O": -1 } }],
  ["/blog/music_updata_log/", { loader: () => import(
    /* webpackChunkName: "v-0e1ab3ca" */
    "./assets/index.html-DCn-IfEl.js"
  ), meta: { "y": "a", "t": "音乐更新", "O": 3 } }],
  ["/blog/music_updata_log/introduction.html", { loader: () => import(
    /* webpackChunkName: "v-ce9010aa" */
    "./assets/introduction.html-6bOkpcox.js"
  ), meta: { "y": "a", "t": "简介", "O": 1 } }],
  ["/blog/photo/", { loader: () => import(
    /* webpackChunkName: "v-a04fc04a" */
    "./assets/index.html-DTJXDUcN.js"
  ), meta: { "y": "a", "t": "表情/图片", "O": 1 } }],
  ["/blog/photo/intro.html", { loader: () => import(
    /* webpackChunkName: "v-637f5afe" */
    "./assets/intro.html-DRGLttQh.js"
  ), meta: { "y": "a", "t": "简介", "O": 1 } }],
  ["/blog/the_second_high_school/", { loader: () => import(
    /* webpackChunkName: "v-7367e6ea" */
    "./assets/index.html-BNlppgaW.js"
  ), meta: { "y": "a", "t": "二中周报", "O": 2 } }],
  ["/guide/someapp/1-DDNS-GO.html", { loader: () => import(
    /* webpackChunkName: "v-57887290" */
    "./assets/1-DDNS-GO.html-BsdmBMk_.js"
  ), meta: { "y": "a", "t": "1.DDNS-GO简单教程", "O": -1 } }],
  ["/guide/someapp/2-test.html", { loader: () => import(
    /* webpackChunkName: "v-7a267a81" */
    "./assets/2-test.html-qXgjkhO-.js"
  ), meta: { "y": "a", "t": "2.test", "O": -2 } }],
  ["/guide/someapp/", { loader: () => import(
    /* webpackChunkName: "v-06a475d2" */
    "./assets/index.html-D9Zi25mo.js"
  ), meta: { "y": "a", "t": "一些软件教程", "O": 1 } }],
  ["/blog/photo/2024/2024y2m.html", { loader: () => import(
    /* webpackChunkName: "v-d7229980" */
    "./assets/2024y2m.html-DI7734wB.js"
  ), meta: { "y": "a", "t": "2月", "O": -2 } }],
  ["/blog/photo/2024/", { loader: () => import(
    /* webpackChunkName: "v-05e56fa2" */
    "./assets/index.html-EEjUiJ9h.js"
  ), meta: { "y": "a", "t": "2024年", "O": -1 } }],
  ["/blog/photo/2025/", { loader: () => import(
    /* webpackChunkName: "v-0d971501" */
    "./assets/index.html-cupfrekc.js"
  ), meta: { "y": "a", "t": "2025年", "O": -2 } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "v-8fe89ed2" */
    "./assets/404.html-W_11ty4r.js"
  ), meta: { "y": "p", "t": "" } }]
]);
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e2) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e2) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray$1 = Array.isArray;
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function isSameRouteLocation(stringifyQuery2, a, b2) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b2.params) && stringifyQuery2(a.query) === stringifyQuery2(b2.query) && a.hash === b2.hash;
}
function isSameRouteRecord(a, b2) {
  return (a.aliasOf || a) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a, b2) {
  if (Object.keys(a).length !== Object.keys(b2).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b2) {
  return isArray$1(a) ? isEquivalentArray(a, b2) : isArray$1(b2) ? isEquivalentArray(b2, a) : a === b2;
}
function isEquivalentArray(a, b2) {
  return isArray$1(b2) ? a.length === b2.length && a.every((value, i2) => value === b2[i2]) : a.length === 1 && a[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (process.env.NODE_ENV !== "production" && !from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
const START = "";
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err2) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      process.env.NODE_ENV !== "production" && warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
function createMemoryHistory(base = "") {
  let listeners = [];
  let queue2 = [START];
  let position = 0;
  base = normalizeBase(base);
  function setLocation(location2) {
    position++;
    if (position !== queue2.length) {
      queue2.splice(position);
    }
    queue2.push(location2);
  }
  function triggerListeners(to, from, { direction, delta }) {
    const info = {
      direction,
      delta,
      type: NavigationType.pop
    };
    for (const callback of listeners) {
      callback(to, from, info);
    }
  }
  const routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base,
    createHref: createHref.bind(null, base),
    replace(to) {
      queue2.splice(position--, 1);
      setLocation(to);
    },
    push(to, data) {
      setLocation(to);
    },
    listen(callback) {
      listeners.push(callback);
      return () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
    },
    destroy() {
      listeners = [];
      queue2 = [START];
      position = 0;
    },
    go(delta, shouldTrigger = true) {
      const from = this.location;
      const direction = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        delta < 0 ? NavigationDirection.back : NavigationDirection.forward
      );
      position = Math.max(0, Math.min(position + delta, queue2.length - 1));
      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction,
          delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => queue2[position]
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const ErrorTypeMessages = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type, params) {
  if (process.env.NODE_ENV !== "production" || false) {
    return assign(new Error(ErrorTypeMessages[type](params)), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  } else {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if ("path" in to)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location2[key] = to[key];
  }
  return JSON.stringify(location2, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys2 = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys2.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err2) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err2.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys2[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys: keys2,
    parse,
    stringify
  };
}
function compareScoreArray(a, b2) {
  let i2 = 0;
  while (i2 < a.length && i2 < b2.length) {
    const diff = b2[i2] - a[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a.length < b2.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b2) {
  let i2 = 0;
  const aScore = a.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${path}" should be "/${path}".` : `Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  if (process.env.NODE_ENV !== "production") {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    if (process.env.NODE_ENV !== "production") {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
    }
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (process.env.NODE_ENV !== "production" && normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (process.env.NODE_ENV !== "production" && parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        if (process.env.NODE_ENV !== "production") {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      if (process.env.NODE_ENV !== "production") {
        const invalidParams = Object.keys(location2.params || {}).filter((paramName) => !matcher.keys.find((k2) => k2.name === paramName));
        if (invalidParams.length) {
          warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
      }
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          matcher.keys.filter((k2) => !k2.optional).map((k2) => k2.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k2) => k2.name))
      );
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      if (process.env.NODE_ENV !== "production" && !path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
      }
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys2) {
  const newParams = {};
  for (const key of keys2) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a, b2) {
  return a.name === b2.name && a.optional === b2.optional && a.repeatable === b2.repeatable;
}
function checkSameParams(a, b2) {
  for (const key of a.keys) {
    if (!key.optional && !b2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b2.keys) {
    if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
}
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err2) {
    process.env.NODE_ENV !== "production" && warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
const viewDepthKey = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const routerKey = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const routeLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
const routerViewLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function useCallbacks() {
  let handlers2 = [];
  function add(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1)
        handlers2.splice(i2, 1);
    };
  }
  function reset() {
    handlers2 = [];
  }
  return {
    add,
    list: () => handlers2.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, process.env.NODE_ENV !== "production" ? canOnlyBeCalledOnce(next, to, from) : next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (process.env.NODE_ENV !== "production" && guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err2) => reject(err2));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    if (process.env.NODE_ENV !== "production" && !record.components && !record.children.length) {
      warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
    }
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (process.env.NODE_ENV !== "production") {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise = rawComponent;
          rawComponent = () => promise;
        } else if (rawComponent.__asyncLoader && // warn only once per component
        !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        if (process.env.NODE_ENV !== "production" && !("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent$1(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent$1(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    process.env.NODE_ENV !== "production" && warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser && component.ref) {
        const info = {
          depth: depth.value,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = isArray$1(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (isArray$1(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("❌");
      } else {
        data.status = formatDisplay("✅");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes2 = matcher.getRoutes().filter((route) => !route.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !route.parent.record.components);
      routes2.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes2 = routes2.filter((route) => (
          // save matches state based on the payload
          isRouteMatching(route, payload.filter.toLowerCase())
        ));
      }
      routes2.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes2.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes2 = matcher.getRoutes();
        const route = routes2.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: "meta",
      value: route.record.meta
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys2) {
  const ret = {};
  for (const key in obj) {
    if (!keys2.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (process.env.NODE_ENV !== "production" && !routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      if (process.env.NODE_ENV !== "production") {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      if (process.env.NODE_ENV !== "production" && "params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (process.env.NODE_ENV !== "production" && hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    if (process.env.NODE_ENV !== "production") {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      if (process.env.NODE_ENV !== "production" && !("path" in newTargetLocation) && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          if (process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure2.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? (
            // @ts-expect-error
            redirectedFrom._count + 1
          ) : 1) > 30) {
            warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err2) => isNavigationFailure(
      err2,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err2 : Promise.reject(err2));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening)
        return;
      const toLocation = resolve(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err2) {
    if (!ready) {
      ready = !err2;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err2 ? reject(err2) : resolve2());
      readyHandlers.reset();
    }
    return err2;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err2) => triggerError(err2, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err2) => {
          if (process.env.NODE_ENV !== "production")
            warn("Unexpected error when starting the router:", err2);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutes = () => useClientData().routes;
var useSiteData = () => useClientData().siteData;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (path) => {
  const normalizedPath = normalizeRoutePath(path);
  if (routes.value[normalizedPath])
    return normalizedPath;
  const encodedPath = encodeURI(normalizedPath);
  if (routes.value[encodedPath])
    return encodedPath;
  return redirects.value[normalizedPath] || normalizedPath;
};
var resolveRoute = (path) => {
  const routePath = resolveRoutePath(path);
  const route = routes.value[routePath] ?? {
    ...routes.value["/404.html"],
    notFound: true
  };
  return {
    path: routePath,
    notFound: false,
    ...route
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path)
        return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(() => route.loader().then(({ comp }) => comp));
    });
    return () => h(ContentComponent.value);
  }
});
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
    return;
  if (event.defaultPrevented)
    return;
  if (event.button !== void 0 && event.button !== 0)
    return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target == null ? void 0 : target.match(/\b_blank\b/i))
      return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = ({ active = false, activeClass = "route-link-active", to, ...attrs }, { slots }) => {
  var _a2;
  const router = useRouter();
  const path = withBase(resolveRoutePath(to));
  return h(
    "a",
    {
      ...attrs,
      class: ["route-link", { [activeClass]: active }],
      href: path,
      onClick: (event = {}) => {
        guardEvent(event) ? router.push(to).catch() : Promise.resolve();
      }
    },
    (_a2 = slots.default) == null ? void 0 : _a2.call(slots)
  );
};
RouteLink.displayName = "RouteLink";
RouteLink.props = {
  active: Boolean,
  activeClass: String,
  to: String
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (siteData2, routeLocale) => {
    var _a2;
    return {
      ...siteData2,
      ...siteData2.locales[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        ...((_a2 = siteData2.locales[routeLocale]) == null ? void 0 : _a2.head) ?? [],
        ...siteData2.head ?? []
      ]
    };
  }
});
const clientConfig0 = {};
var defineClientConfig = (clientConfig = {}) => clientConfig;
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const useRoutePaths = () => {
  const routes2 = useRoutes();
  return computed(() => Object.keys(routes2.value));
};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return { b: b2, r: r2 };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$2 = 0; i$2 < 32768; ++i$2) {
  var x$4 = (i$2 & 43690) >> 1 | (i$2 & 21845) << 1;
  x$4 = (x$4 & 52428) >> 2 | (x$4 & 13107) << 2;
  x$4 = (x$4 & 61680) >> 4 | (x$4 & 3855) << 4;
  rev[i$2] = ((x$4 & 65280) >> 8 | (x$4 & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$2 = 0; i$2 < 144; ++i$2)
  flt[i$2] = 8;
for (var i$2 = 144; i$2 < 256; ++i$2)
  flt[i$2] = 9;
for (var i$2 = 256; i$2 < 280; ++i$2)
  flt[i$2] = 7;
for (var i$2 = 280; i$2 < 288; ++i$2)
  flt[i$2] = 8;
var fdt = new u8(32);
for (var i$2 = 0; i$2 < 32; ++i$2)
  fdt[i$2] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m2 = a[0];
  for (var i2 = 1; i2 < a.length; ++i2) {
    if (a[i2] > m2)
      m2 = a[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  return new u8(v2.subarray(s2, e2));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, st2, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st2.i != 2;
  var noSt = st2.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt2 = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt2);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt2, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt2 = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt2 += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        if (bt2 < dt2) {
          var shift = dl - dt2, dend = Math.min(dt2, end);
          if (shift + bt2 < 0)
            err(3);
          for (; bt2 < dend; ++bt2)
            buf[bt2] = dict[shift + bt2];
        }
        for (; bt2 < end; ++bt2)
          buf[bt2] = buf[bt2 - dt2];
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 != buf.length && noBuf ? slc(buf, 0, bt2) : buf.subarray(0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return { s: r2, r: slc(d2, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s2;
  }
}
const decodeData = (base64) => {
  const binary = Buffer.from(base64, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(binary, true)));
};
const hasGlobalComponent = (name, app) => {
  var _a2;
  const globalComponents = (_a2 = (app == null ? void 0 : app._instance) || getCurrentInstance()) == null ? void 0 : _a2.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};
const isDef = (val) => typeof val !== "undefined";
const isNumber = (val) => typeof val === "number";
const isArray = Array.isArray;
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const endsWith = (str, suffix) => isString(str) && str.endsWith(suffix);
const entries = Object.entries;
const fromEntries = Object.fromEntries;
const keys = Object.keys;
const getDate = (input) => {
  if (input) {
    if (typeof input === "number")
      return new Date(input);
    const date = Date.parse(input.toString());
    if (!Number.isNaN(date))
      return new Date(date);
  }
  return null;
};
const isLinkAbsolute = (test) => startsWith(test, "/");
const r = ({ name: e2 = "", color: n2 = "currentColor" }, { slots: t2 }) => {
  var _a2;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${e2} icon` }, (_a2 = t2.default) == null ? void 0 : _a2.call(t2));
};
r.displayName = "IconBase";
const v$3 = ({ size: e2 = 48, stroke: n2 = 4, wrapper: t2 = true, height: i2 = 2 * e2 }) => {
  const o2 = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return t2 ? h("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, o2) : o2;
};
v$3.displayName = "LoadingIcon";
const T$1 = (e2, { slots: n2 }) => {
  var _a2;
  return (_a2 = n2.default) == null ? void 0 : _a2.call(n2);
}, y$1 = () => h(r, { name: "github" }, () => h("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
y$1.displayName = "GitHubIcon";
const E$1 = () => h(r, { name: "gitlab" }, () => h("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
E$1.displayName = "GitLabIcon";
const k$2 = () => h(r, { name: "gitee" }, () => h("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
k$2.displayName = "GiteeIcon";
const I$3 = () => h(r, { name: "bitbucket" }, () => h("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
I$3.displayName = "BitbucketIcon";
const x$3 = () => h(r, { name: "source" }, () => h("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
x$3.displayName = "SourceIcon";
const B$1 = (e2, n2) => {
  var _a2;
  const t2 = (_a2 = (n2 == null ? void 0 : n2._instance) || getCurrentInstance()) == null ? void 0 : _a2.appContext.components;
  return t2 ? e2 in t2 || camelize(e2) in t2 || capitalize(camelize(e2)) in t2 : false;
};
const Y$1 = (e2, n2) => {
  let t2 = 1;
  for (let i2 = 0; i2 < e2.length; i2++)
    t2 += e2.charCodeAt(i2), t2 += t2 << 10, t2 ^= t2 >> 6;
  return t2 += t2 << 3, t2 ^= t2 >> 11, t2 % n2;
};
const z$4 = /#.*$/u, C$3 = (e2) => {
  const n2 = z$4.exec(e2);
  return n2 ? n2[0] : "";
}, m$5 = (e2) => decodeURI(e2).replace(z$4, "").replace(/\/index\.html$/iu, "/").replace(/\.html$/iu, "").replace(/(README|index)?\.md$/iu, ""), J$1 = (e2, n2) => {
  if (!isDef(n2))
    return false;
  const t2 = m$5(e2.path), i2 = m$5(n2), o2 = C$3(n2);
  return o2 ? o2 === e2.hash && (!i2 || t2 === i2) : t2 === i2;
};
const X$1 = (e2) => isLinkHttp(e2) ? e2 : `https://github.com/${e2}`, Z$1 = (e2) => !isLinkHttp(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null;
var ne = (e2) => Object.prototype.toString.call(e2) === "[object Object]", c = (e2) => typeof e2 == "string";
const A$5 = Array.isArray, N$2 = (e2) => ne(e2) && c(e2.name), ie = (e2, n2 = false) => e2 ? A$5(e2) ? e2.map((t2) => c(t2) ? { name: t2 } : N$2(t2) ? t2 : null).filter((t2) => t2 !== null) : c(e2) ? [{ name: e2 }] : N$2(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], d$2 = (e2, n2) => {
  if (e2) {
    if (A$5(e2) && e2.every(c))
      return e2;
    if (c(e2))
      return [e2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, oe = (e2) => d$2(e2, "category"), se = (e2) => d$2(e2, "tag");
function computedWithControl(source, fn) {
  let v2 = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  watch(source, update, { flush: "sync" });
  const get = typeof fn === "function" ? fn : fn.get;
  const set = typeof fn === "function" ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v2 = get();
          dirty.value = false;
        }
        track();
        return v2;
      },
      set(v22) {
        set == null ? void 0 : set(v22);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a2, _b2;
  return isClient && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration2 = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration2 <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration2 && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration2 - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration2);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({ get: r2, set: noop }))) : ref(r2);
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onUnmounted(fn, target);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
function unrefElement(elRef) {
  var _a2;
  const plain = toValue(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
const defaultNavigator = isClient ? window.navigator : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator: navigator2 = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator2 && "permissions" in navigator2);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator2.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e2) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}
function useClipboard(options = {}) {
  const {
    navigator: navigator2 = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator2 && "clipboard" in navigator2);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value && permissionRead.value !== "denied") {
      navigator2.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value && permissionWrite.value !== "denied")
        await navigator2.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta2 = document.createElement("textarea");
    ta2.value = value != null ? value : "";
    ta2.style.position = "absolute";
    ta2.style.opacity = "0";
    document.body.appendChild(ta2);
    ta2.select();
    document.execCommand("copy");
    ta2.remove();
  }
  function legacyRead() {
    var _a2, _b2, _c;
    return (_c = (_b2 = (_a2 = document == null ? void 0 : document.getSelection) == null ? void 0 : _a2.call(document)) == null ? void 0 : _b2.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v2) {
    try {
      if (v2 == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v2);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      cleanup();
      if (isSupported.value && window2 && el) {
        observer = new MutationObserver(callback);
        observer.observe(el, mutationOptions);
      }
    },
    { immediate: true }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]);
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post", deep: true }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = unrefElement(target)) == null ? void 0 : _a2.namespaceURI) == null ? void 0 : _b2.includes("svg");
  });
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window2 && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const styles = window2.getComputedStyle($elem);
          width.value = Number.parseFloat(styles.width);
          height.value = Number.parseFloat(styles.height);
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
  const {
    document: document2 = defaultDocument,
    autoExit = false
  } = options;
  const targetRef = computed(() => {
    var _a2;
    return (_a2 = unrefElement(target)) != null ? _a2 : document2 == null ? void 0 : document2.querySelector("html");
  });
  const isFullscreen = ref(false);
  const requestMethod = computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const exitMethod = computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const fullscreenEnabled = computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m2) => document2 && m2 in document2);
  const isSupported = useSupported(() => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod)
      return (document2 == null ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) {
      if (document2 && document2[fullscreenEnabled.value] != null) {
        return document2[fullscreenEnabled.value];
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
          return Boolean(target2[fullscreenEnabled.value]);
        }
      }
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value)
      return;
    if (exitMethod.value) {
      if ((document2 == null ? void 0 : document2[exitMethod.value]) != null) {
        await document2[exitMethod.value]();
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
          await target2[exitMethod.value]();
      }
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value)
      return;
    if (isElementFullScreen())
      await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
      isFullscreen.value = isElementFullScreenValue;
  };
  useEventListener(document2, eventHandlers, handlerCallback, false);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el) {
      el = document2.createElement("script");
      el.type = type;
      el.async = async;
      el.src = toValue(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document2.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el)
      document2.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e2 = rawEvent || window.event;
  const _target = e2.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, initialOverflow);
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e2) => {
          preventDefault(e2);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    var _a2;
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = (_a2 = elInitialOverflow.get(el)) != null ? _a2 : "";
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v2) {
      if (v2)
        lock();
      else
        unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.sessionStorage, options);
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, behavior = "auto" } = options;
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window2.scrollX);
  const internalY = ref(window2.scrollY);
  const x2 = computed({
    get() {
      return internalX.value;
    },
    set(x22) {
      scrollTo({ left: x22, behavior });
    }
  });
  const y2 = computed({
    get() {
      return internalY.value;
    },
    set(y22) {
      scrollTo({ top: y22, behavior });
    }
  });
  useEventListener(
    window2,
    "scroll",
    () => {
      internalX.value = window2.scrollX;
      internalY.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x: x2, y: y2 };
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
var m$4 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const s2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"fas fa-"}${o2.icon}`;
    return n2.push("fa-fw fa-sm"), n2.push(o2.icon.includes(" ") ? o2.icon : t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), keys(n2).length ? n2 : null;
  });
  return () => o2.icon ? h("span", { key: o2.icon, class: s2.value, style: r2.value, ...{} }) : null;
} });
const t$1 = ({ type: a = "info", text: l2 = "", vertical: e2, color: o2 }, { slots: r2 }) => {
  var _a2;
  return h("span", { class: ["vp-badge", a, { diy: o2 }], style: { verticalAlign: e2 ?? false, backgroundColor: o2 ?? false } }, ((_a2 = r2.default) == null ? void 0 : _a2.call(r2)) || l2);
};
t$1.displayName = "Badge";
const e$3 = ({ title: i2, desc: d2 = "", logo: l2, background: t2, color: o2, link: s2 }) => {
  const c2 = [l2 ? h("img", { class: "vp-card-logo", src: withBase(l2), loading: "lazy", "no-view": "" }) : null, h("div", { class: "vp-card-content" }, [h("div", { class: "vp-card-title", innerHTML: i2 }), h("hr"), h("div", { class: "vp-card-desc", innerHTML: d2 })])], a = {};
  return t2 && (a.background = t2), o2 && (a.color = o2), s2 ? isLinkExternal(s2) ? h("a", { class: "vp-card", href: s2, target: "_blank", style: a }, c2) : h(RouteLink, { to: s2, class: "vp-card", style: a }, () => c2) : h("div", { class: "vp-card", style: a }, c2);
};
e$3.displayName = "VPCard";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!B$1("FontIcon"))
      app.component("FontIcon", m$4);
    if (!B$1("Badge"))
      app.component("Badge", t$1);
    if (!B$1("VPCard"))
      app.component("VPCard", e$3);
  },
  setup: () => {
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
  },
  rootComponents: []
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
let catalogGetter = (meta) => isString(meta.title) ? { title: meta.title } : null;
const catalogInfoSymbol = Symbol("");
const defineCatalogInfoGetter = (getter) => {
  catalogGetter = getter;
};
const useCatalogInfoGetter = () => inject(catalogInfoSymbol);
const injectCatalogInfoGetter = (app) => {
  app.provide(catalogInfoSymbol, catalogGetter);
};
var define_CATALOG_LOCALES_default = { "/": { title: "目录", empty: "暂无目录" } };
const Catalog = defineComponent({
  name: "Catalog",
  props: {
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
      type: String,
      default: ""
    },
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
      type: Number,
      default: 3
    },
    /**
     * Whether show index for catalog
     *
     * 目录是否显示索引
     */
    index: Boolean,
    /**
     * Whether hide `Category` title
     *
     * 是否隐藏 `目录` 标题
     *
     * @default false
     */
    hideHeading: Boolean
  },
  setup(props) {
    const catalogInfoGetter = useCatalogInfoGetter();
    const locale = useLocaleConfig(define_CATALOG_LOCALES_default);
    const page = usePageData();
    const routes2 = useRoutes();
    const siteData2 = useSiteData();
    const getCatalogData = () => entries(routes2.value).map(([path, { meta }]) => {
      const info = catalogInfoGetter(meta);
      if (!info)
        return null;
      const level = path.split("/").length;
      return {
        level: endsWith(path, "/") ? level - 2 : level - 1,
        base: path.replace(/\/[^/]+\/?$/, "/"),
        path,
        ...info
      };
    }).filter((item) => isPlainObject(item) && isString(item.title));
    const catalogInfo = shallowRef(getCatalogData());
    const catalogData = computed(() => {
      const base = props.base ? ensureLeadingSlash(ensureEndingSlash(props.base)) : page.value.path.replace(/\/[^/]+$/, "/");
      const baseDepth = base.split("/").length - 2;
      const result = [];
      catalogInfo.value.filter(({ level, path }) => {
        if (!startsWith(path, base) || path === base)
          return false;
        if (base === "/") {
          const otherLocales = keys(siteData2.value.locales).filter((item) => item !== "/");
          if (path === "/404.html" || otherLocales.some((localePath) => startsWith(path, localePath)))
            return false;
        }
        return (
          // level is less than or equal to max level
          level - baseDepth <= props.level
        );
      }).sort(({ title: titleA, level: levelA, order: orderA }, { title: titleB, level: levelB, order: orderB }) => {
        const level = levelA - levelB;
        if (level)
          return level;
        if (!isNumber(orderA)) {
          if (!isNumber(orderB))
            return titleA.localeCompare(titleB);
          return orderB;
        }
        if (!isNumber(orderB))
          return orderA;
        if (orderA > 0) {
          if (orderB > 0)
            return orderA - orderB;
          return -1;
        }
        if (orderB < 0)
          return orderA - orderB;
        return 1;
      }).forEach((info) => {
        var _a2;
        const { base: base2, level } = info;
        switch (level - baseDepth) {
          case 1: {
            result.push(info);
            break;
          }
          case 2: {
            const parent = result.find((item) => item.path === base2);
            if (parent)
              (parent.children ?? (parent.children = [])).push(info);
            break;
          }
          default: {
            const grandParent = result.find((item) => item.path === base2.replace(/\/[^/]+\/$/, "/"));
            if (grandParent) {
              const parent = (_a2 = grandParent.children) == null ? void 0 : _a2.find((item) => item.path === base2);
              if (parent)
                (parent.children ?? (parent.children = [])).push(info);
            }
          }
        }
      });
      return result;
    });
    return () => {
      const isDeep = catalogData.value.some((item) => item.children);
      return h("div", { class: ["vp-catalog-wrapper", { index: props.index }] }, [
        props.hideHeading ? null : h("h2", { class: "vp-catalog-main-title" }, locale.value.title),
        catalogData.value.length ? h(props.index ? "ol" : "ul", { class: ["vp-catalogs", { deep: isDeep }] }, catalogData.value.map(({ children = [], title, path, content }) => {
          const childLink = h(RouteLink, { class: "vp-catalog-title", to: path }, () => content ? h(content) : title);
          return h("li", { class: "vp-catalog" }, isDeep ? [
            h("h3", {
              id: title,
              class: [
                "vp-catalog-child-title",
                { "has-children": children.length }
              ]
            }, [
              h("a", {
                "href": `#${title}`,
                "class": "vp-catalog-header-anchor",
                "aria-hidden": true
              }, "#"),
              childLink
            ]),
            children.length ? h(props.index ? "ol" : "ul", { class: "vp-child-catalogs" }, children.map(({ children: children2 = [], content: content2, path: path2, title: title2 }) => h("li", { class: "vp-child-catalog" }, [
              h("div", {
                class: [
                  "vp-catalog-sub-title",
                  {
                    "has-children": children2.length
                  }
                ]
              }, [
                h("a", {
                  href: `#${title2}`,
                  class: "vp-catalog-header-anchor"
                }, "#"),
                h(RouteLink, {
                  class: "vp-catalog-title",
                  to: path2
                }, () => content2 ? h(content2) : title2)
              ]),
              children2.length ? h(props.index ? "ol" : "div", {
                class: props.index ? "vp-sub-catalogs" : "vp-sub-catalogs-wrapper"
              }, children2.map(({ content: content3, path: path3, title: title3 }) => props.index ? h("li", {
                class: "vp-sub-catalog"
              }, h(RouteLink, { to: path3 }, () => content3 ? h(content3) : title3)) : h(RouteLink, {
                class: "vp-sub-catalog-link",
                to: path3
              }, () => content3 ? h(content3) : title3))) : null
            ]))) : null
          ] : h("div", { class: "vp-catalog-child-title" }, childLink));
        })) : h("p", { class: "vp-empty-catalog" }, locale.value.empty)
      ]);
    };
  }
});
const clientConfig3 = defineClientConfig({
  enhance: ({ app }) => {
    injectCatalogInfoGetter(app);
    if (!hasGlobalComponent("Catalog", app))
      app.component("Catalog", Catalog);
  }
});
var define_BACK_TO_TOP_LOCALES_default = { "/": { backToTop: "返回顶部" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup(props) {
    const pageFrontmatter = usePageFrontmatter();
    const locale = useLocaleConfig(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize();
    const { y: y2 } = useWindowScroll();
    const show = computed(() => pageFrontmatter.value.backToTop !== false && y2.value > 100);
    const progress = computed(() => y2.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h(Transition, { name: "back-to-top" }, () => show.value ? h("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h("svg", h("circle", {
        cx: "50%",
        cy: "50%",
        style: {
          "stroke-dasharray": `calc(${Math.PI * progress.value}% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${4 * Math.PI}px)`
        }
      }))),
      h("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const clientConfig4 = defineClientConfig({
  rootComponents: [BackToTop]
});
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
var define_EXTERNAL_LINK_ICON_LOCALES_default = {};
const locales$2 = define_EXTERNAL_LINK_ICON_LOCALES_default;
const clientConfig5 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales: locales$2 }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress.isStarted();
    n2 = clamp(n2, nprogress.settings.minimum, 1);
    nprogress.status = n2 === 1 ? null : n2;
    const progress = nprogress.render(!started);
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const speed = nprogress.settings.speed;
    const ease = nprogress.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.status === "number",
  start: () => {
    if (!nprogress.status)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.status)
          return;
        nprogress.trickle();
        work();
      }, nprogress.settings.trickleSpeed);
    };
    if (nprogress.settings.trickle)
      work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.status)
      return nprogress;
    return nprogress.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress.status;
    if (!n2) {
      return nprogress.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress.set(n2);
  },
  trickle: () => nprogress.inc(Math.random() * nprogress.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress.settings.template;
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress.status || 0);
    const parent = document.querySelector(nprogress.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = /* @__PURE__ */ function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const clientConfig6 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$.fWDO5AYD6t30k22AB/5n.HBT4z602oj6VHbNswtGQx/PHvWBTSzS"]}},"author":{"name":"yyyyt","url":"https://docs.yyyyt.eu.org"},"logo":"这里填入链接","repo":"yyyytawa/yyyytawa.github.io","docsDir":"src","footer":"awa","displayFooter":true,"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"文档","icon":"book","prefix":"guide/"},{"text":"Blog","prefix":"blog/"},{"text":"Github主页","icon":"/assets/image/github-dark.svg","link":"https://github.com/yyyytawa"}],"sidebar":{"/":["",{"text":"文档","icon":"book","prefix":"guide/","children":"structure"},{"text":"Blog","prefix":"blog/","children":"structure"}]}}}}');
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const clientConfig7 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const clientData = app._context.provides[clientDataSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
var define_COMMENT_OPTIONS_default = { provider: "Giscus", lightTheme: "https://unpkg.com/vuepress-theme-hope@2.0.0-rc.23/templates/giscus/light.css", darkTheme: "https://unpkg.com/vuepress-theme-hope@2.0.0-rc.23/templates/giscus/dark.css", repo: "yyyytawa/yyyytawa.github.io", repoId: "R_kgDOLKM3yw", category: "Announcements", categoryId: "DIC_kwDOLKM3y84Cc2zJ" };
const e$2 = define_COMMENT_OPTIONS_default;
let n$2 = e$2;
const t = Symbol(""), s = () => inject(t), p$1 = s, g$1 = (o2) => {
  o2.provide(t, n$2);
};
const p = ["ar", "ca", "de", "en", "eo", "es", "fa", "fr", "he", "id", "it", "ja", "ko", "nl", "pl", "pt", "ro", "ru", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
var z$3 = defineComponent({ name: "GiscusComment", props: { identifier: { type: String, required: true }, darkmode: Boolean }, setup(r2) {
  const e2 = p$1(), t2 = usePageLang(), s2 = !!(e2.repo && e2.repoId && e2.category && e2.categoryId), { repo: d2, repoId: u2, category: m2, categoryId: c2 } = e2, i2 = ref(false), l2 = computed(() => {
    if (p.includes(t2.value))
      return t2.value;
    const a = t2.value.split("-")[0];
    return p.includes(a) ? a : "en";
  }), g2 = computed(() => ({ repo: d2, repoId: u2, category: m2, categoryId: c2, lang: l2.value, theme: r2.darkmode ? e2.darkTheme || "dark" : e2.lightTheme || "light", mapping: e2.mapping || "pathname", term: r2.identifier, inputPosition: e2.inputPosition || "top", reactionsEnabled: e2.reactionsEnabled === false ? "0" : "1", strict: e2.strict === false ? "0" : "1", loading: e2.lazyLoading === false ? "eager" : "lazy", emitMetadata: "0" }));
  return onMounted(async () => {
    await import("giscus"), i2.value = true;
  }), () => s2 ? h("div", { id: "comment", class: ["giscus-wrapper", { "input-top": e2.inputPosition !== "bottom" }] }, i2.value ? h("giscus-widget", g2.value) : h(v$3)) : null;
} });
var v$2 = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const m2 = s(), n2 = usePageData(), o2 = usePageFrontmatter(), t2 = m2.comment !== false, a = computed(() => o2.value.comment || t2 && o2.value.comment !== false);
  return () => h(z$3, { identifier: o2.value.commentID || n2.value.path, darkmode: e2.darkmode, style: { display: a.value ? "block" : "none" } });
} }), C$2 = defineClientConfig({ enhance: ({ app: e2 }) => {
  g$1(e2), e2.component("CommentService", v$2);
} });
const MOBILE_USERAGENT_REGEXP = /\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i;
const isMobile = () => typeof window !== "undefined" && window.navigator && "userAgent" in window.navigator && MOBILE_USERAGENT_REGEXP.test(navigator.userAgent);
const timeoutIdMap = /* @__PURE__ */ new Map();
const useCopyCode = ({ delay: delay2 = 500, duration: duration2 = 2e3, locales: locales2, selector: selector2, showInMobile: showInMobile2 }) => {
  const { copy } = useClipboard({ legacy: true });
  const locale = useLocaleConfig(locales2);
  const page = usePageData();
  const insertCopyButton = (codeBlockElement) => {
    if (!codeBlockElement.hasAttribute("copy-code-registered")) {
      const copyElement = document.createElement("button");
      copyElement.type = "button";
      copyElement.classList.add("vp-copy-code-button");
      copyElement.innerHTML = '<div class="vp-copy-icon" />';
      copyElement.setAttribute("aria-label", locale.value.copy);
      copyElement.setAttribute("data-copied", locale.value.copied);
      if (codeBlockElement.parentElement)
        codeBlockElement.parentElement.insertBefore(copyElement, codeBlockElement);
      codeBlockElement.setAttribute("copy-code-registered", "");
    }
  };
  const appendCopyButton = () => {
    nextTick().then(() => setTimeout(() => {
      selector2.forEach((item) => {
        document.querySelectorAll(item).forEach(insertCopyButton);
      });
    }, delay2));
  };
  const copyContent = (codeContainer, codeContent, button) => {
    let { innerText: text = "" } = codeContent;
    if (
      // is shell
      /language-(shellscript|shell|bash|sh|zsh)/.test(codeContainer.classList.toString())
    )
      text = text.replace(/^ *(\$|>) /gm, "");
    copy(text).then(() => {
      button.classList.add("copied");
      clearTimeout(timeoutIdMap.get(button));
      const timeoutId = setTimeout(() => {
        button.classList.remove("copied");
        button.blur();
        timeoutIdMap.delete(button);
      }, duration2);
      timeoutIdMap.set(button, timeoutId);
    });
  };
  onMounted(() => {
    const enabled = !isMobile() || showInMobile2;
    if (enabled)
      appendCopyButton();
    useEventListener("click", (event) => {
      const el = event.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const codeContainer = el.parentElement;
        const preBlock = el.nextElementSibling;
        if (preBlock)
          copyContent(codeContainer, preBlock, el);
      } else if (el.matches('div[class*="language-"] div.vp-copy-icon')) {
        const buttonElement = el.parentElement;
        const codeContainer = buttonElement.parentElement;
        const preBlock = buttonElement.nextElementSibling;
        if (preBlock)
          copyContent(codeContainer, preBlock, buttonElement);
      }
    });
    watch(() => page.value.path, () => {
      if (enabled)
        appendCopyButton();
    });
  });
};
var define_CC_LOCALES_default = { "/": { copy: "复制代码", copied: "已复制" } };
var define_CC_SELECTOR_default = ['.theme-hope-content div[class*="language-"] pre'];
const delay$1 = 500;
const duration = 2e3;
const locales$1 = define_CC_LOCALES_default;
const selector$1 = define_CC_SELECTOR_default;
const showInMobile = false;
const clientConfig9 = defineClientConfig({
  setup: () => {
    useCopyCode({
      selector: selector$1,
      locales: locales$1,
      duration,
      delay: delay$1,
      showInMobile
    });
  }
});
const i$1 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var A$4 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a, { slots: r2 }) {
  const l2 = ref(a.active), u2 = shallowRef([]), n2 = () => {
    a.tabId && (i$1.value[a.tabId] = a.data[l2.value].id);
  }, s2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), s2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), a.tabId && (i$1.value[a.tabId] = a.data[l2.value].id);
  }, p2 = () => {
    if (a.tabId) {
      const e2 = a.data.findIndex(({ id: t2 }) => i$1.value[a.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => i$1.value[a.tabId], (e2, t2) => {
      if (a.tabId && e2 !== t2) {
        const d2 = a.data.findIndex(({ id: v2 }) => v2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => a.data.length ? h("div", { class: "vp-code-tabs" }, [h("div", { class: "vp-code-tabs-nav", role: "tablist" }, a.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-code-tab-nav", { active: d2 }], role: "tab", "aria-controls": `codetab-${a.id}-${t2}`, "aria-selected": d2, onClick: () => {
      l2.value = t2, n2();
    }, onKeydown: (v2) => b2(v2, t2) }, r2[`title${t2}`]({ value: e2, isActive: d2 }));
  })), a.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h("div", { class: ["vp-code-tab", { active: d2 }], id: `codetab-${a.id}-${t2}`, role: "tabpanel", "aria-expanded": d2 }, [h("div", { class: "vp-code-tab-title" }, r2[`title${t2}`]({ value: e2, isActive: d2 })), r2[`tab${t2}`]({ value: e2, isActive: d2 })]);
  })]) : null;
} });
const i = ({ active: n2 = false }, { slots: c2 }) => {
  var _a2;
  return h("div", { class: ["code-group-item", { active: n2 }], "aria-selected": n2 }, (_a2 = c2.default) == null ? void 0 : _a2.call(c2));
};
i.displayName = "CodeGroupItem";
const w$1 = defineComponent({ name: "CodeGroup", slots: Object, setup(n2, { slots: c2 }) {
  const a = ref(-1), l2 = shallowRef([]);
  const p2 = (e2 = a.value) => {
    a.value = e2 < l2.value.length - 1 ? e2 + 1 : 0, l2.value[a.value].focus();
  }, r2 = (e2 = a.value) => {
    a.value = e2 > 0 ? e2 - 1 : l2.value.length - 1, l2.value[a.value].focus();
  }, u2 = (e2, o2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), a.value = o2) : e2.key === "ArrowRight" ? (e2.preventDefault(), p2(o2)) : e2.key === "ArrowLeft" && (e2.preventDefault(), r2(o2));
  };
  return () => {
    var _a2;
    const e2 = (((_a2 = c2.default) == null ? void 0 : _a2.call(c2)) || []).filter((o2) => o2.type.name === "CodeGroupItem").map((o2) => (o2.props === null && (o2.props = {}), o2));
    return e2.length === 0 ? null : (a.value < 0 || a.value > e2.length - 1 ? (a.value = e2.findIndex((o2) => "active" in o2.props), a.value === -1 && (a.value = 0)) : e2.forEach((o2, s2) => {
      o2.props.active = s2 === a.value;
    }), h("div", { class: "code-group" }, [h("div", { class: "code-group-nav" }, e2.map((o2, s2) => {
      const d2 = s2 === a.value;
      return h("button", { type: "button", ref: (v2) => {
        v2 && (l2.value[s2] = v2);
      }, class: ["code-group-nav-tab", { active: d2 }], "aria-pressed": d2, "aria-expanded": d2, onClick: () => {
        a.value = s2;
      }, onKeydown: (v2) => u2(v2, s2) }, o2.props.title);
    })), e2]));
  };
} });
const o$3 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$1 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';
var define_CODE_DEMO_OPTIONS_default = { useBabel: false, jsLib: [], cssLib: [], codepenLayout: "left", codepenEditors: "101", babel: "https://unpkg.com/@babel/standalone/babel.min.js", vue: "https://unpkg.com/vue/dist/vue.global.prod.js", react: "https://unpkg.com/react/umd/react.production.min.js", reactDOM: "https://unpkg.com/react-dom/umd/react-dom.production.min.js" };
const L$1 = define_CODE_DEMO_OPTIONS_default, $ = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, H$1 = (e2, s2, t2) => {
  const l2 = document.createElement(e2);
  return isPlainObject(s2) && keys(s2).forEach((n2) => {
    if (n2.indexOf("data"))
      l2[n2] = s2[n2];
    else {
      const r2 = n2.replace("data", "");
      l2.dataset[r2] = s2[n2];
    }
  }), t2 && t2.forEach((n2) => {
    l2.appendChild(n2);
  }), l2;
}, S$2 = (e2) => ({ ...L$1, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L$1.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L$1.cssLib || [], ...e2.cssLib || []])) }), u = (e2, s2) => {
  if (isDef(e2[s2]))
    return e2[s2];
  const t2 = new Promise((l2) => {
    var _a2;
    const n2 = document.createElement("script");
    n2.src = s2, (_a2 = document.querySelector("body")) == null ? void 0 : _a2.appendChild(n2), n2.onload = () => {
      l2();
    };
  });
  return e2[s2] = t2, t2;
}, I$2 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = H$1("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, J = (e2, s2, t2) => {
  const l2 = t2.getScript();
  if (l2 && Array.from(s2.childNodes).every((n2) => n2.nodeName !== "SCRIPT")) {
    const n2 = document.createElement("script");
    n2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .vp-code-demo-display').shadowRoot;
${l2}}`)), s2.appendChild(n2);
  }
}, q = (e2) => {
  const s2 = keys(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((l2) => {
    const n2 = s2.filter((r2) => $[l2].types.includes(r2));
    if (n2.length) {
      const r2 = n2[0];
      t2[l2] = [e2[r2].replace(/^\n|\n$/g, ""), $[l2].map[r2] || r2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, x$2 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), O$1 = (e2) => `<div id="app">
${x$2(e2)}
</div>`, F$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, G$3 = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), A$3 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, Y = (e2, s2) => {
  const t2 = S$2(s2), l2 = e2.js[0] || "";
  return { ...t2, html: x$2(e2.html[0] || ""), js: l2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var _a2;
    return t2.useBabel ? ((_a2 = window.Babel.transform(l2, { presets: ["es2015"] })) == null ? void 0 : _a2.code) || "" : l2;
  } };
}, K = /<template>([\s\S]+)<\/template>/u, U$2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u, W = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u, z$2 = (e2, s2) => {
  const t2 = S$2(s2), l2 = e2.html[0] || "", n2 = K.exec(l2), r2 = U$2.exec(l2), p2 = W.exec(l2), i2 = n2 ? n2[1].replace(/^\n|\n$/g, "") : "", [d2 = "", c2 = ""] = r2 ? [r2[4].replace(/^\n|\n$/g, ""), r2[3]] : [], [a = "", v2 = ""] = p2 ? [p2[4].replace(/^\n|\n$/g, ""), p2[3]] : [], f2 = c2 === "" && (v2 === "" || v2 === "css");
  return { ...t2, html: O$1(i2), js: G$3(d2), css: a, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var _a2, _b2;
    const g2 = s2.useBabel ? ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(d2, { presets: ["es2015"] })) == null ? void 0 : _b2.code) || "" : d2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${A$3(g2)};appOptions.template=\`${i2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, Q = (e2, s2) => {
  const t2 = S$2(s2);
  return { ...t2, html: O$1(""), js: F$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var _a2, _b2;
    const l2 = ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : _b2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${A$3(l2)}))`;
  } };
}, m$3 = {}, X = (e2) => Promise.all([u(m$3, e2.babel), u(m$3, e2.react), u(m$3, e2.reactDOM)]), Z = (e2) => {
  const s2 = [u(m$3, e2.vue)];
  return e2.useBabel && s2.push(u(m$3, e2.babel)), Promise.all(s2);
}, ee$1 = (e2) => e2.useBabel ? u(m$3, e2.babel) : Promise.resolve();
var te = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, slots: Object, setup(e2, { slots: s2 }) {
  const [t2, l2] = useToggle(false), n2 = shallowRef(), r2 = shallowRef(), p2 = ref("0"), i2 = ref(false), d2 = computed(() => JSON.parse(e2.config ? decodeData(e2.config) : "{}")), c2 = computed(() => {
    const y2 = JSON.parse(decodeData(e2.code));
    return q(y2);
  }), a = computed(() => e2.type === "react" ? Q(c2.value, d2.value) : e2.type === "vue" ? z$2(c2.value, d2.value) : Y(c2.value, d2.value)), v2 = computed(() => a.value.isLegal), f2 = (y2 = false) => {
    const b2 = n2.value.attachShadow({ mode: "open" }), j2 = document.createElement("div");
    j2.classList.add("code-demo-app"), b2.appendChild(j2), v2.value ? (y2 && (j2.innerHTML = a.value.html), I$2(b2, a.value), J(e2.id, b2, a.value), p2.value = "0") : p2.value = "auto", i2.value = true;
  }, g2 = () => {
    switch (e2.type) {
      case "react":
        return X(a.value).then(() => f2());
      case "vue":
        return Z(a.value).then(() => f2());
      default:
        return ee$1(a.value).then(() => f2(true));
    }
  };
  return useEventListener("beforeprint", () => {
    l2(true);
  }), onMounted(() => {
    setTimeout(() => {
      g2();
    }, 800);
  }), () => {
    var _a2;
    return h("div", { class: "vp-code-demo", id: e2.id }, [h("div", { class: "vp-code-demo-header" }, [a.value.isLegal ? h("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-code-demo-toggle-button", t2.value ? "down" : "end"], onClick: () => {
      p2.value = t2.value ? "0" : `${r2.value.clientHeight + 13.8}px`, l2();
    } }) : null, e2.title ? h("span", { class: "vp-code-demo-title" }, decodeURIComponent(e2.title)) : null, a.value.isLegal && a.value.jsfiddle !== false ? h("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h("input", { type: "hidden", name: "html", value: a.value.html }), h("input", { type: "hidden", name: "js", value: a.value.js }), h("input", { type: "hidden", name: "css", value: a.value.css }), h("input", { type: "hidden", name: "wrap", value: "1" }), h("input", { type: "hidden", name: "panel_js", value: "3" }), h("input", { type: "hidden", name: "resources", value: [...a.value.cssLib, ...a.value.jsLib].join(",") }), h("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$1, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !a.value.isLegal || a.value.codepen !== false ? h("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h("input", { type: "hidden", name: "data", value: JSON.stringify({ html: a.value.html, js: a.value.js, css: a.value.css, js_external: a.value.jsLib.join(";"), css_external: a.value.cssLib.join(";"), layout: a.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : a.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: a.value.codepenEditors }) }), h("button", { type: "submit", innerHTML: o$3, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), i2.value ? null : h(v$3, { class: "vp-code-demo-loading" }), h("div", { ref: n2, class: "vp-code-demo-display", style: { display: v2.value && i2.value ? "block" : "none" } }), h("div", { class: "vp-code-demo-code-wrapper", style: { height: p2.value } }, h("div", { ref: r2, class: "vp-code-demo-codes" }, (_a2 = s2.default) == null ? void 0 : _a2.call(s2)))]);
  };
} });
var v = defineComponent({ name: "MdDemo", props: { id: { type: String, required: true }, title: { type: String, default: "" } }, slots: Object, setup(t2, { slots: d2 }) {
  const [o2, l2] = useToggle(false), i2 = shallowRef(), s2 = ref("0");
  return useEventListener("beforeprint", () => {
    l2(true);
  }), () => {
    var _a2, _b2;
    return h("div", { class: "vp-md-demo", id: t2.id }, [h("div", { class: "vp-md-demo-header" }, [h("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-md-demo-toggle-button", o2.value ? "down" : "end"], onClick: () => {
      s2.value = o2.value ? "0" : `${i2.value.clientHeight + 13.8}px`, l2();
    } }), t2.title ? decodeURIComponent(t2.title) : null]), h("div", { class: "vp-md-demo-display" }, (_a2 = d2.default) == null ? void 0 : _a2.call(d2)), h("div", { class: "vp-md-demo-code-wrapper", style: { height: s2.value } }, h("div", { ref: i2, class: "vp-md-demo-codes" }, (_b2 = d2.code) == null ? void 0 : _b2.call(d2)))]);
  };
} });
const o$2 = () => {
  useEventListener("beforeprint", () => {
    document.querySelectorAll("details").forEach((e2) => {
      e2.open = true;
    });
  });
};
const n$1 = useStorage("VUEPRESS_TAB_STORE", {});
var A$2 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a, { slots: d2 }) {
  const l2 = ref(a.active), u2 = shallowRef([]), s2 = () => {
    a.tabId && (n$1.value[a.tabId] = a.data[l2.value].id);
  }, o2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), o2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), s2();
  }, p2 = () => {
    if (a.tabId) {
      const e2 = a.data.findIndex(({ id: t2 }) => n$1.value[a.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => n$1.value[a.tabId], (e2, t2) => {
      if (a.tabId && e2 !== t2) {
        const i2 = a.data.findIndex(({ id: v2 }) => v2 === e2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a.data.length ? h("div", { class: "vp-tabs" }, [h("div", { class: "vp-tabs-nav", role: "tablist" }, a.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-tab-nav", { active: i2 }], role: "tab", "aria-controls": `tab-${a.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (v2) => b2(v2, t2) }, d2[`title${t2}`]({ value: e2, isActive: i2 }));
  })), a.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h("div", { class: ["vp-tab", { active: i2 }], id: `tab-${a.id}-${t2}`, role: "tabpanel", "aria-expanded": i2 }, [h("div", { class: "vp-tab-title" }, d2[`title${t2}`]({ value: e2, isActive: i2 })), d2[`tab${t2}`]({ value: e2, isActive: i2 })]);
  })]) : null;
} });
const clientConfig10 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", A$4);
    if (!B$1("CodeGroup", app))
      app.component("CodeGroup", w$1);
    if (!B$1("CodeGroupItem", app))
      app.component("CodeGroupItem", i);
    app.component("CodeDemo", te);
    app.component("MdDemo", v);
    app.component("Tabs", A$2);
  },
  setup: () => {
    o$2();
  }
});
let photoswipeOptions = {};
const photoswipeSymbol = Symbol("");
const usePhotoSwipeOptions = () => inject(photoswipeSymbol);
const injectPhotoSwipeConfig = (app) => {
  app.provide(photoswipeSymbol, photoswipeOptions);
};
const LOADING_ICON = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
const getImages = (selector2) => isString(selector2) ? Array.from(document.querySelectorAll(selector2)) : selector2.map((item) => Array.from(document.querySelectorAll(item))).flat();
const getImageElementInfo = (image) => new Promise((resolve, reject) => {
  if (image.complete) {
    resolve({
      type: "image",
      element: image,
      src: image.src,
      width: image.naturalWidth,
      height: image.naturalHeight,
      alt: image.alt,
      msrc: image.src
    });
  } else {
    image.onload = () => resolve(getImageElementInfo(image));
    image.onerror = (err2) => reject(err2);
  }
});
const initPhotoSwipe = (photoSwipe) => {
  const { isSupported, toggle } = useFullscreen();
  photoSwipe.on("uiRegister", () => {
    if (isSupported.value)
      photoSwipe.ui.registerElement({
        name: "fullscreen",
        order: 7,
        isButton: true,
        html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',
        onClick: () => {
          toggle();
        }
      });
    photoSwipe.ui.registerElement({
      name: "download",
      order: 8,
      isButton: true,
      tagName: "a",
      // SVG with outline
      html: {
        isCustomSVG: true,
        inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',
        outlineID: "pswp__icn-download"
      },
      onInit: (el, photoSwipe2) => {
        el.setAttribute("download", "");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
        photoSwipe2.on("change", () => {
          el.setAttribute("href", photoSwipe2.currSlide.data.src);
        });
      }
    });
    photoSwipe.ui.registerElement({
      name: "bulletsIndicator",
      className: "photo-swipe-bullets-indicator",
      appendTo: "wrapper",
      onInit: (el, photoSwipe2) => {
        const bullets = [];
        let prevIndex = -1;
        for (let i2 = 0; i2 < photoSwipe2.getNumItems(); i2++) {
          const bullet = document.createElement("div");
          bullet.className = "photo-swipe-bullet";
          bullet.onclick = (event) => {
            photoSwipe2.goTo(bullets.indexOf(event.target));
          };
          bullets.push(bullet);
          el.appendChild(bullet);
        }
        photoSwipe2.on("change", () => {
          if (prevIndex >= 0)
            bullets[prevIndex].classList.remove("active");
          bullets[photoSwipe2.currIndex].classList.add("active");
          prevIndex = photoSwipe2.currIndex;
        });
      }
    });
  });
};
const registerPhotoSwipe = (images, photoSwipeOptions, scrollToClose2 = true) => import(
  /* webpackChunkName: "photo-swipe" */
  "./assets/photoswipe.esm-vxo03HUV.js"
).then(({ default: PhotoSwipe }) => {
  let currentPhotoSwipe = null;
  const dataSource = images.map((image) => ({
    html: LOADING_ICON,
    element: image,
    msrc: image.src
  }));
  images.forEach((image, index) => {
    const handler = () => {
      currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.destroy();
      currentPhotoSwipe = new PhotoSwipe({
        preloaderDelay: 0,
        showHideAnimationType: "zoom",
        ...photoSwipeOptions,
        dataSource,
        index,
        ...scrollToClose2 ? { closeOnVerticalDrag: true, wheelToZoom: false } : {}
      });
      initPhotoSwipe(currentPhotoSwipe);
      currentPhotoSwipe.addFilter("thumbEl", () => image);
      currentPhotoSwipe.addFilter("placeholderSrc", () => image.src);
      currentPhotoSwipe.init();
    };
    if (!image.getAttribute("photo-swipe")) {
      image.style.cursor = "zoom-in";
      image.addEventListener("click", () => {
        handler();
      });
      image.addEventListener("keypress", ({ key }) => {
        if (key === "Enter")
          handler();
      });
      image.setAttribute("photo-swipe", "");
    }
    getImageElementInfo(image).then((data) => {
      dataSource.splice(index, 1, data);
      currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.refreshSlideContent(index);
    });
  });
  return scrollToClose2 ? useEventListener("wheel", () => {
    currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.close();
  }) : () => {
  };
});
const usePhotoSwipe = ({ selector: selector2, locales: locales2, delay: delay2 = 500, scrollToClose: scrollToClose2 = true }) => {
  const photoSwipeOptions = usePhotoSwipeOptions();
  const locale = useLocaleConfig(locales2);
  const page = usePageData();
  let destroy = null;
  const setupPhotoSwipe = () => new Promise((resolve) => setTimeout(resolve, delay2)).then(() => nextTick()).then(async () => {
    destroy = await registerPhotoSwipe(getImages(selector2), {
      ...photoSwipeOptions,
      ...locale.value
    }, scrollToClose2);
  });
  onMounted(() => {
    setupPhotoSwipe();
    watch(() => page.value.path, () => {
      destroy == null ? void 0 : destroy();
      setupPhotoSwipe();
    });
  });
  onUnmounted(() => {
    destroy == null ? void 0 : destroy();
  });
};
var define_PS_LOCALES_default = { "/": { closeTitle: "关闭", downloadTitle: "下载图片", fullscreenTitle: "切换全屏", zoomTitle: "缩放", arrowPrevTitle: "上一个 (左箭头)", arrowNextTitle: "下一个 (右箭头)" } };
const selector = ".theme-hope-content :not(a) > img:not([no-view])";
const locales = define_PS_LOCALES_default;
const delay = 800;
const scrollToClose = true;
const clientConfig11 = defineClientConfig({
  enhance: ({ app }) => {
    injectPhotoSwipeConfig(app);
  },
  setup: () => {
    usePhotoSwipe({
      selector,
      delay,
      locales,
      scrollToClose
    });
  }
});
const useReadingTimeData = () => {
  const page = usePageData();
  return computed(() => page.value.readingTime ?? null);
};
const getReadingTimeLocale = (readingTime, locale) => {
  const { minutes, words } = readingTime;
  const { less1Minute, word, time } = locale;
  return {
    time: minutes < 1 ? less1Minute : time.replace("$time", Math.round(minutes).toString()),
    words: word.replace("$word", words.toString())
  };
};
var define_READING_TIME_LOCALES_default = { "/": { word: "约 $word 字", less1Minute: "小于 1 分钟", time: "大约 $time 分钟" } };
const DEFAULT_LOCALE = { words: "", time: "" };
const readingTimeLocales = typeof define_READING_TIME_LOCALES_default === "undefined" ? null : define_READING_TIME_LOCALES_default;
const useReadingTimeLocaleConfig = () => readingTimeLocales ? useLocaleConfig(readingTimeLocales) : computed(() => null);
const useReadingTimeLocale = () => {
  if (typeof readingTimeLocales === "undefined")
    return computed(() => DEFAULT_LOCALE);
  const readingTime = useReadingTimeData();
  const readingTimeLocale = useReadingTimeLocaleConfig();
  return computed(() => readingTime.value && readingTimeLocale.value ? getReadingTimeLocale(readingTime.value, readingTimeLocale.value) : DEFAULT_LOCALE);
};
const e$1 = () => useThemeData(), m$2 = () => useThemeLocaleData(), o$1 = () => {
  const a = e$1();
  return computed(() => !!a.value.pure);
};
const noopComponent = () => null;
const mobileBreakPoint = "719px";
const pcBreakPoint = "1440px";
const enableThemeColor = "false";
const de = {
  mobileBreakPoint,
  pcBreakPoint,
  enableThemeColor
};
const sidebarData = { "/guide/": ["", { "text": "一些软件教程", "prefix": "someapp/", "collapsible": true, "children": ["2-test", "1-DDNS-GO"] }], "/blog/": ["", { "text": "表情/图片", "prefix": "photo/", "collapsible": true, "children": ["intro", { "text": "2025年", "prefix": "2025/", "collapsible": true, "children": [] }, { "text": "2024年", "prefix": "2024/", "collapsible": true, "children": ["2024y2m"] }] }, { "text": "二中周报", "prefix": "the_second_high_school/", "collapsible": true, "children": [] }, { "text": "音乐更新", "prefix": "music_updata_log/", "collapsible": true, "children": ["introduction", "1-10"] }] };
const De$1 = (e2) => {
  const { icon: n2 = "", color: t2, size: o2 } = e2, r2 = t2 || o2 ? {} : null;
  return t2 && (r2.color = t2), o2 && (r2.height = Number.isNaN(Number(o2)) ? o2 : `${o2}px`), isLinkHttp(n2) ? h("img", { class: "icon", src: n2, alt: "", "no-view": "", style: r2 }) : isLinkAbsolute(n2) ? h("img", { class: "icon", src: withBase(n2), alt: "", "aria-hidden": "", "no-view": "", style: r2 }) : h(resolveComponent("FontIcon"), e2);
};
De$1.displayName = "HopeIcon";
var D$2 = De$1;
const Fa = () => {
  const e2 = useRouter(), n2 = useRoute();
  return (t2) => {
    if (t2)
      if (isLinkAbsolute(t2))
        n2.path !== t2 && e2.push(t2);
      else if (isLinkWithProtocol(t2))
        window && window.open(t2);
      else {
        const o2 = n2.path.slice(0, n2.path.lastIndexOf("/"));
        e2.push(`${o2}/${encodeURI(t2)}`);
      }
  };
}, ze = () => {
  const e2 = m$2(), n2 = usePageFrontmatter();
  return computed(() => {
    const { author: t2 } = n2.value;
    return t2 ? ie(t2) : t2 === false ? [] : ie(e2.value.author, false);
  });
}, qa = () => {
  const e2 = usePageFrontmatter();
  return computed(() => oe(e2.value.category).map((t2) => ({ name: t2, path: "" })));
}, Ga = () => {
  const e2 = usePageFrontmatter();
  return computed(() => se(e2.value.tag).map((t2) => ({ name: t2, path: "" })));
}, Wa = () => {
  const e2 = usePageFrontmatter(), n2 = usePageData();
  return computed(() => {
    const t2 = getDate(e2.value.date);
    if (t2)
      return t2;
    const { createdTime: o2 } = n2.value.git || {};
    return o2 ? new Date(o2) : null;
  });
}, Ua = () => {
  const e2 = m$2(), n2 = usePageData(), t2 = usePageFrontmatter(), o2 = ze(), r2 = qa(), l2 = Ga(), s2 = Wa(), i2 = useReadingTimeData(), v2 = useReadingTimeLocale(), c2 = computed(() => ({ author: o2.value, category: r2.value, date: s2.value, localizedDate: n2.value.localizedDate, tag: l2.value, isOriginal: t2.value.isOriginal || false, readingTime: i2.value, readingTimeLocale: v2.value, pageview: "pageview" in t2.value ? t2.value.pageview : true })), p2 = computed(() => "pageInfo" in t2.value ? t2.value.pageInfo : "pageInfo" in e2.value ? e2.value.pageInfo : null);
  return { info: c2, items: p2 };
}, { mobileBreakPoint: Ya, pcBreakPoint: Xa } = de, Ne = (e2) => e2.endsWith("px") ? Number(e2.slice(0, -2)) : null, ee = () => {
  const e2 = ref(false), n2 = ref(false), t2 = () => {
    e2.value = window.innerWidth <= (Ne(Ya) ?? 719), n2.value = window.innerWidth >= (Ne(Xa) ?? 1440);
  };
  return onMounted(() => {
    t2(), useEventListener("resize", t2, false), useEventListener("orientationchange", t2, false);
  }), { isMobile: e2, isPC: n2 };
}, Ve = Symbol(""), G$2 = () => {
  const e2 = inject(Ve);
  if (!e2)
    throw new Error("useDarkmode() is called without provider.");
  return e2;
}, Ka = (e2) => {
  const n2 = e$1(), t2 = usePreferredDark(), o2 = computed(() => n2.value.darkmode || "switch"), r2 = useStorage("vuepress-theme-hope-scheme", "auto"), l2 = computed(() => {
    const i2 = o2.value;
    return i2 === "disable" ? false : i2 === "enable" ? true : i2 === "auto" ? t2.value : i2 === "toggle" ? r2.value === "dark" : r2.value === "dark" || r2.value === "auto" && t2.value;
  }), s2 = computed(() => {
    const i2 = o2.value;
    return i2 === "switch" || i2 === "toggle";
  });
  e2.provide(Ve, { canToggle: s2, config: o2, isDarkmode: l2, status: r2 }), Object.defineProperties(e2.config.globalProperties, { $isDarkmode: { get: () => l2.value } });
}, Ja = () => {
  const { config: e2, isDarkmode: n2, status: t2 } = G$2();
  watchEffect(() => {
    e2.value === "disable" ? t2.value = "light" : e2.value === "enable" ? t2.value = "dark" : e2.value === "toggle" && t2.value === "auto" && (t2.value = "light");
  }), onMounted(() => {
    watch(n2, (o2) => document.documentElement.setAttribute("data-theme", o2 ? "dark" : "light"), { immediate: true });
  });
};
var S$1 = defineComponent({ name: "AutoLink", inheritAttrs: false, props: { config: { type: Object, required: true }, exact: Boolean, noExternalLinkIcon: Boolean }, emits: ["focusout"], slots: Object, setup(e2, { attrs: n2, emit: t2, slots: o2 }) {
  const r2 = useRoute(), l2 = useSiteData(), s2 = toRef$1(e2, "config"), i2 = computed(() => isLinkHttp(s2.value.link)), v2 = computed(() => !i2.value && isLinkWithProtocol(s2.value.link)), c2 = computed(() => s2.value.target || (i2.value ? "_blank" : void 0)), p2 = computed(() => c2.value === "_blank"), m2 = computed(() => !i2.value && !v2.value && !p2.value), y2 = computed(() => s2.value.rel || (p2.value ? "noopener noreferrer" : null)), f2 = computed(() => s2.value.ariaLabel || s2.value.text), C2 = computed(() => {
    if (e2.exact)
      return false;
    const k2 = keys(l2.value.locales);
    return k2.length ? k2.every((w2) => w2 !== s2.value.link) : s2.value.link !== "/";
  }), j2 = computed(() => m2.value ? s2.value.activeMatch ? new RegExp(s2.value.activeMatch, "u").test(r2.path) : C2.value ? startsWith(r2.path, s2.value.link) : r2.path === s2.value.link : false);
  return () => {
    const { before: k2, after: w2, default: M } = o2, { text: W2, icon: U2, link: V2 } = s2.value;
    return m2.value ? h(RouteLink, { to: V2, "aria-label": f2.value, ...n2, class: ["nav-link", { active: j2.value }, n2.class], onFocusout: () => t2("focusout") }, () => M ? M() : [k2 ? k2() : h(D$2, { icon: U2 }), W2, w2 == null ? void 0 : w2()]) : h("a", { href: V2, rel: y2.value, target: c2.value, "aria-label": f2.value, ...n2, class: ["nav-link", n2.class], onFocusout: () => t2("focusout") }, M ? M() : [k2 ? k2() : h(D$2, { icon: U2 }), W2, e2.noExternalLinkIcon ? null : h(ExternalLinkIcon), w2 == null ? void 0 : w2()]);
  };
} });
const H = (e2, n2, t2 = false) => "activeMatch" in n2 ? new RegExp(n2.activeMatch, "u").test(e2.path) : J$1(e2, n2.link) ? true : n2.children && !t2 ? n2.children.some((o2) => H(e2, o2)) : false, Oe = (e2, n2) => n2.type === "group" ? n2.children.some((t2) => t2.type === "group" ? Oe(e2, t2) : t2.type === "page" && H(e2, t2, true)) || "prefix" in n2 && J$1(e2, n2.prefix) : false, Pe$1 = (e2, n2) => isString(e2.link) ? h(S$1, { ...n2, config: e2 }) : h("p", n2, [h(D$2, { icon: e2.icon }), e2.text]), He$1 = (e2) => {
  const n2 = useRoute();
  return e2 ? h("ul", { class: "vp-sidebar-sub-headers" }, e2.map((t2) => h("li", { class: "vp-sidebar-sub-header" }, [Pe$1(t2, { class: ["vp-sidebar-link", "vp-heading", { active: H(n2, t2, true) }] }), He$1(t2.children)]))) : null;
};
var z$1 = ((e2) => (e2.type = "y", e2.title = "t", e2.shortTitle = "s", e2.icon = "i", e2.author = "a", e2.date = "d", e2.localizedDate = "l", e2.category = "c", e2.tag = "g", e2.isEncrypted = "n", e2.isOriginal = "o", e2.readingTime = "r", e2.excerpt = "e", e2.sticky = "u", e2.cover = "v", e2.index = "I", e2.order = "O", e2))(z$1 || {}), Re = ((e2) => (e2.article = "a", e2.home = "h", e2.slide = "s", e2.page = "p", e2))(Re || {});
const N$1 = (e2 = "", n2 = "") => isLinkAbsolute(n2) ? n2 : `${ensureEndingSlash(e2)}${n2}`, R$2 = (e2, n2 = false) => {
  const { meta: t2, path: o2 } = resolveRoute(e2);
  return t2 ? { text: !n2 && t2[z$1.shortTitle] ? t2[z$1.shortTitle] : t2[z$1.title] || o2, link: o2, ...t2[z$1.icon] ? { icon: t2[z$1.icon] } : {} } : { text: o2, link: o2 };
}, ae = (e2, n2, t2) => t2 > 0 ? n2.map((o2) => ({ type: "heading", text: o2.title, link: `${e2.path}#${o2.slug}`, children: ae(e2, o2.children, t2 - 1) })) : [], he = ({ config: e2, page: n2, headerDepth: t2, prefix: o2 = "" }) => {
  const r2 = (l2, s2 = o2) => {
    var _a2;
    const i2 = isString(l2) ? R$2(N$1(s2, l2)) : l2.link ? { ...l2, ...isLinkExternal(l2.link) ? {} : { link: R$2(N$1(s2, l2.link)).link } } : l2;
    if ("children" in i2) {
      const v2 = N$1(s2, i2.prefix), c2 = i2.children === "structure" ? sidebarData[v2] : i2.children;
      return { type: "group", ...i2, prefix: v2, children: c2.map((p2) => r2(p2, v2)) };
    }
    return { type: "page", ...i2, children: i2.link === n2.path ? ae(n2, ((_a2 = n2.headers[0]) == null ? void 0 : _a2.level) === 1 ? n2.headers[0].children : n2.headers, t2) : [] };
  };
  return e2.map((l2) => r2(l2));
}, Qa = ({ config: e2, page: n2, headerDepth: t2 }) => {
  const o2 = keys(e2).sort((r2, l2) => l2.length - r2.length);
  for (const r2 of o2)
    if (startsWith(decodeURI(n2.path), r2)) {
      const l2 = e2[r2];
      return l2 ? he({ config: l2 === "structure" ? sidebarData[r2] : l2 === "heading" ? ae(n2, n2.headers, t2) : l2, page: n2, headerDepth: t2, prefix: r2 }) : [];
    }
  return console.warn(`${n2.path} is missing sidebar config.`), [];
}, Za = ({ config: e2, routeLocale: n2, page: t2, headerDepth: o2 }) => e2 === "heading" ? ae(t2, t2.headers, o2) : e2 === "structure" ? he({ config: sidebarData[n2], page: t2, headerDepth: o2, prefix: n2 }) : isArray(e2) ? he({ config: e2, page: t2, headerDepth: o2 }) : isPlainObject(e2) ? Qa({ config: e2, page: t2, headerDepth: o2 }) : [], _e = Symbol(""), et = () => {
  const e2 = usePageFrontmatter(), n2 = m$2(), t2 = usePageData(), o2 = useRouteLocale(), r2 = computed(() => e2.value.home ? false : e2.value.sidebar ?? n2.value.sidebar ?? "structure"), l2 = computed(() => e2.value.headerDepth ?? n2.value.headerDepth ?? 2), s2 = computedWithControl(() => [r2.value, l2.value, t2.value.path, null], () => Za({ config: r2.value, routeLocale: o2.value, page: t2.value, headerDepth: l2.value }));
  provide(_e, s2);
}, ge$1 = () => {
  const e2 = inject(_e);
  if (!e2)
    throw new Error("useSidebarItems() is called without provider.");
  return e2;
};
var at = defineComponent({ name: "PageFooter", setup() {
  const e2 = e$1(), n2 = m$2(), t2 = usePageFrontmatter(), o2 = ze(), r2 = computed(() => {
    const { copyright: c2, footer: p2 } = t2.value;
    return p2 !== false && !!(c2 || p2 || n2.value.displayFooter);
  }), l2 = computed(() => {
    const { footer: c2 } = t2.value;
    return c2 === false ? false : isString(c2) ? c2 : n2.value.footer || "";
  }), s2 = computed(() => o2.value.map(({ name: c2 }) => c2).join(", ")), i2 = (c2) => `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${s2.value} ${c2 ? `${c2} Licensed` : ""}`, v2 = computed(() => {
    const { copyright: c2, license: p2 = "" } = t2.value, { license: m2 } = e2.value, { copyright: y2 } = n2.value;
    return c2 ?? (p2 ? i2(p2) : isString(y2) ? y2 : s2.value || m2 ? i2(m2) : false);
  });
  return () => r2.value ? h("footer", { class: "vp-footer-wrapper" }, [l2.value ? h("div", { class: "vp-footer", innerHTML: l2.value }) : null, v2.value ? h("div", { class: "vp-copyright", innerHTML: v2.value }) : null]) : null;
} }), je = defineComponent({ name: "NavbarDropdownLink", props: { config: { type: Object, required: true } }, slots: Object, setup(e2, { slots: n2 }) {
  const t2 = usePageData(), o2 = toRef$1(e2, "config"), r2 = computed(() => o2.value.ariaLabel || o2.value.text), l2 = ref(false);
  watch(() => t2.value.path, () => {
    l2.value = false;
  });
  const s2 = (i2) => {
    i2.detail === 0 && (l2.value = !l2.value);
  };
  return () => {
    var _a2;
    return h("div", { class: ["dropdown-wrapper", { open: l2.value }] }, [h("button", { type: "button", class: "dropdown-title", "aria-label": r2.value, onClick: s2 }, [((_a2 = n2.title) == null ? void 0 : _a2.call(n2)) || h("span", { class: "title" }, [h(D$2, { icon: o2.value.icon }), e2.config.text]), h("span", { class: "arrow" }), h("ul", { class: "nav-dropdown" }, o2.value.children.map((i2, v2) => {
      const c2 = v2 === o2.value.children.length - 1;
      return h("li", { class: "dropdown-item" }, "children" in i2 ? [h("h4", { class: "dropdown-subtitle" }, i2.link ? h(S$1, { config: i2, onFocusout: () => {
        i2.children.length === 0 && c2 && (l2.value = false);
      } }) : h("span", i2.text)), h("ul", { class: "dropdown-subitem-wrapper" }, i2.children.map((p2, m2) => h("li", { class: "dropdown-subitem" }, h(S$1, { config: p2, onFocusout: () => {
        m2 === i2.children.length - 1 && c2 && (l2.value = false);
      } }))))] : h(S$1, { config: i2, onFocusout: () => {
        c2 && (l2.value = false);
      } }));
    }))])]);
  };
} });
const Fe = () => h(r, { name: "i18n" }, () => [h("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
Fe.displayName = "I18nIcon";
const qe = (e2, n2 = "") => isString(e2) ? R$2(N$1(n2, e2)) : "children" in e2 ? { ...e2, ...e2.link && !isLinkExternal(e2.link) ? R$2(N$1(n2, e2.link)) : {}, children: e2.children.map((t2) => qe(t2, N$1(n2, e2.prefix))) } : { ...e2, link: isLinkExternal(e2.link) ? e2.link : R$2(N$1(n2, e2.link)).link }, Ge = () => {
  const e2 = m$2(), n2 = () => (e2.value.navbar || []).map((t2) => qe(t2));
  return computedWithControl(() => e2.value.navbar, () => n2());
}, tt = () => {
  const e2 = useRoutePaths(), n2 = useRoute(), t2 = useRouteLocale(), o2 = useSiteLocaleData(), r2 = e$1(), l2 = m$2();
  return computedWithControl(() => n2.path, () => {
    const s2 = keys(o2.value.locales), i2 = entries(r2.value.extraLocales ?? {});
    if (s2.length < 2 && !i2.length)
      return null;
    const { path: v2, fullPath: c2 } = n2, { navbarLocales: p2 } = l2.value;
    return { text: "", ariaLabel: p2 == null ? void 0 : p2.selectLangAriaLabel, children: [...s2.map((m2) => {
      var _a2, _b2, _c;
      const y2 = ((_a2 = o2.value.locales) == null ? void 0 : _a2[m2]) ?? {}, f2 = ((_b2 = r2.value.locales) == null ? void 0 : _b2[m2]) ?? {}, C2 = y2.lang || "", j2 = ((_c = f2.navbarLocales) == null ? void 0 : _c.langName) ?? C2;
      let k2;
      if (C2 === o2.value.lang)
        k2 = v2;
      else {
        const w2 = v2.replace(t2.value, m2);
        k2 = e2.value.some((M) => M === w2) ? c2.replace(v2, w2) : f2.home ?? m2;
      }
      return { text: j2, link: k2 };
    }), ...i2.map(([m2, y2]) => ({ text: m2, link: y2.replace(":route", n2.path.replace(t2.value, "")) }))] };
  });
}, nt = () => {
  const e2 = m$2(), n2 = computed(() => e2.value.repo || null), t2 = computed(() => n2.value ? X$1(n2.value) : null), o2 = computed(() => n2.value ? Z$1(n2.value) : null), r2 = computed(() => t2.value ? e2.value.repoLabel ?? (o2.value === null ? "Source" : o2.value) : null);
  return computed(() => !t2.value || !r2.value || e2.value.repoDisplay === false ? null : { type: o2.value || "Source", label: r2.value, link: t2.value });
};
defineComponent({ name: "LanguageDropdown", setup() {
  const e2 = tt();
  return () => e2.value ? h("div", { class: "nav-item" }, h(je, { class: "i18n-dropdown", config: e2.value }, { title: () => {
    var _a2;
    return h(Fe, { "aria-label": (_a2 = e2.value) == null ? void 0 : _a2.ariaLabel, style: { width: "1rem", height: "1rem", verticalAlign: "middle" } });
  } })) : null;
} });
var ot = defineComponent({ name: "NavScreenDropdown", props: { config: { type: Object, required: true } }, setup(e2) {
  const n2 = usePageData(), t2 = toRef$1(e2, "config"), o2 = computed(() => t2.value.ariaLabel || t2.value.text), r2 = ref(false);
  watch(() => n2.value.path, () => {
    r2.value = false;
  });
  const l2 = (s2, i2) => i2[i2.length - 1] === s2;
  return () => [h("button", { type: "button", class: ["nav-screen-dropdown-title", { active: r2.value }], "aria-label": o2.value, onClick: () => {
    r2.value = !r2.value;
  } }, [h("span", { class: "title" }, [h(D$2, { icon: t2.value.icon }), e2.config.text]), h("span", { class: ["arrow", r2.value ? "down" : "end"] })]), h("ul", { class: ["nav-screen-dropdown", { hide: !r2.value }] }, t2.value.children.map((s2) => h("li", { class: "dropdown-item" }, "children" in s2 ? [h("h4", { class: "dropdown-subtitle" }, s2.link ? h(S$1, { config: s2, onFocusout: () => {
    l2(s2, t2.value.children) && s2.children.length === 0 && (r2.value = false);
  } }) : h("span", s2.text)), h("ul", { class: "dropdown-subitem-wrapper" }, s2.children.map((i2) => h("li", { class: "dropdown-subitem" }, h(S$1, { config: i2, onFocusout: () => {
    l2(i2, s2.children) && l2(s2, t2.value.children) && (r2.value = false);
  } }))))] : h(S$1, { config: s2, onFocusout: () => {
    l2(s2, t2.value.children) && (r2.value = false);
  } }))))];
} }), rt = defineComponent({ name: "NavScreenLinks", setup() {
  const e2 = Ge();
  return () => e2.value.length ? h("nav", { class: "nav-screen-links" }, e2.value.map((n2) => h("div", { class: "navbar-links-item" }, "children" in n2 ? h(ot, { config: n2 }) : h(S$1, { config: n2 })))) : null;
} });
const We = () => h(r, { name: "dark" }, () => h("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
We.displayName = "DarkIcon";
const Ue = () => h(r, { name: "light" }, () => h("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
Ue.displayName = "LightIcon";
const Ye = () => h(r, { name: "auto" }, () => h("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
Ye.displayName = "AutoIcon";
const Xe = () => h(r, { name: "enter-fullscreen" }, () => h("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
Xe.displayName = "EnterFullScreenIcon";
const Ke = () => h(r, { name: "cancel-fullscreen" }, () => h("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
Ke.displayName = "CancelFullScreenIcon";
const Je = () => h(r, { name: "outlook" }, () => [h("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
Je.displayName = "OutlookIcon";
var Qe = defineComponent({ name: "AppearanceSwitch", setup() {
  const { config: e2, isDarkmode: n2, status: t2 } = G$2(), o2 = o$1(), r2 = () => {
    e2.value === "switch" ? t2.value = { light: "dark", dark: "auto", auto: "light" }[t2.value] : t2.value = t2.value === "light" ? "dark" : "light";
  }, l2 = async (s2) => {
    if (!(document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !o2.value) || !s2) {
      r2();
      return;
    }
    const i2 = s2.clientX, v2 = s2.clientY, c2 = Math.hypot(Math.max(i2, innerWidth - i2), Math.max(v2, innerHeight - v2)), p2 = n2.value;
    await document.startViewTransition(async () => {
      r2(), await nextTick();
    }).ready, n2.value !== p2 && document.documentElement.animate({ clipPath: n2.value ? [`circle(${c2}px at ${i2}px ${v2}px)`, `circle(0px at ${i2}px ${v2}px)`] : [`circle(0px at ${i2}px ${v2}px)`, `circle(${c2}px at ${i2}px ${v2}px)`] }, { duration: 400, pseudoElement: n2.value ? "::view-transition-old(root)" : "::view-transition-new(root)" });
  };
  return () => h("button", { type: "button", id: "appearance-switch", onClick: l2 }, [h(Ye, { style: { display: t2.value === "auto" ? "block" : "none" } }), h(We, { style: { display: t2.value === "dark" ? "block" : "none" } }), h(Ue, { style: { display: t2.value === "light" ? "block" : "none" } })]);
} }), st = defineComponent({ name: "AppearanceMode", setup() {
  const e2 = m$2(), { canToggle: n2 } = G$2(), t2 = computed(() => e2.value.outlookLocales.darkmode);
  return () => n2.value ? h("div", { class: "appearance-wrapper" }, [h("label", { class: "appearance-title", for: "appearance-switch" }, t2.value), h(Qe)]) : null;
} });
const be$1 = "VUEPRESS_THEME_COLOR";
var it = defineComponent({ name: "ThemeColorPicker", props: { themeColor: { type: Object, required: true } }, setup(e2) {
  const n2 = (t2 = "") => {
    const o2 = document.documentElement.classList, r2 = keys(e2.themeColor);
    if (!t2) {
      localStorage.removeItem(be$1), o2.remove(...r2);
      return;
    }
    o2.remove(...r2.filter((l2) => l2 !== t2)), o2.add(t2), localStorage.setItem(be$1, t2);
  };
  return onMounted(() => {
    const t2 = localStorage.getItem(be$1);
    t2 && n2(t2);
  }), () => h("ul", { id: "theme-color-picker" }, [h("li", h("span", { class: "theme-color", onClick: () => n2() })), entries(e2.themeColor).map(([t2, o2]) => h("li", h("span", { style: { background: o2 }, onClick: () => n2(t2) })))]);
} });
const _$2 = de.enableThemeColor === "true", ct = _$2 ? fromEntries(entries(de).filter(([e2]) => e2.startsWith("theme-"))) : {};
var ut = defineComponent({ name: "ThemeColor", setup() {
  const e2 = m$2(), n2 = computed(() => e2.value.outlookLocales.themeColor);
  return () => _$2 ? h("div", { class: "theme-color-wrapper" }, [h("label", { class: "theme-color-title", for: "theme-color-picker" }, n2.value), h(it, { themeColor: ct })]) : null;
} }), Ze = defineComponent({ name: "ToggleFullScreenButton", setup() {
  const e2 = m$2(), { isSupported: n2, isFullscreen: t2, toggle: o2 } = useFullscreen(), r2 = computed(() => e2.value.outlookLocales.fullscreen);
  return () => n2 ? h("div", { class: "full-screen-wrapper" }, [h("label", { class: "full-screen-title", for: "full-screen-switch" }, r2.value), h("button", { type: "button", id: "full-screen-switch", class: "full-screen", ariaPressed: t2.value, onClick: () => o2() }, t2.value ? h(Ke) : h(Xe))]) : null;
} }), ea = defineComponent({ name: "OutlookSettings", setup() {
  const e2 = e$1(), n2 = o$1(), t2 = computed(() => !n2.value && e2.value.fullscreen);
  return () => h(ClientOnly, () => [_$2 ? h(ut) : null, h(st), t2.value ? h(Ze) : null]);
} }), pt = defineComponent({ name: "NavScreen", props: { show: Boolean }, emits: ["close"], slots: Object, setup(e2, { emit: n2, slots: t2 }) {
  const o2 = usePageData(), { isMobile: r2 } = ee(), l2 = shallowRef(), s2 = useScrollLock(l2);
  return onMounted(() => {
    l2.value = document.body, watch(r2, (i2) => {
      !i2 && e2.show && (s2.value = false, n2("close"));
    }), watch(() => o2.value.path, () => {
      s2.value = false, n2("close");
    });
  }), onUnmounted(() => {
    s2.value = false;
  }), () => h(Transition, { name: "fade", onEnter: () => {
    s2.value = true;
  }, onAfterLeave: () => {
    s2.value = false;
  } }, () => {
    var _a2, _b2;
    return e2.show ? h("div", { id: "nav-screen" }, h("div", { class: "vp-nav-screen-container" }, [(_a2 = t2.before) == null ? void 0 : _a2.call(t2), h(rt), h("div", { class: "vp-outlook-wrapper" }, h(ea)), (_b2 = t2.after) == null ? void 0 : _b2.call(t2)])) : null;
  });
} }), vt = defineComponent({ name: "NavbarBrand", setup() {
  const e2 = useRouteLocale(), n2 = useSiteLocaleData(), t2 = m$2(), o2 = computed(() => t2.value.home || e2.value), r2 = computed(() => n2.value.title), l2 = computed(() => t2.value.navTitle ?? r2.value), s2 = computed(() => t2.value.logo ? withBase(t2.value.logo) : null), i2 = computed(() => t2.value.logoDark ? withBase(t2.value.logoDark) : null);
  return () => h(RouteLink, { to: o2.value, class: "vp-brand" }, () => [s2.value ? h("img", { class: ["vp-nav-logo", { light: !!i2.value }], src: s2.value, alt: "" }) : null, i2.value ? h("img", { class: ["vp-nav-logo dark"], src: i2.value, alt: "" }) : null, l2.value ? h("span", { class: ["vp-site-name", { "hide-in-pad": s2.value && t2.value.hideSiteNameOnMobile !== false }] }, l2.value) : null]);
} }), dt = defineComponent({ name: "NavbarLinks", setup() {
  const e2 = Ge();
  return () => e2.value.length ? h("nav", { class: "vp-nav-links" }, e2.value.map((n2) => h("div", { class: "nav-item hide-in-mobile" }, "children" in n2 ? h(je, { config: n2 }) : h(S$1, { config: n2 })))) : null;
} }), mt = defineComponent({ name: "RepoLink", components: { BitbucketIcon: I$3, GiteeIcon: k$2, GitHubIcon: y$1, GitLabIcon: E$1, SourceIcon: x$3 }, setup() {
  const e2 = nt();
  return () => e2.value ? h("div", { class: "nav-item vp-repo" }, h("a", { class: "vp-repo-link", href: e2.value.link, target: "_blank", rel: "noopener noreferrer", "aria-label": e2.value.label }, h(resolveComponent(`${e2.value.type}Icon`), { style: { width: "1.25rem", height: "1.25rem", verticalAlign: "middle" } }))) : null;
} });
const aa = ({ active: e2 = false }, { emit: n2 }) => h("button", { type: "button", class: ["vp-toggle-navbar-button", { "is-active": e2 }], "aria-label": "Toggle Navbar", "aria-expanded": e2, "aria-controls": "nav-screen", onClick: () => n2("toggle") }, h("span", [h("span", { class: "vp-top" }), h("span", { class: "vp-middle" }), h("span", { class: "vp-bottom" })]));
aa.displayName = "ToggleNavbarButton";
var ht = aa;
const fe$1 = (e2, { emit: n2 }) => h("button", { type: "button", class: "vp-toggle-sidebar-button", title: "Toggle Sidebar", onClick: () => n2("toggle") }, h("span", { class: "icon" }));
fe$1.displayName = "ToggleSidebarButton", fe$1.emits = ["toggle"];
var gt = fe$1, bt = defineComponent({ name: "OutlookButton", setup() {
  const { isSupported: e2 } = useFullscreen(), n2 = e$1(), t2 = o$1(), o2 = usePageData(), { canToggle: r2 } = G$2(), l2 = ref(false), s2 = computed(() => !t2.value && n2.value.fullscreen && e2);
  return watch(() => o2.value.path, () => {
    l2.value = false;
  }), () => r2.value || s2.value || _$2 ? h("div", { class: "nav-item hide-in-mobile" }, r2.value && !s2.value && !_$2 ? h(Qe) : s2.value && !r2.value && !_$2 ? h(Ze) : h("button", { type: "button", class: ["outlook-button", { open: l2.value }], tabindex: "-1", "aria-hidden": true }, [h(Je), h("div", { class: "outlook-dropdown" }, h(ea))])) : null;
} }), ft = defineComponent({ name: "NavBar", emits: ["toggleSidebar"], slots: Object, setup(e2, { emit: n2, slots: t2 }) {
  const o2 = m$2(), { isMobile: r2 } = ee(), l2 = ref(false), s2 = computed(() => {
    const { navbarAutoHide: p2 = "mobile" } = o2.value;
    return p2 !== "none" && (p2 === "always" || r2.value);
  }), i2 = computed(() => o2.value.navbarLayout || { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }), v2 = { Brand: vt, Language: noopComponent, Links: dt, Repo: mt, Outlook: bt, Search: B$1("Docsearch") ? resolveComponent("Docsearch") : B$1("SearchBox") ? resolveComponent("SearchBox") : noopComponent }, c2 = (p2) => v2[p2] ?? (B$1(p2) ? resolveComponent(p2) : noopComponent);
  return () => {
    var _a2, _b2, _c, _d, _e2, _f;
    return [h("header", { id: "navbar", class: ["vp-navbar", { "auto-hide": s2.value, "hide-icon": o2.value.navbarIcon === false }] }, [h("div", { class: "vp-navbar-start" }, [h(gt, { onToggle: () => {
      l2.value && (l2.value = false), n2("toggleSidebar");
    } }), (_a2 = t2.startBefore) == null ? void 0 : _a2.call(t2), (i2.value.start || []).map((p2) => h(c2(p2))), (_b2 = t2.startAfter) == null ? void 0 : _b2.call(t2)]), h("div", { class: "vp-navbar-center" }, [(_c = t2.centerBefore) == null ? void 0 : _c.call(t2), (i2.value.center || []).map((p2) => h(c2(p2))), (_d = t2.centerAfter) == null ? void 0 : _d.call(t2)]), h("div", { class: "vp-navbar-end" }, [(_e2 = t2.endBefore) == null ? void 0 : _e2.call(t2), (i2.value.end || []).map((p2) => h(c2(p2))), (_f = t2.endAfter) == null ? void 0 : _f.call(t2), h(ht, { active: l2.value, onToggle: () => {
      l2.value = !l2.value;
    } })])]), h(pt, { show: l2.value, onClose: () => {
      l2.value = false;
    } }, { before: () => {
      var _a3;
      return (_a3 = t2.screenTop) == null ? void 0 : _a3.call(t2);
    }, after: () => {
      var _a3;
      return (_a3 = t2.screenBottom) == null ? void 0 : _a3.call(t2);
    } })];
  };
} }), yt = defineComponent({ name: "SidebarChild", props: { config: { type: Object, required: true } }, setup(e2) {
  const n2 = useRoute();
  return () => [Pe$1(e2.config, { class: ["vp-sidebar-link", `vp-sidebar-${e2.config.type}`, { active: H(n2, e2.config, true) }], exact: true }), He$1(e2.config.children)];
} }), kt = defineComponent({ name: "SidebarGroup", props: { config: { type: Object, required: true }, open: { type: Boolean, required: true } }, emits: ["toggle"], setup(e2, { emit: n2 }) {
  const t2 = useRoute(), o2 = computed(() => H(t2, e2.config)), r2 = computed(() => H(t2, e2.config, true));
  return () => {
    const { collapsible: l2, children: s2 = [], icon: i2, prefix: v2, link: c2, text: p2 } = e2.config;
    return h("section", { class: "vp-sidebar-group" }, [h(l2 ? "button" : "p", { class: ["vp-sidebar-heading", { clickable: l2 || c2, exact: r2.value, active: o2.value }], ...l2 ? { type: "button", onClick: () => n2("toggle"), onKeydown: (m2) => {
      m2.key === "Enter" && n2("toggle");
    } } : {} }, [h(D$2, { icon: i2 }), c2 ? h(S$1, { class: "vp-sidebar-title", config: { text: p2, link: c2 }, noExternalLinkIcon: true }) : h("span", { class: "vp-sidebar-title" }, p2), l2 ? h("span", { class: ["vp-arrow", e2.open ? "down" : "end"] }) : null]), e2.open || !l2 ? h(ta, { key: v2, config: s2 }) : null]);
  };
} }), ta = defineComponent({ name: "SidebarLinks", props: { config: { type: Array, required: true } }, setup(e2) {
  const n2 = useRoute(), t2 = ref(-1), o2 = (r2) => {
    t2.value = r2 === t2.value ? -1 : r2;
  };
  return watch(() => n2.path, () => {
    const r2 = e2.config.findIndex((l2) => Oe(n2, l2));
    t2.value = r2;
  }, { immediate: true, flush: "post" }), () => h("ul", { class: "vp-sidebar-links" }, e2.config.map((r2, l2) => h("li", r2.type === "group" ? h(kt, { config: r2, open: l2 === t2.value, onToggle: () => o2(l2) }) : h(yt, { config: r2 }))));
} }), wt = defineComponent({ name: "SideBar", slots: Object, setup(e2, { slots: n2 }) {
  const t2 = useRoute(), o2 = m$2(), r2 = ge$1(), l2 = shallowRef();
  return onMounted(() => {
    watch(() => t2.hash, (s2) => {
      const i2 = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t2.path}${s2}"]`);
      if (!i2)
        return;
      const { top: v2, height: c2 } = l2.value.getBoundingClientRect(), { top: p2, height: m2 } = i2.getBoundingClientRect();
      p2 < v2 ? i2.scrollIntoView(true) : p2 + m2 > v2 + c2 && i2.scrollIntoView(false);
    }, { immediate: true });
  }), () => {
    var _a2, _b2, _c;
    return h("aside", { ref: l2, id: "sidebar", class: ["vp-sidebar", { "hide-icon": o2.value.sidebarIcon === false }] }, [(_a2 = n2.top) == null ? void 0 : _a2.call(n2), ((_b2 = n2.default) == null ? void 0 : _b2.call(n2)) || h(ta, { config: r2.value }), (_c = n2.bottom) == null ? void 0 : _c.call(n2)]);
  };
} }), It = defineComponent({ name: "CommonWrapper", props: { containerClass: { type: String, default: "" }, noNavbar: Boolean, noSidebar: Boolean, noToc: Boolean }, slots: Object, setup(e2, { slots: n2 }) {
  const t2 = useRouter(), o2 = usePageData(), r2 = usePageFrontmatter(), l2 = m$2(), { isMobile: s2, isPC: i2 } = ee(), [v2, c2] = useToggle(false), [p2, m2] = useToggle(false), y2 = ge$1(), f2 = ref(false), C2 = computed(() => e2.noNavbar || r2.value.navbar === false || l2.value.navbar === false ? false : !!(o2.value.title || l2.value.logo || l2.value.repo || l2.value.navbar)), j2 = computed(() => e2.noSidebar ? false : r2.value.sidebar !== false && y2.value.length !== 0 && !r2.value.home), k2 = computed(() => e2.noToc || r2.value.home ? false : r2.value.toc || l2.value.toc !== false && r2.value.toc !== false), w2 = { x: 0, y: 0 }, M = (b2) => {
    w2.x = b2.changedTouches[0].clientX, w2.y = b2.changedTouches[0].clientY;
  }, W2 = (b2) => {
    const F2 = b2.changedTouches[0].clientX - w2.x, te2 = b2.changedTouches[0].clientY - w2.y;
    Math.abs(F2) > Math.abs(te2) * 1.5 && Math.abs(F2) > 40 && (F2 > 0 && w2.x <= 80 ? c2(true) : c2(false));
  }, U2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let V2 = 0;
  return useEventListener("scroll", useThrottleFn(() => {
    const b2 = U2();
    b2 <= 58 || b2 < V2 ? f2.value = false : V2 + 200 < b2 && !v2.value && (f2.value = true), V2 = b2;
  }, 300, true)), watch(s2, (b2) => {
    b2 || c2(false);
  }), onMounted(() => {
    const b2 = useScrollLock(document.body);
    watch(v2, (te2) => {
      b2.value = te2;
    });
    const F2 = t2.afterEach(() => {
      c2(false);
    });
    onUnmounted(() => {
      b2.value = false, F2();
    });
  }), () => h(B$1("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : T$1, () => h("div", { class: ["theme-container", { "no-navbar": !C2.value, "no-sidebar": !j2.value && !(n2.sidebar || n2.sidebarTop || n2.sidebarBottom), "has-toc": k2.value, "hide-navbar": f2.value, "sidebar-collapsed": !s2.value && !i2.value && p2.value, "sidebar-open": s2.value && v2.value }, e2.containerClass, r2.value.containerClass || ""], onTouchStart: M, onTouchEnd: W2 }, [C2.value ? h(ft, { onToggleSidebar: () => c2() }, { startBefore: () => {
    var _a2;
    return (_a2 = n2.navbarStartBefore) == null ? void 0 : _a2.call(n2);
  }, startAfter: () => {
    var _a2;
    return (_a2 = n2.navbarStartAfter) == null ? void 0 : _a2.call(n2);
  }, centerBefore: () => {
    var _a2;
    return (_a2 = n2.navbarCenterBefore) == null ? void 0 : _a2.call(n2);
  }, centerAfter: () => {
    var _a2;
    return (_a2 = n2.navbarCenterAfter) == null ? void 0 : _a2.call(n2);
  }, endBefore: () => {
    var _a2;
    return (_a2 = n2.navbarEndBefore) == null ? void 0 : _a2.call(n2);
  }, endAfter: () => {
    var _a2;
    return (_a2 = n2.navbarEndAfter) == null ? void 0 : _a2.call(n2);
  }, screenTop: () => {
    var _a2;
    return (_a2 = n2.navScreenTop) == null ? void 0 : _a2.call(n2);
  }, screenBottom: () => {
    var _a2;
    return (_a2 = n2.navScreenBottom) == null ? void 0 : _a2.call(n2);
  } }) : null, h(Transition, { name: "fade" }, () => v2.value ? h("div", { class: "vp-sidebar-mask", onClick: () => c2(false) }) : null), h(Transition, { name: "fade" }, () => s2.value ? null : h("div", { class: "toggle-sidebar-wrapper", onClick: () => m2() }, h("span", { class: ["arrow", p2.value ? "end" : "start"] }))), h(wt, {}, { ...n2.sidebar ? { default: () => n2.sidebar() } : {}, top: () => {
    var _a2;
    return (_a2 = n2.sidebarTop) == null ? void 0 : _a2.call(n2);
  }, bottom: () => {
    var _a2;
    return (_a2 = n2.sidebarBottom) == null ? void 0 : _a2.call(n2);
  } }), n2.default(), h(at)]));
} }), Lt = defineComponent({ name: "DropTransition", props: { type: { type: String, default: "single" }, delay: { type: Number, default: 0 }, duration: { type: Number, default: 0.25 }, appear: Boolean }, slots: Object, setup(e2, { slots: n2 }) {
  const t2 = (r2) => {
    r2.style.transition = `transform ${e2.duration}s ease-in-out ${e2.delay}s, opacity ${e2.duration}s ease-in-out ${e2.delay}s`, r2.style.transform = "translateY(-20px)", r2.style.opacity = "0";
  }, o2 = (r2) => {
    r2.style.transform = "translateY(0)", r2.style.opacity = "1";
  };
  return () => h(e2.type === "single" ? Transition : TransitionGroup, { name: "drop", appear: e2.appear, onAppear: t2, onAfterAppear: o2, onEnter: t2, onAfterEnter: o2, onBeforeLeave: t2 }, () => n2.default());
} });
const ye$1 = ({ custom: e2 }) => h(Content, { class: ["theme-hope-content", { custom: e2 }] });
ye$1.displayName = "MarkdownContent", ye$1.props = { custom: Boolean };
var Tt = ye$1;
const na = () => h(r, { name: "author" }, () => h("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
na.displayName = "AuthorIcon";
const la = () => h(r, { name: "calendar" }, () => h("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
la.displayName = "CalendarIcon";
const oa = () => h(r, { name: "category" }, () => h("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
oa.displayName = "CategoryIcon";
const ra = () => h(r, { name: "eye" }, () => h("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
ra.displayName = "EyeIcon";
const sa = () => h(r, { name: "fire" }, () => h("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
sa.displayName = "FireIcon";
const ia = () => h(r, { name: "print" }, () => h("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
ia.displayName = "PrintIcon";
const ca = () => h(r, { name: "tag" }, () => h("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
ca.displayName = "TagIcon";
const ua = () => h(r, { name: "timer" }, () => h("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
ua.displayName = "TimerIcon";
const pa = () => h(r, { name: "word" }, () => [h("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
pa.displayName = "WordIcon";
const x$1 = () => {
  const e2 = m$2();
  return computed(() => e2.value.metaLocales);
};
var St = defineComponent({ name: "AuthorInfo", inheritAttrs: false, props: { author: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const n2 = x$1();
  return () => e2.author.length ? h("span", { class: "page-author-info", "aria-label": `${n2.value.author}${e2.pure ? "" : "🖊"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(na), h("span", e2.author.map((t2) => t2.url ? h("a", { class: "page-author-item", href: t2.url, target: "_blank", rel: "noopener noreferrer" }, t2.name) : h("span", { class: "page-author-item" }, t2.name))), h("span", { property: "author", content: e2.author.map((t2) => t2.name).join(", ") })]) : null;
} }), Ct = defineComponent({ name: "CategoryInfo", inheritAttrs: false, props: { category: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const n2 = useRouter(), t2 = usePageData(), o2 = x$1(), r2 = (l2, s2 = "") => {
    s2 && t2.value.path !== s2 && (l2.preventDefault(), n2.push(s2));
  };
  return () => e2.category.length ? h("span", { class: "page-category-info", "aria-label": `${o2.value.category}${e2.pure ? "" : "🌈"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(oa), e2.category.map(({ name: l2, path: s2 }) => h("span", { class: ["page-category-item", { [`category${Y$1(l2, 9)}`]: !e2.pure, clickable: s2 }], role: s2 ? "navigation" : "", onClick: (i2) => r2(i2, s2) }, l2)), h("meta", { property: "articleSection", content: e2.category.map(({ name: l2 }) => l2).join(",") })]) : null;
} }), $t = defineComponent({ name: "DateInfo", inheritAttrs: false, props: { date: { type: Object, default: null }, localizedDate: { type: String, default: "" }, pure: Boolean }, setup(e2) {
  const n2 = usePageLang(), t2 = x$1();
  return () => e2.date ? h("span", { class: "page-date-info", "aria-label": `${t2.value.date}${e2.pure ? "" : "📅"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(la), h("span", h(ClientOnly, () => e2.localizedDate || e2.date.toLocaleDateString(n2.value))), h("meta", { property: "datePublished", content: e2.date.toISOString() || "" })]) : null;
} }), xt = defineComponent({ name: "OriginalInfo", inheritAttrs: false, props: { isOriginal: Boolean }, setup(e2) {
  const n2 = x$1();
  return () => e2.isOriginal ? h("span", { class: "page-original-info" }, n2.value.origin) : null;
} });
defineComponent({ name: "PageViewInfo", inheritAttrs: false, props: { pageview: { type: [Boolean, String], default: false }, pure: Boolean }, setup(e2) {
  const n2 = useRoute(), t2 = x$1(), o2 = shallowRef(), r2 = ref(0);
  return useMutationObserver(o2, () => {
    const l2 = o2.value.textContent;
    l2 && !isNaN(Number(l2)) && (r2.value = Number(l2));
  }, { childList: true }), () => e2.pageview ? h("span", { class: "page-pageview-info", "aria-label": `${t2.value.views}${e2.pure ? "" : "🔢"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(r2.value < 1e3 ? ra : sa), h("span", { ref: o2, id: "ArtalkPV", class: "waline-pageview-count", "data-path": isString(e2.pageview) ? e2.pageview : n2.path }, "...")]) : null;
} });
var At = defineComponent({ name: "ReadingTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const n2 = x$1(), t2 = computed(() => {
    if (!e2.readingTime)
      return null;
    const { minutes: o2 } = e2.readingTime;
    return o2 < 1 ? "PT1M" : `PT${Math.round(o2)}M`;
  });
  return () => {
    var _a2, _b2;
    return ((_a2 = e2.readingTimeLocale) == null ? void 0 : _a2.time) ? h("span", { class: "page-reading-time-info", "aria-label": `${n2.value.readingTime}${e2.pure ? "" : "⌛"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(ua), h("span", (_b2 = e2.readingTimeLocale) == null ? void 0 : _b2.time), h("meta", { property: "timeRequired", content: t2.value })]) : null;
  };
} }), Bt = defineComponent({ name: "TagInfo", inheritAttrs: false, props: { tag: { type: Array, default: () => [] }, pure: Boolean }, setup(e2) {
  const n2 = useRouter(), t2 = usePageData(), o2 = x$1(), r2 = (l2, s2 = "") => {
    s2 && t2.value.path !== s2 && (l2.preventDefault(), n2.push(s2));
  };
  return () => e2.tag.length ? h("span", { class: "page-tag-info", "aria-label": `${o2.value.tag}${e2.pure ? "" : "🏷"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(ca), e2.tag.map(({ name: l2, path: s2 }) => h("span", { class: ["page-tag-item", { [`tag${Y$1(l2, 9)}`]: !e2.pure, clickable: s2 }], role: s2 ? "navigation" : "", onClick: (i2) => r2(i2, s2) }, l2)), h("meta", { property: "keywords", content: e2.tag.map(({ name: l2 }) => l2).join(",") })]) : null;
} }), Et = defineComponent({ name: "ReadTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const n2 = x$1();
  return () => {
    var _a2, _b2, _c;
    return ((_a2 = e2.readingTimeLocale) == null ? void 0 : _a2.words) ? h("span", { class: "page-word-info", "aria-label": `${n2.value.words}${e2.pure ? "" : "🔠"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h(pa), h("span", (_b2 = e2.readingTimeLocale) == null ? void 0 : _b2.words), h("meta", { property: "wordCount", content: (_c = e2.readingTime) == null ? void 0 : _c.words })]) : null;
  };
} }), Dt = defineComponent({ name: "PageInfo", components: { AuthorInfo: St, CategoryInfo: Ct, DateInfo: $t, OriginalInfo: xt, PageViewInfo: () => null, ReadingTimeInfo: At, TagInfo: Bt, WordInfo: Et }, props: { items: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"] }, info: { type: Object, required: true } }, setup(e2) {
  const n2 = o$1();
  return () => e2.items ? h("div", { class: "page-info" }, e2.items.map((t2) => h(resolveComponent(`${t2}Info`), { ...e2.info, pure: n2.value }))) : null;
} }), zt = defineComponent({ name: "PrintButton", setup() {
  const e2 = e$1(), n2 = m$2();
  return () => e2.value.print === false ? null : h("button", { type: "button", class: "print-button", title: n2.value.metaLocales.print, onClick: () => {
    window.print();
  } }, h(ia));
} });
const Nt = ({ title: e2, level: n2, slug: t2 }) => h(RouteLink, { to: `#${t2}`, class: ["toc-link", `level${n2}`] }, () => e2), ke$1 = (e2, n2) => {
  const t2 = useRoute();
  return e2.length && n2 > 0 ? h("ul", { class: "toc-list" }, e2.map((o2) => {
    const r2 = ke$1(o2.children, n2 - 1);
    return [h("li", { class: ["toc-item", { active: t2.hash === `#${o2.slug}` }] }, Nt(o2)), r2 ? h("li", r2) : null];
  })) : null;
};
var Vt = defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, slots: Object, setup(e2, { slots: n2 }) {
  const t2 = useRoute(), o2 = usePageData(), r2 = x$1(), l2 = shallowRef(), s2 = ref("-1.7rem"), i2 = (c2) => {
    var _a2;
    (_a2 = l2.value) == null ? void 0 : _a2.scrollTo({ top: c2, behavior: "smooth" });
  }, v2 = () => {
    if (l2.value) {
      const c2 = document.querySelector(".toc-item.active");
      c2 ? s2.value = `${c2.getBoundingClientRect().top - l2.value.getBoundingClientRect().top + l2.value.scrollTop}px` : s2.value = "-1.7rem";
    } else
      s2.value = "-1.7rem";
  };
  return onMounted(() => {
    watch(() => t2.hash, (c2) => {
      if (l2.value) {
        const p2 = document.querySelector(`#toc a.toc-link[href$="${c2}"]`);
        if (!p2)
          return;
        const { top: m2, height: y2 } = l2.value.getBoundingClientRect(), { top: f2, height: C2 } = p2.getBoundingClientRect();
        f2 < m2 ? i2(l2.value.scrollTop + f2 - m2) : f2 + C2 > m2 + y2 && i2(l2.value.scrollTop + f2 + C2 - m2 - y2);
      }
    }), watch(() => t2.fullPath, v2, { flush: "post", immediate: true });
  }), () => {
    var _a2, _b2;
    const c2 = e2.items.length ? ke$1(e2.items, e2.headerDepth) : o2.value.headers ? ke$1(o2.value.headers, e2.headerDepth) : null;
    return c2 ? h("div", { class: "toc-place-holder" }, [h("aside", { id: "toc" }, [(_a2 = n2.before) == null ? void 0 : _a2.call(n2), h("div", { class: "toc-header" }, [r2.value.toc, h(zt)]), h("div", { class: "toc-wrapper", ref: l2 }, [c2, h("div", { class: "toc-marker", style: { top: s2.value } })]), (_b2 = n2.after) == null ? void 0 : _b2.call(n2)])]) : null;
  };
} }), Ot = defineComponent({ name: "SkipLink", props: { content: { type: String, default: "main-content" } }, setup(e2) {
  const n2 = usePageData(), t2 = m$2(), o2 = shallowRef(), r2 = ({ target: l2 }) => {
    const s2 = document.querySelector(l2.hash);
    if (s2) {
      const i2 = () => {
        s2.removeAttribute("tabindex"), s2.removeEventListener("blur", i2);
      };
      s2.setAttribute("tabindex", "-1"), s2.addEventListener("blur", i2), s2.focus(), window.scrollTo(0, 0);
    }
  };
  return onMounted(() => {
    watch(() => n2.value.path, () => o2.value.focus());
  }), () => [h("span", { ref: o2, tabindex: "-1" }), h("a", { href: `#${e2.content}`, class: "vp-skip-link sr-only", onClick: r2 }, t2.value.routeLocales.skipToContent)];
} });
let e = null, n = null;
const d$1 = { wait: () => e, pending: () => {
  e = new Promise((o2) => {
    n = o2;
  });
}, resolve: () => {
  n == null ? void 0 : n(), e = null, n = null;
} }, l = () => d$1;
var m$1 = defineComponent({ name: "FadeSlideY", slots: Object, setup(o2, { slots: t2 }) {
  const { resolve: s2, pending: r2 } = l();
  return () => h(Transition, { name: "fade-slide-y", mode: "out-in", onBeforeEnter: s2, onBeforeLeave: r2 }, () => {
    var _a2;
    return (_a2 = t2.default) == null ? void 0 : _a2.call(t2);
  });
} });
const ge = (n2, a) => {
  const t2 = n2.replace(a, "/").split("/"), i2 = [];
  let l2 = removeEndingSlash(a);
  return t2.forEach((s2, r2) => {
    r2 !== t2.length - 1 ? (l2 += `${s2}/`, i2.push({ link: l2, name: s2 || "Home" })) : s2 !== "" && (l2 += s2, i2.push({ link: l2, name: s2 }));
  }), i2;
}, G$1 = (n2, { slots: a }) => {
  var _a2, _b2;
  const { bgImage: t2, bgImageDark: i2, bgImageStyle: l2, color: s2, description: r2, image: o2, imageDark: c2, header: u2, features: p2 = [] } = n2;
  return h("div", { class: "vp-feature-wrapper" }, [t2 ? h("div", { class: ["vp-feature-bg", { light: i2 }], style: [{ "background-image": `url(${t2})` }, l2] }) : null, i2 ? h("div", { class: "vp-feature-bg dark", style: [{ "background-image": `url(${i2})` }, l2] }) : null, h("div", { class: "vp-feature", style: s2 ? { color: s2 } : {} }, [((_a2 = a.image) == null ? void 0 : _a2.call(a, n2)) || [o2 ? h("img", { class: ["vp-feature-image", { light: c2 }], src: withBase(o2), alt: "" }) : null, c2 ? h("img", { class: "vp-feature-image dark", src: withBase(c2), alt: "" }) : null], ((_b2 = a.info) == null ? void 0 : _b2.call(a, n2)) || [u2 ? h("h2", { class: "vp-feature-header" }, u2) : null, r2 ? h("p", { class: "vp-feature-description", innerHTML: r2 }) : null], p2.length ? h("div", { class: "vp-features" }, p2.map(({ icon: m2, title: h$1, details: L2, link: D2 }) => {
    const b2 = [h("h3", { class: "vp-feature-title" }, [h(D$2, { icon: m2 }), h("span", { innerHTML: h$1 })]), h("p", { class: "vp-feature-details", innerHTML: L2 })];
    return D2 ? isLinkExternal(D2) ? h("a", { class: "vp-feature-item link", href: D2, "aria-label": h$1, target: "_blank" }, b2) : h(RouteLink, { class: "vp-feature-item link", to: D2, "aria-label": h$1 }, () => b2) : h("div", { class: "vp-feature-item" }, b2);
  })) : null])]);
};
G$1.displayName = "FeaturePanel";
var U$1 = G$1, fe = defineComponent({ name: "HeroInfo", slots: Object, setup(n2, { slots: a }) {
  const t2 = usePageFrontmatter(), i2 = useSiteLocaleData(), l2 = computed(() => t2.value.heroFullScreen ?? false), s2 = computed(() => {
    const { heroText: u2, tagline: p2 } = t2.value;
    return { text: u2 ?? i2.value.title ?? "Hello", tagline: p2 ?? i2.value.description ?? "", isFullScreen: l2.value };
  }), r2 = computed(() => {
    const { heroText: u2, heroImage: p2, heroImageDark: m2, heroAlt: h2, heroImageStyle: L2 } = t2.value;
    return { image: p2 ? withBase(p2) : null, imageDark: m2 ? withBase(m2) : null, heroStyle: L2, alt: h2 || u2 || "", isFullScreen: l2.value };
  }), o2 = computed(() => {
    const { bgImage: u2, bgImageDark: p2, bgImageStyle: m2 } = t2.value;
    return { image: isString(u2) ? withBase(u2) : null, imageDark: isString(p2) ? withBase(p2) : null, bgStyle: m2, isFullScreen: l2.value };
  }), c2 = computed(() => t2.value.actions ?? []);
  return () => {
    var _a2, _b2, _c;
    return h("header", { class: ["vp-hero-info-wrapper", { fullscreen: l2.value }] }, [((_a2 = a.heroBg) == null ? void 0 : _a2.call(a, o2.value)) || [o2.value.image ? h("div", { class: ["vp-hero-mask", { light: o2.value.imageDark }], style: [{ "background-image": `url(${o2.value.image})` }, o2.value.bgStyle] }) : null, o2.value.imageDark ? h("div", { class: "vp-hero-mask dark", style: [{ "background-image": `url(${o2.value.imageDark})` }, o2.value.bgStyle] }) : null], h("div", { class: "vp-hero-info" }, [((_b2 = a.heroImage) == null ? void 0 : _b2.call(a, r2.value)) || h(Lt, { appear: true, type: "group" }, () => [r2.value.image ? h("img", { key: "light", class: ["vp-hero-image", { light: r2.value.imageDark }], style: r2.value.heroStyle, src: r2.value.image, alt: r2.value.alt }) : null, r2.value.imageDark ? h("img", { key: "dark", class: "vp-hero-image dark", style: r2.value.heroStyle, src: r2.value.imageDark, alt: r2.value.alt }) : null]), ((_c = a.heroInfo) == null ? void 0 : _c.call(a, s2.value)) ?? h("div", { class: "vp-hero-infos" }, [s2.value.text ? h(Lt, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title" }, s2.value.text)) : null, s2.value.tagline ? h(Lt, { appear: true, delay: 0.08 }, () => h("p", { id: "main-description", innerHTML: s2.value.tagline })) : null, c2.value.length ? h(Lt, { appear: true, delay: 0.12 }, () => h("p", { class: "vp-hero-actions" }, c2.value.map((u2) => h(S$1, { class: ["vp-hero-action", u2.type || "default"], config: u2, noExternalLinkIcon: true }, u2.icon ? { before: () => h(D$2, { icon: u2.icon }) } : {})))) : null])])]);
  };
} });
const V = (n2, { slots: a }) => {
  var _a2, _b2, _c;
  const { bgImage: t2, bgImageDark: i2, bgImageStyle: l2, color: s2, description: r2, image: o2, imageDark: c2, header: u2, highlights: p2 = [], type: m2 = "un-order" } = n2;
  return h("div", { class: "vp-highlight-wrapper", style: s2 ? { color: s2 } : {} }, [t2 ? h("div", { class: ["vp-highlight-bg", { light: i2 }], style: [{ "background-image": `url(${t2})` }, l2] }) : null, i2 ? h("div", { class: "vp-highlight-bg dark", style: [{ "background-image": `url(${i2})` }, l2] }) : null, h("div", { class: "vp-highlight" }, [((_a2 = a.image) == null ? void 0 : _a2.call(a, n2)) || [o2 ? h("img", { class: ["vp-highlight-image", { light: c2 }], src: withBase(o2), alt: "" }) : null, c2 ? h("img", { class: "vp-highlight-image dark", src: withBase(c2), alt: "" }) : null], ((_b2 = a.info) == null ? void 0 : _b2.call(a, n2)) || [h("div", { class: "vp-highlight-info-wrapper" }, h("div", { class: "vp-highlight-info" }, [u2 ? h("h2", { class: "vp-highlight-header", innerHTML: u2 }) : null, r2 ? h("p", { class: "vp-highlight-description", innerHTML: r2 }) : null, ((_c = a.highlights) == null ? void 0 : _c.call(a, p2)) || h(m2 === "order" ? "ol" : m2 === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, p2.map(({ icon: h$1, title: L2, details: D2, link: b2 }) => {
    const P2 = [h(m2 === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [h$1 ? h(D$2, { class: "vp-highlight-icon", icon: h$1 }) : null, h("span", { innerHTML: L2 })]), D2 ? h(m2 === "no-order" ? "dd" : "p", { class: "vp-highlight-details", innerHTML: D2 }) : null];
    return h(m2 === "no-order" ? "div" : "li", { class: ["vp-highlight-item-wrapper", { link: b2 }] }, b2 ? isLinkExternal(b2) ? h("a", { class: "vp-highlight-item link", href: b2, "aria-label": L2, target: "_blank" }, P2) : h(RouteLink, { class: "vp-highlight-item link", to: b2, "aria-label": L2 }, () => P2) : h("div", { class: "vp-highlight-item" }, P2));
  }))]))]])]);
};
V.displayName = "HighlightPanel";
var be = V, ke = defineComponent({ name: "HomePage", slots: Object, setup(n2, { slots: a }) {
  const t2 = o$1(), i2 = usePageFrontmatter(), l2 = computed(() => {
    const { features: r2 } = i2.value;
    return isArray(r2) ? r2 : null;
  }), s2 = computed(() => {
    const { highlights: r2 } = i2.value;
    return isArray(r2) ? r2 : null;
  });
  return () => {
    var _a2, _b2, _c, _d;
    return h("main", { id: "main-content", class: ["vp-project-home ", { pure: t2.value }], "aria-labelledby": i2.value.heroText === null ? "" : "main-title" }, [(_a2 = a.top) == null ? void 0 : _a2.call(a), h(fe), ((_b2 = s2.value) == null ? void 0 : _b2.map((r2) => "features" in r2 ? h(U$1, r2) : h(be, r2))) || (l2.value ? h(Lt, { appear: true, delay: 0.24 }, () => h(U$1, { features: l2.value })) : null), (_c = a.center) == null ? void 0 : _c.call(a), h(Lt, { appear: true, delay: 0.32 }, () => h(Tt)), (_d = a.bottom) == null ? void 0 : _d.call(a)]);
  };
} }), ye = defineComponent({ name: "BreadCrumb", setup() {
  const n2 = usePageData(), a = useRouteLocale(), t2 = usePageFrontmatter(), i2 = m$2(), l2 = shallowRef([]), s2 = computed(() => (t2.value.breadcrumb || t2.value.breadcrumb !== false && i2.value.breadcrumb !== false) && l2.value.length > 1), r2 = computed(() => t2.value.breadcrumbIcon || t2.value.breadcrumbIcon !== false && i2.value.breadcrumbIcon !== false), o2 = () => {
    const c2 = ge(n2.value.path, a.value).map(({ link: u2, name: p2 }) => {
      const { path: m2, meta: h2 } = resolveRoute(u2);
      return h2 ? { title: h2[z$1.shortTitle] || h2[z$1.title] || p2, icon: h2[z$1.icon], path: m2 } : null;
    }).filter((u2) => u2 !== null);
    c2.length > 1 && (l2.value = c2);
  };
  return onMounted(() => {
    watch(() => n2.value.path, o2, { immediate: true });
  }), () => h("nav", { class: ["vp-breadcrumb", { disable: !s2.value }] }, s2.value ? h("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, l2.value.map((c2, u2) => h("li", { class: { "is-active": l2.value.length - 1 === u2 }, property: "itemListElement", typeof: "ListItem" }, [h(RouteLink, { to: c2.path, property: "item", typeof: "WebPage" }, () => [r2.value ? h(D$2, { icon: c2.icon }) : null, h("span", { property: "name" }, c2.title || "Unknown")]), h("meta", { property: "position", content: u2 + 1 })]))) : []);
} });
const z = (n2) => n2 === false || isPlainObject(n2) ? n2 : isString(n2) ? R$2(n2, true) : null, A$1 = (n2, a, t2) => {
  const i2 = n2.findIndex((l2) => l2.link === a);
  if (i2 !== -1) {
    const l2 = n2[i2 + t2];
    return (l2 == null ? void 0 : l2.link) ? l2 : null;
  }
  for (const l2 of n2)
    if (l2.children) {
      const s2 = A$1(l2.children, a, t2);
      if (s2)
        return s2;
    }
  return null;
};
var Le = defineComponent({ name: "PageNav", setup() {
  const n2 = m$2(), a = usePageFrontmatter(), t2 = ge$1(), i2 = usePageData(), l2 = Fa(), s2 = computed(() => {
    const o2 = z(a.value.prev);
    return o2 === false ? null : o2 || (n2.value.prevLink === false ? null : A$1(t2.value, i2.value.path, -1));
  }), r2 = computed(() => {
    const o2 = z(a.value.next);
    return o2 === false ? null : o2 || (n2.value.nextLink === false ? null : A$1(t2.value, i2.value.path, 1));
  });
  return useEventListener("keydown", (o2) => {
    o2.altKey && (o2.key === "ArrowRight" ? r2.value && (l2(r2.value.link), o2.preventDefault()) : o2.key === "ArrowLeft" && s2.value && (l2(s2.value.link), o2.preventDefault()));
  }), () => s2.value || r2.value ? h("nav", { class: "vp-page-nav" }, [s2.value ? h(S$1, { class: "prev", config: s2.value }, () => {
    var _a2, _b2;
    return [h("div", { class: "hint" }, [h("span", { class: "arrow start" }), n2.value.metaLocales.prev]), h("div", { class: "link" }, [h(D$2, { icon: (_a2 = s2.value) == null ? void 0 : _a2.icon }), (_b2 = s2.value) == null ? void 0 : _b2.text])];
  }) : null, r2.value ? h(S$1, { class: "next", config: r2.value }, () => {
    var _a2, _b2;
    return [h("div", { class: "hint" }, [n2.value.metaLocales.next, h("span", { class: "arrow end" })]), h("div", { class: "link" }, [(_a2 = r2.value) == null ? void 0 : _a2.text, h(D$2, { icon: (_b2 = r2.value) == null ? void 0 : _b2.icon })])];
  }) : null]) : null;
} });
const De = { GitHub: ":repo/edit/:branch/:path", GitLab: ":repo/-/edit/:branch/:path", Gitee: ":repo/edit/:branch/:path", Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default" }, Ie = ({ docsRepo: n2, docsBranch: a, docsDir: t2, filePathRelative: i2, editLinkPattern: l2 }) => {
  if (!i2)
    return null;
  const s2 = Z$1(n2);
  let r2;
  return l2 ? r2 = l2 : s2 !== null && (r2 = De[s2]), r2 ? r2.replace(/:repo/u, isLinkHttp(n2) ? n2 : `https://github.com/${n2}`).replace(/:branch/u, a).replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(t2)}/${i2}`)) : null;
}, Se = () => {
  const n2 = m$2(), a = usePageData(), t2 = usePageFrontmatter();
  return computed(() => {
    const { repo: i2, docsRepo: l2 = i2, docsBranch: s2 = "main", docsDir: r2 = "", editLink: o2, editLinkPattern: c2 = "" } = n2.value;
    if (!(t2.value.editLink ?? o2 ?? true) || !l2)
      return null;
    const u2 = Ie({ docsRepo: l2, docsBranch: s2, docsDir: r2, editLinkPattern: c2, filePathRelative: a.value.filePathRelative });
    return u2 ? { text: n2.value.metaLocales.editLink, link: u2 } : null;
  });
}, $e = () => {
  const n2 = useSiteLocaleData(), a = m$2(), t2 = usePageData(), i2 = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    return !(i2.value.lastUpdated ?? a.value.lastUpdated ?? true) || !((_a2 = t2.value.git) == null ? void 0 : _a2.updatedTime) ? null : new Date((_b2 = t2.value.git) == null ? void 0 : _b2.updatedTime).toLocaleString(n2.value.lang);
  });
}, we = () => {
  const n2 = m$2(), a = usePageData(), t2 = usePageFrontmatter();
  return computed(() => {
    var _a2;
    return t2.value.contributors ?? n2.value.contributors ?? true ? ((_a2 = a.value.git) == null ? void 0 : _a2.contributors) ?? null : null;
  });
};
var Pe = defineComponent({ name: "PageTitle", setup() {
  const n2 = usePageData(), a = usePageFrontmatter(), t2 = m$2(), { info: i2, items: l2 } = Ua();
  return () => h("div", { class: "vp-page-title" }, [h("h1", [t2.value.titleIcon === false ? null : h(D$2, { icon: a.value.icon }), n2.value.title]), h(Dt, { info: i2.value, ...l2.value === null ? {} : { items: l2.value } }), h("hr")]);
} });
const _$1 = () => h(r, { name: "edit" }, () => [h("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
_$1.displayName = "EditIcon";
var Te = defineComponent({ name: "PageMeta", setup() {
  const n2 = m$2(), a = Se(), t2 = $e(), i2 = we();
  return () => {
    const { metaLocales: l2 } = n2.value;
    return h("footer", { class: "page-meta" }, [a.value ? h("div", { class: "meta-item edit-link" }, h(S$1, { class: "label", config: a.value }, { before: () => h(_$1) })) : null, h("div", { class: "meta-item git-info" }, [t2.value ? h("div", { class: "update-time" }, [h("span", { class: "label" }, `${l2.lastUpdated}: `), h(ClientOnly, () => h("span", { class: "info" }, t2.value))]) : null, i2.value && i2.value.length ? h("div", { class: "contributors" }, [h("span", { class: "label" }, `${l2.contributors}: `), i2.value.map(({ email: s2, name: r2 }, o2) => [h("span", { class: "contributor", title: `email: ${s2}` }, r2), o2 !== i2.value.length - 1 ? "," : ""])]) : null])]);
  };
} }), Be = defineComponent({ name: "NormalPage", slots: Object, setup(n2, { slots: a }) {
  const t2 = usePageFrontmatter(), { isDarkmode: i2 } = G$2(), l2 = m$2(), s2 = computed(() => t2.value.toc || t2.value.toc !== false && l2.value.toc !== false);
  return () => h("main", { id: "main-content", class: "vp-page" }, h(B$1("LocalEncrypt") ? resolveComponent("LocalEncrypt") : T$1, () => {
    var _a2, _b2, _c, _d;
    return [(_a2 = a.top) == null ? void 0 : _a2.call(a), t2.value.cover ? h("div", { class: "page-cover" }, h("img", { src: withBase(t2.value.cover), alt: "", "no-view": "" })) : null, h(ye), h(Pe), s2.value ? h(Vt, { headerDepth: t2.value.headerDepth ?? l2.value.headerDepth ?? 2 }, { before: () => {
      var _a3;
      return (_a3 = a.tocBefore) == null ? void 0 : _a3.call(a);
    }, after: () => {
      var _a3;
      return (_a3 = a.tocAfter) == null ? void 0 : _a3.call(a);
    } }) : null, (_b2 = a.contentBefore) == null ? void 0 : _b2.call(a), h(Tt), (_c = a.contentAfter) == null ? void 0 : _c.call(a), h(Te), h(Le), B$1("CommentService") ? h(resolveComponent("CommentService"), { darkmode: i2.value }) : null, (_d = a.bottom) == null ? void 0 : _d.call(a)];
  }));
} }), xe = defineComponent({ name: "Layout", slots: Object, setup(n2, { slots: a }) {
  m$2();
  const l2 = usePageData(), s2 = usePageFrontmatter(), { isMobile: r2 } = ee(), o2 = computed(() => "none");
  return () => [h(Ot), h(It, {}, { default: () => {
    var _a2;
    return ((_a2 = a.default) == null ? void 0 : _a2.call(a)) || (s2.value.home ? h(ke) : h(m$1, () => h(Be, { key: l2.value.path }, { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a);
    }, contentBefore: () => {
      var _a3;
      return (_a3 = a.contentBefore) == null ? void 0 : _a3.call(a);
    }, contentAfter: () => {
      var _a3;
      return (_a3 = a.contentAfter) == null ? void 0 : _a3.call(a);
    }, tocBefore: () => {
      var _a3;
      return (_a3 = a.tocBefore) == null ? void 0 : _a3.call(a);
    }, tocAfter: () => {
      var _a3;
      return (_a3 = a.tocAfter) == null ? void 0 : _a3.call(a);
    } })));
  }, ...o2.value === "none" ? {} : { navScreenBottom: () => h(resolveComponent("BloggerInfo")) }, ...!r2.value && o2.value === "always" ? { sidebar: () => h(resolveComponent("BloggerInfo")) } : {} })];
} }), Ae = defineComponent({ name: "NotFoundHint", setup() {
  const n2 = m$2(), a = () => {
    const t2 = n2.value.routeLocales.notFoundMsg;
    return t2[Math.floor(Math.random() * t2.length)];
  };
  return () => h("div", { class: "not-found-hint" }, [h("p", { class: "error-code" }, "404"), h("h1", { class: "error-title" }, n2.value.routeLocales.notFoundTitle), h("p", { class: "error-hint" }, a())]);
} }), He = defineComponent({ name: "NotFound", slots: Object, setup(n2, { slots: a }) {
  const t2 = useRouter(), i2 = useRouteLocale(), l2 = m$2();
  return () => [h(Ot), h(It, { noSidebar: true }, () => {
    var _a2;
    return h("main", { id: "main-content", class: "vp-page not-found" }, ((_a2 = a.default) == null ? void 0 : _a2.call(a)) || [h(Ae), h("div", { class: "actions" }, [h("button", { type: "button", class: "action-button", onClick: () => {
      window.history.go(-1);
    } }, l2.value.routeLocales.back), h("button", { type: "button", class: "action-button", onClick: () => {
      t2.push(l2.value.home ?? i2.value);
    } }, l2.value.routeLocales.home)])]);
  })];
} });
const o = () => h(r, { name: "lock" }, () => h("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
o.displayName = "LockIcon";
const A = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), I$1 = Array.from({ length: 64 }, (n2, r2) => r2), f = (n2) => Array(n2).fill(-1), E = [...f(46), 0, 1, ...I$1.slice(54, 64), ...f(7), ...I$1.slice(2, 28), ...f(6), ...I$1.slice(28, 54), ...f(5)], L = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], C$1 = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504, 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462], N = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892], S = (n2, r2) => {
  if (r2 <= 0 || r2 > n2.length)
    throw Error(`Illegal len: ${r2}`);
  let o2 = 0, t2, e2;
  const s2 = [];
  for (; o2 < r2; ) {
    if (t2 = n2[o2++] & 255, s2.push(A[t2 >> 2 & 63]), t2 = (t2 & 3) << 4, o2 >= r2) {
      s2.push(A[t2 & 63]);
      break;
    }
    if (e2 = n2[o2++] & 255, t2 |= e2 >> 4 & 15, s2.push(A[t2 & 63]), t2 = (e2 & 15) << 2, o2 >= r2) {
      s2.push(A[t2 & 63]);
      break;
    }
    e2 = n2[o2++] & 255, t2 |= e2 >> 6 & 3, s2.push(A[t2 & 63]), s2.push(A[e2 & 63]);
  }
  return s2.join("");
}, O = (n2, r2) => {
  if (r2 <= 0)
    throw Error(`Illegal len: ${r2}`);
  const o2 = n2.length;
  let t2 = 0, e2 = 0, s2, l2, h2, u2, i2, a;
  const g2 = [];
  for (; t2 < o2 - 1 && e2 < r2 && (a = n2.charCodeAt(t2++), s2 = a < E.length ? E[a] : -1, a = n2.charCodeAt(t2++), l2 = a < E.length ? E[a] : -1, !(s2 == -1 || l2 == -1 || (i2 = s2 << 2 >>> 0, i2 |= (l2 & 48) >> 4, g2.push(String.fromCharCode(i2)), ++e2 >= r2 || t2 >= o2) || (a = n2.charCodeAt(t2++), h2 = a < E.length ? E[a] : -1, h2 == -1) || (i2 = (l2 & 15) << 4 >>> 0, i2 |= (h2 & 60) >> 2, g2.push(String.fromCharCode(i2)), ++e2 >= r2 || t2 >= o2))); )
    a = n2.charCodeAt(t2++), u2 = a < E.length ? E[a] : -1, i2 = (h2 & 3) << 6 >>> 0, i2 |= u2, g2.push(String.fromCharCode(i2)), ++e2;
  return g2.map((c2) => c2.charCodeAt(0));
}, D$1 = (n2, r2) => {
  let o2 = null;
  for (typeof n2 == "number" && (o2 = n2, n2 = () => null); o2 !== null || (o2 = n2()) !== null; )
    o2 < 128 ? r2(o2 & 127) : o2 < 2048 ? (r2(o2 >> 6 & 31 | 192), r2(o2 & 63 | 128)) : o2 < 65536 ? (r2(o2 >> 12 & 15 | 224), r2(o2 >> 6 & 63 | 128), r2(o2 & 63 | 128)) : (r2(o2 >> 18 & 7 | 240), r2(o2 >> 12 & 63 | 128), r2(o2 >> 6 & 63 | 128), r2(o2 & 63 | 128)), o2 = null;
}, B = (n2, r2) => {
  let o2, t2 = null;
  for (; (o2 = t2 !== null ? t2 : n2()) !== null; ) {
    if (o2 >= 55296 && o2 <= 57343 && (t2 = n2()) !== null && t2 >= 56320 && t2 <= 57343) {
      r2((o2 - 55296) * 1024 + t2 - 56320 + 65536), t2 = null;
      continue;
    }
    r2(o2);
  }
  t2 !== null && r2(t2);
}, j$1 = (n2, r2) => {
  B(n2, function(o2) {
    D$1(o2, r2);
  });
}, w = typeof process == "object" && process.env.NEXT_RUNTIME === "edge" ? setTimeout : typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : setTimeout, k$1 = (n2) => {
  const r2 = [];
  let o2 = 0;
  return j$1(() => o2 >= n2.length ? null : n2.charCodeAt(o2++), (t2) => {
    r2.push(t2);
  }), r2;
}, T = (n2, r2, o2, t2) => {
  let e2, s2 = n2[r2], l2 = n2[r2 + 1];
  return s2 ^= o2[0], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[1], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[2], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[3], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[4], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[5], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[6], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[7], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[8], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[9], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[10], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[11], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[12], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[13], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[14], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[15], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[16], n2[r2] = l2 ^ o2[17], n2[r2 + 1] = s2, n2;
}, _ = (n2, r2) => {
  let o2 = 0;
  for (let t2 = 0; t2 < 4; ++t2)
    o2 = o2 << 8 | n2[r2] & 255, r2 = (r2 + 1) % n2.length;
  return { key: o2, offp: r2 };
}, b = (n2, r2, o2) => {
  const t2 = r2.length, e2 = o2.length;
  let s2 = 0, l2 = [0, 0], h2;
  for (let u2 = 0; u2 < t2; u2++)
    h2 = _(n2, s2), s2 = h2.offp, r2[u2] = r2[u2] ^ h2.key;
  for (let u2 = 0; u2 < t2; u2 += 2)
    l2 = T(l2, 0, r2, o2), r2[u2] = l2[0], r2[u2 + 1] = l2[1];
  for (let u2 = 0; u2 < e2; u2 += 2)
    l2 = T(l2, 0, r2, o2), o2[u2] = l2[0], o2[u2 + 1] = l2[1];
}, F = (n2, r2, o2, t2) => {
  const e2 = o2.length, s2 = t2.length;
  let l2 = 0, h2 = [0, 0], u2;
  for (let i2 = 0; i2 < e2; i2++)
    u2 = _(r2, l2), l2 = u2.offp, o2[i2] = o2[i2] ^ u2.key;
  l2 = 0;
  for (let i2 = 0; i2 < e2; i2 += 2)
    u2 = _(n2, l2), l2 = u2.offp, h2[0] ^= u2.key, u2 = _(n2, l2), l2 = u2.offp, h2[1] ^= u2.key, h2 = T(h2, 0, o2, t2), o2[i2] = h2[0], o2[i2 + 1] = h2[1];
  for (let i2 = 0; i2 < s2; i2 += 2)
    u2 = _(n2, l2), l2 = u2.offp, h2[0] ^= u2.key, u2 = _(n2, l2), l2 = u2.offp, h2[1] ^= u2.key, h2 = T(h2, 0, o2, t2), t2[i2] = h2[0], t2[i2 + 1] = h2[1];
}, R$1 = (n2, r2, o2, t2, e2) => {
  const s2 = N.slice(), l2 = s2.length;
  if (o2 < 4 || o2 > 31) {
    const c2 = new Error(`Illegal number of rounds (4-31): ${o2}`);
    if (t2 === false)
      return Promise.reject(c2);
    throw c2;
  }
  if (r2.length !== 16) {
    const c2 = new Error(`Illegal salt length: ${r2.length} != 16`);
    if (t2 === false)
      return Promise.reject(c2);
    throw c2;
  }
  o2 = 1 << o2 >>> 0;
  let h2, u2, i2 = 0, a;
  Int32Array ? (h2 = new Int32Array(L), u2 = new Int32Array(C$1)) : (h2 = L.slice(), u2 = C$1.slice()), F(r2, n2, h2, u2);
  const g2 = () => {
    if (e2 && e2(i2 / o2), i2 < o2) {
      const c2 = Date.now();
      for (; i2 < o2 && (i2 = i2 + 1, b(n2, h2, u2), b(r2, h2, u2), !(Date.now() - c2 > 100)); )
        ;
    } else {
      for (i2 = 0; i2 < 64; i2++)
        for (a = 0; a < l2 >> 1; a++)
          T(s2, a << 1, h2, u2);
      const c2 = [];
      for (i2 = 0; i2 < l2; i2++)
        c2.push((s2[i2] >> 24 & 255) >>> 0), c2.push((s2[i2] >> 16 & 255) >>> 0), c2.push((s2[i2] >> 8 & 255) >>> 0), c2.push((s2[i2] & 255) >>> 0);
      return t2 === false ? Promise.resolve(c2) : c2;
    }
    if (t2 === false)
      return new Promise((c2) => w(() => {
        g2().then(c2);
      }));
  };
  if (t2 === false)
    return g2();
  {
    let c2;
    for (; ; )
      if (typeof (c2 = g2()) < "u")
        return c2 || [];
  }
}, G = (n2) => {
  var _a2;
  try {
    const { crypto: r2, msCrypto: o2 } = window, t2 = new Uint32Array(n2);
    return (_a2 = r2 || o2) == null ? void 0 : _a2.getRandomValues(t2), Array.from(t2);
  } catch {
    throw Error("WebCryptoAPI is not available");
  }
}, m = (n2 = 10) => {
  if (typeof n2 != "number")
    throw Error("Illegal arguments: " + typeof n2);
  n2 < 4 ? n2 = 4 : n2 > 31 && (n2 = 31);
  const r2 = [];
  return r2.push("$2a$"), n2 < 10 && r2.push("0"), r2.push(n2.toString()), r2.push("$"), r2.push(S(G(16), 16)), r2.join("");
};
function d(n2, r2, o2, t2) {
  if (typeof n2 != "string" || typeof r2 != "string") {
    const p2 = new Error("Invalid string / salt: Not a string");
    if (o2 === false)
      return Promise.reject(p2);
    throw p2;
  }
  let e2, s2;
  if (r2.charAt(0) !== "$" || r2.charAt(1) !== "2") {
    const p2 = new Error("Invalid salt version: " + r2.substring(0, 2));
    if (o2 === false)
      return Promise.reject(p2);
    throw p2;
  }
  if (r2.charAt(2) === "$")
    e2 = "\0", s2 = 3;
  else {
    if (e2 = r2.charAt(2), e2 !== "a" && e2 !== "b" && e2 !== "y" || r2.charAt(3) !== "$") {
      const p2 = Error("Invalid salt revision: " + r2.substring(2, 4));
      if (o2 === false)
        return Promise.reject(p2);
      throw p2;
    }
    s2 = 4;
  }
  if (r2.charAt(s2 + 2) > "$") {
    const p2 = new Error("Missing salt rounds");
    if (o2 === false)
      return Promise.reject(p2);
    throw p2;
  }
  const l2 = parseInt(r2.substring(s2, s2 + 1), 10) * 10, h2 = parseInt(r2.substring(s2 + 1, s2 + 2), 10), u2 = l2 + h2, i2 = r2.substring(s2 + 3, s2 + 25);
  n2 += e2 >= "a" ? "\0" : "";
  const a = k$1(n2), g2 = O(i2, 16), c2 = (p2) => {
    const y2 = [];
    return y2.push("$2"), e2 >= "a" && y2.push(e2), y2.push("$"), u2 < 10 && y2.push("0"), y2.push(u2.toString()), y2.push("$"), y2.push(S(g2, g2.length)), y2.push(S(p2, N.length * 4 - 1)), y2.join("");
  };
  return o2 === false ? R$1(a, g2, u2, false, t2).then((p2) => c2(p2)) : c2(R$1(a, g2, u2, true, t2));
}
const U = (n2, r2 = 10) => {
  if (typeof r2 == "number" && (r2 = m(r2)), typeof n2 != "string" || typeof r2 != "string")
    throw Error("Illegal arguments: " + typeof n2 + ", " + typeof r2);
  return d(n2, r2, true);
}, x = (n2, r2) => {
  if (typeof n2 != "string" || typeof r2 != "string")
    throw Error("Illegal arguments: " + typeof n2 + ", " + typeof r2);
  return r2.length !== 60 ? false : U(n2, r2.substring(0, r2.length - 31)) === r2;
};
var g = defineComponent({ name: "PasswordModal", props: { full: Boolean }, emits: ["verify"], setup(l2, { emit: t2 }) {
  const r2 = usePageFrontmatter(), n2 = m$2(), o$12 = ref(""), e2 = ref(false), a = ref(false), u2 = computed(() => n2.value.encryptLocales);
  let i2 = null;
  const c2 = () => {
    i2 && clearTimeout(i2), e2.value = false, t2("verify", o$12.value, a.value), nextTick().then(() => {
      e2.value = true, i2 = setTimeout(() => {
        e2.value = false;
      }, 1e3);
    });
  };
  return () => h("div", { class: ["vp-decrypt-layer", { expand: l2.full || r2.value.home }] }, h("div", { class: "vp-decrypt-modal" }, [h("div", { class: ["vp-decrypt-hint", { tried: e2.value }] }, e2.value ? u2.value.errorHint : h(o, { "aria-label": u2.value.iconLabel })), h("div", { class: "vp-decrypt-input" }, [h("input", { type: "password", value: o$12.value, placeholder: u2.value.placeholder, onInput: ({ target: v2 }) => {
    o$12.value = v2.value;
  }, onKeydown: ({ key: v2 }) => {
    v2 === "Enter" && c2();
  } })]), h("div", { class: "vp-remember-password" }, [h("input", { type: "checkbox", value: a.value, onChange: () => a.value = !a.value }), u2.value.remember]), h("button", { type: "button", class: "vp-decrypt-submit", onClick: () => c2() }, "OK")]));
} });
const P = () => {
  const l2 = e$1();
  return computed(() => l2.value.encrypt || {});
}, k = "VUEPRESS_HOPE_GLOBAL_TOKEN", j = () => {
  const l2 = P(), t2 = useStorage(k, ""), r2 = useSessionStorage(k, ""), n2 = computed(() => {
    const { global: e2 = false, admin: a = [] } = l2.value;
    return e2 && a.length > 0;
  }), o2 = computed(() => {
    if (n2.value) {
      if (t2.value)
        return l2.value.admin.some((e2) => x(t2.value, e2));
      if (r2.value)
        return l2.value.admin.some((e2) => x(r2.value, e2));
    }
    return false;
  });
  return { isEncrypted: n2, isDecrypted: o2, validate: (e2, a = false) => {
    (a ? t2 : r2).value = e2;
  } };
}, y = (l2 = "", t2) => !!l2 && x(l2, t2), D = "VUEPRESS_HOPE_PATH_TOKEN", C = () => {
  const l2 = usePageData(), t2 = P(), r2 = useStorage(D, {}), n2 = useSessionStorage(D, {}), o2 = (a) => isPlainObject(t2.value.config) ? keys(t2.value.config).filter((u2) => startsWith(decodeURI(a), u2)).sort((u2, i2) => i2.length - u2.length) : [], e2 = (a) => {
    const u2 = o2(a);
    if (u2.length > 0) {
      const { config: i2 = {} } = t2.value;
      return { isEncrypted: true, isDecrypted: u2.some((c2) => r2.value[c2] && i2[c2].some((v2) => y(r2.value[c2], v2)) || n2.value[c2] && i2[c2].some((v2) => y(n2.value[c2], v2))) };
    }
    return { isDecrypted: false, isEncrypted: false };
  };
  return { status: computed(() => e2(l2.value.path)), getStatus: e2, validate: (a, u2 = false) => {
    const { config: i2 = {} } = t2.value, c2 = o2(l2.value.path);
    for (const v2 of c2)
      if (i2[v2].filter((L2) => y(a, L2))) {
        (u2 ? r2 : n2).value[v2] = a;
        break;
      }
  } };
};
var I = defineComponent({ name: "GlobalEncrypt", slots: Object, setup(l2, { slots: t2 }) {
  const { isDecrypted: r2, isEncrypted: n2, validate: o2 } = j(), e2 = ref(false);
  return onMounted(() => {
    e2.value = true;
  }), () => h(m$1, () => n2.value ? e2.value ? r2.value ? t2.default() : h(g, { full: true, onVerify: o2 }) : null : t2.default());
} }), R = defineComponent({ name: "LocalEncrypt", slots: Object, setup(l2, { slots: t2 }) {
  const { status: r2, validate: n2 } = C(), o2 = ref(false);
  return onMounted(() => {
    o2.value = true;
  }), () => {
    const { isEncrypted: e2, isDecrypted: a } = r2.value;
    return e2 ? o2.value ? a ? t2.default() : h(g, { full: true, onVerify: n2 }) : null : t2.default();
  };
} });
defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;
  return shouldIndex ? {
    title,
    content: icon ? () => [h(D$2, { icon }), title] : null,
    order: meta.O,
    index: meta.I
  } : null;
});
const clientConfig12 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await l().wait();
      return scrollBehavior(...args);
    };
    Ka(app);
    app.component("HopeIcon", D$2);
    app.component("GlobalEncrypt", I);
    app.component("LocalEncrypt", R);
  },
  setup: () => {
    Ja();
    et();
  },
  layouts: {
    Layout: xe,
    NotFound: He
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  C$2,
  clientConfig9,
  clientConfig10,
  clientConfig11,
  clientConfig12
];
const siteData$1 = JSON.parse('{"base":"/","lang":"zh-CN","title":"yyyyt文档站/博客","description":"yyyyt文档站/博客","head":[],"locales":{}}');
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      const route = resolveRoute(to.path);
      if (route.path !== to.path) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = computedWithControl(
    routePath,
    () => router.currentRoute.value.meta._pageChunk
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "Vuepress",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      const rootComponents = clientConfigs.flatMap(
        ({ rootComponents: rootComponents2 = [] }) => rootComponents2.map((component) => h(component))
      );
      const pageLayout = usePageLayout();
      return () => [h(pageLayout.value), rootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp
};
