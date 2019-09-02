import { modules } from "../fixtures/modules";

function getModulesStart() {
  return {
    type: "GET_MODULES_START"
  };
}

function getModulesSuccess(modules) {
  console.log(modules);
  return {
    type: "GET_MODULES_SUCCESS",
    payload: modules
  };
}

// function getModulesFailure() {
//   return {
//     type: "GET_MODULES_FAILURE"
//   };
// }

export function getModules() {
  return dispatch => {
    dispatch(getModulesStart());

    // Faking an api request
    setTimeout(() => {
      dispatch(getModulesSuccess(modules));
    }, 2000);
  };
}

export function deleteModule(id) {
  console.log("actions");
  return {
    type: "DELETE_MODULE",
    payload: id
  };
}
