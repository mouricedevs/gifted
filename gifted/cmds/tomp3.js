function _0x41e0() {
    const _0x2c1b17 = [
        'includes',
        '3483936IZXZdR',
        '183KfrUeP',
        'tomp3',
        'length',
        'Send/Reply\x20with\x20Video\x20to\x20convert\x20into\x20MP3\x20with\x20caption\x20',
        'videoMessage',
        '694634JajRUG',
        'name',
        'An\x20error\x20occurred\x20while\x20processing\x20the\x20command.',
        '5472432QDWBuo',
        'Converting\x20to\x20MP3,\x20please\x20wait...',
        '597072kMiWtJ',
        'tomusic',
        '.mp3',
        'mp3',
        'mp4',
        'reply',
        'quoted',
        'Error:',
        '53208WCpRPv',
        'body',
        'download',
        'startsWith',
        'match',
        '3724510LQkoQO',
        '769568mGZdUo',
        'split',
        'error',
        'from',
        'mtype',
        '9ZFDOnA',
        'toLowerCase'
    ];
    _0x41e0 = function () {
        return _0x2c1b17;
    };
    return _0x41e0();
}
(function (_0x509e41, _0x15bf9c) {
    const _0x1a2f68 = _0x3403, _0x223acd = _0x509e41();
    while (!![]) {
        try {
            const _0x3d471c = -parseInt(_0x1a2f68(0x143)) / 0x1 + -parseInt(_0x1a2f68(0x148)) / 0x2 + parseInt(_0x1a2f68(0x13e)) / 0x3 * (parseInt(_0x1a2f68(0x12f)) / 0x4) + parseInt(_0x1a2f68(0x134)) / 0x5 + parseInt(_0x1a2f68(0x13d)) / 0x6 + -parseInt(_0x1a2f68(0x146)) / 0x7 + -parseInt(_0x1a2f68(0x135)) / 0x8 * (-parseInt(_0x1a2f68(0x13a)) / 0x9);
            if (_0x3d471c === _0x15bf9c)
                break;
            else
                _0x223acd['push'](_0x223acd['shift']());
        } catch (_0x2f4bc2) {
            _0x223acd['push'](_0x223acd['shift']());
        }
    }
}(_0x41e0, 0x6fdf6));
import { toAudio } from '../../gift/gifke.cjs';
const tomp3 = async (_0x2326fa, _0x30ba10) => {
    const _0x142087 = _0x3403;
    try {
        const _0x584d17 = _0x2326fa[_0x142087(0x130)][_0x142087(0x133)](/^[\\/!#.]/), _0x2bcbb3 = _0x584d17 ? _0x584d17[0x0] : '/', _0x41e998 = _0x2326fa[_0x142087(0x130)][_0x142087(0x132)](_0x2bcbb3) ? _0x2326fa['body']['slice'](_0x2bcbb3[_0x142087(0x140)])[_0x142087(0x136)]('\x20')[0x0][_0x142087(0x13b)]() : '', _0x62d0b4 = [
                _0x142087(0x13f),
                _0x142087(0x149),
                _0x142087(0x12a)
            ];
        if (!_0x62d0b4[_0x142087(0x13c)](_0x41e998))
            return;
        if (!_0x2326fa[_0x142087(0x12d)] || _0x2326fa['quoted'][_0x142087(0x139)] !== _0x142087(0x142))
            return _0x2326fa[_0x142087(0x12c)](_0x142087(0x141) + (_0x2bcbb3 + _0x41e998));
        _0x2326fa[_0x142087(0x12c)](_0x142087(0x147));
        const _0x58fdfe = await _0x2326fa['quoted'][_0x142087(0x131)](), _0xc09a5 = await toAudio(_0x58fdfe, _0x142087(0x12b));
        await _0x30ba10['sendMessage'](_0x2326fa[_0x142087(0x138)], {
            'document': _0xc09a5,
            'mimetype': 'audio/mpeg',
            'fileName': 'Converted\x20By\x20' + _0x30ba10['user'][_0x142087(0x144)] + _0x142087(0x14a)
        }, { 'quoted': _0x2326fa });
    } catch (_0x4dade5) {
        console[_0x142087(0x137)](_0x142087(0x12e), _0x4dade5), _0x2326fa[_0x142087(0x12c)](_0x142087(0x145));
    }
};
function _0x3403(_0x123861, _0x219e5e) {
    const _0x41e035 = _0x41e0();
    return _0x3403 = function (_0x34037a, _0x412f5c) {
        _0x34037a = _0x34037a - 0x12a;
        let _0x1b9ccc = _0x41e035[_0x34037a];
        return _0x1b9ccc;
    }, _0x3403(_0x123861, _0x219e5e);
}
export default tomp3;
