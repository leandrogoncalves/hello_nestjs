import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1592170054673 implements MigrationInterface {
  private userTable = new Table({
    name: "users",
    columns: [
      {
        name: "id",
        type: "INTEGER",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "name",
        type: "varchar",
        length: "255",
        isNullable: false,
      },
      {
        name: "email",
        type: "varchar",
        length: "255",
        isNullable: false,
      },
      {
        name: "created_at",
        type: "timestamptz",
        isNullable: false,
        default: "now()",
      },
      {
        name: "updated_at",
        type: "timestamptz",
        isNullable: false,
        default: "now()",
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.userTable);
  }
}
