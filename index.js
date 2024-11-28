// GIFTED-TECH@2024 

// const _0x4877d6=_0x1259;(function(_0x496eed,_0x44d8ff){const _0x4a60ed=_0x1259,_0x1d3aa1=_0x496eed();while(!![]){try{const _0x36cd44=-parseInt(_0x4a60ed(0x131))/0x1+parseInt(_0x4a60ed(0x124))/0x2+parseInt(_0x4a60ed(0x154))/0x3*(-parseInt(_0x4a60ed(0x12f))/0x4)+-parseInt(_0x4a60ed(0x134))/0x5+parseInt(_0x4a60ed(0x175))/0x6*(-parseInt(_0x4a60ed(0x174))/0x7)+parseInt(_0x4a60ed(0x127))/0x8*(parseInt(_0x4a60ed(0x17d))/0x9)+parseInt(_0x4a60ed(0x16d))/0xa;if(_0x36cd44===_0x44d8ff)break;else _0x1d3aa1['push'](_0x1d3aa1['shift']());}catch(_0x38544e){_0x1d3aa1['push'](_0x1d3aa1['shift']());}}}(_0x370d,0xce2c7));const {default:GiftedConnect,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x4877d6(0x162)),{Callupdate,GroupUpdate,getBuffer,giftedUrls,giftedPlugins,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson,emojis,doReact,giftedmd,downloadMediaMessage,connectDB}=require(_0x4877d6(0x108)),express=require(_0x4877d6(0x155)),app=express(),port=process['env'][_0x4877d6(0x193)]||0x1f40,fs=require('fs'),P=require(_0x4877d6(0x169)),path=require(_0x4877d6(0x102)),os=require('os'),config=require(_0x4877d6(0x16e)),qrcode=require(_0x4877d6(0x14e)),util=require(_0x4877d6(0x144)),axios=require('axios'),{File}=require(_0x4877d6(0x132)),{PREFIX:prefix,MODE:botMode,BOT_PIC:botPic,BOT_NAME:botName,OWNER_NAME:ownerName,OWNER_NUMBER:ownerNumber,SUDO_NUMBERS}=config,sudoNumbers=SUDO_NUMBERS&&SUDO_NUMBERS['trim']()?SUDO_NUMBERS:_0x4877d6(0x18c),giftedMdgc=_0x4877d6(0x194),sessionName='./session',sessionDir=path[_0x4877d6(0x136)](__dirname,_0x4877d6(0x101)),credsPath=path['join'](sessionDir,_0x4877d6(0x145));!fs[_0x4877d6(0x14c)](sessionDir)&&fs[_0x4877d6(0x173)](sessionDir,{'recursive':!![]});const totalMemoryBytes=os[_0x4877d6(0x156)](),freeMemoryBytes=os['freemem'](),byteToKB=0x1/0x400,byteToMB=byteToKB/0x400,byteToGB=byteToMB/0x400;function formatBytes(_0x286362){const _0x3c5120=_0x4877d6;if(_0x286362>=Math['pow'](0x400,0x3))return(_0x286362*byteToGB)['toFixed'](0x2)+_0x3c5120(0x140);else{if(_0x286362>=Math['pow'](0x400,0x2))return(_0x286362*byteToMB)[_0x3c5120(0x14b)](0x2)+'\x20MB';else return _0x286362>=0x400?(_0x286362*byteToKB)['toFixed'](0x2)+_0x3c5120(0x178):_0x286362[_0x3c5120(0x14b)](0x2)+_0x3c5120(0xfe);}}if(!fs['existsSync'](__dirname+_0x4877d6(0x16b))){if(!config[_0x4877d6(0x187)])return console[_0x4877d6(0x103)]('Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20incase\x20you\x20logged\x20out\x20!!');const sess=config[_0x4877d6(0x187)],sessdata=sess[_0x4877d6(0x199)](_0x4877d6(0x123),''),sessfile=File[_0x4877d6(0x150)](_0x4877d6(0x106)+sessdata);sessfile[_0x4877d6(0x18d)]((_0x1d3283,_0x26af58)=>{const _0x4a0de3=_0x4877d6;if(_0x1d3283)throw _0x1d3283;fs[_0x4a0de3(0x182)](__dirname+'/session/creds.json',_0x26af58,()=>{const _0x171334=_0x4a0de3;console['log'](_0x171334(0x12d));});});}async function ConnectGiftedToWA(){const _0x25153d=_0x4877d6;await connectDB(),console[_0x25153d(0x103)](_0x25153d(0x10f));const _0x4f60c9=await giftedUrls();_0x4f60c9[_0x25153d(0x141)]>0x0?await giftedPlugins(_0x4f60c9):console[_0x25153d(0x103)](_0x25153d(0x198));const {state:_0x4b1c2c,saveCreds:_0xc5f735}=await useMultiFileAuthState(__dirname+'/session/');var {version:_0x2d026c}=await fetchLatestBaileysVersion();const _0x531949=GiftedConnect({'logger':P({'level':_0x25153d(0x192)}),'printQRInTerminal':![],'browser':Browsers[_0x25153d(0x107)]('Safari'),'syncFullHistory':!![],'auth':_0x4b1c2c,'version':_0x2d026c});_0x531949['ev']['on'](_0x25153d(0x160),_0x4f0c5c=>{const _0xdb934a=_0x25153d,{connection:_0x2bfce0,lastDisconnect:_0x39f470}=_0x4f0c5c;if(_0x2bfce0===_0xdb934a(0x165))_0x39f470[_0xdb934a(0x168)][_0xdb934a(0x159)][_0xdb934a(0x191)]!==DisconnectReason[_0xdb934a(0x135)]&&ConnectGiftedToWA();else{if(_0x2bfce0===_0xdb934a(0x17c)){console[_0xdb934a(0x103)](_0xdb934a(0x146));const _0x18905e=require(_0xdb934a(0x102));fs[_0xdb934a(0x13d)](_0xdb934a(0x116))[_0xdb934a(0x185)](_0x3c1798=>{const _0x31e1d3=_0xdb934a;_0x18905e[_0x31e1d3(0x149)](_0x3c1798)['toLowerCase']()==_0x31e1d3(0x129)&&require(_0x31e1d3(0x116)+_0x3c1798);}),console['log'](_0xdb934a(0x195)),_0x531949[_0xdb934a(0x196)](giftedMdgc),console['log'](_0xdb934a(0x16f));const _0x5a0987={'image':{'url':botPic},'caption':'\x0a*'+botName+'\x20𝐕𝟓\x20𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃*\x0a\x0a𝐏𝐫𝐞𝐟𝐢𝐱\x20\x20\x20\x20\x20\x20\x20:\x20*[\x20'+prefix+'\x20]*\x0a𝐌𝐨𝐝𝐞\x20\x20\x20\x20\x20\x20\x20:\x20*'+botMode+_0xdb934a(0x16a)+os[_0xdb934a(0x172)]()+'*\x0a𝐎𝐰𝐧𝐞𝐫\x20\x20\x20\x20\x20\x20\x20:\x20*'+ownerNumber+_0xdb934a(0x176)+formatBytes(freeMemoryBytes)+'/'+formatBytes(totalMemoryBytes)+_0xdb934a(0x109)+sudoNumbers+_0xdb934a(0x100)+global[_0xdb934a(0x104)],'contextInfo':{'forwardingScore':0x5,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0xdb934a(0x120),'newsletterName':_0xdb934a(0x15a),'serverMessageId':0x8f}}};_0x531949['sendMessage'](_0x531949[_0xdb934a(0x10c)]['id'],_0x5a0987,{'disappearingMessagesInChat':!![],'ephemeralExpiration':0x258});}}}),_0x531949['ev']['on']('creds.update',_0xc5f735),config[_0x25153d(0x11b)]===_0x25153d(0x112)&&_0x531949['ev']['on'](_0x25153d(0x158),async _0x1fb037=>{const _0x29df79=_0x25153d;_0x1fb037=_0x1fb037[_0x29df79(0x16c)][0x0];try{if(!_0x1fb037[_0x29df79(0x13f)][_0x29df79(0x166)]&&_0x1fb037[_0x29df79(0x147)]){const _0x4ed8a0=emojis[Math[_0x29df79(0xfd)](Math[_0x29df79(0x138)]()*emojis[_0x29df79(0x141)])];await doReact(_0x4ed8a0,_0x1fb037,_0x531949);}}catch(_0x140e1c){console[_0x29df79(0x168)]('Error\x20during\x20auto\x20reaction:',_0x140e1c);}}),_0x531949['ev']['on']('call',async _0x28e8f4=>await Callupdate(_0x28e8f4,_0x531949)),_0x531949['ev']['on'](_0x25153d(0x17e),async _0x616007=>await GroupUpdate(_0x531949,_0x616007)),_0x531949['ev']['on'](_0x25153d(0x158),async _0x216ce5=>{const _0x45547d=_0x25153d;_0x216ce5=_0x216ce5['messages'][0x0];const _0x19786d=_0x216ce5['key'][_0x45547d(0x13a)]||_0x216ce5['key'][_0x45547d(0x142)];if(!_0x216ce5||!_0x216ce5[_0x45547d(0x147)])return;_0x216ce5[_0x45547d(0x147)]=getContentType(_0x216ce5[_0x45547d(0x147)])===_0x45547d(0x17a)?_0x216ce5[_0x45547d(0x147)]['ephemeralMessage'][_0x45547d(0x147)]:_0x216ce5[_0x45547d(0x147)];if(_0x216ce5[_0x45547d(0x13f)]&&_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x142)]===_0x45547d(0x15d))try{if(config['AUTO_READ_STATUS']===_0x45547d(0x112)&&_0x216ce5[_0x45547d(0x13f)]){const _0x449bde=await jidNormalizedUser(_0x531949['user']['id']);await _0x531949[_0x45547d(0x15b)]([_0x216ce5[_0x45547d(0x13f)],_0x449bde]);}if(config[_0x45547d(0x18e)]===_0x45547d(0x112)){const _0x919761=await jidNormalizedUser(_0x531949['user']['id']),_0x4755c4=config[_0x45547d(0x121)]||'💚';_0x216ce5[_0x45547d(0x13f)]['remoteJid']&&_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x13a)]&&await _0x531949[_0x45547d(0x15f)](_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x142)],{'react':{'key':_0x216ce5[_0x45547d(0x13f)],'text':_0x4755c4}},{'statusJidList':[_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x13a)],_0x919761]});}if(config[_0x45547d(0x11c)]===_0x45547d(0x112)){const _0x17fca7=config['STATUS_REPLY_MSG']||_0x45547d(0x14a);_0x216ce5['key'][_0x45547d(0x142)]&&await _0x531949[_0x45547d(0x15f)](_0x19786d,{'text':_0x17fca7},{'quoted':_0x216ce5});}}catch(_0x208495){console[_0x45547d(0x168)](_0x45547d(0x10d),_0x208495);}const _0x3ba28c=giftedmd(_0x531949,_0x216ce5),_0x13227d=getContentType(_0x216ce5[_0x45547d(0x147)]),_0x3286ef=JSON[_0x45547d(0xfb)](_0x216ce5['message']),_0x24a467=_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x142)],_0x2742e8=_0x13227d==_0x45547d(0x153)&&_0x216ce5[_0x45547d(0x147)][_0x45547d(0x153)][_0x45547d(0x11e)]!=null?_0x216ce5[_0x45547d(0x147)][_0x45547d(0x153)]['contextInfo'][_0x45547d(0x13b)]||[]:[],_0x119446=_0x13227d==='conversation'?_0x216ce5[_0x45547d(0x147)]['conversation']:_0x13227d===_0x45547d(0x153)?_0x216ce5[_0x45547d(0x147)][_0x45547d(0x153)][_0x45547d(0x164)]:_0x13227d==_0x45547d(0x177)&&_0x216ce5[_0x45547d(0x147)][_0x45547d(0x177)][_0x45547d(0x110)]?_0x216ce5[_0x45547d(0x147)][_0x45547d(0x177)][_0x45547d(0x110)]:_0x13227d==_0x45547d(0x10a)&&_0x216ce5[_0x45547d(0x147)][_0x45547d(0x10a)]['caption']?_0x216ce5[_0x45547d(0x147)][_0x45547d(0x10a)]['caption']:'',_0x2669d4=_0x119446['startsWith'](prefix),_0x30d4a9=_0x2669d4?_0x119446['slice'](prefix['length'])[_0x45547d(0x197)]()[_0x45547d(0x105)]('\x20')[_0x45547d(0x151)]()['toLowerCase']():'',_0x17b318=_0x119446['trim']()[_0x45547d(0x105)](/ +/)[_0x45547d(0x12a)](0x1),_0x23b9e6=_0x17b318[_0x45547d(0x136)]('\x20'),_0x39cb21=_0x24a467['endsWith']('@g.us'),_0x74aad3=_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x166)]?_0x531949['user']['id']['split'](':')[0x0]+_0x45547d(0x181)||_0x531949[_0x45547d(0x10c)]['id']:_0x216ce5[_0x45547d(0x13f)][_0x45547d(0x13a)]||_0x216ce5[_0x45547d(0x13f)]['remoteJid'],_0x5bdfd0=_0x74aad3[_0x45547d(0x105)]('@')[0x0],_0x5da8ac=_0x531949[_0x45547d(0x10c)]['id']['split'](':')[0x0],_0x406272=_0x216ce5[_0x45547d(0x15e)]||'Hello\x20User',_0x241986=_0x5da8ac[_0x45547d(0x179)](_0x5bdfd0),_0x481b91=_0x45547d(0x12c),_0x1cb350=config['OWNER_NUMBER'],_0x1f1ba7=config[_0x45547d(0x157)]?config['SUDO_NUMBERS'][_0x45547d(0x105)](','):[],_0x47abac=_0x481b91[_0x45547d(0x105)](','),_0x2ea3b5=[...new Set([..._0x1cb350,..._0x1f1ba7,..._0x47abac])],_0x319925=_0x2ea3b5['includes'](_0x5bdfd0)||_0x241986,_0x40a6dc=await jidNormalizedUser(_0x531949[_0x45547d(0x10c)]['id']),_0x405820=_0x39cb21?await _0x531949['groupMetadata'](_0x24a467)[_0x45547d(0x184)](_0x50e746=>{}):'',_0x168b3c=_0x39cb21?_0x405820[_0x45547d(0x114)]:'',_0x2ee90b=_0x39cb21?await _0x405820[_0x45547d(0x161)]:'',_0x2c7fd9=_0x39cb21?await getGroupAdmins(_0x2ee90b):'',_0x259b2e=_0x39cb21?_0x2c7fd9['includes'](_0x40a6dc):![],_0x4fb2e5=_0x39cb21?_0x2c7fd9[_0x45547d(0x179)](_0x74aad3):![],_0x83100=_0x3ba28c[_0x45547d(0x147)]['reactionMessage']?!![]:![],_0x3f6e92=_0x49be6b=>{const _0x42b2e0=_0x45547d;_0x531949[_0x42b2e0(0x15f)](_0x24a467,{'text':_0x49be6b},{'quoted':_0x216ce5});};_0x531949[_0x45547d(0x113)]=async(_0x3bd6a0,_0x112bfb,_0x4fc521,_0x23f860,_0x42fc32={})=>{const _0x3d1d9a=_0x45547d;let _0x28ce2e='',_0x45e30b=await axios[_0x3d1d9a(0x143)](_0x112bfb);_0x28ce2e=_0x45e30b[_0x3d1d9a(0x189)][_0x3d1d9a(0x152)];if(_0x28ce2e[_0x3d1d9a(0x105)]('/')[0x1]===_0x3d1d9a(0x180))return _0x531949[_0x3d1d9a(0x15f)](_0x3bd6a0,{'video':await getBuffer(_0x112bfb),'caption':_0x4fc521,'gifPlayback':!![],..._0x42fc32},{'quoted':_0x23f860,..._0x42fc32});let _0xc3becb=_0x28ce2e[_0x3d1d9a(0x105)]('/')[0x0]+_0x3d1d9a(0x11a);if(_0x28ce2e===_0x3d1d9a(0x115))return _0x531949['sendMessage'](_0x3bd6a0,{'document':await getBuffer(_0x112bfb),'mimetype':_0x3d1d9a(0x115),'caption':_0x4fc521,..._0x42fc32},{'quoted':_0x23f860,..._0x42fc32});if(_0x28ce2e[_0x3d1d9a(0x105)]('/')[0x0]===_0x3d1d9a(0x12e))return _0x531949[_0x3d1d9a(0x15f)](_0x3bd6a0,{'image':await getBuffer(_0x112bfb),'caption':_0x4fc521,..._0x42fc32},{'quoted':_0x23f860,..._0x42fc32});if(_0x28ce2e[_0x3d1d9a(0x105)]('/')[0x0]===_0x3d1d9a(0x18a))return _0x531949[_0x3d1d9a(0x15f)](_0x3bd6a0,{'video':await getBuffer(_0x112bfb),'caption':_0x4fc521,'mimetype':_0x3d1d9a(0x12b),..._0x42fc32},{'quoted':_0x23f860,..._0x42fc32});if(_0x28ce2e[_0x3d1d9a(0x105)]('/')[0x0]===_0x3d1d9a(0x139))return _0x531949[_0x3d1d9a(0x15f)](_0x3bd6a0,{'audio':await getBuffer(_0x112bfb),'caption':_0x4fc521,'mimetype':'audio/mpeg',..._0x42fc32},{'quoted':_0x23f860,..._0x42fc32});};if(!_0x319925&&config[_0x45547d(0x188)]===_0x45547d(0xfc))return;if(!_0x319925&&_0x39cb21&&config[_0x45547d(0x188)]===_0x45547d(0x126))return;if(!_0x319925&&!_0x39cb21&&config['MODE']===_0x45547d(0x18f))return;if(_0x47abac[_0x45547d(0x179)](_0x5bdfd0)){if(_0x83100)return;_0x3ba28c[_0x45547d(0x163)]('💜');}if(config[_0x45547d(0x167)]===_0x45547d(0x112)){const _0x4eb89e=_0x45547d(0x148);let {data:_0x57950b}=await axios[_0x45547d(0x14d)](_0x4eb89e);for(vr in _0x57950b){if(new RegExp('\x5cb'+vr+'\x5cb','gi')[_0x45547d(0x11f)](_0x119446))_0x531949['sendMessage'](_0x24a467,{'audio':{'url':_0x57950b[vr]},'mimetype':_0x45547d(0x170),'ptt':!![]},{'quoted':_0x216ce5});}}if(config[_0x45547d(0x15c)]===_0x45547d(0x11d))await _0x531949['sendPresenceUpdate'](_0x45547d(0x118),_0x24a467,[_0x216ce5[_0x45547d(0x13f)]]);if(config['PRESENCE']===_0x45547d(0x133))await _0x531949['sendPresenceUpdate'](_0x45547d(0x133),_0x24a467,[_0x216ce5['key']]);if(config['PRESENCE']===_0x45547d(0x111))await _0x531949[_0x45547d(0x128)]('available',_0x24a467,[_0x216ce5[_0x45547d(0x13f)]]);else await _0x531949[_0x45547d(0x128)](_0x45547d(0x125),_0x24a467,[_0x216ce5[_0x45547d(0x13f)]]);if(config['AUTO_READ_MESSAGES']===_0x45547d(0x112))await _0x531949[_0x45547d(0x15b)]([_0x216ce5[_0x45547d(0x13f)]]);if(config['AUTO_BLOCK']){const _0x3ee2ce=config['AUTO_BLOCK'][_0x45547d(0x105)](',')[_0x45547d(0x10e)](_0x533fd2=>_0x533fd2[_0x45547d(0x197)]());_0x3ee2ce[_0x45547d(0x17f)](_0x3b4ee0=>_0x3ba28c['sender'][_0x45547d(0x10b)](_0x3b4ee0))&&await _0x531949[_0x45547d(0x119)](_0x3ba28c[_0x45547d(0x122)],_0x45547d(0x137));}const _0x1291b0=require('./gift'),_0x23757b=require('events');_0x23757b['defaultMaxListeners']=0x3e8;const _0x51283d=_0x2669d4?_0x119446['slice'](0x1)['trim']()[_0x45547d(0x105)]('\x20')[0x0]['toLowerCase']():![];if(_0x2669d4){const _0xbd4211=_0x1291b0[_0x45547d(0x13e)][_0x45547d(0x13c)](_0x3c6fb6=>_0x3c6fb6['pattern']===_0x51283d)||_0x1291b0[_0x45547d(0x13e)][_0x45547d(0x13c)](_0x5d60b3=>_0x5d60b3[_0x45547d(0x183)]&&_0x5d60b3[_0x45547d(0x183)][_0x45547d(0x179)](_0x51283d));if(_0xbd4211){if(_0xbd4211[_0x45547d(0x163)])_0x531949['sendMessage'](_0x24a467,{'react':{'text':_0xbd4211['react'],'key':_0x216ce5[_0x45547d(0x13f)]}});try{_0xbd4211[_0x45547d(0x186)](_0x531949,_0x216ce5,_0x3ba28c,{'from':_0x24a467,'quoted':_0x2742e8,'body':_0x119446,'isCmd':_0x2669d4,'command':_0x30d4a9,'args':_0x17b318,'q':_0x23b9e6,'isGroup':_0x39cb21,'sender':_0x74aad3,'senderNumber':_0x5bdfd0,'botNumber2':_0x40a6dc,'botNumber':_0x5da8ac,'pushname':_0x406272,'isMe':_0x241986,'isOwner':_0x319925,'groupMetadata':_0x405820,'groupName':_0x168b3c,'participants':_0x2ee90b,'groupAdmins':_0x2c7fd9,'isBotAdmins':_0x259b2e,'isAdmins':_0x4fb2e5,'reply':_0x3f6e92});}catch(_0x5ae22b){console[_0x45547d(0x168)](_0x45547d(0x171)+_0x5ae22b),_0x531949[_0x45547d(0x15f)](_0x24a467,{'text':_0x45547d(0x130)+_0x5ae22b});}}}_0x1291b0['commands'][_0x45547d(0x10e)](async _0x20aa3f=>{const _0x81b719=_0x45547d;if(_0x119446&&_0x20aa3f['on']==='body')_0x20aa3f['function'](_0x531949,_0x216ce5,_0x3ba28c,{'from':_0x24a467,'l':l,'quoted':_0x2742e8,'body':_0x119446,'isCmd':_0x2669d4,'command':_0x20aa3f,'args':_0x17b318,'q':_0x23b9e6,'isGroup':_0x39cb21,'sender':_0x74aad3,'senderNumber':_0x5bdfd0,'botNumber2':_0x40a6dc,'botNumber':_0x5da8ac,'pushname':_0x406272,'isMe':_0x241986,'isOwner':_0x319925,'groupMetadata':_0x405820,'groupName':_0x168b3c,'participants':_0x2ee90b,'groupAdmins':_0x2c7fd9,'isBotAdmins':_0x259b2e,'isAdmins':_0x4fb2e5,'reply':_0x3f6e92});else{if(_0x216ce5['q']&&_0x20aa3f['on']===_0x81b719(0x164))_0x20aa3f[_0x81b719(0x186)](_0x531949,_0x216ce5,_0x3ba28c,{'from':_0x24a467,'l':l,'quoted':_0x2742e8,'body':_0x119446,'isCmd':_0x2669d4,'command':_0x20aa3f,'args':_0x17b318,'q':_0x23b9e6,'isGroup':_0x39cb21,'sender':_0x74aad3,'senderNumber':_0x5bdfd0,'botNumber2':_0x40a6dc,'botNumber':_0x5da8ac,'pushname':_0x406272,'isMe':_0x241986,'isOwner':_0x319925,'groupMetadata':_0x405820,'groupName':_0x168b3c,'participants':_0x2ee90b,'groupAdmins':_0x2c7fd9,'isBotAdmins':_0x259b2e,'isAdmins':_0x4fb2e5,'reply':_0x3f6e92});else{if((_0x20aa3f['on']===_0x81b719(0x12e)||_0x20aa3f['on']===_0x81b719(0x17b))&&_0x216ce5[_0x81b719(0x190)]===_0x81b719(0x177))_0x20aa3f[_0x81b719(0x186)](_0x531949,_0x216ce5,_0x3ba28c,{'from':_0x24a467,'l':l,'quoted':_0x2742e8,'body':_0x119446,'isCmd':_0x2669d4,'command':_0x20aa3f,'args':_0x17b318,'q':_0x23b9e6,'isGroup':_0x39cb21,'sender':_0x74aad3,'senderNumber':_0x5bdfd0,'botNumber2':_0x40a6dc,'botNumber':_0x5da8ac,'pushname':_0x406272,'isMe':_0x241986,'isOwner':_0x319925,'groupMetadata':_0x405820,'groupName':_0x168b3c,'participants':_0x2ee90b,'groupAdmins':_0x2c7fd9,'isBotAdmins':_0x259b2e,'isAdmins':_0x4fb2e5,'reply':_0x3f6e92});else _0x20aa3f['on']===_0x81b719(0xff)&&_0x216ce5[_0x81b719(0x190)]===_0x81b719(0x18b)&&_0x20aa3f['function'](_0x531949,_0x216ce5,_0x3ba28c,{'from':_0x24a467,'l':l,'quoted':_0x2742e8,'body':_0x119446,'isCmd':_0x2669d4,'command':_0x20aa3f,'args':_0x17b318,'q':_0x23b9e6,'isGroup':_0x39cb21,'sender':_0x74aad3,'senderNumber':_0x5bdfd0,'botNumber2':_0x40a6dc,'botNumber':_0x5da8ac,'pushname':_0x406272,'isMe':_0x241986,'isOwner':_0x319925,'groupMetadata':_0x405820,'groupName':_0x168b3c,'participants':_0x2ee90b,'groupAdmins':_0x2c7fd9,'isBotAdmins':_0x259b2e,'isAdmins':_0x4fb2e5,'reply':_0x3f6e92});}}});});}setTimeout(()=>{ConnectGiftedToWA();},0xfa0),app[_0x4877d6(0x14d)]('/',(_0x5624c6,_0x24a393)=>{const _0x29533b=_0x4877d6;_0x24a393['sendFile'](path[_0x29533b(0x136)](__dirname,'gift/gifted.html'));}),app[_0x4877d6(0x117)](port,()=>console[_0x4877d6(0x103)](_0x4877d6(0x14f)+port));function _0x1259(_0x3fbcd2,_0x568ba4){const _0x370d00=_0x370d();return _0x1259=function(_0x125968,_0x249ec2){_0x125968=_0x125968-0xfb;let _0x1b3be5=_0x370d00[_0x125968];return _0x1b3be5;},_0x1259(_0x3fbcd2,_0x568ba4);}function _0x370d(){const _0x2bea53=['function','SESSION_ID','MODE','headers','video','stickerMessage','No\x20Sudos\x20set','download','AUTOLIKE_STATUS','groups','type','statusCode','silent','PORT','KgKy1JztMhYKGqQKzqxgPo','✅️\x20Plugins\x20Synced\x20✅️','groupAcceptInvite','trim','No\x20plugins\x20fetched.','replace','stringify','private','floor','\x20bytes','sticker','*\x0a𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥𝐬\x20\x20\x20:\x20*youtube.com/@giftedtechnexus*\x0a𝐔𝐩𝐝𝐚𝐭𝐞𝐬\x20\x20\x20\x20:\x20*https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l*\x0a\x0a>\x20','session','path','log','footer','split','https://mega.nz/file/','macOS','./gift','*\x0a𝐒𝐮𝐝𝐨𝐬\x20\x20\x20\x20\x20\x20\x20:\x20*','videoMessage','startsWith','user','Error\x20processing\x20status\x20actions:','map','🌍\x20Database\x20Synced\x20🌍','caption','online','true','sendFileUrl','subject','application/pdf','./cmds/','listen','composing','updateBlockStatus','Message','AUTO_REACT','AUTO_REPLY_STATUS','typing','contextInfo','test','120363279165281090@newsletter','AUTOLIKE_EMOJI','sender','Gifted~','175862OJYKsq','unavailable','inbox','8272VYbeBH','sendPresenceUpdate','.js','slice','video/mp4','254728782591,254762016957,254715206562,254110853827,254728746852','Session\x20File\x20Loaded\x20✅','image','8LqlDKv','[GIFTED-MD\x20PLUGIN\x20ERROR]:\x0a','66394ZkwYpr','megajs','recording','2159300KPDkbB','loggedOut','join','block','random','audio','participant','quotedMessage','find','readdirSync','commands','key','\x20GB','length','remoteJid','head','util','creds.json','⏱️\x20Starting\x20Gifted\x20Md\x20⏱️','message','https://raw.githubusercontent.com/DarkYasiyaofc/VOICE/main/Voice-Raw/FROZEN-V2','extname','✅\x20Status\x20Viewed\x20By\x20Gifted-Md','toFixed','existsSync','get','qrcode-terminal','Gifted\x20Server\x20Live\x20on\x20http://localhost:','fromURL','shift','content-type','extendedTextMessage','1158051ZwkiqE','express','totalmem','SUDO_NUMBERS','messages.upsert','output','GIFTED-TECH','readMessages','PRESENCE','status@broadcast','pushName','sendMessage','connection.update','participants','gifted-baileys','react','text','close','fromMe','AUTO_AUDIO','error','pino','*\x0a𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦\x20\x20\x20\x20:\x20*','/session/creds.json','messages','30455890oUEHaL','./set','💜\x20Gifted\x20Md\x20is\x20Active\x20💜','audio/mpeg','[GIFTED-MD\x20PLUGIN\x20ERROR]:\x20','platform','mkdirSync','231651afgAuh','306bazajU','*\x0a𝐒𝐞𝐫𝐯𝐞𝐫\x20𝐑𝐚𝐦:\x20*','imageMessage','\x20KB','includes','ephemeralMessage','photo','open','5823qzUVtL','group-participants.update','some','gif','@s.whatsapp.net','writeFile','alias','catch','forEach'];_0x370d=function(){return _0x2bea53;};return _0x370d();}

// GIFTED-TECH@2024 




















































const {
default: GiftedConnect,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('gifted-baileys')

const {
    Callupdate,
    GroupUpdate,
    getBuffer,
    giftedUrls, 
    giftedPlugins,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    emojis,
    doReact,
    giftedmd,
    downloadMediaMessage,
    connectDB,
} = require('./gift');

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const fs = require('fs')
const P = require('pino')
const path = require('path')
const os = require('os')
const config = require('./set')
const qrcode = require('qrcode-terminal')
const util = require('util')
const axios = require('axios')
const { File } = require('megajs')
const { PREFIX: prefix, MODE: botMode, BOT_PIC: botPic, BOT_NAME: botName, OWNER_NAME: ownerName, OWNER_NUMBER: ownerNumber, SUDO_NUMBERS } = config;
const sudoNumbers = SUDO_NUMBERS && SUDO_NUMBERS.trim() ? SUDO_NUMBERS : "No Sudos set";
// Auto Join Group Chat👇👇
const giftedMdgc = 'KgKy1JztMhYKGqQKzqxgPo';

const sessionName = "./session";
const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
        }

const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}


if (!fs.existsSync(__dirname + '/session/creds.json')) {
if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env incase you logged out !!')
const sess = config.SESSION_ID
const sessdata = sess.replace('Gifted~', '');
const sessfile = File.fromURL(`https://mega.nz/file/${sessdata}`)
sessfile.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/session/creds.json', data, () => {
console.log("Session File Loaded ✅")
})})}

async function ConnectGiftedToWA() {
await connectDB();
console.log("🌍 Database Synced 🌍");
// Loading Plugins Externally👇👇
const pluginUrls = await giftedUrls();
    if (pluginUrls.length > 0) {
        await giftedPlugins(pluginUrls);
    } else {
        console.log("No plugins fetched.");
    } 
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/session/')
var { version } = await fetchLatestBaileysVersion()

const Gifted = GiftedConnect({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Safari"),
        syncFullHistory: true,
        auth: state,
        version
        })
    
Gifted.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
ConnectGiftedToWA()
}
} else if (connection === 'open') {
console.log('⏱️ Starting Gifted Md ⏱️')
const path = require('path');
// Reading Plugins After Loading Externally 👇👇
fs.readdirSync("./cmds/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./cmds/" + plugin); 
/* fs.readdirSync("./gifted/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./gifted/" + plugin); */
}
});
console.log('✅️ Plugins Synced ✅️')
// Auto Join Group Chat👇👇
Gifted.groupAcceptInvite(giftedMdgc);
console.log('💜 Gifted Md is Active 💜')

const startMess = {
        image: { url: botPic },
        caption: `
*${botName} 𝐕𝟓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃*

𝐏𝐫𝐞𝐟𝐢𝐱       : *[ ${prefix} ]*
𝐌𝐨𝐝𝐞       : *${botMode}*
𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦    : *${os.platform()}*
𝐎𝐰𝐧𝐞𝐫       : *${ownerNumber}*
𝐒𝐞𝐫𝐯𝐞𝐫 𝐑𝐚𝐦: *${formatBytes(freeMemoryBytes)}/${formatBytes(totalMemoryBytes)}*
𝐒𝐮𝐝𝐨𝐬       : *${sudoNumbers}*
𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥𝐬   : *youtube.com/@giftedtechnexus*
𝐔𝐩𝐝𝐚𝐭𝐞𝐬    : *https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l*

> ${global.footer}`,
        contextInfo: {
                  forwardingScore: 5,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363279165281090@newsletter',
                  newsletterName: "GIFTED-TECH",
                  serverMessageId: 143
                }
              }
      };

Gifted.sendMessage(Gifted.user.id, startMess, { disappearingMessagesInChat: true, ephemeralExpiration: 600, })

}
})
Gifted.ev.on('creds.update', saveCreds)  

        if (config.AUTO_REACT === "true") {
            Gifted.ev.on('messages.upsert', async (mek) => {
                mek = mek.messages[0];
                try {
                    if (!mek.key.fromMe && mek.message) {
                        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                        await doReact(randomEmoji, mek, Gifted);
                    }
                } catch (err) {
                    console.error('Error during auto reaction:', err);
                }
            });
        }
    
Gifted.ev.on("call", async (json) => await Callupdate(json, Gifted));
Gifted.ev.on("group-participants.update", async (mek) => await GroupUpdate(Gifted, mek));


Gifted.ev.on('messages.upsert', async(mek) => {
mek = mek.messages[0];

const fromJid = mek.key.participant || mek.key.remoteJid;

if (!mek || !mek.message) return;

mek.message = (getContentType(mek.message) === 'ephemeralMessage') 
    ? mek.message.ephemeralMessage.message 
    : mek.message;

if (mek.key && mek.key.remoteJid === "status@broadcast") {
    try {
 
        if (config.AUTO_READ_STATUS === "true" && mek.key) {
            const giftedtech = await jidNormalizedUser(Gifted.user.id);
            await Gifted.readMessages([mek.key, giftedtech]);
        }

        if (config.AUTOLIKE_STATUS === "true") {
            const giftedtech = await jidNormalizedUser(Gifted.user.id);
            const customEmoji = config.AUTOLIKE_EMOJI || '💚'; 
            if (mek.key.remoteJid && mek.key.participant) {
                await Gifted.sendMessage(
                    mek.key.remoteJid,
                    { react: { key: mek.key, text: customEmoji } },
                    { statusJidList: [mek.key.participant, giftedtech] }
                );
            }
        }
     
        if (config.AUTO_REPLY_STATUS === "true") {
            const customMessage = config.STATUS_REPLY_MSG || '✅ Status Viewed By Gifted-Md';
            if (mek.key.remoteJid) {
                await Gifted.sendMessage(
                    fromJid,
                    { text: customMessage },
                    { quoted: mek }
                );
            }
        } 
    } catch (error) {
        console.error("Error processing status actions:", error);
    }
}
    
const m = giftedmd(Gifted, mek);
const type = getContentType(mek.message);
const content = JSON.stringify(mek.message);
const from = mek.key.remoteJid;
const quoted = 
  type == 'extendedTextMessage' && 
  mek.message.extendedTextMessage.contextInfo != null 
    ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] 
    : [];
const body = 
  (type === 'conversation') ? mek.message.conversation : 
  (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : 
  (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : 
  (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : '';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1);
const q = args.join(' ');
const isGroup = from.endsWith('@g.us');
const sender = mek.key.fromMe 
  ? (Gifted.user.id.split(':')[0] + '@s.whatsapp.net' || Gifted.user.id) 
  : (mek.key.participant || mek.key.remoteJid);
const senderNumber = sender.split('@')[0];
const botNumber = Gifted.user.id.split(':')[0];
const pushname = mek.pushName || 'Hello User';
const isMe = botNumber.includes(senderNumber);
const Devs = '254728782591,254762016957,254715206562,254110853827,254728746852'; 
const ownerNumber = config.OWNER_NUMBER;
const sudoNumbers = config.SUDO_NUMBERS ? config.SUDO_NUMBERS.split(',') : []; 
const devNumbers = Devs.split(',');
const allOwnerNumbers = [...new Set([...ownerNumber, ...sudoNumbers, ...devNumbers])];
const isOwner = allOwnerNumbers.includes(senderNumber) || isMe;
const botNumber2 = await jidNormalizedUser(Gifted.user.id);
const groupMetadata = isGroup ? await Gifted.groupMetadata(from).catch(e => {}) : '';
const groupName = isGroup ? groupMetadata.subject : '';
const participants = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await getGroupAdmins(participants) : '';
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false;
const isAdmins = isGroup ? groupAdmins.includes(sender) : false;
const isReact = m.message.reactionMessage ? true : false;

const reply = (teks) => {
  Gifted.sendMessage(from, { text: teks }, { quoted: mek });
};


Gifted.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
              let mime = '';
              let res = await axios.head(url)
              mime = res.headers['content-type']
              if (mime.split("/")[1] === "gif") {
                return Gifted.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
              }
              let type = mime.split("/")[0] + "Message"
              if (mime === "application/pdf") {
                return Gifted.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "image") {
                return Gifted.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "video") {
                return Gifted.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "audio") {
                return Gifted.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
              }
            }
 
 
if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup && config.MODE === "groups") return


if (devNumbers.includes(senderNumber)) {
    if (isReact) return;
    m.react("💜");
   } 

if (config.AUTO_AUDIO === 'true') {
const url = 'https://raw.githubusercontent.com/DarkYasiyaofc/VOICE/main/Voice-Raw/FROZEN-V2'
let { data } = await axios.get(url)
for (vr in data){
if((new RegExp(`\\b${vr}\\b`,'gi')).test(body)) Gifted.sendMessage(from,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:mek})   
 }}

if (config.PRESENCE === "typing") await Gifted.sendPresenceUpdate("composing", from, [mek.key]);
            if (config.PRESENCE === "recording") await Gifted.sendPresenceUpdate("recording", from, [mek.key]);
            if (config.PRESENCE === "online") await Gifted.sendPresenceUpdate('available', from, [mek.key]);
            else await Gifted.sendPresenceUpdate('unavailable', from, [mek.key]);
            if (config.AUTO_READ_MESSAGES === "true") await Gifted.readMessages([mek.key]);
            if (config.AUTO_BLOCK) {
                const countryCodes = config.AUTO_BLOCK.split(',').map(code => code.trim());
                if (countryCodes.some(code => m.sender.startsWith(code))) {
                    await Gifted.updateBlockStatus(m.sender, 'block');
                }
            }

/* Gifted.ev.on("messages.upsert", async (m, mek) => {
    // Check if 'mek' and 'mek.messages' exist to avoid undefined errors
    if (!mek || !mek.messages || !mek.messages[0]) return;

    mek = mek.messages[0]; // Ensure we are accessing the first message

    // Check if ANTIDELETE is enabled
    if (config.ANTIDELETE === "true") {
        if (!mek.message) return;

        const messageKey = mek.key;
        const remoteJid = messageKey.remoteJid;

        // Initialize storage if not already present
        if (!store.chats[remoteJid]) {
            store.chats[remoteJid] = [];
        }

        // Save the received message to storage
        store.chats[remoteJid].push(mek);

        // Handle deleted messages
        if (mek.message.protocolMessage && mek.message.protocolMessage.type === 0) {
            const deletedKey = mek.message.protocolMessage.key;

            // Search for the deleted message in the stored messages
            const chatMessages = store.chats[remoteJid];
            const deletedMessage = chatMessages.find(
                (msg) => msg.key.id === deletedKey.id
            );

            if (deletedMessage) {
                try {
                    // Create notification about the deleted message
                    const notification = createNotification(deletedMessage);

                    // Resend deleted content based on its type
                    if (deletedMessage.message.conversation) {
                        // Text message
                        await Gifted.sendMessage(ownerNumber + '@s.whatsapp.net', {
                            text: notification + `*Message:* ${deletedMessage.message.conversation}`,
                            mentions: [deletedMessage.key.participant],
                        });
                    } else if (deletedMessage.message.imageMessage || 
                               deletedMessage.message.videoMessage || 
                               deletedMessage.message.documentMessage || 
                               deletedMessage.message.audioMessage || 
                               deletedMessage.message.stickerMessage || 
                               deletedMessage.message.voiceMessage) {
                        // Media message (image, video, document, audio, sticker, voice)
                        const mediaBuffer = await downloadMediaMessage(deletedMessage.message);
                        if (mediaBuffer) {
                            const mediaType = deletedMessage.message.imageMessage ? 'image' :
                                deletedMessage.message.videoMessage ? 'video' :
                                deletedMessage.message.documentMessage ? 'document' :
                                deletedMessage.message.audioMessage ? 'audio' :
                                deletedMessage.message.stickerMessage ? 'sticker' : 'audio';

                            await Gifted.sendMessage(ownerNumber + '@s.whatsapp.net', {
                                [mediaType]: mediaBuffer,
                                caption: notification,
                                mentions: [deletedMessage.key.participant],
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error handling deleted message:', error);
                }
            }
        }
    }
}); */
const events = require('./gift')
const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 1000; 

const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) Gifted.sendMessage(from, { react: { text: cmd.react, key: mek.key }})

try {
cmd.function(Gifted, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
} catch (e) {
console.error("[GIFTED-MD PLUGIN ERROR]: " + e);
Gifted.sendMessage(from, { text: `[GIFTED-MD PLUGIN ERROR]:\n${e}`})
}
}
}
events.commands.map(async(command) => {
if (body && command.on === "body") {
command.function(Gifted, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (mek.q && command.on === "text") {
command.function(Gifted, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(Gifted, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(Gifted, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
}});

})
}
setTimeout(() => {
ConnectGiftedToWA()
}, 4000);  

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'gift/gifted.html'));
});
app.listen(port, () => console.log(`Gifted Server Live on http://localhost:${port}`));
