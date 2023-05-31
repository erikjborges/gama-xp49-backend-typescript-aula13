import { ITransactionEntity } from "../entities/transactions/transaction.entity";

export interface ITransactionsRepository {
    readById(resourceId: number): Promise<ITransactionEntity | undefined>,
    create(resource: ITransactionEntity): Promise<ITransactionEntity>,
    deleteById(resourceId: any): Promise<void>,
    list(parentId?: any): Promise<ITransactionEntity[]>,
    updateById(resource: ITransactionEntity): Promise<ITransactionEntity | undefined>
}