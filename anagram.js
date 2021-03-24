function anagram(arr) {
    let newArr = []
    arr.forEach(el => {
      let arrWord = el.split('')
      for(let i = 0; i < arrWord.length - 1; i++) {
        let temp = ''
        for(let j = i+1; j < arrWord.length; j++) {
          if(arrWord[i] > arrWord[j]) {
            temp = arrWord[j]
            arrWord[j] = arrWord[i]
            arrWord[i] = temp
          }
        }
      }
      newArr.push(arrWord.join(''))
    });
  
    let result = []
  
    while (newArr.length > 0) {
      if(newArr.length === 1) {
        let value = newArr[0]
        let arrTemp = [value]
      }
      let value = newArr[0]
      let arrTemp = []
      let i = 0
      while (i < newArr.length) {
        if(value === newArr[i]) {
          arrTemp.push(arr[i])
          newArr.splice(i, 1)
          arr.splice(i, 1)
          i=0
        } else {
          i++
        }
      }
      result.push(arrTemp)
    }
  
    return result
  }
  
  console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
  