(function (_0x4c0b84, _0x15805f) {
    const _0x5a479e = _0x4e62, _0xafd99d = _0x4c0b84();
    while (!![]) {
        try {
            const _0x1c20b9 = parseInt(_0x5a479e(0x1f8)) / 0x1 + -parseInt(_0x5a479e(0x203)) / 0x2 + parseInt(_0x5a479e(0x200)) / 0x3 + -parseInt(_0x5a479e(0x1f1)) / 0x4 * (parseInt(_0x5a479e(0x1e6)) / 0x5) + parseInt(_0x5a479e(0x1ea)) / 0x6 * (parseInt(_0x5a479e(0x1f0)) / 0x7) + -parseInt(_0x5a479e(0x201)) / 0x8 + parseInt(_0x5a479e(0x1f3)) / 0x9 * (-parseInt(_0x5a479e(0x1eb)) / 0xa);
            if (_0x1c20b9 === _0x15805f)
                break;
            else
                _0xafd99d['push'](_0xafd99d['shift']());
        } catch (_0x3b187b) {
            _0xafd99d['push'](_0xafd99d['shift']());
        }
    }
}(_0x3a80, 0xdefad));
const setDescription = async (_0x2f448a, _0x1fd78c) => {
    const _0x2ab5e1 = _0x4e62;
    try {
        const _0x48a012 = await _0x1fd78c[_0x2ab5e1(0x1fa)](_0x1fd78c[_0x2ab5e1(0x1ec)]['id']), _0x18a109 = _0x2f448a[_0x2ab5e1(0x1f9)][_0x2ab5e1(0x1ef)](/^[\\/!#.]/), _0xd6cd4a = _0x18a109 ? _0x18a109[0x0] : '/', _0x37f77 = _0x2f448a[_0x2ab5e1(0x1f9)][_0x2ab5e1(0x1f7)](_0xd6cd4a) ? _0x2f448a[_0x2ab5e1(0x1f9)][_0x2ab5e1(0x1f4)](_0xd6cd4a[_0x2ab5e1(0x1e9)])['split']('\x20')[0x0][_0x2ab5e1(0x1fb)]() : '', _0x2d3413 = _0x2f448a[_0x2ab5e1(0x1f9)][_0x2ab5e1(0x1f4)](_0xd6cd4a[_0x2ab5e1(0x1e9)] + _0x37f77[_0x2ab5e1(0x1e9)])['trim'](), _0x353b17 = [
                _0x2ab5e1(0x1e4),
                _0x2ab5e1(0x1e5),
                'gdesc',
                _0x2ab5e1(0x1e7)
            ];
        if (!_0x353b17[_0x2ab5e1(0x1ee)](_0x37f77))
            return;
        if (!_0x2f448a[_0x2ab5e1(0x1e8)])
            return _0x2f448a['reply'](_0x2ab5e1(0x1e2));
        const _0x2b7e4a = await _0x1fd78c['groupMetadata'](_0x2f448a[_0x2ab5e1(0x1f5)]), _0x5b0e83 = _0x2b7e4a[_0x2ab5e1(0x1ed)], _0x27b909 = _0x5b0e83[_0x2ab5e1(0x1fc)](_0x51149d => _0x51149d['id'] === _0x48a012)?.[_0x2ab5e1(0x1f2)], _0x543443 = _0x5b0e83[_0x2ab5e1(0x1fc)](_0x433eed => _0x433eed['id'] === _0x2f448a[_0x2ab5e1(0x205)])?.['admin'];
        if (!_0x27b909)
            return _0x2f448a[_0x2ab5e1(0x1fe)](_0x2ab5e1(0x204));
        if (!_0x543443)
            return _0x2f448a[_0x2ab5e1(0x1fe)]('*📛\x20YOU\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*');
        if (!_0x2d3413)
            return _0x2f448a[_0x2ab5e1(0x1fe)](_0x2ab5e1(0x202));
        await _0x1fd78c[_0x2ab5e1(0x1fd)](_0x2f448a[_0x2ab5e1(0x1f5)], _0x2d3413), _0x2f448a[_0x2ab5e1(0x1fe)](_0x2ab5e1(0x1ff) + _0x2d3413);
    } catch (_0x7348c6) {
        console[_0x2ab5e1(0x1e3)](_0x2ab5e1(0x1f6), _0x7348c6), _0x2f448a['reply']('An\x20error\x20occurred\x20while\x20processing\x20the\x20command.');
    }
};
function _0x4e62(_0x204f56, _0x4c788d) {
    const _0x3a8016 = _0x3a80();
    return _0x4e62 = function (_0x4e622c, _0x16c872) {
        _0x4e622c = _0x4e622c - 0x1e2;
        let _0x504b48 = _0x3a8016[_0x4e622c];
        return _0x504b48;
    }, _0x4e62(_0x204f56, _0x4c788d);
}
export default setDescription;
function _0x3a80() {
    const _0x54122b = [
        'groupUpdateDescription',
        'reply',
        'Group\x20Description\x20Has\x20Been\x20Set\x20To:\x20',
        '2422953UaaPnq',
        '146304ZZDXzo',
        '*📛\x20PLEASE\x20PROVIDE\x20A\x20DESCRIPTION\x20TO\x20SET*',
        '525796WAZTkx',
        '*📛\x20BOT\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*',
        'sender',
        '*📛\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS*',
        'error',
        'setdescription',
        'setdesc',
        '5660410QETsbz',
        'setgroupbio',
        'isGroup',
        'length',
        '13782QJYqzM',
        '2750QYVlNB',
        'user',
        'participants',
        'includes',
        'match',
        '2443GTKHNt',
        '4xzLLHG',
        'admin',
        '12294sEYfaT',
        'slice',
        'from',
        'Error:',
        'startsWith',
        '1092939RLxJlh',
        'body',
        'decodeJid',
        'toLowerCase',
        'find'
    ];
    _0x3a80 = function () {
        return _0x54122b;
    };
    return _0x3a80();
}
