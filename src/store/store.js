import { createStore } from "redux";
import reducers from "../reducers/reducers";

const initialState = {
  notes: [{ title: "Sample note", content: "This is a sample note" }],
  visibility: "AWESOME_TAG"
};

export default createStore(
  reducers,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
