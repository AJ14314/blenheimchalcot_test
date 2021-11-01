# blenheimchalcot Test
Coding problem of blenheimchalcot

## Installation
1. Make sure node.js v12+ is installed on your system.
2. Download the application from github.
3. Open command prompt or terminal, where project is downloded.
4. Type "npm install", after that type "npm run".
5. Open any API platform tool and type http://localhost:3000/ and method type as GET.
6. If you see Hello World, then the code is working.
7. To test account type check feature type http://localhost:3000/api/checkaccounttype and method type as POST along with the in the below format.
[
  {
    "monthNumber": 0,
    "account": {
      "balance": {
        "amount": 0
      }
    }
  },
  {
    "monthNumber": 1,
    "account": {
      "balance": {
        "amount": 119
      }
    }
  },
  {
    "monthNumber": 2,
    "account": {
      "balance": {
        "amount": 200
      }
    }
  }
]

8. The result will be displayed based on the input provided.


## Logic Explanation
1. Checking the length of the input, if there is no input sending response accordingly.
2. If there is some input, sorting the input based on the month number.
3. Calculating the difference between the inputs and pushing it to the set.
4. If the length of set is 1, it means that the difference between amount is constant.
5. If the length of the set is greater than 1, it means that the difference between amount is not constant.