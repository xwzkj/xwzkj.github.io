import { m as markRaw, aJ as openBlock, aK as createElementBlock, aL as createBaseVNode, aP as _export_sfc, aT as useCssVars, u as unref, b as ref, aM as createVNode, aQ as withCtx, v as createTextVNode, aV as toDisplayString, b1 as normalizeStyle, aG as NIcon, aN as pushScopeId, aO as popScopeId } from "./marqueePlus-CgmJ6Y4x.js";
import { d as useThemeStore, a as useRouter, m as getColorFromImg, n as mixColor } from "./index-PZjsPvre.js";
import { _ as __unplugin_components_1$1 } from "./Ellipsis-BDmxSoao.js";
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H4V5zM4 21V10h16v11z"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 5.01h16V8H4z",
  opacity: ".3"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_4$1]);
}
const __unplugin_components_1 = markRaw({ name: "ic-twotone-calendar-today", render });
const _withScopeId = (n) => (pushScopeId("data-v-5c7c70b4"), n = n(), popScopeId(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "item-card-name text1" };
const _hoisted_3 = { class: "item-card-date-box text2" };
const _hoisted_4 = { class: "item-card-date" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-card-name text1" }, "每日推荐", -1));
const _sfc_main = {
  __name: "itemCard",
  props: ["imgurl", "text", "click", "isDailySongs"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "7d659316": unref(itemColor)
    }));
    let themeStore = useThemeStore();
    let props = __props;
    let itemColor = ref(themeStore.mainColors?.[1]);
    let itemCardImg = ref(null);
    let date = (/* @__PURE__ */ new Date()).getDate();
    function getImgMainColor() {
      let color = getColorFromImg(itemCardImg.value, true);
      itemColor.value = mixColor(color, [255, 255, 255], 0.4, false, true);
    }
    const router = useRouter();
    return (_ctx, _cache) => {
      const _component_n_ellipsis = __unplugin_components_1$1;
      const _component_i_ic_twotone_calendar_today = __unplugin_components_1;
      const _component_n_icon = NIcon;
      return !unref(props).isDailySongs ? (openBlock(), createElementBlock("div", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = (...args) => unref(props).click && unref(props).click(...args)),
        class: "item-card-outer"
      }, [
        createBaseVNode("img", {
          class: "item-card-img",
          src: unref(props).imgurl + "?param=200y200",
          crossorigin: "anonymous",
          ref_key: "itemCardImg",
          ref: itemCardImg,
          onLoad: getImgMainColor
        }, null, 40, _hoisted_1),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_ellipsis, { "line-clamp": 2 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(props).text), 1)
            ]),
            _: 1
          })
        ])
      ])) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: "item-card-outer",
        onClick: _cache[1] || (_cache[1] = ($event) => unref(router).push({ name: "playlist", query: { isDailySongs: true } })),
        style: normalizeStyle({ backgroundColor: unref(themeStore).mainColors?.[1] })
      }, [
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_n_icon, {
            size: "11rem",
            class: "item-card-icon"
          }, {
            default: withCtx(() => [
              createVNode(_component_i_ic_twotone_calendar_today),
              createBaseVNode("div", _hoisted_4, toDisplayString(unref(date)), 1)
            ]),
            _: 1
          })
        ]),
        _hoisted_5
      ], 4));
    };
  }
};
const itemCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c7c70b4"]]);
export {
  itemCard as i
};
