import { Column, DataType, Model, Table } from "sequelize-typescript";
import type { PriceType } from "../core/priceEntity";

export interface PriceModelCreationAttrs {
    amount: number,
    title: string,
    description: string,
    type: PriceType
}

@Table({tableName: "price"})
export class PriceModel extends Model<PriceModel, PriceModelCreationAttrs> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    declare amount: number;

    @Column({ type: DataType.STRING, allowNull: false })
    declare title: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    declare description: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare type: PriceType;
}
