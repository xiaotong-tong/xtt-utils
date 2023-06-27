# formatDate

格式化日期

> 该函数仅为简单处理，如果需要更复杂的格式化，建议使用 [day.js](https://day.js.org/zh-CN/)

## params

| 参数          | 类型                     | 默认值              | 描述                                           |
| ------------- | ------------------------ | ------------------- | ---------------------------------------------- |
| date          | Date \| string \| number | -                   | 日期                                           |
| format        | string \| object         | -                   | 格式化选项， 为 string 时相当于 format.format  |
| format.format | string                   | YYYY-MM-DD hh:mm:ss | 格式化字符串, 格式化标识符参考下方 format 区域 |
| format.lang   | string                   | en                  | 语言                                           |

## returns

-   (string|Function): 格式化后的日期

如果仅传入 date 参数，返回日期固定的偏函数，后续可以传入 format 参数，可以用于多次格式化同一个日期，
如果初次调用时已经传入了 format 参数，则直接返回格式化后的日期

## example

```js
formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss"); // => '2023-01-01 00:00:00'
formatDate("2023-01-01")("[YYYYMD]YYYY-M-D h:m:s"); // => 'YYYYMD2023-1-1 0:0:0'
formatDate("2023-01-01", "dddd"); // => 'Sunday'
formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }); // => '星期日'
```

### format

支持的格式化占位符选项：

| 占位符 | 输出          | 详情                   |
| ------ | ------------- | ---------------------- |
| YY     | 23            | 两位数的年份           |
| YYYY   | 2023          | 四位数的年份           |
| M      | 1-12          | 月份                   |
| MM     | 01-12         | 月份，会格式化为两位数 |
| D      | 1-31          | 日期                   |
| DD     | 01-31         | 日期，会格式化为两位数 |
| h      | 0-23          | 小时                   |
| hh     | 00-23         | 小时，会格式化为两位数 |
| m      | 0-59          | 分钟                   |
| mm     | 00-59         | 分钟，会格式化为两位数 |
| s      | 0-59          | 秒                     |
| ss     | 00-59         | 秒，会格式化为两位数   |
| SSS    | 000-999       | 毫秒，会格式化为三位数 |
| d      | 0-6           | 星期几，0 代表星期日   |
| dd     | 日-六         | 星期几，最短写法       |
| ddd    | 周日-周六     | 星期几，短写法         |
| dddd   | 星期日-星期六 | 星期几，长写法         |

> dd, ddd, dddd 选项需要传入 lang 参数才能生效, 默认为 'en'
> 取值为 Intl.DateTimeFormat 中的 [weekday](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) 选项
> dd -> narrow, ddd -> short, dddd -> long

**星期取值列表**

| lang | format | 星期一 | 星期二  | 星期三    | 星期四   | 星期五 | 星期六   | 星期日 |
| ---- | ------ | ------ | ------- | --------- | -------- | ------ | -------- | ------ |
| en   | d      | 1      | 2       | 3         | 4        | 5      | 6        | 0      |
| en   | dd     | M      | T       | W         | T        | F      | S        | S      |
| en   | ddd    | Mon    | Tue     | Wed       | Thu      | Fri    | Sat      | Sun    |
| en   | dddd   | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
| zh   | d      | 1      | 2       | 3         | 4        | 5      | 6        | 0      |
| zh   | dd     | 一     | 二      | 三        | 四       | 五     | 六       | 日     |
| zh   | ddd    | 周一   | 周二    | 周三      | 周四     | 周五   | 周六     | 周日   |
| zh   | dddd   | 星期一 | 星期二  | 星期三    | 星期四   | 星期五 | 星期六   | 星期日 |

## references

-   MDN [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
