import inquirer from "inquirer";
import { data } from "./data/data.js";
import { db } from "./config/config.js";
import { collection, doc, setDoc } from "firebase/firestore";

const main = async () => {
  try {
    const select = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "******Welcome*****\nWhat do you want to do ?",
        choices: ["Generate data in the database", "Exit"],
      },
    ]);
    switch (select.option) {
      case "Generate data in the database":
        insertDataDB();
        break;
      case "Exit":
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

main();

const insertDataDB = () => {
  data.forEach(async (element) => {
    const newRefDatabase = doc(collection(db, "Discalculia"));
    await setDoc(newRefDatabase, element);
  });
  console.log("Successful data !!");
};
