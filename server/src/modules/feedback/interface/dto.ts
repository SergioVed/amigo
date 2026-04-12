
import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { CreateFeedbackAttrs } from "../core/feedbackEntity";

export class CreateFeedbackDto implements CreateFeedbackAttrs {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsUrl()
    avatarUrl: string;
}

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {}
