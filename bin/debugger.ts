/// <reference path="../typings/node/node.d.ts"/>

'use strict';

import readline = require('readline');
import Memory = require('../src/machine/SimpleMemory');
import Debugger = require('../src/machine/Debugger');
import DebuggerFrontend = require('../src/cli/DebuggerFrontend');
import Cpu = require('../src/cpu/Cpu');
import NodeFilesystemProvider = require('../src/node/NodeFilesystemProvider');

var quit = false,
    commands: Array<string>;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: (cmd: string): Array<any> =>
        [commands.filter((candidate: string) => candidate.search(cmd) === 0), cmd]
});

var memory = new Memory(),
    cpu = new Cpu(memory),
    dbg = new Debugger(memory, cpu),
    fsProvider = new NodeFilesystemProvider(),
    frontend = new DebuggerFrontend(dbg, fsProvider);

frontend.registerCommands({
    quit: (args: Array<string>): string => (quit = true, 'bye')
});

commands = frontend.getCommands();

process.argv.slice(2).forEach((script: string): void => {
    try {
        fsProvider.readTextFileSync(script)
            .split('\n')
            .forEach((line: string): void => {
                var result = frontend.execute(line);
                if (result) console.log(result);
            });
    } catch(e) {
        console.log('ERROR: ' + e.message);
        process.exit(1);
    }
});

function tick(): void {
    if (quit) {
        rl.close();
        return;
    }

    rl.question('> ', (cmd: string): void => {
        try {
            var result = frontend.execute(cmd);
            if (result) console.log(result);
        } catch (e) {
            console.log('ERROR: ' + e.message);
        }

        process.nextTick(tick)
    });
}

tick();