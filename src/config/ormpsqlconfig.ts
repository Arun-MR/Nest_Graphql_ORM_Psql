import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../user/user.entity'; // Adjust the path as necessary

const ormConfig: TypeOrmModuleOptions = {
  //TypeOrmModuleOptions: This interface from TypeORM helps ensure that the configuration object conforms to the expected format.
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'password',
  database: 'mydatabase',
  entities: [User], // Registering User entity
  synchronize: true,
  logging: true,
};

export default ormConfig;
