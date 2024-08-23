function _0x10f8() {
    const _0x155eb3 = [
        'Parsed\x20JSON:',
        '1659290nzBANx',
        'Content-Length\x20exceeds\x20the\x20limit:\x20',
        '4073451WpTMVu',
        '16pYROBs',
        'toLowerCase',
        'from',
        'parse',
        '2563GGZcrH',
        'message',
        '472CNYLwz',
        'Start\x20the\x20*URL*\x20with\x20http://\x20or\x20https://',
        'searchParams',
        'file',
        '4306hRjoYn',
        'length',
        '12380418oKguPz',
        'includes',
        'test',
        '193OzGypn',
        'get',
        'match',
        'stringify',
        'toString',
        'trim',
        'origin',
        '46510OVFVYc',
        'split',
        'arrayBuffer',
        'headers',
        'log',
        'body',
        'reply',
        'content-type',
        'sendMedia',
        'slice',
        'api',
        '7973vamNjx',
        '641928Skdtqg',
        'content-length',
        'error',
        'pathname'
    ];
    _0x10f8 = function () {
        return _0x155eb3;
    };
    return _0x10f8();
}
(function (_0x234151, _0x8490e8) {
    const _0x313e1f = _0xc693, _0x429aa1 = _0x234151();
    while (!![]) {
        try {
            const _0x231736 = parseInt(_0x313e1f(0xa2)) / 0x1 * (parseInt(_0x313e1f(0x9d)) / 0x2) + parseInt(_0x313e1f(0x92)) / 0x3 + -parseInt(_0x313e1f(0x93)) / 0x4 * (parseInt(_0x313e1f(0x90)) / 0x5) + -parseInt(_0x313e1f(0x8b)) / 0x6 + -parseInt(_0x313e1f(0x8a)) / 0x7 * (-parseInt(_0x313e1f(0x99)) / 0x8) + parseInt(_0x313e1f(0x9f)) / 0x9 + -parseInt(_0x313e1f(0xa9)) / 0xa * (parseInt(_0x313e1f(0x97)) / 0xb);
            if (_0x231736 === _0x8490e8)
                break;
            else
                _0x429aa1['push'](_0x429aa1['shift']());
        } catch (_0x5a92d5) {
            _0x429aa1['push'](_0x429aa1['shift']());
        }
    }
}(_0x10f8, 0xaa6be));
import _0x3c3b64 from 'node-fetch';
const fetchData = async (_0x4d64df, _0xc1f35a) => {
    const _0x20f669 = _0xc693, _0x4c1c4d = _0x4d64df[_0x20f669(0xae)][_0x20f669(0xa4)](/^[\\/!#.]/), _0x2e2911 = _0x4c1c4d ? _0x4c1c4d[0x0] : '/', _0x266341 = _0x4d64df[_0x20f669(0xae)]['startsWith'](_0x2e2911) ? _0x4d64df[_0x20f669(0xae)][_0x20f669(0xb2)](_0x2e2911['length'])[_0x20f669(0xaa)]('\x20')[0x0][_0x20f669(0x94)]() : '', _0x17ca86 = _0x4d64df['body'][_0x20f669(0xb2)](_0x2e2911[_0x20f669(0x9e)] + _0x266341[_0x20f669(0x9e)])[_0x20f669(0xa7)](), _0x158e1d = [
            'fetch',
            _0x20f669(0xa3),
            _0x20f669(0x89)
        ];
    if (_0x158e1d[_0x20f669(0xa0)](_0x266341)) {
        if (!/^https?:\/\//[_0x20f669(0xa1)](_0x17ca86))
            return _0x4d64df[_0x20f669(0xaf)](_0x20f669(0x9a));
        try {
            const _0x42b8c7 = new URL(_0x17ca86), _0x5db4d8 = '' + _0x42b8c7[_0x20f669(0xa8)] + _0x42b8c7[_0x20f669(0x8e)] + '?' + _0x42b8c7[_0x20f669(0x9b)][_0x20f669(0xa6)](), _0xd319ee = await _0x3c3b64(_0x5db4d8), _0x23f775 = _0xd319ee[_0x20f669(0xac)][_0x20f669(0xa3)](_0x20f669(0x8c));
            if (_0x23f775 && _0x23f775 > 0x64 * 0x400 * 0x400 * 0x400)
                return _0x4d64df['reply'](_0x20f669(0x91) + _0x23f775);
            const _0x39f9b9 = _0xd319ee[_0x20f669(0xac)][_0x20f669(0xa3)](_0x20f669(0xb0));
            if (!/text|json/['test'](_0x39f9b9)) {
                await _0xc1f35a[_0x20f669(0xb1)](_0x4d64df[_0x20f669(0x95)], _0x5db4d8, _0x20f669(0x9c), '>\x20>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*', _0x4d64df);
                return;
            }
            let _0x4ef855 = Buffer['from'](await _0xd319ee[_0x20f669(0xab)]());
            try {
                console[_0x20f669(0xad)](_0x20f669(0x8f), JSON[_0x20f669(0x96)](_0x4ef855)), _0x4ef855 = JSON[_0x20f669(0xa5)](JSON[_0x20f669(0x96)](_0x4ef855));
            } catch (_0x49b47d) {
                console[_0x20f669(0x8d)]('Error\x20parsing\x20JSON:', _0x49b47d), _0x4ef855 = _0x4ef855['toString']();
            } finally {
                _0x4d64df[_0x20f669(0xaf)](_0x4ef855[_0x20f669(0xb2)](0x0, 0x10000));
            }
        } catch (_0x5192c9) {
            console[_0x20f669(0x8d)]('Error\x20fetching\x20data:', _0x5192c9[_0x20f669(0x98)]), _0x4d64df['reply']('Error\x20fetching\x20data.');
        }
    }
};
function _0xc693(_0x45316b, _0x21118d) {
    const _0x10f859 = _0x10f8();
    return _0xc693 = function (_0xc69372, _0x377f77) {
        _0xc69372 = _0xc69372 - 0x89;
        let _0x4ea7ed = _0x10f859[_0xc69372];
        return _0x4ea7ed;
    }, _0xc693(_0x45316b, _0x21118d);
}
export default fetchData;
