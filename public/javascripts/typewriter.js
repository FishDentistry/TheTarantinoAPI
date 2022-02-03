var baseQuotes = ["Big Kahuna Burger","pulpy and/or fictional","Bill killing","inglorious basterdly","death proofing",""]; 
var typeWriterText;
var iterationCount = 0;
var index = 0;

function changeText(textPlane,quoteArray){
  //console.log(iterationCount)
  console.log(index)
  if (index == quoteArray.length - 1){
    index = 0;
  }
  else if (iterationCount % 2 == 0){
    textPlane.innerHTML = quoteArray[index];
    index = index + 1;
  }
  iterationCount = iterationCount + 1;
};



window.onload = function() {
  typeWriterText = document.getElementById("needstext");
  console.log(typeWriterText);
  typeWriterText.innerHTML = baseQuotes[0]
  typeWriterText.addEventListener('animationiteration', function() {changeText(typeWriterText,baseQuotes);});
};

