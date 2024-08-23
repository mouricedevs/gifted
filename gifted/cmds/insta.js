const _0x31b456 = _0x3293;
function _0x3293(_0x22a4a5, _0x483a3b) {
    const _0x1874e0 = _0x1874();
    return _0x3293 = function (_0x329372, _0x576ca7) {
        _0x329372 = _0x329372 - 0x1d4;
        let _0x381402 = _0x1874e0[_0x329372];
        return _0x381402;
    }, _0x3293(_0x22a4a5, _0x483a3b);
}
(function (_0x3e2638, _0x2d25c4) {
    const _0x46a4d8 = _0x3293, _0x268ae8 = _0x3e2638();
    while (!![]) {
        try {
            const _0x5b8309 = -parseInt(_0x46a4d8(0x1e8)) / 0x1 + -parseInt(_0x46a4d8(0x1fb)) / 0x2 + parseInt(_0x46a4d8(0x1e5)) / 0x3 + parseInt(_0x46a4d8(0x1e4)) / 0x4 * (-parseInt(_0x46a4d8(0x1f1)) / 0x5) + parseInt(_0x46a4d8(0x1ee)) / 0x6 * (-parseInt(_0x46a4d8(0x1d9)) / 0x7) + parseInt(_0x46a4d8(0x1fa)) / 0x8 * (-parseInt(_0x46a4d8(0x1f0)) / 0x9) + parseInt(_0x46a4d8(0x1e0)) / 0xa;
            if (_0x5b8309 === _0x2d25c4)
                break;
            else
                _0x268ae8['push'](_0x268ae8['shift']());
        } catch (_0xd94d40) {
            _0x268ae8['push'](_0x268ae8['shift']());
        }
    }
}(_0x1874, 0xdf02d));
import _0x11b0fb from 'axios';
const apiBaseUrl = _0x31b456(0x1f2), instaDownload = async (_0x221915, _0x29830d) => {
        const _0x44d9a3 = _0x31b456, _0x53c392 = _0x221915[_0x44d9a3(0x1ed)][_0x44d9a3(0x1da)](/^[\\/!#.]/), _0x2b071f = _0x53c392 ? _0x53c392[0x0] : '/', _0x3afba4 = _0x221915[_0x44d9a3(0x1ed)][_0x44d9a3(0x1fc)](_0x2b071f) ? _0x221915[_0x44d9a3(0x1ed)][_0x44d9a3(0x1eb)](_0x2b071f['length'])[_0x44d9a3(0x1f3)]('\x20')[0x0][_0x44d9a3(0x1ea)]() : '', _0x21cb4a = _0x221915['body'][_0x44d9a3(0x1eb)](_0x2b071f[_0x44d9a3(0x1f8)] + _0x3afba4[_0x44d9a3(0x1f8)])[_0x44d9a3(0x1f4)](), _0x5c0e35 = [
                _0x44d9a3(0x1e1),
                'ig',
                _0x44d9a3(0x1ec),
                _0x44d9a3(0x1db),
                _0x44d9a3(0x1d7)
            ];
        if (_0x5c0e35[_0x44d9a3(0x1dc)](_0x3afba4)) {
            if (!_0x21cb4a)
                return _0x221915[_0x44d9a3(0x1d4)](_0x44d9a3(0x1ef));
            try {
                await _0x221915[_0x44d9a3(0x1f5)]('🕘'), await _0x221915['reply']('A\x20moment,\x20*Gifted-Md*\x20is\x20Downloading\x20Your\x20Media...');
                const _0x370a1e = '' + apiBaseUrl + encodeURIComponent(_0x21cb4a), _0x26d719 = await _0x11b0fb['get'](_0x370a1e), _0x480a93 = _0x26d719[_0x44d9a3(0x1d5)][_0x44d9a3(0x1df)];
                if (_0x26d719['data'][_0x44d9a3(0x1e9)] && _0x480a93 && _0x480a93[_0x44d9a3(0x1f8)] > 0x0) {
                    const _0xe65e2d = _0x480a93[0x0]['url'], _0x44c67a = await _0x11b0fb['get'](_0xe65e2d, { 'responseType': 'arraybuffer' }), _0x1b149e = Buffer[_0x44d9a3(0x1dd)](_0x44c67a[_0x44d9a3(0x1d5)], _0x44d9a3(0x1f7)), _0x95453c = _0x44d9a3(0x1f6);
                    await _0x29830d[_0x44d9a3(0x1e3)](_0x221915['from'], _0x1b149e, _0x44d9a3(0x1e6), _0x95453c, { 'quoted': _0x221915 }), await _0x221915['React']('✅'), await _0x221915[_0x44d9a3(0x1d4)](_0x44d9a3(0x1de));
                } else
                    throw new Error(_0x44d9a3(0x1d8));
            } catch (_0x1b4ca5) {
                console[_0x44d9a3(0x1e2)](_0x44d9a3(0x1e7), _0x1b4ca5[_0x44d9a3(0x1d6)]), _0x221915[_0x44d9a3(0x1d4)](_0x44d9a3(0x1f9)), await _0x221915['React']('❌');
            }
        }
    };
function _0x1874() {
    const _0x1ac181 = [
        '1417770lhiLbZ',
        'https://api.giftedtechnexus.co.ke/api/download/instadlv3?url=',
        'split',
        'trim',
        'React',
        '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃*',
        'binary',
        'length',
        'Error\x20downloading\x20media.',
        '8zIzdUt',
        '201576fYsrwC',
        'startsWith',
        'reply',
        'data',
        'message',
        'instagram',
        'Invalid\x20response\x20from\x20the\x20downloader.',
        '203IeeQtF',
        'match',
        'instadl',
        'includes',
        'from',
        'Success,\x20Media\x20Downloaded!',
        'result',
        '50748070YRvaNn',
        'insta',
        'error',
        'sendMedia',
        '12PvBRrl',
        '1196757BjDZba',
        'video/mp4',
        'Error\x20downloading\x20media:',
        '701882GVmLOw',
        'success',
        'toLowerCase',
        'slice',
        'igdl',
        'body',
        '251268kwLjbF',
        'Please\x20provide\x20a\x20URL.',
        '15232311fJICbl'
    ];
    _0x1874 = function () {
        return _0x1ac181;
    };
    return _0x1874();
}
export default instaDownload;
