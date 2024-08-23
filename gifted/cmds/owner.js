function _0x3f46() {
    const _0x2fc142 = [
        'Error\x20sending\x20owner\x20contact.',
        '4217260UcuZoQ',
        '227514kloOHG',
        'from',
        '158vrnKRB',
        '26992CibLmT',
        'setvar',
        '2991594esadsH',
        'body',
        'slice',
        '909ZvOCGL',
        'split',
        'error',
        'OWNER_NUMBER',
        '171933ZDkUEz',
        'length',
        '1393KNDGcT',
        '4123020rlNKPD',
        'React'
    ];
    _0x3f46 = function () {
        return _0x2fc142;
    };
    return _0x3f46();
}
(function (_0x37d64c, _0x36e376) {
    const _0x270438 = _0x10b7, _0x44fcf9 = _0x37d64c();
    while (!![]) {
        try {
            const _0x416915 = -parseInt(_0x270438(0x106)) / 0x1 * (-parseInt(_0x270438(0x10d)) / 0x2) + -parseInt(_0x270438(0x104)) / 0x3 + -parseInt(_0x270438(0x107)) / 0x4 + parseInt(_0x270438(0x10a)) / 0x5 + parseInt(_0x270438(0x110)) / 0x6 + -parseInt(_0x270438(0x10b)) / 0x7 + -parseInt(_0x270438(0x10e)) / 0x8 * (-parseInt(_0x270438(0x100)) / 0x9);
            if (_0x416915 === _0x36e376)
                break;
            else
                _0x44fcf9['push'](_0x44fcf9['shift']());
        } catch (_0x2a735a) {
            _0x44fcf9['push'](_0x44fcf9['shift']());
        }
    }
}(_0x3f46, 0xa4230));
import _0x143c6b from '../giftke.js';
import _0x5cb684 from '../../set.cjs';
const ownerContact = async (_0x244417, _0x313411) => {
    const _0x55c91d = _0x10b7, _0x34c06d = _0x5cb684[_0x55c91d(0x103)], _0x23ff83 = _0x244417[_0x55c91d(0x111)]['match'](/^[\\/!#.]/), _0x84391a = _0x23ff83 ? _0x23ff83[0x0] : '/', _0xab7961 = _0x244417['body']['startsWith'](_0x84391a) ? _0x244417[_0x55c91d(0x111)][_0x55c91d(0x112)](_0x84391a[_0x55c91d(0x105)])[_0x55c91d(0x101)]('\x20')[0x0]['toLowerCase']() : '', _0x5afc93 = _0x244417[_0x55c91d(0x111)]['slice'](_0x84391a[_0x55c91d(0x105)] + _0xab7961['length'])['trim']();
    if (_0xab7961 === 'owner')
        try {
            await _0x313411['sendContact'](_0x244417[_0x55c91d(0x10c)], [_0x34c06d], _0x244417), await _0x244417[_0x55c91d(0x108)]('✅');
        } catch (_0xcdb850) {
            console[_0x55c91d(0x102)]('Error\x20sending\x20owner\x20contact:', _0xcdb850), _0x244417['reply'](_0x55c91d(0x109)), await _0x244417[_0x55c91d(0x108)]('❌');
        }
    else {
        if (_0xab7961 === _0x55c91d(0x10f)) {
            const _0x18ae98 = _0x5afc93[_0x55c91d(0x101)]('\x20');
            await _0x143c6b(_0x244417, _0x18ae98);
        }
    }
};
function _0x10b7(_0x399993, _0x1dad74) {
    const _0x3f468e = _0x3f46();
    return _0x10b7 = function (_0x10b749, _0x246c87) {
        _0x10b749 = _0x10b749 - 0x100;
        let _0xcc5626 = _0x3f468e[_0x10b749];
        return _0xcc5626;
    }, _0x10b7(_0x399993, _0x1dad74);
}
export default ownerContact;
