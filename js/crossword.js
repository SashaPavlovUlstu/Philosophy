(function($) {
  $(document).ready(function() {
    var puzzleData = [
      {
        clue: "Аристотель - Древнегреческий философ...",
        answer: "аристотель",
        position: 1,
        orientation: "across",
        startx: 4,
        starty: 10
      },
      {
        clue: "Метафизика - Философская дисциплина...",
        answer: "метафизика",
        position: 2,
        orientation: "down",
        startx: 4,
        starty: 1
      },
      {
        clue: "Сократия - Древнегреческий философ...",
        answer: "сократия",
        position: 3,
        orientation: "across",
        startx: 6,
        starty: 6
      },
      {
        clue: "Этика - Философская дисциплина...",
        answer: "этика",
        position: 4,
        orientation: "down",
        startx: 1,
        starty: 8
      },
      {
        clue: "Логика - Философская дисциплина...",
        answer: "логика",
        position: 5,
        orientation: "down",
        startx: 2,
        starty: 8
      },
      {
        clue: "Эллинизм - Исторический период...",
        answer: "эллинизм",
        position: 8,
        orientation: "across",
        startx: 1,
        starty: 8
      },

      {
        clue: "Натурализм - Философское учение...",
        answer: "натурализм",
        position: 10,
        orientation: "across",
        startx: 2,
        starty: 3
      },
      {
        clue: "Идеализм - Философское направление...",
        answer: "идеализм",
        position: 11,
        orientation: "down",
        startx: 12,
        starty: 6
      },
      {
        clue: "Синкретизм - Философское учение или метод...",
        answer: "синкретизм",
        position: 12,
        orientation: "across",
        startx: 4,
        starty: 12
      }
    ];

    $('#puzzle-wrapper').crossword(puzzleData);
  });
})(jQuery);
