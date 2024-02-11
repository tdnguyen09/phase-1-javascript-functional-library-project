function myEach (collection, callback){
    for (let key in collection){
        callback (collection[key])
    }
    return collection;
}

function myMap(collection,callback){
    let newCollection = [];
    for (let key in collection){
        newCollection.push(callback(collection[key]))
    }
    return newCollection;
}
  
function myReduce (collection, callback, acc){
    if (typeof(collection) === 'object'){
        collection = Object.values(collection);
        };
    let start = 0;
    if (acc === undefined){
        acc = collection[0];
        start = 1;
        };

    for (let i = start; i < collection.length; i++){
        acc = callback(acc, collection[i], collection);
    };
    return acc
}

function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }

function myFilter(collection, callback){
    let newCollection = [];
    for ( let i = 0; i < collection.length; i++){
        if (callback(collection[i])){
            newCollection.push(collection[i])
        }
    }
    return newCollection
}
function mySize(collection){
    if(Array.isArray(collection)){
        return collection.length
    } else if ( typeof collection === 'object'){
        return Object.keys(collection).length
    }
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }else{
        return array.slice(0, n);
    }
}

function myLast(array, n){
    if (n === undefined) {
        return array[array.length - 1];
    }else{
        return array.slice(array.length - n);
    }
}
 function myKeys(object){
    return Object.keys(object)
 }

 function myValues(object){
    return Object.values(object)
 }