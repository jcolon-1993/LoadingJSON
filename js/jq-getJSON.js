// Element to hold exchange rate data.
$("#exchangerates").append("<div id='rates'></div><div id='reload'></div>");

function loadRates()
{
  $.getJSON("data/rates.json")
  // Server returns data
  .done( function(data)
  {
    // Create date object
    var d = new Date();

    // Get Hours
    var hrs = d.getHours();

    // Get mins
    var mins = d.getMinutes();

    // Start Message
    var msg = "<h2>Exchange Rates</h2>";

    // Add each rate
    $.each(data, function(key, val)
    {
    // Start Message
    msg += "<div class='" + key + "'>" + key + ": " + val + "</div>";
    });
    // Show update time
    msg += "<br>Last update: " + hrs + ":" + mins + "<br>";

    // Add rates to page
    $("#rates").html(msg);
    // There is an error
  }).fail(function()
  {
    // Show error message
    ("aside").append("Sorry, we cannot load rates");

    // Always run
  }).always(function ()
  {
    // Add refresh Link
    var relaod = "<a id='refresh' href='#'>";
    reload += "<img src='img/refresh.png' alt='refresh' /></a>";

    $("#reload").html(reload);

    // Add click handler
    $("#refresh").on("click", function(e)
    {
      // Stop link
      e.preventDefault();

      // Call loadRates;
      loadRates();
    });

  });
}
// call loadRates
loadRates();
