(function(){
"use strict";

var PHASES = ROADMAP_DATA.phases;
var PROJECTS = ROADMAP_DATA.projects;

var TYPE_COLORS = {
  "COURSE":"#1cb0f6","PLAYLIST":"#ff4b4b","VIDEO":"#ff4b4b","FREE BOOK":"#ce82ff",
  "DOCS":"#58cc02","PRACTICE":"#37464f","ARTICLE":"#ff9600","TOOL":"#37464f",
  "GITHUB":"#37464f","PAPER":"#ffc800","WEBSITE":"#8fa7b0","JOB BOARD":"#1cb0f6",
  "NEWSLETTER":"#ce82ff","PODCAST":"#ff9600"
};

var STORE_KEY = "aiEngineerPath_progress_v3";
function loadProgress(){
  try{
    var raw = localStorage.getItem(STORE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return { weeks:{}, projects:{}, lastActionDay:null, streak:0 };
}
function saveProgress(p){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(p)); }catch(e){}
}
var progress = loadProgress();

function todayStr(){ return new Date().toISOString().slice(0,10); }
function bumpStreak(){
  var today = todayStr();
  if(progress.lastActionDay === today) return;
  var y = new Date(Date.now()-86400000).toISOString().slice(0,10);
  if(progress.lastActionDay === y){ progress.streak = (progress.streak||0)+1; }
  else { progress.streak = 1; }
  progress.lastActionDay = today;
}

var ALL_WEEKS = [];
PHASES.forEach(function(ph){
  ph.weeks.forEach(function(w){
    ALL_WEEKS.push({ week:w, phase:ph });
  });
});

function totalWeeksDone(){
  return Object.keys(progress.weeks).filter(function(k){return progress.weeks[k];}).length;
}
function totalProjectsDone(){
  return Object.keys(progress.projects).filter(function(k){return progress.projects[k];}).length;
}
function xpTotal(){
  return totalWeeksDone()*50 + totalProjectsDone()*100;
}

function isWeekUnlocked(idx){
  if(idx === 0) return true;
  var prevWeek = ALL_WEEKS[idx-1].week.n;
  return !!progress.weeks[prevWeek];
}

function firstIncompleteIndex(){
  for(var i=0;i<ALL_WEEKS.length;i++){
    if(!progress.weeks[ALL_WEEKS[i].week.n]) return i;
  }
  return -1;
}

function shade(hex){
  var c = hex.replace('#','');
  if(c.length===3) c = c.split('').map(function(x){return x+x;}).join('');
  var r = parseInt(c.substr(0,2),16), g = parseInt(c.substr(2,2),16), b = parseInt(c.substr(4,2),16);
  r = Math.round(r*0.72); g = Math.round(g*0.72); b = Math.round(b*0.72);
  return 'rgb('+r+','+g+','+b+')';
}

function escapeHtml(s){
  return (s||"").replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

function fireConfetti(){
  var container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  var colors = ['#58cc02','#1cb0f6','#ce82ff','#ff4b4b','#ff9600','#ffc800'];
  for(var i=0;i<30;i++){
    var piece = document.createElement('div');
    piece.className = 'confetti';
    piece.style.left = Math.random()*100+'%';
    piece.style.top = '-10px';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDelay = Math.random()*0.5+'s';
    piece.style.animationDuration = (1+Math.random()*1)+'s';
    container.appendChild(piece);
  }
  setTimeout(function(){ container.remove(); }, 2500);
}

/* ---------------- render path ---------------- */
function renderPath(){
  var container = document.getElementById('pathContainer');
  container.innerHTML = "";
  var offsets = [0,1,2,3,4,5,6,7];
  var globalIdx = 0;
  PHASES.forEach(function(ph){
    var banner = document.createElement('div');
    banner.className = 'phase-banner';
    banner.style.setProperty('--phase-color', ph.color);
    banner.innerHTML = '<div class="plabel">Phase '+ph.id+'</div><h2>'+escapeHtml(ph.name)+'</h2><div class="pweeks">'+escapeHtml(ph.weeksLabel)+'</div>';
    if(ph.id === 9 || ph.id === 10){
      banner.innerHTML += '<img src="assets/mascots/09_sweating_writing_notes.png" alt="hard work" class="mascot-tip" style="position:absolute;top:14px;right:14px;opacity:0.8">';
    }
    if(ph.id === 11){
      banner.innerHTML += '<img src="assets/mascots/12_sunglasses_cool_capstone.png" alt="capstone" class="mascot-tip" style="position:absolute;top:14px;right:14px;opacity:0.8">';
    }
    container.appendChild(banner);

    var pathDiv = document.createElement('div');
    pathDiv.className = 'path';
    var offIdx = 0;
    ph.weeks.forEach(function(w){
      var idx = globalIdx;
      var unlocked = isWeekUnlocked(idx);
      var done = !!progress.weeks[w.n];
      var row = document.createElement('div');
      row.className = 'node-row';
      var wrap = document.createElement('div');
      wrap.className = 'node-wrap off-'+(offsets[offIdx % offsets.length]);
      offIdx++;

      var btn = document.createElement('button');
      btn.className = 'node-btn' + (!unlocked ? ' locked' : (done ? ' done' : ''));
      btn.style.setProperty('--node-color', ph.color);
      btn.style.setProperty('--node-shadow', shade(ph.color));
      btn.innerHTML = done
        ? '<span class="node-star"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span>&#10003;'
        : (unlocked
          ? (w.n)
          : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>');
      btn.setAttribute('aria-label','Week '+w.n+' '+w.title);
      if(unlocked){
        btn.addEventListener('click', (function(ii){ return function(){ openWeekView(ii); }; })(idx));
      }
      wrap.appendChild(btn);

      if(unlocked && !done && idx === firstIncompleteIndex()){
        var badge = document.createElement('div');
        badge.className = 'node-current-badge';
        badge.innerHTML = '<img src="assets/mascots/01_excited_welcome.png" alt="" style="width:16px;height:16px;vertical-align:middle;margin-right:4px">START';
        wrap.appendChild(badge);
      }

      if(!unlocked){
        var lockTooltip = document.createElement('div');
        lockTooltip.className = 'node-lock-tooltip';
        lockTooltip.innerHTML = '<img src="assets/mascots/06_question_mark_locked.png" alt="" style="width:20px;height:20px;vertical-align:middle;margin-right:4px">Complete the previous week to unlock';
        wrap.appendChild(lockTooltip);
      }

      var cap = document.createElement('div');
      cap.className = 'node-caption';
      cap.textContent = 'Week '+w.n+' \u00B7 '+w.title;
      wrap.appendChild(cap);

      row.appendChild(wrap);
      pathDiv.appendChild(row);
      globalIdx++;
    });
    container.appendChild(pathDiv);

    var phaseWeeksDone = ph.weeks.filter(function(w){return !!progress.weeks[w.n];}).length;
    if(phaseWeeksDone === ph.weeks.length && ph.weeks.length > 0){
      var celebration = document.createElement('div');
      celebration.className = 'phase-complete-mascot';
      var mascotFile = ph.id === 11 ? '03_graduation_phase_complete.png' : '08_cheering_week_complete.png';
      celebration.innerHTML = '<img src="assets/mascots/'+mascotFile+'" alt="Phase complete!" class="mascot-big"><div style="font-weight:800;font-size:14px;color:var(--green);">Phase '+ph.id+' complete!</div>';
      container.appendChild(celebration);
    }

    if(ph.pitfall){
      var pf = document.createElement('div');
      pf.className = 'pitfall';
      pf.innerHTML = '<img src="assets/mascots/07_lightbulb_tip.png" alt="tip" class="pitfall-mascot"><div class="pitfall-text"><b>'+escapeHtml(ph.pitfall.title)+'</b>'+escapeHtml(ph.pitfall.body)+'</div>';
      container.appendChild(pf);
    }
  });
  updateHero();
}

function updateHero(){
  var done = totalWeeksDone();
  var pct = Math.round(done/24*100);
  document.getElementById('heroBar').style.width = pct+'%';
  document.getElementById('heroLabel').textContent = done+' / 24 weeks complete';
  document.getElementById('streakStat').textContent = progress.streak||0;
  document.getElementById('xpStat').textContent = xpTotal();

  var streak = progress.streak || 0;
  var streakPill = document.querySelector('.stat-pill.streak');
  var existingNudge = streakPill ? streakPill.querySelector('.streak-nudge') : null;
  if(streak === 0 && streakPill && !existingNudge){
    var nudge = document.createElement('img');
    nudge.src = 'assets/mascots/10_sleepy_locked_streak.png';
    nudge.alt = 'no streak';
    nudge.className = 'mascot-ic streak-nudge';
    nudge.style.marginLeft = '4px';
    streakPill.appendChild(nudge);
  } else if(streak > 0 && existingNudge){
    existingNudge.remove();
  }

  var heroEl = document.querySelector('#tab-path .hero');
  var existingMascot = heroEl.querySelector('.welcome-mascot');
  if(done === 0 && !existingMascot){
    var mascotDiv = document.createElement('div');
    mascotDiv.className = 'welcome-mascot';
    mascotDiv.innerHTML = '<img src="assets/mascots/13_hatching_egg_week1.png" alt="Welcome!" class="mascot-big">';
    heroEl.insertBefore(mascotDiv, heroEl.firstChild);
  } else if(done > 0 && existingMascot){
    existingMascot.remove();
  }

  if(done === 24){
    var completeMascot = heroEl.querySelector('.path-complete-mascot');
    if(!completeMascot){
      var completeDiv = document.createElement('div');
      completeDiv.className = 'path-complete-mascot welcome-mascot';
      completeDiv.innerHTML = '<img src="assets/mascots/05_heart_eyes_path_complete.png" alt="Complete!" class="mascot-big"><div style="font-weight:800;font-size:16px;color:var(--green);margin-top:8px;">You finished all 24 weeks!</div>';
      heroEl.appendChild(completeDiv);
    }
  }
}

/* ---------------- week view ---------------- */
var currentWeekIdx = null;
var currentLang = "en";
var currentStepIndex = 0;
var currentFilteredMainSteps = [];

function getFilteredSteps(weekData, lang){
  var all = weekData.steps || [];
  var main = [];
  var supplementary = [];
  var practice = null;
  all.forEach(function(s){
    if(s.stream === "practice" && s.type === "PRACTICE"){
      practice = s;
      return;
    }
    if(s.stream === "main"){
      if(lang === "all" || s.lang === lang) main.push(s);
    } else if(s.stream === "supplementary"){
      supplementary.push(s);
    }
  });
  return { main: main, supplementary: supplementary, practice: practice };
}

function openWeekView(idx){
  currentWeekIdx = idx;
  currentStepIndex = 0;
  currentLang = "en";
  var entry = ALL_WEEKS[idx];
  var w = entry.week;
  var ph = entry.phase;

  document.getElementById('weekHeaderLabel').textContent = 'WEEK '+w.n;
  document.getElementById('weekHeaderTitle').textContent = w.title;
  document.getElementById('weekHeaderMascot').src = 'assets/mascots/02_reading_book.png';

  document.getElementById('tab-path').style.display = 'none';
  document.getElementById('tab-projects').style.display = 'none';
  document.getElementById('tab-stats').style.display = 'none';
  document.getElementById('bottomNav').style.display = 'none';
  document.getElementById('weekView').style.display = '';

  var langBtns = document.querySelectorAll('.lang-btn');
  for(var i=0;i<langBtns.length;i++){
    langBtns[i].classList.toggle('active', langBtns[i].getAttribute('data-lang') === currentLang);
  }

  renderWeekStep();
}

function renderWeekStep(){
  var entry = ALL_WEEKS[currentWeekIdx];
  var w = entry.week;
  var ph = entry.phase;
  var filtered = getFilteredSteps(w, currentLang);
  currentFilteredMainSteps = filtered.main;

  var totalSteps = currentFilteredMainSteps.length + (filtered.supplementary.length > 0 ? 1 : 0) + (filtered.practice ? 1 : 0);
  var completedSteps = currentStepIndex;
  var pct = totalSteps > 0 ? Math.round(completedSteps / totalSteps * 100) : 0;
  document.getElementById('weekProgressFill').style.width = pct + '%';
  document.getElementById('weekProgressFill').style.background = 'linear-gradient(90deg,'+ph.color+','+ph.color+')';

  var body = document.getElementById('weekBody');
  body.innerHTML = "";

  var footer = document.getElementById('weekFooter');
  var nextBtn = document.getElementById('weekNextBtn');

  // Main steps
  if(currentStepIndex < currentFilteredMainSteps.length){
    var step = currentFilteredMainSteps[currentStepIndex];
    renderStepCard(body, step, currentStepIndex + 1, currentFilteredMainSteps.length);
    nextBtn.style.display = '';
    nextBtn.querySelector('span').textContent = 'Continue';
    nextBtn.onclick = function(){ currentStepIndex++; renderWeekStep(); };
  }
  // Supplementary section
  else if(currentStepIndex === currentFilteredMainSteps.length && filtered.supplementary.length > 0){
    renderSupplementarySection(body, filtered.supplementary, w, ph);
    nextBtn.style.display = '';
    nextBtn.querySelector('span').textContent = 'Continue';
    nextBtn.onclick = function(){ currentStepIndex++; renderWeekStep(); };
  }
  // Practice section
  else if(filtered.practice){
    renderPracticeSection(body, filtered.practice, w, ph);
    nextBtn.style.display = 'none';
  }
  // All done - mark complete
  else {
    renderWeekComplete(body, w, ph);
    nextBtn.style.display = 'none';
  }
}

function renderStepCard(container, step, num, total){
  var typeColor = TYPE_COLORS[step.type] || '#8fa7b0';
  var card = document.createElement('div');
  card.className = 'step-card';
  card.innerHTML =
    '<div class="step-card-inner">'+
      '<div class="step-header">'+
        '<span class="step-num">'+num+' / '+total+'</span>'+
        '<span class="step-type-badge" style="background:'+typeColor+'">'+escapeHtml(step.type)+'</span>'+
      '</div>'+
      '<h3 class="step-title">'+escapeHtml(step.title)+'</h3>'+
      (step.meta ? '<div class="step-meta">'+escapeHtml(step.meta)+'</div>' : '')+
      (step.desc ? '<div class="step-desc">'+escapeHtml(step.desc)+'</div>' : '')+
      (step.url ? '<a class="step-open-btn" href="'+escapeHtml(step.url)+'" target="_blank" rel="noopener noreferrer">Open Resource <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>' : '')+
    '</div>';
  container.appendChild(card);
}

function renderSupplementarySection(container, suppSteps, w, ph){
  var section = document.createElement('div');
  section.className = 'supp-section';
  var toggleBtn = document.createElement('button');
  toggleBtn.className = 'supp-toggle';
  toggleBtn.innerHTML = '<img src="assets/mascots/14_speech_bubble_resource_tip.png" alt="" style="width:28px;height:28px;vertical-align:middle;margin-right:8px">Supplementary Resources ('+suppSteps.length+') <svg class="supp-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  var list = document.createElement('div');
  list.className = 'supp-list';
  list.style.display = 'none';

  suppSteps.forEach(function(step){
    var typeColor = TYPE_COLORS[step.type] || '#8fa7b0';
    var a = document.createElement('a');
    a.className = 'res-card';
    a.href = step.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.innerHTML =
      '<span class="res-type" style="--type-color:'+typeColor+'">'+escapeHtml(step.type)+'</span>'+
      '<span class="res-info">'+
        '<div class="res-title">'+escapeHtml(step.title)+'</div>'+
        (step.meta ? '<div class="res-meta">'+escapeHtml(step.meta)+'</div>' : '')+
        (step.desc ? '<div class="res-desc">'+escapeHtml(step.desc)+'</div>' : '')+
      '</span><span class="res-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>';
    list.appendChild(a);
  });

  toggleBtn.addEventListener('click', function(){
    var isOpen = list.style.display !== 'none';
    list.style.display = isOpen ? 'none' : '';
    var chevron = toggleBtn.querySelector('.supp-chevron');
    if(chevron){
      chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    }
  });

  section.appendChild(toggleBtn);
  section.appendChild(list);
  container.appendChild(section);
}

function renderPracticeSection(container, practiceStep, w, ph){
  var section = document.createElement('div');
  section.className = 'practice-section';
  section.innerHTML =
    '<div class="practice-card">'+
      '<div class="practice-header">'+
        '<img src="assets/mascots/04_on_laptop_shipping.png" alt="ship" class="mascot-tip">'+
        '<h3>Practice & Build</h3>'+
      '</div>'+
      '<div class="practice-ship">Ship by Sunday: '+escapeHtml(w.ship)+'</div>'+
      '<div class="practice-topics">Topics covered:</div>'+
      '<ul class="practice-topics-list">'+
        w.topics.map(function(t){ return '<li>'+escapeHtml(t)+'</li>'; }).join('')+
      '</ul>'+
    '</div>';

  var markBtn = document.createElement('button');
  markBtn.className = 'complete-btn';
  var isDone = !!progress.weeks[w.n];
  markBtn.innerHTML = isDone
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="20 6 9 17 4 12"/></svg>Week complete'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="20 6 9 17 4 12"/></svg>Mark week complete';
  markBtn.className = 'complete-btn' + (isDone ? ' done' : '');
  markBtn.addEventListener('click', function(){
    progress.weeks[w.n] = !progress.weeks[w.n];
    if(progress.weeks[w.n]){ bumpStreak(); fireConfetti(); }
    saveProgress(progress);
    closeWeekView();
  });
  section.appendChild(markBtn);

  container.appendChild(section);
}

function renderWeekComplete(container, w, ph){
  var isDone = !!progress.weeks[w.n];
  var section = document.createElement('div');
  section.className = 'week-complete-section';
  section.innerHTML =
    '<div class="week-complete-inner">'+
      '<img src="assets/mascots/08_cheering_week_complete.png" alt="Complete!" class="mascot-big">'+
      '<h2>All resources reviewed!</h2>'+
      '<p style="color:var(--text-dim);margin:8px 0 20px;">Ready to mark this week complete?</p>'+
    '</div>';
  var markBtn = document.createElement('button');
  markBtn.className = 'complete-btn';
  markBtn.innerHTML = isDone
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="20 6 9 17 4 12"/></svg>Week complete'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="20 6 9 17 4 12"/></svg>Mark week complete';
  markBtn.className = 'complete-btn' + (isDone ? ' done' : '');
  markBtn.addEventListener('click', function(){
    progress.weeks[w.n] = !progress.weeks[w.n];
    if(progress.weeks[w.n]){ bumpStreak(); fireConfetti(); }
    saveProgress(progress);
    closeWeekView();
  });
  section.appendChild(markBtn);
  container.appendChild(section);
}

function closeWeekView(){
  currentWeekIdx = null;
  currentStepIndex = 0;
  currentLang = "en";
  document.getElementById('weekView').style.display = 'none';
  document.getElementById('bottomNav').style.display = '';
  showTab('path');
  renderPath();
  renderProjects();
  renderStats();
}

/* ---------------- language filter ---------------- */
function setupLangFilter(){
  var weekView = document.getElementById('weekView');
  var progressBar = weekView.querySelector('.week-progress-bar');
  var filterRow = document.createElement('div');
  filterRow.className = 'lang-filter';
  filterRow.id = 'langFilter';
  var langs = [
    { key: "en", label: "English" },
    { key: "hi", label: "Hindi" },
    { key: "all", label: "All" }
  ];
  langs.forEach(function(l){
    var btn = document.createElement('button');
    btn.className = 'lang-btn' + (l.key === currentLang ? ' active' : '');
    btn.textContent = l.label;
    btn.setAttribute('data-lang', l.key);
    btn.addEventListener('click', function(){
      currentLang = l.key;
      currentStepIndex = 0;
      document.querySelectorAll('.lang-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      renderWeekStep();
    });
    filterRow.appendChild(btn);
  });
  weekView.insertBefore(filterRow, progressBar);
}

/* ---------------- projects tab ---------------- */
function renderProjects(){
  var c = document.getElementById('projectsContainer');
  c.innerHTML = "";
  PROJECTS.forEach(function(p){
    var done = !!progress.projects[p.n];
    var card = document.createElement('div');
    card.className = 'proj-card';
    card.innerHTML =
      '<div class="proj-head">'+
        '<div class="proj-num" style="--pc:'+p.color+'">'+p.n+'</div>'+
        '<div style="flex:1">'+
          '<div class="proj-title">'+escapeHtml(p.title)+'</div>'+
          '<div class="proj-week">Week '+p.week+'</div>'+
        '</div>'+
        '<button class="proj-check'+(done?' done':'')+'" data-n="'+p.n+'"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>'+
      '</div>'+
      '<div class="proj-desc">'+escapeHtml(p.desc)+'</div>'+
      '<div class="proj-proves"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><polyline points="20 6 9 17 4 12"/></svg>Proves: '+escapeHtml(p.proves)+'</div>'+
      '<div class="proj-actions"><a class="proj-btn" href="'+escapeHtml(p.startUrl)+'" target="_blank" rel="noopener noreferrer">Start with: '+escapeHtml(p.startTitle)+' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></div>';
    c.appendChild(card);
  });
  var checkBtns = c.querySelectorAll('.proj-check');
  for(var ci = 0; ci < checkBtns.length; ci++){
    checkBtns[ci].addEventListener('click', function(){
      var n = this.getAttribute('data-n');
      progress.projects[n] = !progress.projects[n];
      if(progress.projects[n]){ bumpStreak(); fireConfetti(); }
      saveProgress(progress);
      renderProjects();
      renderStats();
      updateHero();
    });
  }
  var done = totalProjectsDone();
  document.getElementById('projBar').style.width = Math.round(done/12*100)+'%';
  document.getElementById('projLabel').textContent = done+' / 12 projects shipped';
}

/* ---------------- stats tab ---------------- */
function renderStats(){
  var weeksDone = totalWeeksDone(), projDone = totalProjectsDone();
  document.getElementById('weeksDoneNum').textContent = weeksDone;
  document.getElementById('projDoneNum').textContent = projDone;
  document.getElementById('xpNum').textContent = xpTotal();
  document.getElementById('pctNum').textContent = Math.round(weeksDone/24*100)+'%';

  var container = document.getElementById('phaseProgressContainer');
  container.innerHTML = "";
  PHASES.forEach(function(ph){
    var doneCount = ph.weeks.filter(function(w){return !!progress.weeks[w.n];}).length;
    var pct = Math.round(doneCount/ph.weeks.length*100);
    var row = document.createElement('div');
    row.className = 'phase-progress-row';
    row.innerHTML =
      '<div class="pname">'+escapeHtml(ph.name)+'</div>'+
      '<div class="pbar"><div class="pbar-inner" style="width:'+pct+'%; background:'+ph.color+'"></div></div>'+
      '<div class="pct">'+pct+'%</div>';
    container.appendChild(row);
  });
}

/* ---------------- bottom nav ---------------- */
function showTab(name){
  ['path','projects','stats'].forEach(function(t){
    document.getElementById('tab-'+t).style.display = (t===name)?'':'none';
  });
  var btns = document.querySelectorAll('.nav-btn');
  for(var i=0;i<btns.length;i++){
    btns[i].classList.toggle('active', btns[i].getAttribute('data-tab')===name);
  }
}
var navBtns = document.querySelectorAll('.nav-btn');
for(var ni=0;ni<navBtns.length;ni++){
  navBtns[ni].addEventListener('click', (function(btn){
    return function(){ showTab(btn.getAttribute('data-tab')); };
  })(navBtns[ni]));
}

/* ---------------- back button ---------------- */
document.getElementById('weekBack').addEventListener('click', closeWeekView);

/* ---------------- theme ---------------- */
function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  try{ localStorage.setItem('aiEngineerPath_theme', t); }catch(e){}
}
(function initTheme(){
  var t = 'dark';
  try{ t = localStorage.getItem('aiEngineerPath_theme') || 'dark'; }catch(e){}
  applyTheme(t);
})();
document.getElementById('themeToggle').addEventListener('click', function(){
  var cur = document.documentElement.getAttribute('data-theme');
  applyTheme(cur==='light' ? 'dark' : 'light');
});

/* ---------------- reset ---------------- */
document.getElementById('resetBtn').addEventListener('click', function(){
  if(confirm('Reset all progress? This cannot be undone.')){
    progress = { weeks:{}, projects:{}, lastActionDay:null, streak:0 };
    saveProgress(progress);
    renderPath(); renderProjects(); renderStats(); updateHero();
  }
});

/* ---------------- init ---------------- */
setupLangFilter();
renderPath();
renderProjects();
renderStats();
updateHero();
})();
