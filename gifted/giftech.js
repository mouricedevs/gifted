const _0xd70889 = _0x3e27;
(function (_0x5885db, _0x39370d) {
    const _0x1da97f = _0x3e27, _0x5480e2 = _0x5885db();
    while (!![]) {
        try {
            const _0x3bc718 = -parseInt(_0x1da97f(0x67)) / 0x1 + parseInt(_0x1da97f(0x6b)) / 0x2 + -parseInt(_0x1da97f(0x6c)) / 0x3 + -parseInt(_0x1da97f(0x74)) / 0x4 * (-parseInt(_0x1da97f(0x78)) / 0x5) + parseInt(_0x1da97f(0x68)) / 0x6 * (-parseInt(_0x1da97f(0x6e)) / 0x7) + -parseInt(_0x1da97f(0x7f)) / 0x8 + parseInt(_0x1da97f(0x71)) / 0x9 * (parseInt(_0x1da97f(0x75)) / 0xa);
            if (_0x3bc718 === _0x39370d)
                break;
            else
                _0x5480e2['push'](_0x5480e2['shift']());
        } catch (_0x27265d) {
            _0x5480e2['push'](_0x5480e2['shift']());
        }
    }
}(_0x448b, 0x71adf));
function _0x448b() {
    const _0x19ebef = [
        'scaleToFit',
        'url',
        '22544vHJxqi',
        '90eAbuNO',
        'crop',
        'Error\x20generating\x20profile\x20picture\x20with\x20watermark:',
        '5djFTAJ',
        'MIME_JPEG',
        'height',
        'error',
        'Watermark\x20file\x20not\x20found\x20at\x20',
        'getWidth',
        'dirname',
        '2643896NNMMZY',
        'pathname',
        '79463ImiJin',
        '6IiWhSw',
        'readFile',
        'bitmap',
        '908086UWbJFJ',
        '2169474kxEzUX',
        'read',
        '758254KvCyHc',
        'getHeight',
        './img/gift.png',
        '1247382jLDfWu'
    ];
    _0x448b = function () {
        return _0x19ebef;
    };
    return _0x448b();
}
import _0x2cc765 from 'jimp';
import _0x5f4168 from 'fs/promises';
function _0x3e27(_0xb81ab8, _0x10fc70) {
    const _0x448b96 = _0x448b();
    return _0x3e27 = function (_0x3e279b, _0x57770c) {
        _0x3e279b = _0x3e279b - 0x67;
        let _0x450a4d = _0x448b96[_0x3e279b];
        return _0x450a4d;
    }, _0x3e27(_0xb81ab8, _0x10fc70);
}
import _0x49764b from 'path';
const __filename = new URL(import.meta[_0xd70889(0x73)])[_0xd70889(0x80)], __dirname = _0x49764b[_0xd70889(0x7e)](__filename), generateProfilePictureWithWatermark = async _0x47eb9c => {
        const _0x3e1d85 = _0xd70889;
        try {
            const _0x4e3599 = await _0x2cc765[_0x3e1d85(0x6d)](_0x47eb9c), _0x1f4441 = _0x4e3599[_0x3e1d85(0x7d)](), _0x1f90de = _0x4e3599[_0x3e1d85(0x6f)](), _0x3cfc55 = _0x4e3599[_0x3e1d85(0x76)](0x0, 0x0, _0x1f4441, _0x1f90de), _0x274297 = _0x49764b['resolve'](__dirname, _0x3e1d85(0x70));
            try {
                await _0x5f4168['access'](_0x274297);
            } catch (_0x413872) {
                throw new Error(_0x3e1d85(0x7c) + _0x274297);
            }
            const _0x5aef2b = await _0x5f4168[_0x3e1d85(0x69)](_0x274297), _0x38f19f = await _0x2cc765['read'](_0x5aef2b);
            _0x38f19f[_0x3e1d85(0x72)](0xc8, 0xc8);
            const _0x3764e8 = 0xa, _0x600796 = _0x3cfc55[_0x3e1d85(0x6a)][_0x3e1d85(0x7a)] - _0x38f19f[_0x3e1d85(0x6a)][_0x3e1d85(0x7a)] - 0xa;
            _0x3cfc55['composite'](_0x38f19f, _0x3764e8, _0x600796);
            const _0x1d064c = await _0x3cfc55[_0x3e1d85(0x72)](0x2d0, 0x2d0)['getBufferAsync'](_0x2cc765[_0x3e1d85(0x79)]);
            return {
                'img': _0x1d064c,
                'preview': _0x1d064c
            };
        } catch (_0xeac2d4) {
            console[_0x3e1d85(0x7b)](_0x3e1d85(0x77), _0xeac2d4);
            throw _0xeac2d4;
        }
    };
export default generateProfilePictureWithWatermark;
