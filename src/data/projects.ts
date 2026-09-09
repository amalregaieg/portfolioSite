export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  focusAreas: string[];
  technicalChallenges: string[];
  githubUrl?: string;
  demoUrl?: string;
  architectureHighlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "healthcare-platform",
    name: "Healthcare Professionals Management Platform",
    category: "Healthcare & Business Platform",
    description: "Backend platform for managing healthcare professionals and healthcare related workflows.",
    context: "A specialized healthcare platform requiring high data security, granular access permissions, and strict audit logging for managing healthcare professional credentials, scheduling, and clinical workflows.",
    problem: "Existing workflows relied on fragmented legacy systems with weak role isolation, slow compliance validation, and inefficient data synchronization across medical provider directories.",
    solution: "Designed and implemented a decoupled, API-first backend architecture using Symfony 7 and API Platform. Engineered secure JWT authentication, granular security voters for sensitive clinical resources, and standardized REST endpoints.",
    role: "Tech Lead & Lead Backend Architect",
    technologies: ["PHP 8", "Symfony", "API Platform", "MySQL", "REST API", "JWT", "Mercure", "Doctrine ORM"],
    focusAreas: [
      "API Architecture",
      "Business Logic Isolation",
      "Authentication & Authorization",
      "Data Governance & Audit Trails",
      "Backend Security"
    ],
    technicalChallenges: [
      "Implementing fine-grained, dynamic access control rules (Security Voters) for multi-tenant healthcare organization boundaries.",
      "Optimizing complex business logic validation rules during practitioner onboarding while maintaining fast API response times.",
      "Designing immutable audit trail entity listeners to log sensitive resource modifications without blocking transaction execution."
    ],
    githubUrl: "https://github.com/amalregaieg",
    architectureHighlights: [
      "API Platform custom State Providers and Processors for domain-driven command handling.",
      "Symfony Security Voter chain for strict role-based and attribute-based access control.",
      "MySQL normalized schema with strict FK constraints and optimized Doctrine mappings."
    ]
  },
  {
    id: "rpps-referential-platform",
    name: "Referential / RPPS Platform",
    category: "High-Performance Data API",
    description: "Backend system for managing and exposing professional and administrative referential data through APIs.",
    context: "An administrative referential platform exposing millions of practitioner records (RPPS data) to external healthcare applications and internal services via high-throughput REST APIs.",
    problem: "Massive dataset size led to table locks, slow full-text search operations, high API latency, and degraded system stability under concurrent external API requests.",
    solution: "Architected a high-performance read-optimized database layer and API service using Symfony and MySQL. Introduced composite B-Tree indexes, payload pagination, custom DTO serialization, and HTTP query caching.",
    role: "Senior PHP Backend Architect",
    technologies: ["PHP 8", "Symfony", "MySQL", "PostgreSQL", "REST API", "API Platform", "Doctrine ORM", "SQL Optimization"],
    focusAreas: [
      "Large Datasets Management",
      "API Performance & Throughput",
      "Search & Index Optimization",
      "Data Modeling & Schema Design",
      "SQL Query Tuning"
    ],
    technicalChallenges: [
      "Handling lightning-fast filtering and multi-criteria searches over datasets exceeding millions of records without table scans.",
      "Eliminating Doctrine ORM object creation overhead on massive read operations by implementing raw SQL Native Queries and DTO Instantiators.",
      "Implementing efficient bulk import and delta synchronization background tasks for daily administrative update feeds."
    ],
    githubUrl: "https://github.com/amalregaieg",
    architectureHighlights: [
      "Optimized MySQL composite indexes covering high-frequency search vectors.",
      "Custom HTTP Cache-Control and ETag validation middleware reducing DB load by 60%.",
      "Decoupled batch import pipeline processing data streams using PHP memory management best practices."
    ]
  },
  {
    id: "stripe-payment-integration",
    name: "Payment / Stripe Integration",
    category: "Financial Integrations & Async Queues",
    description: "Backend payment integration using Stripe APIs and webhooks.",
    context: "An enterprise platform requiring automated subscription billing, payment intent processing, tier upgrades, and automated invoice generation with zero room for transaction inconsistency.",
    problem: "Handling asynchronous payment status changes, network retries, duplicate webhook deliveries, and network latency without blocking user HTTP requests or corrupting account states.",
    solution: "Designed a resilient payment processing subsystem powered by Symfony Messenger. Built an idempotent webhook handler pipeline that validates cryptographic signatures, queues event processing asynchronously, and maintains a transaction event store.",
    role: "Tech Lead & Integration Architect",
    technologies: ["PHP 8", "Symfony", "Stripe API", "REST API", "Webhooks", "Mercure", "MySQL", "Doctrine Transactions"],
    focusAreas: [
      "Payment Processing",
      "Idempotent Webhook Handling",
      "Asynchronous Queue Architecture",
      "Error Handling & Retries",
      "Financial Transaction Security"
    ],
    technicalChallenges: [
      "Ensuring strict webhook idempotency to prevent duplicate subscription charges or double account provisioning upon Stripe retry events.",
      "Managing database lock concurrency during high-frequency subscription status transitions.",
      "Architecting fail-safe retry policies with exponential backoff and dead-letter queues using Symfony Messenger worker pools."
    ],
    githubUrl: "https://github.com/amalregaieg",
    architectureHighlights: [
      "Symfony Messenger async transport with Doctrine-backed queue and failure transport queues.",
      "Cryptographic webhook signature verification and strict replay attack prevention.",
      "Transactional DB wrappers ensuring atomicity between payment state changes and user quota updates."
    ]
  }
];
