//Approach 1

function sortString(str1, str2) {
    var sortStr1 = str1.split("").sort().join("");
    var sortStr2 = str2.split("").sort().join("");
    return [sortStr1, sortStr2];
}

function anagram(sortedStr1, sortedStr2){
    if(sortedStr1.length==sortedStr2.length){
        for(var i=0; i<sortedStr1.length; i++){
            if(sortedStr2[i].includes(sortedStr1[i])){
                return true;
            }

            else{
                return false;
            }
        }
    }

    else{
        return false;
    }
}


var [sortedStr1, sortedStr2] = sortString("namit","namti");

console.log(anagram(sortedStr1, sortedStr2));

//Optimizing the approach

function sortString(str1, str2) {
    var sortStr1 = str1.split("").sort().join("");
    var sortStr2 = str2.split("").sort().join("");
    return [sortStr1, sortStr2];
}

function anagram(sortedStr1, sortedStr2){
    if(sortedStr1 == sortedStr2){
        for(var i=0; i<sortedStr1.length; i++){
            if(sortedStr1[i] !== sortedStr2[i]){
                return false;
            }

            else{
                return true;
            }
        }
    }

    else{
        return false;
    }
}


var [sortedStr1, sortedStr2] = sortString("yuuvi","yuvvi");
console.log(anagram(sortedStr1, sortedStr2))

//Furthure modification

function sortString(str1, str2) {
    var sortStr1 = str1.split("").sort().join("");
    var sortStr2 = str2.split("").sort().join("");
    return [sortStr1, sortStr2];
}

function anagram(sortedStr1, sortedStr2){
    if(sortedStr1 === sortedStr2){
        return true
    }

    else{
        return false;
    }
}


var [sortedStr1, sortedStr2] = sortString("yuvii","yuvvi");
console.log(anagram(sortedStr1, sortedStr2))


//Final code

function sortString(str1, str2) {
    var sortStr1 = str1.split("").sort().join("");
    var sortStr2 = str2.split("").sort().join("");
    return [sortStr1, sortStr2];
}

function anagram(sortedStr1, sortedStr2) {
    return sortedStr1 === sortedStr2;
}

var [sortedStr1, sortedStr2] = sortString("yuviv", "yuvvi");
console.log(anagram(sortedStr1, sortedStr2));
