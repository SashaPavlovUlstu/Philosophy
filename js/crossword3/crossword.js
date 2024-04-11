(function($) {
  $(document).ready(function() {
    var puzzleData = [
      {
        clue: "Философская дисциплина, изучающая основные принципы реальности, включая сущность, причинность и цель бытия.",
        answer: "метафизика",
        position: 1,
        orientation: "across",
        startx: 1,
        starty: 1
      },
      {
        clue: "Философское направление, утверждающее, что разум и логика являются основными источниками знания и понимания мира.",
        answer: "рационализм",
        position: 1,
        orientation: "across",
        startx: 18,
        starty: 7
      },
      {
        clue: "Философская дисциплина, изучающая сущность бытия, а также его основные категории и структуру.",
        answer: "онтология",
        position: 2,
        orientation: "across",
        startx: 2,
        starty: 10
      },
      {
        clue: "Философская дисциплина, изучающая моральные принципы и правила поведения.",
        answer: "этика",
        position: 2,
        orientation: "down",
        startx: 7,
        starty: 16
      },
      {
        clue: "Философское направление, считающее опыт и наблюдение основными источниками знания и истины.",
        answer: "эмпиризм",
        position: 3,
        orientation: "across",
        startx: 12,
        starty: 11
      },
      {
        clue: "Философская дисциплина, изучающая природу и возможности познания.",
        answer: "гносеология",
        position: 3,
        orientation: "down",
        startx: 3,
        starty: 9
      },
      {
        clue: "Философское направление, сосредотачивающееся на практическом применении и результативности идей.",
        answer: "прагматизм",
        position: 4,
        orientation: "down",
        startx: 14,
        starty: 11
      },
      {
        clue: "Философское направление, считающее идеи и мысли основой реальности, а не материальные объекты.",
        answer: "идеализм",
        position: 4,
        orientation: "across",
        startx: 14,
        starty: 18
      },
      {
        clue: "Наука о социальных явлениях, отношениях и структурах в обществе.",
        answer: "социология",
        position: 5,
        orientation: "across",
        startx: 7,
        starty: 14
      },
      {
        clue: "Философская дисциплина, изучающая природу искусства, красоты и вкуса.",
        answer: "эстетика",
        position: 6,
        orientation: "across",
        startx: 7,
        starty: 16
      },
      {
        clue: "Философское направление, основанное на описании и анализе явлений и сознания.",
        answer: "феноменология",
        position: 6,
        orientation: "down",
        startx: 21,
        starty: 1
      },
      {
        clue: "Философское направление, придерживающееся взгляда, что истинное знание может быть получено только через наблюдение и эксперимент.",
        answer: "позитивизм",
        position: 7,
        orientation: "across",
        startx: 9,
        starty: 5
      },
      {
        clue: "Философская концепция, основанная на идеях Карла Маркса и Фридриха Энгельса, акцентирующая внимание на классовой борьбе и роли экономики в обществе.",
        answer: "марксизм",
        position: 2,
        orientation: "down",
        startx: 18,
        starty: 5
      },
      {
        clue: "Философская дисциплина, изучающая ценности и их природу, включая этику, эстетику и религиозные ценности.",
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
