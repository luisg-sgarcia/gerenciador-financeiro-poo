import Database from "./database/Database";
import TransactionService from "./service/TransactionService";
import TransactionController from "./controller/TransactionController";
import ConsoleView from "./view/ConsoleView";

const database = new Database();
const service = new TransactionService(database);
const controller = new TransactionController(service);
const view = new ConsoleView(controller);

console.log("\n".repeat(100));

view.iniciar();