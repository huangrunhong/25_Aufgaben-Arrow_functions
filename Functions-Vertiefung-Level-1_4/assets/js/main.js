hero = (heroName, heroPower, heroEnemy) => {
  const name = "Mein:e Lieblingsheld:in ist: ";
  const power = "Er/sie hat die Fähigkeit:";
  const enemy = "Sein/ihr größte/r Gegner:in ist:";
  console.log(
    name + heroName + ". " + power + heroPower + ". " + enemy + heroEnemy + "."
  );
};
hero("IronMan", "Laserstrahlen", "Mandarin");
