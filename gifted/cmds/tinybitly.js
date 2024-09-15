(function (_0x365ad0, _0x1b38e1) {
    const _0x5d6c61 = _0x51c2, _0x23381d = _0x365ad0();
    while (!![]) {
        try {
            const _0x55aead = parseInt(_0x5d6c61(0x143)) / 0x1 + -parseInt(_0x5d6c61(0x14f)) / 0x2 * (-parseInt(_0x5d6c61(0x155)) / 0x3) + -parseInt(_0x5d6c61(0x146)) / 0x4 + parseInt(_0x5d6c61(0x15f)) / 0x5 + -parseInt(_0x5d6c61(0x158)) / 0x6 * (parseInt(_0x5d6c61(0x142)) / 0x7) + parseInt(_0x5d6c61(0x152)) / 0x8 * (-parseInt(_0x5d6c61(0x151)) / 0x9) + parseInt(_0x5d6c61(0x161)) / 0xa * (parseInt(_0x5d6c61(0x150)) / 0xb);
            if (_0x55aead === _0x1b38e1)
                break;
            else
                _0x23381d['push'](_0x23381d['shift']());
        } catch (_0x28c301) {
            _0x23381d['push'](_0x23381d['shift']());
        }
    }
}(_0x34a4, 0x6fb62));
import _0xa361fc from 'axios';
function _0x51c2(_0x5d83c9, _0x3b23b9) {
    const _0x34a480 = _0x34a4();
    return _0x51c2 = function (_0x51c214, _0x5ad162) {
        _0x51c214 = _0x51c214 - 0x142;
        let _0x7f54b = _0x34a480[_0x51c214];
        return _0x7f54b;
    }, _0x51c2(_0x5d83c9, _0x3b23b9);
}
function _0x34a4() {
    const _0x1567ca = [
        '2852262YLMnoV',
        '8hchTFU',
        'message',
        'reply',
        '9glFaRk',
        'slice',
        'Error\x20shortening\x20URL:',
        '1481646umzJjl',
        'Hello\x20*_',
        'from',
        'includes',
        'result',
        'data',
        'match',
        '3335745fASDAe',
        'split',
        '10tVdzYD',
        '7pmvBOh',
        '52447eRCwMe',
        'error',
        'React',
        '1030604nDXAVh',
        'https://api.maskser.me/api/linkshort/bitly?link=',
        'bitly',
        'length',
        'trim',
        'Error\x20shortening\x20URL.',
        'body',
        'startsWith',
        'get',
        '353610nClMAt',
        '319759yHGNPd'
    ];
    _0x34a4 = function () {
        return _0x1567ca;
    };
    return _0x34a4();
}
const TinyUrl = async (_0x2c5c90, _0x53e8b4) => {
    const _0x16c801 = _0x51c2, _0x17438a = _0x2c5c90[_0x16c801(0x14c)][_0x16c801(0x15e)](/^[\\/!#.]/), _0x337670 = _0x17438a ? _0x17438a[0x0] : '/', _0xf024e6 = _0x2c5c90[_0x16c801(0x14c)][_0x16c801(0x14d)](_0x337670) ? _0x2c5c90['body'][_0x16c801(0x156)](_0x337670['length'])[_0x16c801(0x160)]('\x20')[0x0]['toLowerCase']() : '', _0x4d40ce = _0x2c5c90[_0x16c801(0x14c)][_0x16c801(0x156)](_0x337670[_0x16c801(0x149)] + _0xf024e6[_0x16c801(0x149)])[_0x16c801(0x14a)](), _0x26ed55 = [
            'bittly',
            _0x16c801(0x148)
        ];
    if (_0x26ed55[_0x16c801(0x15b)](_0xf024e6)) {
        if (!_0x4d40ce)
            return _0x2c5c90['reply'](_0x16c801(0x159) + _0x2c5c90['pushName'] + '_,*\x0a\x20Gifted\x20Bitly\x20Url\x20Shortener\x20Here.\x0a\x20Please\x20Provide\x20a\x20URL\x20to\x20shorten.\x0a*Usage:*\x0a.bitly\x20https://web.giftedtechnexus.co.ke/sessions');
        try {
            await _0x2c5c90[_0x16c801(0x145)]('🕘');
            const _0x5794fa = _0x16c801(0x147) + encodeURIComponent(_0x4d40ce), _0x35b7dc = await _0xa361fc[_0x16c801(0x14e)](_0x5794fa), _0x5d75b9 = _0x35b7dc[_0x16c801(0x15d)][_0x16c801(0x15c)];
            await _0x53e8b4['sendMessage'](_0x2c5c90[_0x16c801(0x15a)], { 'text': _0x5d75b9 }, { 'quoted': _0x2c5c90 }), await _0x2c5c90['React']('✅');
        } catch (_0x2ea384) {
            console[_0x16c801(0x144)](_0x16c801(0x157), _0x2ea384[_0x16c801(0x153)]), _0x2c5c90[_0x16c801(0x154)](_0x16c801(0x14b)), await _0x2c5c90[_0x16c801(0x145)]('❌');
        }
    }
};
export default TinyUrl;
