'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const vscode = require("vscode");
/**
 * Main command to create a new project from a template.
 * This command can be invoked by the Command Palette or in a folder context menu on the explorer view.
 * @export
 * @param {ProjectCreation} SampleProjectTemplates
 * @param {*} args
 */
async function run(SampleProjectTemplates, args) {
    // get workspace folder
    let workspace = await SampleProjectTemplates.WorkspaceSelection(args);
    // load latest configuration
    SampleProjectTemplates.updateConfiguration(vscode.workspace.getConfiguration('projectTemplates'));
    // create project
    SampleProjectTemplates.addFromTemplate(workspace).then((template) => {
        if (template) {
        }
    }, (reason) => {
        vscode.window.showErrorMessage("Failed to create project: " + reason);
    });
}
exports.run = run;
//# sourceMappingURL=projectcreationcommand.js.map