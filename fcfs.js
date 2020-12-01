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

function animate() {
	$('fresh').prepend('<div id="curtain" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
  
  $('#curtain').width($('#resultTable').width());
  $('#curtain').css({left: $('#resultTable').position().left});
  
  var sum = 0;
  $('.exectime').each(function() {
      sum += Number($(this).val());
  });
  
  console.log($('#resultTable').width());
  var distance = $("#curtain").css("width");
  
  animationStep(sum, 0);
  jQuery('#curtain').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
}

function draw(){
    $('fresh').html('');
    var processtable = $('#process-table tr');
    var th = '';
    var td = '';

    $.each(processtable, function(key, value) {
      if (key == 0) return true;
      var executeTime = parseInt($(value.children[2]).children().first().val());
      th += '<th style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + (key - 1) + '</th>';
      td += '<td>' + executeTime + '</td>';
    });

    $('fresh').html('<table id="resultTable"><tr>' + th + '</tr></table>');
        $('fresh').prepend('<div id="animated-div" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
        
        $('#animated-div').width($('#resultTable').width());
        $('#animated-div').css({left: $('#resultTable').position().left});
        
        var sum = 0;
        $('.executime').each(function() {
            sum += Number($(this).val());
        });
        
        console.log($('#resultTable').width());
        var distance = $("#animated-div").css("width");
        
        animationStep(sum, 0);
        jQuery('#animated-div').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
}

function animationStep(steps, cur) {
    $('#timer').html(cur);
	if(cur < steps) {
		setTimeout(function(){ 
   	    animationStep(steps, cur + 1);
  	}, 500);
  }
  else {
  }
}

