# range

创建一个包含从 start 到 end 范围数字的数组（包含 end 本身）。

## params

-   [start=0] (number): 开始的数字
-   [end=0] (number): 结束的数字
-   [step] (number): 步长

如果只传一个参数，则创建一个从 0 到 start 范围数字的数组（包含 start 本身）。start 小于 0 时，step 默认为 -1, start 大于 0 时，step 默认为 1。

如果包含两个参数，则创建一个从 start 到 end 范围数字的数组（包含 end 本身）。start 小于 end 时，step 默认为 1, start 大于 end 时，step 默认为 -1。

## returns

-   (Array): 返回一个包含从 start 到 end 范围数字的数组（包含 end 本身）。

## example

```js
range(10); // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 相当于 range(0, 10) 或 range(0, 10, 1)

range(-10); // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
// 相当于 range(0, -10) 或 range(0, -10, -1)

range(1, 10, 7); // => [1, 8]
range(1, -10, -3); // => [1, -2, -5, -8]
```
