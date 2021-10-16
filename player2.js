/**
* Создаём второго персонажа для арены
*/

const player2 = {
	name: 'Sonya',
	player: 2,
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: 'fist',
	attack: function(){
			console.log(this.name + ' Figth...');
		}
}