(function (_0x4328be, _0xbd5b84) {
    const _0x1d42a2 = _0x2fcb, _0xb8ee52 = _0x4328be();
    while (!![]) {
        try {
            const _0x49d02d = parseInt(_0x1d42a2(0xc8)) / 0x1 + parseInt(_0x1d42a2(0xc9)) / 0x2 * (-parseInt(_0x1d42a2(0xb8)) / 0x3) + -parseInt(_0x1d42a2(0xc7)) / 0x4 + -parseInt(_0x1d42a2(0xc3)) / 0x5 * (parseInt(_0x1d42a2(0xac)) / 0x6) + -parseInt(_0x1d42a2(0xce)) / 0x7 + parseInt(_0x1d42a2(0xb0)) / 0x8 + parseInt(_0x1d42a2(0xca)) / 0x9;
            if (_0x49d02d === _0xbd5b84)
                break;
            else
                _0xb8ee52['push'](_0xb8ee52['shift']());
        } catch (_0x3573bc) {
            _0xb8ee52['push'](_0xb8ee52['shift']());
        }
    }
}(_0x2db2, 0x631b4));
function _0x2fcb(_0x3d38be, _0x4b402a) {
    const _0x2db2bf = _0x2db2();
    return _0x2fcb = function (_0x2fcb01, _0x1d9e1e) {
        _0x2fcb01 = _0x2fcb01 - 0xaa;
        let _0x3d472a = _0x2db2bf[_0x2fcb01];
        return _0x3d472a;
    }, _0x2fcb(_0x3d38be, _0x4b402a);
}
import _0x102110 from 'node-fetch';
const gitclone = async (_0x2ffce8, _0x47fc07) => {
    const _0x2f37ae = _0x2fcb, _0xebde6e = _0x2ffce8[_0x2f37ae(0xb6)][_0x2f37ae(0xb7)](/^[\\/!#.]/), _0x170bee = _0xebde6e ? _0xebde6e[0x0] : '/', _0x558692 = _0x2ffce8[_0x2f37ae(0xb6)]['startsWith'](_0x170bee) ? _0x2ffce8[_0x2f37ae(0xb6)][_0x2f37ae(0xab)](_0x170bee['length'])[_0x2f37ae(0xc6)]('\x20')[0x0][_0x2f37ae(0xad)]() : '', _0xb6ba04 = _0x2ffce8['body'][_0x2f37ae(0xab)](_0x170bee['length'] + _0x558692['length'])[_0x2f37ae(0xb5)](), _0x157c4d = [
            _0x2f37ae(0xb3),
            'git-clone',
            'repodl',
            _0x2f37ae(0xd0),
            _0x2f37ae(0xb2),
            _0x2f37ae(0xb9)
        ];
    if (_0x157c4d[_0x2f37ae(0xbd)](_0x558692))
        try {
            await _0x2ffce8[_0x2f37ae(0xbc)]('🕘'), await _0x2ffce8['reply'](_0x2f37ae(0xbe));
            if (!_0xb6ba04[_0x2f37ae(0xbd)](_0x2f37ae(0xae)))
                return _0x2ffce8['reply'](_0x2f37ae(0xcb) + _0x2ffce8[_0x2f37ae(0xaa)] + _0x2f37ae(0xc4));
            const _0x5ec288 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i, _0x4059d1 = _0xb6ba04[_0x2f37ae(0xb7)](_0x5ec288);
            if (!_0x4059d1)
                return _0x2ffce8[_0x2f37ae(0xba)](_0x2f37ae(0xcf));
            let [, _0x417959, _0x1ebbbe] = _0x4059d1;
            _0x1ebbbe = _0x1ebbbe[_0x2f37ae(0xb4)](/.git$/, '');
            const _0x5a0854 = _0x2f37ae(0xc2) + _0x417959 + '/' + _0x1ebbbe + '/zipball', _0x2dc982 = await _0x102110(_0x5a0854, { 'method': _0x2f37ae(0xc5) });
            if (!_0x2dc982['ok'])
                throw new Error(_0x2f37ae(0xcc));
            const _0x44d343 = _0x2dc982[_0x2f37ae(0xc1)][_0x2f37ae(0xbf)](_0x2f37ae(0xb1))['match'](/attachment; filename=(.*)/)[0x1];
            await _0x47fc07[_0x2f37ae(0xbb)](_0x2ffce8[_0x2f37ae(0xaf)], {
                'document': { 'url': _0x5a0854 },
                'fileName': '' + _0x44d343,
                'mimetype': 'application/zip'
            }, { 'quoted': _0x2ffce8 }), await _0x2ffce8['React']('✅'), await _0x2ffce8[_0x2f37ae(0xba)]('*Download\x20Success...*');
        } catch (_0x45f8bc) {
            console[_0x2f37ae(0xcd)]('Error\x20fetching\x20repo:', _0x45f8bc), await _0x47fc07[_0x2f37ae(0xbb)](_0x2ffce8[_0x2f37ae(0xaf)], { 'text': _0x2f37ae(0xc0) }, { 'quoted': _0x2ffce8 });
        }
};
function _0x2db2() {
    const _0x265aea = [
        '95luUCxl',
        '*_\x0aPlease\x20provide\x20a\x20valid\x20GitHub\x20repo\x20link,\x20e.g\x0a\x20*Usage:*\x20.gitclone\x20https://github.com/mouricedevs/gifted-md',
        'HEAD',
        'split',
        '1753584lGCpzs',
        '648618qyQmGb',
        '4atfMvd',
        '10401516mHoyyl',
        'Null!!!!!!\x0aHello\x20_*',
        'Failed\x20to\x20fetch\x20repo.',
        'error',
        '3835475PbAvnT',
        'Failed\x20to\x20parse\x20GitHub\x20repo\x20link.\x20Please\x20provide\x20a\x20valid\x20link.',
        'repoclone',
        'pushName',
        'slice',
        '170868MZuGcE',
        'toLowerCase',
        'github.com',
        'from',
        '2237336MRCkwk',
        'content-disposition',
        'repo-clone',
        'gitclone',
        'replace',
        'trim',
        'body',
        'match',
        '225999kxNagb',
        'repo-dl',
        'reply',
        'sendMessage',
        'React',
        'includes',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Downloading\x20your\x20Repo\x20Clone\x20Request...',
        'get',
        'Failed\x20to\x20retrieve\x20the\x20repo.\x20Please\x20try\x20again\x20later.',
        'headers',
        'https://api.github.com/repos/'
    ];
    _0x2db2 = function () {
        return _0x265aea;
    };
    return _0x2db2();
}
export default gitclone;
