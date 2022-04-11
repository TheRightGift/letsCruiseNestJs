import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    deletedAt: Date;
}
