$(document).ready(function() {
  $("form#groceriesForm").submit(function(event) {
    var groceries = ["list0", "list1", "list2", "list3", "list4", "list5", "list6", "list7", "list8", "list9"];
    var things = [];

    groceries.forEach(function(grocery) {
      var input = $("input#" + grocery).val();
      if (input) {
        things.push(input);
      }
    });

      things.sort();

      var purchases = [];

      var purchases = things.map(function(thing) {
        thing = thing.toUpperCase();
        return thing
      });

      var finals = [];

      var finals = purchases.map(function(final) {
        final = "<li>" + final + "</li>";
        return final
      });

    $("#showList").append(finals);
    $("#groceriesForm").hide();
    event.preventDefault();
  });
});
