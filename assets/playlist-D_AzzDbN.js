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
import { G as defineStore, H as useSettingStore, I as pinia, J as songUrlV1, K as downloadFile, L as songDetail, M as parseDetailToList, n as usePlayStore, O as recommendSongs, P as playlistDetail, C as Button, Q as __unplugin_components_0 } from "./index-DwiX7jQM.js";
import { m as musicList, _ as __unplugin_components_3 } from "./musicList-Bn6TwAB2.js";
import { aO as _export_sfc, b as ref, w as watch, z as onMounted, aL as createElementBlock, u as unref, aM as createBaseVNode, aR as createCommentVNode, aU as toDisplayString, G as Fragment, aT as renderList, aN as createVNode, aP as withCtx, aK as openBlock, aQ as createBlock, F as createTextVNode } from "./font-CXcYbOso.js";
import { _ as __unplugin_components_1 } from "./Ellipsis-q4V6xPHB.js";
const useDownloadStore = defineStore("download", {
  state: () => ({
    list: [],
    // 下载器工作状态
    status: "waiting",
    current: -1,
    dirHandle: null
  }),
  actions: {
    startTimer() {
      setInterval(() => {
        if (this.status === "waiting") {
          let wIndex = this.list.findIndex((item) => item.status === "waiting");
          if (wIndex >= 0) {
            this.down(wIndex);
          }
        }
      }, 2500);
    },
    down(index) {
      return __async(this, null, function* () {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
          if (index < 0 || index >= this.list.length) return;
          if ("showDirectoryPicker" in window) {
            this.dirHandle = this.dirHandle || (yield window.showDirectoryPicker({ mode: "readwrite" }));
          }
          this.status = "working";
          this.current = index;
          let data = this.list[index];
          let settingStore = useSettingStore(pinia);
          let res = yield songUrlV1(data.id, settingStore.musicLevel, localStorage.getItem("specialApi"), localStorage.getItem("cookie"));
          let url = (_c = (_b = (_a = res.data) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.url;
          let type = (_g = (_f = (_e = (_d = res.data) == null ? void 0 : _d.data) == null ? void 0 : _e[0]) == null ? void 0 : _f.type) != null ? _g : "mp3";
          console.log("⬇开始下载", `${data.detail.artist} - ${data.detail.name}.${type}`);
          yield downloadFile(url, `${data.detail.artist} - ${data.detail.name}.${type}`, void 0, this.dirHandle);
        } catch (e) {
          console.log("下载出现错误", e);
          this.list[index].status = "error";
        }
        this.list[index].status = "finished";
        this.status = "waiting";
      });
    },
    addDownloadItemByIds(ids) {
      return __async(this, null, function* () {
        if (!ids.length) return;
        let data = [];
        let res = yield songDetail(ids.join(","));
        data = parseDetailToList(res.data.songs);
        data.forEach((item) => {
          this.list.push({
            id: item.id,
            detail: item,
            status: "waiting"
          });
        });
      });
    }
  }
});
useDownloadStore().startTimer();
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
const _hoisted_12 = { class: "playlistControler playlist-info-item flex" };
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
    const downloadStore = useDownloadStore();
    let loading = ref(false);
    let result = ref([]);
    let props = __props;
    watch(props, () => {
      result.value = {};
      parsePlayList();
    }, { deep: true });
    onMounted(() => {
      parsePlayList();
    });
    function parsePlayList() {
      return __async(this, null, function* () {
        if (props.isDailySongs) {
          let res = yield recommendSongs();
          let d = /* @__PURE__ */ new Date();
          result.value = {
            tracks: res.data.data.dailySongs,
            name: `${d.getMonth() + 1}/${d.getDate()} 每日推荐`,
            description: `根据你的音乐口味生成，每天06:00更新`,
            coverImgUrl: res.data.data.dailySongs[0].al.picUrl,
            tags: ["每日推荐"]
          };
        } else {
          let res = yield playlistDetail(props.id);
          let data = res.data.playlist;
          let ids = res.data.playlist.trackIds;
          if (res.data.playlist.tracks.length != ids.length) {
            res = yield songDetail(ids.map((item) => item.id).join(","));
            data.tracks = res.data.songs;
          }
          result.value = data;
        }
        if (props.autoPlay) {
          playAll();
        }
      });
    }
    function playAll() {
      return __async(this, null, function* () {
        loading.value = true;
        yield playStore.playlistInit(null, result.value.tracks);
        playStore.play(true);
        loading.value = false;
      });
    }
    function downAll() {
      downloadStore.addDownloadItemByIds(result.value.tracks.map((item) => item.id));
    }
    function play(id) {
      return __async(this, null, function* () {
        loading.value = true;
        yield playStore.addMusic([id], "now", true);
        playStore.play(true);
        loading.value = false;
      });
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
                createVNode(_component_n_button, {
                  onClick: playAll,
                  type: "primary"
                }, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [
                    createTextVNode("播放全部")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  onClick: downAll,
                  type: "primary",
                  secondary: ""
                }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createTextVNode("下载全部")
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
const playlist = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac7d1bb9"]]);
export {
  playlist as default
};
