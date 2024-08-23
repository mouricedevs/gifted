(function (_0x4c2cbb, _0x1031a6) {
    const _0x4cc15f = _0x5246, _0xce6654 = _0x4c2cbb();
    while (!![]) {
        try {
            const _0x5dc541 = -parseInt(_0x4cc15f(0x106)) / 0x1 * (-parseInt(_0x4cc15f(0x101)) / 0x2) + parseInt(_0x4cc15f(0x100)) / 0x3 * (parseInt(_0x4cc15f(0xe8)) / 0x4) + parseInt(_0x4cc15f(0xf6)) / 0x5 + -parseInt(_0x4cc15f(0xe4)) / 0x6 + parseInt(_0x4cc15f(0xe1)) / 0x7 * (parseInt(_0x4cc15f(0xee)) / 0x8) + parseInt(_0x4cc15f(0xfa)) / 0x9 + -parseInt(_0x4cc15f(0xd8)) / 0xa;
            if (_0x5dc541 === _0x1031a6)
                break;
            else
                _0xce6654['push'](_0xce6654['shift']());
        } catch (_0x13b1b9) {
            _0xce6654['push'](_0xce6654['shift']());
        }
    }
}(_0x2c49, 0x712e7));
import _0x5d7e22 from 'axios';
function _0x5246(_0x13b95c, _0x2df8de) {
    const _0x2c490e = _0x2c49();
    return _0x5246 = function (_0x5246fb, _0x541b23) {
        _0x5246fb = _0x5246fb - 0xd8;
        let _0x402a26 = _0x2c490e[_0x5246fb];
        return _0x402a26;
    }, _0x5246(_0x13b95c, _0x2df8de);
}
import _0xcc8f9, { prepareWAMessageMedia } from 'gifted-baileys';
const {generateWAMessageFromContent, proto} = _0xcc8f9, time = async (_0x4c3b69, _0x57a35e) => {
        const _0x14620f = _0x5246, _0x1a422b = _0x4c3b69['body'][_0x14620f(0xf0)](/^[\\/!#.]/), _0x15868d = _0x1a422b ? _0x1a422b[0x0] : '/', _0x17e11d = _0x4c3b69['body'][_0x14620f(0xf9)](_0x15868d) ? _0x4c3b69[_0x14620f(0xdd)][_0x14620f(0xfe)](_0x15868d[_0x14620f(0xfb)])['split']('\x20')[0x0][_0x14620f(0xf8)]() : '', _0x3a29a3 = _0x4c3b69[_0x14620f(0xdd)][_0x14620f(0xfe)](_0x15868d[_0x14620f(0xfb)] + _0x17e11d[_0x14620f(0xfb)])[_0x14620f(0xe2)](), _0x1ed0c6 = [
                _0x14620f(0xed),
                _0x14620f(0x102)
            ];
        if (_0x1ed0c6[_0x14620f(0xe7)](_0x17e11d)) {
            if (!_0x3a29a3)
                return _0x4c3b69[_0x14620f(0x103)](_0x14620f(0xd9) + _0x4c3b69['pushName'] + _0x14620f(0xff));
            try {
                await _0x4c3b69[_0x14620f(0xf4)]('🕘');
                const _0x499eb0 = _0x14620f(0xf3) + encodeURIComponent(_0x3a29a3), _0x101be4 = await _0x5d7e22['get'](_0x499eb0), _0x307a28 = _0x101be4[_0x14620f(0xda)];
                if (_0x307a28 && _0x307a28[_0x14620f(0xec)]) {
                    const _0x2dd2c4 = _0x307a28['result'][0x0][_0x14620f(0xe5)], _0x5c5109 = _0x307a28[_0x14620f(0xec)][0x0][_0x14620f(0xde)], _0x4110bf = _0x307a28[_0x14620f(0xec)][0x0][_0x14620f(0xed)], _0x533fdf = _0x4110bf[_0x14620f(0xf0)](/```([\s\S]*?)```/);
                    if (_0x533fdf) {
                        const _0x379ee8 = _0x533fdf[0x1];
                        let _0x1c32fe = generateWAMessageFromContent(_0x4c3b69['from'], {
                            'viewOnceMessage': {
                                'message': {
                                    'messageContextInfo': {
                                        'deviceListMetadata': {},
                                        'deviceListMetadataVersion': 0x2
                                    },
                                    'interactiveMessage': proto[_0x14620f(0xf7)]['InteractiveMessage'][_0x14620f(0xdb)]({
                                        'body': proto[_0x14620f(0xf7)][_0x14620f(0xdc)][_0x14620f(0xeb)][_0x14620f(0xdb)]({ 'text': _0x4110bf }),
                                        'footer': proto[_0x14620f(0xf7)][_0x14620f(0xdc)]['Footer'][_0x14620f(0xdb)]({ 'text': _0x14620f(0x104) }),
                                        'header': proto[_0x14620f(0xf7)][_0x14620f(0xdc)][_0x14620f(0x105)][_0x14620f(0xdb)]({
                                            'title': '',
                                            'subtitle': '',
                                            'hasMediaAttachment': ![]
                                        }),
                                        'nativeFlowMessage': proto[_0x14620f(0xf7)][_0x14620f(0xdc)][_0x14620f(0xef)]['create']({
                                            'buttons': [{
                                                    'name': 'cta_copy',
                                                    'buttonParamsJson': JSON[_0x14620f(0xdf)]({
                                                        'display_text': 'Copy\x20Your\x20Code',
                                                        'id': 'copy_code',
                                                        'copy_code': _0x379ee8
                                                    })
                                                }]
                                        })
                                    })
                                }
                            }
                        }, {});
                        await _0x57a35e[_0x14620f(0xf5)](_0x1c32fe[_0x14620f(0xfc)]['remoteJid'], _0x1c32fe[_0x14620f(0x107)], { 'messageId': _0x1c32fe[_0x14620f(0xfc)]['id'] });
                    } else
                        await _0x57a35e['sendMessage'](_0x4c3b69[_0x14620f(0xea)], { 'text': _0x14620f(0xe3) + _0x4c3b69[_0x14620f(0xf1)] + '_,*\x0a\x20Here\x20are\x20Current\x20Time\x20In\x20*' + _0x2dd2c4 + _0x14620f(0xfd) + _0x4110bf + _0x14620f(0xe9) + _0x5c5109 + _0x14620f(0xf2) }, { 'quoted': _0x4c3b69 });
                    await _0x4c3b69[_0x14620f(0xf4)]('✅');
                } else
                    throw new Error(_0x14620f(0xe6));
            } catch (_0x587086) {
                console[_0x14620f(0xe0)]('Error\x20getting\x20Gifted\x20APi\x20response:', _0x587086['message']), _0x4c3b69['reply']('Error\x20getting\x20response\x20from\x20Gifted\x20APi.'), await _0x4c3b69[_0x14620f(0xf4)]('❌');
            }
        }
    };
export default time;
function _0x2c49() {
    const _0x5644e8 = [
        'result',
        'time',
        '366360QxnJTd',
        'NativeFlowMessage',
        'match',
        'pushName',
        '\x0a\x0a>\x20©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝟓',
        'https://levanter.onrender.com/time?code=',
        'React',
        'relayMessage',
        '805125yNZndg',
        'Message',
        'toLowerCase',
        'startsWith',
        '8105940xOlXMo',
        'length',
        'key',
        '*\x20Stats...\x0a\x20*Date\x20&\x20Time:*\x20',
        'slice',
        '_,*\x0a\x20Please\x20provide\x20a\x20Country\x20code\x20after\x20the\x20command\x20ie\x20*.time\x20KE*',
        '609WoFHLv',
        '38VJBWrp',
        'timenow',
        'reply',
        '>\x20>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'Header',
        '10987ryGUVv',
        'message',
        '17110670AicMMI',
        'Hello\x20*_',
        'data',
        'create',
        'InteractiveMessage',
        'body',
        'timeZone',
        'stringify',
        'error',
        '91Pyigzr',
        'trim',
        '\x20Hello\x20*_',
        '3684936OnllWJ',
        'name',
        'Invalid\x20response\x20from\x20the\x20Gifted\x20API.',
        'includes',
        '18188waMbYL',
        '\x0a\x20*Timezone:*\x20',
        'from',
        'Body'
    ];
    _0x2c49 = function () {
        return _0x5644e8;
    };
    return _0x2c49();
}
