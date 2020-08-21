import * as actions from "./profileActions";

const initialState = {
  profile: null,
  loading: false,
};

function profileReducer(
  state = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case actions.LOADING_PROFILE:
      return { profile: null, loading: true };
    case actions.LOADED_PROFILE:
      return { profile: action.payload, loading: false };
  }
}

export default profileReducer;
