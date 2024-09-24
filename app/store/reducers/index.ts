/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(loadingReducer, themeReducer);
