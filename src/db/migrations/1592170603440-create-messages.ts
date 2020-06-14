import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createMessages1592170603440 implements MigrationInterface {
  private messageTable = new Table({
    name: "messages",
    columns: [
      {
        name: "id",
        type: "INTEGER",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "content",
        type: "varchar",
        length: "255",
        isNullable: false,
      },
      {
        name: "user_id",
        type: "integer",
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

  private foreignKey = new TableForeignKey({
    columnNames: ["user_id"],
    referencedColumnNames: ["id"],
    onDelete: "CASCADE",
    referencedTableName: "users",
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.messageTable);
    await queryRunner.createForeignKey("messages", this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.messageTable);
  }
}
