const giftedtech_0x22b26b = giftedtech_0x5931;
function giftedtech_0x4958() {
    const _0x3f7ef9 = [
        'url',
        'AUTO_RECORDING',
        'slice',
        'startsWith',
        'AUTO_BLOCK',
        'notify',
        'unavailable',
        'user',
        'sender',
        'body',
        'then',
        'length',
        '1210176gOmjwO',
        'toLowerCase',
        '26807gTjpIV',
        'composing',
        '6LVVKVw',
        'cmds',
        '.js',
        'messages',
        '14231ueALHU',
        '4aWwOUU',
        'ALWAYS_ONLINE',
        'default',
        'status@broadcast',
        'sendPresenceUpdate',
        'available',
        'trim',
        '1944rlhHFa',
        'public',
        '212',
        'participants',
        'AUTO_READ_MESSAGES',
        'block',
        'test',
        'message',
        'dirname',
        'split',
        '248683XFNJpV',
        '@s.whatsapp.net',
        '1328072vnjKcz',
        'stringify',
        'includes',
        'isGroup',
        'admin',
        'stack',
        'AUTO_TYPING',
        'key',
        'parse',
        'from',
        'Failed\x20to\x20load\x20plugin:\x20',
        '3248319uWuJfo',
        '3926095pbrklK',
        'error',
        'endsWith',
        'type',
        'OWNER_NUMBER',
        'readMessages',
        '5050qKNDuU',
        'match'
    ];
    giftedtech_0x4958 = function () {
        return _0x3f7ef9;
    };
    return giftedtech_0x4958();
}
(function (_0x5b4370, _0x43a4f8) {
    const _0x3dfa6f = giftedtech_0x5931, _0x40c0ba = _0x5b4370();
    while (!![]) {
        try {
            const _0x40ff2f = parseInt(_0x3dfa6f(0x168)) / 0x1 + -parseInt(_0x3dfa6f(0x16a)) / 0x2 + -parseInt(_0x3dfa6f(0x139)) / 0x3 * (parseInt(_0x3dfa6f(0x157)) / 0x4) + parseInt(_0x3dfa6f(0x13a)) / 0x5 * (parseInt(_0x3dfa6f(0x152)) / 0x6) + -parseInt(_0x3dfa6f(0x156)) / 0x7 * (-parseInt(_0x3dfa6f(0x15e)) / 0x8) + -parseInt(_0x3dfa6f(0x14e)) / 0x9 + parseInt(_0x3dfa6f(0x140)) / 0xa * (parseInt(_0x3dfa6f(0x150)) / 0xb);
            if (_0x40ff2f === _0x43a4f8)
                break;
            else
                _0x40c0ba['push'](_0x40c0ba['shift']());
        } catch (_0x333cc8) {
            _0x40c0ba['push'](_0x40c0ba['shift']());
        }
    }
}(giftedtech_0x4958, 0xd6315));
import {
    serialize,
    decodeJid
} from '../../gift/Serializer.js';
import giftedtech_0x4e2356 from 'path';
function giftedtech_0x5931(_0xde8663, _0x25de41) {
    const _0x495809 = giftedtech_0x4958();
    return giftedtech_0x5931 = function (_0x5931f3, _0x39ad07) {
        _0x5931f3 = _0x5931f3 - 0x133;
        let _0x558683 = _0x495809[_0x5931f3];
        return _0x558683;
    }, giftedtech_0x5931(_0xde8663, _0x25de41);
}
import giftedtech_0x40ab34 from 'fs/promises';
import giftedtech_0x210f4 from '../../set.cjs';
import { smsg } from '../../gift/myfunc.cjs';
import { handleAntilink } from './antilink.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta[giftedtech_0x22b26b(0x142)]), __dirname = giftedtech_0x4e2356[giftedtech_0x22b26b(0x166)](__filename);
export const getGroupAdmins = _0xf2857f => {
    const _0x40af4a = giftedtech_0x22b26b;
    let _0x121678 = [];
    for (let _0x57f8a5 of _0xf2857f) {
        (_0x57f8a5['admin'] === 'superadmin' || _0x57f8a5[_0x40af4a(0x16e)] === 'admin') && _0x121678['push'](_0x57f8a5['id']);
    }
    return _0x121678;
};
const Handler = async (_0x3a4678, _0x1ff086, _0x200d78) => {
    const _0x5434fc = giftedtech_0x22b26b;
    try {
        if (!_0x3a4678[_0x5434fc(0x155)] || _0x3a4678[_0x5434fc(0x13d)] !== _0x5434fc(0x147))
            return;
        const _0x2384ee = serialize(JSON[_0x5434fc(0x136)](JSON[_0x5434fc(0x16b)](_0x3a4678[_0x5434fc(0x155)][0x0])), _0x1ff086, _0x200d78);
        if (!_0x2384ee[_0x5434fc(0x165)])
            return;
        const _0x3168f6 = _0x2384ee[_0x5434fc(0x16d)] ? await _0x1ff086['groupMetadata'](_0x2384ee[_0x5434fc(0x137)])[_0x5434fc(0x14c)](_0x29a7ef => _0x29a7ef[_0x5434fc(0x161)]) : [], _0x1dbd53 = _0x2384ee['isGroup'] ? getGroupAdmins(_0x3168f6) : [], _0x40d48b = _0x1ff086[_0x5434fc(0x149)]['id'][_0x5434fc(0x167)](':')[0x0] + _0x5434fc(0x169), _0x24a22b = _0x2384ee[_0x5434fc(0x16d)] ? _0x1dbd53[_0x5434fc(0x16c)](_0x40d48b) : ![], _0x468bf4 = _0x2384ee[_0x5434fc(0x16d)] ? _0x1dbd53['includes'](_0x2384ee[_0x5434fc(0x14a)]) : ![], _0x1f8773 = /^[+×÷=/_<>[\]!@#.£%^&*()\-"'1234567890?,°€£^:;?¿‽】〕」』【〔「『<>_${}\|`《○♡○¡☆《●●■◇¡¤▪︎•°~♡●♧₩$€○》☆¡Abcdefghijklmonpqrstuvwxyz]/i, _0x12921b = _0x4793c2 => _0x1f8773[_0x5434fc(0x164)](_0x4793c2), _0x63cbd5 = _0x12921b(_0x2384ee['body']) ? _0x2384ee[_0x5434fc(0x14b)][_0x5434fc(0x141)](_0x1f8773) : null, _0x196430 = _0x63cbd5 ? _0x63cbd5[0x0] : '/', _0x5a9571 = _0x2384ee[_0x5434fc(0x14b)][_0x5434fc(0x145)](_0x196430) ? _0x2384ee[_0x5434fc(0x14b)][_0x5434fc(0x144)](_0x196430['length'])[_0x5434fc(0x167)]('\x20')[0x0][_0x5434fc(0x14f)]() : '', _0x400d35 = _0x2384ee[_0x5434fc(0x14b)][_0x5434fc(0x144)](_0x196430[_0x5434fc(0x14d)] + _0x5a9571['length'])[_0x5434fc(0x15d)]();
        _0x2384ee[_0x5434fc(0x135)] && _0x2384ee[_0x5434fc(0x135)]['remoteJid'] === _0x5434fc(0x15a) && giftedtech_0x210f4['AUTO_READ_STATUS'] && await _0x1ff086['readMessages']([_0x2384ee[_0x5434fc(0x135)]]);
        _0x2384ee['key'] && _0x2384ee[_0x5434fc(0x137)] && (giftedtech_0x210f4[_0x5434fc(0x134)] && await _0x1ff086[_0x5434fc(0x15b)](_0x5434fc(0x151), _0x2384ee[_0x5434fc(0x137)], [_0x2384ee[_0x5434fc(0x135)]]), giftedtech_0x210f4[_0x5434fc(0x143)] && await _0x1ff086['sendPresenceUpdate']('recording', _0x2384ee[_0x5434fc(0x137)], [_0x2384ee[_0x5434fc(0x135)]]), giftedtech_0x210f4[_0x5434fc(0x158)] ? await _0x1ff086[_0x5434fc(0x15b)](_0x5434fc(0x15c), _0x2384ee[_0x5434fc(0x137)], [_0x2384ee[_0x5434fc(0x135)]]) : await _0x1ff086[_0x5434fc(0x15b)](_0x5434fc(0x148), _0x2384ee[_0x5434fc(0x137)], [_0x2384ee[_0x5434fc(0x135)]]), giftedtech_0x210f4[_0x5434fc(0x162)] && await _0x1ff086[_0x5434fc(0x13f)]([_0x2384ee[_0x5434fc(0x135)]]), giftedtech_0x210f4[_0x5434fc(0x146)] && _0x2384ee[_0x5434fc(0x14a)]['startsWith'](_0x5434fc(0x160)) && await _0x1ff086['updateBlockStatus'](_0x2384ee['sender'], _0x5434fc(0x163)));
        const _0xdb650 = decodeJid(_0x1ff086[_0x5434fc(0x149)]['id']), _0x2c55fb = giftedtech_0x210f4[_0x5434fc(0x13e)] + _0x5434fc(0x169), _0x281bf5 = _0x2384ee[_0x5434fc(0x14a)] === _0x2c55fb || _0x2384ee[_0x5434fc(0x14a)] === _0xdb650;
        if (!_0x1ff086[_0x5434fc(0x15f)] && !_0x281bf5)
            return;
        await handleAntilink(_0x2384ee, _0x1ff086, _0x200d78, _0x24a22b, _0x468bf4, _0x281bf5);
        const _0xd93b70 = giftedtech_0x4e2356['join'](__dirname, '..', _0x5434fc(0x153)), _0x27e0ec = await giftedtech_0x40ab34['readdir'](_0xd93b70);
        for (const _0x518acd of _0x27e0ec) {
            if (_0x518acd[_0x5434fc(0x13c)](_0x5434fc(0x154))) {
                const _0x10f5b4 = giftedtech_0x4e2356['join'](_0xd93b70, _0x518acd);
                try {
                    const _0x14343e = await import('file://' + _0x10f5b4), _0x3b37be = _0x14343e[_0x5434fc(0x159)];
                    await _0x3b37be(_0x2384ee, _0x1ff086);
                } catch (_0x2231c7) {
                    console[_0x5434fc(0x13b)](_0x5434fc(0x138) + _0x10f5b4, _0x2231c7[_0x5434fc(0x165)], _0x2231c7[_0x5434fc(0x133)]);
                }
            }
        }
    } catch (_0x2b0cfc) {
        console['error'](_0x2b0cfc['message'], _0x2b0cfc['stack']);
    }
};
export default Handler;