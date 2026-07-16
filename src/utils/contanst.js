// Career timeline — most recent first.
export const experience = [
  {
    company: "IBM Software",
    team: "HashiCorp Cloud Platform Services",
    role: "Platform Engineer II",
    period: "Apr 2026 — Present",
    current: true,
  },
  {
    company: "UST",
    role: "Software Development Engineer III · Platform",
    period: "Jun 2024 — Mar 2026",
  },
  {
    company: "HealthWorksAI",
    role: "Software Development Engineer II",
    period: "Dec 2022 — May 2024",
  },
  {
    company: "Sarthi AI",
    role: "Founding Engineer · Platform",
    period: "Aug 2022 — Dec 2022",
  },
  {
    company: "Omnicell",
    role: "Software Development Engineer I",
    period: "Mar 2022 — Aug 2022",
  },
];

export const credentials = [
  "Hackathon Finalist",
  "Open Source Contributor",
  "Startup Founding Engineer",
];

// What I Build — grouped by problem space, not tech stack.
export const buildAreas = [
  {
    title: "Platform Engineering",
    problem:
      "Teams lose weeks to inconsistent environments and manual provisioning. I build internal platforms and golden paths that let engineers ship without waiting on infrastructure.",
  },
  {
    title: "AI Infrastructure",
    problem:
      "Running AI workloads reliably needs more than an API key. I design vector database platforms, inference pipelines, and control planes that keep AI systems fast, observable, and cost-aware.",
  },
  {
    title: "Developer Platforms",
    problem:
      "Deployment should feel invisible. I build CI/CD and self-service deployment systems modeled on Vercel-style workflows, so shipping code is a non-event.",
  },
  {
    title: "Cloud Automation",
    problem:
      "Manual cloud operations don't scale past a handful of services. I automate provisioning, cost controls, and infrastructure lifecycle with Terraform and event-driven pipelines.",
  },
  {
    title: "Distributed Systems",
    problem:
      "Systems fail in ways single machines never do. I design for partial failure — queues, retries, idempotency, and consistency guarantees that hold up under real load.",
  },
  {
    title: "High Performance APIs",
    problem:
      "Latency compounds across a system. I build gRPC and REST services in Golang tuned for throughput, backed by caching and queueing strategies that keep tail latency low.",
  },
];

// Case studies — engineering thinking over screenshots.
export const caseStudies = [
  {
    id: "infrapilot-ai",
    title: "InfraPilot AI — An Explainable Decision Layer for Kubernetes",
    summary:
      "An AI-assisted Kubernetes optimization control plane that classifies workload behavior, applies policy constraints, and simulates impact before any change is applied.",
    stack: ["Golang", "Kubernetes", "client-go", "Prometheus", "LLM Integration"],
    problem:
      "Kubernetes autoscaling reacts to thresholds, not intent — platform teams still had to manually reason about whether a workload was latency-sensitive, cost-sensitive, or safe to optimize aggressively.",
    architecture:
      "A CLI-driven pipeline discovers workloads through client-go, ingests Prometheus metrics, builds a unified workload profile, classifies behavior (API, batch, cron, bursty, steady), and layers policy constraints and simulation on top before producing ranked, explainable recommendations.",
    challenges:
      "Translating natural language operator intent — like 'optimize for cost but protect latency' — into structured policy constraints the recommendation engine can reason about, and producing explanations that justify a decision rather than just a confidence score.",
    tradeoffs:
      "Chose a simulation-first, decision-support layer over direct autoscaling actions — trading immediate automation for operator trust and auditability before any change touches production.",
    outcome:
      "A working CLI (analyze, classify, recommend, simulate) with workload classification and an explainability layer in place, actively being extended into policy templates and richer simulation.",
    lessons:
      "Explainability can't be bolted onto a model after the fact — it has to be designed into the classification and recommendation pipeline from the start, or the reasoning behind a decision becomes unrecoverable.",
    githubLink: "https://github.com/swarnikaraj/infrapilot-ai",
  },
  {
    id: "vector-db-platform",
    title: "A Serverless Control Plane for Vector Databases",
    summary:
      "A managed, subscription-based vector database platform that provisions isolated instances on demand and hands back a connection string in seconds.",
    stack: ["Golang", "Kubernetes", "Docker", "GCP", "C++", "Python"],
    problem:
      "AI teams needed production vector search without operating the database themselves — provisioning, isolation, and lifecycle management had to disappear.",
    architecture:
      "A Kubernetes-based control plane orchestrates per-tenant vector database instances, with a Golang API layer handling provisioning, auth, and connection routing, and a Python/C++ data layer for the search engine itself.",
    challenges:
      "Multi-tenant isolation without over-provisioning compute, and keeping cold-start provisioning time low enough to feel instant.",
    tradeoffs:
      "Chose per-tenant instances over a shared multi-tenant index to guarantee isolation and predictable performance, accepting higher baseline infrastructure cost.",
    outcome:
      "Instant provisioning with a connection string handed back in seconds, and a platform designed to scale horizontally as tenant count grows.",
    lessons:
      "Isolation guarantees are worth paying for early — retrofitting them into a shared system later is far more expensive than the infrastructure cost of dedicated tenancy.",
    githubLink: "https://github.com/swarnikaraj/swarndb-sdk",
  },
  {
    id: "video-transcoder",
    title: "Event-Driven Video Transcoding at Scale",
    summary:
      "A media processing pipeline that converts uploaded video into multiple formats and resolutions without a single server sitting idle between jobs.",
    stack: ["Golang", "AWS Lambda", "AWS ECS", "Redis", "Docker", "Event-driven"],
    problem:
      "Transcoding is bursty and compute-heavy. Running dedicated servers around the clock wastes money; naive queuing under load causes cascading delays.",
    architecture:
      "Uploads trigger a Lambda function that enqueues jobs onto a Redis queue; ECS tasks scale out to consume the queue and publish progress over Redis Pub/Sub, decoupling ingestion from processing.",
    challenges:
      "Balancing cost against latency for large files, and ensuring failed transcodes retry without duplicating output or losing job state.",
    tradeoffs:
      "Used ECS over long-running Lambdas for the heavy transcoding step to avoid execution time limits, accepting slightly slower cold starts in exchange for unbounded job duration.",
    outcome:
      "A pipeline that scales compute to zero when idle and handles traffic spikes without manual intervention.",
    lessons:
      "Event-driven architecture only pays off if you design idempotency in from day one — retries are the rule, not the exception, at scale.",
    githubLink: "https://github.com/swarnikaraj/videotranscoder12",
  },
  {
    id: "deploy-platform",
    title: "A Self-Service Deployment Platform",
    summary:
      "A one-click deployment system for frontend applications, giving developers Vercel-style CI/CD without owning the underlying infrastructure.",
    stack: ["Node.js", "Next.js", "AWS ECS", "SQS", "Redis", "Docker", "WebSocket"],
    problem:
      "Small teams need continuous deployment but don't want to operate build servers, artifact storage, or rollout logic themselves.",
    architecture:
      "Git pushes trigger build jobs queued through SQS and executed on ECS; build logs stream to the client over WebSocket while Redis coordinates job state across workers.",
    challenges:
      "Streaming live build output reliably to the browser, and isolating untrusted user builds from the host environment.",
    tradeoffs:
      "Queued builds through SQS instead of direct dispatch to smooth traffic spikes, trading a small amount of latency for resilience under load.",
    outcome:
      "Consistent CI/CD with 99.9% uptime for deployments and real-time build visibility for developers.",
    lessons:
      "Developer experience is the product — the infrastructure only matters if the feedback loop for the developer stays fast and legible.",
    githubLink: "https://github.com/swarnikaraj/vercel-clone",
  },
  {
    id: "realtime-comms",
    title: "Real-Time Communication Infrastructure",
    summary:
      "Multi-user video infrastructure built on WebRTC, designed to hold up as participant count and network conditions get worse, not better.",
    stack: ["WebRTC", "Golang", "WebSocket", "Distributed Systems"],
    problem:
      "Peer-to-peer video breaks down past a handful of participants, and naive signaling servers become a single point of failure under load.",
    architecture:
      "A signaling layer over WebSocket coordinates peer negotiation while media routing is structured to minimize the fan-out cost as participants join a call.",
    challenges:
      "Handling NAT traversal and reconnect logic gracefully, and keeping signaling state consistent when clients drop without a clean disconnect.",
    tradeoffs:
      "Prioritized simpler mesh topology for smaller calls over a full SFU rollout, deferring the added operational complexity until scale required it.",
    outcome:
      "A stable multi-user calling experience that degrades predictably rather than catastrophically under poor network conditions.",
    lessons:
      "Real-time systems should be designed around the failure path first — the happy path is the easy 80%.",
    githubLink: "https://github.com/swarnikaraj/videocall",
  },
  {
    id: "gentuber",
    title: "GenTuber — AI Growth Tools for YouTube Creators",
    summary:
      "A live SaaS platform giving YouTube creators AI-powered analytics, SEO optimization, multilingual voiceovers, and competitor analysis — co-built and shipped to paying users.",
    stack: ["Next.js", "AI/LLM Integration", "Multilingual Pipelines", "SaaS Billing"],
    problem:
      "Creators lose growth to disconnected tooling — content ideation, SEO, voiceovers, and analytics each require separate paid tools, most of which don't support Indian and regional languages.",
    architecture:
      "A Next.js frontend backed by AI pipelines for script generation, SEO metadata, voiceover/dubbing, and competitor analysis, unified behind a single subscription product with tiered plans.",
    challenges:
      "Supporting multilingual generation (English, Hindi, Tamil, and more) across scripts, voiceovers, and dubbing reliably, while keeping the product priced competitively against larger, better-funded competitors.",
    tradeoffs:
      "Prioritized breadth of AI tooling (analyzer, script generator, dubbing, SEO) over depth in any single feature first, to give creators a single platform rather than another point solution.",
    outcome:
      "A shipped, subscription-based product live in production with real creators and testimonials, supporting 15+ languages for voiceovers and 50+ for dubbing.",
    lessons:
      "Shipping a real product to paying users surfaces different constraints than infrastructure work — pricing, localization, and creator trust matter as much as the AI pipeline itself.",
    liveLink: "https://www.gentuber.com/",
  },
];

// Engineering Philosophy — opinionated, not neutral.
export const philosophy = [
  {
    title: "Scalable software is a people problem before it's a systems problem",
    body:
      "Most systems don't fail at the architecture diagram — they fail because three teams built around different assumptions. I design interfaces and ownership boundaries before I design services.",
  },
  {
    title: "Kubernetes is not always the answer",
    body:
      "If a team can't operate what they run, orchestration complexity becomes a liability, not a capability. I reach for Kubernetes when the problem is genuinely distributed — not by default.",
  },
  {
    title: "Simplicity is a discipline, not a starting point",
    body:
      "Simple systems are the result of cutting things away under pressure, not the absence of effort. Every abstraction I add has to earn its place against the cost of understanding it.",
  },
  {
    title: "Infrastructure should empower developers, not gatekeep them",
    body:
      "A platform's job is to make the right thing the easy thing. If developers route around your platform, the platform — not the developer — has failed.",
  },
  {
    title: "Reliability is a feature you design for, not one you patch in",
    body:
      "High availability, retries, and graceful degradation are architectural decisions made at design time. Bolting them on after an outage is always more expensive.",
  },
];

// Open source — repositories, experiments, and templates.
export const openSourceRepos = [
  {
    name: "infrapilot-ai",
    description:
      "AI-assisted Kubernetes optimization control plane — workload classification, explainable recommendations, and pre-action simulation.",
    tags: ["Golang", "Kubernetes", "Prometheus"],
    link: "https://github.com/swarnikaraj/infrapilot-ai",
  },
  {
    name: "swarndb-sdk",
    description:
      "Python client SDK for SwarnDB, a high-performance vector database — connection pooling, a chainable query builder for dense, sparse, and tensor search, and DataFrame result conversion.",
    tags: ["Python", "Vector Database", "Thrift"],
    link: "https://github.com/swarnikaraj/swarndb-sdk",
  },
  {
    name: "videotranscoder12",
    description:
      "Event-driven video transcoding pipeline using AWS Lambda, ECS, and Redis for queueing and pub/sub coordination.",
    tags: ["Golang", "AWS", "Docker"],
    link: "https://github.com/swarnikaraj/videotranscoder12",
  },
  {
    name: "vercel-clone",
    description:
      "Self-service deployment platform for static frontends with queued builds and live log streaming.",
    tags: ["Node.js", "AWS ECS", "WebSocket"],
    link: "https://github.com/swarnikaraj/vercel-clone",
  },
  {
    name: "videocall",
    description:
      "Multi-user WebRTC video calling infrastructure with WebSocket-based signaling.",
    tags: ["WebRTC", "Golang", "WebSocket"],
    link: "https://github.com/swarnikaraj/videocall",
  },
  {
    name: "chatsphere",
    description:
      "Real-time chat platform with face-recognition auth and speech-to-text, built on AWS Rekognition.",
    tags: ["TypeScript", "AWS", "Redis"],
    link: "https://github.com/swarnikaraj/chatsphere",
  },
];

export const openSourceRoadmap = [
  "Infrastructure templates for platform teams standing up internal developer platforms",
  "A minimal Golang toolkit for control-plane style services",
  "Writeups extracted from private production systems, generalized into reusable patterns",
];

// Contact — what she is available for, not "let's connect".
export const availableFor = [
  {
    title: "Platform Consulting",
    description:
      "Advising teams on internal platform strategy, developer experience, and infrastructure roadmap.",
  },
  {
    title: "Architecture Reviews",
    description:
      "Second opinions on distributed systems, control plane design, and scalability tradeoffs before they become production incidents.",
  },
  {
    title: "Technical Mentorship",
    description:
      "Working with engineers moving from application development into platform and infrastructure engineering.",
  },
  {
    title: "Speaking",
    description:
      "Talks and panels on platform engineering, distributed systems, and AI infrastructure.",
  },
  {
    title: "Open Source Collaboration",
    description:
      "Contributing to or collaborating on infrastructure tooling, control planes, and developer platform projects.",
  },
  {
    title: "Startup Advisory",
    description:
      "Early-stage technical guidance for founders building platform or infrastructure-heavy products.",
  },
];

export const contactInfo = {
  email: "swarnikarajsingh@gmail.com",
  github: "https://github.com/swarnikaraj",
  linkedin: "https://www.linkedin.com/in/swarnnika/",
};

// Beyond Code — the 20%. Calm, human, unforced.
export const beyondCode = [
  {
    title: "Animal Rights",
    description:
      "I co-run Uddharini Foundation with a small team — rescuing animals in need, running ahimsa and veganism classes for schools, and working toward building a stray animal hospital.",
    links: [
      { label: "Uddharini Foundation", url: "https://www.uddharini.org/" },
      { label: "Watch our precious moments", url: "https://www.youtube.com/@FurryMitra" },
    ],
  },
  {
    title: "Veganism",
    description:
      "Veganism isn't a diet — it's a rejection of animal exploitation in food, clothing, and every other form. A daily practice of that belief, not a trend.",
  },
 
  {
    title: "Generative Math Art",
    description:
      "Algorithmic art built from trigonometric and geometric equations, not photographs — collected as Magic of CosTheta.",
    links: [{ label: "View the collection", url: "https://opensea.io/collection/magic-of-costheta" }],
    image: "/math-art.png",
  },
   {
    title: "Fitness",
    description: "Strength training as a discipline — consistency over intensity.",
  },
  {
    title: "Poetry",
    description:
      "Occasional verses and quiet thoughts, shared without an audience in mind.",
    links: [{ label: "Read on Instagram", url: "https://www.instagram.com/swarnika.insanevegan" }],
  },
];


