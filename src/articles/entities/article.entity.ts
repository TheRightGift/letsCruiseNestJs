import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    url: string;
    
    @Column()
    title: string;

    @ManyToOne(type => Category, category => category.id)
    category: Category;

    @Column()
    createdAt: Date;

    @Column({nullable: true, default: null})
    deletedAt: Date;
}
