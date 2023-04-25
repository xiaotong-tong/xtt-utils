import { random as r } from "./random/random.js";
import { randomList } from "./random/randomlist.js";
import { weightedRandom } from "./random/weightedrandom.js";

const random = {
	random: r,
	randomList,
	weightedRandom
};

export default random;
