$(document).ready(function() {
  $("form#groceriesForm").submit(function(event) {
    var groceries = ["list0", "list1", "list2", "list3", "list4", "list5", "list6", "list7", "list8", "list9"];
    var luke = [];

    groceries.forEach(function(grocery) {
      var input = $("input#" + grocery).val();
      if (input) {
        luke.push(input);
      }
    });

    //else: there is input, push into array
      //newarray = array.sort()
      //newarray.toUpperCase()
      //<ul> for the sorted list items of newarray.toUpperCase()


    // var inputs = [input#list1, input#list2, input#list3, input#list4, input#list5, input#list6, input#list7, input#list8, input#list9,input#list10]
    //
    // alert(inputs)

    alert(luke)
    event.preventDefault();
  });
});
