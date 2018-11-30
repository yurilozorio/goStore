import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* getProducts() {
  try {
    const response = yield call(api.get, '/products');

    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
