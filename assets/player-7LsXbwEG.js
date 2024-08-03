import { u as useThemeStore, a as usePlayStore, s as storeToRefs, w as windowBack, g as getColorsFromImg, _ as __unplugin_components_2, S as Scrollbar, l as likeAndUpdateLikelist, p as playinglist, b as __unplugin_components_0, c as __unplugin_components_2$1, d as __unplugin_components_3, e as __unplugin_components_5, f as __unplugin_components_6, h as __unplugin_components_7, i as __unplugin_components_8, j as __unplugin_components_9 } from "./index-DLuLVGgt.js";
import { aN as _export_sfc, b as ref, c as computed, D as onMounted, w as watch, E as onBeforeUnmount, aJ as openBlock, aK as createElementBlock, aL as createBaseVNode, aM as createVNode, aO as withCtx, u as unref, aU as MarqueePlus, aT as toDisplayString, aP as createBlock, aQ as createCommentVNode, f as isRef, aV as withModifiers, aG as NIcon, F as Fragment, aS as renderList, a_ as normalizeClass, a$ as pushScopeId, b0 as popScopeId, aR as useCssVars } from "./marqueePlus-BxO7MkB3.js";
const _withScopeId = (n) => (pushScopeId("data-v-ca08bfe8"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "playerOoouter" };
const _hoisted_2 = { id: "playerOuter" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { id: "playerBackground" }, null, -1));
const _hoisted_4 = { id: "playerContent" };
const _hoisted_5 = { style: { "position": "absolute", "top": "1rem", "left": "1rem", "z-index": "1000" } };
const _hoisted_6 = {
  class: "column",
  id: "column-player"
};
const _hoisted_7 = { id: "container-player" };
const _hoisted_8 = { id: "music-name" };
const _hoisted_9 = {
  id: "music-artist",
  class: "text2"
};
const _hoisted_10 = { id: "player-centerblock" };
const _hoisted_11 = { id: "music-img-container" };
const _hoisted_12 = ["alt", "src"];
const _hoisted_13 = { id: "music-progress" };
const _hoisted_14 = { id: "btn-control" };
const _hoisted_15 = {
  id: "btn-like",
  class: "button"
};
const _hoisted_16 = { id: "btn-play-control" };
const _hoisted_17 = {
  id: "btn-prev",
  class: "button"
};
const _hoisted_18 = {
  id: "btn-pause",
  class: "button"
};
const _hoisted_19 = {
  id: "btn-next",
  class: "button"
};
const _hoisted_20 = {
  id: "btn-list",
  class: "button"
};
const _hoisted_21 = {
  class: "column",
  id: "column-lyric"
};
const _hoisted_22 = { class: "lyric-list" };
const _hoisted_23 = ["id"];
const _hoisted_24 = { class: "lyric-roma" };
const _hoisted_25 = { class: "lyric-tran" };
const _sfc_main = {
  __name: "player",
  setup(__props) {
    useCssVars((_ctx) => ({
      "5434d1fe": unref(background),
      "69924ae2": unref(themeStore).mainColors[0] + `90`,
      "17022944": unref(playingListTran)
    }));
    let themeStore = useThemeStore();
    let playStore = usePlayStore();
    let { currentMusic } = storeToRefs(playStore);
    let lyricScrollbarRef = ref();
    let background = ref("");
    let id_clock1 = NaN;
    let displayList = ref(false);
    let playingListTran = computed(() => {
      return displayList.value ? "-100%" : "0%";
    });
    onMounted(async () => {
      watch(() => currentMusic.value.currentLyricIndex, (value) => {
        console.log("当前歌词改变");
        lyricScrollbarRef.value.scrollTo({ top: document.getElementById("lrc-" + value)?.offsetTop - 200, behavior: "smooth" });
      }, { deep: true });
    });
    onBeforeUnmount(() => {
      clearInterval(id_clock1);
    });
    function getImgMainColor() {
      let color = getColorsFromImg(document.getElementById("music-img"), 2);
      background.value = `linear-gradient(${color[0]}, ${color[1]})`;
    }
    return (_ctx, _cache) => {
      const _component_i_hugeicons_arrow_up_01 = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_n_slider = __unplugin_components_2;
      const _component_i_ant_design_heart_outlined = __unplugin_components_2$1;
      const _component_i_ant_design_heart_filled = __unplugin_components_3;
      const _component_i_hugeicons_arrow_left_01 = __unplugin_components_5;
      const _component_i_hugeicons_play = __unplugin_components_6;
      const _component_i_hugeicons_pause = __unplugin_components_7;
      const _component_i_hugeicons_arrow_right_01 = __unplugin_components_8;
      const _component_i_hugeicons_playlist_03 = __unplugin_components_9;
      const _component_n_scrollbar = Scrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_n_icon, {
                size: "2rem",
                style: { "transform": "rotate(-90deg)" },
                onClick: windowBack
              }, {
                default: withCtx(() => [
                  createVNode(_component_i_hugeicons_arrow_up_01)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(MarqueePlus, {
                    html: unref(playStore).nameWithTns ?? `暂未播放~~`
                  }, null, 8, ["html"])
                ]),
                createBaseVNode("div", _hoisted_9, toDisplayString(unref(currentMusic).artist ?? ``), 1),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("img", {
                      alt: "专辑图片-" + unref(currentMusic).name,
                      src: unref(currentMusic).picurl,
                      id: "music-img",
                      onLoad: getImgMainColor,
                      crossorigin: "anonymous"
                    }, null, 40, _hoisted_12)
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_n_slider, {
                      value: unref(playStore).musicStatus.currentTime,
                      "onUpdate:value": [
                        _cache[0] || (_cache[0] = ($event) => unref(playStore).musicStatus.currentTime = $event),
                        _cache[1] || (_cache[1] = (value) => unref(playStore).seek(value))
                      ],
                      max: unref(playStore).musicStatus.duration,
                      tooltip: false,
                      "show-tooltip": false
                    }, null, 8, ["value", "max"])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      createVNode(_component_n_icon, {
                        size: "2.5rem",
                        class: "icon"
                      }, {
                        default: withCtx(() => [
                          !unref(currentMusic)?.isLiked ? (openBlock(), createBlock(_component_i_ant_design_heart_outlined, {
                            key: 0,
                            onClick: _cache[2] || (_cache[2] = ($event) => likeAndUpdateLikelist(unref(currentMusic).id, true))
                          })) : createCommentVNode("", true),
                          unref(currentMusic)?.isLiked ? (openBlock(), createBlock(_component_i_ant_design_heart_filled, {
                            key: 1,
                            onClick: _cache[3] || (_cache[3] = ($event) => likeAndUpdateLikelist(unref(currentMusic).id, false))
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createVNode(_component_n_icon, {
                          size: "4rem",
                          class: "icon",
                          onClick: unref(playStore).prev
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_i_hugeicons_arrow_left_01)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        unref(playStore).musicStatus.paused ? (openBlock(), createBlock(_component_n_icon, {
                          key: 0,
                          size: "4rem",
                          class: "icon",
                          onClick: _cache[4] || (_cache[4] = () => unref(playStore).play())
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_i_hugeicons_play)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        !unref(playStore).musicStatus.paused ? (openBlock(), createBlock(_component_n_icon, {
                          key: 1,
                          size: "4rem",
                          class: "icon",
                          onClick: _cache[5] || (_cache[5] = () => unref(playStore).pause())
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_i_hugeicons_pause)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_19, [
                        createVNode(_component_n_icon, {
                          size: "4rem",
                          class: "icon",
                          onClick: unref(playStore).next
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_i_hugeicons_arrow_right_01)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(_component_n_icon, {
                        size: "2.5rem",
                        class: "icon",
                        onClick: _cache[6] || (_cache[6] = () => {
                          isRef(displayList) ? displayList.value = !unref(displayList) : displayList = !unref(displayList);
                          return;
                        })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_i_hugeicons_playlist_03)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createVNode(_component_n_scrollbar, {
                id: "container-lyric",
                ref_key: "lyricScrollbarRef",
                ref: lyricScrollbarRef
              }, {
                default: withCtx(() => [
                  createBaseVNode("ul", _hoisted_22, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currentMusic).lyric, (item, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: index,
                        class: normalizeClass({ "lyric-active": unref(currentMusic).currentLyricIndex == index })
                      }, [
                        createBaseVNode("li", {
                          class: "lyric-lrc",
                          id: "lrc-" + index
                        }, toDisplayString(item.lrc), 9, _hoisted_23),
                        createBaseVNode("li", _hoisted_24, toDisplayString(item.roma), 1),
                        createBaseVNode("li", _hoisted_25, toDisplayString(item.tran), 1)
                      ], 2);
                    }), 128))
                  ])
                ]),
                _: 1
              }, 512)
            ])
          ])
        ]),
        createBaseVNode("div", {
          class: "player-playinglist-box",
          onClick: _cache[8] || (_cache[8] = () => {
            isRef(displayList) ? displayList.value = false : displayList = false;
          })
        }, [
          createBaseVNode("div", {
            class: "player-playinglist",
            onClick: _cache[7] || (_cache[7] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createVNode(playinglist)
          ])
        ])
      ]);
    };
  }
};
const player = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca08bfe8"]]);
export {
  player as default
};
