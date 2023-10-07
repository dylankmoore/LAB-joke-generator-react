import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Joke from '../components/joke';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setjoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const getAJoke = () => {
    getJoke().then((obj) => {
      setjoke({
        setup: obj.setup,
        delivery: obj.delivery,
      });
      setBtnText('Get A Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <Joke joker={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <Button type="button" onClick={getAJoke}>{btnText}</Button>
      ) : (
        <Button onClick={() => setBtnText('Get A New Joke')}>{btnText}</Button>
      )}
    </div>
  );
}

export default Home;
