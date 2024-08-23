(function (_0x22cd08, _0x5e0875) {
    const _0x27dc92 = _0xde57, _0x40baf9 = _0x22cd08();
    while (!![]) {
        try {
            const _0x1554d4 = -parseInt(_0x27dc92(0x142)) / 0x1 * (-parseInt(_0x27dc92(0x156)) / 0x2) + parseInt(_0x27dc92(0x14c)) / 0x3 * (parseInt(_0x27dc92(0x131)) / 0x4) + parseInt(_0x27dc92(0x153)) / 0x5 + -parseInt(_0x27dc92(0x159)) / 0x6 * (-parseInt(_0x27dc92(0x14d)) / 0x7) + parseInt(_0x27dc92(0x146)) / 0x8 * (parseInt(_0x27dc92(0x12f)) / 0x9) + parseInt(_0x27dc92(0x12a)) / 0xa * (-parseInt(_0x27dc92(0x140)) / 0xb) + -parseInt(_0x27dc92(0x129)) / 0xc * (parseInt(_0x27dc92(0x158)) / 0xd);
            if (_0x1554d4 === _0x5e0875)
                break;
            else
                _0x40baf9['push'](_0x40baf9['shift']());
        } catch (_0x2ee340) {
            _0x40baf9['push'](_0x40baf9['shift']());
        }
    }
}(_0x4efe, 0xca956));
function _0x4efe() {
    const _0x40e6a0 = [
        'Send/Reply\x20with\x20an\x20image,\x20video,\x20or\x20audio\x20to\x20upload\x20',
        '*「▰▰▰▰▰▰▰▱▱▱」*',
        '35354hNcJsO',
        'File\x20size\x20exceeds\x20the\x20limit\x20of\x20',
        '1398731XlAxfK',
        'imageMessage',
        '*「▰▰▰▰▱▱▱▱▱▱」*',
        'split',
        '16bFDwbU',
        'slice',
        'video',
        'download',
        'videoMessage',
        '\x20Here\x20Is\x20Your\x20Media*\x0a*url:*\x20',
        '6cQiTLI',
        '1687BftIit',
        'audioMessage',
        'error',
        'MB.',
        'audio',
        '*「▰▰▰▱▱▱▱▱▱▱」*',
        '4263265avRtjt',
        'Unknown\x20media\x20type.',
        'image',
        '2QnBlrE',
        'toLowerCase',
        '91bmgOgv',
        '22254MbwhlK',
        'reply',
        'url',
        '✅\x20Loading\x20complete.',
        '4373892MhNJlZ',
        '3170xVmnpF',
        'mtype',
        '*Hey\x20',
        'tourl',
        'body',
        '4462011LpRUSf',
        'quoted',
        '526492rvyKRC',
        '*「▰▰▰▰▰▰▰▰▰▱」*',
        'Error\x20processing\x20media.',
        'sendMessage',
        'mp4',
        'length',
        '*「▰▰▰▰▰▰▱▱▱▱」*',
        'from',
        '*「▰▰▰▰▰▰▰▰▰▰」*',
        'includes',
        'startsWith',
        '*「▰▰▰▰▰▱▱▱▱▱」*',
        '*「▰▰▰▰▰▰▰▰▱▱」*'
    ];
    _0x4efe = function () {
        return _0x40e6a0;
    };
    return _0x4efe();
}
function _0xde57(_0x5d46a4, _0x4b64c5) {
    const _0x4efe05 = _0x4efe();
    return _0xde57 = function (_0xde5717, _0x321bb6) {
        _0xde5717 = _0xde5717 - 0x126;
        let _0x3b0a13 = _0x4efe05[_0xde5717];
        return _0x3b0a13;
    }, _0xde57(_0x5d46a4, _0x4b64c5);
}
import {
    UploadFileUgu,
    TelegraPh
} from '../giftedte.js';
import {
    writeFile,
    unlink
} from 'fs/promises';
const MAX_FILE_SIZE_MB = 0x14, tourl = async (_0x1155e3, _0x58708c) => {
        const _0x1078ad = _0xde57, _0x1e8478 = _0x1155e3[_0x1078ad(0x12e)]['match'](/^[\\/!#.]/), _0x36843b = _0x1e8478 ? _0x1e8478[0x0] : '/', _0x11e01f = _0x1155e3[_0x1078ad(0x12e)][_0x1078ad(0x13b)](_0x36843b) ? _0x1155e3[_0x1078ad(0x12e)][_0x1078ad(0x147)](_0x36843b['length'])[_0x1078ad(0x145)]('\x20')[0x0][_0x1078ad(0x157)]() : '', _0x1d0e2a = [
                _0x1078ad(0x12d),
                'geturl',
                _0x1078ad(0x127)
            ];
        if (_0x1d0e2a[_0x1078ad(0x13a)](_0x11e01f)) {
            if (!_0x1155e3[_0x1078ad(0x130)] || ![
                    'imageMessage',
                    _0x1078ad(0x14a),
                    'audioMessage'
                ][_0x1078ad(0x13a)](_0x1155e3[_0x1078ad(0x130)]['mtype']))
                return _0x1155e3[_0x1078ad(0x126)](_0x1078ad(0x13e) + (_0x36843b + _0x11e01f));
            try {
                const _0x243d25 = [
                        _0x1078ad(0x152),
                        _0x1078ad(0x144),
                        _0x1078ad(0x13c),
                        _0x1078ad(0x137),
                        _0x1078ad(0x13f),
                        _0x1078ad(0x13d),
                        _0x1078ad(0x132),
                        _0x1078ad(0x139)
                    ], _0x887716 = _0x243d25[_0x1078ad(0x136)];
                let _0x110dec = 0x0;
                const {key: _0x22ac26} = await _0x58708c[_0x1078ad(0x134)](_0x1155e3['from'], { 'text': _0x243d25[_0x110dec] }, { 'quoted': _0x1155e3 }), _0x20fd4a = setInterval(() => {
                        const _0x2f90fb = _0x1078ad;
                        _0x110dec = (_0x110dec + 0x1) % _0x887716, _0x58708c[_0x2f90fb(0x134)](_0x1155e3[_0x2f90fb(0x138)], { 'text': _0x243d25[_0x110dec] }, {
                            'quoted': _0x1155e3,
                            'messageId': _0x22ac26
                        });
                    }, 0x1f4), _0x33dc54 = await _0x1155e3[_0x1078ad(0x130)][_0x1078ad(0x149)]();
                if (!_0x33dc54)
                    throw new Error('Failed\x20to\x20download\x20media.');
                const _0x1de6d3 = _0x33dc54[_0x1078ad(0x136)] / (0x400 * 0x400);
                if (_0x1de6d3 > MAX_FILE_SIZE_MB)
                    return clearInterval(_0x20fd4a), _0x1155e3[_0x1078ad(0x126)](_0x1078ad(0x141) + MAX_FILE_SIZE_MB + _0x1078ad(0x150));
                const _0x3b028b = getFileExtension(_0x1155e3[_0x1078ad(0x130)][_0x1078ad(0x12b)]);
                if (!_0x3b028b)
                    throw new Error(_0x1078ad(0x154));
                const _0x4e996f = './' + Date['now']() + '.' + _0x3b028b;
                await writeFile(_0x4e996f, _0x33dc54);
                let _0x2ddbfc;
                _0x1155e3[_0x1078ad(0x130)]['mtype'] === _0x1078ad(0x143) ? _0x2ddbfc = await TelegraPh(_0x4e996f) : _0x2ddbfc = await UploadFileUgu(_0x4e996f);
                clearInterval(_0x20fd4a), await _0x58708c[_0x1078ad(0x134)](_0x1155e3[_0x1078ad(0x138)], { 'text': _0x1078ad(0x128) }, { 'quoted': _0x1155e3 });
                const _0x5cb55e = getMediaType(_0x1155e3[_0x1078ad(0x130)][_0x1078ad(0x12b)]), _0x1b22c5 = _0x2ddbfc[_0x1078ad(0x127)] || _0x2ddbfc, _0x2381b4 = {
                        [_0x5cb55e]: { 'url': _0x1b22c5 },
                        'caption': _0x1078ad(0x12c) + _0x1155e3['pushName'] + _0x1078ad(0x14b) + _0x1b22c5
                    };
                await _0x58708c['sendMessage'](_0x1155e3[_0x1078ad(0x138)], _0x2381b4, { 'quoted': _0x1155e3 }), await unlink(_0x4e996f);
            } catch (_0xfee71c) {
                console[_0x1078ad(0x14f)]('Error\x20processing\x20media:', _0xfee71c), _0x1155e3['reply'](_0x1078ad(0x133));
            }
        }
    }, getFileExtension = _0x555403 => {
        const _0x392ccd = _0xde57;
        switch (_0x555403) {
        case _0x392ccd(0x143):
            return 'jpg';
        case _0x392ccd(0x14a):
            return _0x392ccd(0x135);
        case _0x392ccd(0x14e):
            return 'mp3';
        default:
            return null;
        }
    }, getMediaType = _0x12bd2c => {
        const _0x579010 = _0xde57;
        switch (_0x12bd2c) {
        case _0x579010(0x143):
            return _0x579010(0x155);
        case _0x579010(0x14a):
            return _0x579010(0x148);
        case _0x579010(0x14e):
            return _0x579010(0x151);
        default:
            return null;
        }
    };
export default tourl;
