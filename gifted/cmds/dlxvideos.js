(function (_0x78a2b7, _0x516832) {
    const _0x4e0a48 = _0x1bc1, _0xd0d4d4 = _0x78a2b7();
    while (!![]) {
        try {
            const _0xf44dbb = parseInt(_0x4e0a48(0xdd)) / 0x1 * (-parseInt(_0x4e0a48(0xbd)) / 0x2) + -parseInt(_0x4e0a48(0xb8)) / 0x3 + parseInt(_0x4e0a48(0xda)) / 0x4 * (-parseInt(_0x4e0a48(0xe3)) / 0x5) + -parseInt(_0x4e0a48(0xd0)) / 0x6 * (-parseInt(_0x4e0a48(0xbf)) / 0x7) + parseInt(_0x4e0a48(0xc2)) / 0x8 + -parseInt(_0x4e0a48(0xc7)) / 0x9 * (-parseInt(_0x4e0a48(0xd9)) / 0xa) + -parseInt(_0x4e0a48(0xde)) / 0xb;
            if (_0xf44dbb === _0x516832)
                break;
            else
                _0xd0d4d4['push'](_0xd0d4d4['shift']());
        } catch (_0x28f645) {
            _0xd0d4d4['push'](_0xd0d4d4['shift']());
        }
    }
}(_0x5c16, 0xebba1));
import _0x21af7f from '../../set.cjs';
import _0x271210 from 'node-fetch';
function _0x1bc1(_0x47bd4b, _0x31a5b8) {
    const _0x5c16da = _0x5c16();
    return _0x1bc1 = function (_0x1bc197, _0xb2f7fc) {
        _0x1bc197 = _0x1bc197 - 0xb7;
        let _0x58ae01 = _0x5c16da[_0x1bc197];
        return _0x58ae01;
    }, _0x1bc1(_0x47bd4b, _0x31a5b8);
}
const XvidsDl = async (_0x260570, _0x4451e6) => {
    const _0x5398f8 = _0x1bc1, _0x54f1d8 = await _0x4451e6[_0x5398f8(0xca)](_0x4451e6[_0x5398f8(0xce)]['id']), _0x39e565 = [
            _0x54f1d8,
            _0x21af7f[_0x5398f8(0xe4)] + _0x5398f8(0xc4)
        ][_0x5398f8(0xd7)](_0x260570[_0x5398f8(0xc6)]), _0x42ab30 = _0x260570[_0x5398f8(0xcd)]['match'](/^[\\/!#.]/), _0x4fdcb3 = _0x42ab30 ? _0x42ab30[0x0] : '/', _0x4f309b = _0x260570[_0x5398f8(0xcd)][_0x5398f8(0xc8)](_0x4fdcb3) ? _0x260570[_0x5398f8(0xcd)][_0x5398f8(0xcb)](_0x4fdcb3[_0x5398f8(0xd1)])[_0x5398f8(0xc9)]('\x20')[0x0][_0x5398f8(0xe7)]() : '', _0x5213e1 = _0x260570[_0x5398f8(0xcd)]['slice'](_0x4fdcb3[_0x5398f8(0xd1)] + _0x4f309b['length'])[_0x5398f8(0xd8)](), _0x56e504 = [
            _0x5398f8(0xb7),
            _0x5398f8(0xbe),
            _0x5398f8(0xe6),
            _0x5398f8(0xe5),
            _0x5398f8(0xb9),
            _0x5398f8(0xdc),
            _0x5398f8(0xd2),
            'xviddl'
        ];
    if (_0x56e504[_0x5398f8(0xd7)](_0x4f309b)) {
        if (!_0x39e565)
            return _0x260570[_0x5398f8(0xbb)](_0x5398f8(0xba));
        if (!_0x5213e1)
            return _0x260570['reply'](_0x5398f8(0xd5) + _0x260570[_0x5398f8(0xdb)] + _0x5398f8(0xd6));
        try {
            let _0x39d02e = '';
            const _0x258e2a = /(https?:\/\/[^\s]+)/;
            if (_0x258e2a[_0x5398f8(0xbc)](_0x5213e1))
                _0x39d02e = _0x5213e1;
            else {
                const _0x57dafa = await _0x271210(_0x5398f8(0xdf) + encodeURIComponent(_0x5213e1)), _0x529d79 = await _0x57dafa[_0x5398f8(0xe8)]();
                if (_0x529d79[_0x5398f8(0xd4)] === _0x5398f8(0xe2) && _0x529d79[_0x5398f8(0xc0)] && _0x529d79[_0x5398f8(0xc0)]['data'] && _0x529d79[_0x5398f8(0xc0)][_0x5398f8(0xc0)][_0x5398f8(0xd1)] > 0x0)
                    _0x39d02e = _0x529d79[_0x5398f8(0xc0)][_0x5398f8(0xc0)][0x0][_0x5398f8(0xe0)];
                else
                    return _0x260570['reply'](_0x5398f8(0xc5) + _0x5213e1);
            }
            const _0x50719d = await _0x271210(_0x5398f8(0xcf) + _0x39d02e), _0x5c3496 = await _0x50719d[_0x5398f8(0xe8)]();
            if (_0x5c3496 && _0x5c3496[_0x5398f8(0xc0)] && _0x5c3496[_0x5398f8(0xc0)][_0x5398f8(0xe1)]) {
                const _0x407524 = _0x5c3496['data'][_0x5398f8(0xe1)];
                await _0x260570[_0x5398f8(0xbb)](_0x5398f8(0xc1)), await _0x4451e6['sendMessage'](_0x260570[_0x5398f8(0xcc)], {
                    'video': { 'url': _0x407524 },
                    'caption': _0x5398f8(0xc3),
                    'gifPlayback': ![]
                }, { 'quoted': _0x260570 });
            } else
                await _0x4451e6['sendMessage'](_0x260570[_0x5398f8(0xcc)], { 'text': _0x5398f8(0xd3) }, { 'quoted': _0x260570 });
        } catch (_0x53a670) {
            console['error']('Error\x20fetching\x20video:', _0x53a670), await _0x4451e6['sendMessage'](_0x260570[_0x5398f8(0xcc)], { 'text': _0x5398f8(0xd3) }, { 'quoted': _0x260570 });
        }
    }
};
function _0x5c16() {
    const _0x31a71f = [
        '10480624RcPmkl',
        '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        '@s.whatsapp.net',
        'No\x20results\x20found\x20for\x20the\x20query:\x20',
        'sender',
        '18uMEzhJ',
        'startsWith',
        'split',
        'decodeJid',
        'slice',
        'from',
        'body',
        'user',
        'https://api.prabath-md.tech/api/xvdl?url=',
        '6mjhMmP',
        'length',
        'xvid',
        'Failed\x20to\x20retrieve\x20the\x20video.\x20Please\x20try\x20again\x20later.',
        'status',
        'Hello\x20_*',
        '*_\x20Please\x20insert\x20a\x20valid\x20X-Video\x20Link\x20or\x20Search\x20Query!\x0aEg.\x20.xvid\x20https://www.xvideos.com/video.uphdukv604c/novinha_gulosa_pediu_pra_colocar_tudo_dentro_da_bucetinha_e_recebeu_enorme_gozada\x20\x20or\x20\x0a.xvid\x20mom\x20and\x20son\x20hot',
        'includes',
        'trim',
        '5189610TtKHQY',
        '308JRTAXk',
        'pushName',
        'xvideosdl',
        '543pCKgkS',
        '3321120nBvKyF',
        'https://api.prabath-md.tech/api/xvideossearch?q=',
        'url',
        'download',
        'success\x20✅',
        '10180eYvgYy',
        'OWNER_NUMBER',
        'xvideodl',
        'xvideo',
        'toLowerCase',
        'json',
        'xvids',
        '4496802HlqazB',
        'xvideos',
        '*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*',
        'reply',
        'test',
        '4042EpFIRT',
        'xvidsdl',
        '11707962fyjkBn',
        'data',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Downloading\x20Your\x20+18\x20video,\x20Please\x20Wait...'
    ];
    _0x5c16 = function () {
        return _0x31a71f;
    };
    return _0x5c16();
}
export default XvidsDl;
