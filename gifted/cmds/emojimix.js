function _0x5301(_0x307a05, _0x4432c5) {
    const _0x3ad609 = _0x3ad6();
    return _0x5301 = function (_0x53012d, _0x461538) {
        _0x53012d = _0x53012d - 0x1ad;
        let _0x476694 = _0x3ad609[_0x53012d];
        return _0x476694;
    }, _0x5301(_0x307a05, _0x4432c5);
}
(function (_0x3aa583, _0x309bdb) {
    const _0x20063c = _0x5301, _0x3a33e1 = _0x3aa583();
    while (!![]) {
        try {
            const _0x195f04 = -parseInt(_0x20063c(0x1c0)) / 0x1 + -parseInt(_0x20063c(0x1b4)) / 0x2 + -parseInt(_0x20063c(0x1ae)) / 0x3 + parseInt(_0x20063c(0x1c2)) / 0x4 + -parseInt(_0x20063c(0x1ba)) / 0x5 * (-parseInt(_0x20063c(0x1b8)) / 0x6) + -parseInt(_0x20063c(0x1c1)) / 0x7 * (-parseInt(_0x20063c(0x1ca)) / 0x8) + parseInt(_0x20063c(0x1bf)) / 0x9;
            if (_0x195f04 === _0x309bdb)
                break;
            else
                _0x3a33e1['push'](_0x3a33e1['shift']());
        } catch (_0x5f3c2c) {
            _0x3a33e1['push'](_0x3a33e1['shift']());
        }
    }
}(_0x3ad6, 0x26fab));
import _0x28a5df from 'node-fetch';
function _0x3ad6() {
    const _0x1912ab = [
        '1878SDzqMC',
        'Gifted-Md',
        '3175RYuZPD',
        'body',
        'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=',
        'length',
        'An\x20error\x20occurred\x20while\x20processing\x20the\x20command.',
        '873090jyEJdY',
        '108382lcFKNr',
        '3892VKMIFh',
        '720064hFsCdC',
        'No\x20emoji\x20mix\x20found\x20for\x20the\x20provided\x20emojis.',
        '\x20😅+🤔',
        'error',
        'reply',
        'unlinkSync',
        'tags',
        'json',
        '824zzOeKY',
        'trim',
        'includes',
        'match',
        '297045DNRTNe',
        'url',
        'Error:',
        'toLowerCase',
        'slice',
        'split',
        '331986bZZriQ',
        'Example:\x20',
        'sendImageAsSticker',
        'GiftedTech'
    ];
    _0x3ad6 = function () {
        return _0x1912ab;
    };
    return _0x3ad6();
}
import _0x1cd8cf from 'fs';
const emojimix = async (_0x16f7d1, _0x2e48db) => {
    const _0x586d4c = _0x5301;
    try {
        const _0x5de561 = _0x16f7d1['body'][_0x586d4c(0x1ad)](/^[\\/!#.]/), _0x19d261 = _0x5de561 ? _0x5de561[0x0] : '/', _0xe48b6b = _0x16f7d1['body']['startsWith'](_0x19d261) ? _0x16f7d1[_0x586d4c(0x1bb)]['slice'](_0x19d261[_0x586d4c(0x1bd)])[_0x586d4c(0x1b3)]('\x20')[0x0][_0x586d4c(0x1b1)]() : '', _0x5923e5 = _0x16f7d1[_0x586d4c(0x1bb)][_0x586d4c(0x1b2)](_0x19d261[_0x586d4c(0x1bd)] + _0xe48b6b[_0x586d4c(0x1bd)])[_0x586d4c(0x1cb)](), _0x5898ee = [
                'emojimix',
                'emix'
            ];
        if (!_0x5898ee[_0x586d4c(0x1cc)](_0xe48b6b))
            return;
        let [_0x4616d8, _0x1a58d4] = _0x5923e5[_0x586d4c(0x1b3)]('+');
        if (!_0x4616d8 || !_0x1a58d4)
            return _0x16f7d1[_0x586d4c(0x1c6)](_0x586d4c(0x1b5) + (_0x19d261 + _0xe48b6b) + _0x586d4c(0x1c4));
        const _0x1cce32 = _0x586d4c(0x1bc) + encodeURIComponent(_0x4616d8) + '_' + encodeURIComponent(_0x1a58d4), _0x207802 = await _0x28a5df(_0x1cce32), _0x41bf02 = await _0x207802[_0x586d4c(0x1c9)]();
        if (!_0x41bf02['results'] || _0x41bf02['results'][_0x586d4c(0x1bd)] === 0x0)
            return _0x16f7d1[_0x586d4c(0x1c6)](_0x586d4c(0x1c3));
        for (let _0x1e3faa of _0x41bf02['results']) {
            const _0x957187 = await _0x2e48db[_0x586d4c(0x1b6)](_0x16f7d1['from'], _0x1e3faa[_0x586d4c(0x1af)], _0x16f7d1, {
                'packname': _0x586d4c(0x1b9),
                'author': _0x586d4c(0x1b7),
                'categories': _0x1e3faa[_0x586d4c(0x1c8)]
            });
            await _0x1cd8cf[_0x586d4c(0x1c7)](_0x957187);
        }
    } catch (_0x2d502d) {
        console[_0x586d4c(0x1c5)](_0x586d4c(0x1b0), _0x2d502d), _0x16f7d1[_0x586d4c(0x1c6)](_0x586d4c(0x1be));
    }
};
export default emojimix;
