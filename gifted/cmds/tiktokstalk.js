(function (_0x3f1645, _0x49e499) {
    const _0x2a8721 = _0x160e, _0x7d27cc = _0x3f1645();
    while (!![]) {
        try {
            const _0x13cb22 = parseInt(_0x2a8721(0x89)) / 0x1 + -parseInt(_0x2a8721(0x78)) / 0x2 * (parseInt(_0x2a8721(0x82)) / 0x3) + -parseInt(_0x2a8721(0x80)) / 0x4 * (-parseInt(_0x2a8721(0x7d)) / 0x5) + parseInt(_0x2a8721(0x96)) / 0x6 * (-parseInt(_0x2a8721(0x9c)) / 0x7) + parseInt(_0x2a8721(0x83)) / 0x8 * (parseInt(_0x2a8721(0x7a)) / 0x9) + parseInt(_0x2a8721(0x95)) / 0xa * (-parseInt(_0x2a8721(0x7c)) / 0xb) + parseInt(_0x2a8721(0x76)) / 0xc;
            if (_0x13cb22 === _0x49e499)
                break;
            else
                _0x7d27cc['push'](_0x7d27cc['shift']());
        } catch (_0x3efb72) {
            _0x7d27cc['push'](_0x7d27cc['shift']());
        }
    }
}(_0x2405, 0x208ff));
import _0x34c60d from 'api-dylux';
import _0x4fea1f from 'node-fetch';
function _0x160e(_0x46a39e, _0x205b92) {
    const _0x24058c = _0x2405();
    return _0x160e = function (_0x160e9d, _0x288933) {
        _0x160e9d = _0x160e9d - 0x74;
        let _0x5a3b20 = _0x24058c[_0x160e9d];
        return _0x5a3b20;
    }, _0x160e(_0x46a39e, _0x205b92);
}
const TiktokStalk = async (_0x34d1ad, _0x5d6630) => {
    const _0x1c7a86 = _0x160e, _0x35aefa = _0x34d1ad[_0x1c7a86(0x77)][_0x1c7a86(0x8c)](/^[\\/!#.]/), _0x277609 = _0x35aefa ? _0x35aefa[0x0] : '/', _0x32fbc1 = _0x34d1ad[_0x1c7a86(0x77)][_0x1c7a86(0x7e)](_0x277609) ? _0x34d1ad[_0x1c7a86(0x77)][_0x1c7a86(0x81)](_0x277609['length'])[_0x1c7a86(0x90)]('\x20')[0x0][_0x1c7a86(0x8d)]() : '', _0x23d391 = _0x34d1ad[_0x1c7a86(0x77)][_0x1c7a86(0x81)](_0x277609[_0x1c7a86(0x8b)] + _0x32fbc1['length'])['trim'](), _0x43da94 = [
            _0x1c7a86(0x74),
            'tik-stalk',
            _0x1c7a86(0x84),
            _0x1c7a86(0x98)
        ];
    if (_0x43da94[_0x1c7a86(0x7f)](_0x32fbc1)) {
        if (!_0x23d391)
            return _0x34d1ad[_0x1c7a86(0x94)](_0x1c7a86(0xa0) + _0x34d1ad[_0x1c7a86(0x8a)] + _0x1c7a86(0x9e));
        try {
            await _0x34d1ad[_0x1c7a86(0x9a)]('🕘'), await _0x34d1ad[_0x1c7a86(0x94)](_0x1c7a86(0x85));
            let _0x1c7b96 = await _0x34c60d[_0x1c7a86(0x9d)](_0x23d391);
            if (_0x1c7b96 && _0x1c7b96[_0x1c7a86(0x79)] && _0x1c7b96[_0x1c7a86(0x87)] && _0x1c7b96['followers'] && _0x1c7b96['following']) {
                let _0x1b6380 = '\x0a┌──「\x20*TIKTOK\x20STALK*\x20」\x0a▢\x20*🔖\x20Name:*\x20' + _0x1c7b96[_0x1c7a86(0x79)] + _0x1c7a86(0x86) + _0x1c7b96['username'] + _0x1c7a86(0x92) + _0x1c7b96[_0x1c7a86(0x8e)] + _0x1c7a86(0x9f) + _0x1c7b96[_0x1c7a86(0x75)] + '\x0a▢\x20*📌\x20Desc:*\x20' + (_0x1c7b96['desc'] || _0x1c7a86(0x7b)) + '\x0a\x0a▢\x20*🔗\x20Link*\x20:\x20https://tiktok.com/' + _0x1c7b96[_0x1c7a86(0x87)] + _0x1c7a86(0x97);
                const _0x1c6b62 = await _0x4fea1f(_0x1c7b96['profile']);
                if (!_0x1c6b62['ok'])
                    throw new Error(_0x1c7a86(0x9b));
                const _0x3fbee1 = await _0x1c6b62['buffer']();
                await _0x5d6630[_0x1c7a86(0x88)](_0x34d1ad['from'], {
                    'image': _0x3fbee1,
                    'caption': _0x1b6380
                }, { 'quoted': _0x34d1ad }), await _0x34d1ad['React']('✅');
            } else
                throw new Error(_0x1c7a86(0x8f));
        } catch (_0x4e7d5c) {
            console[_0x1c7a86(0x91)]('Error\x20getting\x20TikTok\x20data:', _0x4e7d5c[_0x1c7a86(0x99)]), await _0x34d1ad[_0x1c7a86(0x94)](_0x1c7a86(0x93) + _0x4e7d5c[_0x1c7a86(0x99)]), await _0x34d1ad[_0x1c7a86(0x9a)]('❌');
        }
    }
};
function _0x2405() {
    const _0x443afd = [
        'match',
        'toLowerCase',
        'followers',
        'Incomplete\x20data\x20received\x20from\x20the\x20TikTok\x20API.',
        'split',
        'error',
        '\x0a▢\x20*👥\x20Followers:*\x20',
        'Error\x20getting\x20response:\x20',
        'reply',
        '80sYRCbN',
        '156NgUrog',
        '\x0a└────────────\x0a\x0a>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*',
        'tiktokstalk',
        'message',
        'React',
        'Failed\x20to\x20fetch\x20profile\x20image.',
        '37786dYEgAr',
        'ttStalk',
        '_,*\x0aPlease\x20provide\x20a\x20TikTok\x20Username\x20for\x20stalking\x20after\x20the\x20command,\x20e.g.,\x20*.tiktokstalk\x20giftedtechke*',
        '\x0a▢\x20*🫂\x20Following:*\x20',
        'Hello\x20*_',
        'tikstalk',
        'following',
        '2648676FCLKDc',
        'body',
        '9902FxhdbG',
        'name',
        '9BiiFgJ',
        'No\x20description\x20available',
        '193215GdkwUu',
        '5HGbMsN',
        'startsWith',
        'includes',
        '207788vkqMJO',
        'slice',
        '99fADrUi',
        '1753568WlZQqR',
        'tiktok-stalk',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20Generating\x20Your\x20TiktokStalk\x20Request...',
        '\x0a▢\x20*🔖\x20Username:*\x20',
        'username',
        'sendMessage',
        '85760nfJUzu',
        'pushName',
        'length'
    ];
    _0x2405 = function () {
        return _0x443afd;
    };
    return _0x2405();
}
export default TiktokStalk;
