import { ClientEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class ClientsByCepClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(cep: string): Promise<{
        cep: string,
        numPF: number,
        numPJ: number
    }> {
        return await this._repository.groupUsersByCep(cep);
    }
}

export default new ClientsByCepClientUseCase(
    ClientsRepository
);