(function (_0x408487, _0x3b5e95) {
    const _0x43e388 = _0x5032, _0x187d86 = _0x408487();
    while (!![]) {
        try {
            const _0x1e065d = parseInt(_0x43e388(0x1d7)) / 0x1 + parseInt(_0x43e388(0x1c4)) / 0x2 * (-parseInt(_0x43e388(0x1ee)) / 0x3) + parseInt(_0x43e388(0x1c1)) / 0x4 * (parseInt(_0x43e388(0x1de)) / 0x5) + -parseInt(_0x43e388(0x1d5)) / 0x6 * (parseInt(_0x43e388(0x1c5)) / 0x7) + parseInt(_0x43e388(0x1ea)) / 0x8 * (-parseInt(_0x43e388(0x1c2)) / 0x9) + -parseInt(_0x43e388(0x1dd)) / 0xa * (-parseInt(_0x43e388(0x1d6)) / 0xb) + -parseInt(_0x43e388(0x1dc)) / 0xc * (-parseInt(_0x43e388(0x1f0)) / 0xd);
            if (_0x1e065d === _0x3b5e95)
                break;
            else
                _0x187d86['push'](_0x187d86['shift']());
        } catch (_0x4a9c78) {
            _0x187d86['push'](_0x187d86['shift']());
        }
    }
}(_0x946b, 0x21050));
import _0x2b06cd from 'node-fetch';
function _0x946b() {
    const _0x4fb7ec = [
        '80BSwnQx',
        'application/octet-stream',
        '.jpeg',
        'No\x20download\x20link\x20found.',
        'slice',
        'https://api.prabath-md.tech/api/mediafiredl?url=',
        '*File:*\x20',
        '.apk',
        'log',
        'error',
        'Hello\x20*_',
        'caption',
        '148496nnGSsX',
        '.png',
        'status',
        'length',
        '9837IDpvlT',
        'document',
        '2660593PJVSpo',
        'pushName',
        'includes',
        'body',
        'mediafiredl',
        'Error:\x20link_1\x20is\x20not\x20available\x20in\x20the\x20response.',
        'sendMessage',
        '.webp',
        'filename',
        'split',
        '46940tGtDvC',
        '36bPMbZB',
        'toLowerCase',
        '142hmVWEv',
        '259GQLRXc',
        'API\x20Response:',
        'mfire',
        '.jpg',
        'mimetype',
        'Error:\x20API\x20did\x20not\x20return\x20success.',
        'extname',
        'mediafire',
        'data',
        'No\x20results\x20found\x20or\x20an\x20error\x20occurred.',
        'mfiredl',
        '.mkv',
        '.zip',
        '.webm',
        'application/zip',
        'reply',
        '38154corPSd',
        '1248170KFjifa',
        '171697SKVEMs',
        'React',
        'success\x20✅',
        'An\x20error\x20occurred:',
        '.mp4',
        '12zYGvrT',
        '10GJptFZ'
    ];
    _0x946b = function () {
        return _0x4fb7ec;
    };
    return _0x946b();
}
function _0x5032(_0xbed31, _0x5479ae) {
    const _0x946b4a = _0x946b();
    return _0x5032 = function (_0x5032e3, _0x5c25b3) {
        _0x5032e3 = _0x5032e3 - 0x1c0;
        let _0x174fb2 = _0x946b4a[_0x5032e3];
        return _0x174fb2;
    }, _0x5032(_0xbed31, _0x5479ae);
}
import _0x1213a2 from 'path';
const MediaFireCommand = async (_0x25784a, _0x53380d) => {
    const _0x25f56d = _0x5032, _0x18f75b = _0x25784a['body']['match'](/^[\\/!#.]/), _0x1c4e24 = _0x18f75b ? _0x18f75b[0x0] : '/', _0x5da268 = _0x25784a[_0x25f56d(0x1f3)]['startsWith'](_0x1c4e24) ? _0x25784a[_0x25f56d(0x1f3)][_0x25f56d(0x1e2)](_0x1c4e24[_0x25f56d(0x1ed)])[_0x25f56d(0x1c0)]('\x20')[0x0][_0x25f56d(0x1c3)]() : '', _0x19af86 = _0x25784a['body']['slice'](_0x1c4e24['length'] + _0x5da268[_0x25f56d(0x1ed)])['trim'](), _0xe3fe26 = [
            _0x25f56d(0x1cc),
            _0x25f56d(0x1c7),
            _0x25f56d(0x1cf),
            _0x25f56d(0x1f4),
            'mf'
        ];
    if (_0xe3fe26[_0x25f56d(0x1f2)](_0x5da268)) {
        if (!_0x19af86)
            return _0x25784a['reply'](_0x25f56d(0x1e8) + _0x25784a[_0x25f56d(0x1f1)] + '_,*\x0aPlease\x20provide\x20a\x20MediaFire\x20URL\x20after\x20the\x20command,\x20e.g.,\x20*.mediafire\x20https://www.mediafire.com/file/example*');
        try {
            await _0x25784a[_0x25f56d(0x1d8)]('🕘'), await _0x25784a[_0x25f56d(0x1d4)]('A\x20moment,\x20*Gifted-Md*\x20is\x20fetching\x20the\x20MediaFire\x20file...');
            const _0x94e5cb = _0x25f56d(0x1e3) + encodeURIComponent(_0x19af86), _0x3fb012 = await _0x2b06cd(_0x94e5cb), _0x5a1a13 = await _0x3fb012['json']();
            console[_0x25f56d(0x1e6)](_0x25f56d(0x1c6), _0x5a1a13);
            if (!_0x3fb012['ok'] || _0x5a1a13[_0x25f56d(0x1ec)] !== _0x25f56d(0x1d9)) {
                console[_0x25f56d(0x1e7)](_0x25f56d(0x1ca));
                throw new Error(_0x25f56d(0x1ce));
            }
            const {
                link_1: _0x784db1,
                name: _0x37abdb
            } = _0x5a1a13[_0x25f56d(0x1cd)];
            if (!_0x784db1) {
                console[_0x25f56d(0x1e7)](_0x25f56d(0x1f5));
                throw new Error(_0x25f56d(0x1e1));
            }
            const _0x10a7f4 = _0x1213a2[_0x25f56d(0x1cb)](_0x37abdb)[_0x25f56d(0x1c3)]();
            let _0x269eeb = {
                'caption': _0x25f56d(0x1e4) + _0x37abdb + '\x0a*Direct\x20Downloaded\x20Link:*\x20' + _0x784db1 + '\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
                'document': {
                    'url': _0x784db1,
                    'filename': _0x37abdb
                },
                'mimetype': _0x25f56d(0x1df)
            };
            if ([
                    _0x25f56d(0x1c8),
                    _0x25f56d(0x1e0),
                    _0x25f56d(0x1eb),
                    _0x25f56d(0x1f7)
                ][_0x25f56d(0x1f2)](_0x10a7f4))
                _0x269eeb = {
                    'image': { 'url': _0x784db1 },
                    'caption': _0x269eeb['caption']
                };
            else {
                if ([
                        _0x25f56d(0x1db),
                        _0x25f56d(0x1d0),
                        _0x25f56d(0x1d2)
                    ][_0x25f56d(0x1f2)](_0x10a7f4))
                    _0x269eeb = {
                        'video': { 'url': _0x784db1 },
                        'caption': _0x269eeb[_0x25f56d(0x1e9)]
                    };
                else {
                    if ([
                            '.mp3',
                            '.wav'
                        ][_0x25f56d(0x1f2)](_0x10a7f4))
                        _0x269eeb = {
                            'audio': { 'url': _0x784db1 },
                            'caption': _0x269eeb['caption']
                        };
                    else {
                        if (_0x10a7f4 === _0x25f56d(0x1e5))
                            _0x269eeb[_0x25f56d(0x1c9)] = 'application/vnd.android.package-archive', _0x269eeb[_0x25f56d(0x1ef)][_0x25f56d(0x1f8)] = _0x37abdb;
                        else
                            _0x10a7f4 === _0x25f56d(0x1d1) ? (_0x269eeb[_0x25f56d(0x1c9)] = _0x25f56d(0x1d3), _0x269eeb[_0x25f56d(0x1ef)]['filename'] = _0x37abdb) : _0x269eeb[_0x25f56d(0x1ef)][_0x25f56d(0x1f8)] = _0x37abdb;
                    }
                }
            }
            await _0x53380d[_0x25f56d(0x1f6)](_0x25784a['from'], _0x269eeb, { 'quoted': _0x25784a });
        } catch (_0x376810) {
            console[_0x25f56d(0x1e7)](_0x25f56d(0x1da), _0x376810), await _0x25784a['reply']('Sorry,\x20an\x20error\x20occurred\x20while\x20fetching\x20the\x20file.\x20Please\x20try\x20again\x20later.');
        }
    }
};
export default MediaFireCommand;
