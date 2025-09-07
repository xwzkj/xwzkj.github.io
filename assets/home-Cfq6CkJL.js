import { i as itemCardList } from "./itemCardList-DiklbKx3.js";
import { u as useUserStore, g as getPersonalizedPlaylist } from "./index-B7A6oDOs.js";
import { aQ as _export_sfc, r as ref, aM as createElementBlock, aN as openBlock, aO as createBaseVNode, aP as createVNode, u as unref } from "./font-CKJR5mIm.js";
import "./Ellipsis-BU5lwEe2.js";
const _hoisted_1 = { id: "home" };
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let userStore = useUserStore();
    let personalizedPlaylist = ref({ result: [] });
    getPersonalizedPlaylist().then((res) => {
      personalizedPlaylist.value = res.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "home-sub-title" }, "精选歌单", -1)),
        createVNode(unref(itemCardList), {
          data: unref(personalizedPlaylist).result,
          needDaily: unref(userStore).isLogin
        }, null, 8, ["data", "needDaily"])
      ]);
    };
  }
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed139fbc"]]);
export {
  home as default
};
