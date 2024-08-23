function _0x1e22() {
    const _0xca4374 = [
        '1818360wSJTzc',
        'trim',
        'sendMessage',
        '4sGIJci',
        'Hello\x20_*',
        'vote',
        'Error\x20from\x20Gifted\x20API:',
        'match',
        'slice',
        'votes',
        'length',
        'reply',
        '2330805xDNctE',
        'startsWith',
        'Failed\x20with\x20an\x20error\x20from\x20Gifted\x20API.\x20Please\x20try\x20again\x20later.',
        '272802iLcCYM',
        'React',
        'from',
        '14mmWbmJ',
        'pushName',
        'includes',
        '*_\x20,\x20Please\x20use\x20the\x20example:\x20*.poll\x20Do\x20you\x20love\x20Gifted-Md:Yes,\x20No,\x20Not\x20Sure*',
        '1280757fPylVj',
        'split',
        'map',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20generating\x20your\x20poll...',
        'body',
        '9564192xJlCFP',
        'polls',
        'Incorrect\x20format.\x0aExample:\x20*.poll\x20Do\x20you\x20love\x20Gifted-Md:Yes,\x20No,\x20Not\x20Sure*',
        '707868fzQOCW',
        'polll',
        '1614376gKajpr'
    ];
    _0x1e22 = function () {
        return _0xca4374;
    };
    return _0x1e22();
}
(function (_0x3bc771, _0x494d72) {
    const _0x29a8be = _0x1c83, _0x2a9020 = _0x3bc771();
    while (!![]) {
        try {
            const _0x2544a5 = -parseInt(_0x29a8be(0x1c7)) / 0x1 + -parseInt(_0x29a8be(0x1d6)) / 0x2 + parseInt(_0x29a8be(0x1ce)) / 0x3 + -parseInt(_0x29a8be(0x1dc)) / 0x4 * (parseInt(_0x29a8be(0x1c4)) / 0x5) + parseInt(_0x29a8be(0x1d9)) / 0x6 + -parseInt(_0x29a8be(0x1ca)) / 0x7 * (parseInt(_0x29a8be(0x1d8)) / 0x8) + parseInt(_0x29a8be(0x1d3)) / 0x9;
            if (_0x2544a5 === _0x494d72)
                break;
            else
                _0x2a9020['push'](_0x2a9020['shift']());
        } catch (_0x11a299) {
            _0x2a9020['push'](_0x2a9020['shift']());
        }
    }
}(_0x1e22, 0x484f0));
const Poll = async (_0x1a5a06, _0x4d4e40) => {
    const _0x57e968 = _0x1c83, _0x2160ec = _0x1a5a06[_0x57e968(0x1d2)][_0x57e968(0x1bf)](/^[\\/!#.]/), _0x179ac4 = _0x2160ec ? _0x2160ec[0x0] : '/', _0x3c5a70 = _0x1a5a06[_0x57e968(0x1d2)][_0x57e968(0x1c5)](_0x179ac4) ? _0x1a5a06[_0x57e968(0x1d2)][_0x57e968(0x1c0)](_0x179ac4[_0x57e968(0x1c2)])[_0x57e968(0x1cf)]('\x20')[0x0]['toLowerCase']() : '', _0x2741ad = _0x1a5a06[_0x57e968(0x1d2)][_0x57e968(0x1c0)](_0x179ac4[_0x57e968(0x1c2)] + _0x3c5a70[_0x57e968(0x1c2)])[_0x57e968(0x1da)](), _0x2647a3 = [
            'poll',
            _0x57e968(0x1d7),
            _0x57e968(0x1de),
            _0x57e968(0x1c1),
            _0x57e968(0x1d4)
        ];
    if (_0x2647a3[_0x57e968(0x1cc)](_0x3c5a70)) {
        if (!_0x2741ad) {
            await _0x1a5a06[_0x57e968(0x1c3)](_0x57e968(0x1dd) + _0x1a5a06[_0x57e968(0x1cb)] + _0x57e968(0x1cd));
            return;
        }
        try {
            await _0x1a5a06['React']('🕘'), await _0x1a5a06[_0x57e968(0x1c3)](_0x57e968(0x1d1));
            let [_0x4540b9, _0x2994f7] = _0x2741ad['split'](':');
            if (_0x2741ad[_0x57e968(0x1cf)](':')[_0x57e968(0x1c2)] < 0x2)
                return _0x1a5a06[_0x57e968(0x1c3)](_0x57e968(0x1d5));
            let _0x3661ae = _0x2994f7[_0x57e968(0x1cf)](',')[_0x57e968(0x1d0)](_0x489313 => _0x489313[_0x57e968(0x1da)]());
            await _0x4d4e40[_0x57e968(0x1db)](_0x1a5a06[_0x57e968(0x1c9)], {
                'poll': {
                    'name': _0x4540b9['trim'](),
                    'values': _0x3661ae
                }
            }, { 'quoted': _0x1a5a06 }), await _0x1a5a06['React']('✅');
        } catch (_0x4e9666) {
            console['error'](_0x57e968(0x1be), _0x4e9666), await _0x1a5a06[_0x57e968(0x1c8)]('❌'), await _0x4d4e40['sendMessage'](_0x1a5a06[_0x57e968(0x1c9)], { 'text': _0x57e968(0x1c6) }, { 'quoted': _0x1a5a06 });
        }
    }
};
function _0x1c83(_0x50495a, _0xed509d) {
    const _0x1e22cf = _0x1e22();
    return _0x1c83 = function (_0x1c837d, _0xf211af) {
        _0x1c837d = _0x1c837d - 0x1be;
        let _0x14469e = _0x1e22cf[_0x1c837d];
        return _0x14469e;
    }, _0x1c83(_0x50495a, _0xed509d);
}
export default Poll;
