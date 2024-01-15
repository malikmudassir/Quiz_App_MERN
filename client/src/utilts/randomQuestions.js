//   Function to get 5 random objects/Questions from given array
export function getRandomQuestions(arr, count) {
  const randomObjects = [];
  while (randomObjects.length < count && arr.length > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomObjects.push(arr.splice(randomIndex, 1)[0]);
  }
  return randomObjects;
}
