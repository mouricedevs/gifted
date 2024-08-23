(function (_0x101a88, _0x62c55f) {
    const _0x3ce3fe = _0x45f0, _0x41148c = _0x101a88();
    while (!![]) {
        try {
            const _0x406303 = parseInt(_0x3ce3fe(0x1e0)) / 0x1 + -parseInt(_0x3ce3fe(0x1df)) / 0x2 + -parseInt(_0x3ce3fe(0x1e6)) / 0x3 + -parseInt(_0x3ce3fe(0x1dc)) / 0x4 * (parseInt(_0x3ce3fe(0x1d7)) / 0x5) + -parseInt(_0x3ce3fe(0x1d8)) / 0x6 * (-parseInt(_0x3ce3fe(0x1ce)) / 0x7) + -parseInt(_0x3ce3fe(0x1cb)) / 0x8 * (-parseInt(_0x3ce3fe(0x1d0)) / 0x9) + -parseInt(_0x3ce3fe(0x1d1)) / 0xa;
            if (_0x406303 === _0x62c55f)
                break;
            else
                _0x41148c['push'](_0x41148c['shift']());
        } catch (_0xc3861) {
            _0x41148c['push'](_0x41148c['shift']());
        }
    }
}(_0x5edf, 0x746aa));
function _0x45f0(_0x4335df, _0xd58113) {
    const _0x5edfe3 = _0x5edf();
    return _0x45f0 = function (_0x45f034, _0x525842) {
        _0x45f034 = _0x45f034 - 0x1ca;
        let _0x1ef058 = _0x5edfe3[_0x45f034];
        return _0x1ef058;
    }, _0x45f0(_0x4335df, _0xd58113);
}
function _0x5edf() {
    const _0x5a52f3 = [
        '100350wSZANo',
        'length',
        'shizo',
        'text',
        '715012eklDcT',
        'Failed\x20to\x20fetch\x20flirting\x20Message:\x20',
        'slice',
        '239346CYMtYF',
        '158110WQlGWU',
        'includes',
        'startsWith',
        'error',
        'body',
        'split',
        '996438zGDiOj',
        'json',
        'Error\x20fetching\x20flirt\x20message:',
        'match',
        '88rAbTVZ',
        'toLowerCase',
        'flirt',
        '308sOhCvQ',
        'result',
        '449793ruQoYm',
        '3363430TBbkzH',
        'from',
        'sender',
        'sendMessage',
        'Failed\x20to\x20retrieve\x20flirt\x20message.\x20Please\x20try\x20again\x20later.',
        'https://shizoapi.onrender.com/api/texts/flirt?apikey=',
        '5bbJGPQ'
    ];
    _0x5edf = function () {
        return _0x5a52f3;
    };
    return _0x5edf();
}
import _0x1867fa from 'node-fetch';
const flirting = async (_0x518d64, _0x22d31e) => {
    const _0x171ae3 = _0x45f0, _0xcbc455 = _0x518d64[_0x171ae3(0x1e4)][_0x171ae3(0x1ca)](/^[\\/!#.]/), _0x3a8375 = _0xcbc455 ? _0xcbc455[0x0] : '/', _0x1b04e9 = _0x518d64[_0x171ae3(0x1e4)][_0x171ae3(0x1e2)](_0x3a8375) ? _0x518d64[_0x171ae3(0x1e4)][_0x171ae3(0x1de)](_0x3a8375[_0x171ae3(0x1d9)])[_0x171ae3(0x1e5)]('\x20')[0x0][_0x171ae3(0x1cc)]() : '', _0x18b608 = [_0x171ae3(0x1cd)];
    if (_0x18b608[_0x171ae3(0x1e1)](_0x1b04e9))
        try {
            const _0x2d9ff8 = _0x171ae3(0x1da), _0x370516 = await _0x1867fa(_0x171ae3(0x1d6) + _0x2d9ff8);
            if (!_0x370516['ok'])
                throw new Error(_0x171ae3(0x1dd) + await _0x370516[_0x171ae3(0x1db)]());
            const _0x5708a0 = await _0x370516[_0x171ae3(0x1e7)](), _0x2c72b5 = _0x5708a0[_0x171ae3(0x1cf)];
            await _0x22d31e[_0x171ae3(0x1d4)](_0x518d64[_0x171ae3(0x1d2)], {
                'text': _0x2c72b5,
                'mentions': [_0x518d64[_0x171ae3(0x1d3)]]
            }, { 'quoted': _0x518d64 });
        } catch (_0x25e6b5) {
            console[_0x171ae3(0x1e3)](_0x171ae3(0x1e8), _0x25e6b5), await _0x22d31e[_0x171ae3(0x1d4)](_0x518d64[_0x171ae3(0x1d2)], { 'text': _0x171ae3(0x1d5) });
        }
};
export default flirting;
