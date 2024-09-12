import { i as itemCard } from "./itemCard-BI-8KXEG.js";
import { u as useUserStore, a as useRouter, g as getPersonalizedPlaylist } from "./index-hHDZpVG-.js";
import { aO as _export_sfc, b as ref, aL as createElementBlock, aM as createBaseVNode, u as unref, aN as createVNode, aR as createCommentVNode, F as Fragment, aT as renderList, v as createTextVNode, aK as openBlock } from "./marqueePlus-Cxav8Oq3.js";
import "./Ellipsis-DJF4mCEi.js";
const _hoisted_1 = { id: "home" };
const _hoisted_2 = { id: "homeRecommendPlaylist" };
const _hoisted_3 = { key: 0 };
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
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "home-sub-title" }, "精选歌单", -1)),
        createBaseVNode("ul", _hoisted_2, [
          unref(userStore).isLogin ? (openBlock(), createElementBlock("li", _hoisted_3, [
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
        _cache[1] || (_cache[1] = createBaseVNode("div", null, [
          createTextVNode("登录页面"),
          createBaseVNode("a", { href: "#/login" }, "点我")
        ], -1))
      ]);
    };
  }
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41b15004"]]);
export {
  home as default
};
