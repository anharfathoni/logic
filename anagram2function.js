function sorting(word) {
  let arr = word.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = "";
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr.join("");
}

function anagram(arr) {
  let newArr = [];
  arr.forEach((el) => {
    newArr.push(sorting(el));
  });

  let result = [];

  while (newArr.length > 0) {
    if (newArr.length === 1) {
      let value = newArr[0];
      let arrTemp = [value];
    }
    let value = newArr[0];
    let arrTemp = [];
    let i = 0;
    while (i < newArr.length) {
      if (value === newArr[i]) {
        arrTemp.push(arr[i]);
        newArr.splice(i, 1);
        arr.splice(i, 1);
        i = 0;
      } else {
        i++;
      }
    }
    result.push(arrTemp);
  }

  return result;
}

console.log(anagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]));
