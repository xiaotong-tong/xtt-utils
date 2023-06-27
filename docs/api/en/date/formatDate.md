# formatDate

Format date

> This function is only for simple processing. If you need more complex formatting, it is recommended to use [day.js](https://day.js.org/en/)

## params

-   date (Date|string|number): Date
-   format (string|object): Format string or format options
    -   format (string): Format string, default is 'YYYY-MM-DD hh:mm:ss', available values refer to the format list below
    -   lang (string): Language, default is 'en'

## returns

-   (string|Function): Formatted date

If only the date parameter is passed, it returns a partially applied function with a fixed date. The format parameter can be passed in later, which can be used to format the same date multiple times. If the format parameter is passed in during the initial call, the formatted date is returned directly.

## example

```js
formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss"); // => '2023-01-01 00:00:00'
formatDate("2023-01-01")("[YYYYMD]YYYY-M-D h:m:s"); // => 'YYYYMD2023-1-1 0:0:0'
formatDate("2023-01-01", "dddd"); // => 'Sunday'
formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }); // => '星期日'
```

### format

Supported format placeholders:

| Placeholder | Output          | Details                                |
| ----------- | --------------- | -------------------------------------- |
| YY          | 23              | Two-digit year                         |
| YYYY        | 2023            | Four-digit year                        |
| M           | 1-12            | Month                                  |
| MM          | 01-12           | Month, formatted to two digits         |
| D           | 1-31            | Date                                   |
| DD          | 01-31           | Date, formatted to two digits          |
| h           | 0-23            | Hour                                   |
| hh          | 00-23           | Hour, formatted to two digits          |
| m           | 0-59            | Minute                                 |
| mm          | 00-59           | Minute, formatted to two digits        |
| s           | 0-59            | Second                                 |
| ss          | 00-59           | Second, formatted to two digits        |
| SSS         | 000-999         | Millisecond, formatted to three digits |
| d           | 0-6             | Weekday, 0 represents Sunday           |
| dd          | S-S             | Weekday, shortest form                 |
| ddd         | Sun-Sat         | Weekday, short form                    |
| dddd        | Sunday-Saturday | Weekday, long form                     |

> The dd, ddd, and dddd options require the lang parameter to be passed in to take effect. The default is 'en'.
> The value is the weekday option in Intl.DateTimeFormat.
> dd -> narrow, ddd -> >short, dddd -> long

**weekday values**

| lang | format | Mon    | Tue     | Wed       | Thu      | Fri    | Sat      | Sun    |
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
