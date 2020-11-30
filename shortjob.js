function addprocess(){
    var table = document.getElementById("process-table");

    var lastRow = table.rows[table.rows.length-1];
    var firstCell = lastRow.cells[0].innerHTML;
    var lastRowNumber;
    if (table.rows.length <= 1){
        lastRowNumber = -1;
    } else{
        lastRowNumber = parseInt(firstCell[1]);
    }
    

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = 'P'+ (lastRowNumber + 1);
    cell2.innerHTML = '<input class="executime" type="text" value=""/>';

}

function deleteprocess(){
    document.getElementById("process-table").deleteRow(-1);
}

function animate(){
    $('fresh').prepend('<div id="animatediv" style="position: absolute; width: 100%; height:100px;"></div>');
    jQuery('#animateddiv').animate({height: 'toggle'});
}


function draw(){
    $('fresh').html('');
    var processtable = $('#process-table tr');
    var th = '';

    var executeTimes = [];
    $.each(processtable, function(key, value){
        if (key == 0) return true;
        var executeTime = parseInt($(value.children[1]).children().first().val());
        executeTimes[key - 1] = {"executeTime": executeTime, "P": key -1};
    });

    executeTimes.sort(function (a, b){
        if (a.executeTime == b.executeTime){
            return a.P - b.P
        }
        return a.executeTime - b.executeTime
    });

    $.each(executeTimes, function(key, value){
        th += '<h5>P' + value.P + ' : ' + value.executeTime + '</h5>';
    });
        $('fresh').html('<div>' + th + '</div>');
    
}