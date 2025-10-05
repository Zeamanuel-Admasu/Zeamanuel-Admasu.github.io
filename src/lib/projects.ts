export type Project = {
  title: string;
  desc: string;
  tags: readonly string[];
  href: string;
  thumbnail?: string; // /public path
};

export const projects: readonly Project[] = [
  {
    title: "SocialSpark — AI Content Toolkit (A2SV Gen 6, Runner-up)",
    desc:
      "An Amharic and English toolkit that helps small businesses create Instagram/TikTok captions, images, and short videos, then schedule posts safely. I worked on the Mobile flows and delivery pipeline. Built in 3 weeks and used during the final demo to publish 100+ test posts smoothly.",
    tags: ["GenAI", "Flutter", "Mobile", "Amharic", "Scheduling"],
    href: "https://lnkd.in/e3Hb-2qY",
    // thumbnail: "/projects/socialspark.jpg",
  },
  {
    title: "Restaurant Table Management Website",
    desc:
      "A full reservation system where guests book tables and admins manage capacity, holds, and confirmations. It includes email reminders, basic analytics, and role-based access. The search and booking experience feels instant and comfortably supports a busy dinner rush.",
    tags: ["NestJS", "JWT", "RBAC", "Spring"],
    href: "#",
    // thumbnail: "/projects/restaurant.jpg",
  },
  {
    title: "Cultural Habesha Restaurant — Mobile App",
    desc:
      "A Flutter app for table reservations and food ordering backed by a clean NestJS API. I designed BLoC state, error handling, and forms so the app feels stable and quick, even on mid-range phones. Internal testing covered 1k+ sessions with a smooth checkout and order-tracking flow.",
    tags: ["Flutter", "NestJS", "BLoC"],
    href: "#",
    // thumbnail: "/projects/habesha.jpg",
  },
  {
    title: "ML Mini-Projects",
    desc:
      "A small collection of practical ML exercises: predicting student grades, classifying edible vs. poisonous mushrooms, and clustering Titanic passengers. Each project includes data cleaning, feature prep, a simple baseline, and a short comparison of models and results.",
    tags: ["Python", "scikit-learn", "ML"],
    href: "#",
    // thumbnail: "/projects/ml.jpg",
  },
  {
    title: "Zebidar Donation App",
    desc:
      "A donation platform for an NGO with a Go (Gin) + MongoDB backend and a Flutter client. It integrates Chapa payments, verifies webhooks, and keeps a clean donor ledger. In staging, it processed a few hundred test donations end-to-end to validate the flow and receipts.",
    tags: ["Go", "Gin", "MongoDB", "Flutter", "Chapa"],
    href: "#",
    // thumbnail: "/projects/zebidar.jpg",
  },
 {
  title: "Amharic OCR — Detection & Recognition",
  desc:
    "An end-to-end OCR pipeline focused on Amharic. I labeled page images in CVAT, trained a YOLO detector to find text regions, and added a recognizer to read the text. The system outputs readable lines (93% correct) after simple post-processing, with an average character error 7% on the test set.",
  tags: ["OCR", "YOLOv8", "Computer Vision", "Amharic"],
  href: "#",
}

] as const;
