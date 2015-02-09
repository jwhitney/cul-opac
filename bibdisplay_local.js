/**
 * JQuery-powered customizations of bib record display page
 */
$(document).ready(function() {
  // Add title & call number as query parameters to 'Report Missing Item' form
  $("a#form-missing-item").attr('href', function(i, attrValue) {
    var params = {
        title: $('div.bibDisplayContentMain > table.bibDetail td').filter(function() { return $(this).text() === "Title"; }).next().text().trim(),
        call_number: $('table.bibItems tr:nth-child(2) td:nth-child(2)').text().trim()
    };
    return attrValue + '?' + jQuery.param(params);
  });
});


