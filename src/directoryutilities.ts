'use strict';

import fileSystem = require('fs');
import path = require("path");

/**
 * Recursively copy folder from src to dest
 * @param src source folder
 * @param dest destination folder
 */
export async function CopyDir(src : string, dest : string, 
	func : (src : string, dest : string) => Promise<boolean>) : Promise<boolean> {

	// apply function between src/dest
	let success = await func(src, dest);
	if (!success) {
		return false;
	}

	if (fileSystem.lstatSync(src).isDirectory()) {
		
		// read contents of source directory and iterate
		const fileEntries : string[] = fileSystem.readdirSync(src);

		for(let fileEntry of fileEntries) {
			
			// full path of src/dest
			const srcPath = path.join(src,fileEntry);
			const destPath = path.join(dest,fileEntry);
			
			// if directory, recursively copy, otherwise copy file
			success = await CopyDir(srcPath, destPath, func);
			if (!success) {
				return false;
			}
		}
	}

	return true;
}


/**
 * Recursively make directories
 * @param path destination path
 */
export function CreateDirectory(dest : string, mode : string | number | null | undefined = undefined) : boolean {

	// check if exists
	if (fileSystem.existsSync(dest)) {
		if (fileSystem.lstatSync(dest).isDirectory()) {
			return true;
		} else {
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