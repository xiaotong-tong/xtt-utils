/**
 * @description throttle function
 * @description-cn 节流函数
 * @param { Function } func  The function to be throttled
 * @param { number} delay The delay time
 * @return { Function } Returns the throttled function
 */
declare function throttle<A extends any[], R>(func: (...args: A) => R, delay: number): (...args: A) => void;

declare module "xtt-utils" {
	export type { throttle };
}

declare module "xtt-utils/throttle" {
	export type { throttle as default };
}

export type { throttle, throttle as default };
