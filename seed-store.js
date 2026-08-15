
(() => {
"use strict";
const $=id=>document.getElementById(id);
const KEYS={
 wallet:"lizzyMickyBucsV1",
 jobs:"lizzyMickyJobsV1",
 allowance:"lizzyMickyDailyAllowanceV1",
 activity:"lizzyMickyActivityV1"
};
const JOBS=[{"id": "visit_garden", "title": "Visit Lizzy's Garden", "reward": 2, "desc": "Open the Garden today."}, {"id": "water_one", "title": "Water one plant", "reward": 3, "desc": "Give one Garden plant some water."}, {"id": "water_two", "title": "Water two plants", "reward": 5, "desc": "Water two plants today."}, {"id": "water_three", "title": "Water three plants", "reward": 5, "desc": "Water three plants today."}, {"id": "plant_seed", "title": "Plant a seed", "reward": 5, "desc": "Plant any seed in an empty Garden plot."}, {"id": "plant_two", "title": "Plant two seeds", "reward": 7, "desc": "Plant two seeds today."}, {"id": "check_plant", "title": "Check on a plant", "reward": 3, "desc": "Use the Garden check button."}, {"id": "collect_flower", "title": "Grow or collect a flower", "reward": 5, "desc": "Add a flower to the Garden collection."}, {"id": "visit_store", "title": "Window shopping", "reward": 2, "desc": "Open the Seed Store."}, {"id": "buy_seed", "title": "Buy any seed", "reward": 3, "desc": "Make one Seed Store purchase."}, {"id": "play_mikhail", "title": "Complete Mikhail Quiz", "reward": 5, "desc": "Finish any Mikhail Quiz level."}, {"id": "perfect_mikhail", "title": "Perfect Mikhail Quiz", "reward": 8, "desc": "Get a perfect score."}, {"id": "play_would", "title": "Complete Would Mikael Rather?", "reward": 5, "desc": "Finish today's five questions."}, {"id": "perfect_would", "title": "Perfect Would Mikael Rather?", "reward": 8, "desc": "Score 5/5."}, {"id": "play_crack", "title": "Complete a Crack the Code mission", "reward": 7, "desc": "Finish any Crack the Code mission."}, {"id": "play_ttt", "title": "Play Tic-Tac-Toe", "reward": 3, "desc": "Finish a Tic-Tac-Toe game."}, {"id": "win_ttt", "title": "Beat Mikael at Tic-Tac-Toe", "reward": 7, "desc": "Win a Tic-Tac-Toe game."}, {"id": "play_heart", "title": "Play Heart Catch", "reward": 3, "desc": "Complete a Heart Catch round."}, {"id": "play_lizzy_quiz", "title": "Complete Lizzy Quiz", "reward": 5, "desc": "Finish the Lizzy Quiz."}, {"id": "play_two_games", "title": "Play two different games", "reward": 7, "desc": "Complete two different games today."}, {"id": "play_three_games", "title": "Game Night", "reward": 10, "desc": "Complete three different games today."}, {"id": "daily_reward", "title": "Claim Daily Reward", "reward": 3, "desc": "Open today's Daily Mystery reward."}, {"id": "streak_check", "title": "Protect the streak", "reward": 3, "desc": "Visit the Daily Reward screen today."}, {"id": "open_token_jar", "title": "Check the Token Jar", "reward": 2, "desc": "Open Lizzy's Token Jar."}, {"id": "redeem_token", "title": "Redeem a token", "reward": 5, "desc": "Use any token from the Jar."}, {"id": "open_readme", "title": "Read Me check-in", "reward": 2, "desc": "Open Read Me."}, {"id": "open_date", "title": "Visit Our Date", "reward": 2, "desc": "Open the Our Date folder."}, {"id": "open_letter", "title": "Open an Open When letter", "reward": 3, "desc": "Read any Open When letter."}, {"id": "open_mission", "title": "Check Mission Log", "reward": 2, "desc": "Open the Mission Log."}, {"id": "open_recycle", "title": "Inspect the Recycle Bin", "reward": 2, "desc": "Check what LizzyOS has rejected today."}, {"id": "nice_mikael", "title": "Say one nice thing about Mikael", "reward": 5, "desc": "Self-confirmed. Difficulty may vary 😂."}, {"id": "no_hating", "title": "Five-minute Hater Break", "reward": 5, "desc": "Go five minutes without hating on Mikael. Self-confirmed."}, {"id": "compliment", "title": "Give Mikael a compliment", "reward": 5, "desc": "A genuine one. Yes, LizzyOS is serious."}, {"id": "mikael_joke", "title": "Laugh at one of Mikael's jokes", "reward": 5, "desc": "Self-confirmed. Pity laughs technically count."}, {"id": "hydrate", "title": "Drink some water", "reward": 3, "desc": "Hydration mission. Self-confirmed."}, {"id": "stretch", "title": "Quick stretch", "reward": 3, "desc": "Do a short stretch. Self-confirmed."}, {"id": "smile", "title": "Smile mission", "reward": 3, "desc": "Find one reason to smile today."}, {"id": "song", "title": "Play a favourite song", "reward": 3, "desc": "Listen to one song you love."}, {"id": "pasta_thought", "title": "Think about pasta", "reward": 2, "desc": "Probably the easiest job on the board."}, {"id": "pink_spot", "title": "Spot something pink", "reward": 3, "desc": "Find something pink in real life."}, {"id": "kind_act", "title": "Do one kind thing", "reward": 5, "desc": "Any small kind act counts."}, {"id": "message_mikael", "title": "Send Mikael a nice message", "reward": 5, "desc": "Self-confirmed."}, {"id": "roast_mikael", "title": "Roast Mikael creatively", "reward": 5, "desc": "One creative roast. Keep it harmless 😂."}, {"id": "beat_score", "title": "Try to beat a game score", "reward": 5, "desc": "Make one serious attempt."}, {"id": "garden_photo", "title": "Admire the Garden", "reward": 2, "desc": "Spend a moment checking your plants."}, {"id": "choose_flower", "title": "Pick today's favourite flower", "reward": 3, "desc": "Choose your favourite flower in the Garden."}, {"id": "organize_tokens", "title": "Token inventory check", "reward": 2, "desc": "Look through the Token Jar."}, {"id": "date_idea", "title": "Think of a future date idea", "reward": 5, "desc": "Self-confirmed."}, {"id": "little_attitude", "title": "Little Miss Attitude challenge", "reward": 5, "desc": "Deliver one iconic but harmless attitude moment."}, {"id": "lizzyos_tour", "title": "LizzyOS Tour", "reward": 7, "desc": "Visit the Garden, Games folder and Token Jar today."}];
const SEEDS=[
 {id:"tulipSeed",name:"Tulip Seed",emoji:"🌷",price:3},
 {id:"roseSeed",name:"Rose Seed",emoji:"🌹",price:4},
 {id:"sunflowerSeed",name:"Sunflower Seed",emoji:"🌻",price:4},
 {id:"snapdragonSeed",name:"Snapdragon Seed",emoji:"🌺",price:5},
 {id:"lavenderSeed",name:"Lavender Seed",emoji:"🪻",price:5},
 {id:"lilySeed",name:"Lily of the Valley Seed",emoji:"🤍",price:7},
 {id:"cryingLilySeed",name:"Crying Lily Seed",emoji:"🥀",price:8},
 {id:"orchidSeed",name:"Orchid Seed",emoji:"🌸",price:9},
 {id:"mysterySeed",name:"Mystery Seed",emoji:"❓",price:12},
 {id:"moonSeed",name:"Moonflower Seed",emoji:"🌙",price:20}
];
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
const read=(k,f)=>{try{let v=localStorage.getItem(k);return v===null?f:JSON.parse(v)}catch(e){return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const balance=()=>Number(localStorage.getItem(KEYS.wallet)||0);
const setBalance=n=>localStorage.setItem(KEYS.wallet,String(Math.max(0,n)));
function notify(type,title,details){if(typeof window.lizzyTelegramNotify==="function")return window.lizzyTelegramNotify(type,title,details);if(typeof lizzyTelegramNotify==="function")return lizzyTelegramNotify(type,title,details);return Promise.resolve(false)}
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function dailyJobs(){
 let state=read(KEYS.jobs,{date:"",selected:[],completed:{}});
 if(state.date!==today()){
   const ranked=[...JOBS].sort((a,b)=>(hash(today()+a.id)%100000)-(hash(today()+b.id)%100000));
   state={date:today(),selected:ranked.slice(0,5).map(x=>x.id),completed:{}};
   write(KEYS.jobs,state);
 }
 return state;
}
function render(){
 if($("mickyBalance"))$("mickyBalance").textContent=balance();
 const state=dailyJobs();
 const host=$("mickyJobsList");
 if(host)host.innerHTML=state.selected.map(id=>{
   const j=JOBS.find(x=>x.id===id),done=!!state.completed[id];
   return `<div class="mickyJobCard ${done?"completed":""}"><h4>🎯 ${j.title}</h4><p>${j.desc}</p><div class="mickyJobReward">💵 +${j.reward} MB</div><button data-job="${j.id}" ${done?"disabled":""}>${done?"Completed ✓":"Mark Complete"}</button></div>`;
 }).join("");
 host?.querySelectorAll("[data-job]").forEach(b=>b.onclick=()=>completeJob(b.dataset.job));
 const shop=$("seedShopList");
 if(shop)shop.innerHTML=SEEDS.map(s=>`<div class="seedShopCard"><h4>${s.emoji} ${s.name}</h4><div class="seedPrice">💵 ${s.price} MB</div><button data-buy="${s.id}">Buy Seed</button></div>`).join("");
 shop?.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buySeed(b.dataset.buy));
 const claimed=localStorage.getItem(KEYS.allowance)===today();
 if($("claimMickyAllowance")){$("claimMickyAllowance").disabled=claimed;$("claimMickyAllowance").textContent=claimed?"Daily 2 MB Claimed ✓":"Claim Daily +2 MB"}
}
function completeJob(id){
 const state=dailyJobs(),j=JOBS.find(x=>x.id===id);
 if(!j||!state.selected.includes(id)||state.completed[id])return;
 state.completed[id]={at:new Date().toISOString(),reward:j.reward};
 write(KEYS.jobs,state);setBalance(balance()+j.reward);
 if($("seedStoreStatus"))$("seedStoreStatus").textContent=`✅ Job complete! +${j.reward} MB`;
 notify("💼 MICKY BUCS JOB COMPLETED",j.title,`Status: COMPLETED\nEarned: +${j.reward} MB\nNew Balance: ${balance()} MB\nDate: ${today()}`);
 render();
}
function claimAllowance(){
 if(localStorage.getItem(KEYS.allowance)===today())return;
 localStorage.setItem(KEYS.allowance,today());setBalance(balance()+2);
 if($("mickyAllowanceStatus"))$("mickyAllowanceStatus").textContent="💵 Daily allowance claimed: +2 MB";
 notify("💵 DAILY MICKY BUCS","Daily Allowance Claimed",`Lizzy claimed +2 MB\nNew balance: ${balance()} MB\nDate: ${today()}`);
 render();
}
function buySeed(id){
 const s=SEEDS.find(x=>x.id===id);if(!s)return;
 if(balance()<s.price){if($("seedStoreStatus"))$("seedStoreStatus").textContent=`😭 Not enough Micky Bucs. You need ${s.price} MB.`;return}
 // ADD to the existing Garden only. Never recreate/reset Garden progress.
 const garden=read("lizzyGardenV1",null);
 if(!garden||typeof garden!=="object"){if($("seedStoreStatus"))$("seedStoreStatus").textContent="Garden data wasn't found, so no purchase was made.";return}
 garden.seeds=garden.seeds||{};
 garden.seeds[id]=Number(garden.seeds[id]||0)+1;
 write("lizzyGardenV1",garden);setBalance(balance()-s.price);
 if($("seedStoreStatus"))$("seedStoreStatus").textContent=`🌱 Purchased ${s.name}! Check Lizzy's Garden.`;
 notify("🛍️ SEED STORE PURCHASE",`${s.emoji} ${s.name}`,`Quantity: 1\nPaid: ${s.price} MB\nRemaining balance: ${balance()} MB\nGarden inventory updated successfully.`);
 window.dispatchEvent(new CustomEvent("lizzySeedStorePurchase",{detail:{seed:s.id,name:s.name,price:s.price}}));
 render();
}
function openStore(){$("seedStoreWindow")?.classList.remove("hidden");render()}
function closeStore(){$("seedStoreWindow")?.classList.add("hidden")}
$("seedStoreIcon")?.addEventListener("click",openStore);
$("seedStoreClose")?.addEventListener("click",closeStore);
$("closeSeedStore")?.addEventListener("click",closeStore);
$("claimMickyAllowance")?.addEventListener("click",claimAllowance);
render();
})();
