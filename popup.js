const t=document.getElementById('toggle');
chrome.storage.sync.get('theaterMode',r=>t.checked=!!r.theaterMode);
t.onchange=async()=>{chrome.storage.sync.set({theaterMode:t.checked});const [tab]=await chrome.tabs.query({active:true,currentWindow:true});chrome.tabs.sendMessage(tab.id,{action:'toggle',enabled:t.checked});};