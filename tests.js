let expect = require('chai').expect;
let carService = require('./Car service');

describe('carService', () => {
    describe('isItExpensive', () => {
        it('test 1', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('test 2', () => {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('test 3', () => {
            expect(carService.isItExpensive('somethingElse')).to.equal(`The overall price will be a bit cheaper`);
        });
    });
    describe('discount', () => {
        it('test 4', () => {
            if('numberOfParts' === 2 || 'numberOfParts' <= 7) {
                expect(carService.discount(15, 100)).to.equal(15);
            };
           // expect(carService.discount('numberOfParts' > 2 && 'numberOfParts' <= 7, 15)).to.equal(100);
        })
        it('test 5', () => {
            if('numberOfParts' > 7) {
                expect(carService.discount(30, 100)).to.equal(30);
            };
           // expect(carService.discount('numberOfParts' > 7, 30)).to.equal(100);
        })
        it('test 6', () => {
            if ('numberOfParts' <= 2) {
                expect(carService.discount(2)).to.equal(`You cannot apply a discount`);
                expect(carService.discount(1)).to.equal(`You cannot apply a discount`);
            } else {
                expect(carService.discount(3)).to.equal(`Discount applied! You saved 1$`);
            } 
        }) 
    });
    describe('partsToBuy', () => {

    });
});
// (discountPercentage / 100) * totalPrice;
// (numberOfParts > 2 && numberOfParts <= 7)
// if (numberOfParts <= 2) {
  //  return "You cannot apply a discount";
//} else {
 // return `Discount applied! You saved ${result}$`;
//}