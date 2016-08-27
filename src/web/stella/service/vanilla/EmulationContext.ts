import EmulationContextInterface from '../EmulationContextInterface';
import ControlPanelInterface from '../../../../machine/stella/ControlPanelInterface';
import JoystickInterface from '../../../../machine/io/DigitalJoystickInterface';
import PaddleInterface from '../../../../machine/io/PaddleInterface';
import Board from '../../../../machine/stella/Board';
import VideoEndpoint from '../../../driver/VideoEndpoint';
import VideoEndpointInterface from '../../../driver/VideoEndpointInterface';
import VideoOutputInterface from '../../../../machine/io/VideoOutputInterface';

export default class EmulationContext implements EmulationContextInterface {

    constructor(
        private _board: Board
    ) {}

    getVideo(): VideoEndpointInterface {
        if (!this._videoEndpoint) {
            this._videoEndpoint = new VideoEndpoint(this._board.getVideoOutput());
        }

        return this._videoEndpoint;
    }

    getJoystick(i: number): JoystickInterface {
        switch (i) {
            case 0:
                return this._board.getJoystick0();

            case 1:
                return this._board.getJoystick1();

            default:
                throw new Error(`invalid joystick index ${i}`);
        }
    }

    getControlPanel(): ControlPanelInterface {
        return this._board.getControlPanel();
    }

    getPaddle(i: number): PaddleInterface {
        if (i >= 0 && i < 4) {
            return this._board.getPaddle(i);
        } else {
            throw new Error(`invalid paddle index ${i}`);
        }
    }

    getAudio(): Board.Audio {
        return this._board.getAudioOutput();
    }

    getRawVideo(): VideoOutputInterface {
        if (this._videoEndpoint) {
            throw new Error(`video endpoint already initialized; raw video unavailable`);
        }

        return this._board.getVideoOutput();
    }

    private _videoEndpoint: VideoEndpoint = null;

}