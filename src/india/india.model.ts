import * as mongoose from 'mongoose';

export const IndiaSchema = new mongoose.Schema({
    date: { type: Date, required: true},
    cases: { type: Number, required: true},
    month: { type: String, required: false}
})

export interface IndiaModel extends Document {
    
    id: string,
    month: string,
    cases: string
    
}