import { Body, Controller, Get, Post, Query, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Express } from 'express';
import { FileInterceptor } from "@nestjs/platform-express";
import { IndiaService } from "./india.service";

@Controller('api')
export class IndiaController {

    constructor(private readonly indiaService: IndiaService) {}

    @UseInterceptors(FileInterceptor('file'))
    @Post()
    async addData(@UploadedFile() file: Express.Multer.File ) {
        await this.indiaService.insertData(file.buffer);
    }

    @Get('india?')
    async getDataFromPage(@Query('page') page: number) {
        const pageNum: number = page;
        return this.indiaService.getDataByPage(pageNum);
    }

    // @Get('india')
    // async getData() {
    //     return this.indiaService.getData();
    // }
}