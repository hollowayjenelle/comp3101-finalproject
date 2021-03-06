function addprocess(){
    var table = document.getElementById("process-table");

    var lastRow = table.rows[table.rows.length-1]; //gets the contents of the last row
    var firstCell = lastRow.cells[0].innerHTML; //gets the content of the first cell in the last row
    var lastRowNumber;
    if (table.rows.length <= 1){
        lastRowNumber = -1;
    } else{
        lastRowNumber = parseInt(firstCell[1]); //gets the number from the first cell of the last row
    }
    
    //inserts a new row and new cells
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    //add content to the new cells
    cell1.innerHTML = 'P'+ (lastRowNumber + 1);
    cell2.innerHTML = '<input class="executime" type="text" value=""/>';

}

function deleteprocess(){
    //delete last row
    document.getElementById("process-table").deleteRow(-1);
}




function draw(){
    $('section').html('');
    var processtable = $('#process-table tr');
    var process = '';

    var burstArr = [];

     //for each row, the execution time and the process # is extracted
    $.each(processtable, function(key, value){
        if (key == 0) return true;
        var burst = parseInt($(value.children[1]).children().first().val());
        burstArr[key - 1] = {"burstTime": burst, "P": key -1};
    });

    //compare and sort the execution times
    burstArr.sort(function (a, b){
        if (a.burstTime == b.burstTime){
            return a.P - b.P
        }
        return a.burstTime - b.burstTime
    });

    //for each value in the sorted execution time array, a table header with a button is created with the process and the execution time
    $.each(burstArr, function(key, value){
        process += '<th width: 50px;><button class="btn2">P' + value.P + '<br>Ex Time: ' + value.burstTime + 'ms</button></th>';
    });
        //table created within the section element
        $('section').html('<table id="result"><tr>' + process + '</tr></table>');
        
        $("#result th").hide();
        $("#result th").each(function (index){
            $(this).delay(index*500).show(1000);
        })
}

