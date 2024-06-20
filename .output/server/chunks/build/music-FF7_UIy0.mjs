import { _ as __nuxt_component_0 } from './Nav-DutTVZ6L.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<header class="flex px-8 pt-6 pb-12 lg:pb-24 lg:pt-16 sm:justify-center"><h1 class="text-7xl font-semibold leading-[1.3]">Music</h1></header><main class="max-w-lg px-8 pt-0 pb-16 m-auto"><section id="music" class="leading-7"><p class="mb-5"> I&#39;ve been playing guitar and writing, recording, and performing my own songs since I was a teenager. I released my debut solo album <span class="italic">It&#39;s a Wonder</span> in December of 2018 on streaming platforms and on vinyl. </p><p class="mb-12"> I still have a few copies of the album on vinyl. If you&#39;re interested in one, <a href="joshuamasen7@gmail.com">email me.</a></p><div class="videoWrapper"><iframe loading="lazy" title="Joshua Masen Spotify album stream" src="https://open.spotify.com/embed/album/27ugt0eQeUz3UzlVmODWzC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div><div class="videoWrapper"><iframe loading="lazy" title="Joshua Masen &#39;Million Dollar Bill&#39; music video" width="560" height="315" src="https://www.youtube.com/embed/MIGav-fym5o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="videoWrapper"><iframe loading="lazy" title="Joshua Masen &#39;All My Life&#39; live music video" width="560" height="315" src="https://www.youtube.com/embed/pJK5Kd46_2o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="videoWrapper"><iframe loading="lazy" title="Joshua Masen &#39;Waitin on a Change of Heart&#39; music video" width="560" height="315" src="https://www.youtube.com/embed/bsF8_knoqQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></section></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const music = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { music as default };
//# sourceMappingURL=music-FF7_UIy0.mjs.map
