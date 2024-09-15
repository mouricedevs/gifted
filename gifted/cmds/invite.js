(function (_0x4c1368, _0x2563ca) {
    const _0x50f7fb = _0x3efa, _0x4b7085 = _0x4c1368();
    while (!![]) {
        try {
            const _0xb26842 = -parseInt(_0x50f7fb(0x116)) / 0x1 + parseInt(_0x50f7fb(0x107)) / 0x2 + -parseInt(_0x50f7fb(0x109)) / 0x3 * (-parseInt(_0x50f7fb(0x112)) / 0x4) + parseInt(_0x50f7fb(0xf5)) / 0x5 + -parseInt(_0x50f7fb(0x10f)) / 0x6 + parseInt(_0x50f7fb(0xf6)) / 0x7 + -parseInt(_0x50f7fb(0xfb)) / 0x8;
            if (_0xb26842 === _0x2563ca)
                break;
            else
                _0x4b7085['push'](_0x4b7085['shift']());
        } catch (_0x3ce277) {
            _0x4b7085['push'](_0x4b7085['shift']());
        }
    }
}(_0x4215, 0xd0ef5));
function _0x4215() {
    const _0x2737de = [
        'decodeJid',
        '3293784teuUkn',
        'admin',
        'groupInviteCode',
        'participants',
        'subject',
        'invite',
        'find',
        '*📛\x20ENTER\x20ONLY\x20THE\x20NUMBERS\x20PLUS\x20YOUR\x20COUNTRY\x20CODE\x20WITHOUT\x20SPACES',
        'user',
        'trim',
        'isGroup',
        '*📛\x20ENTER\x20THE\x20NUMBER\x20TOGETHER\x20WITHOUT\x20*+*',
        '2356098dFASoE',
        '*📛\x20ENTER\x20THE\x20NUMBER\x20YOU\x20WANT\x20TO\x20INVITE\x20TO\x20THE\x20GROUP*\x0a\x0aExample:\x0a*',
        '4001673XyYwaW',
        'groupMetadata',
        '\x0a\x0aINVITED\x20BY:\x20@',
        'add',
        '@s.whatsapp.net',
        'split',
        '9562218EUFyjt',
        'error',
        'reply',
        '4eMgpZu',
        'includes',
        '\x22.\x0a\x0aInvite\x20Link:\x20',
        'Error:',
        '1056419ufTSTk',
        'length',
        'from',
        'body',
        'https://chat.whatsapp.com/',
        'sender',
        '2311980ZXcSgk',
        '6603142QBwrqN',
        'slice',
        'sendMessage',
        'toLowerCase'
    ];
    _0x4215 = function () {
        return _0x2737de;
    };
    return _0x4215();
}
const invite = async (_0x2b6a2, _0x34227b) => {
    const _0x53876d = _0x3efa;
    try {
        const _0x149355 = _0x2b6a2[_0x53876d(0xf2)]['match'](/^[\\/!#.]/), _0x313fd8 = _0x149355 ? _0x149355[0x0] : '/', _0x181f70 = _0x2b6a2[_0x53876d(0xf2)]['startsWith'](_0x313fd8) ? _0x2b6a2[_0x53876d(0xf2)][_0x53876d(0xf7)](_0x313fd8[_0x53876d(0x117)])[_0x53876d(0x10e)]('\x20')[0x0][_0x53876d(0xf9)]() : '', _0x2af2c6 = [
                _0x53876d(0x100),
                _0x53876d(0x10c)
            ];
        if (!_0x2af2c6[_0x53876d(0x113)](_0x181f70))
            return;
        if (!_0x2b6a2[_0x53876d(0x105)])
            return _0x2b6a2[_0x53876d(0x111)]('*🚫\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS*');
        const _0x25028d = _0x2b6a2['body']['slice'](_0x313fd8['length'] + _0x181f70[_0x53876d(0x117)])[_0x53876d(0x104)](), _0x5f1b7b = await _0x34227b[_0x53876d(0xfa)](_0x34227b[_0x53876d(0x103)]['id']), _0x4fa45e = _0xbbf7ba[_0x53876d(0xfe)][_0x53876d(0x101)](_0x2a5887 => _0x2a5887['id'] === _0x5f1b7b)?.[_0x53876d(0xfc)];
        if (!_0x4fa45e)
            return _0x2b6a2[_0x53876d(0x111)]('*📛\x20BOT\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND.*');
        if (!_0x25028d)
            return _0x2b6a2[_0x53876d(0x111)](_0x53876d(0x108) + (_0x313fd8 + _0x181f70) + '*\x20254711111111');
        if (_0x25028d[_0x53876d(0x113)]('+'))
            return _0x2b6a2[_0x53876d(0x111)](_0x53876d(0x106));
        if (isNaN(_0x25028d))
            return _0x2b6a2[_0x53876d(0x111)](_0x53876d(0x102));
        const _0x454193 = _0x2b6a2[_0x53876d(0x118)], _0xbbf7ba = await _0x34227b[_0x53876d(0x10a)](_0x454193), _0xbc2f7b = _0x53876d(0xf3) + await _0x34227b[_0x53876d(0xfd)](_0x454193), _0x3ce953 = '≡\x20*GROUP\x20INVITATION*\x0a\x0aA\x20USER\x20INVITES\x20YOU\x20TO\x20JOIN\x20THE\x20GROUP\x20\x22' + _0xbbf7ba[_0x53876d(0xff)] + _0x53876d(0x114) + _0xbc2f7b + _0x53876d(0x10b) + _0x2b6a2['sender'][_0x53876d(0x10e)]('@')[0x0];
        await _0x34227b[_0x53876d(0xf8)](_0x25028d + _0x53876d(0x10d), {
            'text': _0x3ce953,
            'mentions': [_0x2b6a2[_0x53876d(0xf4)]]
        }), _0x2b6a2[_0x53876d(0x111)]('*☑\x20INVITE\x20LINK\x20SENT\x20TO\x20THE\x20USER.*');
    } catch (_0x54d7ea) {
        console[_0x53876d(0x110)](_0x53876d(0x115), _0x54d7ea), _0x2b6a2[_0x53876d(0x111)]('An\x20error\x20occurred\x20while\x20processing\x20the\x20command.');
    }
};
function _0x3efa(_0x2731a7, _0x1eed5c) {
    const _0x42155a = _0x4215();
    return _0x3efa = function (_0x3efaa0, _0x24a22f) {
        _0x3efaa0 = _0x3efaa0 - 0xf2;
        let _0x2b513a = _0x42155a[_0x3efaa0];
        return _0x2b513a;
    }, _0x3efa(_0x2731a7, _0x1eed5c);
}
export default invite;
