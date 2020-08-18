var start = confirm('Сыграем в игру?');

function game() {
    if (start) {
        for (var i = 0; i < questions.length; i++) {
            var question = +prompt(
                questions[i].q + 
                questions[i].a1 +
                questions[i].a2 +
                questions[i].a3 +
                questions[i].a4
                );
            
            if (!question) {
                return;
            }
            
            if (question != questions[i].corr) {
                alert('Неправильный ответ, игра окончена');
                return;
            }

            if (i == questions.length - 1) {
                alert('Вы победили! Спасибо за игру!');
                return;
            }

            var isInGame = confirm('Правильный ответ, играем дальше?');
            if (!isInGame) {
                return;
            }
            
        }
    }
}

game();