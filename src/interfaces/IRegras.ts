import Transaction from "../model/Transaction";
import database from "../database/database";

interface IRegras {
    public salvar(transaction: Transaction): void{
        database.puch();
    }
}