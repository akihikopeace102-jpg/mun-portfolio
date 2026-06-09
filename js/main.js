const committees = [
  {
    name: 'United Nations Security Council (UNSC)',
    agenda: 'Situation in the South China Sea: Maritime Disputes & Regional Stability',
    level: 'Advanced',
    lvl: 'advanced',
    size: '20-25',
    type: 'Crisis Committee'
  },
  {
    name: 'World Health Organization (WHO)',
    agenda: 'Mental Health Policy in Developing Nations: Access, Awareness & Affordability',
    level: 'Intermediate',
    lvl: 'intermediate',
    size: '25-30',
    type: 'General Assembly'
  },
  {
    name: 'United Nations Human Rights Council (UNHRC)',
    agenda: 'Protection of Minorities in South Asia: Religious & Ethnic Safeguards',
    level: 'Intermediate',
    lvl: 'intermediate',
    size: '25-30',
    type: 'Human Rights'
  },
  {
    name: 'Disarmament & International Security (DISEC)',
    agenda: 'Illicit Arms Trafficking in the Indian Ocean Region',
    level: 'Advanced',
    lvl: 'advanced',
    size: '20-25',
    type: 'General Assembly'
  },
  {
    name: 'United Nations Environment Programme (UNEP)',
    agenda: 'Plastic Waste Management in Coastal Cities: A Sustainable Roadmap',
    level: 'Beginner',
    lvl: 'beginner',
    size: '25-30',
    type: 'General Assembly'
  },
  {
    name: 'Lok Sabha - Indian Parliament',
    agenda: 'The National Digital Privacy Bill, 2025: Data Protection & Civil Liberties',
    level: 'Advanced',
    lvl: 'advanced',
    size: '30-35',
    type: 'Indian Parliament'
  },
  {
    name: 'International Press (IP)',
    agenda: 'Freedom of the Press in Emerging Democracies: Ethics & Accountability',
    level: 'Intermediate',
    lvl: 'intermediate',
    size: '15-20',
    type: 'Media Committee'
  }
];

const team = [
  {
    name: 'Aarav Mehta',
    role: 'Secretary-General',
    bio: 'Class 12 student and three-time MUNer. Previously served as Director of UNSC at DSMUN 2024 and led delegations at HMUN 2024.',
    initials: 'AM'
  },
  {
    name: 'Ananya Sharma',
    role: 'Deputy Secretary-General',
    bio: 'Class 11 with a passion for international law. Managed committee affairs for two previous editions of IIMUN.',
    initials: 'AS'
  },
  {
    name: 'Arjun Singh',
    role: 'Under-Secretary-General, Committees',
    bio: 'Class 12. Oversaw the expansion from 4 to 7 committees this year. Specialises in crisis simulations.',
    initials: 'AS'
  },
  {
    name: 'Priya Patel',
    role: 'Under-Secretary-General, Administration',
    bio: 'Class 11. Handles venue coordination, delegate registration, and logistics for 250+ participants.',
    initials: 'PP'
  },
  {
    name: 'Rohan Desai',
    role: 'Director of Public Relations',
    bio: 'Class 12. Built the conference brand across 30+ schools in Pune and Mumbai. Manages social media and outreach.',
    initials: 'RD'
  },
  {
    name: 'Kavya Nair',
    role: 'Director of Technology',
    bio: 'Class 11. Designed the conference website and digital infrastructure. Leads the tech team of 5 students.',
    initials: 'KN'
  },
  {
    name: 'Vikram Joshi',
    role: 'Director of Events',
    bio: 'Class 12. Organised the Cultural Night and delegate socials. Previously led events at IIMUN 2024.',
    initials: 'VJ'
  },
  {
    name: 'Zara Khan',
    role: 'Director of Delegate Affairs',
    bio: 'Class 11. First point of contact for all delegate queries. Runs the mentorship programme for first-timers.',
    initials: 'ZK'
  }
];

const schedule = [
  {
    day: 1,
    label: 'Day 1 \u2014 February 21',
    events: [
      { time: '08:00 - 09:00', title: 'Registration & Check-In', desc: 'Delegate check-in, kit distribution, and badge collection at the school auditorium foyer.' },
      { time: '09:00 - 10:30', title: 'Opening Ceremony', desc: 'Welcome address by the Principal, keynote by the Secretary-General, and flag ceremony.' },
      { time: '10:30 - 11:00', title: 'Tea Break', desc: 'Networking over refreshments in the quadrangle.' },
      { time: '11:00 - 13:00', title: 'Committee Session I', desc: 'Roll call, rules of procedure briefing, and opening statements by delegates.' },
      { time: '13:00 - 14:00', title: 'Lunch', desc: 'Buffet lunch served at the school cafeteria.' },
      { time: '14:00 - 17:00', title: 'Committee Session II', desc: 'Substantive debate, moderated caucus, and resolution drafting.' },
      { time: '17:00', title: 'Wrap-Up', desc: 'End of Day 1. Committee notices and homework assignments.' }
    ]
  },
  {
    day: 2,
    label: 'Day 2 \u2014 February 22',
    events: [
      { time: '08:00 - 09:00', title: 'Arrival & Breakfast', desc: 'Morning tea and refreshments available.' },
      { time: '09:00 - 11:00', title: 'Committee Session III', desc: 'Continued debate, amendment proposals, and informal caucusing.' },
      { time: '11:00 - 11:30', title: 'Crisis Update', desc: 'Breaking crisis scenario introduced in UNSC and Lok Sabha committees.' },
      { time: '11:30 - 13:00', title: 'Committee Session IV', desc: 'Crisis response, voting bloc formation, and draft resolution finalisation.' },
      { time: '13:00 - 14:00', title: 'Lunch', desc: 'Lunch break with inter-committee networking.' },
      { time: '14:00 - 16:00', title: 'Committee Session V', desc: 'Final lobbying, resolution voting, and committee closing remarks.' },
      { time: '18:00 - 21:00', title: 'Cultural Night & DJ Night', desc: 'Student performances, food stalls, and music. Casual dress. Venue: School grounds.' }
    ]
  },
  {
    day: 3,
    label: 'Day 3 \u2014 February 23',
    events: [
      { time: '08:00 - 09:00', title: 'Arrival', desc: 'Final day check-in.' },
      { time: '09:00 - 11:00', title: 'General Assembly', desc: 'Selected resolutions presented to the General Assembly for a final vote.' },
      { time: '11:00 - 11:30', title: 'Tea Break', desc: 'Short break before the closing ceremony.' },
      { time: '11:30 - 13:30', title: 'Closing Ceremony & Awards', desc: 'Award presentations for Best Delegate, High Commendation, Special Mention, and Best Delegation. Valedictory address by the Secretary-General.' },
      { time: '13:30', title: 'Conference Ends', desc: 'Group photos and departures.' }
    ]
  }
];

const faqs = [
  {
    q: 'What is a Model United Nations conference?',
    a: 'MUN is a simulation where students represent countries or organisations in UN-style committees. Participants debate global issues, write resolutions, and practise diplomacy. No prior experience is required \u2014 we provide full training.'
  },
  {
    q: 'Who can participate?',
    a: 'Students from Grades 9 to 12, from any school. There is no minimum MUN experience required. We have beginner, intermediate, and advanced committees to suit all levels.'
  },
  {
    q: 'What is the dress code?',
    a: 'Western business formal \u2014 suits, blazers, shirts with ties, formal trousers, and closed shoes for boys. Salwar suits, sarees, formal dresses, or blazers for girls. No jeans, sneakers, or casual wear during committee sessions.'
  },
  {
    q: 'What is the registration fee and what does it cover?',
    a: 'The delegate fee is \u20b9450 per person. It covers conference kit, certificate of participation, lunch on all three days, tea breaks, and entry to the Cultural Night. Transportation and accommodation are not included.'
  },
  {
    q: 'How do I register?',
    a: 'Fill out the registration form on this website. Individual and delegation registrations are both accepted. Spot registrations will not be available \u2014 register before February 5, 2025.'
  },
  {
    q: 'Can I get a refund?',
    a: 'Full refunds are available up to 15 days before the conference. A 50% refund is available between 7-14 days. No refunds within 7 days of the event.'
  },
  {
    q: 'How are committee allocations decided?',
    a: 'Allocations are first-come, first-served. You can list up to three committee preferences on the registration form. We do our best to accommodate your first choice while ensuring balanced committee sizes.'
  },
  {
    q: 'Will there be awards?',
    a: 'Yes. Awards include Best Delegate, High Commendation, Special Mention, and Best Delegation (for the school with the best overall performance). All participants receive a participation certificate.'
  },
  {
    q: 'Is accommodation available for out-of-town delegates?',
    a: 'We can provide a list of nearby hotels and hostels. Please contact us at info@iimun.in for recommendations. Day scholars from Pune schools do not need accommodation.'
  },
  {
    q: 'Who do I contact for more questions?',
    a: 'Email us at info@iimun.in or call +91 98765 43210. You can also reach out to Zara Khan (Director of Delegate Affairs) through the school office.'
  }
];

const sponsors = [
  { name: 'United Nations Information Centre', type: 'Knowledge Partner', icon: 'fa-globe' },
  { name: 'The Indian Express', type: 'Media Partner', icon: 'fa-newspaper' },
  { name: 'HDFC Bank', type: 'Platinum Sponsor', icon: 'fa-building-columns' },
  { name: 'Rotary Club of Pune', type: 'Community Partner', icon: 'fa-handshake' },
  { name: 'Google India', type: 'Technology Partner', icon: 'fa-google' },
  { name: 'Tata Consultancy Services', type: 'Gold Sponsor', icon: 'fa-star' },
  { name: 'British Council India', type: 'Cultural Partner', icon: 'fa-landmark' },
  { name: 'Teach For India', type: 'Education Partner', icon: 'fa-graduation-cap' }
];

document.addEventListener('DOMContentLoaded', function () {

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  setupMenu();
  setupTheme();
  setupCountdown();
  setupCounters();
  setupCommittees();
  setupTeam();
  setupSchedule();
  setupFAQ();
  setupSponsors();
  setupRegistration();
  setupContact();
  setupScroll();
});

function setupMenu() {
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    links.classList.toggle('open');
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      btn.classList.remove('active');
      links.classList.remove('open');
    });
  });

  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function setupTheme() {
  const btn = document.getElementById('themeBtn');

  btn.addEventListener('click', function () {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

function setupCountdown() {
  const target = new Date('February 21, 2025 08:00:00 GMT+0530');

  function update() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(d).padStart(2, '0');
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function setupCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(function () {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (c) { observer.observe(c); });
}

function setupCommittees() {
  const grid = document.getElementById('committeesGrid');

  committees.forEach(function (c) {
    const card = document.createElement('div');
    card.className = 'committee-card card';
    card.innerHTML =
      '<span class="level ' + c.lvl + '">' + c.level + '</span>' +
      '<h3>' + c.name + '</h3>' +
      '<p class="committee-agenda">' + c.agenda + '</p>' +
      '<div class="committee-meta">' +
        '<span><i class="fas fa-users"></i> ' + c.size + ' delegates</span>' +
        '<span><i class="fas fa-landmark"></i> ' + c.type + '</span>' +
      '</div>';
    grid.appendChild(card);
  });
}

function setupTeam() {
  const grid = document.getElementById('teamGrid');

  team.forEach(function (m) {
    const card = document.createElement('div');
    card.className = 'team-card card';
    card.innerHTML =
      '<div class="team-avatar"><span>' + m.initials + '</span></div>' +
      '<h3 class="team-name">' + m.name + '</h3>' +
      '<p class="team-role">' + m.role + '</p>' +
      '<p class="team-bio">' + m.bio + '</p>';
    grid.appendChild(card);
  });
}

function setupSchedule() {
  const tabs = document.getElementById('scheduleTabs');
  const content = document.getElementById('scheduleContent');

  schedule.forEach(function (d, i) {
    const tab = document.createElement('button');
    tab.className = 'schedule-tab' + (i === 0 ? ' active' : '');
    tab.textContent = d.label;
    tab.dataset.day = d.day;
    tabs.appendChild(tab);

    const dayDiv = document.createElement('div');
    dayDiv.className = 'schedule-day' + (i === 0 ? ' active' : '');
    dayDiv.dataset.day = d.day;

    d.events.forEach(function (e) {
      const item = document.createElement('div');
      item.className = 'schedule-item';
      item.innerHTML =
        '<div class="schedule-time">' + e.time + '</div>' +
        '<div class="schedule-info">' +
          '<h4>' + e.title + '</h4>' +
          '<p>' + e.desc + '</p>' +
        '</div>';
      dayDiv.appendChild(item);
    });

    content.appendChild(dayDiv);
  });

  tabs.querySelectorAll('.schedule-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.querySelectorAll('.schedule-tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      content.querySelectorAll('.schedule-day').forEach(function (d) {
        d.classList.remove('active');
        if (parseInt(d.dataset.day) === parseInt(tab.dataset.day)) {
          d.classList.add('active');
        }
      });
    });
  });
}

function setupFAQ() {
  const list = document.getElementById('faqList');

  faqs.forEach(function (f) {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML =
      '<div class="faq-question">' +
        '<h3>' + f.q + '</h3>' +
        '<div class="faq-icon"><i class="fas fa-chevron-down"></i></div>' +
      '</div>' +
      '<div class="faq-answer">' +
        '<div class="faq-answer-inner">' + f.a + '</div>' +
      '</div>';

    item.querySelector('.faq-question').addEventListener('click', function () {
      const active = list.querySelector('.faq-item.active');
      if (active && active !== item) {
        active.classList.remove('active');
      }
      item.classList.toggle('active');
    });

    list.appendChild(item);
  });
}

function setupSponsors() {
  const grid = document.getElementById('sponsorGrid');

  sponsors.forEach(function (s) {
    const item = document.createElement('div');
    item.className = 'sponsor-item';
    item.innerHTML =
      '<div>' +
        '<i class="fas ' + s.icon + '"></i>' +
        '<span>' + s.name + '</span>' +
        '<small>' + s.type + '</small>' +
      '</div>';
    grid.appendChild(item);
  });
}

function setupRegistration() {
  const form = document.getElementById('registerForm');
  const select = document.getElementById('regCommittee');
  const success = document.getElementById('registerSuccess');

  committees.forEach(function (c) {
    const opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = c.name;
    select.appendChild(opt);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fields = [
      { el: document.getElementById('regName'), err: 'Please enter your full name' },
      { el: document.getElementById('regEmail'), err: 'Please enter a valid email', test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { el: document.getElementById('regCountry'), err: 'Please enter your school name' },
      { el: document.getElementById('regCommittee'), err: 'Please select a committee', test: function (v) { return v !== ''; } }
    ];

    let valid = true;

    fields.forEach(function (f) {
      const val = f.el.value.trim();
      const error = f.el.parentElement.querySelector('.form-error');
      f.el.classList.remove('error');
      error.textContent = '';
      if (!val || (f.test && !f.test(val))) {
        f.el.classList.add('error');
        error.textContent = f.err;
        valid = false;
      }
    });

    const terms = document.getElementById('regTerms');
    const termsErr = document.getElementById('termsError');
    if (!terms.checked) {
      termsErr.textContent = 'Please accept the terms and conditions';
      valid = false;
    } else {
      termsErr.textContent = '';
    }

    if (valid) {
      form.querySelector('.btn-block').style.display = 'none';
      form.querySelectorAll('.form-group').forEach(function (g) { g.style.display = 'none'; });
      success.classList.add('active');
    }
  });
}

function setupContact() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fields = [
      { el: document.getElementById('contactName'), err: 'Please enter your name' },
      { el: document.getElementById('contactEmail'), err: 'Please enter a valid email', test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { el: document.getElementById('contactSubject'), err: 'Please enter a subject' },
      { el: document.getElementById('contactMsg'), err: 'Please enter your message' }
    ];

    let valid = true;

    fields.forEach(function (f) {
      const val = f.el.value.trim();
      const error = f.el.parentElement.querySelector('.form-error');
      f.el.classList.remove('error');
      error.textContent = '';
      if (!val || (f.test && !f.test(val))) {
        f.el.classList.add('error');
        error.textContent = f.err;
        valid = false;
      }
    });

    if (valid) {
      form.querySelector('.btn-block').style.display = 'none';
      form.querySelectorAll('.form-group').forEach(function (g) { g.style.display = 'none'; });
      success.classList.add('active');
    }
  });

  const subForm = document.getElementById('subscribeForm');
  subForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = subForm.querySelector('input');
    if (input.value.trim()) {
      input.value = '';
      input.placeholder = 'Subscribed! Thank you.';
      setTimeout(function () { input.placeholder = 'Your email'; }, 3000);
    }
  });
}

function setupScroll() {
  const btn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const revealEls = document.querySelectorAll('.card, .committee-card, .team-card, .schedule-tab, .faq-item, .sponsor-item, .contact-card, .pricing');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(function (el) { observer.observe(el); });
}
