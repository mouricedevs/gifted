(function (_0x1f4a1c, _0x44b6f4) {
    const _0x16707d = _0x3d88, _0x44b756 = _0x1f4a1c();
    while (!![]) {
        try {
            const _0x279fb1 = parseInt(_0x16707d(0x1e8)) / 0x1 * (parseInt(_0x16707d(0x1f0)) / 0x2) + parseInt(_0x16707d(0x1f4)) / 0x3 * (-parseInt(_0x16707d(0x1fa)) / 0x4) + parseInt(_0x16707d(0x1f1)) / 0x5 * (parseInt(_0x16707d(0x1f6)) / 0x6) + -parseInt(_0x16707d(0x1e0)) / 0x7 * (-parseInt(_0x16707d(0x1f2)) / 0x8) + -parseInt(_0x16707d(0x1df)) / 0x9 + -parseInt(_0x16707d(0x1ec)) / 0xa + parseInt(_0x16707d(0x1f5)) / 0xb;
            if (_0x279fb1 === _0x44b6f4)
                break;
            else
                _0x44b756['push'](_0x44b756['shift']());
        } catch (_0x1ea72b) {
            _0x44b756['push'](_0x44b756['shift']());
        }
    }
}(_0x4afa, 0xcfffc));
import _0x31c45f from 'qrcode';
function _0x3d88(_0x4b5606, _0x12b1ef) {
    const _0x4afa19 = _0x4afa();
    return _0x3d88 = function (_0x3d8855, _0x242ac8) {
        _0x3d8855 = _0x3d8855 - 0x1dd;
        let _0x4f985b = _0x4afa19[_0x3d8855];
        return _0x4f985b;
    }, _0x3d88(_0x4b5606, _0x12b1ef);
}
function _0x4afa() {
    const _0xa70a53 = [
        'now',
        '3195036ZLtRsp',
        '4893294rzGbYD',
        'data:image/png;base64,',
        'slice',
        'body',
        'Please\x20include\x20link\x20or\x20text!',
        'user',
        'length',
        'toDataURL',
        '76967TSEWAc',
        'toqr',
        'join',
        'sendMessage',
        '3616500YYazYK',
        'replace',
        'trim',
        'startsWith',
        '2AjIEwe',
        '655xMpNdh',
        '8tivJbH',
        'split',
        '1547031SHphiC',
        '4404246xPzkgl',
        '65202MTkxvd',
        'QR\x20code\x20generated\x20successfully!\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'toLowerCase',
        'writeFileSync',
        '8jCcwuw',
        'unlinkSync',
        'reply'
    ];
    _0x4afa = function () {
        return _0xa70a53;
    };
    return _0x4afa();
}
import _0x46ca45 from 'fs';
import _0x213151 from 'path';
const toqr = async (_0x472384, _0x47f9c8) => {
    const _0x2b754f = _0x3d88;
    try {
        const _0x31a008 = await _0x47f9c8['decodeJid'](_0x47f9c8[_0x2b754f(0x1e5)]['id']), _0x1477ec = _0x472384[_0x2b754f(0x1e3)]['match'](/^[\\/!#.]/), _0x4aa163 = _0x1477ec ? _0x1477ec[0x0] : '/', _0x318aaa = _0x472384[_0x2b754f(0x1e3)][_0x2b754f(0x1ef)](_0x4aa163) ? _0x472384[_0x2b754f(0x1e3)][_0x2b754f(0x1e2)](_0x4aa163[_0x2b754f(0x1e6)])[_0x2b754f(0x1f3)]('\x20')[0x0][_0x2b754f(0x1f8)]() : '', _0x996734 = _0x472384[_0x2b754f(0x1e3)]['slice'](_0x4aa163['length'] + _0x318aaa['length'])[_0x2b754f(0x1ee)](), _0x1e8fa6 = [
                _0x2b754f(0x1e9),
                'qr'
            ];
        if (!_0x1e8fa6['includes'](_0x318aaa))
            return;
        if (!_0x996734)
            return _0x472384[_0x2b754f(0x1dd)](_0x2b754f(0x1e4));
        let _0x26c57d = await _0x31c45f[_0x2b754f(0x1e7)](_0x996734, { 'scale': 0x23 }), _0x2edc92 = Buffer['from'](_0x26c57d[_0x2b754f(0x1ed)](_0x2b754f(0x1e1), ''), 'base64'), _0x1e264e = Date[_0x2b754f(0x1de)]() + '.jpg';
        await _0x46ca45[_0x2b754f(0x1f9)](_0x213151['join']('./', _0x1e264e), _0x2edc92);
        let _0x4aa1a1 = _0x46ca45['readFileSync'](_0x213151[_0x2b754f(0x1ea)]('./', _0x1e264e));
        await _0x47f9c8[_0x2b754f(0x1eb)](_0x472384['from'], {
            'image': _0x4aa1a1,
            'caption': _0x2b754f(0x1f7)
        }, { 'quoted': _0x472384 }), setTimeout(() => {
            const _0x462bbc = _0x2b754f;
            _0x46ca45[_0x462bbc(0x1fb)](_0x213151[_0x462bbc(0x1ea)]('./', _0x1e264e));
        }, 0x2710);
    } catch (_0x34674b) {
        console['error']('Error:', _0x34674b), _0x472384[_0x2b754f(0x1dd)]('An\x20error\x20occurred\x20while\x20generating\x20the\x20QR\x20code.');
    }
};
export default toqr;
