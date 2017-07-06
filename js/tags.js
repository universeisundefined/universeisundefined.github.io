$(function() {
    var availableTags = [
      "Long Claw",
      "Jon Snow",
      "Game of Thrones",
      "George RR Martin",
      "Ice",
      "Ned Stark",
      "Stark",
      "Arya Stark",
      "Arya",
      "Oath Keeper",
      "Needle",
      "Weapons",
      "Dragon Glass",
      "Brianne",
      "Tarth",
      "Valyrian Steel",
      "Jamie Lannister",
      "Lannister"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });