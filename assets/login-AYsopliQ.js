import { an as derived, ah as cB, ak as cNotM, am as cE, aj as cM, d as defineComponent, ao as useTheme, ap as useConfig, c as computed, aq as useThemeClass, h, F as Fragment, ai as c, b as ref, D as onMounted, ae as watchEffect, m as markRaw, aK as openBlock, aL as createElementBlock, aM as createBaseVNode, aO as _export_sfc, E as onBeforeUnmount, u as unref, aQ as createBlock, aR as createCommentVNode, v as createTextVNode, aU as toDisplayString, aN as createVNode, aP as withCtx, f as isRef, I as withDirectives, at as vShow, aH as NIcon } from "./marqueePlus-Cxav8Oq3.js";
import { d as useThemeStore, u as useUserStore, a as useRouter, l as loginQrKey, e as loginQrCreate, f as loginQrCheck, s as success, h as error, v as verifyCaptcha, i as loginWithPhone, j as sendCaptcha, _ as __unplugin_components_0$1, B as Button } from "./index-DktsekCg.js";
function self$1(vars) {
  const {
    textColor1,
    dividerColor,
    fontWeightStrong
  } = vars;
  return {
    textColor: textColor1,
    color: dividerColor,
    fontWeight: fontWeightStrong
  };
}
const dividerLight = {
  name: "Divider",
  common: derived,
  self: self$1
};
const style$1 = cB("divider", `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [cNotM("vertical", `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [cNotM("no-title", `
 display: flex;
 align-items: center;
 `)]), cE("title", `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), cM("title-position-left", [cE("line", [cM("left", {
  width: "28px"
})])]), cM("title-position-right", [cE("line", [cM("right", {
  width: "28px"
})])]), cM("dashed", [cE("line", `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), cM("vertical", `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), cE("line", `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), cNotM("dashed", [cE("line", {
  backgroundColor: "var(--n-color)"
})]), cM("dashed", [cE("line", {
  borderColor: "var(--n-color)"
})]), cM("vertical", {
  backgroundColor: "var(--n-color)"
})]);
const dividerProps = Object.assign(Object.assign({}, useTheme.props), {
  titlePlacement: {
    type: String,
    default: "center"
  },
  dashed: Boolean,
  vertical: Boolean
});
const __unplugin_components_6 = defineComponent({
  name: "Divider",
  props: dividerProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Divider", "-divider", style$1, dividerLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          color,
          textColor,
          fontWeight
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": color,
        "--n-text-color": textColor,
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("divider", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      titlePlacement,
      vertical,
      dashed,
      cssVars,
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      role: "separator",
      class: [`${mergedClsPrefix}-divider`, this.themeClass, {
        [`${mergedClsPrefix}-divider--vertical`]: vertical,
        [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
        [`${mergedClsPrefix}-divider--dashed`]: dashed,
        [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]: $slots.default && titlePlacement
      }],
      style: cssVars
    }, !vertical ? h("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left`
    }) : null, !vertical && $slots.default ? h(Fragment, null, h("div", {
      class: `${mergedClsPrefix}-divider__title`
    }, this.$slots), h("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right`
    })) : null);
  }
});
function self(vars) {
  return {
    borderRadius: vars.borderRadius
  };
}
const themeLight = {
  name: "QrCode",
  common: derived,
  self
};
const style = c([cB("qr-code", `
 background: #fff;
 border-radius: var(--n-border-radius);
 display: inline-flex;
 `)]);
var qrcodegen;
(function(qrcodegen2) {
  class QrCode {
    /* -- Static factory functions (high level) -- */
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return QrCode.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return QrCode.encodeSegments([seg], ecl);
    }
    /* -- Static factory functions (mid level) -- */
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) {
        throw new RangeError("Invalid value");
      }
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion) {
          throw new RangeError("Data too long");
        }
      }
      for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) {
          ecl = newEcl;
        }
      }
      const bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData()) {
          bb.push(b);
        }
      }
      const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17) {
        appendBits(padByte, 8, bb);
      }
      const dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length) {
        dataCodewords.push(0);
      }
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new QrCode(version, ecl, dataCodewords, mask);
    }
    /* -- Constructor (low level) and fields -- */
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) {
        throw new RangeError("Version value out of range");
      }
      if (msk < -1 || msk > 7) {
        throw new RangeError("Mask value out of range");
      }
      this.size = version * 4 + 17;
      const row = [];
      for (let i = 0; i < this.size; i++) {
        row.push(false);
      }
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk === -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    /* -- Accessor methods -- */
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
      return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /* -- Private helper methods for constructor: Drawing function modules -- */
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 === 0);
        this.setFunctionModule(i, 6, i % 2 === 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i === 0 && j === 0 || i === 0 && j === numAlign - 1 || i === numAlign - 1 && j === 0)) {
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
          }
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) {
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      }
      const bits = (data << 10 | rem) ^ 21522;
      for (let i = 0; i <= 5; i++) {
        this.setFunctionModule(8, i, getBit(bits, i));
      }
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++) {
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      }
      for (let i = 0; i < 8; i++) {
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      }
      for (let i = 8; i < 15; i++) {
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      }
      this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) {
        return;
      }
      let rem = this.version;
      for (let i = 0; i < 12; i++) {
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      }
      const bits = this.version << 12 | rem;
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) {
            this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
          }
        }
      }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    /* -- Private helper methods for constructor: Codewords and masking -- */
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length !== QrCode.getNumDataCodewords(ver, ecl)) {
        throw new RangeError("Invalid argument");
      }
      const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      const blocks = [];
      const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks) {
          dat.push(0);
        }
        blocks.push(dat.concat(ecc));
      }
      const result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) {
            result.push(block[i]);
          }
        });
      }
      return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
      if (data.length !== Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) {
        throw new RangeError("Invalid argument");
      }
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right === 6) {
          right = 5;
        }
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) === 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
      if (mask < 0 || mask > 7) {
        throw new RangeError("Mask value out of range");
      }
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 === 0;
              break;
            case 1:
              invert = y % 2 === 0;
              break;
            case 2:
              invert = x % 3 === 0;
              break;
            case 3:
              invert = (x + y) % 3 === 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 === 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 === 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 === 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert) {
            this.modules[y][x] = !this.modules[y][x];
          }
        }
      }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] === runColor) {
            runX++;
            if (runX === 5) {
              result += QrCode.PENALTY_N1;
            } else if (runX > 5) {
              result++;
            }
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor) {
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            }
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] === runColor) {
            runY++;
            if (runY === 5) {
              result += QrCode.PENALTY_N1;
            } else if (runY > 5) {
              result++;
            }
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor) {
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            }
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color === this.modules[y][x + 1] && color === this.modules[y + 1][x] && color === this.modules[y + 1][x + 1]) {
            result += QrCode.PENALTY_N2;
          }
        }
      }
      let dark = 0;
      for (const row of this.modules) {
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      }
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      result += k * QrCode.PENALTY_N4;
      return result;
    }
    /* -- Private helper functions -- */
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version === 1) {
        return [];
      } else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        const result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step) {
          result.splice(1, 0, pos);
        }
        return result;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
      if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) {
        throw new RangeError("Version number out of range");
      }
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) {
          result -= 36;
        }
      }
      return result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255) {
        throw new RangeError("Degree out of range");
      }
      const result = [];
      for (let i = 0; i < degree - 1; i++) {
        result.push(0);
      }
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length) {
            result[j] ^= result[j + 1];
          }
        }
        root = QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
      const result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 !== 0 || y >>> 8 !== 0) {
        throw new RangeError("Byte out of range");
      }
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      return z;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      const core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] === 0) {
        currentRunLength += this.size;
      }
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  }
  QrCode.MIN_VERSION = 1;
  QrCode.MAX_VERSION = 40;
  QrCode.PENALTY_N1 = 3;
  QrCode.PENALTY_N2 = 3;
  QrCode.PENALTY_N3 = 40;
  QrCode.PENALTY_N4 = 10;
  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    // 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ];
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len !== 0) {
      throw new RangeError("Value out of range");
    }
    for (let i = len - 1; i >= 0; i--) {
      bb.push(val >>> i & 1);
    }
  }
  function getBit(x, i) {
    return (x >>> i & 1) !== 0;
  }
  class QrSegment {
    /* -- Static factory functions (mid level) -- */
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
      const bb = [];
      for (const b of data) {
        appendBits(b, 8, bb);
      }
      return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
      if (!QrSegment.isNumeric(digits)) {
        throw new RangeError("String contains non-numeric characters");
      }
      const bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(Number.parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
      if (!QrSegment.isAlphanumeric(text)) {
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      }
      const bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length) {
        appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      }
      return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
      if (text === "") {
        return [];
      } else if (QrSegment.isNumeric(text)) {
        return [QrSegment.makeNumeric(text)];
      } else if (QrSegment.isAlphanumeric(text)) {
        return [QrSegment.makeAlphanumeric(text)];
      } else {
        return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
      }
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
      const bb = [];
      if (assignVal < 0) {
        throw new RangeError("ECI assignment value out of range");
      } else if (assignVal < 1 << 7) {
        appendBits(assignVal, 8, bb);
      } else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else {
        throw new RangeError("ECI assignment value out of range");
      }
      return new QrSegment(QrSegment.Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
      return QrSegment.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
      return QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    /* -- Constructor (low level) and fields -- */
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0) {
        throw new RangeError("Invalid argument");
      }
      this.bitData = bitData.slice();
    }
    /* -- Methods -- */
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits) {
          return Infinity;
        }
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      const result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== "%") {
          result.push(str.charCodeAt(i));
        } else {
          result.push(Number.parseInt(str.substr(i + 1, 2), 16));
          i += 2;
        }
      }
      return result;
    }
  }
  QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+./:-]*$/;
  QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  (function(QrCode) {
    class Ecc {
      /* -- Constructor and fields -- */
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    }
    Ecc.LOW = new Ecc(0, 1);
    Ecc.MEDIUM = new Ecc(1, 0);
    Ecc.QUARTILE = new Ecc(2, 3);
    Ecc.HIGH = new Ecc(3, 2);
    QrCode.Ecc = Ecc;
  })(qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  (function(QrSegment) {
    class Mode {
      /* -- Constructor and fields -- */
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      /* -- Method -- */
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    }
    Mode.NUMERIC = new Mode(1, [10, 12, 14]);
    Mode.ALPHANUMERIC = new Mode(2, [9, 11, 13]);
    Mode.BYTE = new Mode(4, [8, 16, 16]);
    Mode.KANJI = new Mode(8, [8, 10, 12]);
    Mode.ECI = new Mode(7, [0, 0, 0]);
    QrSegment.Mode = Mode;
  })(qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
const ERROR_CORRECTION_LEVEL = {
  L: qrcodegen.QrCode.Ecc.LOW,
  M: qrcodegen.QrCode.Ecc.MEDIUM,
  Q: qrcodegen.QrCode.Ecc.QUARTILE,
  H: qrcodegen.QrCode.Ecc.HIGH
};
const qrCodeProps = Object.assign(Object.assign({}, useTheme.props), {
  value: String,
  color: {
    type: String,
    default: "#000"
  },
  backgroundColor: {
    type: String,
    default: "#FFF"
  },
  iconSrc: String,
  iconSize: {
    type: Number,
    default: 40
  },
  iconBackgroundColor: {
    type: String,
    default: "#FFF"
  },
  iconBorderRadius: {
    type: Number,
    default: 4
  },
  size: {
    type: Number,
    default: 100
  },
  padding: {
    type: [Number, String],
    default: 12
  },
  errorCorrectionLevel: {
    type: String,
    default: "M"
  },
  type: {
    type: String,
    default: "canvas"
  }
});
const UPSCALE_RATIO = 2;
const NQrCode = defineComponent({
  name: "QrCode",
  props: qrCodeProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("QrCode", "-qr-code", style, themeLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      return {
        "--n-border-radius": themeRef.value.self.borderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("qr-code", void 0, cssVarsRef, props) : void 0;
    const canvasRef = ref();
    const qr = computed(() => {
      var _a;
      const errorCorrectionLevel = ERROR_CORRECTION_LEVEL[props.errorCorrectionLevel];
      return qrcodegen.QrCode.encodeText((_a = props.value) !== null && _a !== void 0 ? _a : "-", errorCorrectionLevel);
    });
    onMounted(() => {
      const imageLoadedTrigger = ref(0);
      let loadedIcon = null;
      watchEffect(() => {
        if (props.type === "svg") return;
        void imageLoadedTrigger.value;
        drawCanvas(qr.value, props.size, props.color, props.backgroundColor, loadedIcon ? {
          icon: loadedIcon,
          iconBorderRadius: props.iconBorderRadius,
          iconSize: props.iconSize,
          iconBackgroundColor: props.iconBackgroundColor
        } : null);
      });
      watchEffect(() => {
        if (props.type === "svg") return;
        const {
          iconSrc
        } = props;
        if (iconSrc) {
          let aborted = false;
          const img = new Image();
          img.src = iconSrc;
          img.onload = () => {
            if (aborted) return;
            loadedIcon = img;
            imageLoadedTrigger.value++;
          };
          return () => {
            aborted = true;
          };
        }
      });
    });
    function drawCanvas(qr2, size, foregroundColor, backgroundColor, iconConfig) {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const canvasWidth = size * UPSCALE_RATIO;
      const width = qr2.size;
      const scale = canvasWidth / width;
      canvas.width = canvasWidth;
      canvas.height = canvasWidth;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < qr2.size; y++) {
        for (let x = 0; x < qr2.size; x++) {
          ctx.fillStyle = qr2.getModule(x, y) ? foregroundColor : backgroundColor;
          const startX = Math.floor(x * scale);
          const endX = Math.ceil((x + 1) * scale);
          const startY = Math.floor(y * scale);
          const endY = Math.ceil((y + 1) * scale);
          ctx.fillRect(startX, startY, endX - startX, endY - startY);
        }
      }
      if (iconConfig) {
        const {
          icon,
          iconBackgroundColor,
          iconBorderRadius,
          iconSize
        } = iconConfig;
        const finalIconSize = iconSize * UPSCALE_RATIO;
        const centerX = (canvas.width - finalIconSize) / 2;
        const centerY = (canvas.height - finalIconSize) / 2;
        ctx.fillStyle = iconBackgroundColor;
        ctx.beginPath();
        ctx.roundRect(centerX, centerY, finalIconSize, finalIconSize, iconBorderRadius * UPSCALE_RATIO);
        ctx.fill();
        const aspectRatio = icon.width / icon.height;
        const scaledWidth = aspectRatio >= 1 ? finalIconSize : finalIconSize * aspectRatio;
        const scaledHeight = aspectRatio <= 1 ? finalIconSize : finalIconSize / aspectRatio;
        const left = centerX + (finalIconSize - scaledWidth) / 2;
        const top = centerY + (finalIconSize - scaledHeight) / 2;
        ctx.drawImage(icon, left, top, scaledWidth, scaledHeight);
      }
    }
    function generatePath(modules, margin = 0) {
      const ops = [];
      modules.forEach((row, y) => {
        let start = null;
        row.forEach((cell, x) => {
          if (!cell && start !== null) {
            ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
            start = null;
            return;
          }
          if (x === row.length - 1) {
            if (!cell) {
              return;
            }
            if (start === null) {
              ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
            } else {
              ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
            }
            return;
          }
          if (cell && start === null) {
            start = x;
          }
        });
      });
      return ops.join("");
    }
    function svgInfo(qr2, size, iconConfig) {
      const cells = qr2.getModules();
      const numCells = cells.length;
      const cellsToDraw = cells;
      let svgInnerHtml = "";
      const path1Html = `<path fill="transparent" d="M0,0 h${numCells}v${numCells}H0z" shape-rendering="crispEdges"></path>`;
      const path2Html = `<path fill="${props.color}" d="${generatePath(cellsToDraw, 0)}" shape-rendering="crispEdges"></path>`;
      let iconHtml = "";
      if (iconConfig) {
        const {
          iconSrc,
          iconSize
        } = iconConfig;
        const DEFAULT_IMG_SCALE = 0.1;
        const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
        const scale = numCells / size;
        const h2 = (iconSize || defaultSize) * scale;
        const w = (iconSize || defaultSize) * scale;
        const x = cells.length / 2 - w / 2;
        const y = cells.length / 2 - h2 / 2;
        iconHtml += `<image href="${iconSrc}" width="${w}" height="${h2}" x="${x}" y="${y}" preserveAspectRatio="none"></image>`;
      }
      svgInnerHtml += path1Html;
      svgInnerHtml += path2Html;
      svgInnerHtml += iconHtml;
      return {
        innerHtml: svgInnerHtml,
        numCells
      };
    }
    const svgInfoRef = computed(() => svgInfo(qr.value, props.size, props.iconSrc ? {
      iconSrc: props.iconSrc,
      iconBorderRadius: props.iconBorderRadius,
      iconSize: props.iconSize,
      iconBackgroundColor: props.iconBackgroundColor
    } : null));
    return {
      canvasRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      svgInfo: svgInfoRef
    };
  },
  render() {
    const {
      mergedClsPrefix,
      backgroundColor,
      padding,
      cssVars,
      themeClass,
      size,
      type
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-qr-code`, themeClass],
      style: Object.assign({
        padding: typeof padding === "number" ? `${padding}px` : padding,
        backgroundColor,
        width: `${size}px`,
        height: `${size}px`
      }, cssVars)
    }, type === "canvas" ? h("canvas", {
      ref: "canvasRef",
      style: {
        width: `${size}px`,
        height: `${size}px`
      }
    }) : h("svg", {
      height: size,
      width: size,
      viewBox: `0 0 ${this.svgInfo.numCells} ${this.svgInfo.numCells}`,
      role: "img",
      innerHTML: this.svgInfo.innerHtml
    }));
  }
});
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      color: "currentColor"
    }, [
      createBaseVNode("path", { d: "M22 13.49c-.275 4.243-3.613 7.623-7.805 7.9c-1.43.095-2.923.095-4.35 0a4.9 4.9 0 0 1-1.488-.339c-.513-.21-.77-.316-.9-.3c-.131.016-.32.155-.699.434c-.667.49-1.508.844-2.755.813c-.63-.015-.945-.023-1.086-.263s.034-.572.386-1.237c.487-.922.796-1.978.328-2.823c-.806-1.208-1.49-2.639-1.59-4.184a20 20 0 0 1 0-2.52c.274-4.243 3.613-7.622 7.804-7.9a33 33 0 0 1 2.676-.067M8.5 15h7m-7-5H12" }),
      createBaseVNode("path", { d: "M16.737 5.176v-1.39c0-.206.009-.414.083-.606c.195-.51.715-1.179 1.66-1.179c.944 0 1.484.669 1.68 1.18c.073.191.082.399.082.604v1.39M16.807 11h3.386c.997 0 1.805-.807 1.805-1.802V7.196c0-.995-.808-1.802-1.805-1.802h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802" })
    ], -1)
  ]));
}
const __unplugin_components_4 = markRaw({ name: "hugeicons-message-lock01", render: render$2 });
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
      createBaseVNode("path", { d: "M14.491 15.5h.009m-5 0h.009m-5.241 3.345c.225 1.67 1.608 2.979 3.292 3.056c1.416.065 2.855.099 4.44.099s3.024-.034 4.44-.1c1.684-.076 3.067-1.385 3.292-3.055c.147-1.09.268-2.207.268-3.345s-.121-2.255-.268-3.345c-.225-1.67-1.608-2.979-3.292-3.056A95 95 0 0 0 12 9c-1.585 0-3.024.034-4.44.1c-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5s.121 2.255.268 3.345" }),
      createBaseVNode("path", { d: "M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9" })
    ], -1)
  ]));
}
const __unplugin_components_3 = markRaw({ name: "hugeicons-square-lock-password", render: render$1 });
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      color: "currentColor"
    }, [
      createBaseVNode("path", { d: "M5 9c0-3.3 0-4.95 1.025-5.975S8.7 2 12 2s4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22s-4.95 0-5.975-1.025S5 18.3 5 15zm6 10h2" }),
      createBaseVNode("path", { d: "m9 2l.089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5s1.81-.01 2.225-.378c.397-.352.493-.93.686-2.088L15 2" })
    ], -1)
  ]));
}
const __unplugin_components_0 = markRaw({ name: "hugeicons-smart-phone01", render });
const _hoisted_1 = { class: "login-container" };
const _hoisted_2 = { class: "login" };
const _hoisted_3 = { class: "login-row-qr" };
const _hoisted_4 = { class: "login-qr" };
const _hoisted_5 = {
  key: 1,
  style: { "text-align": "center" },
  class: "text3"
};
const _hoisted_6 = {
  key: 2,
  class: "text2"
};
const _hoisted_7 = { class: "login-row-passwd" };
const _hoisted_8 = { class: "login-passwd" };
const _hoisted_9 = { class: "login-input-container" };
const _hoisted_10 = { class: "login-input-container" };
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let themeStore = useThemeStore();
    let userStore = useUserStore();
    let router = useRouter();
    let qrcode = ref("");
    let qrStatus = ref("等待扫码");
    let check;
    let name = ref("");
    let key = ref("");
    let currentMethod = ref("sms");
    onMounted(() => {
      createQRcode();
    });
    onBeforeUnmount(() => {
      clearInterval(check);
    });
    async function createQRcode() {
      let key2 = await loginQrKey();
      key2 = key2.data.data.unikey;
      let qr = await loginQrCreate(key2);
      qrStatus.value = "等待扫码";
      qrcode.value = qr.data.data.qrurl;
      check = setInterval(() => {
        loginQrCheck(key2).then((res) => {
          if (res.data.code == 800) {
            clearInterval(check);
            qrStatus.value = "二维码已失效";
            createQRcode();
          }
          if (res.data.code == 801) {
            qrStatus.value = "等待扫码";
          }
          if (res.data.code == 802) {
            qrStatus.value = "正在授权";
          }
          if (res.data.code == 803) {
            qrStatus.value = "授权成功";
            clearInterval(check);
            afterLogin(res.data.cookie);
          }
        });
      }, 3e3);
    }
    async function login2() {
      if (name.value.length != 11) {
        error("请输入十一位国内号码");
        return;
      }
      if (key.value == "") {
        return;
      }
      let res;
      if (currentMethod.value == "sms") {
        res = await verifyCaptcha(name.value, key.value);
        if (res.data.code != 200) {
          error(JSON.stringify(res.data));
          return;
        }
        res = await loginWithPhone(name.value, null, key.value);
      }
      if (currentMethod.value == "passwd") {
        res = await loginWithPhone(name.value, key.value);
      }
      if (res.data.code == 200) {
        afterLogin(res.data.cookie);
      } else {
        error(JSON.stringify(res.data));
      }
    }
    async function sendCaptcha$1() {
      if (name.value.length != 11) {
        error("请输入十一位国内号码");
        return;
      }
      let res;
      res = await sendCaptcha(name.value);
      if (res.data.code == 200) {
        success(res.data.message);
      } else {
        error(JSON.stringify(res.data));
      }
    }
    async function afterLogin(cookie) {
      success("登陆成功~");
      userStore.updateByCookie(cookie);
      router.push({ "name": "account" });
    }
    return (_ctx, _cache) => {
      const _component_i_hugeicons_smart_phone_01 = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_n_input = __unplugin_components_0$1;
      const _component_i_hugeicons_square_lock_password = __unplugin_components_3;
      const _component_i_hugeicons_message_lock_01 = __unplugin_components_4;
      const _component_n_button = Button;
      const _component_n_divider = __unplugin_components_6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              unref(qrcode) != "" ? (openBlock(), createBlock(unref(NQrCode), {
                key: 0,
                value: unref(qrcode),
                size: 200,
                "background-color": "rgba(255,255,255,0)",
                color: unref(themeStore).mainColors[9]
              }, null, 8, ["value", "color"])) : createCommentVNode("", true),
              unref(qrcode) == "" ? (openBlock(), createElementBlock("span", _hoisted_5, _cache[4] || (_cache[4] = [
                createTextVNode("等待生成二维码"),
                createBaseVNode("br", null, null, -1),
                createTextVNode("若长时间未生成 大概是炸了")
              ]))) : createCommentVNode("", true),
              unref(qrcode) != "" ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(qrStatus)), 1)) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              _cache[8] || (_cache[8] = createBaseVNode("div", { style: { "width": "100%" } }, [
                createBaseVNode("div", {
                  style: { "font-size": "1.5rem" },
                  class: "text1"
                }, "登录"),
                createBaseVNode("div", {
                  style: { "font-size": "1rem" },
                  class: "text2"
                }, "使用云音乐账号")
              ], -1)),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_n_input, {
                  value: unref(name),
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(name) ? name.value = $event : name = $event),
                  class: "login-input",
                  clearable: true,
                  placeholder: "请输入手机号"
                }, {
                  prefix: withCtx(() => [
                    createVNode(_component_n_icon, { size: "1.2rem" }, {
                      default: withCtx(() => [
                        createVNode(_component_i_hugeicons_smart_phone_01)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_n_input, {
                  value: unref(key),
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(key) ? key.value = $event : key = $event),
                  class: "login-input",
                  type: unref(currentMethod) == "passwd" ? "password" : "text",
                  placeholder: unref(currentMethod) == "passwd" ? "请输入密码" : "请输入验证码"
                }, {
                  prefix: withCtx(() => [
                    createVNode(_component_n_icon, { size: "1.2rem" }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_i_hugeicons_square_lock_password, null, null, 512), [
                          [vShow, unref(currentMethod) == "passwd"]
                        ]),
                        withDirectives(createVNode(_component_i_hugeicons_message_lock_01, null, null, 512), [
                          [vShow, unref(currentMethod) == "sms"]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value", "type", "placeholder"]),
                withDirectives(createVNode(_component_n_button, { onClick: sendCaptcha$1 }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode("获取验证码")
                  ])),
                  _: 1
                }, 512), [
                  [vShow, unref(currentMethod) == "sms"]
                ])
              ]),
              createVNode(_component_n_button, {
                style: { "width": "100%" },
                onClick: login2
              }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("登录")
                ])),
                _: 1
              }),
              createVNode(_component_n_divider, { class: "login-divider" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("或者")
                ])),
                _: 1
              }),
              createBaseVNode("div", null, [
                withDirectives(createVNode(_component_n_icon, {
                  size: "1.5rem",
                  class: "login-icon login-method-icon",
                  onClick: _cache[2] || (_cache[2] = ($event) => {
                    isRef(currentMethod) ? currentMethod.value = "passwd" : currentMethod = "passwd";
                    isRef(key) ? key.value = "" : key = "";
                  })
                }, {
                  default: withCtx(() => [
                    createVNode(_component_i_hugeicons_square_lock_password)
                  ]),
                  _: 1
                }, 512), [
                  [vShow, unref(currentMethod) != "passwd"]
                ]),
                withDirectives(createVNode(_component_n_icon, {
                  size: "1.5rem",
                  class: "login-icon login-method-icon",
                  onClick: _cache[3] || (_cache[3] = ($event) => {
                    isRef(currentMethod) ? currentMethod.value = "sms" : currentMethod = "sms";
                    isRef(key) ? key.value = "" : key = "";
                  })
                }, {
                  default: withCtx(() => [
                    createVNode(_component_i_hugeicons_message_lock_01)
                  ]),
                  _: 1
                }, 512), [
                  [vShow, unref(currentMethod) != "sms"]
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7f23343"]]);
export {
  login as default
};
