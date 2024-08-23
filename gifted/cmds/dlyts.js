(function (_0x1b0d2c, _0x17628e) {
    const _0x3afbd9 = _0x44a6, _0x15e714 = _0x1b0d2c();
    while (!![]) {
        try {
            const _0x131852 = parseInt(_0x3afbd9(0x16a)) / 0x1 + parseInt(_0x3afbd9(0x13e)) / 0x2 + parseInt(_0x3afbd9(0x16d)) / 0x3 + parseInt(_0x3afbd9(0x17b)) / 0x4 * (-parseInt(_0x3afbd9(0x149)) / 0x5) + -parseInt(_0x3afbd9(0x136)) / 0x6 * (-parseInt(_0x3afbd9(0x12e)) / 0x7) + parseInt(_0x3afbd9(0x164)) / 0x8 * (-parseInt(_0x3afbd9(0x12a)) / 0x9) + parseInt(_0x3afbd9(0x143)) / 0xa * (parseInt(_0x3afbd9(0x13a)) / 0xb);
            if (_0x131852 === _0x17628e)
                break;
            else
                _0x15e714['push'](_0x15e714['shift']());
        } catch (_0x49a9e2) {
            _0x15e714['push'](_0x15e714['shift']());
        }
    }
}(_0x34e3, 0xe49d3));
import _0x41f088 from 'yt-search';
function _0x44a6(_0x51094b, _0x20919d) {
    const _0x34e351 = _0x34e3();
    return _0x44a6 = function (_0x44a66f, _0x42b70f) {
        _0x44a66f = _0x44a66f - 0x129;
        let _0x5de867 = _0x34e351[_0x44a66f];
        return _0x5de867;
    }, _0x44a6(_0x51094b, _0x20919d);
}
import _0x43f36e from 'axios';
import _0x6d9954, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0x6d9954, videoMap = new Map();
let videoIndex = 0x1, audioIndex = 0x3e9;
const song = async (_0x4e0c25, _0x2ce3a0) => {
    const _0x451979 = _0x44a6;
    let _0xa28f7;
    const _0x5deb19 = _0x4e0c25?.[_0x451979(0x130)]?.[_0x451979(0x154)]?.[_0x451979(0x165)], _0x4455c4 = _0x4e0c25?.[_0x451979(0x130)]?.[_0x451979(0x171)];
    if (_0x4455c4) {
        const _0x2ae555 = _0x4455c4[_0x451979(0x167)]?.[_0x451979(0x160)];
        if (_0x2ae555) {
            const _0xef11b3 = JSON[_0x451979(0x129)](_0x2ae555);
            _0xa28f7 = _0xef11b3['id'];
        }
    }
    const _0x538c58 = _0xa28f7 || _0x5deb19, _0x3a5639 = _0x4e0c25[_0x451979(0x175)][_0x451979(0x156)](/^[\\/!#.]/), _0x2b4864 = _0x3a5639 ? _0x3a5639[0x0] : '/', _0x1b1b58 = _0x451979(0x148), _0x1946fc = 'giftedtechk', _0x2583ad = _0x4e0c25[_0x451979(0x175)][_0x451979(0x168)](_0x2b4864) ? _0x4e0c25[_0x451979(0x175)][_0x451979(0x162)](_0x2b4864[_0x451979(0x14d)])[_0x451979(0x139)]('\x20')[0x0]['toLowerCase']() : '', _0x1cee87 = _0x4e0c25[_0x451979(0x175)][_0x451979(0x162)](_0x2b4864[_0x451979(0x14d)] + _0x2583ad[_0x451979(0x14d)])[_0x451979(0x150)](), _0x2041bf = [
            'yts',
            'ytsearch'
        ];
    if (_0x2041bf[_0x451979(0x145)](_0x2583ad)) {
        if (!_0x1cee87)
            return _0x4e0c25['reply']('Please\x20provide\x20a\x20YouTube\x20URL\x20or\x20search\x20query');
        try {
            await _0x4e0c25[_0x451979(0x131)]('🕘'), await _0x4e0c25[_0x451979(0x178)]('A\x20moment,\x20*Gifted-Md*\x20is\x20Generating\x20Download\x20Buttons...');
            const _0x179712 = await _0x41f088(_0x1cee87), _0x2b2e13 = _0x179712[_0x451979(0x157)][_0x451979(0x162)](0x0, 0x32);
            if (_0x2b2e13[_0x451979(0x14d)] === 0x0) {
                _0x4e0c25[_0x451979(0x178)]('No\x20results\x20found.'), await _0x4e0c25[_0x451979(0x131)]('❌');
                return;
            }
            const _0x436d53 = _0x2b2e13['map']((_0x1ee16d, _0x27443d) => {
                    const _0x35c9f5 = _0x451979, _0x4ac8e8 = videoIndex + _0x27443d;
                    return videoMap[_0x35c9f5(0x153)](_0x4ac8e8, {
                        ..._0x1ee16d,
                        'isAudio': ![]
                    }), {
                        'header': '',
                        'title': _0x1ee16d[_0x35c9f5(0x151)],
                        'description': '',
                        'id': '🎦video_' + _0x4ac8e8
                    };
                }), _0x39e7c9 = _0x2b2e13[_0x451979(0x158)]((_0x268168, _0x247592) => {
                    const _0x2fa5db = _0x451979, _0xe72b14 = audioIndex + _0x247592;
                    return videoMap[_0x2fa5db(0x153)](_0xe72b14, {
                        ..._0x268168,
                        'isAudio': !![]
                    }), {
                        'header': '',
                        'title': _0x268168[_0x2fa5db(0x151)],
                        'description': '',
                        'id': _0x2fa5db(0x174) + _0xe72b14
                    };
                }), _0x5bd91c = _0x2b2e13[0x0], _0x3f844b = _0x5bd91c[_0x451979(0x151)], _0x47345c = _0x5bd91c[_0x451979(0x12b)][_0x451979(0x173)], _0x57d020 = _0x5bd91c[_0x451979(0x141)][_0x451979(0x138)], _0xc8f4a8 = _0x5bd91c['views'], _0x106164 = _0x451979(0x13f) + _0x5bd91c[_0x451979(0x15a)], _0x185cf4 = _0x5bd91c['thumbnail'], _0x35d785 = generateWAMessageFromContent(_0x4e0c25[_0x451979(0x133)], {
                    'viewOnceMessage': {
                        'message': {
                            'messageContextInfo': {
                                'deviceListMetadata': {},
                                'deviceListMetadataVersion': 0x2
                            },
                            'interactiveMessage': proto['Message'][_0x451979(0x134)][_0x451979(0x15c)]({
                                'body': proto[_0x451979(0x16f)]['InteractiveMessage']['Body']['create']({ 'text': '>\x20*𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝐈𝐃𝐄𝐎\x20𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\x0a\x0a*Tittle:*\x20_' + _0x3f844b + _0x451979(0x12f) + _0x47345c + _0x451979(0x14e) + _0x57d020 + 's_\x0a*Views:*\x20_' + _0xc8f4a8 + _0x451979(0x12d) + _0x106164 + '_' }),
                                'footer': proto[_0x451979(0x16f)][_0x451979(0x134)][_0x451979(0x14c)][_0x451979(0x15c)]({ 'text': _0x451979(0x176) }),
                                'header': proto[_0x451979(0x16f)]['InteractiveMessage'][_0x451979(0x15b)]['create']({
                                    ...await prepareWAMessageMedia({ 'image': { 'url': _0x185cf4 } }, { 'upload': _0x2ce3a0['waUploadToServer'] }),
                                    'title': '',
                                    'gifPlayback': !![],
                                    'subtitle': '',
                                    'hasMediaAttachment': ![]
                                }),
                                'nativeFlowMessage': proto[_0x451979(0x16f)][_0x451979(0x134)][_0x451979(0x179)]['create']({
                                    'buttons': [
                                        {
                                            'name': _0x451979(0x17d),
                                            'buttonParamsJson': JSON[_0x451979(0x15e)]({
                                                'title': _0x451979(0x14a),
                                                'sections': [{
                                                        'title': _0x451979(0x13b),
                                                        'highlight_label': _0x451979(0x155),
                                                        'rows': _0x436d53
                                                    }]
                                            })
                                        },
                                        {
                                            'name': _0x451979(0x17d),
                                            'buttonParamsJson': JSON[_0x451979(0x15e)]({
                                                'title': '🎧\x20sᴇʟᴇᴄᴛ\x20ᴀɴ\x20ᴀᴜᴅɪᴏ',
                                                'sections': [{
                                                        'title': _0x451979(0x15f),
                                                        'highlight_label': _0x451979(0x155),
                                                        'rows': _0x39e7c9
                                                    }]
                                            })
                                        },
                                        {
                                            'name': _0x451979(0x166),
                                            'buttonParamsJson': JSON[_0x451979(0x15e)]({
                                                'display_text': 'sʜᴏᴡ\x20💜\x20ғᴏʀ\x20ɢɪғᴛᴇᴅ',
                                                'url': 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l'
                                            })
                                        }
                                    ]
                                }),
                                'contextInfo': {
                                    'mentionedJid': [_0x4e0c25['sender']],
                                    'forwardingScore': 0x270f,
                                    'isForwarded': ![]
                                }
                            })
                        }
                    }
                }, {});
            await _0x2ce3a0[_0x451979(0x169)](_0x35d785[_0x451979(0x135)][_0x451979(0x152)], _0x35d785['message'], { 'messageId': _0x35d785['key']['id'] }), await _0x4e0c25['React']('✅'), videoIndex += _0x2b2e13[_0x451979(0x14d)], audioIndex += _0x2b2e13[_0x451979(0x14d)];
        } catch (_0x454f8d) {
            console[_0x451979(0x147)](_0x451979(0x132), _0x454f8d), _0x4e0c25[_0x451979(0x178)](_0x451979(0x172)), await _0x4e0c25[_0x451979(0x131)]('❌');
        }
    } else {
        if (_0x538c58) {
            const _0x167040 = _0x538c58[_0x451979(0x168)](_0x451979(0x174)), _0xd8b861 = parseInt(_0x538c58[_0x451979(0x16c)](_0x167040 ? _0x451979(0x174) : _0x451979(0x14b), '')), _0x3c1891 = videoMap[_0x451979(0x163)](_0xd8b861);
            if (_0x3c1891)
                try {
                    const _0xcc8e74 = _0x167040 ? _0x1b1b58 + _0x451979(0x16b) + _0x3c1891['videoId'] + _0x451979(0x12c) + _0x1946fc : _0x1b1b58 + _0x451979(0x170) + _0x3c1891[_0x451979(0x15a)] + _0x451979(0x12c) + _0x1946fc, _0x3b8ab7 = await _0x43f36e[_0x451979(0x163)](_0xcc8e74), _0x50c1c7 = _0x3b8ab7[_0x451979(0x13d)];
                    if (_0x50c1c7 && _0x50c1c7[_0x451979(0x15d)] && _0x50c1c7[_0x451979(0x15d)][_0x451979(0x13c)]) {
                        const _0x1fd8dd = _0x50c1c7[_0x451979(0x15d)]['download_url'], _0x11cce8 = _0x50c1c7[_0x451979(0x15d)][_0x451979(0x151)], _0x4288ea = '' + _0x11cce8 + (_0x167040 ? '.mp3' : _0x451979(0x16e));
                        await _0x2ce3a0[_0x451979(0x146)](_0x4e0c25['from'], _0x167040 ? {
                            'audio': { 'url': _0x1fd8dd },
                            'mimetype': _0x451979(0x144),
                            'ptt': ![],
                            'fileName': _0x4288ea,
                            'contextInfo': {
                                'mentionedJid': [_0x4e0c25[_0x451979(0x137)]],
                                'externalAdReply': {
                                    'title': _0x451979(0x142),
                                    'body': _0x451979(0x159),
                                    'thumbnailUrl': _0x3c1891[_0x451979(0x140)],
                                    'sourceUrl': 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
                                    'mediaType': 0x1,
                                    'renderLargerThumbnail': ![]
                                }
                            }
                        } : {
                            'video': { 'url': _0x1fd8dd },
                            'mimetype': 'video/mp4',
                            'caption': _0x451979(0x17c) + _0x11cce8 + _0x451979(0x161) + _0x3c1891[_0x451979(0x12b)][_0x451979(0x173)] + _0x451979(0x177) + _0x3c1891[_0x451979(0x141)]['seconds'] + 's\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*'
                        }, { 'quoted': _0x4e0c25 });
                    } else
                        throw new Error(_0x451979(0x14f));
                } catch (_0x3399b3) {
                    console[_0x451979(0x147)](_0x451979(0x17a), _0x3399b3), _0x4e0c25[_0x451979(0x178)](_0x451979(0x172)), await _0x4e0c25[_0x451979(0x131)]('❌');
                }
        }
    }
};
export default song;
function _0x34e3() {
    const _0x106d88 = [
        'get',
        '8tpbKUj',
        'selectedId',
        'cta_url',
        'nativeFlowResponseMessage',
        'startsWith',
        'relayMessage',
        '1481974VlXXhf',
        '/api/download/ytmp3?url=https://www.youtube.com/watch?v=',
        'replace',
        '1153263RobiPw',
        '.mp4',
        'Message',
        '/api/download/ytmp4?url=https://www.youtube.com/watch?v=',
        'interactiveResponseMessage',
        'Error\x20processing\x20your\x20request.',
        'name',
        '🎵audio_',
        'body',
        '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        '\x0a*Duration:*\x20',
        'reply',
        'NativeFlowMessage',
        'Error\x20fetching\x20video\x20details:',
        '4OMfods',
        '*Tittle:*\x20',
        'single_select',
        'parse',
        '7736238FFcAEE',
        'author',
        '&apikey=',
        '_\x0a*Link:*\x20_',
        '49LVNfvh',
        '_\x0a*Artist:*\x20_',
        'message',
        'React',
        'Error\x20processing\x20your\x20request:',
        'from',
        'InteractiveMessage',
        'key',
        '1076520lAZhYb',
        'sender',
        'seconds',
        'split',
        '143CLbmtu',
        '😎\x20Top\x2050\x20YouTube\x20Results\x20-\x20Videos',
        'download_url',
        'data',
        '255244EaeHSb',
        'https://www.youtube.com/watch?v=',
        'thumbnail',
        'duration',
        '𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑',
        '44800PiaKRS',
        'audio/mpeg',
        'includes',
        'sendMessage',
        'error',
        'https://gifted-apis-third-30b2fdbb9819.herokuapp.com',
        '7561060cmQbkE',
        '🎥\x20sᴇʟᴇᴄᴛ\x20ᴀ\x20ᴠɪᴅᴇᴏ',
        '🎦video_',
        'Footer',
        'length',
        '_\x0a*Duration:*\x20_',
        'Invalid\x20response\x20from\x20the\x20API.',
        'trim',
        'title',
        'remoteJid',
        'set',
        'templateButtonReplyMessage',
        '🤩\x20Top\x2050',
        'match',
        'videos',
        'map',
        'Powered\x20by\x20Gifted\x20Tech',
        'videoId',
        'Header',
        'create',
        'result',
        'stringify',
        '🎶\x20Top\x2050\x20YouTube\x20Results\x20-\x20Audios',
        'paramsJson',
        '\x0a*Artist:*\x20',
        'slice'
    ];
    _0x34e3 = function () {
        return _0x106d88;
    };
    return _0x34e3();
}
