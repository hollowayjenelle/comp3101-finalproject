

/*function start(x) {
    var duration = x*1000; // it should finish in 5 seconds !
    $("#box").stop().css("width", 0).animate({
      width: 100
    }, {
      duration: duration,
      progress: function(promise, progress, ms) {
        $(this).text(Math.round(progress * 100) + '%');
      }
    });
  }*/

function addProcess() {
    // First check if a <tbody> tag exists, add one if not
    var last = $('#algoTable tr:last');
    var previous = parseInt(last.children()[1].innerText);

    if ($("#algoTable tbody").length == 0) {
        $("#algoTable").append("<tbody></tbody>");}

    // Append data to the table
    $("#algoTable tbody").append(
    "<tr>"+
    "<td>" + "P"
    + (previous + 1) + "</td>" +
    "<td>"+(previous + 1) + "</td>" +
    "<td>" + '<input class="burst" id="burst" type="text"/>' + "</td>" +
    "<td>" + '<input class="priority" id="priority" type="text"/>' + "</td>" +
    "</tr>");

}

var index = 1;
function deleteProcess() {
    var a= document.getElementById("algoTable").deleteRow(-1);
  }
  


function animate() {
  $('section').prepend('<div id="slide" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
    
  $('#slide').width($('#resultTable').width());    
  $('#slide').css({left: $('#resultTable').position().left});
    
  var sum = 0;
  $('.exectime').each(function() {
      sum += Number($(this).val());
    });
    
  console.log($('#resultTable').width());
  var distance = $("#slide").css("width");
    
  animationStep(sum, 0);
  jQuery('#slide').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
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
function draw() {
  $('section').html('');
  var process = '';
  var b_time = '';

  var algorithm = $('input[name=algorithm]:checked', '#algorithm').val();
  
    if (algorithm == "priority") {
    var executeTimes = [];

    $.each($('#algoTable tr'), function (key, value) {
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
    

        process += '<th style="height: 40px; width: ' + value.executeTime * 20 + 'px;">P' + value.P + '</th>';  ;
        b_time+= '<td>' + value.executeTime + '</td>';

        $('section').html('<table id="resultTable" style="width: 70%"><tr>'
        + process+ '</tr><tr>' + b_time + '</tr></table>'
       );
        
    });

   
}
animate();
}

