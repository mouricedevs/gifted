(function (_0x4b02bc, _0x39d746) {
    const _0x227e40 = _0x3468, _0x40ace0 = _0x4b02bc();
    while (!![]) {
        try {
            const _0x10bd86 = parseInt(_0x227e40(0x105)) / 0x1 * (-parseInt(_0x227e40(0xf3)) / 0x2) + -parseInt(_0x227e40(0xe6)) / 0x3 * (-parseInt(_0x227e40(0xf8)) / 0x4) + parseInt(_0x227e40(0xfd)) / 0x5 + parseInt(_0x227e40(0xe7)) / 0x6 * (parseInt(_0x227e40(0xfb)) / 0x7) + parseInt(_0x227e40(0xf1)) / 0x8 + -parseInt(_0x227e40(0xef)) / 0x9 + -parseInt(_0x227e40(0xf6)) / 0xa * (parseInt(_0x227e40(0xfa)) / 0xb);
            if (_0x10bd86 === _0x39d746)
                break;
            else
                _0x40ace0['push'](_0x40ace0['shift']());
        } catch (_0x5cfacb) {
            _0x40ace0['push'](_0x40ace0['shift']());
        }
    }
}(_0x3f47, 0xb600c));
function _0x3f47() {
    const _0x17c8f3 = [
        '11006083RZracO',
        '19341wRzfIV',
        'https://opentdb.com/api.php?amount=1&type=multiple',
        '1332010ehPAYl',
        'toLowerCase',
        'Fetching...',
        'slice',
        'includes',
        'results',
        'join',
        'json',
        '1195659jovSPJ',
        'startsWith',
        'sort',
        'Invalid\x20response\x20format\x20from\x20the\x20trivia\x20API.',
        'Error\x20from\x20Gifted\x20API:',
        'length',
        'question',
        '279CbXUrA',
        '2988rCahVG',
        'incorrect_answers',
        'reply',
        'body',
        '\x0a\x0aI\x20will\x20send\x20the\x20correct\x20answer\x20in\x2010\x20seconds...',
        'from',
        'Failed\x20with\x20error\x20from\x20Gifted\x20API.\x20Please\x20try\x20again\x20later.',
        'The\x20correct\x20answer\x20is:\x20',
        '10585638YHKcUm',
        'correct_answer',
        '11829824uczmnB',
        'split',
        '2sVUDfj',
        'trivia',
        'Invalid\x20response\x20from\x20the\x20trivia\x20API.\x20Status\x20code:\x20',
        '10CNJaWF',
        'status',
        '42872wGvjUk',
        'sendMessage'
    ];
    _0x3f47 = function () {
        return _0x17c8f3;
    };
    return _0x3f47();
}
import _0x483c5d from 'node-fetch';
const Trivia = async (_0x9a4e5b, _0x16d9ac) => {
    const _0x1f686a = _0x3468, _0x113360 = _0x9a4e5b[_0x1f686a(0xea)]['match'](/^[\\/!#.]/), _0x141415 = _0x113360 ? _0x113360[0x0] : '/', _0x2d46b9 = _0x9a4e5b[_0x1f686a(0xea)][_0x1f686a(0x106)](_0x141415) ? _0x9a4e5b['body']['slice'](_0x141415[_0x1f686a(0x10a)])[_0x1f686a(0xf2)]('\x20')[0x0][_0x1f686a(0xfe)]() : '', _0x257d83 = _0x9a4e5b[_0x1f686a(0xea)][_0x1f686a(0x100)](_0x141415[_0x1f686a(0x10a)] + _0x2d46b9[_0x1f686a(0x10a)])['trim'](), _0x4c564e = [
            _0x1f686a(0xf4),
            'triviaquiz'
        ];
    if (_0x4c564e[_0x1f686a(0x101)](_0x2d46b9))
        try {
            await _0x9a4e5b['React']('🕘'), await _0x9a4e5b[_0x1f686a(0xe9)](_0x1f686a(0xff));
            const _0x2e4786 = await _0x483c5d(_0x1f686a(0xfc));
            if (_0x2e4786[_0x1f686a(0xf7)] !== 0xc8)
                return _0x9a4e5b[_0x1f686a(0xe9)](_0x1f686a(0xf5) + _0x2e4786[_0x1f686a(0xf7)]);
            const _0x580cc5 = await _0x2e4786[_0x1f686a(0x104)]();
            if (_0x580cc5 && _0x580cc5[_0x1f686a(0x102)] && _0x580cc5[_0x1f686a(0x102)][0x0]) {
                const _0xfeb2ba = _0x580cc5[_0x1f686a(0x102)][0x0], _0x29d7e7 = _0xfeb2ba[_0x1f686a(0x10b)], _0x613d2c = _0xfeb2ba[_0x1f686a(0xf0)], _0x21e4f7 = [
                        ..._0xfeb2ba[_0x1f686a(0xe8)],
                        _0x613d2c
                    ][_0x1f686a(0x107)](), _0x32daed = _0x21e4f7['map']((_0x3fc274, _0x5e797b) => _0x5e797b + 0x1 + '.\x20' + _0x3fc274)[_0x1f686a(0x103)]('\x0a');
                await _0x16d9ac[_0x1f686a(0xf9)](_0x9a4e5b['from'], { 'text': 'Here\x27s\x20a\x20trivia\x20question\x20for\x20you:\x20\x0a\x0a' + _0x29d7e7 + '\x0a\x0a' + _0x32daed + _0x1f686a(0xeb) }, { 'quoted': _0x9a4e5b }), setTimeout(async () => {
                    const _0x530c3e = _0x1f686a;
                    await _0x16d9ac[_0x530c3e(0xf9)](_0x9a4e5b[_0x530c3e(0xec)], { 'text': _0x530c3e(0xee) + _0x613d2c }, { 'quoted': _0x9a4e5b });
                }, 0x2710);
            } else
                throw new Error(_0x1f686a(0x108));
            await _0x9a4e5b['React']('✅');
        } catch (_0x51ef5c) {
            console['error'](_0x1f686a(0x109), _0x51ef5c), await _0x16d9ac['sendMessage'](_0x9a4e5b[_0x1f686a(0xec)], { 'text': _0x1f686a(0xed) });
        }
};
function _0x3468(_0xc01224, _0x1739ab) {
    const _0x3f478a = _0x3f47();
    return _0x3468 = function (_0x346815, _0x2656bd) {
        _0x346815 = _0x346815 - 0xe6;
        let _0x3c3f93 = _0x3f478a[_0x346815];
        return _0x3c3f93;
    }, _0x3468(_0xc01224, _0x1739ab);
}
export default Trivia;
