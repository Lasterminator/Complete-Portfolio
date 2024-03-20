// TODO Add a couple lines about each project
const data = [
  {
    title: 'Interactive Periodic Table',
    subtitle: 'Web Development',
    link: 'https://periodic-table-lasterminator.netlify.app/',
    image: '/images/projects/periodictable.png',
    date: getCurrentDate(),
    desc:
      'Developed an interactive periodic table using Angular, allowing users to explore the properties of elements and their compounds. '
      + 'Implemented a responsive design for seamless user experience across all devices. '
      + 'Integrated a search feature to enable users to quickly locate elements and view their properties.',
  },

  {
    title: 'Airbnb Price Determinants in Europe',
    subtitle: 'Data Analysis',
    link: 'https://github.com/Lasterminator/Math-8050---Data-Analysis/blob/main/Project/Project.pdf',
    image: '/images/projects/datagraph.png',
    date: getCurrentDate(),
    desc:
      'Conducted research on determinants of Airbnb prices in Europe using publicly available dataset "Airbnb Price Determinants" from Kaggle. '
      + 'Utilized linear regression, polynomial regression, and random forest models to analyze the data and determine the main factors influencing room prices. '
      + 'Identified key determinants of Airbnb prices based on coefficient values, providing valuable insights for hosts and guests in understanding pricing dynamics.',
  },
  
  {
    title: 'Pizzeria Management System',
    subtitle: 'Database Management',
    link: 'https://github.com/Lasterminator/CPSC-6620---DBMS',
    image: '/images/projects/pizza.jpg',
    date: getCurrentDate(),
    desc:
    'Developed a Java-based pizza ordering system with full CRUD functionality for efficient data management.'
    + 'Integrated and managed a robust database system for customer and order data handling.'
    + 'Implemented stringent input validation and implemented methods to ensure data security against SQL injection.',
  },

  {
    title: 'Professor-Course Review Portal',
    subtitle: 'Web Development',
    link: 'https://www.youtube.com/watch?v=jBJlrhmOhw4',
    image: '/images/projects/coursereview.png',
    date: getCurrentDate(),
    desc:
      'Developed a comprehensive online platform for student evaluations of college professors, offering insights into teaching effectiveness and course structure. The portal facilitated anonymous feedback, allowing students to share honest reviews and ratings.' 
      + 'Constructed the application using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring a robust, scalable, and seamless user experience.',
  },

  {
    title: 'Anonymous Biometrics-Based Authentication',
    subtitle: 'Cryptography',
    link: 'https://github.com/Lasterminator/CryptoProject/tree/main',
    image: '/images/projects/crypto.png',
    date: getCurrentDate(),
    desc:
      'Implemented a Python-based cryptographic solution using Chebyshev polynomials and SHA-256 hash functions, inspired by the “Anonymous Biometrics-Based Authentication Scheme for Wireless Sensor Networks Using Chaotic Map” paper.' 
      + 'Successfully implemented a secure authentication system which can be used for smart cards, Gateway Nodes, and sensor nodes, achieving 100% success in maintaining data confidentiality and integrity.',
  },
  
  {
    title: 'Personal Portfolio',
    subtitle: 'Web Development',
    link: 'https://glowing-donut-151946.netlify.app',
    image: '/images/projects/portfolio.png',
    date: getCurrentDate(),
    desc:
      'Designed and implemented a Node.js-based personal website to display my portfolio, emphasizing my technical abilities and creativity.',
  },
];


function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default data;
