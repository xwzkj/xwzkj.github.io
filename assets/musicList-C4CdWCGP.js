import { u as useUserStore, R as __unplugin_components_5, S as parseArray, Q as __unplugin_components_0, T as parseArtist, U as __unplugin_components_2, W as likeAndUpdateLikelist, X as __unplugin_components_3 } from "./index-CXxYeuur.js";
import { aQ as _export_sfc, r as ref, c as computed, aM as createElementBlock, aO as openBlock, aN as createBaseVNode, aP as createVNode, aR as withCtx, G as Fragment, aX as renderList, aV as toDisplayString, u as unref, aT as createCommentVNode, aS as createBlock, F as createTextVNode, aH as NIcon, I as withDirectives, at as vShow } from "./font-B8fvUeLJ.js";
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
      const _component_i_ant_design_heart_filled = __unplugin_components_3;
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
  musicList as m
};
