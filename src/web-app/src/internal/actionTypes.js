/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-16 13:30:25
 * @modify date 2019-12-16 13:30:25
 * @desc [description]
 */

import { _ } from 'Framework';
import moduleSet from '../redux/config/moduleSet';

const moduleActionTypes = _(moduleSet)
    .groupBy((module) => module)
    .mapValues((module) => {
        try {
            return require('../redux/modules/' + module).actionTypes;
        } catch (e) {
            console.warn(e);
            return {};
        }
    })
    .value();

export default moduleActionTypes;