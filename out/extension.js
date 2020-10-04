"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const projectcreation_1 = require("./projectcreation");
const CreateSTOSProjectCommand = require("./commands/projectcreationcommand");
function activate(context) {
    // Register STOS commands on Visual Studio Codes palette
    let STOSProject = new projectcreation_1.default(context, vscode.workspace.getConfiguration('projectTemplates'));
    let stos_stosnew = vscode.commands.registerCommand('stos.stosnew', CreateSTOSProjectCommand.run.bind(undefined, STOSProject));
    context.subscriptions.push(stos_stosnew);
    const provider1 = vscode.languages.registerCompletionItemProvider('stos', {
        provideCompletionItems(document, position, token, context) {
            // ** bold on/off  				ie.. **Bold**
            // _  italic on/off				ie.. _Italic_
            // *** bold italic on/off		ie.. ***Bold and Italic***
            // ` monospace on/off			ie.. `monospace`
            // ~~ strikethrough on/off		ie.. ~~strikethrough~~
            // <space><space><space>\n		New line
            // \n\n							New paragraph
            // Mathmatical
            //
            const Completion_inc = new vscode.CompletionItem('inc');
            Completion_inc.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**inc** `X`\n\nAdds one to the integer variable `X`. It is logically equivalent to the expression `X`=`X`+1, but is much faster.\n\n_***Example:***_\n\n\>**inc** X');
            Completion_inc.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dec = new vscode.CompletionItem('dec');
            Completion_dec.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**dec** `X`\n\nSubtracts one from the integer variable `X`. It is logically equivalent to the expression `X`=`X`-1, but is much faster.\n\n_***Example:***_\n\n>**dec** X');
            Completion_dec.kind = vscode.CompletionItemKind.Keyword;
            const Completion_deg = new vscode.CompletionItem('deg');
            Completion_deg.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`DEGREES`=**deg**(`RADIANS`)\n\nConverts angles expressed in `RADIANS` into degrees. A degree is approximately equal to 57 radians.\n\n_***Example:***_\n\n>print **deg**(90)\n\nSee **rad**');
            Completion_deg.kind = vscode.CompletionItemKind.Function;
            const Completion_rad = new vscode.CompletionItem('rad');
            Completion_rad.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`RADIANS`=**rad**(`DEGREES`)\n\nConverts angles expressed in `DEGREES` into radians. A degree is approximately equal to 57 radians.\n\n_***Example:***_\n\n>print **rad**(5156.62015618)\n\nSee **deg**');
            Completion_rad.kind = vscode.CompletionItemKind.Function;
            const Completion_sin = new vscode.CompletionItem('sin');
            Completion_sin.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**sin**(`ANGLE#`)\n\nCalculates the sine of the angle `ANGLE#`.\n\n_***Examples:***_\n\n>X#=**sin**(**pi**/2)   \n>print **sin**(**pi**/4)\n\nSee **asin**,**hsin**,**pi**');
            Completion_sin.kind = vscode.CompletionItemKind.Function;
            const Completion_coz = new vscode.CompletionItem('coz');
            Completion_coz.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**coz**(`ANGLE#`)\n\nCalculates the cosine of the angle `ANGLE#`.\n\n_***Examples:***_\n\n>X#=**coz**(**pi**/2)   \n>print **coz**(**pi**/4)\n\nSee **acoz**,**hcoz**,**pi**');
            Completion_coz.kind = vscode.CompletionItemKind.Function;
            const Completion_tan = new vscode.CompletionItem('tan');
            Completion_tan.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**tan**(`ANGLE#`)\n\nCalculates the tangent of the angle `ANGLE#`.\n\n_***Examples:***_\n\n>X#=**tan**(**pi**/2)   \n>print **tan**(**pi**/4)\n\nSee **atan**,**htan**,**pi**');
            Completion_tan.kind = vscode.CompletionItemKind.Function;
            const Completion_asin = new vscode.CompletionItem('asin');
            Completion_asin.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**asin**(`Y#`)\n\nCalculates the arc sine of `Y#` (a value between -1 and +1).\n\n_***Examples:***_\n\n>X#=**asin**(1)   \n>print **asin**(0.5)\n\nSee **sin**,**hsin**,**pi**');
            Completion_asin.kind = vscode.CompletionItemKind.Function;
            const Completion_acoz = new vscode.CompletionItem('acoz');
            Completion_acoz.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**acos**(`Y#`)\n\nCalculates the arc cosine of `Y#` (a value between -1 and +1).\n\n_***Examples:***_\n\n>X#=**acos**(1)   \n>print **acos**(0.5)\n\nSee **cos**,**hcos**,**pi**');
            Completion_acoz.kind = vscode.CompletionItemKind.Function;
            const Completion_atan = new vscode.CompletionItem('atan');
            Completion_atan.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**atan**(`Y#`)\n\nCalculates the arc tangent of `Y#` (a value between -1 and +1).\n\n_***Examples:***_\n\n>X#=**atan**(0.5)   \n>print **atan**(0)\n\nSee **tan**,**htan**,**pi**');
            Completion_atan.kind = vscode.CompletionItemKind.Function;
            const Completion_hsin = new vscode.CompletionItem('hsin');
            Completion_hsin.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**hsin**(`ANGLE#`)\n\n**HSIN** calculates the hyberbolic sine of the angle `ANGLE#`.\n\nSee **sin**,**asin**');
            Completion_hsin.kind = vscode.CompletionItemKind.Function;
            const Completion_hcoz = new vscode.CompletionItem('hcoz');
            Completion_hcoz.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**hcos**(`ANGLE#`)\n\nCalculates the hyberbolic cosine of the angle `ANGLE#`.\n\nSee **cos**,**acos**');
            Completion_hcoz.kind = vscode.CompletionItemKind.Function;
            const Completion_htan = new vscode.CompletionItem('htan');
            Completion_htan.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**htan**(`ANGLE#`)\n\n**HTAN** calculates the hyberbolic tangent of the angle `ANGLE#`.\n\nSee **tan**,**atan**');
            Completion_htan.kind = vscode.CompletionItemKind.Function;
            const Completion_log = new vscode.CompletionItem('log');
            Completion_log.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**log**(`Y#`)\n\nCalculates the logarithm in base 10 (log10) of the number `Y#`.\n\n_***Examples:***_\n\n>X#=**log**(10)   \n>print **log**(10)');
            Completion_log.kind = vscode.CompletionItemKind.Function;
            const Completion_ln = new vscode.CompletionItem('ln');
            Completion_ln.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**ln**(`Y#`)\n\nCalculates the natural or naperian logarithm of the number `Y#`.\n\n_***Examples:***_\n\n>X#=**ln**(100)   \n>print **ln**(10)\n\nThe action of **ln** is th opposite of that of **exp**.');
            Completion_ln.kind = vscode.CompletionItemKind.Function;
            const Completion_exp = new vscode.CompletionItem('exp');
            Completion_exp.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**exp**(`Y#`)\n\nCalculates exponential of the number `Y#`.\n\n_***Examples:***_\n\n>X#=**exp**(**ln**(100))   \n>print **exp**(1)\n\nThe action of **exp** is th opposite of that of **ln**.');
            Completion_exp.kind = vscode.CompletionItemKind.Function;
            const Completion_sqr = new vscode.CompletionItem('sqr');
            Completion_sqr.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**sqr**(`Y#`)\n\nCalculates the number which must be multiplied by itself to get the value of `Y#`.\n\n_***Examples:***_\n\n>input "input a positive number ";N   \n>print "the square root of ";N;" is ";**sqr**(N)');
            Completion_sqr.kind = vscode.CompletionItemKind.Function;
            const Completion_abs = new vscode.CompletionItem('abs');
            Completion_abs.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X#`=**abs**(`Y#`)\n\nCalculates the absolute value of `Y#`, taking no account of the sign of the number.\n\n_***Examples:***_\n\n>print **abs**(-1), **abs**(1)   \n>1 1');
            Completion_abs.kind = vscode.CompletionItemKind.Function;
            const Completion_int = new vscode.CompletionItem('int');
            Completion_int.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**int**(`Y#`)\n\nRounds down the value of `Y#` and converts it into a whole number.\n\n_***Examples:***_\n\n>print **int**(1.25)   \n>1   \n>print **int**(-1.25)   \n>- 2');
            Completion_int.kind = vscode.CompletionItemKind.Function;
            const Completion_sgn = new vscode.CompletionItem('sgn');
            Completion_sgn.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**sgn**(`Y#`)\n\nReturns the sign of the number or expression in `Y#`. The function returns one of three possible values:\n\n>-1 if `Y#` is negative   \n>0 if `Y#` is zero   \n>1 if `Y#` is positive');
            Completion_sgn.kind = vscode.CompletionItemKind.Function;
            const Completion_max = new vscode.CompletionItem('max');
            Completion_max.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**max**(`Y`,`Z`)\n\nCompares two expressions (`Y` & `X`) and returns the largest. These expressions can be composed of numbers or strings, providing you don\'t try to mix different types of expression in one instruction.\n\n_***Examples:***_\n\n>print **max**(10,4)   \n>10   \n\n>print **max**("Hello","Hi")   \n>Hi  \n\n>print **max**(10,"Hi")  \n>Type mismatch\n\nSee **min**');
            Completion_max.kind = vscode.CompletionItemKind.Function;
            const Completion_min = new vscode.CompletionItem('min');
            Completion_min.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**min**(`Y`,`Z`)\n\nCompares two expressions (`Y` & `Z`) and returns the smallest. These expressions can be composed of numbers or strings, providing you don\'t try to mix different types of expression in one instruction.\n\n_***Examples:***_\n\n>print **min**(10,4)   \n>4   \n\n>print **max**("Hello","Hi")   \n>Hello  \n\n>print **max**(10,"Hi")  \n>Type mismatch\n\nSee **max**');
            Completion_min.kind = vscode.CompletionItemKind.Function;
            const Completion_swap = new vscode.CompletionItem('swap');
            Completion_swap.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**swap** `X`,`Y` \n\nExchanges the data between two variables of the same type.\n\n_***Example:***_\n\n>10 A=1 : B=2   \n>20 print A,B   \n>30 **swap** a,b   \n>40 print A,B');
            Completion_swap.kind = vscode.CompletionItemKind.Keyword;
            const Completion_deffn = new vscode.CompletionItem('def fn');
            Completion_deffn.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**def fn** `NAME` (`VARIABLELIST`)=`EXPRESSION`\n\nEnables you to create your own user-defined functions for use within a STOS Basic program.\n\n`NAME` is the name of the function you wish to define. `VARIABLELIST` can be any list of variables seperated by commas. These variables are local to the function. Any variables you automatically use in the function will be substituted for the appropriate local variable whenever necessary. Also note that variables of different types can be mixed within a single function.\n\n_***Examples:***_\n\n>**def fn** SQ(X)=X+X   \n>**def fn** SEGMENT (A$,X,Y)=**mid$**(A$,X,Y)');
            Completion_deffn.kind = vscode.CompletionItemKind.Keyword;
            const Completion_fn = new vscode.CompletionItem('fn');
            Completion_fn.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**fn** `NAME`\n\nUsed to execute a user-defined function defined with the **def fn** command.\n\n_***Examples:***_\n\n>**fn** SQ(5)   \n>**fn** SEGMENT ("Hello",2,3)  \n\nSee **def fn**');
            Completion_fn.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rnd = new vscode.CompletionItem('rnd');
            Completion_rnd.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**rnd**(`Y`)\n\nGenerate a random integer between 0 and `Y` inclusive. If `Y` is less than zero, **rnd** will return the last value it produced.\n\n_***Examples:***_\n\n>10 plot **rnd**(640/divx-1),**rnd**(400/divy-1)   \n>20 goto 10   \n\n>print "Dice throw is a ",**rnd**(5)+1');
            Completion_rnd.kind = vscode.CompletionItemKind.Function;
            const Completion_fix = new vscode.CompletionItem('fix');
            Completion_fix.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**fix** `N`\n\nSets the precision of any real numbers which are to be printed on the screen. There are three possibilities:\n\n>if 0<`n`<16 then `n` denotes the number of figures to be output after the decimal point.\n\n>if `n`>16 the printout will be proportional and any trailing zeros will be removed.\n\n>if `n`<0 then all floating point numbers will be displayed in exponential format.\n\n_***Examples:***_\n\n>**fix**(2) : print **pi**   \n>**fix**(-4) : print **pi**  \n>**fix(16)** : print **pi**   ');
            Completion_fix.kind = vscode.CompletionItemKind.Keyword;
            // String Handling
            //
            const Completion_asc = new vscode.CompletionItem('asc');
            Completion_asc.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**asc**(`A$`)\n\nReturns the Ascii code of the first character of the string in `A$`.\n\n_***Example:***_\n\n>print **asc**("B")   \n>66');
            Completion_asc.kind = vscode.CompletionItemKind.Function;
            const Completion_len = new vscode.CompletionItem('len');
            Completion_len.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**len**(`A$`)\n\nCalculates the current length of a string of characters held in `A$`. All the characters of the string are counted, even if they are not visible on the screen.\n\n_***Example:***_\n\n>print **len**("12345678")   \n>8   \n\nDo not confuse with **length**.');
            Completion_len.kind = vscode.CompletionItemKind.Function;
            const Completion_val = new vscode.CompletionItem('val');
            Completion_val.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**val**(`A$`)\n\nReturns the value of a number that is stored in the string `A$`. If `A$` does not contain a number then **val** will return zero.\n\n_***Example:***_\n\n>print **val**("66")   \n>66');
            Completion_val.kind = vscode.CompletionItemKind.Function;
            const Completion_upper$ = new vscode.CompletionItem('upper$');
            Completion_upper$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**upper$**(`A$`)\n\nConverts the string in `A$` into upper case characters.\n\n_***Example:***_\n\n>print **upper$**("Hello")   \n>HELLO   \n\nDo not confuse this with the editor command upper.');
            Completion_upper$.kind = vscode.CompletionItemKind.Function;
            const Completion_lower$ = new vscode.CompletionItem('lower$');
            Completion_lower$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**lower$**(`A$`)\n\nConverts the string in `A$` into lower case characters.\n\n_***Example:***_\n\n>print **lower$**("STOS Basic")   \n>stos basic   \n\nDo not confuse this with the editor command lower.');
            Completion_lower$.kind = vscode.CompletionItemKind.Function;
            const Completion_flip$ = new vscode.CompletionItem('flip$');
            Completion_flip$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\nX$`=**flip$**(`a$`)\n\nReverses the order of the characters in the string `A$`.\n\n_***Example:***_\n\n>print **flip$**("STOS Basic")   \n>cisaB SOTS');
            Completion_flip$.kind = vscode.CompletionItemKind.Function;
            const Completion_space$ = new vscode.CompletionItem('space$');
            Completion_space$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**space$**(`N`)\n\n*Creates a string containing `N` spaces.\n\n_***Example:***_\n\n>X$ = **space$**(20) : print **len**(A$)   \n>20');
            Completion_space$.kind = vscode.CompletionItemKind.Function;
            const Completion_string$ = new vscode.CompletionItem('string$');
            Completion_string$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**string$**(`A$`,`N`)\n\nCreates a string of `N` characters in length using the first character of string `A$`.\n\n_***Example:***_\n\n>print **string$**("The cat sat on the mat",10)   \n>TTTTTTTTTT   ');
            Completion_string$.kind = vscode.CompletionItemKind.Function;
            const Completion_chr$ = new vscode.CompletionItem('chr$');
            Completion_chr$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**chr$**(`n`)\n\nCreates a string containing the character with the Ascii code `N`.\n\n_***Example:***_\n\n>print **chr$(65)**   \n>B');
            Completion_chr$.kind = vscode.CompletionItemKind.Function;
            const Completion_str$ = new vscode.CompletionItem('str$');
            Completion_str$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**str$**(_n_)\n\nConverts the number `N` into a string. **str$** can be be very useful since some functions, such as **centre**, do not allow you to use numbers as a parameter.\n\n_***Example:***_\n\n>print "Memory left is " + **str$**(**free**)+" bytes"');
            Completion_str$.kind = vscode.CompletionItemKind.Function;
            const Completion_time$ = new vscode.CompletionItem('time$');
            Completion_time$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**time$** or **time$**=`X$`\n\nReturns a string containing the current time in hours, minutes and seconds using the format "HH:MM:SS". This string is updated every 50th of a second.\n\n_***Examples:***_\n\n>print **time$**   \n**time$**="10:50:00"');
            Completion_time$.kind = vscode.CompletionItemKind.Function;
            const Completion_date$ = new vscode.CompletionItem('date$');
            Completion_date$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**date$** or **date$**=`X$`\n\nStores the current date as a string of characters in the format "DD/MM/YYYY" where DD represents the day, MM the month and YYYY the year.\n\n_***Examples:***_\n\n>print **date$**   \n>**date$**="09/06/1988"');
            Completion_date$.kind = vscode.CompletionItemKind.Function;
            const Completion_left$ = new vscode.CompletionItem('left$');
            Completion_left$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**left$**(`Y$`,`n`) or **left$**(`X$`,`n`)=`Y$`\n\nReturns or sets the left most characters of a string. `X$` is the resulting string, `Y$` is the source string and `n` is the number of characters.\n\n_***Examples:***_\n\n>print **left$**("0123456789ABCDEF",10)   \n>**left$**(X$,4)="STOS"');
            Completion_left$.kind = vscode.CompletionItemKind.Function;
            const Completion_right$ = new vscode.CompletionItem('right$');
            Completion_right$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**right$**(`Y$`,`n`) or **right$**(`X$`,`n`)=`Y$`\n\nReturns or sets the right most characters of a string. `X$` is the resulting string, `Y$` is the source string and `n` is the number of characters.\n\n_***Examples:***_\n\n>print **right$**("0123456789ABCDEF",10)   \n>**right$**(X$,4)="STOS"');
            Completion_right$.kind = vscode.CompletionItemKind.Function;
            const Completion_mid$ = new vscode.CompletionItem('mid$');
            Completion_mid$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**mid$**(`Y$`,`s`,`n`) or **mid$**(`X$`,`s`,`n`)=`Y$`\n\nReturns or sets the characters within a string a string. `X$` is the resulting string, `Y$` is the source string, `s` is the starting character number and `n` is the number of characters.\n\n_***Examples:***_\n\n>print **mid$**("STOS Basic",6,3)   \n>**mid$**(X$,6,3)="Bas"');
            Completion_mid$.kind = vscode.CompletionItemKind.Function;
            // Numeracy
            //
            const Completion_rol = new vscode.CompletionItem('rol');
            Completion_rol.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**rol** `X`,`Y`\n\nA basic version of the ROL instructions. The effect is to take the binarary representation of the number in `Y` and rotate it left by `X` places.\n\n_***Example:***_\n\n>***rol*** %00000001,1   \n>%00000010\n');
            Completion_rol.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ror = new vscode.CompletionItem('ror');
            Completion_ror.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**ror** `X`,`Y`\n\nA basic version of the ROR instructions. The effect is to take the binarary representation of the number in `Y` and rotate it right by `X` places.\n\n_***Example:***_\n\n>***rol*** %00000010,1   \n>%00000001\n');
            Completion_ror.kind = vscode.CompletionItemKind.Keyword;
            const Completion_btst = new vscode.CompletionItem('btst');
            Completion_btst.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`Z`=**btst**(`X`,`Y`)\n\nAllows you to test the binary digit at position `X` in the variable `Y`\n\n_***Example:***_\n\n>print **btst**(4,16)');
            Completion_btst.kind = vscode.CompletionItemKind.Function;
            const Completion_bset = new vscode.CompletionItem('bset');
            Completion_bset.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**bset** `X`,`Y`\n\nSets the bit at position `Y` to 1 in the variable `X`\n\n_***Example:***_\n\n>A=0   \n>**bset** 8,A    \n>print A   \n>256');
            Completion_bset.kind = vscode.CompletionItemKind.Function;
            const Completion_bchg = new vscode.CompletionItem('bchg');
            Completion_bchg.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**bchg** `X`,`Y`\n\nChanges bit number `Y` in the variable `X`. If this bit is currently a 1 then the new value will be 0, and vice versa\n\n_***Example:***_\n\n>A=0   \n>**bchg** 1,A   \n>print A   \n>2');
            Completion_bchg.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bclr = new vscode.CompletionItem('bclr');
            Completion_bclr.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**bclr** `X`,`Y`\n\nSets bit number `Y` in variable `X` to a zero.\n\n_***Example:***_\n\n>A=128   \n>**bclr** 7,A   \n>print A   \n>0');
            Completion_bclr.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hex$ = new vscode.CompletionItem('hex$');
            Completion_hex$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**hex$**(`N`,`Y`)\n\nConverts a number into a string of characters in hexadecimal notation. There are two possible formats of this instruction. `X$`=**hex$**(`N`) and `X$`=**hex$**(`N`,`Y`). `N` represents the number you wish to convert to hexadecimal and `Y` is the number of characters to return.\n\n_***Examples:***_\n\n>print **hex$**(65536)   \n>$10000   \n>print **hex$**(65536,8)   \n>$00010000');
            Completion_hex$.kind = vscode.CompletionItemKind.Function;
            const Completion_bin$ = new vscode.CompletionItem('bin$');
            Completion_bin$.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X$`=**bin$**(`N`,`Y`)\n\nGenerates the string of binary digits equivalent to the number `N`. You can choose to generate all or only a few using `Y`.\n\n_***Examples:***_\n\n>print **bin$**(255)   \n>%11111111   \n>print **bin$**(255,16)   \n>%0000000011111111');
            Completion_bin$.kind = vscode.CompletionItemKind.Function;
            // Data
            //
            const Completion_peek = new vscode.CompletionItem('peek');
            Completion_peek.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**peek**(`Y`)\n\nReturns the 8 bit byte stored at address `Y`. Technically-minded programmer will be interested to know that **peek* gets the information in supervisor mode, meaning you can happily **peek** any memory address.\n\n_***Examples:***_\n\n>print **peek(0)**   \n>print **peek**(start(10))');
            Completion_peek.kind = vscode.CompletionItemKind.Function;
            const Completion_poke = new vscode.CompletionItem('poke');
            Completion_poke.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**poke** `Y`,`X`\n\nLoads memory address `Y` with the byte of data represented in variable `X`.\n\n_***Example:***_\n\n>**poke** physic+1000,255');
            Completion_poke.kind = vscode.CompletionItemKind.Keyword;
            const Completion_deek = new vscode.CompletionItem('deek');
            Completion_deek.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**deek**(`Y`)\n\nReturns the two-byte word stored at address `Y`. Address `Y` must be even or an address error will occur.\n\n_***Example:***_\n\n>print **deek(0)**');
            Completion_deek.kind = vscode.CompletionItemKind.Function;
            const Completion_doke = new vscode.CompletionItem('doke');
            Completion_doke.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**doke** `Y`,`X`\n\nLoads memory address `Y` with the two-byte data represented in variable `X`.\n\n_***Example:***_\n\n>**doke** physic+1000,65535');
            Completion_doke.kind = vscode.CompletionItemKind.Keyword;
            const Completion_leek = new vscode.CompletionItem('leek');
            Completion_leek.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**leek**(`Y`)\n\nReturns the four-byte long word stored at address `Y`. Address `Y` must be even or an address error will occur.\n\n_***Example:***_\n\n>print **leek(0)**');
            Completion_leek.kind = vscode.CompletionItemKind.Function;
            const Completion_loke = new vscode.CompletionItem('loke');
            Completion_loke.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**loke** `Y`,`X`\n\nLoads memory address `Y` with the four-byte long word represented in variable `X`.\n\n_***Example:***_\n\n>**loke** physic+1000,$FFFFFFFF');
            Completion_loke.kind = vscode.CompletionItemKind.Keyword;
            const Completion_varptr = new vscode.CompletionItem('varptr');
            Completion_varptr.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**varptr**(`Y`)\n\nReturns the location in memory of a variable. Each of the diffrent types of variabare stored in a different way.\n\n_***Example:***_\n\n>A=0   \n>loke **varptr**(A),1000   \n>print A   \n1000');
            Completion_varptr.kind = vscode.CompletionItemKind.Function;
            // Memory Allocation
            //
            const Completion_restore = new vscode.CompletionItem('restore');
            Completion_restore.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**restore** `LINE` or **restore**(`EXPRESSION`)\n\nChanges the line number at which a subsequent read operation will expect to find the next **data** statement. If a data statement does not exist at the line specified by **restore**, an appropriate error message will be generated.');
            Completion_restore.kind = vscode.CompletionItemKind.Keyword;
            const Completion_read = new vscode.CompletionItem('read');
            Completion_read.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**read** `DATALIST`\n\nAllows you to input data stored in a **data** statement into a list of variables. It starts off with the first data statement in the program, and then reads each subsequent item of data in turn. As you might expect, the variable used in each **read** instruction must always be the same type as the information stored in the current **data** statement.');
            Completion_read.kind = vscode.CompletionItemKind.Keyword;
            // Machine Code
            //
            const Completion_call = new vscode.CompletionItem('call');
            Completion_call.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**call** `A`\n\nAllows you to execute any assembly language program held in memory. `A` can be either the absolute location of your code or the number of one of the 16 memory banks.\n\n_***Example:***_\n\n>call 10   \n>call start(15)');
            Completion_call.kind = vscode.CompletionItemKind.Keyword;
            const Completion_areg = new vscode.CompletionItem('areg');
            Completion_areg.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**areg**(`R`)\n\nIs an array of pseudo variables that can be used to set or return the contents of one of the 7 available address registers in the ST\'s memory. `R` may range from 0 to 6. Whenever the **trap** or **call** commands are executed, the contents of this array are loaded automatically into the address registers before the call is made, and loaded back with any new information at the end of the call.');
            Completion_areg.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dreg = new vscode.CompletionItem('dreg');
            Completion_areg.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n`X`=**dreg**(`R`)\n\nIs an array of pseudo variables that can be used to set or return the contents of one of the 7 available data registers in the ST\'s memory. `R` may range from 0 to 6. Whenever the **trap** or **call** commands are executed, the contents of this array are loaded automatically into the data registers before the call is made, and loaded back with any new information at the end of the call.');
            Completion_dreg.kind = vscode.CompletionItemKind.Keyword;
            const Completion_trap = new vscode.CompletionItem('trap');
            Completion_trap.documentation = new vscode.MarkdownString('_**STOS: The Game Creator**_\n\n**trap** `N`\n\nAllows you to call one of the numerous 68000 trap functions. These traps are really just large libraries of assembly language functions which are available from a single machine-code instruction. The value `N` represents the trap to call.\n\n`N` = 0, 1, 13, 14 for Gemdos functions\n`N` = 3,5,6,7 for STOS functions');
            Completion_trap.kind = vscode.CompletionItemKind.Keyword;
            // Sprites
            //
            const Completion_sprite = new vscode.CompletionItem('sprite');
            //Completion_sprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_sprite.kind = vscode.CompletionItemKind.Keyword;
            const Completion_movex = new vscode.CompletionItem('move x');
            //Completion_movex.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_movex.kind = vscode.CompletionItemKind.Keyword;
            const Completion_movey = new vscode.CompletionItem('move y');
            //Completion_movey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_movey.kind = vscode.CompletionItemKind.Keyword;
            const Completion_move = new vscode.CompletionItem('move');
            //Completion_move.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_move.kind = vscode.CompletionItemKind.Keyword;
            const Completion_anim = new vscode.CompletionItem('anim');
            //Completion_anim.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_anim.kind = vscode.CompletionItemKind.Keyword;
            const Completion_putsprite = new vscode.CompletionItem('put sprite');
            //Completion_putsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_putsprite.kind = vscode.CompletionItemKind.Keyword;
            const Completion_getsprite = new vscode.CompletionItem('get sprite');
            //Completion_getsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_getsprite.kind = vscode.CompletionItemKind.Function;
            const Completion_update = new vscode.CompletionItem('update');
            //Completion_getupdate.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_update.kind = vscode.CompletionItemKind.Keyword;
            const Completion_xsprite = new vscode.CompletionItem('x sprite');
            //Completion_xsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xsprite.kind = vscode.CompletionItemKind.Function;
            const Completion_ysprite = new vscode.CompletionItem('y sprite');
            //Completion_ysprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ysprite.kind = vscode.CompletionItemKind.Function;
            const Completion_movon = new vscode.CompletionItem('movon');
            //Completion_movon.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_movon.kind = vscode.CompletionItemKind.Function;
            const Completion_collide = new vscode.CompletionItem('collide');
            //Completion_collide.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_collide.kind = vscode.CompletionItemKind.Function;
            const Completion_limitsprite = new vscode.CompletionItem('limit sprite');
            //Completion_limitsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_limitsprite.kind = vscode.CompletionItemKind.Keyword;
            const Completion_zone = new vscode.CompletionItem('zone');
            //Completion_zone.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_zone.kind = vscode.CompletionItemKind.Function;
            const Completion_setzone = new vscode.CompletionItem('set zone');
            //Completion_setzone.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setzone.kind = vscode.CompletionItemKind.Keyword;
            const Completion_resetzone = new vscode.CompletionItem('reset zone');
            //Completion_resetzone.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_resetzone.kind = vscode.CompletionItemKind.Keyword;
            const Completion_priority = new vscode.CompletionItem('priority');
            //Completion_priority.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_priority.kind = vscode.CompletionItemKind.Keyword;
            const Completion_redraw = new vscode.CompletionItem('redraw');
            //Completion_redraw.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_redraw.kind = vscode.CompletionItemKind.Keyword;
            const Completion_detect = new vscode.CompletionItem('detect');
            //Completion_detect.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_detect.kind = vscode.CompletionItemKind.Function;
            const Completion_synchro = new vscode.CompletionItem('synchro');
            //Completion_synchro.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_synchro.kind = vscode.CompletionItemKind.Keyword;
            const Completion_autoback = new vscode.CompletionItem('auto back');
            //Completion_autoback.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_autoback.kind = vscode.CompletionItemKind.Keyword;
            // Screen operations
            //
            const Completion_appear = new vscode.CompletionItem('appear');
            //Completion_appear.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_appear.kind = vscode.CompletionItemKind.Keyword;
            const Completion_fade = new vscode.CompletionItem('fade');
            //Completion_fade.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fade.kind = vscode.CompletionItemKind.Keyword;
            const Completion_reduce = new vscode.CompletionItem('reduce');
            //Completion_reduce.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_reduce.kind = vscode.CompletionItemKind.Keyword;
            const Completion_zoom = new vscode.CompletionItem('zoom');
            //Completion_zoom.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_zoom.kind = vscode.CompletionItemKind.Keyword;
            const Completion_screencopy = new vscode.CompletionItem('screen copy');
            //Completion_screencopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_screencopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_defscroll = new vscode.CompletionItem('def scroll');
            //Completion_defscroll.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_defscroll.kind = vscode.CompletionItemKind.Keyword;
            const Completion_scroll = new vscode.CompletionItem('scroll');
            //Completion_scroll.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_scroll.kind = vscode.CompletionItemKind.Keyword;
            const Completion_getpalette = new vscode.CompletionItem('get palette');
            //Completion_getpalette.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_getpalette.kind = vscode.CompletionItemKind.Keyword;
            const Completion_cls = new vscode.CompletionItem('cls');
            //Completion_cls.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_cls.kind = vscode.CompletionItemKind.Keyword;
            const Completion_unpack = new vscode.CompletionItem('unpack');
            //Completion_unpack.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_unpack.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pack = new vscode.CompletionItem('pack');
            //Completion_pack.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pack.kind = vscode.CompletionItemKind.Function;
            const Completion_screen$ = new vscode.CompletionItem('screen$');
            //Completion_screen$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_screen$.kind = vscode.CompletionItemKind.Function;
            // Drawing
            // 
            const Completion_polymark = new vscode.CompletionItem('polymark');
            //Completion_polymark.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_polymark.kind = vscode.CompletionItemKind.Keyword;
            const Completion_arc = new vscode.CompletionItem('arc');
            //Completion_arc.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_arc.kind = vscode.CompletionItemKind.Keyword;
            const Completion_earc = new vscode.CompletionItem('earc');
            //Completion_earc.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_earc.kind = vscode.CompletionItemKind.Keyword;
            const Completion_plot = new vscode.CompletionItem('plot');
            //Completion_plot.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_plot.kind = vscode.CompletionItemKind.Keyword;
            const Completion_point = new vscode.CompletionItem('point');
            //Completion_point.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_point.kind = vscode.CompletionItemKind.Function;
            const Completion_draw = new vscode.CompletionItem('draw');
            //Completion_draw.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_draw.kind = vscode.CompletionItemKind.Keyword;
            const Completion_box = new vscode.CompletionItem('box');
            //Completion_box.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_box.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rbox = new vscode.CompletionItem('rbox');
            //Completion_rbox.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rbox.kind = vscode.CompletionItemKind.Keyword;
            const Completion_square = new vscode.CompletionItem('square');
            //Completion_square.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_square.kind = vscode.CompletionItemKind.Keyword;
            const Completion_polyline = new vscode.CompletionItem('polyline');
            //Completion_polyline.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_polyline.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pie = new vscode.CompletionItem('pie');
            //Completion_pie.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pie.kind = vscode.CompletionItemKind.Keyword;
            const Completion_epie = new vscode.CompletionItem('epie');
            //Completion_epie.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_epie.kind = vscode.CompletionItemKind.Keyword;
            const Completion_circle = new vscode.CompletionItem('circle');
            //Completion_circle.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_circle.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bar = new vscode.CompletionItem('bar');
            //Completion_bar.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bar.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rbar = new vscode.CompletionItem('rbar');
            //Completion_rbar.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rbar.kind = vscode.CompletionItemKind.Keyword;
            const Completion_polygon = new vscode.CompletionItem('polygon');
            //Completion_polygon.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_polygon.kind = vscode.CompletionItemKind.Keyword;
            const Completion_paint = new vscode.CompletionItem('paint');
            //Completion_paint.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_paint.kind = vscode.CompletionItemKind.Keyword;
            const Completion_mode = new vscode.CompletionItem('mode');
            //Completion_mode.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mode.kind = vscode.CompletionItemKind.Keyword;
            const Completion_flash = new vscode.CompletionItem('flash');
            //Completion_flash.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_flash.kind = vscode.CompletionItemKind.Keyword;
            const Completion_shift = new vscode.CompletionItem('shift');
            //Completion_shift.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_shift.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ink = new vscode.CompletionItem('ink');
            //Completion_ink.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ink.kind = vscode.CompletionItemKind.Keyword;
            const Completion_palette = new vscode.CompletionItem('palette');
            //Completion_palette.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_palette.kind = vscode.CompletionItemKind.Keyword;
            const Completion_colour = new vscode.CompletionItem('colour');
            //Completion_colour.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_colour.kind = vscode.CompletionItemKind.Function;
            const Completion_grwriting = new vscode.CompletionItem('gr writing');
            //Completion_grwriting.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_grwriting.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setline = new vscode.CompletionItem('set line');
            //Completion_setline.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setline.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setmark = new vscode.CompletionItem('set mark');
            //Completion_setmark.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setmark.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setpaint = new vscode.CompletionItem('set paint');
            //Completion_setpaint.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setpaint.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setpattern = new vscode.CompletionItem('set pattern');
            //Completion_setpattern.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setpattern.kind = vscode.CompletionItemKind.Keyword;
            const Completion_divx = new vscode.CompletionItem('divx');
            //Completion_divx.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_divx.kind = vscode.CompletionItemKind.Function;
            const Completion_divy = new vscode.CompletionItem('divy');
            //Completion_divy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_divy.kind = vscode.CompletionItemKind.Function;
            // Keyboard
            //
            const Completion_click = new vscode.CompletionItem('click');
            //Completion_click.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_click.kind = vscode.CompletionItemKind.Function;
            const Completion_scancode = new vscode.CompletionItem('scancode');
            //Completion_scancode.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_scancode.kind = vscode.CompletionItemKind.Function;
            const Completion_fkey = new vscode.CompletionItem('fkey');
            //Completion_fkey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fkey.kind = vscode.CompletionItemKind.Function;
            const Completion_keyspeed = new vscode.CompletionItem('key speed');
            //Completion_keyspeed.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_keyspeed.kind = vscode.CompletionItemKind.Keyword;
            const Completion_putkey = new vscode.CompletionItem('put key');
            //Completion_putkey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_putkey.kind = vscode.CompletionItemKind.Keyword;
            const Completion_input = new vscode.CompletionItem('input');
            //Completion_input.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_input.kind = vscode.CompletionItemKind.Function;
            const Completion_lineinput = new vscode.CompletionItem('line input');
            //Completion_lineinput.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lineinput.kind = vscode.CompletionItemKind.Function;
            const Completion_inkey$ = new vscode.CompletionItem('inkey$');
            //Completion_inkey$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_inkey$.kind = vscode.CompletionItemKind.Function;
            const Completion_input$ = new vscode.CompletionItem('input$');
            //Completion_input$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_input$.kind = vscode.CompletionItemKind.Function;
            // Mouse
            //
            const Completion_xmouse = new vscode.CompletionItem('x mouse');
            //Completion_xmouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xmouse.kind = vscode.CompletionItemKind.Function;
            const Completion_ymouse = new vscode.CompletionItem('y mouse');
            //Completion_ymouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ymouse.kind = vscode.CompletionItemKind.Function;
            const Completion_mousekey = new vscode.CompletionItem('mouse key');
            //Completion_mousekey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mousekey.kind = vscode.CompletionItemKind.Function;
            const Completion_changemouse = new vscode.CompletionItem('change mouse');
            //Completion_changemouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_changemouse.kind = vscode.CompletionItemKind.Function;
            const Completion_limitmouse = new vscode.CompletionItem('limit mouse');
            //Completion_limitmouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_limitmouse.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hide = new vscode.CompletionItem('hide');
            //Completion_hide.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hide.kind = vscode.CompletionItemKind.Keyword;
            const Completion_show = new vscode.CompletionItem('show');
            //Completion_show.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_show.kind = vscode.CompletionItemKind.Keyword;
            // Joysticks
            //
            const Completion_joy = new vscode.CompletionItem('joy');
            //Completion_joy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_joy.kind = vscode.CompletionItemKind.Function;
            const Completion_jleft = new vscode.CompletionItem('jleft');
            //Completion_jleft.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jleft.kind = vscode.CompletionItemKind.Function;
            const Completion_jright = new vscode.CompletionItem('jright');
            //Completion_jright.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jright.kind = vscode.CompletionItemKind.Function;
            const Completion_jup = new vscode.CompletionItem('jup');
            //Completion_jup.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jup.kind = vscode.CompletionItemKind.Function;
            const Completion_jdown = new vscode.CompletionItem('jdown');
            //Completion_jdown.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jdown.kind = vscode.CompletionItemKind.Function;
            const Completion_fire = new vscode.CompletionItem('fire');
            //Completion_fire.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fire.kind = vscode.CompletionItemKind.Function;
            // Files
            //
            const Completion_open = new vscode.CompletionItem('open');
            //Completion_open.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_open.kind = vscode.CompletionItemKind.Keyword;
            const Completion_close = new vscode.CompletionItem('close');
            //Completion_close.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_close.kind = vscode.CompletionItemKind.Keyword;
            const Completion_eof = new vscode.CompletionItem('eof');
            //Completion_eof.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_eof.kind = vscode.CompletionItemKind.Function;
            const Completion_lof = new vscode.CompletionItem('lof');
            //Completion_lof.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lof.kind = vscode.CompletionItemKind.Function;
            const Completion_pof = new vscode.CompletionItem('pof');
            //Completion_pof.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pof.kind = vscode.CompletionItemKind.Keyword;
            const Completion_field = new vscode.CompletionItem('field');
            //Completion_field.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_field.kind = vscode.CompletionItemKind.Keyword;
            const Completion_put = new vscode.CompletionItem('put');
            //Completion_put.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_put.kind = vscode.CompletionItemKind.Keyword;
            const Completion_get = new vscode.CompletionItem('get');
            //Completion_get.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_get.kind = vscode.CompletionItemKind.Keyword;
            const Completion_port = new vscode.CompletionItem('port');
            //Completion_port.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_port.kind = vscode.CompletionItemKind.Function;
            const Completion_dir = new vscode.CompletionItem('dir');
            //Completion_dir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dir.kind = vscode.CompletionItemKind.Property;
            const Completion_previous = new vscode.CompletionItem('previous');
            //Completion_previous.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_previous.kind = vscode.CompletionItemKind.Keyword;
            const Completion_drive = new vscode.CompletionItem('drive');
            //Completion_drive.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_drive.kind = vscode.CompletionItemKind.Property;
            const Completion_drvmap = new vscode.CompletionItem('drvmap');
            //Completion_drvmap.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_drvmap.kind = vscode.CompletionItemKind.Property;
            const Completion_dfree = new vscode.CompletionItem('dfree');
            //Completion_dfree.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dfree.kind = vscode.CompletionItemKind.Property;
            const Completion_mkdir = new vscode.CompletionItem('mkdir');
            //Completion_mkdir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mkdir.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rmdir = new vscode.CompletionItem('rmdir');
            //Completion_rmdir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rmdir.kind = vscode.CompletionItemKind.Keyword;
            const Completion_kill = new vscode.CompletionItem('kill');
            //Completion_kill.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_kill.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rename = new vscode.CompletionItem('rename');
            //Completion_rename.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rename.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dir$ = new vscode.CompletionItem('dir$');
            //Completion_dir$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dir$.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dirfirst$ = new vscode.CompletionItem('dir first$');
            //Completion_dirfirst$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dirfirst$.kind = vscode.CompletionItemKind.Function;
            const Completion_dirnext$ = new vscode.CompletionItem('dir next$');
            //Completion_dirnext$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dirnext$.kind = vscode.CompletionItemKind.Function;
            const Completion_fileselect$ = new vscode.CompletionItem('fileselect$');
            //Completion_fileselect$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fileselect$.kind = vscode.CompletionItemKind.Function;
            const Completion_llist = new vscode.CompletionItem('llist');
            //Completion_llist.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_llist.kind = vscode.CompletionItemKind.Keyword;
            const Completion_lprint = new vscode.CompletionItem('lprint');
            //Completion_lprint.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lprint.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ldir = new vscode.CompletionItem('ldir');
            //Completion_ldir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ldir.kind = vscode.CompletionItemKind.Keyword;
            const Completion_llistbank = new vscode.CompletionItem('llistbank');
            //Completion_llistbank.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_llistbank.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hardcopy = new vscode.CompletionItem('hardcopy');
            //Completion_hardcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hardcopy.kind = vscode.CompletionItemKind.Keyword;
            // Music & Sound
            //
            const Completion_music = new vscode.CompletionItem('music');
            //Completion_music.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_music.kind = vscode.CompletionItemKind.Keyword;
            const Completion_voice = new vscode.CompletionItem('voice');
            //Completion_voice.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_voice.kind = vscode.CompletionItemKind.Keyword;
            const Completion_tempo = new vscode.CompletionItem('tempo');
            //Completion_tempo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_tempo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_transpose = new vscode.CompletionItem('transpose');
            //Completion_transpose.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_transpose.kind = vscode.CompletionItemKind.Keyword;
            const Completion_volume = new vscode.CompletionItem('volume');
            //Completion_volume.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_volume.kind = vscode.CompletionItemKind.Keyword;
            const Completion_envel = new vscode.CompletionItem('envel');
            //Completion_envel.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_envel.kind = vscode.CompletionItemKind.Keyword;
            const Completion_play = new vscode.CompletionItem('play');
            //Completion_play.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_play.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pvoice = new vscode.CompletionItem('pvoice');
            //Completion_pvoice.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pvoice.kind = vscode.CompletionItemKind.Keyword;
            const Completion_noise = new vscode.CompletionItem('noise');
            //Completion_noise.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_noise.kind = vscode.CompletionItemKind.Keyword;
            const Completion_boom = new vscode.CompletionItem('boom');
            //Completion_boom.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_boom.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bell = new vscode.CompletionItem('bell');
            //Completion_bell.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bell.kind = vscode.CompletionItemKind.Keyword;
            const Completion_shoot = new vscode.CompletionItem('shoot');
            //Completion_shoot.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_shoot.kind = vscode.CompletionItemKind.Keyword;
            const Completion_psg = new vscode.CompletionItem('psg');
            //Completion_psg.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_psg.kind = vscode.CompletionItemKind.Function;
            const Completion_tremolo = new vscode.CompletionItem('tremolo');
            //Completion_tremolo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_tremolo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_stoptremolo = new vscode.CompletionItem('stop tremolo');
            //Completion_stoptremolo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_stoptremolo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_stopnoise = new vscode.CompletionItem('stop noise');
            //Completion_stopnoise.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_stopnoise.kind = vscode.CompletionItemKind.Keyword;
            const Completion_noiseonly = new vscode.CompletionItem('noise only');
            //Completion_noiseonly.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_noiseonly.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ntremolo = new vscode.CompletionItem('ntremolo');
            //Completion_ntremolo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ntremolo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_icon$ = new vscode.CompletionItem('icon$');
            //Completion_icon$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_icon$.kind = vscode.CompletionItemKind.Keyword;
            const Completion_menu = new vscode.CompletionItem('menu');
            //Completion_menu.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_menu.kind = vscode.CompletionItemKind.Keyword;
            const Completion_onmenu = new vscode.CompletionItem('on menu');
            //Completion_onmenu.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_onmenu.kind = vscode.CompletionItemKind.Keyword;
            const Completion_mnbar = new vscode.CompletionItem('mnbar');
            //Completion_mnbar.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mnbar.kind = vscode.CompletionItemKind.Function;
            const Completion_mnselect = new vscode.CompletionItem('mnselect');
            //Completion_mnselect.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mnselect.kind = vscode.CompletionItemKind.Function;
            const Completion_menu$ = new vscode.CompletionItem('menu$');
            //Completion_menu$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_menu$.kind = vscode.CompletionItemKind.Keyword;
            const Completion_instr = new vscode.CompletionItem('instr');
            //Completion_instr.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_instr.kind = vscode.CompletionItemKind.Function;
            const Completion_sort = new vscode.CompletionItem('sort');
            //Completion_sort.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_sort.kind = vscode.CompletionItemKind.Keyword;
            const Completion_match = new vscode.CompletionItem('match');
            //Completion_match.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_match.kind = vscode.CompletionItemKind.Function;
            // Banks
            //
            const Completion_bcopy = new vscode.CompletionItem('bcopy');
            //Completion_bcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bcopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bgrab = new vscode.CompletionItem('bgrab');
            //Completion_bgrab.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bgrab.kind = vscode.CompletionItemKind.Keyword;
            const Completion_start = new vscode.CompletionItem('start');
            //Completion_start.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_start.kind = vscode.CompletionItemKind.Function;
            const Completion_length = new vscode.CompletionItem('length');
            //Completion_length.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_length.kind = vscode.CompletionItemKind.Function;
            const Completion_load = new vscode.CompletionItem('load');
            //Completion_load.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_load.kind = vscode.CompletionItemKind.Keyword;
            const Completion_save = new vscode.CompletionItem('save');
            //Completion_save.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_save.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bload = new vscode.CompletionItem('bload');
            //Completion_bload.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bload.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bsave = new vscode.CompletionItem('bsave');
            //Completion_bsave.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bsave.kind = vscode.CompletionItemKind.Keyword;
            const Completion_copy = new vscode.CompletionItem('copy');
            //Completion_copy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_copy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_fill = new vscode.CompletionItem('fill');
            //Completion_fill.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fill.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hunt = new vscode.CompletionItem('hunt');
            //Completion_hunt.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hunt.kind = vscode.CompletionItemKind.Function;
            // Characters & Text
            // 
            const Completion_curs = new vscode.CompletionItem('curs');
            //Completion_curs.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_curs.kind = vscode.CompletionItemKind.Function;
            const Completion_charlen = new vscode.CompletionItem('charlen');
            //Completion_charlen.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_charlen.kind = vscode.CompletionItemKind.Function;
            const Completion_charcopy = new vscode.CompletionItem('charcopy');
            //Completion_charcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_charcopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_border = new vscode.CompletionItem('border');
            //Completion_border.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_border.kind = vscode.CompletionItemKind.Keyword;
            const Completion_cdown = new vscode.CompletionItem('cdown');
            //Completion_cdown.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_cdown.kind = vscode.CompletionItemKind.Keyword;
            const Completion_cup = new vscode.CompletionItem('cup');
            //Completion_cup.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_cup.kind = vscode.CompletionItemKind.Keyword;
            const Completion_cleft = new vscode.CompletionItem('cleft');
            //Completion_cleft.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_cleft.kind = vscode.CompletionItemKind.Keyword;
            const Completion_cright = new vscode.CompletionItem('cright');
            //Completion_cright.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_cright.kind = vscode.CompletionItemKind.Keyword;
            const Completion_tab = new vscode.CompletionItem('tab');
            //Completion_tab.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_tab.kind = vscode.CompletionItemKind.Keyword;
            const Completion_clw = new vscode.CompletionItem('clw');
            //Completion_clw.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_clw.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setcurs = new vscode.CompletionItem('set curs');
            //Completion_setcurs.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setcurs.kind = vscode.CompletionItemKind.Keyword;
            const Completion_default = new vscode.CompletionItem('default');
            //Completion_default.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_default.kind = vscode.CompletionItemKind.Keyword;
            const Completion_home = new vscode.CompletionItem('home');
            //Completion_home.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_home.kind = vscode.CompletionItemKind.Keyword;
            const Completion_inverse = new vscode.CompletionItem('inverse');
            //Completion_inverse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_inverse.kind = vscode.CompletionItemKind.Keyword;
            const Completion_under = new vscode.CompletionItem('under');
            //Completion_under.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_under.kind = vscode.CompletionItemKind.Keyword;
            const Completion_shade = new vscode.CompletionItem('shade');
            //Completion_shade.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_shade.kind = vscode.CompletionItemKind.Keyword;
            const Completion_locate = new vscode.CompletionItem('locate');
            //Completion_locate.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_locate.kind = vscode.CompletionItemKind.Keyword;
            const Completion_paper = new vscode.CompletionItem('paper');
            //Completion_paper.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_paper.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pen = new vscode.CompletionItem('pen');
            //Completion_pen.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pen.kind = vscode.CompletionItemKind.Keyword;
            const Completion_print = new vscode.CompletionItem('print');
            //Completion_print.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_print.kind = vscode.CompletionItemKind.Keyword;
            const Completion_using = new vscode.CompletionItem('using');
            //Completion_using.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_using.kind = vscode.CompletionItemKind.Keyword;
            const Completion_centre = new vscode.CompletionItem('centre');
            //Completion_centre.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_centre.kind = vscode.CompletionItemKind.Keyword;
            const Completion_scrn = new vscode.CompletionItem('scrn');
            //Completion_scrn.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_scrn.kind = vscode.CompletionItemKind.Keyword;
            const Completion_xcurs = new vscode.CompletionItem('xcurs');
            //Completion_xcurs.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xcurs.kind = vscode.CompletionItemKind.Function;
            const Completion_ycurs = new vscode.CompletionItem('ycurs');
            //Completion_ycurs.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ycurs.kind = vscode.CompletionItemKind.Function;
            const Completion_xtext = new vscode.CompletionItem('xtext');
            //Completion_xtext.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xtext.kind = vscode.CompletionItemKind.Function;
            const Completion_ytext = new vscode.CompletionItem('ytext');
            //Completion_ytext.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ytext.kind = vscode.CompletionItemKind.Function;
            const Completion_xgraphic = new vscode.CompletionItem('xgraphic');
            //Completion_xgraphic.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xgraphic.kind = vscode.CompletionItemKind.Function;
            const Completion_ygraphic = new vscode.CompletionItem('ygraphic');
            //Completion_ygraphic.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ygraphic.kind = vscode.CompletionItemKind.Function;
            // Windows
            //
            const Completion_key = new vscode.CompletionItem('key');
            Completion_key.documentation = new vscode.MarkdownString('**key** `on`/`off`\n\nTurns the function key window on or off. You can still select the functions when the window is off by pressing the relevant function keys.');
            Completion_key.kind = vscode.CompletionItemKind.Function;
            const Completion_qwindow = new vscode.CompletionItem('qwindow');
            Completion_qwindow.documentation = new vscode.MarkdownString('**qwindow** `N`)\n\nSets the current window to `N`, but does not redraw the window. It should therefore only be used if you\'re absolutely sure that the window has not been overwritten by something else.');
            Completion_qwindow.kind = vscode.CompletionItemKind.Keyword;
            const Completion_windopen = new vscode.CompletionItem('windopen');
            Completion_windopen.documentation = new vscode.MarkdownString('**windopen** `N`,`X`,`Y`,`W`,`H`,`BORDER`,`SET`\n\nCreate a window on the ST\'s screen. `N` is the number of the screen, `X` & `Y` are the text coordinates, `W` & `H` specifies the size in characters. You can also specify one of 16 border styles with `BORDER` and one of 16 character sets with `SET`. However, these two parameters do not need to be provided.');
            Completion_windopen.kind = vscode.CompletionItemKind.Keyword;
            const Completion_window = new vscode.CompletionItem('window');
            Completion_window.documentation = new vscode.MarkdownString('**window** `N`,`X`,`Y`,`W`,`H`\n\nSets the current window to window number `N`. It then redraws the window along with any of its contents. This instruction should normally only be used when a number of windows overlap on the screen. If this is not the case, then it makes more sense to use the **qwindow** command.\n\n_***Example:***_\n\nnew   \n10 for I=1 to 13   \n20 windopen I,I+5,I+2,20,8   \n30 next I  \n\nNow type the lines  \n\nrun  \nwindow 5  \nwindow 10');
            Completion_window.kind = vscode.CompletionItemKind.Keyword;
            const Completion_windon = new vscode.CompletionItem('windon');
            Completion_windon.documentation = new vscode.MarkdownString('_x_=**windon**\n\nReturns the number of the currently active window.\n\n_***Example:***_\n\nnew  \n10 windopen rnd(12)+1,10,10,10,10   \n20 print "Window number ",WINDON," Activated"   \n\nSee **window**,**windopen**,**windmove**,**windel**');
            Completion_windon.kind = vscode.CompletionItemKind.Function;
            const Completion_windoff = new vscode.CompletionItem('windoff');
            //Completion_windoff.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_***Examples:***_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_windoff.kind = vscode.CompletionItemKind.Keyword;
            const Completion_windmove = new vscode.CompletionItem('windmove');
            Completion_windmove.documentation = new vscode.MarkdownString('**windmove** _x_,_y_\n\n**WINDMOVE** moves both the current window and its contents to a new part of the screen as specified by the text coordinates _x_,_y_. These coordinates are based on the character size of the window which is moved.\n\n_***Example:***_\n\nwindopen 1,0,2,30,10   \nwindmove 5,4   \n\nSee **WINDOW**,**WINDOPEN**,**WINDMOVE**,**WINDEL**');
            Completion_windmove.kind = vscode.CompletionItemKind.Keyword;
            const Completion_windcopy = new vscode.CompletionItem('windcopy');
            Completion_windcopy.documentation = new vscode.MarkdownString('**windcopy**\n\nUnlike **HARDCOPY**, the **WINDCOPY** command prints out the text in the currently open window. As you would expect, it is much faster than the graphics dump produced by **HARDCOPY**');
            Completion_windcopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_windel = new vscode.CompletionItem('windel');
            Completion_windel.documentation = new vscode.MarkdownString('**windel** _n_\n\n**WINDEL** deletes the window number _n_, and erases it from the screen. If the window to be deleted is the current window, the the current window will be set to the window with the next lowest number, and this will be redrawn automatically.\n\nSee **WINDOW**,**WINDOPEN**,**WINDMOVE**,**WINDEL**');
            Completion_windel.kind = vscode.CompletionItemKind.Keyword;
            const Completion_title = new vscode.CompletionItem('title');
            Completion_title.documentation = new vscode.MarkdownString('**title** _A$_\n\nThe **TITLE** instruction sets the top line of the current window to the title string in _A$_. If the length of this string is less than the width of the window, then it is centred. This title will now be displayed along with the window, until it is deleted by using the **BORDER** command with no parameter.\n\n_***Example:***_\n\ntitle "Window number 5"   \n\nSee **BORDER**,**WINDOW**,**WINDOPEN**');
            Completion_title.kind = vscode.CompletionItemKind.Keyword;
            // Memory
            //
            const Completion_dim = new vscode.CompletionItem('dim');
            Completion_dim.documentation = new vscode.MarkdownString('**dim** _variablelist_\n\n**DIM** is used to set up a table of variables. These tables may consist of any number of dimensions you like, but each dimension is limited to a maximum of 65535 elements.\n\n_***Examples:***_\n\ndim A$(10,B(10,10),C#(10,10,10)\n\nIn order to access an individual element in this array, you simply type the array name followed by the index number enclosed between round brackets. It is important to note that arrays always start from zero.');
            Completion_dim.kind = vscode.CompletionItemKind.Constructor;
            const Completion_reserve = new vscode.CompletionItem('reserve');
            Completion_reserve.documentation = new vscode.MarkdownString('**reserve** as _type_,_y_\n\nAny banks used by sprites, music, icons, 3D extensions, and the menus are automatically allocated by the system. The **RESERVE** command allows you to allocate any other banks which you require. _NOTE:_ Banks can have numbers between 1 and 15.\n\n_***Examples:***_\n\nreserve as screen 10  \nreserve as data 10,12345\n\nSee **SCREEN**,**DATASCREEN**,**SET**,**WORK**,**DATA**.');
            Completion_reserve.kind = vscode.CompletionItemKind.Constructor;
            const Completion_erase = new vscode.CompletionItem('erase');
            Completion_erase.documentation = new vscode.MarkdownString('**erase** _y_\n\n**ERASE** deletes the contents of memory bank _y_. As usual, _y_ can range from 1 to 15. Any memory used by this bank is freed for use by your program\n\n_***Example:***_\n\nerase 10');
            Completion_erase.kind = vscode.CompletionItemKind.Constructor;
            const Completion_clear = new vscode.CompletionItem('clear');
            Completion_clear.documentation = new vscode.MarkdownString('**clear**\n\n**CLEAR** erases all the variables and all the memory banks defined by the current program. It also repositions the **READ** pointer to the first **DATA** statement in the program.');
            Completion_clear.kind = vscode.CompletionItemKind.Constructor;
            const Completion_let = new vscode.CompletionItem('let');
            Completion_let.documentation = new vscode.MarkdownString('**let** _x_=_y_\n\n**LET** is used to assign a variable to a specific value. The use of **LET** is always optional and can be omitted whenever you like.\n\n_***Examples:***_\n\nlet A=1   \nlet A$="Hello" + " " + "there"   ');
            Completion_let.kind = vscode.CompletionItemKind.Constructor;
            const Completion_as = new vscode.CompletionItem('as');
            Completion_as.documentation = new vscode.MarkdownString('**as**\n\n**AS** works in conjunction with the **RESERVE** command to help define the type of memory bank being created.\n\n_***Examples:***_\n\nreserve as screen  \nreserve as data   \n\nSee **RESERVE**,**SCREEN**,**DATASCREEN**,**SET**,**WORK**,**DATA**.');
            Completion_as.kind = vscode.CompletionItemKind.Constructor;
            const Completion_screen = new vscode.CompletionItem('screen');
            Completion_screen.documentation = new vscode.MarkdownString('**screen**\n\n**SCREEN** identifies that the memory bank being reserved is for a temporary screen of 32kb in length.\n\n_***Example:***_\n\nreserve as set 10,12345\n\nSee **RESERVE**,**DATASCREEN**,**SET**,**WORK**,**DATA**.');
            Completion_screen.kind = vscode.CompletionItemKind.Class;
            const Completion_datascreen = new vscode.CompletionItem('datascreen');
            Completion_datascreen.documentation = new vscode.MarkdownString('**datascreen**\n\n**DATASCREEN** identifies that the memory bank being reserved is for a permanent screen of 32kb in length.\n\n_***Example:***_\n\nreserve as set 10,12345\n\nSee **RESERVE**,**SCREEN**,**SET**,**WORK**,**DATA**.');
            Completion_datascreen.kind = vscode.CompletionItemKind.Class;
            const Completion_set = new vscode.CompletionItem('set');
            Completion_set.documentation = new vscode.MarkdownString('**set**\n\n**SET** identifies that the memory bank being reserved is for a character set.\n\n_***Example:***_\n\nreserve as set 10,12345\n\nSee **RESERVE**,**SCREEN**,**DATASCREEN**,**WORK**,**DATA**.');
            Completion_set.kind = vscode.CompletionItemKind.Class;
            const Completion_work = new vscode.CompletionItem('work');
            Completion_work.documentation = new vscode.MarkdownString('**work**\n\n**WORK** identifies that the memory bank being reserved is temporary.\n\n_***Example:***_\n\nreserve as work 10,12345\n\nSee **RESERVE**,**SCREEN**,**DATASCREEN**,**SET**,**DATA**.');
            Completion_work.kind = vscode.CompletionItemKind.Class;
            const Completion_memdata = new vscode.CompletionItem('data');
            Completion_memdata.documentation = new vscode.MarkdownString('**data**\n\n**DATA** identifies that the memory bank being reserved is permanent.\n\n_***Example:***_\n\nreserve as work 10,12345\n\nSee **RESERVE**,**SCREEN**,**DATASCREEN**,**SET**,**WORK**.');
            Completion_memdata.kind = vscode.CompletionItemKind.Class;
            const Completion_data = new vscode.CompletionItem('data');
            Completion_data.documentation = new vscode.MarkdownString('**data** _datalist_\n\n**DATA** allows you to incorporate lists of useful data directly inside your STOS program. This data can be loaded into a variable using the **READ** instruction.\n\n_***Example:***_\n\ndata 1,2,3,"hello"\n\nSee **READ**,**RESTORE**.');
            Completion_data.kind = vscode.CompletionItemKind.Constructor;
            /////////////
            // Extensions
            /////////////
            // GBP by Neil Halliday
            //
            // GBP_lights, GBP_pready, GBP_even, GBP_setprt, GBP_specialkey, GBP_hcopy, GBP_dcrunch, GBP_paktype, GBP_paksize,
            // GBP_fstart, GBP_flength, GBP_foffset, GBP_fastwipe, GBP_eliteunpack, GBP_tinyunpack, GBP_caunpack, GBP_capack, GBP_setpal, GBP_bcls, GBP_mirror,
            // GBP_dacvolume, GBP_treble, GBP_bass, GBP_eplay, GBP_estop, GBP_eplace, GBP_jar, GBP_cookie, GBP_xpen, GBP_ypen,
            //
            const GBP_lights = new vscode.CompletionItem('lights');
            GBP_lights.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**lights** `on` or **lights** `off`\n\nSwitches the drive lights for drive A and B on/off. Use this function to create cool effects such as flashing your drive lights to music.');
            GBP_lights.kind = vscode.CompletionItemKind.Keyword;
            const GBP_pready = new vscode.CompletionItem('pready');
            GBP_pready.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**pready**\n\nReturns `X` as true/false depending if your connected printer is ready or not.');
            GBP_pready.kind = vscode.CompletionItemKind.Function;
            const GBP_even = new vscode.CompletionItem('even');
            GBP_even.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**even**(`Y`)\n\nReturns `X` as true/false depending if the value `Y` is an even number.');
            GBP_even.kind = vscode.CompletionItemKind.Function;
            const GBP_setprt = new vscode.CompletionItem('setprt');
            GBP_setprt.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**setprt**(`Y`)\n\nSets the configuration of the attached printer. The value `Y` is a bitwise number representing the following bit numbers for off (0) / on (1):\n\n0 Dot Matrix / Daisy Wheel   \n1 Monochrome / Colour   \n2 Atari Printer / Epson or Compatible   \n3 Test Mode (Draft) / Print Mode (NLQ/LQ)   \n4 Centronics Port / RS-232 Port   \n5 Continuous Sheet / Single Sheet\n\n6-14 _Reserved_\n\n15 Always 0');
            GBP_setprt.kind = vscode.CompletionItemKind.Function;
            const GBP_specialkey = new vscode.CompletionItem('specialkey');
            GBP_specialkey.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**specialkey**(`Y`)\n\nSets or returns the current status of the Atari special keys. The status can be set by passing `Y` as a positive number, or read by passing `Y` as -1. `X` and `Y` are an 8 bit number representing the following:\n\n0 Right shift   \n1 Left shift   \n2 CTRL   \n3 ALT   \n4 CAPS   \n5 Right Mouse (CLR/HOME)   \n6 Left Mouse (INSERT)   \n7 _unused_\n\nIf the bit is set, the key is pressed.');
            GBP_specialkey.kind = vscode.CompletionItemKind.Function;
            const GBP_hcopy = new vscode.CompletionItem('hcopy');
            GBP_hcopy.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**hcopy** `X`\n\nSwitches off the system hardcopy (ALT & HELP) so that your programs cannot be interrupted. `X` is the operation mode where 0 is off, and 1 is on.\n\n_***Examples:***_\n\n>10 hcopy 0   \n>20 wait key   \n>30 hcopy 1');
            GBP_hcopy.kind = vscode.CompletionItemKind.Keyword;
            const GBP_dcrunch = new vscode.CompletionItem('d crunch');
            GBP_dcrunch.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**d crunch** `ADDR`\n\nUncompress data located at memory address `ADDR`. This routine will recognises files compressed with many of the most popular "packers" and will uncompress the file over the top of the compress data. Therefore, you must remember to make sure your memory banks are the correct size to hold the uncompressed file.');
            GBP_dcrunch.kind = vscode.CompletionItemKind.Keyword;
            const GBP_paktype = new vscode.CompletionItem('paktype');
            GBP_paktype.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**paktype**(`ADDR`)\n\nReturns in `X` a number that represents the packer that was used to compress the data in memory location `ADDR`. Zero will be returned if it is of an unknown format. `X` can have the following values:\n\n1 Speed Packer 2   \n2 Atomik v2.5   \n3 Ice v2.11   \n4 Automation v5   \n5 Ice v2.40   \n6 Fire v2.00   \n7 Speed Packer 3');
            GBP_paktype.kind = vscode.CompletionItemKind.Function;
            const GBP_paksize = new vscode.CompletionItem('paksize');
            GBP_paksize.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**paksize**(`ADDR`)\n\nReturns `X` as the uncompressed size of the file located at memory address `ADDR`. You don\'t need to worry about the type of packer that was used, it will be figured out automatically.');
            GBP_paksize.kind = vscode.CompletionItemKind.Function;
            const GBP_fstart = new vscode.CompletionItem('fstart');
            GBP_fstart.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**fstart**(`N`,`ADDR`)\n\nUsed in conjunction with a GBP file bank, **fstart** will return the start memory address of file `N` from the GBP file bank located at memory address `ADDR`.');
            GBP_fstart.kind = vscode.CompletionItemKind.Function;
            const GBP_flength = new vscode.CompletionItem('flength');
            GBP_flength.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**flength**(`N`,`ADDR`)\n\nUsed in conjunction with a GBP file bank, **flength** will return the length of file `N` from the GBP file bank located at memory address `ADDR`.');
            GBP_flength.kind = vscode.CompletionItemKind.Function;
            const GBP_foffset = new vscode.CompletionItem('foffset');
            GBP_foffset.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**foffset**(`N`,`ADDR`)\n\nUsed in conjunction with a GBP file bank, **foffset** will return the offset of file `N` in relation to the GBP file bank located at memory address `ADDR`.');
            GBP_foffset.kind = vscode.CompletionItemKind.Function;
            const GBP_fastwipe = new vscode.CompletionItem('fastwipe');
            GBP_fastwipe.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**fastwipe** `ADDR`\n\nA very fast version of the standard STOS cls command. It will clear 32000 bytes from memory address `ADDR`. **fastwipe** is also faster than wipe within the Missing Link.');
            GBP_fastwipe.kind = vscode.CompletionItemKind.Keyword;
            const GBP_eliteunpack = new vscode.CompletionItem('elite unpack');
            GBP_eliteunpack.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**elite unpack** `ADDR`,`DEST`\n\nUnpacks the Degas Elite compressed PC? picture stored at `ADDR` to memory address `DEST`.');
            GBP_eliteunpack.kind = vscode.CompletionItemKind.Keyword;
            const GBP_tinyunpack = new vscode.CompletionItem('tiny unpack');
            GBP_tinyunpack.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**tiny unpack** `ADDR`,`DEST`\n\nUnpacks the picture compressed in the Tiny format stored at `ADDR` to memory address `DEST`.');
            GBP_tinyunpack.kind = vscode.CompletionItemKind.Keyword;
            const GBP_caunpack = new vscode.CompletionItem('ca unpack');
            GBP_caunpack.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**ca unpack** `ADDR`,`DEST`\n\nUnpacks the Crack Art compressed picture at `ADDR` to memory address `DEST`.');
            GBP_caunpack.kind = vscode.CompletionItemKind.Keyword;
            const GBP_capack = new vscode.CompletionItem('ca pack');
            GBP_capack.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**ca pack** `ADDR`,`DEST`,`PAL`,`MODE`\n\nUses a standard STOS image located at `ADDR` and compresses it to a Crack Art image, storing it at memory address `DEST`. `PAL` represents the memory address of the palette information, which is usually `ADDR`+32000 and `MODE` is the pictures screen reslution. The value `X` is returned as the file size of the compressed image.');
            GBP_capack.kind = vscode.CompletionItemKind.Function;
            const GBP_setpal = new vscode.CompletionItem('setpal');
            GBP_setpal.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**setpal** `ADDR`\n\nQuickly copies data stored in memory address `ADDR` to the palette registers. Useful for storing large palette changes in a memory bank and using them when needed.');
            GBP_setpal.kind = vscode.CompletionItemKind.Keyword;
            const GBP_bcls = new vscode.CompletionItem('bcls');
            GBP_bcls.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**bcls** `ADDR`,`N`\n\nErases a set amount of scanlines from a single bit plane of the screen. `ADDR` is the address of the image that you want to clear (use +2, +4, +6 for other bit planes), and `N` is the number of scanlines you want to clear.');
            GBP_bcls.kind = vscode.CompletionItemKind.Keyword;
            const GBP_mirror = new vscode.CompletionItem('mirror');
            GBP_mirror.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**mirror** `OPT`,`ADDR`,`SY`,`DEST`,`Y`,`N`\n\nProduces a mirror image of the screen data stored at `ADDR` and starting at line `SY`. The image will be copied to the screen address `DEST` starting at scanline `Y`, copying `N`scanlines. The `OPT` changes the operation mode\n\n1 Normal   \n2 Half Copy   \n3 Double Copy');
            GBP_mirror.kind = vscode.CompletionItemKind.Keyword;
            const GBP_dacvolume = new vscode.CompletionItem('dac volume');
            GBP_dacvolume.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**dac volume** `VOL`\n\nSets the main volume of the STE sound output to volume `VOL`. `VOL` can be a number between 0 & 40, with 40 being the loudest.');
            GBP_dacvolume.kind = vscode.CompletionItemKind.Keyword;
            const GBP_treble = new vscode.CompletionItem('treble');
            GBP_treble.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**treble** `N`\n\nSets the amount of treble that is output from the STE. `N` can be a number between 0 & 12 (0 = -12dB, 6 = 0dB, 12 = +12dB).');
            GBP_treble.kind = vscode.CompletionItemKind.Keyword;
            const GBP_bass = new vscode.CompletionItem('bass');
            GBP_bass.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**bass** `N`\n\nSets the amount of bass that is output from the STE. `N` can be a number between 0 & 12 (0 = -12dB, 6 = 0dB, 12 = +12dB).');
            GBP_bass.kind = vscode.CompletionItemKind.Keyword;
            const GBP_eplay = new vscode.CompletionItem('eplay');
            GBP_eplay.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**eplay** `ADDR`,`LEN`,`SPEED`,`MONO`,`MODE`\n\nPlays a sample sound using the STE DMA sound chip. `ADDR` is the memory address of the sample, and `LEN` is the sample length to play. `SPEED` specifies the replay speed of the sample:\n\n0 = 6.258 kHz   \n1 = 12.517 kHz   \n2 = 25.033 kHz   \n3 = 50.066 kHz\n\n`MONO` determines if the sample is mono or stereo:\n\n1 = mono   \n0 = stereo.\n\n`MODE` can be:\n\n0 = stop   \n1 = play one   \n3 = loop forever');
            GBP_eplay.kind = vscode.CompletionItemKind.Keyword;
            const GBP_estop = new vscode.CompletionItem('estop');
            GBP_estop.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n**estop**\n\nStops the STE DAC from replaying a sample.');
            GBP_estop.kind = vscode.CompletionItemKind.Keyword;
            const GBP_eplace = new vscode.CompletionItem('eplace');
            GBP_eplace.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**eplace**\n\nReturns the address in memory that is currently being replayed by the STE hardware.');
            GBP_eplace.kind = vscode.CompletionItemKind.Function;
            const GBP_jar = new vscode.CompletionItem('jar');
            GBP_jar.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**jar**\n\nReturns if "Cookie Jar" `X` exists on the computer. `X` will be true if a "Cookie Jar" does exist, or false if not.');
            GBP_jar.kind = vscode.CompletionItemKind.Function;
            const GBP_cookie = new vscode.CompletionItem('cookie');
            GBP_cookie.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**cookie**(`C$`)\n\nReturns the information specified in the cookie `C$`. `C$` must be passed as one of the official Atari cookies, otherwise no value will be returned. The offical cookies are as follows:\n\n_CPU to return the last two digits of the processor   \n_VDO to return the type of video shifter present   \n_SND to indicate the presence of a DMA sound chip   \n_MCH to return the type of machine   \n_SWI to indivate the position of the configuration switches   \n_FRB to get the address of the FASTRAM buffer.');
            GBP_cookie.kind = vscode.CompletionItemKind.Function;
            const GBP_xpen = new vscode.CompletionItem('xpen');
            GBP_xpen.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`X`=**xpen**\n\nReturns the x screen position of the STE light pen/gun.');
            GBP_xpen.kind = vscode.CompletionItemKind.Function;
            const GBP_ypen = new vscode.CompletionItem('ypen');
            GBP_ypen.documentation = new vscode.MarkdownString('_**GBP Extension**_\n\n`Y`=**ypen**\n\nReturns the y screen position of the STE light pen/gun.');
            GBP_ypen.kind = vscode.CompletionItemKind.Function;
            // Ninja Tracker by Les Greenhalgh
            //
            // Ninja_trackplay, Ninja_vumeter, Ninja_trackfrequency, Ninja_trackpos, Ninja_trackpattern, Ninja_trackkey, Ninja_trackunpack, Ninja_trackname
            //
            const Ninja_trackplay = new vscode.CompletionItem('track play');
            Ninja_trackplay.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n**track play** `ADDRESS`\n\nStarts playing the Sound Tracker module at address `ADDRESS`. Unlike STOS tracker you don\'t need to preconvert them or anything strange like that. If a module is already playing then this same command stops the currently playing song.');
            Ninja_trackplay.kind = vscode.CompletionItemKind.Keyword;
            const Ninja_vumeter = new vscode.CompletionItem('vu meter');
            Ninja_vumeter.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n`X`=**vu meter**(`CHANNEL`)\n\nReturns the current volume of the specified `CHANNEL`.');
            Ninja_vumeter.kind = vscode.CompletionItemKind.Function;
            const Ninja_trackfrequency = new vscode.CompletionItem('track frequency');
            Ninja_trackfrequency.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n**track frequency** `FREQ`\n\nInitially the Ninja Tracker extension is set up to play modules at 16khz. This can be changed using the **track frequency** command. The values of `FREQ` can be 5000,8500,1200,14000 or 21000. Obviously the higher the value of `FREQ`, the more CPU time is taken.');
            Ninja_trackfrequency.kind = vscode.CompletionItemKind.Keyword;
            const Ninja_trackpos = new vscode.CompletionItem('track pos');
            Ninja_trackpos.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n`X`=**track pos**\n\nGets the current song position of the module that is being played.');
            Ninja_trackpos.kind = vscode.CompletionItemKind.Function;
            const Ninja_trackpattern = new vscode.CompletionItem('track pattern');
            Ninja_trackpattern.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n`X`=**track pattern**\n\nGets the current pattern number of the module that is being played.');
            Ninja_trackpattern.kind = vscode.CompletionItemKind.Function;
            const Ninja_trackkey = new vscode.CompletionItem('track key');
            Ninja_trackkey.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n`X`=**track key**\n\nGets the value of the ACIA at $FFFC02 (i.e. reads the keyboard).');
            Ninja_trackkey.kind = vscode.CompletionItemKind.Function;
            const Ninja_trackunpack = new vscode.CompletionItem('track unpack');
            Ninja_trackunpack.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n**track unpack** `ADDRESS`\n\nUnpacks a module file that is compressed with Pack Ice. The file is unpacked on top of itself, so make sure your memory bank is big enough to handle the uncompressed file.');
            Ninja_trackunpack.kind = vscode.CompletionItemKind.Keyword;
            const Ninja_trackname = new vscode.CompletionItem('track name');
            Ninja_trackname.documentation = new vscode.MarkdownString('_**Ninja Tracker Extension**_\n\n`X$`=**track name**(`ADDRESS`)\n\nGets the full name of the module file located at `ADDRESS`.');
            Ninja_trackname.kind = vscode.CompletionItemKind.Function;
            return [
                Completion_inc, Completion_dec, Completion_deg, Completion_rad, Completion_sin, Completion_coz, Completion_tan, Completion_asin, Completion_acoz, Completion_atan, Completion_hsin, Completion_hcoz, Completion_htan,
                Completion_log, Completion_ln, Completion_exp, Completion_sqr, Completion_abs, Completion_int, Completion_sgn, Completion_max, Completion_min, Completion_swap, Completion_deffn, Completion_fn, Completion_rnd, Completion_fix,
                Completion_key, Completion_curs, Completion_click,
                Completion_asc, Completion_len, Completion_val,
                Completion_upper$, Completion_lower$, Completion_flip$, Completion_space$, Completion_string$, Completion_chr$, Completion_str$, Completion_time$, Completion_date$,
                Completion_rol, Completion_ror, Completion_btst, Completion_bset, Completion_bchg, Completion_bclr,
                Completion_hex$, Completion_bin$,
                Completion_peek, Completion_poke, Completion_deek, Completion_doke, Completion_leek, Completion_loke, Completion_varptr,
                Completion_read, Completion_restore,
                Completion_call, Completion_areg, Completion_dreg, Completion_trap,
                Completion_sprite, Completion_movex, Completion_movey, Completion_move, Completion_anim, Completion_putsprite, Completion_getsprite, Completion_update, Completion_xsprite, Completion_ysprite, Completion_movon, Completion_collide,
                Completion_limitsprite, Completion_zone, Completion_setzone, Completion_resetzone, Completion_priority, Completion_redraw, Completion_detect, Completion_synchro, Completion_autoback,
                Completion_appear, Completion_fade, Completion_reduce, Completion_zoom, Completion_screencopy, Completion_defscroll, Completion_scroll, Completion_getpalette, Completion_cls, Completion_unpack, Completion_pack,
                Completion_screen$,
                Completion_polymark, Completion_arc, Completion_earc, Completion_plot, Completion_point, Completion_draw, Completion_box, Completion_rbox, Completion_square, Completion_polyline, Completion_pie, Completion_epie, Completion_circle, Completion_bar, Completion_rbar, Completion_polygon,
                Completion_paint, Completion_mode, Completion_flash, Completion_shift, Completion_ink, Completion_palette, Completion_colour, Completion_grwriting, Completion_setline, Completion_setmark, Completion_setpaint, Completion_setpattern, Completion_divx, Completion_divy,
                Completion_scancode, Completion_fkey, Completion_keyspeed, Completion_putkey, Completion_input, Completion_lineinput,
                Completion_inkey$, Completion_input$,
                Completion_xmouse, Completion_ymouse, Completion_mousekey, Completion_changemouse, Completion_limitmouse, Completion_hide, Completion_show,
                Completion_joy, Completion_jleft, Completion_jright, Completion_jup, Completion_jdown, Completion_fire,
                Completion_open, Completion_close, Completion_eof, Completion_lof, Completion_pof, Completion_field, Completion_put, Completion_get, Completion_port, Completion_dir, Completion_previous, Completion_drive, Completion_drvmap, Completion_dfree, Completion_mkdir,
                Completion_rmdir, Completion_kill, Completion_dir$, Completion_dirfirst$, Completion_dirnext$, Completion_fileselect$,
                Completion_llist, Completion_lprint, Completion_ldir, Completion_llistbank, Completion_hardcopy,
                Completion_music, Completion_voice, Completion_tempo, Completion_transpose, Completion_volume, Completion_envel, Completion_play, Completion_noise, Completion_boom, Completion_bell, Completion_shoot, Completion_psg,
                Completion_tremolo, Completion_stoptremolo, Completion_stopnoise, Completion_noiseonly, Completion_ntremolo,
                Completion_icon$,
                Completion_menu, Completion_onmenu, Completion_mnbar, Completion_mnselect,
                Completion_menu$,
                Completion_instr, Completion_left$, Completion_right$, Completion_mid$,
                Completion_sort, Completion_match,
                Completion_bcopy, Completion_bgrab, Completion_start, Completion_length, Completion_load, Completion_save, Completion_bload, Completion_bsave, Completion_copy, Completion_fill, Completion_hunt,
                Completion_charlen, Completion_charcopy,
                Completion_border, Completion_cdown, Completion_cup, Completion_cleft, Completion_cright, Completion_tab, Completion_clw, Completion_setcurs, Completion_default, Completion_home, Completion_inverse, Completion_under, Completion_shade, Completion_locate,
                Completion_paper, Completion_pen, Completion_print, Completion_using, Completion_centre, Completion_scrn,
                Completion_qwindow, Completion_windopen, Completion_window, Completion_windon, Completion_windoff, Completion_windmove, Completion_windcopy, Completion_windel, Completion_title,
                Completion_xcurs, Completion_ycurs, Completion_xtext, Completion_ytext, Completion_xgraphic, Completion_ygraphic,
                Completion_dim, Completion_reserve, Completion_erase, Completion_clear, Completion_let, Completion_as, Completion_screen, Completion_datascreen, Completion_set, Completion_work, Completion_memdata, Completion_data,
                GBP_lights, GBP_pready, GBP_even, GBP_setprt, GBP_specialkey, GBP_hcopy, GBP_dcrunch, GBP_paktype, GBP_paksize,
                GBP_fstart, GBP_flength, GBP_foffset, GBP_fastwipe, GBP_eliteunpack, GBP_tinyunpack, GBP_caunpack, GBP_capack, GBP_setpal, GBP_bcls, GBP_mirror,
                GBP_dacvolume, GBP_treble, GBP_bass, GBP_eplay, GBP_estop, GBP_eplace, GBP_jar, GBP_cookie, GBP_xpen, GBP_ypen,
                Ninja_trackplay, Ninja_vumeter, Ninja_trackfrequency, Ninja_trackpos, Ninja_trackpattern, Ninja_trackkey, Ninja_trackunpack, Ninja_trackname
            ];
        }
    });
    const provider2 = vscode.languages.registerCompletionItemProvider('stos', {
        provideCompletionItems(document, position) {
            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('console.')) {
                return undefined;
            }
            return [
                new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
            ];
        }
    }, '.' // triggered whenever a '.' is being typed
    );
    context.subscriptions.push(provider1, provider2);
}
exports.activate = activate;
// a completion item that inserts its text as snippet,
// the `insertText`-property is a `SnippetString` which will be
// honored by the editor.
//const snippetCompletion = new vscode.CompletionItem('Good part of the day');
//snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
//snippetCompletion.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");
// a completion item that can be accepted by a commit character,
// the `commitCharacters`-property is set which means that the completion will
// be inserted and then the character will be typed.
//const commitCharacterCompletion = new vscode.CompletionItem('console');
//commitCharacterCompletion.commitCharacters = ['.'];
//commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
// a completion item that retriggers IntelliSense when being accepted,
// the `command`-property is set which the editor will execute after 
// completion has been inserted. Also, the `insertText` is set so that 
// a space is inserted after `new`
//const commandCompletion = new vscode.CompletionItem('new');
//commandCompletion.kind = vscode.CompletionItemKind.Keyword;
//commandCompletion.insertText = 'new ';
//commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
// return all completion items as array
//true|false|on|off|up|down|in|out|freeze|vbl
//# sourceMappingURL=extension.js.map