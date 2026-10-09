// Optional fields: description, tags, github, category, url. Images live in /public.
const projects = [
  { name: "Awesometodos", letter: "A", image: "/awesometodos1.png", gradient: "linear-gradient(135deg,#6C63FF,#00E5FF)" },
  { name: "Classee", letter: "C", image: "/classe1.jpg", gradient: "linear-gradient(135deg,#10b981,#0e7490)" },
  { name: "Web Portfolio", letter: "W", image: "/webprofile1.png", gradient: "linear-gradient(135deg,#FF4D9D,#6C63FF)" },
  {
    name: "SkillBridge",
    letter: "S",
    image: "/skillbridge.png",
    gradient: "linear-gradient(135deg,#1489ef,#06183f)",
    description: "A learning platform with dedicated experiences for students and administrators.",
    tags: ["Education", "Web App"],
    url: "https://skillbridgeversion1.vercel.app/",
  },
];
export default projects;
