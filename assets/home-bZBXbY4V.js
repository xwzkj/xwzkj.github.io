import { i as itemCardList } from "./itemCardList-C3KVV3uf.js";
import { u as useUserStore, g as getPersonalizedPlaylist } from "./index-DwiX7jQM.js";
import { aO as _export_sfc, b as ref, aL as createElementBlock, aM as createBaseVNode, aN as createVNode, u as unref, aK as openBlock } from "./font-CXcYbOso.js";
import "./Ellipsis-q4V6xPHB.js";
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
