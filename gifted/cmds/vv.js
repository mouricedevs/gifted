(function (_0x33bc03, _0x4cc429) {
    const _0x30eabb = _0x2e27, _0x4a6b41 = _0x33bc03();
    while (!![]) {
        try {
            const _0x55fff7 = -parseInt(_0x30eabb(0x180)) / 0x1 + -parseInt(_0x30eabb(0x185)) / 0x2 + parseInt(_0x30eabb(0x190)) / 0x3 + -parseInt(_0x30eabb(0x182)) / 0x4 + parseInt(_0x30eabb(0x18c)) / 0x5 + parseInt(_0x30eabb(0x18f)) / 0x6 * (parseInt(_0x30eabb(0x176)) / 0x7) + parseInt(_0x30eabb(0x192)) / 0x8;
            if (_0x55fff7 === _0x4cc429)
                break;
            else
                _0x4a6b41['push'](_0x4a6b41['shift']());
        } catch (_0x27fe62) {
            _0x4a6b41['push'](_0x4a6b41['shift']());
        }
    }
}(_0x5448, 0x4ca7d));
import { downloadContentFromMessage } from 'gifted-baileys';
function _0x5448() {
    const _0xe0bd15 = [
        'length',
        '310893qbsrXO',
        'sender',
        '1385248TGDEVh',
        'antiviewonce',
        'body',
        '598388kwKKwa',
        'message',
        'view_once',
        'Error:',
        'Quoted\x20message:',
        'audio',
        'slice',
        '1132670QyunOt',
        'Downloaded\x20media\x20content',
        'imageMessage',
        '462IQyEge',
        '1371438RwlzhU',
        'keys',
        '4286424vVuWyr',
        'toLowerCase',
        'videoMessage',
        'mtype',
        'startsWith',
        'match',
        'reveal',
        'quoted',
        'sendMessage',
        'log',
        'This\x20is\x20not\x20a\x20view\x20once\x20message',
        '4627ZHSVoa',
        'image',
        'An\x20error\x20occurred\x20while\x20processing\x20the\x20command.',
        'audioMessage',
        'concat',
        'type',
        'video',
        'reply',
        'viewonce'
    ];
    _0x5448 = function () {
        return _0xe0bd15;
    };
    return _0x5448();
}
import _0x586903 from 'fs';
const vv = async (_0x57d9f7, _0x20a53d) => {
    const _0x52834b = _0x2e27;
    try {
        console[_0x52834b(0x174)](_0x52834b(0x189), _0x57d9f7['quoted']);
        const _0x58d2ed = _0x57d9f7[_0x52834b(0x184)][_0x52834b(0x170)](/^[\\/!#.]/), _0xc80d4f = _0x58d2ed ? _0x58d2ed[0x0] : '/', _0x426fdf = _0x57d9f7[_0x52834b(0x184)][_0x52834b(0x16f)](_0xc80d4f) ? _0x57d9f7['body'][_0x52834b(0x18b)](_0xc80d4f[_0x52834b(0x17f)])['split']('\x20')[0x0][_0x52834b(0x16c)]() : '', _0x1f364f = [
                'rvo',
                'vv',
                _0x52834b(0x171),
                _0x52834b(0x183),
                _0x52834b(0x17e)
            ];
        if (!_0x1f364f['includes'](_0x426fdf))
            return;
        if (!_0x57d9f7['quoted'] || _0x57d9f7[_0x52834b(0x172)][_0x52834b(0x17b)] !== _0x52834b(0x187) || _0x57d9f7[_0x52834b(0x172)][_0x52834b(0x16e)] !== _0x52834b(0x18e) && _0x57d9f7['quoted'][_0x52834b(0x16e)] !== _0x52834b(0x16d) && _0x57d9f7[_0x52834b(0x172)][_0x52834b(0x16e)] !== _0x52834b(0x179))
            return _0x57d9f7[_0x52834b(0x17d)](_0x52834b(0x175));
        const _0x1f4f85 = _0x57d9f7[_0x52834b(0x172)][_0x52834b(0x186)], _0x5cb262 = Object[_0x52834b(0x191)](_0x1f4f85)[0x0], _0x49acba = _0x1f4f85[_0x5cb262]['caption'] || '', _0x45d5d7 = _0x49acba + '\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*';
        let _0x300be0 = _0x52834b(0x177);
        if (_0x5cb262 === 'videoMessage')
            _0x300be0 = _0x52834b(0x17c);
        else
            _0x5cb262 === 'audioMessage' && (_0x300be0 = _0x52834b(0x18a));
        const _0x3c0075 = await downloadContentFromMessage(_0x1f4f85[_0x5cb262], _0x300be0);
        let _0x1e2877 = Buffer['from']([]);
        for await (const _0x28deb8 of _0x3c0075) {
            _0x1e2877 = Buffer[_0x52834b(0x17a)]([
                _0x1e2877,
                _0x28deb8
            ]);
        }
        console[_0x52834b(0x174)](_0x52834b(0x18d));
        const _0x567964 = _0x57d9f7[_0x52834b(0x181)];
        if (_0x5cb262 === _0x52834b(0x16d))
            await _0x20a53d[_0x52834b(0x173)](_0x567964, {
                'video': _0x1e2877,
                'caption': _0x45d5d7,
                'contextInfo': {
                    'mentionedJid': [_0x57d9f7[_0x52834b(0x181)]],
                    'forwardingScore': 0x270f,
                    'isForwarded': ![]
                }
            }, { 'quoted': _0x57d9f7 });
        else {
            if (_0x5cb262 === 'imageMessage')
                await _0x20a53d[_0x52834b(0x173)](_0x567964, {
                    'image': _0x1e2877,
                    'caption': _0x45d5d7,
                    'contextInfo': {
                        'mentionedJid': [_0x57d9f7[_0x52834b(0x181)]],
                        'forwardingScore': 0x270f,
                        'isForwarded': ![]
                    }
                }, { 'quoted': _0x57d9f7 });
            else
                _0x5cb262 === _0x52834b(0x179) && await _0x20a53d[_0x52834b(0x173)](_0x567964, {
                    'audio': _0x1e2877,
                    'mimetype': 'audio/ogg;\x20codecs=opus',
                    'contextInfo': {
                        'mentionedJid': [_0x57d9f7[_0x52834b(0x181)]],
                        'forwardingScore': 0x270f,
                        'isForwarded': ![]
                    }
                }, { 'quoted': _0x57d9f7 });
        }
    } catch (_0x220b75) {
        console['error'](_0x52834b(0x188), _0x220b75), _0x57d9f7[_0x52834b(0x17d)](_0x52834b(0x178));
    }
};
function _0x2e27(_0x57ea75, _0x12984b) {
    const _0x544881 = _0x5448();
    return _0x2e27 = function (_0x2e2773, _0x4219db) {
        _0x2e2773 = _0x2e2773 - 0x16c;
        let _0x4cc8c4 = _0x544881[_0x2e2773];
        return _0x4cc8c4;
    }, _0x2e27(_0x57ea75, _0x12984b);
}
export default vv;
