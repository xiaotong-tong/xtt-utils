# TODO

- [ ] 优化 .d.ts 文件的打包与引入
- [ ] 优化 nonDuplicateRandomList 函数，在 count 较小时，使用 random 函数生成每一项，而不是使用 shuffle 函数。因为 shuffle 函数在 count 较小时，会生成大量的多余项，造成性能浪费。
- [ ] 优化 conversionBase 函数，添加参数，使其可以自定义分割符。
