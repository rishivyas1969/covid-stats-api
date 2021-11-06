import { Injectable } from "@nestjs/common";
import { Readable } from "stream";
import { IndiaModel } from "./india.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as mogoosePaginate from 'mongoose-paginate-v2'
const csv = require('csvtojson');

@Injectable()
export class IndiaService {

    constructor(@InjectModel('India') private readonly indiaModel: Model<IndiaModel>) {}

    async insertData(binary: any) {
        const stream = new Readable();
        stream.push(binary);
        stream.push(null);
        const streamed = stream.read();
        const str = streamed.toString('ascii');
        const data = await csv().fromString(str);

        let res;
        data.forEach(async (ele) => {
            const d = new this.indiaModel({date: ele.date, cases: ele.cases, month: ele.month}) ;
            res = await d.save();
            console.log(res);
        });
        
        return null;
    }

    // async getData() {
    //     const data = await this.indiaModel.find();
    //     console.log(data);
    //     return data;
    // }

    async getDataByPage(page: number) {
        if(page){
            const limit = 10;
        const data = await this.indiaModel.find().sort({_id:1}).skip((page - 1)*limit).limit(limit);
        return data;
        }
        else {
            const data = await this.indiaModel.find();
        console.log(data);
        return data;
        }
        
    }
}