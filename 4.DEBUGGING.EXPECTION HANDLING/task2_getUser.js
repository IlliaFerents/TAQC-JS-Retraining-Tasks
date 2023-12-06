/*
Implement the getUser(id) function that takes a user id as a parameter and returns an object that contains the value of the passed id. 
The function also throws an error if a negative id is entered.

Implement the getUsers(ids) function, which takes an array of user ids as a parameter, 
checks each element of the ids array for correctness using the getUser function and displays an error message in the event of an exceptional situation. 
The getUsers function returns an array of objects where the key values are valid ids elements.
*/

const getUser = (id) => {
  try {
    if (id < 0) throw new Error(`Id must be non-negative: ${id}`);

    return { id };
  } catch (error) {
    console.log(error.message);

    return null;
  }
};

console.log(getUser(4)); // { id: 4 }
console.log(getUser(-10)); // Id must be non-negative

const getUsers = (ids) => {
  return ids.reduce((validIds, id) => {
    const validId = getUser(id); // checks if 'id' is valid

    return validId !== null ? [...validIds, validId] : validIds; // adds valid id objects to an array
  }, []);
};

console.log(getUsers([1, 2, 3, 4, -5, -6])); // [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
