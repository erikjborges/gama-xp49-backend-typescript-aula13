import mongoose from "mongoose";
import { IDatabase } from "../database.interface"
import mongoConfig from "../../config/mongo.config";

export class MongoDatabase implements IDatabase {
    private static _instance: MongoDatabase;
    private _db: string;
    private _user: string;
    private _pass: string;
    private _host: string;
    private _port: number;

    private constructor(){
        this._db = mongoConfig.database!;
        this._host = mongoConfig.host!;
        this._user = mongoConfig.user!;
        this._pass = mongoConfig.pass!;
        this._port = mongoConfig.port;

        // mongoose.connect(`mongodb://${this._user}:${this._pass}@${this._host}:${this._port}/${this._db}?authSource=admin`);
        // mongoose.connect(`mongodb://${this._host}:${this._port}/${this._db}`);
    }

    public static getInstance(): MongoDatabase {
        if (!MongoDatabase._instance) {
            MongoDatabase._instance = new MongoDatabase();
        }

        return MongoDatabase._instance;
    }

    create(doc: mongoose.Model<any>, data: any): any {
        return doc.create(data);
    }

    async update(doc: mongoose.Document<any>, data: any): Promise<any> {
        doc.overwrite(data);
        return doc.save();
    }

    list(model: mongoose.Model<any>, dataWhere: any): any {
        return model.find(dataWhere);
    }

    async delete(model: mongoose.Model<any>, dataWhere: object): Promise<boolean> {
        const result = await model.deleteOne(dataWhere);
        return (result.deletedCount > 0);
    }

    read(model: mongoose.Model<any>, dataId: number): any {
        return model.findById(dataId);
    }
}