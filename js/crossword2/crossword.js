(function($) {
  $(document).ready(function() {
    var puzzleData = [
      {
        clue: "Аристотель - Древнегреческий философ...",
        answer: "аристотель",
        position: 1,
        orientation: "across",
        startx: 2,
        starty: 3
      },
      {
        clue: "Ницше - Немецкий философ XIX века...",
        answer: "ницше",
        position: 2,
        orientation: "down",
        startx: 12,
        starty: 5
      },
      {
        clue: "Хайдеггер - Немецкий философ...",
        answer: "хайдеггер",
        position: 3,
        orientation: "down",
        startx: 2,
        starty: 2
      },
      {
        clue: "Декарт - Французский философ и математик...",
        answer: "декарт",
        position: 4,
        orientation: "down",
        startx: 9,
        starty: 2
      },
      {
        clue: "Кант - Немецкий философ эпохи Просвещения...",
        answer: "кант",
        position: 5,
        orientation: "across",
        startx: 6,
        starty: 7
      },
      {
        clue: "Фуко - Французский философ...",
        answer: "фуко",
        position: 6,
        orientation: "down",
        startx: 4,
        starty: 4
      },
      {
        clue: "Платон",
        answer: "платон",
        position: 8,
        orientation: "across",
        startx: 7,
        starty: 5
      },
      {
        clue: "Беркли - Ирландский философ XVIII века...",
        answer: "беркли",
        position: 9,
        orientation: "across",
        startx: 1,
        starty: 6
      }
    ];

    $('#puzzle-wrapper').crossword2(puzzleData);
  });
})(jQuery);
