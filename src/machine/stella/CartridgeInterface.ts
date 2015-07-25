'use strict';

import EventInterface = require('../../tools/event/EventInterface');

interface CartridgeInterface {

    read(address: number): number;

    write(address: number, value: number): void;

    trap: EventInterface<CartridgeInterface.TrapPayload>;

}

module CartridgeInterface {

    export enum TrapReason {invalidRead, invalidWrite}

    export class TrapPayload {
        constructor(
            public reason: TrapReason,
            public cartridge: CartridgeInterface,
            public message?: string
        ) {}
    }
}

export = CartridgeInterface;