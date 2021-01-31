import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1610374438691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // 升级数据库
      await queryRunner.createTable(
          new Table({
              name: 'user',
              columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy:"increment", isPrimary: true },
                { name: 'username',type: 'varchar', isUnique: true},
                { name: 'createAt', type: 'timestamp', isNullable: false, default: 'now()' },
                { name: 'updateAt', type: 'timestamp', isNullable: false, default: 'now()' }
              ]
          })
        )
        await queryRunner.createTable(
          new Table({
              name: 'post',
              columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy:"increment", isPrimary: true },
                { name: 'createAt', type: 'timestamp', isNullable: false, default: 'now()' },
                { name: 'updateAt', type: 'timestamp', isNullable: false, default: 'now()' }
              ]
          })
        )
        await queryRunner.createTable(
          new Table({
              name: 'comment',
              columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy:"increment", isPrimary: true },
                { name: 'createAt', type: 'timestamp', isNullable: false, default: 'now()' },
                { name: 'updateAt', type: 'timestamp', isNullable: false, default: 'now()' }
              ]
          })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users')
    }

}
