import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import type { CeoCreationAttrs } from "../core/ceoEntity";

@Table({
    tableName: "ceo",
    indexes: [
        {
            unique: true,
            fields: ["id"]
        }
    ]
})
export class CeoModel extends Model<CeoModel, CeoCreationAttrs> {
    
    @Default(1)
    @Column({
        type: DataType.INTEGER,
        primaryKey: true, 
        validate: {
            isIn: [[1]]
        }
    })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    declare name: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    declare description: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare telegram: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare instagram: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare image: string;
}
