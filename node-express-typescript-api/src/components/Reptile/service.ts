import * as Joi from 'joi';
import AuthValidation from './validation';
import MovieModel,{IMovieModel}  from './model';
import { ReptileService } from './interface';

/**
 * @export
 * @implements {IAuthService}
 */
const ReptileService: ReptileService = {

    async insert(body: IMovieModel): Promise < IMovieModel > {
        try {
            // const validate: Joi.ValidationResult < MovieModel > = UserValidation.createUser(body);
            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }

            const Movie: IMovieModel = await MovieModel.create(body);
            return Movie;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default ReptileService;
