const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns rooster call', () => {

      //setup
      const expected = 'cock-a-doodle-doo!';

      //exercise
      const test = Rooster.announceDawn();
      
      //test
      assert.equal(expected, test);

    })
  })

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {

      //setup
      const input = 10;
      const expected = '10';

      //exercise
      const test = Rooster.timeAtDawn(input);
    //test
      assert.strictEqual(expected, test);
    })
    it('throws an error if passed a number less than 0', () => {

      //setup
      const input = -2;
      const expected = RangeError;

      assert.throws(() => {
        Rooster.timeAtDawn(input) //exercise
      }, expected)

    })
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const input = 24;
      const expected = RangeError;

      assert.throws(() =>{
        Rooster.timeAtDawn(input) //exercise
      }, expected)
    })
  })
})
