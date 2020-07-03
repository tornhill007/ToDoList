import {createSelector} from "reselect"

export const getWholeTodoListPage = (state) => {
    return state.todoListPage;
};

export const getAllTasks = (state) => {
    return state.todoListPage.tasks;
};

export const getCurrentFilter = (state) => {
    return state.filtersPage.currentFilter;
};
