'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fileSystem = require("fs");
const path = require("path");
const appdata_path_1 = require("appdata-path");
const dirUtils = require("./directoryUtilities");
const cp = require("child_process");
/**
 * Main class to handle the logic of the Project Templates
 * @export
 * @class TemplateManager
 */
class ProjectCreation {
    constructor(econtext, config) {
        this.config = config;
        this.econtext = econtext;
    }
    updateConfiguration(config) {
        this.config = config;
    }
    /**
 * Selects a workspace folder.  If args contains an fileSystemPath, then it uses
 * that.  Otherwise, for single root workspaces it will select the root directory,
 * or for multi-root will present a chooser to select a workspace.
 * @param args
 */
    async WorkspaceSelection(args) {
        let workspace = "";
        // check arguments
        if (args && args.fileSystemPath) {
            workspace = path.dirname(args.fileSystemPath);
        }
        else if (vscode.workspace.workspaceFolders) {
            // single or multi-root
            if (vscode.workspace.workspaceFolders.length === 1) {
                workspace = path.dirname(vscode.workspace.workspaceFolders[0].uri.fsPath);
            }
            else if (vscode.workspace.workspaceFolders.length > 1) {
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
    async getTemplatesDirectory() {
        let dir = path.join(this.econtext.extensionPath, 'templates');
        return Promise.resolve(dir);
    }
    setDefaultProjectName(projectLocation, defaultProjectName) {
        let fileName = "";
        var filenameSuffix = 0;
        let directories = fileSystem.readdirSync(projectLocation).map(function (item) {
            // ignore hidden folders
            if (!/^\./.exec(item)) {
                return fileSystem.statSync(path.join(projectLocation, item)).isDirectory ? path.join(projectLocation, item) : null;
            }
            return null;
        });
        var suffixCollection = [];
        for (let fileEntry of directories) {
            if (fileEntry !== null) {
                let suffix = fileEntry.replace(path.join(projectLocation, defaultProjectName), "");
                var numValue = parseInt(suffix);
                let parsed = numValue === parseInt(suffix, 10) ? true : false;
                if (parsed) {
                    suffixCollection.push(numValue);
                }
            }
        }
        if (suffixCollection.length > 0) {
            suffixCollection.sort();
            for (let suffix of suffixCollection) {
                let nextId = suffix + 1;
                let exist = suffixCollection.indexOf(nextId) !== -1 ? true : false;
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
    async addFromTemplate(workspace) {
        // ***
        // *** Ask for the path to save the project
        // ***
        let userPath = path.join(path.dirname(path.dirname(appdata_path_1.default())));
        let projectLocationInput = { prompt: `Project Location`, value: userPath };
        let projectLocation = await vscode.window.showInputBox(projectLocationInput).then(value => { if (!value) {
            return '__QUIT__';
        } return value; });
        if (projectLocation == '__QUIT__') {
            vscode.window.showErrorMessage('New STOS project was not created.');
            return;
        }
        // ***
        // *** Ask for the name of the project
        // ***
        let defaultProjectName = "MySTOSProgram";
        defaultProjectName = this.setDefaultProjectName(projectLocation, "SampleSTOSApp") === "" ? defaultProjectName : this.setDefaultProjectName(projectLocation, "SampleSTOSApp");
        let ProjectNameInput = {
            prompt: `Project Name`,
            value: defaultProjectName
        };
        // get user's input
        let projectName = await vscode.window.showInputBox(ProjectNameInput).then(value => { if (!value) {
            return '__QUIT__';
        } return value; });
        if (projectName == '__QUIT__') {
            vscode.window.showErrorMessage('New STOS project was not created.');
            return;
        }
        // ***
        // *** Ask for where we should create the finished build file
        // ***
        let defaultBuildFile = "./stos/build.asc";
        let BuildFileInput = { prompt: `Enter the path and filename to create your STOS file`, value: defaultBuildFile };
        let BuildFileName = await vscode.window.showInputBox(BuildFileInput).then(value => { if (!value) {
            return '__QUIT__';
        } return value; });
        if (BuildFileName == '__QUIT__') {
            vscode.window.showErrorMessage('New STOS project was not created.');
            return;
        }
        let BuildFile_Path = path.dirname(BuildFileName);
        let BuildFile_Name = path.basename(BuildFileName);
        console.log(BuildFile_Path);
        console.log(BuildFile_Name);
        workspace = path.join(projectLocation, projectName);
        if (fileSystem.existsSync(workspace)) {
            vscode.window.showInformationMessage("Please provide the new project name since given project name already has been exist in the project location");
            return;
        }
        // ***
        // *** Variable definition
        // ***
        let BuildDotBatFile = projectLocation + "\\" + projectName + "\\stos2asc\\stos2asc.bat";
        let BuildDotBatContent = "@echo off\nJAVA stos2asc.stos2asc SourcePath=. SourceFile=main.stos DestPath=\"" + BuildFile_Path + "\" DestFile=\"" + BuildFile_Name + "\"";
        console.log(BuildDotBatContent);
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
        let FileCopy = async (src, dest) => {
            dest = dest.replace("STOSData", projectName);
            if (fileSystem.lstatSync(src).isDirectory()) {
                // create directory if doesn't exist
                if (!fileSystem.existsSync(dest)) {
                    fileSystem.mkdirSync(dest);
                }
                else if (!fileSystem.lstatSync(dest).isDirectory()) {
                    // fail if file exists
                    throw new Error("Failed to create directory '" + dest + "': file with same name exists.");
                }
            }
            else {
                // ask before overwriting existing file
                while (fileSystem.existsSync(dest)) {
                    // if it is not a file, cannot overwrite
                    if (!fileSystem.lstatSync(dest).isFile()) {
                        let reldest = path.relative(workspace, dest);
                        let variableInput = {
                            prompt: `Cannot overwrite "${reldest}".  Please enter a new filename"`,
                            value: reldest
                        };
                        // get user's input
                        dest = await vscode.window.showInputBox(variableInput).then(value => {
                            if (!value) {
                                return dest;
                            }
                            return value;
                        });
                        // if not absolute path, make workspace-relative
                        if (!path.isAbsolute(dest)) {
                            dest = path.join(workspace, dest);
                        }
                    } // if file
                    else {
                        return true;
                    }
                } // while file exists  
                if (!src.includes(".ico") && !src.includes("open-iconic")) {
                    // get src file contents
                    let fileContents = fileSystem.readFileSync(src);
                    //fileContents = Buffer.from(fileContents.toString().replace(new RegExp('STOSData', 'gi'), projectName));
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
        }; // copy function
        // actually copy the file recursively
        await dirUtils.CopyDir(templateDir, workspace, FileCopy);
        let commandLine = 'dotnet restore';
        let { stdout, stderr } = await this.exec(commandLine, { cwd: workspace });
        // ***
        // *** Create the build.bat file based on what the user has entered
        // ***
        fileSystem.writeFile(BuildDotBatFile, BuildDotBatContent, function (FileError) {
            if (FileError) {
                return console.error(FileError);
            }
            console.log("File created!");
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
    async exec(command, options) {
        return new Promise((resolve, reject) => {
            cp.exec(command, options, (error, stdout, stderr) => {
                resolve({ stdout, stderr });
            });
        });
    }
}
exports.default = ProjectCreation;
//# sourceMappingURL=projectcreation.js.map