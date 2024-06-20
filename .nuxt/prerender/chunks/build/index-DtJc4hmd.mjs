import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, withAsyncContext, unref } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-DBB2BQ7D.mjs';
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
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import './ssr-BFzxi7jQ.mjs';
import './preview-CPOjzaaI.mjs';
import 'file:///Users/joshmasen/Developer/personal/joshua-masen-nuxt/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-secondary" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Badge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Job",
  __ssrInlineRender: true,
  props: {
    job: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "mb-12 job first:mt-20" }, _attrs))}><h3 class="mb-6 text-3xl font-semibold text-primary"><a${ssrRenderAttr("href", _ctx.job.employerUrl)} class="no-underline">${ssrInterpolate(_ctx.job.employer)}</a></h3><ul class="pl-12 roles"><!--[-->`);
      ssrRenderList(_ctx.job.roles, (role) => {
        var _a;
        _push(`<li class="relative mb-8 role"><h4 class="mb-2 text-2xl font-semibold">${ssrInterpolate(role.title)}</h4><small class="block mb-3 text-sm italic">${ssrInterpolate(role.dates)}</small><p class="mb-3 leading-7">${(_a = role.summary) != null ? _a : ""}</p><ul class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(role.technologies, (tech) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_Badge, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tech)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tech), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Job.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "jobs",
      () => queryContent("/jobs").findOne()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Job = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-875bda6b><header class="flex px-8 pt-6 pb-12 lg:pb-24 lg:pt-16 sm:justify-center" data-v-875bda6b><h1 class="text-7xl leading-[1.3]" data-v-875bda6b> Hey <span class="tada" aria-hidden="true" data-v-875bda6b>\u{1F44B}</span><br data-v-875bda6b> I&#39;m Josh Masen. </h1></header><main class="max-w-lg px-8 pt-0 pb-16 m-auto" data-v-875bda6b><section class="leading-7" data-v-875bda6b><p class="mb-5" data-v-875bda6b> I&#39;ve been building stuff on the web for over 10 years. While I was in college studying graphic design, I taught myself to code and started building websites for freelance clients. By the time I earned my degree, I realized I was super passionate about writing code and creating on the web, so I started my career in web\xA0development. </p><p class="mb-2" data-v-875bda6b> Here&#39;s what I&#39;ve been up to since then, in resume-style reverse chronological order: </p></section><ul data-v-875bda6b><!--[-->`);
      ssrRenderList(unref(data).body, (job) => {
        _push(ssrRenderComponent(_component_Job, {
          job,
          key: job.employer
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(job.employer)}`);
            } else {
              return [
                createTextVNode(toDisplayString(job.employer), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-875bda6b"]]);

export { index as default };
//# sourceMappingURL=index-DtJc4hmd.mjs.map
