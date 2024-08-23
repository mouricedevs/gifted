(function (_0x443247, _0x6a3daf) {
    const _0x318f2 = _0x4731, _0x2fd9f4 = _0x443247();
    while (!![]) {
        try {
            const _0x2cdc05 = parseInt(_0x318f2(0x140)) / 0x1 + -parseInt(_0x318f2(0x144)) / 0x2 + parseInt(_0x318f2(0x128)) / 0x3 + -parseInt(_0x318f2(0x12d)) / 0x4 * (-parseInt(_0x318f2(0x134)) / 0x5) + parseInt(_0x318f2(0x129)) / 0x6 * (-parseInt(_0x318f2(0x141)) / 0x7) + -parseInt(_0x318f2(0x148)) / 0x8 * (parseInt(_0x318f2(0x132)) / 0x9) + parseInt(_0x318f2(0x13b)) / 0xa;
            if (_0x2cdc05 === _0x6a3daf)
                break;
            else
                _0x2fd9f4['push'](_0x2fd9f4['shift']());
        } catch (_0x266785) {
            _0x2fd9f4['push'](_0x2fd9f4['shift']());
        }
    }
}(_0xc431, 0xe38b4));
import _0x38c682 from 'node-fetch';
const GDriveDownloader = async (_0x1d6381, _0x2e21fc) => {
    const _0x2c6226 = _0x4731, _0x23c24b = _0x1d6381['body'][_0x2c6226(0x14c)](/^[\\/!#.]/), _0x4ef165 = _0x23c24b ? _0x23c24b[0x0] : '/', _0x572e4d = _0x1d6381['body']['startsWith'](_0x4ef165) ? _0x1d6381[_0x2c6226(0x145)][_0x2c6226(0x13a)](_0x4ef165[_0x2c6226(0x149)])[_0x2c6226(0x12f)]('\x20')[0x0][_0x2c6226(0x13d)]() : '', _0x47af2c = _0x1d6381['body'][_0x2c6226(0x13a)](_0x4ef165[_0x2c6226(0x149)] + _0x572e4d['length'])['trim'](), _0x220c28 = [
            _0x2c6226(0x13e),
            _0x2c6226(0x138),
            'drivedl',
            'googledrive',
            'gdrivedl',
            _0x2c6226(0x126)
        ];
    if (_0x220c28[_0x2c6226(0x13c)](_0x572e4d))
        try {
            await _0x1d6381['React']('🕘');
            if (!_0x47af2c)
                return _0x1d6381['reply'](_0x2c6226(0x13f) + _0x1d6381[_0x2c6226(0x139)] + _0x2c6226(0x14a));
            await _0x1d6381['reply']('Downloading\x20media\x20from\x20Google\x20Drive.\x20Please\x20wait...');
            const _0x139ae1 = await _0x38c682(_0x2c6226(0x14b) + _0x47af2c), _0x5eac88 = await _0x139ae1[_0x2c6226(0x142)]();
            if (_0x5eac88 && _0x5eac88['downloadUrl']) {
                const _0xd36f4e = _0x5eac88[_0x2c6226(0x146)], _0x3d91b3 = _0x5eac88['mimetype'][_0x2c6226(0x12f)]('/')[0x0];
                if (_0x3d91b3 === _0x2c6226(0x130) || _0x3d91b3 === _0x2c6226(0x133) || _0x3d91b3 === _0x2c6226(0x127))
                    await _0x2e21fc[_0x2c6226(0x12a)](_0x1d6381[_0x2c6226(0x125)], {
                        [_0x3d91b3]: { 'url': _0xd36f4e },
                        'caption': _0x2c6226(0x136) + _0x5eac88[_0x2c6226(0x131)] + _0x2c6226(0x147)
                    }, { 'quoted': _0x1d6381 });
                else {
                    const _0x284fb8 = _0x5eac88['fileName']['split']('.')[_0x2c6226(0x14d)]();
                    await _0x2e21fc[_0x2c6226(0x12a)](_0x1d6381[_0x2c6226(0x125)], {
                        'document': {
                            'url': _0xd36f4e,
                            'filename': _0x5eac88[_0x2c6226(0x131)]
                        },
                        'caption': _0x2c6226(0x135) + _0x284fb8['toUpperCase']() + _0x2c6226(0x12e) + _0x5eac88[_0x2c6226(0x131)] + _0x2c6226(0x147)
                    }, { 'quoted': _0x1d6381 });
                }
            } else
                await _0x2e21fc[_0x2c6226(0x12a)](_0x1d6381[_0x2c6226(0x125)], { 'text': _0x2c6226(0x137) }, { 'quoted': _0x1d6381 });
            await _0x1d6381[_0x2c6226(0x143)]('💜');
        } catch (_0x1be9a5) {
            console[_0x2c6226(0x12b)](_0x2c6226(0x12c), _0x1be9a5), await _0x2e21fc[_0x2c6226(0x12a)](_0x1d6381[_0x2c6226(0x125)], { 'text': _0x2c6226(0x137) }, { 'quoted': _0x1d6381 });
        }
};
export default GDriveDownloader;
function _0x4731(_0x2fddbd, _0x47ce1b) {
    const _0xc431c2 = _0xc431();
    return _0x4731 = function (_0x473184, _0x55c29d) {
        _0x473184 = _0x473184 - 0x125;
        let _0x248c5b = _0xc431c2[_0x473184];
        return _0x248c5b;
    }, _0x4731(_0x2fddbd, _0x47ce1b);
}
function _0xc431() {
    const _0x2d0758 = [
        'downloadUrl',
        '*\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        '77984lOwyXJ',
        'length',
        '*_\x20Please\x20insert\x20a\x20valid\x20Google\x20Drive\x20link!',
        'https://api-smd.onrender.com/api/gdrive?url=',
        'match',
        'pop',
        'from',
        'gdrivedownloader',
        'image',
        '1557423OpgMcJ',
        '21726dBSEzv',
        'sendMessage',
        'error',
        'Error\x20fetching\x20media:',
        '4fGMaMU',
        ':\x20*',
        'split',
        'audio',
        'fileName',
        '729xrPcZE',
        'video',
        '4978180vXiWqa',
        'Downloaded\x20',
        'Downloaded\x20media:\x20*',
        'Failed\x20to\x20retrieve\x20the\x20media.\x20Please\x20try\x20again\x20later.',
        'drive',
        'pushName',
        'slice',
        '7286700vLbBge',
        'includes',
        'toLowerCase',
        'gdrive',
        'Hello\x20_*',
        '1337074IxUNZR',
        '133SjhvPm',
        'json',
        'React',
        '3580228GHUTpj',
        'body'
    ];
    _0xc431 = function () {
        return _0x2d0758;
    };
    return _0xc431();
}
