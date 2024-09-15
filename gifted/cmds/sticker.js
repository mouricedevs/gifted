(function (_0x49f136, _0x959bd1) {
    const _0xc44777 = _0x371b, _0x5142b6 = _0x49f136();
    while (!![]) {
        try {
            const _0x1a9067 = parseInt(_0xc44777(0xcb)) / 0x1 * (parseInt(_0xc44777(0xad)) / 0x2) + -parseInt(_0xc44777(0xb6)) / 0x3 + -parseInt(_0xc44777(0xb7)) / 0x4 * (parseInt(_0xc44777(0xc3)) / 0x5) + parseInt(_0xc44777(0xa9)) / 0x6 * (-parseInt(_0xc44777(0xbd)) / 0x7) + -parseInt(_0xc44777(0xcc)) / 0x8 * (-parseInt(_0xc44777(0xb5)) / 0x9) + -parseInt(_0xc44777(0xaf)) / 0xa * (parseInt(_0xc44777(0xa2)) / 0xb) + parseInt(_0xc44777(0xb3)) / 0xc;
            if (_0x1a9067 === _0x959bd1)
                break;
            else
                _0x5142b6['push'](_0x5142b6['shift']());
        } catch (_0x59455) {
            _0x5142b6['push'](_0x5142b6['shift']());
        }
    }
}(_0x4733, 0xcdbbf));
import _0xbc1f5f from 'fs/promises';
function _0x4733() {
    const _0x4110ba = [
        'mtype',
        'match',
        '10wbUNhX',
        'sendImageAsSticker',
        'Failed\x20to\x20download\x20media.',
        'autosticker',
        'Usage:\x20.autosticker\x20on|off',
        'split',
        'videoMessage',
        'startsWith',
        '106wSuwqi',
        '2896EwAriS',
        'reply',
        'author',
        '13339799ltEqwD',
        'sendVideoAsSticker',
        'now',
        'Send/Reply\x20with\x20an\x20image\x20or\x20video\x20to\x20convert\x20into\x20a\x20sticker\x20',
        'type',
        'quoted',
        'log',
        '24rrnFPj',
        'packname',
        'AUTO_STICKER',
        'mp4',
        '28174UzCUqd',
        'body',
        '10mBMZuH',
        'from',
        'Auto\x20sticker\x20detected',
        'includes',
        '45628752cBinIl',
        '𝐆𝐢𝐟𝐭𝐞𝐝-𝐌𝐝',
        '7551pRDYJC',
        '3618240qtYUsz',
        '2357864xNZZav',
        'Auto-sticker\x20has\x20been\x20disabled.',
        'key',
        'slice',
        'off',
        'sticker',
        '2028124ehjURg',
        'download',
        'imageMessage',
        'Auto-sticker\x20has\x20been\x20enabled.'
    ];
    _0x4733 = function () {
        return _0x4110ba;
    };
    return _0x4733();
}
import _0x2795e5 from '../../set.cjs';
function _0x371b(_0x21a487, _0x32f93b) {
    const _0x4733e5 = _0x4733();
    return _0x371b = function (_0x371b43, _0x3e23d3) {
        _0x371b43 = _0x371b43 - 0xa2;
        let _0x5d6851 = _0x4733e5[_0x371b43];
        return _0x5d6851;
    }, _0x371b(_0x21a487, _0x32f93b);
}
const StickerCmd = async (_0x5e991f, _0x1b1a96) => {
    const _0x49ddcb = _0x371b, _0x1273db = _0x5e991f['body'][_0x49ddcb(0xc2)](/^[\\/!#.]/), _0x351a9d = _0x1273db ? _0x1273db[0x0] : '/', [_0x2c85b7, _0x44335f] = _0x5e991f[_0x49ddcb(0xae)][_0x49ddcb(0xca)](_0x351a9d) ? _0x5e991f['body'][_0x49ddcb(0xba)](_0x351a9d['length'])[_0x49ddcb(0xc8)]('\x20') : [
            '',
            ''
        ], _0x2ed5cb = global[_0x49ddcb(0xaa)] || _0x49ddcb(0xb4), _0xa9cc65 = global[_0x49ddcb(0xce)] || '💜💜💜', _0x2d8c21 = [
            _0x49ddcb(0xbc),
            's',
            _0x49ddcb(0xc6)
        ];
    if (_0x2c85b7 === 'autosticker') {
        if (_0x44335f === 'on')
            _0x2795e5[_0x49ddcb(0xab)] = !![], await _0x5e991f[_0x49ddcb(0xcd)](_0x49ddcb(0xc0));
        else
            _0x44335f === _0x49ddcb(0xbb) ? (_0x2795e5[_0x49ddcb(0xab)] = ![], await _0x5e991f['reply'](_0x49ddcb(0xb8))) : await _0x5e991f['reply'](_0x49ddcb(0xc7));
        return;
    }
    if (_0x2795e5[_0x49ddcb(0xab)] && !_0x5e991f[_0x49ddcb(0xb9)]['fromMe']) {
        if (_0x5e991f[_0x49ddcb(0xa6)] === _0x49ddcb(0xbf)) {
            let _0x3eca18 = await _0x5e991f[_0x49ddcb(0xbe)]();
            await _0x1b1a96[_0x49ddcb(0xc4)](_0x5e991f[_0x49ddcb(0xb0)], _0x3eca18, _0x5e991f, {
                'packname': _0x2ed5cb,
                'author': _0xa9cc65
            }), console[_0x49ddcb(0xa8)](_0x49ddcb(0xb1));
            return;
        } else {
            if (_0x5e991f[_0x49ddcb(0xa6)] === _0x49ddcb(0xc9) && _0x5e991f['msg']['seconds'] <= 0xb) {
                let _0x52c98c = await _0x5e991f[_0x49ddcb(0xbe)]();
                await _0x1b1a96[_0x49ddcb(0xa3)](_0x5e991f[_0x49ddcb(0xb0)], _0x52c98c, _0x5e991f, {
                    'packname': _0x2ed5cb,
                    'author': _0xa9cc65
                });
                return;
            }
        }
    }
    if (_0x2d8c21[_0x49ddcb(0xb2)](_0x2c85b7)) {
        const _0x5f3569 = _0x5e991f[_0x49ddcb(0xa7)] || {};
        if (!_0x5f3569 || _0x5f3569[_0x49ddcb(0xc1)] !== _0x49ddcb(0xbf) && _0x5f3569['mtype'] !== _0x49ddcb(0xc9))
            return _0x5e991f['reply'](_0x49ddcb(0xa5) + (_0x351a9d + _0x2c85b7));
        const _0x4eeb78 = await _0x5f3569[_0x49ddcb(0xbe)]();
        if (!_0x4eeb78)
            throw new Error(_0x49ddcb(0xc5));
        const _0x15f339 = './' + Date[_0x49ddcb(0xa4)]() + '.' + (_0x5f3569[_0x49ddcb(0xc1)] === 'imageMessage' ? 'png' : _0x49ddcb(0xac));
        await _0xbc1f5f['writeFile'](_0x15f339, _0x4eeb78);
        if (_0x5f3569[_0x49ddcb(0xc1)] === _0x49ddcb(0xbf)) {
            const _0x22e529 = await _0xbc1f5f['readFile'](_0x15f339);
            await _0x1b1a96['sendImageAsSticker'](_0x5e991f[_0x49ddcb(0xb0)], _0x22e529, _0x5e991f, {
                'packname': _0x2ed5cb,
                'author': _0xa9cc65
            });
        } else
            _0x5f3569['mtype'] === _0x49ddcb(0xc9) && await _0x1b1a96['sendVideoAsSticker'](_0x5e991f[_0x49ddcb(0xb0)], _0x15f339, _0x5e991f, {
                'packname': _0x2ed5cb,
                'author': _0xa9cc65
            });
    }
};
export default StickerCmd;
