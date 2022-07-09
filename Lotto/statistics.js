const domenica = {
    testGroup: [
        [1,4],
        [6,5],
        [7,6]
    ],
    goup1: [
        [1,5],
        [8,0],
        [1,3],
        [0,8],
        [3,7],
        [7,6],
        [2,0], 
        [1,6],
        [5,7],
        [0,3],
        [4,7],
        [7,4],
        [1,2],
        [9,4],
        [4,9],
        [4,6],
        [3,2],
        [6,3],
        [6,9],
        [8,6]
    ],
    group2: [
        [8,2],
        [3,4],
        [1,9],
        [1,3],
        [8,9],
        [1,8],
        [0,8],
        [0,4],
        [2,0],
        [5,8],
        [9,9],
        [3,9],
        [6,2],
        [6,7],
        [4,7],
        [5,2],
        [6,7],
        [7,2],
        [4,3],
        [1,6]
    ],
    group3: [
        [6,8],
        [1,9],
        [8,9],
        [5,5],
        [8,2],
        [3,4],
        [7,5],
        [7,4],
        [3,9],
        [4,5],
        [7,4],
        [5,9],
        [1,4],
        [2,1],
        [6,4],
        [5,5],
        [1,8],
        [1,3],
        [1,6],
        [8,6]    
    ]
}

const mercoledi = {
    testGroup: [
        [2,9],
        [2,7],
        [0,0]
    ],
    group1: [
        [8,1],
        [2,2],
        [1,4],
        [0,1],
        [4,0],
        [4,0],
        [3,8],
        [6,6],
        [5,0],
        [0,1],
        [1,0],
        [5,1],
        [3,9],
        [0,2],
        [6,7],
        [7,1],
        [9,0],
        [1,6],
        [7,6],
        [1,7]
    ],
    group2: [
        [3,4],
        [6,2],
        [1,6],
        [2,6],
        [4,3],
        [5,4],
        [3,0],
        [8,2],
        [6,0],
        [9,3],
        [6,3],
        [3,2],
        [0,9],
        [9,6],
        [6,5],
        [9,9],
        [7,8],
        [9,0],
        [4,2],
        [0,6]
    ],
    group3: [
        [8,7],
        [5,8],
        [8,7],
        [1,4],
        [7,7],
        [7,1],
        [3,8],
        [1,3],
        [5,4],
        [9,7],
        [0,5],
        [4,2],
        [5,2],
        [2,5],
        [7,1],
        [6,2],
        [5,5],
        [5,9],
        [9,1],
        [1,1]
    ]
}
const ocacions = {
    Dom: {
        D0: [0,0],
        D1: [0,0],
        D2: [0,0],
        D3: [0,0],
        D4: [0,0],
        D5: [0,0],
        D6: [0,0],
        D7: [0,0],
        D8: [0,0],
        D9: [0,0]
    },
    Mie: {
        D0: [0,0],
        D1: [0,0],
        D2: [0,0],
        D3: [0,0],
        D4: [0,0],
        D5: [0,0],
        D6: [0,0],
        D7: [0,0],
        D8: [0,0],
        D9: [0,0]
    }
}
for (let i = 0; i < domenica.goup1.length; i += 1) {
    console.log(domenica.goup1[i][0],domenica.goup1[i][1]);
    switch (domenica.goup1[i][0]) {
        case 0:
            ocacions.Dom.D0[0] = ocacions.Dom.D0[0] + 1;
            break;
        case 1:
            ocacions.Dom.D1[0] = ocacions.Dom.D1[0] + 1;
            break;
        case 2:
            ocacions.Dom.D2[0] = ocacions.Dom.D2[0] + 1;
            break;
        case 3:
            ocacions.Dom.D3[0] = ocacions.Dom.D3[0] + 1;
            break;
        case 4:
            ocacions.Dom.D4[0] = ocacions.Dom.D4[0] + 1;
            break;
        case 5:
            ocacions.Dom.D5[0] = ocacions.Dom.D5[0] + 1;
            break;
        case 6:
            ocacions.Dom.D6[0] = ocacions.Dom.D6[0] + 1;
            break;
        case 7:
            ocacions.Dom.D7[0] = ocacions.Dom.D7[0] + 1;
            break;
        case 8:
            ocacions.Dom.D8[0] = ocacions.Dom.D8[0] + 1;
            break;
        case 9:
            ocacions.Dom.D9[0] = ocacions.Dom.D9[0] + 1;
            break;    

    }
    switch (domenica.goup1[i][1]) {
        case 0:
            ocacions.Dom.D0[1] = ocacions.Dom.D0[1] + 1;
            break;
        case 1:
            ocacions.Dom.D1[1] = ocacions.Dom.D1[1] + 1;
            break;
        case 2:
            ocacions.Dom.D2[1] = ocacions.Dom.D2[1] + 1;
            break;
        case 3:
            ocacions.Dom.D3[1] = ocacions.Dom.D3[1] + 1;
            break;
        case 4:
            ocacions.Dom.D4[1] = ocacions.Dom.D4[1] + 1;
            break;
        case 5:
            ocacions.Dom.D5[1] = ocacions.Dom.D5[1] + 1;
            break;
        case 6:
            ocacions.Dom.D6[1] = ocacions.Dom.D6[1] + 1;
            break;
        case 7:
            ocacions.Dom.D7[1] = ocacions.Dom.D7[1] + 1;
            break;
        case 8:
            ocacions.Dom.D8[1] = ocacions.Dom.D8[1] + 1;
            break;
        case 9:
            ocacions.Dom.D9[1] = ocacions.Dom.D9[1] + 1;
            break;
    }    

}

console.log(ocacions.Dom);
