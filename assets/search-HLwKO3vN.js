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
import { c, a as cssrAnchorMetaName, i as isSymbol, r as render, N as NBaseIcon, b as NBaseClose, o as omit, f as flatten, d as resolveWrappedSlot, V as VResizeObserver, e as useCompitable, h as useMergedState, j as onFontsReady, k as getMargin, l as depx, m as call, n as usePlayStore, p as cloudsearch, q as error } from "./index-DdQrTcLH.js";
import { m as musicList } from "./musicList-BUC9QGkE.js";
import { i as itemCardList } from "./itemCardList-BHPjXbiq.js";
import { d as defineComponent, h, r as ref, K as useSsrAdapter, a6 as isObject, V as root, ao as derived, C as createInjectionKey, i as inject, aJ as throwError, M as mergeProps, G as Fragment, c as computed, ag as cB, al as cM, ah as c$1, ak as cE, am as cNotM, ap as useConfig, aq as useTheme, w as watch, z as onMounted, p as provide, q as toRef, ad as watchEffect, ay as createKey, ar as useThemeClass, I as withDirectives, an as TransitionGroup, av as cloneVNode, n as nextTick, at as vShow, aM as createElementBlock, aO as openBlock, aN as createBaseVNode, aP as createVNode, aV as toDisplayString, u as unref, aR as withCtx, f as isRef, aS as createBlock } from "./font-B8fvUeLJ.js";
import { _ as __unplugin_components_0 } from "./Spin-uDDAdb1V.js";
import "./Ellipsis-D0HcZNIS.js";
const styles = c(".v-x-scroll", {
  overflow: "auto",
  scrollbarWidth: "none"
}, [
  c("&::-webkit-scrollbar", {
    width: 0,
    height: 0
  })
]);
const VXScroll = defineComponent({
  name: "XScroll",
  props: {
    disabled: Boolean,
    onScroll: Function
  },
  setup() {
    const selfRef = ref(null);
    function handleWheel(e) {
      const preventYWheel = e.currentTarget.offsetWidth < e.currentTarget.scrollWidth;
      if (!preventYWheel || e.deltaY === 0)
        return;
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/x-scroll",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    const exposedMethods = {
      scrollTo(...args) {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(...args);
      }
    };
    return Object.assign({
      selfRef,
      handleWheel
    }, exposedMethods);
  },
  render() {
    return h("div", {
      ref: "selfRef",
      onScroll: this.onScroll,
      onWheel: this.disabled ? void 0 : this.handleWheel,
      class: "v-x-scroll"
    }, this.$slots);
  }
});
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const AddIcon = defineComponent({
  name: "Add",
  render() {
    return h("svg", {
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M256 112V400M400 256H112",
      stroke: "currentColor",
      "stroke-width": "32",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }));
  }
});
const sizeVariables = {
  tabFontSizeSmall: "14px",
  tabFontSizeMedium: "14px",
  tabFontSizeLarge: "16px",
  tabGapSmallLine: "36px",
  tabGapMediumLine: "36px",
  tabGapLargeLine: "36px",
  tabGapSmallLineVertical: "8px",
  tabGapMediumLineVertical: "8px",
  tabGapLargeLineVertical: "8px",
  tabPaddingSmallLine: "6px 0",
  tabPaddingMediumLine: "10px 0",
  tabPaddingLargeLine: "14px 0",
  tabPaddingVerticalSmallLine: "6px 12px",
  tabPaddingVerticalMediumLine: "8px 16px",
  tabPaddingVerticalLargeLine: "10px 20px",
  tabGapSmallBar: "36px",
  tabGapMediumBar: "36px",
  tabGapLargeBar: "36px",
  tabGapSmallBarVertical: "8px",
  tabGapMediumBarVertical: "8px",
  tabGapLargeBarVertical: "8px",
  tabPaddingSmallBar: "4px 0",
  tabPaddingMediumBar: "6px 0",
  tabPaddingLargeBar: "10px 0",
  tabPaddingVerticalSmallBar: "6px 12px",
  tabPaddingVerticalMediumBar: "8px 16px",
  tabPaddingVerticalLargeBar: "10px 20px",
  tabGapSmallCard: "4px",
  tabGapMediumCard: "4px",
  tabGapLargeCard: "4px",
  tabGapSmallCardVertical: "4px",
  tabGapMediumCardVertical: "4px",
  tabGapLargeCardVertical: "4px",
  tabPaddingSmallCard: "8px 16px",
  tabPaddingMediumCard: "10px 20px",
  tabPaddingLargeCard: "12px 24px",
  tabPaddingSmallSegment: "4px 0",
  tabPaddingMediumSegment: "6px 0",
  tabPaddingLargeSegment: "8px 0",
  tabPaddingVerticalLargeSegment: "0 8px",
  tabPaddingVerticalSmallCard: "8px 12px",
  tabPaddingVerticalMediumCard: "10px 16px",
  tabPaddingVerticalLargeCard: "12px 20px",
  tabPaddingVerticalSmallSegment: "0 4px",
  tabPaddingVerticalMediumSegment: "0 6px",
  tabGapSmallSegment: "0",
  tabGapMediumSegment: "0",
  tabGapLargeSegment: "0",
  tabGapSmallSegmentVertical: "0",
  tabGapMediumSegmentVertical: "0",
  tabGapLargeSegmentVertical: "0",
  panePaddingSmall: "8px 0 0 0",
  panePaddingMedium: "12px 0 0 0",
  panePaddingLarge: "16px 0 0 0",
  closeSize: "18px",
  closeIconSize: "14px"
};
function self(vars) {
  const {
    textColor2,
    primaryColor,
    textColorDisabled,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    tabColor,
    baseColor,
    dividerColor,
    fontWeight,
    textColor1,
    borderRadius,
    fontSize,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables), {
    colorSegment: tabColor,
    tabFontSizeCard: fontSize,
    tabTextColorLine: textColor1,
    tabTextColorActiveLine: primaryColor,
    tabTextColorHoverLine: primaryColor,
    tabTextColorDisabledLine: textColorDisabled,
    tabTextColorSegment: textColor1,
    tabTextColorActiveSegment: textColor2,
    tabTextColorHoverSegment: textColor2,
    tabTextColorDisabledSegment: textColorDisabled,
    tabTextColorBar: textColor1,
    tabTextColorActiveBar: primaryColor,
    tabTextColorHoverBar: primaryColor,
    tabTextColorDisabledBar: textColorDisabled,
    tabTextColorCard: textColor1,
    tabTextColorHoverCard: textColor1,
    tabTextColorActiveCard: primaryColor,
    tabTextColorDisabledCard: textColorDisabled,
    barColor: primaryColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    tabColor,
    tabColorSegment: baseColor,
    tabBorderColor: dividerColor,
    tabFontWeightActive: fontWeight,
    tabFontWeight: fontWeight,
    tabBorderRadius: borderRadius,
    paneTextColor: textColor2,
    fontWeightStrong
  });
}
const tabsLight = {
  common: derived,
  self
};
const tabsInjectionKey = createInjectionKey("n-tabs");
const tabPaneProps = {
  tab: [String, Number, Object, Function],
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String,
    default: "if"
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  tabProps: Object,
  /** @deprecated */
  label: [String, Number, Object, Function]
};
const __unplugin_components_1 = defineComponent({
  __TAB_PANE__: true,
  name: "TabPane",
  alias: ["TabPanel"],
  props: tabPaneProps,
  slots: Object,
  setup(props) {
    const NTab = inject(tabsInjectionKey, null);
    if (!NTab) {
      throwError("tab-pane", "`n-tab-pane` must be placed inside `n-tabs`.");
    }
    return {
      style: NTab.paneStyleRef,
      class: NTab.paneClassRef,
      mergedClsPrefix: NTab.mergedClsPrefixRef
    };
  },
  render() {
    return h("div", {
      class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
      style: this.style
    }, this.$slots);
  }
});
const tabProps = Object.assign({
  internalLeftPadded: Boolean,
  internalAddable: Boolean,
  internalCreatedByPane: Boolean
}, omit(tabPaneProps, ["displayDirective"]));
const Tab = defineComponent({
  __TAB__: true,
  inheritAttrs: false,
  name: "Tab",
  props: tabProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      addTabStyleRef,
      tabClassRef,
      addTabClassRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      triggerRef,
      handleAdd,
      activateTab,
      handleClose
    } = inject(tabsInjectionKey);
    return {
      trigger: triggerRef,
      mergedClosable: computed(() => {
        if (props.internalAddable) return false;
        const {
          closable
        } = props;
        if (closable === void 0) return closableRef.value;
        return closable;
      }),
      style: tabStyleRef,
      addStyle: addTabStyleRef,
      tabClass: tabClassRef,
      addTabClass: addTabClassRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose(e) {
        e.stopPropagation();
        if (props.disabled) return;
        handleClose(props.name);
      },
      activateTab() {
        if (props.disabled) return;
        if (props.internalAddable) {
          handleAdd();
          return;
        }
        const {
          name: nameProp
        } = props;
        const id = ++tabChangeIdRef.id;
        if (nameProp !== valueRef.value) {
          const {
            value: onBeforeLeave
          } = onBeforeLeaveRef;
          if (!onBeforeLeave) {
            activateTab(nameProp);
          } else {
            void Promise.resolve(onBeforeLeave(props.name, valueRef.value)).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                activateTab(nameProp);
              }
            });
          }
        }
      }
    };
  },
  render() {
    const {
      internalAddable,
      clsPrefix,
      name,
      disabled,
      label,
      tab,
      value,
      mergedClosable,
      trigger,
      $slots: {
        default: defaultSlot
      }
    } = this;
    const mergedTab = label !== null && label !== void 0 ? label : tab;
    return h("div", {
      class: `${clsPrefix}-tabs-tab-wrapper`
    }, this.internalLeftPadded ? h("div", {
      class: `${clsPrefix}-tabs-tab-pad`
    }) : null, h("div", Object.assign({
      key: name,
      "data-name": name,
      "data-disabled": disabled ? true : void 0
    }, mergeProps({
      class: [`${clsPrefix}-tabs-tab`, value === name && `${clsPrefix}-tabs-tab--active`, disabled && `${clsPrefix}-tabs-tab--disabled`, mergedClosable && `${clsPrefix}-tabs-tab--closable`, internalAddable && `${clsPrefix}-tabs-tab--addable`, internalAddable ? this.addTabClass : this.tabClass],
      onClick: trigger === "click" ? this.activateTab : void 0,
      onMouseenter: trigger === "hover" ? this.activateTab : void 0,
      style: internalAddable ? this.addStyle : this.style
    }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), h("span", {
      class: `${clsPrefix}-tabs-tab__label`
    }, internalAddable ? h(Fragment, null, h("div", {
      class: `${clsPrefix}-tabs-tab__height-placeholder`
    }, " "), h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(AddIcon, null)
    })) : defaultSlot ? defaultSlot() : typeof mergedTab === "object" ? mergedTab : render(mergedTab !== null && mergedTab !== void 0 ? mergedTab : name)), mergedClosable && this.type === "card" ? h(NBaseClose, {
      clsPrefix,
      class: `${clsPrefix}-tabs-tab__close`,
      onClick: this.handleClose,
      disabled
    }) : null));
  }
});
const style = cB("tabs", `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [cM("segment-type", [cB("tabs-rail", [c$1("&.transition-disabled", [cB("tabs-capsule", `
 transition: none;
 `)])])]), cM("top", [cB("tab-pane", `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), cM("left", [cB("tab-pane", `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), cM("left, right", `
 flex-direction: row;
 `, [cB("tabs-bar", `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 padding: var(--n-tab-padding-vertical); 
 `)]), cM("right", `
 flex-direction: row-reverse;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), cB("tabs-bar", `
 left: 0;
 `)]), cM("bottom", `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), cB("tabs-bar", `
 top: 0;
 `)]), cB("tabs-rail", `
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("tabs-capsule", `
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `), cB("tabs-tab-wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("tabs-tab", `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cM("active", `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `), c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])])]), cM("flex", [cB("tabs-nav", `
 width: 100%;
 position: relative;
 `, [cB("tabs-wrapper", `
 width: 100%;
 `, [cB("tabs-tab", `
 margin-right: 0;
 `)])])]), cB("tabs-nav", `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [cE("prefix, suffix", `
 display: flex;
 align-items: center;
 `), cE("prefix", "padding-right: 16px;"), cE("suffix", "padding-left: 16px;")]), cM("top, bottom", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), c$1("&::after", `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]), cM("left, right", [cB("tabs-nav-scroll-content", `
 flex-direction: column;
 `), cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), c$1("&::after", `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]), cB("tabs-nav-scroll-wrapper", `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [cB("tabs-nav-y-scroll", `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `)]), c$1("&::before, &::after", `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), cB("tabs-nav-scroll-content", `
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), cB("tabs-wrapper", `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), cB("tabs-tab-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), cB("tabs-tab", `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cM("disabled", {
  cursor: "not-allowed"
}), cE("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cE("label", `
 display: flex;
 align-items: center;
 z-index: 1;
 `)]), cB("tabs-bar", `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("&.transition-disabled", `
 transition: none;
 `), cM("disabled", `
 background-color: var(--n-tab-text-color-disabled)
 `)]), cB("tabs-pane-wrapper", `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), cB("tab-pane", `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [c$1("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), c$1("&.next-transition-leave-active, &.prev-transition-leave-active", `
 position: absolute;
 `), c$1("&.next-transition-enter-from, &.prev-transition-leave-to", `
 transform: translateX(32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-to, &.prev-transition-enter-from", `
 transform: translateX(-32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", `
 transform: translateX(0);
 opacity: 1;
 `)]), cB("tabs-tab-pad", `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), cM("line-type, bar-type", [cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [c$1("&:hover", {
  color: "var(--n-tab-text-color-hover)"
}), cM("active", `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), cM("disabled", {
  color: "var(--n-tab-text-color-disabled)"
})])]), cB("tabs-nav", [cM("line-type", [cM("top", [cE("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 bottom: -1px;
 `)]), cM("left", [cE("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 right: -1px;
 `)]), cM("right", [cE("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 left: -1px;
 `)]), cM("bottom", [cE("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 top: -1px;
 `)]), cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-nav-scroll-content", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-bar", `
 border-radius: 0;
 `)]), cM("card-type", [cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-pad", `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab-pad", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [cM("addable", `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `, [cE("height-placeholder", `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), cNotM("disabled", [c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])]), cM("closable", "padding-right: 8px;"), cM("active", `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), cM("disabled", "color: var(--n-tab-text-color-disabled);")])]), cM("left, right", `
 flex-direction: column; 
 `, [cE("prefix, suffix", `
 padding: var(--n-tab-padding-vertical);
 `), cB("tabs-wrapper", `
 flex-direction: column;
 `), cB("tabs-tab-wrapper", `
 flex-direction: column;
 `, [cB("tabs-tab-pad", `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]), cM("top", [cM("card-type", [cB("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-bottom: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), cM("left", [cM("card-type", [cB("tabs-scroll-padding", "border-right: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-right: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), cM("right", [cM("card-type", [cB("tabs-scroll-padding", "border-left: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-left: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), cM("bottom", [cM("card-type", [cB("tabs-scroll-padding", "border-top: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-top: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);
const tabsProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  defaultValue: [String, Number],
  trigger: {
    type: String,
    default: "click"
  },
  type: {
    type: String,
    default: "bar"
  },
  closable: Boolean,
  justifyContent: String,
  size: {
    type: String,
    default: "medium"
  },
  placement: {
    type: String,
    default: "top"
  },
  tabStyle: [String, Object],
  tabClass: String,
  addTabStyle: [String, Object],
  addTabClass: String,
  barWidth: Number,
  paneClass: String,
  paneStyle: [String, Object],
  paneWrapperClass: String,
  paneWrapperStyle: [String, Object],
  addable: [Boolean, Object],
  tabsPadding: {
    type: Number,
    default: 0
  },
  animated: Boolean,
  onBeforeLeave: Function,
  onAdd: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onClose: [Function, Array],
  // deprecated
  labelSize: String,
  activeName: [String, Number],
  onActiveNameChange: [Function, Array]
});
const __unplugin_components_2 = defineComponent({
  name: "Tabs",
  props: tabsProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Tabs", "-tabs", style, tabsLight, props, mergedClsPrefixRef);
    const tabsElRef = ref(null);
    const barElRef = ref(null);
    const scrollWrapperElRef = ref(null);
    const addTabInstRef = ref(null);
    const xScrollInstRef = ref(null);
    const yScrollElRef = ref(null);
    const startReachedRef = ref(true);
    const endReachedRef = ref(true);
    const compitableSizeRef = useCompitable(props, ["labelSize", "size"]);
    const compitableValueRef = useCompitable(props, ["activeName", "value"]);
    const uncontrolledValueRef = ref((_b = (_a = compitableValueRef.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : slots.default ? (_d = (_c = flatten(slots.default())[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.name : null);
    const mergedValueRef = useMergedState(compitableValueRef, uncontrolledValueRef);
    const tabChangeIdRef = {
      id: 0
    };
    const tabWrapperStyleRef = computed(() => {
      if (!props.justifyContent || props.type === "card") return void 0;
      return {
        display: "flex",
        justifyContent: props.justifyContent
      };
    });
    watch(mergedValueRef, () => {
      tabChangeIdRef.id = 0;
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    function getCurrentEl() {
      var _a2;
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      const tabEl = (_a2 = tabsElRef.value) === null || _a2 === void 0 ? void 0 : _a2.querySelector(`[data-name="${value}"]`);
      return tabEl;
    }
    function updateBarStyle(tabEl) {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const barIsHide = barEl.style.opacity === "0";
      if (tabEl) {
        const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
        const {
          barWidth,
          placement
        } = props;
        if (tabEl.dataset.disabled === "true") {
          barEl.classList.add(disabledClassName);
        } else {
          barEl.classList.remove(disabledClassName);
        }
        if (["top", "bottom"].includes(placement)) {
          clearBarStyle(["top", "maxHeight", "height"]);
          if (typeof barWidth === "number" && tabEl.offsetWidth >= barWidth) {
            const offsetDiffLeft = Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
            barEl.style.left = `${offsetDiffLeft}px`;
            barEl.style.maxWidth = `${barWidth}px`;
          } else {
            barEl.style.left = `${tabEl.offsetLeft}px`;
            barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
          }
          barEl.style.width = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetWidth;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        } else {
          clearBarStyle(["left", "maxWidth", "width"]);
          if (typeof barWidth === "number" && tabEl.offsetHeight >= barWidth) {
            const offsetDiffTop = Math.floor((tabEl.offsetHeight - barWidth) / 2) + tabEl.offsetTop;
            barEl.style.top = `${offsetDiffTop}px`;
            barEl.style.maxHeight = `${barWidth}px`;
          } else {
            barEl.style.top = `${tabEl.offsetTop}px`;
            barEl.style.maxHeight = `${tabEl.offsetHeight}px`;
          }
          barEl.style.height = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetHeight;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        }
      }
    }
    function hideBarStyle() {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      barEl.style.opacity = "0";
    }
    function clearBarStyle(styleProps) {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      for (const prop of styleProps) {
        barEl.style[prop] = "";
      }
    }
    function updateCurrentBarStyle() {
      if (props.type === "card") return;
      const tabEl = getCurrentEl();
      if (tabEl) {
        updateBarStyle(tabEl);
      } else {
        hideBarStyle();
      }
    }
    function updateCurrentScrollPosition() {
      var _a2;
      const scrollWrapperEl = (_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el;
      if (!scrollWrapperEl) return;
      const tabEl = getCurrentEl();
      if (!tabEl) return;
      const {
        scrollLeft: scrollWrapperElScrollLeft,
        offsetWidth: scrollWrapperElOffsetWidth
      } = scrollWrapperEl;
      const {
        offsetLeft: tabElOffsetLeft,
        offsetWidth: tabElOffsetWidth
      } = tabEl;
      if (scrollWrapperElScrollLeft > tabElOffsetLeft) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft,
          behavior: "smooth"
        });
      } else if (tabElOffsetLeft + tabElOffsetWidth > scrollWrapperElScrollLeft + scrollWrapperElOffsetWidth) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft + tabElOffsetWidth - scrollWrapperElOffsetWidth,
          behavior: "smooth"
        });
      }
    }
    const tabsPaneWrapperRef = ref(null);
    let fromHeight = 0;
    let hangingTransition = null;
    function onAnimationBeforeLeave(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        fromHeight = el.getBoundingClientRect().height;
        const fromHeightPx = `${fromHeight}px`;
        const applyFromStyle = () => {
          tabsPaneWrapperEl.style.height = fromHeightPx;
          tabsPaneWrapperEl.style.maxHeight = fromHeightPx;
        };
        if (!hangingTransition) {
          hangingTransition = applyFromStyle;
        } else {
          applyFromStyle();
          hangingTransition();
          hangingTransition = null;
        }
      }
    }
    function onAnimationEnter(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        const targetHeight = el.getBoundingClientRect().height;
        const applyTargetStyle = () => {
          void document.body.offsetHeight;
          tabsPaneWrapperEl.style.maxHeight = `${targetHeight}px`;
          tabsPaneWrapperEl.style.height = `${Math.max(fromHeight, targetHeight)}px`;
        };
        if (!hangingTransition) {
          hangingTransition = applyTargetStyle;
        } else {
          hangingTransition();
          hangingTransition = null;
          applyTargetStyle();
        }
      }
    }
    function onAnimationAfterEnter() {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        tabsPaneWrapperEl.style.maxHeight = "";
        tabsPaneWrapperEl.style.height = "";
        const {
          paneWrapperStyle
        } = props;
        if (typeof paneWrapperStyle === "string") {
          tabsPaneWrapperEl.style.cssText = paneWrapperStyle;
        } else if (paneWrapperStyle) {
          const {
            maxHeight,
            height
          } = paneWrapperStyle;
          if (maxHeight !== void 0) {
            tabsPaneWrapperEl.style.maxHeight = maxHeight;
          }
          if (height !== void 0) {
            tabsPaneWrapperEl.style.height = height;
          }
        }
      }
    }
    const renderNameListRef = {
      value: []
    };
    const animationDirectionRef = ref("next");
    function activateTab(panelName) {
      const currentValue = mergedValueRef.value;
      let dir = "next";
      for (const name of renderNameListRef.value) {
        if (name === currentValue) {
          break;
        }
        if (name === panelName) {
          dir = "prev";
          break;
        }
      }
      animationDirectionRef.value = dir;
      doUpdateValue(panelName);
    }
    function doUpdateValue(panelName) {
      const {
        onActiveNameChange,
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onActiveNameChange) {
        call(onActiveNameChange, panelName);
      }
      if (onUpdateValue) call(onUpdateValue, panelName);
      if (_onUpdateValue) call(_onUpdateValue, panelName);
      uncontrolledValueRef.value = panelName;
    }
    function handleClose(panelName) {
      const {
        onClose
      } = props;
      if (onClose) call(onClose, panelName);
    }
    function updateBarPositionInstantly() {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const disableTransitionClassName = "transition-disabled";
      barEl.classList.add(disableTransitionClassName);
      updateCurrentBarStyle();
      barEl.classList.remove(disableTransitionClassName);
    }
    const segmentCapsuleElRef = ref(null);
    function updateSegmentPosition({
      transitionDisabled
    }) {
      const tabsEl = tabsElRef.value;
      if (!tabsEl) return;
      if (transitionDisabled) tabsEl.classList.add("transition-disabled");
      const activeTabEl = getCurrentEl();
      if (activeTabEl && segmentCapsuleElRef.value) {
        segmentCapsuleElRef.value.style.width = `${activeTabEl.offsetWidth}px`;
        segmentCapsuleElRef.value.style.height = `${activeTabEl.offsetHeight}px`;
        segmentCapsuleElRef.value.style.transform = `translateX(${activeTabEl.offsetLeft - depx(getComputedStyle(tabsEl).paddingLeft)}px)`;
        if (transitionDisabled) {
          void segmentCapsuleElRef.value.offsetWidth;
        }
      }
      if (transitionDisabled) {
        tabsEl.classList.remove("transition-disabled");
      }
    }
    watch([mergedValueRef], () => {
      if (props.type === "segment") {
        void nextTick(() => {
          updateSegmentPosition({
            transitionDisabled: false
          });
        });
      }
    });
    onMounted(() => {
      if (props.type === "segment") {
        updateSegmentPosition({
          transitionDisabled: true
        });
      }
    });
    let memorizedWidth = 0;
    function _handleNavResize(entry) {
      var _b2;
      if (entry.contentRect.width === 0 && entry.contentRect.height === 0) {
        return;
      }
      if (memorizedWidth === entry.contentRect.width) {
        return;
      }
      memorizedWidth = entry.contentRect.width;
      const {
        type
      } = props;
      if (type === "line" || type === "bar") {
        {
          updateBarPositionInstantly();
        }
      }
      if (type !== "segment") {
        const {
          placement
        } = props;
        deriveScrollShadow((placement === "top" || placement === "bottom" ? (_b2 = xScrollInstRef.value) === null || _b2 === void 0 ? void 0 : _b2.$el : yScrollElRef.value) || null);
      }
    }
    const handleNavResize = throttle(_handleNavResize, 64);
    watch([() => props.justifyContent, () => props.size], () => {
      void nextTick(() => {
        const {
          type
        } = props;
        if (type === "line" || type === "bar") {
          updateBarPositionInstantly();
        }
      });
    });
    const addTabFixedRef = ref(false);
    function _handleTabsResize(entry) {
      var _a2;
      const {
        target,
        contentRect: {
          width,
          height
        }
      } = entry;
      const containerWidth = target.parentElement.parentElement.offsetWidth;
      const containerHeight = target.parentElement.parentElement.offsetHeight;
      const {
        placement
      } = props;
      if (!addTabFixedRef.value) {
        if (placement === "top" || placement === "bottom") {
          if (containerWidth < width) {
            addTabFixedRef.value = true;
          }
        } else {
          if (containerHeight < height) {
            addTabFixedRef.value = true;
          }
        }
      } else {
        const {
          value: addTabInst
        } = addTabInstRef;
        if (!addTabInst) return;
        if (placement === "top" || placement === "bottom") {
          if (containerWidth - width > addTabInst.$el.offsetWidth) {
            addTabFixedRef.value = false;
          }
        } else {
          if (containerHeight - height > addTabInst.$el.offsetHeight) {
            addTabFixedRef.value = false;
          }
        }
      }
      deriveScrollShadow(((_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el) || null);
    }
    const handleTabsResize = throttle(_handleTabsResize, 64);
    function handleAdd() {
      const {
        onAdd
      } = props;
      if (onAdd) onAdd();
      void nextTick(() => {
        const currentEl = getCurrentEl();
        const {
          value: xScrollInst
        } = xScrollInstRef;
        if (!currentEl || !xScrollInst) return;
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: "smooth"
        });
      });
    }
    function deriveScrollShadow(el) {
      if (!el) return;
      const {
        placement
      } = props;
      if (placement === "top" || placement === "bottom") {
        const {
          scrollLeft,
          scrollWidth,
          offsetWidth
        } = el;
        startReachedRef.value = scrollLeft <= 0;
        endReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
      } else {
        const {
          scrollTop,
          scrollHeight,
          offsetHeight
        } = el;
        startReachedRef.value = scrollTop <= 0;
        endReachedRef.value = scrollTop + offsetHeight >= scrollHeight;
      }
    }
    const handleScroll = throttle((e) => {
      deriveScrollShadow(e.target);
    }, 64);
    provide(tabsInjectionKey, {
      triggerRef: toRef(props, "trigger"),
      tabStyleRef: toRef(props, "tabStyle"),
      tabClassRef: toRef(props, "tabClass"),
      addTabStyleRef: toRef(props, "addTabStyle"),
      addTabClassRef: toRef(props, "addTabClass"),
      paneClassRef: toRef(props, "paneClass"),
      paneStyleRef: toRef(props, "paneStyle"),
      mergedClsPrefixRef,
      typeRef: toRef(props, "type"),
      closableRef: toRef(props, "closable"),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: toRef(props, "onBeforeLeave"),
      activateTab,
      handleClose,
      handleAdd
    });
    onFontsReady(() => {
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    watchEffect(() => {
      const {
        value: el
      } = scrollWrapperElRef;
      if (!el) return;
      const {
        value: clsPrefix
      } = mergedClsPrefixRef;
      const shadowStartClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-start`;
      const shadowEndClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-end`;
      if (startReachedRef.value) {
        el.classList.remove(shadowStartClass);
      } else {
        el.classList.add(shadowStartClass);
      }
      if (endReachedRef.value) {
        el.classList.remove(shadowEndClass);
      } else {
        el.classList.add(shadowEndClass);
      }
    });
    const exposedMethods = {
      syncBarPosition: () => {
        updateCurrentBarStyle();
      }
    };
    const handleSegmentResize = () => {
      updateSegmentPosition({
        transitionDisabled: true
      });
    };
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = compitableSizeRef;
      const {
        type
      } = props;
      const typeSuffix = {
        card: "Card",
        bar: "Bar",
        line: "Line",
        segment: "Segment"
      }[type];
      const sizeType = `${size}${typeSuffix}`;
      const {
        self: {
          barColor,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          tabColor,
          tabBorderColor,
          paneTextColor,
          tabFontWeight,
          tabBorderRadius,
          tabFontWeightActive,
          colorSegment,
          fontWeightStrong,
          tabColorSegment,
          closeSize,
          closeIconSize,
          closeColorHover,
          closeColorPressed,
          closeBorderRadius,
          [createKey("panePadding", size)]: panePadding,
          [createKey("tabPadding", sizeType)]: tabPadding,
          [createKey("tabPaddingVertical", sizeType)]: tabPaddingVertical,
          [createKey("tabGap", sizeType)]: tabGap,
          [createKey("tabGap", `${sizeType}Vertical`)]: tabGapVertical,
          [createKey("tabTextColor", type)]: tabTextColor,
          [createKey("tabTextColorActive", type)]: tabTextColorActive,
          [createKey("tabTextColorHover", type)]: tabTextColorHover,
          [createKey("tabTextColorDisabled", type)]: tabTextColorDisabled,
          [createKey("tabFontSize", size)]: tabFontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color-segment": colorSegment,
        "--n-bar-color": barColor,
        "--n-tab-font-size": tabFontSize,
        "--n-tab-text-color": tabTextColor,
        "--n-tab-text-color-active": tabTextColorActive,
        "--n-tab-text-color-disabled": tabTextColorDisabled,
        "--n-tab-text-color-hover": tabTextColorHover,
        "--n-pane-text-color": paneTextColor,
        "--n-tab-border-color": tabBorderColor,
        "--n-tab-border-radius": tabBorderRadius,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-tab-color": tabColor,
        "--n-tab-font-weight": tabFontWeight,
        "--n-tab-font-weight-active": tabFontWeightActive,
        "--n-tab-padding": tabPadding,
        "--n-tab-padding-vertical": tabPaddingVertical,
        "--n-tab-gap": tabGap,
        "--n-tab-gap-vertical": tabGapVertical,
        "--n-pane-padding-left": getMargin(panePadding, "left"),
        "--n-pane-padding-right": getMargin(panePadding, "right"),
        "--n-pane-padding-top": getMargin(panePadding, "top"),
        "--n-pane-padding-bottom": getMargin(panePadding, "bottom"),
        "--n-font-weight-strong": fontWeightStrong,
        "--n-tab-color-segment": tabColorSegment
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tabs", computed(() => {
      return `${compitableSizeRef.value[0]}${props.type[0]}`;
    }), cssVarsRef, props) : void 0;
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: /* @__PURE__ */ new Set(),
      segmentCapsuleElRef,
      tabsPaneWrapperRef,
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: compitableSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      animationDirection: animationDirectionRef,
      renderNameListRef,
      yScrollElRef,
      handleSegmentResize,
      onAnimationBeforeLeave,
      onAnimationEnter,
      onAnimationAfterEnter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    const {
      mergedClsPrefix,
      type,
      placement,
      addTabFixed,
      addable,
      mergedSize,
      renderNameListRef,
      onRender,
      paneWrapperClass,
      paneWrapperStyle,
      $slots: {
        default: defaultSlot,
        prefix: prefixSlot,
        suffix: suffixSlot
      }
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const tabPaneChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB_PANE__ === true;
    }) : [];
    const tabChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB__ === true;
    }) : [];
    const showPane = !tabChildren.length;
    const isCard = type === "card";
    const isSegment = type === "segment";
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
    renderNameListRef.value = [];
    const scrollContent = () => {
      const tabs = h("div", {
        style: this.tabWrapperStyle,
        class: `${mergedClsPrefix}-tabs-wrapper`
      }, mergedJustifyContent ? null : h("div", {
        class: `${mergedClsPrefix}-tabs-scroll-padding`,
        style: placement === "top" || placement === "bottom" ? {
          width: `${this.tabsPadding}px`
        } : {
          height: `${this.tabsPadding}px`
        }
      }), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return justifyTabDynamicProps(h(Tab, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0 && (!mergedJustifyContent || mergedJustifyContent === "center" || mergedJustifyContent === "start" || mergedJustifyContent === "end")
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0));
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index !== 0 && !mergedJustifyContent) {
          return justifyTabDynamicProps(createLeftPaddedTabVNode(tabVNode));
        } else {
          return justifyTabDynamicProps(tabVNode);
        }
      }), !addTabFixed && addable && isCard ? createAddTag(addable, (showPane ? tabPaneChildren.length : tabChildren.length) !== 0) : null, mergedJustifyContent ? null : h("div", {
        class: `${mergedClsPrefix}-tabs-scroll-padding`,
        style: {
          width: `${this.tabsPadding}px`
        }
      }));
      return h("div", {
        ref: "tabsElRef",
        class: `${mergedClsPrefix}-tabs-nav-scroll-content`
      }, isCard && addable ? h(VResizeObserver, {
        onResize: this.handleTabsResize
      }, {
        default: () => tabs
      }) : tabs, isCard ? h("div", {
        class: `${mergedClsPrefix}-tabs-pad`
      }) : null, isCard ? null : h("div", {
        ref: "barElRef",
        class: `${mergedClsPrefix}-tabs-bar`
      }));
    };
    const resolvedPlacement = isSegment ? "top" : placement;
    return h("div", {
      class: [`${mergedClsPrefix}-tabs`, this.themeClass, `${mergedClsPrefix}-tabs--${type}-type`, `${mergedClsPrefix}-tabs--${mergedSize}-size`, mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`, `${mergedClsPrefix}-tabs--${resolvedPlacement}`],
      style: this.cssVars
    }, h("div", {
      class: [
        // the class should be applied here since it's possible
        // to make tabs nested in tabs, style may influence each
        // other. adding a class will make it easy to write the
        // style.
        `${mergedClsPrefix}-tabs-nav--${type}-type`,
        `${mergedClsPrefix}-tabs-nav--${resolvedPlacement}`,
        `${mergedClsPrefix}-tabs-nav`
      ]
    }, resolveWrappedSlot(prefixSlot, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tabs-nav__prefix`
    }, children)), isSegment ? h(VResizeObserver, {
      onResize: this.handleSegmentResize
    }, {
      default: () => h("div", {
        class: `${mergedClsPrefix}-tabs-rail`,
        ref: "tabsElRef"
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-capsule`,
        ref: "segmentCapsuleElRef"
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-wrapper`
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-tab`
      }))), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return h(Tab, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0);
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index === 0) {
          return tabVNode;
        } else {
          return createLeftPaddedTabVNode(tabVNode);
        }
      }))
    }) : h(VResizeObserver, {
      onResize: this.handleNavResize
    }, {
      default: () => h("div", {
        class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`,
        ref: "scrollWrapperElRef"
      }, ["top", "bottom"].includes(resolvedPlacement) ? h(VXScroll, {
        ref: "xScrollInstRef",
        onScroll: this.handleScroll
      }, {
        default: scrollContent
      }) : h("div", {
        class: `${mergedClsPrefix}-tabs-nav-y-scroll`,
        onScroll: this.handleScroll,
        ref: "yScrollElRef"
      }, scrollContent()))
    }), addTabFixed && addable && isCard ? createAddTag(addable, true) : null, resolveWrappedSlot(suffixSlot, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tabs-nav__suffix`
    }, children))), showPane && (this.animated && (resolvedPlacement === "top" || resolvedPlacement === "bottom") ? h("div", {
      ref: "tabsPaneWrapperRef",
      style: paneWrapperStyle,
      class: [`${mergedClsPrefix}-tabs-pane-wrapper`, paneWrapperClass]
    }, filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames)));
  }
});
function filterMapTabPanes(tabPaneVNodes, value, renderedNames, onBeforeLeave, onEnter, onAfterEnter, animationDirection) {
  const children = [];
  tabPaneVNodes.forEach((vNode) => {
    const {
      name,
      displayDirective,
      "display-directive": _displayDirective
    } = vNode.props;
    const matchDisplayDirective = (directive) => displayDirective === directive || _displayDirective === directive;
    const show = value === name;
    if (vNode.key !== void 0) {
      vNode.key = name;
    }
    if (show || matchDisplayDirective("show") || matchDisplayDirective("show:lazy") && renderedNames.has(name)) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name);
      }
      const useVShow = !matchDisplayDirective("if");
      children.push(useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode);
    }
  });
  if (!animationDirection) {
    return children;
  }
  return h(TransitionGroup, {
    name: `${animationDirection}-transition`,
    onBeforeLeave,
    onEnter,
    onAfterEnter
  }, {
    default: () => children
  });
}
function createAddTag(addable, internalLeftPadded) {
  return h(Tab, {
    ref: "addTabInstRef",
    key: "__addable",
    name: "__addable",
    internalCreatedByPane: true,
    internalAddable: true,
    internalLeftPadded,
    disabled: typeof addable === "object" && addable.disabled
  });
}
function createLeftPaddedTabVNode(tabVNode) {
  const modifiedVNode = cloneVNode(tabVNode);
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true;
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    };
  }
  return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
  if (Array.isArray(tabVNode.dynamicProps)) {
    if (!tabVNode.dynamicProps.includes("internalLeftPadded")) {
      tabVNode.dynamicProps.push("internalLeftPadded");
    }
  } else {
    tabVNode.dynamicProps = ["internalLeftPadded"];
  }
  return tabVNode;
}
const _hoisted_1 = { class: "h-100%" };
const _hoisted_2 = {
  class: "text1 font-medium",
  style: { "font-size": "1.3rem" }
};
const _sfc_main = {
  __name: "search",
  props: ["keyword"],
  setup(__props) {
    let playStore = usePlayStore();
    let props = __props;
    let currentTab = ref("song");
    let result = ref({});
    watch(props, (value) => {
      search();
    }, { deep: true });
    onMounted(() => {
      search();
    });
    let tabChange = (value) => __async(this, null, function* () {
      switch (value) {
        case "playlist":
          let res = yield cloudsearch(props.keyword, 1e3);
          result.value.playlist = res.data.result.playlists;
          break;
      }
    });
    function search() {
      return __async(this, null, function* () {
        var _a, _b;
        try {
          result.value = {};
          currentTab.value = "song";
          let res = yield cloudsearch(props.keyword);
          result.value.song = (_b = (_a = res.data) == null ? void 0 : _a.result) == null ? void 0 : _b.songs;
          if (!result.value.song) {
            throw new Error("暂无搜索结果");
          }
        } catch (error$1) {
          error(error$1.message, "搜索遇到问题");
          result.value.song = result.value.playlist = "这是试图防止一直转圈的字符串";
        }
      });
    }
    function play(id) {
      return __async(this, null, function* () {
        yield playStore.addMusic([id], "now", true);
        playStore.play(true);
      });
    }
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_0;
      const _component_n_tab_pane = __unplugin_components_1;
      const _component_n_tabs = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, "“" + toDisplayString(unref(props).keyword) + "” 的搜索结果：", 1),
        createVNode(_component_n_tabs, {
          animated: "",
          "onUpdate:value": [
            unref(tabChange),
            _cache[0] || (_cache[0] = ($event) => isRef(currentTab) ? currentTab.value = $event : currentTab = $event)
          ],
          value: unref(currentTab)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_tab_pane, {
              name: "song",
              tab: "单曲"
            }, {
              default: withCtx(() => {
                var _a;
                return [
                  ((_a = unref(result)) == null ? void 0 : _a.song) ? (openBlock(), createBlock(musicList, {
                    key: 0,
                    value: unref(result).song,
                    nameOnClick: play
                  }, null, 8, ["value"])) : (openBlock(), createBlock(_component_n_spin, {
                    key: 1,
                    class: "loading-center"
                  }))
                ];
              }),
              _: 1
            }),
            createVNode(_component_n_tab_pane, {
              name: "playlist",
              tab: "歌单"
            }, {
              default: withCtx(() => {
                var _a;
                return [
                  ((_a = unref(result)) == null ? void 0 : _a.playlist) ? (openBlock(), createBlock(itemCardList, {
                    key: 0,
                    data: unref(result).playlist
                  }, null, 8, ["data"])) : (openBlock(), createBlock(_component_n_spin, {
                    key: 1,
                    class: "loading-center"
                  }))
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onUpdate:value", "value"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
