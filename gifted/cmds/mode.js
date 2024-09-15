(function (_0x474ac7, _0x33c320) {
    const _0x38afde = _0x315d, _0x2947a7 = _0x474ac7();
    while (!![]) {
        try {
            const _0x9fb915 = -parseInt(_0x38afde(0x1bc)) / 0x1 + parseInt(_0x38afde(0x1c8)) / 0x2 + -parseInt(_0x38afde(0x1c1)) / 0x3 + -parseInt(_0x38afde(0x1c9)) / 0x4 + parseInt(_0x38afde(0x1b8)) / 0x5 + parseInt(_0x38afde(0x1bf)) / 0x6 + parseInt(_0x38afde(0x1c6)) / 0x7;
            if (_0x9fb915 === _0x33c320)
                break;
            else
                _0x2947a7['push'](_0x2947a7['shift']());
        } catch (_0x1d6d29) {
            _0x2947a7['push'](_0x2947a7['shift']());
        }
    }
}(_0x1363, 0xa1a5c));
import _0x2d99aa from '../../set.cjs';
function _0x315d(_0x3e9f6c, _0x5ad42d) {
    const _0x1363fc = _0x1363();
    return _0x315d = function (_0x315d2c, _0x5ddedc) {
        _0x315d2c = _0x315d2c - 0x1b8;
        let _0x24f460 = _0x1363fc[_0x315d2c];
        return _0x24f460;
    }, _0x315d(_0x3e9f6c, _0x5ad42d);
}
const modeCommand = async (_0xacbf94, _0x1b8a57) => {
    const _0x3c0f95 = _0x315d, _0x35abd3 = await _0x1b8a57[_0x3c0f95(0x1cc)](_0x1b8a57[_0x3c0f95(0x1d0)]['id']), _0x47e5a0 = [
            _0x35abd3,
            _0x2d99aa[_0x3c0f95(0x1c7)] + _0x3c0f95(0x1c2)
        ][_0x3c0f95(0x1cb)](_0xacbf94['sender']), _0x18fa17 = _0xacbf94[_0x3c0f95(0x1be)]['match'](/^[\\/!#.]/), _0x407d78 = _0x18fa17 ? _0x18fa17[0x0] : '/', _0x4823e5 = _0xacbf94[_0x3c0f95(0x1be)]['startsWith'](_0x407d78) ? _0xacbf94[_0x3c0f95(0x1be)][_0x3c0f95(0x1c3)](_0x407d78[_0x3c0f95(0x1d4)])[_0x3c0f95(0x1bb)]('\x20')[0x0][_0x3c0f95(0x1b9)]() : '', _0x512d48 = _0xacbf94['body'][_0x3c0f95(0x1c3)](_0x407d78[_0x3c0f95(0x1d4)] + _0x4823e5[_0x3c0f95(0x1d4)])[_0x3c0f95(0x1cf)]()[_0x3c0f95(0x1b9)]();
    if (_0x4823e5 === _0x3c0f95(0x1d3)) {
        if (!_0x47e5a0)
            return _0xacbf94[_0x3c0f95(0x1bd)](_0x3c0f95(0x1d5));
        let _0xa9562;
        if (_0x512d48 === _0x3c0f95(0x1ca))
            _0x2d99aa[_0x3c0f95(0x1d2)] = _0x3c0f95(0x1ca), _0xa9562 = _0x3c0f95(0x1cd);
        else
            _0x512d48 === _0x3c0f95(0x1c5) ? (_0x2d99aa[_0x3c0f95(0x1d2)] = _0x3c0f95(0x1c5), _0xa9562 = 'Mode\x20has\x20been\x20set\x20to\x20private.') : _0xa9562 = 'Usage:\x0a-\x20`mode\x20public`:\x20Set\x20mode\x20to\x20public\x0a-\x20`mode\x20private`:\x20Set\x20mode\x20to\x20private';
        try {
            await _0x1b8a57[_0x3c0f95(0x1d1)](_0xacbf94['from'], { 'text': _0xa9562 }, { 'quoted': _0xacbf94 });
        } catch (_0x41ca0b) {
            console[_0x3c0f95(0x1c0)](_0x3c0f95(0x1ce), _0x41ca0b), await _0x1b8a57['sendMessage'](_0xacbf94[_0x3c0f95(0x1c4)], { 'text': _0x3c0f95(0x1ba) }, { 'quoted': _0xacbf94 });
        }
    }
};
function _0x1363() {
    const _0x359af1 = [
        'public',
        'includes',
        'decodeJid',
        'Mode\x20has\x20been\x20set\x20to\x20public.',
        'Error\x20processing\x20your\x20request:',
        'trim',
        'user',
        'sendMessage',
        'MODE',
        'mode',
        'length',
        '*ᴛʜɪs\x20ɪs\x20ᴏᴡɴᴇʀ\x20ᴏɴʟʏ\x20ᴄᴏᴍᴍᴀɴᴅ*',
        '1520145cnAMFt',
        'toLowerCase',
        'Error\x20processing\x20your\x20request.',
        'split',
        '941569ItGbhX',
        'reply',
        'body',
        '7008174EVnjZC',
        'error',
        '2647236ftDJEI',
        '@s.whatsapp.net',
        'slice',
        'from',
        'private',
        '3784529rLyoOG',
        'OWNER_NUMBER',
        '1410130uDTLnL',
        '926724vqLVyL'
    ];
    _0x1363 = function () {
        return _0x359af1;
    };
    return _0x1363();
}
export default modeCommand;
