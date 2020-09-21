"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const provider1 = vscode.languages.registerCompletionItemProvider('stos', {
        provideCompletionItems(document, position, token, context) {
            // Standard STOS Basic instructions
            // -- Constants
            //true|false|on|off|up|down|in|out|freeze|vbl
            //const Completion_true = new vscode.CompletionItem('true');
            //Completion_true.kind = vscode.CompletionItemKind.Constant;
            //const Completion_false = new vscode.CompletionItem('false');
            //Completion_false.kind = vscode.CompletionItemKind.Constant;
            //const Completion_on = new vscode.CompletionItem('on');
            //Completion_on.kind = vscode.CompletionItemKind.Constant;
            //const Completion_off = new vscode.CompletionItem('off');
            //Completion_off.kind = vscode.CompletionItemKind.Constant;
            //const Completion_up = new vscode.CompletionItem('up');
            //Completion_up.kind = vscode.CompletionItemKind.Constant;
            //const Completion_down = new vscode.CompletionItem('down');
            //Completion_down.kind = vscode.CompletionItemKind.Constant;
            //const Completion_in = new vscode.CompletionItem('in');
            //Completion_in.kind = vscode.CompletionItemKind.Constant;
            //const Completion_out = new vscode.CompletionItem('out');
            //Completion_out.kind = vscode.CompletionItemKind.Constant;
            //const Completion_freeze = new vscode.CompletionItem('freeze');
            //Completion_freeze.kind = vscode.CompletionItemKind.Constant;
            //const Completion_vbl = new vscode.CompletionItem('vbl');
            //Completion_vbl.kind = vscode.CompletionItemKind.Constant;
            // ** bold on/off  				ie.. **Bold**
            // _  italic on/off				ie.. _Italic_
            // *** bold italic on/off		ie.. ***Bold and Italic***
            // <space><space><space>\n		New line
            // \n\n							New paragraph
            // -- Support Functions
            // inc|dec|deg|rad|sin|cos|tan|asin|acos|atan|hsin|hcos|htan|log|ln|exp|sqr|abs|int|sgn|max|min|swap|def fn|fn|rnd|fix
            const Completion_inc = new vscode.CompletionItem('inc');
            Completion_inc.documentation = new vscode.MarkdownString('**INC** _var_\n\n**INC** adds one to the integer variable _var_. It is logically equivalent to the expression _var_=_var_+1, but is much faster.\n\n***Example:***\n\n**INC** _var_');
            Completion_inc.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dec = new vscode.CompletionItem('dec');
            Completion_dec.documentation = new vscode.MarkdownString('**DEC** _var_\n\n**DEC** subtracts one from the integer variable _var_. It is logically equivalent to the expression _var_=_var_-1, but is much faster.\n\n_**Example:**_\n\n**DEC** _var_');
            Completion_dec.kind = vscode.CompletionItemKind.Keyword;
            const Completion_deg = new vscode.CompletionItem('deg');
            Completion_deg.documentation = new vscode.MarkdownString('_degrees_=**DEG**(_radians_)\n\n**DEG** converts angles expressed in _radians_ into degrees. A degree is approximately equal to 57 radians.\n\n_**Example:**_\n\nprint **DEG**(90)\n\nSee **RAD**');
            Completion_deg.kind = vscode.CompletionItemKind.Function;
            const Completion_rad = new vscode.CompletionItem('rad');
            Completion_rad.documentation = new vscode.MarkdownString('_radians_=**RAD**(_degrees_)\n\n**RAD** converts angles expressed in _degrees_ into radians. A degree is approximately equal to 57 radians.\n\n_**Example:**_\n\nprint **RAD**(5156.62015618)\n\nSee **DEG**');
            Completion_rad.kind = vscode.CompletionItemKind.Function;
            const Completion_sin = new vscode.CompletionItem('sin');
            Completion_sin.documentation = new vscode.MarkdownString('_x#_=**SIN**(_y#_)\n\n**SIN** calculates the sine of the angle _y#_.\n\n_**Examples:**_\n\nP#=**SIN**(pi/2)   \nprint **SIN**(pi/4)\n\nSee **ASIN**,**HSIN**,**PI**');
            Completion_sin.kind = vscode.CompletionItemKind.Function;
            const Completion_coz = new vscode.CompletionItem('coz');
            Completion_coz.documentation = new vscode.MarkdownString('_x#_=**COZ**(_y#_)\n\n**COZ** calculates the cosine of the angle _y#_.\n\n_**Examples:**_\n\nQ#=**COZ**(pi/2)   \nprint **COZ**(pi/4)\n\nSee **ACOZ**,**HCOZ**,**PI**');
            Completion_coz.kind = vscode.CompletionItemKind.Function;
            const Completion_tan = new vscode.CompletionItem('tan');
            Completion_tan.documentation = new vscode.MarkdownString('_x#_=**TAN**(_y#_)\n\n**TAN** calculates the tangent of the angle _y#_.\n\n_**Examples:**_\n\nR#=**TAN**(pi/3)   \nprint **TAN**(pi/4)\n\nSee **ATAN**,**HTAN**,**PI**');
            Completion_tan.kind = vscode.CompletionItemKind.Function;
            const Completion_asin = new vscode.CompletionItem('asin');
            Completion_asin.documentation = new vscode.MarkdownString('_x#_=**ASIN**(_y#_)\n\n**ASIN** calculates the arc sine of _y#_ (a value between -1 and +1).\n\n_**Examples:**_\n\nA#=**ASIN**(1)   \nprint **ASIN**(0.5)\n\nSee **SIN**,**HSIN**,**PI**');
            Completion_asin.kind = vscode.CompletionItemKind.Function;
            const Completion_acoz = new vscode.CompletionItem('acoz');
            Completion_acoz.documentation = new vscode.MarkdownString('_x#_=**ACOZ**(_y#_)\n\n**ACOZ** calculates the arc cosine of _y#_ (a value between -1 and +1).\n\n_**Examples:**_\n\nB#=**ACOS**(1)   \nprint **ACOS**(0.5)\n\nSee **COS**,**HCOS**,**PI**');
            Completion_acoz.kind = vscode.CompletionItemKind.Function;
            const Completion_atan = new vscode.CompletionItem('atan');
            Completion_atan.documentation = new vscode.MarkdownString('_x#_=**ATAN**(_y#_)\n\n**ATAN** calculates the arc tangent of _y#_ (a value between -1 and +1).\n\n_**Examples:**_\n\nC#=**ATAN**(0.5)   \nprint **ATAN**(0)\n\nSee **TAN**,**HTAN**,**PI**');
            Completion_atan.kind = vscode.CompletionItemKind.Function;
            const Completion_hsin = new vscode.CompletionItem('hsin');
            Completion_hsin.documentation = new vscode.MarkdownString('_x#_=**HSIN**(_y#_)\n\n**HSIN** calculates the hyberbolic sine of the angle _y#_.\n\nSee **SIN**,**ASIN**');
            Completion_hsin.kind = vscode.CompletionItemKind.Function;
            const Completion_hcoz = new vscode.CompletionItem('hcoz');
            Completion_hcoz.documentation = new vscode.MarkdownString('_x#_=**HCOZ**(_y#_)\n\n**HCOZ** calculates the hyberbolic cosine of the angle _y#_.\n\nSee **COZ**,**ACOZ**');
            Completion_hcoz.kind = vscode.CompletionItemKind.Function;
            const Completion_htan = new vscode.CompletionItem('htan');
            Completion_htan.documentation = new vscode.MarkdownString('_x#_=**HTAN**(_y#_)\n\n**HTAN** calculates the hyberbolic tangent of the angle _y#_.\n\nSee **TAN**,**ATAN**');
            Completion_htan.kind = vscode.CompletionItemKind.Function;
            const Completion_log = new vscode.CompletionItem('log');
            Completion_log.documentation = new vscode.MarkdownString('_x#_=**LOG**(_y#_)\n\n**LOG** calculates the logarithm in base 10 (log10) of _y#_.\n\n_**Examples:**_\n\nV#=**LOG**(10)   \nprint **LOG**(10)');
            Completion_log.kind = vscode.CompletionItemKind.Function;
            const Completion_ln = new vscode.CompletionItem('ln');
            Completion_ln.documentation = new vscode.MarkdownString('_x#_=**LN**(_y#_)\n\n**LN** calculates the natural or naperian logarithm of _y#_.\n\n_**Examples:**_\n\nR#=**LN**(100)   \nprint **LN**(10)\n\nThe action of **LN** is th opposite of that of **EXP**.');
            Completion_ln.kind = vscode.CompletionItemKind.Function;
            const Completion_exp = new vscode.CompletionItem('exp');
            Completion_exp.documentation = new vscode.MarkdownString('_x#_=**EXP**(_y#_)\n\n**EXP** calculates exponential of _y#_.\n\n_**Examples:**_\n\nTEST#=**EXP**(LN(100))   \nprint **EXP**(1)\n\nThe action of **EXP** is th opposite of that of **LN**.');
            Completion_exp.kind = vscode.CompletionItemKind.Function;
            const Completion_sqr = new vscode.CompletionItem('sqr');
            Completion_sqr.documentation = new vscode.MarkdownString('_x#_=**SQR**(_y#_)\n\n**SQR** calculates the number which must be multiplied by itself to get the value of _y#_.\n\n_**Examples:**_\n\ninput "input a positive number ";N   \nprint "the square root of ";N;" is ";SQR(N)');
            Completion_sqr.kind = vscode.CompletionItemKind.Function;
            const Completion_abs = new vscode.CompletionItem('abs');
            Completion_abs.documentation = new vscode.MarkdownString('_x#_=**ABS**(_y#_)\n\n**ABS** calculates the absolution value of _y#_, taking no account of the sign of the number.\n\n_**Examples:**_\n\nprint ABS(-1), ABS(1)   \n1 1');
            Completion_abs.kind = vscode.CompletionItemKind.Function;
            const Completion_int = new vscode.CompletionItem('int');
            Completion_int.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_int.kind = vscode.CompletionItemKind.Function;
            const Completion_sgn = new vscode.CompletionItem('sgn');
            Completion_sgn.documentation = new vscode.MarkdownString('_x_=**SGN**(_y#_)\n\n**SGN** returns the sign of the number or expression in _y#_. The function returns one of three possible values\n\n-1 if _y#_ is negative   \n0 if _y#_ is zero   \n1 if _y#_ is positive');
            Completion_sgn.kind = vscode.CompletionItemKind.Function;
            const Completion_max = new vscode.CompletionItem('max');
            //Completion_max.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_max.kind = vscode.CompletionItemKind.Function;
            const Completion_min = new vscode.CompletionItem('min');
            //Completion_min.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_min.kind = vscode.CompletionItemKind.Function;
            const Completion_swap = new vscode.CompletionItem('swap');
            //Completion_swap.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_swap.kind = vscode.CompletionItemKind.Function;
            const Completion_deffn = new vscode.CompletionItem('def fn');
            //Completion_defn.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_deffn.kind = vscode.CompletionItemKind.Function;
            const Completion_fn = new vscode.CompletionItem('fn');
            //Completion_fn.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fn.kind = vscode.CompletionItemKind.Function;
            const Completion_rnd = new vscode.CompletionItem('rnd');
            //Completion_rnd.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rnd.kind = vscode.CompletionItemKind.Function;
            const Completion_fix = new vscode.CompletionItem('fix');
            //Completion_fix.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fix.kind = vscode.CompletionItemKind.Function;
            //(key|curs|click)
            const Completion_key = new vscode.CompletionItem('key');
            //Completion_key.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_key.kind = vscode.CompletionItemKind.Function;
            const Completion_curs = new vscode.CompletionItem('curs');
            //Completion_curs.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_curs.kind = vscode.CompletionItemKind.Function;
            const Completion_click = new vscode.CompletionItem('click');
            //Completion_click.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_click.kind = vscode.CompletionItemKind.Function;
            //(asc|len|val)
            const Completion_asc = new vscode.CompletionItem('asc');
            //Completion_asc.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_asc.kind = vscode.CompletionItemKind.Function;
            const Completion_len = new vscode.CompletionItem('len');
            //Completion_len.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_len.kind = vscode.CompletionItemKind.Function;
            const Completion_val = new vscode.CompletionItem('val');
            //Completion_val.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_val.kind = vscode.CompletionItemKind.Function;
            //(upper$|lower$|flip$|space$|string$|chr$|str$|time$|date$)
            const Completion_upper$ = new vscode.CompletionItem('upper$');
            //Completion_upper$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_upper$.kind = vscode.CompletionItemKind.Function;
            const Completion_lower$ = new vscode.CompletionItem('lower$');
            //Completion_lower$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lower$.kind = vscode.CompletionItemKind.Function;
            const Completion_flip$ = new vscode.CompletionItem('flip$');
            //Completion_flip$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_flip$.kind = vscode.CompletionItemKind.Function;
            const Completion_space$ = new vscode.CompletionItem('space$');
            //Completion_space$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_space$.kind = vscode.CompletionItemKind.Function;
            const Completion_string$ = new vscode.CompletionItem('string$');
            //Completion_string$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_string$.kind = vscode.CompletionItemKind.Function;
            const Completion_chr$ = new vscode.CompletionItem('chr$');
            //Completion_chr$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_chr$.kind = vscode.CompletionItemKind.Function;
            const Completion_str$ = new vscode.CompletionItem('str$');
            //Completion_str$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_str$.kind = vscode.CompletionItemKind.Function;
            const Completion_time$ = new vscode.CompletionItem('time$');
            //Completion_time$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_time$.kind = vscode.CompletionItemKind.Function;
            const Completion_date$ = new vscode.CompletionItem('date$');
            //Completion_date$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_date$.kind = vscode.CompletionItemKind.Function;
            // (rol|ror|btst|bset|bchg|bclr)
            const Completion_rol = new vscode.CompletionItem('rol');
            //Completion_rol.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rol.kind = vscode.CompletionItemKind.Function;
            const Completion_ror = new vscode.CompletionItem('ror');
            //Completion_ror.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ror.kind = vscode.CompletionItemKind.Function;
            const Completion_btst = new vscode.CompletionItem('btst');
            //Completion_btst.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_btst.kind = vscode.CompletionItemKind.Function;
            const Completion_bset = new vscode.CompletionItem('bset');
            //Completion_bset.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bset.kind = vscode.CompletionItemKind.Function;
            const Completion_bchg = new vscode.CompletionItem('bchg');
            //Completion_bchg.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bchg.kind = vscode.CompletionItemKind.Function;
            const Completion_bclr = new vscode.CompletionItem('bclr');
            //Completion_bclr.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bclr.kind = vscode.CompletionItemKind.Function;
            //(hex$|bin$)
            const Completion_hex$ = new vscode.CompletionItem('hex$');
            //Completion_hex$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hex$.kind = vscode.CompletionItemKind.Function;
            const Completion_bin$ = new vscode.CompletionItem('bin$');
            //Completion_bin$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bin$.kind = vscode.CompletionItemKind.Function;
            // (peek|poke|deek|doke|leek|loke|varptr)
            const Completion_peek = new vscode.CompletionItem('peek');
            //Completion_peek.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_peek.kind = vscode.CompletionItemKind.Function;
            const Completion_poke = new vscode.CompletionItem('poke');
            //Completion_poke.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_poke.kind = vscode.CompletionItemKind.Keyword;
            const Completion_deek = new vscode.CompletionItem('deek');
            //Completion_deek.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_deek.kind = vscode.CompletionItemKind.Function;
            const Completion_doke = new vscode.CompletionItem('doke');
            //Completion_doke.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_doke.kind = vscode.CompletionItemKind.Keyword;
            const Completion_leek = new vscode.CompletionItem('leek');
            //Completion_leek.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_leek.kind = vscode.CompletionItemKind.Function;
            const Completion_loke = new vscode.CompletionItem('loke');
            //Completion_loke.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_loke.kind = vscode.CompletionItemKind.Keyword;
            const Completion_varptr = new vscode.CompletionItem('varptr');
            //Completion_varptr.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_varptr.kind = vscode.CompletionItemKind.Function;
            //(read|restore)
            const Completion_read = new vscode.CompletionItem('read');
            //Completion_read.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_read.kind = vscode.CompletionItemKind.Keyword;
            const Completion_restore = new vscode.CompletionItem('restore');
            //Completion_restore.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_restore.kind = vscode.CompletionItemKind.Keyword;
            //(call|areg|dreg|trap)
            const Completion_call = new vscode.CompletionItem('call');
            //Completion_call.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_call.kind = vscode.CompletionItemKind.Keyword;
            const Completion_areg = new vscode.CompletionItem('areg');
            //Completion_areg.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_areg.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dreg = new vscode.CompletionItem('dreg');
            //Completion_dreg.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dreg.kind = vscode.CompletionItemKind.Keyword;
            const Completion_trap = new vscode.CompletionItem('trap');
            //Completion_trap.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_trap.kind = vscode.CompletionItemKind.Keyword;
            //(sprite|move x|move y|move|anim|put sprite|get sprite|update|x sprite|y sprite|movon|collide|limit sprite|zone|set zone|reset zone|priority|redraw|detect|synchro|auto back)
            const Completion_sprite = new vscode.CompletionItem('sprite');
            //Completion_sprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_sprite.kind = vscode.CompletionItemKind.Keyword;
            const Completion_movex = new vscode.CompletionItem('move x');
            //Completion_movex.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_movex.kind = vscode.CompletionItemKind.Keyword;
            const Completion_movey = new vscode.CompletionItem('move y');
            //Completion_movey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_movey.kind = vscode.CompletionItemKind.Keyword;
            const Completion_move = new vscode.CompletionItem('move');
            //Completion_move.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_move.kind = vscode.CompletionItemKind.Keyword;
            const Completion_anim = new vscode.CompletionItem('anim');
            //Completion_anim.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_anim.kind = vscode.CompletionItemKind.Keyword;
            const Completion_putsprite = new vscode.CompletionItem('put sprite');
            //Completion_putsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_putsprite.kind = vscode.CompletionItemKind.Keyword;
            const Completion_getsprite = new vscode.CompletionItem('get sprite');
            //Completion_getsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_getsprite.kind = vscode.CompletionItemKind.Function;
            const Completion_update = new vscode.CompletionItem('update');
            //Completion_getupdate.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_update.kind = vscode.CompletionItemKind.Keyword;
            const Completion_xsprite = new vscode.CompletionItem('x sprite');
            //Completion_xsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xsprite.kind = vscode.CompletionItemKind.Function;
            const Completion_ysprite = new vscode.CompletionItem('y sprite');
            //Completion_ysprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ysprite.kind = vscode.CompletionItemKind.Function;
            const Completion_movon = new vscode.CompletionItem('movon');
            //Completion_movon.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_movon.kind = vscode.CompletionItemKind.Function;
            const Completion_collide = new vscode.CompletionItem('collide');
            //Completion_collide.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_collide.kind = vscode.CompletionItemKind.Function;
            const Completion_limitsprite = new vscode.CompletionItem('limit sprite');
            //Completion_limitsprite.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_limitsprite.kind = vscode.CompletionItemKind.Keyword;
            const Completion_zone = new vscode.CompletionItem('zone');
            //Completion_zone.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_zone.kind = vscode.CompletionItemKind.Function;
            const Completion_setzone = new vscode.CompletionItem('set zone');
            //Completion_setzone.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setzone.kind = vscode.CompletionItemKind.Keyword;
            const Completion_resetzone = new vscode.CompletionItem('reset zone');
            //Completion_resetzone.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_resetzone.kind = vscode.CompletionItemKind.Keyword;
            const Completion_priority = new vscode.CompletionItem('priority');
            //Completion_priority.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_priority.kind = vscode.CompletionItemKind.Keyword;
            const Completion_redraw = new vscode.CompletionItem('redraw');
            //Completion_redraw.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_redraw.kind = vscode.CompletionItemKind.Keyword;
            const Completion_detect = new vscode.CompletionItem('detect');
            //Completion_detect.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_detect.kind = vscode.CompletionItemKind.Function;
            const Completion_synchro = new vscode.CompletionItem('synchro');
            //Completion_synchro.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_synchro.kind = vscode.CompletionItemKind.Keyword;
            const Completion_autoback = new vscode.CompletionItem('auto back');
            //Completion_autoback.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_autoback.kind = vscode.CompletionItemKind.Keyword;
            const Completion_appear = new vscode.CompletionItem('appear');
            //Completion_appear.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_appear.kind = vscode.CompletionItemKind.Keyword;
            const Completion_fade = new vscode.CompletionItem('fade');
            //Completion_fade.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fade.kind = vscode.CompletionItemKind.Keyword;
            const Completion_reduce = new vscode.CompletionItem('reduce');
            //Completion_reduce.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_reduce.kind = vscode.CompletionItemKind.Keyword;
            const Completion_zoom = new vscode.CompletionItem('zoom');
            //Completion_zoom.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_zoom.kind = vscode.CompletionItemKind.Keyword;
            const Completion_screencopy = new vscode.CompletionItem('screen copy');
            //Completion_screencopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_screencopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_defscroll = new vscode.CompletionItem('def scroll');
            //Completion_defscroll.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_defscroll.kind = vscode.CompletionItemKind.Keyword;
            const Completion_scroll = new vscode.CompletionItem('scroll');
            //Completion_scroll.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_scroll.kind = vscode.CompletionItemKind.Keyword;
            const Completion_getpalette = new vscode.CompletionItem('get palette');
            //Completion_getpalette.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_getpalette.kind = vscode.CompletionItemKind.Keyword;
            const Completion_cls = new vscode.CompletionItem('cls');
            //Completion_cls.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_cls.kind = vscode.CompletionItemKind.Keyword;
            const Completion_unpack = new vscode.CompletionItem('unpack');
            //Completion_unpack.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_unpack.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pack = new vscode.CompletionItem('pack');
            //Completion_pack.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pack.kind = vscode.CompletionItemKind.Function;
            const Completion_screen$ = new vscode.CompletionItem('screen$');
            //Completion_screen$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_screen$.kind = vscode.CompletionItemKind.Function;
            const Completion_polymark = new vscode.CompletionItem('polymark');
            //Completion_polymark.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_polymark.kind = vscode.CompletionItemKind.Keyword;
            const Completion_arc = new vscode.CompletionItem('arc');
            //Completion_arc.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_arc.kind = vscode.CompletionItemKind.Keyword;
            const Completion_earc = new vscode.CompletionItem('earc');
            //Completion_earc.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_earc.kind = vscode.CompletionItemKind.Keyword;
            const Completion_plot = new vscode.CompletionItem('plot');
            //Completion_plot.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_plot.kind = vscode.CompletionItemKind.Keyword;
            const Completion_point = new vscode.CompletionItem('point');
            //Completion_point.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_point.kind = vscode.CompletionItemKind.Function;
            const Completion_draw = new vscode.CompletionItem('draw');
            //Completion_draw.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_draw.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rbox = new vscode.CompletionItem('rbox');
            //Completion_rbox.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rbox.kind = vscode.CompletionItemKind.Keyword;
            const Completion_polyline = new vscode.CompletionItem('polyline');
            //Completion_polyline.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_polyline.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pie = new vscode.CompletionItem('pie');
            //Completion_pie.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pie.kind = vscode.CompletionItemKind.Keyword;
            const Completion_epie = new vscode.CompletionItem('epie');
            //Completion_epie.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_epie.kind = vscode.CompletionItemKind.Keyword;
            const Completion_circle = new vscode.CompletionItem('circle');
            //Completion_circle.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_circle.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bar = new vscode.CompletionItem('bar');
            //Completion_bar.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bar.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rbar = new vscode.CompletionItem('rbar');
            //Completion_rbar.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rbar.kind = vscode.CompletionItemKind.Keyword;
            const Completion_polygon = new vscode.CompletionItem('polygon');
            //Completion_polygon.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_polygon.kind = vscode.CompletionItemKind.Keyword;
            const Completion_paint = new vscode.CompletionItem('paint');
            //Completion_paint.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_paint.kind = vscode.CompletionItemKind.Keyword;
            const Completion_mode = new vscode.CompletionItem('mode');
            //Completion_mode.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mode.kind = vscode.CompletionItemKind.Keyword;
            const Completion_flash = new vscode.CompletionItem('flash');
            //Completion_flash.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_flash.kind = vscode.CompletionItemKind.Keyword;
            const Completion_shift = new vscode.CompletionItem('shift');
            //Completion_shift.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_shift.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ink = new vscode.CompletionItem('ink');
            //Completion_ink.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ink.kind = vscode.CompletionItemKind.Keyword;
            const Completion_palette = new vscode.CompletionItem('palette');
            //Completion_palette.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_palette.kind = vscode.CompletionItemKind.Keyword;
            const Completion_colour = new vscode.CompletionItem('colour');
            //Completion_colour.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_colour.kind = vscode.CompletionItemKind.Function;
            const Completion_grwriting = new vscode.CompletionItem('gr writing');
            //Completion_grwriting.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_grwriting.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setline = new vscode.CompletionItem('set line');
            //Completion_setline.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setline.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setmark = new vscode.CompletionItem('set mark');
            //Completion_setmark.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setmark.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setpaint = new vscode.CompletionItem('set paint');
            //Completion_setpaint.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setpaint.kind = vscode.CompletionItemKind.Keyword;
            const Completion_setpattern = new vscode.CompletionItem('set pattern');
            //Completion_setpattern.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_setpattern.kind = vscode.CompletionItemKind.Keyword;
            const Completion_divx = new vscode.CompletionItem('divx');
            //Completion_divx.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_divx.kind = vscode.CompletionItemKind.Function;
            const Completion_divy = new vscode.CompletionItem('divy');
            //Completion_divy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_divy.kind = vscode.CompletionItemKind.Function;
            const Completion_scancode = new vscode.CompletionItem('scancode');
            //Completion_scancode.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_scancode.kind = vscode.CompletionItemKind.Function;
            const Completion_fkey = new vscode.CompletionItem('fkey');
            //Completion_fkey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fkey.kind = vscode.CompletionItemKind.Function;
            const Completion_keyspeed = new vscode.CompletionItem('key speed');
            //Completion_keyspeed.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_keyspeed.kind = vscode.CompletionItemKind.Keyword;
            const Completion_putkey = new vscode.CompletionItem('put key');
            //Completion_putkey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_putkey.kind = vscode.CompletionItemKind.Keyword;
            const Completion_input = new vscode.CompletionItem('input');
            //Completion_input.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_input.kind = vscode.CompletionItemKind.Function;
            const Completion_lineinput = new vscode.CompletionItem('line input');
            //Completion_lineinput.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lineinput.kind = vscode.CompletionItemKind.Function;
            const Completion_inkey$ = new vscode.CompletionItem('inkey$');
            //Completion_inkey$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_inkey$.kind = vscode.CompletionItemKind.Function;
            const Completion_input$ = new vscode.CompletionItem('input$');
            //Completion_input$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_input$.kind = vscode.CompletionItemKind.Function;
            const Completion_xmouse = new vscode.CompletionItem('x mouse');
            //Completion_xmouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_xmouse.kind = vscode.CompletionItemKind.Function;
            const Completion_ymouse = new vscode.CompletionItem('y mouse');
            //Completion_ymouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ymouse.kind = vscode.CompletionItemKind.Function;
            const Completion_mousekey = new vscode.CompletionItem('mouse key');
            //Completion_mousekey.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mousekey.kind = vscode.CompletionItemKind.Function;
            const Completion_changemouse = new vscode.CompletionItem('change mouse');
            //Completion_changemouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_changemouse.kind = vscode.CompletionItemKind.Function;
            const Completion_limitmouse = new vscode.CompletionItem('limit mouse');
            //Completion_limitmouse.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_limitmouse.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hide = new vscode.CompletionItem('hide');
            //Completion_hide.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hide.kind = vscode.CompletionItemKind.Keyword;
            const Completion_show = new vscode.CompletionItem('show');
            //Completion_show.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_show.kind = vscode.CompletionItemKind.Keyword;
            const Completion_joy = new vscode.CompletionItem('joy');
            //Completion_joy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_joy.kind = vscode.CompletionItemKind.Function;
            const Completion_jleft = new vscode.CompletionItem('jleft');
            //Completion_jleft.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jleft.kind = vscode.CompletionItemKind.Function;
            const Completion_jright = new vscode.CompletionItem('jright');
            //Completion_jright.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jright.kind = vscode.CompletionItemKind.Function;
            const Completion_jup = new vscode.CompletionItem('jup');
            //Completion_jup.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jup.kind = vscode.CompletionItemKind.Function;
            const Completion_jdown = new vscode.CompletionItem('jdown');
            //Completion_jdown.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_jdown.kind = vscode.CompletionItemKind.Function;
            const Completion_fire = new vscode.CompletionItem('fire');
            //Completion_fire.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fire.kind = vscode.CompletionItemKind.Function;
            const Completion_open = new vscode.CompletionItem('open');
            //Completion_open.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_open.kind = vscode.CompletionItemKind.Keyword;
            const Completion_close = new vscode.CompletionItem('close');
            //Completion_close.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_close.kind = vscode.CompletionItemKind.Keyword;
            const Completion_eof = new vscode.CompletionItem('eof');
            //Completion_eof.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_eof.kind = vscode.CompletionItemKind.Function;
            const Completion_lof = new vscode.CompletionItem('lof');
            //Completion_lof.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lof.kind = vscode.CompletionItemKind.Function;
            const Completion_pof = new vscode.CompletionItem('pof');
            //Completion_pof.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pof.kind = vscode.CompletionItemKind.Keyword;
            const Completion_field = new vscode.CompletionItem('field');
            //Completion_field.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_field.kind = vscode.CompletionItemKind.Keyword;
            const Completion_put = new vscode.CompletionItem('put');
            //Completion_put.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_put.kind = vscode.CompletionItemKind.Keyword;
            const Completion_get = new vscode.CompletionItem('get');
            //Completion_get.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_get.kind = vscode.CompletionItemKind.Keyword;
            const Completion_port = new vscode.CompletionItem('port');
            //Completion_port.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_port.kind = vscode.CompletionItemKind.Function;
            const Completion_dir = new vscode.CompletionItem('dir');
            //Completion_dir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dir.kind = vscode.CompletionItemKind.Property;
            const Completion_previous = new vscode.CompletionItem('previous');
            //Completion_previous.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_previous.kind = vscode.CompletionItemKind.Keyword;
            const Completion_drive = new vscode.CompletionItem('drive');
            //Completion_drive.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_drive.kind = vscode.CompletionItemKind.Property;
            const Completion_drvmap = new vscode.CompletionItem('drvmap');
            //Completion_drvmap.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_drvmap.kind = vscode.CompletionItemKind.Property;
            const Completion_dfree = new vscode.CompletionItem('dfree');
            //Completion_dfree.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dfree.kind = vscode.CompletionItemKind.Property;
            const Completion_mkdir = new vscode.CompletionItem('mkdir');
            //Completion_mkdir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mkdir.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rmdir = new vscode.CompletionItem('rmdir');
            //Completion_rmdir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rmdir.kind = vscode.CompletionItemKind.Keyword;
            const Completion_kill = new vscode.CompletionItem('kill');
            //Completion_kill.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_kill.kind = vscode.CompletionItemKind.Keyword;
            const Completion_rename = new vscode.CompletionItem('rename');
            //Completion_rename.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_rename.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dir$ = new vscode.CompletionItem('dir$');
            //Completion_dir$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dir$.kind = vscode.CompletionItemKind.Keyword;
            const Completion_dirfirst$ = new vscode.CompletionItem('dir first$');
            //Completion_dirfirst$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dirfirst$.kind = vscode.CompletionItemKind.Function;
            const Completion_dirnext$ = new vscode.CompletionItem('dir next$');
            //Completion_dirnext$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_dirnext$.kind = vscode.CompletionItemKind.Function;
            const Completion_fileselect$ = new vscode.CompletionItem('fileselect$');
            //Completion_fileselect$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fileselect$.kind = vscode.CompletionItemKind.Function;
            const Completion_llist = new vscode.CompletionItem('llist');
            //Completion_llist.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_llist.kind = vscode.CompletionItemKind.Keyword;
            const Completion_lprint = new vscode.CompletionItem('lprint');
            //Completion_lprint.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_lprint.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ldir = new vscode.CompletionItem('ldir');
            //Completion_ldir.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ldir.kind = vscode.CompletionItemKind.Keyword;
            const Completion_llistbank = new vscode.CompletionItem('llistbank');
            //Completion_llistbank.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_llistbank.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hardcopy = new vscode.CompletionItem('hardcopy');
            //Completion_hardcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hardcopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_windcopy = new vscode.CompletionItem('windcopy');
            //Completion_windcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_windcopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_music = new vscode.CompletionItem('music');
            //Completion_music.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_music.kind = vscode.CompletionItemKind.Keyword;
            const Completion_voice = new vscode.CompletionItem('voice');
            //Completion_voice.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_voice.kind = vscode.CompletionItemKind.Keyword;
            const Completion_tempo = new vscode.CompletionItem('tempo');
            //Completion_tempo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_tempo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_transpose = new vscode.CompletionItem('transpose');
            //Completion_transpose.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_transpose.kind = vscode.CompletionItemKind.Keyword;
            const Completion_volume = new vscode.CompletionItem('volume');
            //Completion_volume.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_volume.kind = vscode.CompletionItemKind.Keyword;
            const Completion_envel = new vscode.CompletionItem('envel');
            //Completion_envel.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_envel.kind = vscode.CompletionItemKind.Keyword;
            const Completion_play = new vscode.CompletionItem('play');
            //Completion_play.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_play.kind = vscode.CompletionItemKind.Keyword;
            const Completion_pvoice = new vscode.CompletionItem('pvoice');
            //Completion_pvoice.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_pvoice.kind = vscode.CompletionItemKind.Keyword;
            const Completion_noise = new vscode.CompletionItem('noise');
            //Completion_noise.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_noise.kind = vscode.CompletionItemKind.Keyword;
            const Completion_boom = new vscode.CompletionItem('boom');
            //Completion_boom.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_boom.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bell = new vscode.CompletionItem('bell');
            //Completion_bell.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bell.kind = vscode.CompletionItemKind.Keyword;
            const Completion_shoot = new vscode.CompletionItem('shoot');
            //Completion_shoot.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_shoot.kind = vscode.CompletionItemKind.Keyword;
            const Completion_psg = new vscode.CompletionItem('psg');
            //Completion_psg.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_psg.kind = vscode.CompletionItemKind.Function;
            const Completion_tremolo = new vscode.CompletionItem('tremolo');
            //Completion_tremolo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_tremolo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_stoptremolo = new vscode.CompletionItem('stop tremolo');
            //Completion_stoptremolo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_stoptremolo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_stopnoise = new vscode.CompletionItem('stop noise');
            //Completion_stopnoise.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_stopnoise.kind = vscode.CompletionItemKind.Keyword;
            const Completion_noiseonly = new vscode.CompletionItem('noise only');
            //Completion_noiseonly.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_noiseonly.kind = vscode.CompletionItemKind.Keyword;
            const Completion_ntremolo = new vscode.CompletionItem('ntremolo');
            //Completion_ntremolo.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_ntremolo.kind = vscode.CompletionItemKind.Keyword;
            const Completion_icon$ = new vscode.CompletionItem('icon$');
            //Completion_icon$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_icon$.kind = vscode.CompletionItemKind.Keyword;
            const Completion_menu = new vscode.CompletionItem('menu');
            //Completion_menu.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_menu.kind = vscode.CompletionItemKind.Keyword;
            const Completion_onmenu = new vscode.CompletionItem('on menu');
            //Completion_onmenu.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_onmenu.kind = vscode.CompletionItemKind.Keyword;
            const Completion_mnbar = new vscode.CompletionItem('mnbar');
            //Completion_mnbar.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mnbar.kind = vscode.CompletionItemKind.Function;
            const Completion_mnselect = new vscode.CompletionItem('mnselect');
            //Completion_mnselect.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mnselect.kind = vscode.CompletionItemKind.Function;
            const Completion_menu$ = new vscode.CompletionItem('menu$');
            //Completion_menu$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_menu$.kind = vscode.CompletionItemKind.Keyword;
            const Completion_instr = new vscode.CompletionItem('instr');
            //Completion_instr.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_instr.kind = vscode.CompletionItemKind.Function;
            const Completion_left$ = new vscode.CompletionItem('left$');
            //Completion_left$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_left$.kind = vscode.CompletionItemKind.Function;
            const Completion_right$ = new vscode.CompletionItem('right$');
            //Completion_right$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_right$.kind = vscode.CompletionItemKind.Function;
            const Completion_mid$ = new vscode.CompletionItem('mid$');
            //Completion_mid$.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_mid$.kind = vscode.CompletionItemKind.Function;
            const Completion_sort = new vscode.CompletionItem('sort');
            //Completion_sort.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_sort.kind = vscode.CompletionItemKind.Keyword;
            const Completion_match = new vscode.CompletionItem('match');
            //Completion_match.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_match.kind = vscode.CompletionItemKind.Function;
            // Banks
            //
            const Completion_bcopy = new vscode.CompletionItem('bcopy');
            //Completion_bcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bcopy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bgrab = new vscode.CompletionItem('bgrab');
            //Completion_bgrab.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bgrab.kind = vscode.CompletionItemKind.Keyword;
            const Completion_start = new vscode.CompletionItem('start');
            //Completion_start.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_start.kind = vscode.CompletionItemKind.Function;
            const Completion_length = new vscode.CompletionItem('length');
            //Completion_length.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_length.kind = vscode.CompletionItemKind.Function;
            const Completion_load = new vscode.CompletionItem('load');
            //Completion_load.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_load.kind = vscode.CompletionItemKind.Keyword;
            const Completion_save = new vscode.CompletionItem('save');
            //Completion_save.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_save.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bload = new vscode.CompletionItem('bload');
            //Completion_bload.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bload.kind = vscode.CompletionItemKind.Keyword;
            const Completion_bsave = new vscode.CompletionItem('bsave');
            //Completion_bsave.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_bsave.kind = vscode.CompletionItemKind.Keyword;
            const Completion_copy = new vscode.CompletionItem('copy');
            //Completion_copy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_copy.kind = vscode.CompletionItemKind.Keyword;
            const Completion_fill = new vscode.CompletionItem('fill');
            //Completion_fill.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_fill.kind = vscode.CompletionItemKind.Keyword;
            const Completion_hunt = new vscode.CompletionItem('hunt');
            //Completion_hunt.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_hunt.kind = vscode.CompletionItemKind.Function;
            const Completion_charlen = new vscode.CompletionItem('charlen');
            //Completion_charlen.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_charlen.kind = vscode.CompletionItemKind.Function;
            const Completion_charcopy = new vscode.CompletionItem('charcopy');
            //Completion_charcopy.documentation = new vscode.MarkdownString('_x_=**INT**(_y#_)\n\n**INT** rounds down the value of _y#_ and converts it into a whole number.\n\n_**Examples:**_\n\nprint INT(1.25)   \n1   \nprint INT(-1.25)   \n- 2');
            Completion_charcopy.kind = vscode.CompletionItemKind.Keyword;
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
                Completion_polymark, Completion_arc, Completion_earc, Completion_plot, Completion_point, Completion_draw, Completion_rbox, Completion_polyline, Completion_pie, Completion_epie, Completion_circle, Completion_bar, Completion_rbar, Completion_polygon,
                Completion_paint, Completion_mode, Completion_flash, Completion_shift, Completion_ink, Completion_palette, Completion_colour, Completion_grwriting, Completion_setline, Completion_setmark, Completion_setpaint, Completion_setpattern, Completion_divx, Completion_divy,
                Completion_scancode, Completion_fkey, Completion_keyspeed, Completion_putkey, Completion_input, Completion_lineinput,
                Completion_inkey$, Completion_input$,
                Completion_xmouse, Completion_ymouse, Completion_mousekey, Completion_changemouse, Completion_limitmouse, Completion_hide, Completion_show,
                Completion_joy, Completion_jleft, Completion_jright, Completion_jup, Completion_jdown, Completion_fire,
                Completion_open, Completion_close, Completion_eof, Completion_lof, Completion_pof, Completion_field, Completion_put, Completion_get, Completion_port, Completion_dir, Completion_previous, Completion_drive, Completion_drvmap, Completion_dfree, Completion_mkdir,
                Completion_rmdir, Completion_kill, Completion_dir$, Completion_dirfirst$, Completion_dirnext$, Completion_fileselect$,
                Completion_llist, Completion_lprint, Completion_ldir, Completion_llistbank, Completion_hardcopy, Completion_windcopy,
                Completion_music, Completion_voice, Completion_tempo, Completion_transpose, Completion_volume, Completion_envel, Completion_play, Completion_noise, Completion_boom, Completion_bell, Completion_shoot, Completion_psg,
                Completion_tremolo, Completion_stoptremolo, Completion_stopnoise, Completion_noiseonly, Completion_ntremolo,
                Completion_icon$,
                Completion_menu, Completion_onmenu, Completion_mnbar, Completion_mnselect,
                Completion_menu$,
                Completion_instr, Completion_left$, Completion_right$, Completion_mid$,
                Completion_sort, Completion_match,
                Completion_bcopy, Completion_bgrab, Completion_start, Completion_length, Completion_load, Completion_save, Completion_bload, Completion_bsave, Completion_copy, Completion_fill, Completion_hunt,
                Completion_charlen, Completion_charcopy
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