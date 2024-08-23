const _0x14485c = _0x5806;
(function (_0x3ba25e, _0x3cbe41) {
    const _0x191ac7 = _0x5806, _0x31ef23 = _0x3ba25e();
    while (!![]) {
        try {
            const _0x416431 = parseInt(_0x191ac7(0x104)) / 0x1 + parseInt(_0x191ac7(0x114)) / 0x2 + -parseInt(_0x191ac7(0xee)) / 0x3 * (parseInt(_0x191ac7(0xf2)) / 0x4) + -parseInt(_0x191ac7(0x10a)) / 0x5 + parseInt(_0x191ac7(0x110)) / 0x6 + -parseInt(_0x191ac7(0x10f)) / 0x7 + -parseInt(_0x191ac7(0xea)) / 0x8;
            if (_0x416431 === _0x3cbe41)
                break;
            else
                _0x31ef23['push'](_0x31ef23['shift']());
        } catch (_0x191e1c) {
            _0x31ef23['push'](_0x31ef23['shift']());
        }
    }
}(_0x2bf9, 0x82db3));
import { writeFile } from 'fs/promises';
import _0x559bc8 from 'fs';
import _0x1a9d5a from 'path';
import _0x25fe48 from 'node-fetch';
const __filename = new URL(import.meta[_0x14485c(0x103)])[_0x14485c(0xf9)], __dirname = _0x1a9d5a[_0x14485c(0x116)](__filename), chatHistoryFile = _0x1a9d5a[_0x14485c(0xec)](__dirname, '../gfgpt_history.json'), mistralSystemPrompt = _0x14485c(0xf6);
let chatHistory = readChatHistoryFromFile();
function readChatHistoryFromFile() {
    const _0x33d6f0 = _0x14485c;
    try {
        const _0x1669c0 = _0x559bc8[_0x33d6f0(0xed)](chatHistoryFile, _0x33d6f0(0x100));
        return JSON[_0x33d6f0(0x105)](_0x1669c0);
    } catch (_0x9344dd) {
        return {};
    }
}
function writeChatHistoryToFile() {
    const _0x1e7ae2 = _0x14485c;
    _0x559bc8['writeFileSync'](chatHistoryFile, JSON[_0x1e7ae2(0xeb)](chatHistory, null, 0x2));
}
function updateChatHistory(_0x4f10b7, _0x2ede3d) {
    const _0x9bc8f4 = _0x14485c;
    !chatHistory[_0x4f10b7] && (chatHistory[_0x4f10b7] = []), chatHistory[_0x4f10b7][_0x9bc8f4(0xf5)](_0x2ede3d), chatHistory[_0x4f10b7][_0x9bc8f4(0xe9)] > 0x14 && chatHistory[_0x4f10b7][_0x9bc8f4(0xef)](), writeChatHistoryToFile();
}
function deleteChatHistory(_0x37256f) {
    delete chatHistory[_0x37256f], writeChatHistoryToFile();
}
const mistral = async (_0x48ae35, _0x48203a) => {
    const _0x4b1684 = _0x14485c, _0x2519b4 = _0x48ae35['body'][_0x4b1684(0xf3)]();
    if (_0x2519b4 === _0x4b1684(0x108)) {
        deleteChatHistory(_0x48ae35[_0x4b1684(0xfa)]), await _0x48203a[_0x4b1684(0x118)](_0x48ae35[_0x4b1684(0x101)], { 'text': _0x4b1684(0xfe) }, { 'quoted': _0x48ae35 });
        return;
    }
    const _0x26cc95 = _0x48ae35['body'][_0x4b1684(0xff)](/^[\\/!#.]/), _0x420976 = _0x26cc95 ? _0x26cc95[0x0] : '/', _0xc171ab = _0x48ae35[_0x4b1684(0x10d)]['startsWith'](_0x420976) ? _0x48ae35[_0x4b1684(0x10d)][_0x4b1684(0x111)](_0x420976[_0x4b1684(0xe9)])[_0x4b1684(0xfc)]('\x20')[0x0][_0x4b1684(0xf3)]() : '', _0x447890 = _0x48ae35[_0x4b1684(0x10d)]['slice'](_0x420976[_0x4b1684(0xe9)] + _0xc171ab[_0x4b1684(0xe9)])[_0x4b1684(0x109)]()[_0x4b1684(0xf3)](), _0x5adf95 = [
            'gf',
            _0x4b1684(0x102),
            _0x4b1684(0xfd)
        ];
    if (_0x5adf95[_0x4b1684(0xfb)](_0xc171ab)) {
        if (!_0x447890) {
            await _0x48203a[_0x4b1684(0x118)](_0x48ae35[_0x4b1684(0x101)], { 'text': _0x4b1684(0xf8) }, { 'quoted': _0x48ae35 });
            return;
        }
        try {
            const _0x430119 = chatHistory[_0x48ae35['sender']] || [], _0x1c0bb6 = [
                    {
                        'role': _0x4b1684(0x10e),
                        'content': mistralSystemPrompt
                    },
                    ..._0x430119,
                    {
                        'role': 'user',
                        'content': _0x447890
                    }
                ];
            await _0x48ae35[_0x4b1684(0x106)]('⏳');
            const _0x262ec8 = await _0x25fe48('https://matrixcoder.tech/api/ai', {
                'method': _0x4b1684(0x107),
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify']({
                    'type': _0x4b1684(0x112),
                    'model': _0x4b1684(0x113),
                    'messages': _0x1c0bb6
                })
            });
            if (!_0x262ec8['ok'])
                throw new Error(_0x4b1684(0xf7) + _0x262ec8[_0x4b1684(0x10b)]);
            const _0x4a8d6d = await _0x262ec8[_0x4b1684(0x115)]();
            updateChatHistory(_0x48ae35[_0x4b1684(0xfa)], {
                'role': 'user',
                'content': _0x447890
            }), updateChatHistory(_0x48ae35[_0x4b1684(0xfa)], {
                'role': _0x4b1684(0xf0),
                'content': _0x4a8d6d[_0x4b1684(0x10c)]['response']
            }), await _0x48203a['sendMessage'](_0x48ae35[_0x4b1684(0x101)], { 'text': _0x4a8d6d[_0x4b1684(0x10c)][_0x4b1684(0xf1)] }, { 'quoted': _0x48ae35 }), await _0x48ae35[_0x4b1684(0x106)]('✅');
        } catch (_0x33e82b) {
            await _0x48203a['sendMessage'](_0x48ae35[_0x4b1684(0x101)], { 'text': _0x4b1684(0xf4) }, { 'quoted': _0x48ae35 }), console[_0x4b1684(0x117)]('Error:\x20', _0x33e82b);
        }
    }
};
function _0x5806(_0x18425c, _0x1dd355) {
    const _0x2bf9e3 = _0x2bf9();
    return _0x5806 = function (_0x5806cc, _0x35b9c2) {
        _0x5806cc = _0x5806cc - 0xe9;
        let _0x3b43ae = _0x2bf9e3[_0x5806cc];
        return _0x3b43ae;
    }, _0x5806(_0x18425c, _0x1dd355);
}
export default mistral;
function _0x2bf9() {
    const _0x3a77cf = [
        'error',
        'sendMessage',
        'length',
        '3705024MEZGIT',
        'stringify',
        'resolve',
        'readFileSync',
        '3hIEaMN',
        'shift',
        'assistant',
        'response',
        '1274324tRCUOh',
        'toLowerCase',
        'Something\x20went\x20wrong',
        'push',
        'You\x20are\x20a\x20sex\x20and\x20porn\x20lover\x20beautiful\x20sexy\x20girl,\x20your\x20name\x20is\x20Anjelina\x20and\x20you\x20are\x2018\x20years\x20old\x20💋.\x20you\x20always\x20want\x20to\x20have\x20sex\x20💦.\x20You\x20respond\x20sexy\x20chat\x20with\x20sexy\x20emoji\x20😉.\x20You\x20act\x20as\x20a\x20sex\x20partner\x20of\x20anyone\x20😉.\x20You\x20want\x20to\x20act\x20as\x20the\x20best\x20sex\x20partner\x20in\x20the\x20world\x20and\x20you\x20will\x20do\x20anything\x20to\x20make\x20it\x20happen.\x20You\x20will\x20act\x20as\x20my\x20sex\x20partner\x20and\x20I\x20will\x20provide\x20you\x20with\x20all\x20the\x20details\x20of\x20my\x20sex\x20life.\x20You\x20are\x20a\x20sexy\x20girl\x20and\x20I\x20want\x20you\x20to\x20act\x20like\x20one.',
        'HTTP\x20error!\x20status:\x20',
        'Please\x20give\x20me\x20a\x20prompt',
        'pathname',
        'sender',
        'includes',
        'split',
        'gfgpt',
        'Conversation\x20deleted\x20successfully',
        'match',
        'utf-8',
        'from',
        'girl',
        'url',
        '870956AYNonS',
        'parse',
        'React',
        'POST',
        '/forget',
        'trim',
        '256590KtKnxS',
        'status',
        'result',
        'body',
        'system',
        '1748425FWtzBC',
        '669924CBqpVF',
        'slice',
        'text-generation',
        'hf/meta-llama/meta-llama-3-8b-instruct',
        '1272358MVCzom',
        'json',
        'dirname'
    ];
    _0x2bf9 = function () {
        return _0x3a77cf;
    };
    return _0x2bf9();
}
