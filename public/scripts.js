function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();

  // Push our data into our FormData object
  for(name in data) {
    FD.append(name, data[name]);
  }

  // Define what happens on successful data submission
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // Define what happens in case of error
  XHR.addEventListener('error', function(event) {
    alert('Oups! Something went wrong.');
  });

  // Set up our request
  XHR.open('POST', 'https://example.com/cors.php');

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD);
}

window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oups! Something goes wrong.');
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Access the form element...
  var form = document.getElementById("myForm");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});