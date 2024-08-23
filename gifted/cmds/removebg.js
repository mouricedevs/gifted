(function (_0x45c778, _0x388937) {
    const _0x3f49bd = _0xd1e2, _0x3a9e3 = _0x45c778();
    while (!![]) {
        try {
            const _0x4c403e = parseInt(_0x3f49bd(0xe8)) / 0x1 * (-parseInt(_0x3f49bd(0xcf)) / 0x2) + -parseInt(_0x3f49bd(0xba)) / 0x3 * (-parseInt(_0x3f49bd(0xdb)) / 0x4) + parseInt(_0x3f49bd(0xbe)) / 0x5 + -parseInt(_0x3f49bd(0xc6)) / 0x6 + parseInt(_0x3f49bd(0xb8)) / 0x7 + parseInt(_0x3f49bd(0xcb)) / 0x8 + parseInt(_0x3f49bd(0xc3)) / 0x9 * (-parseInt(_0x3f49bd(0xd3)) / 0xa);
            if (_0x4c403e === _0x388937)
                break;
            else
                _0x3a9e3['push'](_0x3a9e3['shift']());
        } catch (_0x5bcbf6) {
            _0x3a9e3['push'](_0x3a9e3['shift']());
        }
    }
}(_0x1f81, 0x59506));
import _0x217da4 from 'path';
import _0x26c331 from 'fs';
import { v4 as _0x511eaa } from 'uuid';
import { removeBackgroundFromImageFile } from 'remove.bg';
function _0xd1e2(_0x36fffc, _0x46333a) {
    const _0x1f81aa = _0x1f81();
    return _0xd1e2 = function (_0xd1e238, _0x372fa9) {
        _0xd1e238 = _0xd1e238 - 0xb4;
        let _0x1e0e69 = _0x1f81aa[_0xd1e238];
        return _0x1e0e69;
    }, _0xd1e2(_0x36fffc, _0x46333a);
}
const tourl = async (_0x42fec6, _0x23ba1e) => {
    const _0x11ab56 = _0xd1e2, _0x5a0153 = _0x42fec6['body'][_0x11ab56(0xe6)](/^[\\/!#.]/), _0x45b678 = _0x5a0153 ? _0x5a0153[0x0] : '/', _0x288f1f = _0x42fec6[_0x11ab56(0xd8)][_0x11ab56(0xb7)](_0x45b678) ? _0x42fec6[_0x11ab56(0xd8)][_0x11ab56(0xe7)](_0x45b678['length'])[_0x11ab56(0xc2)]('\x20')[0x0]['toLowerCase']() : '', _0x228baf = [
            _0x11ab56(0xda),
            _0x11ab56(0xd5),
            _0x11ab56(0xbf)
        ];
    if (_0x228baf[_0x11ab56(0xd7)](_0x288f1f)) {
        const _0x4020a5 = [
                _0x11ab56(0xc4),
                _0x11ab56(0xc9),
                '5LjfCVAp4vVNYiTjq9mXJWHF',
                _0x11ab56(0xb9),
                _0x11ab56(0xe3),
                _0x11ab56(0xd1),
                _0x11ab56(0xde),
                _0x11ab56(0xce),
                _0x11ab56(0xd4)
            ], _0x451a77 = _0x4020a5[Math[_0x11ab56(0xbd)](Math[_0x11ab56(0xd2)]() * _0x4020a5['length'])];
        if (!_0x42fec6[_0x11ab56(0xdd)] || _0x42fec6[_0x11ab56(0xdd)][_0x11ab56(0xd6)] !== 'imageMessage')
            return _0x42fec6[_0x11ab56(0xd9)](_0x11ab56(0xdc) + (_0x45b678 + _0x288f1f) + '*');
        const _0x413ff1 = _0x11ab56(0xe1) + _0x511eaa(), _0x370240 = _0x11ab56(0xe4) + _0x511eaa() + _0x11ab56(0xe0), _0x3f4d84 = await _0x42fec6[_0x11ab56(0xdd)][_0x11ab56(0xbb)]();
        _0x26c331[_0x11ab56(0xcd)](_0x413ff1, _0x3f4d84), _0x42fec6[_0x11ab56(0xd9)](_0x11ab56(0xc0)), removeBackgroundFromImageFile({
            'path': _0x413ff1,
            'apiKey': _0x451a77,
            'size': _0x11ab56(0xc1),
            'type': _0x11ab56(0xe2),
            'scale': _0x11ab56(0xcc),
            'outputFile': _0x370240
        })[_0x11ab56(0xc5)](async () => {
            const _0x19a902 = _0x11ab56;
            _0x23ba1e[_0x19a902(0xc7)](_0x42fec6[_0x19a902(0xd0)], {
                'image': _0x26c331['readFileSync'](_0x370240),
                'caption': _0x19a902(0xb5) + _0x42fec6[_0x19a902(0xdf)] + _0x19a902(0xbc)
            }, { 'quoted': _0x42fec6 }), _0x26c331['unlinkSync'](_0x413ff1), _0x26c331[_0x19a902(0xc8)](_0x370240);
        })[_0x11ab56(0xb6)](_0x52ecdd => {
            const _0x55aafd = _0x11ab56;
            console[_0x55aafd(0xca)](_0x55aafd(0xb4), _0x52ecdd), _0x42fec6[_0x55aafd(0xd9)](_0x55aafd(0xe5)), _0x26c331[_0x55aafd(0xc8)](_0x413ff1);
        });
    }
};
export default tourl;
function _0x1f81() {
    const _0xba2587 = [
        'mtype',
        'includes',
        'body',
        'reply',
        'removebg',
        '4TzpPay',
        '>\x20Send/Reply\x20with\x20an\x20image\x20for\x20remove\x20you\x20picture\x20backgroud\x0a*Example\x20',
        'quoted',
        '86h6d6u4AXrst4BVMD9dzdGZ',
        'pushName',
        '.png',
        './gifted/remobg-',
        'auto',
        'BY63t7Vx2tS68YZFY6AJ4HHF',
        './gifted/hremo-',
        'There\x20was\x20an\x20error\x20processing\x20the\x20image.',
        'match',
        'slice',
        '38YWFNkK',
        'Error\x20processing\x20image:',
        '>\x20Hey\x20',
        'catch',
        'startsWith',
        '262794yXFJIX',
        'aT7ibfUsGSwFyjaPZ9eoJc61',
        '1386564sibvFR',
        'download',
        '\x20Your\x20picture\x20Background\x20Romoved\x20Sucessfully',
        'floor',
        '3500855QJMdoX',
        'nobg',
        '*Please\x20Wait,\x20Processing...*',
        'regular',
        'split',
        '7983QhmYFs',
        'q61faXzzR5zNU6cvcrwtUkRU',
        'then',
        '1396554rwPMjf',
        'sendMessage',
        'unlinkSync',
        'S258diZhcuFJooAtHTaPEn4T',
        'error',
        '904360FCcrro',
        '100%',
        'writeFileSync',
        'xp8pSDavAgfE5XScqXo9UKHF',
        '31202EVoOBX',
        'from',
        '5Gdq1sSWSeyZzPMHqz7ENfi8',
        'random',
        '1370XdDBqp',
        'dWbCoCb3TacCP93imNEcPxcL',
        'rmbg'
    ];
    _0x1f81 = function () {
        return _0xba2587;
    };
    return _0x1f81();
}
