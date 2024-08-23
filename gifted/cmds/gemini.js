(function (_0x432342, _0x1cfb8f) {
    const _0x3c4b25 = _0x51db, _0x32923c = _0x432342();
    while (!![]) {
        try {
            const _0x564a01 = -parseInt(_0x3c4b25(0x135)) / 0x1 * (parseInt(_0x3c4b25(0x144)) / 0x2) + parseInt(_0x3c4b25(0x12d)) / 0x3 * (-parseInt(_0x3c4b25(0x150)) / 0x4) + -parseInt(_0x3c4b25(0x146)) / 0x5 * (parseInt(_0x3c4b25(0x130)) / 0x6) + parseInt(_0x3c4b25(0x13a)) / 0x7 + parseInt(_0x3c4b25(0x15b)) / 0x8 + parseInt(_0x3c4b25(0x127)) / 0x9 * (parseInt(_0x3c4b25(0x134)) / 0xa) + parseInt(_0x3c4b25(0x12a)) / 0xb;
            if (_0x564a01 === _0x1cfb8f)
                break;
            else
                _0x32923c['push'](_0x32923c['shift']());
        } catch (_0x1cd79f) {
            _0x32923c['push'](_0x32923c['shift']());
        }
    }
}(_0x1cfa, 0xdb617));
import _0xb96ed3 from 'axios';
import _0x55c086, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0x55c086, geminiResponse = async (_0x101949, _0x130da8) => {
        const _0x3bcde6 = _0x51db, _0x446fbf = _0x101949[_0x3bcde6(0x138)][_0x3bcde6(0x14b)](/^[\\/!#.]/), _0x3b4285 = _0x446fbf ? _0x446fbf[0x0] : '/', _0x30f8be = _0x101949[_0x3bcde6(0x138)][_0x3bcde6(0x154)](_0x3b4285) ? _0x101949[_0x3bcde6(0x138)][_0x3bcde6(0x13c)](_0x3b4285['length'])['split']('\x20')[0x0][_0x3bcde6(0x15a)]() : '', _0x330433 = _0x101949[_0x3bcde6(0x138)][_0x3bcde6(0x13c)](_0x3b4285[_0x3bcde6(0x137)] + _0x30f8be[_0x3bcde6(0x137)])['trim'](), _0x5271d8 = [
                _0x3bcde6(0x140),
                _0x3bcde6(0x14a)
            ];
        if (_0x5271d8[_0x3bcde6(0x153)](_0x30f8be)) {
            if (!_0x330433)
                return _0x101949['reply'](_0x3bcde6(0x142) + _0x101949[_0x3bcde6(0x132)] + _0x3bcde6(0x152));
            try {
                await _0x101949[_0x3bcde6(0x14c)]('🕘'), await _0x101949[_0x3bcde6(0x12e)](_0x3bcde6(0x139));
                const _0x2da2b6 = _0x3bcde6(0x13b) + encodeURIComponent(_0x330433), _0x40702d = await _0xb96ed3[_0x3bcde6(0x14d)](_0x2da2b6), _0x4f2122 = _0x40702d[_0x3bcde6(0x133)];
                if (_0x4f2122 && _0x4f2122['result']) {
                    const _0x1a4895 = _0x4f2122[_0x3bcde6(0x131)], _0x264a40 = _0x1a4895 + '\x0a\x0a', _0x332693 = _0x1a4895['match'](/```([\s\S]*?)```/);
                    let _0x296bb0 = [];
                    if (_0x332693) {
                        const _0x7c0af4 = _0x332693[0x1];
                        _0x296bb0[_0x3bcde6(0x155)]({
                            'name': _0x3bcde6(0x157),
                            'buttonParamsJson': JSON[_0x3bcde6(0x128)]({
                                'display_text': _0x3bcde6(0x156),
                                'id': _0x3bcde6(0x13f),
                                'copy_code': _0x7c0af4
                            })
                        });
                    }
                    _0x296bb0['push']({
                        'name': _0x3bcde6(0x157),
                        'buttonParamsJson': JSON[_0x3bcde6(0x128)]({
                            'display_text': _0x3bcde6(0x159),
                            'id': _0x3bcde6(0x13f),
                            'copy_code': _0x264a40
                        })
                    }, {
                        'name': _0x3bcde6(0x136),
                        'buttonParamsJson': JSON['stringify']({
                            'display_text': 'sʜᴏᴡ\x20💜\x20ғᴏʀ\x20ɢɪғᴛᴇᴅ',
                            'url': _0x3bcde6(0x12b)
                        })
                    }, {
                        'name': _0x3bcde6(0x13d),
                        'buttonParamsJson': JSON[_0x3bcde6(0x128)]({
                            'display_text': 'ᴍᴀɪɴ\x20ᴍᴇɴᴜ',
                            'id': _0x3bcde6(0x12f)
                        })
                    });
                    let _0x8485d5 = generateWAMessageFromContent(_0x101949[_0x3bcde6(0x14e)], {
                        'viewOnceMessage': {
                            'message': {
                                'messageContextInfo': {
                                    'deviceListMetadata': {},
                                    'deviceListMetadataVersion': 0x2
                                },
                                'interactiveMessage': proto[_0x3bcde6(0x13e)][_0x3bcde6(0x143)]['create']({
                                    'body': proto[_0x3bcde6(0x13e)][_0x3bcde6(0x143)][_0x3bcde6(0x147)][_0x3bcde6(0x129)]({ 'text': _0x1a4895 }),
                                    'footer': proto[_0x3bcde6(0x13e)][_0x3bcde6(0x143)]['Footer'][_0x3bcde6(0x129)]({ 'text': _0x3bcde6(0x125) }),
                                    'header': proto[_0x3bcde6(0x13e)][_0x3bcde6(0x143)][_0x3bcde6(0x151)][_0x3bcde6(0x129)]({
                                        'title': '',
                                        'subtitle': '',
                                        'hasMediaAttachment': ![]
                                    }),
                                    'nativeFlowMessage': proto[_0x3bcde6(0x13e)]['InteractiveMessage'][_0x3bcde6(0x148)][_0x3bcde6(0x129)]({ 'buttons': _0x296bb0 })
                                })
                            }
                        }
                    }, {});
                    await _0x130da8[_0x3bcde6(0x14f)](_0x8485d5['key'][_0x3bcde6(0x145)], _0x8485d5[_0x3bcde6(0x126)], { 'messageId': _0x8485d5['key']['id'] }), await _0x101949[_0x3bcde6(0x14c)]('✅');
                } else
                    throw new Error(_0x3bcde6(0x158));
            } catch (_0x170203) {
                console[_0x3bcde6(0x12c)](_0x3bcde6(0x149), _0x170203[_0x3bcde6(0x126)]), _0x101949[_0x3bcde6(0x12e)](_0x3bcde6(0x141)), await _0x101949[_0x3bcde6(0x14c)]('❌');
            }
        }
    };
function _0x1cfa() {
    const _0x2f6f6d = [
        'toLowerCase',
        '5758064qQadIh',
        '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'message',
        '1386OwvGkn',
        'stringify',
        'create',
        '13132614ChawgP',
        'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
        'error',
        '3BqonXC',
        'reply',
        '.menu',
        '723324rtpMGc',
        'result',
        'pushName',
        'data',
        '21730axYMeZ',
        '787NTPSZx',
        'cta_url',
        'length',
        'body',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Generating\x20Your\x20Gemini\x20Request...',
        '11197662EiYfFT',
        'https://widipe.com/gemini?text=',
        'slice',
        'quick_reply',
        'Message',
        'copy_code',
        'gemini',
        'Error\x20getting\x20response\x20from\x20GPT.',
        'Hello\x20*_',
        'InteractiveMessage',
        '4126FnwJUQ',
        'remoteJid',
        '5bSOJsF',
        'Body',
        'NativeFlowMessage',
        'Error\x20getting\x20GPT\x20response:',
        'geminiai',
        'match',
        'React',
        'get',
        'from',
        'relayMessage',
        '4820888SkfAhh',
        'Header',
        '_,*\x0a\x20Gifted\x20Gemini\x20Ai\x20Here.\x0a\x20Please\x20Ask\x20Me\x20a\x20Question.',
        'includes',
        'startsWith',
        'push',
        '📋\x20ᴄᴏᴘʏ\x20ɢᴇɴᴇʀᴀᴛᴇᴅ\x20ᴄᴏᴅᴇ',
        'cta_copy',
        'Invalid\x20response\x20from\x20the\x20GPT\x20API.',
        '📋\x20ᴄᴏᴘʏ\x20ᴡʜᴏʟᴇ\x20ᴛᴇxᴛ'
    ];
    _0x1cfa = function () {
        return _0x2f6f6d;
    };
    return _0x1cfa();
}
function _0x51db(_0x247f97, _0x7973c5) {
    const _0x1cfab3 = _0x1cfa();
    return _0x51db = function (_0x51dbf7, _0x4f25c5) {
        _0x51dbf7 = _0x51dbf7 - 0x125;
        let _0x5e1904 = _0x1cfab3[_0x51dbf7];
        return _0x5e1904;
    }, _0x51db(_0x247f97, _0x7973c5);
}
export default geminiResponse;
