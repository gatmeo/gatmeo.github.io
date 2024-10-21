// preprint.js
var version = '1.0.0';

function conference_loadTableData(csvFile, tableId) {
    $.ajax({
        url: csvFile,
        dataType: 'text',
        success: function(data) {
            conference_processData(data, tableId);
        }
    });
}

function conference_processData(allText, tableId) {
    var allLines = allText.split(/\r?\n/);
    var table = '<ul>';
    for (var i = 1; i < allLines.length-1; i++) {
        var data = allLines[i].split('|');
        var conference = data[0];
        var place = data[1];
        var date = data[2];
        var link = data[3];
        table += '<li>';
        table += '<a href=' + link + '>' + conference + '</a>. ';
        table += place + '. ' + date + '.';
        table += '</li>';
    }
    table += '</ul>';
    $('#' + tableId).html(table);
}
