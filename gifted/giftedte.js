(function (_0x5eccee, _0x2fb3f9) {
    const _0x46f166 = _0x4cfa, _0x55c13b = _0x5eccee();
    while (!![]) {
        try {
            const _0x53f7da = parseInt(_0x46f166(0x111)) / 0x1 * (parseInt(_0x46f166(0x129)) / 0x2) + parseInt(_0x46f166(0x11a)) / 0x3 * (-parseInt(_0x46f166(0x108)) / 0x4) + parseInt(_0x46f166(0x116)) / 0x5 + parseInt(_0x46f166(0x10b)) / 0x6 + parseInt(_0x46f166(0x11c)) / 0x7 + -parseInt(_0x46f166(0x117)) / 0x8 * (-parseInt(_0x46f166(0x118)) / 0x9) + -parseInt(_0x46f166(0x10a)) / 0xa;
            if (_0x53f7da === _0x2fb3f9)
                break;
            else
                _0x55c13b['push'](_0x55c13b['shift']());
        } catch (_0x3158cd) {
            _0x55c13b['push'](_0x55c13b['shift']());
        }
    }
}(_0x3a75, 0x82078));
function _0x4cfa(_0x1fb1fe, _0x558e14) {
    const _0x3a7507 = _0x3a75();
    return _0x4cfa = function (_0x4cfa4e, _0x41b7a9) {
        _0x4cfa4e = _0x4cfa4e - 0x108;
        let _0x1e1eab = _0x3a7507[_0x4cfa4e];
        return _0x1e1eab;
    }, _0x4cfa(_0x1fb1fe, _0x558e14);
}
function _0x3a75() {
    const _0x125f26 = [
        'append',
        '1YEFXSO',
        'https://flonime.my.id/upload',
        'data',
        'https://telegra.ph',
        'src',
        '3253480YHxVig',
        '1698472WokcNS',
        '27zcMyAj',
        'div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source',
        '3pzUAxB',
        'https://uguu.se/upload.php',
        '4417266iRFASY',
        'createReadStream',
        'val',
        'https:',
        'input[name=\x22file\x22]',
        'https://s6.ezgif.com/webp-to-mp4',
        'Unknown\x20file\x20type',
        'file',
        'files',
        'files[]',
        'new-image',
        'attr',
        'getType',
        '1874354LcsOdm',
        'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.212\x20Safari/537.36',
        'POST',
        'load',
        'json',
        '368464AlPcfK',
        'File\x20not\x20Found',
        '25748270SJBHlq',
        '2062230MDExbB',
        'post',
        'https://telegra.ph/upload',
        'getHeaders',
        'new-image-url'
    ];
    _0x3a75 = function () {
        return _0x125f26;
    };
    return _0x3a75();
}
import _0x54a104 from 'axios';
import _0x19930a from 'form-data';
import _0x5c9877 from 'node-fetch';
import _0x445f50 from 'fs';
import _0x79c4af from 'cheerio';
import _0x464fdf from 'mime';
export const TelegraPh = async _0x58ed7e => {
    return new Promise(async (_0x15134b, _0xbea8cd) => {
        const _0x23d15d = _0x4cfa;
        if (!_0x445f50['existsSync'](_0x58ed7e))
            return _0xbea8cd(new Error(_0x23d15d(0x109)));
        try {
            const _0x114182 = new _0x19930a();
            _0x114182[_0x23d15d(0x110)]('file', _0x445f50['createReadStream'](_0x58ed7e));
            const _0x290c61 = await _0x54a104({
                    'url': _0x23d15d(0x10d),
                    'method': _0x23d15d(0x12b),
                    'headers': { ..._0x114182[_0x23d15d(0x10e)]() },
                    'data': _0x114182
                }), _0x4363fd = _0x290c61[_0x23d15d(0x113)];
            _0x15134b(_0x23d15d(0x114) + _0x4363fd[0x0][_0x23d15d(0x115)]);
        } catch (_0x5691e1) {
            _0xbea8cd(new Error(String(_0x5691e1)));
        }
    });
};
export const UploadFileUgu = async _0x280994 => {
    return new Promise(async (_0x51f8d7, _0x5db886) => {
        const _0x275a32 = _0x4cfa;
        try {
            const _0x27eca0 = new _0x19930a();
            _0x27eca0[_0x275a32(0x110)](_0x275a32(0x125), _0x445f50[_0x275a32(0x11d)](_0x280994));
            const _0x1ef894 = await _0x54a104({
                'url': _0x275a32(0x11b),
                'method': _0x275a32(0x12b),
                'headers': {
                    'User-Agent': _0x275a32(0x12a),
                    ..._0x27eca0[_0x275a32(0x10e)]()
                },
                'data': _0x27eca0
            });
            _0x51f8d7(_0x1ef894[_0x275a32(0x113)][_0x275a32(0x124)][0x0]);
        } catch (_0x4fe3bf) {
            _0x5db886(_0x4fe3bf);
        }
    });
};
export const webp2mp4File = async _0x46495b => {
    return new Promise(async (_0x23bcda, _0xb9104) => {
        const _0x4feacb = _0x4cfa;
        try {
            const _0x2ef7ca = new _0x19930a();
            _0x2ef7ca[_0x4feacb(0x110)](_0x4feacb(0x10f), ''), _0x2ef7ca[_0x4feacb(0x110)](_0x4feacb(0x126), _0x445f50[_0x4feacb(0x11d)](_0x46495b));
            const _0x13b947 = await _0x54a104({
                    'method': _0x4feacb(0x10c),
                    'url': _0x4feacb(0x121),
                    'data': _0x2ef7ca,
                    'headers': _0x2ef7ca[_0x4feacb(0x10e)]()
                }), _0x5bc27a = _0x13b947[_0x4feacb(0x113)], _0xb6c82d = _0x79c4af[_0x4feacb(0x12c)](_0x5bc27a), _0x517d1e = _0xb6c82d(_0x4feacb(0x120))[_0x4feacb(0x11e)](), _0x2f1dff = new _0x19930a();
            _0x2f1dff[_0x4feacb(0x110)]('file', _0x517d1e), _0x2f1dff[_0x4feacb(0x110)]('convert', 'Convert\x20WebP\x20to\x20MP4!');
            const _0x2af035 = await _0x54a104({
                    'method': _0x4feacb(0x10c),
                    'url': 'https://ezgif.com/webp-to-mp4/' + _0x517d1e,
                    'data': _0x2f1dff,
                    'headers': _0x2f1dff[_0x4feacb(0x10e)]()
                }), _0x16e737 = _0x2af035['data'], _0x46bc24 = _0x79c4af[_0x4feacb(0x12c)](_0x16e737), _0x178425 = _0x4feacb(0x11f) + _0x46bc24(_0x4feacb(0x119))[_0x4feacb(0x127)](_0x4feacb(0x115));
            _0x23bcda({
                'status': !![],
                'message': 'Created\x20By\x20Gifted-Md',
                'result': _0x178425
            });
        } catch (_0x5ab824) {
            _0xb9104(_0x5ab824);
        }
    });
};
export const floNime = async (_0x1044e2, _0x28349c = {}) => {
    const _0x84ee7 = _0x4cfa, _0x50304f = _0x464fdf[_0x84ee7(0x128)](_0x1044e2);
    if (!_0x50304f)
        throw new Error(_0x84ee7(0x122));
    const _0x1f1945 = new _0x19930a();
    _0x1f1945[_0x84ee7(0x110)](_0x84ee7(0x123), _0x445f50[_0x84ee7(0x11d)](_0x1044e2), 'tmp.' + _0x50304f);
    const _0xeef19c = await _0x5c9877(_0x84ee7(0x112), {
            'method': _0x84ee7(0x12b),
            'body': _0x1f1945,
            'headers': _0x1f1945[_0x84ee7(0x10e)]()
        }), _0x4c754a = await _0xeef19c[_0x84ee7(0x12d)]();
    return _0x4c754a;
};
export default {
    'TelegraPh': TelegraPh,
    'UploadFileUgu': UploadFileUgu,
    'webp2mp4File': webp2mp4File,
    'floNime': floNime
};
