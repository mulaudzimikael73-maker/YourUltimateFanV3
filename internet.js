(()=>{
"use strict";
const $=id=>document.getElementById(id);
const WORKER=window.LIZZY_TELEGRAM_WORKER_URL||"https://lizzyos-notifications.mulaudzimikael73.workers.dev/";
const LESSONS=["Believe in yourself. I believe in myself enough for both of us.", "If Plan A fails, remember there are 25 other letters.", "You miss 100% of the shots you don't take. You also miss quite a few that you do.", "Progress is progress, unless you're going backwards.", "Do it scared. Do it tired. Just maybe don't do it drunk.", "A bad day is not a bad life. Very important distinction.", "You don't need motivation every day. Sometimes you just need to start.", "Future You is watching. Try not to embarrass them.", "Small steps still count. Unless you're running from a hyena.", "Don't compare Chapter 2 of your life to somebody else's Chapter 15.", "You've survived every difficult day you've had so far. Strong record.", "Success takes time. Unfortunately.", "Be patient. Even Wi-Fi takes a few seconds to connect.", "You can't control everything. You can, however, complain about it.", "Your comfort zone is comfortable for a reason. Leave occasionally.", "Dream big. Your budget can panic later.", "You don't have to be perfect. That position is already occupied.", "One day or day one. Or Tuesday. Tuesday also works.", "Sometimes the biggest obstacle between you and success is opening the laptop.", "Hard work beats talent when talent is taking a nap.", "Do fish know they're wet?", "If tomatoes are fruit, is ketchup technically a smoothie?", "Your future self remembers things you haven't done yet.", "Somewhere, somebody has accidentally waved back at someone who wasn't waving at them.", "If you clean a vacuum cleaner, do you become the vacuum cleaner?", "Every mirror you've ever looked into has technically seen you before.", "Nobody knows what the first person to milk a cow was trying to accomplish.", "If Cinderella's shoe fit perfectly, why did it fall off?", "Maybe pigeons think we're the weird ones.", "If two mind readers read each other's minds, whose mind are they reading?", "You have never seen your own face. Only reflections and pictures.", "Somewhere right now, somebody is saying 'where's my phone?' while holding their phone.", "The word 'queue' is just Q followed by four silent letters waiting their turn.", "Your stomach thinks all potatoes are mashed potatoes.", "If you're waiting for the waiter, aren't you the waiter?", "A birthday is technically your personal New Year's Day.", "The brain named itself. Suspicious.", "Nothing is on fire. Fire is on things.", "If you expect the unexpected, doesn't that make it expected?", "Every time you remember something embarrassing, your brain chose violence.", "Never let them know your next move. Walk backwards.", "If life closes a door, check whether it says PUSH.", "If nobody saw it happen, reconsider whether it needs to become public information.", "Never trust someone who says 'trust me.' Including me.", "If you're running late, walk faster while looking stressed.", "If something feels wrong, turn it off and back on again.", "When in doubt, get ice cream.", "Don't send the paragraph while angry. Draft it. Sleep. Reconsider your career as an author.", "Never argue with someone whose profile picture is a car.", "If you're going to procrastinate, at least make snacks first.", "Always check your pockets before doing laundry.", "Don't grocery shop hungry. That's how you become the owner of seventeen snacks.", "If you lose something, ask your mom. Moms have administrator privileges.", "Always screenshot the evidence.", "Never volunteer information nobody asked for.", "If you're confused, nod slowly. People may assume you're thinking.", "Always carry a charger.", "If someone says 'long story short,' prepare for a long story.", "If the Wi-Fi stops working, staring angrily at the router is mandatory.", "Never trust a chair that makes a noise before you've fully sat down.", "Money can't buy happiness, but being broke hasn't exactly impressed me.", "Save money. Future You has expensive taste.", "Before buying something, ask yourself: do I need this? Then ignore yourself responsibly.", "Never check your bank balance immediately after a night out.", "Financial freedom begins with not ordering food you already have at home.", "A discount is only saving money if you were actually going to buy it.", "You cannot budget your way out of buying snacks. Accept reality.", "Never lend money you're going to need back tomorrow.", "Compound interest sounds boring until it's your money.", "Your card declining is your bank staging an intervention.", "If you can't afford it twice, consider staring at it online instead.", "A budget is just telling your money where to disappear.", "Payday confidence should never be trusted.", "There are two versions of you: before payday and after payday.", "Rich is having money. Wealthy is forgetting you have a subscription and not noticing.", "Communication is important. Unfortunately, this means talking about feelings.", "Never go to sleep angry. Stay awake and become increasingly unreasonable.", "Sometimes saying 'you're right' is cheaper than continuing.", "Choose someone who makes you laugh. Life is already serious enough.", "If she says 'I'm fine,' further investigation may be required.", "Love is patient. Arguments are apparently not.", "The secret to relationships is communication, patience and occasionally food.", "Never underestimate the diplomatic power of ice cream.", "If you care about someone, annoy them regularly so they know you're still alive.", "Remember the little things. Apparently they become evidence later.", "Relationships require compromise. Unless I'm clearly right.", "A thoughtful message costs nothing and can mean everything.", "Sometimes quality time is literally just doing nothing together.", "Learn their favourite snack. This is strategic information.", "Being able to laugh together fixes more than people realise.", "Don't keep score in relationships. Unless you're bowling.", "If someone remembers the tiny things you tell them, pay attention.", "Sometimes 'Did you get home safely?' says more than a paragraph.", "Find somebody you can be ridiculous around.", "A good relationship should contain approximately 40% affection and 60% bullying. Research pending.", "Read the question before answering. Revolutionary concept.", "Google first. Panic second.", "Save your work. SAVE. YOUR. WORK.", "If something is due tomorrow, today is technically early.", "Group projects teach you that trust is dangerous.", "Never volunteer to present first unless you enjoy suffering.", "The smartest person in the room is often the person willing to ask the stupid question.", "You don't need to know everything. You need to know how to find things.", "Writing it down dramatically increases the chance you'll remember it.", "If you've read the same sentence five times, go to sleep.", "Studying while scrolling is just scrolling with educational guilt.", "Deadlines are motivational speakers with consequences.", "If your assignment says 2,000 words, suddenly every sentence becomes incredibly important.", "Spellcheck is a friend, not a substitute for reading.", "Never submit without opening the file one last time.", "Always be yourself. Unless you can be Batman.", "Batman had a plan for everything. Take notes.", "Never underestimate somebody wearing all black.", "A cape is impractical. Still cool though.", "If Batman can prepare for Superman, you can prepare for Monday.", "Confidence is walking into a room like Batman already investigated it.", "There is almost certainly a Batman quote appropriate for your situation.", "If your plan requires explaining why Batman would approve, it's probably a great plan.", "Some problems require patience. Others require a Batmobile.", "I don't make the rules. Unless they're Batman-related.", "Never make important decisions while hungry.", "Ice cream doesn't solve problems, but neither does being sad without ice cream.", "Fries taste better when stolen from somebody else's plate.", "Pasta is proof that life isn't completely terrible.", "A burger is just a sandwich with ambition.", "Dessert isn't unnecessary. It's emotional infrastructure.", "If somebody says they don't want fries, order extra.", "Never trust 'I'll just have one sweet.'", "Calories consumed while standing in the kitchen are administratively complicated.", "There's no such thing as too much pasta. Only inadequate containers.", "A wise man once said nothing. Unfortunately, I am not that man.", "If at first you don't succeed, investigate who witnessed it.", "Sometimes you need to look in the mirror and say: Future Me can handle this.", "The early bird gets the worm. I don't want a worm. I'm sleeping.", "Don't chase people. Unless they have your phone.", "If you're going through hell, keep going. Petrol is expensive.", "Confidence is just confusion with good posture.", "Every problem has a solution. Some solutions are just terrible.", "Think before you speak. Or don't. Sometimes the story is funnier that way.", "The consequences of my own actions continue to surprise me.", "If you don't know what you're doing, do it confidently.", "Never underestimate the power of saying 'that's crazy' when you weren't listening.", "Sometimes maturity is simply deciding not to send the message.", "You can't lose an argument if you leave the room. Strategic withdrawal.", "There's a fine line between confidence and delusion. I refuse to locate it.", "You're doing better than you think. Probably.", "Remember: panic is not a strategy. It's more of a lifestyle.", "Today is another opportunity to make a questionable decision and learn from it.", "If your plan works, you're a genius. If it doesn't, it was an experiment.", "Life is short. Order dessert."];
const VKEY="lizzyMickyWisdomVotesV2";
let current=Math.floor(Math.random()*LESSONS.length);

async function notify(type,title,details){
 try{
  const r=await fetch(WORKER,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type,title,details,source:"LizzyOS"})});
  return r.ok;
 }catch(e){console.warn(e);return false}
}
function setAddress(v){if($("browserAddress"))$("browserAddress").textContent=v}
function home(){
 setAddress("lizzy://home");
 $("browserPage").innerHTML=`<div class="browserHome">
 <div class="searchLogo">Lizzy<span>Search</span></div>
 <div class="fakeSearch">Search LizzyOS or enter address 🔍</div>
 <h3>Favourite Sites</h3>
 <div class="browserBookmarks">
  <button data-site="bank"><span>🏦</span><b>Bank of Micky</b><small>Online Banking</small></button>
  <button data-site="lessons"><span>🧠</span><b>Life Lessons with Micky</b><small>Qualifications: Trust Me.</small></button>
  <button data-site="news"><span>📰</span><b>Micky's Daily News</b><small>Headlines, Bank & President's Words</small></button>
 </div></div>`;
}
const BANK_SESSION="lizzyBankLoggedInV2";
const BANK_PASSWORD="MRPERFECT";
const BANK_WALLET_KEY="lizzyMickyBucsV1";
const BANK_STATE_KEY="lizzyMickyBankV1";
const BANK_WEEK=7*24*60*60*1000;

function bankRead(key,fallback){
 try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}
 catch(e){return fallback}
}
function bankWrite(key,value){localStorage.setItem(key,JSON.stringify(value))}
function bankWallet(){return Number(bankRead(BANK_WALLET_KEY,0))||0}
function bankSetWallet(n){
 bankWrite(BANK_WALLET_KEY,Math.max(0,Number(n)||0));
 window.dispatchEvent(new Event("lizzyStoreRefresh"));
}
function bankState(){
 const raw=bankRead(BANK_STATE_KEY,{savings:0,qualifyingSince:null,lastBonus:null});
 return {
   savings:Number(raw?.savings||0),
   qualifyingSince:raw?.qualifyingSince||null,
   lastBonus:raw?.lastBonus||null
 };
}
function bankSave(s){
 bankWrite(BANK_STATE_KEY,s);
 window.dispatchEvent(new Event("lizzyStoreRefresh"));
}
async function bankNotify(title,details){
 return notify("🏦 BANK OF MICKY",title,details);
}
function bank(){
 setAddress("https://bankofmicky.lizzy");
 if(sessionStorage.getItem(BANK_SESSION)==="yes")return bankDashboard();
 $("browserPage").innerHTML=`<div class="bankLoginPage">
 <div class="bankLoginBrand">🏦</div><h1>Bank of Micky</h1>
 <p class="bankTagline">Private Banking • Definitely Regulated™</p>
 <div class="bankLoginCard">
 <label>Client</label><div class="bankClient">Lebone Elizabeth Kganyago</div>
 <label for="bankPassword">Online Banking Password</label>
 <input id="bankPassword" type="password" autocomplete="off" placeholder="Enter password">
 <button id="bankLoginBtn" type="button">Sign In</button>
 <p id="bankLoginStatus" class="bankLoginStatus"></p></div>
 <small class="bankFinePrint">Bank of Micky will never ask you to send your Micky Bucs to a prince.</small>
 </div>`;
 setTimeout(()=>$("bankPassword")?.focus(),50);
}
function bankLogin(){
 const input=$("bankPassword"),status=$("bankLoginStatus");
 const attempt=(input?.value||"").trim().toUpperCase().replace(/\s+/g,"");
 if(attempt===BANK_PASSWORD){sessionStorage.setItem(BANK_SESSION,"yes");bankDashboard()}
 else{if(status)status.textContent="❌ Incorrect password. Access denied.";if(input){input.value="";input.focus()}}
}
function bankBonusText(s){
 if(s.savings<15)return `Save ${15-s.savings} more MB to start qualifying for the weekly bonus.`;
 if(!s.qualifyingSince)return "Savings timer will start now.";
 const elapsed=Date.now()-Number(s.qualifyingSince);
 if(elapsed<BANK_WEEK){const d=Math.ceil((BANK_WEEK-elapsed)/86400000);return `${d} day${d===1?"":"s"} remaining until the +2 MB bonus.`}
 if(s.lastBonus&&Date.now()-Number(s.lastBonus)<BANK_WEEK)return "This week's savings bonus has already been claimed.";
 return "🎉 Your +2 MB weekly savings bonus is ready.";
}
function bankDashboard(message=""){
 const s=bankState(),w=bankWallet();
 $("browserPage").innerHTML=`<div class="bankSite">
 <div class="bankSiteHeader"><div><small>BANK OF MICKY</small><h2>Good day, Lizzy 👋</h2></div><button id="bankLogout" type="button">Log Out</button></div>
 <div class="bankAccountCard"><small>AVAILABLE MICKY BUCS</small><div class="bankBigBalance">${w} <span>MB</span></div><div class="bankAccountNo">Everyday Wallet • **** 0002</div></div>
 <div class="bankGrid"><div class="bankMiniCard"><small>SAVINGS</small><strong>${s.savings} MB</strong><span>Bank of Micky Savings</span></div><div class="bankMiniCard"><small>WEEKLY BONUS</small><strong>+2 MB</strong><span>${bankBonusText(s)}</span></div></div>
 <div class="bankActions"><button type="button" data-web-bank="deposit">↓ Deposit 5 MB</button><button type="button" data-web-bank="withdraw">↑ Withdraw 5 MB</button><button type="button" data-web-bank="bonus">🎁 Claim Weekly Bonus</button></div>
 ${message?`<div class="bankWebStatus">${message}</div>`:""}
 <div class="bankRules"><b>How savings work</b><p>Move 5 MB at a time between your wallet and savings. Keep at least 15 MB saved for 7 days to qualify for the +2 MB weekly bonus.</p></div></div>`;
}
async function bankAction(action){
 let s=bankState(),w=bankWallet();
 if(action==="deposit"){
   if(w<5)return bankDashboard("😭 You need at least 5 MB in your wallet to deposit.");
   w-=5;s.savings+=5;
   if(s.savings>=15&&!s.qualifyingSince)s.qualifyingSince=Date.now();
   bankSetWallet(w);bankSave(s);
   bankDashboard("✅ 5 MB deposited into savings.");
   bankNotify("Deposit",`5 MB\nWallet: ${w} MB\nSavings: ${s.savings} MB`);
   return;
 }
 if(action==="withdraw"){
   if(s.savings<5)return bankDashboard("😭 You need at least 5 MB in savings to withdraw.");
   s.savings-=5;w+=5;
   if(s.savings<15)s.qualifyingSince=null;
   bankSetWallet(w);bankSave(s);
   bankDashboard("✅ 5 MB withdrawn back to your wallet.");
   bankNotify("Withdrawal",`5 MB\nWallet: ${w} MB\nSavings: ${s.savings} MB`);
   return;
 }
 if(action==="bonus"){
   if(s.savings<15||!s.qualifyingSince||Date.now()-Number(s.qualifyingSince)<BANK_WEEK)
     return bankDashboard("🔒 Keep at least 15 MB saved for 7 days before claiming the bonus.");
   if(s.lastBonus&&Date.now()-Number(s.lastBonus)<BANK_WEEK)
     return bankDashboard("⏳ This week's savings bonus has already been claimed.");
   s.lastBonus=Date.now();w+=2;bankSave(s);bankSetWallet(w);
   bankDashboard("🎉 Weekly savings bonus claimed: +2 MB!");
   bankNotify("Weekly bonus claimed",`+2 MB\nWallet: ${w} MB\nSavings: ${s.savings} MB`);
 }
}
function state(){try{return JSON.parse(localStorage.getItem(VKEY)||'{"helpful":0,"useless":0}')}catch{return {helpful:0,useless:0}}}
function lesson(){
 setAddress("https://lifelessonswithmicky.lizzy");
 const s=state(), total=s.helpful+s.useless, rating=total?Math.round(s.helpful/total*100):100;
 $("browserPage").innerHTML=`<div class="lifeLessonsPage">
 <div class="wisdomBrand">🧠 LIFE LESSONS WITH MICKY™</div>
 <p class="wisdomSub">Founder & Chief Philosopher • Qualifications: Trust Me.</p>
 <div class="wisdomCard"><small>LIFE LESSON #${current+1}</small><blockquote>“${LESSONS[current]}”</blockquote><cite>— Mikael Mulaudzi</cite></div>
 <div class="wisdomButtons"><button data-vote="helpful">👍 Helpful</button><button data-vote="useless">👎 Absolutely Useless</button><button id="anotherLesson">Give Me Another Life Lesson</button></div>
 <p class="wisdomRating">Micky Wisdom Approval Rating: <b>${rating}%</b> • ${s.helpful} helpful / ${s.useless} useless</p>
 </div>`;
}
async function vote(kind){
 const s=state();s[kind]=(s[kind]||0)+1;localStorage.setItem(VKEY,JSON.stringify(s));
 const label=kind==="helpful"?"👍 Helpful":"👎 Absolutely Useless";
 await notify("🧠 LIFE LESSON VOTE",`Lesson #${current+1} — ${label}`,LESSONS[current]);
 lesson();
}

const NEWS_STORAGE_KEY="lizzyMickyDailyNewsV1";

const NEWS_BREAKING=[
 {h:"Major Announcement Expected from the President",p:"The President has confirmed that savings across LizzyOS are at an all-time high, and that the weekly +2 MB bonus will continue for every citizen who keeps at least 15 MB banked for seven days."},
 {h:"Bank of Micky Vault Reaches Record Balance",p:"Analysts describe the current savings climate as 'suspiciously stable,' pointing to disciplined depositors and an unusually low number of impulse withdrawals this week."},
 {h:"City-Wide Celebration as Weekly Bonus Confirmed Again",p:"Officials confirm the +2 MB weekly bonus remains fully funded, with no changes expected to the 15 MB, seven-day qualifying threshold."},
 {h:"President Addresses Rumours of a New Currency",p:"Sources close to the Office of the President deny any plans to replace the Micky Buc, calling the current system 'financially iconic.'"},
 {h:"LizzyOS Citizens Report Record Levels of Contentment",p:"An informal survey suggests satisfaction is up across the board, with several respondents crediting 'consistent snack access' as a leading factor."},
 {h:"Emergency Session Called Over Snack Shortage Scare",p:"The scare has since been resolved. Officials confirm the pantry was simply relocated, not depleted."},
 {h:"Bank of Micky Announces Zero Fee Increases, Again",p:"For the count-th consecutive week, the Bank of Micky has raised absolutely nothing. Depositors are reportedly thrilled."},
 {h:"Local Investigation Into 'Mr Perfect' Title Reopened",p:"A newly formed review board says it will 'look into it,' though a source close to the investigation predicts the outcome is 'not exactly a mystery.'"},
 {h:"President Praises Citizens for Strong Weekly Turnout",p:"Attendance across LizzyOS activities remains high, with officials calling engagement levels 'genuinely impressive.'"},
 {h:"Micky's Daily News Wins Award for Most Trusted Source",p:"The award was self-issued. The newsroom stands by its accuracy regardless."},
 {h:"Bank of Micky Confirms Vault Remains Fully Guarded",p:"Security has not been tested recently, largely because nobody has attempted to test it."},
 {h:"President Unveils Plans for a Quieter, Calmer Week Ahead",p:"Details remain scarce, but officials describe the plan as 'mostly vibes, but promising vibes.'"}
];
const NEWS_BANKING=[
 {h:"Bank of Micky Reports Record Savings",p:"More Micky Bucs are being saved than ever before. Full report inside."},
 {h:"Weekly Bonus Claim Rate Hits New High",p:"More citizens than ever are claiming their +2 MB on time this week."},
 {h:"Savings Habits Improving Across LizzyOS",p:"Financial analysts note a steady rise in citizens keeping their balance above the 15 MB threshold."},
 {h:"Bank of Micky Processes Its Smoothest Week Yet",p:"No reported issues, no reported drama. Just deposits, withdrawals, and one very reliable bonus."},
 {h:"Vault Rewards Remain a Top Talking Point",p:"Citizens continue to speculate about what the rarer prizes might be, with theories ranging from 'plausible' to 'wildly optimistic.'"},
 {h:"Micky Buc Holds Steady Against All Known Currencies",p:"Experts confirm the Micky Buc remains exactly as valuable as it was yesterday, which is apparently reassuring."},
 {h:"Depositors Urged to Claim Bonuses Promptly",p:"The Bank of Micky reminds all savers that the weekly bonus won't claim itself."},
 {h:"Bank of Micky Confirms: Still No Hidden Fees",p:"For the record, there have never been any hidden fees. This remains true today."}
];
const NEWS_LIFESTYLE=[
 {h:"Life Lessons With Micky Goes Viral",p:"Readers can't decide if the advice is helpful or absolutely useless."},
 {h:"Citizens Debate Whether Micky's Wisdom Counts as Wisdom",p:"The debate remains unresolved, though engagement is at an all-time high."},
 {h:"Poll: Most Popular Life Lesson of the Week Announced",p:"Results were close, but the pasta-related advice narrowly took the lead."},
 {h:"Local Reader Claims Life Lesson 'Actually Helped'",p:"Skeptics remain unconvinced. The reader stands by their statement."},
 {h:"Life Lessons With Micky Now Read Daily By Thousands",p:"Or at least by everyone currently browsing LizzyOS. Numbers pending verification."},
 {h:"Experts Still Can't Explain Why the Advice Works",p:"And yet, somehow, it keeps working."},
 {h:"Micky's Advice Column Now Considered 'Required Reading'",p:"Required by whom remains unclear, but the column persists."},
 {h:"New Poll Finds Readers Want More Life Lessons, Not Fewer",p:"The people have spoken. Micky is reportedly 'flattered but not surprised.'"}
];
const NEWS_SPORTS=[
 {h:'Local Hero Declared "Mr Perfect" Again',p:"Unofficial poll confirms what everyone already knew."},
 {h:"Bowling Rematch Rumours Continue to Circulate",p:"Sources close to the matter say a rematch is 'not off the table,' though no date has been confirmed."},
 {h:'"Mr Perfect" Title Successfully Defended Once More',p:"No formal challenger has stepped forward. Analysts aren't surprised."},
 {h:"Tic-Tac-Toe Rivalry Reaches New Heights",p:"The scoreboard remains close, and both sides insist they are clearly winning."},
 {h:"Heart Catch High Score Broken, Again",p:"A new record has been set. The previous record holder has been notified."},
 {h:"Local Athlete Praised for 'Surprisingly Consistent' Form",p:"Consistency, experts note, is a rare quality — especially in bowling."},
 {h:"Underdog Victory Shocks LizzyOS Sports Desk",p:"Few saw it coming. Fewer still are willing to admit they didn't see it coming."},
 {h:"Sports Desk Confirms: The Rivalry Is Not Over",p:"It was never going to be over. Everyone already knew that."}
];
const NEWS_QUOTES=[
 "Leadership is not about being perfect. It is about showing up, being kind, and occasionally bringing snacks.",
 "A good week is measured less in achievements and more in laughs shared along the way.",
 "The strength of LizzyOS has never been the system. It has always been the people who show up for it.",
 "Progress doesn't need to be loud. Sometimes it's just showing up again tomorrow.",
 "We don't need everything to go perfectly. We just need to keep choosing to try.",
 "Small, consistent things — a saved Micky Buc, a shared laugh — add up to something real.",
 "Every day someone opens LizzyOS is a day worth acknowledging. Thank you for showing up.",
 "The best policy this office has ever passed is simply: be kind, and keep going.",
 "My fellow citizens, remember: you do not need to have everything figured out. Sometimes you just need to survive Monday.",
 "Never compare your Chapter 1 to someone else's Chapter 20. Unless they're Lizzy. Then obviously compare yourself.",
 "Believe in yourself. And if that doesn't work, believe in the fact that you've already come this far.",
 "Life is too short to worry about people who don't like you. Unless Lizzy doesn't like you. Then we need to investigate.",
 "Some days you conquer the world. Other days, getting out of bed is the achievement. Both count.",
 "Remember, citizens: progress is progress, even if your progress today was simply replying to one email.",
 "Do not be afraid to fail. Be afraid of never trying because you were too busy overthinking.",
 "The government encourages everyone to chase their dreams. Except Micky's dream of owning a pair of jeans. That man has suffered enough.",
 "Surround yourself with people who make you laugh, support you, and tell you when you're being ridiculous.",
 "To anyone having a bad day: tomorrow is another opportunity. Unless you're Lizzy and you've already scheduled a nap.",
 "You are capable of more than you think. You have survived every difficult day you've faced so far.",
 "Do not let one bad moment convince you that you are having a bad life.",
 "Sometimes the bravest thing you can do is keep going.",
 "The President would like to remind everyone that asking for help is not weakness. It is called outsourcing.",
 "You don't have to be perfect to be proud of yourself.",
 "Make mistakes. Learn from them. Grow. And preferably don't make the exact same mistake seventeen times.",
 "Be kind. You never know what someone else is carrying.",
 "The nation is proud of you. Yes, you specifically.",
 "Rest when you need to. Even elite athletes need recovery. Lizzy has demonstrated this principle extensively.",
 "And finally: if today feels impossible, just take it one step at a time. Tomorrow can worry about itself."
];
const NEWS_TICKER=[
 "COST OF LIVING HAS INCREASED — LIZZY HAS DECIDED THIS IS A PERSONAL ATTACK.",
 "BANK OFFICIALS CONFIRM LIZZY HAS MONEY. They cannot confirm for how long.",
 "NEW TAX PROPOSED ON PEOPLE WHO SAY \"IT'S ONLY R___.\"",
 "MICKY'S BANK INTRODUCES THE LIZZY FUND — MONEY DEPOSITED IMMEDIATELY DISAPPEARS.",
 "LIZZY REQUESTS 50 MILLION PAIRS OF THE SAME SHOES. BANK ASKS WHY. LIZZY: \"BECAUSE I LIKE THEM.\"",
 "FINANCIAL EXPERTS HAVE CONFIRMED THAT OWNING 50 PAIRS OF THE SAME SHOES IS NOT TECHNICALLY AN INVESTMENT.",
 "MINIMUM WAGE HAS GONE UP. LIZZY'S SHOPPING WAGE HAS GONE UP EVEN FASTER.",
 "LIZZY'S BANK ACCOUNT HAS BEEN PLACED ON LIFE SUPPORT.",
 "MICKY ATTEMPTS TO INTRODUCE A MONTHLY BUDGET. LIZZY DECLINES TO PARTICIPATE.",
 "NEW SAVINGS PLAN ANNOUNCED: LIZZY WILL SAVE EVERYTHING SHE DOESN'T SPEND.",
 "BANK STATEMENT REVEALS MULTIPLE PURCHASES DESCRIBED ONLY AS \"NECESSARY.\"",
 "MICKY ASKS LIZZY TO SAVE MONEY. LIZZY ASKS MICKY WHY HE DOESN'T HAVE JEANS.",
 "TREASURY CONSIDERS A NEW \"LIZZY TAX\" TO OFFSET NATIONAL RETAIL SPENDING.",
 "BANK MANAGER: \"WE HAVE NEVER SEEN ANYONE TURN MONEY INTO RECEIPTS THIS QUICKLY.\"",
 "LIZZY DISCOVERS A SALE. ECONOMISTS IMMEDIATELY DECLARE A STATE OF EMERGENCY.",
 "MICKY'S FINANCIAL ADVICE: SAVE FIRST, SPEND LATER. LIZZY'S ADVICE: MIND YOUR BUSINESS.",
 "BREAKING: LIZZY HAS CHECKED HER BANK BALANCE. SHE WILL NOT BE TAKING QUESTIONS.",
 "THE BANK HAS LOST TRACK OF HOW MANY PAIRS OF SHOES LIZZY OWNS.",
 "MICKY'S EMERGENCY FUND: R500. LIZZY'S EMERGENCY: \"I NEED THESE.\"",
 "BANK OFFICIALS CONCLUDE: LIZZY MAY NOT BE FINANCIALLY RESPONSIBLE, BUT SHE IS VERY GOOD FOR THE ECONOMY.",
 "MICKY'S BANK HAS INTRODUCED A NEW ACCOUNT: CHEQUE, SAVINGS & LIZZY'S SHOPPING FUND.",
 "FINANCIAL MARKETS RALLY AFTER LIZZY PROMISES NOT TO SHOP TODAY.",
 "MARKETS CRASH AFTER LIZZY ENTERS THE MALL.",
 "LIZZY SAYS SHE'S \"JUST LOOKING.\" RETAILERS PREPARE FOR WAR.",
 "MICKY'S BANK ANNOUNCES NEW POLICY: NO FINANCIAL ADVICE WILL BE GIVEN TO PEOPLE WHO BUY 50 IDENTICAL SHOES.",
 "BREAKING: MICKY STILL DOES NOT OWN A SINGLE PAIR OF JEANS.",
 "FASHION EXPERTS BAFFLED: LOCAL MAN HAS SURVIVED 21 YEARS WITHOUT JEANS.",
 "MICKY ENTERS CLOTHING STORE. EMPLOYEES ASK IF HE NEEDS HELP FINDING JEANS. HE LEAVES.",
 "REPORT: MICKY'S WARDROBE CONSISTS OF SPORTS CLOTHES AND THE OCCASIONAL ATTEMPT AT FORMAL WEAR.",
 "MICKY CLAIMS JEANS ARE \"UNNECESSARY.\" FASHION INDUSTRY DISAGREES.",
 "LIZZY HAS BEEN TASKED WITH FIXING MICKY'S WARDROBE. NATIONAL SECURITY ALERT ISSUED.",
 "EXPERTS SAY MICKY MAY EVENTUALLY BUY JEANS. Experts refuse to say when.",
 "LIZZY WANTS 50 MILLION PAIRS OF THE SAME SHOES — CALLS IT \"BUILDING A COLLECTION.\"",
 "LIZZY SEES SHOES SHE ALREADY OWNS. BUYS THEM AGAIN.",
 "BANK OFFICIALS ASK: \"HOW MANY PAIRS DO YOU ACTUALLY NEED?\" LIZZY: \"NEXT QUESTION.\"",
 "SHOE INDUSTRY REPORTS RECORD PROFITS FOLLOWING LIZZY'S LATEST SHOPPING TRIP.",
 "LIZZY CLAIMS ALL 50 PAIRS ARE DIFFERENT. INVESTIGATION FINDS THEY ARE THE EXACT SAME SHOE.",
 "NEW STUDY FINDS LIZZY HAS MORE SHOES THAN REASONS TO EXPLAIN WHY SHE NEEDS THEM.",
 "HYROX TRAINING POSTPONED AGAIN — LIZZY CITES \"IMPORTANT REASONS.\"",
 "LIZZY ANNOUNCES SHE WILL DO HYROX SOON. \"SOON\" REMAINS A LEGALLY UNDEFINED TERM.",
 "HYROX ORGANISERS CONFIRM LIZZY HAS NOT YET ARRIVED.",
 "LIZZY'S HYROX PREPARATION ENTERS ITS PREPARATION PHASE.",
 "MICKY ASKS WHEN HYROX IS HAPPENING. LIZZY: \"DON'T WORRY ABOUT IT.\"",
 "BREAKING: LIZZY HAS POSTPONED HYROX. AGAIN. NATIONAL FITNESS COMMUNITY IN SHOCK.",
 "EXPERTS PREDICT LIZZY WILL COMPLETE HYROX EVENTUALLY. Experts have declined to provide a year.",
 "LIZZY'S TRAINING PLAN: 1. Think about HYROX. 2. Postpone HYROX. 3. Repeat.",
 "MICKY DESCRIBES HIMSELF AS A \"FUNCTIONING CRIPPLE.\" MEDICAL COMMUNITY REQUESTS CLARIFICATION.",
 "MICKY MANAGES TO COACH SPORTS, PLAY SPORTS AND WALK AROUND — THEN COMPLAINS ABOUT HIS BODY.",
 "LOCAL COACH CLAIMS HE IS \"FINE.\" HIS KNEES HAVE ISSUED A STATEMENT DISAGREEING.",
 "MICKY'S BODY ENTERS RECOVERY MODE AFTER WALKING UP TWO FLIGHTS OF STAIRS.",
 "MICKY REFUSES TO REST — BODY FILES FORMAL COMPLAINT.",
 "SPORTS MEDICINE EXPERTS ASK MICKY TO LISTEN TO HIS BODY. MICKY SAYS HE DOESN'T TAKE ORDERS FROM PEOPLE WITH NO WHISTLE.",
 "MICKY'S LEGS HAVE ANNOUNCED THEY WILL NO LONGER BE ACCEPTING OVERTIME.",
 "COACH MICKY PREACHES FITNESS WHILE HIS OWN BODY REQUESTS EARLY RETIREMENT.",
 "BREAKING: MICKY HAS COMPLETED A PHYSICAL ACTIVITY WITHOUT COMPLAINING. WITNESSES CALL IT A MIRACLE.",
 "LIZZY DECLARES NAPS AN ESSENTIAL PART OF ATHLETIC RECOVERY.",
 "MICKY CLAIMS HE CAN COOK. SOURCES SAY HE CAN MAKE INSTANT NOODLES.",
 "LIZZY'S OUTFIT RECEIVES MORE COMPLIMENTS THAN MICKY'S ENTIRE WARDROBE.",
 "MICKY SPENDS 30 MINUTES GETTING READY — STILL LOOKS LIKE HE'S GOING TO COACH.",
 "LIZZY TAKES 47 MINUTES TO PICK AN OUTFIT. MICKY TAKES 47 SECONDS.",
 "SPORTS EXPERTS CONFIRM MICKY WILL TURN ANY ACTIVITY INTO A COMPETITION.",
 "LIZZY CLAIMS SHE IS \"NOT COMPETITIVE.\" MICKY HAS REQUESTED THE RECORD BE CORRECTED.",
 "MICKY CHALLENGES LIZZY TO A COMPETITION. LIZZY ACCEPTS BEFORE HE FINISHES THE SENTENCE.",
 "FITNESS INDUSTRY INTRODUCES NEW CATEGORY: \"I'LL START TOMORROW.\"",
 "LIZZY ANNOUNCES NEW FITNESS PLAN: THINK POSITIVE, STRETCH SOMETIMES, POSTPONE HYROX."
];
const NEWS_BANK_ARTICLES=[
 {h:"Inside the Bank of Micky: A Financial Update",p1:"The Bank of Micky continues to operate as the only financial institution in LizzyOS fully backed by charm, confidence, and the occasional weekly bonus. This blog will hold the full story of how funds are managed, where Micky Bucs come from, and what the future holds for savers.",p2:"Here is how it works. Every Micky Buc you deposit is stored in your savings balance and stays there until you withdraw it. Keep 15 MB or more saved for seven full days and the bank pays you a +2 MB weekly bonus, claimable once per week straight from the Bank of Micky page.",p3:"Withdrawals are instant, deposits are free, and nothing is ever deducted for holding your money. The vault holds the rewards you unlock along the way, from free items to the rarer prizes that only show up now and then.",tip:"deposit early in the week, never let your savings drop below 15 MB, and claim your bonus as soon as the timer clears."},
 {h:"Why Citizens Keep Choosing the Bank of Micky",p1:"When asked why they keep banking with the Bank of Micky, most citizens cite the same three reasons: it's reliable, it's fair, and nobody has ever been charged a mystery fee.",p2:"The weekly bonus system remains the bank's most talked-about feature. Keep at least 15 MB banked for seven consecutive days and you'll unlock a +2 MB bonus, ready to claim the moment the timer clears.",p3:"Unlike other institutions, the Bank of Micky has never once changed its terms overnight. What you see is genuinely what you get, which analysts describe as 'refreshingly rare.'",tip:"set a reminder for your bonus timer, and don't withdraw the day before it clears — patience pays, literally."},
 {h:"Bank of Micky Explains: Where Do Micky Bucs Actually Come From?",p1:"A common question from newer citizens: where do Micky Bucs come from in the first place? The answer, according to bank officials, is simple — daily activity, completed missions, and the occasional generous reward.",p2:"Every deposit strengthens your standing balance, and every seven days spent above the 15 MB threshold earns a further +2 MB, no paperwork required.",p3:"The bank stresses that there is no penalty for saving slowly. Whether you deposit a little or a lot, the rules apply exactly the same way to everyone.",tip:"small, regular deposits build up faster than people expect — check your balance weekly to see the difference."},
 {h:"The Bank of Micky's Quiet Reputation for Reliability",p1:"It rarely makes headlines, and that, insiders say, is exactly the point. The Bank of Micky has spent this week doing what it always does: processing deposits and withdrawals without a single hiccup.",p2:"The weekly bonus remains unchanged — 15 MB banked for seven days earns a +2 MB reward, claimable directly from the Bank of Micky page the moment it's ready.",p3:"Officials describe this week as 'business as usual,' which, for a bank, is considered high praise.",tip:"consistency beats big deposits — a steady balance above 15 MB is the fastest route to your next bonus."}
];
const NEWS_PRESIDENT_ARTICLES=[
 {p1:"To everyone inside LizzyOS: thank you. This little world runs on the people who show up for it every day, save what they can, laugh at the life lessons, and keep coming back.",p2:"The plan stays simple. Keep the bank fair, keep the rewards worth chasing, and keep adding things worth exploring. If something feels broken or unfair, say so, and it gets fixed."},
 {p1:"This week's message is a short one: keep going. Whether that means banking a few more Micky Bucs, finishing one more mission, or simply logging back in tomorrow — it all counts.",p2:"This office continues to believe that the small, everyday choices matter more than the big dramatic ones. Show up, be kind, and the rest tends to follow."},
 {p1:"A brief note to every citizen reading this: the numbers matter less than the habit. A saved Micky Buc today is worth more than a big plan you never start.",p2:"The office remains committed to keeping things fair and worth showing up for. That hasn't changed, and it isn't going to."},
 {p1:"Some weeks are quiet, and that's not a bad thing. Quiet weeks mean nothing's broken, everyone's showing up, and the system is doing exactly what it's meant to do.",p2:"As always, if something feels off, say so. This office would rather hear about a small problem early than a big one late."}
];

function hashDayString(s){let h=0;for(const ch of s)h=(h*31+ch.charCodeAt(0))>>>0;return h}
const NEWS_ROTATION_VERSION="v2";
function pickForToday(arr,salt){
 const dayKey=new Date().toDateString();
 const idx=hashDayString(dayKey+"|"+NEWS_ROTATION_VERSION+"|"+salt)%arr.length;
 return arr[idx];
}
function mulberry32(seed){
 return function(){
  seed|=0;seed=seed+0x6D2B79F5|0;
  let t=Math.imul(seed^seed>>>15,1|seed);
  t=t+Math.imul(t^t>>>7,61|t)^t;
  return ((t^t>>>14)>>>0)/4294967296;
 };
}
function pickManyForToday(arr,salt,count){
 const dayKey=new Date().toDateString();
 const seed=hashDayString(dayKey+"|"+NEWS_ROTATION_VERSION+"|"+salt);
 const rand=mulberry32(seed);
 const pool=arr.slice();
 for(let i=pool.length-1;i>0;i--){
  const j=Math.floor(rand()*(i+1));
  [pool[i],pool[j]]=[pool[j],pool[i]];
 }
 return pool.slice(0,count);
}

function news(){
 setAddress("https://mickydailynews.lizzy");
 const today=new Date().toLocaleDateString("en-ZA",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
 const breaking=pickForToday(NEWS_BREAKING,"breaking");
 const banking=pickForToday(NEWS_BANKING,"banking");
 const lifestyle=pickForToday(NEWS_LIFESTYLE,"lifestyle");
 const sports=pickForToday(NEWS_SPORTS,"sports");
 const quote=pickForToday(NEWS_QUOTES,"quote");
 const bankArticle=pickForToday(NEWS_BANK_ARTICLES,"bankArticle");
 const presidentArticle=pickForToday(NEWS_PRESIDENT_ARTICLES,"presidentArticle");
 const ticker=pickManyForToday(NEWS_TICKER,"ticker",6);
 $("browserPage").innerHTML=`<div class="newsPage">
  <header class="newsHeader">
    <div class="newsMasthead">
      <span class="newsLogo">📰</span>
      <div>
        <h1>Micky's Daily News</h1>
        <small>Your most trusted source inside LizzyOS • ${today}</small>
      </div>
    </div>
    <div class="newsTagline">"All the news that's fit to print, and some that probably isn't."</div>
  </header>

  <section class="newsBulletin">
    <div class="newsSectionTitle">🚨 Headlines Bulletin</div>
    <div class="newsHeadlineCard featured">
      <span class="newsLabel">BREAKING</span>
      <h2>${breaking.h}</h2>
      <p>${breaking.p}</p>
      <small>Updated today</small>
    </div>
    <div class="newsHeadlineGrid">
      <div class="newsHeadlineCard">
        <span class="newsLabel">BANKING</span>
        <h3>${banking.h}</h3>
        <p>${banking.p}</p>
      </div>
      <div class="newsHeadlineCard">
        <span class="newsLabel">LIFESTYLE</span>
        <h3>${lifestyle.h}</h3>
        <p>${lifestyle.p}</p>
      </div>
      <div class="newsHeadlineCard">
        <span class="newsLabel">SPORTS</span>
        <h3>${sports.h}</h3>
        <p>${sports.p}</p>
      </div>
    </div>
  </section>

  <section class="newsBlog">
    <div class="newsSectionTitle">📢 In Other News</div>
    <ul class="newsTicker">
      ${ticker.map(item=>`<li>${item}</li>`).join("")}
    </ul>
  </section>

  <section class="newsBlog">
    <div class="newsSectionTitle">🏦 The Bank and Funds</div>
    <article class="newsArticle">
      <h2>${bankArticle.h}</h2>
      <p class="newsByline">By Micky's Daily News Finance Desk</p>
      <p>${bankArticle.p1}</p>
      <p>${bankArticle.p2}</p>
      <p>${bankArticle.p3}</p>
      <div class="newsArticleBox">
        <strong>Quick tips:</strong> ${bankArticle.tip}
      </div>
    </article>
  </section>

  <section class="newsBlog">
    <div class="newsSectionTitle">🎙️ Words From the President</div>
    <article class="newsArticle">
      <h2>A Message to the People</h2>
      <p class="newsByline">Office of the President</p>
      <p>${presidentArticle.p1}</p>
      <p>${presidentArticle.p2}</p>
      <blockquote class="newsQuote">
        "${quote}"
        <cite>— The President</cite>
      </blockquote>
    </article>
  </section>

  <footer class="newsFooter">
    <p>© ${new Date().getFullYear()} Micky's Daily News • Printed digitally with love.</p>
    <button id="newsBackHome" class="newsHomeBtn">← Back to LizzySearch</button>
  </footer>
 </div>`;
}

function newsBackHome(){ home(); }
function open(){ $("internetWindow")?.classList.remove("hidden"); home(); }
function close(){ $("internetWindow")?.classList.add("hidden"); }

$("internetIcon")?.addEventListener("click",open);
$("internetClose")?.addEventListener("click",close);
$("internetCloseBtn")?.addEventListener("click",close);
$("browserHome")?.addEventListener("click",home);
$("browserBack")?.addEventListener("click",home);
$("browserPage")?.addEventListener("click",e=>{
 const site=e.target.closest("[data-site]")?.dataset.site;
 if(site==="bank")bank(); else if(site==="lessons")lesson(); else if(site==="news")news(); else if(site==="home")home();
 if(e.target.closest("#bankLoginBtn")) bankLogin();
 if(e.target.closest("#bankLogout")){sessionStorage.removeItem(BANK_SESSION);bank();}
 const bankAct=e.target.closest("[data-web-bank]")?.dataset.webBank;
 if(bankAct)bankAction(bankAct);
 const v=e.target.closest("[data-vote]")?.dataset.vote;
 if(v)vote(v);
 if(e.target.closest("#anotherLesson")){let n=current;while(n===current&&LESSONS.length>1)n=Math.floor(Math.random()*LESSONS.length);current=n;lesson()}
 if(e.target.closest("#newsBackHome")) home();
});
$("browserPage")?.addEventListener("keydown",e=>{
 if(e.key==="Enter" && e.target?.id==="bankPassword")bankLogin();
});
console.log("LizzyOS Internet: ONLINE", LESSONS.length, "lessons");
})();
