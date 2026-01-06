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

export type Education = {
	institution: string;
	degree: string;
	field?: string;
	start: string;
	end?: string;
	location?: string;
	highlights?: Array<string | ProjectLink>;
};

export const site = {
	name: 'Alec Zaitz',
	roles: ['Developer', 'Founder', 'UI/UX Designer', 'Data Enthusiast'],
	valueProp: 'I build fast, reliable web products with strong UX and pragmatic engineering tradeoffs.',
	location: 'Utah • Remote-friendly',
	email: 'aleczaitz@gmail.com',
	github: 'https://github.com/aleczaitz',
	linkedin: 'https://www.linkedin.com/in/aleczaitz/',
	siteUrl: 'https://aleczaitz.com',
} as const;

export const projects: Project[] = [
	{
		slug: 'parkpal',
		name: 'ParkPal',
		oneLiner:
		  'A two-sided marketplace for booking driveway parking near events, with maps-based discovery, real-time messaging, and Stripe checkout on Firebase.',
		role: 'Full-Stack Engineer & Founder',
		challenges: [
		  'Design a scalable data model for events/venues/parking inventory, bookings, and conversations across Firestore + Cloud Functions',
		  'Build a reliable booking + payments flow (Stripe) with server-side validation, secure webhooks/callables, and clear user state transitions',
		  'Handle tricky time + timezone logic by standardizing on UTC ISO 8601 timestamps and updating services/components accordingly',
		  'Implement availability scheduling with automatic conflict detection/resolution (event vs recurring vs manual) to prevent double-booking',
		  'Operationalize event onboarding with scheduled scraping + a Slack approval workflow to generate high-quality venue/event suggestions',
		],
		tech: [
		  'TypeScript',
		  'React',
		  'Vite',
		  'Firebase (Auth, Firestore, Cloud Functions, Hosting, Storage)',
		  'Stripe (Checkout + webhooks)',
		  'Google Maps API (Maps/Geocoding/Timezone)',
		  'Tailwind CSS',
		  'Geofire (geospatial querying)',
		  'Zod (validation)',
		  'date-fns',
		  'PostHog (analytics)',
		  'Vitest / Jest (testing)',
		],
		impact: [
		  'Enabled event-goers to discover and reserve nearby driveway parking with secure payments, messaging, and booking management',
		  'Improved correctness and debuggability by migrating date handling to standardized UTC ISO strings across the app',
		  'Reduced host scheduling errors by automatically resolving overlapping availability windows with clear priority rules',
		],
		links: [
		  { label: 'Details', href: '/projects#parkpal' },
		  { label: 'Live Demo', href: 'https://parkpal.co' },
		],
		featured: true,
	},
	{
		slug: 'versionary',
		name: 'Versionary',
		oneLiner:
			'A Google-Docs-like rich text editor with real-time collaboration and Git-style commits + branching, persisted via Supabase.',
		role: 'Full-Stack Engineer & Co-Founder',
		challenges: [
			'Design a low-latency collaboration architecture (WebSocket collab server + REST backend) that keeps the editor responsive',
			'Persist collaborative state safely: bridge CRDT live edits into durable Git snapshots and history',
			'Build reliable, secure backend Git operations (commit/history/branches) without native dependencies (migrated from NodeGit → Git CLI)',
			'Prevent data loss on refresh/disconnect with caching + snapshotting while keeping bandwidth minimal',
			'Implement auth/authorization (Supabase JWT + RLS) and repo lifecycle management (download/upload + cleanup)',
		],
		tech: [
			'TypeScript',
			'React',
			'Lexical',
			'Yjs (CRDT)',
			'Hocuspocus (WebSocket collaboration)',
			'TanStack Router',
			'TanStack Query',
			'Tailwind CSS',
			'Node.js',
			'Express',
			'Supabase (Auth, Postgres, Storage)',
			'Git CLI (child_process)',
			'Fly.io (deployment)',
		],
		impact: [
			'Enabled multi-user, conflict-free editing with Git-like history (commits + branches) for documents',
			'Improved reliability and deployability by removing native git bindings (NodeGit) in favor of Git CLI',
			'Reduced accidental data loss via short-term server-side caching and background snapshotting of uncommitted changes',
		],
		links: [
			{ label: 'Details', href: '/projects#versionary' },
			{ label: 'Live Demo', href: 'https://versionary.app' },
		],
		featured: true,
	},
	{
		slug: 'portfolio',
		name: 'aleczaitz.com',
		oneLiner: 'A static, recruiter-focused portfolio built with Astro for speed, clarity, and strong SEO, prioritizing first impressions and maintainability.',
		role: 'Designer + Engineer',
		challenges: [
			'Ship a clean IA that communicates “who/what/why” in under 5 seconds',
			'Keep client JS minimal while supporting dark mode and accessibility',
			'Maintain a consistent spacing/typography system across pages',
		],
		tech: ['Astro', 'Tailwind CSS', 'Static generation', 'Semantic HTML'],
		impact: ['Lighthouse-oriented defaults, simple content model, and easy maintenance'],
		links: [
			{ label: "Details", href: '/projects#portfolio' },
			{ label: 'GitHub', href: 'https://github.com/aleczaitz/aleczaitz.com' },
		],
		featured: true,
	},
	{
		slug: 'hashing-pixels',
		name: 'HashingPixels',
		oneLiner:
		  'A JavaFX app that reduces an image to N dominant colors using a custom hash table, and lets users recolor and export the result.',
		role: 'Solo Developer',
		challenges: [
		  'Implement a generic hash table with quadratic probing, rehashing, and probe-count instrumentation to efficiently dedupe/count colors',
		  'Design an image encoding pipeline: quantize pixel colors, pick the most frequent colors, then remap every pixel to the nearest palette color (RGB distance)',
		  'Bridge image pipelines cleanly between AWT `BufferedImage` and JavaFX `ImageView` (SwingFXUtils) while keeping the UI responsive and stateful',
		  'Build a simple, reliable UX for loading images, parameterizing max colors, previewing original vs transformed outputs, and saving PNG exports',
		  'Write unit + integration tests around core logic to keep the hashing/encoding behavior correct as the algorithm evolves',
		],
		tech: [
		  'Java 21',
		  'JavaFX (Controls, FXML, Swing interop)',
		  'Gradle',
		  'JUnit 5',
		  'ImageIO / BufferedImage',
		  'Custom HashTable (quadratic probing)',
		],
		impact: [
		  'Reduced image palettes to a user-defined number of dominant colors while preserving overall appearance via nearest-color remapping',
		  'Delivered an interactive side-by-side preview workflow (original vs encoded/recolored) with one-click export to PNG',
		  'Demonstrated data-structures fluency by applying a custom hash table to real-world image processing and measuring probe behavior',
		],
		links: [
		  { label: 'Details', href: '/projects#hashing-pixels' },
		  { label: 'GitHub', href: 'https://github.com/aleczaitz/HashingPixels' },
		],
		featured: true,
	  }
];

export const education: Education[] = [
	{
		institution: 'Brigham Young University',
		degree: 'B.S. in Computer Science',
		field: 'Software Engineering',
		start: 'Aug 2023',
		end: '2026',
		location: 'Provo, UT',
		highlights: [
			'Cumulative GPA: 3.93',
			{
				label: 'Sandbox startup incubator 05 cohort',
				href: 'https://sandbox.ing',
			},
		],
	},
];


