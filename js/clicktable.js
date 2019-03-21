window.onload =function() {
    var table = document.getElementById("tablep");
    if (table != null) {
        for (var i = 1; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].onclick = function () {
               // tableText(this);
                 window.location.href = "map.html";
            };
        }
    }
 
    var table2 = document.getElementById("tableall");
    if (table2 != null) {
      //alert(table2.rows[2].cells[3].innerHTML);
        for (var i = 1; i < table2.rows.length; i++) {
            for (var j = 0; j < table2.rows[i].cells.length; j++)
            table2.rows[i].onclick = function () {
                 var partid = this.childNodes[1].innerHTML;
                 var process = this.childNodes[3].innerHTML;
                 var location = this.childNodes[5].innerHTML;
                 var datemy = this.childNodes[13].innerHTML;
                 var mydate = datemy.substring(6,25);
                 //alert(partid + process + location);
                 window.location.href = "mapall.html?partid="+partid+"&location="+location.trim()+"&process_name="+process.trim()+"&date="+mydate.trim();
            };
        }
    }
}
