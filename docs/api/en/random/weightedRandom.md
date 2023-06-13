# weightedRandom

Get a random item from a list of random numbers based on the weight list.

## params

-   randomList (any[] | Object<string,number>)：The list of random numbers, when randomList is Object, the weight list will be ignored, the key of Object is the list of random numbers, and the value is the weight list

-   [weightList] (number[]): The weight list, the length of the weight list must be the same as the length of the random number list, and the sum of the weight list must be greater than 1

## returns

-   (any)：A random item from the random number list

## example

```js
weightedRandom([1, 2, 3], [4, 5, 6]); // 4/15 probability to get 1, 5/15 probability to get 2, 6/15 probability to get 3
weightedRandom({ 1: 4, 2: 5, 3: 6 }); // ditto
```
