function validateForm() {
    var x = document.forms["biodata"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    var x = document.forms["biodata"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }

    var x = document.forms["biodata"]["number"].value;
    if (x == "") {
      alert("Contact number must be filled out");
      return false;
    }

    var x = document.forms["biodata"]["date"].value;
    if (x == "") {
      alert("Date of Birth must be filled out");
      return false;
    }

    var x = document.forms["biodata"]["gender"].value;
    if (x == "") {
      alert("gender must be filled out");
      return false;
    }

    var x = document.forms["biodata"]["marks"].value;
    if (x == "") {
      alert("Marks must be filled out");
      return false;
    }
  }

  function checkDate(){
    var idate = document.getElementById("date"),
        resultDiv = document.getElementById("datewarn"),
        dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;

    if(!dateReg.test(idate.value)){
        resultDiv.innerHTML = "Invalid date!";
        resultDiv.style.color = "red";
        return;            
    } 

    if(isFutureDate(idate.value)){
        resultDiv.innerHTML = "Entered date is a future date";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "It's a valid date";
        resultDiv.style.color = "green";
    }
}