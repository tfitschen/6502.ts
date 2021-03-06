/*
 *   This file is part of 6502.ts, an emulator for 6502 based systems built
 *   in Typescript.
 *
 *   Copyright (C) 2016  Christian Speckner & contributors
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License along
 *   with this program; if not, write to the Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import VanillaMemory from '../vanilla/Memory';
import SimpleSerialIOInterface from '../io/SimpleSerialIOInterface';

class Memory extends VanillaMemory implements SimpleSerialIOInterface {
    read(address: number): number {
        if (address === 0xF004) {
            return this._inCallback(this);
        } else {
            return this._data[address];
        }
    }

    readWord(address: number): number {
        if ((address & 0xFFF0) === 0xF000) {
            return this.read(address) + (this.read((address+1) & 0xFFFF) << 8);
        }

        return this._data[address] + (this._data[(address+1) & 0xFFFF] << 8);
    }

    write(address: number, value: number) {
        if (address === 0xF001) {
            this._outCallback(value, this);
        } else if (address < 0xC000) {
            this._data[address] = value;
        }
    }

    setInCallback(callback: SimpleSerialIOInterface.InCallbackInterface): Memory {
        this._inCallback = callback;
        return this;
    }

    getInCallback(): SimpleSerialIOInterface.InCallbackInterface {
        return this._inCallback;
    }

    setOutCallback(callback: SimpleSerialIOInterface.OutCallbackInterface): Memory {
        this._outCallback = callback;
        return this;
    }

    getOutCallback(): SimpleSerialIOInterface.OutCallbackInterface {
        return this._outCallback;
    }

    private _inCallback: SimpleSerialIOInterface.InCallbackInterface =
        (): number => 0x00;
    private _outCallback: SimpleSerialIOInterface.OutCallbackInterface =
        (): void => undefined;
}

export default Memory;
