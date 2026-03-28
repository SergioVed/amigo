import {
    Column,
    DataType,
    Model,
    Table,
} from "sequelize-typescript";

export interface ProfessorModelCreationAttrs {
    avatar_url: string,
    name: string,
    description: string,
    sub_description: string,
    video_url: string,
    super_power: string[],
    favourite_word: string,
    for_student: string
}


@Table({tableName: "professor"})
export class ProfessorModel extends Model<ProfessorModel, ProfessorModelCreationAttrs>{
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    declare avatar_url: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare name: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    declare description: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    declare sub_description: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare video_url: string;

    @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
    declare super_power: string[];

    @Column({ type: DataType.STRING, allowNull: false })
    declare favourite_word: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    declare for_student: string;
}
