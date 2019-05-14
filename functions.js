 function initialize()
{
	userInput = document.getElementById("input");
	Wpm = document.getElementById("wpm");
	textBox = document.getElementById("text");
	text0=document.getElementById("aabbcc");
	text1=document.getElementById("Torque");
	text2=document.getElementById("WW1");
	text3=document.getElementById("NASAJourneyToMars");
	text4=document.getElementById("HistoryOfTokyo");
	text5=document.getElementById("DigitalExplosion");
	textBox.innerHTML = "Choose which text you would like to type!";
	startTime = 60;
	TIME = startTime;
	timeLeft = document.getElementById("time");
	timeLeft.innerHTML = "Time left: " + startTime;
	activated = false;
	wordsTyped=[];
	Length=0;
	Sec30 = document.getElementById("sec30");
	Sec60 = document.getElementById("sec60");
	Sec90 = document.getElementById("sec90");
	userInput.disabled = true;
	text0.disabled = false;
	text1.disabled = false;
	text2.disabled = false;
	text3.disabled = false;
	text4.disabled = false;
	text5.disabled = false;
	Sec30.disabled = false;
	Sec60.disabled = false;
	Sec90.disabled = false;
}

function clock(){
  
  if (activated === false){
  activated = true;
  Sec30.disabled = true;
  Sec60.disabled = true;
  Sec90.disabled = true;
  text0.disabled = true;
  text1.disabled = true;
  text2.disabled = true;
  text3.disabled = true;
  text4.disabled = true;
  text5.disabled = true;
  time = setInterval(function()
  {
    startTime--;
    timeLeft.innerHTML = "Time left: " + startTime;

    if(startTime <= 0)
    {
      clearInterval(time);
      userInput.disabled = true;
	  
      WPMCalcuation();
    }

  },1000);
  }
}

function valid()
{
      firstWord = sentence[0];
      
      if(firstWord==userInput.value)
      {
       correctWords();
       return true;
      }
      else 
     {
        return false;
      }
}

function correctWords()
{
    wordsTyped.push(firstWord + " ");
}

function deleteFirst() 
{
    sentence.shift();
    newSentence = "";
    
    for (var i = 0; i < sentence.length; i++)
    {
      newSentence =  newSentence + " " + sentence[i];
      textBox.innerHTML = newSentence;
    }
}

window.onkeypress = function(event)
{
  var space = event.keyCode;
    if (space == 32) 
    {
      event.preventDefault();
      continueOn();
    }
}

function continueOn()
{
  if (valid()===true)
  {
    deleteFirst();
    userInput.value ="";
  }
}

function WPMCalcuation()
{
  for (var i = 0; i < wordsTyped.length; i++)
  {
    Length = Length + wordsTyped[i].length;
  }
  Wpm.innerHTML = "Your WPM: " + Math.round((Length/6)/(TIME/60));
}

function changeTime(seconds)
{
  startTime = seconds;
  timeLeft.innerHTML = "Time left: " + startTime;
  TIME = startTime;
}

function restart()
{
	initialize();
	userInput.value = "";
	Sec90.disabled = false;
	clearInterval(time);
	Wpm.innerHTML = "WPM";
}


