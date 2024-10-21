// schedule.js
var version = '1.0.0';

function loadTableData(csvFile, tableId) {
    $.ajax({
        url: csvFile,
        dataType: 'text',
        success: function(data) {
            processData(data, tableId);
        }
    });
}

function processData(allText, tableId) {
    var allLines = allText.split(/\r?\n/);
    var table = '<table class="twelve columns">' +
        '<tbody>' +
        '<tr>' +
        '<th style="width: 9%;">Date</th>' +
        '<th style="width: 17%;">Speaker</th>' +
        '<th style="width: 63%;">Topic</th>' +
        '<th style="width: 15%;">Ref</th>' +
        '</tr>';
    for (var i = 1; i < allLines.length-1; i++) {
        var data = allLines[i].split('|');
        table += '<tr valign="top">';
        var date = data[0];
        var speaker = data[1];
        var topic = data[2];
        var abstract = data[3];
        var references = data[4];

        table += '<tr valign="top">';
        table += '<td>' + date + '</td>';
        table += '<td>' + speaker + '</td>';
        table += '<td>' + topic + '<details><summary>Show/hide abstract</summary>' + abstract + '</details></td>';
        table += '<td> [' + references + '] </td>';
        table += '</tr>';
    }
    table += '</tbody></table>';
    $('#' + tableId).html(table);
}
