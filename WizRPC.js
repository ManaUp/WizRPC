var _0x440c = ['indexOf', 'push', 'log', 'Attempting\x20to\x20kill\x20RPC\x20child\x20process', 'Child\x20process\x20killed', '[ERR]\x20Could\x20not\x20kill\x20child\x20proceess', 'Game\x20is\x20now\x20active.\x20Launching\x20RPC.', 'node', './presence.js', 'pid', 'Process\x20PID:', 'exec', 'child_process', 'spawn', './config.json', 'gamePath', '/Bin/WizardClient.log', 'createInterface', 'line', 'includes', 'GameClient::OnQuit()'];
(function(_0x465c24, _0x4e2576) {
    var _0x36f49e = function(_0x2707c9) {
        while (--_0x2707c9) {
            _0x465c24['push'](_0x465c24['shift']());
        }
    };
    _0x36f49e(++_0x4e2576);
}(_0x440c, 0x89));
var _0x523a = function(_0x273ea2, _0x572ff3) {
    _0x273ea2 = _0x273ea2 - 0x0;
    var _0x27d418 = _0x440c[_0x273ea2];
    return _0x27d418;
};
const exec = require('child_process')[_0x523a('0x0')];
const spawn = require(_0x523a('0x1'))[_0x523a('0x2')];
const config = require(_0x523a('0x3'));
const logPath = config[_0x523a('0x4')] + _0x523a('0x5');
let child;
let pid;
let gameActive = ![];
let eventStorage = [];
let listenEvent = () => {
    let _0x484d1a = require('readline')[_0x523a('0x6')]({
        'input': require('fs')['createReadStream'](logPath)
    });
    _0x484d1a['on'](_0x523a('0x7'), function(_0x2c52ac) {
        if (_0x2c52ac[_0x523a('0x8')](_0x523a('0x9')) && eventStorage[_0x523a('0xa')](_0x2c52ac) < 0x0) {
            eventStorage[_0x523a('0xb')](_0x2c52ac);
            if (gameActive) {
                console[_0x523a('0xc')]('Game\x20is\x20no\x20longer\x20active');
                try {
                    console[_0x523a('0xc')](_0x523a('0xd'));
                    process['kill'](pid);
                    console['log'](_0x523a('0xe'));
                } catch (_0x20032b) {
                    console[_0x523a('0xc')](_0x523a('0xf'), pid);
                    console['log'](_0x20032b);
                }
                gameActive = ![];
            }
        } else if (_0x2c52ac[_0x523a('0x8')]('WizardGraphicalClient::Initialize\x20Window') && eventStorage['indexOf'](_0x2c52ac) < 0x0) {
            eventStorage['push'](_0x2c52ac);
            if (!gameActive) {
                console[_0x523a('0xc')](_0x523a('0x10'));
                child = spawn(_0x523a('0x11'), [_0x523a('0x12')], {stdio: 'ignore',windowsHide: true});
                pid = child[_0x523a('0x13')];
                console[_0x523a('0xc')](_0x523a('0x14'), pid);
                gameActive = !![];
            }
        }
    });
};
listenEvent();
setInterval(() => {
    listenEvent();
}, 0x7530);