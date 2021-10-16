# modelvnn-package-api
một package tiếng Việt do ModelVNN tạo ra

Một api đơn giản để định cấu hình và nâng cao các cách mã hóa bot bất hòa của bạn. Tương thích với discord.js v13.

<div align="center">
  <p>
    <a href="https://nodei.co/npm/modelvnn-package
/"><img src="https://nodei.co/npm/modelvnn-package.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

## 🛠 Các lệnh

-   [ReactionPages] - phân trang đơn giản để làm cho "MessageEmbed" của bạn có thể tương tác được.
-   [Confirmation] - Một bộ thu thập phản ứng trả về biểu tượng cảm xúc đầu tiên được thu thập, có thể được sử dụng làm lời nhắc xác nhận.
-   [timeout] - Giúp việc xóa tin nhắn theo nhu cầu của bạn dễ dàng hơn
-   [tictactoe] - Trò chơi TicTacToe bây giờ có thể chơi được trong discord.
-   [GiveawayClient] - Giveaway Client, cách dễ dàng để quản lý giveaway của bạn
-   [chatBot] - Một chatbot dễ dàng không cần api (chỉ hỗ trợ tiếng Anh)

nhiều tính năng sắp ra mắt! (hoặc tui lười tui ko lm nx :v)

## ✈ Import

```javascript
// Dùng Node.js `require()`
const modelpack = require("modelvnn-package");
............
// Dùng ES6 import
import modelpack from "modelvnn-package";
```

## 🙋‍♂️ Support

Hãy tham gia máy chủ hỗ trợ discord -> https://discord.io/peachlovervietnam

---

## 🔧 Cách dùng

---

## ReactionPages

#### Ví dụ :

```js
const modelpack = require("modelvnn-package");
const ReactionPages = modelpack.ReactionPages;

const { MessageEmbed } = require("discord.js");

const embed1 = new MessageEmbed().setTitle("1");

const embed2 = new MessageEmbed().setTitle("2");

const pages = [embed1, embed2];

const textPageChange = true;

const emojis = ["⏪", "⏩"];

const time = 30000;

ReactionPages(msg, pages, textPageChange, emojis, time);
```

#### Preview trong danh sách nhạc :

![preview](https://imgur.com/wduFcGP.png)

---

## Confirmation

```js
const { confirmation } = require("modelvnn-package");
message.channel.send("Confirmation for banning members").then(async (msg) => {
    const emoji = await confirmation(msg, ["✅", "❌"], 30000);
    if (emoji === "✅") {
        msg.delete();
        guildMember.ban();
    }
    if (emoji === "❌") {
        msg.delete();
    }
});
```

---

## timeout

```js
const { timeout } = require("modelvnn-package");

// ví dụ

const messageToDelete = await message.channel.send("Hello There 👋");

timeout(message, messageToDelete, 5000);
```

### Preview

![preview](https://i.imgur.com/EV8WZja.gif)

---

## chatBot

```js
const { chatBot } = require("modelvnn-package");

/** @parameters
 * message, message.channel
 * input, input to give
 */


chatBot(message, args.join(" "));
```

### Preview

![preview](https://imgur.com/DeThtZJ.png)

---

## tictactoe

```js
//importing
const { tictactoe } = require("modelvnn-package");

// parameters
/**
 * @name tictactoe
 * @param {Object} options options
 * @param {any} [options.message] parameter used for message event
 * @param {any} [options.player_two] second player in the game.
 */

// start the game

var game = new tictactoe({
    message: message,
    player_two: message.mentions.members.first(),
});
```

### Preview

![preview](https://imgur.com/lxKhF1b.png)

---

---

# GiveawayClient

## Initialising the client

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { GiveawayClient } = require("modelvnn-package");

  /**
   * @name GiveawayClient
   * @kind constructor
   * @param {Client} client
   * @param {Object} options Options
   * @param {String} [options.mongoURI] mongodb connection string
   * @param {String} [options.emoji] emoji for reaction (must be a unicode)
   * @param {String} [options.defaultColor] default colors for giveaway embeds
   * @description Initiating the giveaway client
   */

const giveaway = new GiveawayClient(client, {
  mongoURI?
  emoji?
  defaultColor?
}); //giveaway cần phải có mongoose

module.exports = giveaway;
```

## Methods

### start

```js
/**
 * @method
 * @param {Object} options options
 * @param {TextChannel} [options.channel] Channel for the giveaway to be in
 * @param {Number} [options.time] Duration of this giveaway
 * @param {User} [options.hostedBy] Person that hosted the giveaway
 * @param {String} [options.description] Description of the giveaway
 * @param {Number} [options.winners] Amount of winners for the giveaway
 * @param {String} [options.prize] Prize for the  giveaway
 */
```

### end

```js
/**
 * @method
 * @param {String} MessageID Message ID for the giveaway
 * @param {Boolean} getWinner Choose a winner?
 * @description End a giveaway, choose a winner (optional)
 */
```

### reroll

```js
/**
 * @method
 * @param {String} channel channel of the giveaway
 * @param {String} id message id
 * @param {Number} winners amount of winners
 * @description Change the winners for a giveaway!
 */
```

### getCurrentGiveaways

```js
/**
 * @method
 * @param {Boolean} activatedOnly display activated giveaways only?
 * @param {Boolean} all display giveaways of  all guilds?
 * @param {Message} message message if (all = false)
 * @description Get data on current giveaways hosted by the bot
 */
```

### removeCachedGiveaways

```js
/**
 * @method
 * @param {Boolean} all Get data from all guilds?
 * @param {String} guildID guild id if all=false
 * @description Removes (activated = false) giveaways
 */
```

# reconDB

## 1. Importing the package

```js
const { modelvnnDB } = require("modelvnn-package");
// or
import { modelvnnDB } from "modelvnn-package";
```

## 2. Establishing and exporting modelvnnDB

```js
const db = new modelvnnDB(client, {
    uri: "link kết nối mongodb của bạn",
});

module.exports = db;
```

## 3. Ví dụ về cách sử dụng nó

```js
const db = require("./db.js"); // replace db.js with the file path to modelvnnDB

db.set("numbers", "123");
```

## Methods

### .set

```js
// saves data to database
db.set("key", "value");
```

### .get

```js
// gets value from key
db.get("key"); // returns => value
```

### .has

```js
// returns boolean
db.has("key"); // returns => true
```

### .delete

```js
// deletes data
db.delete("key");

// checking for data
db.has("key"); // returns => false
```

### .collection

```js
//returns the cached data
console.log(modelvnnDB.collection())
```
