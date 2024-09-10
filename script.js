
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

const romanNumerals = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' }
];

const convertToRoman = () => {
  let input = parseInt(numberInput.value);

  if (isNaN(input)) {
    return "Please enter a valid number";
  } else if (input < 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (input > 3999) {
    return "Please enter a number less than or equal to 3999";
  }

  let commit = "";

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (input >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      input -= romanNumerals[i].value;
    }
  }

  return result;
}

convertBtn.addEventListener("click", () => {
  output.classList.remove("show-hide-display");
  output.innerText = convertToRoman();
}
)

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    output.classList.remove("show-hide-display");
    output.innerText = convertToRoman();
  }
}
)
