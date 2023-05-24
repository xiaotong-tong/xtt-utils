/**
 * 循环
 * @param {*} collection 循环目标
 * @param {function} iteratee 循环体
 * @param {object} options 参数
 * @param {object} options.thisArg 循环体的 this 值
 * @param {boolean} options.asyncIterator 循环目标是否是异步
 * @returns {void}
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
			let i = 0;
			// 如果 asyncIterator 参数为 true 或者 有 异步迭代器，执行 for await of 循环，否则执行 for of 循环
			if (asyncIterator || target[Symbol.asyncIterator]) {
				(async () => {
					for await (const iterator of target) {
						iteratee.call(thisArg, iterator, i, target);
						i++;
					}
				})();
			} else {
				for (const iterator of target) {
					iteratee.call(thisArg, iterator, i, target);
					i++;
				}
			}

			looped = true;
		}
	};

	loop(collection);

	if (!looped) {
		// 因为普通对象中没有实现迭代器，这里判断是否为普通对象，如果是，就循环对象的 Object.entries 接口
		if (collection instanceof Object) {
			loop(Object.entries(collection));
		}
	}
};
