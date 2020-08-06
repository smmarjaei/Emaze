function createS7D() {
    let S7D = document.createElement('div');
    S7D.classList.add('S7D');
    for (let name of 'abcdefg') {
        let segment = document.createElement('div');
        segment.classList.add('S7D-segment');
        segment.classList.add(`-seg-${name}`);
        S7D.appendChild(segment);
    }
    S7D.dataset.code = 'abcdefg';
    return S7D;
}

function lightS7D(S7D, code) {
    S7D.dataset.code = code;
    return S7D;
}

const S7DNumCode = {
    '0': 'abcdef',
    '0_2': 'cdeg',
    '1': 'bc',
    '1_2': 'ef',
    '2': 'abdeg',
    '3': 'abcdg',
    '4': 'bcfg',
    '5': 'acdfg',
    '6': 'acdefg',
    '6_2': 'cdefg',
    '7': 'abc',
    '7_2': 'abcf',
    '8': 'abcdefg',
    '9': 'abcdfg',
    '9_2': 'abcfg',
    'a': 'abcefg',
    'b': 'cdefg',
    'c': 'adef',
    'c_2': 'deg',
    'd': 'bcdeg',
    'e': 'adefg',
    'f': 'aefg'
};

function lightS7DNum(S7D, num, variant = false) {
    let code = S7DNumCode[`${num}`];
    if (variant && S7DNumCode[`${num}_2`])
        code = S7DNumCode[`${num}_2`];
    lightS7D(S7D, code);
}

function createS7DNumGroup(len, word, variant) {
    let S7D_Num_Group = document.createElement('div');
    S7D_Num_Group.classList.add('S7D-Num-Group');
    S7D_Num_Group.dataset.value = '8'.repeat(len);
    if (variant)
        S7D_Num_Group.dataset.var = variant;

    for (let i = 0; i < len; i += 1)
        S7D_Num_Group.appendChild(createS7D());

    let S7D_Word = document.createElement('span');
    S7D_Word.classList.add('S7D-word');
    S7D_Word.innerHTML = word || '';
    S7D_Num_Group.appendChild(S7D_Word);
    return S7D_Num_Group;
}

function lightS7DNumGroup(S7D_Num_Group, value) {
    let len = S7D_Num_Group.children.length - 1;
    value = value.slice(-len);
    if (value === S7D_Num_Group.dataset.value)
        return S7D_Num_Group;

    let variantList = S7D_Num_Group.dataset.var || '';
    S7D_Num_Group.dataset.value = value;
    for (let i = 0; i < len; i += 1) {
        let S7D = S7D_Num_Group.children[i];
        let digit = value[i];
        let variant = false;
        if (variantList.indexOf(digit) > -1)
            variant = true
        lightS7DNum(S7D, digit, variant);
    }
    return S7D_Num_Group;
}