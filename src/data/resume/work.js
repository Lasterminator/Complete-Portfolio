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
      'Developed a scaleable IMPS Recon portal and Scheduler for handling of large number of (around ten million) timeout and return case transactions everyday.',
      'Implemented UPI UDIR API for Enhancing Complaint handling and resolution process for UPI transactions as per requirement and guidelines of RBI.',
      'API Testing of UPI application in various UAT scenarios based on consumer feedback.',
      'Development of Partner On-boarding Site (Cashpoint Portal) and API development of various Finacle applications.'
    ],
  },
  {
    name: 'Glocol Networks',
    position: 'Software Developer Intern',
    url: 'http://www.glocol.net/',
    startDate: '2020-07-01',
    endDate: '2021-01-10',
    highlights: [
      'Developed web dashboard application for analysis on number of people on train, their connectivity to People Sense Network on the train.',
      'A Dashboard was developed for the client company for real time locations of trains.'
    ],
  },
];

export default work;
