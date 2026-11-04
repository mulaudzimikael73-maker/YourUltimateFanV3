/* Department of Tiny Victories — separate V3 interface; shares the TEST UOM state. */
(()=>{'use strict';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const presets=[['❤️','Made My Day','For making an ordinary day a little brighter.','silver'],['😂','Professional Hater','For remarkable consistency in the art of unnecessary hating.','bronze'],['🧇','Professor of Waffleology','For making complete nonsense sound academically convincing.','gold'],['🌟','Outstanding Kindness','For doing something lovely without expecting anything in return.','silver'],['🦇','Gotham’s Finest','For excellence in protecting the city and occasionally Lizzy’s dreams.','gold'],['📞','Best Unexpected Call','For an exceptionally lovely and spontaneous conversation.','bronze'],['💅','National Treasure','For being utterly unforgettable and somewhat difficult.','gold'],['🥰','Cutest Moment','For an incident of extreme and suspicious adorableness.','bronze'],['🏅','Survived Today','For making it through a difficult day with courage and humour.','bronze'],['👑','Presidential Excellence','For outstanding service to this extremely questionable Republic.','gold']];
let state=null,tab='create',busy=false,lastState=null,selected=null,initialized=false,chosenAward=null;
const qs=id=>document.getElementById(id);
function base(){return String(window.LIZZY_TELEGRAM_WORKER_URL||'').trim().replace(/\/+$/,'')+'/';}
async function api(action,args={}){if(!base())throw Error('Please configure the separate production Worker URL first.');const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),15000);try{const r=await fetch(base(),{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',body:JSON.stringify({action,...args}),signal:ctl.signal});const d=await r.json();if(!r.ok||d.success===false)throw Error(d.error||`production Worker ${r.status}`);return d}finally{clearTimeout(timer)}}
const awards=()=>state?.tinyAwards||[];const owned=who=>awards().filter(a=>a.to===who).slice().reverse();
function init(){if(qs('tinyVictoryWindow'))return;const anchor=qs('calendarIcon')?.parentElement||document.querySelector('.desktopIcons')||document.body;
const btn=document.createElement('button');btn.type='button';btn.id='tinyVictoryIcon';btn.className='desktopIcon uomDesktopIcon';btn.innerHTML='<span class="desktopEmoji">🏅</span><span>Tiny Victories</span>';btn.onclick=()=>open();anchor.appendChild(btn);
const el=document.createElement('div');el.id='tinyVictoryWindow';el.className='tinyWrap tinyHidden';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label','Department of Tiny Victories');el.innerHTML='<div class="tinyRoom"><header class="tinyHeader"><span>♛ LIZZYOS · DEPARTMENT OF TINY VICTORIES</span><button aria-label="Close Tiny Victories" id="tinyClose">✕</button></header><main id="tinyMain" class="tinyContent"></main></div>';document.body.appendChild(el);qs('tinyClose').onclick=()=>el.classList.add('tinyHidden');el.addEventListener('click',e=>{if(e.target===el)el.classList.add('tinyHidden')});}
function display(){qs('tinyVictoryWindow')?.classList.remove('tinyHidden');}
async function fetchState(){const r=await api('uom_get');state=r.state;return state}
function notifyNew(){let seen;try{seen=JSON.parse(localStorage.getItem('lizzyosTinySeenV3')||'null')}catch{}const mine=awards().filter(a=>a.to==='Lizzy'||a.to==='Both');const newer=Array.isArray(seen)?mine.filter(a=>!seen.includes(a.id)):[];localStorage.setItem('lizzyosTinySeenV3',JSON.stringify(mine.map(a=>a.id)));if(newer.length){const a=newer[newer.length-1];setTimeout(()=>celebrate(a),200)}}
async function open(which='create'){init();tab=which;display();qs('tinyMain').innerHTML='<p class="tinyLoading">Retrieving the official awards register…</p>';try{await fetchState();notifyNew();render()}catch(e){qs('tinyMain').innerHTML='<p class="tinyError">'+esc(e.message)+'</p>'}}
function nav(){return `<div class="tinyNav">${[['create','✦ Nominate'],['lizzy','💝 Lizzy’s Cabinet'],['mikael','👑 Mikael’s Cabinet'],['both','❤️ Our Victories']].map(([v,t])=>`<button data-tiny-tab="${v}" class="${tab===v?'sel':''}">${t}</button>`).join('')}</div>`}
function appTop(){return `<section class="tinyHero"><span>THE REPUBLIC OF LIZZYOS</span><h1>🏅 The Department of Tiny Victories</h1><p>No achievement is too small. No recognition is too dramatic.</p><small>${awards().length} awards in the official register · V3 EDITION</small></section>${nav()}<p id="tinyFeedback" role="status"></p>`}
function create(){return `<section class="tinyPaper"><h2>✦ File a New Nomination</h2><p>Awards are issued immediately—yes, even self-nominations. Choose a classic or invent something entirely new.</p><div class="tinyPresets">${presets.map((p,i)=>`<button data-tiny-preset="${i}" type="button">${p[0]} ${esc(p[1])}</button>`).join('')}</div><form id="tinyNomination"><div class="tinyFormGrid"><label>Presented to<select name="recipient"><option value="Mikael">Mikael</option><option value="Lizzy">Lizzy</option><option value="Both">Both of us ❤️</option></select></label><label>Recognition level<select name="tier"><option value="bronze">🥉 Bronze — Little Win</option><option value="silver">🥈 Silver — Lovely Achievement</option><option value="gold">🥇 Gold — Presidential Excellence</option></select></label></div><label>Award title<input name="title" maxlength="100" required placeholder="Most Outstandingly Adorable Lady Lady"></label><label>Reason for recognition<textarea name="reason" maxlength="700" minlength="5" rows="4" required placeholder="For the extraordinary achievement of…"></textarea></label><p class="tinyHint">Self-nominations receive a magnificent SELF-PROCLAIMED stamp. No MB is generated by nominations.</p><button class="tinyPrimary" type="submit">🏅 Issue This Award Immediately</button></form></section>`}
const fmt=s=>{try{return new Date(s).toLocaleDateString('en-ZA',{dateStyle:'medium',timeZone:'Africa/Johannesburg'})}catch{return s}};
function card(a){return `<button class="tinyAward" data-tiny-read="${esc(a.id)}"><span class="tinyMedal">${a.tier==='gold'?'🏆':a.tier==='silver'?'🥈':'🥉'}</span><strong>${esc(a.title)}</strong><small>${esc(a.to)} · ${fmt(a.issuedAt)} · ${esc(a.tier.toUpperCase())}</small>${a.selfProclaimed?'<em>SELF-PROCLAIMED</em>':''}${a.disputed?'<em>⚖️ UNDER DISPUTE</em>':''}${a.endorsedBy?'<em>✓ ENDORSED</em>':''}<span class="tinyRead">CLICK TO READ CERTIFICATE</span></button>`}
function cabinet(){const xs=owned(tab==='both'?'Both':tab==='mikael'?'Mikael':'Lizzy');const label=tab==='both'?'Our Victories':tab==='mikael'?"Mikael’s Presidential Cabinet":"Lizzy’s Tiny Victories";return `<section class="tinyPaper"><h2>🏆 ${label}</h2><p>${tab==='mikael'?"Awards for President Mikael, including Lizzy’s nominations and his completely humble self-awards.":tab==='both'?'Officially recorded little victories belonging to both of you.':"Awards for Lizzy—including the awards she has given herself."} Tap any certificate to see the full citation, speeches and challenges.</p><div class="tinyShelf">${xs.map(card).join('')||'<p class="tinyEmpty">No awards in this cabinet yet. Nominate something!</p>'}</div></section>`}
function render(){if(!qs('tinyMain'))return;qs('tinyMain').innerHTML=appTop()+(tab==='create'?create():cabinet());qs('tinyMain').querySelectorAll('[data-tiny-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.tinyTab;render()});qs('tinyMain').querySelectorAll('[data-tiny-preset]').forEach(b=>b.onclick=()=>{const p=presets[+b.dataset.tinyPreset],f=qs('tinyNomination');f.elements.title.value=p[1];f.elements.reason.value=p[2];f.elements.tier.value=p[3];f.elements.title.focus()});qs('tinyNomination')?.addEventListener('submit',nominate);qs('tinyMain').querySelectorAll('[data-tiny-read]').forEach(b=>b.onclick=()=>read(b.dataset.tinyRead));}
const msg=(t,err=false)=>{const x=qs('tinyFeedback');if(x){x.textContent=t;x.style.color=err?'#aa2349':'#316a46'}};
const rid=()=>typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2);
async function nominate(e){e.preventDefault();if(busy)return;busy=true;const b=e.target.querySelector('button[type=submit]');b.disabled=true;const d=Object.fromEntries(new FormData(e.target).entries());try{const r=await api('uom_tv_nominate',{...d,requestId:rid()});state=r.state;tab=d.recipient==='Both'?'both':d.recipient.toLowerCase();render();msg('🏅 Award issued immediately and filed in the correct cabinet!');if(d.recipient==='Lizzy'||d.recipient==='Both'){localStorage.setItem('lizzyosTinySeenV3',JSON.stringify(awards().filter(a=>a.to==='Lizzy'||a.to==='Both').map(a=>a.id)));celebrate(r.award)}else read(r.award.id)}catch(ex){msg(ex.message,true);b.disabled=false}finally{busy=false}}
function responseOptions(a){
  const recipient=a.to==='Lizzy'||a.to==='Both',outside=a.selfProclaimed&&a.nominatedBy==='Mikael';
  const opts=[];
  if(recipient)opts.push(['accept','🎤 Give Acceptance Speech'],['fight','⚖️ Fight This Award']);
  if(outside)opts.push(['endorse','💝 Endorse Mikael’s Self-Award'],['challenge','😂 Challenge His Claims']);
  return opts;
}
function canReply(a,item){
  return item?.id&&item.by==='Mikael'&&(a.nominatedBy==='Lizzy'||a.to==='Lizzy'||a.to==='Both'||a.selfProclaimed);
}
function responseCard(a,item){
  const original=a.responses.find(x=>x.id===item.replyToId);
  const quote=original?`<div class="tinyReplyContext">↳ In reply to ${esc(original.by)}: “${esc(original.comment.slice(0,160))}”</div>`:'';
  return `<div class="tinyReply" id="reply-${esc(item.id)}"><b>${esc(item.by)} · ${esc(item.kind.toUpperCase())}</b><small>${fmt(item.at)}</small>${quote}<p>${esc(item.comment)}</p>${canReply(a,item)?`<button type="button" class="tinyReplyButton" data-tiny-reply-to="${esc(item.id)}">💬 Reply to Mikael</button>`:''}</div>`;
}
let replyToId=null;
function read(id){
  const a=awards().find(x=>x.id===id);if(!a)return;
  chosenAward=id;selected=null;replyToId=null;
  const content=`<div class="tinyFullCert"><div class="tinyCrest">♛ THE REPUBLIC OF LIZZYOS ♛</div><div class="tinyOrnament">✦ ──────── ✦ ──────── ✦</div><h1>OFFICIAL CERTIFICATE<br>OF TINY VICTORY</h1><p>This honour is presented to</p><h2>${esc(a.to==='Both'?'MIKAEL & LIZZY':a.to.toUpperCase())}</h2><h3>${esc(a.title)}</h3><p class="tinyCitation">${esc(a.detail)}</p><span class="tinyBigMedal">${a.tier==='gold'?'🏆 GOLD':a.tier==='silver'?'🥈 SILVER':'🥉 BRONZE'}</span>${a.selfProclaimed?'<strong class="tinyStamp">SELF-PROCLAIMED EXCELLENCE</strong>':''}${a.disputed?'<strong class="tinyStamp">UNDER DISPUTE — CERTIFICATE STILL VALID</strong>':''}${a.endorsedBy?`<strong class="tinyStamp">ENDORSED BY ${esc(a.endorsedBy.toUpperCase())}</strong>`:''}<div class="tinySign"><span>Nominated by ${esc(a.nominatedBy)}<br><small>${fmt(a.issuedAt)}</small></span><span>OFFICIAL GOVERNMENT RECORD<br><small>${esc(a.id)}</small></span></div></div>
  <section class="tinyPaper"><h2>🎤 Speeches, Replies & Official Reactions</h2><p id="tinyConversationStatus" role="status" aria-live="polite"></p><div class="tinyConversation">${a.responses?.length?a.responses.map(item=>responseCard(a,item)).join(''):'<p>No speeches or objections yet. The government is suspicious of the silence.</p>'}</div>
  <div class="tinyResponseChoices">${responseOptions(a).map(([kind,label])=>`<button type="button" data-tiny-respond="${kind}">${label}</button>`).join('')}</div>
  <form id="tinyResponseForm" class="tinyHidden"><label id="tinyResponseLabel">Your official statement<textarea name="comment" rows="3" maxlength="800" minlength="2" required></textarea></label><div class="tinyResponseActions"><button class="tinyPrimary" type="submit">Publish Statement</button><button type="button" id="tinyCancelResponse">Cancel</button></div></form>
  <button type="button" id="tinyRefreshConversation" class="tinySecondary">↻ Check for New Replies</button><button type="button" data-tiny-counter class="tinySecondary">🔥 Issue a Counter-Award</button><button type="button" data-tiny-back class="tinySecondary">← Back to Cabinets</button></section>`;
  qs('tinyMain').innerHTML=`${appTop()}${content}`;
  qs('tinyMain').querySelectorAll('[data-tiny-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.tinyTab;render()});
  qs('tinyMain').querySelectorAll('[data-tiny-respond]').forEach(b=>b.onclick=()=>selectResponse(b.dataset.tinyRespond,null,a));
  qs('tinyMain').querySelectorAll('[data-tiny-reply-to]').forEach(b=>b.onclick=()=>selectResponse('reply',b.dataset.tinyReplyTo,a));
  qs('tinyResponseForm').addEventListener('submit',sendResponse);
  qs('tinyCancelResponse').onclick=()=>{selected=null;replyToId=null;qs('tinyResponseForm').classList.add('tinyHidden')};
  qs('tinyRefreshConversation').onclick=()=>refreshConversation(id);
  qs('tinyMain').querySelector('[data-tiny-back]').onclick=render;
  qs('tinyMain').querySelector('[data-tiny-counter]').onclick=()=>{tab='create';render();const f=qs('tinyNomination');f.elements.recipient.value=a.nominatedBy==='Lizzy'?'Lizzy':'Mikael';f.elements.title.value='Counter-Award: '+a.title.slice(0,60);f.elements.reason.value='A formal counter-recognition following the highly questionable award: '+a.title;};
}
function selectResponse(kind,toId,a){
  selected=kind;replyToId=toId;
  const form=qs('tinyResponseForm');if(!form)return;
  const target=toId?a.responses.find(x=>x.id===toId):null;
  qs('tinyResponseLabel').firstChild.textContent=kind==='reply'&&target?'Your reply to '+target.by+':':kind==='accept'?'Your acceptance speech:':kind==='fight'?'Your formal objection:':kind==='endorse'?'Your endorsement:':'Your challenge:';
  form.classList.remove('tinyHidden');form.scrollIntoView({block:'nearest',behavior:'smooth'});form.elements.comment.focus({preventScroll:true});
}
function conversationStatus(message,bad=false){
  const element=qs('tinyConversationStatus');if(element){element.textContent=message;element.style.color=bad?'#a12c49':'#316a46';}
}
async function refreshConversation(id){
  const btn=qs('tinyRefreshConversation');if(btn)btn.disabled=true;
  try{await fetchState();read(id);conversationStatus('Latest speeches and replies loaded.');}
  catch(e){conversationStatus(e.message,true);if(btn)btn.disabled=false;}
}
async function sendResponse(e){
  e.preventDefault();if(!chosenAward||!selected||busy)return;
  const form=e.currentTarget,button=form.querySelector('[type=submit]'),comment=form.elements.comment.value.trim();
  if(comment.length<2){conversationStatus('Please write your response first.',true);return;}
  busy=true;button.disabled=true;button.textContent='Publishing…';
  const id=chosenAward,kind=selected,targetId=replyToId;
  try{
    const payload={awardId:id,kind,comment,requestId:rid()};if(kind==='reply')payload.replyToId=targetId;
    const result=await api(['endorse','challenge','reply'].includes(kind)?'uom_tv_react':'uom_tv_respond',payload);
    state=result.state;read(id);conversationStatus('✓ Published! Mikael can read and reply to your statement.');
  }catch(err){conversationStatus('Could not publish: '+err.message,true);button.disabled=false;button.textContent='Publish Statement';}
  finally{busy=false;}
}
function celebrate(a){if(!a||!qs('tinyVictoryWindow'))return;display();const pop=document.createElement('div');pop.className='tinyCelebrate';pop.innerHTML=`<div class="tinyCelebrateCard"><span class="tinyBurst">🎊 🏅 ✨ 🎊</span><p>THE DEPARTMENT HAS SPOKEN!</p><h2>A Tiny Victory!</h2><h3>${esc(a.title)}</h3><p>Presented to ${esc(a.to)} · ${esc(a.tier.toUpperCase())}${a.selfProclaimed?' · Self-Proclaimed':''}</p><button class="tinyPrimary" id="tinyCelebrationView">📜 Read Certificate</button><button class="tinySecondary" id="tinyCelebrationClose">Continue</button></div>`;qs('tinyVictoryWindow').appendChild(pop);pop.querySelector('#tinyCelebrationView').onclick=()=>{pop.remove();read(a.id)};pop.querySelector('#tinyCelebrationClose').onclick=()=>pop.remove();}
function backgroundCheck(){if(!base()||document.hidden)return;api('uom_get').then(r=>{state=r.state;notifyNew();if(qs('tinyVictoryWindow')&&!qs('tinyVictoryWindow').classList.contains('tinyHidden')&&!chosenAward)render()}).catch(()=>{})}
init();window.LizzyTinyVictoriesV3={open,refresh:backgroundCheck,read,celebrate};window.addEventListener('focus',backgroundCheck);setTimeout(backgroundCheck,1600);setInterval(backgroundCheck,60000);
})();
