//President Child is responsible for displaying the information

//President Parent is responsible for using the map feature and have it call the child

//BRONZE: See if you can display all the presidents first and last name by using the .map

//SILVER: Create a filtered array so that the child will only display the presidents that are alive (map and filter)

//GOLD: Display all presidents that have died and display the age they did die

import { presidentsArray } from "./presidents.constant";
import PresidentChild from "./PresidentChild";
const PresidentParent = () => {
  const filteredPresidentsLiving = presidentsArray.filter(
    (president) => president.passed === undefined
  );
  const filteredPresidentsDead = presidentsArray.filter(
    (president) => president.passed !== undefined
  );
  const filteredSortedDead = filteredPresidentsDead.sort(
    (presidentA, presidentB) =>
      presidentA.passed - presidentA.year > presidentB.passed - presidentB.year
        ? -1
        : 1
  );

  return (
    <ul>
      {filteredSortedDead.map((president) => (
        <PresidentChild
          firstName={president.first}
          age={president.passed - president.year}
        />
      ))}
    </ul>
  );
};

export default PresidentParent;