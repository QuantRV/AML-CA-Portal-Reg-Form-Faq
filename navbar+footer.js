function preloaderFunction() {

    document.querySelector(".Rpreload").style.display = "none"
  
  }

  
// Form js
let form = document.querySelector("#myForm");
form.addEventListener
  ('submit',
    (e) => {
      e.preventDefault();

      document.querySelector("#sub").innerHTML = "Submitting...";

      let data = new FormData(form);
      fetch("https://script.google.com/macros/s/AKfycbxMumVeFEho-rcCuV7fHHkR8Y5aOTjzgQRmntXMRA7uF_dLDk92JweDOLfAhY1xLB2e/exec", { method: "POST", body: data })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#sub").innerHTML = "Done";

          document.querySelector("#sub").style.backgroundImage = "none";
          document.querySelector("#sub").style.backgroundColor = "#212B85";
          document.querySelector("#container h2").innerHTML = "Subscribed";
          
          setTimeout(() => {
            document.querySelector("#sub").innerHTML = "Submit";
            document.querySelector("#sub").style.backgroundImage = "linear-gradient(to left, rgba(255, 146, 202, 0.75) 0%, rgba(145, 149, 251, 0.86) 100%)";
          }, 5000);

          document.getElementById("myForm").reset();
        });
    })


let navMenu = document.querySelector("#navMenu");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
}
)

