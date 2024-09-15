(function (_0x24629f, _0xd35004) {
    const _0x5d6dc6 = _0x1826, _0x29fb13 = _0x24629f();
    while (!![]) {
        try {
            const _0x65e900 = -parseInt(_0x5d6dc6(0xa8)) / 0x1 + -parseInt(_0x5d6dc6(0xa1)) / 0x2 + -parseInt(_0x5d6dc6(0x9f)) / 0x3 * (-parseInt(_0x5d6dc6(0xac)) / 0x4) + parseInt(_0x5d6dc6(0x8d)) / 0x5 + -parseInt(_0x5d6dc6(0x9d)) / 0x6 * (-parseInt(_0x5d6dc6(0x98)) / 0x7) + parseInt(_0x5d6dc6(0xa9)) / 0x8 + parseInt(_0x5d6dc6(0x92)) / 0x9 * (-parseInt(_0x5d6dc6(0x93)) / 0xa);
            if (_0x65e900 === _0xd35004)
                break;
            else
                _0x29fb13['push'](_0x29fb13['shift']());
        } catch (_0x4d1589) {
            _0x29fb13['push'](_0x29fb13['shift']());
        }
    }
}(_0x1584, 0xa422f));
import _0x213809 from '../giftech.js';
import {
    writeFile,
    unlink
} from 'fs/promises';
function _0x1584() {
    const _0x1c7075 = [
        'query',
        'length',
        'trim',
        '35oqbaoU',
        'Send/Reply\x20with\x20an\x20image\x20to\x20set\x20your\x20profile\x20picture\x20',
        'user',
        'decodeJid',
        'reply',
        '725766duAWNV',
        'image',
        '3845034fhGLAg',
        'fullpp',
        '2662732glgoXk',
        'Failed\x20to\x20download\x20Media.',
        'toLowerCase',
        'picture',
        '*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*',
        'slice',
        'quoted',
        '766324OrLSjf',
        '8307000GVHTRZ',
        'body',
        '@s.whatsapp.net',
        '4JMYJyq',
        'mtype',
        'startsWith',
        'match',
        'download',
        'w:profile:picture',
        'Error\x20setting\x20profile\x20picture.',
        'now',
        'setppfull',
        'error',
        '3536780MmwVnM',
        'split',
        'OWNER_NUMBER',
        'includes',
        'Profile\x20picture\x20Updated\x20Successfully.',
        '15489dpDuAG',
        '5010xYaABt',
        'Error\x20setting\x20profile\x20picture:'
    ];
    _0x1584 = function () {
        return _0x1c7075;
    };
    return _0x1584();
}
import _0x2e3138 from '../../set.cjs';
const setProfilePicture = async (_0x33c208, _0x2ff1fa) => {
    const _0x4a02d2 = _0x1826, _0xf92c9e = await _0x2ff1fa[_0x4a02d2(0x9b)](_0x2ff1fa[_0x4a02d2(0x9a)]['id']), _0x1aea35 = [
            _0xf92c9e,
            _0x2e3138[_0x4a02d2(0x8f)] + _0x4a02d2(0xab)
        ][_0x4a02d2(0x90)](_0x33c208['sender']), _0x38b83f = _0x33c208[_0x4a02d2(0xaa)][_0x4a02d2(0xaf)](/^[\\/!#.]/), _0x250c25 = _0x38b83f ? _0x38b83f[0x0] : '/', _0x406c84 = _0x33c208[_0x4a02d2(0xaa)][_0x4a02d2(0xae)](_0x250c25) ? _0x33c208[_0x4a02d2(0xaa)][_0x4a02d2(0xa6)](_0x250c25[_0x4a02d2(0x96)])[_0x4a02d2(0x8e)]('\x20')[0x0][_0x4a02d2(0xa3)]() : '', _0x235368 = _0x33c208[_0x4a02d2(0xaa)]['slice'](_0x250c25[_0x4a02d2(0x96)] + _0x406c84[_0x4a02d2(0x96)])[_0x4a02d2(0x97)](), _0x2aa0c9 = [
            _0x4a02d2(0xb4),
            'setfullprofilepic',
            _0x4a02d2(0xa0),
            'setppbot'
        ];
    if (_0x2aa0c9[_0x4a02d2(0x90)](_0x406c84)) {
        if (!_0x1aea35)
            return _0x33c208[_0x4a02d2(0x9c)](_0x4a02d2(0xa5));
        if (!_0x33c208['quoted'] || _0x33c208['quoted'][_0x4a02d2(0xad)] !== 'imageMessage')
            return _0x33c208[_0x4a02d2(0x9c)](_0x4a02d2(0x99) + (_0x250c25 + _0x406c84));
        try {
            const _0x15d630 = await _0x33c208[_0x4a02d2(0xa7)][_0x4a02d2(0xb0)]();
            if (!_0x15d630)
                throw new Error(_0x4a02d2(0xa2));
            const _0xb03da7 = './' + Date[_0x4a02d2(0xb3)]() + '.png';
            await writeFile(_0xb03da7, _0x15d630);
            try {
                const {img: _0x29d3ce} = await _0x213809(_0x15d630);
                await _0x2ff1fa[_0x4a02d2(0x95)]({
                    'tag': 'iq',
                    'attrs': {
                        'to': _0xf92c9e,
                        'type': 'set',
                        'xmlns': _0x4a02d2(0xb1)
                    },
                    'content': [{
                            'tag': _0x4a02d2(0xa4),
                            'attrs': { 'type': _0x4a02d2(0x9e) },
                            'content': _0x29d3ce
                        }]
                }), _0x33c208[_0x4a02d2(0x9c)](_0x4a02d2(0x91));
            } catch (_0x588ada) {
                throw _0x588ada;
            } finally {
                await unlink(_0xb03da7);
            }
        } catch (_0x33e463) {
            console[_0x4a02d2(0xb5)](_0x4a02d2(0x94), _0x33e463), _0x33c208[_0x4a02d2(0x9c)](_0x4a02d2(0xb2));
        }
    }
};
function _0x1826(_0x18d6dc, _0x4d517f) {
    const _0x1584e1 = _0x1584();
    return _0x1826 = function (_0x182634, _0x4d072e) {
        _0x182634 = _0x182634 - 0x8d;
        let _0x3e3a9c = _0x1584e1[_0x182634];
        return _0x3e3a9c;
    }, _0x1826(_0x18d6dc, _0x4d517f);
}
export default setProfilePicture;
