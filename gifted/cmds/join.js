function _0x4c53() {
    const _0x50b6ab = [
        'body',
        'reply',
        'error',
        '4rCQDYR',
        'includes',
        '4474902KVcWTY',
        '3192624EbaIrm',
        '*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*',
        'joingc',
        '29168244zlZtwi',
        '*🚫\x20FAILED\x20TO\x20JOIN\x20THE\x20GROUP.\x20',
        'catch',
        'slice',
        'stringify',
        '656284bjpDFd',
        '11378430XqYXZv',
        'trim',
        'match',
        'whatsapp.com',
        'joingroup',
        '*📛\x20SUCCESSFULLY\x20JOINED\x20THE\x20GROUP.\x20',
        'join',
        '2910AGaeVv',
        '*INVALID\x20LINK!*',
        'sender',
        'toLowerCase',
        'https://chat.whatsapp.com/',
        'user',
        'split',
        '5640rDaRPg',
        '1671286tKfGKo',
        'startsWith',
        'length',
        '*Enter\x20The\x20Group\x20Link!*',
        'groupAcceptInvite'
    ];
    _0x4c53 = function () {
        return _0x50b6ab;
    };
    return _0x4c53();
}
(function (_0x394979, _0x45a24e) {
    const _0x1fcd9b = _0x44bd, _0x5e5624 = _0x394979();
    while (!![]) {
        try {
            const _0x465ffa = parseInt(_0x1fcd9b(0x16d)) / 0x1 + -parseInt(_0x1fcd9b(0x15a)) / 0x2 + parseInt(_0x1fcd9b(0x164)) / 0x3 * (-parseInt(_0x1fcd9b(0x162)) / 0x4) + -parseInt(_0x1fcd9b(0x175)) / 0x5 * (-parseInt(_0x1fcd9b(0x159)) / 0x6) + -parseInt(_0x1fcd9b(0x16e)) / 0x7 + parseInt(_0x1fcd9b(0x165)) / 0x8 + parseInt(_0x1fcd9b(0x168)) / 0x9;
            if (_0x465ffa === _0x45a24e)
                break;
            else
                _0x5e5624['push'](_0x5e5624['shift']());
        } catch (_0x4b1ba7) {
            _0x5e5624['push'](_0x5e5624['shift']());
        }
    }
}(_0x4c53, 0xd96df));
function _0x44bd(_0x2d8702, _0x594193) {
    const _0x4c53c8 = _0x4c53();
    return _0x44bd = function (_0x44bdaa, _0x46c026) {
        _0x44bdaa = _0x44bdaa - 0x156;
        let _0x17f942 = _0x4c53c8[_0x44bdaa];
        return _0x17f942;
    }, _0x44bd(_0x2d8702, _0x594193);
}
import _0x141323 from '../../set.cjs';
const joinGroup = async (_0x1ce372, _0x50a25c) => {
        const _0x397bfc = _0x44bd;
        try {
            const _0xfdaf14 = await _0x50a25c['decodeJid'](_0x50a25c[_0x397bfc(0x157)]['id']), _0x479eea = [
                    _0xfdaf14,
                    _0x141323['OWNER_NUMBER'] + '@s.whatsapp.net'
                ][_0x397bfc(0x163)](_0x1ce372[_0x397bfc(0x177)]), _0x282af1 = _0x1ce372['body'][_0x397bfc(0x170)](/^[\\/!#.]/), _0xfb613a = _0x282af1 ? _0x282af1[0x0] : '/', _0x637302 = _0x1ce372[_0x397bfc(0x15f)][_0x397bfc(0x15b)](_0xfb613a) ? _0x1ce372[_0x397bfc(0x15f)]['slice'](_0xfb613a[_0x397bfc(0x15c)])[_0x397bfc(0x158)]('\x20')[0x0][_0x397bfc(0x178)]() : '', _0x364e1a = _0x1ce372['body'][_0x397bfc(0x16b)](_0xfb613a[_0x397bfc(0x15c)] + _0x637302[_0x397bfc(0x15c)])[_0x397bfc(0x16f)](), _0x324ced = _0x364e1a[_0x397bfc(0x158)]('\x20'), _0x1037d4 = [
                    _0x397bfc(0x174),
                    _0x397bfc(0x167),
                    'joinchat',
                    _0x397bfc(0x172)
                ];
            if (!_0x1037d4['includes'](_0x637302))
                return;
            if (!_0x479eea)
                return _0x1ce372['reply'](_0x397bfc(0x166));
            if (!_0x364e1a)
                throw _0x397bfc(0x15d);
            if (!isUrl(_0x324ced[0x0]) && !_0x324ced[0x0][_0x397bfc(0x163)](_0x397bfc(0x171)))
                throw _0x397bfc(0x176);
            _0x1ce372[_0x397bfc(0x160)]('Please\x20wait...');
            const _0x5e2ff6 = _0x324ced[0x0][_0x397bfc(0x158)](_0x397bfc(0x156))[0x1];
            await _0x50a25c[_0x397bfc(0x15e)](_0x5e2ff6)['then'](_0x251488 => _0x1ce372[_0x397bfc(0x160)](_0x397bfc(0x173) + JSON[_0x397bfc(0x16c)](_0x251488)))[_0x397bfc(0x16a)](_0xa508b1 => _0x1ce372[_0x397bfc(0x160)](_0x397bfc(0x169) + JSON[_0x397bfc(0x16c)](_0xa508b1)));
        } catch (_0x40fe6d) {
            console[_0x397bfc(0x161)]('Error:', _0x40fe6d), _0x1ce372[_0x397bfc(0x160)]('An\x20error\x20occurred\x20while\x20processing\x20the\x20command.');
        }
    }, isUrl = _0x15334e => {
        try {
            return new URL(_0x15334e), !![];
        } catch (_0x46a01e) {
            return ![];
        }
    };
export default joinGroup;
