import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
 
// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts']
// }
 
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
    }
});

// export const persistor = persistStore(store);