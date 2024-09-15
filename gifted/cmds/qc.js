(function (_0x5a20a8, _0x42e19b) {
    const _0x26ba74 = _0x5d45, _0x34cc8b = _0x5a20a8();
    while (!![]) {
        try {
            const _0x535b92 = -parseInt(_0x26ba74(0x100)) / 0x1 + parseInt(_0x26ba74(0x10d)) / 0x2 * (parseInt(_0x26ba74(0x118)) / 0x3) + parseInt(_0x26ba74(0x10c)) / 0x4 + -parseInt(_0x26ba74(0x102)) / 0x5 + -parseInt(_0x26ba74(0xff)) / 0x6 + parseInt(_0x26ba74(0x10b)) / 0x7 + parseInt(_0x26ba74(0x113)) / 0x8;
            if (_0x535b92 === _0x42e19b)
                break;
            else
                _0x34cc8b['push'](_0x34cc8b['shift']());
        } catch (_0x4d261a) {
            _0x34cc8b['push'](_0x34cc8b['shift']());
        }
    }
}(_0xdfd2, 0xea0db));
function _0x5d45(_0x168383, _0x9f2083) {
    const _0xdfd24f = _0xdfd2();
    return _0x5d45 = function (_0x5d458f, _0x5ec1b1) {
        _0x5d458f = _0x5d458f - 0xfe;
        let _0x3862a5 = _0xdfd24f[_0x5d458f];
        return _0x3862a5;
    }, _0x5d45(_0x168383, _0x9f2083);
}
import _0x473388 from 'axios';
const quotedChat = async (_0x7f4489, _0x40227a) => {
    const _0x3035ce = _0x5d45;
    try {
        const _0x353cbd = _0x7f4489[_0x3035ce(0x116)][_0x3035ce(0x105)](/^[\\/!#.]/), _0x312747 = _0x353cbd ? _0x353cbd[0x0] : '/', _0x5ad207 = _0x7f4489[_0x3035ce(0x116)]['startsWith'](_0x312747) ? _0x7f4489[_0x3035ce(0x116)]['slice'](_0x312747[_0x3035ce(0x108)])[_0x3035ce(0x114)]('\x20')[0x0][_0x3035ce(0x110)]() : '', _0x110b5b = _0x7f4489[_0x3035ce(0x116)]['slice'](_0x312747[_0x3035ce(0x108)] + _0x5ad207['length'])[_0x3035ce(0x115)](), _0xdf453f = ['qc'];
        if (!_0xdf453f['includes'](_0x5ad207))
            return;
        if (!_0x110b5b)
            return _0x7f4489[_0x3035ce(0x11a)](_0x3035ce(0x11c));
        if (_0x110b5b[_0x3035ce(0x108)] > 0x1e)
            return _0x7f4489[_0x3035ce(0x11a)]('Please\x20provide\x20text\x20with\x20a\x20maximum\x20of\x2030\x20characters.');
        let _0x32826c;
        try {
            _0x32826c = await _0x40227a['profilePictureUrl'](_0x7f4489[_0x3035ce(0x119)] ? _0x7f4489[_0x3035ce(0x119)][_0x3035ce(0x112)] : _0x7f4489[_0x3035ce(0x112)], _0x3035ce(0x11e));
        } catch {
            _0x32826c = _0x3035ce(0x11b);
        }
        const _0x229ff5 = {
            'type': _0x3035ce(0x11d),
            'format': 'png',
            'backgroundColor': '#FFFFFF',
            'width': 0x200,
            'height': 0x300,
            'scale': 0x2,
            'messages': [{
                    'entities': [],
                    'avatar': !![],
                    'from': {
                        'id': 0x1,
                        'name': _0x7f4489[_0x3035ce(0x119)] ? (await _0x40227a[_0x3035ce(0x10e)](_0x7f4489['quoted'][_0x3035ce(0x112)]))[_0x3035ce(0x10f)] || _0x7f4489['quoted'][_0x3035ce(0x112)]['split']('@')[0x0] : _0x7f4489[_0x3035ce(0x104)],
                        'photo': { 'url': _0x32826c }
                    },
                    'text': _0x110b5b,
                    'replyMessage': {}
                }]
        };
        try {
            const _0x217707 = await _0x473388['post']('https://bot.lyo.su/quote/generate', _0x229ff5, { 'headers': { 'Content-Type': _0x3035ce(0x109) } }), _0x1aed04 = Buffer[_0x3035ce(0x106)](_0x217707[_0x3035ce(0x103)]['result'][_0x3035ce(0x11e)], _0x3035ce(0x107));
            await _0x40227a['sendImageAsSticker'](_0x7f4489[_0x3035ce(0x106)], _0x1aed04, _0x7f4489, {
                'packname': _0x3035ce(0x111),
                'author': _0x3035ce(0xfe)
            });
        } catch (_0x1f5fa7) {
            return console[_0x3035ce(0x117)](_0x3035ce(0x10a), _0x1f5fa7), _0x7f4489['reply'](_0x3035ce(0x101));
        }
    } catch (_0x4f8251) {
        console['error']('Unexpected\x20error\x20in\x20sticker\x20case:', _0x4f8251), _0x7f4489['reply']('An\x20unexpected\x20error\x20occurred.');
    }
};
function _0xdfd2() {
    const _0x207ddf = [
        'Please\x20provide\x20text\x20for\x20the\x20quote.',
        'quote',
        'image',
        '>\x20𝐆𝐈𝐅𝐓𝐄𝐃',
        '10105218abopaA',
        '15990YzkWbb',
        'Error\x20generating\x20sticker.\x20Please\x20try\x20again\x20later.',
        '4127235cNuiFY',
        'data',
        'pushName',
        'match',
        'from',
        'base64',
        'length',
        'application/json',
        'Error\x20during\x20HTTP\x20request:',
        '5626908YKjCZz',
        '6388972kwLYmY',
        '86198pVeLlR',
        'getContact',
        'notify',
        'toLowerCase',
        '𝐆𝐈𝐅𝐓𝐄𝐃',
        'sender',
        '2804424iIdsvK',
        'split',
        'trim',
        'body',
        'error',
        '51xbaFZY',
        'quoted',
        'reply',
        'https://srv.neoxr.tk/files/z8hI5T.jpg'
    ];
    _0xdfd2 = function () {
        return _0x207ddf;
    };
    return _0xdfd2();
}
export default quotedChat;
