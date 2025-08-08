import { ao as derived, ah as c, ag as cB, al as cM, d as defineComponent, h, ai as Transition, ap as useConfig, aq as useTheme, c as computed, ay as createKey, ar as useThemeClass, r as ref, ad as watchEffect } from "./font-DTV79hNu.js";
import { al as fadeInTransition, am as NBaseLoading, an as pxfy, e as useCompitable } from "./index-BvxUpEqP.js";
function self(vars) {
  const {
    opacityDisabled,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    primaryColor,
    fontSize
  } = vars;
  return {
    fontSize,
    textColor: primaryColor,
    sizeTiny: heightTiny,
    sizeSmall: heightSmall,
    sizeMedium: heightMedium,
    sizeLarge: heightLarge,
    sizeHuge: heightHuge,
    color: primaryColor,
    opacitySpinning: opacityDisabled
  };
}
const spinLight = {
  common: derived,
  self
};
const style = c([c("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), cB("spin-container", `
 position: relative;
 `, [cB("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]), cB("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), cB("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), cB("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), cB("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
};
const spinProps = Object.assign(Object.assign({}, useTheme.props), {
  contentClass: String,
  contentStyle: [Object, String],
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: "medium"
  },
  show: {
    type: Boolean,
    default: true
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true;
    },
    default: void 0
  },
  delay: Number
});
const __unplugin_components_0 = defineComponent({
  name: "Spin",
  props: spinProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Spin", "-spin", style, spinLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size: spinSize
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: self2
      } = themeRef.value;
      const {
        opacitySpinning,
        color,
        textColor
      } = self2;
      const size = typeof spinSize === "number" ? pxfy(spinSize) : self2[createKey("size", spinSize)];
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-opacity-spinning": opacitySpinning,
        "--n-size": size,
        "--n-color": color,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("spin", computed(() => {
      const {
        size
      } = props;
      return typeof size === "number" ? String(size) : size[0];
    }), cssVarsRef, props) : void 0;
    const compitableShow = useCompitable(props, ["spinning", "show"]);
    const activeRef = ref(false);
    watchEffect((onCleanup) => {
      let timerId;
      if (compitableShow.value) {
        const {
          delay
        } = props;
        if (delay) {
          timerId = window.setTimeout(() => {
            activeRef.value = true;
          }, delay);
          onCleanup(() => {
            clearTimeout(timerId);
          });
          return;
        }
      }
      activeRef.value = compitableShow.value;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedStrokeWidth: computed(() => {
        const {
          strokeWidth
        } = props;
        if (strokeWidth !== void 0) return strokeWidth;
        const {
          size
        } = props;
        return STROKE_WIDTH[typeof size === "number" ? "medium" : size];
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      $slots,
      mergedClsPrefix,
      description
    } = this;
    const rotate = $slots.icon && this.rotate;
    const descriptionNode = (description || $slots.description) && h("div", {
      class: `${mergedClsPrefix}-spin-description`
    }, description || ((_a = $slots.description) === null || _a === void 0 ? void 0 : _a.call($slots)));
    const icon = $slots.icon ? h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h("div", {
      class: [`${mergedClsPrefix}-spin`, rotate && `${mergedClsPrefix}-spin--rotate`],
      style: $slots.default ? "" : this.cssVars
    }, $slots.icon()), descriptionNode) : h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h(NBaseLoading, {
      clsPrefix: mergedClsPrefix,
      style: $slots.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${mergedClsPrefix}-spin`
    }), descriptionNode);
    (_b = this.onRender) === null || _b === void 0 ? void 0 : _b.call(this);
    return $slots.default ? h("div", {
      class: [`${mergedClsPrefix}-spin-container`, this.themeClass],
      style: this.cssVars
    }, h("div", {
      class: [`${mergedClsPrefix}-spin-content`, this.active && `${mergedClsPrefix}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, $slots), h(Transition, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? icon : null
    })) : icon;
  }
});
export {
  __unplugin_components_0 as _
};
