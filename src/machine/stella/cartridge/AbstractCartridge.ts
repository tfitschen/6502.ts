import Event from '../../../tools/event/Event';
import CartridgeInterface from '../CartridgeInterface';

class AbstractCartridge implements CartridgeInterface {

    read(address: number): number {
        return 0;
    }

    write(address: number, value: number) {
        this.triggerTrap(CartridgeInterface.TrapReason.invalidWrite,
            `attempt to write to ROM at 0x${address.toString(16)}`);
    }

    trap = new Event<CartridgeInterface.TrapPayload>();

    protected triggerTrap(reason: CartridgeInterface.TrapReason, message: string) {
        if (this.trap.hasHandlers) {
            this.trap.dispatch(new CartridgeInterface.TrapPayload(reason, this, message));
        } else {
            throw new Error(message);
        }
    }
}

export default AbstractCartridge;