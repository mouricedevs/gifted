(function (_0x1eb95e, _0x5450fd) {
    const _0x290def = _0xc760, _0x2b7708 = _0x1eb95e();
    while (!![]) {
        try {
            const _0x3b6f02 = parseInt(_0x290def(0x177)) / 0x1 * (-parseInt(_0x290def(0x176)) / 0x2) + parseInt(_0x290def(0x178)) / 0x3 * (-parseInt(_0x290def(0x17d)) / 0x4) + parseInt(_0x290def(0x17b)) / 0x5 + parseInt(_0x290def(0x185)) / 0x6 + parseInt(_0x290def(0x17c)) / 0x7 + -parseInt(_0x290def(0x183)) / 0x8 + -parseInt(_0x290def(0x18c)) / 0x9;
            if (_0x3b6f02 === _0x5450fd)
                break;
            else
                _0x2b7708['push'](_0x2b7708['shift']());
        } catch (_0x4fc85f) {
            _0x2b7708['push'](_0x2b7708['shift']());
        }
    }
}(_0x2fc5, 0xf3f65));
import _0x5e1570 from 'fs/promises';
const handleTakeCommand = async (_0x58d130, _0x43b3e3) => {
    const _0x5c2a74 = _0xc760, _0x19c234 = _0x58d130['body'][_0x5c2a74(0x181)](/^[\\/!#.]/), _0x6e3517 = _0x19c234 ? _0x19c234[0x0] : '/', [_0x4ab58d, ..._0xa57536] = _0x58d130['body']['startsWith'](_0x6e3517) ? _0x58d130[_0x5c2a74(0x18a)]['slice'](_0x6e3517[_0x5c2a74(0x17e)])['split']('\x20') : [
            '',
            ''
        ];
    if (_0x4ab58d !== 'take')
        return;
    const [_0x43cc65, _0x2ee5e5] = _0xa57536[_0x5c2a74(0x180)]('\x20')[_0x5c2a74(0x184)]('|');
    if (!_0x43cc65 || !_0x2ee5e5)
        return _0x58d130[_0x5c2a74(0x188)]('Use:\x20.take\x20packname|author');
    global[_0x5c2a74(0x18b)] = _0x43cc65, global[_0x5c2a74(0x182)] = _0x2ee5e5;
    const _0x5322c3 = _0x58d130[_0x5c2a74(0x17f)] || {};
    if (![
            'imageMessage',
            'videoMessage',
            'stickerMessage'
        ][_0x5c2a74(0x189)](_0x5322c3[_0x5c2a74(0x17a)]))
        return _0x58d130[_0x5c2a74(0x188)](_0x5c2a74(0x187) + (_0x6e3517 + _0x4ab58d));
    const _0x7262b2 = await _0x5322c3['download']();
    if (!_0x7262b2)
        throw new Error(_0x5c2a74(0x179));
    await _0x43b3e3[_0x5c2a74(0x186)](_0x58d130[_0x5c2a74(0x18d)], _0x7262b2, _0x58d130, {
        'packname': global[_0x5c2a74(0x18b)],
        'author': global['author']
    });
};
function _0x2fc5() {
    const _0xb5b439 = [
        'reply',
        'includes',
        'body',
        'packname',
        '573030lJEKbI',
        'from',
        '717614qzQkdd',
        '2eSDnEg',
        '9nvRTaX',
        'Failed\x20to\x20download\x20media.',
        'mtype',
        '26015qUJhYQ',
        '10692633lLJqIt',
        '1087112GaXwhl',
        'length',
        'quoted',
        'join',
        'match',
        'author',
        '6629840vaMYJL',
        'split',
        '11351370nsTBSx',
        'sendImageAsSticker',
        'Send/Reply\x20with\x20an\x20image\x20or\x20video\x20to\x20use\x20'
    ];
    _0x2fc5 = function () {
        return _0xb5b439;
    };
    return _0x2fc5();
}
function _0xc760(_0x5e2f1c, _0x328590) {
    const _0x2fc5fb = _0x2fc5();
    return _0xc760 = function (_0xc76018, _0x5e392b) {
        _0xc76018 = _0xc76018 - 0x176;
        let _0x4cff8d = _0x2fc5fb[_0xc76018];
        return _0x4cff8d;
    }, _0xc760(_0x5e2f1c, _0x328590);
}
export default handleTakeCommand;
