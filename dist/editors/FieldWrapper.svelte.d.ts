import { SvelteComponentTyped } from "svelte";
import type { CommonComponentParameters } from "../types/CommonComponentParameters";
declare const __propDef: {
    props: {
        params: CommonComponentParameters;
        schema: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FieldWrapperProps = typeof __propDef.props;
export type FieldWrapperEvents = typeof __propDef.events;
export type FieldWrapperSlots = typeof __propDef.slots;
export default class FieldWrapper extends SvelteComponentTyped<FieldWrapperProps, FieldWrapperEvents, FieldWrapperSlots> {
}
export {};
