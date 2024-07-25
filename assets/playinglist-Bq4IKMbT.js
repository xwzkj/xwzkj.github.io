import { P as useTheme, Q as defineComponent, r as ref, R as h, S as Scrollbar$1, _ as _export_sfc, a as usePlayStore, o as onMounted, d as openBlock, e as createElementBlock, g as createVNode, h as withCtx, f as createBaseVNode, F as Fragment, v as renderList, j as unref, k as createBlock, O as createTextVNode, l as createCommentVNode, t as toDisplayString, T as __unplugin_components_0 } from "./index-DNTExrNd.js";
const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  trigger: String,
  xScrollable: Boolean,
  onScroll: Function,
  contentClass: String,
  contentStyle: [Object, String],
  size: Number
});
const Scrollbar = defineComponent({
  name: "Scrollbar",
  props: scrollbarProps,
  setup() {
    const scrollbarInstRef = ref(null);
    const exposedMethods = {
      scrollTo: (...args) => {
        var _a;
        (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(args[0], args[1]);
      },
      scrollBy: (...args) => {
        var _a;
        (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollBy(args[0], args[1]);
      }
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      scrollbarInstRef
    });
  },
  render() {
    return h(Scrollbar$1, Object.assign({
      ref: "scrollbarInstRef"
    }, this.$props), this.$slots);
  }
});
const _hoisted_1 = { class: "playinglist" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "text" };
const _hoisted_5 = { class: "name" };
const _hoisted_6 = { class: "tns" };
const _hoisted_7 = { class: "artist" };
const _sfc_main = {
  __name: "playinglist",
  setup(__props) {
    const playStore = usePlayStore();
    let playinglistScrollbarRef = ref(null);
    let playinglistItemRef = ref([]);
    function play(index) {
      playStore.playlistIndex = index;
      playStore.play(true);
    }
    onMounted(() => {
      playinglistScrollbarRef.value.scrollTo({ top: playinglistItemRef.value?.[playStore.playlistIndex]?.offsetTop - 80 });
    });
    return (_ctx, _cache) => {
      const _component_n_tag = __unplugin_components_0;
      const _component_n_scrollbar = Scrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_scrollbar, {
          id: "playinglist-scrollbar",
          ref_key: "playinglistScrollbarRef",
          ref: playinglistScrollbarRef
        }, {
          default: withCtx(() => [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(playStore).playlist, (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: item.id,
                  onClick: ($event) => play(index),
                  class: "playinglist-item",
                  ref_for: true,
                  ref_key: "playinglistItemRef",
                  ref: playinglistItemRef
                }, [
                  createBaseVNode("img", {
                    class: "playinglist-img",
                    src: item.picurl + "?param=80y80",
                    alt: item.name,
                    loading: "lazy"
                  }, null, 8, _hoisted_3),
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      item.fee == 1 ? (openBlock(), createBlock(_component_n_tag, {
                        key: 0,
                        type: "warning",
                        size: "small",
                        bordered: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("VIP")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      item.fee == 4 ? (openBlock(), createBlock(_component_n_tag, {
                        key: 1,
                        type: "info",
                        size: "small",
                        bordered: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("数字专辑")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(item.name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_6, toDisplayString(item.tns), 1),
                    createBaseVNode("div", _hoisted_7, toDisplayString(item.artist), 1)
                  ])
                ], 8, _hoisted_2);
              }), 128))
            ])
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
};
const playinglist = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75a2f16c"]]);
export {
  Scrollbar as S,
  playinglist as p
};
