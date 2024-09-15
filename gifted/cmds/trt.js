function _0x2afc() {
    const _0x4ecdab = [
        'Failed\x20to\x20download\x20media.',
        '1077327rftzGe',
        '7409248gukCbC',
        'translate',
        'Error\x20extracting\x20and\x20translating\x20text\x20from\x20image.',
        'download',
        'mtype',
        'length',
        '10LrUKkE',
        'Error\x20translating\x20quoted\x20text.',
        '1577989OrBHWi',
        'trt',
        'log',
        'Error\x20translating\x20text:',
        'from',
        'body',
        '738nHKqHA',
        'transl',
        'error',
        '324130RdfLJT',
        'recognize',
        'startsWith',
        'Error\x20translating\x20quoted\x20text:',
        'includes',
        'sendMessage',
        'join',
        '2BbDrRu',
        '8OaBFkY',
        'trim',
        'toLowerCase',
        ':\x0a\x0a',
        '408651RmlaKe',
        'Error\x20extracting\x20and\x20translating\x20text\x20from\x20image:',
        'now',
        '861984ggZuUv',
        'slice',
        'text',
        'eng',
        'quoted',
        'split',
        '13540aiLmdJ'
    ];
    _0x2afc = function () {
        return _0x4ecdab;
    };
    return _0x2afc();
}
(function (_0x30324f, _0x14e7f0) {
    const _0x455a2c = _0x48af, _0x209636 = _0x30324f();
    while (!![]) {
        try {
            const _0x5719e4 = parseInt(_0x455a2c(0xfa)) / 0x1 * (parseInt(_0x455a2c(0x101)) / 0x2) + parseInt(_0x455a2c(0xdd)) / 0x3 + -parseInt(_0x455a2c(0xe0)) / 0x4 + parseInt(_0x455a2c(0xe6)) / 0x5 * (parseInt(_0x455a2c(0xf7)) / 0x6) + parseInt(_0x455a2c(0xf1)) / 0x7 * (parseInt(_0x455a2c(0x102)) / 0x8) + parseInt(_0x455a2c(0xe8)) / 0x9 + parseInt(_0x455a2c(0xef)) / 0xa * (-parseInt(_0x455a2c(0xe9)) / 0xb);
            if (_0x5719e4 === _0x14e7f0)
                break;
            else
                _0x209636['push'](_0x209636['shift']());
        } catch (_0x596d69) {
            _0x209636['push'](_0x209636['shift']());
        }
    }
}(_0x2afc, 0x3ce99));
import _0x550f22 from 'tesseract.js';
import _0x27d083 from 'translate-google-api';
import { writeFile } from 'fs/promises';
function _0x48af(_0xc4e6e6, _0x338d61) {
    const _0x2afc2d = _0x2afc();
    return _0x48af = function (_0x48af6a, _0x399773) {
        _0x48af6a = _0x48af6a - 0xda;
        let _0x2871dc = _0x2afc2d[_0x48af6a];
        return _0x2871dc;
    }, _0x48af(_0xc4e6e6, _0x338d61);
}
const translateCommand = async (_0x4bfc82, _0x4607af, _0x5943c0) => {
    const _0x377485 = _0x48af, _0x284e33 = _0x4bfc82[_0x377485(0xf6)]['match'](/^[\\/!#.]/), _0x29e2c7 = _0x284e33 ? _0x284e33[0x0] : '/', _0x735168 = _0x4bfc82[_0x377485(0xf6)][_0x377485(0xfc)](_0x29e2c7) ? _0x4bfc82['body'][_0x377485(0xe1)](_0x29e2c7['length'])[_0x377485(0xe5)]('\x20')[0x0][_0x377485(0xdb)]() : '', _0x4b39f6 = _0x4bfc82[_0x377485(0xf6)][_0x377485(0xe1)](_0x29e2c7[_0x377485(0xee)] + _0x735168['length'])[_0x377485(0xda)]()['split']('\x20'), _0x1bc61d = [
            _0x377485(0xea),
            'trans',
            _0x377485(0xf8),
            _0x377485(0xf2)
        ];
    if (_0x1bc61d[_0x377485(0xfe)](_0x735168)) {
        const _0x1b15e4 = _0x4b39f6[0x0], _0xecd3f7 = _0x4b39f6[_0x377485(0xe1)](0x1)[_0x377485(0x100)]('\x20');
        if (_0x4bfc82[_0x377485(0xe4)]) {
            if (_0x4bfc82['quoted'][_0x377485(0xed)] === 'imageMessage')
                try {
                    const _0x3cd425 = await _0x4bfc82[_0x377485(0xe4)][_0x377485(0xec)]();
                    if (!_0x3cd425)
                        throw new Error(_0x377485(0xe7));
                    const _0x551337 = './' + Date[_0x377485(0xdf)]() + '.png';
                    await writeFile(_0x551337, _0x3cd425);
                    const {
                            data: {text: _0xc28328}
                        } = await _0x550f22[_0x377485(0xfb)](_0x551337, _0x377485(0xe3), { 'logger': _0x257c89 => console[_0x377485(0xf3)](_0x257c89) }), _0xf3b736 = await _0x27d083(_0xc28328, { 'to': _0x1b15e4 }), _0x280fec = _0xf3b736[0x0], _0xc3792a = _0x1b15e4 + _0x377485(0xdc) + _0x280fec;
                    await _0x4607af['sendMessage'](_0x4bfc82['from'], { 'text': _0xc3792a }, { 'quoted': _0x4bfc82 });
                } catch (_0x64fe4d) {
                    console[_0x377485(0xf9)](_0x377485(0xde), _0x64fe4d), await _0x4607af['sendMessage'](_0x4bfc82[_0x377485(0xf5)], { 'text': _0x377485(0xeb) }, { 'quoted': _0x4bfc82 });
                }
            else {
                if (_0x4bfc82['quoted'][_0x377485(0xe2)])
                    try {
                        const _0x276b95 = _0x4bfc82[_0x377485(0xe4)]['text'], _0x4a76d9 = await _0x27d083(_0x276b95, { 'to': _0x1b15e4 }), _0x452a2a = _0x4a76d9[0x0], _0xd603be = _0x1b15e4 + _0x377485(0xdc) + _0x452a2a;
                        await _0x4607af[_0x377485(0xff)](_0x4bfc82[_0x377485(0xf5)], { 'text': _0xd603be }, { 'quoted': _0x4bfc82 });
                    } catch (_0x4d6e13) {
                        console[_0x377485(0xf9)](_0x377485(0xfd), _0x4d6e13), await _0x4607af['sendMessage'](_0x4bfc82[_0x377485(0xf5)], { 'text': _0x377485(0xf0) }, { 'quoted': _0x4bfc82 });
                    }
            }
        } else {
            if (_0xecd3f7 && _0x1b15e4)
                try {
                    const _0x3d60d0 = await _0x27d083(_0xecd3f7, { 'to': _0x1b15e4 }), _0x372df1 = _0x3d60d0[0x0], _0x13551c = _0x1b15e4 + _0x377485(0xdc) + _0x372df1;
                    await _0x4607af[_0x377485(0xff)](_0x4bfc82['from'], { 'text': _0x13551c }, { 'quoted': _0x4bfc82 });
                } catch (_0x360c24) {
                    console[_0x377485(0xf9)](_0x377485(0xf4), _0x360c24), await _0x4607af[_0x377485(0xff)](_0x4bfc82[_0x377485(0xf5)], { 'text': 'Error\x20translating\x20text.' }, { 'quoted': _0x4bfc82 });
                }
            else {
                const _0x55783d = 'Usage:\x20.translate\x20<target_lang>\x20<text>\x0aExample:\x20.trt\x20sw\x20I\x20am\x20Gifted-Md\x20Whatsapp\x20Bot\x0aOr\x20reply\x20to\x20an\x20image/text\x20message\x20with\x20.translate\x20<target_lang>';
                await _0x4607af[_0x377485(0xff)](_0x4bfc82[_0x377485(0xf5)], { 'text': _0x55783d }, { 'quoted': _0x4bfc82 });
            }
        }
    }
};
export default translateCommand;
