class Game {
    Play = async () => {
      const respond = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Lari',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const infor = await respond.json();
      const gameID = infor.result.replace('Game with ID: ', '').replace(' added.', '');
      return gameID;
    }

    // Post method
    AddScore = async ({ user, score }) => {
      const respond = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bdVJmh8sv00bIg1v7TGJ/scores/', {
        method: 'POST',
        body: JSON.stringify(
          {
            user,
            score,
          },
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return respond;
    }

    // Get method
    AllScore = async () => {
      const respond = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bdVJmh8sv00bIg1v7TGJ/scores/');
      const infor = await respond.json();

      return infor.result;
    }
}
export default Game;
