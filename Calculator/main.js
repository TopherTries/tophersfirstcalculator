// In the HTML are two inputs, and four buttons. The inputs are set to Number, and will accept number values.
// The buttons need to retrieve the values from the inputs, and either add, subtract, multiply, or divide the values, depending on which button is clicked.
//Once the button has been clicked, the resulting total then needs to be printed in the Result section on the DOM.

document.querySelector('#addition').addEventListener('click', addition)

  function addition () {
    total = Number(document.getElementById('firstValue').value) + Number(document.getElementById('secondValue').value);
    document.querySelector('#placeToPutResult').innerHTML = total;
  }

document.querySelector('#subtraction').addEventListener('click', subtraction)

  function subtraction () {
    total = Number(document.getElementById("firstValue").value) - Number(document.getElementById("secondValue").value);
    document.querySelector('#placeToPutResult').innerHTML = total;
  }

document.querySelector('#multiplication').addEventListener('click', multiplication)

  function multiplication () {
    total = Number(document.getElementById("firstValue").value) * Number(document.getElementById("secondValue").value);
    document.querySelector('#placeToPutResult').innerHTML = total;
  }

  document.querySelector('#division').addEventListener('click', division)

    function division () {
      total = Number(document.getElementById("firstValue").value) / Number(document.getElementById("secondValue")).value;
      document.querySelector('#placeToPutResult').innerHTML = total;
    }
