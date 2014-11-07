// Remove dups

var myUniq = function(array){
  var uniques = [];
  for(var i = 0; i < array.length; i++){
    if(!include(uniques, array[i])){
      uniques.push(array[i]);
    }
  }
  return uniques;
};

var include = function(array, num) {
  for (var j = 0; j < array.length; j ++) {
    if (array[j] === num) {
      return true;
    }
  }
  return false;
};

//console.log(myUniq([1, 1, 0, 0, 3, 4]))

// Two sum

var twoSum = function(array) {
  var results = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        var inner = [i, j];
        results.push(inner);
      }
    }
  }
  return results;
}
// > console.log(twoSum([-1, 0, 2, -2, 1])[0])
// console.log(twoSum([-1, 0, 2, -2, 1])[1])
// console.log(twoSum([-1, 0, 2, -2, 1]))

var myTranspose = function(array){
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
      array[i][j] = array[j][i];
    }
  }
  return array;
}


// console.log(myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));

var doubleArray = function(array){
  var dup_array = []
  for ( var i = 0; i < array.length; i++) {
    dup_array.push(array[i]*2)
  }
  return dup_array
}

// console.log(doubleArray([1, 3, 5]))

var myEach = function(array, callback){
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
  
}

// console.log(myEach([1, 3, 5, 5], console.log))


var myMap = function(array, callback){
  result = [];
  // result.push(myEach(array, callback));
  // myEach(array, callback)
  // var newCallback = function(el){
  //   result.push(callback(el));
  // }
  // myEach(array, newCallback);
  myEach(array, function(el){
    result.push(callback(el));
  });
  return result;
}

var double = function(number){
  return number * 2;
}

// var myMap = function(array, callback){
//   result = []
//   for (var i = 0; i < array.length; i++){
//     result.push(callback(array[i]));
//   }
//   return result;
// }

var result = myMap([1, 3, 5], double)

// console.log(result)

//
// def myMap(array, &blk) bhgn≠
//   res = []
//   result.myEach do |i|
//     result << blk.call(i)
//   end
//   return result
// end
//

var myInject = function(array){
  
  var result = ""
  var callBack = function(el){
    result += el
  }
  myEach(array, callBack)
  return result
}

// console.log(myInject(["a", "b", "c"]))

var myBubbleSort = function(array){
  sorted = false
  while (sorted === false) {
    sorted = true
    for (var i = 0; i < array.length - 1; i ++) {
      if (array[i] > array[i+1]) {
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      } 
    }
  }
  return array
}

// console.log(myBubbleSort([1, 3, 5, 2, 9, 6]))

//if we have time, make it take in a dictionary and only return words
var substrings = function(string){
  var result = []
  for (var i = 0; i < string.length-1; i++){
    for (var j = i; j < string.length; j++){
      result.push(string.slice(i, j+1));
    }
  }
  return result;
}

// console.log(substrings("cat"));


var range = function(start, end){
  if (end < start){
    return [];
  }
  if (end === (start+1)){
    return [start, end];
  }
  var a = range(start, end-1);
  a.push(end)
  return a
}


// console.log(range(1, 5));


var sumIterative = function(array){
  sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

// console.log(sumIterative([0, 3, 5, 10]));


var sumRecursive = function(array){
  if(array.length ==  1){
    return array[0];
  }
  return array.pop() + sumRecursive(array);
}

// console.log(sumRecursive([0, 3, 5, 10]));


var exp1 = function(b, n){
  if (n === 0){
    return 1;
  }
  return b * exp1(b, n-1);
}

// console.log(exp1(2, 5));

var exp2 = function(b, n){
  if (n == 0){
    return 1;
  }
  if (n == 1){
    return b;
  }
  if (n % 2 == 0){
    return exp2(b, n/2) * exp2(b, n/2);
  }else{
   return b * (exp2(b, (n-1) / 2)) * (exp2(b, (n-1) / 2)); 
  }
}

// console.log(exp2(2, 5));


var fib = function(n){
  if(n === 0){
    return [];
  }
  if (n === 1){
    return [0];
  }
  if (n === 2){
    return [0, 1];
  }
  
  var a = fib(n-1)
  var l = a.length 
  a.push(fib(n-1)[l-1] + fib(n-1)[l-2])
  return a
}

// console.log(fib(5))

var binarySearch = function(array, target){
  var len = array.length
  var mid = Math.floor(len/2)
  left = array.slice(0, mid)
  right = array.slice(mid, len);
  
  if (len == 1 && target != array[0]){
    return "Your item wasn't found";
  }  
  
  else if (array[mid] === target) {
    return mid
  }
  
  else if (target > array[mid]){
    if (!(binarySearch(right, target) === "Your item wasn't found")){
      return mid + binarySearch(right, target);
    } 
    else {
      return binarySearch(right, target);
    }
  }
  else if (target < array[mid]){
    return binarySearch(left, target);
  }
}


//console.log(binarySearch([0, 3, 5, 16, 25, 49, 50], 7))

// var Cat = function(name, owner){
//   this.name = name;
//   this.owner = owner;
// }
//
// Cat.prototype.cuteStatement = function() {
//   console.log(this.owner + " loves " + this.name);
// }
//
// var cat1 = new Cat("Gizmo", "Ned");
// var cat2 = new Cat("Berry", "Aaron");
//
// // cat1.cuteStatement();
//
// Cat.prototype.cuteStatement = function(){
//   console.log("Everyone loves " + this.name + "!");
// }
//
// // cat1.cuteStatement();
//
// Cat.prototype.meow = function(){
//   console.log(this.name + " meows");
// }
//
// cat1.meow();
//
// cat2.meow = function(){
//   console.log(this.name + " meows!!");
// }
//
//
//
// cat2.meow();
// cat1.meow();

//Make change

var makeChange = function(amount, array){
  var result = []
  if (amount == 0){
    return result;
  } 
  while (amount >= array[0]){
    amount -= array[0];
    result.push(array[0])
  }
  return result.concat(makeChange(amount, array.slice(1, array.length)))
}

// console.log(makeChange(14, [10, 7, 1]))

var makeChange2 = function(amount, array){
  var result = []
  if (amount == 0){
    return result;
  } 
  
  if (amount >= array[0]){
    amount -= array[0];
    result.push(array[0])
    return result.concat(makeChange(amount, array))
  } else {
    return result.concat(makeChange(amount, array.slice(1, array.length))) 
  }
}


//console.log(makeChange2(14, [10, 7, 1]))

var makeChange3 = function(amount, array){
  var result = []
  if (amount == 0){
    return result;
  }
  var current_best = 100;
  for (var i = 0; i < array.length; i++){
    if(amount >= array[i]){
      amount -= array[i];
      if (makeChange3(amount, array).length < current_best){
        result.push(array[i]);
        current_best = makeChange3(amount, array).length
        return result.concat(makeChange3(amount, array))
      }
    }
  } 
  return result;
}

console.log(makeChange3(14, [10, 7, 1]))







