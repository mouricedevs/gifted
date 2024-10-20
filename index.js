const giftedtech_0x2e751b = giftedtech_0x2ce3;
(function (_0x2b228f, _0x3677b8) {
    const _0x5acfe4 = giftedtech_0x2ce3, _0x5bd208 = _0x2b228f();
    while (!![]) {
        try {
            const _0xe418bc = -parseInt(_0x5acfe4(0x1d1)) / 0x1 * (-parseInt(_0x5acfe4(0x1e0)) / 0x2) + parseInt(_0x5acfe4(0x1b8)) / 0x3 * (-parseInt(_0x5acfe4(0x1c9)) / 0x4) + -parseInt(_0x5acfe4(0x1b4)) / 0x5 * (-parseInt(_0x5acfe4(0x1f6)) / 0x6) + parseInt(_0x5acfe4(0x1ef)) / 0x7 * (-parseInt(_0x5acfe4(0x1bf)) / 0x8) + parseInt(_0x5acfe4(0x1d4)) / 0x9 * (-parseInt(_0x5acfe4(0x1ed)) / 0xa) + -parseInt(_0x5acfe4(0x1c5)) / 0xb + -parseInt(_0x5acfe4(0x1eb)) / 0xc * (-parseInt(_0x5acfe4(0x1c4)) / 0xd);
            if (_0xe418bc === _0x3677b8)
                break;
            else
                _0x5bd208['push'](_0x5bd208['shift']());
        } catch (_0x70ce13) {
            _0x5bd208['push'](_0x5bd208['shift']());
        }
    }
}(giftedtech_0x6fce, 0xc3194));
import giftedtech_0x220498 from 'dotenv';
giftedtech_0x220498[giftedtech_0x2e751b(0x1d3)]();
import {
    makeWASocket,
    Browsers,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState
} from 'gifted-baileys';
import {
    Handler,
    Callupdate,
    GroupUpdate
} from './gifted/func/index.js';
import giftedtech_0x1bd6ca from 'express';
import giftedtech_0x300895 from 'pino';
import giftedtech_0x3a1523 from 'fs';
import giftedtech_0x20b18f from 'node-cache';
import giftedtech_0x16fc8b from 'path';
import giftedtech_0x2fb45c from 'chalk';
import giftedtech_0x425e87 from 'moment-timezone';
import giftedtech_0x5eaca8 from 'axios';
import giftedtech_0xcc77d1 from './set.cjs';
import giftedtech_0x486720 from './gift/autoreact.cjs';
const {emojis, doReact} = giftedtech_0x486720, sessionName = 'session', app = giftedtech_0x1bd6ca(), orange = giftedtech_0x2fb45c[giftedtech_0x2e751b(0x1ee)][giftedtech_0x2e751b(0x1cb)](giftedtech_0x2e751b(0x1b3)), lime = giftedtech_0x2fb45c[giftedtech_0x2e751b(0x1ee)][giftedtech_0x2e751b(0x1cb)](giftedtech_0x2e751b(0x1e7));
let useQR = ![], initialConnection = !![];
const PORT = process['env'][giftedtech_0x2e751b(0x1c0)] || 0xbb8, MAIN_LOGGER = giftedtech_0x300895({ 'timestamp': () => giftedtech_0x2e751b(0x1c2) + new Date()['toJSON']() + '\x22' }), logger = MAIN_LOGGER[giftedtech_0x2e751b(0x1e4)]({});
logger['level'] = giftedtech_0x2e751b(0x1b6);
const msgRetryCounterCache = new giftedtech_0x20b18f(), __filename = new URL(import.meta[giftedtech_0x2e751b(0x1d6)])[giftedtech_0x2e751b(0x1c1)], __dirname = giftedtech_0x16fc8b['dirname'](__filename), sessionDir = giftedtech_0x16fc8b['join'](__dirname, 'session'), credsPath = giftedtech_0x16fc8b['join'](sessionDir, 'creds.json');
function giftedtech_0x6fce() {
    const _0x508bab = [
        '🔒\x20Session\x20File\x20Processed,\x20Starting\x20Gifted-Md.',
        '🔒\x20Session\x20file\x20found,\x20proceeding\x20without\x20QR\x20code.',
        '#32CD32',
        'exit',
        'private',
        'public',
        '51482148DTUefn',
        '🔒\x20Session\x20File\x20Successfully\x20Downloaded\x20!!',
        '1318010XRDxbm',
        'bold',
        '2238229ktWFZt',
        'loggedOut',
        'get',
        'blue',
        'green',
        'error',
        'fromMe',
        '18QETisF',
        '3.3',
        'call',
        'join',
        'data',
        'string',
        'SESSION_ID',
        'messages.upsert',
        '#FFA500',
        '310635mRnPCS',
        'output',
        'trace',
        'silent',
        '54rCvAtH',
        'split',
        'sendFile',
        'MODE',
        'creds.update',
        'statusCode',
        'sendMessage',
        '32Irmfbl',
        'PORT',
        'pathname',
        ',\x22time\x22:\x22',
        'Gifted\x20Server\x20Live\x20on\x20Port\x20',
        '13YGwxTe',
        '7739149bastzC',
        'remoteJid',
        'messages',
        'listen',
        '351892UWyeFY',
        'key',
        'hex',
        '♻️\x20Connection\x20reestablished\x20after\x20restart.',
        'message',
        'Gifted-Md',
        'loadMessage',
        'mkdirSync',
        '1nHJosX',
        'group-participants.update',
        'config',
        '36FsgNcq',
        'floor',
        'url',
        'CHECKING\x20WA\x20VERSION\x20v',
        ',\x20isLatest:\x20',
        'close',
        'temp/gifted.html',
        'open',
        '𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝟓\x20𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃\x0a\x0a𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞\x20\x20:\x20Cpanel\x20\x0a𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦:\x20Whatsapp\x20\x0a𝐎𝐰𝐧𝐞𝐫\x20\x20\x20\x20:\x20t.me/mouricedevs\x0a𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥𝐬\x20\x20:\x20youtube.com/@giftedtechnexus\x0a𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥\x20:\x20https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l\x0a\x0a>\x20𝐏𝐎𝐖𝐄𝐑𝐄𝐃\x20𝐁𝐘\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐓𝐄𝐂𝐇',
        'AUTO_REACT',
        'log',
        'promises',
        '831658WicRJN',
        '✅WHATSAPP\x20LOGIN\x20SUCCESSFUL,\x20𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝟓\x20𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃!',
        'existsSync',
        'user',
        'child'
    ];
    giftedtech_0x6fce = function () {
        return _0x508bab;
    };
    return giftedtech_0x6fce();
}
!giftedtech_0x3a1523[giftedtech_0x2e751b(0x1e2)](sessionDir) && giftedtech_0x3a1523[giftedtech_0x2e751b(0x1d0)](sessionDir, { 'recursive': !![] });
async function downloadSessionData() {
    const _0x4a45b7 = giftedtech_0x2e751b;
    if (!giftedtech_0xcc77d1[_0x4a45b7(0x1b1)])
        return console[_0x4a45b7(0x1f4)]('Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!'), ![];
    const _0x522f96 = giftedtech_0xcc77d1[_0x4a45b7(0x1b1)][_0x4a45b7(0x1b9)]('Gifted~')[0x1], _0x1bc9ea = 'https://pastebin.com/raw/' + _0x522f96;
    try {
        const _0x3728e3 = await giftedtech_0x5eaca8[_0x4a45b7(0x1f1)](_0x1bc9ea), _0x4d675a = typeof _0x3728e3[_0x4a45b7(0x1af)] === _0x4a45b7(0x1b0) ? _0x3728e3['data'] : JSON['stringify'](_0x3728e3[_0x4a45b7(0x1af)]);
        return await giftedtech_0x3a1523[_0x4a45b7(0x1df)]['writeFile'](credsPath, _0x4d675a), console['log'](_0x4a45b7(0x1ec)), !![];
    } catch (_0x21dce6) {
        return ![];
    }
}
async function start() {
    const _0x4194b6 = giftedtech_0x2e751b;
    try {
        const {
                state: _0x424f9d,
                saveCreds: _0x35f274
            } = await useMultiFileAuthState(sessionDir), {
                version: _0x3e2f01,
                isLatest: _0x30fa15
            } = await fetchLatestBaileysVersion();
        console[_0x4194b6(0x1de)](_0x4194b6(0x1d7) + _0x3e2f01[_0x4194b6(0x1f9)]('.') + _0x4194b6(0x1d8) + _0x30fa15);
        const _0x1dfdf1 = makeWASocket({
            'version': _0x3e2f01,
            'logger': giftedtech_0x300895({ 'level': _0x4194b6(0x1b7) }),
            'printQRInTerminal': useQR,
            'browser': [
                _0x4194b6(0x1ce),
                'safari',
                _0x4194b6(0x1f7)
            ],
            'auth': _0x424f9d,
            'getMessage': async _0x590ee0 => {
                const _0x9f0970 = _0x4194b6;
                if (store) {
                    const _0x5f43cd = await store[_0x9f0970(0x1cf)](_0x590ee0[_0x9f0970(0x1c6)], _0x590ee0['id']);
                    return _0x5f43cd['message'] || undefined;
                }
                return { 'conversation': _0x9f0970(0x1e1) };
            }
        });
        _0x1dfdf1['ev']['on']('connection.update', _0x271386 => {
            const _0x4c761c = _0x4194b6, {
                    connection: _0x130482,
                    lastDisconnect: _0x45fa19
                } = _0x271386;
            if (_0x130482 === _0x4c761c(0x1d9))
                _0x45fa19[_0x4c761c(0x1f4)]?.[_0x4c761c(0x1b5)]?.[_0x4c761c(0x1bd)] !== DisconnectReason[_0x4c761c(0x1f0)] && start();
            else
                _0x130482 === _0x4c761c(0x1db) && (initialConnection ? (console['log'](giftedtech_0x2fb45c[_0x4c761c(0x1f3)]('✅WHATSAPP\x20LOGIN\x20SUCCESSFUL,\x20𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝟓\x20𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃')), _0x1dfdf1[_0x4c761c(0x1be)](_0x1dfdf1[_0x4c761c(0x1e3)]['id'], { 'text': _0x4c761c(0x1dc) }), initialConnection = ![]) : console[_0x4c761c(0x1de)](giftedtech_0x2fb45c[_0x4c761c(0x1f2)](_0x4c761c(0x1cc))));
        }), _0x1dfdf1['ev']['on'](_0x4194b6(0x1bc), _0x35f274), _0x1dfdf1['ev']['on'](_0x4194b6(0x1b2), async _0x13e445 => await Handler(_0x13e445, _0x1dfdf1, logger)), _0x1dfdf1['ev']['on'](_0x4194b6(0x1f8), async _0x28c603 => await Callupdate(_0x28c603, _0x1dfdf1)), _0x1dfdf1['ev']['on'](_0x4194b6(0x1d2), async _0x598500 => await GroupUpdate(_0x1dfdf1, _0x598500));
        if (giftedtech_0xcc77d1[_0x4194b6(0x1bb)] === _0x4194b6(0x1ea))
            _0x1dfdf1[_0x4194b6(0x1ea)] = !![];
        else
            giftedtech_0xcc77d1[_0x4194b6(0x1bb)] === _0x4194b6(0x1e9) && (_0x1dfdf1['public'] = ![]);
        _0x1dfdf1['ev']['on'](_0x4194b6(0x1b2), async _0x1fa8b3 => {
            const _0x1d43bd = _0x4194b6;
            try {
                const _0x1ecb7c = _0x1fa8b3[_0x1d43bd(0x1c7)][0x0];
                if (!_0x1ecb7c[_0x1d43bd(0x1ca)][_0x1d43bd(0x1f5)] && giftedtech_0xcc77d1[_0x1d43bd(0x1dd)]) {
                    console[_0x1d43bd(0x1de)](_0x1ecb7c);
                    if (_0x1ecb7c[_0x1d43bd(0x1cd)]) {
                        const _0x5e7f20 = emojis[Math[_0x1d43bd(0x1d5)](Math['random']() * emojis['length'])];
                        await doReact(_0x5e7f20, _0x1ecb7c, _0x1dfdf1);
                    }
                }
            } catch (_0x2b2408) {
                console[_0x1d43bd(0x1f4)]('Error\x20during\x20auto\x20reaction:', _0x2b2408);
            }
        });
    } catch (_0x169125) {
        console[_0x4194b6(0x1f4)]('Critical\x20Error:', _0x169125), process[_0x4194b6(0x1e8)](0x1);
    }
}
function giftedtech_0x2ce3(_0x25b685, _0x354397) {
    const _0x6fce06 = giftedtech_0x6fce();
    return giftedtech_0x2ce3 = function (_0x2ce3ea, _0x355f2b) {
        _0x2ce3ea = _0x2ce3ea - 0x1af;
        let _0x344f40 = _0x6fce06[_0x2ce3ea];
        return _0x344f40;
    }, giftedtech_0x2ce3(_0x25b685, _0x354397);
}
async function init() {
    const _0x517bb7 = giftedtech_0x2e751b;
    if (giftedtech_0x3a1523[_0x517bb7(0x1e2)](credsPath))
        console[_0x517bb7(0x1de)](_0x517bb7(0x1e6)), await start();
    else {
        const _0xa12d3 = await downloadSessionData();
        _0xa12d3 ? (console[_0x517bb7(0x1de)](_0x517bb7(0x1e5)), await start()) : (console[_0x517bb7(0x1de)]('No\x20session\x20found\x20or\x20downloaded,\x20QR\x20code\x20will\x20be\x20printed\x20for\x20authentication.'), useQR = !![], await start());
    }
}
init(), app[giftedtech_0x2e751b(0x1f1)]('/', (_0x5ef86d, _0x19d5df) => {
    const _0x10f2fb = giftedtech_0x2e751b;
    _0x19d5df[_0x10f2fb(0x1ba)](giftedtech_0x16fc8b[_0x10f2fb(0x1f9)](__dirname, _0x10f2fb(0x1da)));
}), app[giftedtech_0x2e751b(0x1c8)](PORT, () => {
    const _0x1000bc = giftedtech_0x2e751b;
    console['log'](_0x1000bc(0x1c3) + PORT);
});