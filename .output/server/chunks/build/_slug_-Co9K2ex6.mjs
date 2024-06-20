import { _ as __nuxt_component_0 } from './Nav-DutTVZ6L.mjs';
import _sfc_main$1 from './ContentDoc-BsRNYYSe.mjs';
import _sfc_main$2 from './ContentRenderer-BgFszGmL.mjs';
import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-0bAaKumF.mjs';
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
import './index-BabADJUJ.mjs';
import '@unhead/shared';
import './ContentQuery-nkW6hkUF.mjs';
import './query-DBB2BQ7D.mjs';
import './preview-CPOjzaaI.mjs';
import './ContentRendererMarkdown-CFoueRhR.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __nuxt_component_0;
  const _component_ContentDoc = _sfc_main$1;
  const _component_ContentRenderer = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0cb8c7c0>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<header class="flex max-w-6xl px-8 pt-6 pb-12 m-auto lg:pb-24 lg:pt-16 sm:justify-center" data-v-0cb8c7c0${_scopeId}><h1 class="leading-[1.3] font-semibold" data-v-0cb8c7c0${_scopeId}>${ssrInterpolate(doc.title)}</h1></header><main class="max-w-lg px-8 pt-0 pb-16 m-auto mb-32" data-v-0cb8c7c0${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, {
          value: doc,
          class: "prose"
        }, null, _parent2, _scopeId));
        _push2(`</main>`);
      } else {
        return [
          createVNode("header", { class: "flex max-w-6xl px-8 pt-6 pb-12 m-auto lg:pb-24 lg:pt-16 sm:justify-center" }, [
            createVNode("h1", { class: "leading-[1.3] font-semibold" }, toDisplayString(doc.title), 1)
          ]),
          createVNode("main", { class: "max-w-lg px-8 pt-0 pb-16 m-auto mb-32" }, [
            createVNode(_component_ContentRenderer, {
              value: doc,
              class: "prose"
            }, null, 8, ["value"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0cb8c7c0"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Co9K2ex6.mjs.map
