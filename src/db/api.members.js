import pavel from '../assets/images/pavel.jpg';
import valeriy from '../assets/images/valeriy.png';
import luda from '../assets/images/luda.jpg';
import dmitry from '../assets/images/dmitry.jpg';
import andrey from '../assets/images/andrey.jpg';
import yuriy from '../assets/images/yuriy.jpg';

const colors = {
  html: '#fad390',
  css: '#fa983a',
  bootstrap: '#e55039',
  javascript: '#1e3799',
  react: '#4a69bd',
  node: '#60a3bc',
  php: '#38ada9',
  webpack: '#b71540',
  git: '#e58e26',
};

const members = [
  {
    _id: '67rdca3eeb7f6fgeed471818',
    firstName: 'Pavel',
    lastName: 'Koryakin',
    dateOfBirth: '1966-01-08',
    photo: pavel,
    about:
      'I worked in sales for almost 30 years, but became interested in e-commerce and unexpectedly began to master JavaScript. This activity fascinated me to such an extent that I gave up everything and decided to become a good web developer.',
    technologies: {
      html: { name: 'HTML', level: '80', color: colors.html },
      css: { name: 'CSS', level: '75', color: colors.css },
      javascript: { name: 'JavaScript', level: '70', color: colors.javascript },
      react: { name: 'React', level: '50', color: colors.react },
      webpack: { name: 'Webpack', level: '30', color: colors.webpack },
      git: { name: 'GIT', level: '60', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/pavel_koryakin',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      components: [
        'Project structure',
        'Routing',
        'Favourites Page',
        'Card',
        'MemberCard',
      ],
    },
    badge: { name: 'quick eye', color: 'danger', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    firstName: 'Valeriy',
    lastName: 'Harlamov',
    dateOfBirth: '1966-11-05',
    photo: valeriy,
    about:
      'Fullstack publishing specialist, beginner javascript programmer. Favorite entertainment — programming, mathematics, philosophy.',
    technologies: {
      html: { name: 'HTML', level: '90', color: colors.html },
      css: { name: 'CSS', level: '60', color: colors.css },
      bootstrap: { name: 'Bootstrap', level: '20', color: colors.bootstrap },
      javascript: { name: 'JavaScript', level: '70', color: colors.javascript },
      react: { name: 'React', level: '50', color: colors.react },
      git: { name: 'GIT', level: '60', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Valera5454',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      components: ['Navbar', 'Page 404'],
    },
    badge: { name: 'sad sorcerer', color: 'secondary', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    firstName: 'Liudmyla',
    lastName: 'Duvivier',
    dateOfBirth: '1974-07-19',
    photo: luda,
    about:
      'Front end software developer. Creative, communicative and able to quickly problem solve persone.',
    technologies: {
      html: { name: 'HTML', level: '90', color: colors.html },
      css: { name: 'CSS', level: '90', color: colors.css },
      javascript: { name: 'JavaScript', level: '90', color: colors.javascript },
      react: { name: 'React', level: '90', color: colors.react },
      php: { name: 'PHP', level: '90', color: colors.php },
      git: { name: 'GIT', level: '90', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/ludmyladev',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      components: ['Badge', 'Button'],
    },
    badge: { name: 'team soul', color: 'warning', textColor: true },
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    firstName: 'Dmitry',
    lastName: 'Lavrov',
    dateOfBirth: '1965-11-23',
    photo: dmitry,
    about:
      'At school, when I was little, they asked me who I wanted to become when I grew up. I said I wanted to be an archaeologist.To the question "why?", replied that I like to find something ancient, buried in the ground.',
    technologies: {
      html: { name: 'HTML', level: '50', color: colors.html },
      css: { name: 'CSS', level: '30', color: colors.css },
      javascript: { name: 'JavaScript', level: '60', color: colors.javascript },
      react: { name: 'React', level: '40', color: colors.react },
      git: { name: 'GIT', level: '50', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Dmi_Lavrov',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      components: ['Progress', 'About Page', 'Contacts Page'],
    },
    badge: { name: 'agile badger', color: 'success', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    firstName: 'Andrey',
    lastName: 'Rybnikov',
    dateOfBirth: '1966-02-18',
    photo: andrey,
    about: 'I like to set tasks and solve them.',
    technologies: {
      html: { name: 'HTML', level: '90', color: colors.html },
      css: { name: 'CSS', level: '90', color: colors.css },
      javascript: { name: 'JavaScript', level: '60', color: colors.javascript },
      react: { name: 'React', level: '40', color: colors.react },
      php: { name: 'PHP', level: '40', color: colors.php },
      git: { name: 'GIT', level: '10', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Egolege',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      components: ['Slider', 'Footer', 'Header', 'MemberCard', 'Styles'],
    },
    badge: { name: 'egolege', color: 'info', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    firstName: 'Yuriy',
    lastName: 'Vedernikov',
    dateOfBirth: '1978-08-31',
    photo: yuriy,
    about: 'I am a web developer with experience in JavaScript and full stack technologies. My goal is to constantly explore new JavaScript features and technologies to create more efficient and user-friendly web applications.',
    technologies: {
      html: { name: 'HTML', level: '80', color: colors.html },
      css: { name: 'CSS', level: '70', color: colors.css },
      javascript: { name: 'JavaScript', level: '90', color: colors.javascript },
      react: { name: 'React', level: '90', color: colors.react },
      webpack: { name: 'Webpack', level: '60', color: colors.webpack },
      git: { name: 'GIT', level: '70', color: colors.git },
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yuriy-vedernikov/',
      github: 'https://github.com/js-neo/',
      telegram: 'https://t.me/js-neo',
      instagram: 'https://www.instagram.com/yuriy_yupiter/',
    },
    role: {
      text: "Here's what I did on the project:",
      components: ['MemberCard', 'Breadcrumbs'],
    },
    badge: { name: 'meticulous web developer', color: 'primary', textColor: false },
  },
];

export default members;
