// ═══════════════════════════════════════════
//  MyBroker — app.js v2
//  Trust Score · Smart Match · OTP · Animations
// ═══════════════════════════════════════════

/* ── PRICE DATA ────────────────────────── */
const PRICES={res:[{area:"Vesu",avg:6500,range:"₹5,200–7,800",trend:"↑ +8.2%"},{area:"Adajan",avg:6000,range:"₹4,800–7,200",trend:"↑ +6.5%"},{area:"Pal",avg:5600,range:"₹4,500–6,800",trend:"↑ +5.8%"},{area:"City Light",avg:7000,range:"₹5,500–8,500",trend:"↑ +9.1%"},{area:"Althan",avg:4800,range:"₹3,800–5,800",trend:"→ +3.2%"},{area:"Piplod",avg:5100,range:"₹4,000–6,200",trend:"↑ +4.5%"},{area:"Dumas",avg:7500,range:"₹5,800–9,200",trend:"↑ +11.2%"},{area:"Athwa",avg:8100,range:"₹6,200–10,000",trend:"↑ +7.8%"},{area:"Katargam",avg:3500,range:"₹2,800–4,200",trend:"→ +2.1%"}],com:[{area:"Athwa",avg:11200,range:"₹8,500–14,000",trend:"↑ +6.5%"},{area:"Katargam",avg:7000,range:"₹5,200–8,800",trend:"↑ +5.2%"},{area:"City Light",avg:9600,range:"₹7,200–12,000",trend:"↑ +8.0%"},{area:"Adajan",avg:8500,range:"₹6,500–10,500",trend:"→ +3.8%"},{area:"Vesu",avg:9000,range:"₹6,800–11,200",trend:"↑ +7.1%"}],plot:[{area:"Dumas",avg:5800,range:"₹4,200–7,500",trend:"↑ +14.2%"},{area:"Vesu",avg:5000,range:"₹3,800–6,200",trend:"↑ +10.5%"},{area:"Althan",avg:3400,range:"₹2,500–4,200",trend:"↑ +8.8%"},{area:"Piplod",avg:3800,range:"₹2,800–4,800",trend:"↑ +7.2%"},{area:"Pal",avg:4300,range:"₹3,200–5,500",trend:"→ +4.1%"},{area:"Adajan",avg:4750,range:"₹3,500–6,000",trend:"↑ +6.8%"}]};

/* ── BROKER DATA ───────────────────────── */
const BROKERS=[
  {id:1,name:"Rajesh Kumar Patel",init:"RK",bg:"#dce8d8",fg:"#2d6b3a",title:"Senior Property Consultant",exp:12,deals:180,rating:4.9,reviews:47,rank:1,areas:["Vesu","Adajan","Pal","City Light"],types:["Residential Flat","Villa / Bungalow","Plot / Land"],budgets:["₹30L – ₹60L","₹60L – ₹1Cr","₹1Cr – ₹2Cr","₹2Cr+"],badge:"top",badgeText:"Top Rated",lang:"Gujarati, Hindi",response:"~1 hr",verified:true,about:"With 12+ years in Surat's real estate market, I specialize in premium residential properties across Vesu and Adajan. My focus is understanding your exact need before showing any property — quality over quantity.",clientReviews:[{name:"Mihir Desai",stars:5,date:"Jan 2025",text:"Rajesh bhai found us our dream flat in Vesu within 3 weeks. Honest about prices, never pushed us."},{name:"Neha Joshi",stars:5,date:"Dec 2024",text:"Very professional. Arranged 4 site visits in one day. Got a great deal on a 3BHK in Adajan."},{name:"Pratik Shah",stars:5,date:"Nov 2024",text:"Best broker in Surat. Knows every builder personally. Completely transparent."}]},
  {id:2,name:"Priya Shah",init:"PS",bg:"#d8e0f0",fg:"#2a4a90",title:"Residential Property Specialist",exp:8,deals:110,rating:4.8,reviews:38,rank:2,areas:["Pal","City Light","Athwa","Dumas"],types:["Residential Flat","Villa / Bungalow","Rental"],budgets:["₹60L – ₹1Cr","₹1Cr – ₹2Cr","₹2Cr+"],badge:"verified",badgeText:"Verified Pro",lang:"Gujarati, Hindi, English",response:"~2 hrs",verified:true,about:"8 years specializing in premium residential and rental properties in South Surat. Deep connections with builders in Pal and City Light.",clientReviews:[{name:"Ravi Mehta",stars:5,date:"Feb 2025",text:"Found us a villa in Dumas exactly as described. Very responsive."},{name:"Sunita Patel",stars:5,date:"Jan 2025",text:"Rented a 2BHK in Pal within 10 days."},{name:"Ajay Kapoor",stars:4,date:"Dec 2024",text:"Knowledgeable and professional. Gets results."}]},
  {id:3,name:"Arjun Mehta",init:"AM",bg:"#f0dcd8",fg:"#8a3020",title:"Property Consultant",exp:6,deals:72,rating:4.6,reviews:24,rank:3,areas:["Althan","Piplod","Vesu"],types:["Residential Flat","Plot / Land","Commercial"],budgets:["₹30L – ₹60L","₹60L – ₹1Cr","₹1Cr – ₹2Cr"],badge:"new",badgeText:"Rising Star",lang:"Gujarati, Hindi",response:"~3 hrs",verified:true,about:"6 years focused in Althan and Piplod. Transparent approach. Specializes in under-construction and resale flats.",clientReviews:[{name:"Deepak Trivedi",stars:5,date:"Feb 2025",text:"Knows Althan like the back of his hand."},{name:"Kiran Shah",stars:4,date:"Jan 2025",text:"Honest about pros and cons."},{name:"Bhavna Rao",stars:5,date:"Dec 2024",text:"Very helpful for first-time buyers."}]},
  {id:4,name:"Suresh Agarwal",init:"SA",bg:"#f0ead8",fg:"#7a5a10",title:"Commercial Property Expert",exp:14,deals:95,rating:4.7,reviews:31,rank:4,areas:["Katargam","Udhna","Sachin","Athwa"],types:["Commercial","Plot / Land"],budgets:["₹30L – ₹60L","₹60L – ₹1Cr","₹1Cr – ₹2Cr","₹2Cr+"],badge:"verified",badgeText:"Verified Pro",lang:"Gujarati, Hindi, Marwari",response:"~4 hrs",verified:true,about:"14 years in commercial real estate. Strong GIDC and commercial developer network.",clientReviews:[{name:"Manish Agarwal",stars:5,date:"Jan 2025",text:"Best for commercial property."},{name:"Ramesh Gupta",stars:5,date:"Nov 2024",text:"Excellent negotiation skills."},{name:"Nilesh Modi",stars:4,date:"Oct 2024",text:"Very experienced."}]},
  {id:5,name:"Kavita Joshi",init:"KJ",bg:"#e0d8f0",fg:"#4a2a90",title:"Residential & Rental Specialist",exp:5,deals:88,rating:4.7,reviews:29,rank:5,areas:["Adajan","Pal","City Light","Piplod"],types:["Residential Flat","Rental"],budgets:["Below ₹30L","₹30L – ₹60L","₹60L – ₹1Cr"],badge:"new",badgeText:"Rising Star",lang:"Gujarati, Hindi, English",response:"~1 hr",verified:true,about:"5 years focused on affordable residential and rentals in West Surat. Especially helpful for first-time buyers.",clientReviews:[{name:"Viral Patel",stars:5,date:"Feb 2025",text:"Helped us rent within tight budget."},{name:"Sonal Mehta",stars:5,date:"Jan 2025",text:"Trustworthy broker!"},{name:"Jigar Shah",stars:4,date:"Dec 2024",text:"Knows Adajan very well."}]},
  {id:6,name:"Dinesh Solanki",init:"DS",bg:"#d8f0e4",fg:"#1a5a3a",title:"Plot & Land Consultant",exp:9,deals:63,rating:4.5,reviews:19,rank:6,areas:["Vesu","Dumas","Piplod","Althan"],types:["Plot / Land","Villa / Bungalow"],budgets:["₹60L – ₹1Cr","₹1Cr – ₹2Cr","₹2Cr+"],badge:"verified",badgeText:"Verified Pro",lang:"Gujarati, Hindi",response:"~2 hrs",verified:true,about:"9 years specializing in plots and land. RERA-approved layouts with clear titles.",clientReviews:[{name:"Haresh Patel",stars:5,date:"Jan 2025",text:"Go-to person for plot buying."},{name:"Rekha Trivedi",stars:4,date:"Dec 2024",text:"Transparent about legal aspects."},{name:"Vinod Shah",stars:5,date:"Nov 2024",text:"Excellent knowledge."}]}
];

/* ── TRUST SCORE CALCULATOR ────────────── */
function calcTrustScore(b){
  const verifiedPts = b.verified ? 10 : 0;
  const expPts = Math.min(b.exp / 15, 1) * 25;
  const dealPts = Math.min(b.deals / 200, 1) * 20;
  const ratingPts = ((b.rating - 3) / 2) * 30;
  const reviewPts = Math.min(b.reviews / 50, 1) * 15;
  return Math.round(verifiedPts + expPts + dealPts + ratingPts + reviewPts);
}

function getTrustColor(score){
  if(score >= 85) return '#1a936f';
  if(score >= 70) return '#2563eb';
  if(score >= 55) return '#d4a017';
  return '#e63946';
}

function getTrustLabel(score){
  if(score >= 85) return 'Excellent';
  if(score >= 70) return 'Very Good';
  if(score >= 55) return 'Good';
  return 'Building';
}

function trustBreakdown(b){
  return {
    verification: b.verified ? 100 : 0,
    experience: Math.round(Math.min(b.exp / 15, 1) * 100),
    deals: Math.round(Math.min(b.deals / 200, 1) * 100),
    rating: Math.round(((b.rating - 3) / 2) * 100),
    reviews: Math.round(Math.min(b.reviews / 50, 1) * 100)
  };
}

// Pre-compute trust scores
BROKERS.forEach(b => { b.trustScore = calcTrustScore(b); });

/* ── LOCALSTORAGE DB ───────────────────── */
const DB={
  get users(){return JSON.parse(localStorage.getItem('mb_users')||'[]')},
  get meetings(){return JSON.parse(localStorage.getItem('mb_meetings')||'[]')},
  get saved(){return JSON.parse(localStorage.getItem('mb_saved')||'[]')},
  get recent(){return JSON.parse(localStorage.getItem('mb_recent')||'[]')},
  get session(){return JSON.parse(localStorage.getItem('mb_session')||'null')},
  save(d){
    if(d.users)localStorage.setItem('mb_users',JSON.stringify(d.users));
    if(d.meetings)localStorage.setItem('mb_meetings',JSON.stringify(d.meetings));
    if(d.saved)localStorage.setItem('mb_saved',JSON.stringify(d.saved));
    if(d.recent!==undefined)localStorage.setItem('mb_recent',JSON.stringify(d.recent));
  },
  setSession(u){localStorage.setItem('mb_session',JSON.stringify(u))},
  clearSession(){localStorage.removeItem('mb_session')}
};

/* ── STATE ─────────────────────────────── */
let activeChips={type:null,exp:null,trust:null};
let pageHistory=[];
let currentPage=null;
let wizardData={};
let matchFilters=null;
let generatedOtp=null;
let otpMobile=null;

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
function showPage(page,param){
  if(currentPage&&!(currentPage.page===page&&currentPage.param==param))
    pageHistory.push({...currentPage});
  currentPage={page,param};
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('page-'+page);
  if(el)el.classList.add('active');
  window.scrollTo(0,0);
  closeDropdown();closeMobileMenu();
  if(page==='listing'){showSkeletons();setTimeout(()=>renderBrokers(),500);}
  if(page==='auth')switchTab(param||'login');
  if(page==='profile'&&param)renderProfile(param);
  if(page==='price-guide')renderPriceGuide();
  if(page==='my-profile')loadMyProfile();
  if(page==='my-meetings')loadMyMeetings();
  updateNav();updateBackButton();
}

function goBack(){
  if(!pageHistory.length)return goHome();
  const prev=pageHistory.pop();
  currentPage=prev;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+prev.page)?.classList.add('active');
  window.scrollTo(0,0);closeDropdown();
  if(prev.page==='listing')renderBrokers();
  if(prev.page==='profile'&&prev.param)renderProfile(prev.param);
  if(prev.page==='my-profile')loadMyProfile();
  if(prev.page==='my-meetings')loadMyMeetings();
  updateNav();updateBackButton();
}

function updateBackButton(){
  let btn=document.getElementById('floating-back-btn');
  const noBack=['landing','auth','wizard'];
  const show=pageHistory.length>0&&!noBack.includes(currentPage?.page);
  if(show){
    if(!btn){btn=document.createElement('button');btn.id='floating-back-btn';btn.innerHTML='← Back';btn.onclick=goBack;document.body.appendChild(btn);}
    btn.style.display='flex';
  }else{if(btn)btn.style.display='none';}
}

function requireLogin(page){
  if(!DB.session){showPage('auth','login');return;}
  showPage(page);
}

function goHome(){
  if(!DB.session)return showPage('landing');
  showPage('listing');
}

function scrollToSection(id){
  if(currentPage?.page!=='landing')showPage('landing');
  setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),200);
}

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
function updateNav(){
  const na=document.getElementById('navActions');
  if(!na)return;
  if(DB.session){
    const name=DB.session.name?.split(' ')[0]||'User';
    na.innerHTML=`<div class="user-chip" onclick="toggleDropdown(event)"><div class="user-chip-av">${name[0].toUpperCase()}</div><span class="user-chip-name">${name}</span><span class="user-chip-arrow">▾</span></div>`;
    const pdN=document.getElementById('pdName'),pdA=document.getElementById('pdAvatar');
    if(pdN)pdN.textContent=DB.session.name||'User';
    if(pdA)pdA.textContent=name[0].toUpperCase();
    const mma=document.getElementById('mobileMenuAuth');
    if(mma)mma.innerHTML=`<button class="nb nb-ghost" onclick="showPage('my-profile');closeMobileMenu()">My Profile</button><button class="nb nb-ghost" onclick="showPage('my-meetings');closeMobileMenu()">My Meetings</button><button class="nb nb-ghost" onclick="doLogout()">Logout</button>`;
  }else{
    na.innerHTML=`<button class="nb nb-ghost" onclick="showPage('auth','login')">Login</button><button class="nb nb-red" onclick="startWizard()">Find My Broker</button>`;
    const mma=document.getElementById('mobileMenuAuth');
    if(mma)mma.innerHTML=`<button class="nb nb-ghost" onclick="showPage('auth','login');closeMobileMenu()">Login</button><button class="nb nb-red" onclick="startWizard();closeMobileMenu()">Find My Broker</button>`;
  }
}

function toggleDropdown(e){e.stopPropagation();document.getElementById('profileDropdown')?.classList.toggle('hidden');}
function closeDropdown(){document.getElementById('profileDropdown')?.classList.add('hidden');}
document.addEventListener('click',closeDropdown);
function toggleMobileMenu(){document.getElementById('mobileMenu').classList.toggle('hidden');}
function closeMobileMenu(){document.getElementById('mobileMenu').classList.add('hidden');}
function toggleMobileFilter(){document.getElementById('filterBox').classList.toggle('mobile-open');}
function closeMobileFilter(){document.getElementById('filterBox').classList.remove('mobile-open');}

/* ══════════════════════════════════════════
   OTP AUTH
══════════════════════════════════════════ */
function switchTab(tab){
  ['login','register','broker-register'].forEach(t=>{
    document.getElementById('tab-'+t)?.classList.toggle('active',t===tab);
    document.getElementById('form-'+t)?.classList.toggle('hidden',t!==tab);
  });
  document.getElementById('auth-msg').innerHTML='';
  const titles={login:['Welcome Back','Login to access verified brokers'],register:['Create Account','Join MyBroker — free forever'],'broker-register':['Join as Broker','Apply to list on MyBroker']};
  const t=titles[tab]||titles.login;
  const ti=document.getElementById('authTitle'),su=document.getElementById('authSub');
  if(ti)ti.textContent=t[0];if(su)su.textContent=t[1];
}

function authMsg(msg,type){document.getElementById('auth-msg').innerHTML=`<div class="msg-${type}">${msg}</div>`;}

function sendOtp(){
  const mobile=document.getElementById('login-mobile').value.trim();
  if(!/^[6-9]\d{9}$/.test(mobile))return authMsg('Enter valid 10-digit mobile','error');
  generatedOtp=String(Math.floor(1000+Math.random()*9000));
  otpMobile=mobile;
  document.getElementById('otp-section').classList.remove('hidden');
  document.getElementById('send-otp-section').classList.add('hidden');
  authMsg(`OTP sent: <strong>${generatedOtp}</strong> (demo mode)`,'ok');
  startOtpTimer();
  setTimeout(()=>document.querySelector('.otp-input')?.focus(),100);
}

function verifyOtp(){
  const inputs=document.querySelectorAll('#otp-section .otp-input');
  const otp=Array.from(inputs).map(i=>i.value).join('');
  if(otp.length!==4)return authMsg('Enter 4-digit OTP','error');
  if(otp!==generatedOtp)return authMsg('Invalid OTP. Try again.','error');
  const users=DB.users;
  let u=users.find(u=>u.mobile===otpMobile);
  if(!u){
    u={id:Date.now(),name:'User',mobile:otpMobile,email:'',intent:'Buy',role:'user',savedBrokers:[],joinedAt:new Date().toLocaleDateString('en-IN')};
    users.push(u);DB.save({users});
  }
  DB.setSession(u);
  toast(`Welcome back, ${u.name.split(' ')[0]}!`);
  updateNav();
  if(matchFilters){showPage('listing');}else{goHome();}
  resetOtpForm();
}

function sendRegOtp(){
  const name=document.getElementById('reg-name').value.trim();
  const mobile=document.getElementById('reg-mobile').value.trim();
  if(!name)return authMsg('Name is required','error');
  if(!/^[6-9]\d{9}$/.test(mobile))return authMsg('Enter valid 10-digit mobile','error');
  const users=DB.users;
  if(users.find(u=>u.mobile===mobile))return authMsg('Mobile already registered. Login instead.','error');
  generatedOtp=String(Math.floor(1000+Math.random()*9000));
  otpMobile=mobile;
  document.getElementById('reg-otp-section').classList.remove('hidden');
  document.getElementById('reg-send-section').classList.add('hidden');
  authMsg(`OTP sent: <strong>${generatedOtp}</strong> (demo mode)`,'ok');
  setTimeout(()=>document.querySelector('.reg-otp')?.focus(),100);
}

function verifyRegOtp(){
  const inputs=document.querySelectorAll('.reg-otp');
  const otp=Array.from(inputs).map(i=>i.value).join('');
  if(otp!==generatedOtp)return authMsg('Invalid OTP','error');
  const name=document.getElementById('reg-name').value.trim();
  const mobile=otpMobile;
  const email=document.getElementById('reg-email').value.trim();
  const intent=document.getElementById('reg-intent').value;
  const users=DB.users;
  const u={id:Date.now(),name,mobile,email,intent,role:'user',savedBrokers:[],joinedAt:new Date().toLocaleDateString('en-IN')};
  users.push(u);DB.save({users});DB.setSession(u);
  toast(`Welcome to MyBroker, ${name.split(' ')[0]}!`);
  updateNav();
  if(matchFilters){showPage('listing');}else{goHome();}
  resetOtpForm();
}

function doBrokerRegister(){
  const name=document.getElementById('breg-name').value.trim();
  const mobile=document.getElementById('breg-mobile').value.trim();
  if(!name||!mobile)return authMsg('All fields required','error');
  authMsg('Application submitted! Our team will review within 24 hours. ✅','ok');
}

function resetOtpForm(){
  document.querySelectorAll('.otp-input').forEach(i=>i.value='');
  const os=document.getElementById('otp-section'),ss=document.getElementById('send-otp-section');
  const ros=document.getElementById('reg-otp-section'),rss=document.getElementById('reg-send-section');
  if(os)os.classList.add('hidden');if(ss)ss.classList.remove('hidden');
  if(ros)ros.classList.add('hidden');if(rss)rss.classList.remove('hidden');
  generatedOtp=null;otpMobile=null;
}

function otpNext(el,idx,prefix){
  if(el.value.length===1){
    const cls=prefix==='reg'?'.reg-otp':('#otp-section .otp-input');
    const inputs=document.querySelectorAll(cls);
    if(idx<inputs.length-1)inputs[idx+1].focus();
  }
}

function otpBack(e,idx,prefix){
  if(e.key==='Backspace'&&!e.target.value){
    const cls=prefix==='reg'?'.reg-otp':('#otp-section .otp-input');
    const inputs=document.querySelectorAll(cls);
    if(idx>0)inputs[idx-1].focus();
  }
}

function startOtpTimer(){
  let sec=30;
  const el=document.getElementById('otpTimer');
  if(!el)return;
  const iv=setInterval(()=>{
    sec--;el.textContent=sec>0?`Resend in ${sec}s`:'';
    if(sec<=0){clearInterval(iv);el.innerHTML=`<span style="color:var(--red);cursor:pointer;font-weight:700" onclick="sendOtp()">Resend OTP</span>`;}
  },1000);
}

function doLogout(){
  DB.clearSession();matchFilters=null;
  toast('Logged out.');
  showPage('landing');updateNav();closeDropdown();
}

/* ══════════════════════════════════════════
   SMART MATCH WIZARD
══════════════════════════════════════════ */
let wizStep=1;

function startWizard(){
  wizardData={};wizStep=1;
  showPage('wizard');
  updateWizardStep();
}

function updateWizardStep(){
  document.querySelectorAll('.wiz-step').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById('wiz-'+wizStep);
  if(el)el.classList.add('active');
  const bar=document.getElementById('wizardBar');
  if(bar)bar.style.width=(wizStep/3*100)+'%';
}

function selectWizOpt(el,key,val){
  document.querySelectorAll('.wiz-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  wizardData[key]=val;
  setTimeout(()=>{wizStep=2;updateWizardStep();},300);
}

function wizBack(){
  if(wizStep>1){wizStep--;updateWizardStep();}
  else showPage('landing');
}

function wizNext2(){
  const area=document.getElementById('wiz-area').value;
  if(!area)return toast('Please select an area',true);
  wizardData.area=area;
  wizardData.type=document.getElementById('wiz-type').value;
  wizardData.budget=document.getElementById('wiz-budget').value;
  wizStep=3;updateWizardStep();
}

function wizFinish(){
  wizardData.timeline=document.getElementById('wiz-timeline').value;
  wizardData.note=document.getElementById('wiz-note').value;
  matchFilters={...wizardData};
  if(!DB.session){
    showPage('auth','register');
    toast('Create a free account to see matched brokers');
    return;
  }
  showPage('listing');
}

function clearMatch(){
  matchFilters=null;
  document.getElementById('matchBanner')?.classList.add('hidden');
  clearFilters();
  renderBrokers();
}

/* ══════════════════════════════════════════
   SKELETONS
══════════════════════════════════════════ */
function showSkeletons(){
  const c=document.getElementById('brokerList');
  if(!c)return;
  c.innerHTML=Array(3).fill('').map(()=>`<div class="skeleton-card"><div class="sk-head"><div class="sk-avatar sk-shimmer"></div><div class="sk-lines"><div class="sk-line sk-shimmer" style="width:60%"></div><div class="sk-line sk-shimmer" style="width:40%"></div></div></div><div class="sk-body"><div class="sk-line sk-shimmer" style="width:80%"></div><div class="sk-line sk-shimmer" style="width:50%"></div></div><div class="sk-stats"><div class="sk-stat sk-shimmer"></div><div class="sk-stat sk-shimmer"></div><div class="sk-stat sk-shimmer"></div></div></div>`).join('');
}

/* ══════════════════════════════════════════
   FILTERS
══════════════════════════════════════════ */
function toggleChip(el,group){
  const ids={type:'chips-type',exp:'chips-exp',trust:'chips-trust'};
  document.querySelectorAll('#'+ids[group]+' .chip').forEach(c=>c.classList.remove('on'));
  activeChips[group]=activeChips[group]===el.textContent.trim()?null:el.textContent.trim();
  if(activeChips[group])el.classList.add('on');
  renderBrokers();
}

function clearFilters(){
  document.getElementById('f-area').value='';
  document.getElementById('f-budget').value='';
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));
  activeChips={type:null,exp:null,trust:null};
  renderBrokers();
}

/* ══════════════════════════════════════════
   TRUST SCORE RING SVG
══════════════════════════════════════════ */
function trustRingHTML(score){
  const r=20,c=2*Math.PI*r;
  const offset=c-(score/100)*c;
  const color=getTrustColor(score);
  return `<div class="trust-ring"><svg width="48" height="48" viewBox="0 0 48 48"><circle class="trust-ring-bg" cx="24" cy="24" r="${r}"/><circle class="trust-ring-fill" cx="24" cy="24" r="${r}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"/></svg><div class="trust-ring-num">${score}</div></div>`;
}

/* ══════════════════════════════════════════
   RENDER BROKERS
══════════════════════════════════════════ */
function renderBrokers(){
  if(!DB.session){showPage('auth','login');return;}

  const sub=document.getElementById('listing-sub');
  if(sub)sub.textContent=`Welcome, ${DB.session.name.split(' ')[0]}! Browse trust-scored brokers below.`;

  // Apply match filters if present
  const banner=document.getElementById('matchBanner');
  if(matchFilters){
    if(banner){
      banner.classList.remove('hidden');
      document.getElementById('mb-title').textContent=`Matched: ${matchFilters.intent||'Buy'} in ${matchFilters.area||'Surat'}`;
      document.getElementById('mb-desc').textContent=`${matchFilters.budget||'Any budget'} · ${matchFilters.type||'Any type'}`;
    }
    if(matchFilters.area)document.getElementById('f-area').value=matchFilters.area;
    if(matchFilters.budget)document.getElementById('f-budget').value=matchFilters.budget;
  }else{
    if(banner)banner.classList.add('hidden');
  }

  const area=document.getElementById('f-area').value;
  const budget=document.getElementById('f-budget').value;
  const sort=document.getElementById('f-sort').value;
  const typeMap={Flat:'Residential Flat',Villa:'Villa / Bungalow',Plot:'Plot / Land',Commercial:'Commercial',Rental:'Rental'};
  const selType=activeChips.type?typeMap[activeChips.type]:null;
  const selExp=activeChips.exp?parseInt(activeChips.exp):null;
  const selTrust=activeChips.trust?parseInt(activeChips.trust):null;

  let list=BROKERS.filter(b=>{
    if(area&&!b.areas.includes(area))return false;
    if(budget&&!b.budgets.includes(budget))return false;
    if(selType&&!b.types.includes(selType))return false;
    if(selExp&&b.exp<selExp)return false;
    if(selTrust&&b.trustScore<selTrust)return false;
    return true;
  });

  if(sort==='trust')list.sort((a,b)=>b.trustScore-a.trustScore);
  else if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);
  else if(sort==='exp')list.sort((a,b)=>b.exp-a.exp);
  else if(sort==='deals')list.sort((a,b)=>b.deals-a.deals);

  renderRecentlyViewed();

  const container=document.getElementById('brokerList');
  const saved=DB.saved;

  if(!list.length){
    container.innerHTML=`<div class="empty-state"><svg class="ico-lg" style="color:var(--muted);margin-bottom:0.5rem"><use href="#ico-search"/></svg><h3 style="margin:0.5rem 0">No brokers found</h3><p style="color:var(--muted);font-size:.85rem">Try removing some filters</p></div>`;
    return;
  }

  container.innerHTML=list.map(b=>{
    const ts=b.trustScore;
    const isSaved=saved.includes(b.id);
    return `<div class="broker-card${b.badge==='top'?' top-rated':''}" onclick="showPage('profile',${b.id})">
      <span class="bc-badge badge-${b.badge}">${b.badgeText}</span>
      <div class="bc-head">
        <div class="bc-av" style="background:${b.bg};color:${b.fg}">${b.init}</div>
        <div style="flex:1">
          <div class="bc-name">${b.name}</div>
          <div class="bc-area">${b.areas.slice(0,2).join(' · ')} · ${b.exp} yrs</div>
        </div>
      </div>
      <div class="bc-stars">
        <svg class="ico-xs gold"><use href="#ico-star"/></svg>
        <span class="bc-rn">${b.rating}</span>
        <span class="bc-rv">(${b.reviews} reviews)</span>
      </div>
      <div class="bc-tags">${b.types.slice(0,3).map(t=>`<span class="bc-tag">${t}</span>`).join('')}</div>
      <div class="bc-stats">
        <div><div class="bc-sn">${ts}</div><div class="bc-sl">Trust Score</div></div>
        <div><div class="bc-sn">${b.exp}</div><div class="bc-sl">Yrs Exp</div></div>
        <div><div class="bc-sn">${b.deals}+</div><div class="bc-sl">Deals</div></div>
        <div><div class="bc-sn">${b.reviews}</div><div class="bc-sl">Reviews</div></div>
      </div>
      <div class="bc-actions">
        <button class="bc-view-btn" onclick="event.stopPropagation();showPage('profile',${b.id})">View Profile →</button>
        <button class="wa-share" onclick="event.stopPropagation();shareWhatsApp(${b.id})" title="Share on WhatsApp"><svg class="ico-sm"><use href="#ico-whatsapp"/></svg></button>
        <button class="save-btn${isSaved?' saved':''}" onclick="event.stopPropagation();toggleSave(${b.id},this)" title="${isSaved?'Saved':'Save'}"><svg class="ico-sm"><use href="#ico-heart"/></svg></button>
      </div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   WHATSAPP SHARE
══════════════════════════════════════════ */
function shareWhatsApp(id){
  const b=BROKERS.find(x=>x.id==id);
  if(!b)return;
  const text=`Check out this trusted broker on MyBroker:\n\n${b.name}\n⭐ ${b.rating} rating · ${b.trustScore}/100 Trust Score\n📍 ${b.areas.join(', ')}\n🤝 ${b.deals}+ deals · ${b.exp} yrs experience\n\nFind verified brokers: mybroker.in`;
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}

/* ══════════════════════════════════════════
   SAVE / UNSAVE
══════════════════════════════════════════ */
function toggleSave(id,el){
  if(!DB.session){showPage('auth','login');return;}
  const saved=DB.saved;
  const idx=saved.indexOf(id);
  if(idx>-1){saved.splice(idx,1);if(el)el.classList.remove('saved');toast('Removed from saved.');}
  else{saved.push(id);if(el)el.classList.add('saved');toast('Broker saved!');}
  DB.save({saved});
}

/* ══════════════════════════════════════════
   RECENTLY VIEWED
══════════════════════════════════════════ */
function addToRecent(id){
  let recent=DB.recent;
  recent=recent.filter(r=>r!==id);
  recent.unshift(id);
  if(recent.length>5)recent=recent.slice(0,5);
  DB.save({recent});
}

function renderRecentlyViewed(){
  const sec=document.getElementById('recentSection');
  const scroll=document.getElementById('recentScroll');
  if(!sec||!scroll)return;
  const recent=DB.recent;
  const brokers=recent.map(id=>BROKERS.find(b=>b.id===id)).filter(Boolean);
  if(!brokers.length){sec.classList.add('hidden');return;}
  sec.classList.remove('hidden');
  scroll.innerHTML=brokers.map(b=>`
    <div class="recent-card" onclick="showPage('profile',${b.id})">
      <div class="rc-av" style="background:${b.bg};color:${b.fg}">${b.init}</div>
      <div>
        <div class="rc-name">${b.name}</div>
        <div class="rc-area">${b.areas[0]}</div>
        <div class="rc-trust">Trust: ${b.trustScore}</div>
      </div>
    </div>`).join('');
}

function clearRecent(){
  DB.save({recent:[]});
  document.getElementById('recentSection')?.classList.add('hidden');
  toast('History cleared');
}

/* ══════════════════════════════════════════
   RENDER PROFILE
══════════════════════════════════════════ */
function renderProfile(id){
  if(!DB.session){showPage('auth','login');return;}
  const b=BROKERS.find(x=>x.id==id);
  if(!b){document.getElementById('profileContent').innerHTML='<div class="empty-state">Broker not found.</div>';return;}

  addToRecent(b.id);
  const saved=DB.saved;
  const meetings=DB.meetings;
  const met=meetings.find(m=>m.brokerId==id&&m.userId==DB.session.id);
  const ts=b.trustScore;
  const tc=getTrustColor(ts);
  const bd=trustBreakdown(b);

  document.getElementById('profileContent').innerHTML=`
    <div class="profile-header">
      <div class="profile-av" style="background:${b.bg};color:${b.fg}">${b.init}</div>
      <div style="flex:1;position:relative;z-index:1;">
        <div class="profile-name">${b.name} <span class="bc-badge badge-${b.badge}" style="font-size:0.65rem;vertical-align:middle;margin-left:0.5rem">${b.badgeText}</span></div>
        <div class="profile-title">${b.title} · Surat</div>
        <div class="profile-trust">
          <div class="profile-trust-num">${ts}</div>
          <div><div style="font-size:0.72rem;font-weight:700;color:${tc}">${getTrustLabel(ts)}</div><div class="profile-trust-label">Trust Score</div></div>
          <div class="profile-trust-bar"><div class="profile-trust-fill" style="width:${ts}%;background:${tc}"></div></div>
        </div>
        <div class="profile-meta">
          <span class="meta-pill"><svg class="ico-xs"><use href="#ico-map"/></svg> ${b.areas.join(', ')}</span>
          <span class="meta-pill"><svg class="ico-xs"><use href="#ico-calendar"/></svg> ${b.exp} Yrs</span>
          <span class="meta-pill">${b.deals}+ Deals</span>
          <span class="meta-pill" style="color:#4ade80"><svg class="ico-xs"><use href="#ico-zap"/></svg> ${b.response}</span>
        </div>
        <div class="profile-verified"><svg class="ico-xs"><use href="#ico-check"/></svg> Identity Verified · MyBroker Approved</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.5rem;min-width:160px;position:relative;z-index:1;">
        <button class="ph-btn-primary" onclick="document.getElementById('meet-anchor').scrollIntoView({behavior:'smooth'})"><svg class="ico-sm"><use href="#ico-calendar"/></svg> Request Meeting</button>
        <button class="ph-btn-wa" onclick="shareWhatsApp(${b.id})"><svg class="ico-sm"><use href="#ico-whatsapp"/></svg> Share</button>
        <button id="sp-${b.id}" class="ph-btn-ghost" onclick="toggleSaveProfile(${b.id})">${saved.includes(b.id)?'❤️ Saved':'Save Broker'}</button>
      </div>
    </div>

    <div class="profile-grid">
      <div>
        <div class="tab-bar">
          <button class="tb-tab on" onclick="switchProfileTab('ov',this)">Overview</button>
          <button class="tb-tab" onclick="switchProfileTab('rv',this)">Reviews (${b.reviews})</button>
          <button class="tb-tab" onclick="switchProfileTab('ts',this)">Trust Score</button>
        </div>
        <div class="tb-panel on" id="ptb-ov">
          <div class="profile-card"><div class="profile-card-title">About ${b.name.split(' ')[0]}</div><p style="font-size:.86rem;color:var(--muted);line-height:1.75">${b.about}</p></div>
          <div class="profile-card"><div class="profile-card-title">Specializations</div>
            ${b.types.map(t=>`<span class="bc-tag" style="font-size:.78rem;padding:.3rem .8rem;display:inline-block;margin:.2rem">${t}</span>`).join('')}
            <div style="margin-top:1rem;font-size:.7rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem">Budget Range</div>
            ${b.budgets.map(t=>`<span class="bc-tag" style="font-size:.75rem;padding:.25rem .7rem;display:inline-block;margin:.2rem">${t}</span>`).join('')}
          </div>
        </div>
        <div class="tb-panel" id="ptb-rv">
          <div class="profile-card"><div class="profile-card-title">Client Reviews</div>
            ${b.clientReviews.map(r=>`<div class="review-item"><div style="display:flex;justify-content:space-between"><div class="reviewer-name">${r.name}</div><div class="review-date">${r.date}</div></div><div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><div class="review-text">"${r.text}"</div></div>`).join('')}
          </div>
        </div>
        <div class="tb-panel" id="ptb-ts">
          <div class="profile-card">
            <div class="profile-card-title">Trust Score Breakdown</div>
            <div style="text-align:center;margin-bottom:1.5rem;">
              <div style="font-size:3rem;font-weight:900;color:${tc}">${ts}</div>
              <div style="font-size:0.82rem;font-weight:700;color:${tc}">${getTrustLabel(ts)}</div>
              <div style="font-size:0.72rem;color:var(--muted);margin-top:0.2rem">out of 100</div>
            </div>
            <div class="trust-breakdown">
              <div class="tb-row"><span class="tb-label">Verified</span><div class="tb-bar"><div class="tb-fill" style="width:${bd.verification}%;background:var(--green)"></div></div><span class="tb-val">${bd.verification}%</span></div>
              <div class="tb-row"><span class="tb-label">Experience</span><div class="tb-bar"><div class="tb-fill" style="width:${bd.experience}%;background:var(--blue)"></div></div><span class="tb-val">${bd.experience}%</span></div>
              <div class="tb-row"><span class="tb-label">Deals</span><div class="tb-bar"><div class="tb-fill" style="width:${bd.deals}%;background:var(--gold)"></div></div><span class="tb-val">${bd.deals}%</span></div>
              <div class="tb-row"><span class="tb-label">Rating</span><div class="tb-bar"><div class="tb-fill" style="width:${bd.rating}%;background:#f59e0b"></div></div><span class="tb-val">${bd.rating}%</span></div>
              <div class="tb-row"><span class="tb-label">Reviews</span><div class="tb-bar"><div class="tb-fill" style="width:${bd.reviews}%;background:var(--red)"></div></div><span class="tb-val">${bd.reviews}%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div id="meet-anchor">
        <div class="sidebar-stat"><div class="ssn" style="color:${tc}">${ts}</div><div class="ssl">Trust Score</div></div>
        <div class="sidebar-stat"><div class="ssn">${b.rating}★</div><div class="ssl">Rating</div></div>
        <div class="sidebar-stat"><div class="ssn">${b.deals}+</div><div class="ssl">Deals</div></div>
        <div class="meeting-box" id="meeting-form-${b.id}">
          ${met?`<div class="meeting-success"><svg class="ico-sm" style="color:#4ade80"><use href="#ico-check"/></svg> Meeting Requested!<br><span style="font-size:.78rem;font-weight:400">Status: <strong>${met.status}</strong> · We'll call within 24hrs.</span></div>`
          :`<h3>Request a Meeting</h3><p>We'll arrange a consultation with ${b.name.split(' ')[0]}.</p>
            <div class="mff"><label>Your Requirement *</label><input type="text" id="m-req" placeholder="e.g. 3BHK in Adajan, ₹80L"></div>
            <div class="mff"><label>Preferred Date *</label><input type="date" id="m-date" min="${new Date().toISOString().split('T')[0]}"></div>
            <div class="mff"><label>Preferred Time</label><select id="m-time"><option>Morning (9am–12pm)</option><option>Afternoon (12pm–4pm)</option><option>Evening (4pm–7pm)</option></select></div>
            <button class="meeting-submit" onclick="requestMeeting(${b.id})"><svg class="ico-sm"><use href="#ico-calendar"/></svg> Request Meeting →</button>`}
        </div>
      </div>
    </div>`;
}

function toggleSaveProfile(id){
  const saved=DB.saved;
  const btn=document.getElementById('sp-'+id);
  const idx=saved.indexOf(id);
  if(idx>-1){saved.splice(idx,1);if(btn)btn.textContent='Save Broker';toast('Removed.');}
  else{saved.push(id);if(btn)btn.textContent='❤️ Saved';toast('Saved!');}
  DB.save({saved});
}

function switchProfileTab(name,el){
  el.closest('.tab-bar').querySelectorAll('.tb-tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  ['ov','rv','ts'].forEach(n=>{const p=document.getElementById('ptb-'+n);if(p)p.classList.toggle('on',n===name);});
}

/* ══════════════════════════════════════════
   REQUEST MEETING
══════════════════════════════════════════ */
function requestMeeting(brokerId){
  const req=document.getElementById('m-req').value.trim();
  const date=document.getElementById('m-date').value;
  const time=document.getElementById('m-time').value;
  if(!req)return toast('Describe your requirement',true);
  if(!date)return toast('Select a date',true);
  const b=BROKERS.find(x=>x.id==brokerId);
  const meetings=DB.meetings;
  meetings.push({id:Date.now(),userId:DB.session.id,userName:DB.session.name,userMobile:DB.session.mobile,brokerId,brokerName:b.name,brokerInit:b.init,brokerBg:b.bg,brokerFg:b.fg,brokerTitle:b.title,req,date,time,status:'pending',at:new Date().toLocaleDateString('en-IN')});
  DB.save({meetings});
  toast('Meeting request sent! We\'ll call within 24hrs.');
  document.getElementById('meeting-form-'+brokerId).innerHTML=`<div class="meeting-success"><svg class="ico-sm" style="color:#4ade80"><use href="#ico-check"/></svg> Meeting Requested!<br><span style="font-size:.78rem;font-weight:400">We'll call within 24 hrs to confirm.</span></div>`;
}

/* ══════════════════════════════════════════
   MY PROFILE
══════════════════════════════════════════ */
function loadMyProfile(){
  const u=DB.session;if(!u)return;
  const av=document.getElementById('mp-avatar'),nm=document.getElementById('mp-name'),rb=document.getElementById('mp-role-badge');
  if(av)av.textContent=u.name[0].toUpperCase();
  if(nm)nm.textContent=u.name;
  if(rb){rb.textContent='Member';rb.className='myprofile-role badge-verified';rb.style.cssText='display:inline-block;margin-top:0.3rem;font-size:0.72rem;font-weight:700;padding:0.18rem 0.65rem;border-radius:12px;';}
  ['edit-name','edit-email','edit-mobile'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=u[id.replace('edit-','')]||'';});
  const intent=document.getElementById('edit-intent');if(intent&&u.intent)intent.value=u.intent;
  ['ai-mobile','ai-email','ai-since','ai-role'].forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    const map={'ai-mobile':u.mobile,'ai-email':u.email||'—','ai-since':u.joinedAt||'—','ai-role':'Member'};
    el.textContent=map[id];
  });
  loadSavedBrokers();
}

function loadSavedBrokers(){
  const c=document.getElementById('saved-brokers-list');if(!c)return;
  const savedBrokers=BROKERS.filter(b=>DB.saved.includes(b.id));
  if(!savedBrokers.length){c.innerHTML='<p style="font-size:0.82rem;color:var(--muted)">No saved brokers yet.</p>';return;}
  c.innerHTML=savedBrokers.map(b=>`<div class="saved-broker-item" onclick="showPage('profile',${b.id})"><div class="sbi-av" style="background:${b.bg};color:${b.fg}">${b.init}</div><div><div class="sbi-name">${b.name}</div><div class="sbi-area">${b.areas[0]} · Trust: ${b.trustScore}</div></div></div>`).join('');
}

function saveProfile(){
  const name=document.getElementById('edit-name').value.trim();
  if(!name)return profileEditMsg('Name required','error');
  const email=document.getElementById('edit-email').value.trim();
  const intent=document.getElementById('edit-intent').value;
  const users=DB.users;
  const idx=users.findIndex(u=>u.id===DB.session.id);
  if(idx>-1){users[idx]={...users[idx],name,email,intent};DB.save({users});DB.setSession(users[idx]);}
  document.getElementById('mp-name').textContent=name;
  document.getElementById('mp-avatar').textContent=name[0].toUpperCase();
  updateNav();profileEditMsg('Profile saved! ✅','ok');
}

function profileEditMsg(msg,type){
  const el=document.getElementById('profile-edit-msg');
  if(el)el.innerHTML=`<div class="msg-${type}" style="margin-bottom:0.8rem">${msg}</div>`;
}

/* ══════════════════════════════════════════
   MY MEETINGS
══════════════════════════════════════════ */
function loadMyMeetings(){
  const c=document.getElementById('myMeetingsList');if(!c)return;
  const meetings=DB.meetings.filter(m=>m.userId===DB.session?.id);
  if(!meetings.length){
    c.innerHTML=`<div class="empty-state"><svg class="ico-lg" style="color:var(--muted)"><use href="#ico-calendar"/></svg><h3 style="margin:.5rem 0">No meetings yet</h3><p style="color:var(--muted);font-size:.85rem">Browse brokers and request your first consultation.</p><button class="auth-submit" style="margin-top:1rem;width:auto;padding:.6rem 1.5rem" onclick="showPage('listing')">Browse Brokers →</button></div>`;
    return;
  }
  c.innerHTML=meetings.reverse().map(m=>`
    <div class="meeting-card"><div class="mc-head"><div class="mc-av" style="background:${m.brokerBg||'#dce8d8'};color:${m.brokerFg||'#2d6b3a'}">${m.brokerInit||'B'}</div><div style="flex:1"><div class="mc-broker-name">${m.brokerName}</div><div class="mc-broker-title">${m.brokerTitle||'Broker'}</div></div><span class="mc-status status-${m.status}">${m.status}</span></div>
    <div class="mc-detail"><strong>Requirement:</strong> ${m.req}</div>
    <div class="mc-detail"><strong>Date:</strong> ${m.date} · ${m.time}</div>
    <div class="mc-detail"><strong>Requested:</strong> ${m.at}</div></div>`).join('');
}

/* ══════════════════════════════════════════
   PRICE GUIDE
══════════════════════════════════════════ */
function renderPriceGuide(){
  ['res','com','plot'].forEach(key=>{
    const grid=document.getElementById('pgrid-'+key);if(!grid)return;
    grid.innerHTML=PRICES[key].map(p=>`
      <div class="price-card">
        <div style="font-weight:800;font-size:0.95rem;margin-bottom:0.2rem">${p.area}</div>
        <div style="font-size:0.7rem;color:var(--muted);margin-bottom:0.8rem">${key==='res'?'Residential':key==='com'?'Commercial':'Plot'}</div>
        <div style="font-size:1.4rem;font-weight:800;color:var(--red)">₹${p.avg.toLocaleString()}<span style="font-size:0.7rem;font-weight:400;color:var(--muted)">/sqft</span></div>
        <div style="font-size:0.73rem;color:var(--muted);margin-top:0.3rem">Range: ${p.range}/sqft</div>
        <div style="font-size:0.7rem;font-weight:700;margin-top:0.5rem;color:${p.trend.startsWith('↑')?'var(--green)':'#b45309'}">${p.trend} YoY</div>
      </div>`).join('');
  });
}

function switchPriceTab(name,el){
  el.closest('.tab-bar').querySelectorAll('.tb').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  ['res','com','plot'].forEach(n=>document.getElementById('ptab-'+n)?.classList.toggle('on',n===name));
}

/* ══════════════════════════════════════════
   FAQ
══════════════════════════════════════════ */
function toggleFaq(el){
  const item=el.closest('.faq-item');
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
  if(!wasOpen)item.classList.add('open');
}

/* ══════════════════════════════════════════
   HERO SEARCH TAB
══════════════════════════════════════════ */
function setHsbTab(el){
  document.querySelectorAll('.hsb-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

function heroSearch(){
  if(!DB.session){startWizard();return;}
  const area=document.getElementById('hs-area').value;
  const budget=document.getElementById('hs-budget').value;
  showPage('listing');
  setTimeout(()=>{
    if(area)document.getElementById('f-area').value=area;
    if(budget)document.getElementById('f-budget').value=budget;
    renderBrokers();
  },100);
}

/* ══════════════════════════════════════════
   SCROLL TO TOP
══════════════════════════════════════════ */
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}

window.addEventListener('scroll',()=>{
  const btn=document.getElementById('scrollTopBtn');
  if(btn)btn.classList.toggle('visible',window.scrollY>400);
});

/* ══════════════════════════════════════════
   SCROLL ANIMATIONS
══════════════════════════════════════════ */
function initScrollAnimations(){
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // Counter animation
        if(entry.target.classList.contains('sc-num')){
          animateCounter(entry.target);
        }
      }
    });
  },{threshold:0.15,rootMargin:'0px 0px -50px 0px'});

  document.querySelectorAll('.anim-up,.anim-fade,.sc-num[data-count]').forEach(el=>observer.observe(el));
}

function animateCounter(el){
  const target=parseInt(el.dataset.count);
  if(!target||el.dataset.done)return;
  el.dataset.done='1';
  const suffix=el.closest('.success-card')?.querySelector('.sc-label')?.textContent?.includes('Rate')?'%':
               el.closest('.success-card')?.querySelector('.sc-label')?.textContent?.includes('Days')?'':'+';
  let current=0;
  const step=target/40;
  const iv=setInterval(()=>{
    current+=step;
    if(current>=target){current=target;clearInterval(iv);}
    el.textContent=Math.round(current)+(current>=target?suffix:'');
  },30);
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function toast(msg,err){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.style.borderLeftColor=err?'#dc2626':'var(--red)';
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}

function stars(r){return '★'.repeat(Math.floor(r||0))+((r||0)%1>=0.5?'½':'');}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
updateNav();
if(DB.session)goHome();else showPage('landing');

// Delay animation init to ensure DOM is ready
setTimeout(initScrollAnimations,300);

// Re-init animations when landing page is shown
const landingObserver=new MutationObserver(()=>{
  if(document.getElementById('page-landing')?.classList.contains('active')){
    setTimeout(initScrollAnimations,100);
  }
});
landingObserver.observe(document.getElementById('page-landing'),{attributes:true,attributeFilter:['class']});