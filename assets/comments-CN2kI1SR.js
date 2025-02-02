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
import { ag as __unplugin_components_0, ah as formatCount, ai as commentFloor, q as error, aj as emitter, ak as commentNew, H as songDetail, T as parseArtist } from "./index-DdQrTcLH.js";
import { m as markRaw, aM as createElementBlock, aO as openBlock, aN as createBaseVNode, d as defineComponent, r as ref, aT as createCommentVNode, aV as toDisplayString, aP as createVNode, aH as NIcon, aR as withCtx, u as unref, F as createTextVNode, G as Fragment, aX as renderList, aS as createBlock, w as watch, z as onMounted } from "./font-B8fvUeLJ.js";
import { _ as __unplugin_components_0$1 } from "./Spin-uDDAdb1V.js";
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("g", { fill: "none" }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M17.36 20H8V10c.625 0 1.208-.312 1.555-.832l2.554-3.832A3 3 0 0 1 14.606 4h.213a1 1 0 0 1 .987 1.164L15 10h3.56a2 2 0 0 1 1.962 2.392l-1.2 6A2 2 0 0 1 17.36 20",
        opacity: ".16"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m15 10l-.986-.164A1 1 0 0 0 15 11zM4 10V9a1 1 0 0 0-1 1zm16.522 2.392l.98.196zM6 21h11.36v-2H6zM18.56 9H15v2h3.56zm-2.574 1.164l.806-4.835L14.82 5l-.805 4.836zM14.82 3h-.213v2h.213zm-3.542 1.781L8.762 8.555l1.664 1.11L12.94 5.89zM7.93 9H4v2h3.93zM3 10v8h2v-8zm17.302 8.588l1.2-6l-1.961-.392l-1.2 6zM8.762 8.555A1 1 0 0 1 7.93 9v2a3 3 0 0 0 2.496-1.336zm8.03-3.226A2 2 0 0 0 14.82 3v2zM18.56 11a1 1 0 0 1 .981 1.196l1.961.392A3 3 0 0 0 18.56 9zm-1.2 10a3 3 0 0 0 2.942-2.412l-1.961-.392a1 1 0 0 1-.98.804zM14.606 3a4 4 0 0 0-3.329 1.781l1.665 1.11A2 2 0 0 1 14.606 5zM6 19a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3z"
      }),
      createBaseVNode("path", {
        stroke: "currentColor",
        "stroke-width": "2",
        d: "M8 10v10"
      })
    ], -1)
  ]));
}
const __unplugin_components_2 = markRaw({ name: "iconamoon-like-duotone", render });
const _hoisted_1$1 = { class: "comment-item rounded-0.5rem border-1px border-#e0e0e0 border-solid p-0.5rem mb-0.5rem bg-#ffffff80" };
const _hoisted_2$1 = { class: "top mb-0.5rem flex items-center justify-between" };
const _hoisted_3$1 = { class: "user flex items-center" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "name text2" };
const _hoisted_6$1 = { class: "right flex flex-col items-end" };
const _hoisted_7$1 = { class: "time text3" };
const _hoisted_8$1 = { class: "ctrl flex items-center" };
const _hoisted_9 = { class: "reply-count w-3em ml-0.2rem mr-0.5rem text-0.7rem text3" };
const _hoisted_10 = { class: "like flex items-center mr-0.5rem" };
const _hoisted_11 = { class: "like-count w-3em ml-0.2rem text-0.7rem text3" };
const _hoisted_12 = { class: "comment-item-content text1 mb-0.5rem" };
const _hoisted_13 = {
  key: 0,
  class: "reply-to text2"
};
const _hoisted_14 = {
  key: 0,
  class: "reply-list ml-2.5rem"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "commentItem",
  props: {
    item: {},
    songId: {},
    isFloor: { type: Boolean },
    replyTo: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const formatCount$1 = formatCount;
    let replyData = ref();
    function openFloor(parentCommentId) {
      return __async(this, null, function* () {
        try {
          if (replyData.value) {
            replyData.value = null;
            return;
          }
          let res = yield commentFloor(parentCommentId, props.songId, 0, 25);
          if (res.data.code == 200) {
            replyData.value = res.data.data.comments;
          }
          console.log(replyData.value, "replyData", res.data, "res");
        } catch (error$1) {
          error(error$1, "获取评论回复失败");
        }
      });
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_i_hugeicons_message_01 = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_i_iconamoon_like_duotone = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("img", {
              class: "avatar size-2.2rem mr-0.5rem rounded-25% border-1px border-#e0e0e0 border-solid",
              src: _ctx.item.user.avatarUrl,
              crossorigin: "anonymous"
            }, null, 8, _hoisted_4$1),
            createBaseVNode("div", _hoisted_5$1, toDisplayString(_ctx.item.user.nickname), 1)
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, toDisplayString(_ctx.item.timeStr), 1),
            createBaseVNode("div", _hoisted_8$1, [
              !_ctx.isFloor ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "reply flex items-center mr-0.5rem",
                cursor: "pointer",
                onClick: _cache[0] || (_cache[0] = ($event) => openFloor(_ctx.item.commentId))
              }, [
                createVNode(_component_n_icon, { size: "1.5rem" }, {
                  default: withCtx(() => [
                    createVNode(_component_i_hugeicons_message_01)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_9, toDisplayString(unref(formatCount$1)(_ctx.item.replyCount)), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_n_icon, { size: "1.5rem" }, {
                  default: withCtx(() => [
                    createVNode(_component_i_iconamoon_like_duotone)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_11, toDisplayString(unref(formatCount$1)(_ctx.item.likedCount)), 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12, [
          _ctx.isFloor && _ctx.replyTo ? (openBlock(), createElementBlock("span", _hoisted_13, "回复 @" + toDisplayString((_a = _ctx.item.beReplied) == null ? void 0 : _a[0].user.nickname), 1)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(_ctx.item.content), 1)
        ]),
        !_ctx.isFloor && unref(replyData) ? (openBlock(), createElementBlock("div", _hoisted_14, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(replyData), (i) => {
            var _a2, _b;
            return openBlock(), createBlock(_sfc_main$1, {
              item: i,
              songId: _ctx.songId,
              isFloor: true,
              replyTo: ((_a2 = i.beReplied) == null ? void 0 : _a2[0].beRepliedCommentId) != _ctx.item.commentId ? (_b = i.beReplied) == null ? void 0 : _b[0] : false
            }, null, 8, ["item", "songId", "replyTo"]);
          }), 256))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "comment-top" };
const _hoisted_3 = { class: "song-info flex items-center mb-1rem" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "song-info-right" };
const _hoisted_6 = { class: "name text-1.3rem ml-0.5rem text1" };
const _hoisted_7 = { class: "artist ml-0.5rem text2" };
const _hoisted_8 = { class: "comment-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "comments",
  props: {
    id: {}
  },
  setup(__props) {
    let props = __props;
    let data = ref({});
    let songId;
    watch(props, (value) => {
      getComments();
    }, { deep: true });
    onMounted(getComments);
    function getComments() {
      return __async(this, null, function* () {
        var _a, _b;
        try {
          data.value = null;
          emitter.emit("switchShowPlayer", false);
          songId = props.id;
          let res = yield commentNew(songId, 0, 1, 45, 1);
          if (res.data.code == 200) {
            data.value = res.data.data;
          } else {
            throw new Error(res.data);
          }
          let res1 = yield songDetail(songId);
          if (res1.data.code == 200) {
            data.value.songInfo = {
              picUrl: res1.data.songs[0].al.picUrl,
              name: res1.data.songs[0].name,
              artists: parseArtist(res1.data.songs[0].ar)
            };
          } else {
            throw new Error(res1.data);
          }
          if (!((_b = (_a = data.value) == null ? void 0 : _a.comments) == null ? void 0 : _b.length)) {
            throw new Error("暂无评论");
          }
          if (!data.value) {
            throw new Error("获取内容为空");
          }
        } catch (e) {
          error(e.message, "获取评论失败");
          data.value = "这是试图防止一直转圈的字符串";
        }
      });
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_n_spin = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "comment-title text-1.5rem mb-1rem" }, "歌曲评论", -1)),
        unref(data) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("img", {
                src: (_b = (_a = unref(data)) == null ? void 0 : _a.songInfo) == null ? void 0 : _b.picUrl,
                class: "cover size-3rem rounded-25%",
                crossorigin: "anonymous"
              }, null, 8, _hoisted_4),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, toDisplayString((_d = (_c = unref(data)) == null ? void 0 : _c.songInfo) == null ? void 0 : _d.name), 1),
                createBaseVNode("div", _hoisted_7, toDisplayString((_f = (_e = unref(data)) == null ? void 0 : _e.songInfo) == null ? void 0 : _f.artists), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList((_g = unref(data)) == null ? void 0 : _g.comments, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "comment-item",
                key: item.commentId
              }, [
                createVNode(_sfc_main$1, {
                  item,
                  songId: unref(songId),
                  isFloor: false
                }, null, 8, ["item", "songId"])
              ]);
            }), 128))
          ])
        ])) : (openBlock(), createBlock(_component_n_spin, {
          key: 1,
          class: "loading-center"
        }))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
