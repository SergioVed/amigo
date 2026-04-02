import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface CodeModelCreationAttrs {
    codeHash: string,
    email: string,
    expiresAt: Date,
    usedAt?: Date | null
}

@Table({
    tableName: "code",
    indexes: [
        {
            unique: true,
            fields: ["id"]
        }
    ]
})
export class CodeModel extends Model<CodeModel, CodeModelCreationAttrs> {

    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    declare codeHash: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare email: string;

    @Column({ type: DataType.DATE, allowNull: false })
    declare expiresAt: Date;

    @Column({ type: DataType.DATE, allowNull: true })
    declare usedAt: Date | null;
}
