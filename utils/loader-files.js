const fs = require('fs')

const dir = '../src/assets/'
let files = fs.readdirSync(dir)

// files.forEach((file, index) => {
//   fs.rename(`../src/assets/${file}`, `../src/assets/${index}.jpeg`, function(err) {
//     if ( err ) console.log('ERROR: ' + err);
//   });
// })

// files = fs.readdirSync(dir)

fs.writeFileSync("./files.json", JSON.stringify(files), (error) => {
  console.log("Erro ao salvar dados")
});

