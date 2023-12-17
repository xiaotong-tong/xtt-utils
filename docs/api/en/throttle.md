# throttle

Throttle function.

When the function is called, if it is in an idle state, the function is executed immediately and enters a waiting state. If the function is called again during the waiting time, the current call value is saved until the waiting time ends. If the function is called multiple times, the last call value will overwrite the previous call values. After the waiting time ends, if there is a saved call value, the function is executed and enters a waiting state again. If there is no saved call value, it enters an idle state and waits for the next call.

## params

-   func (function): The function to be throttled.
-   delay (number): The waiting time.

## returns

-   (function): The throttled function.

## example

```js
// 1 2 3 4 5 6 7 8 9 10
throttle((a) => console.log(a), 3000);
// If triggered every 0.9 seconds
// 1 4 7 10
// Trigger 1 at 0.9 seconds, execute immediately;
// Trigger 2 after 1.8 seconds, wait;
// Trigger 3 after 2.7 seconds, wait;
// Trigger 4 after 3.6 seconds, wait;
// When the waiting time ends at 3.9 seconds, run the last call and output 4;
// Trigger 5 after 4.5 seconds, wait
// ...
```
