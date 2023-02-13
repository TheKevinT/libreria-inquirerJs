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

//https://escuelavue.es/cursos/curso-firebase-gratis/vue-firebase-set-add/
//https://cloud.google.com/firestore/docs/manage-data/add-data?hl=es-419
//https://stackoverflow.com/questions/71461567/how-to-properly-upload-image-to-firebase-storage-and-save-link-to-firestore
//https://www.youtube.com/watch?v=A5yjN73Aj7s&t=689s
