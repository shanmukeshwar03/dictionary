import { configureStore } from '@reduxjs/toolkit';
import dictionary from 'redux/dictionary';

export default configureStore({
  reducer: dictionary,
});
