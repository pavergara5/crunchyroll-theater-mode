const apply=e=>document.body.classList.toggle('cr-theater-mode',e);
chrome.runtime.onMessage.addListener(m=>m.action==='toggle'&&apply(m.enabled));
chrome.storage.sync.get('theaterMode',r=>apply(!!r.theaterMode));
document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='t'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){const en=!document.body.classList.contains('cr-theater-mode');chrome.storage.sync.set({theaterMode:en});apply(en);}});
let timer;document.addEventListener('mousemove',()=>{document.body.classList.remove('cr-hide-cursor');clearTimeout(timer);if(document.body.classList.contains('cr-theater-mode'))timer=setTimeout(()=>document.body.classList.add('cr-hide-cursor'),2000);});