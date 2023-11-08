/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'RBL Bank',
    position: 'Full Stack Software Developer',
    url: 'https://www.rblbank.com/',
    startDate: '2021-07-01',
    endDate: '2022-12-15',
    highlights: [
      'Engineered a scalable IMPS Recon portal and Scheduler capable of processing approximately 10 million timeout and return transactions daily.',
      'Executed the integration of UPI UDIR API to improve the complaint management and resolution workflow for UPI transactions, adhering to the Reserve Bank of India\'s standards',
      'Conducted thorough API testing for the UPI application across multiple User Acceptance Testing (UAT) scenarios, incorporating consumer insights for optimization.',
      'Spearheaded the creation of a Partner Onboarding Site (Cashpoint Portal) and developed APIs for a suite of Finacle banking applications, enhancing partner integration.'],
  },
  {
    name: 'Glocol Networks',
    position: 'Software Developer Intern',
    url: 'http://www.glocol.net/',
    startDate: '2020-07-01',
    endDate: '2021-01-10',
    highlights: [
      'Designed and implemented a web dashboard application for analyzing passenger counts on trains and their connection to the onboard People Sense Network.',
      'Developed a real-time train location tracking dashboard for the client company, facilitating enhanced operational oversight and customer service.'
    ],
  },
];

export default work;
