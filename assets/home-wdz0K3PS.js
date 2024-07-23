import { i as itemCard } from "./itemCard-avF3WtmP.js";
import { _ as _export_sfc, u as useUserStore, r as ref, K as useRouter, L as getPersonalizedPlaylist, d as openBlock, e as createElementBlock, f as createBaseVNode, j as unref, g as createVNode, l as createCommentVNode, F as Fragment, v as renderList, O as createTextVNode, y as pushScopeId, z as popScopeId } from "./index-DRKe-m5N.js";
import { p as playinglist } from "./playinglist-DHQcB4cO.js";
import "./Ellipsis-Mxl3b2tU.js";
import "./clickoutside-C907wKOG.js";
import "./use-compitable-CNVj1ZQU.js";
const _withScopeId = (n) => (pushScopeId("data-v-c7e11441"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "home" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "home-sub-title" }, "精选歌单", -1));
const _hoisted_3 = { id: "homeRecommendPlaylist" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("播放页"),
  /* @__PURE__ */ createBaseVNode("a", { href: "#/player" }, "点我")
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("登录页面"),
  /* @__PURE__ */ createBaseVNode("a", { href: "#/login" }, "点我")
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("设置"),
  /* @__PURE__ */ createBaseVNode("a", { href: "#/setting" }, "点我")
], -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_9 = { style: { "height": "20rem", "width": "20rem" } };
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let userStore = useUserStore();
    let personalizedPlaylist = ref({ result: [] });
    let router = useRouter();
    getPersonalizedPlaylist().then((res) => {
      personalizedPlaylist.value = res.data;
      console.log(res.data);
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
        _hoisted_5,
        _hoisted_6,
        _hoisted_7,
        _hoisted_8,
        createTextVNode(" 播放列表预览： "),
        createBaseVNode("div", _hoisted_9, [
          createVNode(playinglist)
        ])
      ]);
    };
  }
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7e11441"]]);
export {
  home as default
};
