import { aP as _export_sfc, aT as useCssVars, b as ref, aK as createElementBlock, aL as createBaseVNode, u as unref, aV as toDisplayString, F as Fragment, aU as renderList, aJ as openBlock, aM as createVNode, aN as pushScopeId, aO as popScopeId } from "./marqueePlus-D2jTBZhS.js";
import { u as useUserStore, d as useThemeStore, a as useRouter, k as areaData } from "./index-DxIs-kma.js";
import { i as itemCard } from "./itemCard-D09vzDuq.js";
import "./Ellipsis-DLS2fnxa.js";
const _withScopeId = (n) => (pushScopeId("data-v-ee36bbe5"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "account-user-detail" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "account-user-data-info" };
const _hoisted_4 = { class: "account-user-name text1" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "account-user-area text2" };
const _hoisted_7 = { class: "account-user-playlists-div" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "account-user-playlists-title" }, "我的歌单", -1));
const _hoisted_9 = { class: "account-user-playlists-ul" };
const _hoisted_10 = { class: "user-playlist-li" };
const _sfc_main = {
  __name: "account",
  setup(__props) {
    useCssVars((_ctx) => ({
      "4ae75e68": unref(themeStore).mainColors[1] + `80`
    }));
    const userStore = useUserStore();
    const themeStore = useThemeStore();
    const router = useRouter();
    let Area = ref("未知");
    getArea(userStore.province, userStore.city);
    async function getArea(province, city) {
      if (province in areaData.province && city in areaData.city) {
        Area.value = areaData.province[province] + " " + areaData.city[city];
      } else {
        Area.value = "未知";
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("img", {
            class: "account-user-avatar",
            src: unref(userStore).avatar,
            onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.getImgMainColor && _ctx.getImgMainColor(...args)),
            crossorigin: "anonymous"
          }, null, 40, _hoisted_2),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", _hoisted_4, toDisplayString(unref(userStore).name), 1),
            createBaseVNode("img", {
              class: "account-userVIP",
              src: `${unref(userStore).vipIcon}`
            }, null, 8, _hoisted_5),
            createBaseVNode("span", _hoisted_6, "地区：" + toDisplayString(unref(Area)), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          _hoisted_8,
          createBaseVNode("ul", _hoisted_9, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(userStore).playlists, (item) => {
              return openBlock(), createElementBlock("li", _hoisted_10, [
                createVNode(itemCard, {
                  imgurl: item.coverImgUrl,
                  text: item.name,
                  onClick: ($event) => unref(router).push({ name: "playlist", query: { id: item.id } })
                }, null, 8, ["imgurl", "text", "onClick"])
              ]);
            }), 256))
          ])
        ])
      ]);
    };
  }
};
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee36bbe5"]]);
export {
  account as default
};
