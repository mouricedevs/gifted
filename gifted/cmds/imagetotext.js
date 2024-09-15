function _0xf690() {
    const _0x378021 = [
        '.png',
        '9hjnQgP',
        '1390080bCHyUC',
        'imageMessage',
        'sendMessage',
        '8oBEtnu',
        'Extracted\x20Text:\x0a\x0a',
        'Error\x20extracting\x20text\x20from\x20image:',
        'match',
        '3810620SbKNfe',
        'givetext',
        '1069884iYlijS',
        'split',
        'Error\x20extracting\x20text\x20from\x20image.',
        '40uGbZgU',
        '2620806ZbsqVR',
        'Send/Reply\x20with\x20an\x20image\x20to\x20extract\x20text\x20',
        '7erprHK',
        '1125030kLppmv',
        'body',
        'now',
        'includes',
        'log',
        'totext',
        '8986QPPyqv',
        'quoted',
        'from',
        'reply',
        '21416AxOJve',
        'length',
        'slice'
    ];
    _0xf690 = function () {
        return _0x378021;
    };
    return _0xf690();
}
(function (_0x2a6d1a, _0x2f0aaa) {
    const _0x2c910c = _0x396a, _0x1a808c = _0x2a6d1a();
    while (!![]) {
        try {
            const _0x5d471d = -parseInt(_0x2c910c(0x15e)) / 0x1 + parseInt(_0x2c910c(0x179)) / 0x2 * (-parseInt(_0x2c910c(0x162)) / 0x3) + -parseInt(_0x2c910c(0x166)) / 0x4 * (parseInt(_0x2c910c(0x173)) / 0x5) + parseInt(_0x2c910c(0x170)) / 0x6 * (parseInt(_0x2c910c(0x172)) / 0x7) + parseInt(_0x2c910c(0x163)) / 0x8 + -parseInt(_0x2c910c(0x16c)) / 0x9 * (-parseInt(_0x2c910c(0x16f)) / 0xa) + -parseInt(_0x2c910c(0x16a)) / 0xb;
            if (_0x5d471d === _0x2f0aaa)
                break;
            else
                _0x1a808c['push'](_0x1a808c['shift']());
        } catch (_0x1a7d55) {
            _0x1a808c['push'](_0x1a808c['shift']());
        }
    }
}(_0xf690, 0x3e312));
import _0x2f6cbb from 'tesseract.js';
import {
    writeFile,
    unlink
} from 'fs/promises';
function _0x396a(_0x3d6c71, _0x4d3505) {
    const _0xf69065 = _0xf690();
    return _0x396a = function (_0x396a75, _0x26063c) {
        _0x396a75 = _0x396a75 - 0x15c;
        let _0x9803d8 = _0xf69065[_0x396a75];
        return _0x9803d8;
    }, _0x396a(_0x3d6c71, _0x4d3505);
}
const givetextCommand = async (_0x4af66c, _0x556695) => {
    const _0xc1ecdf = _0x396a, _0x153892 = _0x4af66c[_0xc1ecdf(0x174)][_0xc1ecdf(0x169)](/^[\\/!#.]/), _0xf8cdfd = _0x153892 ? _0x153892[0x0] : '/', _0x33b783 = _0x4af66c['body']['startsWith'](_0xf8cdfd) ? _0x4af66c['body']['slice'](_0xf8cdfd[_0xc1ecdf(0x15f)])['split']('\x20')[0x0]['toLowerCase']() : '', _0x3479b5 = _0x4af66c[_0xc1ecdf(0x174)][_0xc1ecdf(0x16d)]('\x20')[_0xc1ecdf(0x160)](0x1), _0x3dd729 = [
            _0xc1ecdf(0x178),
            _0xc1ecdf(0x16b),
            'extract'
        ];
    if (_0x3dd729[_0xc1ecdf(0x176)](_0x33b783)) {
        if (!_0x4af66c[_0xc1ecdf(0x17a)] || _0x4af66c['quoted']['mtype'] !== _0xc1ecdf(0x164))
            return _0x4af66c[_0xc1ecdf(0x15d)](_0xc1ecdf(0x171) + (_0xf8cdfd + _0x33b783));
        let _0x745172 = 'eng';
        _0x3479b5[_0xc1ecdf(0x15f)] > 0x0 && (_0x745172 = _0x3479b5[0x0]);
        try {
            const _0x3af475 = await _0x4af66c['quoted']['download']();
            if (!_0x3af475)
                throw new Error('Failed\x20to\x20download\x20media.');
            const _0x1dece0 = './' + Date[_0xc1ecdf(0x175)]() + _0xc1ecdf(0x161);
            await writeFile(_0x1dece0, _0x3af475);
            const {
                    data: {text: _0x328c31}
                } = await _0x2f6cbb['recognize'](_0x1dece0, _0x745172, { 'logger': _0xaf1112 => console[_0xc1ecdf(0x177)](_0xaf1112) }), _0x2e4b28 = _0xc1ecdf(0x167) + _0x328c31;
            await _0x556695[_0xc1ecdf(0x165)](_0x4af66c['from'], { 'text': _0x2e4b28 }, { 'quoted': _0x4af66c }), await unlink(_0x1dece0);
        } catch (_0x35a03b) {
            console['error'](_0xc1ecdf(0x168), _0x35a03b), await _0x556695[_0xc1ecdf(0x165)](_0x4af66c[_0xc1ecdf(0x15c)], { 'text': _0xc1ecdf(0x16e) }, { 'quoted': _0x4af66c });
        }
    }
};
export default givetextCommand;
