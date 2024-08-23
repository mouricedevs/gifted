const _0x11c768 = _0x2674;
(function (_0x21d19c, _0x3cfbad) {
    const _0x2eca46 = _0x2674, _0x110789 = _0x21d19c();
    while (!![]) {
        try {
            const _0x2ac3eb = parseInt(_0x2eca46(0xdb)) / 0x1 + parseInt(_0x2eca46(0xdd)) / 0x2 + -parseInt(_0x2eca46(0xea)) / 0x3 + -parseInt(_0x2eca46(0xef)) / 0x4 + -parseInt(_0x2eca46(0xe1)) / 0x5 + parseInt(_0x2eca46(0xeb)) / 0x6 * (-parseInt(_0x2eca46(0xd8)) / 0x7) + -parseInt(_0x2eca46(0xf1)) / 0x8 * (-parseInt(_0x2eca46(0xd5)) / 0x9);
            if (_0x2ac3eb === _0x3cfbad)
                break;
            else
                _0x110789['push'](_0x110789['shift']());
        } catch (_0x1bb200) {
            _0x110789['push'](_0x110789['shift']());
        }
    }
}(_0x1038, 0x2041b));
function _0x1038() {
    const _0xafba3a = [
        'Please\x20provide\x20a\x20Terabox\x20URL.',
        'reply',
        'split',
        '9GDhwHv',
        'Invalid\x20response\x20from\x20the\x20downloader.',
        'slice',
        '889mSTVdU',
        'https://teraboxvideodownloader.nepcoderdevs.workers.dev/?url=',
        'trim',
        '27497pTWHVz',
        'Fast\x20Download\x20URL\x20not\x20found.',
        '493570hwZYJC',
        'sendMessage',
        'resolutions',
        'Error\x20downloading\x20Terabox\x20media.',
        '594180KczXCN',
        'terabox',
        'Download\x20Success...',
        'includes',
        'React',
        'tbdl',
        'body',
        'teraboxdl',
        'response',
        '123900puoiyq',
        '2922VoOHBB',
        'length',
        'Fast\x20Download',
        'get',
        '709520cYdMqr',
        'startsWith',
        '2057648hREmkA',
        'from'
    ];
    _0x1038 = function () {
        return _0xafba3a;
    };
    return _0x1038();
}
function _0x2674(_0x3852c3, _0x55daf1) {
    const _0x10380e = _0x1038();
    return _0x2674 = function (_0x267453, _0x24d86d) {
        _0x267453 = _0x267453 - 0xd4;
        let _0x1497ea = _0x10380e[_0x267453];
        return _0x1497ea;
    }, _0x2674(_0x3852c3, _0x55daf1);
}
import _0x3f5853 from 'axios';
const teraboxApiBaseUrl = _0x11c768(0xd9), teraboxDownload = async (_0x8fdcaf, _0x5e5ff0) => {
        const _0x567f65 = _0x11c768, _0x578613 = _0x8fdcaf[_0x567f65(0xe7)]['match'](/^[\\/!#.]/), _0x1a167a = _0x578613 ? _0x578613[0x0] : '/', _0x174073 = _0x8fdcaf[_0x567f65(0xe7)][_0x567f65(0xf0)](_0x1a167a) ? _0x8fdcaf[_0x567f65(0xe7)][_0x567f65(0xd7)](_0x1a167a[_0x567f65(0xec)])[_0x567f65(0xd4)]('\x20')[0x0]['toLowerCase']() : '', _0x1eb574 = _0x8fdcaf[_0x567f65(0xe7)]['slice'](_0x1a167a[_0x567f65(0xec)] + _0x174073[_0x567f65(0xec)])[_0x567f65(0xda)](), _0x571ccd = [
                _0x567f65(0xe2),
                'tb',
                _0x567f65(0xe6),
                _0x567f65(0xe8)
            ];
        if (_0x571ccd[_0x567f65(0xe4)](_0x174073)) {
            if (!_0x1eb574)
                return _0x8fdcaf['reply'](_0x567f65(0xf3));
            try {
                await _0x8fdcaf[_0x567f65(0xe5)]('🕘'), await _0x8fdcaf[_0x567f65(0xf4)]('A\x20Moment,*Gifted-Md*\x20is\x20Downloading,\x20Please\x20Wait...');
                const _0xc12965 = '' + teraboxApiBaseUrl + encodeURIComponent(_0x1eb574), _0x12cd2a = await _0x3f5853[_0x567f65(0xee)](_0xc12965), _0x3245e6 = _0x12cd2a['data'];
                if (_0x3245e6[_0x567f65(0xe9)] && _0x3245e6[_0x567f65(0xe9)][_0x567f65(0xec)] > 0x0) {
                    const _0x5cfeba = _0x3245e6['response'][0x0], _0x3ab249 = _0x5cfeba[_0x567f65(0xdf)][_0x567f65(0xed)], _0x40d40a = '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*';
                    if (_0x3ab249) {
                        const _0x147755 = {
                            'video': { 'url': _0x3ab249 },
                            'caption': _0x40d40a
                        };
                        await _0x5e5ff0[_0x567f65(0xde)](_0x8fdcaf[_0x567f65(0xf2)], _0x147755, { 'quoted': _0x8fdcaf }), await _0x8fdcaf[_0x567f65(0xe5)]('✅'), await _0x8fdcaf[_0x567f65(0xf4)](_0x567f65(0xe3));
                    } else
                        throw new Error(_0x567f65(0xdc));
                } else
                    throw new Error(_0x567f65(0xd6));
            } catch (_0x3295fb) {
                console['error']('Error\x20downloading\x20Terabox\x20media:', _0x3295fb['message']), _0x8fdcaf[_0x567f65(0xf4)](_0x567f65(0xe0)), await _0x8fdcaf[_0x567f65(0xe5)]('❌');
            }
        }
    };
export default teraboxDownload;
