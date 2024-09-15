function _0x148a(_0x3bc0e8, _0x4e4d11) {
    const _0x225533 = _0x2255();
    return _0x148a = function (_0x148a05, _0x430906) {
        _0x148a05 = _0x148a05 - 0x1db;
        let _0x50b3dc = _0x225533[_0x148a05];
        return _0x50b3dc;
    }, _0x148a(_0x3bc0e8, _0x4e4d11);
}
(function (_0x2b087a, _0x301aa1) {
    const _0x178d42 = _0x148a, _0x430f38 = _0x2b087a();
    while (!![]) {
        try {
            const _0x49607a = -parseInt(_0x178d42(0x1e4)) / 0x1 * (parseInt(_0x178d42(0x1fe)) / 0x2) + parseInt(_0x178d42(0x1fd)) / 0x3 * (-parseInt(_0x178d42(0x1df)) / 0x4) + -parseInt(_0x178d42(0x1ea)) / 0x5 * (parseInt(_0x178d42(0x1ef)) / 0x6) + -parseInt(_0x178d42(0x1e3)) / 0x7 + parseInt(_0x178d42(0x1e1)) / 0x8 + -parseInt(_0x178d42(0x200)) / 0x9 + parseInt(_0x178d42(0x1f6)) / 0xa;
            if (_0x49607a === _0x301aa1)
                break;
            else
                _0x430f38['push'](_0x430f38['shift']());
        } catch (_0xf4834c) {
            _0x430f38['push'](_0x430f38['shift']());
        }
    }
}(_0x2255, 0x6fb4e));
const kick = async (_0x184cd3, _0x393983) => {
    const _0xa743c4 = _0x148a;
    try {
        const _0x5e4eb0 = await _0x393983[_0xa743c4(0x1ed)](_0x393983['user']['id']), _0x1fe37c = _0x184cd3[_0xa743c4(0x202)][_0xa743c4(0x1f0)](/^[\\/!#.]/), _0x34e5d1 = _0x1fe37c ? _0x1fe37c[0x0] : '/', _0x28f591 = _0x184cd3[_0xa743c4(0x202)][_0xa743c4(0x1de)](_0x34e5d1) ? _0x184cd3['body'][_0xa743c4(0x1e5)](_0x34e5d1[_0xa743c4(0x1e8)])['split']('\x20')[0x0][_0xa743c4(0x1ee)]() : '', _0x5e5697 = _0x184cd3['body'][_0xa743c4(0x1e5)](_0x34e5d1[_0xa743c4(0x1e8)] + _0x28f591[_0xa743c4(0x1e8)])[_0xa743c4(0x1f1)](), _0x47eb59 = [
                _0xa743c4(0x204),
                _0xa743c4(0x201)
            ];
        if (!_0x47eb59['includes'](_0x28f591))
            return;
        if (!_0x184cd3[_0xa743c4(0x1e9)])
            return _0x184cd3[_0xa743c4(0x20a)](_0xa743c4(0x209));
        const _0x22d5f4 = await _0x393983[_0xa743c4(0x1fc)](_0x184cd3[_0xa743c4(0x1e7)]), _0x4a83be = _0x22d5f4[_0xa743c4(0x1e6)], _0x347a16 = _0x4a83be[_0xa743c4(0x1f2)](_0x5958f0 => _0x5958f0['id'] === _0x5e4eb0)?.[_0xa743c4(0x1f8)], _0x246015 = _0x4a83be['find'](_0x5a0262 => _0x5a0262['id'] === _0x184cd3[_0xa743c4(0x1f3)])?.[_0xa743c4(0x1f8)];
        if (!_0x347a16)
            return _0x184cd3[_0xa743c4(0x20a)]('*📛\x20BOT\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*');
        if (!_0x246015)
            return _0x184cd3[_0xa743c4(0x20a)](_0xa743c4(0x1fa));
        if (!_0x184cd3['mentionedJid'])
            _0x184cd3['mentionedJid'] = [];
        if (_0x184cd3['quoted']?.[_0xa743c4(0x1e0)])
            _0x184cd3[_0xa743c4(0x1f4)][_0xa743c4(0x203)](_0x184cd3[_0xa743c4(0x206)][_0xa743c4(0x1e0)]);
        const _0x307b23 = _0x184cd3[_0xa743c4(0x1f4)][_0xa743c4(0x1e8)] > 0x0 ? _0x184cd3[_0xa743c4(0x1f4)] : _0x5e5697['replace'](/[^0-9]/g, '')[_0xa743c4(0x1e8)] > 0x0 ? [_0x5e5697[_0xa743c4(0x1fb)](/[^0-9]/g, '') + _0xa743c4(0x1ec)] : [];
        if (_0x307b23[_0xa743c4(0x1e8)] === 0x0)
            return _0x184cd3[_0xa743c4(0x20a)](_0xa743c4(0x208));
        const _0x39e000 = _0x307b23['filter'](Boolean);
        await _0x393983[_0xa743c4(0x1f5)](_0x184cd3[_0xa743c4(0x1e7)], _0x39e000, 'remove')[_0xa743c4(0x1eb)](() => {
            const _0x462e0d = _0xa743c4, _0x32a9b2 = _0x39e000[_0x462e0d(0x1dd)](_0x4c38ac => '@' + _0x4c38ac[_0x462e0d(0x205)]('@')[0x0]);
            _0x184cd3[_0x462e0d(0x20a)]('*USERS\x20' + _0x32a9b2 + _0x462e0d(0x1e2) + _0x22d5f4[_0x462e0d(0x207)] + '*');
        })[_0xa743c4(0x1f7)](() => _0x184cd3[_0xa743c4(0x20a)](_0xa743c4(0x1db)));
    } catch (_0x2186aa) {
        console[_0xa743c4(0x1f9)](_0xa743c4(0x1dc), _0x2186aa), _0x184cd3[_0xa743c4(0x20a)](_0xa743c4(0x1ff));
    }
};
export default kick;
function _0x2255() {
    const _0xe74584 = [
        '319164BwUnCF',
        'An\x20error\x20occurred\x20while\x20processing\x20the\x20command.',
        '5869071WNOpbW',
        'remove',
        'body',
        'push',
        'kick',
        'split',
        'quoted',
        'subject',
        '*📛\x20PLEASE\x20MENTION\x20OR\x20QUOTE\x20A\x20USER\x20TO\x20KICK*',
        '*📛\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS*',
        'reply',
        'Failed\x20to\x20kick\x20user(s)\x20from\x20the\x20group.',
        'Error:',
        'map',
        'startsWith',
        '26316NWzKbK',
        'participant',
        '5232848jCCwSE',
        '\x20KICKED\x20SUCCESSFULLY\x20FROM\x20THE\x20GROUP\x20',
        '2528617hduWnc',
        '3QvRqxG',
        'slice',
        'participants',
        'from',
        'length',
        'isGroup',
        '224805YpslZj',
        'then',
        '@s.whatsapp.net',
        'decodeJid',
        'toLowerCase',
        '90zQvrbB',
        'match',
        'trim',
        'find',
        'sender',
        'mentionedJid',
        'groupParticipantsUpdate',
        '21739040uhDBmA',
        'catch',
        'admin',
        'error',
        '*📛\x20YOU\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*',
        'replace',
        'groupMetadata',
        '93qVYffP'
    ];
    _0x2255 = function () {
        return _0xe74584;
    };
    return _0x2255();
}
