function createMultiplicatonTable(rows, columns){
    let html = '<table>';

        for (let rowNumber of Array(rows).keys()){
            html = html +'<tr>';

                for (let columnNumber of Array(columns).keys()){
                    html = html + `<td>${(rowNumber + 1) * (columnNumber + 1)}</td>`;
                    //el +1 es para quitar las filas de 0
                }

            html = html +'</tr>';
        }

        html = html + '</table>'

        return html;
}

function onGeneratePress(){
    let rowsInput = document.getElementById('rows-input').value;
    let columnsInput = document.getElementById('columns-input').value;

    let rows = Number(rowsInput);
    let columns = Number(columnsInput);

    if (!isNaN(rows) && !isNaN(columns))
    {
        let tableHTML = createMultiplicatonTable(rows, columns);

        document.write(tableHTML);
    } else {
        alert("Error: Invalid Input")
    }
}