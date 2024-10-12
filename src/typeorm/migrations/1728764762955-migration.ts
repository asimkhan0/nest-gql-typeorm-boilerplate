import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1728764762955 implements MigrationInterface {
    name = 'Migration1728764762955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "salt" character varying NOT NULL, "role" character varying NOT NULL, "avatar" character varying NOT NULL, "phone" character varying NOT NULL, "address" character varying NOT NULL, "birthday" character varying NOT NULL, "gender" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying NOT NULL, "createdAt" character varying NOT NULL, "updatedAt" character varying NOT NULL, "deletedAt" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
