function addprocess(){
  var table = document.getElementById("algoTable");

  var lastRow = table.rows[table.rows.length-1]; //gets the contents of the last row
  var firstCell = lastRow.cells[0].innerHTML; //gets the content of the first cell in the last row
  var lastRowNumber, arrival;
  if (table.rows.length <= 1){
      lastRowNumber = -1;
      arrival = -1;
  } else{
      lastRowNumber = parseInt(firstCell[1]); //gets the number from the first cell of the last row
      arrival = parseInt(firstCell[1]);
  }
  
  //inserts a new row and new cells
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  
  //add content to the new cells
  cell1.innerHTML = 'P'+ (lastRowNumber + 1);
  cell2.innerHTML = arrival + 1;
  cell3.innerHTML = '<input class="executime" type="text" value=""/>';
  cell4.innerHTML = '<input type="text" value=""/>'

}

function deleteprocess(){
  //delete last row
  document.getElementById("algoTable").deleteRow(-1);
}
  

function draw() {
  $('section').html('');
  var processtable = $('#algoTable tr');
  var process = '';
  var executeTimes = [];

  $.each(processtable, function (key, value) {
      if (key == 0) return true;
      var executeTime = parseInt($(value.children[2]).children().first().val());
      var priority = parseInt($(value.children[3]).children().first().val());
      executeTimes[key - 1] = { "executeTime": executeTime, "P": key - 1, "priority": priority };
  });

  executeTimes.sort(function (a, b) {
      if (a.priority == b.priority)
        return a.P - b.P;
      return b.priority - a.priority
  });

  $.each(executeTimes, function (key, value) {
      process += '<th width: 50px;><button class="btn2">P' + value.P + '<br>Ex Time: ' + value.executeTime + 'ms</button></th>';      
    });

    $('section').html('<table id="resultTable"><tr>' + process + '</tr></table>');
        
        $("#resultTable th").hide();
        $("#resultTable th").each(function (index){
            $(this).delay(index*500).show(1000);
        })


}

