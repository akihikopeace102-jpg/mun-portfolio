const committees = [
  {
    name: 'United Nations Security Council (UNSC)',
    agenda: 'Addressing International Peace & Security: Cyber Warfare & Emerging Threats',
    level: 'Advanced',
    lvl: 'advanced',
    size: '15-25',
    type: 'Crisis Committee'
  },
  {
    name: 'World Health Organization (WHO)',
    agenda: 'Global Health Security: Pandemic Preparedness & Equitable Vaccine Distribution',
    level: 'Intermediate',
    lvl: 'intermediate',
    size: '25-35',
    type: 'General Assembly'
  },
  {
    name: 'United Nations Human Rights Council (UNHRC)',
    agenda: 'Protection of Civil Rights in the Digital Age: Privacy, Surveillance & Freedom of Expression',
    level: 'Intermediate',
    lvl: 'intermediate',
    size: '20-30',
    type: 'Human Rights'
  },
  {
    name: 'Disarmament & International Security (DISEC)',
    agenda: 'Nuclear Non-Proliferation & Disarmament in an Era of Great Power Competition',
    level: 'Advanced',
    lvl: 'advanced',
    size: '25-35',
    type: 'General Assembly'
  },
  {
    name: 'United Nations Environment Programme (UNEP)',
    agenda: 'Climate Action & Sustainability: Accelerating the Green Transition',
    level: 'Beginner',
    lvl: 'beginner',
    size: '30-40',
    type: 'General Assembly'
  },
  {
    name: 'Social, Humanitarian & Cultural Committee (SOCHUM)',
    agenda: 'Refugee Crisis Management: Durable Solutions for Displaced Populations',
    level: 'Beginner',
    lvl: 'beginner',
    size: '30-40',
    type: 'General Assembly'
  },
  {
    name: 'Joint Crisis Committee: Middle East',
    agenda: 'Escalating Tensions in the Persian Gulf: A Multi-Crisis Simulation',
    level: 'Advanced',
    lvl: 'crisis',
    size: '20-30',
    type: 'Crisis Committee'
  },
  {
    name: 'Historical Security Council: 1991',
    agenda: 'The Gulf War: Coalition Building & Post-Conflict Reconstruction',
    level: 'Advanced',
    lvl: 'crisis',
    size: '15-20',
    type: 'Historical Crisis'
  }
];

const team = [
  {
    name: 'Alexander Hartwell',
    role: 'Secretary-General',
    bio: 'Fourth-year International Relations. Former Director of UNSC at HMUN 2024.',
    initials: 'AH'
  },
  {
    name: 'Victoria Chen',
    role: 'Deputy Secretary-General',
    bio: 'Third-year Law & Diplomacy. Led secretariat at GDS 2024.',
    initials: 'VC'
  },
  {
    name: 'Marcus Okonkwo',
    role: 'Under-Secretary-General, Committees',
    bio: 'Fourth-year Political Science. Oversaw 12 committees at NMUN 2024.',
    initials: 'MO'
  },
  {
    name: 'Sophia Laurent',
    role: 'Under-Secretary-General, Administration',
    bio: 'Third-year International Business. Manages logistics and delegate affairs.',
    initials: 'SL'
  },
  {
    name: 'James Park',
    role: 'Director of Public Relations',
    bio: 'Fourth-year Communications. Led marketing campaigns reaching 50K+ delegates.',
    initials: 'JP'
  },
  {
    name: 'Amara Singh',
    role: 'Director of Technology',
    bio: 'Third-year Computer Science. Builds digital infrastructure for conference platforms.',
    initials: 'AS'
  },
  {
    name: 'Lucas Fernández',
    role: 'Director of Events',
    bio: 'Fourth-year Hospitality Management. Designs social events and networking experiences.',
    initials: 'LF'
  },
  {
    name: 'Zara Williams',
    role: 'Director of Delegate Affairs',
    bio: 'Third-year International Studies. Handles delegate welfare and support.',
    initials: 'ZW'
  }
];

const schedule = [
  {
    day: 1,
    label: 'Day 1 \u2014 May 16',
    events: [
      { time: '08:00 - 09:30', title: 'Registration & Check-In', desc: 'Delegate check-in, material distribution, and badge collection at the main lobby.' },
      { time: '09:30 - 10:30', title: 'Opening Ceremony', desc: 'Keynote address by the Secretary-General of the United Nations (via video message).' },
      { time: '10:30 - 11:00', title: 'Coffee Break & Networking', desc: 'Meet fellow delegates from around the world over refreshments.' },
      { time: '11:00 - 13:00', title: 'Committee Session I', desc: 'First committee session: Rules of procedure, roll call, and opening statements.' },
      { time: '13:00 - 14:30', title: 'Lunch & Side Events', desc: 'Sponsored lunch with panel discussion on careers in international diplomacy.' },
      { time: '14:30 - 17:00', title: 'Committee Session II', desc: 'Substantive debate, caucusing, and draft resolution submissions.' },
      { time: '19:00 - 21:00', title: 'Welcome Reception', desc: 'Formal networking reception at the Grand Ballroom. Business attire required.' }
    ]
  },
  {
    day: 2,
    label: 'Day 2 \u2014 May 17',
    events: [
      { time: '08:00 - 09:00', title: 'Delegate Breakfast', desc: 'Continental breakfast available for all delegates.' },
      { time: '09:00 - 12:00', title: 'Committee Session III', desc: 'Continued debate, amendment procedures, and informal caucusing.' },
      { time: '10:30 - 11:00', title: 'Crisis Update I', desc: 'First crisis scenario introduced in crisis committees.' },
      { time: '12:00 - 13:30', title: 'Lunch & Keynote', desc: 'Guest speaker: Former UN Ambassador on the future of multilateralism.' },
      { time: '13:30 - 16:30', title: 'Committee Session IV', desc: 'Final lobbying, voting bloc formation, and resolution voting.' },
      { time: '16:30 - 17:30', title: 'Crisis Update II', desc: 'Second crisis scenario and committee responses.' },
      { time: '19:00 - 22:00', title: 'Cultural Night & Gala', desc: 'Cultural performances, international food fair, and the GDS Gala Dinner.' }
    ]
  },
  {
    day: 3,
    label: 'Day 3 \u2014 May 18',
    events: [
      { time: '08:00 - 09:00', title: 'Delegate Breakfast', desc: 'Morning refreshments before the final day.' },
      { time: '09:00 - 11:30', title: 'Committee Session V', desc: 'Final resolutions, amendment voting, and committee closing statements.' },
      { time: '11:30 - 13:00', title: 'General Assembly', desc: 'Plenary session: Selected resolutions presented to the General Assembly.' },
      { time: '13:00 - 14:30', title: 'Farewell Lunch', desc: 'Final lunch together with committee members and secretariat.' },
      { time: '14:30 - 16:30', title: 'Closing Ceremony', desc: 'Award presentations, closing remarks by the Secretary-General, and conference wrap-up.' }
    ]
  }
];

const faqs = [
  {
    q: 'What is a Model United Nations conference?',
    a: 'Model United Nations (MUN) is an educational simulation where students step into the shoes of diplomats representing countries or organizations in UN committees. Participants debate global issues, draft resolutions, and practice negotiation and public speaking skills.'
  },
  {
    q: 'Do I need prior MUN experience to participate?',
    a: 'Not at all! GDS welcomes delegates of all experience levels. We offer beginner-friendly committees with detailed guides, mentorship programs, and training workshops before the conference.'
  },
  {
    q: 'What is the dress code for the conference?',
    a: 'Western business formal attire is required for all committee sessions and official events. This includes suits, blazers, dress shirts, ties, formal dresses, and professional footwear.'
  },
  {
    q: 'What is included in the registration fee?',
    a: 'The registration fee covers conference materials, access to all committee sessions, opening and closing ceremonies, certificate of participation, refreshments during breaks, lunches on all three days, and entry to all social events including the Gala Dinner.'
  },
  {
    q: 'Can I get a refund if I can no longer attend?',
    a: 'Full refunds are available up to 30 days before the conference. A 50% refund is available between 15-30 days before the event. No refunds can be processed within 14 days of the conference start date.'
  },
  {
    q: 'How are country allocations determined?',
    a: 'Country allocations are handled on a first-come, first-served basis during registration. Delegates may request up to three preferred countries or assignments.'
  },
  {
    q: 'Will there be awards at the conference?',
    a: 'Yes! Awards include Best Delegate, Outstanding Delegate, Honorable Mention, Best Position Paper, and Best Small Delegation. Awards are determined by dais members.'
  },
  {
    q: 'Is accommodation provided for out-of-town delegates?',
    a: 'We have partnered with several hotels near the venue to offer discounted rates for GDS delegates. Please check the Resources section after registering for details.'
  }
];

const sponsors = [
  { name: 'United Nations Foundation', type: 'Partner Organization', icon: 'fa-globe' },
  { name: 'Oxford University Press', type: 'Academic Partner', icon: 'fa-book-open' },
  { name: 'Deutsche Bank', type: 'Platinum Sponsor', icon: 'fa-building-columns' },
  { name: 'The Diplomat Magazine', type: 'Media Partner', icon: 'fa-newspaper' },
  { name: 'Google.org', type: 'Technology Partner', icon: 'fa-google' },
  { name: 'Model UN Association', type: 'Supporting Organization', icon: 'fa-handshake' },
  { name: 'Coca-Cola Foundation', type: 'Gold Sponsor', icon: 'fa-star' },
  { name: 'British Council', type: 'Cultural Partner', icon: 'fa-landmark' }
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
  const target = new Date('May 16, 2025 08:00:00 GMT-0400');

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
      { el: document.getElementById('regCountry'), err: 'Please enter your institution' },
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
