import {
    ADD_NODE,
    ADD_NODES,
    ADD_SELECT_NODE,
    CHOOSE_EDGE_FILE,
    CHOOSE_GRAPH_FILE,
    CHOOSE_NODE_FILE,
    CHOOSE_STATE_FILE,
    CHOSEN_EDGE_FILE,
    CHOSEN_GRAPH_FILE,
    CHOSEN_NODE_FILE,
    CHOSEN_STATE_FILE,
    GET_NEIGHBORS,
    IMPORT_GRAPH,
    IMPORTED_GRAPH,
    LOAD_GRAPH_SQLITE,
    LOADED_GRAPH_SQLITE,
    CREATE_NEW_PROJECT,
    CREATED_NEW_PROJECT,
    OPEN_GRAPH,
    OPENED_GRAPH,
    FETCH_WORKSPACE_PROJECTS,
    FETCHED_WORKSPACE_PROJECTS,
    SAVE_GRAPH_JSON,
    SAVE_GRAPH_SQLITE,
    SAVE_GRAPH_STATE,
    SAVED_GRAPH_JSON,
    SAVED_GRAPH_STATE,
    SEARCH_REQUEST,
    SEARCH_RESPONSE,
    SHOW_ITEM_IN_FOLDER,
    SAVE_GRAPH_STATE_TO_PROJECT,
    SAVED_GRAPH_STATE_TO_PROJECT,
    DELETE_FILE,
    RENAME_FILE,
    SHOW_WORKSPACE_FOLDER,
    SAVE_USER_CONFIG,
    LOAD_USER_CONFIG,
    LOADED_USER_CONFIG,
    SAVED_USER_CONFIG,
    CHANGE_WORKSPACE_FOLDER,
    CHANGED_WORKSPACE_FOLDER,
} from '../constants';

const registeredListeners = {
    [IMPORT_GRAPH]: (parameters) => {

    }
}

onmessage = function(e) {
    const eventString = e.data[0];
    const parameters = e.data.slice(1);
    registeredListeners[eventString](parameters);
}