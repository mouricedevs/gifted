(function (_0x8d3da7, _0x43389b) {
    const _0x36db56 = _0x3679, _0x44d68f = _0x8d3da7();
    while (!![]) {
        try {
            const _0x85055d = parseInt(_0x36db56(0x110)) / 0x1 + parseInt(_0x36db56(0x104)) / 0x2 + -parseInt(_0x36db56(0xfc)) / 0x3 * (-parseInt(_0x36db56(0x10c)) / 0x4) + -parseInt(_0x36db56(0x105)) / 0x5 + parseInt(_0x36db56(0x109)) / 0x6 + -parseInt(_0x36db56(0x107)) / 0x7 + -parseInt(_0x36db56(0x112)) / 0x8;
            if (_0x85055d === _0x43389b)
                break;
            else
                _0x44d68f['push'](_0x44d68f['shift']());
        } catch (_0x4efc91) {
            _0x44d68f['push'](_0x44d68f['shift']());
        }
    }
}(_0x544e, 0x2a748));
import _0x4964c7 from 'node-fetch';
function _0x3679(_0x1daa21, _0x3a83fe) {
    const _0x544e65 = _0x544e();
    return _0x3679 = function (_0x3679a3, _0x11ba5e) {
        _0x3679a3 = _0x3679a3 - 0xfc;
        let _0x10b22a = _0x544e65[_0x3679a3];
        return _0x10b22a;
    }, _0x3679(_0x1daa21, _0x3a83fe);
}
function _0x544e() {
    const _0x161981 = [
        '1762376VcQcpp',
        'shizo',
        '3EWuLAY',
        'slice',
        'body',
        'truth',
        'https://shizoapi.onrender.com/api/texts/truth?apikey=',
        'Error\x20fetching\x20quotes:',
        'sender',
        'truths',
        '530444eDNpSn',
        '1002375sWFANu',
        'startsWith',
        '1156414rHXnQE',
        'json',
        '1328616ZJxWSL',
        'sendMessage',
        'result',
        '740492izwKvj',
        'text',
        'from',
        'Failed\x20to\x20retrieve\x20quotes.\x20Please\x20try\x20again\x20later.',
        '88089fZmJAg',
        'error'
    ];
    _0x544e = function () {
        return _0x161981;
    };
    return _0x544e();
}
const truth = async (_0x2b1dc1, _0x2216b0) => {
    const _0x4d3b1c = _0x3679, _0x55956c = _0x2b1dc1[_0x4d3b1c(0xfe)]['match'](/^[\\/!#.]/), _0x28228a = _0x55956c ? _0x55956c[0x0] : '/', _0xee46b4 = _0x2b1dc1[_0x4d3b1c(0xfe)][_0x4d3b1c(0x106)](_0x28228a) ? _0x2b1dc1[_0x4d3b1c(0xfe)][_0x4d3b1c(0xfd)](_0x28228a['length'])['split']('\x20')[0x0]['toLowerCase']() : '', _0x4f9a08 = [
            _0x4d3b1c(0xff),
            _0x4d3b1c(0x103)
        ];
    if (_0x4f9a08['includes'](_0xee46b4))
        try {
            const _0x4bd8a0 = _0x4d3b1c(0x113), _0x1aeb2a = await _0x4964c7(_0x4d3b1c(0x100) + _0x4bd8a0);
            if (!_0x1aeb2a['ok'])
                throw new Error('Failed\x20to\x20fetch\x20quotes:\x20' + await _0x1aeb2a[_0x4d3b1c(0x10d)]());
            const _0x73dffe = await _0x1aeb2a[_0x4d3b1c(0x108)](), _0x4ca74f = _0x73dffe[_0x4d3b1c(0x10b)];
            await _0x2216b0[_0x4d3b1c(0x10a)](_0x2b1dc1[_0x4d3b1c(0x10e)], {
                'text': _0x4ca74f,
                'mentions': [_0x2b1dc1[_0x4d3b1c(0x102)]]
            }, { 'quoted': _0x2b1dc1 });
        } catch (_0x46be6c) {
            console[_0x4d3b1c(0x111)](_0x4d3b1c(0x101), _0x46be6c), await _0x2216b0[_0x4d3b1c(0x10a)](_0x2b1dc1[_0x4d3b1c(0x10e)], { 'text': _0x4d3b1c(0x10f) });
        }
};
export default truth;
