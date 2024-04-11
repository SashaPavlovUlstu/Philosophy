(function($) {
  $(document).ready(function() {
    var puzzleData = [
      {
        clue: "Древнегреческий философ, ученик Платона, основатель перипатетической школы. Его работы охватывают широкий спектр тем, включая метафизику, этику, логику и политику.",
        answer: "аристотель",
        position: 1,
        orientation: "across",
        startx: 2,
        starty: 3
      },
      {
        clue: "Немецкий философ XIX века, известный своими идеями о воле к власти, надчеловеческом и этическом релятивизме.",
        answer: "ницше",
        position: 2,
        orientation: "down",
        startx: 12,
        starty: 5
      },
      {
        clue: "Немецкий философ, автор работ о существовании и времени, считается одним из величайших мыслителей XX века.",
        answer: "хайдеггер",
        position: 3,
        orientation: "down",
        startx: 2,
        starty: 2
      },
      {
        clue: "Французский философ и математик, известный как основатель современной философии и создатель метода сомнения.",
        answer: "декарт",
        position: 4,
        orientation: "down",
        startx: 9,
        starty: 2
      },
      {
        clue: "Немецкий философ эпохи Просвещения, автор критики чистого разума и теории морального императива.",
        answer: "кант",
        position: 5,
        orientation: "across",
        startx: 6,
        starty: 7
      },
      {
        clue: "Французский философ, известный своими работами о власти, знании и сексуальности в обществе.",
        answer: "фуко",
        position: 6,
        orientation: "down",
        startx: 4,
        starty: 4
      },
      {
        clue: "Древнегреческий философ, основатель Академии, учитель Аристотеля. Известен своими идеями о мире идей и теорией форм.",
        answer: "платон",
        position: 8,
        orientation: "across",
        startx: 7,
        starty: 5
      },
      {
        clue: "Ирландский философ XVIII века, известный своими идеями о субъективном идеализме и отрицании материального мира.",
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
