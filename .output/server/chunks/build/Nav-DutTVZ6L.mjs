import { _ as __nuxt_component_0$1 } from './nuxt-link-0bAaKumF.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-10 flex items-center justify-center bg-background" }, _attrs))}><div class="flex items-center justify-between w-full max-w-6xl px-4 py-3 border-b lg:px-8 lg:py-6 border-base">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-base font-semibold no-underline hover:text-base-light",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span aria-hidden="true"${_scopeId}>\u{1F60E}</span> Joshua Masen`);
      } else {
        return [
          createVNode("span", { "aria-hidden": "true" }, "\u{1F60E}"),
          createTextVNode(" Joshua Masen")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.$route.name !== "blog") {
    _push(`<ul><li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "flex items-center text-sm text-base font-semibold no-underline hover:text-primary",
      to: "/blog"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"${_scopeId}></path></svg>Back to blog`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              class: "w-5 h-5 mr-1",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M11 17l-5-5m0 0l5-5m-5 5h12"
              })
            ])),
            createTextVNode("Back to blog")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Nav-DutTVZ6L.mjs.map
