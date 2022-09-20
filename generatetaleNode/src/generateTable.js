export function createMultiplicatonTable(rows, columns){
    let tableString= '';

        for (let rowNumber of Array(rows).keys()){
                for (let columnNumber of Array(columns).keys()){
                    tableString = tableString + ` ${(rowNumber + 1) * (columnNumber + 1)} `;
                    //el +1 es para quitar las filas de 0
                }
                tableString = tableString + '\n'
        }
        return tableString;
}

