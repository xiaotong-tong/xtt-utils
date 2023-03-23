import { shuffle } from "./array/shuffle.js";
import { conversionBase } from "./number/conversionbase.js";
import { random } from "./random/random.js";
import { randomList } from "./random/randomlist.js";
import { weightedRandom } from "./random/weightedrandom.js";
import { nonDuplicateRandomList } from "./random/nonduplicaterandomlist.js";
import { reverse } from "./string/reverse.js";
import { strToNum } from "./string/strtonum.js";
import { charToCodePoint } from "./string/chartocodepoint.js";

const xttUtils = {
	array: {
		shuffle
	},
	number: {
		conversionBase
	},
	random: {
		random,
		randomList,
		weightedRandom,
		nonDuplicateRandomList
	},
	string: {
		reverse,
		strToNum,
		charToCodePoint
	}
};

export default xttUtils;
