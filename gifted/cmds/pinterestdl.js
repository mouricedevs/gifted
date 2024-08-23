(function (_0x1ff64f, _0x3066a7) {
    const _0x4f8f8d = _0x2eda, _0x37e5e0 = _0x1ff64f();
    while (!![]) {
        try {
            const _0x3ee00b = parseInt(_0x4f8f8d(0xde)) / 0x1 + parseInt(_0x4f8f8d(0xd4)) / 0x2 * (parseInt(_0x4f8f8d(0xcf)) / 0x3) + -parseInt(_0x4f8f8d(0xdf)) / 0x4 + parseInt(_0x4f8f8d(0xd8)) / 0x5 + -parseInt(_0x4f8f8d(0xcb)) / 0x6 + parseInt(_0x4f8f8d(0xdb)) / 0x7 * (-parseInt(_0x4f8f8d(0xd6)) / 0x8) + -parseInt(_0x4f8f8d(0xe1)) / 0x9;
            if (_0x3ee00b === _0x3066a7)
                break;
            else
                _0x37e5e0['push'](_0x37e5e0['shift']());
        } catch (_0x4d967b) {
            _0x37e5e0['push'](_0x37e5e0['shift']());
        }
    }
}(_0x48ce, 0xd275d));
import _0x2673e7 from 'axios';
const sleep = _0x774e34 => new Promise(_0x3587f1 => setTimeout(_0x3587f1, _0x774e34)), imageCommand = async (_0x214f85, _0x53bda1) => {
        const _0x4231ca = _0x2eda, _0x299964 = _0x214f85[_0x4231ca(0xc9)][_0x4231ca(0xd2)](/^[\\/!#.]/), _0x216ac9 = _0x299964 ? _0x299964[0x0] : '/', _0xcb9911 = _0x214f85[_0x4231ca(0xc9)]['startsWith'](_0x216ac9) ? _0x214f85['body'][_0x4231ca(0xd0)](_0x216ac9['length'])[_0x4231ca(0xd3)]('\x20')[0x0]['toLowerCase']() : '', _0x313178 = _0x214f85[_0x4231ca(0xc9)][_0x4231ca(0xd0)](_0x216ac9[_0x4231ca(0xe4)] + _0xcb9911[_0x4231ca(0xe4)])[_0x4231ca(0xcc)](), _0x227276 = _0x313178, _0x3826f4 = [
                _0x4231ca(0xe6),
                _0x4231ca(0xc8),
                _0x4231ca(0xc7),
                'pintrestdl'
            ];
        if (_0x3826f4['includes'](_0xcb9911)) {
            if (!_0x227276)
                return _0x53bda1['sendMessage'](_0x214f85[_0x4231ca(0xdd)], { 'text': _0x4231ca(0xd1) + (_0x216ac9 + _0xcb9911) + _0x4231ca(0xe2) });
            try {
                await _0x214f85['React']('📥');
                const _0x3e8357 = await _0x2673e7['get'](_0x4231ca(0xe5) + encodeURIComponent(_0x227276)), _0x48a517 = _0x3e8357[_0x4231ca(0xca)][_0x4231ca(0xe3)][_0x4231ca(0xd0)](0x0, 0xa);
                if (_0x48a517[_0x4231ca(0xe4)] === 0x0)
                    return _0x53bda1[_0x4231ca(0xd5)](_0x214f85[_0x4231ca(0xdd)], { 'text': _0x4231ca(0xce) });
                for (const _0x496794 of _0x48a517) {
                    await sleep(0x1f4);
                    const _0x12cc43 = await _0x2673e7[_0x4231ca(0xd9)](_0x496794, { 'responseType': _0x4231ca(0xcd) }), _0x4c2e0c = Buffer['from'](_0x12cc43[_0x4231ca(0xca)], _0x4231ca(0xda));
                    await _0x53bda1['sendMessage'](_0x214f85['from'], { 'image': _0x4c2e0c }, { 'quoted': _0x214f85 }), await _0x214f85[_0x4231ca(0xd7)]('✅');
                }
            } catch (_0x3edcf1) {
                console[_0x4231ca(0xdc)](_0x4231ca(0xe0), _0x3edcf1), await _0x53bda1[_0x4231ca(0xd5)](_0x214f85[_0x4231ca(0xdd)], { 'text': 'Error\x20fetching\x20images.' });
            }
        }
    };
function _0x2eda(_0x1fab26, _0x4b054b) {
    const _0x48cea2 = _0x48ce();
    return _0x2eda = function (_0x2eda91, _0x4d103b) {
        _0x2eda91 = _0x2eda91 - 0xc7;
        let _0x5dc31f = _0x48cea2[_0x2eda91];
        return _0x5dc31f;
    }, _0x2eda(_0x1fab26, _0x4b054b);
}
export default imageCommand;
function _0x48ce() {
    const _0x2dc2d1 = [
        'sendMessage',
        '1434472IaroPh',
        'React',
        '7098100wMbkQu',
        'get',
        'binary',
        '7kzSybN',
        'error',
        'from',
        '1492246izjPfy',
        '3485740ajskjw',
        'Error\x20fetching\x20images:',
        '2027259Yaltbq',
        '\x20<search\x20query>',
        'result',
        'length',
        'https://api.maskser.me/api/search/pinterest?text=',
        'pintrest',
        'pintdl',
        'pint',
        'body',
        'data',
        '8679678hHOZkC',
        'trim',
        'arraybuffer',
        'No\x20images\x20found\x20for\x20your\x20search\x20query.',
        '3Neflag',
        'slice',
        'Usage:\x20',
        'match',
        'split',
        '1345574MwaWZQ'
    ];
    _0x48ce = function () {
        return _0x2dc2d1;
    };
    return _0x48ce();
}
