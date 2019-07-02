import axios from 'axios';

export const get = (url, filename, method) => {
  console.log('coming');
  console.log(require(`./${filename}`));
  axios
    .get(url)
    .then(require(`./${filename}`)[method])
    .catch(function(error) {
      // handle error
      console.log(`Catch Block:
                        ${error}`);
    })
    .finally(function() {
      console.log(`Finally block:
                  ${url} was executed  `);
    });
};

// export const post = url => {
//     axios.get(url).then(require('./OpeningStock'));
//   };
