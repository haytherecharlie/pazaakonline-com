import { createStore, combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({ })
const persistedReducer = persistReducer({ key: "pazaak", storage }, reducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
