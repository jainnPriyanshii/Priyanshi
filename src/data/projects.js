export const projects = [
  {
    id: "mayax",
    title: "MayaX",
    category: "AI VISION SYSTEM",
    subtitle: "AI-powered interior design ecosystem",
    description: "A sophisticated platform leveraging real-time computer vision and generative models to interpret layout data, rendering custom interior designs dynamically. Bridges high-fidelity architectural models with consumer-grade mobile devices.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Flask", "PyTorch", "OpenCV", "Expo"],
    features: [
      "Real-time spatial interpretation using mobile camera feeds",
      "Automated furniture semantic layout generation",
      "Edge-based OpenCV filtering for structural contour mapping",
      "Interactive 3D preview engine for custom item placement"
    ],
    github: "https://github.com/priyanshijj/mayax",
    demo: "https://mayax.dev"
  },
  {
  id: "moodtune",
  title: "MoodTune",
  category: "AI MUSIC",
  subtitle: "Emotion-aware music recommendation platform",
  description: "An AI-powered music discovery platform that analyzes facial expressions, text sentiment, and user emotions to generate personalized playlists. Designed to enhance the listening experience through real-time mood detection and intelligent recommendations.",
  image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  technologies: ["React Native", "Flask", "Python", "OpenCV", "DeepFace", "Jio savaan API"],
  features: [
    "Real-time emotion detection using facial expression analysis",
    "Text-based mood prediction through sentiment analysis",
    "Personalized song recommendations based on detected emotions",
    "Integrated music playback and playlist generation",
    "Interactive chatbot for mood-based music suggestions"
  ],
  github: "https://github.com/priyanshijj/moodtune",
  demo: "https://moodtune.dev"
},
  {
    id: "walletwhiz",
    title: "WalletWhiz",
    category: "PERSONAL FINANCE",
    subtitle: "Personal finance management application",
    description: "A clean, tactical personal wealth dashboard built to analyze spending patterns. Features predictive budget modeling, multi-account ledger synchronization, and secure automated transaction auditing.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native","Firebase","FireStore"],
    features: [
      "Interactive charts and granular transaction categorizations",
      "Predictive budgeting using historical spending models",
      "Encrypted Plaid integration for secure sync across banks",
      "Automated CSV statement parser and anomaly detection"
    ],
    github: "https://github.com/priyanshijj/walletwhiz",
    demo: "https://walletwhiz.dev"
  },
 
  {
    id: "aipdfchatbot",
    title: "AI PDF Chatbot",
    category: "GENERATIVE AI & RAG",
    subtitle: "RAG-based chatbot using PDFs and vector search",
    description: "An enterprise-grade document intelligence system that reads, indexes, and queries large PDF archives. Implements retrieval-augmented generation (RAG) to cite pages and documents while eliminating hallucinations.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React.js", "LangChain", "OpenAI APIs", "ChromaDB", "Python"],
    features: [
      "Granular document parsing and intelligent chunk splitters",
      "Vector embedding pipelines with semantic similarity search",
      "Context-aware querying with zero-shot prompting strategies",
      "Source verification showing highlighted pages and text snippets"
    ],
    github: "https://github.com/priyanshijj/ai-pdf-chatbot",
    demo: "https://pdfchat.priyanshi.dev"
  }
];
