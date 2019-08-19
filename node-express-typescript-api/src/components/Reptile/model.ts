import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IMovieModel
 * @extends {Document}
 */
export interface IMovieModel extends Document {
    name: string,
    downLink:string,
    imgUrl:string,
    href:string,
    years:number,
    type?:string,
}

const MovieSchema: Schema = new Schema({
    name: String,
    downLoadHref:String,
    picture:String,
    href:String,
    years:Number,
    type:String,
}, {
    collection: 'moviemodel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {
    const movie: IMovieModel = this; // tslint:disable-line
    next();
});

export default connections.db.model < IMovieModel > ('MovieModel',MovieSchema);
