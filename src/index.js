"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatBot = exports.StarboardClient = exports.pagination = exports.GiveawayClient = void 0;
// giveaways
var giveaways_1 = require("./giveaways");
Object.defineProperty(exports, "GiveawayClient", { enumerable: true, get: function () { return giveaways_1.GiveawayClient; } });
// pagination
var pagination_1 = require("./pagination");
Object.defineProperty(exports, "pagination", { enumerable: true, get: function () { return pagination_1.pagination; } });
// starboard
var starboard_1 = require("./starboard");
Object.defineProperty(exports, "StarboardClient", { enumerable: true, get: function () { return starboard_1.StarboardClient; } });
// functions
var chatBot_1 = require("./functions/chatBot");
Object.defineProperty(exports, "chatBot", { enumerable: true, get: function () { return chatBot_1.chatBot; } });
//# sourceMappingURL=index.js.map