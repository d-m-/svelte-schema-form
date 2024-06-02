import { SvelteComponentTyped } from "svelte";
import type { CommonComponentParameters } from "../types/CommonComponentParameters";
declare const __propDef: {
    props: {
        params: CommonComponentParameters;
        schema: any;
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CurrencyProps = typeof __propDef.props;
export type CurrencyEvents = typeof __propDef.events;
export type CurrencySlots = typeof __propDef.slots;
export default class Currency extends SvelteComponentTyped<CurrencyProps, CurrencyEvents, CurrencySlots> {
}
export {};
