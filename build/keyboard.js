/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-11-17 23:46:12
 * @version $Id$
 */

var KEY = {
    ansi: {
        mac : [
            {
                val: ['Ctrl', 'Option', 'Command', 'Spacebar', 'Command', 'Option', 'Ctrl', 'Left', 'Down', 'Right', '0', '.'],
                keyCode: ['17_1', '18_1', '91_1', '32_0', '93_0', '18_2', '17_2', '37_0', '40_0', '39_0', '48_3', '110_3'],
                size: ['1_5', '1_25', '1_5', '6_5', '1_5', '1_25', '1_5', '1', '1', '1', '2', '1']
            },
            {
                val: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Up', '1', '2', '3', 'Enter'],
                keyCode: ['16_1', '90_0', '88_0', '67_0', '86_0', '66_0', '78_0', '77_0', '188_0', '190_0', '191_0', '16_2', '38_0', '49_3', '50_3', '51_3', '13_3'],
                size: ['2_25', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2_75', '1', '1', '1', '1', 'enter']
            },
            {
                val: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', '4', '5', '6'],
                keyCode: ['20_0', '65_0', '83_0', '68_0', '70_0', '71_0', '72_0', '74_0', '75_0', '76_0', '186_0', '222_0', '13_0', '52_3', '53_3', '54_3'],
                size: ['1_75', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2_25', '1', '1', '1', '1', '1', '1', '1']
            },
            {
                val: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\/', 'Delete', 'End', 'Page Down', '7', '8', '9', '+'],
                keyCode: ['9_0', '81_0', '87_0', '69_0', '82_0', '84_0', '89_0', '85_0', '73_0', '79_0', '80_0', '219_0', '221_0', '220_0', '46_0', '35_0', '34_0', '55_3', '56_3', '57_3', '107_3'],
                size: ['1_5', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1_5', '1', '1', '1', '1', '1', '1', 'plus']
            },
            {
                val: [ '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back Space', 'Insert', 'Home', 'Page Up', 'Num Lock', '/', '*', '-'],
                keyCode: ['192_0', '49_0', '50_0', '51_0', '52_0', '53_0', '54_0', '55_0', '56_0', '57_0', '48_0', '189_0', '187_0', '8_0', '45_0', '36_0', '33_0', '12_0', '111_3', '106_3', '109_3'],
                size: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1']
            },
            {
                val: ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Print Screen', 'Scroll Lock', 'Pause Break'],
                keyCode: ['27_0', '112_0', '113_0', '114_0', '115_0', '116_0', '117_0', '118_0', '119_0', '120_0', '121_0', '122_0', '123_0', '124_0', '145_0', '19_0'],
                size: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
            }
        ],
        other: [
            {
                val: ['Ctrl', 'Win', 'Alt', 'Spacebar', 'Alt', 'Win', 'Menu', 'Ctrl', 'Left', 'Down', 'Right', '0', '.'],
                keyCode: ['17_1', '91_1', '18_1', '32_0', '18_2', '92_2', '93_0', '17_2', '37_0', '40_0', '39_0', '96_0', '110_0'],
                size: ['1_25', '1_25', '1_25', '6_25', '1_25', '1_25', '1_25', '1_25', '1', '1', '1', '2', '1']
            },
            {
                val: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Up', '1', '2', '3', 'Enter'],
                keyCode: ['16_1', '90_0', '88_0', '67_0', '86_0', '66_0', '78_0', '77_0', '188_0', '190_0', '191_0', '16_2', '38_0', '97_0', '98_0', '99_0', '13_1'],
                size: ['2_25', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2_75', '1', '1', '1', '1', 'enter']
            },
            {
                val: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', '4', '5', '6'],
                keyCode: ['20_0', '65_0', '83_0', '68_0', '70_0', '71_0', '72_0', '74_0', '75_0', '76_0', '186_0', '222_0', '13_0', '100_0', '101_0', '102_0'],
                size: ['1_75', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2_25', '1', '1', '1', '1', '1', '1', '1']
            },
            {
                val: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\/', 'Delete', 'End', 'Page Down', '7', '8', '9', '+'],
                keyCode: ['9_0', '81_0', '87_0', '69_0', '82_0', '84_0', '89_0', '85_0', '73_0', '79_0', '80_0', '219_0', '221_0', '220_0', '46_0', '35_0', '34_0', '103_0', '104_0', '105_0', '107_0'],
                size: ['1_5', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1_5', '1', '1', '1', '1', '1', '1', 'plus']
            },
            {
                val: [ '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back Space', 'Insert', 'Home', 'Page Up', 'Num Lock', '/', '*', '-'],
                keyCode: ['192_0', '49_0', '50_0', '51_0', '52_0', '53_0', '54_0', '55_0', '56_0', '57_0', '48_0', '189_0', '187_0', '8_0', '45_0', '36_0', '33_0', '144_0', '111_0', '106_0', '109_0'],
                size: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1']
            },
            {
                val: ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Print Screen', 'Scroll Lock', 'Pause Break'],
                keyCode: ['27_0', '112_0', '113_0', '114_0', '115_0', '116_0', '117_0', '118_0', '119_0', '120_0', '121_0', '122_0', '123_0', '44_0', '145_0', '19_0'],
                size: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
            }
        ]
    },
    iso: [],
    jis: []
};

var os;
if (ua('mac')) {
    os = 'mac';
} else {
    os = 'other';
}

function initANSI () {
    var ansi = KEY.ansi[os],
        keyboard = document.createElement('div'),
        rowCount = [
            KEY.ansi[os][0]['val'].length,
            KEY.ansi[os][1]['val'].length,
            KEY.ansi[os][2]['val'].length,
            KEY.ansi[os][3]['val'].length,
            KEY.ansi[os][4]['val'].length,
            KEY.ansi[os][5]['val'].length
        ];
    keyboard.setAttribute('class', 'keyboard clearfix');
    for (var i = 6 - 1; i >= 0; i--) {
        var row = document.createElement('div');
        row.setAttribute('class', 'clearfix row-' + i);
        for (var j = 0; j < rowCount[i]; j++) {
            var keycaps = document.createElement('div');
            keycaps.setAttribute('class', 'keycaps keycap_' + ansi[i].size[j] + ' code_' + ansi[i].keyCode[j] + '');
            keycaps.innerHTML = ansi[i].val[j];
            row.appendChild(keycaps);
        }
        keyboard.appendChild(row);
    }
    document.getElementById('fixed-tab-1').getElementsByTagName('div')[0].appendChild(keyboard);

    var blankDom = [
        document.querySelectorAll('.row-1 div')[11],
        document.querySelectorAll('.row-1 div')[12],
        document.querySelectorAll('.row-2 div')[12],
        document.querySelectorAll('.row-2 div')[12],
        document.querySelectorAll('.row-2 div')[12],
        document.querySelectorAll('.row-5 div')[0],
        document.querySelectorAll('.row-5 div')[4],
        document.querySelectorAll('.row-5 div')[8]
    ];
    for (var k = 0; k < 8; k++) {
        var blank = document.createElement('div');
        if (k < 5) {
            blank.setAttribute('class', 'blank_1');
        } else {
            blank.setAttribute('class', 'blank_0_66');
        }
        blankDom[k].parentNode.insertBefore(blank, blankDom[k].nextSibling);
    }
}

initANSI();

document.onkeydown = function (e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.keyIdentifier);
    console.log(e.keyCode);
    console.log(e.location);
    console.log($('.code_'+ e.keyCode + '_' + e.location +''));
    addClass(document.querySelectorAll('.code_'+ e.keyCode + '_' + e.location +'')[0], 'highlight');
};
document.onkeyup = function (e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.keyIdentifier);
    // console.log(e.keyCode);
    // console.log(e.location);
    removeClass(document.querySelectorAll('.code_'+ e.keyCode + '_' + e.location +'')[0], 'highlight');
};
