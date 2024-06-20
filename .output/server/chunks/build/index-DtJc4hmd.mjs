import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, withAsyncContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-DBB2BQ7D.mjs';
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
