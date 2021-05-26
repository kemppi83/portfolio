import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Juha Kemppinen | Fullstack JavaScript developer and mechanical and automation engineer', // e.g: 'Name | Developer'
  lang: 'en, fr, fi, se', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Juha Kemppinen',
  subtitle: "I'm a fullstack JavaScript developer and a mechanical and automation engineer",
  cta: 'More info',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I am a precision machine designer with a long international career and four spoken languages. In engineering, programming and scripting were tools. One day I noticed that I liked the tools more than engineering itself and decided to become a developer. And that's what I am now! A fullstack JavaScript developer.",
  paragraphTwo:
    'My Web developer journey started as a hobby, through self learning. Then "the world\'s toughest bootcamp" at the School of applied technology </salt> refined me to a professional developer. This site concentrates on my new pursuit, you can read more about my engineering career on my resume.',
  paragraphThree:
    "When I'm not programming, you can find guarding floorball goals in and around Gothenburg or walking around the city during pandemics. I also enjoy spending time in nature.",
  resume: 'https://kemppi83.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'eatlocal.jpg',
    title: 'EatLocal',
    info: "My mob's two-week graduation project at the </salt> bootcamp. We wanted to bring justice to Swedish farmers by creating a food box subscription platform where all ingredients come from local farms.",
    info2:
      'EatLocal is a fully functional platform based on the MERN stack and utilising external services Mapbox, Stripe and Okta.',
    url: 'https://eatlocal.netlify.app/',
    repo: 'https://github.com/kemppi83/EatLocal', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Send me an email or contact through social media if you would like to work with me!',
  btn: '',
  email: 'kemppi83@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/juhakemppinen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kemppi83',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
