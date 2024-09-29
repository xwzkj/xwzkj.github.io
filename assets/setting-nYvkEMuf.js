import { ah as cB, ai as c, am as cE, d as defineComponent, ap as useConfig, h, aG as createTheme, an as derived, b3 as toHexaString, b4 as rgba, b5 as toHslaString, b6 as toHsvaString, b7 as toRgbaString, b8 as hsla, b9 as hsva, b as ref, c as computed, H as createInjectionKey, i as inject, ae as watchEffect, ba as toHexString, bb as toHslString, bc as toRgbString, bd as toHsvString, x as warn, aj as cM, ao as useTheme, p as provide, l as toRef, w as watch, ay as createKey, aq as useThemeClass, af as Transition, I as withDirectives, n as nextTick, m as markRaw, aK as openBlock, aL as createElementBlock, aM as createBaseVNode, aO as _export_sfc, aN as createVNode, aP as withCtx, L as renderSlot, u as unref, aQ as createBlock, f as isRef, aR as createCommentVNode, aH as NIcon, D as onMounted, at as vShow, v as createTextVNode, aU as toDisplayString } from "./font-JWUAjikw.js";
import { W as useStyle, X as inputLight, Y as buttonLight, Z as on, $ as off, _ as __unplugin_components_0$1, a0 as fadeInScaleUpTransition, a1 as useAdjustedTo, a2 as useFormItem, a3 as useLocale, e as useMergedState, a4 as isMounted, a5 as getPreciseEventTarget, a6 as Binder, a7 as VTarget, a8 as VFollower, a9 as clickoutside, k as call, C as Button, Q as __unplugin_components_5, aa as useSettingStore, u as useUserStore, q as useThemeStore, w as success, y as error, ab as __unplugin_components_4, ac as __unplugin_components_5$1 } from "./index-prVFG7w9.js";
function hsl2hsv(h2, s, l) {
  s /= 100;
  l /= 100;
  const v = s * Math.min(l, 1 - l) + l;
  return [h2, v ? (2 - 2 * l / v) * 100 : 0, v * 100];
}
function hsv2hsl(h2, s, v) {
  s /= 100;
  v /= 100;
  const l = v - v * s / 2;
  const m = Math.min(l, 1 - l);
  return [h2, m ? (v - l) / m * 100 : 0, l * 100];
}
function hsv2rgb(h2, s, v) {
  s /= 100;
  v /= 100;
  let f = (n, k = (n + h2 / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5) * 255, f(3) * 255, f(1) * 255];
}
function rgb2hsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let v = Math.max(r, g, b), c2 = v - Math.min(r, g, b);
  let h2 = c2 && (v == r ? (g - b) / c2 : v == g ? 2 + (b - r) / c2 : 4 + (r - g) / c2);
  return [60 * (h2 < 0 ? h2 + 6 : h2), v && c2 / v * 100, v * 100];
}
function rgb2hsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let v = Math.max(r, g, b), c2 = v - Math.min(r, g, b), f = 1 - Math.abs(v + v - c2 - 1);
  let h2 = c2 && (v == r ? (g - b) / c2 : v == g ? 2 + (b - r) / c2 : 4 + (r - g) / c2);
  return [60 * (h2 < 0 ? h2 + 6 : h2), f ? c2 / f * 100 : 0, (v + v - c2) * 50];
}
function hsl2rgb(h2, s, l) {
  s /= 100;
  l /= 100;
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h2 / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}
const style$1 = cB("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [c(">", [cB("input", [c("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), c("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), cB("button", [c("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [cE("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), c("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [cE("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), c("*", [c("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [c(">", [cB("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB("base-selection", [cB("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cE("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), c("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [c(">", [cB("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB("base-selection", [cB("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cE("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);
const inputGroupProps = {};
const NInputGroup = defineComponent({
  name: "InputGroup",
  props: inputGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useStyle("-input-group", style$1, mergedClsPrefixRef);
    return {
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-input-group`
    }, this.$slots);
  }
});
function self(vars) {
  const {
    fontSize,
    boxShadow2,
    popoverColor,
    textColor2,
    borderRadius,
    borderColor,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  } = vars;
  return {
    panelFontSize: fontSize,
    boxShadow: boxShadow2,
    color: popoverColor,
    textColor: textColor2,
    borderRadius,
    border: `1px solid ${borderColor}`,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  };
}
const colorPickerLight = createTheme({
  name: "ColorPicker",
  common: derived,
  peers: {
    Input: inputLight,
    Button: buttonLight
  },
  self
});
function deriveDefaultValue(modes, showAlpha) {
  const mode = modes[0];
  switch (mode) {
    case "hex":
      return showAlpha ? "#000000FF" : "#000000";
    case "rgb":
      return showAlpha ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
    case "hsl":
      return showAlpha ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
    case "hsv":
      return showAlpha ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
  }
  return "#000000";
}
function getModeFromValue(color) {
  if (color === null) return null;
  if (/^ *#/.test(color)) return "hex";
  if (color.includes("rgb")) return "rgb";
  if (color.includes("hsl")) return "hsl";
  if (color.includes("hsv")) return "hsv";
  return null;
}
function normalizeHue(hue) {
  hue = Math.round(hue);
  return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
function normalizeAlpha(alpha) {
  alpha = Math.round(alpha * 100) / 100;
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
const convert = {
  rgb: {
    hex(value) {
      return toHexaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hex: {
    rgb(value) {
      return toRgbaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hsl: {
    hex(value) {
      const [h2, s, l, a] = hsla(value);
      return toHexaString([...hsl2rgb(h2, s, l), a]);
    },
    rgb(value) {
      const [h2, s, l, a] = hsla(value);
      return toRgbaString([...hsl2rgb(h2, s, l), a]);
    },
    hsv(value) {
      const [h2, s, l, a] = hsla(value);
      return toHsvaString([...hsl2hsv(h2, s, l), a]);
    }
  },
  hsv: {
    hex(value) {
      const [h2, s, v, a] = hsva(value);
      return toHexaString([...hsv2rgb(h2, s, v), a]);
    },
    rgb(value) {
      const [h2, s, v, a] = hsva(value);
      return toRgbaString([...hsv2rgb(h2, s, v), a]);
    },
    hsl(value) {
      const [h2, s, v, a] = hsva(value);
      return toHslaString([...hsv2hsl(h2, s, v), a]);
    }
  }
};
function convertColor(value, mode, originalMode) {
  originalMode = originalMode || getModeFromValue(value);
  if (!originalMode) return null;
  if (originalMode === mode) return value;
  const conversions = convert[originalMode];
  return conversions[mode](value);
}
const HANDLE_SIZE$2 = "12px";
const HANDLE_SIZE_NUM$1 = 12;
const RADIUS$2 = "6px";
const RADIUS_NUM = 6;
const GRADIENT = "linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";
const HueSlider = defineComponent({
  name: "HueSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    hue: {
      type: Number,
      required: true
    },
    onUpdateHue: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e) {
      if (!railRef.value) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newHue = normalizeHue((e.clientX - left - RADIUS_NUM) / (width - HANDLE_SIZE_NUM$1) * 360);
      props.onUpdateHue(newHue);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      style: {
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2
      }
    }, h("div", {
      ref: "railRef",
      style: {
        boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, .24)",
        boxSizing: "border-box",
        backgroundImage: GRADIENT,
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2,
        position: "relative"
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        position: "absolute",
        left: RADIUS$2,
        right: RADIUS$2,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc((${this.hue}%) / 359 * 100 - ${RADIUS$2})`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    })))));
  }
});
const HANDLE_SIZE$1 = "12px";
const HANDLE_SIZE_NUM = 12;
const RADIUS$1 = "6px";
const AlphaSlider = defineComponent({
  name: "AlphaSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    alpha: {
      type: Number,
      default: 0
    },
    onUpdateAlpha: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e) {
      if (!railRef.value || !props.rgba) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newAlpha = (e.clientX - left) / (width - HANDLE_SIZE_NUM);
      props.onUpdateAlpha(normalizeAlpha(newAlpha));
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      railBackgroundImage: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2) return "";
        return `linear-gradient(to right, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 0) 0%, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 1) 100%)`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      ref: "railRef",
      style: {
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        borderRadius: RADIUS$1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden"
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-checkboard`
    }), h("div", {
      class: `${clsPrefix}-color-picker-slider__image`,
      style: {
        backgroundImage: this.railBackgroundImage
      }
    })), this.rgba && h("div", {
      style: {
        position: "absolute",
        left: RADIUS$1,
        right: RADIUS$1,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc(${this.alpha * 100}% - ${RADIUS$1})`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: toRgbaString(this.rgba),
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }))));
  }
});
const HANDLE_SIZE = "12px";
const RADIUS = "6px";
const Pallete = defineComponent({
  name: "Pallete",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    // 0 - 360
    displayedHue: {
      type: Number,
      required: true
    },
    displayedSv: {
      type: Array,
      required: true
    },
    onUpdateSV: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const palleteRef = ref(null);
    function handleMouseDown(e) {
      if (!palleteRef.value) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: palleteEl
      } = palleteRef;
      if (!palleteEl) return;
      const {
        width,
        height,
        left,
        bottom
      } = palleteEl.getBoundingClientRect();
      const newV = (bottom - e.clientY) / height;
      const newS = (e.clientX - left) / width;
      const normalizedNewS = 100 * (newS > 1 ? 1 : newS < 0 ? 0 : newS);
      const normalizedNewV = 100 * (newV > 1 ? 1 : newV < 0 ? 0 : newV);
      props.onUpdateSV(normalizedNewS, normalizedNewV);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      palleteRef,
      handleColor: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2) return "";
        return `rgb(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]})`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-pallete`,
      onMousedown: this.handleMouseDown,
      ref: "palleteRef"
    }, h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer`,
      style: {
        backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
      }
    }), h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer ${clsPrefix}-color-picker-pallete__layer--shadowed`,
      style: {
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"
      }
    }), this.rgba && h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        width: HANDLE_SIZE,
        height: HANDLE_SIZE,
        borderRadius: RADIUS,
        left: `calc(${this.displayedSv[0]}% - ${RADIUS})`,
        bottom: `calc(${this.displayedSv[1]}% - ${RADIUS})`
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: this.handleColor,
        borderRadius: RADIUS,
        width: HANDLE_SIZE,
        height: HANDLE_SIZE
      }
    })));
  }
});
const colorPickerInjectionKey = createInjectionKey("n-color-picker");
function normalizeRgbUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 255));
  }
  return false;
}
function normalizeHueUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 360));
  }
  return false;
}
function normalizeSlvUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 100));
  }
  return false;
}
function normalizeHexaUnit(value) {
  const trimmedValue = value.trim();
  if (/^#[0-9a-fA-F]+$/.test(trimmedValue)) {
    return [4, 5, 7, 9].includes(trimmedValue.length);
  }
  return false;
}
function normalizeAlphaUnit(value) {
  if (/^\d{1,3}\.?\d*%$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value) / 100, 100));
  }
  return false;
}
const inputThemeOverrides = {
  paddingSmall: "0 4px"
};
const ColorInputUnit = defineComponent({
  name: "ColorInputUnit",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: null
    },
    showAlpha: Boolean,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const inputValueRef = ref("");
    const {
      themeRef
    } = inject(colorPickerInjectionKey, null);
    watchEffect(() => {
      inputValueRef.value = getInputString();
    });
    function getInputString() {
      const {
        value
      } = props;
      if (value === null) return "";
      const {
        label
      } = props;
      if (label === "HEX") {
        return value;
      }
      if (label === "A") {
        return `${Math.floor(value * 100)}%`;
      }
      return String(Math.floor(value));
    }
    function handleInputUpdateValue(value) {
      inputValueRef.value = value;
    }
    function handleInputChange(value) {
      let unit;
      let valid;
      switch (props.label) {
        case "HEX":
          valid = normalizeHexaUnit(value);
          if (valid) {
            props.onUpdateValue(value);
          }
          inputValueRef.value = getInputString();
          break;
        case "H":
          unit = normalizeHueUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "S":
        case "L":
        case "V":
          unit = normalizeSlvUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "A":
          unit = normalizeAlphaUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "R":
        case "G":
        case "B":
          unit = normalizeRgbUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
      }
    }
    return {
      mergedTheme: themeRef,
      inputValue: inputValueRef,
      handleInputChange,
      handleInputUpdateValue
    };
  },
  render() {
    const {
      mergedTheme
    } = this;
    return h(__unplugin_components_0$1, {
      size: "small",
      placeholder: this.label,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      builtinThemeOverrides: inputThemeOverrides,
      value: this.inputValue,
      onUpdateValue: this.handleInputUpdateValue,
      onChange: this.handleInputChange,
      // add more space for xxx% input
      style: this.label === "A" ? "flex-grow: 1.25;" : ""
    });
  }
});
const ColorInput = defineComponent({
  name: "ColorInput",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    modes: {
      type: Array,
      required: true
    },
    showAlpha: {
      type: Boolean,
      required: true
    },
    value: {
      // for hex to get percise value
      type: String,
      default: null
    },
    valueArr: {
      type: Array,
      default: null
    },
    onUpdateValue: {
      type: Function,
      required: true
    },
    onUpdateMode: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return {
      handleUnitUpdateValue(index, value) {
        const {
          showAlpha
        } = props;
        if (props.mode === "hex") {
          props.onUpdateValue((showAlpha ? toHexaString : toHexString)(value));
          return;
        }
        let nextValueArr;
        if (props.valueArr === null) {
          nextValueArr = [0, 0, 0, 0];
        } else {
          nextValueArr = Array.from(props.valueArr);
        }
        switch (props.mode) {
          case "hsv":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHsvaString : toHsvString)(nextValueArr));
            break;
          case "rgb":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toRgbaString : toRgbString)(nextValueArr));
            break;
          case "hsl":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHslaString : toHslString)(nextValueArr));
            break;
        }
      }
    };
  },
  render() {
    const {
      clsPrefix,
      modes
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-input`
    }, h("div", {
      class: `${clsPrefix}-color-picker-input__mode`,
      onClick: this.onUpdateMode,
      style: {
        cursor: modes.length === 1 ? "" : "pointer"
      }
    }, this.mode.toUpperCase() + (this.showAlpha ? "A" : "")), h(NInputGroup, null, {
      default: () => {
        const {
          mode,
          valueArr,
          showAlpha
        } = this;
        if (mode === "hex") {
          let hexValue = null;
          try {
            hexValue = valueArr === null ? null : (showAlpha ? toHexaString : toHexString)(valueArr);
          } catch (_a) {
          }
          return h(ColorInputUnit, {
            label: "HEX",
            showAlpha,
            value: hexValue,
            onUpdateValue: (unitValue) => {
              this.handleUnitUpdateValue(0, unitValue);
            }
          });
        }
        return (mode + (showAlpha ? "a" : "")).split("").map((v, i) => h(ColorInputUnit, {
          label: v.toUpperCase(),
          value: valueArr === null ? null : valueArr[i],
          onUpdateValue: (unitValue) => {
            this.handleUnitUpdateValue(i, unitValue);
          }
        }));
      }
    }));
  }
});
const ColorPickerTrigger = defineComponent({
  name: "ColorPickerTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    disabled: Boolean,
    onClick: Function
  },
  setup(props) {
    const {
      colorPickerSlots,
      renderLabelRef
    } = inject(colorPickerInjectionKey, null);
    return () => {
      const {
        hsla: hsla2,
        value,
        clsPrefix,
        onClick,
        disabled
      } = props;
      const renderLabel = colorPickerSlots.label || renderLabelRef.value;
      return h("div", {
        class: [`${clsPrefix}-color-picker-trigger`, disabled && `${clsPrefix}-color-picker-trigger--disabled`],
        onClick: disabled ? void 0 : onClick
      }, h("div", {
        class: `${clsPrefix}-color-picker-trigger__fill`
      }, h("div", {
        class: `${clsPrefix}-color-picker-checkboard`
      }), h("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: hsla2 ? toHslaString(hsla2) : ""
        }
      }), value && hsla2 ? h("div", {
        class: `${clsPrefix}-color-picker-trigger__value`,
        style: {
          color: hsla2[2] > 50 || hsla2[3] < 0.5 ? "black" : "white"
        }
      }, renderLabel ? renderLabel(value) : value) : null));
    };
  }
});
function normalizeColor(color, mode) {
  if (mode === "hsv") {
    const [h2, s, v, a] = hsva(color);
    return toRgbaString([...hsv2rgb(h2, s, v), a]);
  }
  return color;
}
function getHexFromName(color) {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) {
    return "#000000";
  }
  ctx.fillStyle = color;
  return ctx.fillStyle;
}
const ColorPickerSwatches = defineComponent({
  name: "ColorPickerSwatches",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    swatches: {
      type: Array,
      required: true
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const parsedSwatchesRef = computed(() => props.swatches.map((value) => {
      const mode = getModeFromValue(value);
      return {
        value,
        mode,
        legalValue: normalizeColor(value, mode)
      };
    }));
    function normalizeOutput(parsed) {
      const {
        mode: modeProp
      } = props;
      let {
        value,
        mode: swatchColorMode
      } = parsed;
      if (!swatchColorMode) {
        swatchColorMode = "hex";
        if (/^[a-zA-Z]+$/.test(value)) {
          value = getHexFromName(value);
        } else {
          warn("color-picker", `color ${value} in swatches is invalid.`);
          value = "#000000";
        }
      }
      if (swatchColorMode === modeProp) return value;
      return convertColor(value, modeProp, swatchColorMode);
    }
    function handleSwatchSelect(parsed) {
      props.onUpdateColor(normalizeOutput(parsed));
    }
    function handleSwatchKeyDown(e, parsed) {
      if (e.key === "Enter") handleSwatchSelect(parsed);
    }
    return {
      parsedSwatchesRef,
      handleSwatchSelect,
      handleSwatchKeyDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-swatches`
    }, this.parsedSwatchesRef.map((swatch) => h("div", {
      class: `${clsPrefix}-color-picker-swatch`,
      tabindex: 0,
      onClick: () => {
        this.handleSwatchSelect(swatch);
      },
      onKeydown: (e) => {
        this.handleSwatchKeyDown(e, swatch);
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-swatch__fill`,
      style: {
        background: swatch.legalValue
      }
    }))));
  }
});
const ColorPreview = defineComponent({
  name: "ColorPreview",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null,
      validator: (value) => {
        const mode = getModeFromValue(value);
        return Boolean(!value || mode && mode !== "hsv");
      }
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    function handleChange(e) {
      var _a;
      const value = e.target.value;
      (_a = props.onUpdateColor) === null || _a === void 0 ? void 0 : _a.call(props, convertColor(value.toUpperCase(), props.mode, "hex"));
      e.stopPropagation();
    }
    return {
      handleChange
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-preview__preview`
    }, h("span", {
      class: `${clsPrefix}-color-picker-preview__fill`,
      style: {
        background: this.color || "#000000"
      }
    }), h("input", {
      class: `${clsPrefix}-color-picker-preview__input`,
      type: "color",
      value: this.color,
      onChange: this.handleChange
    }));
  }
});
const style = c([cB("color-picker", `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), cB("color-picker-panel", `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition(), cB("input", `
 text-align: center;
 `)]), cB("color-picker-checkboard", `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [c("&::after", `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("color-picker-slider", `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [cE("image", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), c("&::after", `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), cB("color-picker-handle", `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [cE("fill", `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), cB("color-picker-pallete", `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [cE("layer", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM("shadowed", `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), cB("color-picker-preview", `
 display: flex;
 `, [cE("sliders", `
 flex: 1 0 auto;
 `), cE("preview", `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), cE("fill", `
 display: block;
 width: 30px;
 height: 30px;
 `), cE("input", `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), cB("color-picker-input", `
 display: flex;
 align-items: center;
 `, [cB("input", `
 flex-grow: 1;
 flex-basis: 0;
 `), cE("mode", `
 width: 72px;
 text-align: center;
 `)]), cB("color-picker-control", `
 padding: 12px;
 `), cB("color-picker-action", `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [cB("button", "margin-left: 8px;")]), cB("color-picker-trigger", `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [cE("value", `
 white-space: nowrap;
 position: relative;
 `), cE("fill", `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), cM("disabled", "cursor: not-allowed"), cB("color-picker-checkboard", `
 border-radius: var(--n-border-radius);
 `, [c("&::after", `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), cB("color-picker-swatches", `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [cB("color-picker-swatch", `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [cE("fill", `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), c("&:focus", `
 outline: none;
 `, [cE("fill", [c("&::after", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);
const colorPickerProps = Object.assign(Object.assign({}, useTheme.props), {
  value: String,
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  defaultValue: String,
  modes: {
    type: Array,
    // no hsva by default since browser doesn't support it
    default: () => ["rgb", "hex", "hsl"]
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  to: useAdjustedTo.propTo,
  showAlpha: {
    type: Boolean,
    default: true
  },
  showPreview: Boolean,
  swatches: Array,
  disabled: {
    type: Boolean,
    default: void 0
  },
  actions: {
    type: Array,
    default: null
  },
  internalActions: Array,
  size: String,
  renderLabel: Function,
  onComplete: Function,
  onConfirm: Function,
  onClear: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const __unplugin_components_0 = defineComponent({
  name: "ColorPicker",
  props: colorPickerProps,
  setup(props, {
    slots
  }) {
    const selfRef = ref(null);
    let upcomingValue = null;
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const {
      localeRef
    } = useLocale("global");
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("ColorPicker", "-color-picker", style, colorPickerLight, props, mergedClsPrefixRef);
    provide(colorPickerInjectionKey, {
      themeRef,
      renderLabelRef: toRef(props, "renderLabel"),
      colorPickerSlots: slots
    });
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    const {
      defaultValue
    } = props;
    const uncontrolledValueRef = ref(defaultValue === void 0 ? deriveDefaultValue(props.modes, props.showAlpha) : defaultValue);
    const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
    const undoStackRef = ref([mergedValueRef.value]);
    const valueIndexRef = ref(0);
    const valueModeRef = computed(() => getModeFromValue(mergedValueRef.value));
    const {
      modes
    } = props;
    const displayedModeRef = ref(getModeFromValue(mergedValueRef.value) || modes[0] || "rgb");
    function handleUpdateDisplayedMode() {
      const {
        modes: modes2
      } = props;
      const {
        value: displayedMode
      } = displayedModeRef;
      const currentModeIndex = modes2.findIndex((mode) => mode === displayedMode);
      if (~currentModeIndex) {
        displayedModeRef.value = modes2[(currentModeIndex + 1) % modes2.length];
      } else {
        displayedModeRef.value = "rgb";
      }
    }
    let _h, s, l, v, r, g, b, a;
    const hsvaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "hsv":
          return hsva(mergedValue);
        case "hsl":
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2hsv(_h, s, l), a];
        case "rgb":
        case "hex":
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsv(r, g, b), a];
      }
    });
    const rgbaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "rgb":
        case "hex":
          return rgba(mergedValue);
        case "hsv":
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2rgb(_h, s, v), a];
        case "hsl":
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2rgb(_h, s, l), a];
      }
    });
    const hslaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "hsl":
          return hsla(mergedValue);
        case "hsv":
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2hsl(_h, s, v), a];
        case "rgb":
        case "hex":
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsl(r, g, b), a];
      }
    });
    const mergedValueArrRef = computed(() => {
      switch (displayedModeRef.value) {
        case "rgb":
        case "hex":
          return rgbaRef.value;
        case "hsv":
          return hsvaRef.value;
        case "hsl":
          return hslaRef.value;
      }
    });
    const displayedHueRef = ref(0);
    const displayedAlphaRef = ref(1);
    const displayedSvRef = ref([0, 0]);
    function handleUpdateSv(s2, v2) {
      const {
        value: hsvaArr
      } = hsvaRef;
      const hue = displayedHueRef.value;
      const alpha = hsvaArr ? hsvaArr[3] : 1;
      displayedSvRef.value = [s2, v2];
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s2, v2, alpha]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s2, v2), alpha]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s2, v2), alpha]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s2, v2), alpha]), "cursor");
          break;
      }
    }
    function handleUpdateHue(hue) {
      displayedHueRef.value = hue;
      const {
        value: hsvaArr
      } = hsvaRef;
      if (!hsvaArr) {
        return;
      }
      const [, s2, v2, a2] = hsvaArr;
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s2, v2, a2]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s2, v2), a2]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s2, v2), a2]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s2, v2), a2]), "cursor");
          break;
      }
    }
    function handleUpdateAlpha(alpha) {
      switch (displayedModeRef.value) {
        case "hsv":
          [_h, s, v] = hsvaRef.value;
          doUpdateValue(toHsvaString([_h, s, v, alpha]), "cursor");
          break;
        case "rgb":
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toRgbaString([r, g, b, alpha]), "cursor");
          break;
        case "hex":
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toHexaString([r, g, b, alpha]), "cursor");
          break;
        case "hsl":
          [_h, s, l] = hslaRef.value;
          doUpdateValue(toHslaString([_h, s, l, alpha]), "cursor");
          break;
      }
      displayedAlphaRef.value = alpha;
    }
    function doUpdateValue(value, updateSource) {
      if (updateSource === "cursor") {
        upcomingValue = value;
      } else {
        upcomingValue = null;
      }
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
      uncontrolledValueRef.value = value;
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value, "input");
      void nextTick(handleComplete);
    }
    function handleComplete(pushStack = true) {
      const {
        value
      } = mergedValueRef;
      if (value) {
        const {
          nTriggerFormChange,
          nTriggerFormInput
        } = formItem;
        const {
          onComplete
        } = props;
        if (onComplete) {
          onComplete(value);
        }
        const {
          value: undoStack
        } = undoStackRef;
        const {
          value: valueIndex
        } = valueIndexRef;
        if (pushStack) {
          undoStack.splice(valueIndex + 1, undoStack.length, value);
          valueIndexRef.value = valueIndex + 1;
        }
        nTriggerFormChange();
        nTriggerFormInput();
      }
    }
    function undo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex - 1 < 0) return;
      doUpdateValue(undoStackRef.value[valueIndex - 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex - 1;
    }
    function redo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length) return;
      doUpdateValue(undoStackRef.value[valueIndex + 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex + 1;
    }
    function handleClear() {
      doUpdateValue(null, "input");
      const {
        onClear
      } = props;
      if (onClear) {
        onClear();
      }
      doUpdateShow(false);
    }
    function handleConfirm() {
      const {
        value
      } = mergedValueRef;
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        onConfirm(value);
      }
      doUpdateShow(false);
    }
    const undoableRef = computed(() => valueIndexRef.value >= 1);
    const redoableRef = computed(() => {
      const {
        value: undoStack
      } = undoStackRef;
      return undoStack.length > 1 && valueIndexRef.value < undoStack.length - 1;
    });
    watch(mergedShowRef, (value) => {
      if (!value) {
        undoStackRef.value = [mergedValueRef.value];
        valueIndexRef.value = 0;
      }
    });
    watchEffect(() => {
      if (upcomingValue && upcomingValue === mergedValueRef.value) ;
      else {
        const {
          value
        } = hsvaRef;
        if (value) {
          displayedHueRef.value = value[0];
          displayedAlphaRef.value = value[3];
          displayedSvRef.value = [value[1], value[2]];
        }
      }
      upcomingValue = null;
    });
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          textColor,
          color,
          panelFontSize,
          boxShadow,
          border,
          borderRadius,
          dividerColor,
          [createKey("height", mergedSize)]: height,
          [createKey("fontSize", mergedSize)]: fontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-panel-font-size": panelFontSize,
        "--n-font-size": fontSize,
        "--n-box-shadow": boxShadow,
        "--n-border": border,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-divider-color": dividerColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("color-picker", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    function renderPanel() {
      var _a;
      const {
        value: rgba2
      } = rgbaRef;
      const {
        value: displayedHue
      } = displayedHueRef;
      const {
        internalActions,
        modes: modes2,
        actions
      } = props;
      const {
        value: mergedTheme
      } = themeRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("div", {
        class: [`${mergedClsPrefix}-color-picker-panel`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value],
        onDragstart: (e) => {
          e.preventDefault();
        },
        style: inlineThemeDisabled ? void 0 : cssVarsRef.value
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-control`
      }, h(Pallete, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        displayedHue,
        displayedSv: displayedSvRef.value,
        onUpdateSV: handleUpdateSv,
        onComplete: handleComplete
      }), h("div", {
        class: `${mergedClsPrefix}-color-picker-preview`
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-preview__sliders`
      }, h(HueSlider, {
        clsPrefix: mergedClsPrefix,
        hue: displayedHue,
        onUpdateHue: handleUpdateHue,
        onComplete: handleComplete
      }), props.showAlpha ? h(AlphaSlider, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        alpha: displayedAlphaRef.value,
        onUpdateAlpha: handleUpdateAlpha,
        onComplete: handleComplete
      }) : null), props.showPreview ? h(ColorPreview, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        color: rgbaRef.value && toHexString(rgbaRef.value),
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      }) : null), h(ColorInput, {
        clsPrefix: mergedClsPrefix,
        showAlpha: props.showAlpha,
        mode: displayedModeRef.value,
        modes: modes2,
        onUpdateMode: handleUpdateDisplayedMode,
        value: mergedValueRef.value,
        valueArr: mergedValueArrRef.value,
        onUpdateValue: handleInputUpdateValue
      }), ((_a = props.swatches) === null || _a === void 0 ? void 0 : _a.length) && h(ColorPickerSwatches, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        swatches: props.swatches,
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      })), (actions === null || actions === void 0 ? void 0 : actions.length) ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, actions.includes("confirm") && h(Button, {
        size: "small",
        onClick: handleConfirm,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.confirm
      }), actions.includes("clear") && h(Button, {
        size: "small",
        onClick: handleClear,
        disabled: !mergedValueRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.clear
      })) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, {
        default: slots.action
      }) : internalActions ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, internalActions.includes("undo") && h(Button, {
        size: "small",
        onClick: undo,
        disabled: !undoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.undo
      }), internalActions.includes("redo") && h(Button, {
        size: "small",
        onClick: redo,
        disabled: !redoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.redo
      })) : null);
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      selfRef,
      hsla: hslaRef,
      rgba: rgbaRef,
      mergedShow: mergedShowRef,
      mergedDisabled: mergedDisabledRef,
      isMounted: isMounted(),
      adjustedTo: useAdjustedTo(props),
      mergedValue: mergedValueRef,
      handleTriggerClick() {
        doUpdateShow(true);
      },
      handleClickOutside(e) {
        var _a;
        if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) {
          return;
        }
        doUpdateShow(false);
      },
      renderPanel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [this.themeClass, `${mergedClsPrefix}-color-picker`],
      ref: "selfRef",
      style: this.cssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(ColorPickerTrigger, {
          clsPrefix: mergedClsPrefix,
          value: this.mergedValue,
          hsla: this.hsla,
          disabled: this.mergedDisabled,
          onClick: this.handleTriggerClick
        }, {
          label: $slots.label
        })
      }), h(VFollower, {
        placement: this.placement,
        show: this.mergedShow,
        containerClass: this.namespace,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        to: this.adjustedTo
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? withDirectives(this.renderPanel(), [[clickoutside, this.handleClickOutside, void 0, {
            capture: true
          }]]) : null
        })
      })]
    }));
  }
});
const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M18 9s-4.419 6-6 6s-6-6-6-6",
      color: "currentColor"
    }, null, -1)
  ]));
}
const __unplugin_components_1$1 = markRaw({ name: "hugeicons-arrow-down01", render: render$2 });
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      color: "currentColor"
    }, [
      createBaseVNode("path", { d: "M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" }),
      createBaseVNode("path", { d: "M8 13.75s1.6.912 2.4 2.25c0 0 2.4-5.25 5.6-7" })
    ], -1)
  ]));
}
const __unplugin_components_2 = markRaw({ name: "hugeicons-checkmark-square01", render: render$1 });
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M11.1 3.002c-3.648.007-5.56.096-6.78 1.317C3.002 5.637 3.002 7.758 3.002 12s0 6.363 1.318 7.681s3.438 1.318 7.68 1.318s6.363 0 7.681-1.318c1.221-1.22 1.31-3.132 1.317-6.78m-.518-9.384l-5.548 5.534m5.549-5.534c-.494-.494-3.822-.448-4.525-.438m4.525.438c.494.495.448 3.826.438 4.53",
      color: "currentColor"
    }, null, -1)
  ]));
}
const __unplugin_components_1 = markRaw({ name: "hugeicons-link-square01", render });
const _hoisted_1$1 = { class: "setting-item-outer" };
const _hoisted_2$1 = { class: "setting-item" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "t1 text1" };
const _hoisted_5 = { class: "t2 text2" };
const _hoisted_6 = { class: "action" };
const _sfc_main$1 = {
  __name: "settingItem",
  props: ["actionOnClick", "needInput", "defaultValue"],
  setup(__props) {
    let props = __props;
    let inputValue = ref(props.defaultValue);
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0$1;
      const _component_i_hugeicons_link_square_01 = __unplugin_components_1;
      const _component_i_hugeicons_checkmark_square_01 = __unplugin_components_2;
      const _component_n_icon = NIcon;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_n_card, { class: "setting-item-card" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  renderSlot(_ctx.$slots, "t1", {}, void 0, true)
                ]),
                createBaseVNode("div", _hoisted_5, [
                  renderSlot(_ctx.$slots, "t2", {}, void 0, true)
                ])
              ]),
              createBaseVNode("div", _hoisted_6, [
                renderSlot(_ctx.$slots, "action", {}, () => [
                  unref(props).needInput ? (openBlock(), createBlock(_component_n_input, {
                    key: 0,
                    value: unref(inputValue),
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(inputValue) ? inputValue.value = $event : inputValue = $event),
                    placeholder: "请输入"
                  }, null, 8, ["value"])) : createCommentVNode("", true),
                  createVNode(_component_n_button, {
                    class: "button",
                    secondary: "",
                    circle: "",
                    type: "primary"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_n_icon, null, {
                        default: withCtx(() => [
                          !unref(props).needInput ? (openBlock(), createBlock(_component_i_hugeicons_link_square_01, {
                            key: 0,
                            onClick: unref(props).actionOnClick
                          }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_i_hugeicons_checkmark_square_01, {
                            key: 1,
                            onClick: _cache[1] || (_cache[1] = () => unref(props).actionOnClick(unref(inputValue)))
                          }))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], true)
              ])
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
};
const settingItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-443755e3"]]);
const buildInfo = { version: "1.1.3", buildNumber: "ad4d8e1" };
const _hoisted_1 = { class: "setting" };
const _hoisted_2 = { class: "w-128px" };
const _sfc_main = {
  __name: "setting",
  setup(__props) {
    let settingStore = useSettingStore();
    let userStore = useUserStore();
    let themeStore = useThemeStore();
    let lyricFontSize = computed(() => {
      return parseFloat(settingStore.lyricFontSize);
    });
    let primaryColor = ref("");
    let defaultSpecialApi = ref(localStorage.getItem("specialApi") ?? "");
    let levelData = [
      { key: "standard", label: "标准" },
      { key: "higher", label: "较高" },
      { key: "exhigh", label: "极高" },
      { key: "lossless", label: "无损" },
      { key: "hires", label: "Hi-Res" },
      { key: "jyeffect", label: "高清环绕声" },
      { key: "sky", label: "沉浸环绕声" },
      { key: "jymaster", label: "超清母带" }
    ];
    onMounted(() => {
      primaryColor.value = themeStore.mainColor;
      watch(primaryColor, (value) => {
        themeStore.setMainColor(value);
      });
    });
    function updateSpecialApi(value) {
      localStorage.setItem("specialApi", value);
      success("已设置~");
    }
    function logout() {
      userStore.logout();
      success("退出登录~");
    }
    function loginByCookie(v) {
      success("开始尝试更新用户信息了喔");
      userStore.updateByCookie(v);
    }
    function update() {
      success("开始更新，成功后会有提示");
      userStore.updateByCookie();
    }
    async function copyCk() {
      let ck = userStore.cookie;
      let flag = false;
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(ck);
          flag = true;
          success("复制成功");
        } catch {
        }
      }
      if (!flag) {
        error(ck, "复制失败 请手动复制");
      }
    }
    return (_ctx, _cache) => {
      const _component_n_color_picker = __unplugin_components_0;
      const _component_i_hugeicons_arrow_down_01 = __unplugin_components_1$1;
      const _component_n_icon = NIcon;
      const _component_n_button = Button;
      const _component_n_dropdown = __unplugin_components_4;
      const _component_n_slider = __unplugin_components_5$1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          withDirectives(createVNode(settingItem, {
            needInput: true,
            actionOnClick: loginByCookie
          }, {
            t1: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("输入cookie来登录")
            ])),
            t2: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("奇奇怪怪的登录方式")
            ])),
            _: 1
          }, 512), [
            [vShow, !unref(userStore).isLogin]
          ]),
          createVNode(settingItem, {
            needInput: true,
            actionOnClick: updateSpecialApi,
            defaultValue: unref(defaultSpecialApi)
          }, {
            t1: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("设置专用api")
            ])),
            t2: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("用于获取歌曲的url")
            ])),
            _: 1
          }, 8, ["defaultValue"]),
          withDirectives(createVNode(settingItem, { actionOnClick: update }, {
            t1: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("马上更新用户信息！")
            ])),
            t2: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("每三分钟自动更新")
            ])),
            _: 1
          }, 512), [
            [vShow, unref(userStore).isLogin]
          ]),
          withDirectives(createVNode(settingItem, { actionOnClick: copyCk }, {
            t1: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("复制当前的cookie")
            ])),
            t2: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("复制失败会显示ck 此时可手动复制")
            ])),
            _: 1
          }, 512), [
            [vShow, unref(userStore).isLogin]
          ]),
          createVNode(settingItem, null, {
            t1: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("主题色")
            ])),
            t2: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("默认值为#DEB237")
            ])),
            action: withCtx(() => [
              createVNode(_component_n_color_picker, {
                class: "color-picker",
                value: unref(primaryColor),
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(primaryColor) ? primaryColor.value = $event : primaryColor = $event),
                "show-alpha": false,
                modes: ["hex"]
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(settingItem, null, {
            t1: withCtx(() => _cache[12] || (_cache[12] = [
              createTextVNode("设置默认音质")
            ])),
            t2: withCtx(() => _cache[13] || (_cache[13] = [
              createTextVNode("期望的最高音质 切歌时生效")
            ])),
            action: withCtx(() => [
              createVNode(_component_n_dropdown, {
                options: unref(levelData),
                onSelect: unref(settingStore).setMusicLevel,
                trigger: "click"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_button, {
                    type: "primary",
                    secondary: "",
                    "icon-placement": "right"
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_n_icon, null, {
                        default: withCtx(() => [
                          createVNode(_component_i_hugeicons_arrow_down_01)
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(levelData).find((obj) => obj.key == unref(settingStore).musicLevel).label) + " ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["options", "onSelect"])
            ]),
            _: 1
          }),
          createVNode(settingItem, null, {
            t1: withCtx(() => _cache[14] || (_cache[14] = [
              createTextVNode("设置歌词字体大小")
            ])),
            t2: withCtx(() => _cache[15] || (_cache[15] = [
              createTextVNode("默认是1.8rem")
            ])),
            action: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_n_slider, {
                  value: unref(lyricFontSize),
                  min: 1,
                  max: 4,
                  step: 0.1,
                  "format-tooltip": (value) => `${value}rem`,
                  "onUpdate:value": _cache[1] || (_cache[1] = (value) => unref(settingStore).setLyricFontSize(value + "rem"))
                }, null, 8, ["value", "format-tooltip"])
              ])
            ]),
            _: 1
          }),
          createVNode(settingItem, null, {
            t1: withCtx(() => _cache[16] || (_cache[16] = [
              createTextVNode("退出登录")
            ])),
            t2: withCtx(() => _cache[17] || (_cache[17] = [
              createTextVNode("拜拜~")
            ])),
            action: withCtx(() => [
              createVNode(_component_n_button, {
                class: "button",
                type: "error",
                secondary: "",
                onClick: logout
              }, {
                default: withCtx(() => _cache[18] || (_cache[18] = [
                  createTextVNode("退出登录")
                ])),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(settingItem, null, {
            t1: withCtx(() => _cache[19] || (_cache[19] = [
              createTextVNode("版本信息")
            ])),
            t2: withCtx(() => [
              createTextVNode("版本号：" + toDisplayString(unref(buildInfo).version) + "    构建号：" + toDisplayString(unref(buildInfo).buildNumber), 1)
            ]),
            action: withCtx(() => _cache[20] || (_cache[20] = [
              createBaseVNode("div", null, null, -1)
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
};
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-497459f6"]]);
export {
  setting as default
};
