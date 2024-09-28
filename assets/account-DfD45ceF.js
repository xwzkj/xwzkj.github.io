import { aO as _export_sfc, b as ref, aL as createElementBlock, aM as createBaseVNode, u as unref, aU as toDisplayString, aN as createVNode, aK as openBlock, aS as useCssVars } from "./font-JWUAjikw.js";
import { u as useUserStore, q as useThemeStore, D as areaData, x as useRouter } from "./index-BAlf5VGP.js";
import { i as itemCardList } from "./itemCardList-Dzsd5rqf.js";
import "./Ellipsis-oRQhKaWC.js";
const _hoisted_1 = { class: "account-user-detail" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "account-user-data-info" };
const _hoisted_4 = { class: "account-user-name text1" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "account-user-area text2" };
const _hoisted_7 = { class: "account-user-playlists-div" };
const _sfc_main = {
  __name: "account",
  setup(__props) {
    useCssVars((_ctx) => ({
      "40073763": unref(themeStore).mainColors[2] + `80`
    }));
    const userStore = useUserStore();
    const themeStore = useThemeStore();
    useRouter();
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
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "account-user-playlists-title" }, "我的歌单", -1)),
          createVNode(itemCardList, {
            data: unref(userStore).playlists
          }, null, 8, ["data"])
        ])
      ]);
    };
  }
};
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e05349d3"]]);
export {
  account as default
};
