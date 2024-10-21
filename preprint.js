// preprint.js
var version = '1.0.0';

function preprint_loadTableData(csvFile, tableId) {
    $.ajax({
        url: csvFile,
        dataType: 'text',
        success: function(data) {
            preprint_processData(data, tableId);
        }
    });
}

        <ul>
          <li>[Arn89] Arnold VI. <b>Mathematical Methods of Classical Mechanics</b>. New York: Springer-Verlag; 1989.</li>
          <li>[Jef22] Jeffs M. <b>Classical Mechanics and Symplectic Geometry</b>. Version: May 15, 2022.</li>
        </ul>
function preprint_processData(allText, tableId) {
    var allLines = allText.split(/\r?\n/);
    var table = '<ul>';
    for (var i = 1; i < allLines.length-1; i++) {
        var data = allLines[i].split('|');
        table += '<tr valign="top">';
        var topic = data[0];
        var author = data[1];
        var journal = data[2];
        var link = data[3];
        if (author != '') {
            author = ' With ' + author+ '; ';
        }
        table += '<li>';
        table += '<b>' + topic + '</b>';
        table += '<p>' + author + journal + '. ' + '<a href=' + link + '>pdf</a>.' + '</p>';
        table += '</li>';
    }
    table += '</ul>';
    $('#' + tableId).html(table);
}
