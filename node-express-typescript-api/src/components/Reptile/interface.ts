import { IMovieModel } from './model';

/**
 * @export
 * @interaface ReptileService
 */
export interface ReptileService {
    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof AuthService
     */
    insert(MovieModel: IMovieModel): Promise < IMovieModel > ;
}
