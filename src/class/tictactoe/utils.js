const { MessageEmbed } = require('discord.js');

function generateEmbed(title, description, color, timestamp, fields, image, thumnail) {
    const embed = new MessageEmbed()
        .setColor(color);
    if (description !== false) embed.setDescription(description);
    if (title !== false) embed.setTitle(title);
    if (timestamp === true) embed.setTimestamp();
    if (fields !== false) embed.addFields(fields);
    if (image !== false) embed.setImage(image);
    if (thumnail !== false) embed.setThumbnail(thumnail);
    return embed;
}

function commandUsage(command) {
    return `**Bí danh:** ${command.aliases || 'none'}\n**Chú thích:** ${command.description}\n**Thời gian hồi:** ${command.cooldown || 3}\n**Sử dụng:** ${command.usage || 'none'}\n**Sub Command:**\n${command.subcommands || 'none'}\n**Ví dụ:**\n${command.examples || 'none'}`;
}

const inGame = [];

module.exports.generateEmbed = generateEmbed;
module.exports.commandUsage = commandUsage;
module.exports.inGame = inGame;