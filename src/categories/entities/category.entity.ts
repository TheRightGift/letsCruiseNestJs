import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    createdAt: Date;

    @Column({nullable: true, default: null})
    deletedAt: Date;
}
