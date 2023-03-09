import { createAction } from '@reduxjs/toolkit';

export interface IProductAction {
    name: string,
    price: number
}

export const createProductAction = createAction<IProductAction>('CREATE_PRODUCT');