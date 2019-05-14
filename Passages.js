function loadtext()
{
	aabbcc = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
}

function pick(passage)
{
	if (passage == 0)
	{
		STRING = aliceinwonderland;
		sentence = STRING.split(" ");
		wpmString = STRING.split("");
		textBox.innerHTML = STRING;
	}
	
	if (passage == 1)
	{
		STRING = torque;
		sentence = STRING.split(" ");
		wpmString = STRING.split("");
		textBox.innerHTML = STRING;
	}
	
	if (passage == 2)
	{
		STRING = ww1;
		sentence = STRING.split(" ");
		wpmString = STRING.split("");
		textBox.innerHTML = STRING;
	}
	
	if (passage == 3)
	{
		STRING = nasajourneytomars;
		sentence = STRING.split(" ");
		wpmString = STRING.split("");
		textBox.innerHTML = STRING;
	}
	
	if (passage == 4)
	{
		STRING = historyoftokyo;
		sentence = STRING.split(" ");
		wpmString = STRING.split("");
		textBox.innerHTML = STRING;
	}
	
	
	if (passage == 5)
	{
		STRING = digitalexplosion;
		sentence = STRING.split(" ");
		wpmString = STRING.split("");
		textBox.innerHTML = STRING;
	}
	
	userInput.disabled = false;
}
