/**
 * @callback Iteratee 循环体函数
 * @param {*} iterator 当前循环正在处理的元素
 * @param {number} i 当前循环正在处理的元素索引
 * @param {*} target 循环对象本身，如果循环的是 object 的话，这个值是 Object.entries(*) 后的值
 */

/**
 * 循环
 * @param {*} collection 循环目标
 * @param {Iteratee} iteratee 循环体
 * @param {object} options 参数
 * @param {object} options.thisArg 循环体的 this 值
 * @param {boolean} options.asyncIterator 循环目标是否是异步
 * @returns {Array | Promise<Array>} 循环体的返回结果
 */
export const fori = (collection, iteratee, options) => {
	if (typeof iteratee !== "function") {
		console.error(iteratee + " is not a function");
		return;
	}

	const { thisArg, asyncIterator } = options || {};

	let looped = false;

	const loop = (target) => {
		// 如果有迭代器或者异步迭代器代表可以循环
		if (target[Symbol.iterator] || target[Symbol.asyncIterator]) {
			looped = true;

			let i = 0;
			// 如果 asyncIterator 参数为 true 或者 有 异步迭代器，执行 for await of 循环，否则执行 for of 循环
			if (asyncIterator || target[Symbol.asyncIterator]) {
				return new Promise((resolve, reject) => {
					(async () => {
						const resPromiseList = [];
						for await (const iterator of target) {
							resPromiseList.push(
								new Promise((res) => {
									res(
										iteratee.call(
											thisArg,
											iterator,
											i,
											target
										)
									);
								})
							);
							i++;
						}
						Promise.all(resPromiseList)
							.then((v) => {
								resolve(v);
							})
							.catch((e) => {
								reject(e);
							});
					})();
				});
			} else {
				const resList = [];
				for (const iterator of target) {
					const res = iteratee.call(thisArg, iterator, i, target);
					i++;
					resList.push(res);
				}
				return resList;
			}
		}
	};

	let results = loop(collection);

	if (!looped) {
		// 因为普通对象中没有实现迭代器，这里判断是否为普通对象，如果是，就循环对象的 Object.entries 接口
		if (collection instanceof Object) {
			results = loop(Object.entries(collection));
		}
	}

	return results;
};
