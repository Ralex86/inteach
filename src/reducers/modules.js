const modulesReducer = (
  state = {
    modules: [],
    isFetchingModules: false,
    hasFailedFetchingModules: false
  },
  action
) => {
  switch (action.type) {
    case "GET_MODULES_START":
      state = {
        ...state,
        isFetchingModules: true,
        hasFailedFetchingModules: false
      };
      break;
    case "GET_MODULES_SUCCESS":
      state = {
        ...state,
        modules: [...state.modules, ...action.payload],
        isFetchingModules: false,
        hasFailedFetchingModules: false
      };
      break;
    case "GET_MODULES_FAILURE":
      state = {
        ...state,
        isFetchingModules: false,
        hasFailedFetchingModules: true
      };
      break;
    case "DELETE_MODULE":
      state = {
        ...state,
        modules: [
          ...state.modules.filter(module => module.id !== action.payload)
        ],
        isFetchingModules: false,
        hasFailedFetchingModules: false
      };
      break;
    default:
      return state;
  }
  return state;
};

export default modulesReducer;
