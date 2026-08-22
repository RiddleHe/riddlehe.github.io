// Edit these arrays to update the site. Order = display order (2x2 grid).

const REPOS = [
  {
    name: "nanochat",
    owner: "RiddleHe",
    stars: 58,
    url: "https://github.com/RiddleHe/nanochat",
    bullets: [
      "Hackable pretraining stack from karpathy/nanochat with easy architecture definition and FLOP-controlled ablations",
      "Mirrored RL stack with clean objective definition and production-grade vLLM inference serving",
    ],
  },
  {
    name: "spider",
    owner: "collinear-ai",
    stars: 109,
    url: "https://github.com/collinear-ai/spider",
    bullets: [
      "Cross-tokenizer alignment for on-policy distillation across any teacher–student pair",
      "Token-in-token-out protocol for multi-turn rollouts and agentic tool use",
    ],
  },
  {
    name: "llm-interp",
    owner: "RiddleHe",
    stars: 91,
    url: "https://github.com/RiddleHe/llm-interp",
    bullets: [
      "Reproducible interpretability scripts for model-circuit research",
      "Findings on attention sinks + an open reproduction of LLM decode indeterminism",
    ],
  },
  {
    name: "gpt-oss-alignment",
    owner: "RiddleHe",
    stars: 125,
    url: "https://github.com/RiddleHe/gpt-oss-alignment",
    bullets: [
      "Jailbreak via chat-template removal, exposing the fragility of post-trained alignment",
      "Trait-steering technique + an end-to-end sparse-autoencoder training framework",
    ],
  },
];

const PAPERS = [
  {
    title: "Do Value Vectors in Deep Layers Need Context from the Residual Stream?",
    venue: "EMNLP 2026",
    status: "",
    cited: 0,
    thumb: "assets/papers/valuebank.png?v=20260821-fig1",
    url: "https://github.com/RiddleHe/nanochat/blob/master/papers/bank_of_values.pdf",
    bullets: [
      "Deep layers benefit from context-free value vectors that preserve original token information",
      "“Bank of Values” learns a value table for the last third of layers, with no V cache, beating standard attention",
    ],
  },
  {
    title: "YC-Bench: Benchmarking AI Agents for Long-Term Planning and Consistent Execution",
    venue: "COLM 2026",
    status: "",
    cited: 4,
    thumb: "assets/papers/yc-bench.png?v=20260821-fig1",
    url: "https://arxiv.org/abs/2604.01212",
    bullets: [
      "A long-horizon benchmark where agents run a simulated startup over one year and hundreds of turns",
      "Tests planning under uncertainty, delayed feedback, persistent memory, and adaptation to compounding mistakes",
    ],
  },
  {
    title: "High-fidelity Simulations of Human Traits for Testing Agents",
    venue: "ACL 2026",
    status: "Oral",
    cited: 9,
    thumb: "assets/papers/impatient.png?v=20260821-fig1",
    url: "https://arxiv.org/abs/2510.04491",
    bullets: [
      "Training-free, fine-grained control of LLM personality via per-layer activation steering",
      "Activation-controlled human-simulator eval framework outperforming LoRA, SFT, and prompting",
    ],
  },
  {
    title: "Evaluating Deductive Reasoning via Detective Games",
    venue: "EMNLP 2025",
    status: "",
    cited: 8,
    thumb: "assets/papers/turnabout.png?v=20260821-fig1",
    url: "https://arxiv.org/abs/2505.15712",
    bullets: [
      "A deductive-reasoning benchmark built from detective games, testing evidence-based contradiction finding",
    ],
  },
  {
    title: "Commonsense-T2I: Can Text-to-Image Models Understand Commonsense?",
    venue: "COLM 2024",
    status: "",
    cited: 51,
    thumb: "assets/papers/commonsense.png?v=20260821-fig1",
    url: "https://arxiv.org/abs/2406.07546",
    bullets: [
      "A challenge benchmark probing whether text-to-image models understand everyday commonsense",
    ],
  },
];

// Blog posts. Order = display order (newest first).
const POSTS = [
  {
    title: "Reducing the variance in KL estimator",
    date: "2026-08-20",
    slug: "blog/reducing-kl-estimator-variance.html",
    blurb: "A derivation of k3 estimator to show why the \"lower variance\" claim only holds true at very special conditions",
  },
  {
    title: "Gated Transformer",
    date: "2026-08-14",
    slug: "blog/gated-transformer.html",
    blurb: "An ongoing chronicle of the motivation, experiments, and finding of a transformer model that can scale each block output by a learned gate value.",
  },
  {
    title: "Computing the Gradient of the KL Penalty",
    date: "2026-06-04",
    slug: "blog/kl-gradient-estimators.html",
    blurb: "Why the k1 and k3 KL estimators behave so differently under differentiation, and how to correctly estimate the gradient of a sequence-level KL penalty in RL training.",
  },
];

// Profile-level header chips
const PROFILE = {
  email: "muyuhe0327@gmail.com",
  x: "https://x.com/HeMuyu0327",
  github: "https://github.com/RiddleHe",
  githubStars: 383,
  scholar: "https://scholar.google.com/citations?hl=en&authuser=1&user=__oJ4oQAAAAJ",
  citations: 76,
  resume: "resume.pdf",
};
