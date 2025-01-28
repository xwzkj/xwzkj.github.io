import { m as markRaw, aM as openBlock, aN as createElementBlock, aO as createBaseVNode, aQ as _export_sfc, aU as useCssVars, b as ref, u as unref, aP as createVNode, aR as withCtx, F as createTextVNode, aV as toDisplayString, b2 as normalizeStyle, aH as NIcon, d as defineComponent, aT as createCommentVNode, G as Fragment, aX as renderList } from "./font-B8Y702kK.js";
import { s as useThemeStore, y as useRouter, E as getColorFromImg, F as mixColor } from "./index-Wq79Ra1M.js";
import { _ as __unplugin_components_1$1 } from "./Ellipsis-B4I5zLSU.js";
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H4V5zM4 21V10h16v11z"
    }, null, -1),
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M4 5.01h16V8H4z",
      opacity: ".3"
    }, null, -1)
  ]));
}
const __unplugin_components_1 = markRaw({ name: "ic-twotone-calendar-today", render });
const _hoisted_1$1 = ["src"];
const _hoisted_2$1 = { class: "item-card-name text1" };
const _hoisted_3$1 = { class: "item-card-date-box text2" };
const _hoisted_4 = { class: "item-card-date" };
const _sfc_main$1 = {
  __name: "itemCard",
  props: ["imgurl", "text", "click", "isDailySongs"],
  setup(__props) {
    var _a;
    useCssVars((_ctx) => ({
      "10af2a3e": unref(itemColor)
    }));
    let themeStore = useThemeStore();
    let props = __props;
    let itemColor = ref((_a = themeStore.mainColors) == null ? void 0 : _a[1]);
    let itemCardImg = ref(null);
    let date = (/* @__PURE__ */ new Date()).getDate();
    function getImgMainColor() {
      let color = getColorFromImg(itemCardImg.value, true);
      itemColor.value = mixColor(color, [255, 255, 255], 0.4, false, true);
    }
    const router = useRouter();
    return (_ctx, _cache) => {
      var _a2;
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
        }, null, 40, _hoisted_1$1),
        createBaseVNode("div", _hoisted_2$1, [
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
        style: normalizeStyle({ backgroundColor: (_a2 = unref(themeStore).mainColors) == null ? void 0 : _a2[1] })
      }, [
        createBaseVNode("div", _hoisted_3$1, [
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
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "item-card-name text1" }, "每日推荐", -1))
      ], 4));
    };
  }
};
const itemCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-75e467d2"]]);
const _hoisted_1 = { class: "item-card-ul" };
const _hoisted_2 = {
  key: 0,
  class: "item-card-li"
};
const _hoisted_3 = { class: "item-card-li" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "itemCardList",
  props: {
    data: {},
    needDaily: { type: Boolean, default: false }
  },
  setup(__props) {
    const router = useRouter();
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("ul", _hoisted_1, [
          props.needDaily ? (openBlock(), createElementBlock("li", _hoisted_2, [
            createVNode(itemCard, { isDailySongs: true })
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item) => {
            var _a;
            return openBlock(), createElementBlock("li", _hoisted_3, [
              createVNode(itemCard, {
                imgurl: (_a = item == null ? void 0 : item.coverImgUrl) != null ? _a : item == null ? void 0 : item.picUrl,
                text: item.name,
                onClick: ($event) => unref(router).push({ name: "playlist", query: { id: item.id } })
              }, null, 8, ["imgurl", "text", "onClick"])
            ]);
          }), 256))
        ])
      ]);
    };
  }
});
const itemCardList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e00dd55f"]]);
export {
  itemCardList as i
};
