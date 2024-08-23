function _0x229c(_0x3ba946, _0x3a9e61) {
    const _0x53eea2 = _0x53ee();
    return _0x229c = function (_0x229c6e, _0x3c84ec) {
        _0x229c6e = _0x229c6e - 0xd2;
        let _0x171f5b = _0x53eea2[_0x229c6e];
        return _0x171f5b;
    }, _0x229c(_0x3ba946, _0x3a9e61);
}
const _0x24c818 = _0x229c;
function _0x53ee() {
    const _0x194af0 = [
        'message',
        'patch',
        '/dynos',
        '130081TOxOfw',
        '66vAWCtz',
        'reply',
        '24305856KslTyi',
        '5509456kGmYaE',
        'KOYEB_API_TOKEN',
        '224748DvcsrC',
        'Error:',
        'https://api.heroku.com/apps/',
        '/deploy',
        '320nZlibU',
        'application/json',
        'HEROKU_APP_NAME',
        'Koyeb\x20API\x20token\x20or\x20app\x20name\x20is\x20not\x20set.',
        'Unsupported\x20deployment\x20platform:\x20',
        '1925230gcNqAk',
        '112eeFszi',
        '\x20service\x20restarted\x20successfully.',
        '4362cgEYGS',
        'koyeb',
        '*Usage:\x20.setvar\x20OWNER_NUMBER=2547XXXXXXXX*',
        'Environment\x20variable\x20',
        'Heroku\x20API\x20token\x20or\x20app\x20name\x20is\x20not\x20set.',
        'env',
        'DEPLOYMENT_PLATFORM',
        'post',
        'get',
        'Bearer\x20',
        'services',
        '\x20updated\x20on\x20',
        'response',
        'length',
        'HEROKU_API_TOKEN',
        'https://app.koyeb.com/v1/services/',
        'error',
        'resolve',
        '*Invalid\x20format.\x20Usage:\x20.setvar\x20OWNER_NUMBER=2547XXXXXXX',
        '\x20has\x20been\x20set\x20to\x20',
        'split',
        'toLowerCase',
        'dirname',
        '6373910vOCWvv',
        '2GxFOig',
        'Failed\x20to\x20update\x20environment\x20variable\x20or\x20restart\x20the\x20service\x20on\x20',
        'KOYEB_APP_NAME',
        'The\x20environmental\x20variable\x20',
        'url',
        'application/vnd.heroku+json;\x20version=3',
        'toUpperCase',
        'find',
        'appendFileSync',
        'delete',
        '.\x20Pleass\x20restart\x20bot\x20for\x20changes\x20to\x20take\x20effect.',
        'name',
        '9KspaHR',
        'data'
    ];
    _0x53ee = function () {
        return _0x194af0;
    };
    return _0x53ee();
}
(function (_0x2a3b43, _0x11bbc0) {
    const _0x197f61 = _0x229c, _0x1fc465 = _0x2a3b43();
    while (!![]) {
        try {
            const _0x55089c = -parseInt(_0x197f61(0xeb)) / 0x1 * (-parseInt(_0x197f61(0xda)) / 0x2) + parseInt(_0x197f61(0xfd)) / 0x3 * (parseInt(_0x197f61(0xf5)) / 0x4) + -parseInt(_0x197f61(0xd9)) / 0x5 + parseInt(_0x197f61(0xf1)) / 0x6 * (-parseInt(_0x197f61(0xfb)) / 0x7) + parseInt(_0x197f61(0xef)) / 0x8 * (-parseInt(_0x197f61(0xe6)) / 0x9) + -parseInt(_0x197f61(0xfa)) / 0xa * (-parseInt(_0x197f61(0xec)) / 0xb) + parseInt(_0x197f61(0xee)) / 0xc;
            if (_0x55089c === _0x11bbc0)
                break;
            else
                _0x1fc465['push'](_0x1fc465['shift']());
        } catch (_0x25b802) {
            _0x1fc465['push'](_0x1fc465['shift']());
        }
    }
}(_0x53ee, 0xd2feb));
import _0x810e4a from 'fs';
import _0x1a6054 from 'path';
import _0x1a223a from 'axios';
const __filename = new URL(import.meta[_0x24c818(0xde)])['pathname'], __dirname = _0x1a6054[_0x24c818(0xd8)](__filename), envFilePath = _0x1a6054[_0x24c818(0xd3)](__dirname, '../.env'), updateEnvFile = (_0x474e6d, _0x340fa8) => {
        const _0x1c0ad7 = _0x24c818, _0x376beb = _0x474e6d[_0x1c0ad7(0xe0)]() + '=' + _0x340fa8;
        _0x810e4a[_0x1c0ad7(0xe2)](envFilePath, _0x376beb + '\x0a');
    }, updateHerokuEnv = async (_0x5c6ca1, _0x102443) => {
        const _0x11a5bb = _0x24c818, _0x3aca11 = process[_0x11a5bb(0x102)][_0x11a5bb(0x10b)], _0x128b95 = process[_0x11a5bb(0x102)][_0x11a5bb(0xf7)];
        if (!_0x3aca11 || !_0x128b95)
            throw new Error(_0x11a5bb(0x101));
        await _0x1a223a[_0x11a5bb(0xe9)](_0x11a5bb(0xf3) + _0x128b95 + '/config-vars', { [_0x5c6ca1]: _0x102443 }, {
            'headers': {
                'Content-Type': _0x11a5bb(0xf6),
                'Authorization': _0x11a5bb(0x106) + _0x3aca11,
                'Accept': _0x11a5bb(0xdf)
            }
        }), await _0x1a223a[_0x11a5bb(0xe3)](_0x11a5bb(0xf3) + _0x128b95 + _0x11a5bb(0xea), {
            'headers': {
                'Content-Type': _0x11a5bb(0xf6),
                'Authorization': 'Bearer\x20' + _0x3aca11,
                'Accept': 'application/vnd.heroku+json;\x20version=3'
            }
        });
    }, updateKoyebEnv = async (_0x343d64, _0x231c49) => {
        const _0x3b1381 = _0x24c818, _0x5a770d = process[_0x3b1381(0x102)][_0x3b1381(0xf0)], _0x2d7927 = process[_0x3b1381(0x102)][_0x3b1381(0xdc)];
        if (!_0x5a770d || !_0x2d7927)
            throw new Error(_0x3b1381(0xf8));
        const _0x5c0c67 = await _0x1a223a[_0x3b1381(0x105)]('https://app.koyeb.com/v1/services', { 'headers': { 'Authorization': _0x3b1381(0x106) + _0x5a770d } }), _0x61acc9 = _0x5c0c67[_0x3b1381(0xe7)][_0x3b1381(0x107)][_0x3b1381(0xe1)](_0x3f0b01 => _0x3f0b01[_0x3b1381(0xe5)] === _0x2d7927)['id'];
        await _0x1a223a[_0x3b1381(0xe9)](_0x3b1381(0x10c) + _0x61acc9 + '/env', { [_0x343d64]: _0x231c49 }, { 'headers': { 'Authorization': _0x3b1381(0x106) + _0x5a770d } }), await _0x1a223a[_0x3b1381(0x104)]('https://app.koyeb.com/v1/services/' + _0x61acc9 + _0x3b1381(0xf4), {}, { 'headers': { 'Authorization': _0x3b1381(0x106) + _0x5a770d } });
    }, setEnvCommand = async (_0x3da67f, _0x36cb74) => {
        const _0x892c58 = _0x24c818;
        if (_0x36cb74[_0x892c58(0x10a)] !== 0x1) {
            _0x3da67f[_0x892c58(0xed)](_0x892c58(0xff));
            return;
        }
        const [_0x37704e] = _0x36cb74, [_0x40470e, _0x543bc0] = _0x37704e[_0x892c58(0xd6)]('=');
        if (!_0x40470e || !_0x543bc0) {
            _0x3da67f[_0x892c58(0xed)](_0x892c58(0xd4));
            return;
        }
        try {
            updateEnvFile(_0x40470e, _0x543bc0), _0x3da67f['reply'](_0x892c58(0xdd) + _0x40470e + _0x892c58(0xd5) + _0x543bc0 + _0x892c58(0xe4));
            const _0x4cb00e = process['env'][_0x892c58(0x103)];
            if (!_0x4cb00e)
                throw new Error('Deployment\x20platform\x20is\x20not\x20set.');
            switch (_0x4cb00e[_0x892c58(0xd7)]()) {
            case 'heroku':
                await updateHerokuEnv(_0x40470e, _0x543bc0);
                break;
            case _0x892c58(0xfe):
                await updateKoyebEnv(_0x40470e, _0x543bc0);
                break;
            default:
                throw new Error(_0x892c58(0xf9) + _0x4cb00e);
            }
            _0x3da67f[_0x892c58(0xed)](_0x892c58(0x100) + _0x40470e + _0x892c58(0x108) + _0x4cb00e + '.'), _0x3da67f['reply'](_0x4cb00e + _0x892c58(0xfc));
        } catch (_0x122f9f) {
            console[_0x892c58(0xd2)](_0x892c58(0xf2), _0x122f9f[_0x892c58(0x109)] ? _0x122f9f[_0x892c58(0x109)][_0x892c58(0xe7)] : _0x122f9f[_0x892c58(0xe8)]), _0x3da67f['reply'](_0x892c58(0xdb) + platform + '.');
        }
    };
export default setEnvCommand;
