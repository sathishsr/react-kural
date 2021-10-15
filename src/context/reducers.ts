import { Chapters, ChaptersDetail, SectionDetail } from "../types/Details";
import { Menu } from "../types/Menu";

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    Create = "MENU",
    Delete = "DELETE_PRODUCT",
    Add = "ADD_PRODUCT"
}

// Product

export type MenuItem = {
    sectionDetail: SectionDetail | undefined;
    selected: boolean;

};

type ProductPayload = {
    [Types.Create]: MenuItem
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
    ProductPayload
>];

export const productReducer = (
    state: MenuItem,
    action: ProductActions
) => {
    switch (action.type) {
        case Types.Create:
            return {
                ...state,

                sectionDetail: action.payload.sectionDetail,
                selected: action.payload.selected

            };
        default:
            return state;
    }
};

