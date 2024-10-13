import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1728837808961 implements MigrationInterface {
    name = 'Migration1728837808961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', "avatar" character varying, "phone" character varying, "address" character varying, "birthday" character varying, "gender" character varying, "description" character varying, "status" character varying, "created_at" character varying NOT NULL, "updated_at" character varying, "deleted_at" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
