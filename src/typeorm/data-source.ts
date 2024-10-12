import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
config();

export const typeORMOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL_WITH_SCHEMA,
  synchronize: false, // should be false in production
  logging: true,
  migrationsRun: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/*/migrations/*.js'],
}

export const AppDataSource = new DataSource(typeORMOptions)
