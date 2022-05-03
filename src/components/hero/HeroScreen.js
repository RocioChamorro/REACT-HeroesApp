import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";
//import batman from '../../assets/heroes/dc-batman.jpg' //estático

const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, alter_ego, publisher, first_appearance, characters } =
    hero;

  // const imagePath = `/assets/${id}.jpg`; //desde public/assets

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__backInLeft">
        <img
          // src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
          //src={ batman } //import
          src={heroImages(`./${heroId}.jpg`)}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}{" "}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}{" "}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
