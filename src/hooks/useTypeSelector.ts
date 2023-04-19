import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../reduxStore/reducers";


export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
 