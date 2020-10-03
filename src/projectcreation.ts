'use strict';

import * as vscode from 'vscode';
import fileSystem = require('fs');
import path = require('path');
import getAppDataPath from "appdata-path";
import dirUtils = require("./directoryUtilities");
import * as cp from 'child_process';
import { WorkspaceConfiguration } from 'vscode';

/**
 * Main class to handle the logic of the Project Templates
 * @export
 * @class TemplateManager
 */
export default class ProjectCreation {

    econtext: vscode.ExtensionContext;
    config: WorkspaceConfiguration;

    constructor(econtext: vscode.ExtensionContext, config: WorkspaceConfiguration) {
        this.config = config;
        this.econtext = econtext;
    }
    public updateConfiguration(config: WorkspaceConfiguration) {
        this.config = config;
    }
    /**
 * Selects a workspace folder.  If args contains an fileSystemPath, then it uses
 * that.  Otherwise, for single root workspaces it will select the root directory,
 * or for multi-root will present a chooser to select a workspace.
 * @param args 
 */
    public async WorkspaceSelection(args: any): Promise<string> {

        let workspace: string = "";

        // check arguments
        if (args && args.fileSystemPath) {
            workspace = path.dirname(args.fileSystemPath);
        } else if (vscode.workspace.workspaceFolders) {
            // single or multi-root
            if (vscode.workspace.workspaceFolders.length === 1) {
                workspace = path.dirname(vscode.workspace.workspaceFolders[0].uri.fsPath);
            } else if (vscode.workspace.workspaceFolders.length > 1) {
                // choose workspace
                let ws = await vscode.window.showWorkspaceFolderPick();
                if (ws) {
                    workspace = path.dirname(ws.uri.fsPath);
                }
            }
        }
        return workspace;
    }
    /**
     * Returns the templates directory location.
     * If no user configuration is found, the extension will look for
     * templates in USER_DATA_DIR/Code/ProjectTemplates.
     * Otherwise it will look for the path defined in the extension configuration.
     * @return the templates directory
     */
    public async getTemplatesDirectory(): Promise<string> {

        let dir = path.join(this.econtext.extensionPath, 'templates');

        return Promise.resolve(dir);
    }

    public setDefaultProjectName(projectLocation: string, defaultProjectName: string): string {
        let fileName: string = "";
        var filenameSuffix = 0;
        let directories: string[] = fileSystem.readdirSync(projectLocation).map(function (item) {
            // ignore hidden folders
            if (!/^\./.exec(item)) {
                return fileSystem.statSync(path.join(projectLocation, item)).isDirectory ? path.join(projectLocation, item) : null;
            }
            return null;
        }) as string[];
        var suffixCollection: number[] = [];
        for (let fileEntry of directories) {
            if (fileEntry !== null) {
                let suffix: string = fileEntry.replace(path.join(projectLocation, defaultProjectName), "");
                var numValue = parseInt(suffix);
                let parsed: boolean = numValue === parseInt(suffix, 10) ? true : false;
                if (parsed) {
                    suffixCollection.push(numValue);
                }
            }
        }
        if (suffixCollection.length > 0) {
            suffixCollection.sort();
            for (let suffix of suffixCollection) {
                let nextId: number = suffix + 1;
                let exist: boolean = suffixCollection.indexOf(nextId) !== -1 ? true : false;
                if (!exist) {
                    filenameSuffix = nextId;
                    fileName = defaultProjectName + filenameSuffix.toString();
                    return fileName;
                }
            }
        }
        return fileName;
    }

    /**
     * Populates a workspace folder with the contents of a template
     * @param workspace current workspace folder to populate
     */
    public async addFromTemplate(workspace: string) {

        // ***
        // *** Ask for the path to save the project
        // ***
        let userPath: string = path.join(path.dirname(path.dirname(getAppDataPath())));
        let projectLocationInput = <vscode.InputBoxOptions>{ prompt: `Project Location`, value: userPath};

        let projectLocation: string = await vscode.window.showInputBox(projectLocationInput).then(
            value => { if (!value) { return '__QUIT__'; } return value; });
        if (projectLocation == '__QUIT__') {
            vscode.window.showErrorMessage('New STOS project was not created.');
            return;
        }

        // ***
        // *** Ask for the name of the project
        // ***
        let defaultProjectName: string = "MySTOSProgram";
        defaultProjectName = this.setDefaultProjectName(projectLocation, "SampleSTOSApp") === "" ? defaultProjectName : this.setDefaultProjectName(projectLocation, "SampleSTOSApp");
        let ProjectNameInput = <vscode.InputBoxOptions>{
            prompt: `Project Name`,
            value: defaultProjectName
        };

        // get user's input
        let projectName: string = await vscode.window.showInputBox(ProjectNameInput).then(
            value => { if (!value) { return '__QUIT__'; } return value; });
        if (projectName == '__QUIT__') {
            vscode.window.showErrorMessage('New STOS project was not created.');
            return;
        }


        // ***
        // *** Ask for where we should create the finished build file
        // ***
        let defaultBuildFile: string = "./stos/build.asc";
        let BuildFileInput = <vscode.InputBoxOptions>{prompt: `Enter the path and filename to create your STOS file`, value: defaultBuildFile };
        let BuildFileName: string = await vscode.window.showInputBox(BuildFileInput).then(
            value => { if (!value) { return '__QUIT__'; } return value; });
        if (BuildFileName == '__QUIT__') {
            vscode.window.showErrorMessage('New STOS project was not created.');
            return;
        }
        let BuildFile_Path: string = path.dirname(BuildFileName);
        let BuildFile_Name: string = path.basename(BuildFileName);        
        

        workspace = path.join(projectLocation, projectName);
        if (fileSystem.existsSync(workspace)) {
            vscode.window.showInformationMessage("Please provide the new project name since given project name already has been exist in the project location");
            return;
        }

        

        // ***
        // *** Variable definition
        // ***
        let BuildDotBatFile: string = projectLocation + "\\" + projectName + "\\stos2asc\\stos2asc.bat";
        let BuildDotBatContent: string = "@echo off\nJAVA stos2asc.stos2asc SourcePath=. SourceFile=main.stos DestPath=\"" + BuildFile_Path + "\" DestFile=\"" + BuildFile_Name + "\"";
        

        // ***
        // *** Create template project folder 
        // ***
        let template = "STOSData";

        // get template folder
        let templateRoot = await this.getTemplatesDirectory();
        let templateDir = path.join(templateRoot, template);

        if (!fileSystem.existsSync(templateDir) || !fileSystem.lstatSync(templateDir).isDirectory()) {
            vscode.window.showErrorMessage("Template '" + template + "' does not exist.");
            return undefined;
        }
        if (!fileSystem.existsSync(workspace)) {
            fileSystem.mkdirSync(workspace);
        }

        // recursively copy files, replacing placeholders as necessary
        let FileCopy = async (src: string, dest: string) => {

            dest = dest.replace("STOSData", projectName);
            if (fileSystem.lstatSync(src).isDirectory()) {
                // create directory if doesn't exist
                if (!fileSystem.existsSync(dest)) {
                    fileSystem.mkdirSync(dest);
                } else if (!fileSystem.lstatSync(dest).isDirectory()) {
                    // fail if file exists
                    throw new Error("Failed to create directory '" + dest + "': file with same name exists.");
                }
            } else {

                // ask before overwriting existing file
                while (fileSystem.existsSync(dest)) {

                    // if it is not a file, cannot overwrite
                    if (!fileSystem.lstatSync(dest).isFile()) {
                        let reldest = path.relative(workspace, dest);

                        let variableInput = <vscode.InputBoxOptions>{
                            prompt: `Cannot overwrite "${reldest}".  Please enter a new filename"`,
                            value: reldest
                        };

                        // get user's input
                        dest = await vscode.window.showInputBox(variableInput).then(
                            value => {
                                if (!value) {
                                    return dest;
                                }
                                return value;
                            }

                        );

                        // if not absolute path, make workspace-relative
                        if (!path.isAbsolute(dest)) {
                            dest = path.join(workspace, dest);
                        }

                    }  // if file
                    else {
                        return true;
                    }
                } // while file exists  

                if (!src.includes(".ico") && !src.includes("open-iconic")) {
                    // get src file contents
                    //let fileContents: Buffer = fileSystem.readFileSync(src);
                    let fileContents = Buffer.from(fileSystem.readFileSync(src));

                    // ensure directories exist
                    let parent = path.dirname(dest);
                    dirUtils.CreateDirectory(parent);

                    // write file contents to destination
                    fileSystem.writeFileSync(dest, fileContents);
                }
                else {
                    fileSystem.copyFileSync(src, dest);
                }
            }
            return true;
        };  // copy function

        // actually copy the file recursively
        await dirUtils.CopyDir(templateDir, workspace, FileCopy);
        let commandLine = 'dotnet restore';
        let { stdout, stderr } = await this.exec(commandLine, { cwd: workspace });


        // ***
        // *** Create the build.bat file based on what the user has entered
        // ***
        fileSystem.writeFile(BuildDotBatFile,BuildDotBatContent, function(FileError)
            {
            if (FileError) {
                return console.error(FileError);
            }
            });


        vscode.window.showInformationMessage(projectName + " STOS project created successfully.");
        
        // open folder space
        let workspaceuri = vscode.Uri.file(workspace);
        await vscode.commands.executeCommand('vscode.openFolder', workspaceuri);
        return template;
    }

    /**
    * NuGet restore
    */
    public async exec(command: string, options: cp.ExecOptions): Promise<{ stdout: string; stderr: string }> {
        return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
            cp.exec(command, options, (error, stdout, stderr) => {
                resolve({ stdout, stderr });
            });
        });
    }


}