import { i as itemCard } from "./itemCard-DAYGO6uV.js";
import { M as MarqueePlus, _ as __unplugin_components_0, a as __unplugin_components_4, b as __unplugin_components_5, c as __unplugin_components_6, d as __unplugin_components_7, e as __unplugin_components_8, p as playinglist } from "./marqueePlus-BItqUAAo.js";
import { _ as __unplugin_components_2, a as __unplugin_components_3 } from "./heart-outlined-UFyOaekn.js";
import { a as usePlayStore, c as computed, d as openBlock, e as createElementBlock, f as createBaseVNode, h as unref, g as createVNode, t as toDisplayString, i as withCtx, j as createBlock, n as likeAndUpdateLikelist, k as createCommentVNode, u as useUserStore, r as ref, z as useRouter, A as getPersonalizedPlaylist, F as Fragment, p as renderList, B as createTextVNode, v as pushScopeId, x as popScopeId } from "./index-p_PrpQgG.js";
import { _ as _export_sfc, N as NIcon } from "./plugin-vueexport-helper-Bb6wC4bb.js";
import "./Ellipsis-OLKwpPZv.js";
import "./Follower-Do5aQHjp.js";
import "./clickoutside-P_lbRVLf.js";
import "./use-compitable-C7-txXDO.js";
import "./fade-in-scale-up.cssr-oppPnfXe.js";
const _hoisted_1$1 = { class: "ctrl-outer" };
const _hoisted_2$1 = { class: "ctrl-half-top" };
const _hoisted_3$1 = { class: "ctrl-img-box" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "ctrl-info-box" };
const _hoisted_6$1 = { class: "ctrl-info-title" };
const _hoisted_7$1 = { class: "ctrl-info-artist" };
const _hoisted_8$1 = { class: "ctrl-info-lyric" };
const _hoisted_9$1 = { class: "ctrl-half-bottom" };
const _hoisted_10 = { class: "ctrl-progress-box" };
const _hoisted_11 = { id: "btn-control" };
const _hoisted_12 = {
  id: "btn-like",
  class: "button"
};
const _hoisted_13 = { id: "btn-play-control" };
const _hoisted_14 = {
  id: "btn-prev",
  class: "button"
};
const _hoisted_15 = {
  id: "btn-pause",
  class: "button"
};
const _hoisted_16 = {
  id: "btn-next",
  class: "button"
};
const _hoisted_17 = {
  id: "btn-list",
  class: "button"
};
const _sfc_main$1 = {
  __name: "musicController",
  setup(__props) {
    let playStore = usePlayStore();
    let lyricNow = computed(() => {
      if (!Array.isArray(playStore.currentMusic.lyric) || playStore.currentMusic?.lyric.length < playStore.currentMusic.currentLyricIndex) {
        return "";
      }
      return playStore.currentMusic?.lyric[playStore.currentMusic.currentLyricIndex]?.lrc;
    });
    return (_ctx, _cache) => {
      const _component_n_slider = __unplugin_components_0;
      const _component_i_ant_design_heart_outlined = __unplugin_components_2;
      const _component_i_ant_design_heart_filled = __unplugin_components_3;
      const _component_n_icon = NIcon;
      const _component_i_hugeicons_arrow_left_01 = __unplugin_components_4;
      const _component_i_hugeicons_play = __unplugin_components_5;
      const _component_i_hugeicons_pause = __unplugin_components_6;
      const _component_i_hugeicons_arrow_right_01 = __unplugin_components_7;
      const _component_i_hugeicons_playlist_03 = __unplugin_components_8;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("img", {
              class: "ctrl-img",
              src: unref(playStore).currentMusic.picurl
            }, null, 8, _hoisted_4$1)
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("div", _hoisted_6$1, [
              createVNode(MarqueePlus, {
                html: unref(playStore).nameWithTns
              }, null, 8, ["html"])
            ]),
            createBaseVNode("div", _hoisted_7$1, [
              createVNode(MarqueePlus, {
                html: unref(playStore).currentMusic.artist
              }, null, 8, ["html"])
            ]),
            createBaseVNode("div", _hoisted_8$1, toDisplayString(unref(lyricNow)), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          createBaseVNode("div", _hoisted_10, [
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
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_n_icon, {
                size: "2.5rem",
                class: "icon"
              }, {
                default: withCtx(() => [
                  !unref(playStore).currentMusic?.isLiked ? (openBlock(), createBlock(_component_i_ant_design_heart_outlined, {
                    key: 0,
                    onClick: _cache[2] || (_cache[2] = ($event) => likeAndUpdateLikelist(unref(playStore).currentMusic.id, true))
                  })) : (openBlock(), createBlock(_component_i_ant_design_heart_filled, {
                    key: 1,
                    onClick: _cache[3] || (_cache[3] = ($event) => likeAndUpdateLikelist(unref(playStore).currentMusic.id, false))
                  }))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
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
              createBaseVNode("div", _hoisted_15, [
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
              createBaseVNode("div", _hoisted_16, [
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
            createBaseVNode("div", _hoisted_17, [
              createVNode(_component_n_icon, {
                size: "2.5rem",
                class: "icon",
                onClick: _cache[6] || (_cache[6] = () => {
                  _ctx.showPlayingList = !_ctx.showPlayingList;
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
      ]);
    };
  }
};
const MusicController = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-95f2a4ae"]]);
const _withScopeId = (n) => (pushScopeId("data-v-bbcb3b21"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "home" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "home-sub-title" }, "精选歌单", -1));
const _hoisted_3 = { id: "homeRecommendPlaylist" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("播放页"),
  /* @__PURE__ */ createBaseVNode("a", { href: "/#/player" }, "点我")
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("登录页面"),
  /* @__PURE__ */ createBaseVNode("a", { href: "/#/login" }, "点我")
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("设置"),
  /* @__PURE__ */ createBaseVNode("a", { href: "/#/setting" }, "点我")
], -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_9 = { style: { "height": "20rem", "width": "20rem" } };
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let userStore = useUserStore();
    let personalizedPlaylist = ref({ result: [] });
    let router = useRouter();
    getPersonalizedPlaylist().then((res) => {
      personalizedPlaylist.value = res.data;
      console.log(res.data);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("ul", _hoisted_3, [
          unref(userStore).isLogin ? (openBlock(), createElementBlock("li", _hoisted_4, [
            createVNode(itemCard, { isDailySongs: true })
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(personalizedPlaylist).result, (item, index) => {
            return openBlock(), createElementBlock("li", {
              key: item.id
            }, [
              createVNode(itemCard, {
                imgurl: item?.picUrl,
                text: item?.name,
                click: () => unref(router).push(`/playlist?id=${item.id}`)
              }, null, 8, ["imgurl", "text", "click"])
            ]);
          }), 128))
        ]),
        _hoisted_5,
        _hoisted_6,
        _hoisted_7,
        _hoisted_8,
        createTextVNode(" 音乐控件卡片预览： "),
        createVNode(MusicController),
        createTextVNode(" 播放列表预览： "),
        createBaseVNode("div", _hoisted_9, [
          createVNode(playinglist)
        ])
      ]);
    };
  }
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bbcb3b21"]]);
export {
  home as default
};
