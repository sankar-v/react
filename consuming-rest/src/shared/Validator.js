
class Validator {

  validateInputs(inputData) {
    if (!inputData.name) {
      alert("Please enter name of this item");
    } else if (!inputData.summary) {
      alert("Please enter summary of this item.");
    } else if (inputData.year.toString().match(/[^0-9]/g)) {
      alert("Year must be a number.");
    } else if (
      inputData.country.length > 0 &&
      !inputData.country.match(/^[a-z|A-Z][a-z|A-Z]$/)
    ) {
      alert("Country code must be two letters.");
    } else {
      return true;
    }
    return false;
  }
}

export default Validator;
