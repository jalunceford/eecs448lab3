document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("submit").addEventListener("click", () => {
    let error = false;
    let firstPass = document.getElementById("firstPass");
    let pass1 = firstPass.value;
    let secondPass = document.getElementById("secondPass");
    let pass2 = secondPass.value;
    if (pass1 != pass2){
      alert("Your passwords must match!");
      error = true;
    }
    if (pass1.length < 8 || pass2.length < 8){
      alert("Your passwords must be atleast 8 characters long!");
      error = true;
    }
    if (!error){
      alert("Success! Password Validated!");
    }
  });
});
