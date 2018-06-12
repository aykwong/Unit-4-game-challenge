var characters = [
  {
    name: "Obi-wan-Kenobi",
    hp: "120",
    attack: "8",
    cap: "8"
  },
  {
    name: "Luke-Skywalker",
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
    name: "Darth-Sidious",
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

      //Dynamically creating the chosen character
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

      //Take out the character selection, appear the evil characters minus the chosen main character
      $(".selection").css("display", "none");
      $(".evil").css("display", "inline");
      $("#" + $(this).attr("id") + "-evil").css("display", "none");
    }
  }

  
  $(".characters").on("click", ".villan", function() {
    for (var i = 0; i < characters.length; i++) {
      if ($(this).attr("id") === characters[i].name) {
  
        //Dynamically creating the defender character
        enemyCharacter = characters[i];
        let newSrc = $(this).attr("src");
        $("#defender").css("visibility", "visible");
        $("#defender").attr("src", newSrc);
  
        let chosenCharacterName = $("<div>");
        chosenCharacterName.addClass("name");
        chosenCharacterName.text(enemyCharacter.name);
        console.log(chosenCharacterName);
        $(".defenderzone").append(chosenCharacterName);
  
        let chosenCharacterHp = $("<div>");
        chosenCharacterHp.addClass("hp");
        chosenCharacterHp.text(enemyCharacter.hp);
        $(".defenderzone").append(chosenCharacterHp);

        //Hiding the defender character from the enemy selection
        $("#" + $(this).attr("id") + "-evil").css("display", "none");
      };
    };
  
    while(battle === 1) {
      $(".attack").on("click", function() {
      console.log(mainCharacter)
      console.log(enemyCharacter)
  
      });
    };

  });

});
