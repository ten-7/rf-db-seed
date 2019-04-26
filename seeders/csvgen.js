const fs = require('fs');

/*
    Data model from MongoDB

        {
          "proscons":{
            "reliability":false,
            "durability":false,
            "looks":false,
            "performance":true,
            "value":true
          },
          "username":"jayell","body":"I just got the most something something something darkside, lmao, nonsense!",
          "score":2,
          "likes":65,
          "dislikes":68,
          "productId":5,
        },
*/

let usernames = ['jayell', 'jeffery', 'Magnikai', 'theDuck777', 'nota', 'Jay[B]', 'jah-EE', 'duh-ROO', 'Nayr', 'antmAn', 'moleman45', 'Notorious L I G'];

// 
let bodies = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Duis ut diam quam nulla porttitor massa id.',
  'Nulla at volutpat diam ut venenatis. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.',
  'Tempus imperdiet nulla malesuada pellentesque elit eget.',
  'Pretium nibh ipsum consequat nisl vel. In metus vulputate eu scelerisque felis imperdiet.',
  'Quis commodo odio aenean sed adipiscing diam donec.',
  'Metus vulputate eu scelerisque felis imperdiet proin.',
  'Fermentum posuere urna nec tincidunt praesent semper.',
  'Bibendum est ultricies integer quis auctor elit. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.'
];

let myStore = [];

// generate 100 items
for (let i = 1; i < 1001; i++){
  let item = {};
  
  item.proscons = {};
  
  item.proscons.reliablility = Boolean(Math.floor(0.6 + Math.random()));
  item.proscons.durability = Boolean(Math.floor(0.6 + Math.random()));
  item.proscons.looks = Boolean(Math.floor(0.6 + Math.random()));
  item.proscons.performance = Boolean(Math.floor(0.6 + Math.random()));
  item.proscons.value = Boolean(Math.floor(0.6 + Math.random()));
  
  item.username = usernames[Math.floor(usernames.length * Math.random())];
  item.body = bodies[Math.floor(bodies.length * Math.random())];
  item.score = Math.floor(11 * Math.random()); // can have a score from 0 to 10;
  item.likes = Math.floor(500 * Math.random()); // can have a likes number ranging from 0 to 10k
  item.dislikes = Math.floor(500 * Math.random());
  item.productId = Math.ceil(100 * Math.random());
  item.reviewId = Math.ceil(100 * Math.random());

  myStore.push(item);
}

// Items are stored in memory
// console.log(myStore);

// Above will create an arary of objects. Cool.
// But now we need to make a CSV!
// What does a CSV look like?

/*
  header|   productId, username,     body,          score, likes, dislikes, reliability, durability, looks,   performance, value  \n
  row   |   int,     , varchar(30) , varchar(128),  int  , int  , int     , boolean    , boolean   , boolean, boolean    , boolean\n
*/

// Write products in memory to file

// header of csv
let header = `productId, reviewId, username, body, score, likes, dislikes, reliability, durability, looks, performance, value \n`;

// append a new line of values in each column of the header

fs.writeFileSync('output.csv', header, 'utf8', (err) => {
  if (err) throw err;
  console.log('output.csv written...');
})

function writeToCSV(array, times){

  let list = '';

  array.forEach(entry => {
    list += `${entry.productId}, ${entry.reviewId}, ${entry.username}, "${entry.body}", ${entry.score}, ${entry.likes}, ${entry.dislikes}, ${Number(entry.proscons.reliablility)}, ${Number(entry.proscons.durability)}, ${Number(entry.proscons.looks)}, ${Number(entry.proscons.performance)}, ${Number(entry.proscons.value)}\n`;
  });

  console.log(list)

  // write to a file using node.js filesystem
  for (let i = 0; i < times; i++){
    fs.appendFileSync('output.csv', list, 'utf8', (err) => {
      if (err) throw err;
      console.log('appending to output.csv...');
    })
  }
}

writeToCSV(myStore, 10000);