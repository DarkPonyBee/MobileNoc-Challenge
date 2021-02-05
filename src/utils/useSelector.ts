import {createSelectorHook} from 'react-redux';
import {RootAction} from 'src/actions/actionTypes';
import {RootState} from '../store/configureStore';

const useSelector = createSelectorHook<RootState, RootAction>();
export default useSelector;
