import { m as markRaw, aK as openBlock, aL as createElementBlock, aM as createBaseVNode, d as defineComponent, aS as useCssVars, u as unref, b as ref, D as onMounted, aN as createVNode, aP as withCtx, aV as MarqueePlus, aH as NIcon, b0 as createApp } from "./__uno-ClEdYsuy.js";
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
      "740da42f": !unref(isLocked) ? unref(mainColors)[0] + `80` : `transparent`,
      "669e1f37": !unref(isLocked) ? unref(mainColors)[7] : `transparent`,
      "5b015345": unref(isLocked) ? `none` : `block`,
      "08f04c4a": unref(mainColors)[7],
      "7013beb6": unref(displayCtrl) ? `flex` : `none`,
      "d00c9dc0": unref(isLocked) ? unref(mainColors)[0] + `80` : `none`,
      "5f16cbaa": unref(mainColors)[6] + `a0`,
      "5f16e4f9": unref(mainColors)[6] + `ff`,
      "5f16e119": unref(mainColors)[6] + `ee`,
      "5f16d959": unref(mainColors)[6] + `cc`,
      "5f16d579": unref(mainColors)[6] + `bb`,
      "08f04d80": unref(mainColors)[2]
    }));
    let isLocked = ref(false);
    let needLockWhenMouseLeave = false;
    let displayCtrl = ref(false);
    let mainColors = ref(["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"]);
    let lyric = ref({});
    window?.getLyric(changeLyric);
    window?.getThemeColors(changeTheme);
    function changeLyric(event, lrc) {
      let received = JSON.parse(lrc);
      if (lyric.value?.lrc?.currentWordIndex?.lineIndex !== received?.lrc?.currentWordIndex?.lineIndex) {
        lyric.value = received;
      } else {
        if (lyric.value.hasOwnProperty("lrc")) {
          lyric.value.lrc.currentWordIndex = received?.lrc?.currentWordIndex;
        }
      }
      console.log(lrc, lyric.value);
      updateIsLocked();
    }
    function changeTheme(event, theme) {
      console.log(theme);
      mainColors.value = JSON.parse(theme)?.mainColors;
    }
    async function switchLock() {
      window.lyricWindowLock(!isLocked.value);
      needLockWhenMouseLeave = false;
      isLocked.value = await updateIsLocked();
    }
    async function updateIsLocked() {
      isLocked.value = await window.isLyricWindowLocked();
      return isLocked.value;
    }
    onMounted(() => {
      updateIsLocked();
      let outer = document.querySelector(".outer");
      let lockEle = document.querySelector(".lock");
      lockEle.addEventListener("mouseenter", async () => {
        console.log("lock mouse enter");
        if (await updateIsLocked()) {
          window.lyricWindowLock(false);
          needLockWhenMouseLeave = true;
        }
      });
      lockEle.addEventListener("mouseleave", async () => {
        console.log("lock mouse leave");
        if (needLockWhenMouseLeave) {
          window.lyricWindowLock(true);
          updateIsLocked();
        }
      });
      let flag;
      outer.addEventListener("mouseenter", async () => {
        console.log("outer mouse enter");
        clearTimeout(flag);
        displayCtrl.value = true;
      });
      outer.addEventListener("mouseleave", async () => {
        console.log("outer mouse leave");
        clearTimeout(flag);
        flag = setTimeout(() => {
          displayCtrl.value = false;
        }, 1e3);
      });
    });
    return (_ctx, _cache) => {
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
              "line-data": unref(lyric)?.lrc,
              speed: 160,
              lyricMode: true
            }, null, 8, ["line-data"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(MarqueePlus, {
              "line-data": unref(lyric)?.tran,
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
