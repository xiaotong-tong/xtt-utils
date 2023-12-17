/**
 * @description-en Delete the leading spaces of the line, keep the indent level, if it is multiple lines, then delete the minimum common space number of all lines
 * @description-cn 删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数
 * @param {string} str
 * @param {object} options
 * @param {boolean} [options.removeFirstEmptyLine=false] Whether to delete the empty line of the first line. The default value is false
 * @param {boolean} [options.removeLastEmptyLine=false] Whether to delete the empty line of the last line. The default value is false
 * @returns {string} Returns the string after the operation
 * @example
 * trimLineStart("  123") // "123"
 * trimLineStart("  123\n  456") // "123\n456"
 * trimLineStart("  123\n    456") // "123\n  456"
 */
declare function trimLineStart(
	str: string,
	options?: {
		removeFirstEmptyLine?: boolean;
		removeLastEmptyLine?: boolean;
	}
): string;

declare module "xtt-utils" {
	export { trimLineStart };
}

declare module "xtt-utils/trimLineStart" {
	export { trimLineStart as default };
}

export default trimLineStart;
