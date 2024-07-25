import { _ as _export_sfc, u as useUserStore, K as useRouter, r as ref, ae as areaData, d as openBlock, e as createElementBlock, f as createBaseVNode, j as unref, t as toDisplayString, F as Fragment, v as renderList, af as getColorFromImg, ag as mixColor, g as createVNode, y as pushScopeId, z as popScopeId, A as useCssVars } from "./index-DNTExrNd.js";
import { i as itemCard } from "./itemCard-BuTwfN2U.js";
import "./Ellipsis-C7Pi-t4v.js";
const _withScopeId = (n) => (pushScopeId("data-v-a7b1ef24"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "accountUserDetail" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { id: "accountUserDataInfo" };
const _hoisted_4 = { id: "accountUserName" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { id: "accountUserArea" };
const _hoisted_7 = { id: "accountUserPlaylistsDiv" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { id: "accountUserPlaylistsTitle" }, "我的歌单", -1));
const _hoisted_9 = { id: "accountUserPlaylistsUl" };
const _hoisted_10 = { class: "user-playlist-li" };
const _sfc_main = {
  __name: "account",
  setup(__props) {
    useCssVars((_ctx) => ({
      "34a88366": unref(usrAvaColor)
    }));
    const userStore = useUserStore();
    const router = useRouter();
    let Area = ref("未知");
    let usrAvaColor = ref("#FFFFFF");
    getArea(userStore.province, userStore.city);
    async function getArea(province, city) {
      if (province in areaData.province && city in areaData.city) {
        Area.value = areaData.province[province] + " " + areaData.city[city];
      } else {
        Area.value = "未知";
      }
    }
    function getImgMainColor() {
      let color = getColorFromImg(document.getElementById("accountUserAvatar"), true);
      usrAvaColor.value = mixColor(color, [255, 255, 255], 0.35);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("img", {
            id: "accountUserAvatar",
            src: `${unref(userStore).avatar}?param=200y200`,
            onLoad: getImgMainColor,
            crossorigin: "anonymous"
          }, null, 40, _hoisted_2),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", _hoisted_4, toDisplayString(unref(userStore).name), 1),
            createBaseVNode("img", {
              id: "accountUserVIP",
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
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7b1ef24"]]);
export {
  account as default
};
