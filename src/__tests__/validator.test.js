import Validator from "../js/class/validator";

test("Name Validation", () => {
    const newUserName = new Validator("Vadim");
    const correct = {
        name: "Vadim"
    }
    expect(newUserName).toEqual(correct);

})

test('should throw an error when a name starts with a number', () => {
    expect(() => {
      new Validator('1Daemon');
    }).toThrow('Никнейм не прошёл валидацию');
  });

test('should throw an error when the name ends with a number', () => {
    expect(() => {
        new Validator('Daemon1');
    }).toThrow('Никнейм не прошёл валидацию');
});

test('should throw an error when the name contains an invalid character', () => {
    expect(() => {
        new Validator('Dae+mon');
    }).toThrow('Никнейм не прошёл валидацию');
});

test('should throw an error when there are more than three digits in a row in a name', () => {
    expect(() => {
        new Validator('Dae1111mon');
    }).toThrow('Никнейм не прошёл валидацию');
});

test('should throw an error when a name starts with a dash', () => {
    expect(() => {
      new Validator('-Daemon');
    }).toThrow('Никнейм не прошёл валидацию');
});

test('should throw an error when the name ends with a dash', () => {
    expect(() => {
        new Validator('Daemon-');
    }).toThrow('Никнейм не прошёл валидацию');
});

test('should throw an error when a name starts with a underscore', () => {
    expect(() => {
      new Validator('_Daemon');
    }).toThrow('Никнейм не прошёл валидацию');
});

test('should throw an error when the name ends with a underscore', () => {
    expect(() => {
        new Validator('Daemon_');
    }).toThrow('Никнейм не прошёл валидацию');
});
 
