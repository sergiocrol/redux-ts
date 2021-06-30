import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // bindActionCreators give us back an object that contains all the different actionsCreators provided
  // for the first argument -> { searchRepositories: dispatch(searchRepositories)}
  return bindActionCreators(actionCreators, dispatch);
};
