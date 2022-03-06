// Your code here

function mapToNegativize(sourceArray) {
    let negArray = [];
    for (const int of sourceArray) {
        negArray.push((int * -1))
    }
    return negArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let doubled = [];
    for (const int of array) {
        doubled.push((int * 2))
    }
    return doubled
}

function mapToSquare(array) {
    let squared = [];
    for (const int of array) {
        squared.push((int ** 2))
    }
    return squared
}



function reduceToTotal(array, start=0) {
    let total = start;
    for (const item of array) {
        total = (total + item)
    }
    return total
}

function reduceToAllTrue(array) {
    let status = false;
    let trueVal = [];
    for (const val of array) {
        if (val) {
            trueVal.push(val) 
        }
    }
    if (trueVal.length == array.length) {
        status = true;
    }
    return status;
}

function reduceToAnyTrue(array) {
    let status = false;
    let trueVal = [];
    for (const val of array) {
        if (val == true) {
            trueVal.push(val)
        }
    }
    if (trueVal.length > 0){
        status = true
    }
    return status
}