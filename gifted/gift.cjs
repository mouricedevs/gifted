const _0x585dcf = _0x41ec;
function _0x41ec(_0x38ef36, _0x2f9c47) {
    const _0x149dd9 = _0x149d();
    return _0x41ec = function (_0x41ec96, _0x264efa) {
        _0x41ec96 = _0x41ec96 - 0xab;
        let _0x1bb019 = _0x149dd9[_0x41ec96];
        return _0x1bb019;
    }, _0x41ec(_0x38ef36, _0x2f9c47);
}
function _0x149d() {
    const _0x51f505 = [
        '8803554UwMxJy',
        'image',
        'gzip',
        '3pkCshs',
        'append',
        '9980348ajMdIi',
        'recolor',
        'model_version',
        'exports',
        '21940YbiHme',
        'multipart/form-data;\x20charset=uttf-8',
        'https://inferenceengine.vyro.ai/',
        'includes',
        '1980662JtUoSQ',
        'dehaze',
        '760740xFyIvB',
        'remini',
        '10176280gdepFy',
        'submit',
        'data',
        'inferenceengine.vyro.ai',
        '18JyXBcn',
        'error',
        '764iXHiVJ',
        'okhttp/4.9.3',
        '2666072dzYbHe',
        'form-data',
        'push',
        'image/jpeg',
        'end',
        'from'
    ];
    _0x149d = function () {
        return _0x51f505;
    };
    return _0x149d();
}
(function (_0x33badc, _0x13c4ec) {
    const _0x7c7432 = _0x41ec, _0x2f6879 = _0x33badc();
    while (!![]) {
        try {
            const _0x3e2dd3 = -parseInt(_0x7c7432(0xb9)) / 0x1 + -parseInt(_0x7c7432(0xb7)) / 0x2 * (parseInt(_0x7c7432(0xad)) / 0x3) + -parseInt(_0x7c7432(0xc1)) / 0x4 * (-parseInt(_0x7c7432(0xb3)) / 0x5) + parseInt(_0x7c7432(0xc9)) / 0x6 + -parseInt(_0x7c7432(0xaf)) / 0x7 + -parseInt(_0x7c7432(0xc3)) / 0x8 + parseInt(_0x7c7432(0xbf)) / 0x9 * (parseInt(_0x7c7432(0xbb)) / 0xa);
            if (_0x3e2dd3 === _0x13c4ec)
                break;
            else
                _0x2f6879['push'](_0x2f6879['shift']());
        } catch (_0x44abee) {
            _0x2f6879['push'](_0x2f6879['shift']());
        }
    }
}(_0x149d, 0xcac41));
const FormData = require(_0x585dcf(0xc4));
async function remini(_0x137edc, _0x14af76) {
    return new Promise(async (_0x4f1964, _0x5348f4) => {
        const _0x507766 = _0x41ec;
        let _0x1d565d = [
            'enhance',
            _0x507766(0xb0),
            _0x507766(0xb8)
        ];
        _0x1d565d[_0x507766(0xb6)](_0x14af76) ? _0x14af76 = _0x14af76 : _0x14af76 = _0x1d565d[0x0];
        let _0x669403 = new FormData(), _0x4b041a = _0x507766(0xb5) + _0x14af76;
        _0x669403[_0x507766(0xae)](_0x507766(0xb1), 0x1, {
            'Content-Transfer-Encoding': 'binary',
            'contentType': _0x507766(0xb4)
        }), _0x669403[_0x507766(0xae)](_0x507766(0xab), Buffer[_0x507766(0xc8)](_0x137edc), {
            'filename': 'enhance_image_body.jpg',
            'contentType': _0x507766(0xc6)
        }), _0x669403[_0x507766(0xbc)]({
            'url': _0x4b041a,
            'host': _0x507766(0xbe),
            'path': '/' + _0x14af76,
            'protocol': 'https:',
            'headers': {
                'User-Agent': _0x507766(0xc2),
                'Connection': 'Keep-Alive',
                'Accept-Encoding': _0x507766(0xac)
            }
        }, function (_0x58482d, _0x439b31) {
            const _0xc00daf = _0x507766;
            _0x58482d && _0x5348f4();
            let _0x2a54e4 = [];
            _0x439b31['on'](_0xc00daf(0xbd), function (_0xa42830, _0x5c268e) {
                const _0x4143b9 = _0xc00daf;
                _0x2a54e4[_0x4143b9(0xc5)](_0xa42830);
            })['on'](_0xc00daf(0xc7), () => {
                _0x4f1964(Buffer['concat'](_0x2a54e4));
            }), _0x439b31['on'](_0xc00daf(0xc0), _0x47dc5e => {
                _0x5348f4();
            });
        });
    });
}
module[_0x585dcf(0xb2)][_0x585dcf(0xba)] = remini;
