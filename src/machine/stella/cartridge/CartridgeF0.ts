import AbstractCartridge from './AbstractCartridge';
import * as cartridgeUtil from './util';
import CartridgeInfo from './CartridgeInfo';

class CartridgeF0 extends AbstractCartridge {

    constructor(buffer: cartridgeUtil.BufferInterface) {
        super();

        if (buffer.length !== 0x10000) {
            throw new Error(`buffer is not a 64k cartridge image: wrong length ${buffer.length}`);
        }

        for (let i = 0; i < 16; i++) {
            this._banks[i] = new Uint8Array(0x1000);
        }

        this._currentBank = this._banks[this._bankIdx];

        for (let i = 0; i < 0x1000; i++) {
            for (let j = 0; j < 16; j++) {
                this._banks[j][i] = buffer[j * 0x1000 + i];
            }
        }
    }

    read(address: number): number {
        address &= 0x0FFF;

        this._handleBankswitch(address);

        return this._currentBank[address];
    }

    write(address: number, value: number) {
        address &= 0xFFF;

        this._handleBankswitch(address);

        super.write(address, value);
    }

    getType(): CartridgeInfo.CartridgeType {
        return CartridgeInfo.CartridgeType.bankswitch_64k_F0;
    }

    private _handleBankswitch(address: number): void {
        if (address === 0x0FF0) {
            this._bankIdx = (this._bankIdx + 1) & 0x0F;
            this._currentBank = this._banks[this._bankIdx];
        }
    }

    private _banks = new Array<Uint8Array>(16);
    private _currentBank: Uint8Array;
    private _bankIdx = 0;
}

export default CartridgeF0;