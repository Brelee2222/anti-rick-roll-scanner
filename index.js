const fetch = require('node-fetch');
const url = prompt('website url')
const html = fetch(url).then(function (res) {
  return res.text()
}).then(function (text) {
  if (text.replace(' ','').toUpperCase().includes('RICKROLL') || text.replace(' ', '').includes('youtube.com/watch?v=dQw4w9WgXcQ') || text.replace(' ', '').includes('youtu.be/dQw4w9WgXcQ')) {
    console.log('this page contains rick rolling')
  } else {
    console.log('this page may not contain rick rolling')
  }

});