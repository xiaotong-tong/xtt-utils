export const random = (min: number, max: number): number => {
	// 返回一个包含 min 和 max 的随机数
	return Math.floor(Math.random() * (max - min + 1) + min);
};
