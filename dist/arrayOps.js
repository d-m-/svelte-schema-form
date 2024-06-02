import { emptyValue } from "./types/schema";
export const arrayAdd = (schema, params, value) => () => {
    params.pathChanged(params.path, [
        ...(value || []),
        emptyValue(schema.items)
    ]);
};
export const arrayFill = (schema, params, value) => () => {
    const val = value || [];
    if (typeof schema.minItems !== 'number' || val.length >= schema.minItems)
        return;
    const addValues = new Array(schema.minItems - val.length).fill(emptyValue(schema.items));
    params.pathChanged(params.path, [
        ...val,
        ...addValues
    ]);
};
export const arrayDelete = (idx, params, value) => () => {
    params.pathChanged(params.path, [
        ...value.slice(0, idx),
        ...value.slice(idx + 1)
    ], "delete", idx.toString());
};
export const arrayDuplicate = (idx, params, value) => () => {
    params.pathChanged(params.path, [
        ...value.slice(0, idx),
        value[idx],
        JSON.parse(JSON.stringify(value[idx])),
        ...value.slice(idx + 1)
    ], "duplicate", (idx + 1).toString());
};
export const arrayUp = (idx, params, value) => () => {
    if (idx > 0) {
        params.pathChanged(params.path, [
            ...value.slice(0, idx - 1),
            value[idx],
            value[idx - 1],
            ...value.slice(idx + 1)
        ], "up", (idx - 1).toString());
    }
};
export const arrayDown = (idx, params, value) => () => {
    if (idx < value.length - 1) {
        params.pathChanged(params.path, [
            ...value.slice(0, idx),
            value[idx + 1],
            value[idx],
            ...value.slice(idx + 2)
        ], "down", (idx + 1).toString());
    }
};
