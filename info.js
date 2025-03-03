require("dotenv").config();

const { NAME, LAST_NAME, NUMBER_MY_GROUP, PERSONAL_NUMBER } = process.env;

const infoAboutMe = () => {
  return console.log(NAME, LAST_NAME, NUMBER_MY_GROUP, PERSONAL_NUMBER);
};

infoAboutMe();
