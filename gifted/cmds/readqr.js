(function (_0x57a6b7, _0x4b94df) {
    const _0x6f115b = _0x425b, _0x190313 = _0x57a6b7();
    while (!![]) {
        try {
            const _0x4b4032 = -parseInt(_0x6f115b(0xc8)) / 0x1 + parseInt(_0x6f115b(0xd8)) / 0x2 + -parseInt(_0x6f115b(0xcf)) / 0x3 * (parseInt(_0x6f115b(0xd4)) / 0x4) + -parseInt(_0x6f115b(0xc6)) / 0x5 + parseInt(_0x6f115b(0xcc)) / 0x6 * (parseInt(_0x6f115b(0xd2)) / 0x7) + -parseInt(_0x6f115b(0xc5)) / 0x8 + parseInt(_0x6f115b(0xc0)) / 0x9 * (parseInt(_0x6f115b(0xd9)) / 0xa);
            if (_0x4b4032 === _0x4b94df)
                break;
            else
                _0x190313['push'](_0x190313['shift']());
        } catch (_0x195b51) {
            _0x190313['push'](_0x190313['shift']());
        }
    }
}(_0x2473, 0xd3908));
import _0x59cfe3 from 'jimp';
import _0x277a98 from 'jsqr';
import _0x2e26d6 from 'jpeg-js';
function _0x425b(_0x2ad630, _0x5160eb) {
    const _0x247380 = _0x2473();
    return _0x425b = function (_0x425b90, _0x444f81) {
        _0x425b90 = _0x425b90 - 0xbf;
        let _0x140c0b = _0x247380[_0x425b90];
        return _0x140c0b;
    }, _0x425b(_0x2ad630, _0x5160eb);
}
const readqr = async (_0x19e8a7, _0x51ea5d) => {
    const _0x244470 = _0x425b;
    try {
        const _0x555309 = _0x19e8a7['body'][_0x244470(0xd6)](/^[\\/!#.]/), _0x2ca069 = _0x555309 ? _0x555309[0x0] : '/', _0x560267 = _0x19e8a7[_0x244470(0xc7)]['startsWith'](_0x2ca069) ? _0x19e8a7[_0x244470(0xc7)][_0x244470(0xca)](_0x2ca069[_0x244470(0xcd)])['split']('\x20')[0x0][_0x244470(0xc9)]() : '', _0x2aa355 = [_0x244470(0xcb)];
        if (!_0x2aa355['includes'](_0x560267))
            return;
        if (!_0x19e8a7[_0x244470(0xc3)] || _0x19e8a7[_0x244470(0xc3)][_0x244470(0xc1)] !== _0x244470(0xc4))
            return _0x19e8a7['reply'](_0x244470(0xc2));
        const _0x223f13 = await _0x19e8a7['quoted'][_0x244470(0xce)](), _0x18e025 = await _0x59cfe3[_0x244470(0xda)](_0x223f13), {
                data: _0x2e3dec,
                width: _0x46c7f4,
                height: _0x5f04b1
            } = _0x18e025[_0x244470(0xd1)], _0x7f99b6 = _0x277a98(_0x2e3dec, _0x46c7f4, _0x5f04b1);
        if (!_0x7f99b6)
            return _0x19e8a7[_0x244470(0xd3)](_0x244470(0xbf));
        _0x19e8a7[_0x244470(0xd3)]('Decoded\x20QR\x20code:\x20' + _0x7f99b6[_0x244470(0xd5)]);
    } catch (_0x5338d0) {
        console[_0x244470(0xd7)](_0x244470(0xd0), _0x5338d0), _0x19e8a7[_0x244470(0xd3)]('An\x20error\x20occurred\x20while\x20processing\x20the\x20command.');
    }
};
function _0x2473() {
    const _0xd9a3c4 = [
        '464330HOzqsq',
        'read',
        'QR\x20code\x20not\x20found\x20or\x20could\x20not\x20be\x20decoded.',
        '666PgobDO',
        'mtype',
        'Please\x20quote\x20an\x20image\x20containing\x20a\x20QR\x20code\x20with\x20a\x20Caption.',
        'quoted',
        'imageMessage',
        '12313264uRJwCm',
        '7098870hlFFwS',
        'body',
        '738317RgMqlX',
        'toLowerCase',
        'slice',
        'readqr',
        '1275654TtmCbA',
        'length',
        'download',
        '1103481HjRRGS',
        'Error:',
        'bitmap',
        '7fKFwzm',
        'reply',
        '4ieNHTc',
        'data',
        'match',
        'error',
        '2565986JcCCwK'
    ];
    _0x2473 = function () {
        return _0xd9a3c4;
    };
    return _0x2473();
}
export default readqr;
