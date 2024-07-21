const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, simple, colorize } = format;


const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    //   colorize(),파일로 저장시에 colorize 사용하면 부가적인 표시들이 나타나기 때문에, 안쓰는게 좋음.
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    printFormat
  ),
  console: combine (
    colorize(),
    simple()
  )
};

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

logger.stram = {
  write: (message) => logger.info(message),
};

module.exports = logger;
