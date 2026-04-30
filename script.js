/* ============================================
   Chunav Margdarshak — script.js
   India Lok Sabha Election Guide
   Timeline · Facts · AI-Powered Chat
   ============================================ */

// ── Data ──────────────────────────────────────

const STAGES = [
  {
    id: 'mcc',
    icon: '📜',
    label: 'Model Code of Conduct',
    date: '~90 days prior',
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.12)',
    period: '~90 Days Before Polling',
    title: 'Announcement & Model Code of Conduct',
    desc: 'The Election Commission of India (ECI) announces the election schedule, and the Model Code of Conduct (MCC) comes into force immediately. The MCC restricts political parties and the government from making new policy announcements, distributing gifts, or misusing government resources for electoral gains. This is enforced by the ECI — an independent constitutional body — ensuring a level playing field for all candidates.',
    points: [
      { icon: '📢', text: 'ECI announces polling dates, notification dates, and the counting date' },
      { icon: '🚫', text: 'MCC bans: new government schemes, use of government vehicles for campaigns, hate speech' },
      { icon: '🏛️', text: 'ECI can issue notices and even remove government officials who violate the MCC' },
      { icon: '⚖️', text: 'ECI is independent — it cannot be overruled by the government during elections' },
    ]
  },
  {
    id: 'nomination',
    icon: '📋',
    label: 'Nominations',
    date: '~30 days prior',
    color: '#e8b84b',
    colorBg: 'rgba(232,184,75,0.12)',
    period: '~30 Days Before Polling',
    title: 'Candidate Nomination & Scrutiny',
    desc: 'Candidates file nomination papers with the Returning Officer of their constituency. They must submit a security deposit (₹25,000 for General; ₹12,500 for SC/ST candidates), along with a sworn affidavit disclosing assets, liabilities, criminal record, and educational qualifications. Nominations are then scrutinised — invalid nominations are rejected. Candidates who change their minds can withdraw during the withdrawal period.',
    points: [
      { icon: '💰', text: 'Security deposit: ₹25,000 (General) · ₹12,500 (SC/ST) — forfeited if <1/6 votes received' },
      { icon: '📝', text: 'Affidavit must disclose criminal cases, assets, debts, and educational qualifications — publicly viewable' },
      { icon: '🔍', text: 'Scrutiny: Returning Officer checks eligibility (age 25+, citizenship, not disqualified under RPA 1951)' },
      { icon: '↩️', text: 'A withdrawal window follows scrutiny — candidates may pull out before the final list is published' },
    ]
  },
  {
    id: 'campaign',
    icon: '📣',
    label: 'Campaign Period',
    date: 'D-28 to D-2',
    color: '#a855f7',
    colorBg: 'rgba(168,85,247,0.12)',
    period: '28 Days to 48 Hours Before Polling',
    title: 'Election Campaign',
    desc: 'Candidates and parties campaign through rallies, door-to-door canvassing, advertisements, and social media. The ECI sets strict campaign expenditure limits — ₹95 lakh per candidate for a Lok Sabha constituency. Flying squads monitor cash distribution and paid news. The campaign silence period begins 48 hours before polling — no rallies, speeches, or campaigning of any kind is permitted during this window.',
    points: [
      { icon: '💸', text: 'Spending limit: ₹95 lakh per Lok Sabha candidate (revised 2022) — shadow accounts are tracked' },
      { icon: '📰', text: 'Paid news is banned — media buying political content must be pre-certified by the MCMC' },
      { icon: '🔕', text: '48-hour silence period before polling: no ads, rallies, social media campaigns' },
      { icon: '📱', text: 'Social media posts must carry a disclaimer: "Paid for by [party/candidate]"' },
    ]
  },
  {
    id: 'voting',
    icon: '🗳️',
    label: 'Polling Day',
    date: 'Election Day',
    color: '#22c55e',
    colorBg: 'rgba(34,197,94,0.12)',
    period: 'Election Day(s) — Multi-Phase',
    title: 'Polling Day — Casting Your Vote',
    desc: "India's Lok Sabha elections are conducted in multiple phases (usually 5–7) spread over several weeks due to the country's vast geography. On polling day, registered voters go to their assigned booth, show ID, get their left index finger inked, and cast their vote on an EVM (Electronic Voting Machine). A VVPAT machine displays a paper slip of your vote for 7 seconds for verification. You are entitled to a paid holiday to vote.",
    points: [
      { icon: '🗺️', text: '2024 election had 7 phases across 44 days — the world\'s largest democratic exercise' },
      { icon: '💜', text: 'Indelible ink on the left index finger prevents double voting — ink lasts 2–4 weeks' },
      { icon: '🖥️', text: 'EVM: standalone battery-operated device, not connected to internet — cannot be hacked remotely' },
      { icon: '🧾', text: 'VVPAT prints a paper slip showing your vote for 7 seconds — you verify, then it drops into sealed box' },
    ]
  },
  {
    id: 'counting',
    icon: '🔢',
    label: 'Vote Counting',
    date: 'Results Day',
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.12)',
    period: 'Counting Day (After All Phases)',
    title: 'Vote Counting & Results',
    desc: 'Counting takes place at designated counting centres on a date announced by the ECI. EVM results are matched with VVPAT paper slips for 5 randomly selected booths per constituency (as mandated by the Supreme Court). Party observers, candidates, and ECI officials oversee the count. Results are typically declared within the same day. The Returning Officer formally declares the winning candidate.',
    points: [
      { icon: '👁️', text: 'Party agents and candidates\' representatives can observe every round of counting' },
      { icon: '🧮', text: 'VVPAT verification: 5 randomly selected booths per constituency must match EVM count' },
      { icon: '⚡', text: '2024 results: all 543 seats declared within a single day — results by evening' },
      { icon: '📊', text: 'A candidate with even 1 vote more than rivals wins — First-Past-The-Post (FPTP) system' },
    ]
  },
  {
    id: 'government',
    icon: '🏛️',
    label: 'Government Formation',
    date: 'Post-Results',
    color: '#e03e3e',
    colorBg: 'rgba(224,62,62,0.12)',
    period: 'Within Weeks of Results',
    title: 'Government Formation & Swearing-In',
    desc: 'The party or pre-poll alliance that wins 272+ seats (majority) is invited by the President of India to form the government. The leader of that party is sworn in as Prime Minister. If no party wins a majority — a "hung parliament" — post-election coalition negotiations begin. The Cabinet is formed, portfolios are allocated, and the new government takes charge. It serves for a 5-year term unless dissolved earlier.',
    points: [
      { icon: '🎖️', text: '272 seats needed for majority — parties often contest in pre-election alliances (NDA, INDIA, etc.)' },
      { icon: '🤝', text: 'Hung parliament triggers coalition talks — parties negotiate for ministerial posts and a common agenda' },
      { icon: '📖', text: 'The President invites the majority leader — sworn in at Rashtrapati Bhavan' },
      { icon: '📅', text: 'Lok Sabha term: 5 years — PM can advise President to dissolve early and call snap elections' },
    ]
  }
];

const FACTS = [
  { icon: '🗺️', num: '543',     label: 'Lok Sabha constituencies',          color: '#f97316' },
  { icon: '✅', num: '272',     label: 'Seats needed for majority',          color: '#22c55e' },
  { icon: '👥', num: '969M',    label: 'Eligible voters in 2024',            color: '#e8b84b' },
  { icon: '📍', num: '1.5M+',  label: 'Polling stations across India',       color: '#3b82f6' },
  { icon: '🏆', num: '66.3%',  label: 'Voter turnout in 2024',              color: '#a855f7' },
  { icon: '🔒', num: '18+',    label: 'Minimum age to vote',                color: '#e03e3e' },
  { icon: '🗓️', num: '5 years', label: 'Lok Sabha term length',             color: '#f97316' },
  { icon: '🏛️', num: '25+',    label: 'Minimum age to be a candidate',      color: '#22c55e' },
];

const QUICK_QUESTIONS = [
  'How do I register to vote in India?',
  'What is an EVM and is it safe?',
  'What is NOTA?',
  'How does the Model Code of Conduct work?',
  'What is a hung parliament?',
  'Can I vote if I live outside my home state?',
  'What ID do I need to vote?',
  'How are winners decided in India?',
];

// ── Timeline ──────────────────────────────────

let activeStage = null;

function buildTimeline() {
  const stepsEl = document.getElementById('timelineSteps');

  STAGES.forEach((stage, i) => {
    const step = document.createElement('button');
    step.className = 'tl-step';
    step.setAttribute('role', 'tab');
    step.setAttribute('aria-selected', 'false');
    step.setAttribute('aria-controls', 'detailPanel');
    step.setAttribute('aria-label', `Stage ${i + 1}: ${stage.label}`);
    step.dataset.idx = i;

    step.innerHTML = `
      <div class="tl-dot-wrap">
        <div class="tl-dot">${stage.icon}</div>
        <div class="tl-num">${i + 1}</div>
      </div>
      <div class="tl-label">${stage.label}</div>
      <div class="tl-date">${stage.date}</div>
    `;

    step.addEventListener('click', () => selectStage(i, step));
    stepsEl.appendChild(step);
  });
}

function selectStage(idx, stepEl) {
  document.querySelectorAll('.tl-step').forEach(s => {
    s.classList.remove('active');
    s.setAttribute('aria-selected', 'false');
  });
  stepEl.classList.add('active');
  stepEl.setAttribute('aria-selected', 'true');
  activeStage = idx;

  const pct = (idx / (STAGES.length - 1)) * 100;
  document.getElementById('trackFill').style.width = pct + '%';

  renderDetail(STAGES[idx]);
}

function renderDetail(stage) {
  document.getElementById('detailInner').innerHTML = `
    <div class="detail-content">
      <div class="detail-top">
        <div class="detail-icon-wrap" style="background:${stage.colorBg}">
          <span style="font-size:28px">${stage.icon}</span>
        </div>
        <div>
          <div class="detail-period">${stage.period}</div>
          <div class="detail-title">${stage.title}</div>
        </div>
      </div>
      <p class="detail-desc">${stage.desc}</p>
      <div class="detail-points">
        ${stage.points.map(p => `
          <div class="detail-point">
            <span class="detail-point-icon">${p.icon}</span>
            <span>${p.text}</span>
          </div>`).join('')}
      </div>
    </div>
  `;
}

// ── Facts ─────────────────────────────────────

function buildFacts() {
  const grid = document.getElementById('factsGrid');
  FACTS.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = `fact-card reveal reveal-delay-${Math.min(i + 1, 5)}`;
    card.innerHTML = `
      <div class="fact-icon">${f.icon}</div>
      <div class="fact-num" style="color:${f.color}">${f.num}</div>
      <div class="fact-label">${f.label}</div>
    `;
    grid.appendChild(card);
  });
}

// ── Quick Chips ───────────────────────────────

function buildChips() {
  const container = document.getElementById('quickChips');
  QUICK_QUESTIONS.forEach(q => {
    const btn = document.createElement('button');
    btn.className = 'chip-btn';
    btn.textContent = q;
    btn.addEventListener('click', () => {
      document.getElementById('chatInput').value = q;
      sendMessage();
    });
    container.appendChild(btn);
  });
}

// ── AI Chat ───────────────────────────────────

const SYSTEM_PROMPT = `You are Chunav Sahaayak (चुनाव सहायक), a friendly and knowledgeable guide to India's Lok Sabha election process. Your job is to help first-time voters and curious young Indians understand how their democracy works.

Guidelines:
- Be warm, clear, and encouraging — you're speaking to first-time voters aged 18–25
- Keep answers to 2–4 short paragraphs maximum
- Cover: voter registration (EPIC/voterportal.eci.gov.in), EVMs and VVPATs, the Model Code of Conduct, nomination process, polling day procedure, counting, government formation, NOTA, and the role of the ECI
- When relevant, remind users that for official registration they should visit voterportal.eci.gov.in or the ECI website at eci.gov.in
- Be completely non-partisan — do not favour or criticise any political party or leader
- Use simple language; avoid jargon; if you use a Hindi/political term, explain it
- If asked about something outside Indian elections, politely redirect to election topics
- Occasionally use "🙏" or "✅" to make responses feel friendly, but don't overdo it`;

async function callClaude(userMessage) {
  // Simulate network delay for realistic feel
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  const msgLower = userMessage.toLowerCase();
  
  if (msgLower.includes('register') || msgLower.includes('how do i register')) {
    return "To register to vote in India, you must be an Indian citizen aged 18 or above. You can register online by visiting the Election Commission's official Voter Portal (voterportal.eci.gov.in) and filling out Form 6. You'll need an age proof and address proof. Once verified, your name will be added to the electoral roll and you'll receive your EPIC (Voter ID card). ✅";
  }
  if (msgLower.includes('evm')) {
    return "An EVM (Electronic Voting Machine) is a standalone, battery-operated device used to cast and record votes in India. It is not connected to any network or the internet, making it highly secure against remote hacking. When you press the button next to your chosen candidate, a VVPAT machine next to it prints a paper slip showing your vote for 7 seconds so you can verify it before it drops into a sealed box. 🗳️";
  }
  if (msgLower.includes('nota')) {
    return "NOTA stands for 'None Of The Above'. It is an option on the EVM that allows you to officially register a rejection of all the candidates contesting in your constituency. While a high NOTA vote count sends a strong message to political parties, it does not invalidate the election — the candidate with the highest votes among the actual candidates still wins.";
  }
  if (msgLower.includes('model code') || msgLower.includes('mcc')) {
    return "The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India. It comes into effect the moment election dates are announced. The MCC ensures a level playing field by preventing the ruling government from announcing new schemes, misusing official machinery, or using state resources for campaigning. 📜";
  }
  if (msgLower.includes('hung parliament')) {
    return "A 'hung parliament' occurs when no single political party or pre-poll alliance secures the absolute majority of 272 seats required to form the government in the Lok Sabha. In such cases, parties negotiate to form a post-poll coalition. The President invites the leader of the largest party or coalition that can prove a majority on the floor of the House to become Prime Minister. 🤝";
  }
  if (msgLower.includes('outside my home state') || msgLower.includes('outside')) {
    return "Currently, you must vote in person at the polling booth in the constituency where you are registered as a voter. However, certain categories like service personnel (armed forces) and election duty staff can use postal ballots. The ECI is exploring Remote Voting Machines (RVMs) for domestic migrants in the future, but it is not yet implemented. 📍";
  }
  if (msgLower.includes('id') || msgLower.includes('need to vote')) {
    return "To vote, your name must be on the voter list (electoral roll) of your constituency. On voting day, you must carry your EPIC (Voter ID card). If you don't have your Voter ID, the ECI usually allows 11 other forms of photo identity, such as Aadhaar card, PAN card, Passport, Driving License, or MGNREGA job card. 🪪";
  }
  if (msgLower.includes('winners decided')) {
    return "India follows the 'First-Past-The-Post' (FPTP) system for Lok Sabha elections. This means the candidate who receives the highest number of valid votes in a constituency is declared the winner, even if they don't secure more than 50% of the total votes. 📊";
  }
  
  return "That's a great question! While I am currently a simulated assistant for this prototype, in a full version I would answer your question using real AI. For now, please try asking me one of the suggested questions above, or visit eci.gov.in for official information. 🙏";
}

function addMessage(text, role) {
  const msgs = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = `msg-row ${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.textContent = text;
  row.appendChild(bubble);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

function addTypingIndicator() {
  const msgs = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'msg-row bot';
  row.id = 'typingRow';
  row.innerHTML = `<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTypingIndicator() {
  const row = document.getElementById('typingRow');
  if (row) row.remove();
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  sendBtn.disabled = true;
  addMessage(text, 'user');
  addTypingIndicator();

  try {
    const reply = await callClaude(text);
    removeTypingIndicator();
    addMessage(reply, 'bot');
  } catch {
    removeTypingIndicator();
    addMessage('Sorry, I had trouble connecting. Please try again, or visit eci.gov.in for official election information.', 'bot');
  } finally {
    sendBtn.disabled = false;
    input.focus();
  }
}

// ── Scroll Reveal ─────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Nav Highlight ─────────────────────────────

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    }),
    { threshold: 0.4 }
  );
  sections.forEach(s => io.observe(s));
}

// ── Events ────────────────────────────────────

function initEvents() {
  document.getElementById('chatSend').addEventListener('click', sendMessage);
  document.getElementById('chatInput').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
}

// ── Init ──────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  buildTimeline();
  buildFacts();
  buildChips();
  initScrollReveal();
  initNavHighlight();
  initEvents();

  // Auto-select first stage
  setTimeout(() => {
    const first = document.querySelector('.tl-step');
    if (first) first.click();
  }, 600);
});
