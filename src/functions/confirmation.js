const { Permissions } = require('discord.js');

async function confirmation(message, validReactions, time = 60000) {
    if (!message)
        throw new ReferenceError('modelvnn-package => "message" không được xác định');
    if (!validReactions || validReactions.length !== 2)
        throw new ReferenceError(
            "modelvnn-package => Nội dung biểu mẫu không hợp lệ [validReactions]"
        );
    if (typeof time !== "number")
        throw new SyntaxError('modelvnn-package => typeof "time" phải là một số');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
        return console.log(
            `modelvnn-package err: Discord Client cần "MANAGE_MESSAGES" để hoạt động bình thường.`
        );

    for (const reaction of validReactions) await message.react(reaction);

    const filter = (reaction, user) =>
        validReactions.includes(reaction.emoji.name) &&
        user.id === message.author.id;

    return message
        .awaitReactions({ filter, max: 1, time: time })
        .then((collected) => collected.first() && collected.first().emoji.name);
}

module.exports = confirmation;
