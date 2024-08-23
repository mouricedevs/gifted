function _0x1291(_0x2287b7, _0x24e900) {
    const _0x3cf470 = _0x3cf4();
    return _0x1291 = function (_0x129106, _0xef5232) {
        _0x129106 = _0x129106 - 0xdd;
        let _0x483f12 = _0x3cf470[_0x129106];
        return _0x483f12;
    }, _0x1291(_0x2287b7, _0x24e900);
}
(function (_0x5ebc0b, _0x5856b9) {
    const _0xb681b5 = _0x1291, _0x38f005 = _0x5ebc0b();
    while (!![]) {
        try {
            const _0x3efd80 = parseInt(_0xb681b5(0x102)) / 0x1 + -parseInt(_0xb681b5(0xf5)) / 0x2 * (parseInt(_0xb681b5(0xf4)) / 0x3) + parseInt(_0xb681b5(0xf0)) / 0x4 + -parseInt(_0xb681b5(0xff)) / 0x5 + parseInt(_0xb681b5(0xe9)) / 0x6 + parseInt(_0xb681b5(0xe1)) / 0x7 + -parseInt(_0xb681b5(0xef)) / 0x8;
            if (_0x3efd80 === _0x5856b9)
                break;
            else
                _0x38f005['push'](_0x38f005['shift']());
        } catch (_0x3a4ff9) {
            _0x38f005['push'](_0x38f005['shift']());
        }
    }
}(_0x3cf4, 0x21f8f));
import _0x5ec3c9 from 'node-fetch';
function _0x3cf4() {
    const _0x1a8d6f = [
        'Error\x20saving\x20contacts:',
        '666360UNzhBj',
        '.vcf',
        'from',
        'error',
        'split',
        'match',
        '1713576odaDDh',
        '856008kVSEnU',
        'savecontact',
        '\x0aEND:VCARD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'reply',
        '1383FWuXYL',
        '844UsrqGi',
        'Total\x20number\x20of\x20contacts\x20saved:\x20',
        'Unknown',
        'Contact\x20sent.',
        'message',
        'Gifted\x20',
        'body',
        'length',
        'notify',
        'includes',
        '588375IzOzRg',
        'sender',
        'This\x20command\x20can\x20only\x20be\x20used\x20in\x20group\x20chats.',
        '268928wuzofq',
        'toLowerCase',
        '\x0aEND:VCARD\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'VCF\x20FOR\x20',
        'Please\x20reply\x20to\x20a\x20user\x20message\x20to\x20save\x20their\x20contact.',
        'text/x-vcard',
        '\x0aTEL;TYPE=CELL:',
        'vcf',
        'startsWith',
        'subject',
        '\x0aBEGIN:VCARD\x0aVERSION:3.0\x0aFN:',
        'participants',
        '\x0aGroup\x20contacts\x20saved\x20successfully.\x20Feel\x20free\x20to\x20import\x20the\x20vcf\x20file.',
        'groupMetadata',
        '501025rnRkgr',
        'slice',
        'pushName',
        'isGroup',
        'sendMessage',
        'React',
        'quoted'
    ];
    _0x3cf4 = function () {
        return _0x1a8d6f;
    };
    return _0x3cf4();
}
import { writeFileSync } from 'fs';
const saveContact = async (_0x227cce, _0x2af8c7) => {
    const _0x2ef3d6 = _0x1291;
    try {
        const _0x1720cd = _0x227cce[_0x2ef3d6(0xfb)][_0x2ef3d6(0xee)](/^[\\/!#.]/), _0x51fe97 = _0x1720cd ? _0x1720cd[0x0] : '/', _0x96df4 = _0x227cce['body'][_0x2ef3d6(0x10a)](_0x51fe97) ? _0x227cce[_0x2ef3d6(0xfb)][_0x2ef3d6(0xe2)](_0x51fe97[_0x2ef3d6(0xfc)])[_0x2ef3d6(0xed)]('\x20')[0x0][_0x2ef3d6(0x103)]() : '', _0x566a8f = [
                _0x2ef3d6(0x109),
                'vcard',
                'contacts',
                _0x2ef3d6(0xf1)
            ];
        if (!_0x566a8f[_0x2ef3d6(0xfe)](_0x96df4))
            return;
        await _0x227cce['React']('🕘');
        if (_0x96df4 === 'vcard') {
            if (!_0x227cce[_0x2ef3d6(0xe7)])
                return _0x227cce[_0x2ef3d6(0xf3)](_0x2ef3d6(0x106));
            const _0x239bd7 = _0x227cce[_0x2ef3d6(0xe7)], _0x32d652 = _0x239bd7[_0x2ef3d6(0x100)] || _0x239bd7['id'], _0x6a245 = _0x239bd7[_0x2ef3d6(0xe3)] || _0x239bd7[_0x2ef3d6(0xfd)] || _0x2ef3d6(0xf7), _0x5af556 = _0x32d652[_0x2ef3d6(0xed)]('@')[0x0];
            if (!_0x32d652)
                return _0x227cce[_0x2ef3d6(0xf3)]('Could\x20not\x20retrieve\x20contact\x20information.\x20Please\x20try\x20again.');
            await _0x2af8c7[_0x2ef3d6(0xe5)](_0x227cce['from'], {
                'contacts': {
                    'displayName': _0x6a245,
                    'contacts': [{ 'vcard': '\x0aBEGIN:VCARD\x0aVERSION:3.0\x0aFN:' + _0x6a245 + '\x0aTEL;TYPE=CELL:' + _0x5af556 + _0x2ef3d6(0xf2) }]
                }
            }, { 'quoted': _0x227cce }), await _0x227cce['reply'](_0x2ef3d6(0xf8)), await _0x227cce['React']('✅');
        } else {
            if (!_0x227cce[_0x2ef3d6(0xe4)])
                return _0x227cce['reply'](_0x2ef3d6(0x101));
            const _0x72c340 = await _0x2af8c7[_0x2ef3d6(0xe0)](_0x227cce[_0x2ef3d6(0xeb)]), _0x5ecd87 = _0x72c340[_0x2ef3d6(0xde)], _0xb9ba45 = _0x72c340[_0x2ef3d6(0x10b)];
            if (!_0x5ecd87 || _0x5ecd87['length'] === 0x0)
                return _0x227cce[_0x2ef3d6(0xf3)]('No\x20participants\x20found\x20in\x20this\x20group.');
            let _0x53bf65 = '';
            _0x5ecd87['forEach']((_0xa27525, _0x45c7c8) => {
                const _0x2ecd1b = _0x2ef3d6, _0x5de958 = _0x2ecd1b(0xfa) + (_0x45c7c8 + 0x1), _0x3423cf = _0xa27525['id'][_0x2ecd1b(0xed)]('@')[0x0];
                _0x53bf65 += _0x2ecd1b(0xdd) + _0x5de958 + _0x2ecd1b(0x108) + _0x3423cf + _0x2ecd1b(0x104);
            });
            const _0x3dda10 = 'contacts.vcf';
            writeFileSync(_0x3dda10, _0x53bf65), await _0x2af8c7['sendMessage'](_0x227cce[_0x2ef3d6(0xeb)], {
                'document': { 'url': './' + _0x3dda10 },
                'mimetype': _0x2ef3d6(0x107),
                'fileName': _0xb9ba45 + _0x2ef3d6(0xea),
                'caption': _0x2ef3d6(0x105) + _0xb9ba45 + _0x2ef3d6(0xdf)
            }, { 'quoted': _0x227cce });
            const _0x558ff6 = _0x5ecd87['length'];
            await _0x227cce[_0x2ef3d6(0xf3)](_0x2ef3d6(0xf6) + _0x558ff6), await _0x227cce[_0x2ef3d6(0xe6)]('✅');
        }
    } catch (_0x3d5ded) {
        console[_0x2ef3d6(0xec)](_0x2ef3d6(0xe8), _0x3d5ded[_0x2ef3d6(0xf9)]), await _0x227cce[_0x2ef3d6(0xf3)]('Error\x20saving\x20contacts:\x20' + _0x3d5ded['message']), await _0x227cce[_0x2ef3d6(0xe6)]('❌');
    }
};
export default saveContact;
