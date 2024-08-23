(function (_0x4c3dd8, _0x137d6c) {
    const _0x3f468d = _0x1228, _0x59e2b5 = _0x4c3dd8();
    while (!![]) {
        try {
            const _0x5bb4c3 = parseInt(_0x3f468d(0x1db)) / 0x1 + parseInt(_0x3f468d(0x203)) / 0x2 + -parseInt(_0x3f468d(0x1fa)) / 0x3 + parseInt(_0x3f468d(0x1f7)) / 0x4 + -parseInt(_0x3f468d(0x1fe)) / 0x5 + parseInt(_0x3f468d(0x1e9)) / 0x6 * (-parseInt(_0x3f468d(0x1fd)) / 0x7) + parseInt(_0x3f468d(0x201)) / 0x8 * (parseInt(_0x3f468d(0x1ff)) / 0x9);
            if (_0x5bb4c3 === _0x137d6c)
                break;
            else
                _0x59e2b5['push'](_0x59e2b5['shift']());
        } catch (_0x2f5bde) {
            _0x59e2b5['push'](_0x59e2b5['shift']());
        }
    }
}(_0x3137, 0x6130b));
import _0x1f4334 from 'axios';
function _0x1228(_0x181e15, _0x59c001) {
    const _0x3137df = _0x3137();
    return _0x1228 = function (_0x1228d5, _0x5785df) {
        _0x1228d5 = _0x1228d5 - 0x1db;
        let _0x488ba1 = _0x3137df[_0x1228d5];
        return _0x488ba1;
    }, _0x1228(_0x181e15, _0x59c001);
}
import _0x18ac58, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0x18ac58, TinyVurl = async (_0x11092e, _0x3e1432) => {
        const _0x3d3d01 = _0x1228, _0x4b73a8 = _0x11092e['body'][_0x3d3d01(0x1e3)](/^[\\/!#.]/), _0x3b9b65 = _0x4b73a8 ? _0x4b73a8[0x0] : '/', _0x1245ad = _0x11092e[_0x3d3d01(0x1ec)][_0x3d3d01(0x1e7)](_0x3b9b65) ? _0x11092e[_0x3d3d01(0x1ec)][_0x3d3d01(0x1fc)](_0x3b9b65[_0x3d3d01(0x1e8)])[_0x3d3d01(0x1f0)]('\x20')[0x0][_0x3d3d01(0x1e6)]() : '', _0xf090c9 = _0x11092e[_0x3d3d01(0x1ec)]['slice'](_0x3b9b65['length'] + _0x1245ad['length'])[_0x3d3d01(0x1df)](), _0x59cb46 = [_0x3d3d01(0x1ea)];
        if (_0x59cb46['includes'](_0x1245ad)) {
            if (!_0xf090c9)
                return _0x11092e[_0x3d3d01(0x1e5)](_0x3d3d01(0x205) + _0x11092e[_0x3d3d01(0x1f4)] + _0x3d3d01(0x1de));
            try {
                await _0x11092e[_0x3d3d01(0x1dc)]('🕘');
                const _0x41f2da = _0x3d3d01(0x1ed) + encodeURIComponent(_0xf090c9), _0x453bd = await _0x1f4334[_0x3d3d01(0x1f3)](_0x41f2da), _0x288b32 = _0x453bd[_0x3d3d01(0x208)];
                if (_0x288b32 && _0x288b32[_0x3d3d01(0x1fb)]) {
                    const _0x23d6e6 = _0x288b32[_0x3d3d01(0x1fb)], _0x2d4515 = _0x23d6e6[_0x3d3d01(0x1e3)](/```([\s\S]*?)```/);
                    if (_0x2d4515) {
                        const _0x193bfd = _0x2d4515[0x1];
                        let _0x322085 = generateWAMessageFromContent(_0x11092e[_0x3d3d01(0x1f9)], {
                            'viewOnceMessage': {
                                'message': {
                                    'messageContextInfo': {
                                        'deviceListMetadata': {},
                                        'deviceListMetadataVersion': 0x2
                                    },
                                    'interactiveMessage': proto[_0x3d3d01(0x1e2)][_0x3d3d01(0x1e4)][_0x3d3d01(0x1f6)]({
                                        'body': proto['Message'][_0x3d3d01(0x1e4)][_0x3d3d01(0x1e0)][_0x3d3d01(0x1f6)]({ 'text': _0x23d6e6 }),
                                        'footer': proto[_0x3d3d01(0x1e2)][_0x3d3d01(0x1e4)][_0x3d3d01(0x1eb)]['create']({ 'text': _0x3d3d01(0x1f5) }),
                                        'header': proto[_0x3d3d01(0x1e2)][_0x3d3d01(0x1e4)][_0x3d3d01(0x1f1)][_0x3d3d01(0x1f6)]({
                                            'title': '',
                                            'subtitle': '',
                                            'hasMediaAttachment': ![]
                                        }),
                                        'nativeFlowMessage': proto[_0x3d3d01(0x1e2)]['InteractiveMessage'][_0x3d3d01(0x1e1)][_0x3d3d01(0x1f6)]({
                                            'buttons': [{
                                                    'name': _0x3d3d01(0x1dd),
                                                    'buttonParamsJson': JSON['stringify']({
                                                        'display_text': _0x3d3d01(0x202),
                                                        'id': _0x3d3d01(0x1f2),
                                                        'copy_code': _0x193bfd
                                                    })
                                                }]
                                        })
                                    })
                                }
                            }
                        }, {});
                        await _0x3e1432[_0x3d3d01(0x206)](_0x322085[_0x3d3d01(0x200)][_0x3d3d01(0x207)], _0x322085[_0x3d3d01(0x1ef)], { 'messageId': _0x322085['key']['id'] });
                    } else
                        await _0x3e1432[_0x3d3d01(0x1ee)](_0x11092e[_0x3d3d01(0x1f9)], { 'text': _0x23d6e6 }, { 'quoted': _0x11092e });
                    await _0x11092e[_0x3d3d01(0x1dc)]('✅');
                } else
                    throw new Error('Invalid\x20response\x20from\x20the\x20GPT\x20API.');
            } catch (_0x56e573) {
                console['error'](_0x3d3d01(0x204), _0x56e573[_0x3d3d01(0x1ef)]), _0x11092e['reply'](_0x3d3d01(0x1f8)), await _0x11092e[_0x3d3d01(0x1dc)]('❌');
            }
        }
    };
export default TinyVurl;
function _0x3137() {
    const _0x318aec = [
        '7651KYQPAT',
        '725450KyQPJz',
        '2907aGypVT',
        'key',
        '2176KmqUqu',
        'Copy\x20Your\x20Code',
        '1426294QgYWni',
        'Error\x20getting\x20GPT\x20response:',
        'Hello\x20*_',
        'relayMessage',
        'remoteJid',
        'data',
        '544176hhWlIu',
        'React',
        'cta_copy',
        '_,*\x0a\x20Gifted\x20Vurl\x20Shortener\x20Here.\x0a\x20Please\x20Provide\x20a\x20Url\x20to\x20Shorten.',
        'trim',
        'Body',
        'NativeFlowMessage',
        'Message',
        'match',
        'InteractiveMessage',
        'reply',
        'toLowerCase',
        'startsWith',
        'length',
        '4218JRteBk',
        'vurl',
        'Footer',
        'body',
        'https://widipe.com/short/vurl?link=',
        'sendMessage',
        'message',
        'split',
        'Header',
        'copy_code',
        'get',
        'pushName',
        '>\x20>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'create',
        '1478836pmRCDd',
        'Error\x20getting\x20response\x20from\x20GPT.',
        'from',
        '1209984VSprqZ',
        'result',
        'slice'
    ];
    _0x3137 = function () {
        return _0x318aec;
    };
    return _0x3137();
}
