/**
 * @callback FormatFn
 * @description Partial function with date fixed
 * @description-cn 固定了日期的偏函数
 * @param {string | object} [format] If format is a string, it will be automatically changed to { format: input }
 * @param {string} [format.format="YYYY-MM-DD hh:mm:ss"] format string like 'YYYY-MM-DD hh:mm:ss'
 * @param {string} [format.lang="en"] language
 * @returns {string} formatted date string
 */

/**
 * @description Format a date
 * @description-cn 格式化日期
 * @param {Date | string | number} date The date to format.
 * @param {string | object} [format] If format is a string, it will be automatically changed to { format: input }
 * @param {string} [format.format="YYYY-MM-DD hh:mm:ss"] format string like 'YYYY-MM-DD hh:mm:ss'
 * @param {string} [format.lang="en"] language
 * @returns {string | FormatFn} formatted date string or a partial function with a fixed date
 * if format is not passed, return a partial function with the date fixed.
 * @example
 * formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss") // => '2023-01-01 00:00:00'
 * formatDate("2023-01-01")("[YYYYMD]YYYY-M-D h:m:s") // => 'YYYYMD2023-1-1 0:0:0'
 * formatDate("2023-01-01", "dddd") // => 'Sunday'
 * formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }) // => '星期日'
 */
const formatDate = (date, format) => {
	const willFormatDate = date instanceof Date ? date : new Date(date);

	if (willFormatDate.toString().startsWith("Invalid")) {
		throw new Error(`${date} is a invalid date`)
	}

	const year = willFormatDate.getFullYear().toString();
	const month = willFormatDate.getMonth() + 1 + "";
	const day = willFormatDate.getDate().toString();
	const hour = willFormatDate.getHours().toString();
	const minute = willFormatDate.getMinutes().toString();
	const second = willFormatDate.getSeconds().toString();
	const millisecond = willFormatDate.getMilliseconds().toString().padStart(3, "0");
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

		const { format: formatStr = "YYYY-MM-DD hh:mm:ss", lang = "en" } =
			format instanceof Object ? format : { format: format };

		return formatStr.replaceAll(
			/\[[^\]]+\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS|d{1,4}/g,
			(match) => {
				if (match.startsWith("[")) {
					return match.slice(1, -1);
				}

				switch (match) {
					case "YYYY":
					case "yyyy":
						return year;
					case "YY":
					case "yy":
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
					case "dd":
						return new Intl.DateTimeFormat(lang, {
							calendar: lang.startsWith("zh") ? "chinese" : "iso8601",
							weekday: "narrow"
						}).format(willFormatDate);
					case "ddd":
						return new Intl.DateTimeFormat(lang, {
							calendar: lang.startsWith("zh") ? "chinese" : "iso8601",
							weekday: "short"
						}).format(willFormatDate);
					case "dddd":
						return new Intl.DateTimeFormat(lang, {
							calendar: lang.startsWith("zh") ? "chinese" : "iso8601",
							weekday: "long"
						}).format(willFormatDate);
				}
			}
		);
	};

	if (format) {
		return formatFn(format);
	}
	return formatFn;
};

export {
	formatDate,
	formatDate as default
}
