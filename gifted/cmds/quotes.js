(function (_0x23c01b, _0x3fe49b) {
    const _0x5d8d60 = _0x3a23, _0x2fae4e = _0x23c01b();
    while (!![]) {
        try {
            const _0x120037 = parseInt(_0x5d8d60(0x1ea)) / 0x1 + parseInt(_0x5d8d60(0x1e5)) / 0x2 + -parseInt(_0x5d8d60(0x1e7)) / 0x3 * (-parseInt(_0x5d8d60(0x1d4)) / 0x4) + parseInt(_0x5d8d60(0x1dc)) / 0x5 * (-parseInt(_0x5d8d60(0x1ee)) / 0x6) + parseInt(_0x5d8d60(0x1e1)) / 0x7 * (parseInt(_0x5d8d60(0x1d8)) / 0x8) + parseInt(_0x5d8d60(0x1e6)) / 0x9 + -parseInt(_0x5d8d60(0x1d9)) / 0xa;
            if (_0x120037 === _0x3fe49b)
                break;
            else
                _0x2fae4e['push'](_0x2fae4e['shift']());
        } catch (_0x51f9ca) {
            _0x2fae4e['push'](_0x2fae4e['shift']());
        }
    }
}(_0x305f, 0x877b4));
import _0x8877b6 from 'node-fetch';
function _0x3a23(_0x524012, _0x2abb40) {
    const _0x305f21 = _0x305f();
    return _0x3a23 = function (_0x3a23f1, _0x4574b4) {
        _0x3a23f1 = _0x3a23f1 - 0x1d4;
        let _0xb5b117 = _0x305f21[_0x3a23f1];
        return _0xb5b117;
    }, _0x3a23(_0x524012, _0x2abb40);
}
const quotes = async (_0x8e15d2, _0x14aa6b) => {
    const _0x35c3d1 = _0x3a23, _0x1fad15 = _0x8e15d2[_0x35c3d1(0x1dd)][_0x35c3d1(0x1d5)](/^[\\/!#.]/), _0x43b037 = _0x1fad15 ? _0x1fad15[0x0] : '/', _0x42ae94 = _0x8e15d2[_0x35c3d1(0x1dd)][_0x35c3d1(0x1ef)](_0x43b037) ? _0x8e15d2['body'][_0x35c3d1(0x1e9)](_0x43b037[_0x35c3d1(0x1e3)])[_0x35c3d1(0x1da)]('\x20')[0x0][_0x35c3d1(0x1e0)]() : '', _0x473fde = [
            _0x35c3d1(0x1df),
            _0x35c3d1(0x1f1)
        ];
    if (_0x473fde['includes'](_0x42ae94))
        try {
            const _0x17956e = _0x35c3d1(0x1d7), _0x1c53d2 = await _0x8877b6(_0x35c3d1(0x1eb) + _0x17956e);
            if (!_0x1c53d2['ok'])
                throw new Error(_0x35c3d1(0x1e8) + await _0x1c53d2[_0x35c3d1(0x1ec)]());
            const _0x3a5dbf = await _0x1c53d2[_0x35c3d1(0x1d6)](), _0x77f2a3 = _0x3a5dbf[_0x35c3d1(0x1f0)];
            await _0x14aa6b[_0x35c3d1(0x1ed)](_0x8e15d2[_0x35c3d1(0x1de)], {
                'text': _0x77f2a3,
                'mentions': [_0x8e15d2[_0x35c3d1(0x1db)]]
            }, { 'quoted': _0x8e15d2 });
        } catch (_0x29794a) {
            console[_0x35c3d1(0x1e2)]('Error\x20fetching\x20quotes:', _0x29794a), await _0x14aa6b[_0x35c3d1(0x1ed)](_0x8e15d2['from'], { 'text': _0x35c3d1(0x1e4) });
        }
};
export default quotes;
function _0x305f() {
    const _0x58e4d4 = [
        'body',
        'from',
        'quote',
        'toLowerCase',
        '7UncEQd',
        'error',
        'length',
        'Failed\x20to\x20retrieve\x20quotes.\x20Please\x20try\x20again\x20later.',
        '998824NnjiTN',
        '8168472jHfdiD',
        '3MrbJGO',
        'Failed\x20to\x20fetch\x20quotes:\x20',
        'slice',
        '864991ygbKEe',
        'https://shizoapi.onrender.com/api/texts/quotes?apikey=',
        'text',
        'sendMessage',
        '6HQZoIX',
        'startsWith',
        'result',
        'quotes',
        '1030316XHzcho',
        'match',
        'json',
        'shizo',
        '4741720ceqRpW',
        '22294240oErIcC',
        'split',
        'sender',
        '1689745gqowgo'
    ];
    _0x305f = function () {
        return _0x58e4d4;
    };
    return _0x305f();
}
