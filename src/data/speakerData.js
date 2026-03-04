import keystone1 from "../assets/speakers/speaker1.jpg";
import keystone2 from "../assets/speakers/speaker2.jpg";

// Panelist headshots (from /src/assets/Panelists)
import markFedyk from "../assets/Panelists/Mark Fedyk.jpeg";
import kevinLanzo from "../assets/Panelists/Kevin Lanzo .jpeg";
import brianPepin from "../assets/headshots/Brian Pepin_Rune Labs headshot.png";
import gaojinHuang from "../assets/headshots/Gaojin Huang.png";
import gregSimpson from "../assets/headshots/Greg Simpson headshot 2026.jpeg";
import jingyiXie from "../assets/headshots/Jingyi Xie.png";
import narayanSankaran from "../assets/headshots/Narayan Sankaran-24.10.18-19-VNB16540_cropped.jpg";
import architGupta from "../assets/headshots/archit.png";
import keithMurphy from "../assets/headshots/keith murphy.png";
import matiasSerebrinsky from "../assets/headshots/matias.jpg";
import michaelSilver from "../assets/headshots/michael_silver_april_2017.jpg";
import morganHough from "../assets/headshots/morgan hough.png";
import preeyaKhanna from "../assets/headshots/preeya khanna.jpg";
import sumaAnand from "../assets/headshots/suma Anand.png";
import valerieBlack from "../assets/headshots/vblack-headshot.png";
import allenCantwell from "../assets/headshots/0eb7a4cb4cd69e7a23940d4224f81a06.png"



// (Optional) if you want Michael Silver image too, add the file and import it here.
// import michaelSilver from "../assets/Panelists/Michael Silver.jpeg";

export const keystoneSpeakers = [
  {
    name: "Daniel Almeida Filho",
    title: "Secretary, Technological Development & Innovation (Brazil MCTI)",
    img: keystone1,
  },
  {
    name: "Josef Parvizi",
    title:
      "Stanford Neurology Professor; Ceribell Co-founder; Epilepsy Program Director",
    img: keystone2,
  },
];

export const Innovation_Future_Possibilities_Panelists = [
  {
    name: "Brian Pepin",
    title: "Founder & President, Rune Labs; ex-Verily/Google X neurotech lead",
    org: "Rune Labs",
    tags: ["Precision neurology", "Parkinson's care"],
    img: brianPepin,
  },
  {
    name: "Greg Simpson",
    title: "Founder & CEO, Think-Now; patented ADHD therapeutic method",
    org: "Think-Now",
    tags: ["Cognitive neuroscience", "ADHD therapy"],
    img: gregSimpson,
  },
  {
    name: "Keith Murphy",
    title: "CTO & Co-founder, Attune Neurosciences; ultrasound neuromodulation",
    org: "Attune Neurosciences",
    tags: ["Focused ultrasound", "Neuromodulation"],
    img: keithMurphy,
  },
  {
    name: "Preeya Khanna",
    title:
      "UC Berkeley Bioengineering Professor; neural interfaces for movement rehab",
    org: "UC Berkeley",
    tags: ["Neural interfaces", "Neurorehabilitation"],
    img: preeyaKhanna,
  },
  {
    name: "Brooklynn Watson",
    title:
      "AULI.TECH",
    tags: [],
    img: "",
  },
];

export const Innovation_Constraints_Panelists = [
  {
    name: "Valerie Black",
    title: "UCSF postdoc; neuroethics of AI, mental health, and neurotech",
    org: "UCSF",
    tags: ["Neuroethics", "Disability studies"],
    img: valerieBlack,
  },
  {
    name: "Narayan Sankaran",
    title: "USF Neuroscience Professor; neuroethics and BCI public engagement",
    org: "University of San Francisco",
    tags: ["Music/speech perception", "Neuroethics"],
    img: narayanSankaran,
  },
  {
    name: "Mark Fedyk",
    title: "UC Davis bioethics faculty; ethics integration in clinical research",
    org: "UC Davis",
    tags: ["Bioethics", "Moral psychology"],
    img: markFedyk,
  },
];

export const Academic_Workshop_Panelists = [
  {
    name: "Gaojian Huang",
    title: "SJSU ISE Professor; BAT Lab Director; human-AI and assistive tech",
    org: "San José State University",
    tags: ["Human-AI interaction", "Accessibility"],
    img: gaojinHuang,
  },
  {
    name: "Jingyi Xie",
    title: "SJSU ISE Professor; human-centered AI for blind/low-vision access",
    org: "San José State University",
    tags: ["Accessibility", "Human-centered AI"],
    img: jingyiXie,
  },
  {
    name: "Michael Silver",
    title: "UC Berkeley Professor; neuroscience and vision research",
    org: "UC Berkeley",
    tags: ["Neuroscience", "Vision"],
    img: michaelSilver, // add image when available
    // img: michaelSilver,
  },
];

export const Entrepreneurship_Workshop_Panelists = [
  {
    name: "Greg Simpson",
    title: "Founder & CEO, Think-Now; translating attention science to products",
    org: "Think-Now",
    tags: ["Entrepreneurship", "Attention science"],
    img: gregSimpson,
  },
  {
    name: "Kevin Lanzo",
    title: "Industry leader and startup operator in neurotech commercialization",
    org: "",
    tags: ["Commercialization", "Go-to-market"],
    img: kevinLanzo,
  },
  {
    name: "Matias Serebrinsky",
    title: "Entrepreneur and product leader in neurotechnology and digital health",
    org: "",
    tags: ["Neurotech", "Product"],
    img: matiasSerebrinsky,
  },
  {
    name: "Suma Anand",
    title: "Ceribell Senior ML Engineer; EEG AI tools; Berkeley PhD",
    org: "Ceribell",
    tags: ["Machine learning", "EEG"],
    img: sumaAnand,
  },
  {
    name: "Allen Cantwell",
    title:
      "AULI.TECH",
    tags: [],
    img: allenCantwell,
  },
];

export const BCI_competition_judges = [
  {
    name: "Josef Parvizi",
    title:
      "Stanford Neurology Professor; Ceribell Co-founder; Epilepsy Program Director",
    org: "Stanford University / Ceribell",
    tags: ["Clinical neurotech", "Epilepsy"],
    img: keystone2,
  },
  {
    name: "Morgan Hough",
    title:
      "Neurotech researcher and engineer; brain-computer interface applications",
    org: "",
    tags: ["BCI", "Neuroengineering"],
    img: morganHough,
  },
  {
    name: "Preeya Khanna",
    title:
      "UC Berkeley Bioengineering Professor; neural interfaces for movement rehab",
    org: "UC Berkeley",
    tags: ["Neural interfaces", "Motor control"],
    img: preeyaKhanna,
  },
  {
    name: "Keith Murphy",
    title: "CTO & Co-founder, Attune Neurosciences; ultrasound neuromodulation",
    org: "Attune Neurosciences",
    tags: ["Focused ultrasound", "Neuromodulation"],
    img: keithMurphy,
  },
  {
    name: "Archit Gupta",
    title: "Ceribell Director, ML & Data Science; real-time EEG diagnostics",
    org: "Ceribell",
    tags: ["Deep learning", "EEG"],
    img: architGupta,
  },
];
