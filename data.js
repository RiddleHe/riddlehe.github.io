// Edit these arrays to update the site. Order = display order (2x2 grid).

const REPOS = [
  {
    name: "nanochat",
    owner: "RiddleHe",
    stars: 52,
    url: "https://github.com/RiddleHe/nanochat",
    bullets: [
      "Hackable pretraining stack from karpathy/nanochat with easy architecture definition and FLOP-controlled ablations",
      "Mirrored RL stack with clean objective definition and production-grade vLLM inference serving",
    ],
  },
  {
    name: "spider",
    owner: "collinear-ai",
    stars: 105,
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
    status: "Under review",
    cited: 0,
    thumb: "assets/papers/valuebank.png",
    url: "https://github.com/RiddleHe/nanochat/blob/master/papers/bank_of_values.pdf",
    bullets: [
      "Deep layers benefit from context-free value vectors that preserve original token information",
      "“Bank of Values” learns a value table for the last third of layers — no V cache, beats standard attention",
    ],
  },
  {
    title: "High-fidelity Simulations of Human Traits for Testing Agents",
    venue: "ACL 2026",
    status: "Oral",
    cited: 8,
    thumb: "assets/papers/impatient.png",
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
    cited: 5,
    thumb: "assets/papers/turnabout.png",
    url: "https://arxiv.org/abs/2505.15712",
    bullets: [
      "A deductive-reasoning benchmark built from detective games, testing evidence-based contradiction finding",
    ],
  },
  {
    title: "Commonsense-T2I: Can Text-to-Image Models Understand Commonsense?",
    venue: "COLM 2024",
    status: "",
    cited: 45,
    thumb: "assets/papers/commonsense.png",
    url: "https://arxiv.org/abs/2406.07546",
    bullets: [
      "A challenge benchmark probing whether text-to-image models understand everyday commonsense",
    ],
  },
];

// Profile-level header chips
const PROFILE = {
  email: "muyuhe0327@gmail.com",
  x: "https://x.com/HeMuyu0327",
  github: "https://github.com/RiddleHe",
  githubStars: 373,
  scholar: "https://scholar.google.com/citations?hl=en&authuser=1&user=__oJ4oQAAAAJ",
  citations: 60,
  resume: "resume.pdf",
};
