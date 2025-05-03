var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { aQ as _export_sfc, r as ref, aM as createElementBlock, aO as openBlock, aN as createBaseVNode, u as unref, aV as toDisplayString, aP as createVNode, aU as useCssVars } from "./font-DJFqg1Hd.js";
import { u as useUserStore, s as useThemeStore, D as areaData, y as useRouter } from "./index-DK7Djee3.js";
import { i as itemCardList } from "./itemCardList-X6NJ6maj.js";
import "./Ellipsis-oDfF2ZN6.js";
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
      "3c5b83fb": unref(themeStore).mainColors[2] + `80`
    }));
    const userStore = useUserStore();
    const themeStore = useThemeStore();
    useRouter();
    let Area = ref("未知");
    getArea(userStore.province, userStore.city);
    function getArea(province, city) {
      return __async(this, null, function* () {
        if (province in areaData.province && city in areaData.city) {
          Area.value = areaData.province[province] + " " + areaData.city[city];
        } else {
          Area.value = "未知";
        }
      });
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
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15b54c98"]]);
export {
  account as default
};
