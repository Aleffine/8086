/**
 * @file JNZ
 * @author treelite(c.xinle@gmail.com)
 */

import {FLAG_MASK} from '../const';

export default {
    compute() {
        let cpu = this.cpu;
        if (!cpu.getPSW(FLAG_MASK.ZF)) {
            return cpu.ip + this.size + this.dest;
        }
    },

    codes: {
        0x75: 'Jb'
    }
};
