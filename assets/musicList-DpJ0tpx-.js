import { an as derived, ai as c, ah as cB, aj as cM, d as defineComponent, ap as useConfig, ao as useTheme, c as computed, aq as useThemeClass, b as ref, ae as watchEffect, h, af as Transition, ay as createKey, aO as _export_sfc, aK as openBlock, aL as createElementBlock, aM as createBaseVNode, aN as createVNode, aP as withCtx, F as Fragment, aT as renderList, aU as toDisplayString, u as unref, aR as createCommentVNode, aQ as createBlock, v as createTextVNode, I as withDirectives, at as vShow, aH as NIcon } from "./__uno-D4asJh8J.js";
import { q as fadeInTransition, t as useCompitable, N as NBaseLoading, w as pxfy, u as useUserStore, x as parseArray, y as parseArtist, z as likeAndUpdateLikelist, A as __unplugin_components_5, o as __unplugin_components_0, C as __unplugin_components_2, D as __unplugin_components_3$1 } from "./index-D_PQKB7O.js";
function self(vars) {
  const {
    opacityDisabled,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    primaryColor,
    fontSize
  } = vars;
  return {
    fontSize,
    textColor: primaryColor,
    sizeTiny: heightTiny,
    sizeSmall: heightSmall,
    sizeMedium: heightMedium,
    sizeLarge: heightLarge,
    sizeHuge: heightHuge,
    color: primaryColor,
    opacitySpinning: opacityDisabled
  };
}
const spinLight = {
  name: "Spin",
  common: derived,
  self
};
const style = c([c("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), cB("spin-container", `
 position: relative;
 `, [cB("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]), cB("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), cB("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), cB("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), cB("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
};
const spinProps = Object.assign(Object.assign({}, useTheme.props), {
  contentClass: String,
  contentStyle: [Object, String],
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: "medium"
  },
  show: {
    type: Boolean,
    default: true
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true;
    },
    default: void 0
  },
  delay: Number
});
const __unplugin_components_3 = defineComponent({
  name: "Spin",
  props: spinProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Spin", "-spin", style, spinLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size: spinSize
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: self2
      } = themeRef.value;
      const {
        opacitySpinning,
        color,
        textColor
      } = self2;
      const size = typeof spinSize === "number" ? pxfy(spinSize) : self2[createKey("size", spinSize)];
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-opacity-spinning": opacitySpinning,
        "--n-size": size,
        "--n-color": color,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("spin", computed(() => {
      const {
        size
      } = props;
      return typeof size === "number" ? String(size) : size[0];
    }), cssVarsRef, props) : void 0;
    const compitableShow = useCompitable(props, ["spinning", "show"]);
    const activeRef = ref(false);
    watchEffect((onCleanup) => {
      let timerId;
      if (compitableShow.value) {
        const {
          delay
        } = props;
        if (delay) {
          timerId = window.setTimeout(() => {
            activeRef.value = true;
          }, delay);
          onCleanup(() => {
            clearTimeout(timerId);
          });
          return;
        }
      }
      activeRef.value = compitableShow.value;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedStrokeWidth: computed(() => {
        const {
          strokeWidth
        } = props;
        if (strokeWidth !== void 0) return strokeWidth;
        const {
          size
        } = props;
        return STROKE_WIDTH[typeof size === "number" ? "medium" : size];
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      $slots,
      mergedClsPrefix,
      description
    } = this;
    const rotate = $slots.icon && this.rotate;
    const descriptionNode = (description || $slots.description) && h("div", {
      class: `${mergedClsPrefix}-spin-description`
    }, description || ((_a = $slots.description) === null || _a === void 0 ? void 0 : _a.call($slots)));
    const icon = $slots.icon ? h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h("div", {
      class: [`${mergedClsPrefix}-spin`, rotate && `${mergedClsPrefix}-spin--rotate`],
      style: $slots.default ? "" : this.cssVars
    }, $slots.icon()), descriptionNode) : h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h(NBaseLoading, {
      clsPrefix: mergedClsPrefix,
      style: $slots.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${mergedClsPrefix}-spin`
    }), descriptionNode);
    (_b = this.onRender) === null || _b === void 0 ? void 0 : _b.call(this);
    return $slots.default ? h("div", {
      class: [`${mergedClsPrefix}-spin-container`, this.themeClass],
      style: this.cssVars
    }, h("div", {
      class: [`${mergedClsPrefix}-spin-content`, this.active && `${mergedClsPrefix}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, $slots), h(Transition, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? icon : null
    })) : icon;
  }
});
const _hoisted_1 = { class: "music-list" };
const _hoisted_2 = { class: "list-head-div" };
const _hoisted_3 = { class: "list-items" };
const _hoisted_4 = { class: "list-item-card-content" };
const _hoisted_5 = { class: "item-num text2" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["src", "alt"];
const _hoisted_8 = { class: "item-music-detail" };
const _hoisted_9 = { class: "item-music-name" };
const _hoisted_10 = { class: "item-music-text text1" };
const _hoisted_11 = {
  key: 0,
  class: "item-music-text text2"
};
const _hoisted_12 = { class: "item-music-ar" };
const _hoisted_13 = { class: "item-music-text text2" };
const _hoisted_14 = { class: "item-action" };
const _hoisted_15 = { class: "item-album" };
const _hoisted_16 = { class: "item-album-al text2" };
const _sfc_main = {
  __name: "musicList",
  props: ["value", "nameOnClick"],
  setup(__props) {
    let props = __props;
    let userStore = useUserStore();
    let windowWidth = ref(window.innerWidth);
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
    let isLiked = computed(() => {
      let isLikedList = [];
      for (let i = 0; i < props.value.length; i++) {
        isLikedList[i] = userStore.likedSongs.includes(Number(props.value[i].id));
      }
      return isLikedList;
    });
    return (_ctx, _cache) => {
      const _component_n_card = __unplugin_components_5;
      const _component_n_tag = __unplugin_components_0;
      const _component_i_ant_design_heart_outlined = __unplugin_components_2;
      const _component_i_ant_design_heart_filled = __unplugin_components_3$1;
      const _component_n_icon = NIcon;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_card, {
            class: "list-head-card",
            "content-style": "padding-top:0;padding-bottom:0;"
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createBaseVNode("div", { class: "list-head-card-content" }, [
                createBaseVNode("div", { class: "head-num text2" }, "#"),
                createBaseVNode("div", { class: "head-music text2" }, "歌曲"),
                createBaseVNode("div", { class: "head-action text2" }, " "),
                createBaseVNode("div", { class: "head-album text2" }, "专辑")
              ], -1)
            ])),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(props).value, (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "list-item-div"
            }, [
              createVNode(_component_n_card, { class: "list-item-card" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, toDisplayString(index + 1), 1),
                    createBaseVNode("div", {
                      class: "item-music",
                      onClick: ($event) => unref(props).nameOnClick(item.id)
                    }, [
                      createBaseVNode("img", {
                        class: "item-music-img",
                        src: item.al.picUrl + "?param=80y80",
                        alt: item.al.name,
                        loading: "lazy"
                      }, null, 8, _hoisted_7),
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          createBaseVNode("span", _hoisted_10, toDisplayString(item.name), 1),
                          parseArray(item.tns) != "" ? (openBlock(), createElementBlock("span", _hoisted_11, " (" + toDisplayString(parseArray(item.tns)) + ")", 1)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_12, [
                          item.fee == 1 ? (openBlock(), createBlock(_component_n_tag, {
                            key: 0,
                            type: "warning",
                            size: "small",
                            bordered: false
                          }, {
                            default: withCtx(() => _cache[1] || (_cache[1] = [
                              createTextVNode("VIP")
                            ])),
                            _: 1
                          })) : createCommentVNode("", true),
                          item.fee == 4 ? (openBlock(), createBlock(_component_n_tag, {
                            key: 1,
                            type: "info",
                            size: "small",
                            bordered: false
                          }, {
                            default: withCtx(() => _cache[2] || (_cache[2] = [
                              createTextVNode("数字专辑")
                            ])),
                            _: 1
                          })) : createCommentVNode("", true),
                          createBaseVNode("span", _hoisted_13, toDisplayString(parseArtist(item.ar)), 1)
                        ])
                      ])
                    ], 8, _hoisted_6),
                    createBaseVNode("div", _hoisted_14, [
                      createVNode(_component_n_icon, {
                        size: "1.3rem",
                        class: "like-button"
                      }, {
                        default: withCtx(() => [
                          withDirectives(createVNode(_component_i_ant_design_heart_outlined, {
                            onClick: ($event) => likeAndUpdateLikelist(item.id, true)
                          }, null, 8, ["onClick"]), [
                            [vShow, !unref(isLiked)[index]]
                          ]),
                          withDirectives(createVNode(_component_i_ant_design_heart_filled, {
                            onClick: ($event) => likeAndUpdateLikelist(item.id, false)
                          }, null, 8, ["onClick"]), [
                            [vShow, unref(isLiked)[index]]
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("span", _hoisted_16, [
                        createBaseVNode("span", null, toDisplayString(item.al.name), 1)
                      ])
                    ])
                  ])
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ])
      ]);
    };
  }
};
const musicList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee320448"]]);
export {
  __unplugin_components_3 as _,
  musicList as m
};
