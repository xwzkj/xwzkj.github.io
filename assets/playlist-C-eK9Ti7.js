import { n as usePlayStore, G as recommendSongs, H as playlistDetail, C as Button, x as useRouter, I as __unplugin_components_0 } from "./index-4e8K30Hd.js";
import { m as musicList, _ as __unplugin_components_3 } from "./musicList-BJI-YW8H.js";
import { aO as _export_sfc, b as ref, w as watch, D as onMounted, aL as createElementBlock, u as unref, aM as createBaseVNode, aR as createCommentVNode, aU as toDisplayString, F as Fragment, aT as renderList, aN as createVNode, aP as withCtx, aK as openBlock, aQ as createBlock, v as createTextVNode } from "./font-D8i_B5DI.js";
import { _ as __unplugin_components_1 } from "./Ellipsis-B0XM8_ab.js";
const _hoisted_1 = { key: "playlst-content" };
const _hoisted_2 = { class: "playlistDetail" };
const _hoisted_3 = {
  key: 0,
  class: "playlistImg"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "playlistInfo" };
const _hoisted_6 = { class: "playlistName playlist-info-item text1" };
const _hoisted_7 = {
  key: 0,
  class: "playlistAuthor playlist-info-item"
};
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "playlistAuthorName text2" };
const _hoisted_10 = { class: "playlistTagContainer" };
const _hoisted_11 = { class: "playlist-desc playlist-info-item text2" };
const _hoisted_12 = { class: "playlistControler playlist-info-item" };
const _hoisted_13 = { class: "playlist-musiclist" };
const _hoisted_14 = {
  class: "playlist-spin",
  key: "playlst-spin"
};
const _sfc_main = {
  __name: "playlist",
  props: ["id", "isDailySongs", "autoPlay"],
  setup(__props) {
    const playStore = usePlayStore();
    useRouter();
    let loading = ref(false);
    let result = ref([]);
    let props = __props;
    watch(props, () => {
      console.log("playlist组件props被更新");
      result.value = {};
      parsePlayList();
    }, { deep: true });
    onMounted(() => {
      console.log("playlist组件被挂载");
      parsePlayList();
    });
    async function parsePlayList() {
      if (props.isDailySongs) {
        let res = await recommendSongs();
        let d = /* @__PURE__ */ new Date();
        result.value = {
          tracks: res.data.data.dailySongs,
          name: `${d.getMonth() + 1}/${d.getDate()} 每日推荐`,
          description: `根据你的音乐口味生成，每天06:00更新`,
          coverImgUrl: res.data.data.dailySongs[0].al.picUrl,
          tags: ["每日推荐"]
        };
      } else {
        let res = await playlistDetail(props.id);
        result.value = res.data.playlist;
      }
      if (props.autoPlay) {
        playAll();
      }
    }
    async function playAll() {
      loading.value = true;
      await playStore.playlistInit(null, result.value.tracks);
      playStore.play(true);
      loading.value = false;
    }
    async function play(id) {
      loading.value = true;
      await playStore.addMusic([id], "now", true);
      playStore.play(true);
      loading.value = false;
    }
    return (_ctx, _cache) => {
      const _component_n_tag = __unplugin_components_0;
      const _component_n_ellipsis = __unplugin_components_1;
      const _component_n_button = Button;
      const _component_n_spin = __unplugin_components_3;
      return openBlock(), createElementBlock("div", null, [
        unref(result).tracks && !unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            unref(result).coverImgUrl ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("img", {
                src: unref(result).coverImgUrl
              }, null, 8, _hoisted_4)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, toDisplayString(unref(result).name), 1),
              unref(result).creator ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createBaseVNode("img", {
                  class: "playlistAuthorAvatar",
                  src: unref(result).creator.avatarUrl
                }, null, 8, _hoisted_8),
                createBaseVNode("div", _hoisted_9, toDisplayString(unref(result).creator.nickname), 1),
                createBaseVNode("span", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(result).tags, (item) => {
                    return openBlock(), createBlock(_component_n_tag, {
                      type: "success",
                      size: "small",
                      class: "playlistTag"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_11, [
                createVNode(_component_n_ellipsis, {
                  style: { "max-width": "100%" },
                  "line-clamp": 3
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(result).description), 1)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_n_button, { onClick: playAll }, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [
                    createTextVNode("播放全部")
                  ])),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createVNode(musicList, {
              value: unref(result).tracks,
              nameOnClick: play
            }, null, 8, ["value"])
          ])
        ])) : createCommentVNode("", true),
        !unref(result).tracks || unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_14, [
          createVNode(_component_n_spin, { size: "large" })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const playlist = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b141e1ea"]]);
export {
  playlist as default
};
