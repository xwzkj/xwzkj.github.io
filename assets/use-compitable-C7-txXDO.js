import { c as computed } from "./index-p_PrpQgG.js";
function useCompitable(reactive, keys) {
  return computed(() => {
    for (const key of keys) {
      if (reactive[key] !== void 0)
        return reactive[key];
    }
    return reactive[keys[keys.length - 1]];
  });
}
export {
  useCompitable as u
};
