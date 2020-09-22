'use strict';

import vscode = require("vscode");

import ProjectCreation from "../ProjectCreation";

/**
 * Main command to create a new project from a template.
 * This command can be invoked by the Command Palette or in a folder context menu on the explorer view.
 * @export
 * @param {ProjectCreation} SampleProjectTemplates
 * @param {*} args
 */
export async function run(SampleProjectTemplates: ProjectCreation, args: any) {

    // get workspace folder
    let workspace = await SampleProjectTemplates.WorkspaceSelection(args);
    
    // load latest configuration
    SampleProjectTemplates.updateConfiguration(vscode.workspace.getConfiguration('projectTemplates'));   

    // create project
    SampleProjectTemplates.addFromTemplate(workspace).then(
        (template : string | undefined) => {
            if (template) {
                
                
            }
        },
        (reason: any) => {
            vscode.window.showErrorMessage("Failed to create project: " + reason);
        }
    );
}