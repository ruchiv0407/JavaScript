//AQ1 array elements larger than a number
let arr=[2,3,5,1,7,9,4];
let num=2;
function larElement (arr,num) {
  for(let i=0;i<arr.length;i++) {
    if(arr[i]>num) {
      console.log(arr[i]);
    }
  }
}
larElement(arr,num);


//AQ2 unique elements
let str = "abcdabcdefgggh";
//function to get String with all unique elements
function getUnique(str) {
let ans = "";
for (let i = 0; i < str.length; i++) {
let currChar = str[i];
if (ans.indexOf(currChar) == -1) {
//if current character is not added, then add it in
ans.
//Otherwise it is a duplicate.
ans += currChar;
}
}
return ans;
}
getUnique(str);


//AQ3
let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
let ansIdx = 0;
for (let i = 0; i < country.length; i++) {
let ansLen = country[ansIdx].length;
let currLen = country[i].length;
if (currLen > ansLen) {
ansIdx = i;
}
}
return country[ansIdx];
}
longestName(country);


//AQ4 vowel
let str1="apnacollege";
function vowel(str1) {
  let count=0;
  for(let i=0;i<str1.length;i++) {
    if (
str1.charAt(i) == "a" ||
str1.charAt(i) == "e" ||
str1.charAt(i) == "i" ||
str1.charAt(i) == "o" ||
str1.charAt(i) == "u"
) {
count++;
}
}
return count;
  }
console.log(vowel(str1));


//AQ5
let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;}
console.log(generateRandom(start, end));
