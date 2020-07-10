// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  capsPromise = new Promise((resolve, reject) => {
    if (
      array.every((element) => {
        return typeof element === "string";
      })
    ) {
      const newArray = array.map((element) => {
        return element.toUpperCase();
      });
      resolve(newArray);
    } else {
      reject("The array is not made entirely of strings");
    }
  });
  return capsPromise;
};

const sortWords = (array) => {
  sortPromise = new Promise((resolve, reject) => {
    if (
      array.every((element) => {
        return typeof element === "string";
      })
    ) {
      console.log(array.sort());
      resolve(array.sort());
    } else {
      reject("The array is not made entirely of strings");
    }
  });
  return sortPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
