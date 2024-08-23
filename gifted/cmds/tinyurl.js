function _0x4538(_0x36c8a3, _0x58c9fb) {
    const _0x1229a7 = _0x1229();
    return _0x4538 = function (_0x45386e, _0x36399f) {
        _0x45386e = _0x45386e - 0x146;
        let _0x34ac5b = _0x1229a7[_0x45386e];
        return _0x34ac5b;
    }, _0x4538(_0x36c8a3, _0x58c9fb);
}
(function (_0x319d6f, _0x29a7bd) {
    const _0xabdb91 = _0x4538, _0x3a385b = _0x319d6f();
    while (!![]) {
        try {
            const _0x1cfa4e = -parseInt(_0xabdb91(0x167)) / 0x1 * (parseInt(_0xabdb91(0x164)) / 0x2) + parseInt(_0xabdb91(0x15f)) / 0x3 + -parseInt(_0xabdb91(0x150)) / 0x4 * (parseInt(_0xabdb91(0x15b)) / 0x5) + parseInt(_0xabdb91(0x14e)) / 0x6 + parseInt(_0xabdb91(0x147)) / 0x7 * (parseInt(_0xabdb91(0x162)) / 0x8) + -parseInt(_0xabdb91(0x15d)) / 0x9 + parseInt(_0xabdb91(0x15e)) / 0xa;
            if (_0x1cfa4e === _0x29a7bd)
                break;
            else
                _0x3a385b['push'](_0x3a385b['shift']());
        } catch (_0x5e3d45) {
            _0x3a385b['push'](_0x3a385b['shift']());
        }
    }
}(_0x1229, 0xc7b43));
import _0x42deb5 from 'axios';
const TinyUrl = async (_0x5f57a4, _0x1829aa) => {
    const _0x205e28 = _0x4538, _0x54fa34 = _0x5f57a4['body'][_0x205e28(0x153)](/^[\\/!#.]/), _0x45ec7a = _0x54fa34 ? _0x54fa34[0x0] : '/', _0x57cce6 = _0x5f57a4[_0x205e28(0x158)]['startsWith'](_0x45ec7a) ? _0x5f57a4[_0x205e28(0x158)]['slice'](_0x45ec7a[_0x205e28(0x14c)])['split']('\x20')[0x0][_0x205e28(0x14b)]() : '', _0x2ce14b = _0x5f57a4[_0x205e28(0x158)][_0x205e28(0x163)](_0x45ec7a[_0x205e28(0x14c)] + _0x57cce6[_0x205e28(0x14c)])['trim'](), _0x5d1436 = [
            _0x205e28(0x148),
            'tinyurl',
            'shorten',
            _0x205e28(0x159),
            _0x205e28(0x146)
        ];
    if (_0x5d1436[_0x205e28(0x165)](_0x57cce6)) {
        if (!_0x2ce14b)
            return _0x5f57a4[_0x205e28(0x15c)](_0x205e28(0x166) + _0x5f57a4['pushName'] + _0x205e28(0x154));
        try {
            await _0x5f57a4[_0x205e28(0x149)]('🕘');
            let _0x52989f = '';
            if (_0x2ce14b[_0x205e28(0x165)]('|')) {
                const [_0x134792, _0x11b940] = _0x2ce14b[_0x205e28(0x161)]('|')[_0x205e28(0x156)](_0x368c40 => _0x368c40['trim']());
                _0x52989f = _0x205e28(0x15a) + encodeURIComponent(_0x134792) + _0x205e28(0x14d) + encodeURIComponent(_0x11b940);
            } else
                _0x52989f = _0x205e28(0x160) + encodeURIComponent(_0x2ce14b);
            const _0x4badcf = await _0x42deb5[_0x205e28(0x151)](_0x52989f), _0x5e9afc = _0x4badcf[_0x205e28(0x14a)][_0x205e28(0x168)];
            await _0x1829aa['sendMessage'](_0x5f57a4['from'], { 'text': _0x5e9afc }, { 'quoted': _0x5f57a4 }), await _0x5f57a4[_0x205e28(0x149)]('✅');
        } catch (_0x4521f8) {
            console[_0x205e28(0x152)](_0x205e28(0x155), _0x4521f8[_0x205e28(0x157)]), _0x5f57a4[_0x205e28(0x15c)](_0x205e28(0x14f)), await _0x5f57a4[_0x205e28(0x149)]('❌');
        }
    }
};
function _0x1229() {
    const _0x3aa519 = [
        'tiny',
        'React',
        'data',
        'toLowerCase',
        'length',
        '&alias=',
        '3137856OIVfET',
        'Error\x20shortening\x20URL.',
        '5226564XudyQA',
        'get',
        'error',
        'match',
        '_,*\x0a\x20Gifted\x20Tiny\x20Url\x20Shortener\x20Here.\x0a\x20Please\x20provide\x20a\x20URL\x20to\x20shorten.\x0a*Usage:*\x0a.tiny\x20https://web.giftedtechnexus.co.ke/sessions\x20or\x0a.tiny\x20https://web.giftedtechnexus.co.ke/sessions|Gifted-Md\x20Sessions',
        'Error\x20shortening\x20URL:',
        'map',
        'message',
        'body',
        'short',
        'https://api.maskser.me/api/linkshort/tinyurlwithalias?link=',
        '5MTvalP',
        'reply',
        '10502550UgmeTx',
        '25471810gZzodK',
        '585333FJAlOJ',
        'https://widipe.com/tinyurl?link=',
        'split',
        '1688imnikd',
        'slice',
        '2605136QTaOcu',
        'includes',
        'Hello\x20*_',
        '1WxeAtl',
        'result',
        'shorturl',
        '44086orXccX'
    ];
    _0x1229 = function () {
        return _0x3aa519;
    };
    return _0x1229();
}
export default TinyUrl;
