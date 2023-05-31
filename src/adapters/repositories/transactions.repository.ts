import { ITransactionEntity } from "../../domain/entities/transactions/transaction.entity";
import { MongoDatabase } from "../../infrastructure/persistence/mongo/mongo.database";
import { ITransactionsRepository } from "../../domain/repositories/transactions.repository.interface";
import transacoesModel from '../../infrastructure/persistence/mongo/models/transacoes.models.mongo.database';
import mongoose from "mongoose";
import { IDatabase } from "../../infrastructure/persistence/database.interface";

export class TransactionsRepository implements ITransactionsRepository {
    constructor(
        private _database: IDatabase, 
        private _modelTransactions: mongoose.Model<any>
        ){
    }

    async readById(resourceId: number): Promise<ITransactionEntity | undefined> {
        try{
            const transaction = await this._database.read(this._modelTransactions, resourceId);
            return transaction;
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: ITransactionEntity): Promise<ITransactionEntity> {
        const transactionModel = await this._database.create(this._modelTransactions, resource);
        resource.indexId = transactionModel._id;
        return resource;
    }

    async deleteById(resourceId: string): Promise<void> {
        await this._database.delete(this._modelTransactions, { _id: resourceId });
    }

    async list(resourceId: string): Promise<ITransactionEntity[]> {
        const pessoas = this._database.list(this._modelTransactions, {
            accountSourceId: Number(resourceId)
        });
        return pessoas;
    }

    async updateById(resource: ITransactionEntity): Promise<ITransactionEntity | undefined> {
        let transactionModel = await this._database.read(this._modelTransactions, resource.indexId!);
        await this._database.update(transactionModel, resource);
        return resource;
    }
}

export default new TransactionsRepository(
    MongoDatabase.getInstance(),
    transacoesModel
    );