(function (_0x442def, _0x4497b2) {
    const _0x191d7d = _0x7fb3, _0x37f4a6 = _0x442def();
    while (!![]) {
        try {
            const _0x192e47 = parseInt(_0x191d7d(0x1ed)) / 0x1 * (parseInt(_0x191d7d(0x1f8)) / 0x2) + -parseInt(_0x191d7d(0x1f7)) / 0x3 + -parseInt(_0x191d7d(0x1f5)) / 0x4 * (parseInt(_0x191d7d(0x1e1)) / 0x5) + parseInt(_0x191d7d(0x201)) / 0x6 * (-parseInt(_0x191d7d(0x204)) / 0x7) + parseInt(_0x191d7d(0x1ee)) / 0x8 * (parseInt(_0x191d7d(0x1fc)) / 0x9) + parseInt(_0x191d7d(0x1fa)) / 0xa + parseInt(_0x191d7d(0x1fd)) / 0xb;
            if (_0x192e47 === _0x4497b2)
                break;
            else
                _0x37f4a6['push'](_0x37f4a6['shift']());
        } catch (_0x3276e3) {
            _0x37f4a6['push'](_0x37f4a6['shift']());
        }
    }
}(_0x7651, 0xcd183));
import _0x5657ef from 'axios';
const sleep = _0x11a52a => new Promise(_0x44e1d9 => setTimeout(_0x44e1d9, _0x11a52a)), imageCommand = async (_0x334f90, _0x144ab1) => {
        const _0x583a43 = _0x7fb3, _0x3a2a2f = _0x334f90[_0x583a43(0x1ec)][_0x583a43(0x1e5)](/^[\\/!#.]/), _0xb44cc2 = _0x3a2a2f ? _0x3a2a2f[0x0] : '/', _0x451c62 = _0x334f90['body'][_0x583a43(0x202)](_0xb44cc2) ? _0x334f90[_0x583a43(0x1ec)][_0x583a43(0x1f3)](_0xb44cc2[_0x583a43(0x1e4)])[_0x583a43(0x1fe)]('\x20')[0x0][_0x583a43(0x1f2)]() : '';
        let _0x34d427 = _0x334f90[_0x583a43(0x1ec)][_0x583a43(0x1f3)](_0xb44cc2['length'] + _0x451c62[_0x583a43(0x1e4)])[_0x583a43(0x1e9)]();
        const _0x5390b4 = [
            _0x583a43(0x1f4),
            _0x583a43(0x1f6),
            'gimage'
        ];
        if (_0x5390b4['includes'](_0x451c62)) {
            if (!_0x34d427 && !(_0x334f90[_0x583a43(0x1eb)] && _0x334f90['quoted'][_0x583a43(0x1f1)]))
                return _0x144ab1['sendMessage'](_0x334f90[_0x583a43(0x203)], { 'text': _0x583a43(0x1e6) + (_0xb44cc2 + _0x451c62) + _0x583a43(0x1f0) });
            !_0x34d427 && _0x334f90[_0x583a43(0x1eb)] && _0x334f90['quoted']['text'] && (_0x34d427 = _0x334f90['quoted'][_0x583a43(0x1f1)]);
            const _0x243d7d = 0x5;
            try {
                await _0x144ab1[_0x583a43(0x1fb)](_0x334f90[_0x583a43(0x203)], { 'text': '*Please\x20wait...*' });
                const _0x108c24 = [];
                for (let _0x5bc85d = 0x0; _0x5bc85d < _0x243d7d; _0x5bc85d++) {
                    const _0x138117 = _0x583a43(0x200) + encodeURIComponent(_0x34d427), _0x38898a = await _0x5657ef[_0x583a43(0x1ea)](_0x138117, { 'responseType': _0x583a43(0x1e7) });
                    if (_0x38898a[_0x583a43(0x205)] === 0xc8) {
                        const _0x42c740 = Buffer[_0x583a43(0x203)](_0x38898a[_0x583a43(0x1e2)], _0x583a43(0x1ff));
                        _0x108c24[_0x583a43(0x1e8)](_0x42c740);
                    } else
                        throw new Error(_0x583a43(0x206));
                }
                for (let _0x5ae6e9 = 0x0; _0x5ae6e9 < _0x108c24[_0x583a43(0x1e4)]; _0x5ae6e9++) {
                    await sleep(0x1f4), await _0x144ab1['sendMessage'](_0x334f90[_0x583a43(0x203)], {
                        'image': _0x108c24[_0x5ae6e9],
                        'caption': ''
                    }, { 'quoted': _0x334f90 });
                }
                await _0x334f90[_0x583a43(0x1ef)]('✅');
            } catch (_0x308300) {
                console[_0x583a43(0x1f9)](_0x583a43(0x1e3), _0x308300), await _0x144ab1['sendMessage'](_0x334f90[_0x583a43(0x203)], { 'text': '*Oops!\x20Something\x20went\x20wrong\x20while\x20generating\x20images.\x20Please\x20try\x20again\x20later.*' });
            }
        }
    };
function _0x7fb3(_0x1da423, _0x43b2f3) {
    const _0x765167 = _0x7651();
    return _0x7fb3 = function (_0x7fb3d, _0x285de8) {
        _0x7fb3d = _0x7fb3d - 0x1e1;
        let _0x51fbd8 = _0x765167[_0x7fb3d];
        return _0x51fbd8;
    }, _0x7fb3(_0x1da423, _0x43b2f3);
}
export default imageCommand;
function _0x7651() {
    const _0x21d2ee = [
        'data',
        'Error\x20fetching\x20images:',
        'length',
        'match',
        'Please\x20provide\x20some\x20text,\x20Example\x20usage:\x20',
        'arraybuffer',
        'push',
        'trim',
        'get',
        'quoted',
        'body',
        '127sdeXsC',
        '8LKNaTx',
        'React',
        '\x20black\x20cats',
        'text',
        'toLowerCase',
        'slice',
        'image',
        '5824TzTtYJ',
        'img',
        '4373367RmCuUl',
        '11138iaYSqe',
        'error',
        '7147880VMdjyZ',
        'sendMessage',
        '7588359XYNVFP',
        '8167643JCMIIQ',
        'split',
        'binary',
        'https://api.guruapi.tech/api/googleimage?text=',
        '1020774nLLhwB',
        'startsWith',
        'from',
        '21lhqdjd',
        'status',
        'Image\x20generation\x20failed',
        '685FxKvYC'
    ];
    _0x7651 = function () {
        return _0x21d2ee;
    };
    return _0x7651();
}
