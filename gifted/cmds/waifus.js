(function (_0x3433ac, _0x2a67d8) {
    const _0x20fa81 = _0x208b, _0x3c2207 = _0x3433ac();
    while (!![]) {
        try {
            const _0x4cb8d0 = parseInt(_0x20fa81(0x1c4)) / 0x1 * (parseInt(_0x20fa81(0x1d0)) / 0x2) + parseInt(_0x20fa81(0x1e8)) / 0x3 + parseInt(_0x20fa81(0x1e9)) / 0x4 * (-parseInt(_0x20fa81(0x1c7)) / 0x5) + -parseInt(_0x20fa81(0x1bf)) / 0x6 * (parseInt(_0x20fa81(0x1cc)) / 0x7) + parseInt(_0x20fa81(0x1ec)) / 0x8 + parseInt(_0x20fa81(0x1d2)) / 0x9 * (-parseInt(_0x20fa81(0x1db)) / 0xa) + parseInt(_0x20fa81(0x1c0)) / 0xb * (parseInt(_0x20fa81(0x1e4)) / 0xc);
            if (_0x4cb8d0 === _0x2a67d8)
                break;
            else
                _0x3c2207['push'](_0x3c2207['shift']());
        } catch (_0x30a95c) {
            _0x3c2207['push'](_0x3c2207['shift']());
        }
    }
}(_0x34d0, 0x532aa));
function _0x34d0() {
    const _0x2a1e06 = [
        'cuddle',
        'wink',
        '5322nXlUCe',
        '1947UuonhG',
        'highfive',
        'blush',
        'nom',
        '4SJMdbx',
        'url',
        'handhold',
        '5mOobxs',
        'cringe',
        'dance',
        'smile',
        'wave',
        '5061PAKOqX',
        'Error\x20fetching\x20sticker:',
        'kick',
        '𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃',
        '258268lPHpkF',
        'Gifted\x20Tech',
        '2763729QUwjIG',
        'cry',
        'reply',
        'bully',
        'slap',
        'split',
        'from',
        'bite',
        'toLowerCase',
        '10qqZhIh',
        'shinobu',
        'kill',
        'poke',
        'length',
        'pat',
        'get',
        'smug',
        'bonk',
        '480uQdORh',
        'hug',
        'Error\x20fetching\x20sticker.',
        'body',
        '1400121qFNalp',
        '877228wNdtVA',
        'slice',
        'match',
        '4144128VRhinQ'
    ];
    _0x34d0 = function () {
        return _0x2a1e06;
    };
    return _0x34d0();
}
function _0x208b(_0x48e454, _0x12d6f1) {
    const _0x34d085 = _0x34d0();
    return _0x208b = function (_0x208be1, _0x19f584) {
        _0x208be1 = _0x208be1 - 0x1be;
        let _0x12ee8c = _0x34d085[_0x208be1];
        return _0x12ee8c;
    }, _0x208b(_0x48e454, _0x12d6f1);
}
import _0x7c6e62 from 'axios';
const stickerCommand = async (_0x3dccef, _0x3ead23) => {
    const _0x311f39 = _0x208b, _0xede95b = _0x3dccef[_0x311f39(0x1e7)][_0x311f39(0x1eb)](/^[\\/!#.]/), _0x16d597 = _0xede95b ? _0xede95b[0x0] : '/', _0x128021 = _0x3dccef[_0x311f39(0x1e7)]['startsWith'](_0x16d597) ? _0x3dccef[_0x311f39(0x1e7)][_0x311f39(0x1ea)](_0x16d597[_0x311f39(0x1df)])[_0x311f39(0x1d7)]('\x20')[0x0][_0x311f39(0x1da)]() : '', _0x45b704 = [
            _0x311f39(0x1d3),
            'kiss',
            _0x311f39(0x1dd),
            _0x311f39(0x1ce),
            _0x311f39(0x1e5),
            _0x311f39(0x1e0),
            'lick',
            _0x311f39(0x1d9),
            'yeet',
            _0x311f39(0x1d5),
            _0x311f39(0x1e3),
            _0x311f39(0x1be),
            _0x311f39(0x1de),
            _0x311f39(0x1c3),
            _0x311f39(0x1d6),
            _0x311f39(0x1ca),
            _0x311f39(0x1cb),
            'awoo',
            _0x311f39(0x1c2),
            _0x311f39(0x1e2),
            _0x311f39(0x1c9),
            'happy',
            'sad',
            _0x311f39(0x1c8),
            _0x311f39(0x1ed),
            _0x311f39(0x1dc),
            _0x311f39(0x1c6),
            'glomp',
            _0x311f39(0x1c1)
        ];
    if (_0x45b704['includes'](_0x128021)) {
        const _0x4ecadd = _0x311f39(0x1cf), _0x148930 = _0x311f39(0x1d1);
        try {
            const {data: _0x27a1ca} = await _0x7c6e62[_0x311f39(0x1e1)]('https://api.waifu.pics/sfw/' + _0x128021);
            _0x27a1ca && _0x27a1ca[_0x311f39(0x1c5)] ? _0x3ead23['sendImageAsSticker'](_0x3dccef[_0x311f39(0x1d8)], _0x27a1ca['url'], _0x3dccef, {
                'packname': _0x4ecadd,
                'author': _0x148930
            }) : _0x3dccef[_0x311f39(0x1d4)]('Error\x20fetching\x20sticker.');
        } catch (_0x3da13c) {
            console['error'](_0x311f39(0x1cd), _0x3da13c), _0x3dccef[_0x311f39(0x1d4)](_0x311f39(0x1e6));
        }
    }
};
export default stickerCommand;
