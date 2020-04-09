export const constants = {
  ui: {
    colors: {},
  },
  validators: {
    /* eslint-disable no-useless-escape */
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im,
  },
  app: {
    API_TOKEN: 'api_token',
    // BASE_API_URL: 'http://192.168.1.105:8080'
  },

  email: {
    USER_ID: 'user_IthvegI82GXXBWlqLEHJS',
    ACCESS_TOKEN: '6904ee41036e8a396f0df4089a38afcc',
    ADDRESS: 'bediako29@gmail.com',
  },
};

export const experience = {
  Asqii: {
    title: 'Senior Front-end Engineer',
    company: ' @ Asqii LLC',
    duration: 'May 2019 - Present   |   Remote',
    tasks: [
      'Develop hybrid apps for Android and IOS platforms using react-native.',
      'Implement backend systems mainly using Node JS, typescript, and MySQL database.',
      'Write high quality, documented and maintainable code using SOLID principles and Test-driven development.',
      'Set up CI/CD with GitLab for fast and safe deployments.',
      'Collaborate with other remote team members and engineers using tools like slack and Trello.',
    ],
  },
  ISTC: {
    title: 'Software Development Support',
    company: ' @ Intercity STC Coaches',
    duration: 'May - Sept 2018 | Accra (GH)',
    tasks: [
      'Built a web application for the administration of the technical services department using HTML, CSS and jQuery.',
      'Worked closely with 2 other developers to engineer a real-time application for bus scheduling and keeping track of moving buses for STC bus terminals.',
      'Implemented a strategic plan for component development practices to support future projects.',
      'Reduced institutions expense by ~2.3% and increased efficiency through digitization.',
    ],
  },
  Schooldesk: {
    title: 'Front-end Engineer',
    company: ' @ Schooldesk',
    duration: 'May - October 2017 | Kumasi (GH)',
    tasks: [
      'Collaborated with a team of 6 made up of interns and engineers to develop a school management system for elite schools.',
      'Proposed and implemented project structure for front-end and backend applications.',
      'Developed, tested and maintained code for client and internal websites mainly using React and Node JS.',
      'Interfaced with clients to author well documented software requirement specifications for projects.',
    ],
  },
};

export const projects = [
  {
    title: 'Featured Project',
    name: 'Schooldesk',
    image: 'schooldesk',
    description:
      'Currently operating in Ghana and DR Congo, SchoolDesk is a suite of applications that can be used for managing a school. It includes a desktop application for the school, mobile apps for both teachers and parents, and an offline encyclopaedia for students.',
    icons: [
      'react',
      'electron',
      'mysql',
      'travisci',
      'swift',
      'python',
      'travis',
    ],
    list: ['GCP', 'Microservices', 'DataStore'],
  },

  {
    title: 'Featured Project',
    name: 'STC Operations',
    image: 'stcOperations',
    description:
      'STC Operations is a realtime bus scheduling application for intercity STC Coaches limted, one of the largest transport companies in Ghana. Features include tracking trip details, recording, scheduling and analyzing maintenance and general administration.',
    icons: ['html5', 'heroku', 'mysql', 'node-dot-js', 'css3', 'jquery'],
    list: ['Gearhost', 'Express'],
  },

  {
    title: 'Own Project',
    name: 'Asset Manager',
    image: 'assetsManager',
    description:
      'Desktop application used to manage fixed assets in an organization. Features tracking life-cycle of an asset, scheduled maintainance, automated accounting and user management ',
    icons: [
      'react',
      'node-dot-js',
      'electron',
      'postgresql',
      'heroku',
      'gitlab',
    ],
    list: ['Gitlab CI', 'Heroku'],
  },

  {
    title: 'Own Project',
    name: 'RevApp',
    image: 'mmda',
    description:
      'Navigation aided online/offline revenue collection software suite for district assemblies in Ghana.',
    icons: ['react', 'node-dot-js', 'mysql', 'googlecloud', 'gitlab'],
    list: ['Gitlab CI', 'React Native', 'Realm DB'],
  },
];

export const otherProjects = [
  {
    name: 'STC Technical Services',
    github: '',
    website: '',
    description:
      'A web app for managing the technical services of intercity STC. Features include administration, stores and control.',
    techList: ['Html', 'Css', 'Jquery', 'Node Js', 'Express'],
  },
];

export const skills = [
  'HTML, CSS, Javascript',
  'Node JS',
  'React',
  'React Native',
  'Vue JS',
  'Electron JS',
  'GCP and AWS',
  'DBMS(MySQL,Mongo,Realm)',
  'CI/CD (Gitlab, Travis)',
  'Microservices',
  'Dev Ops',
];
