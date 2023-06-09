import chalk from "chalk";
const DEFAULT_NAMESPACE = "Server";

const info = (message: any, namespace?: string) => {
  if (typeof message === "string") {
    console.log(
      chalk.blueBright(
        `[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`
      )
    );
  } else {
    console.log(
      chalk.blue(
        `[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`,
        message
      )
    );
  }
};

const warn = (message: any, namespace?: string) => {
  if (typeof message === "string") {
    console.log(
      chalk.yellow(
        `[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`
      )
    );
  } else {
    console.log(
      chalk.yellowBright(
        `[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN]`,
        message
      )
    );
  }
};

const error = (message: any, namespace?: string) => {
  if (typeof message === "string") {
    console.log(
      chalk.red(
        `[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`
      )
    );
  } else {
    console.log(
      chalk.redBright(
        `[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR]`,
        message
      )
    );
  }
};

const getDate = () => {
  return new Date().toISOString();
};

const logging = { info, warn, error };

export default logging;
