/**
* Запуск основных методов для выполнения игры!
* Главный файл
*/

//находим нужный класс 
const $arenas = document.querySelector('.arenas');

// отрисовываем выбранных персонажей
// 1-й параметр название класса
// 2-й параметр объект с персонажем
$arenas.appendChild( createPlayer(player1) );
$arenas.appendChild( createPlayer(player2) );