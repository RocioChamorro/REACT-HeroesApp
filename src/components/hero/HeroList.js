import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); //Si este componente llega a tener un STATE esta función se estaría reenderizando muchas veces pero con el useMemo se contrala que se ejecute solo si el [publisher] cambia
  //el primer argumento que recibe el useMemo es el valor a memorizar
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero} // todas las propiedades de hero son las que están definidas en HeroCard
        />
      ))}
    </div>
  );
};

export default HeroList;
