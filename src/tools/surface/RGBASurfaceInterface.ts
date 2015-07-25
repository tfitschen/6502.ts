interface RGBASurfaceInterface {
    getWidth(): number;

    getHeight(): number;

    getBuffer(): RGBASurfaceInterface.BufferInterface;

    sync(): void;

    getByteOrder(): RGBASurfaceInterface.ByteOrder;
}

module RGBASurfaceInterface {
    export enum ByteOrder {rgba};

    export interface BufferInterface {
        [index: number]: number;
    }
}

export = RGBASurfaceInterface;