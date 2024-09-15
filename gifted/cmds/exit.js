(function (_0x160903, _0x5a0a23) {
    const _0x2c68f6 = _0x4faa, _0x1905fb = _0x160903();
    while (!![]) {
        try {
            const _0x40545d = parseInt(_0x2c68f6(0x1d3)) / 0x1 * (-parseInt(_0x2c68f6(0x1c9)) / 0x2) + parseInt(_0x2c68f6(0x1cb)) / 0x3 * (-parseInt(_0x2c68f6(0x1e3)) / 0x4) + -parseInt(_0x2c68f6(0x1d2)) / 0x5 * (-parseInt(_0x2c68f6(0x1d9)) / 0x6) + -parseInt(_0x2c68f6(0x1dd)) / 0x7 * (parseInt(_0x2c68f6(0x1ce)) / 0x8) + -parseInt(_0x2c68f6(0x1de)) / 0x9 * (parseInt(_0x2c68f6(0x1cd)) / 0xa) + -parseInt(_0x2c68f6(0x1e4)) / 0xb + parseInt(_0x2c68f6(0x1d8)) / 0xc * (parseInt(_0x2c68f6(0x1d1)) / 0xd);
            if (_0x40545d === _0x5a0a23)
                break;
            else
                _0x1905fb['push'](_0x1905fb['shift']());
        } catch (_0x3a1068) {
            _0x1905fb['push'](_0x1905fb['shift']());
        }
    }
}(_0x12aa, 0x83986));
function _0x12aa() {
    const _0x5238fe = [
        '16085tdluno',
        '4048KBDfhI',
        'exit',
        'isGroup',
        'includes',
        'user',
        '36ZxzDQY',
        '1980OFjmuI',
        'groupLeave',
        'body',
        'reply',
        '7nqmpNi',
        '1782ICYgfO',
        'error',
        'length',
        'Error:',
        'leave',
        '8440zKUznk',
        '7525529KBLUJa',
        'startsWith',
        '98REgoys',
        '*📛\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS*',
        '1155YNvkCG',
        'decodeJid',
        '9610hheUJa',
        '6922504zxMcPp',
        'left',
        'toLowerCase',
        '9653956swjssz'
    ];
    _0x12aa = function () {
        return _0x5238fe;
    };
    return _0x12aa();
}
function _0x4faa(_0x4e449b, _0x231cbf) {
    const _0x12aa20 = _0x12aa();
    return _0x4faa = function (_0x4faaa7, _0x4d494a) {
        _0x4faaa7 = _0x4faaa7 - 0x1c8;
        let _0x317a9a = _0x12aa20[_0x4faaa7];
        return _0x317a9a;
    }, _0x4faa(_0x4e449b, _0x231cbf);
}
import _0xafbe72 from '../../set.cjs';
const leaveGroup = async (_0x531a3a, _0x280b5c) => {
    const _0x42b6e3 = _0x4faa;
    try {
        const _0x249eb6 = await _0x280b5c[_0x42b6e3(0x1cc)](_0x280b5c[_0x42b6e3(0x1d7)]['id']), _0x17a98a = [
                _0x249eb6,
                _0xafbe72['OWNER_NUMBER'] + '@s.whatsapp.net'
            ][_0x42b6e3(0x1d6)](_0x531a3a['sender']), _0x323c56 = _0x531a3a[_0x42b6e3(0x1db)]['match'](/^[\\/!#.]/), _0x3153de = _0x323c56 ? _0x323c56[0x0] : '/', _0x1857cb = _0x531a3a[_0x42b6e3(0x1db)][_0x42b6e3(0x1c8)](_0x3153de) ? _0x531a3a[_0x42b6e3(0x1db)]['slice'](_0x3153de[_0x42b6e3(0x1e0)])['split']('\x20')[0x0][_0x42b6e3(0x1d0)]() : '', _0x15c137 = [
                _0x42b6e3(0x1e2),
                _0x42b6e3(0x1d4),
                _0x42b6e3(0x1cf)
            ];
        if (!_0x15c137[_0x42b6e3(0x1d6)](_0x1857cb))
            return;
        if (!_0x531a3a[_0x42b6e3(0x1d5)])
            return _0x531a3a[_0x42b6e3(0x1dc)](_0x42b6e3(0x1ca));
        if (!_0x17a98a)
            return _0x531a3a['reply']('*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*');
        await _0x280b5c[_0x42b6e3(0x1da)](_0x531a3a['from']);
    } catch (_0x1cca78) {
        console[_0x42b6e3(0x1df)](_0x42b6e3(0x1e1), _0x1cca78);
    }
};
export default leaveGroup;
