import * as actions from "./profileActions"

export const loadingProfile = () => ({
    type: actions.LOADING_PROFILE
})

export const loadedProfile = (profile: any) => ({
    type: actions.LOADED_PROFILE, payload: profile
})

export const loadProfile = () => () => {

}