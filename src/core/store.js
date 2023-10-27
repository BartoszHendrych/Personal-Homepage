import { configureStore } from '@reduxjs/toolkit';
import { PersonalHomepage } from '../features/PersonalHomepage';
import themeReducer from '../common/themeSlice';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: PersonalHomepage,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(saga);

export default store;