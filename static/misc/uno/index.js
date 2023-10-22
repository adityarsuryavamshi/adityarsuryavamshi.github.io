"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_baseRandom.js
  var require_baseRandom = __commonJS({
    "node_modules/lodash/_baseRandom.js"(exports, module) {
      var nativeFloor = Math.floor;
      var nativeRandom = Math.random;
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      module.exports = baseRandom;
    }
  });

  // node_modules/lodash/_shuffleSelf.js
  var require_shuffleSelf = __commonJS({
    "node_modules/lodash/_shuffleSelf.js"(exports, module) {
      var baseRandom = require_baseRandom();
      function shuffleSelf(array, size) {
        var index = -1, length = array.length, lastIndex = length - 1;
        size = size === void 0 ? length : size;
        while (++index < size) {
          var rand = baseRandom(index, lastIndex), value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size;
        return array;
      }
      module.exports = shuffleSelf;
    }
  });

  // node_modules/lodash/_arrayShuffle.js
  var require_arrayShuffle = __commonJS({
    "node_modules/lodash/_arrayShuffle.js"(exports, module) {
      var copyArray = require_copyArray();
      var shuffleSelf = require_shuffleSelf();
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      module.exports = arrayShuffle;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseValues.js
  var require_baseValues = __commonJS({
    "node_modules/lodash/_baseValues.js"(exports, module) {
      var arrayMap = require_arrayMap();
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      module.exports = baseValues;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/values.js
  var require_values = __commonJS({
    "node_modules/lodash/values.js"(exports, module) {
      var baseValues = require_baseValues();
      var keys = require_keys();
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      module.exports = values;
    }
  });

  // node_modules/lodash/_baseShuffle.js
  var require_baseShuffle = __commonJS({
    "node_modules/lodash/_baseShuffle.js"(exports, module) {
      var shuffleSelf = require_shuffleSelf();
      var values = require_values();
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      module.exports = baseShuffle;
    }
  });

  // node_modules/lodash/shuffle.js
  var require_shuffle = __commonJS({
    "node_modules/lodash/shuffle.js"(exports, module) {
      var arrayShuffle = require_arrayShuffle();
      var baseShuffle = require_baseShuffle();
      var isArray = require_isArray();
      function shuffle2(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      module.exports = shuffle2;
    }
  });

  // Card.js
  var Card = class {
    constructor(id, color) {
      this.id = id;
      this.color = color;
    }
  };
  var ActionCard = class extends Card {
    constructor(id, color, action, metadata) {
      super(id, color);
      this.action = action;
      this.metadata = metadata;
    }
  };
  var NumberCard = class extends Card {
    constructor(id, color, number) {
      super(id, color);
      this.number = number;
    }
  };

  // Deck.js
  var import_shuffle = __toESM(require_shuffle(), 1);

  // constants.js
  var RED = "RED";
  var ORANGE = "ORANGE";
  var GREEN = "GREEN";
  var BLUE = "BLUE";
  var DRAW_4 = "DRAW_4";
  var DRAW_2 = "DRAW_2";
  var SKIP = "SKIP";
  var REVERSE = "REVERSE";
  var WILD = "WILD";
  var COLOR_CHANGE = "COLOR_CHANGE";
  var GAME_DIRECTION_CLOCKWISE = "GAME_DIRECTION_CLOCKWISE";
  var GAME_DIRECTION_ANTI_CLOCKWISE = "GAME_DIRECTION_ANTI_CLOCKWISE";

  // Deck.js
  var Deck = class {
    constructor() {
      this.cards = [
        new NumberCard(1, RED, 0),
        new NumberCard(2, RED, 1),
        new NumberCard(3, RED, 2),
        new NumberCard(4, RED, 3),
        new NumberCard(5, RED, 4),
        new NumberCard(6, RED, 5),
        new NumberCard(7, RED, 6),
        new NumberCard(8, RED, 7),
        new NumberCard(9, RED, 8),
        new NumberCard(10, RED, 9),
        new ActionCard(11, RED, SKIP),
        new ActionCard(12, RED, REVERSE),
        new ActionCard(13, RED, DRAW_2),
        new ActionCard(14, WILD, COLOR_CHANGE),
        new NumberCard(15, ORANGE, 0),
        new NumberCard(16, ORANGE, 1),
        new NumberCard(17, ORANGE, 2),
        new NumberCard(18, ORANGE, 3),
        new NumberCard(19, ORANGE, 4),
        new NumberCard(20, ORANGE, 5),
        new NumberCard(21, ORANGE, 6),
        new NumberCard(22, ORANGE, 7),
        new NumberCard(23, ORANGE, 8),
        new NumberCard(24, ORANGE, 9),
        new ActionCard(25, ORANGE, SKIP),
        new ActionCard(26, ORANGE, REVERSE),
        new ActionCard(27, ORANGE, DRAW_2),
        new ActionCard(28, WILD, COLOR_CHANGE),
        new NumberCard(29, GREEN, 0),
        new NumberCard(30, GREEN, 1),
        new NumberCard(31, GREEN, 2),
        new NumberCard(32, GREEN, 3),
        new NumberCard(33, GREEN, 4),
        new NumberCard(34, GREEN, 5),
        new NumberCard(35, GREEN, 6),
        new NumberCard(36, GREEN, 7),
        new NumberCard(37, GREEN, 8),
        new NumberCard(38, GREEN, 9),
        new ActionCard(39, GREEN, SKIP),
        new ActionCard(40, GREEN, REVERSE),
        new ActionCard(41, GREEN, DRAW_2),
        new ActionCard(42, WILD, COLOR_CHANGE),
        new NumberCard(43, BLUE, 0),
        new NumberCard(44, BLUE, 1),
        new NumberCard(45, BLUE, 2),
        new NumberCard(46, BLUE, 3),
        new NumberCard(47, BLUE, 4),
        new NumberCard(48, BLUE, 5),
        new NumberCard(49, BLUE, 6),
        new NumberCard(50, BLUE, 7),
        new NumberCard(51, BLUE, 8),
        new NumberCard(52, BLUE, 9),
        new ActionCard(53, BLUE, SKIP),
        new ActionCard(54, BLUE, REVERSE),
        new ActionCard(55, BLUE, DRAW_2),
        new ActionCard(56, WILD, COLOR_CHANGE),
        new NumberCard(57, RED, 1),
        new NumberCard(58, RED, 2),
        new NumberCard(59, RED, 3),
        new NumberCard(60, RED, 4),
        new NumberCard(61, RED, 5),
        new NumberCard(62, RED, 6),
        new NumberCard(63, RED, 7),
        new NumberCard(64, RED, 8),
        new NumberCard(65, RED, 9),
        new ActionCard(66, RED, SKIP),
        new ActionCard(67, RED, REVERSE),
        new ActionCard(68, RED, DRAW_2),
        new ActionCard(69, WILD, DRAW_4),
        new NumberCard(70, ORANGE, 1),
        new NumberCard(71, ORANGE, 2),
        new NumberCard(72, ORANGE, 3),
        new NumberCard(73, ORANGE, 4),
        new NumberCard(74, ORANGE, 5),
        new NumberCard(75, ORANGE, 6),
        new NumberCard(76, ORANGE, 7),
        new NumberCard(77, ORANGE, 8),
        new NumberCard(78, ORANGE, 9),
        new ActionCard(79, ORANGE, SKIP),
        new ActionCard(80, ORANGE, REVERSE),
        new ActionCard(81, ORANGE, DRAW_2),
        new ActionCard(82, WILD, DRAW_4),
        new NumberCard(83, GREEN, 1),
        new NumberCard(84, GREEN, 2),
        new NumberCard(85, GREEN, 3),
        new NumberCard(86, GREEN, 4),
        new NumberCard(87, GREEN, 5),
        new NumberCard(88, GREEN, 6),
        new NumberCard(89, GREEN, 7),
        new NumberCard(90, GREEN, 8),
        new NumberCard(91, GREEN, 9),
        new ActionCard(92, GREEN, SKIP),
        new ActionCard(93, GREEN, REVERSE),
        new ActionCard(94, GREEN, DRAW_2),
        new ActionCard(95, WILD, DRAW_4),
        new NumberCard(96, BLUE, 1),
        new NumberCard(97, BLUE, 2),
        new NumberCard(98, BLUE, 3),
        new NumberCard(99, BLUE, 4),
        new NumberCard(100, BLUE, 5),
        new NumberCard(101, BLUE, 6),
        new NumberCard(102, BLUE, 7),
        new NumberCard(103, BLUE, 8),
        new NumberCard(104, BLUE, 9),
        new ActionCard(105, BLUE, SKIP),
        new ActionCard(106, BLUE, REVERSE),
        new ActionCard(107, BLUE, DRAW_2),
        new ActionCard(108, WILD, DRAW_4)
      ];
      this._shuffleCards();
    }
    draw(n) {
      const cardsToDeal = [];
      for (let i = 0; i < n; i++) {
        cardsToDeal.push(this.cards.pop());
      }
      return cardsToDeal;
    }
    discard(card) {
      const indexToInsert = Math.floor(Math.random() * (this.cards.length + 1));
      this.cards.splice(indexToInsert, 0, card);
    }
    _shuffleCards() {
      this.cards = (0, import_shuffle.default)(this.cards);
    }
    containsCard(cardId) {
      return this.cards.filter((c) => c.id === cardId).length === 1;
    }
  };

  // Hand.js
  var Hand = class {
    constructor(cards) {
      this.cards = cards;
    }
    /**
     * Get Playable Card for the given Card
     */
    getPlayableCards(card) {
      const playableCards = [];
      for (let i = 0; i < this.cards.length; i++) {
        const currentCard = this.cards[i];
        (currentCard === void 0 || card === void 0) && console.log("Something weird", this.cards, currentCard, card);
        if (this.isPlayable(card, currentCard)) {
          playableCards.push(currentCard);
        }
      }
      return playableCards;
    }
    /**
     * Returns cardB if it's playable against cardA, otherwise adds it to the hand
     */
    playOrAdd(cardA, cardB) {
      (cardA === void 0 || cardB === void 0) && console.log("Is Deck Empty??");
      if (this.isPlayable(cardA, cardB)) {
        return cardB;
      }
      this.addCards([cardB]);
      return null;
    }
    /**
     * Returns true if cardB is playable against cardA, false otherwise
     */
    isPlayable(cardA, cardB) {
      if (!cardA || !cardB) {
        console.warn("Card A or Card B is not present", cardA, cardB);
        return false;
      }
      if (cardB.color === WILD) {
        return true;
      }
      let colorToMatch, numberToMatch;
      if (cardA.color === WILD) {
        if (cardA?.metadata?.color) {
          colorToMatch = cardA.metadata.color;
        } else {
          console.error("Undefined color to change to with a WILD card", cardA);
        }
      } else {
        colorToMatch = cardA.color;
      }
      if (cardA.constructor === NumberCard) {
        numberToMatch = cardA.number;
      }
      return cardB.color === colorToMatch || numberToMatch && cardB?.number === numberToMatch;
    }
    dropCard(cardId) {
      for (let i = 0; i < this.cards.length; i++) {
        const presentCard = this.cards[i];
        if (presentCard.id === cardId) {
          return this.cards.splice(i, 1)[0];
        }
      }
      return null;
    }
    addCards(cards) {
      this.cards.push(...cards);
    }
  };

  // Player.js
  var Player = class {
    constructor(id, hand) {
      this.id = id;
      this.hand = hand;
    }
    hasWon() {
      return this.hand.cards.length === 0;
    }
    play(cardOnTop, deck) {
      if (!cardOnTop) {
        console.error("Card on top is not present");
        return null;
      }
      let playableCards = this.hand.getPlayableCards(cardOnTop);
      let cardToPlay;
      if (playableCards.length === 0) {
        cardToPlay = this.hand.playOrAdd(cardOnTop, deck.draw(1)[0]);
        this._setColorIfWildCard(cardToPlay);
        return cardToPlay;
      }
      cardToPlay = playableCards[0];
      this._setColorIfWildCard(cardToPlay);
      return this.hand.dropCard(cardToPlay.id);
    }
    _setColorIfWildCard(card) {
      if (card && card.color === WILD) {
        card.metadata = { color: BLUE };
      }
    }
    addCards(cards) {
      this.hand.addCards(cards.filter((c) => c !== void 0));
    }
  };

  // Game.js
  var Game = class {
    constructor(noOfPlayers, gameConfig) {
      this.noOfPlayers = noOfPlayers;
      this.deck = new Deck();
      this.players = [];
      for (let i = 0; i < noOfPlayers; i++) {
        const handForPlayer = new Hand(this.deck.draw(gameConfig?.initialCards ?? 7));
        this.players.push(new Player(i, handForPlayer, gameConfig?.playerConfig));
      }
      this.gameDirection = GAME_DIRECTION_CLOCKWISE;
      this.cardOnTop = this.deck.draw(1)[0];
      while (this.cardOnTop.color === WILD) {
        this.deck.discard(this.cardOnTop);
        this.cardOnTop = this.deck.draw(1)[0];
      }
      this.currentPlayerIdx = 0;
      this.iterationCount = 0;
      this.actionPlayedForActionCard = false;
    }
    gameComplete() {
      return this.players.filter((p) => p.hasWon()).length >= this.noOfPlayers - 1;
    }
    nextPlayer() {
      let nextIdx;
      if (this.gameDirection === GAME_DIRECTION_CLOCKWISE) {
        nextIdx = (this.currentPlayerIdx + 1) % this.noOfPlayers;
        while (this.players[nextIdx].hasWon()) {
          nextIdx = (nextIdx + 1) % this.noOfPlayers;
        }
      } else {
        nextIdx = this.currentPlayerIdx - 1 < 0 ? this.noOfPlayers - 1 : this.currentPlayerIdx - 1;
        while (this.players[nextIdx].hasWon()) {
          nextIdx = nextIdx - 1 < 0 ? this.noOfPlayers - 1 : nextIdx - 1;
        }
      }
      this.currentPlayerIdx = nextIdx;
      return this.currentPlayerIdx;
    }
    playTurn() {
      this.iterationCount += 1;
      const currentPlayer = this.players[this.currentPlayerIdx];
      const currentCardOnTop = this.cardOnTop;
      const currentDirection = this.gameDirection;
      let cardPlayed;
      if (currentCardOnTop.constructor === NumberCard || currentCardOnTop.constructor === ActionCard && currentCardOnTop.action === COLOR_CHANGE || currentCardOnTop.constructor === ActionCard && this.actionPlayedForActionCard) {
        cardPlayed = currentPlayer.play(currentCardOnTop, this.deck);
        if (cardPlayed) {
          this.deck.discard(currentCardOnTop);
          this.cardOnTop = cardPlayed;
          this.actionPlayedForActionCard = false;
        }
      } else {
        switch (currentCardOnTop.action) {
          case SKIP:
            break;
          case REVERSE:
            this.gameDirection = currentDirection === GAME_DIRECTION_CLOCKWISE ? GAME_DIRECTION_ANTI_CLOCKWISE : GAME_DIRECTION_CLOCKWISE;
            break;
          case DRAW_2:
            currentPlayer.addCards(this.deck.draw(2));
            break;
          case DRAW_4:
            currentPlayer.addCards(this.deck.draw(4));
            break;
          default:
            console.error("Invalid Action for card", currentCardOnTop);
            break;
        }
        this.actionPlayedForActionCard = true;
      }
      this.nextPlayer();
      return {
        gameDirection: currentDirection,
        currentPlayer: currentPlayer.id,
        cardOnTop: currentCardOnTop,
        cardPlayed,
        playedActionThisTurn: this.actionPlayedForActionCard,
        newGameDirection: this.gameDirection,
        newCardOnTop: this.cardOnTop,
        nextPlayer: this.currentPlayerIdx,
        playerStates: this.players.map((p) => {
          return {
            id: p.id,
            won: p.hasWon(),
            cardsInHand: p.hand.cards.length
          };
        }),
        deckLength: this.deck.cards.length,
        totalCards: this.players.reduce((s, c) => s + c.hand.cards.length, 0) + this.deck.cards.length + 1
      };
    }
  };

  // index.js
  var simulateGame = (noOfPlayers, iterationCount) => {
    const gameIterations = [];
    for (let i = 0; i < iterationCount; i++) {
      const game = new Game(noOfPlayers);
      while (!game.gameComplete()) {
        game.playTurn();
      }
      gameIterations.push(game.iterationCount);
    }
    return gameIterations;
  };
  window.simulateGame = simulateGame;
})();
