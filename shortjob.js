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
    var th = '';

    var executeTimes = [];

    //for each row, the execution time and the process # is extracted
    $.each(processtable, function(key, value){
        if (key == 0) return true;
        var executeTime = parseInt($(value.children[1]).children().first().val());
        executeTimes[key - 1] = {"executeTime": executeTime, "P": key -1};
    });

    //compare and sort the execution times
    executeTimes.sort(function (a, b){
        if (a.executeTime == b.executeTime){
            return a.P - b.P
        }
        return a.executeTime - b.executeTime
    });

    //for each value in the sorted execution time array, a table header with a button is created with the process and the execution time
    $.each(executeTimes, function(key, value){
        th += '<th width: 50px;><button class="btn2">P' + value.P + '<br>Ex Time: ' + value.executeTime + 'ms</button></th>';
    });
        //table created within the section element
        $('section').html('<table id="resultTable"><tr>' + th + '</tr></table>');
        //div created that surrounds the section element 
        $('section').prepend('<div id="animated-div" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
        
        //the div width equals the resultTable
        $('#animated-div').width($('#resultTable').width());
        //the div positioned at the same horizontal position as the resultTable
        $('#animated-div').css({left: $('#resultTable').position().left});
        
        var sum = 0;
        $('.executime').each(function() {
            sum += Number($(this).val());
        });
        
        var distance = $("#animated-div").css("width");
        
        //swipe animation
        jQuery('#animated-div').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
}

