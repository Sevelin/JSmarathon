/**
* Запуск основных методов для выполнения игры!
* Главный файл
*/



// отрисовываем выбранных персонажей
// параметр объект с персонажем
$arenas.appendChild( createPlayer(player1) );
$arenas.appendChild( createPlayer(player2) );

// отслеживаем клик по кнопуке
$btn.addEventListener('click', kickPlayer);