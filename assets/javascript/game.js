var characters = [
  {
    name: "Obi-wan kenobi",
    hp: "120",
    attack: "8",
    cap: "8"
  },
  {
    name: "Luke skywalker",
    hp: "100",
    attack: "5",
    cap: "5"
  },
  {
    name: "Yoda",
    hp: "150",
    attack: "20",
    cap: "20"
  },
  {
    name: "Darth sidious",
    hp: "180",
    attack: "25",
    cap: "25"
  }
];

var mainCharacter = "";
var enemyCharacter = "";

$(".characters").on("click", ".hero", function() {
  console.log($(this).attr("id"));
  for (var i = 0; i < characters.length; i++) {
    if ($(this).attr("id") === characters[i].name) {
      mainCharacter = characters[i];
      let newSrc = $(this).attr("src");
      $("#mainCharacter").css("visibility", "visible");
      $("#mainCharacter").attr("src", newSrc);

      let chosenCharacterName = $("<div>");
      chosenCharacterName.addClass("name");
      chosenCharacterName.text(mainCharacter.name);
      console.log(chosenCharacterName);
      $(".mainzone").append(chosenCharacterName);

      let chosenCharacterHp = $("<div>");
      chosenCharacterHp.addClass("hp");
      chosenCharacterHp.text(mainCharacter.hp);
      $(".mainzone").append(chosenCharacterHp);

      $(".hero").css("display", "none");
    }
  }
});
