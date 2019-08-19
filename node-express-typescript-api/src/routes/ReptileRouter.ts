import { ReptileComponent } from '../components';
import { Router } from 'express';


/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/getData', ReptileComponent.getData);

/**
 * @export {express.Router}
 */
export default router;
