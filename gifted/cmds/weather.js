function _0x52f3() {
    const _0x5e6d22 = [
        '\x0a*Current\x20Temperature:*\x20',
        ':*\x0a\x0a*Location:*\x20',
        'Error\x20getting\x20Gifted\x20API\x20response:',
        '\x0a\x0a>\x20©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝟓',
        '\x0a*Wind\x20Speed:*\x20',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Generating\x20Your\x20Weather\x20Search\x20Request...',
        '\x0a*Humidity:*\x20',
        '4HmgsrM',
        'React',
        '\x0a*Country:*\x20',
        '_,*\x0aPlease\x20provide\x20a\x20city/location\x20name\x20after\x20the\x20command,\x20e.g.,\x20*.weather\x20Nairobi*',
        'pushName',
        'startsWith',
        '5795436ybWTVC',
        'Invalid\x20response\x20from\x20the\x20Gifted\x20API.',
        'Error\x20getting\x20response\x20from\x20Gifted\x20API.',
        '979716BlWQRu',
        '2026122hkRaBS',
        'slice',
        '128EDpUFO',
        'sendMessage',
        'split',
        '306Rvitao',
        '\x0a*Maximum\x20Temperature:*\x20',
        'status',
        '\x0a*Minimum\x20Temperature:*\x20',
        'includes',
        '\x0a*Weather:*\x20',
        '*Weather\x20Search\x20Results\x20for\x20',
        '752860xUawFj',
        '374185FGrzyz',
        'data',
        '251772HbusEf',
        'result',
        'length',
        'reply',
        'match',
        'message',
        '4848115WZFGAW',
        'body',
        'Hello\x20*_'
    ];
    _0x52f3 = function () {
        return _0x5e6d22;
    };
    return _0x52f3();
}
function _0x4bb0(_0x34d493, _0x58f2ab) {
    const _0x52f397 = _0x52f3();
    return _0x4bb0 = function (_0x4bb06f, _0x15fc2a) {
        _0x4bb06f = _0x4bb06f - 0xa6;
        let _0x55b94a = _0x52f397[_0x4bb06f];
        return _0x55b94a;
    }, _0x4bb0(_0x34d493, _0x58f2ab);
}
(function (_0x3ea2c1, _0xbe7784) {
    const _0x319623 = _0x4bb0, _0x2483d6 = _0x3ea2c1();
    while (!![]) {
        try {
            const _0x2fcc7a = -parseInt(_0x319623(0xac)) / 0x1 * (parseInt(_0x319623(0xbc)) / 0x2) + -parseInt(_0x319623(0xc6)) / 0x3 + parseInt(_0x319623(0xc5)) / 0x4 + -parseInt(_0x319623(0xb2)) / 0x5 + -parseInt(_0x319623(0xc2)) / 0x6 + -parseInt(_0x319623(0xaa)) / 0x7 * (-parseInt(_0x319623(0xc8)) / 0x8) + -parseInt(_0x319623(0xcb)) / 0x9 * (-parseInt(_0x319623(0xa9)) / 0xa);
            if (_0x2fcc7a === _0xbe7784)
                break;
            else
                _0x2483d6['push'](_0x2483d6['shift']());
        } catch (_0x25a8e3) {
            _0x2483d6['push'](_0x2483d6['shift']());
        }
    }
}(_0x52f3, 0x852ce));
import _0x2646d8 from 'axios';
import _0x51d635, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0x51d635, weatherCommand = async (_0x75b7ef, _0x269fee) => {
        const _0x85e604 = _0x4bb0, _0x597aad = _0x75b7ef[_0x85e604(0xb3)][_0x85e604(0xb0)](/^[\\/!#.]/), _0x31bc5c = _0x597aad ? _0x597aad[0x0] : '/', _0xf94c72 = _0x75b7ef[_0x85e604(0xb3)][_0x85e604(0xc1)](_0x31bc5c) ? _0x75b7ef[_0x85e604(0xb3)][_0x85e604(0xc7)](_0x31bc5c[_0x85e604(0xae)])[_0x85e604(0xca)]('\x20')[0x0]['toLowerCase']() : '', _0x52ae10 = _0x75b7ef[_0x85e604(0xb3)][_0x85e604(0xc7)](_0x31bc5c[_0x85e604(0xae)] + _0xf94c72[_0x85e604(0xae)])['trim'](), _0x302314 = ['weather'];
        if (_0x302314[_0x85e604(0xa6)](_0xf94c72)) {
            if (!_0x52ae10)
                return _0x75b7ef[_0x85e604(0xaf)](_0x85e604(0xb4) + _0x75b7ef[_0x85e604(0xc0)] + _0x85e604(0xbf));
            try {
                await _0x75b7ef['React']('🕘'), await _0x75b7ef[_0x85e604(0xaf)](_0x85e604(0xba));
                const _0x56b1f5 = 'https://widipe.com/weather?text=' + encodeURIComponent(_0x52ae10), _0x59e481 = await _0x2646d8['get'](_0x56b1f5), _0x459758 = _0x59e481[_0x85e604(0xab)];
                if (_0x459758 && _0x459758[_0x85e604(0xcd)] && _0x459758[_0x85e604(0xad)]) {
                    const {
                            location: _0x389e34,
                            country: _0x92ad0d,
                            weather: _0x32af7c,
                            currentTemp: _0x5da21c,
                            maxTemp: _0x4c8179,
                            minTemp: _0x75f797,
                            humidity: _0x286d67,
                            windSpeed: _0x290a2d
                        } = _0x459758[_0x85e604(0xad)], _0xdd3f56 = _0x85e604(0xa8) + _0x52ae10 + _0x85e604(0xb6) + _0x389e34 + _0x85e604(0xbe) + _0x92ad0d + _0x85e604(0xa7) + _0x32af7c + _0x85e604(0xb5) + _0x5da21c + _0x85e604(0xcc) + _0x4c8179 + _0x85e604(0xce) + _0x75f797 + _0x85e604(0xbb) + _0x286d67 + _0x85e604(0xb9) + _0x290a2d + _0x85e604(0xb8);
                    await _0x269fee[_0x85e604(0xc9)](_0x75b7ef['from'], { 'text': _0xdd3f56 }, { 'quoted': _0x75b7ef }), await _0x75b7ef[_0x85e604(0xbd)]('✅');
                } else
                    throw new Error(_0x85e604(0xc3));
            } catch (_0x35add7) {
                console['error'](_0x85e604(0xb7), _0x35add7[_0x85e604(0xb1)]), await _0x75b7ef[_0x85e604(0xaf)](_0x85e604(0xc4)), await _0x75b7ef[_0x85e604(0xbd)]('❌');
            }
        }
    };
export default weatherCommand;
