  // Optional Javascript callback class. You typically need to define this when you have data to submit, or special
  // event handling to bind to.
  // To hook this up you need to provide the `v-plugin` class and
  // data-plugin-callback='RandomFacts' on the element.
  class RandomFacts {
    // passed the DOM element that has the .v-plugin class on it.
    constructor(element) {
      // This is where you might pull data elements into your
      // component from the markup. Like so:
      // this.data = element.dataset.someDataICareAbout;
    }

    // Optional
    // Called before the component is submitted via post/put. Allows the component to add its key/value pairs to the
    // submitted data.
    // If you provide this you need to add the v-input class to your DOM element to get called.
    // Containers iterate their elements that have the v-input class defined on them and invoke the prepareSubmit
    // function for each.
    prepareSubmit(params) {
      // params is a key,value pair. Add name/value like so:
      // params.push(['some_name', 'some_value']);
    }

    // Optional
    // Called whenever a container is about to be submitted, before prepareSubmit.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { page:  ["must be filled"] }
    // Returning an error stops the submission.
    validate(formData) {
      return true;
    }

    // Optional
    // Clear's the control
    clear() {
    }
  }
