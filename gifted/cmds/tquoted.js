(function (_0x5375de, _0x57f79f) {
    const _0xd5dd20 = _0x58e8, _0x3bc272 = _0x5375de();
    while (!![]) {
        try {
            const _0x1059dc = parseInt(_0xd5dd20(0x7f)) / 0x1 * (-parseInt(_0xd5dd20(0x81)) / 0x2) + parseInt(_0xd5dd20(0x70)) / 0x3 + -parseInt(_0xd5dd20(0x6e)) / 0x4 + parseInt(_0xd5dd20(0x7b)) / 0x5 * (parseInt(_0xd5dd20(0x7d)) / 0x6) + parseInt(_0xd5dd20(0x80)) / 0x7 * (parseInt(_0xd5dd20(0x78)) / 0x8) + parseInt(_0xd5dd20(0x77)) / 0x9 * (-parseInt(_0xd5dd20(0x79)) / 0xa) + parseInt(_0xd5dd20(0x7a)) / 0xb;
            if (_0x1059dc === _0x57f79f)
                break;
            else
                _0x3bc272['push'](_0x3bc272['shift']());
        } catch (_0x40b15d) {
            _0x3bc272['push'](_0x3bc272['shift']());
        }
    }
}(_0x4c6c, 0xc682f));
const quotedMessage = async (_0x345c7e, _0x31e7f8) => {
    const _0x5348ea = _0x58e8;
    try {
        const _0x139977 = _0x345c7e['body'][_0x5348ea(0x74)](/^[/!#.]/), _0xdb58a5 = _0x139977 ? _0x139977[0x0] : '/', _0x4bd4da = _0x345c7e['body'][_0x5348ea(0x6f)](_0xdb58a5) ? _0x345c7e[_0x5348ea(0x82)]['slice'](_0xdb58a5[_0x5348ea(0x75)])[_0x5348ea(0x73)]()[_0x5348ea(0x6d)]() : '', _0x59dfcf = [
                'q',
                _0x5348ea(0x7c)
            ];
        if (_0x59dfcf[_0x5348ea(0x6c)](_0x4bd4da)) {
            if (!_0x345c7e['quoted'])
                return _0x345c7e[_0x5348ea(0x76)]('Please\x20reply\x20to\x20a\x20message!');
            if (!_0x345c7e[_0x5348ea(0x7c)] || !_0x345c7e[_0x5348ea(0x7c)][_0x5348ea(0x7c)])
                return _0x345c7e[_0x5348ea(0x76)]('The\x20replied\x20message\x20does\x20not\x20contain\x20a\x20reply');
            const _0x41c481 = await _0x345c7e[_0x5348ea(0x72)]();
            if (!_0x41c481)
                return _0x345c7e[_0x5348ea(0x76)](_0x5348ea(0x71));
            await _0x41c481['copyForward'](_0x345c7e[_0x5348ea(0x7e)], !![]);
        }
    } catch (_0x1aa125) {
        console['error'](_0x1aa125);
    }
};
function _0x4c6c() {
    const _0xcca946 = [
        '27719329KzrpIF',
        '174955iBWxBc',
        'quoted',
        '66FtEUQs',
        'from',
        '11161lNQzav',
        '9194052qtqmqj',
        '272yqITeV',
        'body',
        'includes',
        'toLowerCase',
        '5921316PjhXkN',
        'startsWith',
        '1655391PYxtmz',
        'The\x20replied\x20message\x20does\x20not\x20contain\x20a\x20reply',
        'getQuotedMsg',
        'trim',
        'match',
        'length',
        'reply',
        '1725741QpULUS',
        '8PwJzrI',
        '50TGJgLU'
    ];
    _0x4c6c = function () {
        return _0xcca946;
    };
    return _0x4c6c();
}
function _0x58e8(_0x3b3c73, _0x386d8c) {
    const _0x4c6c47 = _0x4c6c();
    return _0x58e8 = function (_0x58e86a, _0x19278c) {
        _0x58e86a = _0x58e86a - 0x6c;
        let _0x2932b5 = _0x4c6c47[_0x58e86a];
        return _0x2932b5;
    }, _0x58e8(_0x3b3c73, _0x386d8c);
}
export default quotedMessage;
