function _0x2870(_0x34caa1, _0xc7b847) {
    const _0x48c414 = _0x48c4();
    return _0x2870 = function (_0x287058, _0x6ce7d8) {
        _0x287058 = _0x287058 - 0x1da;
        let _0xf2ea11 = _0x48c414[_0x287058];
        return _0xf2ea11;
    }, _0x2870(_0x34caa1, _0xc7b847);
}
(function (_0x171597, _0x45632e) {
    const _0x4c343a = _0x2870, _0x2857da = _0x171597();
    while (!![]) {
        try {
            const _0x10e452 = -parseInt(_0x4c343a(0x1df)) / 0x1 + -parseInt(_0x4c343a(0x1ed)) / 0x2 * (-parseInt(_0x4c343a(0x1ec)) / 0x3) + parseInt(_0x4c343a(0x1f5)) / 0x4 + -parseInt(_0x4c343a(0x1de)) / 0x5 * (-parseInt(_0x4c343a(0x1e5)) / 0x6) + -parseInt(_0x4c343a(0x1e4)) / 0x7 + parseInt(_0x4c343a(0x1f3)) / 0x8 * (-parseInt(_0x4c343a(0x1e9)) / 0x9) + -parseInt(_0x4c343a(0x1ef)) / 0xa * (-parseInt(_0x4c343a(0x1e6)) / 0xb);
            if (_0x10e452 === _0x45632e)
                break;
            else
                _0x2857da['push'](_0x2857da['shift']());
        } catch (_0x3212eb) {
            _0x2857da['push'](_0x2857da['shift']());
        }
    }
}(_0x48c4, 0xc29a3));
const linkgc = async (_0x4367d6, _0x3ef85e) => {
    const _0x260807 = _0x2870;
    try {
        const _0x840fb9 = _0x4367d6[_0x260807(0x1f0)]['match'](/^[\\/!#.]/), _0x19b905 = _0x840fb9 ? _0x840fb9[0x0] : '/', _0x340f9f = _0x4367d6[_0x260807(0x1f0)][_0x260807(0x1db)](_0x19b905) ? _0x4367d6['body']['slice'](_0x19b905[_0x260807(0x1f9)])[_0x260807(0x1dd)]('\x20')[0x0][_0x260807(0x1eb)]() : '', _0x274839 = [
                _0x260807(0x1f4),
                'invite',
                _0x260807(0x1e3),
                'grouplink'
            ];
        if (!_0x274839[_0x260807(0x1ee)](_0x340f9f))
            return;
        if (!_0x4367d6['isGroup'])
            return _0x4367d6[_0x260807(0x1f6)]('*📛\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS.*');
        const _0x42194a = await _0x3ef85e[_0x260807(0x1e2)](_0x4367d6['from']), _0x1e56bd = await _0x3ef85e['decodeJid'](_0x3ef85e['user']['id']), _0x37cb72 = _0x42194a[_0x260807(0x1e8)][_0x260807(0x1e0)](_0x3f6354 => _0x3f6354['id'] === _0x1e56bd)?.[_0x260807(0x1ea)];
        if (!_0x37cb72)
            return _0x4367d6['reply'](_0x260807(0x1f2));
        const _0x56e724 = await _0x3ef85e[_0x260807(0x1e1)](_0x4367d6['from']);
        await _0x3ef85e[_0x260807(0x1f1)](_0x4367d6[_0x260807(0x1f7)], {
            'text': _0x260807(0x1e7) + _0x56e724 + '\x0a\x0aGroup\x20Link:\x20' + _0x42194a[_0x260807(0x1da)],
            'detectLink': !![]
        });
    } catch (_0x40c568) {
        console[_0x260807(0x1dc)]('Error:', _0x40c568), _0x4367d6[_0x260807(0x1f6)](_0x260807(0x1f8));
    }
};
function _0x48c4() {
    const _0x5d88d5 = [
        'groupInviteCode',
        'groupMetadata',
        'link',
        '10307346ADWfKl',
        '6wtOSnA',
        '5742hHeRjh',
        'https://chat.whatsapp.com/',
        'participants',
        '278271xOuyKp',
        'admin',
        'toLowerCase',
        '8991TrHvJo',
        '426FmSrrm',
        'includes',
        '34530zewNDe',
        'body',
        'sendMessage',
        '*📛\x20BOT\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND.*',
        '72gMvozc',
        'linkgc',
        '3548868CZAbwf',
        'reply',
        'from',
        'An\x20error\x20occurred\x20while\x20processing\x20the\x20command.',
        'length',
        'subject',
        'startsWith',
        'error',
        'split',
        '2833405SCPknw',
        '1346885LyVoaR',
        'find'
    ];
    _0x48c4 = function () {
        return _0x5d88d5;
    };
    return _0x48c4();
}
export default linkgc;
