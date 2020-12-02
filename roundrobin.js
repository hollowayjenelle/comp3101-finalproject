function addprocess(){
    var table = document.getElementById("process-table");

    var lastRow = table.rows[table.rows.length-1]; //gets the contents of the last row
    var firstCell = lastRow.cells[0].innerHTML; //gets the content of the first cell in the last row
    var lastRowNumber, arrival;
    if (table.rows.length <= 1){
        lastRowNumber = -1;
        arrival = -1;
    } else{
        //gets the number from the first cell of the last row
        lastRowNumber = parseInt(firstCell[1]);
        arrival = parseInt(firstCell[1]);
    }
    
    //inserts a new row and new cells
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    //add content to the new cells
    cell1.innerHTML = 'P'+ (lastRowNumber + 1);
    cell2.innerHTML = arrival + 1;
    cell3.innerHTML = '<input class="executime" type="text" value=""/>';

}

function deleteprocess(){
    //delete last row
    document.getElementById("process-table").deleteRow(-1);
}




function draw(){
    $('section').html('');
    var processtable = $('#process-table tr');
    var process = '';

    var quantum = $('#quantum').val();
    var executeTimes = [];

    //for each row, the execution time and the process # is extracted
    $.each(processtable, function(key, value){
        if(key == 0) return true;
        var executeTime = parseInt($(value.children[2]).children().first().val());
        executeTimes[key - 1] = {"executeTime": executeTime, "P": key - 1};
    });

    var complete = false; //variable to keep track of the execution time for the process has reached 0
    while (!complete){
        complete = true;
        /*for every value in executeTimes, if the current executeTime is greater than 
        0, the quantum value is displayed if the execute time is greater than quantum. If not, 
        the execute time is displayed.
        */
        $.each(executeTimes, function(key,value){
            if(value.executeTime > 0){
                process += '<th width: 50px;><button class="btn2">P' + value.P + '<br>Ex Time: ' + (value.executeTime > quantum ? quantum : value.executeTime) + 'ms</button></th>';
                value.executeTime -= quantum;
                complete = false;
            }
        });
    }
        //table created within the section element
        
        $('section').html('<table id="result"><tr>' + process + '</tr></table>');
        
        $("#result th").hide();
        $("#result th").each(function (index){
            $(this).delay(index*500).show(1000);
        })
}

