import { aJ as openBlock, aK as createElementBlock, aL as createBaseVNode, d as defineComponent, aT as useCssVars, b as ref, c as computed, D as onMounted, aM as createVNode, aN as withCtx, u as unref, aU as MarqueePlus, aG as NIcon, aZ as createApp } from "./marqueePlus-C24UHMTj.js";
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
const __unplugin_components_2 = { name: "hugeicons-square-lock02", render: render$1 };
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
const __unplugin_components_0 = { name: "hugeicons-drag-drop", render };
const _hoisted_1 = { class: "outer" };
const _hoisted_2 = { class: "lyric" };
const _hoisted_3 = { class: "ctrl" };
const _hoisted_4 = { class: "lyric-lrc marquee" };
const _hoisted_5 = { class: "lyric-sec marquee" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lyricApp",
  setup(__props) {
    useCssVars((_ctx) => ({
      "dfc2322e": unref(mainColors)[0] + 80,
      "b4aaa0c6": unref(mainColors)[7],
      "b4aaa278": unref(mainColors)[0],
      "b4aaa142": unref(mainColors)[5]
    }));
    let bgColor = ref("rgba(255,255,255,0)");
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
      let lyricObj = JSON.parse(lyric2);
      lyricText.value = lyricObj;
    }
    function changeTheme(event, theme) {
      console.log(theme);
      mainColors.value = JSON.parse(theme)?.mainColors;
    }
    onMounted(() => {
      let outer = document.querySelector(".outer");
      document.querySelector(".lyric");
      outer.addEventListener("mousemove", (event) => {
        bgColor.value = "rgba(255,255,255,0)";
      });
    });
    return (_ctx, _cache) => {
      const _component_i_hugeicons_drag_drop = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_i_hugeicons_square_lock_02 = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_n_icon, {
              size: "2rem",
              class: "drag"
            }, {
              default: withCtx(() => [
                createVNode(_component_i_hugeicons_drag_drop)
              ]),
              _: 1
            }),
            createVNode(_component_n_icon, { size: "2rem" }, {
              default: withCtx(() => [
                createVNode(_component_i_hugeicons_square_lock_02)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(MarqueePlus, {
              html: unref(lyric).lrc,
              speed: 160,
              lyricMode: true
            }, null, 8, ["html"])
          ]),
          createBaseVNode("div", _hoisted_5, [
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
