const domenica = [
    [
        [1,4],
        [6,5],
        [7,6]
    ],
    [
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
    [
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
    [
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
];
let last_dom =[
        [1,4],
        [6,5],
        [7,6],
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
        [3,2]
];
let sum = [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0]
];

function mainS (group, tot) {
  console.log("numero | cantidad decenas | cantidad unidades");
    for(let i = 0; i < group.length; i++) {
        for (let j = 0; j < group[i].length; j++) {
        (group[i][j] == 0) ? tot[0][j]++
            : (group[i][j] == 1) ? tot[1][j]++
            : (group[i][j] == 2) ? tot[2][j]++
            : (group[i][j] == 3) ? tot[3][j]++
            : (group[i][j] == 4) ? tot[4][j]++
            : (group[i][j] == 5) ? tot[5][j]++
            : (group[i][j] == 6) ? tot[6][j]++
            : (group[i][j] == 7) ? tot[7][j]++
            : (group[i][j] == 8) ? tot[8][j]++
            : tot[9][j]++;
        }
    }
}
mainS(last_dom,sum);
console.log("\nGrupo principal");
console.table(sum);
let ocacions = [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0]
]
let test_dec = [];
let test_und = [];
function cont (days, times, testd, testu) {
  console.log("\n\nOTROS DATOS")
    for(let i = 1; i < days.length; i++) {
        for(let j = 0; j < days[i].length ; j++) {
            for(let k = 0; k < days[i][j].length; k++) {
                (days[i][j][k] == 0) ? times[0][k]++
                : (days[i][j][k] == 1) ? times[1][k]++
                : (days[i][j][k] == 2) ? times[2][k]++
                : (days[i][j][k] == 3) ? times[3][k]++
                : (days[i][j][k] == 4) ? times[4][k]++
                : (days[i][j][k] == 5) ? times[5][k]++
                : (days[i][j][k] == 6) ? times[6][k]++
                : (days[i][j][k] == 7) ? times[7][k]++
                : (days[i][j][k] == 8) ? times[8][k]++
                : times[9][k]++;
            }
        }
        console.log("grupo", i);
        console.log(times);
        let tsum = 0;
        for(let l = 0; l < times.length; l++) {
            for(var m = 0; m < times[l].length; m++) {
                if(times[l][m] == 0 || times[l][m] == 1){
                  for(let n = 3; days[i - 1].length - n < days[i - 1].length; n--) {
                    if(days[i - 1][days[i - 1].length - n][m] == l) {
                       if( m == 0) {
                        tsum++;
                        testd.push([l, tsum]);
                       } else if(m == 1) {
                        tsum++;
                        testu.push([l, tsum])
                       }
                    }
                  }
                 tsum = 0;
                }
                times[l][m] = 0;
            }
        }
        console.log("estas son la cantidades de veces que han aparecido los numeros menos jugados del grupo "+ i +" en los 3 ultimas filas del grupo anterior");
        console.log("Columnas de las decenas\n");
        console.table(testd);
        console.log("Columnas de las unidades\n");
        console.table(testu);
        let borrar = (arr) => {
            for(let i = 0; i < arr.length; i++) {
                arr.splice(i);
            }
        };
        borrar(testd);
        borrar(testu);
    }
}

cont(domenica, ocacions, test_dec, test_und);