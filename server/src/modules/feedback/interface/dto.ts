
import { PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CreateFeedbackAttrs } from "../core/feedbackEntity";

export class CreateFeedbackDto implements CreateFeedbackAttrs {
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    avatarUrl: string;
}

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {}
