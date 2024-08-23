(function (_0x1d15cf, _0x33d795) {
    const _0xeffeaa = _0x3ca0, _0x431c79 = _0x1d15cf();
    while (!![]) {
        try {
            const _0xb40046 = -parseInt(_0xeffeaa(0xb6)) / 0x1 * (parseInt(_0xeffeaa(0xd2)) / 0x2) + parseInt(_0xeffeaa(0xb2)) / 0x3 * (-parseInt(_0xeffeaa(0xb5)) / 0x4) + -parseInt(_0xeffeaa(0xc0)) / 0x5 + -parseInt(_0xeffeaa(0xcb)) / 0x6 * (-parseInt(_0xeffeaa(0xb9)) / 0x7) + parseInt(_0xeffeaa(0xbf)) / 0x8 * (-parseInt(_0xeffeaa(0xcc)) / 0x9) + parseInt(_0xeffeaa(0xc8)) / 0xa * (parseInt(_0xeffeaa(0xc5)) / 0xb) + parseInt(_0xeffeaa(0xbe)) / 0xc;
            if (_0xb40046 === _0x33d795)
                break;
            else
                _0x431c79['push'](_0x431c79['shift']());
        } catch (_0x5d5d53) {
            _0x431c79['push'](_0x431c79['shift']());
        }
    }
}(_0xad90, 0x8b089));
function _0x3ca0(_0x3fa183, _0x21006c) {
    const _0xad902 = _0xad90();
    return _0x3ca0 = function (_0x3ca0ef, _0x1a8d1f) {
        _0x3ca0ef = _0x3ca0ef - 0xb2;
        let _0x204170 = _0xad902[_0x3ca0ef];
        return _0x204170;
    }, _0x3ca0(_0x3fa183, _0x21006c);
}
import _0x1fe59e from 'node-fetch';
function _0xad90() {
    const _0x41d66d = [
        'Error\x20from\x20Gifted\x20APi.\x20Please\x20try\x20again\x20later.',
        'to-speech',
        'sendMessage',
        'text-to-speech',
        '4EDtpQi',
        'trim',
        '88278rxJyWi',
        'json',
        'length',
        '116MIcsmk',
        '104894FYaWEW',
        'body',
        'tts',
        '7483zWMqtF',
        'startsWith',
        'toLowerCase',
        'reply',
        'slice',
        '19931100WOyjku',
        '216rCEwLg',
        '3159385NHoIkD',
        '&lang=en-US',
        'Hello\x20_*',
        'match',
        'from',
        '11ObjdNO',
        'error',
        'tospeech',
        '7031590GteFrp',
        'pushName',
        '*_\x20Please\x20insert\x20text\x20to\x20be\x20converted\x20to\x20speech!\x0a\x20Usage:\x20.tts\x20I\x20am\x20Gifted-Md\x20Whatsapp\x20Bot',
        '1698nmQhGI',
        '134037oFPPus',
        'https://api.maskser.me/api/soundoftext?text='
    ];
    _0xad90 = function () {
        return _0x41d66d;
    };
    return _0xad90();
}
const TtsDl = async (_0x385044, _0x217a72) => {
    const _0x17ee3a = _0x3ca0, _0x5eb65c = _0x385044[_0x17ee3a(0xb7)][_0x17ee3a(0xc3)](/^[\\/!#.]/), _0x311177 = _0x5eb65c ? _0x5eb65c[0x0] : '/', _0x10e352 = _0x385044[_0x17ee3a(0xb7)][_0x17ee3a(0xba)](_0x311177) ? _0x385044[_0x17ee3a(0xb7)][_0x17ee3a(0xbd)](_0x311177[_0x17ee3a(0xb4)])['split']('\x20')[0x0][_0x17ee3a(0xbb)]() : '', _0x2ebbcd = _0x385044[_0x17ee3a(0xb7)][_0x17ee3a(0xbd)](_0x311177['length'] + _0x10e352[_0x17ee3a(0xb4)])[_0x17ee3a(0xd3)](), _0x4f39d1 = [
            _0x17ee3a(0xb8),
            _0x17ee3a(0xc7),
            _0x17ee3a(0xcf),
            _0x17ee3a(0xd1)
        ];
    if (_0x4f39d1['includes'](_0x10e352))
        try {
            if (!_0x2ebbcd[0x0])
                return _0x385044[_0x17ee3a(0xbc)](_0x17ee3a(0xc2) + _0x385044[_0x17ee3a(0xc9)] + _0x17ee3a(0xca));
            const _0x1197e8 = await _0x1fe59e(_0x17ee3a(0xcd) + _0x2ebbcd + _0x17ee3a(0xc1)), _0x596fb6 = await _0x1197e8[_0x17ee3a(0xb3)](), _0x440714 = _0x596fb6['result'];
            _0x217a72[_0x17ee3a(0xd0)](_0x385044[_0x17ee3a(0xc4)], {
                'audio': { 'url': _0x440714 },
                'mimetype': 'audio/mpeg'
            }, { 'quoted': _0x385044 });
        } catch (_0x16d9f9) {
            console[_0x17ee3a(0xc6)]('Error\x20from\x20Gifted\x20APi:', _0x16d9f9), await _0x217a72[_0x17ee3a(0xd0)](_0x385044[_0x17ee3a(0xc4)], { 'text': _0x17ee3a(0xce) }, { 'quoted': _0x385044 });
        }
};
export default TtsDl;
