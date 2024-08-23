(function (_0x5d0538, _0xb08adc) {
    const _0x2ae921 = _0x646d, _0x5b177f = _0x5d0538();
    while (!![]) {
        try {
            const _0x4f926b = -parseInt(_0x2ae921(0x1cc)) / 0x1 * (-parseInt(_0x2ae921(0x1d4)) / 0x2) + parseInt(_0x2ae921(0x1e9)) / 0x3 + -parseInt(_0x2ae921(0x1ec)) / 0x4 + parseInt(_0x2ae921(0x1d6)) / 0x5 + parseInt(_0x2ae921(0x1e5)) / 0x6 * (parseInt(_0x2ae921(0x1c6)) / 0x7) + -parseInt(_0x2ae921(0x1e8)) / 0x8 + -parseInt(_0x2ae921(0x1e3)) / 0x9;
            if (_0x4f926b === _0xb08adc)
                break;
            else
                _0x5b177f['push'](_0x5b177f['shift']());
        } catch (_0xb75903) {
            _0x5b177f['push'](_0x5b177f['shift']());
        }
    }
}(_0x2c00, 0x2941e));
import _0x5bdab8 from 'axios';
import _0x10c25e, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0x10c25e, Lyrics = async (_0xf2c3e5, _0x8a65d1) => {
        const _0x580fa1 = _0x646d, _0xb45983 = _0xf2c3e5[_0x580fa1(0x1eb)][_0x580fa1(0x1e4)](/^[\\/!#.]/), _0x5e9f2c = _0xb45983 ? _0xb45983[0x0] : '/', _0x4ef267 = _0xf2c3e5[_0x580fa1(0x1eb)][_0x580fa1(0x1dc)](_0x5e9f2c) ? _0xf2c3e5['body'][_0x580fa1(0x1c1)](_0x5e9f2c[_0x580fa1(0x1ce)])[_0x580fa1(0x1c2)]('\x20')[0x0]['toLowerCase']() : '', _0x195201 = _0xf2c3e5[_0x580fa1(0x1eb)][_0x580fa1(0x1c1)](_0x5e9f2c[_0x580fa1(0x1ce)] + _0x4ef267['length'])[_0x580fa1(0x1ea)](), _0x587a44 = [
                _0x580fa1(0x1c0),
                _0x580fa1(0x1cd)
            ];
        if (_0x587a44[_0x580fa1(0x1dd)](_0x4ef267)) {
            if (!_0x195201)
                return _0xf2c3e5[_0x580fa1(0x1e7)](_0x580fa1(0x1c4) + _0xf2c3e5[_0x580fa1(0x1e1)] + _0x580fa1(0x1c5));
            try {
                await _0xf2c3e5[_0x580fa1(0x1da)]('🕘'), await _0xf2c3e5['reply'](_0x580fa1(0x1c3));
                if (!_0x195201[_0x580fa1(0x1dd)]('|'))
                    return _0xf2c3e5[_0x580fa1(0x1e7)](_0x580fa1(0x1c9));
                const [_0x18d93c, _0x4f8857] = _0x195201['split']('|')[_0x580fa1(0x1cf)](_0x447520 => _0x447520['trim']());
                if (!_0x18d93c || !_0x4f8857)
                    return _0xf2c3e5[_0x580fa1(0x1e7)]('Both\x20song\x20name\x20and\x20artist\x20name\x20are\x20required.\x20Please\x20provide\x20them\x20in\x20the\x20format:\x20song\x20name|artist\x20name.');
                const _0x42b04d = 'https://api.lyrics.ovh/v1/' + encodeURIComponent(_0x4f8857) + '/' + encodeURIComponent(_0x18d93c), _0x15d447 = await _0x5bdab8[_0x580fa1(0x1de)](_0x42b04d), _0x207e64 = _0x15d447[_0x580fa1(0x1d8)];
                if (_0x207e64 && _0x207e64[_0x580fa1(0x1c0)]) {
                    const _0x378e3a = _0x207e64[_0x580fa1(0x1c0)];
                    let _0x530c5b = [
                            {
                                'name': _0x580fa1(0x1bc),
                                'buttonParamsJson': JSON['stringify']({
                                    'display_text': '📋\x20ᴄᴏᴘʏ\x20ʟʏʀɪᴄs',
                                    'id': _0x580fa1(0x1cb),
                                    'copy_code': _0x378e3a
                                })
                            },
                            {
                                'name': _0x580fa1(0x1d5),
                                'buttonParamsJson': JSON['stringify']({
                                    'display_text': _0x580fa1(0x1e0),
                                    'url': _0x580fa1(0x1d1)
                                })
                            },
                            {
                                'name': 'quick_reply',
                                'buttonParamsJson': JSON['stringify']({
                                    'display_text': _0x580fa1(0x1c7),
                                    'id': '.menu'
                                })
                            }
                        ], _0x4eb2d5 = generateWAMessageFromContent(_0xf2c3e5[_0x580fa1(0x1e6)], {
                            'viewOnceMessage': {
                                'message': {
                                    'messageContextInfo': {
                                        'deviceListMetadata': {},
                                        'deviceListMetadataVersion': 0x2
                                    },
                                    'interactiveMessage': proto[_0x580fa1(0x1ba)][_0x580fa1(0x1d0)][_0x580fa1(0x1df)]({
                                        'body': proto['Message'][_0x580fa1(0x1d0)][_0x580fa1(0x1bb)][_0x580fa1(0x1df)]({ 'text': _0x378e3a }),
                                        'footer': proto[_0x580fa1(0x1ba)][_0x580fa1(0x1d0)]['Footer'][_0x580fa1(0x1df)]({ 'text': _0x580fa1(0x1ca) }),
                                        'header': proto[_0x580fa1(0x1ba)][_0x580fa1(0x1d0)][_0x580fa1(0x1bd)][_0x580fa1(0x1df)]({
                                            'title': '',
                                            'subtitle': '',
                                            'hasMediaAttachment': ![]
                                        }),
                                        'nativeFlowMessage': proto[_0x580fa1(0x1ba)][_0x580fa1(0x1d0)][_0x580fa1(0x1db)][_0x580fa1(0x1df)]({ 'buttons': _0x530c5b })
                                    })
                                }
                            }
                        }, {});
                    await _0x8a65d1[_0x580fa1(0x1d7)](_0x4eb2d5[_0x580fa1(0x1bf)][_0x580fa1(0x1e2)], _0x4eb2d5[_0x580fa1(0x1be)], { 'messageId': _0x4eb2d5[_0x580fa1(0x1bf)]['id'] }), await _0xf2c3e5['React']('✅');
                } else
                    throw new Error(_0x580fa1(0x1d9));
            } catch (_0x2636c2) {
                console[_0x580fa1(0x1d3)](_0x580fa1(0x1c8), _0x2636c2['message']), _0xf2c3e5['reply'](_0x580fa1(0x1d2)), await _0xf2c3e5[_0x580fa1(0x1da)]('❌');
            }
        }
    };
function _0x2c00() {
    const _0xf6f4a8 = [
        'create',
        'sʜᴏᴡ\x20💜\x20ғᴏʀ\x20ɢɪғᴛᴇᴅ',
        'pushName',
        'remoteJid',
        '5069079hKxjgI',
        'match',
        '18IhTAKW',
        'from',
        'reply',
        '903632kFTRdC',
        '752895JutnUs',
        'trim',
        'body',
        '227148oyZSLd',
        'Message',
        'Body',
        'cta_copy',
        'Header',
        'message',
        'key',
        'lyrics',
        'slice',
        'split',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20generating\x20your\x20lyrics\x20request...',
        'Hello\x20*_',
        '_,*\x0a\x20Here\x27s\x20Example\x20Usage:\x20_.lyrics\x20Spectre|Alan\x20Walker._',
        '503209lsOndF',
        'ᴍᴀɪɴ\x20ᴍᴇɴᴜ',
        'Error\x20getting\x20lyrics:',
        'Please\x20provide\x20the\x20song\x20name\x20and\x20artist\x20name\x20separated\x20by\x20a\x20\x22|\x22,\x20for\x20example:\x20Spectre|Alan\x20Walker.',
        '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'copy_code',
        '37889DFBAgf',
        'lyric',
        'length',
        'map',
        'InteractiveMessage',
        'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
        'Error\x20getting\x20lyrics.',
        'error',
        '8SwnfNb',
        'cta_url',
        '1418900XrEiGH',
        'relayMessage',
        'data',
        'Invalid\x20response\x20from\x20the\x20Lyrics\x20API.',
        'React',
        'NativeFlowMessage',
        'startsWith',
        'includes',
        'get'
    ];
    _0x2c00 = function () {
        return _0xf6f4a8;
    };
    return _0x2c00();
}
function _0x646d(_0x1c7257, _0x3597de) {
    const _0x2c0017 = _0x2c00();
    return _0x646d = function (_0x646d21, _0x184107) {
        _0x646d21 = _0x646d21 - 0x1ba;
        let _0x5af692 = _0x2c0017[_0x646d21];
        return _0x5af692;
    }, _0x646d(_0x1c7257, _0x3597de);
}
export default Lyrics;
