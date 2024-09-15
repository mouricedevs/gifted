(function (_0x3c7174, _0x275b42) {
    const _0x4c8a27 = _0x55a7, _0x3b54fb = _0x3c7174();
    while (!![]) {
        try {
            const _0x29bbc3 = parseInt(_0x4c8a27(0x167)) / 0x1 + -parseInt(_0x4c8a27(0x161)) / 0x2 * (parseInt(_0x4c8a27(0x172)) / 0x3) + -parseInt(_0x4c8a27(0x160)) / 0x4 + -parseInt(_0x4c8a27(0x16e)) / 0x5 + -parseInt(_0x4c8a27(0x151)) / 0x6 + -parseInt(_0x4c8a27(0x163)) / 0x7 + parseInt(_0x4c8a27(0x169)) / 0x8;
            if (_0x29bbc3 === _0x275b42)
                break;
            else
                _0x3b54fb['push'](_0x3b54fb['shift']());
        } catch (_0x410df2) {
            _0x3b54fb['push'](_0x3b54fb['shift']());
        }
    }
}(_0x15c2, 0x96783));
import _0x4c7180 from '../giftech.js';
import {
    writeFile,
    unlink
} from 'fs/promises';
import _0x1ef4ff from '../../set.cjs';
function _0x55a7(_0x125922, _0x49b625) {
    const _0x15c2b8 = _0x15c2();
    return _0x55a7 = function (_0x55a706, _0x26be03) {
        _0x55a706 = _0x55a706 - 0x151;
        let _0x3ec3c7 = _0x15c2b8[_0x55a706];
        return _0x3ec3c7;
    }, _0x55a7(_0x125922, _0x49b625);
}
function _0x15c2() {
    const _0x81ca56 = [
        'imageMessage',
        'find',
        '3490935axCNOe',
        'download',
        'error',
        'Error\x20setting\x20profile\x20picture:',
        '25791vVOkRx',
        'mtype',
        'admin',
        'length',
        'from',
        'sender',
        '*📛\x20YOU\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*',
        'startsWith',
        '1533090CBfBWu',
        'Profile\x20picture\x20Updated\x20Successfully.',
        'participants',
        'match',
        'setfullprofilepicgc',
        'reply',
        'toLowerCase',
        'quoted',
        'split',
        'groupMetadata',
        'slice',
        'Failed\x20to\x20download\x20Media.',
        'user',
        'w:profile:picture',
        'Send/Reply\x20with\x20an\x20image\x20to\x20set\x20your\x20profile\x20picture\x20',
        '287552xETBAP',
        '62JWBXFI',
        'isGroup',
        '8298430KNGsMO',
        'now',
        'image',
        '*📛\x20BOT\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*',
        '610712BOFBrf',
        'Error\x20setting\x20profile\x20picture.',
        '19865584YYqYiC',
        'body',
        '.png'
    ];
    _0x15c2 = function () {
        return _0x81ca56;
    };
    return _0x15c2();
}
const setProfilePictureGroup = async (_0x5335fd, _0x200ca4) => {
    const _0x221271 = _0x55a7, _0x59f5b7 = _0x5335fd[_0x221271(0x16a)][_0x221271(0x154)](/^[\\/!#.]/), _0x1345a8 = _0x59f5b7 ? _0x59f5b7[0x0] : '/', _0x4c22c1 = _0x5335fd[_0x221271(0x16a)][_0x221271(0x179)](_0x1345a8) ? _0x5335fd['body'][_0x221271(0x15b)](_0x1345a8[_0x221271(0x175)])[_0x221271(0x159)]('\x20')[0x0][_0x221271(0x157)]() : '', _0x46bd5a = _0x5335fd['body'][_0x221271(0x15b)](_0x1345a8[_0x221271(0x175)] + _0x4c22c1[_0x221271(0x175)])['trim'](), _0x49e0ef = [
            'setppfullgroup',
            _0x221271(0x155),
            'fullppgc'
        ];
    if (_0x49e0ef['includes'](_0x4c22c1)) {
        if (!_0x5335fd[_0x221271(0x162)])
            return _0x5335fd[_0x221271(0x156)]('*📛\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS*');
        const _0x3f040b = await _0x200ca4[_0x221271(0x15a)](_0x5335fd['from']), _0x193881 = _0x3f040b[_0x221271(0x153)], _0x597dbc = await _0x200ca4['decodeJid'](_0x200ca4[_0x221271(0x15d)]['id']), _0x33c13c = _0x193881[_0x221271(0x16d)](_0xa0e8e8 => _0xa0e8e8['id'] === _0x597dbc)?.[_0x221271(0x174)], _0x197ccd = _0x193881['find'](_0x348c9d => _0x348c9d['id'] === _0x5335fd[_0x221271(0x177)])?.[_0x221271(0x174)];
        if (!_0x33c13c)
            return _0x5335fd[_0x221271(0x156)](_0x221271(0x166));
        if (!_0x197ccd)
            return _0x5335fd[_0x221271(0x156)](_0x221271(0x178));
        if (!_0x5335fd['quoted'] || _0x5335fd[_0x221271(0x158)][_0x221271(0x173)] !== _0x221271(0x16c))
            return _0x5335fd[_0x221271(0x156)](_0x221271(0x15f) + (_0x1345a8 + _0x4c22c1));
        try {
            const _0x5402b0 = await _0x5335fd[_0x221271(0x158)][_0x221271(0x16f)]();
            if (!_0x5402b0)
                throw new Error(_0x221271(0x15c));
            const _0x2cbac0 = './' + Date[_0x221271(0x164)]() + _0x221271(0x16b);
            await writeFile(_0x2cbac0, _0x5402b0);
            try {
                const {img: _0x5be3ad} = await _0x4c7180(_0x5402b0);
                await _0x200ca4['query']({
                    'tag': 'iq',
                    'attrs': {
                        'to': _0x5335fd[_0x221271(0x176)],
                        'type': 'set',
                        'xmlns': _0x221271(0x15e)
                    },
                    'content': [{
                            'tag': 'picture',
                            'attrs': { 'type': _0x221271(0x165) },
                            'content': _0x5be3ad
                        }]
                }), _0x5335fd[_0x221271(0x156)](_0x221271(0x152));
            } catch (_0x2c2e79) {
                throw _0x2c2e79;
            } finally {
                await unlink(_0x2cbac0);
            }
        } catch (_0x3f2dd8) {
            console[_0x221271(0x170)](_0x221271(0x171), _0x3f2dd8), _0x5335fd['reply'](_0x221271(0x168));
        }
    }
};
export default setProfilePictureGroup;
