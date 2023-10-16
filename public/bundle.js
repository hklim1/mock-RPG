/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rpg_Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpg/Character */ \"./src/rpg/Character.ts\");\n\nconst submitBtn = document.getElementById(\"submit-button\");\nsubmitBtn?.addEventListener('click', () => {\n    const character = _rpg_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createRPGCharacter();\n    character.showItems();\n    character.inventoryHTMLElement();\n});\n\n\n//# sourceURL=webpack://w8d4-homework/./src/index.ts?");

/***/ }),

/***/ "./src/rpg/Armor.ts":
/*!**************************!*\
  !*** ./src/rpg/Armor.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Armor)\n/* harmony export */ });\n/* harmony import */ var _InventoryItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryItem */ \"./src/rpg/InventoryItem.ts\");\n\nclass Armor extends _InventoryItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    _defense;\n    constructor(name, description, price, defense) {\n        super(name, description, price);\n        this._defense = defense;\n    }\n    get armorDefense() {\n        return this._defense;\n    }\n    set armorDefense(defense) {\n        if (defense < 0) {\n            throw new Error('Armor defense cannot be negative. Please enter a valid number.');\n        }\n        else\n            (this._defense = defense);\n    }\n}\n\n\n//# sourceURL=webpack://w8d4-homework/./src/rpg/Armor.ts?");

/***/ }),

/***/ "./src/rpg/Character.ts":
/*!******************************!*\
  !*** ./src/rpg/Character.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _Inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inventory */ \"./src/rpg/Inventory.ts\");\n\n\nclass Character {\n    _id;\n    _name;\n    _archtype;\n    // private _fightingStyle: 'range' | 'melee'\n    _inventory;\n    constructor(name, archtype) {\n        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        this._name = name;\n        this._archtype = archtype;\n        // this._fightingStyle = fightingStyle\n        this._inventory = new _Inventory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n    get characterInventory() {\n        return this._inventory.inventory;\n    }\n    get characterInven() {\n        return this._inventory;\n    }\n    get characterArchtype() {\n        return `${this._name}'s archtype is: ${this._archtype}`;\n    }\n    set characterArchtype(archtype) {\n        this._archtype = archtype;\n    }\n    // public get characterFightingStyle(){\n    //     return `${this._fightingStyle}`\n    // }\n    // public set characterFightingStyle(fightingStyle: \"range\" | \"melee\"){\n    //     this._fightingStyle = fightingStyle\n    // }\n    static createRPGCharacter() {\n        const name = document.getElementById(\"create-character-name\").value;\n        if (name == '') {\n            throw new Error('Please enter a valid name.');\n        }\n        const archtype = document.getElementById(\"race-archtype\").value;\n        if (archtype == '') {\n            throw new Error('Please enter a valid archtype.');\n        }\n        return new Character(name, archtype);\n    }\n    addToInventory(obj) {\n        this._inventory.inventory.push(obj);\n    }\n    inventoryValue() {\n        let totalValue = 0;\n        this._inventory.inventory.forEach(currentItem => {\n            totalValue += currentItem.itemPrice;\n        });\n        return totalValue;\n    }\n    printInventory() {\n        this._inventory.inventory.forEach(currentItem => {\n            console.log(currentItem);\n        });\n    }\n    inventoryHTMLElement() {\n        const characterDiv = document.getElementById('character-stuff');\n        if (characterDiv == null) {\n            return;\n        }\n        characterDiv.innerHTML = ''; // need this line to restart with a fresh slate, otherwise will add repeats\n        let characterH = document.createElement('h2');\n        characterH.innerText = `${this._name}'s Inventory`;\n        const characterInventoryDiv = document.createElement('div');\n        characterInventoryDiv.id = 'character-inventory';\n        characterDiv.appendChild(characterH);\n        characterDiv.appendChild(characterInventoryDiv);\n        this._inventory.updateInventory();\n        console.log(characterDiv);\n    }\n    showItems() {\n        this._inventory.showItems();\n    }\n}\n// DRIVER CODE\n// const milad = new Character('milad', 'barbarian', 'melee')\n// const sword = new Weapon('sword', 'sharp stick', 20.99, 10)\n// const inventory1 = new Inventory([sword, bow])\n// milad.addToInventory(sword)\n// milad.addToInventory(bow)\n// milad.printInventory()\n// console.log(\"BREAK TIME\")\n// milad.removeFromInventory(sword)\n// milad.printInventory()\n\n\n//# sourceURL=webpack://w8d4-homework/./src/rpg/Character.ts?");

/***/ }),

/***/ "./src/rpg/Inventory.ts":
/*!******************************!*\
  !*** ./src/rpg/Inventory.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Inventory)\n/* harmony export */ });\n/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weapon */ \"./src/rpg/Weapon.ts\");\n/* harmony import */ var _Armor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Armor */ \"./src/rpg/Armor.ts\");\n\n\nclass Inventory {\n    _items;\n    constructor() {\n        this._items = Inventory.createRPGItems();\n    }\n    get inventory() {\n        return this._items;\n    }\n    set inventory(items) {\n        this._items = items;\n    }\n    showItems() {\n        const shopDiv = document.getElementById('shop-stuff');\n        let shopH = document.createElement('h2');\n        shopH.innerText = 'Shop';\n        if (shopDiv == null) {\n            return;\n        }\n        shopDiv.innerHTML = '';\n        shopDiv?.appendChild(shopH);\n        this._items.forEach(currentItem => {\n            let itemP = document.createElement('p');\n            itemP.innerText = `${currentItem.item}`;\n            shopDiv?.appendChild(itemP);\n        });\n    }\n    removeAllFromInventory(item) {\n        this._items = this._items.filter((currentItem) => currentItem.itemName != item.itemName);\n    }\n    removeSpecifiedQuantity(quantity, item) {\n        let count = 0;\n        this._items = this._items.filter(i => {\n            if (i === item && count < quantity) {\n                count++;\n                return false;\n            }\n            return true;\n        });\n    }\n    displayInventory() {\n        const characterInventoryDiv = document.getElementById('character-inventory');\n        if (characterInventoryDiv == null) {\n            return;\n        }\n        characterInventoryDiv.innerHTML = '';\n        this._items.forEach(currentItem => {\n            console.log(currentItem);\n            const p = document.createElement('p');\n            p.innerText = `${currentItem.item}`;\n            characterInventoryDiv.appendChild(p);\n            let removeOneBtn = document.createElement('button');\n            removeOneBtn.innerText = `-1`;\n            removeOneBtn.addEventListener('click', () => {\n                this.removeSpecifiedQuantity(1, currentItem);\n                this.displayInventory();\n            });\n            let removeAllBtn = document.createElement('button');\n            removeAllBtn.innerText = 'Remove All';\n            removeAllBtn.addEventListener('click', () => {\n                this.removeAllFromInventory(currentItem);\n                this.displayInventory();\n            });\n            characterInventoryDiv.appendChild(removeOneBtn);\n            characterInventoryDiv.appendChild(removeAllBtn);\n        });\n    }\n    updateInventory() {\n        if (this._items.length == 0) {\n            return 'No items in inventory';\n        }\n        else {\n            this.displayInventory();\n        }\n    }\n    static createRPGItems() {\n        const sword = new _Weapon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('sword', 'sharp stick', 20.99, 10);\n        const shield = new _Armor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('shield', 'big block', 15.00, 10);\n        return [sword, shield];\n    }\n}\n\n\n//# sourceURL=webpack://w8d4-homework/./src/rpg/Inventory.ts?");

/***/ }),

/***/ "./src/rpg/InventoryItem.ts":
/*!**********************************!*\
  !*** ./src/rpg/InventoryItem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InventoryItem)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nclass InventoryItem {\n    _id;\n    _name;\n    _description;\n    _price;\n    constructor(name, description, price) {\n        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        this._name = name;\n        this._description = description;\n        this._price = price;\n    }\n    get itemId() {\n        return this._id;\n    }\n    get item() {\n        return `ID#${this._id} ${this._name}: ${this._description}. (${this._price})`;\n    }\n    get itemName() {\n        return this._name;\n    }\n    get itemDesc() {\n        return `\"${this._name}: ${this._description}\"`;\n    }\n    set itemDesc(desc) {\n        this._description = desc;\n    }\n    get itemPrice() {\n        return this._price;\n    }\n    set itemPrice(price) {\n        this._price = price >= 0 ? price : 0;\n    }\n}\n\n\n//# sourceURL=webpack://w8d4-homework/./src/rpg/InventoryItem.ts?");

/***/ }),

/***/ "./src/rpg/Weapon.ts":
/*!***************************!*\
  !*** ./src/rpg/Weapon.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weapon)\n/* harmony export */ });\n/* harmony import */ var _InventoryItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryItem */ \"./src/rpg/InventoryItem.ts\");\n\nclass Weapon extends _InventoryItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    _damage;\n    constructor(name, description, price, damage) {\n        super(name, description, price);\n        this._damage = damage;\n    }\n    get weaponDamage() {\n        return this._damage;\n    }\n    set weaponDamage(damage) {\n        if (damage < 0) {\n            throw new Error('Weapon damage cannot be negative. Please enter a valid number.');\n        }\n        else\n            (this._damage = damage);\n    }\n}\n\n\n//# sourceURL=webpack://w8d4-homework/./src/rpg/Weapon.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://w8d4-homework/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://w8d4-homework/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://w8d4-homework/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://w8d4-homework/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://w8d4-homework/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://w8d4-homework/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;