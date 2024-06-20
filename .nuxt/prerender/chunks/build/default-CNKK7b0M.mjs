import { defineComponent, withCtx, createTextVNode, createVNode, renderSlot, useSSRContext, mergeProps } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue/index.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/devalue/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unified/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/micromark/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/micromark-util-character/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/slugify/slugify.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/remark-parse/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/remark-rehype/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/remark-emoji/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/remark-gfm/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/rehype-external-links/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/rehype-raw/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/detab/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/hast-util-to-string/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/github-slugger/index.js';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/ipx/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-full p-4 text-center bg-primary" }, _attrs))}> I&#39;ve got some limited time available for freelance projects. <a href="mailto:joshuamasen7@gmail.com" class="text-base hover:text-base-light">Email\xA0me!</a></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center px-4 py-0 mb-16" }, _attrs))} data-v-438bc068><a class="big-button" href="mailto:joshuamasen7@gmail.com" data-v-438bc068>Want to chat about your project? Email\xA0me!</a></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-438bc068"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "p-3 text-sm text-center bg-background" }, _attrs))} data-v-97f880f7> This site is built with <a target="_blank" rel="noopener" href="https://nuxtjs.org" data-v-97f880f7>Nuxt</a> &amp; hosted on <a target="_blank" rel="noopener" href="https://netlify.com" data-v-97f880f7>Netlify</a>. </footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97f880f7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (titleChunk) => {
        const title = "Joshua Masen | Software Engineer";
        return titleChunk ? `${titleChunk} | ${title}` : title;
      },
      meta: [
        {
          name: "description",
          content: "I like to build stuff - usually on the web. I am currently a Senior Software Engineer building internal communications software at Workshop."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Body = Body;
      const _component_Banner = __nuxt_component_1;
      const _component_Contact = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Body, { class: "flex flex-col justify-center font-normal leading-7 bg-background" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Banner, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`I&#39;ve got some limited time available for freelance projects. Email me!`);
                } else {
                  return [
                    createTextVNode("I've got some limited time available for freelance projects. Email me!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(_component_Banner, null, {
                default: withCtx(() => [
                  createTextVNode("I've got some limited time available for freelance projects. Email me!")
                ]),
                _: 1
              }),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_Contact, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CNKK7b0M.mjs.map
