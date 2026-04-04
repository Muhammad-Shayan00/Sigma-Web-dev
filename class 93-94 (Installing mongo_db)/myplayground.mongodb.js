
use('demodatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "java",
    "price": "20000",
    "instructor": "harry"
  },
  {
    "name": "python",
    "price": "18000",
    "instructor": "john"
  },
  {
    "name": "c++",
    "price": "15000",
    "instructor": "ali"
  },
  {
    "name": "javascript",
    "price": "22000",
    "instructor": "sara"
  },
  {
    "name": "react",
    "price": "25000",
    "instructor": "ahmed"
  },
  {
    "name": "nodejs",
    "price": "21000",
    "instructor": "usman"
  },
  {
    "name": "mongodb",
    "price": "17000",
    "instructor": "fatima"
  },
  {
    "name": "data structures",
    "price": "23000",
    "instructor": "bilal"
  },
  {
    "name": "machine learning",
    "price": "30000",
    "instructor": "zain"
  },
  {
    "name": "web development",
    "price": "26000",
    "instructor": "hamza"
  }
]);



// Print a message to the output window.
console.log(`added 10 documents sucessfully`);

