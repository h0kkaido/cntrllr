/* REQUIRE */

var ks = require('node-key-sender');
ks.setOption('globalDelayPressMillisec', 2000);
const YouTube = require('youtube-live-chat');

/* CONFIG */

var key = "AIzaSyDqKu4zR00WE46RJHpqPHy4R5Z50qXsJcc";
var key2 = "AIzaSyB-66pR-gHc228jOCc0T_vtKIy6v8A-I68";
var key3 = "AIzaSyAmXdrozCnZ2flmKXRJyDpxyDXANzyDvOo";
var channel = "UCqJ5zFEED1hWs0KNQCQuYdQ";
var parsetimeout = 2500;
var shorttimeout = 2000;
var timeout = 4000;
var longtimeout = 8000;

/* CODE */

const yt = new YouTube(channel, key2);

yt.on('ready', () => {
    console.log("Start!")
    yt.listen(parsetimeout)
})

yt.on('message', data => {
    if (data.snippet.displayMessage == "f") {
        console.log("[W]")
        ks.startBatch()
        .batchTypeKey('W', timeout)
        .sendBatch();
    }
    if (data.snippet.displayMessage == "wow") {
        console.log("[A]")
        ks.startBatch()
        .batchTypeKey('W', shorttimeout)
        .batchTypeKey('A', timeout)
        .sendBatch();
    }
    if (data.snippet.displayMessage == "hola") {
        console.log("[S]")
        ks.startBatch()
        .batchTypeKey('S', timeout)
        .sendBatch();
    }
    if (data.snippet.displayMessage == "XD") {
        console.log("[D]")
        ks.startBatch()
        .batchTypeKey('W', shorttimeout)
        .batchTypeKey('D', timeout)
        .sendBatch();
    }
    if (data.snippet.displayMessage == "gona") {
        console.log("[SPACE]")
        ks.startBatch()
        .batchTypeKey('space', timeout)
        .sendBatch();
    }
})

yt.on('error', error => {
    console.error(error)
})