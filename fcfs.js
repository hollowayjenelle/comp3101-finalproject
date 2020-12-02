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
    var cell3 = row.insertCell(2);
    
    //add content to the new cells
    cell1.innerHTML = 'P'+ (lastRowNumber + 1);
    cell2.innerHTML = lastRowNumber + 1;
    cell3.innerHTML = '<input class="executime" type="text" value=""/>';

}

function deleteprocess(){
    document.getElementById("process-table").deleteRow(-1);
}

function draw(){
    $('section').html('');
    var processtable = $('#process-table tr');
    var process = '';

    $.each(processtable, function(key, value) {
      if (key == 0) return true;
      var executeTime = parseInt($(value.children[2]).children().first().val());
      process += '<th><button class="btn2">P' + (key - 1) + '<br>Ex Time: ' + executeTime + 'ms</button></th>';
    });

    $('section').html('<table id="result"><tr>' + process + '</tr></table>');
        
        $("#result th").hide();
        $("#result th").each(function (index){
            $(this).delay(index*500).show(1000);
        })
}


