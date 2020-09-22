'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDirectory = exports.CopyDir = void 0;
const fileSystem = require("fs");
const path = require("path");
/**
 * Recursively copy folder from src to dest
 * @param src source folder
 * @param dest destination folder
 */
async function CopyDir(src, dest, func) {
    // apply function between src/dest
    let success = await func(src, dest);
    if (!success) {
        return false;
    }
    if (fileSystem.lstatSync(src).isDirectory()) {
        // read contents of source directory and iterate
        const fileEntries = fileSystem.readdirSync(src);
        for (let fileEntry of fileEntries) {
            // full path of src/dest
            const srcPath = path.join(src, fileEntry);
            const destPath = path.join(dest, fileEntry);
            // if directory, recursively copy, otherwise copy file
            success = await CopyDir(srcPath, destPath, func);
            if (!success) {
                return false;
            }
        }
    }
    return true;
}
exports.CopyDir = CopyDir;
/**
 * Recursively make directories
 * @param path destination path
 */
function CreateDirectory(dest, mode = undefined) {
    // check if exists
    if (fileSystem.existsSync(dest)) {
        if (fileSystem.lstatSync(dest).isDirectory()) {
            return true;
        }
        else {
            return false;
        }
    }
    // empty path, we failed
    if (!path) {
        return false;
    }
    // ensure existence of parent
    let parent = path.dirname(dest);
    if (!CreateDirectory(parent, mode)) {
        return false;
    }
    // make current directory
    fileSystem.mkdirSync(dest, mode);
    return true;
}
exports.CreateDirectory = CreateDirectory;
//# sourceMappingURL=directoryutilities.js.map