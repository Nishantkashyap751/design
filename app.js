// ChronoCraft — Deep Space Orbit Insertion (Official Asset Pack Edition)
// Using all SVG assets from deep-space-hud-assets.zip

const state = {
  title: 'ORBIT INSERTION',
  targetDate: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 28 * 60 * 1000).toISOString().slice(0, 16),
  device: 'phone',
  phases: [
    { id: 1, type: 'trajectory', title: 'Trajectory & Telemetry',  sub: 'Orbital vectors & precision tracking downlink',       days: 'T-20 (Dec 01)', accent: 'cyan',   completed: true },
    { id: 2, type: 'solar',      title: 'Solar Array & Power',      sub: 'Solar wing deployment & bus power stabilization',    days: 'T-20 (Dec 04)', accent: 'violet', completed: true },
    { id: 3, type: 'dish',       title: 'Deep Space Relay',         sub: 'Ka-band directional high-gain transceiver handshake',days: 'T-12 (Dec 08)', accent: 'cyan',   completed: true },
    { id: 4, type: 'tracker',    title: 'Star Tracker',             sub: 'Optical celestial navigation & attitude control',    days: 'T-12 (Dec 12)', accent: 'violet', completed: false },
    { id: 5, type: 'payload',    title: 'Payload Calibration',      sub: 'Sensor thermal balance & baseline telemetry test',   days: 'T-5  (Dec 19)', accent: 'cyan',   completed: false },
    { id: 6, type: 'insertion',  title: 'Orbit Insertion',          sub: 'Final apogee burn & autonomous orbital slot lock',   days: 'T-0  (Dec 24)', accent: 'violet', completed: false }
  ]
};

// Official SVG icons from deep-space-hud-assets.zip / SVG/
const SVGs = {
  // trajectory-telemetry.svg  
  trajectory: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(-29 32 32)"/><circle cx="31" cy="43" r="4.3" fill="#a4e9ff" stroke="#071522"/><circle cx="31" cy="21" r="1.7" fill="#d6f3ff" stroke="none"/></g></svg>`,
  // solar-array-power.svg
  solar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14H58L51 39H6Z M10 22H56 M8 30H53 M24 14L17 39 M36 14L29 39 M48 14L41 39 M31 39V50 M23 50H39"/></g></svg>`,
  // deep-space-relay.svg
  dish: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12Q6 33 27 44Q37 49 49 43Z M21 39L13 54H34L27 44 M33 27L42 19 M39 16Q46 16 47 23 M39 10Q52 10 53 24"/><circle cx="42" cy="19" r="1.4" fill="#a4e9ff"/></g></svg>`,
  // star-tracker.svg
  tracker: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21V11H19 M45 11H55V21 M55 43V53H45 M19 53H9V43"/><path d="M32 15Q32 31 48 32Q32 33 32 49Q31 33 16 32Q31 31 32 15Z" fill="#edf6ff" stroke="none"/></g></svg>`,
  // payload-calibration.svg
  payload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M32 9L44 16V30L32 37L20 30V16Z M20 16L32 23L44 16 M32 23V37 M20 30L32 37V50L20 57L8 50V37Z M8 37L20 44L32 37 M20 44V57 M44 30L56 37V50L44 57L32 50 M32 37L44 44L56 37 M44 44V57"/></g></svg>`,
  // orbit-insertion.svg
  insertion: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="34" r="24"/><circle cx="30" cy="34" r="11" stroke="#a19dff"/><circle cx="48" cy="18" r="6" fill="#a5dfff" stroke="#0b1625" stroke-width="2.5"/></g></svg>`,
  // chevron.svg (official)
  chevron: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64"><g fill="none" stroke="#edf6ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M26 19L39 32L26 45"/></g></svg>`,
  // accent-cyan.svg (official)
  accentCyan: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="40" viewBox="0 0 4 40"><rect x="1" y="2" width="2" height="36" fill="#91efff"/></svg>`,
  // accent-violet.svg (official)
  accentViolet: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="40" viewBox="0 0 4 40"><rect x="1" y="2" width="2" height="36" fill="#ac86ff"/></svg>`
};

// Submission Documentation
const submissionDocs = {
  plan: `### 🛰️ MISSION: ORBIT INSERTION // 30-Day Backward Execution Blueprint
Engineered with Google Gemini (Aerospace Planning Partner)

Target Lock Date: December 24, 2026, 11:59 PM PT
Objective: Deploy an autonomous deep-space relay satellite into stable orbit.

── BACKWARD DECONSTRUCTION ──

T-0 (Dec 24) — Orbit Insertion
  Deliverable: Final apogee motor burn & orbital slot lock.
  Verification: Telemetry drift < 0.05% of target apogee/perigee.

T-5 (Dec 19) — Payload Calibration
  Deliverable: Sensor array optical alignment & thermal baseline.
  Verification: SNR > 45 dB across all downlink channels.

T-12 (Dec 12) — Star Tracker
  Deliverable: 3-axis celestial navigation & attitude control loop.
  Verification: Pointing accuracy < 0.01 arcsec during slewing.

T-12 (Dec 08) — Deep Space Relay
  Deliverable: Ka-band high-gain phased array antenna handshake.
  Verification: BER < 10^-8 at 10 Gbps throughput.

T-20 (Dec 04) — Solar Array & Power
  Deliverable: Panel wing deployment & battery bus management.
  Verification: Power generation > 3.2 kW under solar flux.

T-20 (Dec 01) — Trajectory & Telemetry
  Deliverable: Trans-orbital injection & state-vector downlink lock.
  Verification: Doppler drift < 0.2 Hz.`,

  prompts: `### 🎨 Multimodal Prompting Guide — Deep Space HUD

Primary Prompt (Google Gemini / Imagen 3):
"Ultra-sleek sci-fi Deep Space Mission Control UI lock screen for iPhone 16 Pro.
Deep obsidian/navy space background (radial gradient #17263f → #02050d) with
real SVG starfield dots and orbital trajectory ellipse trails tilted at −28°.
Top: uppercase 'DEEP SPACE' micro-header, horizontal hairline rules flanking
'SUNDAY, NOVEMBER 22', then large 300-weight Outfit font '19:37' in pure white
with subtle cyan glow (#9bdaff). Center: rounded glass card titled 'ORBIT
INSERTION' with orbital radar ellipses in background (stroke #7fb6d6, opacity
0.3–0.7) and a glowing waypoint dot (#9bdaff). 4 dark glass tile countdown
units (DAYS / HRS / MIN / SEC) separated by thin vertical lines. Progress:
'3 OF 5 PHASES COMPLETE 60%' with cyan gradient fill bar (#b4ffff → #7ce8f4).
Below: 6 uniform dark glass pill rows each showing [svg icon] | [title] >.
8K OLED HDR. No serif fonts. Pure geometric sans throughout."

Refinement Prompts:
1. "Clock must be Outfit Light 300-weight, NOT serif or italic."
2. "Orbital diagram has 4 concentric ellipses + crosshair + glowing waypoint."
3. "Each phase row uses a 4px vertical accent bar alternating cyan/violet."
4. "Phase row icons use the exact SVG paths from the asset pack."`,

  reminders: `### ⏰ Automated Daily Flight Reminders

Method 1 — Google Assistant Routine
1. Open Gemini / Google Home → Routines → New Routine.
2. Trigger: Every day at 08:00 AM.
3. Voice action: "Hey Gemini, report Orbit Insertion mission status."
4. Actions:
   - "How many days until Dec 24 Orbit Insertion?"
   - "Read today's orbital checkpoint from my calendar."
   - "Enable space-mission focus mode."

Method 2 — Google Calendar .ICS Sync
- Click 'Sync Calendar (.ics)' in ChronoCraft.
- Import into Google Calendar to get automatic milestones
  with 9-hour advance alarms at each orbital phase date.
- Push to phone lock screen & smartwatch for live reminders.`,

  submission: `Built 'ChronoCraft: Deep Space Orbit Insertion'—a live countdown lock screen & mission dashboard. Used Google Gemini to reverse-engineer a 30-day deep-space relay deployment plan into 6 verifiable orbital phases. Multimodal prompting with an official SVG asset pack generated the exact Deep Space HUD aesthetic. Includes 1-click Google Calendar .ics export and daily Google Assistant reminder automation.`
};

// DOM refs
const el = {
  missionTitle:         document.getElementById('missionTitle'),
  targetDate:           document.getElementById('targetDate'),
  previewDevice:        document.getElementById('previewDevice'),
  phoneMockup:          document.getElementById('phoneMockup'),
  milestonesEditorList: document.getElementById('milestonesEditorList'),
  liveMilestonesFeed:   document.getElementById('liveMilestonesFeed'),
  btnAddMilestone:      document.getElementById('btnAddMilestone'),
  dispCountdownLabel:   document.getElementById('dispCountdownLabel'),
  daysVal:              document.getElementById('daysVal'),
  hoursVal:             document.getElementById('hoursVal'),
  minsVal:              document.getElementById('minsVal'),
  secsVal:              document.getElementById('secsVal'),
  progressStepCount:    document.getElementById('progressStepCount'),
  progressPercent:      document.getElementById('progressPercent'),
  progressBarFill:      document.getElementById('progressBarFill'),
  liveClockDisplay:     document.getElementById('liveClockDisplay'),
  liveDateDisplay:      document.getElementById('liveDateDisplay'),
  simTime:              document.getElementById('simTime'),
  btnExportWallpaper:   document.getElementById('btnExportWallpaper'),
  btnExportICS:         document.getElementById('btnExportICS'),
  btnShowGeminiModal:   document.getElementById('btnShowGeminiModal'),
  btnCloseModal:        document.getElementById('btnCloseModal'),
  geminiModal:          document.getElementById('geminiModal'),
  tabBtns:              document.querySelectorAll('.tab-btn'),
  tabContents:          document.querySelectorAll('.tab-content'),
  exportCanvas:         document.getElementById('exportCanvas')
};

function init() {
  el.targetDate.value = state.targetDate;
  renderEditorRows();
  renderLivePreview();
  setupEventListeners();
  startLiveClock();
  startCountdownTicker();
  loadModalContent();
}

function startLiveClock() {
  function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const timeStr = `${h}:${m}`;
    el.liveClockDisplay.textContent = timeStr;
    el.simTime.textContent = timeStr;
    const opts = { weekday: 'long', month: 'long', day: 'numeric' };
    el.liveDateDisplay.textContent = now.toLocaleDateString('en-US', opts).toUpperCase();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function startCountdownTicker() {
  function tick() {
    const diff = new Date(state.targetDate).getTime() - Date.now();
    if (diff <= 0) {
      ['daysVal','hoursVal','minsVal','secsVal'].forEach(k => el[k].textContent = '00');
      return;
    }
    el.daysVal.textContent  = String(Math.floor(diff / 86400000)).padStart(2,'0');
    el.hoursVal.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
    el.minsVal.textContent  = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
    el.secsVal.textContent  = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);
}

function renderEditorRows() {
  el.milestonesEditorList.innerHTML = '';
  state.phases.forEach(p => {
    const card = document.createElement('div');
    card.className = 'milestone-editor-card';
    card.innerHTML = `
      <div class="m-row-top">
        <input type="checkbox" class="m-checkbox-custom" data-id="${p.id}" ${p.completed ? 'checked' : ''}>
        <input type="text" class="m-input-title" data-id="${p.id}" value="${escapeHtml(p.title)}" placeholder="Orbital Phase Title">
        <button class="m-btn-delete" data-id="${p.id}" title="Delete">&times;</button>
      </div>
      <div class="m-row-bottom">
        <input type="text" class="m-input-sub"  data-id="${p.id}" value="${escapeHtml(p.sub)}" placeholder="Deliverables...">
        <input type="text" class="m-input-days" data-id="${p.id}" value="${escapeHtml(p.days)}" placeholder="T-X">
      </div>`;
    el.milestonesEditorList.appendChild(card);
  });
  updateProgress();
}

// Render live preview rows using official assets
function renderLivePreview() {
  el.dispCountdownLabel.textContent = state.title.toUpperCase();
  el.liveMilestonesFeed.innerHTML = '';

  state.phases.forEach(p => {
    const row = document.createElement('div');
    row.className = 'phase-pill-row';
    row.dataset.id = p.id;

    const iconSvg   = SVGs[p.type] || SVGs.trajectory;
    const accentSvg = p.accent === 'violet' ? SVGs.accentViolet : SVGs.accentCyan;

    row.innerHTML = `
      <div class="row-icon-glyph">${iconSvg}</div>
      <div class="row-accent-bar">${accentSvg}</div>
      <div class="row-title-text">${escapeHtml(p.title)}</div>
      <div class="row-chevron">${SVGs.chevron}</div>`;

    row.addEventListener('click', () => {
      p.completed = !p.completed;
      renderEditorRows();
      updateProgress();
    });

    el.liveMilestonesFeed.appendChild(row);
  });

  updateProgress();
}

function updateProgress() {
  const total     = state.phases.length;
  const completed = state.phases.filter(p => p.completed).length;
  const pct       = total === 0 ? 0 : Math.round((completed / total) * 100);
  el.progressStepCount.textContent = `${completed} OF ${total} PHASES COMPLETE`;
  el.progressPercent.textContent   = `${pct}%`;
  el.progressBarFill.style.width   = `${pct}%`;
}

function setupEventListeners() {
  el.previewDevice.addEventListener('change', e => {
    state.device = e.target.value;
    el.phoneMockup.classList.toggle('desktop-mode', state.device === 'desktop');
  });

  el.missionTitle.addEventListener('input', e => {
    state.title = e.target.value || 'ORBIT INSERTION';
    el.dispCountdownLabel.textContent = state.title.toUpperCase();
  });

  el.targetDate.addEventListener('change', e => { state.targetDate = e.target.value; });

  el.btnAddMilestone.addEventListener('click', () => {
    const idx    = state.phases.length;
    const types  = ['trajectory','solar','dish','tracker','payload','insertion'];
    const accents= ['cyan','violet','cyan','violet','cyan','violet'];
    state.phases.push({
      id: Date.now(), type: types[idx % types.length],
      title: 'New Orbital Phase', sub: 'Actionable flight check',
      days: `T-${Math.max(0, 30 - idx * 5)} (Dec ${10 + idx})`,
      accent: accents[idx % accents.length], completed: false
    });
    renderEditorRows(); renderLivePreview();
  });

  el.milestonesEditorList.addEventListener('input', e => {
    const id = parseInt(e.target.dataset.id);
    const p  = state.phases.find(item => item.id === id);
    if (!p) return;
    if (e.target.classList.contains('m-input-title')) p.title = e.target.value;
    else if (e.target.classList.contains('m-input-sub'))  p.sub   = e.target.value;
    else if (e.target.classList.contains('m-input-days')) p.days  = e.target.value;
    renderLivePreview();
  });

  el.milestonesEditorList.addEventListener('change', e => {
    const id = parseInt(e.target.dataset.id);
    const p  = state.phases.find(item => item.id === id);
    if (p && e.target.classList.contains('m-checkbox-custom')) {
      p.completed = e.target.checked; updateProgress();
    }
  });

  el.milestonesEditorList.addEventListener('click', e => {
    if (e.target.classList.contains('m-btn-delete')) {
      const id = parseInt(e.target.dataset.id);
      state.phases = state.phases.filter(item => item.id !== id);
      renderEditorRows(); renderLivePreview();
    }
  });

  el.btnShowGeminiModal.addEventListener('click', () => el.geminiModal.classList.add('active'));
  el.btnCloseModal.addEventListener('click',      () => el.geminiModal.classList.remove('active'));
  el.geminiModal.addEventListener('click', e => {
    if (e.target === el.geminiModal) el.geminiModal.classList.remove('active');
  });

  el.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      el.tabBtns.forEach(b     => b.classList.remove('active'));
      el.tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tgt = document.getElementById(`tab-${btn.dataset.tab}`);
      if (tgt) tgt.classList.add('active');
    });
  });

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tgt = document.getElementById(btn.dataset.target);
      if (!tgt) return;
      navigator.clipboard.writeText(tgt.textContent).then(() => {
        const orig = btn.textContent;
        btn.textContent = '✓ Copied!';
        setTimeout(() => btn.textContent = orig, 2000);
      });
    });
  });

  el.btnExportWallpaper.addEventListener('click', exportWallpaperImage);
  el.btnExportICS.addEventListener('click', exportICSCalendar);
}

function loadModalContent() {
  document.getElementById('planTextContent').textContent       = submissionDocs.plan;
  document.getElementById('promptsTextContent').textContent    = submissionDocs.prompts;
  document.getElementById('remindersTextContent').textContent  = submissionDocs.reminders;
  document.getElementById('submissionTextContent').textContent = submissionDocs.submission;
}

// ICS Export
function exportICSCalendar() {
  const targetDateObj = new Date(state.targetDate);
  const lines = [
    'BEGIN:VCALENDAR','VERSION:2.0',
    'PRODID:-//ChronoCraft//Deep Space Orbit Insertion//EN',
    'CALSCALE:GREGORIAN','METHOD:PUBLISH',
    'X-WR-CALNAME:' + state.title
  ];
  state.phases.forEach((p, idx) => {
    const d = new Date(targetDateObj.getTime() - (state.phases.length - idx) * 4 * 86400000);
    const ds = d.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
    lines.push('BEGIN:VEVENT',`UID:phase-${p.id}@chronocraft.ai`,`DTSTAMP:${ds}`,
      `DTSTART:${ds}`,`SUMMARY:🛰️ ${p.title}`,
      `DESCRIPTION:${p.sub} (${p.days})`,
      'BEGIN:VALARM','TRIGGER:-PT9H','ACTION:DISPLAY',
      `DESCRIPTION:Upcoming: ${p.title}`,'END:VALARM','END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'Deep_Space_Orbit_Insertion.ics' });
  a.click(); URL.revokeObjectURL(a.href);
}

// Canvas wallpaper export
function exportWallpaperImage() {
  const isDesktop = state.device === 'desktop';
  const W = isDesktop ? 1920 : 1080;
  const H = isDesktop ? 1080 : 1920;
  const canvas = el.exportCanvas;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background
  const bg = ctx.createRadialGradient(W * 0.48, 0, 0, W * 0.48, 0, H);
  bg.addColorStop(0,   '#17263f');
  bg.addColorStop(0.46,'#070f1d');
  bg.addColorStop(1,   '#02050d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Starfield dots
  const stars = [[420,299,'#ad9cde',0.4],[113,1102,'#94a9c9',0.5],[370,996,'#b8d9ff',0.3],[564,267,'#94a9c9',0.5],[255,896,'#b8d9ff',0.4],[521,364,'#94a9c9',0.15],[597,938,'#ad9cde',0.35],[43,12,'#94a9c9',0.42],[478,843,'#ad9cde',0.44],[354,291,'#ad9cde',0.42],[174,766,'#b8d9ff',0.49],[537,206,'#b8d9ff',0.46],[272,200,'#94a9c9',0.33],[481,713,'#ad9cde',0.45]];
  stars.forEach(([sx,sy,c,o]) => {
    ctx.globalAlpha = o * (W / 600);
    ctx.fillStyle = c;
    ctx.fillRect(sx * W/600, sy * H/1250, 2, 2);
  });
  ctx.globalAlpha = 1;

  // Header
  ctx.textAlign = 'center';
  ctx.fillStyle = '#cbd5e1'; ctx.font = `600 ${W*0.022}px Outfit, sans-serif`;
  ctx.fillText('D E E P   S P A C E', W/2, H*0.11);
  ctx.fillStyle = '#94a3b8'; ctx.font = `500 ${W*0.019}px Outfit, sans-serif`;
  ctx.fillText('—  SUNDAY, NOVEMBER 22  —', W/2, H*0.155);
  ctx.fillStyle = '#ffffff'; ctx.font = `300 ${W*0.115}px Outfit, sans-serif`;
  ctx.shadowColor = 'rgba(155, 218, 255, 0.35)'; ctx.shadowBlur = 28;
  ctx.fillText(el.liveClockDisplay.textContent, W/2, H*0.27);
  ctx.shadowBlur = 0;

  // Card
  const cW = W * 0.88, cH = H * 0.22;
  const cX = (W - cW) / 2, cY = H * 0.31;
  const r = 20;
  ctx.fillStyle = 'rgba(16, 35, 49, 0.9)';
  ctx.strokeStyle = 'rgba(182, 234, 255, 0.55)'; ctx.lineWidth = 2;
  roundRect(ctx, cX, cY, cW, cH, r); ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#ffffff'; ctx.font = `800 ${W*0.016}px Outfit, sans-serif`;
  ctx.fillText('—  ORBIT INSERTION  —', W/2, cY + cH*0.18);

  const tiles = [
    [el.daysVal.textContent,'DAYS'],
    [el.hoursVal.textContent,'HRS'],
    [el.minsVal.textContent,'MIN'],
    [el.secsVal.textContent,'SEC']
  ];
  const tW = (cW - 60) / 4, tH = cH * 0.48, tY = cY + cH*0.24;
  tiles.forEach(([v,u], i) => {
    const tx = cX + 24 + i * (tW + 4);
    ctx.fillStyle = 'rgba(9, 19, 30, 0.98)';
    ctx.strokeStyle = 'rgba(182, 234, 255, 0.5)'; ctx.lineWidth = 1.5;
    roundRect(ctx, tx, tY, tW, tH, 12); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = `600 ${W*0.044}px Outfit, sans-serif`;
    ctx.fillText(v, tx + tW/2, tY + tH*0.6);
    ctx.fillStyle = '#94a3b8'; ctx.font = `800 ${W*0.013}px Plus Jakarta Sans, sans-serif`;
    ctx.fillText(u, tx + tW/2, tY + tH*0.88);
  });

  const total = state.phases.length, done = state.phases.filter(p=>p.completed).length;
  const pct = Math.round(done/total*100);
  ctx.textAlign = 'left'; ctx.fillStyle = '#94a3b8'; ctx.font = `700 ${W*0.013}px Plus Jakarta Sans, sans-serif`;
  ctx.fillText(`${done} OF ${total} PHASES COMPLETE`, cX+30, cY+cH*0.84);
  ctx.textAlign = 'right'; ctx.fillStyle = '#fff';
  ctx.fillText(`${pct}%`, cX+cW-30, cY+cH*0.84);

  const bY = cY + cH*0.9, bW = cW - 60;
  ctx.fillStyle = 'rgba(20,36,51,0.95)';
  roundRect(ctx, cX+30, bY, bW, 12, 6); ctx.fill();
  const fillGrad = ctx.createLinearGradient(0,0,0,12);
  fillGrad.addColorStop(0,'#b4ffff'); fillGrad.addColorStop(1,'#7ce8f4');
  ctx.fillStyle = fillGrad; ctx.shadowColor = 'rgba(124,232,244,0.9)'; ctx.shadowBlur = 10;
  roundRect(ctx, cX+30, bY, Math.max(10, bW*pct/100), 12, 6); ctx.fill();
  ctx.shadowBlur = 0;

  // Phase rows
  const rH = H * 0.072, rGap = H * 0.012;
  const rY0 = cY + cH + H*0.025, rX = cX;
  state.phases.forEach((p, i) => {
    const ry = rY0 + i*(rH + rGap);
    if (ry + rH > H - 50) return;
    ctx.fillStyle = 'rgba(14, 25, 38, 0.95)';
    ctx.strokeStyle = 'rgba(182, 234, 255, 0.35)'; ctx.lineWidth = 1.5;
    roundRect(ctx, rX, ry, cW, rH, 14); ctx.fill(); ctx.stroke();
    // accent bar
    ctx.fillStyle = p.accent === 'violet' ? '#ac86ff' : '#91efff';
    ctx.fillRect(rX + rH * 0.95, ry + rH*0.25, 2, rH*0.5);
    // title
    ctx.textAlign = 'left'; ctx.fillStyle = '#edf6ff';
    ctx.font = `600 ${W*0.019}px Plus Jakarta Sans, sans-serif`;
    ctx.fillText(p.title, rX + rH * 1.15, ry + rH*0.62);
    // chevron
    ctx.textAlign = 'right'; ctx.fillStyle = '#8ca7bc';
    ctx.font = `600 ${W*0.02}px Outfit, sans-serif`;
    ctx.fillText('>', rX + cW - 24, ry + rH*0.62);
  });

  const link = Object.assign(document.createElement('a'), {
    download: `Deep_Space_Orbit_Insertion_${isDesktop?'16x9':'9x16'}.png`,
    href: canvas.toDataURL('image/png')
  });
  link.click();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y);
  ctx.quadraticCurveTo(x+w, y, x+w, y+r);
  ctx.lineTo(x+w, y+h-r);
  ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h);
  ctx.quadraticCurveTo(x, y+h, x, y+h-r);
  ctx.lineTo(x, y+r);
  ctx.quadraticCurveTo(x, y, x+r, y);
  ctx.closePath();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[s]));
}

window.addEventListener('DOMContentLoaded', init);