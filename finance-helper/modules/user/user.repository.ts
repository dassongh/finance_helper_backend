import { inject, injectable } from 'inversify';

import { IUserRepository } from './user.repository.interface';

import { BaseRepository } from '../../common/base.repository';
import { Types } from '../../common/types';
import { Table } from '../../constants';
import { ClientManager } from '../database/client.manager';

@injectable()
export class UserRepository extends BaseRepository implements IUserRepository {
  constructor(@inject(Types.ClientManager) clientManger: ClientManager) {
    super(clientManger, Table.Users);
  }
}
