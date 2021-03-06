import { LOCATION_CHANGE } from "connected-react-router";

import {
    // Fetch
    FETCH_RESOURCES_PENDING,
    FETCH_RESOURCES_SUCCESS,
    FETCH_RESOURCES_ERROR,
    // Create
    CREATE_RESOURCE_PENDING,
    CREATE_RESOURCE_SUCCESS,
    CREATE_RESOURCE_ERROR,
    CREATE_RESOURCE_RESET,
} from "./ResourceActions";

const reducerDefaults = {
    fetch: {
        isLoading: false,
        error: false,
    },
    create: {
        isLoading: false,
        formErrors: [],
        success: false,
    },
};

const initialState = {
    resources: [],
    ...reducerDefaults,
};

const ResourceReducer = (state=initialState, action) => {
    switch(action.type) {
        // Fetch
        case FETCH_RESOURCES_PENDING:
            return {
                ...state,
                fetch: { isLoading: true },
            };
        case FETCH_RESOURCES_SUCCESS:
            return {
                ...state,
                resources: action.payload,
                fetch: { isLoading: false, error: false },
            };
        case FETCH_RESOURCES_ERROR:
            return {
                ...state,
                fetch: { isLoading: false, error: action.error },
            };
        // Create
        case CREATE_RESOURCE_PENDING:
            return {
                ...state,
                create: { isLoading: true, formErrors: [], success: false },
            };
        case CREATE_RESOURCE_SUCCESS:
            return {
                ...state,
                create: { isLoading: false, formErrors: [], success: true },
            };
        case CREATE_RESOURCE_ERROR:
            return {
                ...state,
                create: { isLoading: false, formErrors: action.payload.errors, success: false },
            };
        case CREATE_RESOURCE_RESET:
            return {
                ...state,
                create: reducerDefaults.create
            };
        case LOCATION_CHANGE:
            return {
                ...initialState,
            }
		default:
            return state;
    }
}

export default ResourceReducer;