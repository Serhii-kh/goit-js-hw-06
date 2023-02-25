const formRef = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert(`Please fill in all fields!`);
  }

  console.log(formData);
  event.currentTarget.reset();
};

formRef.addEventListener("submit", onFormSubmit);
