import React, { createContext, useReducer, Dispatch } from "react";
import { SectionDetail } from "../types/Details";
import { filterMenuTitle } from "../Util/MenuDrawerDataHelper";
import { mockDetailsData } from "../__test__/mockData/MockDetailData";
import {
    productReducer,

    ProductActions,
    MenuItem,

} from "./reducers";

type ProductType = {
    id: number;
    name: string;
    price: number;
};

type InitialStateType = {
    products: MenuItem;
};

const initialSection = filterMenuTitle()[0]?.chapterGroup?.slice(0)[0]
const initialState = {
    products: { sectionDetail: initialSection, selected: false },

};

const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<ProductActions>;
}>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (
    { products }: InitialStateType,
    action: ProductActions
) => ({
    products: productReducer(products, action)
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }
        }>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
