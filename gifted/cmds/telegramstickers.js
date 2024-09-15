function _0x26e3() {
    const _0x11278c = [
        'A\x20moment,\x20*Gifted-Md*\x20is\x20downloading\x20stickers.\x20Please\x20wait...',
        'Please\x20provide\x20a\x20valid\x20Telegram\x20stickers\x20URL.',
        'Error\x20sending\x20stickers:\x20',
        '185148wziXcI',
        'Error\x20resending\x20sticker:\x20',
        'message',
        'status',
        'toLowerCase',
        'sticker',
        'length',
        'Error\x20resending\x20sticker:',
        'Success...\x0aSent\x20',
        'match',
        'url',
        '513052cwxEiu',
        'download',
        '39253JbCPwa',
        'reply',
        '5slliqs',
        'slice',
        'Error\x20sending\x20stickers:',
        'type',
        'Failed\x20to\x20retrieve\x20stickers.\x20Please\x20check\x20the\x20Telegram\x20URL\x20and\x20try\x20again.',
        'quoted',
        'trim',
        'Sticker\x20has\x20been\x20taken.',
        'includes',
        '184030QTdgxS',
        '1199784RMfAWL',
        'from',
        '209IZThWe',
        'error',
        '\x20stickers.\x0aPause\x20for\x20a\x20moment\x20so\x20that\x20your\x20bot/WhatsApp\x20account\x20is\x20not\x20banned.',
        'tgstickers',
        'body',
        '1552936SVtMmU',
        'tgs',
        '52389dHLXGw',
        'result',
        'sendMessage',
        '288MdsiXv',
        '12RHglKk',
        'json'
    ];
    _0x26e3 = function () {
        return _0x11278c;
    };
    return _0x26e3();
}
(function (_0x27c062, _0x160a93) {
    const _0x3ad267 = _0x573f, _0x2905bf = _0x27c062();
    while (!![]) {
        try {
            const _0x85449 = -parseInt(_0x3ad267(0xcb)) / 0x1 + parseInt(_0x3ad267(0xc9)) / 0x2 + parseInt(_0x3ad267(0xbe)) / 0x3 * (-parseInt(_0x3ad267(0xb9)) / 0x4) + parseInt(_0x3ad267(0xcd)) / 0x5 * (-parseInt(_0x3ad267(0xd7)) / 0x6) + parseInt(_0x3ad267(0xde)) / 0x7 + parseInt(_0x3ad267(0xe3)) / 0x8 * (-parseInt(_0x3ad267(0xe0)) / 0x9) + parseInt(_0x3ad267(0xd6)) / 0xa * (parseInt(_0x3ad267(0xd9)) / 0xb);
            if (_0x85449 === _0x160a93)
                break;
            else
                _0x2905bf['push'](_0x2905bf['shift']());
        } catch (_0x3e4039) {
            _0x2905bf['push'](_0x2905bf['shift']());
        }
    }
}(_0x26e3, 0x2f63e));
import _0x2357a3 from 'node-fetch';
import _0x1c79cf from 'gifted-baileys';
const {MessageType} = _0x1c79cf, sendStickersFromTelegram = async (_0x2bdf09, _0x1de762) => {
        const _0x3df283 = _0x573f, _0x394fc7 = _0x2bdf09[_0x3df283(0xdd)][_0x3df283(0xc7)](/^[\\/!#.]/), _0x15c19b = _0x394fc7 ? _0x394fc7[0x0] : '/', _0x19946a = _0x2bdf09[_0x3df283(0xdd)]['startsWith'](_0x15c19b) ? _0x2bdf09[_0x3df283(0xdd)]['slice'](_0x15c19b['length'])['split']('\x20')[0x0][_0x3df283(0xc2)]() : '', _0x4c022e = _0x2bdf09[_0x3df283(0xdd)][_0x3df283(0xce)](_0x15c19b[_0x3df283(0xc4)] + _0x19946a[_0x3df283(0xc4)])[_0x3df283(0xd3)](), _0x3f868f = [
                _0x3df283(0xdf),
                _0x3df283(0xdc)
            ];
        if (_0x19946a === 'take' && _0x2bdf09[_0x3df283(0xd2)] && _0x2bdf09[_0x3df283(0xd2)][_0x3df283(0xd0)] === MessageType[_0x3df283(0xc3)])
            try {
                const _0x242525 = await _0x2bdf09['quoted'][_0x3df283(0xca)]();
                if (!_0x242525) {
                    await _0x2bdf09[_0x3df283(0xcc)]('No\x20sticker\x20found\x20to\x20resend.');
                    return;
                }
                await _0x1de762[_0x3df283(0xe2)](_0x2bdf09[_0x3df283(0xd8)], { 'sticker': _0x242525 }, { 'quoted': _0x2bdf09 }), await _0x2bdf09['reply'](_0x3df283(0xd4));
            } catch (_0x43f8f0) {
                console[_0x3df283(0xda)](_0x3df283(0xc5), _0x43f8f0['message']), await _0x2bdf09[_0x3df283(0xcc)](_0x3df283(0xbf) + _0x43f8f0[_0x3df283(0xc0)]);
            }
        else {
            if (_0x3f868f[_0x3df283(0xd5)](_0x19946a)) {
                if (!_0x4c022e) {
                    await _0x2bdf09[_0x3df283(0xcc)](_0x3df283(0xbc));
                    return;
                }
                try {
                    await _0x2bdf09[_0x3df283(0xcc)](_0x3df283(0xbb));
                    const _0x187b9d = await _0x2357a3('https://api.maskser.me/api/dowloader/telesticker?url=' + encodeURIComponent(_0x4c022e)), _0x28c283 = await _0x187b9d[_0x3df283(0xba)]();
                    if (!_0x28c283[_0x3df283(0xc1)]) {
                        await _0x2bdf09['reply'](_0x3df283(0xd1));
                        return;
                    }
                    const _0x45f901 = _0x28c283[_0x3df283(0xe1)];
                    if (_0x45f901[_0x3df283(0xc4)] === 0x0) {
                        await _0x2bdf09[_0x3df283(0xcc)]('No\x20stickers\x20found\x20in\x20the\x20provided\x20URL.');
                        return;
                    }
                    for (const _0x25ee0e of _0x45f901) {
                        const _0x1abf11 = _0x25ee0e[_0x3df283(0xc8)];
                        await _0x1de762[_0x3df283(0xe2)](_0x2bdf09[_0x3df283(0xd8)], { 'sticker': { 'url': _0x1abf11 } }, { 'quoted': _0x2bdf09 });
                    }
                    await _0x2bdf09[_0x3df283(0xcc)](_0x3df283(0xc6) + _0x45f901['length'] + _0x3df283(0xdb));
                } catch (_0x3fa783) {
                    console[_0x3df283(0xda)](_0x3df283(0xcf), _0x3fa783['message']), await _0x2bdf09[_0x3df283(0xcc)](_0x3df283(0xbd) + _0x3fa783[_0x3df283(0xc0)]);
                }
            }
        }
    };
function _0x573f(_0x2ff3ad, _0x2178a9) {
    const _0x26e383 = _0x26e3();
    return _0x573f = function (_0x573f36, _0x276d97) {
        _0x573f36 = _0x573f36 - 0xb9;
        let _0x5ca0aa = _0x26e383[_0x573f36];
        return _0x5ca0aa;
    }, _0x573f(_0x2ff3ad, _0x2178a9);
}
export default sendStickersFromTelegram;
