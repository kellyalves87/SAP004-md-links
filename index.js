

// const http = require('./http/http.js');

// const link = http.getHttp('http://www.google.com');
// link.then(success => {
//   console.log(success);
// })
// .catch(error => {
//   console.log(error);
// })

// const file = require('./file/file.js');

// file.getDataFile('README.md').then(success => {
//   console.log(success);
// });


// const axios = require("axios");

//          if (validate) {
//           checkLink.map((obj) => {
//             axios
//               .get(obj.href)
//               .then((response) => {
//                 console.log(
//                   file +
//                     " " +
//                     obj.href +
//                     " " +
//                     response.status +
//                     " " +
//                     response.statusText +
//                     " " +
//                     obj.text
//                 );
//               })
//               .catch((error) => {
//                 console.log(
//                   obj.href +
//                     " - status: " +
//                     error.response.status +
//                     " - statusText: " +
//                     error.response.statusText
//                 );
//               });
//           });
//         }

//         if (stats) {
//           const links = checkLink.map((item) => item.href);
//           const set = new Set(links);
//           resolved(`\nUnique: ${set.size} \n All: ${links.length}`);
//         }

//         resolved(checkLink);
//       }
//     });
//   });
// };

// mdLinks(
//   process.argv.slice(2)[0],
//   process.argv.slice(2)[1],
//   process.argv.slice(2)[2]
// )
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error));
