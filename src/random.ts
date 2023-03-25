import { random as r } from "./random/random.js";
import { randomList } from "./random/randomlist.js";
import { weightedRandom } from "./random/weightedrandom.js";
import { nonDuplicateRandomList } from "./random/nonduplicaterandomlist.js";

const random = {
	random: r,
	randomList,
	weightedRandom,
	nonDuplicateRandomList
};

export default random;
