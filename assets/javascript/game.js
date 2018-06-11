var characters = [
  {
    name: "obi-wan kenobi",
    hp: "120",
    attack: "8",
    cap: "8"
  },
  {
    name: "luke skywalker",
    hp: "100",
    attack: "5",
    cap: "5"
  },
  {
    name: "yoda",
    hp: "150",
    attack: "20",
    cap: "20"
  },
  {
    name: "darth sidious",
    hp: "180",
    attack: "25",
    cap: "25"
  }
];

var mainCharacter = "";
var enemyCharacter = "";
var newSrc = "";

$(".characters").on("click", ".hero", function() {
  console.log($(this).attr("id"));
  for (var i = 0; i < characters.length; i++) {
    if ($(this).attr("id") === characters[i].name) {
      mainCharacter = characters[i];
      newSrc = $(this).attr("src");
      $("#mainCharacter").css("visibility", "visible");
      $("#mainCharacter").attr("src", newSrc);

      var chosenCharacter = $("<div>");
      chosenCharacter.addClass("name");
      chosenCharacter.text(mainCharacter[0]);
      console.log(chosenCharacter);
      $(".characters #mainCharacter").append(mainCharacter[0]);

      chosenCharacter.removeClass("name");
      chosenCharacter.addClass("hp");
      chosenCharacter.text(mainCharacter[1]);
      console.log(chosenCharacter);
      $(".characters #mainCharacter .name").append(chosenCharacter);
    }
  }
});
