const emailForm = document.getElementById("emailForm");

(() => {
  document.getElementById("receipentEmail").value = "<your email>";
  document.getElementById("inputName").value = "<your name>";
  document.getElementById("inputPassword").value = "<your password>";
  document.getElementById("inputEmail").value = "<receipent email>";
  document.getElementById("inputSubject").value = "<email subject>";
  document.getElementById("inputMessage").value = "<email body>";
})();

emailForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const receipent = document.getElementById("receipentEmail").value;
  const name = document.getElementById("inputName").value;
  const password = document.getElementById("inputPassword").value;
  const email = document.getElementById("inputEmail").value;
  const subject = document.getElementById("inputSubject").value;
  const message = document.getElementById("inputMessage").value;

  const requestBody = { receipent, name, password, email, subject, message };

  try {
    const response = await fetch("http://localhost:5000/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const { success } = await response.json();
    if (!success) throw new Error("Some error occured");
    alert("Email sent!");
  } catch (error) {
    alert("Some error occured");
  }
});
