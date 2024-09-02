import { i as itemCard } from "./itemCard-NZdIaCQc.js";
import { u as useUserStore, a as useRouter, g as getPersonalizedPlaylist } from "./index-74IMZhHi.js";
import { aP as _export_sfc, b as ref, aK as createElementBlock, aL as createBaseVNode, u as unref, aM as createVNode, aS as createCommentVNode, F as Fragment, aU as renderList, aJ as openBlock, aN as pushScopeId, aO as popScopeId, v as createTextVNode } from "./marqueePlus-oXg9xsbo.js";
import "./Ellipsis-lIF-10Gf.js";
const _withScopeId = (n) => (pushScopeId("data-v-41b15004"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "home" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "home-sub-title" }, "精选歌单", -1));
const _hoisted_3 = { id: "homeRecommendPlaylist" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("登录页面"),
  /* @__PURE__ */ createBaseVNode("a", { href: "#/login" }, "点我")
], -1));
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let userStore = useUserStore();
    let personalizedPlaylist = ref({ result: [] });
    let router = useRouter();
    getPersonalizedPlaylist().then((res) => {
      personalizedPlaylist.value = res.data;
      console.log(res);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("ul", _hoisted_3, [
          unref(userStore).isLogin ? (openBlock(), createElementBlock("li", _hoisted_4, [
            createVNode(itemCard, { isDailySongs: true })
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(personalizedPlaylist).result, (item, index) => {
            return openBlock(), createElementBlock("li", {
              key: item.id
            }, [
              createVNode(itemCard, {
                imgurl: item?.picUrl,
                text: item?.name,
                click: () => unref(router).push(`/playlist?id=${item.id}`)
              }, null, 8, ["imgurl", "text", "click"])
            ]);
          }), 128))
        ]),
        _hoisted_5
      ]);
    };
  }
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41b15004"]]);
export {
  home as default
};
