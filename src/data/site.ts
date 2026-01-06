export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	slug: string;
	name: string;
	oneLiner: string;
	role: string;
	challenges: string[];
	tech: string[];
	impact?: string[];
	links: ProjectLink[];
	featured?: boolean;
};

export const site = {
	name: 'Alec Zaitz',
	role: 'Software Engineer',
	valueProp: 'I build fast, reliable web products with strong UX and pragmatic engineering tradeoffs.',
	location: 'Utah • Remote-friendly',
	email: 'aleczaitz@gmail.com',
	github: 'https://github.com/aleczaitz',
	linkedin: 'https://www.linkedin.com/in/aleczaitz/',
	siteUrl: 'https://aleczaitz.com',
} as const;

export const projects: Project[] = [
	{
		slug: 'festival-event-details-extraction',
		name: 'Festival Event Details Extraction',
		oneLiner: 'API + scraper that extracts venue, full address, dates, and start times from event listings.',
		role: 'Owner (API + extraction logic)',
		challenges: [
			'Normalize inconsistent date/time formats across event pages',
			'Handle pagination and partial/hidden venue details',
			'Make extraction robust to minor DOM/layout changes',
		],
		tech: ['TypeScript', 'Node.js', 'HTML parsing', 'Resilient selectors'],
		impact: ['Reduced manual data entry for event ingestion workflows'],
		links: [
			{ label: 'Case Study', href: '/projects#festival-event-details-extraction' },
		],
		featured: true,
	},
	{
		slug: 'portfolio-astro',
		name: 'aleczaitz.com',
		oneLiner: 'A static, recruiter-focused portfolio built with Astro for speed, clarity, and SEO.',
		role: 'Designer + Engineer',
		challenges: [
			'Ship a clean IA that communicates “who/what/why” in under 5 seconds',
			'Keep client JS minimal while supporting dark mode and accessibility',
			'Maintain a consistent spacing/typography system across pages',
		],
		tech: ['Astro', 'Tailwind CSS', 'Static generation', 'Semantic HTML'],
		impact: ['Lighthouse-oriented defaults, simple content model, and easy maintenance'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/aleczaitz/aleczaitz.com' },
		],
		featured: true,
	},
	{
		slug: 'design-systems-ui',
		name: 'Product UI System',
		oneLiner: 'A small design system to standardize UI patterns and reduce front-end churn.',
		role: 'Frontend lead',
		challenges: [
			'Balance flexibility with consistency in component APIs',
			'Define tokens for spacing, color, and typography with high contrast',
			'Prioritize accessibility and performance over visual complexity',
		],
		tech: ['Design tokens', 'Component library', 'Accessibility', 'Performance'],
		impact: ['Faster iteration and fewer UI regressions across product surfaces'],
		links: [],
		featured: true,
	},
	{
		slug: 'data-pipeline-scraping',
		name: 'Data Ingestion Pipeline',
		oneLiner: 'Pipeline to ingest and validate external data with clear failure modes and auditability.',
		role: 'Engineer (systems + data quality)',
		challenges: [
			'Detect schema drift and surface actionable errors',
			'Design idempotent ingestion to avoid duplicates',
			'Trade off strict validation vs. forward compatibility',
		],
		tech: ['ETL', 'Validation', 'Observability'],
		impact: ['Higher data quality and easier debugging for downstream consumers'],
		links: [],
	},
];


