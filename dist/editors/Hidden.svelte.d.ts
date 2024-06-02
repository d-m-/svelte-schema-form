import { SvelteComponentTyped } from "svelte";
import type { CommonComponentParameters } from "../types/CommonComponentParameters";
declare const __propDef: {
    props: {
        params: CommonComponentParameters;
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HiddenProps = typeof __propDef.props;
export type HiddenEvents = typeof __propDef.events;
export type HiddenSlots = typeof __propDef.slots;
export default class Hidden extends SvelteComponentTyped<HiddenProps, HiddenEvents, HiddenSlots> {
}
export {};
