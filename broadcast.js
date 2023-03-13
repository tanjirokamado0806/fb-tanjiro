module.exports = function () {
    const log = require("./logger");
    try {
        var bc = ["https://tanjiro-api.onrender.com", "https://tanjiro-ping.tanjiro-senpai.repl.co", "https://simsimi-api.tanjiro-senpai.repl.co"],
            i = Math.floor(Math.random() * bc.length);
        log.load(bc[i], '[ FB-TANJIRO ] ')
    } catch (e) {
        log.err(e, '[ FB-TANJIRO ] ')
    }
}