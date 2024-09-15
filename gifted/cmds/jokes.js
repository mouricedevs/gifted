function _0x159e() {
    const _0x1f32cd = [
        '504600PYaMAH',
        'length',
        '5FXvoqd',
        'json',
        'from',
        'jokes',
        'error',
        'sendMessage',
        'Failed\x20with\x20error\x20from\x20Gifted\x20API.\x20Please\x20try\x20again\x20later.',
        '8683587IMnpSa',
        '1252324leYkAg',
        '654122iaLzNg',
        'Error\x20from\x20Gifted\x20API:',
        'body',
        '1nRVKAS',
        'toLowerCase',
        'joke',
        'React',
        'https://api.popcat.xyz/joke',
        'match',
        '642976PCnabg',
        'split',
        '4632100NtCDZx',
        'trim',
        '2399636wlRScJ',
        '66fmaNbm',
        'Fetching...',
        'slice'
    ];
    _0x159e = function () {
        return _0x1f32cd;
    };
    return _0x159e();
}
(function (_0x36aa40, _0x180c08) {
    const _0x51f6d9 = _0x5483, _0x3959c0 = _0x36aa40();
    while (!![]) {
        try {
            const _0x1fbcd6 = parseInt(_0x51f6d9(0xd6)) / 0x1 * (-parseInt(_0x51f6d9(0xd2)) / 0x2) + parseInt(_0x51f6d9(0xc8)) / 0x3 + -parseInt(_0x51f6d9(0xc4)) / 0x4 * (-parseInt(_0x51f6d9(0xca)) / 0x5) + parseInt(_0x51f6d9(0xc5)) / 0x6 * (-parseInt(_0x51f6d9(0xd3)) / 0x7) + parseInt(_0x51f6d9(0xdc)) / 0x8 + parseInt(_0x51f6d9(0xd1)) / 0x9 + parseInt(_0x51f6d9(0xde)) / 0xa;
            if (_0x1fbcd6 === _0x180c08)
                break;
            else
                _0x3959c0['push'](_0x3959c0['shift']());
        } catch (_0x193e90) {
            _0x3959c0['push'](_0x3959c0['shift']());
        }
    }
}(_0x159e, 0x97f82));
function _0x5483(_0x56b8ae, _0x39ddee) {
    const _0x159ebb = _0x159e();
    return _0x5483 = function (_0x548303, _0x510d9d) {
        _0x548303 = _0x548303 - 0xc4;
        let _0x568a45 = _0x159ebb[_0x548303];
        return _0x568a45;
    }, _0x5483(_0x56b8ae, _0x39ddee);
}
import _0x419bbe from 'node-fetch';
const Jokes = async (_0x3d3b6c, _0x4a4892) => {
    const _0xa03049 = _0x5483, _0x460b0e = _0x3d3b6c[_0xa03049(0xd5)][_0xa03049(0xdb)](/^[\\/!#.]/), _0x107470 = _0x460b0e ? _0x460b0e[0x0] : '/', _0x5593f3 = _0x3d3b6c[_0xa03049(0xd5)]['startsWith'](_0x107470) ? _0x3d3b6c[_0xa03049(0xd5)][_0xa03049(0xc7)](_0x107470[_0xa03049(0xc9)])[_0xa03049(0xdd)]('\x20')[0x0][_0xa03049(0xd7)]() : '', _0x5d12ce = _0x3d3b6c[_0xa03049(0xd5)]['slice'](_0x107470[_0xa03049(0xc9)] + _0x5593f3[_0xa03049(0xc9)])[_0xa03049(0xdf)](), _0x20b74b = [
            _0xa03049(0xd8),
            _0xa03049(0xcd)
        ];
    if (_0x20b74b['includes'](_0x5593f3))
        try {
            await _0x3d3b6c['React']('🕘'), await _0x3d3b6c['reply'](_0xa03049(0xc6));
            const _0x14e3f7 = await _0x419bbe(_0xa03049(0xda));
            if (!_0x14e3f7['ok'])
                throw new Error('Network\x20response\x20was\x20not\x20ok.');
            const _0x1660cc = await _0x14e3f7[_0xa03049(0xcb)]();
            await _0x3d3b6c['reply'](_0x1660cc[_0xa03049(0xd8)]), console['log'](_0x1660cc[_0xa03049(0xd8)]), await _0x3d3b6c[_0xa03049(0xd9)]('✅');
        } catch (_0x4d1837) {
            console[_0xa03049(0xce)](_0xa03049(0xd4), _0x4d1837), await _0x4a4892[_0xa03049(0xcf)](_0x3d3b6c[_0xa03049(0xcc)], { 'text': _0xa03049(0xd0) });
        }
};
export default Jokes;
