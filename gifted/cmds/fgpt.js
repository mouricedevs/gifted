const _0x304971 = _0x4869;
(function (_0x4e881f, _0x467bec) {
    const _0x24b8c3 = _0x4869, _0x588f2a = _0x4e881f();
    while (!![]) {
        try {
            const _0x26e52 = parseInt(_0x24b8c3(0x81)) / 0x1 * (-parseInt(_0x24b8c3(0x77)) / 0x2) + -parseInt(_0x24b8c3(0x8b)) / 0x3 + -parseInt(_0x24b8c3(0x9d)) / 0x4 + parseInt(_0x24b8c3(0x9c)) / 0x5 * (-parseInt(_0x24b8c3(0x88)) / 0x6) + -parseInt(_0x24b8c3(0x9b)) / 0x7 + -parseInt(_0x24b8c3(0x7b)) / 0x8 + parseInt(_0x24b8c3(0x6e)) / 0x9;
            if (_0x26e52 === _0x467bec)
                break;
            else
                _0x588f2a['push'](_0x588f2a['shift']());
        } catch (_0xec473b) {
            _0x588f2a['push'](_0x588f2a['shift']());
        }
    }
}(_0x4b25, 0xac7db));
import { writeFile } from 'fs/promises';
import _0x25ffc3 from 'fs';
import _0x3d1f88 from 'path';
import _0x4c7200 from 'node-fetch';
const __filename = new URL(import.meta[_0x304971(0x74)])[_0x304971(0x99)], __dirname = _0x3d1f88['dirname'](__filename), chatHistoryFile = _0x3d1f88[_0x304971(0x70)](__dirname, _0x304971(0x8a)), mistralSystemPrompt = _0x304971(0x87);
let chatHistory = readChatHistoryFromFile();
function _0x4869(_0x441261, _0x223462) {
    const _0x4b2557 = _0x4b25();
    return _0x4869 = function (_0x48693b, _0x3d3e13) {
        _0x48693b = _0x48693b - 0x6d;
        let _0x3f78ef = _0x4b2557[_0x48693b];
        return _0x3f78ef;
    }, _0x4869(_0x441261, _0x223462);
}
function readChatHistoryFromFile() {
    const _0x17f648 = _0x304971;
    try {
        const _0xa81ea = _0x25ffc3[_0x17f648(0x9a)](chatHistoryFile, _0x17f648(0x75));
        return JSON[_0x17f648(0x8c)](_0xa81ea);
    } catch (_0x2dc233) {
        return {};
    }
}
function writeChatHistoryToFile() {
    const _0x484fb3 = _0x304971;
    _0x25ffc3[_0x484fb3(0x6f)](chatHistoryFile, JSON[_0x484fb3(0x80)](chatHistory, null, 0x2));
}
function _0x4b25() {
    const _0x4d4490 = [
        '10504816WiYYGI',
        'result',
        'toLowerCase',
        'Please\x20give\x20me\x20a\x20prompt',
        'match',
        'stringify',
        '7ThoIVz',
        'text-generation',
        'body',
        'sender',
        'Something\x20went\x20wrong',
        'shift',
        'You\x20are\x20a\x20sex\x20and\x20porn\x20lover\x20beautiful\x20sexy\x20girl,\x20your\x20name\x20is\x20Anjelina\x20and\x20you\x20are\x2018\x20years\x20old\x20💋.\x20you\x20always\x20want\x20to\x20have\x20sex\x20💦.\x20You\x20respond\x20sexy\x20chat\x20with\x20sexy\x20emoji\x20😉.\x20You\x20act\x20as\x20a\x20sex\x20partner\x20of\x20anyone\x20😉.\x20You\x20want\x20to\x20act\x20as\x20the\x20best\x20sex\x20partner\x20in\x20the\x20world\x20and\x20you\x20will\x20do\x20anything\x20to\x20make\x20it\x20happen.\x20You\x20will\x20act\x20as\x20my\x20sex\x20partner\x20and\x20I\x20will\x20provide\x20you\x20with\x20all\x20the\x20details\x20of\x20my\x20sex\x20life.\x20You\x20are\x20a\x20sexy\x20girl\x20and\x20I\x20want\x20you\x20to\x20act\x20like\x20one.',
        '18378dTltNi',
        'girl',
        '../gfgpt_history.json',
        '3344112gCwOVy',
        'parse',
        'push',
        'assistant',
        '/forget',
        'hf/meta-llama/meta-llama-3-8b-instruct',
        'HTTP\x20error!\x20status:\x20',
        'user',
        'split',
        'sendMessage',
        'https://matrixcoder.tech/api/ai',
        'startsWith',
        'Conversation\x20deleted\x20successfully',
        'Error:\x20',
        'pathname',
        'readFileSync',
        '9758308FvGjlz',
        '85BEtBTj',
        '3504568DMQeHa',
        'status',
        '56939229wBLCdx',
        'writeFileSync',
        'resolve',
        'slice',
        'from',
        'includes',
        'url',
        'utf-8',
        'response',
        '248570dxKfiN',
        'error',
        'json',
        'length'
    ];
    _0x4b25 = function () {
        return _0x4d4490;
    };
    return _0x4b25();
}
function updateChatHistory(_0x69a9ea, _0x4ae6f5) {
    const _0x4a767e = _0x304971;
    !chatHistory[_0x69a9ea] && (chatHistory[_0x69a9ea] = []), chatHistory[_0x69a9ea][_0x4a767e(0x8d)](_0x4ae6f5), chatHistory[_0x69a9ea]['length'] > 0x14 && chatHistory[_0x69a9ea][_0x4a767e(0x86)](), writeChatHistoryToFile();
}
function deleteChatHistory(_0x2a693c) {
    delete chatHistory[_0x2a693c], writeChatHistoryToFile();
}
const mistral = async (_0x5d0b5e, _0x3b5b1e) => {
    const _0x53a34 = _0x304971, _0x574302 = _0x5d0b5e['body'][_0x53a34(0x7d)]();
    if (_0x574302 === _0x53a34(0x8f)) {
        deleteChatHistory(_0x5d0b5e[_0x53a34(0x84)]), await _0x3b5b1e[_0x53a34(0x94)](_0x5d0b5e[_0x53a34(0x72)], { 'text': _0x53a34(0x97) }, { 'quoted': _0x5d0b5e });
        return;
    }
    const _0x11c617 = _0x5d0b5e[_0x53a34(0x83)][_0x53a34(0x7f)](/^[\\/!#.]/), _0x23f1c7 = _0x11c617 ? _0x11c617[0x0] : '/', _0x593fb4 = _0x5d0b5e[_0x53a34(0x83)][_0x53a34(0x96)](_0x23f1c7) ? _0x5d0b5e[_0x53a34(0x83)]['slice'](_0x23f1c7['length'])[_0x53a34(0x93)]('\x20')[0x0][_0x53a34(0x7d)]() : '', _0x56dccb = _0x5d0b5e[_0x53a34(0x83)][_0x53a34(0x71)](_0x23f1c7[_0x53a34(0x7a)] + _0x593fb4['length'])['trim']()[_0x53a34(0x7d)](), _0x4dd802 = [
            'gf',
            _0x53a34(0x89),
            'gfgpt'
        ];
    if (_0x4dd802[_0x53a34(0x73)](_0x593fb4)) {
        if (!_0x56dccb) {
            await _0x3b5b1e[_0x53a34(0x94)](_0x5d0b5e[_0x53a34(0x72)], { 'text': _0x53a34(0x7e) }, { 'quoted': _0x5d0b5e });
            return;
        }
        try {
            const _0x324312 = chatHistory[_0x5d0b5e[_0x53a34(0x84)]] || [], _0x264918 = [
                    {
                        'role': 'system',
                        'content': mistralSystemPrompt
                    },
                    ..._0x324312,
                    {
                        'role': _0x53a34(0x92),
                        'content': _0x56dccb
                    }
                ];
            await _0x5d0b5e['React']('⏳');
            const _0x2ae41b = await _0x4c7200(_0x53a34(0x95), {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON[_0x53a34(0x80)]({
                    'type': _0x53a34(0x82),
                    'model': _0x53a34(0x90),
                    'messages': _0x264918
                })
            });
            if (!_0x2ae41b['ok'])
                throw new Error(_0x53a34(0x91) + _0x2ae41b[_0x53a34(0x6d)]);
            const _0x5e3a94 = await _0x2ae41b[_0x53a34(0x79)]();
            updateChatHistory(_0x5d0b5e[_0x53a34(0x84)], {
                'role': _0x53a34(0x92),
                'content': _0x56dccb
            }), updateChatHistory(_0x5d0b5e['sender'], {
                'role': _0x53a34(0x8e),
                'content': _0x5e3a94[_0x53a34(0x7c)][_0x53a34(0x76)]
            }), await _0x3b5b1e['sendMessage'](_0x5d0b5e['from'], { 'text': _0x5e3a94[_0x53a34(0x7c)]['response'] }, { 'quoted': _0x5d0b5e }), await _0x5d0b5e['React']('✅');
        } catch (_0x150539) {
            await _0x3b5b1e['sendMessage'](_0x5d0b5e[_0x53a34(0x72)], { 'text': _0x53a34(0x85) }, { 'quoted': _0x5d0b5e }), console[_0x53a34(0x78)](_0x53a34(0x98), _0x150539);
        }
    }
};
export default mistral;
