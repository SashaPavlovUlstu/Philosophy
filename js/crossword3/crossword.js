(function($) {
  $(document).ready(function() {
    var puzzleData = [
      {
        clue: "Метафизика - Философская дисциплина...",
        answer: "метафизика",
        position: 1,
        orientation: "across",
        startx: 1,
        starty: 1
      },
      {
        clue: "Рационализм - Философское направление...",
        answer: "рационализм",
        position: 1,
        orientation: "across",
        startx: 18,
        starty: 7
      },
      {
        clue: "Онтология - Философская дисциплина...",
        answer: "онтология",
        position: 2,
        orientation: "across",
        startx: 2,
        starty: 10
      },
      {
        clue: "Этика - Философская дисциплина...",
        answer: "этика",
        position: 2,
        orientation: "down",
        startx: 7,
        starty: 16
      },
      {
        clue: "Эмпиризм - Философское направление...",
        answer: "эмпиризм",
        position: 3,
        orientation: "across",
        startx: 12,
        starty: 11
      },
      {
        clue: "Гносеология - Философская дисциплина...",
        answer: "гносеология",
        position: 3,
        orientation: "down",
        startx: 3,
        starty: 9
      },
      {
        clue: "Прагматизм - Философское направление...",
        answer: "прагматизм",
        position: 4,
        orientation: "down",
        startx: 14,
        starty: 11
      },
      {
        clue: "Идеализм - Философское направление...",
        answer: "идеализм",
        position: 4,
        orientation: "across",
        startx: 14,
        starty: 18
      },
      {
        clue: "Социология - Наука о социальных явлениях...",
        answer: "социология",
        position: 5,
        orientation: "across",
        startx: 7,
        starty: 14
      },
      {
        clue: "Эстетика - Философская дисциплина...",
        answer: "эстетика",
        position: 6,
        orientation: "across",
        startx: 7,
        starty: 16
      },
      {
        clue: "Феноменология - Философское направление...",
        answer: "феноменология",
        position: 6,
        orientation: "down",
        startx: 21,
        starty: 1
      },
      {
        clue: "Позитивизм - Философское направление...",
        answer: "позитивизм",
        position: 7,
        orientation: "across",
        startx: 9,
        starty: 5
      },
      {
        clue: "Марксизм - Философская концепция...",
        answer: "марксизм",
        position: 2,
        orientation: "down",
        startx: 18,
        starty: 5
      },
      {
        clue: "Аксиология - Философская дисциплина...",
        answer: "аксиология",
        position: 4,
        orientation: "down",
        startx:10,
        starty: 1
      }
    ];

    $('#puzzle-wrapper').crossword3(puzzleData);
  });
})(jQuery);
