(function (_0x450269, _0x30c5ac) {
    const _0x495da0 = _0x51d5, _0x12dcaf = _0x450269();
    while (!![]) {
        try {
            const _0x22e21c = -parseInt(_0x495da0(0x177)) / 0x1 * (-parseInt(_0x495da0(0x173)) / 0x2) + parseInt(_0x495da0(0x163)) / 0x3 + -parseInt(_0x495da0(0x16c)) / 0x4 * (-parseInt(_0x495da0(0x171)) / 0x5) + parseInt(_0x495da0(0x169)) / 0x6 * (-parseInt(_0x495da0(0x15d)) / 0x7) + parseInt(_0x495da0(0x16a)) / 0x8 * (-parseInt(_0x495da0(0x167)) / 0x9) + parseInt(_0x495da0(0x17b)) / 0xa + parseInt(_0x495da0(0x165)) / 0xb;
            if (_0x22e21c === _0x30c5ac)
                break;
            else
                _0x12dcaf['push'](_0x12dcaf['shift']());
        } catch (_0x32a4d2) {
            _0x12dcaf['push'](_0x12dcaf['shift']());
        }
    }
}(_0x518f, 0x30c11));
function _0x518f() {
    const _0x440a93 = [
        'create',
        '88828ttVSWk',
        'pushName',
        'https://api.maskser.me/api/tools/ebase64?text=',
        'ebase',
        'result',
        '5TvybyW',
        'Message',
        '478SKOUIv',
        'length',
        'InteractiveMessage',
        'from',
        '151eqXFCy',
        'Invalid\x20response\x20from\x20the\x20GPT\x20API.',
        'reply',
        'get',
        '102200abVfRL',
        'data',
        'Hello\x20*_',
        'remoteJid',
        'A\x20moment,...',
        '_,*\x0aPlease\x20Provide\x20Me\x20a\x20text\x20to\x20Encrypt.',
        'toLowerCase',
        'match',
        'relayMessage',
        'sendMessage',
        'split',
        'Error\x20getting\x20response\x20from\x20GPT.',
        'Header',
        'Body',
        '2516073PJRCwV',
        'cta_copy',
        'body',
        'React',
        'error',
        'slice',
        '531501imlFJI',
        'message',
        '4048891somdob',
        'key',
        '252TpyqPz',
        'Error\x20getting\x20GPT\x20response:',
        '6prjbJJ',
        '15608NDrzSg'
    ];
    _0x518f = function () {
        return _0x440a93;
    };
    return _0x518f();
}
import _0x45cd31 from 'axios';
import _0x5539b5, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0x5539b5, Ebase = async (_0x1da64c, _0x179c56) => {
        const _0x56177d = _0x51d5, _0x153d65 = _0x1da64c['body']['match'](/^[\\/!#.]/), _0x22a676 = _0x153d65 ? _0x153d65[0x0] : '/', _0x4e28b4 = _0x1da64c['body']['startsWith'](_0x22a676) ? _0x1da64c[_0x56177d(0x15f)][_0x56177d(0x162)](_0x22a676[_0x56177d(0x174)])[_0x56177d(0x185)]('\x20')[0x0][_0x56177d(0x181)]() : '', _0x30b4b1 = _0x1da64c['body'][_0x56177d(0x162)](_0x22a676[_0x56177d(0x174)] + _0x4e28b4['length'])['trim'](), _0x426b4c = [_0x56177d(0x16f)];
        if (_0x426b4c['includes'](_0x4e28b4)) {
            if (!_0x30b4b1)
                return _0x1da64c[_0x56177d(0x179)](_0x56177d(0x17d) + _0x1da64c[_0x56177d(0x16d)] + _0x56177d(0x180));
            try {
                await _0x1da64c[_0x56177d(0x160)]('🕘'), await _0x1da64c[_0x56177d(0x179)](_0x56177d(0x17f));
                const _0x511274 = _0x56177d(0x16e) + encodeURIComponent(_0x30b4b1), _0x392267 = await _0x45cd31[_0x56177d(0x17a)](_0x511274), _0x27152d = _0x392267[_0x56177d(0x17c)];
                if (_0x27152d && _0x27152d[_0x56177d(0x170)]) {
                    const _0x7466ad = _0x27152d[_0x56177d(0x170)], _0x2bc8f8 = _0x7466ad[_0x56177d(0x182)](/```([\s\S]*?)```/);
                    if (_0x2bc8f8) {
                        const _0x3d2627 = _0x2bc8f8[0x1];
                        let _0x4cfccf = generateWAMessageFromContent(_0x1da64c['from'], {
                            'viewOnceMessage': {
                                'message': {
                                    'messageContextInfo': {
                                        'deviceListMetadata': {},
                                        'deviceListMetadataVersion': 0x2
                                    },
                                    'interactiveMessage': proto[_0x56177d(0x172)][_0x56177d(0x175)][_0x56177d(0x16b)]({
                                        'body': proto[_0x56177d(0x172)][_0x56177d(0x175)][_0x56177d(0x15c)][_0x56177d(0x16b)]({ 'text': _0x7466ad }),
                                        'footer': proto[_0x56177d(0x172)]['InteractiveMessage']['Footer'][_0x56177d(0x16b)]({ 'text': '>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*' }),
                                        'header': proto[_0x56177d(0x172)][_0x56177d(0x175)][_0x56177d(0x187)][_0x56177d(0x16b)]({
                                            'title': '',
                                            'subtitle': '',
                                            'hasMediaAttachment': ![]
                                        }),
                                        'nativeFlowMessage': proto['Message']['InteractiveMessage']['NativeFlowMessage']['create']({
                                            'buttons': [{
                                                    'name': _0x56177d(0x15e),
                                                    'buttonParamsJson': JSON['stringify']({
                                                        'display_text': 'Copy\x20Your\x20Code',
                                                        'id': 'copy_code',
                                                        'copy_code': _0x3d2627
                                                    })
                                                }]
                                        })
                                    })
                                }
                            }
                        }, {});
                        await _0x179c56[_0x56177d(0x183)](_0x4cfccf[_0x56177d(0x166)][_0x56177d(0x17e)], _0x4cfccf[_0x56177d(0x164)], { 'messageId': _0x4cfccf[_0x56177d(0x166)]['id'] });
                    } else
                        await _0x179c56[_0x56177d(0x184)](_0x1da64c[_0x56177d(0x176)], { 'text': _0x7466ad }, { 'quoted': _0x1da64c });
                    await _0x1da64c['React']('✅');
                } else
                    throw new Error(_0x56177d(0x178));
            } catch (_0x13c914) {
                console[_0x56177d(0x161)](_0x56177d(0x168), _0x13c914['message']), _0x1da64c[_0x56177d(0x179)](_0x56177d(0x186)), await _0x1da64c[_0x56177d(0x160)]('❌');
            }
        }
    };
function _0x51d5(_0xa51c56, _0x4695c4) {
    const _0x518f66 = _0x518f();
    return _0x51d5 = function (_0x51d5ba, _0x8ff88f) {
        _0x51d5ba = _0x51d5ba - 0x15c;
        let _0x4aeb0c = _0x518f66[_0x51d5ba];
        return _0x4aeb0c;
    }, _0x51d5(_0xa51c56, _0x4695c4);
}
export default Ebase;
