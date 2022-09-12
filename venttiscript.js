var amountPlayer=new Array();
var amountComputer=new Array();

//Arpoo  kaksi ensimmäistä korttia
  function card()
  {
    var randomNumber1 = Math.floor(Math.random() * 14) + 1;
    return randomNumber1;
  }

 //Arpoo lisäkortin
  function extraCard()
  {
    var extraNumber = Math.floor(Math.random() * 14) + 1;
    return extraNumber;
  }


  //Tulostaa pelaajan kortit dokumenttiin ja jättää vielä koneen kortit arvoitukseksi
  //Tarkastaa menikö pelaajan kortit yli 21 pisteen
  function printNumber(number1, number2)
{
    var placeholder1 = document.getElementById('placeholder1');
    placeholder1.innerHTML = number1;

    var placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML = number2;

    var placeholder2 = document.getElementById('placeholder3');
    placeholder2.innerHTML = "?";

    var placeholder2 = document.getElementById('placeholder4');
    placeholder2.innerHTML = "?";

    
    if(number1+number2>21)
    {
      document.getElementById("placeholder7").innerHTML="Voi ei, meni yli 21 pistettä. Kone voittaa!";
    }
  }

  //Kun on painettu jää tähän tulokseen nappulaa, tulostetaan myös koneen kortit näkyville
  function computerNumber(num,num1)
  {
    var placeholder2 = document.getElementById('placeholder3');
    placeholder2.innerHTML = num;

    var placeholder2 = document.getElementById('placeholder4');
    placeholder2.innerHTML = num1;
  }


  //Luo lisäkortteja ja asettaa korttiin viimeiseksi arvotun lisäkortin numeron
  //Tarkastaa onko pelaajan korttien summa mennyt yli 21 pisteen
  function printExtraNumber(number)
  {
    var el = document.createElement("h4");
    el.innerHTML = "Lisäkortti: "+number;
    document.body.appendChild(el);
    document.getElementById("extracard").appendChild(el);
    var checknum=0;
    for (var i = 0; i < amountPlayer.length; i++)
    {
      
      checknum+= amountPlayer[i];
      if (checknum>=22)
      {
        document.getElementById("placeholder7").innerHTML="Voi ei, meni yli 21 pistettä. Kone voittaa!";
      }
    }
  }


  //Tulostaa dokumenttiin pelaajan ja koneen korttien summat
  //Kutsuu checkWinner funktiota ja asettaa parametreiksi pelaajan ja koneen korttien summat
  function printSum(sum, sum1)
  {
    var placeholder = document.getElementById('placeholder5');
    placeholder.innerHTML = "Pelaajan korttien summa: "+sum;

    var placeholder1 = document.getElementById('placeholder6');
    placeholder1.innerHTML = "Koneen korttien summa: "+sum1;
    checkWinner(sum,sum1)
    
  }

  //Tarkastaa kumpi on voittanut, pelaaja vai kone
  function checkWinner(playerPoint,computerPoint)
  {
    if(playerPoint>21)
    {
      document.getElementById("placeholder7").innerHTML="Meni yli 21 pistettä. Kone voittaa!";
    }
    else if(computerPoint>21)
    {
      document.getElementById("placeholder7").innerHTML="Koneelta meni yli 21 pistettä. Pelaaja voittaa!";
    }
    else if (playerPoint<computerPoint)
    {
      document.getElementById("placeholder7").innerHTML="kone sai "+computerPoint+" pistettä ja voitti!"
    }
    else if (playerPoint>computerPoint)
    {
      document.getElementById("placeholder7").innerHTML="Pelaaja sai "+playerPoint+" pistettä ja voitti!"
    }
    else if (playerPoint==computerPoint)
    {
      document.getElementById("placeholder7").innerHTML="kone sai "+computerPoint+" pistettä ja pelaaja sai "+playerPoint+" pistettä, eli tuli tasapeli!"
    }
  }

  //"Piilottaa" jaa kortit nappulan ja luo aloita uusi peli nappulan. Sitä painamalla sivu latautuu uudelleen ja peli alkaa alusta 
  function gameReset()
  {
    document.getElementById("button").style.visibility="hidden";
    var button5 = document.createElement("button");

      button5.innerText = "aloita uusi peli";

      
      button5.addEventListener("click", () => {
        
        window.location.reload();
      })

      document.getElementById("sumdiv").appendChild(button5);
  }


  //Käynnistää card funktion joka arpoo pelaajalle ja koneelle kortit
  //Asettaa arvotut kortit taulukkoon
  //Kutsuu printnumber funktiota ja laittaa funktioon parametreinä pelaajan kortit
  //Tekee myös gamereset funktion
  var button = document.getElementById("button");
  button.onclick = function() {
    gameReset();
    var playerCard1 = card();
    var playerCard2=card();
    var computerCard1 = card();
    var computerCard2=card();
    amountPlayer.push(playerCard1,playerCard2);
    amountComputer.push(computerCard1,computerCard2);
    printNumber(playerCard1,playerCard2);
  }
  
  //Käynnistää extraCard funktion joka arpoo lisäkortin
  //Asettaa Lisäkortin taulukkoon
  //Kutsuu printExtraNumber funktiota ja asettaa parametriksi äsken arvotun lisäkortin
  var button1 = document.getElementById("button1");
  button1.onclick = function() {
    var playerExtraCard = extraCard();
    amountPlayer.push(playerExtraCard);
    printExtraNumber(playerExtraCard);
  }


  //Laskee pelaajan ja koneen korttien summat taulukosta
  //kutsuu funktiota printSum ja asettaa parametreiksi pelaajan ja koneen korttien summat
  //Kutsuu funktiota computerNumber ja asettaa parametreiksi koneen korttien summat
  var button2= document.getElementById("button2");
  button2.onclick = function() 
  {
    var playerSum=0;
    var computerSum=0;
        for (var i = 0; i < amountPlayer.length; i++)
        {
          playerSum+= amountPlayer[i];
        }
  
        for (var i = 0; i < amountComputer.length; i++)
        {
          computerSum+= amountComputer[i];     
        }
        var comCard=amountComputer[0];
        var comCard1=amountComputer[1];
        printSum(playerSum, computerSum);
        computerNumber(comCard,comCard1);
        
    }
  