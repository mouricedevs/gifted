(function (_0x5be442, _0x4bfde7) {
    const _0x2b5cd8 = _0x3f75, _0x1334ce = _0x5be442();
    while (!![]) {
        try {
            const _0x42b45b = -parseInt(_0x2b5cd8(0xad)) / 0x1 + parseInt(_0x2b5cd8(0xa8)) / 0x2 + parseInt(_0x2b5cd8(0xb5)) / 0x3 + -parseInt(_0x2b5cd8(0xaa)) / 0x4 * (parseInt(_0x2b5cd8(0xba)) / 0x5) + parseInt(_0x2b5cd8(0xa5)) / 0x6 + parseInt(_0x2b5cd8(0xb3)) / 0x7 * (-parseInt(_0x2b5cd8(0xa2)) / 0x8) + parseInt(_0x2b5cd8(0xbc)) / 0x9 * (parseInt(_0x2b5cd8(0xa9)) / 0xa);
            if (_0x42b45b === _0x4bfde7)
                break;
            else
                _0x1334ce['push'](_0x1334ce['shift']());
        } catch (_0x1a45f3) {
            _0x1334ce['push'](_0x1334ce['shift']());
        }
    }
}(_0x20ed, 0x67dac));
import { downloadContentFromMessage } from 'gifted-baileys';
import _0x3d3259 from 'fs';
function _0x3f75(_0x76399e, _0x34099f) {
    const _0x20ed3a = _0x20ed();
    return _0x3f75 = function (_0x3f75f3, _0x2f1891) {
        _0x3f75f3 = _0x3f75f3 - 0x9b;
        let _0x156b22 = _0x20ed3a[_0x3f75f3];
        return _0x156b22;
    }, _0x3f75(_0x76399e, _0x34099f);
}
function _0x20ed() {
    const _0x277878 = [
        'from',
        'mtype',
        '3901190UvgkLm',
        'type',
        '148113EUxbuN',
        'imageMessage',
        'body',
        'Error:',
        'video',
        'split',
        'sender',
        'antiviewonce2',
        '\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'message',
        '417512SoFfyt',
        'caption',
        'audioMessage',
        '3819702tnUzBV',
        'viewonce2',
        'concat',
        '345714aZrpGG',
        '70mRgYfN',
        '4PdXTVr',
        'log',
        'quoted',
        '105523rVCyeU',
        'vv2',
        'This\x20is\x20not\x20a\x20view\x20once\x20message',
        'reply',
        'sendMessage',
        'image',
        '21ldZPzv',
        'test',
        '1629129TxAhNO',
        'Quoted\x20message:',
        'rvo2'
    ];
    _0x20ed = function () {
        return _0x277878;
    };
    return _0x20ed();
}
const vv2 = async (_0x3a927e, _0x1480d6) => {
    const _0x2e6dcb = _0x3f75;
    try {
        console[_0x2e6dcb(0xab)](_0x2e6dcb(0xb6), _0x3a927e[_0x2e6dcb(0xac)]);
        const _0x620e0 = _0x3a927e['body']['match'](/^[\\/!#.]/), _0x462778 = _0x620e0 ? _0x620e0[0x0] : '/', _0x167e7b = _0x3a927e[_0x2e6dcb(0xbe)]['startsWith'](_0x462778) ? _0x3a927e[_0x2e6dcb(0xbe)]['slice'](_0x462778['length'])[_0x2e6dcb(0x9d)]('\x20')[0x0]['toLowerCase']() : '', _0x1e54a7 = [
                _0x2e6dcb(0xb7),
                _0x2e6dcb(0xae),
                'reveal2',
                _0x2e6dcb(0x9f),
                _0x2e6dcb(0xa6)
            ];
        if (!_0x1e54a7['includes'](_0x167e7b))
            return;
        if (!_0x3a927e[_0x2e6dcb(0xac)] || _0x3a927e[_0x2e6dcb(0xac)][_0x2e6dcb(0xbb)] !== 'view_once' || _0x3a927e[_0x2e6dcb(0xac)]['mtype'] !== _0x2e6dcb(0xbd) && _0x3a927e[_0x2e6dcb(0xac)]['mtype'] !== 'videoMessage' && _0x3a927e['quoted'][_0x2e6dcb(0xb9)] !== _0x2e6dcb(0xa4))
            return _0x3a927e['reply'](_0x2e6dcb(0xaf));
        const _0x3de9fe = _0x3a927e[_0x2e6dcb(0xac)][_0x2e6dcb(0xa1)], _0x17fa56 = Object['keys'](_0x3de9fe)[0x0], _0x4dffeb = _0x3de9fe[_0x17fa56][_0x2e6dcb(0xa3)] || '', _0x58260f = _0x4dffeb + _0x2e6dcb(0xa0), _0x11c1a2 = await downloadContentFromMessage(_0x3de9fe[_0x17fa56], _0x17fa56 === 'imageMessage' ? _0x2e6dcb(0xb2) : _0x2e6dcb(0x9c));
        let _0x15848d = Buffer[_0x2e6dcb(0xb8)]([]);
        for await (const _0x56920d of _0x11c1a2) {
            _0x15848d = Buffer[_0x2e6dcb(0xa7)]([
                _0x15848d,
                _0x56920d
            ]);
        }
        if (/video/['test'](_0x17fa56))
            await _0x1480d6[_0x2e6dcb(0xb1)](_0x3a927e[_0x2e6dcb(0xb8)], {
                'video': _0x15848d,
                'caption': _0x58260f,
                'contextInfo': {
                    'mentionedJid': [_0x3a927e['sender']],
                    'forwardingScore': 0x270f,
                    'isForwarded': ![]
                }
            }, { 'quoted': _0x3a927e });
        else {
            if (/image/[_0x2e6dcb(0xb4)](_0x17fa56))
                await _0x1480d6['sendMessage'](_0x3a927e[_0x2e6dcb(0xb8)], {
                    'image': _0x15848d,
                    'caption': _0x58260f,
                    'contextInfo': {
                        'mentionedJid': [_0x3a927e[_0x2e6dcb(0x9e)]],
                        'forwardingScore': 0x270f,
                        'isForwarded': ![]
                    }
                }, { 'quoted': _0x3a927e });
            else
                /audio/[_0x2e6dcb(0xb4)](_0x17fa56) && await _0x1480d6[_0x2e6dcb(0xb1)](botUser, {
                    'audio': _0x15848d,
                    'caption': _0x58260f,
                    'contextInfo': {
                        'mentionedJid': [_0x3a927e[_0x2e6dcb(0x9e)]],
                        'forwardingScore': 0x270f,
                        'isForwarded': ![]
                    }
                }, { 'quoted': _0x3a927e });
        }
    } catch (_0x5145ec) {
        console['error'](_0x2e6dcb(0x9b), _0x5145ec), _0x3a927e[_0x2e6dcb(0xb0)]('An\x20error\x20occurred\x20while\x20processing\x20the\x20command.');
    }
};
export default vv2;
