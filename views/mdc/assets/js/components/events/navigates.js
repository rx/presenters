export class VNavigates {
  constructor(options, params, event, root) {
    this.direction = params.direction;
  }

  call(results) {
    const direction = this.direction;
    return new Promise(function(resolve) {
      results.push({action: 'navigates', statusCode: 200});
      resolve(results);
      switch (direction) {
        case 'back':
          window.history.back();
        case 'forward':
          window.history.forward();
      }
    });
  }
}
