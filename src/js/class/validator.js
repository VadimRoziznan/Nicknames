export default class Validator {
  constructor(name) {
    this.name = this.validateUsername(name)
  }
  validateUsername(name) {
    const re =  /^(?![\d_-])(?!.*[\d_-]{4})[a-zA-Z\d_-]*[a-zA-Z]$/;
    if (re.test(name)) {
      return name
    } else {
      throw new Error('Никнейм не прошёл валидацию')
    }
  }
}
