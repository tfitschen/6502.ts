/// <reference path="../../typings/node/node.d.ts"/>

'use strict';

import path = require('path');

import FilesystemProviderInterface = require('../fs/FilesystemProviderInterface');
import DebuggerCLI = require('./DebuggerCLI');

import Board = require('../machine/stella/Board');
import CartridgeInterface = require('../machine/stella/CartridgeInterface');
import Cartridge4k = require('../machine/stella/Cartridge4k')
import StellaConfig = require('../machine/stella/Config');

class StellaCLI extends DebuggerCLI {

    constructor(fsProvider: FilesystemProviderInterface, cartridgeFile: string) {
        this._cartridgeFile = cartridgeFile;

        super(fsProvider);
    }

    protected _initializeHardware(): void {
        var fileBuffer = this._fsProvider.readBinaryFileSync(this._cartridgeFile),
            cartridge = new Cartridge4k(fileBuffer),
            config = new StellaConfig(StellaConfig.TvMode.ntsc),
            board = new Board(config, cartridge);

        this._board = board;
        this._cartridge = cartridge;
    }

    protected _board: Board;
    protected _cartridge: CartridgeInterface;
    
    protected _cartridgeFile: string;

}

export = StellaCLI;