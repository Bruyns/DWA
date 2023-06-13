// @ts-check

/**
 * @type {Array<string>} MONTHS - has all the months used to evaluate the athletes 
 */
const MONTHS = [
    true,
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
/**
 * an object containing all the data of the atheletes competing in the races
 * @typedef {object} data - the main object storing all the athelete information
 * property {object} data -main object
 * @property {object} response - a nested object containing child objects
 * @property {string} requestType - when searching for athelete data
 * @property {string} requestBy - when searching athletes with similar data
 * @property {string} forDisplay - which races should be visible on the webpage
 * @property {string} firstName - name of the athelete
 * @property {string} surname - surname of the athlete
 * @property {string} id - the given ID to each athlete
 * @property {{date: string , time: Array<number>}} races - details of each race ran by the athletes   
 */

/**
 * @type {data}
 */
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  /**
   * 
   * @param {DocumentFragment} athlete - the class to be used in the HTML when displaying athlete data
   * @returns 
   */


  const createHtml = (athlete) => {
    const {firstName, surname, id, races} = data.response.data[athlete];
    const {date, time} = races[races.length - 1];
    // const {date, time} = races.reverse()
    // [date], [time] = races.reverse()
    // can reverse if you want to find the last value 1st(would show up as 1st [0]) in the array easier.
  
    const fragment = document.createDocumentFragment();
  
    const title = document.createElement("h2");
    title.textContent = `${id}`;
    fragment.appendChild(title);
  
    const list = document.createElement("dl");
  
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = MONTHS[eventDate.getMonth()];
    const year = eventDate.getFullYear();
    // console.log(eventDate)
  
   const [first, second, third, fourth] = time;
   const total = first + second + third + fourth;
    // const total = 81;
  
    const hours = Math.floor(total / 60);     //math.floor what does it do, gives you lowest value
    const minutes = (total % 60)
    // console.log(minutes);        //used modulus to give me? remainder of minutes in seconds
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours}:${minutes}</dd>
    `;
  
    fragment.appendChild(list);
    return fragment
  }
  
  // [NM372], [SV782] = data

  // return fragment
  const NM372 = document.querySelector('[data-athlete="NM372"]');
  const SV782 = document.querySelector('[data-athlete="SV782"]');
  
  NM372.appendChild(createHtml('NM372'));
  SV782.appendChild(createHtml('SV782'));


  function B ()  {
    console.log(NM372);
    console.log(SV782)
  }