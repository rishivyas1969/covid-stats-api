import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IndiaController } from "./india.controller";
import { IndiaSchema } from "./india.model";
import { IndiaService } from "./india.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'India', schema: IndiaSchema}])],
    controllers: [IndiaController],
    providers: [IndiaService]
}) 
export class IndiaModule {
}