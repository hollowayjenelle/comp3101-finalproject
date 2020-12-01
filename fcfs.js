function addprocess(){
    var table = document.getElementById("process-table");

    var lastRow = table.rows[table.rows.length-1];
    var firstCell = lastRow.cells[0].innerHTML;
    var lastRowNumber, arrival;
    if (table.rows.length <= 1){
        lastRowNumber = -1;
	arrival = -1;
    } else{
        lastRowNumber = parseInt(firstCell[1]);
	arrival = parseInt(firstCell[1]);
    }
    

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = 'P'+ (lastRowNumber + 1);
    cell2.innerHTML = arrival + 1;
    cell3.innerHTML = '<input class="executime" type="text" value=""/>';

}

function deleteprocess(){
    document.getElementById("process-table").deleteRow(-1);
}

function draw(){
    $('section').html('');
    var processtable = $('#process-table tr');
    var th = '';

    $.each(processtable, function(key, value) {
      if (key == 0) return true;
      var executeTime = parseInt($(value.children[2]).children().first().val());
      th += '<th><button class="btn2">P' + (key - 1) + '<br>Ex Time: ' + executeTime + 'ms</button></th>';
    });

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


