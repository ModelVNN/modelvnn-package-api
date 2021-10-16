const { Permissions } = require('discord.js');

async function timeout(message, msgToDelete, time = 10000) {
    if(!message) throw new ReferenceError('modelvnn-package => "message" không được xác định')
    if(typeof time !== "number") throw new SyntaxError('modelvnn-package => typeof "time" phải là số')
    if(!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return console.log(`modelvnn-package err: Discord Client cần "MANAGE_MESSAGES" để hoạt động bình thường.`)
    msgToDelete.react('🗑')
    const filter = (reaction, user) => {
        return reaction.emoji.name === '🗑' && user.id === message.author.id;
    };
    
    msgToDelete.awaitReactions({ filter, max: 1, time: time, errors: ['time'] })
        .then(collected => {
            msgToDelete.delete()
        })
        .catch(err => {
            msgToDelete.reactions.removeAll()
        });
}

module.exports = timeout;