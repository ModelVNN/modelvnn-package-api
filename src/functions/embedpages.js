const { Message, MessageEmbed, Permissions } = require("discord.js");

/**
 *
 * @param {Message} message
 * @param {*} pages
 * @param {*} pageTravel
 * @param {*} emoji
 * @param {*} time
 */
async function EmbedPages(
    message,
    pages,
    pageTravel = false,
    emoji = ["⏪", "⏩"],
    time = 60000
) {
    if (!message)
        throw new ReferenceError('modelvnn-package => "message" không được xác định');
    if (!pages || typeof pages !== "object")
        throw new SyntaxError("modelvnn-package => Nội dung biểu mẫu không hợp lệ [pages]");
    if (!emoji || emoji.length !== 2)
        throw new SyntaxError("modelvnn-package => Nội dung biểu mẫu [emoji] không hợp lệ");
    if (!time) throw new ReferenceError('modelvnn-package => "time" không được xác định');
    if (typeof time !== "number")
        throw new ReferenceError('modelvnn-package => typeof "time" phải là một số');
    if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        message.channel.send({ embeds: [pages[0]] }).then(async (msg) => {
            const ms1 = await message.channel.send(`trang 1 / ${pages.length}`);
            await msg.react(emoji[0]);
            await msg.react(emoji[1]);

            const filter = (reaction, user) =>
                emoji.includes(reaction.emoji.name) &&
                user.id === message.author.id;

            const collector = msg.createReactionCollector({ filter, time });
            let i = 0;
            collector.on("collect", async (reaction, user) => {
                reaction.users.remove(user);
                switch (reaction.emoji.name) {
                    case emoji[0]:
                        if (i === 0) return;
                        i--;
                        ms1.edit(`trang ${i + 1} / ${pages.length}`);
                        break;
                    case emoji[1]:
                        if (i === pages.length - 1) return;
                        i++;
                        ms1.edit(`trang ${i + 1} / ${pages.length}`);
                        break;
                }
                await msg.edit({ embeds: [pages[i]] });
            });
            collector.on("end", () => msg.reactions.removeAll());
            if (pageTravel === true) {
                const filter = x => x.author.id === message.author.id;
                message.channel
                    .createMessageCollector({ filter, time, errors: ["time"] }
                    )
                    .on("collect", async (data) => {
                        const a = data.content;
                        if (isNaN(a)) return;
                        data.delete();
                        const b = parseInt(a);
                        if (b > 0 && b - 1 <= pages.length) {
                            i = b - 1;
                            msg.edit({ embeds: [pages[b - 1]] });
                            ms1.edit(`Page ${b} / ${pages.length}`);
                        }
                    });
            }
            return msg;
        });
    } else {
        message.channel.send({ embeds: [pages[0]] }).then(async (msg) => {
            const ms1 = await message.channel.send(`trang 1 / ${pages.length}`);
            await msg.react(emoji[0]);
            await msg.react(emoji[1]);

            const filter = (reaction, user) =>
                emoji.includes(reaction.emoji.name) &&
                user.id === message.author.id;

            const collector = msg.createReactionCollector({ filter, time });
            let i = 0;
            collector.on("collect", (reaction, user) => {
                switch (reaction.emoji.name) {
                    case emoji[0]:
                        if (i === 0) return;
                        i--;
                        ms1.edit(`trang ${i + 1} / ${pages.length}`);
                        break;
                    case emoji[1]:
                        if (i === pages.length - 1) return;
                        ms1.edit(`trang ${i + 1} / ${pages.length}`);
                        i++;
                        break;
                }
                msg.edit({ embeds: [pages[b - 1]] });
            });
            collector.on("end", () => msg.reactions.removeAll());
            if (pageTravel === true) {
                const filter = x => x.author.id === message.author.id;
                message.channel
                    .createMessageCollector({ filter, time, errors: ["time"] }
                    )
                    .on("collect", async (data) => {
                        const a = data.content;
                        if (isNaN(a)) return;
                        const b = parseInt(a);
                        if (b > 0 && b - 1 <= pages.length) {
                            i = b - 1;
                            msg.edit({ embeds: [pages[b - 1]] });
                            ms1.edit(`trang ${b} / ${pages.length}`);
                        }
                    })
                    .catch((err) => msg.reactions.removeAll());
            }
            return msg;
        });
    }
}

module.exports = EmbedPages;
