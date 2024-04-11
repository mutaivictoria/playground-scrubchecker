// Assuming you have a file input element in your HTML with id="fileInput"
const fileInput = document.getElementById("fileInput");
const file = fileInput.files[0]; // Get the first file selected by the user

if (file) {
  const formdata = new FormData();
  formdata.append("file", file);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:5000/scrubs", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
} else {
  console.error("No file selected.");
}
