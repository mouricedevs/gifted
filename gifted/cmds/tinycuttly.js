function _0xee15() {
    const _0x49634d = [
        'Hello\x20*_',
        '358970RuDMEI',
        'slice',
        '1066009ftzJeW',
        'split',
        'message',
        'from',
        'Error\x20shortening\x20URL.',
        '15415eVLqPc',
        '309182etSBbL',
        '32ZGsJKL',
        'startsWith',
        'body',
        'cutly',
        'match',
        '_,*\x0a\x20Gifted\x20Cuttly\x20Url\x20Shortener\x20Here.\x0a\x20Please\x20Provide\x20a\x20URL\x20to\x20shorten.\x0a*Usage:*\x0a.cuttly\x20https://web.giftedtechnexus.co.ke/sessions',
        '473676eFFPZl',
        'React',
        'toLowerCase',
        '352494qzIgIe',
        'trim',
        '3ssEfKm',
        '256644bydFkB',
        'length',
        'Error\x20shortening\x20URL:',
        'result',
        'reply'
    ];
    _0xee15 = function () {
        return _0x49634d;
    };
    return _0xee15();
}
(function (_0x34f246, _0x2cdad1) {
    const _0x2431f6 = _0x279d, _0x45b8eb = _0x34f246();
    while (!![]) {
        try {
            const _0x1bdcdf = parseInt(_0x2431f6(0x1fd)) / 0x1 + parseInt(_0x2431f6(0x1fe)) / 0x2 + parseInt(_0x2431f6(0x1ef)) / 0x3 * (-parseInt(_0x2431f6(0x1f0)) / 0x4) + -parseInt(_0x2431f6(0x1f6)) / 0x5 + parseInt(_0x2431f6(0x1ea)) / 0x6 + -parseInt(_0x2431f6(0x1f8)) / 0x7 + parseInt(_0x2431f6(0x1ff)) / 0x8 * (parseInt(_0x2431f6(0x1ed)) / 0x9);
            if (_0x1bdcdf === _0x2cdad1)
                break;
            else
                _0x45b8eb['push'](_0x45b8eb['shift']());
        } catch (_0x5f7943) {
            _0x45b8eb['push'](_0x45b8eb['shift']());
        }
    }
}(_0xee15, 0x1ca7e));
import _0x4e183d from 'axios';
function _0x279d(_0x372bf4, _0x378618) {
    const _0xee15df = _0xee15();
    return _0x279d = function (_0x279db1, _0x1b853e) {
        _0x279db1 = _0x279db1 - 0x1e8;
        let _0x59ae5f = _0xee15df[_0x279db1];
        return _0x59ae5f;
    }, _0x279d(_0x372bf4, _0x378618);
}
const TinyUrl = async (_0x561ed9, _0x5677f1) => {
    const _0x4dee8b = _0x279d, _0x3483fd = _0x561ed9[_0x4dee8b(0x201)][_0x4dee8b(0x1e8)](/^[\\/!#.]/), _0x13fed9 = _0x3483fd ? _0x3483fd[0x0] : '/', _0x1e5e41 = _0x561ed9[_0x4dee8b(0x201)][_0x4dee8b(0x200)](_0x13fed9) ? _0x561ed9[_0x4dee8b(0x201)]['slice'](_0x13fed9[_0x4dee8b(0x1f1)])[_0x4dee8b(0x1f9)]('\x20')[0x0][_0x4dee8b(0x1ec)]() : '', _0x453d58 = _0x561ed9[_0x4dee8b(0x201)][_0x4dee8b(0x1f7)](_0x13fed9[_0x4dee8b(0x1f1)] + _0x1e5e41['length'])[_0x4dee8b(0x1ee)](), _0x2931ac = [
            'cuttly',
            _0x4dee8b(0x202)
        ];
    if (_0x2931ac['includes'](_0x1e5e41)) {
        if (!_0x453d58)
            return _0x561ed9[_0x4dee8b(0x1f4)](_0x4dee8b(0x1f5) + _0x561ed9['pushName'] + _0x4dee8b(0x1e9));
        try {
            await _0x561ed9['React']('🕘');
            const _0x4988ac = 'https://api.maskser.me/api/linkshort/cuttly?link=' + encodeURIComponent(_0x453d58), _0x273093 = await _0x4e183d['get'](_0x4988ac), _0x54a85c = _0x273093['data'][_0x4dee8b(0x1f3)];
            await _0x5677f1['sendMessage'](_0x561ed9[_0x4dee8b(0x1fb)], { 'text': _0x54a85c }, { 'quoted': _0x561ed9 }), await _0x561ed9['React']('✅');
        } catch (_0x32cc9c) {
            console['error'](_0x4dee8b(0x1f2), _0x32cc9c[_0x4dee8b(0x1fa)]), _0x561ed9[_0x4dee8b(0x1f4)](_0x4dee8b(0x1fc)), await _0x561ed9[_0x4dee8b(0x1eb)]('❌');
        }
    }
};
export default TinyUrl;
