console.log('connected');

// Your code here
function mapToNegativize(array){
    let newArray = []
    array.forEach(function(number){
        newArray.push(number * -1)
    })
    return newArray;
}

function mapToNoChange(array){
    return array;
}

function mapToDouble(array){
    let newArray = []
    array.forEach(number => {
        newArray.push(number * 2)
    })

    return newArray;
}

function mapToSquare(array){
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * number);
    })

    return newArray;
}

//REDUCE-LIKE
function reduceToTotal(array, starting = 0){
    let total = starting;
    array.forEach(number => {
        total += number
    })
    return total; 
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++ ) {
        if (!array[i]) return false
      }
      return true

    //   array.forEach(value => {       This should work?
    //       if (!value) return false
    //   })
    //   return true;
}

function reduceToAnyTrue(array){
    let status = false;
    array.forEach(value => {
        if (value) {
            status = true
        } else {
            return false;
        }
    })

    return status
}
