// Common Shared Function Here

// function getInputFieldValueById(){
//   console.log('will get value by id');
//   const addMoney = document.getElementById('input-add-money').value;
//   return addMoney;
// }

function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}

function getTextFieldValueById(id){
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showSectionById(id){

  // hide all the section
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-section').classList.add('hidden');

  // show the section with the provide id as a parameter
  document.getElementById(id).classList.remove('hidden');
 
}