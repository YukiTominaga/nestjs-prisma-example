import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content?: string;

  @ApiProperty({ default: false })
  published?: boolean;

  @ApiProperty()
  authorId: string;
}
