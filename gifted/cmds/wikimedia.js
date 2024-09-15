function _0x4bdd() {
    const _0x2d8555 = [
        'trim',
        'A\x20moment,\x20*Gifted-Md*\x20is\x20fetching\x20Wikimedia\x20search\x20results...',
        '13417254bQNobv',
        '10750257cNhHmG',
        '8869776iTIjRM',
        'toLowerCase',
        '16HSUSvn',
        '7194992GJfaxH',
        '29828XXDkTT',
        'body',
        '11476PhBYbK',
        'reply',
        'wikimediaimage',
        'wikimedia',
        '30tngJlC',
        'match',
        'title',
        'forEach',
        'length',
        'startsWith',
        '573mQQdML',
        'result',
        '\x0a*Source:*\x20[Link](',
        'pushName',
        'includes',
        'Hello\x20*_',
        'slice',
        '_,*\x0aPlease\x20provide\x20a\x20search\x20term\x20after\x20the\x20command,\x20e.g.,\x20*.wikimedia\x20elon\x20musk*',
        'No\x20results\x20found\x20or\x20an\x20error\x20occurred.',
        '86600bprshq',
        '*Title:*\x20',
        ')\x0a\x0a'
    ];
    _0x4bdd = function () {
        return _0x2d8555;
    };
    return _0x4bdd();
}
(function (_0x5077dc, _0x3ec961) {
    const _0x2f567f = _0x1259, _0x13f38e = _0x5077dc();
    while (!![]) {
        try {
            const _0x375a07 = -parseInt(_0x2f567f(0x67)) / 0x1 * (-parseInt(_0x2f567f(0x83)) / 0x2) + -parseInt(_0x2f567f(0x71)) / 0x3 * (-parseInt(_0x2f567f(0x85)) / 0x4) + -parseInt(_0x2f567f(0x7a)) / 0x5 + parseInt(_0x2f567f(0x81)) / 0x6 + parseInt(_0x2f567f(0x80)) / 0x7 + parseInt(_0x2f567f(0x84)) / 0x8 + -parseInt(_0x2f567f(0x7f)) / 0x9 * (parseInt(_0x2f567f(0x6b)) / 0xa);
            if (_0x375a07 === _0x3ec961)
                break;
            else
                _0x13f38e['push'](_0x13f38e['shift']());
        } catch (_0x4e4a08) {
            _0x13f38e['push'](_0x13f38e['shift']());
        }
    }
}(_0x4bdd, 0xe5702));
import _0x20f794 from 'node-fetch';
const WikimediaCommand = async (_0x5c18ca, _0x231c81) => {
    const _0x93392a = _0x1259, _0x2f872c = _0x5c18ca[_0x93392a(0x66)][_0x93392a(0x6c)](/^[\\/!#.]/), _0x52648e = _0x2f872c ? _0x2f872c[0x0] : '/', _0x852e79 = _0x5c18ca[_0x93392a(0x66)][_0x93392a(0x70)](_0x52648e) ? _0x5c18ca[_0x93392a(0x66)][_0x93392a(0x77)](_0x52648e[_0x93392a(0x6f)])['split']('\x20')[0x0][_0x93392a(0x82)]() : '', _0x72271f = _0x5c18ca[_0x93392a(0x66)][_0x93392a(0x77)](_0x52648e[_0x93392a(0x6f)] + _0x852e79[_0x93392a(0x6f)])[_0x93392a(0x7d)](), _0x34cc9b = [
            _0x93392a(0x6a),
            'wiki',
            _0x93392a(0x69)
        ];
    if (_0x34cc9b[_0x93392a(0x75)](_0x852e79)) {
        if (!_0x72271f)
            return _0x5c18ca[_0x93392a(0x68)](_0x93392a(0x76) + _0x5c18ca[_0x93392a(0x74)] + _0x93392a(0x78));
        try {
            await _0x5c18ca['React']('🕘'), await _0x5c18ca[_0x93392a(0x68)](_0x93392a(0x7e));
            const _0x342cfb = 'https://api-smd.onrender.com/api/wikimedia?query=' + encodeURIComponent(_0x72271f), _0xa913b3 = await _0x20f794(_0x342cfb), _0x7ebc6a = await _0xa913b3['json']();
            if (!_0xa913b3['ok'] || !_0x7ebc6a['status'] || !_0x7ebc6a[_0x93392a(0x72)]['length'])
                throw new Error(_0x93392a(0x79));
            const _0x6ed60f = _0x7ebc6a[_0x93392a(0x72)][0x0], {
                    title: _0x426496,
                    source: _0x504a3a,
                    image: _0x41d798
                } = _0x6ed60f;
            let _0x5aa683 = _0x93392a(0x7b) + _0x426496 + _0x93392a(0x73) + _0x504a3a + _0x93392a(0x7c);
            _0x7ebc6a[_0x93392a(0x72)][_0x93392a(0x77)](0x1)[_0x93392a(0x6e)]((_0x174608, _0x318539) => {
                const _0x58ccda = _0x93392a;
                _0x5aa683 += _0x318539 + 0x2 + '.\x20' + _0x174608[_0x58ccda(0x6d)] + '\x0a';
            }), await _0x231c81['sendMessage'](_0x5c18ca['from'], {
                'image': { 'url': _0x41d798 },
                'caption': _0x5aa683
            }, { 'quoted': _0x5c18ca });
        } catch (_0x21ee23) {
            console['error'](_0x21ee23), await _0x5c18ca[_0x93392a(0x68)]('Sorry,\x20an\x20error\x20occurred\x20while\x20fetching\x20the\x20data.\x20Please\x20try\x20again\x20later.');
        }
    }
};
function _0x1259(_0x1d7dbf, _0x412ac4) {
    const _0x4bdd5b = _0x4bdd();
    return _0x1259 = function (_0x125910, _0x3b736a) {
        _0x125910 = _0x125910 - 0x66;
        let _0x51fb30 = _0x4bdd5b[_0x125910];
        return _0x51fb30;
    }, _0x1259(_0x1d7dbf, _0x412ac4);
}
export default WikimediaCommand;
