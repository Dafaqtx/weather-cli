import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.black(chalk.bgRed(" ERROR ")) + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.black(chalk.bgGreen(" SUCCESS ")) + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
       Без параметров - вывод погоды
       -s [CITY] - для установки города
       -h для вывода помощи
       -t [API_KEY] для сохранения токена
        `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.black(chalk.bgYellow(" WEATHER "))} Погода в городе ${
      res.name
    }
      ${icon}  ${res.weather[0].description}
      Температура: ${res.main.temp}°C (ощущается как ${res.main.feels_like}°C)
      Влажность: ${res.main.humidity}%
      Скорость ветра: ${res.wind.speed} м/с
      `
  );
};

export { printError, printSuccess, printHelp, printWeather };
