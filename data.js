// Edit these two arrays to update the site. Order = display order.

const REPOS = [
  {
    name: "gpt-oss-alignment",
    owner: "RiddleHe",
    desc: "A collection of interpretability techniques to control and align GPT-OSS.",
    stars: 125,
    lang: "Jupyter Notebook",
    url: "https://github.com/RiddleHe/gpt-oss-alignment",
  },
  {
    name: "spider",
    owner: "collinear-ai",
    desc: "Streamline on-policy / off-policy distillation workflows in a few lines of code.",
    stars: 105,
    lang: "Python",
    url: "https://github.com/collinear-ai/spider",
  },
  {
    name: "llm-interp",
    owner: "RiddleHe",
    desc: "Lightweight interpretability scripts to understand how LLMs think.",
    stars: 91,
    lang: "Python",
    url: "https://github.com/RiddleHe/llm-interp",
  },
  {
    name: "nanochat",
    owner: "RiddleHe",
    desc: "The best ChatGPT that $100 can buy.",
    stars: 52,
    lang: "Python",
    url: "https://github.com/RiddleHe/nanochat",
  },
];

const PAPERS = [
  {
    title: "Do Value Vectors in Deep Layers Need Context from the Residual Stream?",
    venue: "EMNLP 2026",
    status: "Under review",
    thumb: "assets/papers/valuebank.png",
    url: "https://openreview.net/forum?id=YoQ0VK3JnP",
  },
  {
    title: "Impatient Users Confuse AI Agents: High-fidelity Simulations of Human Traits for Testing Agents",
    venue: "ACL 2026",
    status: "Oral",
    thumb: "assets/papers/impatient.png",
    url: "https://arxiv.org/abs/2510.04491",
  },
  {
    title: "Evaluating Deductive Reasoning via Detective Games",
    venue: "EMNLP 2025",
    status: "",
    thumb: "assets/papers/turnabout.png",
    url: "https://arxiv.org/abs/2505.15712",
  },
  {
    title: "Commonsense-T2I: Can Text-to-Image Generation Models Understand Commonsense?",
    venue: "COLM 2024",
    status: "",
    thumb: "assets/papers/commonsense.png",
    url: "https://arxiv.org/abs/2406.07546",
  },
];

// Language dot colors (GitHub-style)
const LANG_COLORS = {
  "Python": "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  "JavaScript": "#f1e05a",
  "TypeScript": "#3178c6",
};
