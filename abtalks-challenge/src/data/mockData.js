export const INITIAL_PERSONAS = {
  personaA: {
    id: 'personaA',
    name: 'Alex Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    title: 'Persona A: New User',
    tag: 'Day 1 Starter',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    currentDay: 1,
    streak: 0,
    rank: 'Unranked',
    track: 'Fullstack Track',
    hasMissedDays: false,
    days: Array.from({ length: 60 }, (_, i) => {
      const dayNum = i + 1;
      let status = 'upcoming';
      if (dayNum === 1) status = 'current';
      return {
        day: dayNum,
        title: dayNum === 1 ? 'Build a Mobile-First Hero Section' : `Challenge Day ${dayNum}`,
        status,
        githubUrl: '',
        linkedinUrl: '',
        submittedAt: null
      };
    })
  },
  personaB: {
    id: 'personaB',
    name: 'Sophia Lin',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    title: 'Persona B: Consistent Builder',
    tag: '11-Day Active Streak',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    currentDay: 12,
    streak: 11,
    rank: '#142',
    track: 'Fullstack Track',
    hasMissedDays: false,
    days: Array.from({ length: 60 }, (_, i) => {
      const dayNum = i + 1;
      let status = 'upcoming';
      if (dayNum < 12) status = 'completed';
      if (dayNum === 12) status = 'current'; // pending submission
      return {
        day: dayNum,
        title: dayNum === 12 ? 'Build a Mobile-First Pricing Component' : `Challenge Day ${dayNum}`,
        status,
        githubUrl: dayNum < 12 ? `https://github.com/sophialin/abtalks-day${dayNum}` : '',
        linkedinUrl: dayNum < 12 ? `https://linkedin.com/in/sophialin/posts/day${dayNum}` : '',
        submittedAt: dayNum < 12 ? '2026-08-07T18:30:00Z' : null
      };
    })
  },
  personaC: {
    id: 'personaC',
    name: 'Marcus Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    title: 'Persona C: Recovering Student',
    tag: 'Streak Reset • Rebuilding',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    currentDay: 15,
    streak: 0,
    rank: '#389',
    track: 'Fullstack Track',
    hasMissedDays: true,
    motivationMessage: "Missed days don't define your journey! Bounce back today by submitting Day 15 to reignite your fire streak.",
    days: Array.from({ length: 60 }, (_, i) => {
      const dayNum = i + 1;
      let status = 'upcoming';
      if (dayNum <= 12) status = 'completed';
      else if (dayNum === 13 || dayNum === 14) status = 'missed';
      else if (dayNum === 15) status = 'current';
      
      return {
        day: dayNum,
        title: dayNum === 12 ? 'Build a Mobile-First Pricing Component' : `Challenge Day ${dayNum}`,
        status,
        githubUrl: dayNum <= 12 ? `https://github.com/marcusj/abtalks-day${dayNum}` : '',
        linkedinUrl: dayNum <= 12 ? `https://linkedin.com/in/marcusj/posts/day${dayNum}` : '',
        submittedAt: dayNum <= 12 ? '2026-08-04T20:15:00Z' : null
      };
    })
  }
};

export const DAY_12_DETAILS = {
  day: 12,
  title: 'Build a Mobile-First Pricing Component',
  track: 'Fullstack / Frontend Track',
  difficulty: 'Intermediate',
  estTime: '45 mins',
  points: 150,
  description: `Build a highly polished, responsive pricing table component designed specifically for mobile viewports (390px width limit). The component must display tiered subscription plans, billing toggle controls (Monthly vs. Annual with savings badge), and highlighted recommended options.`,
  requirements: [
    'Strictly constrained layout designed for 390px viewports without horizontal scroll overflow.',
    'Interactive Billing Toggle: Swap prices between Monthly and Annual (with a 20% discount calculation).',
    'Highlight Tier: Visual highlight for the "Pro" plan with a "Most Popular" floating pill badge.',
    'Feature Matrix List: Bulleted checkmarks for features included in each plan.',
    'Accessible Controls: High-contrast buttons with crisp focus rings and active press states.',
    'Proof of Work: Commit your code to GitHub and share a demo update on LinkedIn with screenshot.'
  ],
  frictionSolverTemplate: `🚀 Day 12/60 of the ABTalks Coding Challenge complete!

Today I built a Mobile-First Pricing Component optimized strictly for 390px viewports.

Key Features Implemented:
✨ Dynamic Monthly/Annual billing toggle with 20% savings badge
📱 Clean zero-overflow mobile responsive layout in Tailwind CSS
⚡️ Tier highlight micro-animations & accessible focus rings

🔗 GitHub Commit: {githubUrl}
📌 Track Progress: #ABTalks60Days #BuildInPublic #ProofOfWork #FullstackDev`
};

export const TRACK_HIGHLIGHTS = [
  {
    id: 'fullstack',
    name: 'Fullstack Track',
    icon: 'Layers',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    tech: 'React • Next.js • Node.js • Tailwind'
  },
  {
    id: 'backend',
    name: 'Backend Track',
    icon: 'Database',
    color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
    tech: 'Go • PostgreSQL • Redis • Docker'
  },
  {
    id: 'ai',
    name: 'AI Engineering Track',
    icon: 'Sparkles',
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    tech: 'Python • LLMs • LangChain • VectorDB'
  }
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Get Daily Task',
    desc: 'Receive a real-world project prompt dropped every morning at 8:00 AM sharp.'
  },
  {
    step: '02',
    title: 'Ship Code & Write Post',
    desc: 'Push your GitHub commit and post your daily proof-of-work build on LinkedIn.'
  },
  {
    step: '03',
    title: 'Get Visible to Recruiters',
    desc: 'Climb the global leaderboard and get matched with hiring tech partners.'
  }
];
