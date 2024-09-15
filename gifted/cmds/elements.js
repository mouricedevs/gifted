function _0x3822() {
    const _0x2a6c5a = [
        'Could\x20not\x20find\x20the\x20element.\x20Please\x20check\x20your\x20input\x20and\x20try\x20again.',
        '279TCGIPV',
        'atomic_mass',
        '15DVMOQI',
        'error',
        'body',
        '20XdCXNm',
        '14147540fMTZbc',
        'json',
        'split',
        '\x0aAtomic\x20Mass:\x20',
        'discovered_by',
        '\x0aElement\x20Symbol:\x20',
        'Error\x20from\x20Gifted\x20API:',
        'from',
        '3617988ilVktd',
        'symbol',
        '\x0aPeriod:\x20',
        '\x0aDiscovered\x20By:\x20',
        'https://api.popcat.xyz/periodic-table?element=',
        '41604NnQkhj',
        '152301gqQBbj',
        'Hello\x20_*',
        'reply',
        '308lnnyTN',
        '*_\x20,\x20Please\x20use\x20the\x20example:\x0a*.element\x20Sodium*\x20or\x0a*.element\x20Na*',
        'phase',
        '1264550pDnXEa',
        'image',
        'atomic_number',
        'React',
        'element',
        'trim',
        'pushName',
        'match',
        'sendMessage',
        'length',
        'slice',
        '351986iWBfpT',
        '218488bsouEV',
        'includes'
    ];
    _0x3822 = function () {
        return _0x2a6c5a;
    };
    return _0x3822();
}
function _0x1411(_0x205f9f, _0x7321c9) {
    const _0x38225d = _0x3822();
    return _0x1411 = function (_0x141129, _0x56b9c9) {
        _0x141129 = _0x141129 - 0x9e;
        let _0x27f16c = _0x38225d[_0x141129];
        return _0x27f16c;
    }, _0x1411(_0x205f9f, _0x7321c9);
}
(function (_0x25346a, _0x4a599f) {
    const _0x2c419b = _0x1411, _0x20d140 = _0x25346a();
    while (!![]) {
        try {
            const _0x2a98d9 = -parseInt(_0x2c419b(0xa9)) / 0x1 + -parseInt(_0x2c419b(0xba)) / 0x2 * (-parseInt(_0x2c419b(0xc0)) / 0x3) + parseInt(_0x2c419b(0xa3)) / 0x4 + parseInt(_0x2c419b(0xaf)) / 0x5 + parseInt(_0x2c419b(0xa8)) / 0x6 * (parseInt(_0x2c419b(0xac)) / 0x7) + -parseInt(_0x2c419b(0xbb)) / 0x8 * (-parseInt(_0x2c419b(0xbe)) / 0x9) + parseInt(_0x2c419b(0xc3)) / 0xa * (-parseInt(_0x2c419b(0xc4)) / 0xb);
            if (_0x2a98d9 === _0x4a599f)
                break;
            else
                _0x20d140['push'](_0x20d140['shift']());
        } catch (_0x717226) {
            _0x20d140['push'](_0x20d140['shift']());
        }
    }
}(_0x3822, 0x71690));
import _0x31acff from 'node-fetch';
const Element = async (_0x468fbf, _0x41f3ee) => {
    const _0x104252 = _0x1411, _0x265755 = _0x468fbf[_0x104252(0xc2)][_0x104252(0xb6)](/^[\\/!#.]/), _0x459644 = _0x265755 ? _0x265755[0x0] : '/', _0x48a00c = _0x468fbf['body']['startsWith'](_0x459644) ? _0x468fbf[_0x104252(0xc2)][_0x104252(0xb9)](_0x459644['length'])[_0x104252(0xc6)]('\x20')[0x0]['toLowerCase']() : '', _0x4e0b68 = _0x468fbf[_0x104252(0xc2)][_0x104252(0xb9)](_0x459644[_0x104252(0xb8)] + _0x48a00c[_0x104252(0xb8)])[_0x104252(0xb4)](), _0xf3200 = [
            _0x104252(0xb3),
            'elements',
            'ele'
        ];
    if (_0xf3200[_0x104252(0xbc)](_0x48a00c)) {
        if (!_0x4e0b68) {
            await _0x468fbf[_0x104252(0xab)](_0x104252(0xaa) + _0x468fbf[_0x104252(0xb5)] + _0x104252(0xad));
            return;
        }
        try {
            await _0x468fbf[_0x104252(0xb2)]('🕘'), await _0x468fbf[_0x104252(0xab)]('A\x20moment,\x20*Gifted-Md*\x20is\x20Connecting\x20With\x20GiftedApi...');
            const _0x79b32b = _0x104252(0xa7) + encodeURIComponent(_0x4e0b68), _0x4adc09 = await _0x31acff(_0x79b32b), _0x6761aa = await _0x4adc09[_0x104252(0xc5)]();
            if (_0x6761aa && !_0x6761aa[_0x104252(0xc1)]) {
                const _0x168a42 = ('\x0aElement\x20Name:\x20' + _0x6761aa['name'] + _0x104252(0xa0) + _0x6761aa[_0x104252(0xa4)] + '\x0aAtomic\x20Number:\x20' + _0x6761aa[_0x104252(0xb1)] + _0x104252(0x9e) + _0x6761aa[_0x104252(0xbf)] + _0x104252(0xa5) + _0x6761aa['period'] + '\x0aPhase:\x20' + _0x6761aa[_0x104252(0xae)] + _0x104252(0xa6) + _0x6761aa[_0x104252(0x9f)] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20')[_0x104252(0xb4)]();
                _0x6761aa['image'] ? await _0x41f3ee['sendMessage'](_0x468fbf['from'], {
                    'image': { 'url': _0x6761aa[_0x104252(0xb0)] },
                    'caption': _0x168a42
                }, { 'quoted': _0x468fbf }) : await _0x41f3ee[_0x104252(0xb7)](_0x468fbf['from'], { 'text': _0x168a42 }, { 'quoted': _0x468fbf }), await _0x468fbf[_0x104252(0xb2)]('✅');
            } else
                await _0x468fbf[_0x104252(0xb2)]('❌'), await _0x41f3ee[_0x104252(0xb7)](_0x468fbf['from'], { 'text': _0x104252(0xbd) }, { 'quoted': _0x468fbf });
        } catch (_0xa9675a) {
            console['error'](_0x104252(0xa1), _0xa9675a), await _0x468fbf[_0x104252(0xb2)]('❌'), await _0x41f3ee[_0x104252(0xb7)](_0x468fbf[_0x104252(0xa2)], { 'text': 'Failed\x20with\x20an\x20error\x20from\x20Gifted\x20API.\x20Please\x20try\x20again\x20later.' }, { 'quoted': _0x468fbf });
        }
    }
};
export default Element;
