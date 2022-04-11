import { ApiProperty } from "@nestjs/swagger";
import { ManyToOne } from "typeorm";

export class CreateArticleDto {
    id: number;
    
    @ApiProperty()
    url: string;
    
    @ApiProperty()
    title: string;
    
    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    deletedAt: Date;
}
