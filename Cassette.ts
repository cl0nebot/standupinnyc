const nock = require('nock')
const nockBack = nock.back;
nockBack.setMode(process.env.NOCK_BACK_MODE || 'record');


nockBack.fixtures = './fixtures/cassettes/';


class Cassette {
  done: any;
  name: string;
  context: any;
  constructor(name: string) {
    this.name = name;
    this.done;
  }

  // Method
  start() {
    return nockBack(`${this.name}.json`)
      .then(({nockDone, context}) => {
        this.done = nockDone;
        this.context = context
        return {nockDone, context}
      })
  }
}

export {Cassette}


