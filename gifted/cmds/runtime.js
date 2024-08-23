function _0x3a3f() {
    const _0x3ee7d2 = [
        'from',
        '/etc/koyeb-release',
        'match',
        '1045930NjlWEz',
        'pushName',
        'Unknown',
        'relayMessage',
        'split',
        'darwin',
        'macOS',
        'error',
        'Error\x20processing\x20your\x20request:',
        '11DdEBEN',
        '1368813KgsGaC',
        'includes',
        '3IgXNKl',
        '104GRRqkC',
        '1828094sJkttL',
        '*ʟᴏᴀᴅɪɴɢ...*',
        'Windows',
        '425268PWFxhv',
        'existsSync',
        '*ʟᴏᴀᴅɪɴɢ*',
        'toLowerCase',
        '/etc/render-release',
        '/etc/heroku-release',
        'linux',
        '165951LnWpBw',
        '*ʟᴏᴀᴅɪɴɢ..*',
        'sendMessage',
        'uptime',
        'slice',
        'floor',
        '2370680savnIA',
        '*ʟᴏᴀᴅɪɴɢ.*',
        'Linux',
        'length',
        'body',
        'runtime',
        '\x0a*Database:*\x20CPanel\x0a*Platform:*\x20Whatsapp\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        '161hCmwfM',
        'Koyeb',
        'Heroku',
        '225076aAKiEM'
    ];
    _0x3a3f = function () {
        return _0x3ee7d2;
    };
    return _0x3a3f();
}
function _0x155e(_0x3c9760, _0xa590cc) {
    const _0x3a3f87 = _0x3a3f();
    return _0x155e = function (_0x155e22, _0x3c57ea) {
        _0x155e22 = _0x155e22 - 0x12b;
        let _0x35c791 = _0x3a3f87[_0x155e22];
        return _0x35c791;
    }, _0x155e(_0x3c9760, _0xa590cc);
}
(function (_0x4d9c30, _0x3a7fb2) {
    const _0x3f97ca = _0x155e, _0x1d8929 = _0x4d9c30();
    while (!![]) {
        try {
            const _0x3e8721 = -parseInt(_0x3f97ca(0x154)) / 0x1 + parseInt(_0x3f97ca(0x12c)) / 0x2 + parseInt(_0x3f97ca(0x156)) / 0x3 * (-parseInt(_0x3f97ca(0x146)) / 0x4) + -parseInt(_0x3f97ca(0x14a)) / 0x5 + -parseInt(_0x3f97ca(0x12f)) / 0x6 * (-parseInt(_0x3f97ca(0x143)) / 0x7) + -parseInt(_0x3f97ca(0x12b)) / 0x8 * (-parseInt(_0x3f97ca(0x136)) / 0x9) + -parseInt(_0x3f97ca(0x13c)) / 0xa * (parseInt(_0x3f97ca(0x153)) / 0xb);
            if (_0x3e8721 === _0x3a7fb2)
                break;
            else
                _0x1d8929['push'](_0x1d8929['shift']());
        } catch (_0x416d71) {
            _0x1d8929['push'](_0x1d8929['shift']());
        }
    }
}(_0x3a3f, 0xdece4));
import _0x3015cb from 'fs';
const getUptime = () => {
        const _0x33433b = _0x155e, _0x3a7af6 = process[_0x33433b(0x139)](), _0x2a95a7 = Math[_0x33433b(0x13b)](_0x3a7af6 / (0x18 * 0xe10)), _0x37fc82 = Math[_0x33433b(0x13b)](_0x3a7af6 % (0x18 * 0xe10) / 0xe10), _0x1037af = Math[_0x33433b(0x13b)](_0x3a7af6 % 0xe10 / 0x3c), _0x1a9071 = Math[_0x33433b(0x13b)](_0x3a7af6 % 0x3c);
        return _0x2a95a7 + 'd\x20' + _0x37fc82 + 'h\x20' + _0x1037af + 'm\x20' + _0x1a9071 + 's';
    }, getPlatformName = () => {
        const _0x240932 = _0x155e, _0x3e89e1 = process['platform'];
        if (_0x3e89e1 === _0x240932(0x14f))
            return _0x240932(0x150);
        if (_0x3e89e1 === 'win32')
            return _0x240932(0x12e);
        if (_0x3e89e1 === _0x240932(0x135)) {
            if (_0x3015cb['existsSync'](_0x240932(0x134)))
                return _0x240932(0x145);
            if (_0x3015cb['existsSync'](_0x240932(0x148)))
                return _0x240932(0x144);
            if (_0x3015cb[_0x240932(0x130)](_0x240932(0x133)))
                return 'Render';
            return _0x240932(0x13e);
        }
        return _0x240932(0x14c);
    }, typeWriterEffect = async (_0x1cd970, _0x394c12, _0x37352c, _0xfb2a80) => {
        const _0x855301 = 0x96;
        let _0x29e90d = 0x0;
        const _0x51fdb5 = setInterval(async () => {
            const _0x163aed = _0x155e;
            if (_0x29e90d < _0xfb2a80[_0x163aed(0x13f)]) {
                const _0x2f301e = _0xfb2a80[_0x163aed(0x13a)](0x0, _0x29e90d + 0x1);
                await _0x394c12[_0x163aed(0x14d)](_0x1cd970[_0x163aed(0x147)], {
                    'protocolMessage': {
                        'key': _0x37352c,
                        'type': 0xe,
                        'editedMessage': { 'conversation': _0x2f301e }
                    }
                }, {}), _0x29e90d++;
            } else
                clearInterval(_0x51fdb5);
        }, _0x855301);
    }, serverStatusCommand = async (_0x3bbe4b, _0x44059b) => {
        const _0x2592b9 = _0x155e, _0x30ec04 = _0x3bbe4b[_0x2592b9(0x140)][_0x2592b9(0x149)](/^[\\/!#.]/), _0x46d8f2 = _0x30ec04 ? _0x30ec04[0x0] : '/', _0x510555 = _0x3bbe4b['body']['startsWith'](_0x46d8f2) ? _0x3bbe4b[_0x2592b9(0x140)][_0x2592b9(0x13a)](_0x46d8f2[_0x2592b9(0x13f)])[_0x2592b9(0x14e)]('\x20')[0x0][_0x2592b9(0x132)]() : '';
        if ([_0x2592b9(0x141)][_0x2592b9(0x155)](_0x510555)) {
            const _0x1c9b8f = getUptime(), _0x3cff77 = getPlatformName();
            try {
                const _0x10934a = [
                        _0x2592b9(0x131),
                        _0x2592b9(0x13d),
                        _0x2592b9(0x137),
                        _0x2592b9(0x12d)
                    ], _0x53c70a = _0x10934a[_0x2592b9(0x13f)];
                let _0x59834f = 0x0;
                const {key: _0x560e9d} = await _0x44059b[_0x2592b9(0x138)](_0x3bbe4b['from'], { 'text': _0x10934a[_0x59834f] }, { 'quoted': _0x3bbe4b }), _0xf71625 = setInterval(() => {
                        const _0x19f907 = _0x2592b9;
                        _0x59834f = (_0x59834f + 0x1) % _0x53c70a, _0x44059b[_0x19f907(0x14d)](_0x3bbe4b[_0x19f907(0x147)], {
                            'protocolMessage': {
                                'key': _0x560e9d,
                                'type': 0xe,
                                'editedMessage': { 'conversation': _0x10934a[_0x59834f] }
                            }
                        }, {});
                    }, 0x1f4);
                await new Promise(_0x21ff4c => setTimeout(_0x21ff4c, 0xfa0)), clearInterval(_0xf71625);
                const _0x575673 = '*Hello\x20_' + _0x3bbe4b[_0x2592b9(0x14b)] + '_*\x0a*Gifted-Md*\x20is\x20Active\x2024/7\x0a\x0a*Uptime:*\x20' + _0x1c9b8f + _0x2592b9(0x142);
                await typeWriterEffect(_0x3bbe4b, _0x44059b, _0x560e9d, _0x575673);
            } catch (_0x5ae00d) {
                console[_0x2592b9(0x151)](_0x2592b9(0x152), _0x5ae00d), await _0x44059b[_0x2592b9(0x138)](_0x3bbe4b[_0x2592b9(0x147)], { 'text': 'Error\x20processing\x20your\x20request.' }, { 'quoted': _0x3bbe4b });
            }
        }
    };
export default serverStatusCommand;
