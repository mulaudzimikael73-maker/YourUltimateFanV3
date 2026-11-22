/* One V3 Telegram site-open notification per browser tab session. No tax claims. */
(()=>{'use strict';
const KEY='lizzyV3OpenSessionR5',SENT='lizzyV3OpenNotificationAttemptR5';
function id(){return globalThis.crypto?.randomUUID?.().replaceAll('-','_')||('session_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2));}
async function announce(){try{
 let session=sessionStorage.getItem(KEY);if(!session){session=id();sessionStorage.setItem(KEY,session);}
 if(sessionStorage.getItem(SENT)===session)return;
 // Acknowledge locally before network request. Reload/focus must not trigger duplicates.
 sessionStorage.setItem(SENT,session);
 const url=window.LIZZY_TELEGRAM_WORKER_URL||'https://lizzyos-notifications.mulaudzimikael73.workers.dev/';
 const r=await fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({type:'v3_site_open',sessionId:session}),cache:'no-store',keepalive:true});
 if(!r.ok)console.warn('V3 opening notification unavailable:',r.status);
 }catch(e){console.warn('V3 opening notification:',e?.message||e);}}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',announce,{once:true});else announce();
})();
