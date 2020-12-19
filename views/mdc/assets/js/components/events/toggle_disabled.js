export class VToggleDisabled {
  constructor(options, params, event, root) {
    this.targetId = options.target;
    this.params = params;
    this.event = event;
    this.root = root;
  }

  call(results) {
    const targetId = this.targetId;
    const action = this.params.action;
    const delayAmt = this.event instanceof FocusEvent ? 500 : 0;
    const elem = this.root.getElementById(targetId);

    if (!elem) {
      const err = new Error(
        `Unable to locate node ${targetId}!`
        + ' Did you forget to attach it?',
      );

      results.push({
        action: 'toggle_disabled',
        contentType: 'v/errors',
        content: {exception: err.message},
      });

      return new Promise((_, reject) => reject(results));
    }

    const promiseObj = new Promise(function(resolve) {
      clearTimeout(elem.vTimeout);
      elem.vTimeout = setTimeout(function() {
        console.debug('Toggling disabled on: ' + targetId);
        elem.disabled = (action === 'disable')
        results.push({action: 'toggle_disabled', statusCode: 200});
        resolve(results);
      }, delayAmt);
    });
    return promiseObj;
  }
}
