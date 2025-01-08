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
import { m as markRaw, aM as openBlock, aN as createElementBlock, aO as createBaseVNode, d as defineComponent, b as ref, z as onMounted, aP as createVNode, aR as withCtx, u as unref, aX as MarqueePlus, aU as useCssVars, aH as NIcon, b1 as createApp } from "./font-DFOg-pbW.js";
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      color: "currentColor"
    }, [
      createBaseVNode("path", { d: "M12 16.5v-2m-7.732 4.345c.225 1.67 1.608 2.979 3.292 3.056c1.416.065 2.855.099 4.44.099s3.024-.034 4.44-.1c1.684-.076 3.067-1.385 3.292-3.055c.147-1.09.268-2.207.268-3.345s-.121-2.255-.268-3.345c-.225-1.67-1.608-2.979-3.292-3.056A95 95 0 0 0 12 9c-1.585 0-3.024.034-4.44.1c-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5s.121 2.255.268 3.345" }),
      createBaseVNode("path", { d: "M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9" })
    ], -1)
  ]));
}
const __unplugin_components_2 = markRaw({ name: "hugeicons-square-lock02", render: render$1 });
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M6 6h.006M6 12h.006M6 18h.006m5.99-12h.007m-.006 6h.006m-.006 6h.006m5.99-12H18m-.006 6H18m-.006 6H18",
      color: "currentColor"
    }, null, -1)
  ]));
}
const __unplugin_components_0 = markRaw({ name: "hugeicons-drag-drop", render });
const _hoisted_1 = { class: "outer" };
const _hoisted_2 = { class: "ctrl" };
const _hoisted_3 = { class: "ctrl-box" };
const _hoisted_4 = { class: "lyric-lrc marquee lyric" };
const _hoisted_5 = { class: "lyric-sec marquee lyric" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lyricApp",
  setup(__props) {
    useCssVars((_ctx) => ({
      "19d7edc9": !unref(isLocked) ? unref(mainColors)[0] + `80` : `transparent`,
      "3f1c0edd": !unref(isLocked) ? unref(mainColors)[7] : `transparent`,
      "1f1efd6b": unref(isLocked) ? `none` : `block`,
      "2674c2fe": unref(mainColors)[7],
      "b9211148": unref(displayCtrl) ? `flex` : `none`,
      "0c67968c": unref(isLocked) ? unref(mainColors)[0] + `80` : `none`,
      "7cd09c5a": unref(mainColors)[6] + `dd`,
      "2674c3f6": unref(mainColors)[3],
      "2674c434": unref(mainColors)[2]
    }));
    let isLocked = ref(false);
    let needLockWhenMouseLeave = false;
    let displayCtrl = ref(false);
    let mainColors = ref(["#fffdf0", "#fffbe3", "#fff4ba", "#f7e28d", "#ebca60", "#deb237", "#b88c25", "#916816", "#6b480b", "#452c06"]);
    let lyric = ref({});
    window == null ? void 0 : window.getLyric(changeLyric);
    window == null ? void 0 : window.getThemeColors(changeTheme);
    function changeLyric(event, lrc) {
      var _a, _b, _c, _d, _e, _f, _g;
      let received = JSON.parse(lrc);
      if (((_c = (_b = (_a = lyric.value) == null ? void 0 : _a.lrc) == null ? void 0 : _b.currentWordIndex) == null ? void 0 : _c.lineIndex) !== ((_e = (_d = received == null ? void 0 : received.lrc) == null ? void 0 : _d.currentWordIndex) == null ? void 0 : _e.lineIndex)) {
        lyric.value = received;
      } else {
        if (lyric.value.hasOwnProperty("lrc")) {
          lyric.value.lrc.currentWordIndex = (_f = received == null ? void 0 : received.lrc) == null ? void 0 : _f.currentWordIndex;
          lyric.value.lrc.paused = (_g = received == null ? void 0 : received.lrc) == null ? void 0 : _g.paused;
        }
      }
      console.log(lrc, lyric.value);
      updateIsLocked();
    }
    function changeTheme(event, theme) {
      var _a;
      mainColors.value = (_a = JSON.parse(theme)) == null ? void 0 : _a.mainColors;
    }
    function switchLock() {
      return __async(this, null, function* () {
        window.lyricWindowLock(!isLocked.value);
        needLockWhenMouseLeave = false;
        isLocked.value = yield updateIsLocked();
      });
    }
    function updateIsLocked() {
      return __async(this, null, function* () {
        isLocked.value = yield window.isLyricWindowLocked();
        return isLocked.value;
      });
    }
    onMounted(() => {
      updateIsLocked();
      let outer = document.querySelector(".outer");
      let lockEle = document.querySelector(".lock");
      lockEle.addEventListener("mouseenter", () => __async(this, null, function* () {
        if (yield updateIsLocked()) {
          window.lyricWindowLock(false);
          needLockWhenMouseLeave = true;
        }
      }));
      lockEle.addEventListener("mouseleave", () => __async(this, null, function* () {
        if (needLockWhenMouseLeave) {
          window.lyricWindowLock(true);
          updateIsLocked();
        }
      }));
      let flag;
      outer.addEventListener("mouseenter", () => __async(this, null, function* () {
        clearTimeout(flag);
        displayCtrl.value = true;
      }));
      outer.addEventListener("mouseleave", () => __async(this, null, function* () {
        clearTimeout(flag);
        flag = setTimeout(() => {
          displayCtrl.value = false;
        }, 1e3);
      }));
    });
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_i_hugeicons_drag_drop = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_i_hugeicons_square_lock_02 = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_n_icon, {
                size: "2rem",
                class: "drag none-after-lock"
              }, {
                default: withCtx(() => [
                  createVNode(_component_i_hugeicons_drag_drop)
                ]),
                _: 1
              }),
              createVNode(_component_n_icon, {
                size: "2rem",
                class: "lock",
                onClick: switchLock
              }, {
                default: withCtx(() => [
                  createVNode(_component_i_hugeicons_square_lock_02)
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(MarqueePlus, {
              "line-data": (_a = unref(lyric)) == null ? void 0 : _a.lrc,
              speed: 160,
              lyricMode: true
            }, null, 8, ["line-data"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(MarqueePlus, {
              "line-data": (_b = unref(lyric)) == null ? void 0 : _b.tran,
              speed: 140,
              lyricMode: true
            }, null, 8, ["line-data"])
          ])
        ])
      ]);
    };
  }
});
let app = createApp(_sfc_main);
app.mount("#app");
