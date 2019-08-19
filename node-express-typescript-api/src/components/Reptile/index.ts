import * as passport from 'passport';
import ReptileService from './service';
import HttpError from '../../config/error';
import { NextFunction, Request, Response } from 'express';
import { movieReptile } from './movieReptile';

/**
 * @export
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns {Promise < void >}
 */
export async function getData(req: Request, res: Response, next: NextFunction): Promise<void> {
    movieReptile();
    res.status(200).json(
        {
            status: 200,
            message: "已开始抓取~"
        });
}
