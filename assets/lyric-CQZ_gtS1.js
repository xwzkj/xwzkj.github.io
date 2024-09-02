import { m as markRaw, aJ as openBlock, aK as createElementBlock, aL as createBaseVNode, d as defineComponent, aT as useCssVars, u as unref, b as ref, c as computed, D as onMounted, aM as createVNode, aQ as withCtx, aW as MarqueePlus, aG as NIcon, b0 as createApp } from "./marqueePlus-oXg9xsbo.js";
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  color: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 16.5v-2m-7.732 4.345c.225 1.67 1.608 2.979 3.292 3.056c1.416.065 2.855.099 4.44.099s3.024-.034 4.44-.1c1.684-.076 3.067-1.385 3.292-3.055c.147-1.09.268-2.207.268-3.345s-.121-2.255-.268-3.345c-.225-1.67-1.608-2.979-3.292-3.056A95 95 0 0 0 12 9c-1.585 0-3.024.034-4.44.1c-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5s.121 2.255.268 3.345" }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9" })
], -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const __unplugin_components_2 = markRaw({ name: "hugeicons-square-lock02", render: render$1 });
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 6h.006M6 12h.006M6 18h.006m5.99-12h.007m-.006 6h.006m-.006 6h.006m5.99-12H18m-.006 6H18m-.006 6H18",
  color: "currentColor"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const __unplugin_components_0 = markRaw({ name: "hugeicons-drag-drop", render });
const _hoisted_1 = { class: "outer" };
const _hoisted_2 = { class: "lyric" };
const _hoisted_3 = { class: "ctrl" };
const _hoisted_4 = { class: "ctrl-box" };
const _hoisted_5 = { class: "lyric-lrc marquee" };
const _hoisted_6 = { class: "lyric-sec marquee" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lyricApp",
  setup(__props) {
    useCssVars((_ctx) => ({
      "b8916d5e": !unref(isLocked) ? unref(mainColors)[0] + `80` : `transparent`,
      "1c711c55": !unref(isLocked) ? unref(mainColors)[7] : `transparent`,
      "deb7063a": unref(isLocked) ? `none` : `block`,
      "1b69e00e": unref(mainColors)[7],
      "6cda0e58": unref(displayCtrl) ? `flex` : `none`,
      "6138cf7c": unref(isLocked) ? unref(mainColors)[0] + `80` : `none`,
      "1b69e1c0": unref(mainColors)[0],
      "1b69e08a": unref(mainColors)[5]
    }));
    let isLocked = ref(false);
    let needLockWhenMouseLeave = false;
    let displayCtrl = ref(false);
    let mainColors = ref(["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"]);
    let lyricText = ref({});
    let lyric = computed(() => {
      return {
        lrc: lyricText.value.lrc ?? "",
        tran: lyricText.value.tran ?? "",
        time: lyricText.value.time ?? 0,
        roma: lyricText.value.roma ?? ""
      };
    });
    window?.getLyric(changeLyric);
    window?.getThemeColors(changeTheme);
    function changeLyric(event, lyric2) {
      console.log(lyric2);
      let lyricObj = JSON.parse(lyric2);
      lyricText.value = lyricObj;
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
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
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
          createBaseVNode("div", _hoisted_5, [
            createVNode(MarqueePlus, {
              html: unref(lyric).lrc,
              speed: 160,
              lyricMode: true
            }, null, 8, ["html"])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(MarqueePlus, {
              html: unref(lyric).tran,
              speed: 140,
              lyricMode: true
            }, null, 8, ["html"])
          ])
        ])
      ]);
    };
  }
});
let app = createApp(_sfc_main);
app.mount("#app");
