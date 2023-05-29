/**
 * @callback FormatFn
 * @description Partial function with date fixed
 * @description-cn 固定了日期的偏函数
 * @param {string} [format="YYYY-MM-DD hh:mm:ss"] format string like 'YYYY-MM-DD hh:mm:ss'
 * @returns {string} formatted date string
 */

/**
 * @description Format a date
 * @description-cn 格式化日期
 * @category Date
 * @param {Date | string | number} date The date to format.
 * @param {string} [format] format string like 'YYYY-MM-DD hh:mm:ss'
 * @returns {string | FormatFn} formatted date string or a partial function with the date fixed.
 * if format is not passed, return a partial function with date fixed
 * @example
 * formatDate("2023-01-01", 'YYYY-MM-DD hh:mm:ss') // => '2023-01-01 00:00:00'
 * formatDate("2023-01-01")('YYYY-MM-DD hh:mm:ss') // => '2023-01-01 00:00:00'
 */
export const formatDate = (date, format) => {
	const willFormatDate = date instanceof Date ? date : new Date(date);

	const year = willFormatDate.getFullYear().toString();
	const month = willFormatDate.getMonth() + 1 + "";
	const day = willFormatDate.getDate().toString();
	const hour = willFormatDate.getHours().toString();
	const minute = willFormatDate.getMinutes().toString();
	const second = willFormatDate.getSeconds().toString();
	const millisecond = willFormatDate
		.getMilliseconds()
		.toString()
		.padStart(3, "0");
	const week = willFormatDate.getDay().toString();

	const padMonth = month.padStart(2, "0");
	const padDay = day.padStart(2, "0");
	const padHour = hour.padStart(2, "0");
	const padMinute = minute.padStart(2, "0");
	const padSecond = second.padStart(2, "0");

	const formatFn = (format) => {
		if (!format) {
			return `${year}-${padMonth}-${padDay} ${padHour}:${padMinute}:${padSecond}`;
		}

		return format.replaceAll(
			/Y{2,4}|M{1,2}|D{1,2}|h{1,2}|H{1,2}|m{1,2}|M{1,2}|s{1,2}|SSS|d/g,
			(match) => {
				switch (match) {
					case "YYYY":
						return year;
					case "YY":
						return year.slice(-2);
					case "M":
						return month;
					case "MM":
						return padMonth;
					case "D":
						return day;
					case "DD":
						return padDay;
					case "h":
					case "H":
						return hour;
					case "hh":
					case "HH":
						return padHour;
					case "m":
						return minute;
					case "mm":
						return padMinute;
					case "s":
						return second;
					case "ss":
						return padSecond;
					case "SSS":
						return millisecond;
					case "d":
						return week;
				}
			}
		);
	};

	if (format) {
		return formatFn(format);
	}

	return formatFn;
};
