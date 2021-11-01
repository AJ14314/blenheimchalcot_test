const chai = require('chai');
const expect = chai.expect;

const typeChecker = require('../accountTypeChecker');

describe('checking account type', () => {
    context('checking account type', () => {
        it('should return B', () => {
            const input = [
                {
                    monthNumber: 0, // current month
                    account: {
                        balance: { amount: 0 },
                    },
                },
                {
                    monthNumber: 1, // last month
                    account: {
                        balance: { amount: 100 },
                    },
                },
                {
                    monthNumber: 2, // two months ago
                    account: {
                        balance: { amount: 200 },
                    },
                }
            ];

            const result = typeChecker(input);
            expect(result).to.equal('B');
        });
        it('should return A', () => {
            const input = [
                {
                    monthNumber: 0, // current month
                    account: {
                        balance: { amount: 0 },
                    },
                },
                {
                    monthNumber: 1, // last month
                    account: {
                        balance: { amount: 110 },
                    },
                },
                {
                    monthNumber: 2, // two months ago
                    account: {
                        balance: { amount: 240 },
                    },
                }
            ];
            const result = typeChecker(input);
            expect(result).to.equal('A');
        });
    });

});