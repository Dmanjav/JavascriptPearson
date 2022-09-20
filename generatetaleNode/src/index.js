import { createMultiplicatonTable } from './generateTable';

function onGeneratePress(){
    let args = process.argv.slice(2);

    let rowsInput = args[0];
    let columnsInput = args[1];

    let rows = Number(rowsInput);
    let columns = Number(columnsInput);

    if (!isNaN(rows) && !isNaN(columns))
    {
        let tableString = createMultiplicatonTable(rows, columns);
        console.log(tableString);
    } else {
        console.log("Error: Invalid Input")
    }
}