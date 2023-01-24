
describe('fizzbuzz', function () {
    it('Hello Karma', function () {
        console.log('Hello World');
    });

    it('return Fizz if number is divisible by 3', function () {
        expect(fizzbuzz.process(3)).toBe(('Fizz'));
        expect(fizzbuzz.process(6)).toBe(('Fizz'));
    });
    it('return Buzz if number is divisible by 5', function () {
        expect(fizzbuzz.process(5)).toBe(('Buzz'));
        expect(fizzbuzz.process(10)).toBe(('Buzz'));
    });

    it('return FizzBuzz if number is divisible by both 3 and 5', function () {
        expect(fizzbuzz.process(15)).toBe(('FizzBuzz'));
        expect(fizzbuzz.process(30)).toBe(('FizzBuzz'));
    });

    it('return number itself if number is not divisible by both 3 and 5', function () {
        expect(fizzbuzz.process(2)).toBe(2);
    });
})
