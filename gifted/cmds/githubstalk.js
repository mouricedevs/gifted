(function (_0x36ac57, _0x169f2f) {
    const _0xc7d9bb = _0x8705, _0x32dc27 = _0x36ac57();
    while (!![]) {
        try {
            const _0x3443a4 = -parseInt(_0xc7d9bb(0xae)) / 0x1 * (-parseInt(_0xc7d9bb(0xc5)) / 0x2) + -parseInt(_0xc7d9bb(0x9e)) / 0x3 * (-parseInt(_0xc7d9bb(0x90)) / 0x4) + -parseInt(_0xc7d9bb(0xd2)) / 0x5 * (parseInt(_0xc7d9bb(0x92)) / 0x6) + -parseInt(_0xc7d9bb(0xbd)) / 0x7 * (-parseInt(_0xc7d9bb(0xb5)) / 0x8) + -parseInt(_0xc7d9bb(0x9b)) / 0x9 + -parseInt(_0xc7d9bb(0xc0)) / 0xa + -parseInt(_0xc7d9bb(0xb3)) / 0xb;
            if (_0x3443a4 === _0x169f2f)
                break;
            else
                _0x32dc27['push'](_0x32dc27['shift']());
        } catch (_0x4b6c0d) {
            _0x32dc27['push'](_0x32dc27['shift']());
        }
    }
}(_0x5e99, 0x6421e));
import _0x1b08b6 from 'axios';
function _0x8705(_0x35f2f7, _0x3c07d0) {
    const _0x5e99f9 = _0x5e99();
    return _0x8705 = function (_0x8705c3, _0x291d80) {
        _0x8705c3 = _0x8705c3 - 0x8d;
        let _0xbf024 = _0x5e99f9[_0x8705c3];
        return _0xbf024;
    }, _0x8705(_0x35f2f7, _0x3c07d0);
}
const githubStalk = async (_0x1d1ace, _0x8670fe) => {
    const _0x294c96 = _0x8705;
    try {
        const _0x20af9a = _0x1d1ace[_0x294c96(0x98)]['match'](/^[\\/!#.]/), _0x2331fe = _0x20af9a ? _0x20af9a[0x0] : '/', _0x499a68 = _0x1d1ace[_0x294c96(0x98)][_0x294c96(0xcc)](_0x2331fe) ? _0x1d1ace[_0x294c96(0x98)][_0x294c96(0xc4)](_0x2331fe['length'])[_0x294c96(0xa9)]('\x20')[0x0]['toLowerCase']() : '', _0x32229 = _0x1d1ace['body'][_0x294c96(0xc4)](_0x2331fe['length'] + _0x499a68[_0x294c96(0xa7)])['trim'](), _0x481577 = _0x32229[_0x294c96(0xa9)]('\x20'), _0x115eb5 = [
                _0x294c96(0xc8),
                _0x294c96(0xca),
                _0x294c96(0xad)
            ];
        if (_0x115eb5['includes'](_0x499a68)) {
            if (!_0x481577[0x0])
                return _0x1d1ace['reply'](_0x294c96(0x97) + _0x1d1ace['pushName'] + _0x294c96(0xc3));
            const _0x1b9573 = _0x481577[0x0];
            try {
                const _0x6f09ec = await _0x1b08b6['get']('https://api.github.com/users/' + _0x1b9573), _0x46ae87 = _0x6f09ec[_0x294c96(0x96)];
                if (_0x6f09ec[_0x294c96(0xce)] !== 0xc8)
                    return _0x1d1ace[_0x294c96(0x8e)]('❌\x20GitHub\x20user\x20not\x20found.');
                let _0x2235ee = _0x294c96(0xa1) + _0x46ae87[_0x294c96(0xd1)] + _0x294c96(0xba);
                _0x2235ee += '\x20\x20◦\x20\x20*Name*:\x20' + (_0x46ae87[_0x294c96(0xa4)] || _0x294c96(0xb9)) + '\x0a', _0x2235ee += _0x294c96(0xa0) + _0x46ae87[_0x294c96(0xd1)] + '\x0a', _0x2235ee += _0x294c96(0x9f) + (_0x46ae87['bio'] || _0x294c96(0xb9)) + '\x0a', _0x2235ee += _0x294c96(0x94) + _0x46ae87['id'] + '\x0a', _0x2235ee += '\x20\x20◦\x20\x20*Node\x20ID*:\x20' + _0x46ae87['node_id'] + '\x0a', _0x2235ee += _0x294c96(0xc9) + _0x46ae87[_0x294c96(0xbe)] + '\x0a', _0x2235ee += _0x294c96(0xa6) + _0x46ae87[_0x294c96(0x91)] + '\x0a', _0x2235ee += _0x294c96(0xbc) + _0x46ae87['type'] + '\x0a', _0x2235ee += _0x294c96(0xc6) + (_0x46ae87[_0x294c96(0xc1)] ? 'Yes' : 'No') + '\x0a', _0x2235ee += '\x20\x20◦\x20\x20*Company*:\x20' + (_0x46ae87[_0x294c96(0x8f)] || 'N/A') + '\x0a', _0x2235ee += _0x294c96(0xb8) + (_0x46ae87[_0x294c96(0xaa)] || 'N/A') + '\x0a', _0x2235ee += _0x294c96(0xac) + (_0x46ae87[_0x294c96(0xa5)] || _0x294c96(0xb9)) + '\x0a', _0x2235ee += _0x294c96(0x99) + (_0x46ae87['email'] || _0x294c96(0xb9)) + '\x0a', _0x2235ee += _0x294c96(0xcd) + _0x46ae87[_0x294c96(0x93)] + '\x0a', _0x2235ee += _0x294c96(0xbf) + _0x46ae87['public_gists'] + '\x0a', _0x2235ee += _0x294c96(0xb2) + _0x46ae87[_0x294c96(0xa2)] + '\x0a', _0x2235ee += _0x294c96(0xb6) + _0x46ae87[_0x294c96(0xc7)] + '\x0a', _0x2235ee += _0x294c96(0x95) + _0x46ae87[_0x294c96(0xc2)] + '\x0a', _0x2235ee += _0x294c96(0xd3) + _0x46ae87[_0x294c96(0x9a)] + '\x0a';
                const _0x5bfa46 = await _0x1b08b6['get'](_0x294c96(0x8d) + _0x1b9573 + '/repos?per_page=5&sort=stargazers_count&direction=desc'), _0x3fe5e1 = _0x5bfa46[_0x294c96(0x96)];
                if (_0x3fe5e1[_0x294c96(0xa7)] > 0x0) {
                    const _0x272a4b = _0x3fe5e1[_0x294c96(0xc4)](0x0, 0x5), _0x205b16 = _0x272a4b['map'](_0x5b5b06 => {
                            const _0x44696a = _0x294c96;
                            return _0x44696a(0xa8) + _0x5b5b06[_0x44696a(0xa4)] + '](' + _0x5b5b06[_0x44696a(0x91)] + _0x44696a(0x9c) + (_0x5b5b06['description'] || _0x44696a(0xb9)) + _0x44696a(0xab) + _0x5b5b06[_0x44696a(0xa3)] + _0x44696a(0xd0) + _0x5b5b06[_0x44696a(0xcf)];
                        }), _0x39335d = _0x294c96(0xb0) + _0x205b16[_0x294c96(0xbb)]('\x0a\x0a');
                    _0x2235ee += '\x0a\x0a' + _0x39335d;
                } else
                    _0x2235ee += _0x294c96(0xb1);
                await _0x8670fe[_0x294c96(0x9d)](_0x1d1ace[_0x294c96(0xcb)], {
                    'image': { 'url': _0x46ae87[_0x294c96(0xbe)] },
                    'caption': _0x2235ee
                }, { 'quoted': _0x1d1ace });
            } catch (_0x57f7e3) {
                console[_0x294c96(0xaf)]('Error\x20fetching\x20GitHub\x20data:', _0x57f7e3), await _0x8670fe['sendMessage'](_0x1d1ace[_0x294c96(0xcb)], 'An\x20error\x20occurred\x20while\x20fetching\x20GitHub\x20data.', { 'quoted': _0x1d1ace });
            }
        }
    } catch (_0x3343b5) {
        console[_0x294c96(0xaf)](_0x294c96(0xb7), _0x3343b5), _0x1d1ace['reply'](_0x294c96(0xb4));
    }
};
function _0x5e99() {
    const _0x5061f8 = [
        '7828zSAVHN',
        'html_url',
        '474aozWJa',
        'public_repos',
        '\x20\x20◦\x20\x20*ID*:\x20',
        '\x20\x20◦\x20\x20*Created\x20At*:\x20',
        'data',
        'Hello\x20*_',
        'body',
        '\x20\x20◦\x20\x20*Email*:\x20',
        'updated_at',
        '645399MNPDTE',
        ')\x0a\x20\x20◦\x20\x20*Description*:\x20',
        'sendMessage',
        '1041LmUrXB',
        '\x20\x20◦\x20\x20*Bio*:\x20',
        '\x20\x20◦\x20\x20*Username*:\x20@',
        '🌟\x20*GitHub\x20Profile\x20-\x20@',
        'followers',
        'stargazers_count',
        'name',
        'location',
        '\x20\x20◦\x20\x20*GitHub\x20URL*:\x20',
        'length',
        '\x20\x20◦\x20\x20*Repository*:\x20[',
        'split',
        'blog',
        '\x0a\x20\x20◦\x20\x20*Stars*:\x20',
        '\x20\x20◦\x20\x20*Location*:\x20',
        'ghstalk',
        '1759aMQVTv',
        'error',
        '📚\x20*Top\x20Starred\x20Repositories*\x0a\x0a',
        '\x0a\x0aNo\x20public\x20repositories\x20found.',
        '\x20\x20◦\x20\x20*Followers*:\x20',
        '2103134rNRoLv',
        'An\x20error\x20occurred\x20while\x20processing\x20the\x20command.',
        '1008344BwttGs',
        '\x20\x20◦\x20\x20*Following*:\x20',
        'Error\x20processing\x20the\x20command:',
        '\x20\x20◦\x20\x20*Blog*:\x20',
        'N/A',
        '*\x0a\x0a',
        'join',
        '\x20\x20◦\x20\x20*Type*:\x20',
        '21xOluWl',
        'avatar_url',
        '\x20\x20◦\x20\x20*Public\x20Gists*:\x20',
        '3943450dedsww',
        'site_admin',
        'created_at',
        '_,*\x0a\x20Provide\x20a\x20GitHub\x20username\x20to\x20stalk.',
        'slice',
        '842KpAPys',
        '\x20\x20◦\x20\x20*Admin*:\x20',
        'following',
        'githubstalk',
        '\x20\x20◦\x20\x20*Profile\x20URL*:\x20',
        'gitstalk',
        'from',
        'startsWith',
        '\x20\x20◦\x20\x20*Public\x20Repositories*:\x20',
        'status',
        'forks',
        '\x0a\x20\x20◦\x20\x20*Forks*:\x20',
        'login',
        '46225RZopcM',
        '\x20\x20◦\x20\x20*Updated\x20At*:\x20',
        'https://api.github.com/users/',
        'reply',
        'company'
    ];
    _0x5e99 = function () {
        return _0x5061f8;
    };
    return _0x5e99();
}
export default githubStalk;
