var months = ['<li>January</li>', '<li>February</li>', '<li>March</li>', '<li>April</li>', '<li>May</li>', '<li>June</li>', '<li>July</li>', '<li>August</li>', '<li>September</li>', '<li>October</li>',
'<li> November</li>', '<li>December</li > '];

$(document).ready(function () {
    var i = 0;
    setInterval(function () {
        if (i < months.length) {
            $('#months').append(months[i]);
            i++;
        }
 },1000);
  setTimeout(function(){
    $('li:odd').css('color','red');
  },12500);
})