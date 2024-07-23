import { as as on, at as off } from "./index-CGh_aevj.js";
const ctxKey = "@@coContext";
const clickoutside = {
  mounted(el, { value, modifiers }) {
    el[ctxKey] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey].handler = value;
      on("clickoutside", el, value, {
        capture: modifiers.capture
      });
    }
  },
  updated(el, { value, modifiers }) {
    const ctx = el[ctxKey];
    if (typeof value === "function") {
      if (ctx.handler) {
        if (ctx.handler !== value) {
          off("clickoutside", el, ctx.handler, {
            capture: modifiers.capture
          });
          ctx.handler = value;
          on("clickoutside", el, value, {
            capture: modifiers.capture
          });
        }
      } else {
        el[ctxKey].handler = value;
        on("clickoutside", el, value, {
          capture: modifiers.capture
        });
      }
    } else {
      if (ctx.handler) {
        off("clickoutside", el, ctx.handler, {
          capture: modifiers.capture
        });
        ctx.handler = void 0;
      }
    }
  },
  unmounted(el, { modifiers }) {
    const { handler } = el[ctxKey];
    if (handler) {
      off("clickoutside", el, handler, {
        capture: modifiers.capture
      });
    }
    el[ctxKey].handler = void 0;
  }
};
export {
  clickoutside as c
};
