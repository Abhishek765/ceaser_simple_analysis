const alphabet = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z'
  ];
  
  const form = document.forms[0];
  let output = document.getElementsByClassName('outputCeaser')[0];
  let originalInput;
  form.addEventListener ('submit',event => {
    event.preventDefault();
    originalInput = form.Ciphertext.value.toLowerCase();
    console.log('originalInput', originalInput);
    for (let index = 1; index <= 10; index++) {
       
        
       output.getElementsByClassName("plaintext")[index-1].innerHTML = [... form.Ciphertext.value ].map(char => 
            DecryptCipher(char, index)).join('') + " Key: " + index;

    }
   }
  );

  function DecryptCipher(char, index) {
        if (alphabet.includes(char.toUpperCase()))
        { 
          const position = alphabet.indexOf(char.toUpperCase());
          const newPosition = (position - index)%26;
          return alphabet[newPosition] 
        }
        else { return char } 
    }




    //Encryption test
    
    let check;
    const form1 = document.forms[1];
    const output1 = document.getElementById('tesCeaser');
    
    form1.addEventListener ('submit',event => {
      event.preventDefault();
       check = output1.innerHTML = [... form1.plaintext.value ].map(char => encryptCeaser(char)).join('');
      //  console.log('check', check.toLowerCase())
      if(originalInput == check.toLowerCase()){
        alert("You guessed it right");
      }
      else{ 
        alert("Try Again...");
      }
    }
    );
    
    function encryptCeaser(char) {
      // const shift = Number(form1.shift.value);
        const shift = 3;
      if (alphabet.includes(char.toUpperCase()))
      { 
        const position = alphabet.indexOf(char.toUpperCase());
        const newPosition = (position + shift)%26;
        return alphabet[newPosition] 
      }
      else { return char }
      }



    