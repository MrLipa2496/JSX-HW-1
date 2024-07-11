import Card from "./components/Card";
import "./App.css";

function App() {
  const users = [
    {
      name: "Emma Watson",
      nick: "@emmawatson",
      tweets: 1337,
      following: 561,
      followers: 718,
      isMale: false,
      img: "src/components/Card/emmaWatson.jpg",
    },
    {
      name: "Daniel Radcliffe",
      nick: "@danielr",
      tweets: 500,
      following: 200,
      followers: 300,
      isMale: true,
      img: "src/components/Card/danielRadcliffe.jpg",
    },
    {
      name: "Rupert Grint",
      nick: "@rupertgrint",
      tweets: 800,
      following: 300,
      followers: 400,
      isMale: true,
      img: "src/components/Card/rupertGrint.jpg",
    },
    {
      name: "Tom Felton",
      nick: "@tomfelton",
      tweets: 1200,
      following: 450,
      followers: 600,
      isMale: true,
      img: "src/components/Card/tomFelton.jpg",
    },
    {
      name: "Bonnie Wright",
      nick: "@bonniewright",
      tweets: 1000,
      following: 400,
      followers: 500,
      isMale: false,
      img: "src/components/Card/bonnieWright.jpg",
    },
    {
      name: "Matthew Lewis",
      nick: "@matthewlewis",
      tweets: 1500,
      following: 600,
      followers: 800,
      isMale: true,
      img: "src/components/Card/matthewLewis.jpg",
    },
    {
      name: "Evanna Lynch",
      nick: "@evannalynch",
      tweets: 700,
      following: 250,
      followers: 350,
      isMale: false,
      img: "src/components/Card/evannaLynch.jpg",
    },
  ];

  return (
    <>
      <div className="cardWrapper">
        {users.map(user => (
          <Card user={user} />
        ))}
      </div>
    </>
  );
}

export default App;
