import { _ as __nuxt_component_0 } from './Nav-DutTVZ6L.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0bAaKumF.mjs';
import { u as useAsyncData, q as queryContent } from './query-DBB2BQ7D.mjs';
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './preview-CPOjzaaI.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blog", () => queryContent("/blog").find())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nav = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Nav, null, null, _parent));
      _push(`<main class="max-w-4xl px-8 pt-0 pb-16 m-auto mb-32"><header class="flex px-8 pt-6 pb-12 lg:pb-24 lg:pt-16 sm:justify-center"><h1 class="text-7xl leading-[1.3] font-semibold">Blog</h1></header><ul class="flex flex-col divide-y divide-secondary"><!--[-->`);
      ssrRenderList(unref(data), (post) => {
        _push(`<li class="py-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-xl font-semibold no-underline lg:text-4xl",
          to: post._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2${_scopeId}>${ssrInterpolate(post.title)}</h2>`);
            } else {
              return [
                createVNode("h2", null, toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BJbme8sJ.mjs.map
