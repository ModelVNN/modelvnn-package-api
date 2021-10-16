async function chatBot(message, input, uuid) {
    if (!message)
        throw new ReferenceError('modelvnn-package => "message" không được xác định');
    if (!input) throw new ReferenceError('modelvnn-package => "input" không được xác định');
    const fetch = require("node-fetch");
    fetch(
        `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(
            input
        )}&uid=${uuid || message.author.id}`
    )
        .then((res) => res.json())
        .then(async (json) => {
            return message.reply(json.response);
        });
}
module.exports = chatBot;
