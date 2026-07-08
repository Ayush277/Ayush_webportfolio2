export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
}

export const blogsData: Blog[] = [
  {
    title: "Time-to-Stress Prediction: A Dual-Head BiLSTM with SHAP Temporal Attention",
    date: "2026",
    claps: 128,
    tags: ["Research", "Deep Learning", "SHAP"],
    link: "https://github.com/Ayush277",
    isExternal: true,
  },
  {
    title: "From 78% to 97%: Lessons from Modeling 100K+ Real Business Records",
    date: "Aug 2025",
    claps: 96,
    tags: ["Machine Learning", "Feature Engineering"],
    link: "https://github.com/Ayush277",
    isExternal: true,
  },
];
