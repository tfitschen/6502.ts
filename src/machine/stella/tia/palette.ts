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

export const NTSC = new Uint32Array([
    0xff000000 , // palette: 0, luminosity: 0
    0xff1a1a1a , // palette: 0, luminosity: 1
    0xff393939 , // palette: 0, luminosity: 2
    0xff5b5b5b , // palette: 0, luminosity: 3
    0xff7e7e7e , // palette: 0, luminosity: 4
    0xffa2a2a2 , // palette: 0, luminosity: 5
    0xffc7c7c7 , // palette: 0, luminosity: 6
    0xffededed , // palette: 0, luminosity: 7
    0xff000219 , // palette: 1, luminosity: 0
    0xff001f3a , // palette: 1, luminosity: 1
    0xff00415d , // palette: 1, luminosity: 2
    0xff006482 , // palette: 1, luminosity: 3
    0xff0088a7 , // palette: 1, luminosity: 4
    0xff00adcc , // palette: 1, luminosity: 5
    0xff19d2f2 , // palette: 1, luminosity: 6
    0xff40fafe , // palette: 1, luminosity: 7
    0xff000037 , // palette: 2, luminosity: 0
    0xff00085e , // palette: 2, luminosity: 1
    0xff002783 , // palette: 2, luminosity: 2
    0xff0049a9 , // palette: 2, luminosity: 3
    0xff006ccf , // palette: 2, luminosity: 4
    0xff178ff5 , // palette: 2, luminosity: 5
    0xff38b4fe , // palette: 2, luminosity: 6
    0xff6fdffe , // palette: 2, luminosity: 7
    0xff000047 , // palette: 3, luminosity: 0
    0xff000073 , // palette: 3, luminosity: 1
    0xff001398 , // palette: 3, luminosity: 2
    0xff1632be , // palette: 3, luminosity: 3
    0xff3553e4 , // palette: 3, luminosity: 4
    0xff5776fe , // palette: 3, luminosity: 5
    0xff819cfe , // palette: 3, luminosity: 6
    0xffbbc6fe , // palette: 3, luminosity: 7
    0xff080044 , // palette: 4, luminosity: 0
    0xff1f006f , // palette: 4, luminosity: 1
    0xff400696 , // palette: 4, luminosity: 2
    0xff6224bb , // palette: 4, luminosity: 3
    0xff8545e1 , // palette: 4, luminosity: 4
    0xffaa67fe , // palette: 4, luminosity: 5
    0xffd68cfe , // palette: 4, luminosity: 6
    0xfff6b7fe , // palette: 4, luminosity: 7
    0xff4a002d , // palette: 5, luminosity: 0
    0xff670057 , // palette: 5, luminosity: 1
    0xff8c057d , // palette: 5, luminosity: 2
    0xffb122a1 , // palette: 5, luminosity: 3
    0xffd743c7 , // palette: 5, luminosity: 4
    0xfffe65ed , // palette: 5, luminosity: 5
    0xfff68afe , // palette: 5, luminosity: 6
    0xfff7b5fe , // palette: 5, luminosity: 7
    0xff82000d , // palette: 6, luminosity: 0
    0xffa20033 , // palette: 6, luminosity: 1
    0xffc90f55 , // palette: 6, luminosity: 2
    0xfff02d78 , // palette: 6, luminosity: 3
    0xfffe4e9c , // palette: 6, luminosity: 4
    0xfffe72c3 , // palette: 6, luminosity: 5
    0xfffe98eb , // palette: 6, luminosity: 6
    0xfff9c0fe , // palette: 6, luminosity: 7
    0xff910000 , // palette: 7, luminosity: 0
    0xffbd050a , // palette: 7, luminosity: 1
    0xffe42228 , // palette: 7, luminosity: 2
    0xfffe4248 , // palette: 7, luminosity: 3
    0xfffe646b , // palette: 7, luminosity: 4
    0xfffe8a90 , // palette: 7, luminosity: 5
    0xfffeb0b7 , // palette: 7, luminosity: 6
    0xfffed8df , // palette: 7, luminosity: 7
    0xff720000 , // palette: 8, luminosity: 0
    0xffab1c00 , // palette: 8, luminosity: 1
    0xffd63c03 , // palette: 8, luminosity: 2
    0xfffd5e20 , // palette: 8, luminosity: 3
    0xfffe8140 , // palette: 8, luminosity: 4
    0xfffea664 , // palette: 8, luminosity: 5
    0xfffece89 , // palette: 8, luminosity: 6
    0xfffef6b0 , // palette: 8, luminosity: 7
    0xff3a1000 , // palette: 9, luminosity: 0
    0xff6e3100 , // palette: 9, luminosity: 1
    0xffa25500 , // palette: 9, luminosity: 2
    0xffc87905 , // palette: 9, luminosity: 3
    0xffee9d23 , // palette: 9, luminosity: 4
    0xfffec244 , // palette: 9, luminosity: 5
    0xfffee968 , // palette: 9, luminosity: 6
    0xfffefe8f , // palette: 9, luminosity: 7
    0xff021f00 , // palette: 10, luminosity: 0
    0xff264300 , // palette: 10, luminosity: 1
    0xff576900 , // palette: 10, luminosity: 2
    0xff7a8d00 , // palette: 10, luminosity: 3
    0xff9eb11b , // palette: 10, luminosity: 4
    0xffc3d73b , // palette: 10, luminosity: 5
    0xffe9fe5d , // palette: 10, luminosity: 6
    0xfffefe86 , // palette: 10, luminosity: 7
    0xff032400 , // palette: 11, luminosity: 0
    0xff054a00 , // palette: 11, luminosity: 1
    0xff0c7000 , // palette: 11, luminosity: 2
    0xff2b9509 , // palette: 11, luminosity: 3
    0xff4cba28 , // palette: 11, luminosity: 4
    0xff6ee049 , // palette: 11, luminosity: 5
    0xff92fe6c , // palette: 11, luminosity: 6
    0xffb5fe97 , // palette: 11, luminosity: 7
    0xff022100 , // palette: 12, luminosity: 0
    0xff044600 , // palette: 12, luminosity: 1
    0xff006b08 , // palette: 12, luminosity: 2
    0xff009028 , // palette: 12, luminosity: 3
    0xff09b549 , // palette: 12, luminosity: 4
    0xff28db6b , // palette: 12, luminosity: 5
    0xff49fe8f , // palette: 12, luminosity: 6
    0xff69febb , // palette: 12, luminosity: 7
    0xff011500 , // palette: 13, luminosity: 0
    0xff003610 , // palette: 13, luminosity: 1
    0xff005930 , // palette: 13, luminosity: 2
    0xff007e53 , // palette: 13, luminosity: 3
    0xff00a376 , // palette: 13, luminosity: 4
    0xff00c89a , // palette: 13, luminosity: 5
    0xff1eeebf , // palette: 13, luminosity: 6
    0xff3efee8 , // palette: 13, luminosity: 7
    0xff00021a , // palette: 14, luminosity: 0
    0xff001f3b , // palette: 14, luminosity: 1
    0xff00415e , // palette: 14, luminosity: 2
    0xff006483 , // palette: 14, luminosity: 3
    0xff0088a8 , // palette: 14, luminosity: 4
    0xff00adce , // palette: 14, luminosity: 5
    0xff18d2f4 , // palette: 14, luminosity: 6
    0xff40fafe , // palette: 14, luminosity: 7
    0xff000038 , // palette: 15, luminosity: 0
    0xff00085f , // palette: 15, luminosity: 1
    0xff002784 , // palette: 15, luminosity: 2
    0xff0049aa , // palette: 15, luminosity: 3
    0xff006bd0 , // palette: 15, luminosity: 4
    0xff188ff6 , // palette: 15, luminosity: 5
    0xff39b4fe , // palette: 15, luminosity: 6
    0xff70dffe , // palette: 15, luminosity: 7
]);

export const PAL = new Uint32Array([
    0xff000000 , // palette: 0, luminosity: 0
    0xff1a1a1a , // palette: 0, luminosity: 1
    0xff393939 , // palette: 0, luminosity: 2
    0xff5b5b5b , // palette: 0, luminosity: 3
    0xff7e7e7e , // palette: 0, luminosity: 4
    0xffa2a2a2 , // palette: 0, luminosity: 5
    0xffc7c7c7 , // palette: 0, luminosity: 6
    0xffededed , // palette: 0, luminosity: 7
    0xff000000 , // palette: 1, luminosity: 0
    0xff1a1a1a , // palette: 1, luminosity: 1
    0xff393939 , // palette: 1, luminosity: 2
    0xff5b5b5b , // palette: 1, luminosity: 3
    0xff7e7e7e , // palette: 1, luminosity: 4
    0xffa2a2a2 , // palette: 1, luminosity: 5
    0xffc7c7c7 , // palette: 1, luminosity: 6
    0xffededed , // palette: 1, luminosity: 7
    0xff00001e , // palette: 2, luminosity: 0
    0xff001c3f , // palette: 2, luminosity: 1
    0xff003d63 , // palette: 2, luminosity: 2
    0xff006088 , // palette: 2, luminosity: 3
    0xff0083ad , // palette: 2, luminosity: 4
    0xff06a8d2 , // palette: 2, luminosity: 5
    0xff26cdf9 , // palette: 2, luminosity: 6
    0xff4af6fe , // palette: 2, luminosity: 7
    0xff002100 , // palette: 3, luminosity: 0
    0xff004600 , // palette: 3, luminosity: 1
    0xff006a0d , // palette: 3, luminosity: 2
    0xff00902d , // palette: 3, luminosity: 3
    0xff00b54f , // palette: 3, luminosity: 4
    0xff06da71 , // palette: 3, luminosity: 5
    0xff26fe95 , // palette: 3, luminosity: 6
    0xff4dfec0 , // palette: 3, luminosity: 7
    0xff00003a , // palette: 4, luminosity: 0
    0xff000662 , // palette: 4, luminosity: 1
    0xff002588 , // palette: 4, luminosity: 2
    0xff0045ad , // palette: 4, luminosity: 3
    0xff1b67d2 , // palette: 4, luminosity: 4
    0xff3b8bf9 , // palette: 4, luminosity: 5
    0xff5eb0fe , // palette: 4, luminosity: 6
    0xff87dbfe , // palette: 4, luminosity: 7
    0xff002500 , // palette: 5, luminosity: 0
    0xff004b00 , // palette: 5, luminosity: 1
    0xff007200 , // palette: 5, luminosity: 2
    0xff00960d , // palette: 5, luminosity: 3
    0xff1cbb2c , // palette: 5, luminosity: 4
    0xff3de14e , // palette: 5, luminosity: 5
    0xff5ffe70 , // palette: 5, luminosity: 6
    0xff8afe9c , // palette: 5, luminosity: 7
    0xff000047 , // palette: 6, luminosity: 0
    0xff070072 , // palette: 6, luminosity: 1
    0xff250f97 , // palette: 6, luminosity: 2
    0xff452ebd , // palette: 6, luminosity: 3
    0xff684fe3 , // palette: 6, luminosity: 4
    0xff8b72fe , // palette: 6, luminosity: 5
    0xffb298fe , // palette: 6, luminosity: 6
    0xffddc2fe , // palette: 6, luminosity: 7
    0xff002100 , // palette: 7, luminosity: 0
    0xff054500 , // palette: 7, luminosity: 1
    0xff266c00 , // palette: 7, luminosity: 2
    0xff469000 , // palette: 7, luminosity: 3
    0xff69b51c , // palette: 7, luminosity: 4
    0xff8cdb3d , // palette: 7, luminosity: 5
    0xffb1fe5f , // palette: 7, luminosity: 6
    0xffddfe88 , // palette: 7, luminosity: 7
    0xff260041 , // palette: 8, luminosity: 0
    0xff4f006c , // palette: 8, luminosity: 1
    0xff730492 , // palette: 8, luminosity: 2
    0xff9822b8 , // palette: 8, luminosity: 3
    0xffbd43de , // palette: 8, luminosity: 4
    0xffe365fe , // palette: 8, luminosity: 5
    0xfffe8afe , // palette: 8, luminosity: 6
    0xfffeb6fe , // palette: 8, luminosity: 7
    0xff2a1100 , // palette: 9, luminosity: 0
    0xff4f3400 , // palette: 9, luminosity: 1
    0xff755900 , // palette: 9, luminosity: 2
    0xff9a7c04 , // palette: 9, luminosity: 3
    0xffbfa022 , // palette: 9, luminosity: 4
    0xffe5c543 , // palette: 9, luminosity: 5
    0xfffeeb65 , // palette: 9, luminosity: 6
    0xfffefe8c , // palette: 9, luminosity: 7
    0xff65002a , // palette: 10, luminosity: 0
    0xff920053 , // palette: 10, luminosity: 1
    0xffb90478 , // palette: 10, luminosity: 2
    0xffe0229c , // palette: 10, luminosity: 3
    0xfffe42c2 , // palette: 10, luminosity: 4
    0xfffe65e8 , // palette: 10, luminosity: 5
    0xfffe8afe , // palette: 10, luminosity: 6
    0xfffeb6fe , // palette: 10, luminosity: 7
    0xff6b0000 , // palette: 11, luminosity: 0
    0xff941f00 , // palette: 11, luminosity: 1
    0xffbc4000 , // palette: 11, luminosity: 2
    0xffe2621d , // palette: 11, luminosity: 3
    0xfffe853d , // palette: 11, luminosity: 4
    0xfffea95f , // palette: 11, luminosity: 5
    0xfffed184 , // palette: 11, luminosity: 6
    0xfffef9ab , // palette: 11, luminosity: 7
    0xff8e0008 , // palette: 12, luminosity: 0
    0xffbc002d , // palette: 12, luminosity: 1
    0xffe4104e , // palette: 12, luminosity: 2
    0xfffe2f71 , // palette: 12, luminosity: 3
    0xfffe5095 , // palette: 12, luminosity: 4
    0xfffe75bb , // palette: 12, luminosity: 5
    0xfffe9be3 , // palette: 12, luminosity: 6
    0xfffec2fe , // palette: 12, luminosity: 7
    0xff900000 , // palette: 13, luminosity: 0
    0xffbd0806 , // palette: 13, luminosity: 1
    0xffe42524 , // palette: 13, luminosity: 2
    0xfffe4544 , // palette: 13, luminosity: 3
    0xfffe6766 , // palette: 13, luminosity: 4
    0xfffe8d8b , // palette: 13, luminosity: 5
    0xfffeb3b2 , // palette: 13, luminosity: 6
    0xfffedbda , // palette: 13, luminosity: 7
    0xff000000 , // palette: 14, luminosity: 0
    0xff1a1a1a , // palette: 14, luminosity: 1
    0xff393939 , // palette: 14, luminosity: 2
    0xff5b5b5b , // palette: 14, luminosity: 3
    0xff7e7e7e , // palette: 14, luminosity: 4
    0xffa2a2a2 , // palette: 14, luminosity: 5
    0xffc7c7c7 , // palette: 14, luminosity: 6
    0xffededed , // palette: 14, luminosity: 7
    0xff000000 , // palette: 15, luminosity: 0
    0xff1a1a1a , // palette: 15, luminosity: 1
    0xff393939 , // palette: 15, luminosity: 2
    0xff5b5b5b , // palette: 15, luminosity: 3
    0xff7e7e7e , // palette: 15, luminosity: 4
    0xffa2a2a2 , // palette: 15, luminosity: 5
    0xffc7c7c7 , // palette: 15, luminosity: 6
    0xffededed , // palette: 15, luminosity: 7
]);

export const SECAM = new Uint32Array([
    0xff000000 , // palette: 0, luminosity: 0
    0xffff2121 , // palette: 0, luminosity: 1
    0xff793cf0 , // palette: 0, luminosity: 2
    0xffff50ff , // palette: 0, luminosity: 3
    0xff00ff7f , // palette: 0, luminosity: 4
    0xffffff7f , // palette: 0, luminosity: 5
    0xff3fffff , // palette: 0, luminosity: 6
    0xffededed , // palette: 0, luminosity: 7
    0xff000000 , // palette: 1, luminosity: 0
    0xffff2121 , // palette: 1, luminosity: 1
    0xff793cf0 , // palette: 1, luminosity: 2
    0xffff50ff , // palette: 1, luminosity: 3
    0xff00ff7f , // palette: 1, luminosity: 4
    0xffffff7f , // palette: 1, luminosity: 5
    0xff3fffff , // palette: 1, luminosity: 6
    0xffededed , // palette: 1, luminosity: 7
    0xff000000 , // palette: 2, luminosity: 0
    0xffff2121 , // palette: 2, luminosity: 1
    0xff793cf0 , // palette: 2, luminosity: 2
    0xffff50ff , // palette: 2, luminosity: 3
    0xff00ff7f , // palette: 2, luminosity: 4
    0xffffff7f , // palette: 2, luminosity: 5
    0xff3fffff , // palette: 2, luminosity: 6
    0xffededed , // palette: 2, luminosity: 7
    0xff000000 , // palette: 3, luminosity: 0
    0xffff2121 , // palette: 3, luminosity: 1
    0xff793cf0 , // palette: 3, luminosity: 2
    0xffff50ff , // palette: 3, luminosity: 3
    0xff00ff7f , // palette: 3, luminosity: 4
    0xffffff7f , // palette: 3, luminosity: 5
    0xff3fffff , // palette: 3, luminosity: 6
    0xffededed , // palette: 3, luminosity: 7
    0xff000000 , // palette: 4, luminosity: 0
    0xffff2121 , // palette: 4, luminosity: 1
    0xff793cf0 , // palette: 4, luminosity: 2
    0xffff50ff , // palette: 4, luminosity: 3
    0xff00ff7f , // palette: 4, luminosity: 4
    0xffffff7f , // palette: 4, luminosity: 5
    0xff3fffff , // palette: 4, luminosity: 6
    0xffededed , // palette: 4, luminosity: 7
    0xff000000 , // palette: 5, luminosity: 0
    0xffff2121 , // palette: 5, luminosity: 1
    0xff793cf0 , // palette: 5, luminosity: 2
    0xffff50ff , // palette: 5, luminosity: 3
    0xff00ff7f , // palette: 5, luminosity: 4
    0xffffff7f , // palette: 5, luminosity: 5
    0xff3fffff , // palette: 5, luminosity: 6
    0xffededed , // palette: 5, luminosity: 7
    0xff000000 , // palette: 6, luminosity: 0
    0xffff2121 , // palette: 6, luminosity: 1
    0xff793cf0 , // palette: 6, luminosity: 2
    0xffff50ff , // palette: 6, luminosity: 3
    0xff00ff7f , // palette: 6, luminosity: 4
    0xffffff7f , // palette: 6, luminosity: 5
    0xff3fffff , // palette: 6, luminosity: 6
    0xffededed , // palette: 6, luminosity: 7
    0xff000000 , // palette: 7, luminosity: 0
    0xffff2121 , // palette: 7, luminosity: 1
    0xff793cf0 , // palette: 7, luminosity: 2
    0xffff50ff , // palette: 7, luminosity: 3
    0xff00ff7f , // palette: 7, luminosity: 4
    0xffffff7f , // palette: 7, luminosity: 5
    0xff3fffff , // palette: 7, luminosity: 6
    0xffededed , // palette: 7, luminosity: 7
    0xff000000 , // palette: 8, luminosity: 0
    0xffff2121 , // palette: 8, luminosity: 1
    0xff793cf0 , // palette: 8, luminosity: 2
    0xffff50ff , // palette: 8, luminosity: 3
    0xff00ff7f , // palette: 8, luminosity: 4
    0xffffff7f , // palette: 8, luminosity: 5
    0xff3fffff , // palette: 8, luminosity: 6
    0xffededed , // palette: 8, luminosity: 7
    0xff000000 , // palette: 9, luminosity: 0
    0xffff2121 , // palette: 9, luminosity: 1
    0xff793cf0 , // palette: 9, luminosity: 2
    0xffff50ff , // palette: 9, luminosity: 3
    0xff00ff7f , // palette: 9, luminosity: 4
    0xffffff7f , // palette: 9, luminosity: 5
    0xff3fffff , // palette: 9, luminosity: 6
    0xffededed , // palette: 9, luminosity: 7
    0xff000000 , // palette: 10, luminosity: 0
    0xffff2121 , // palette: 10, luminosity: 1
    0xff793cf0 , // palette: 10, luminosity: 2
    0xffff50ff , // palette: 10, luminosity: 3
    0xff00ff7f , // palette: 10, luminosity: 4
    0xffffff7f , // palette: 10, luminosity: 5
    0xff3fffff , // palette: 10, luminosity: 6
    0xffededed , // palette: 10, luminosity: 7
    0xff000000 , // palette: 11, luminosity: 0
    0xffff2121 , // palette: 11, luminosity: 1
    0xff793cf0 , // palette: 11, luminosity: 2
    0xffff50ff , // palette: 11, luminosity: 3
    0xff00ff7f , // palette: 11, luminosity: 4
    0xffffff7f , // palette: 11, luminosity: 5
    0xff3fffff , // palette: 11, luminosity: 6
    0xffededed , // palette: 11, luminosity: 7
    0xff000000 , // palette: 12, luminosity: 0
    0xffff2121 , // palette: 12, luminosity: 1
    0xff793cf0 , // palette: 12, luminosity: 2
    0xffff50ff , // palette: 12, luminosity: 3
    0xff00ff7f , // palette: 12, luminosity: 4
    0xffffff7f , // palette: 12, luminosity: 5
    0xff3fffff , // palette: 12, luminosity: 6
    0xffededed , // palette: 12, luminosity: 7
    0xff000000 , // palette: 13, luminosity: 0
    0xffff2121 , // palette: 13, luminosity: 1
    0xff793cf0 , // palette: 13, luminosity: 2
    0xffff50ff , // palette: 13, luminosity: 3
    0xff00ff7f , // palette: 13, luminosity: 4
    0xffffff7f , // palette: 13, luminosity: 5
    0xff3fffff , // palette: 13, luminosity: 6
    0xffededed , // palette: 13, luminosity: 7
    0xff000000 , // palette: 14, luminosity: 0
    0xffff2121 , // palette: 14, luminosity: 1
    0xff793cf0 , // palette: 14, luminosity: 2
    0xffff50ff , // palette: 14, luminosity: 3
    0xff00ff7f , // palette: 14, luminosity: 4
    0xffffff7f , // palette: 14, luminosity: 5
    0xff3fffff , // palette: 14, luminosity: 6
    0xffededed , // palette: 14, luminosity: 7
    0xff000000 , // palette: 15, luminosity: 0
    0xffff2121 , // palette: 15, luminosity: 1
    0xff793cf0 , // palette: 15, luminosity: 2
    0xffff50ff , // palette: 15, luminosity: 3
    0xff00ff7f , // palette: 15, luminosity: 4
    0xffffff7f , // palette: 15, luminosity: 5
    0xff3fffff , // palette: 15, luminosity: 6
    0xffededed , // palette: 15, luminosity: 7
]);
