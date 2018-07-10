export class Message {
  expiration: string;
  message: string;

  constructor({expiration = '', message = ''} = {}) {
    this.expiration = expiration;
    this.message = message;
  }
}
