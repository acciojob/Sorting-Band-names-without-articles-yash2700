//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
var list=document.getElementById("band")
var compare = function(a, b) {
  var aTitle = a.toLowerCase(),
      bTitle = b.toLowerCase();
      
  aTitle = removeArticles(aTitle);
  bTitle = removeArticles(bTitle);
  
  if (aTitle > bTitle) return 1;
  if (aTitle < bTitle) return -1; 
  return 0;
};

function removeArticles(str) {
  words = str.split(" ");
  if(words.length <= 1) return str;
  if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' )
    return words.splice(1).join(" ");
  return str;
}

var t = touristSpots.sort(compare);
console.log(t)
for(var i of t){
	list.innerHTML+=`<li>${i}</li>`
}

