import { a as usePlayStore, z as useRouter, r as ref, w as watch, o as onMounted, a4 as cloudsearch, d as openBlock, e as createElementBlock, a2 as withDirectives, a3 as vShow, h as unref, f as createBaseVNode, j as createBlock, k as createCommentVNode, F as Fragment } from "./index-CF4rVDsa.js";
import { m as musicList, _ as __unplugin_components_3 } from "./musicList-f_Ak4GHs.js";
import { _ as _export_sfc } from "./plugin-vueexport-helper-CeXuirIF.js";
import "./use-compitable-BoKFYNoM.js";
import "./heart-outlined-BROmjilB.js";
import "./Card-Dl9MRCvE.js";
const _sfc_main = {
  __name: "search",
  props: ["keyword"],
  setup(__props) {
    let playStore = usePlayStore();
    let router = useRouter();
    let props = __props;
    let result = ref("");
    watch(props, (value) => {
      search2();
    }, { deep: true });
    onMounted(() => {
      search2();
    });
    async function search2() {
      result.value = null;
      let res = await cloudsearch(props.keyword);
      result.value = res.data.result.songs;
    }
    async function play(id) {
      await playStore.addMusic([id], 0, true);
      playStore.play(true);
      router.push({ name: "player" });
    }
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_3;
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createBaseVNode("div", null, [
          unref(result) ? (openBlock(), createBlock(musicList, {
            key: 0,
            value: unref(result),
            nameOnClick: play
          }, null, 8, ["value"])) : createCommentVNode("", true)
        ], 512), [
          [vShow, unref(result)]
        ]),
        !unref(result) ? (openBlock(), createBlock(_component_n_spin, {
          key: 0,
          class: "loading-center"
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2915721e"]]);
export {
  search as default
};
