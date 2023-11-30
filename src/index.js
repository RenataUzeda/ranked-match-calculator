function calculateRank(wins, losses) {
  const score = wins - losses;

  let level;

  if (wins < 0 || losses < 0) {
    console.log(`Número inválido! Digite números inteiros positivos.`);
    return;
  } else if (wins >= 0 && wins <= 10) {
    level = "Iron";
  } else if (wins >= 11 && wins <= 20) {
    level = "Bronze";
  } else if (wins >= 21 && wins <= 50) {
    level = "Silver";
  } else if (wins >= 51 && wins <= 80) {
    level = "Gold";
  } else if (wins >= 81 && wins <= 90) {
    level = "Diamond";
  } else if (wins >= 91 && wins <= 100) {
    level = "Legendary";
  } else if (wins >= 101) {
    level = "Immortal";
  }

  console.log(
    `The Hero has a balance of ${score} and is at the level of ${level}`
  );
}

calculateRank(25, 5);
