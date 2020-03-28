/* REQUIRE */

var ks = require('node-key-sender');
const YouTube = require('youtube-live-chat');
const config = require('./config.json');

/* CODE */

const yt = new YouTube(config.channel, config.key2);

yt.on('ready', () => {
    console.log("Start!")
    yt.listen(config.parsetimeout)
})

yt.on('message', data => {
    console.log(data.snippet.displayMessage)
    if (data.snippet.displayMessage == "ВПЕРЁД") {
        console.log("[W]")
        ks.sendKey('w');
    }
    if (data.snippet.displayMessage == "СТОП") {
        console.log("[SPACE]")
        ks.sendKey('space');
    }
    if (data.snippet.displayMessage == "НАЗАД") {
        console.log("[S]")
        ks.sendKey('s');
    }
    if (data.snippet.displayMessage == "НАЛЕВО") {
        console.log("[A]")
        ks.sendKey('a');
    }
    if (data.snippet.displayMessage == "НАПРАВО") {
        console.log("[D]")
        ks.sendKey('d');
    }
})

yt.on('error', error => {
    console.error(error)
})