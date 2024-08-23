(function (_0x151956, _0x105114) {
    const _0x5ef260 = _0x2a9c, _0x1a70dc = _0x151956();
    while (!![]) {
        try {
            const _0x37cc6f = parseInt(_0x5ef260(0x19e)) / 0x1 + parseInt(_0x5ef260(0x197)) / 0x2 * (-parseInt(_0x5ef260(0x19d)) / 0x3) + -parseInt(_0x5ef260(0x1a2)) / 0x4 * (parseInt(_0x5ef260(0x1a5)) / 0x5) + -parseInt(_0x5ef260(0x194)) / 0x6 + parseInt(_0x5ef260(0x1a4)) / 0x7 + -parseInt(_0x5ef260(0x18b)) / 0x8 + parseInt(_0x5ef260(0x18c)) / 0x9 * (parseInt(_0x5ef260(0x1a1)) / 0xa);
            if (_0x37cc6f === _0x105114)
                break;
            else
                _0x1a70dc['push'](_0x1a70dc['shift']());
        } catch (_0x4d89a8) {
            _0x1a70dc['push'](_0x1a70dc['shift']());
        }
    }
}(_0x29fa, 0x88e6c));
import _0x86d9ff from 'node-fetch';
const tikdown2 = async (_0x3943ef, _0x3e6ff6) => {
    const _0x30985c = _0x2a9c, _0x4332b2 = _0x3943ef[_0x30985c(0x1a0)][_0x30985c(0x193)](/^[\\/!#.]/), _0x35a2ba = _0x4332b2 ? _0x4332b2[0x0] : '/', _0x33fb55 = _0x3943ef[_0x30985c(0x1a0)][_0x30985c(0x19f)](_0x35a2ba) ? _0x3943ef[_0x30985c(0x1a0)][_0x30985c(0x19a)](_0x35a2ba[_0x30985c(0x19c)])['split']('\x20')[0x0][_0x30985c(0x192)]() : '', _0x1f14eb = _0x3943ef[_0x30985c(0x1a0)][_0x30985c(0x19a)](_0x35a2ba['length'] + _0x33fb55[_0x30985c(0x19c)])[_0x30985c(0x191)](), _0x5e4b37 = [
            _0x30985c(0x1a3),
            _0x30985c(0x1a6),
            'tiktokdl2',
            _0x30985c(0x198),
            _0x30985c(0x195)
        ];
    if (_0x5e4b37[_0x30985c(0x199)](_0x33fb55))
        try {
            if (!_0x1f14eb[0x0])
                return _0x3943ef[_0x30985c(0x190)]('insert\x20a\x20tiktok\x20video\x20link!');
            const _0x1d4756 = await _0x86d9ff('https://api.prabath-md.tech/api/tiktokdl?url=' + _0x1f14eb), _0xe20e1d = await _0x1d4756[_0x30985c(0x18d)]();
            await _0x3943ef[_0x30985c(0x190)](_0x30985c(0x19b));
            const _0x5f50a6 = _0xe20e1d['data'][_0x30985c(0x18f)];
            await _0x3e6ff6[_0x30985c(0x18a)](_0x3943ef[_0x30985c(0x196)], {
                'video': { 'url': _0x5f50a6 },
                'caption': _0x30985c(0x18e),
                'gifPlayback': ![]
            }, { 'quoted': _0x3943ef });
        } catch (_0x5dbf28) {
            console[_0x30985c(0x1a7)]('Error\x20fetching\x20video:', _0x5dbf28), await _0x3e6ff6[_0x30985c(0x18a)](_0x3943ef['from'], { 'text': 'Failed\x20to\x20retrieve\x20the\x20video.\x20Please\x20try\x20again\x20later.' }, { 'quoted': _0x3943ef });
        }
};
export default tikdown2;
function _0x2a9c(_0x590e2e, _0x1b8058) {
    const _0x29fa99 = _0x29fa();
    return _0x2a9c = function (_0x2a9c4c, _0x12b413) {
        _0x2a9c4c = _0x2a9c4c - 0x18a;
        let _0x2044fc = _0x29fa99[_0x2a9c4c];
        return _0x2044fc;
    }, _0x2a9c(_0x590e2e, _0x1b8058);
}
function _0x29fa() {
    const _0x25a159 = [
        '45288Tvtbcf',
        'startsWith',
        'body',
        '10Tvotuc',
        '724CvMnam',
        'tiktok2',
        '4269097MyohDl',
        '10435XmSDOu',
        'tt2',
        'error',
        'sendMessage',
        '8705048nrcySr',
        '23696739nsXrIA',
        'json',
        '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'no_wm',
        'reply',
        'trim',
        'toLowerCase',
        'match',
        '1963344uaxYHT',
        'tikdown2',
        'from',
        '467140HwiHSn',
        'tiktokdown2',
        'includes',
        'slice',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Downloading...',
        'length',
        '12aNjamV'
    ];
    _0x29fa = function () {
        return _0x25a159;
    };
    return _0x29fa();
}
