// ─── Types ───────────────────────────────────────────────────────────────────

export interface Job {
  id: string;
  title: string;
  company: string;
  logoUrl: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  level: 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Staff';
  category: string;
  salary?: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  applicationUrl: string;
  postedAt: string; // ISO date string
  isVerified: boolean;
  source: 'mock' | 'admin'; // track origin
}

export interface Category {
  name: string;
  icon: string;
  count: number;
}

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { name: 'QA', icon: 'bug_report', count: 48 },
  { name: 'Accounting', icon: 'account_balance', count: 32 },
  { name: 'Development', icon: 'code', count: 124 },
  { name: 'Support', icon: 'support_agent', count: 56 },
  { name: 'Design', icon: 'brush', count: 38 },
  { name: 'Marketing', icon: 'campaign', count: 42 },
  { name: 'Data Science', icon: 'analytics', count: 29 },
  { name: 'DevOps', icon: 'cloud', count: 35 },
  { name: 'Product', icon: 'inventory_2', count: 21 },
  { name: 'Sales', icon: 'trending_up', count: 44 },
  { name: 'HR', icon: 'people', count: 18 },
  { name: 'Finance', icon: 'payments', count: 27 },
];

// ─── Mock Data ───────────────────────────────────────────────────────────────

const mockJobs: Job[] = [
  {
    id: 'mock-1',
    title: 'Senior Software Engineer',
    company: 'TechNova Systems',
    logoUrl: '',
    location: 'Remote (Global)',
    type: 'Full-time',
    level: 'Senior',
    category: 'Development',
    salary: '$130k – $170k',
    description:
      'TechNova Systems is looking for a Senior Software Engineer to join our distributed team. You will architect and build scalable micro-services, mentor junior engineers, and drive technical excellence across the organisation.',
    responsibilities: [
      'Design and implement scalable backend services using Node.js and TypeScript.',
      'Lead code reviews and establish best practices for the engineering team.',
      'Collaborate with product and design to ship user-facing features.',
      'Monitor and optimise application performance and reliability.',
    ],
    requirements: [
      '5+ years of professional software engineering experience.',
      'Strong proficiency in TypeScript/JavaScript and Node.js.',
      'Experience with cloud platforms (AWS, GCP, or Azure).',
      'Excellent communication skills and experience working remotely.',
    ],
    applicationUrl: 'https://technova.example.com/careers/senior-se',
    postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-2',
    title: 'Quality Assurance Lead',
    company: 'FinEdge Apps',
    logoUrl: '',
    location: 'New York, USA',
    type: 'Full-time',
    level: 'Lead',
    category: 'QA',
    salary: '$140k – $180k',
    description:
      'FinEdge Apps is hiring a QA Lead to own the quality strategy across our fintech platform. You will build and manage an automation framework, lead a small team, and collaborate directly with engineering leadership.',
    responsibilities: [
      'Define and execute the overall QA strategy for all products.',
      'Build and maintain automated test suites with Playwright and Cypress.',
      'Mentor and grow a team of QA engineers.',
      'Integrate quality gates into CI/CD pipelines.',
    ],
    requirements: [
      '6+ years of QA experience with at least 2 years in a leadership role.',
      'Expert-level knowledge of automated testing frameworks.',
      'Experience in the fintech or financial services domain.',
      'Strong analytical and problem-solving skills.',
    ],
    applicationUrl: 'https://finedge.example.com/jobs/qa-lead',
    postedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-3',
    title: 'Junior Accountant',
    company: 'Green Ledger',
    logoUrl: '',
    location: 'Chicago, USA',
    type: 'Contract',
    level: 'Junior',
    category: 'Accounting',
    salary: '$50k – $65k',
    description:
      'Green Ledger is seeking a detail-oriented Junior Accountant to support our growing finance team. You will handle day-to-day bookkeeping, assist with month-end close, and help prepare financial reports.',
    responsibilities: [
      'Maintain accurate financial records and general ledger entries.',
      'Assist in monthly, quarterly, and annual close procedures.',
      'Prepare bank reconciliations and expense reports.',
      'Support senior accountants with audit preparations.',
    ],
    requirements: [
      "Bachelor's degree in Accounting or Finance.",
      'Familiarity with accounting software (QuickBooks, Xero).',
      'Strong attention to detail and organisational skills.',
      'CPA candidacy is a plus but not required.',
    ],
    applicationUrl: 'https://greenledger.example.com/careers/junior-acct',
    postedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-4',
    title: 'Senior QA Automation Engineer',
    company: 'TechFlow Solutions',
    logoUrl: '',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior',
    category: 'QA',
    salary: '$120k – $160k',
    description:
      'TechFlow Solutions needs a Senior QA Automation Engineer to drive our test-automation strategy. You will work hands-on with Playwright and CI/CD systems to ensure zero-defect releases.',
    responsibilities: [
      'Design and implement robust automated test suites for web and API layers.',
      'Integrate automated tests into CI/CD pipelines for continuous delivery.',
      'Identify, document, and track software defects.',
      'Collaborate with product managers to define acceptance criteria.',
    ],
    requirements: [
      '5+ years in software QA with a focus on automation.',
      'Proficiency in JavaScript/TypeScript with Playwright or Cypress.',
      'Experience testing RESTful APIs and distributed systems.',
      'Familiarity with Docker and Kubernetes is a plus.',
    ],
    applicationUrl: 'https://techflow.example.com/careers/sr-qa',
    postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-5',
    title: 'UX/UI Designer',
    company: 'Pixel Craft Studio',
    logoUrl: '',
    location: 'Remote (USA)',
    type: 'Full-time',
    level: 'Mid',
    category: 'Design',
    salary: '$95k – $125k',
    description:
      'Pixel Craft Studio is looking for a talented UX/UI Designer to create beautiful, user-centric experiences for our SaaS products. You will own the design process end-to-end, from research to high-fidelity prototypes.',
    responsibilities: [
      'Conduct user research and usability testing.',
      'Create wireframes, mockups, and interactive prototypes in Figma.',
      'Collaborate closely with developers to ensure pixel-perfect implementation.',
      'Maintain and evolve the design system.',
    ],
    requirements: [
      '3+ years of UX/UI design experience for digital products.',
      'Expert-level proficiency with Figma.',
      'Strong portfolio demonstrating user-centred design thinking.',
      'Excellent communication and presentation skills.',
    ],
    applicationUrl: 'https://pixelcraft.example.com/careers/ux-designer',
    postedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-6',
    title: 'DevOps Engineer',
    company: 'CloudScale Solutions',
    logoUrl: '',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    category: 'DevOps',
    salary: '$110k – $150k',
    description:
      'CloudScale Solutions is hiring a DevOps Engineer to build and maintain our cloud infrastructure. You will work with Kubernetes, Terraform, and CI/CD systems to keep our platform reliable and scalable.',
    responsibilities: [
      'Manage and optimise Kubernetes clusters on AWS.',
      'Automate infrastructure provisioning with Terraform.',
      'Build and maintain CI/CD pipelines.',
      'Implement monitoring, alerting, and incident response processes.',
    ],
    requirements: [
      '3+ years of DevOps or SRE experience.',
      'Strong experience with AWS, Docker, and Kubernetes.',
      'Proficiency with IaC tools (Terraform, Pulumi).',
      'Experience with monitoring tools (Datadog, Grafana, Prometheus).',
    ],
    applicationUrl: 'https://cloudscale.example.com/jobs/devops',
    postedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-7',
    title: 'Marketing Manager',
    company: 'BrandForge',
    logoUrl: '',
    location: 'Austin, TX',
    type: 'Full-time',
    level: 'Mid',
    category: 'Marketing',
    salary: '$85k – $110k',
    description:
      'BrandForge is seeking a data-driven Marketing Manager to lead our growth campaigns. You will own the marketing funnel from acquisition to retention across digital channels.',
    responsibilities: [
      'Plan and execute multi-channel marketing campaigns.',
      'Analyse campaign performance and optimise ROI.',
      'Manage social media, email, and content marketing strategies.',
      'Collaborate with sales and product teams on go-to-market launches.',
    ],
    requirements: [
      '4+ years of digital marketing experience.',
      'Experience with analytics tools (Google Analytics, Mixpanel).',
      'Strong copywriting and content creation skills.',
      'Experience managing paid advertising budgets.',
    ],
    applicationUrl: 'https://brandforge.example.com/careers/marketing-mgr',
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
  {
    id: 'mock-8',
    title: 'Customer Support Specialist',
    company: 'HelpHub',
    logoUrl: '',
    location: 'Remote (LATAM)',
    type: 'Full-time',
    level: 'Junior',
    category: 'Support',
    salary: '$35k – $50k',
    description:
      'HelpHub is looking for a friendly and resourceful Customer Support Specialist to help our users succeed. You will handle tickets via chat, email, and phone, and advocate for customers internally.',
    responsibilities: [
      'Respond to customer inquiries via chat, email, and phone.',
      'Troubleshoot product issues and escalate bugs to engineering.',
      'Create and update help center articles and FAQs.',
      'Track customer feedback and share insights with product teams.',
    ],
    requirements: [
      '1+ years of customer support experience.',
      'Excellent written and verbal communication in English.',
      'Empathetic, patient, and solution-oriented mindset.',
      'Experience with support tools (Zendesk, Intercom) is a plus.',
    ],
    applicationUrl: 'https://helphub.example.com/jobs/support',
    postedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    source: 'mock',
  },
];

// ─── LocalStorage Helpers ────────────────────────────────────────────────────

const STORAGE_KEY = 'jobradar_admin_jobs';

function getAdminJobsFromStorage(): Job[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAdminJobsToStorage(jobs: Job[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

// ─── Public API (placeholder async — easy to swap for real fetch later) ──────

/**
 * Fetch all jobs: mock data merged with admin-created jobs from localStorage.
 */
export async function fetchJobs(): Promise<Job[]> {
  // Simulate network latency
  // await new Promise((r) => setTimeout(r, 300));

  const adminJobs = getAdminJobsFromStorage();
  const allJobs = [...mockJobs, ...adminJobs];

  // Sort by posted date, newest first
  return allJobs.sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
}

/**
 * Fetch a single job by ID.
 */
export async function getJobById(id: string): Promise<Job | undefined> {
  const jobs = await fetchJobs();
  return jobs.find((j) => j.id === id);
}

/**
 * Fetch jobs filtered by category.
 */
export async function fetchJobsByCategory(category: string): Promise<Job[]> {
  const jobs = await fetchJobs();
  return jobs.filter(
    (j) => j.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Search jobs by keyword (searches title, company, description, category).
 */
export async function searchJobs(query: string): Promise<Job[]> {
  const jobs = await fetchJobs();
  const q = query.toLowerCase();
  return jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q)
  );
}

/**
 * Post a new job (admin). Saves to localStorage and returns the created job.
 */
export async function postJob(
  data: Omit<Job, 'id' | 'postedAt' | 'isVerified' | 'source'>
): Promise<Job> {
  const newJob: Job = {
    ...data,
    id: `admin-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    postedAt: new Date().toISOString(),
    isVerified: false,
    source: 'admin',
  };

  const existing = getAdminJobsFromStorage();
  existing.push(newJob);
  saveAdminJobsToStorage(existing);

  return newJob;
}

/**
 * Delete an admin job by ID.
 */
export async function deleteJob(id: string): Promise<boolean> {
  const existing = getAdminJobsFromStorage();
  const filtered = existing.filter((j) => j.id !== id);
  if (filtered.length === existing.length) return false;
  saveAdminJobsToStorage(filtered);
  return true;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHrs = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHrs < 24) return `${diffHrs} hour${diffHrs > 1 ? 's' : ''} ago`;
  if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  return new Date(dateStr).toLocaleDateString();
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
