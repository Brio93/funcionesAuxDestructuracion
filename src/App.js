import "./styles.css";

const Hello = ({ age, name }) => {
  //funcion corta
  const bornYear = () => new Date().getFullYear() - age;
  /*{Funcion larga
    const bornYear = () => { 
      const yearNow = new Date().getFullYear() 
    return yearNow - age
  }*/
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()} or {bornYear() - 1}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Braulio";
  const age = 27;
  const name1 = "Paulette";
  const age1 = 26;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name={name1} age={age1} />
    </div>
  );
};

export default App;
