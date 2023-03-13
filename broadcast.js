module.exports = function () {
    const log = require("./logger");
    try {
        var bc = ["https://tanjiro-api.onrender.com", "https://tanjiro-ping.tanjirokamado0806.repl.co", "https://simsimi-api.tanjirokamado0806.repl.co", "https://www.npmjs.com/package/tanjiro-ping-bot", "https://www.npmjs.com/package/tanjiro-simsimi-teach"],
            i = Math.floor(Math.random() * bc.length);
        log.load(bc[i], '[ FB-TANJIRO ] ')
    } catch (e) {
        log.err(e, '[ FB-TANJIRO ] ')
    }
}