import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface FeedbackModelCreationAttrs {
    name: string,
    title: string,
    description: string,
    avatar_url: string
}

@Table({ tableName: "feedback" })
export class FeedbackModel extends Model<FeedbackModel, FeedbackModelCreationAttrs> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    declare name: string;

    @Column({ type: DataType.STRING(255), allowNull: false })
    declare title: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    declare description: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    declare avatar_url: string;
}
