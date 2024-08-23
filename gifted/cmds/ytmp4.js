(function (_0x4c9da3, _0x1df93a) {
    const _0xa98865 = _0x5082, _0x764273 = _0x4c9da3();
    while (!![]) {
        try {
            const _0x540d58 = parseInt(_0xa98865(0x92)) / 0x1 + -parseInt(_0xa98865(0x99)) / 0x2 * (-parseInt(_0xa98865(0xc0)) / 0x3) + parseInt(_0xa98865(0xb6)) / 0x4 * (-parseInt(_0xa98865(0xae)) / 0x5) + -parseInt(_0xa98865(0xa9)) / 0x6 * (-parseInt(_0xa98865(0xb1)) / 0x7) + parseInt(_0xa98865(0x94)) / 0x8 * (parseInt(_0xa98865(0xa1)) / 0x9) + -parseInt(_0xa98865(0x90)) / 0xa + parseInt(_0xa98865(0xbd)) / 0xb * (-parseInt(_0xa98865(0xb3)) / 0xc);
            if (_0x540d58 === _0x1df93a)
                break;
            else
                _0x764273['push'](_0x764273['shift']());
        } catch (_0x1be95a) {
            _0x764273['push'](_0x764273['shift']());
        }
    }
}(_0x3994, 0xf2c91));
import _0x3ef3ce from 'node-fetch';
import _0x510c03 from 'yt-search';
function _0x5082(_0x2a1e0f, _0x17a027) {
    const _0x399495 = _0x3994();
    return _0x5082 = function (_0x5082f3, _0x55b472) {
        _0x5082f3 = _0x5082f3 - 0x85;
        let _0x52242a = _0x399495[_0x5082f3];
        return _0x52242a;
    }, _0x5082(_0x2a1e0f, _0x17a027);
}
const VideoDl = async (_0x2859a8, _0x4b7170) => {
    const _0x234e13 = _0x5082, _0x42640b = _0x2859a8['body'][_0x234e13(0x9f)](/^[\\/!#.]/), _0xfb6235 = _0x42640b ? _0x42640b[0x0] : '/', _0x3b3acd = _0x234e13(0xc2), _0x5aefaa = 'giftedtechk', _0x3f9729 = _0x2859a8[_0x234e13(0x9c)][_0x234e13(0x91)](_0xfb6235) ? _0x2859a8['body'][_0x234e13(0x8d)](_0xfb6235[_0x234e13(0xb8)])[_0x234e13(0xc3)]('\x20')[0x0][_0x234e13(0xaa)]() : '', _0x364ed1 = _0x2859a8[_0x234e13(0x9c)][_0x234e13(0x8d)](_0xfb6235[_0x234e13(0xb8)] + _0x3f9729['length'])[_0x234e13(0xab)](), _0x4166cb = [
            _0x234e13(0xaf),
            _0x234e13(0xb0)
        ];
    if (_0x4166cb[_0x234e13(0xbb)](_0x3f9729)) {
        if (!_0x364ed1) {
            await _0x2859a8['reply'](_0x234e13(0xa2) + _0x2859a8[_0x234e13(0x86)] + '*_\x20,\x0aPlease\x20provide\x20the\x20video\x20name\x20or\x20YouTube\x20URL,\x20\x0aEg\x20*.videodoc\x20Spectre\x20by\x20Alan\x20Walker*\x20or\x20\x0a.videodoc\x20https://youtube.com/watch?v=wdJrTQJh1ZQ');
            return;
        }
        try {
            await _0x2859a8[_0x234e13(0xa7)]('🕘'), await _0x2859a8[_0x234e13(0x8a)](_0x234e13(0x85));
            let _0x44ebf5 = _0x364ed1, _0x355c79 = [];
            const _0x57ec5e = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/, _0x22a501 = _0x57ec5e[_0x234e13(0x89)](_0x364ed1);
            if (!_0x22a501) {
                const _0x43996c = await _0x510c03(_0x364ed1);
                _0x355c79 = _0x43996c[_0x234e13(0x9a)];
                if (_0x355c79 && _0x355c79[_0x234e13(0xb8)] > 0x0 && _0x355c79[0x0])
                    _0x44ebf5 = _0x355c79[0x0][_0x234e13(0x93)];
                else {
                    await _0x2859a8['reply'](_0x234e13(0xba));
                    return;
                }
            }
            const _0x5db8fd = await _0x3ef3ce(_0x3b3acd + _0x234e13(0xb7) + encodeURIComponent(_0x44ebf5) + _0x234e13(0xbf) + _0x5aefaa), _0x5b8562 = await _0x5db8fd[_0x234e13(0x8c)]();
            if (_0x5b8562[_0x234e13(0x98)] === 0xc8 && _0x5b8562[_0x234e13(0x9e)]) {
                const _0x4d0967 = _0x5b8562[_0x234e13(0xb2)][_0x234e13(0x88)], _0x3a3204 = await _0x3ef3ce(_0x4d0967), _0xe4fd70 = await _0x3a3204[_0x234e13(0x8b)]();
                let _0x41e80b = {
                    'image': { 'url': _0x22a501 ? 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg' : _0x355c79[0x0][_0x234e13(0xa5)] },
                    'caption': _0x234e13(0x95) + _0x355c79[0x0][_0x234e13(0xa4)] + '\x0a' + (!_0x22a501 ? _0x234e13(0xc4) + _0x355c79[0x0]['timestamp'] : '') + '\x0a' + (!_0x22a501 ? _0x234e13(0x8f) + _0x355c79[0x0][_0x234e13(0x8e)] : '') + '\x0a' + (!_0x22a501 ? '│⿻\x20*Uploaded:*\x20' + _0x355c79[0x0]['ago'] : '') + '\x0a' + (!_0x22a501 ? '│⿻\x20*Artist:*\x20' + _0x355c79[0x0][_0x234e13(0xa0)][_0x234e13(0xa8)] : '') + _0x234e13(0x97) + _0x44ebf5 + _0x234e13(0x9b)
                };
                await _0x4b7170[_0x234e13(0xb9)](_0x2859a8[_0x234e13(0x96)], _0x41e80b, { 'quoted': _0x2859a8 }), await _0x4b7170['sendMessage'](_0x2859a8[_0x234e13(0x96)], {
                    'document': _0xe4fd70,
                    'mimetype': _0x234e13(0xc1),
                    'fileName': _0x355c79[0x0][_0x234e13(0xa4)] + _0x234e13(0xa6),
                    'caption': 'DOCUMENT\x20VIDEO\x20FORMAT\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
                    'contextInfo': {
                        'externalAdReply': {
                            'showAdAttribution': ![],
                            'title': _0x355c79[0x0][_0x234e13(0xa4)],
                            'body': _0x234e13(0x87),
                            'thumbnailUrl': _0x234e13(0xbc),
                            'sourceUrl': _0x234e13(0xbe),
                            'mediaType': 0x1,
                            'renderLargerThumbnail': ![]
                        }
                    }
                }, { 'quoted': _0x2859a8 }), await _0x2859a8[_0x234e13(0xa7)]('✅'), await _0x2859a8['reply'](_0x234e13(0xad) + _0x355c79[0x0]['title'] + _0x234e13(0xa3) + _0x364ed1 + '*\x20to\x20download\x20it\x20as\x20normal\x20video\x20format');
            } else
                await _0x2859a8[_0x234e13(0x8a)](_0x234e13(0xac));
        } catch (_0x5be27a) {
            console[_0x234e13(0x9d)](_0x234e13(0xb5), _0x5be27a), await _0x4b7170[_0x234e13(0xb9)](_0x2859a8[_0x234e13(0x96)], { 'text': _0x234e13(0xb4) });
        }
    }
};
function _0x3994() {
    const _0x1fba06 = [
        '51tuPOhD',
        'video/mp4',
        'https://gifted-apis-third-30b2fdbb9819.herokuapp.com',
        'split',
        '│⿻\x20*Duration:*\x20',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Processing\x20from\x20GiftedAPi...',
        'pushName',
        'Powered\x20By\x20Gifted\x20Tech',
        'download_url',
        'test',
        'reply',
        'buffer',
        'json',
        'slice',
        'views',
        '│⿻\x20*Viewers:*\x20',
        '4825130NrDkbZ',
        'startsWith',
        '506545mhogWt',
        'url',
        '88BqEppc',
        '*𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝐈𝐃𝐄𝐎\x20𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20',
        'from',
        '\x0a╰────────────────◆\x0a⦿\x20*Direct\x20Yt\x20Link:*\x20',
        'status',
        '108482xyBZeU',
        'videos',
        '\x0a\x0a╭────────────────◆\x0a│\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*\x0a╰─────────────────◆',
        'body',
        'error',
        'success',
        'match',
        'author',
        '1286073wkRUzn',
        'Hello\x20_*',
        '*\x0aUse\x20*.video\x20',
        'title',
        'thumbnail',
        '.mp4',
        'React',
        'name',
        '2316312PumDib',
        'toLowerCase',
        'trim',
        'Failed\x20to\x20download\x20video.\x20Please\x20try\x20again\x20later.',
        'Download\x20Success...\x0aSent\x20Document\x20Video\x20Type\x20For:\x20*',
        '75FiSouG',
        'videodoc',
        'ytmp4doc',
        '28bZhZCk',
        'result',
        '264kXBBTi',
        'Failed\x20with\x20error\x20from\x20Gifted\x20API.\x20Please\x20try\x20again\x20later.',
        'Error\x20from\x20Gifted\x20API:',
        '317260yRHMuC',
        '/api/download/ytmp4?url=',
        'length',
        'sendMessage',
        'No\x20videos\x20found.',
        'includes',
        'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
        '939015mfIDKN',
        'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
        '&apikey='
    ];
    _0x3994 = function () {
        return _0x1fba06;
    };
    return _0x3994();
}
export default VideoDl;
