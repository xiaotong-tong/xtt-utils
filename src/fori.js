/**
 * @callback Iteratee
 * @description The function that will be executed on each iteration of the loop
 * @description-cn 循环体函数
 * @param {*} iterator The value of the current iteration
 * @param {number} i The index of the current iteration
 * @param {*} target The target of the current iteration. If the target is an object, this value is Object.entries(*)
 */

/**
 * @description Loop through the target
 * @description-cn 循环遍历目标
 * @category Function
 * @param {*} collection The target to be looped through
 * @param {Iteratee} iteratee The function to be executed on each iteration of the loop
 * @param {object} [options] The options for the loop
 * @param {object} [options.thisArg] The value of `this` in the iteratee function
 * @param {boolean} [options.asyncIterator] Whether the target is an async iterator
 * @returns {Array | Promise<Array>} Returns the results of the loop. If the target is an async iterator, the return value is a Promise
 */
const fori = (collection, iteratee, options) => {
	if (typeof iteratee !== "function") {
		console.error(iteratee + " is not a function");
		return;
	}

	const { thisArg, asyncIterator } = options || {};

	let looped = false;

	const loop = (target) => {
		// If the target has an iterator or asyncIterator, it can be looped
		if (target[Symbol.iterator] || target[Symbol.asyncIterator]) {
			looped = true;

			let i = 0;
			// If the asyncIterator parameter is true or there is an asynchronous iterator, execute the for await of loop, otherwise execute the for of loop
			if (asyncIterator || target[Symbol.asyncIterator]) {
				return new Promise((resolve, reject) => {
					(async () => {
						const resPromiseList = [];
						for await (const iterator of target) {
							resPromiseList.push(
								new Promise((res) => {
									res(iteratee.call(thisArg, iterator, i, target));
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
		// Because the iterator is not implemented in the ordinary object, judge whether it is an ordinary object here, if it is, loop the Object.entries interface of the object
		if (collection instanceof Object) {
			results = loop(Object.entries(collection));
		}
	}

	return results;
};

export default fori;
