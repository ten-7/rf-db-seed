db.reviews.drop();

const seed = (count) => {
  while (count > 0) {
    const batch = [];
    for (let i = 0; i < 200000; i++) {
      batch.push(
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
        }
      )
    }
    db.reviews.insertMany(batch)
    count--;
  }
}

seed(5);

// $ mongo database/seeder.js
// borrowed from Jay
// this script should be executed from MongoDB CLI