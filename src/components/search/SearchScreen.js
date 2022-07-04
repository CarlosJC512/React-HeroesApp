import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({ searchText: q });

  const { searchText } = formValues;
  const heroesFileted = useMemo( () => getHeroesByName(q), [q] );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <div className="container">
        <h1>Searches</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Search</h4>
            <hr />

            <form 
              onSubmit={ handleSearch }
              className="d-grid" 
            >
              <input 
                type="text"
                placeholder="Search hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ handleInputChange }
              />

              <button 
                className="btn btn-outline-success mt-3"
                type="submit"
              >
                Buscar...
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            {
              (q ==='')
                ? <div className='alert alert-info'>Buscar héroe</div>
                :( heroesFileted.length === 0 ) 
                  && <div className="alert alert-danger">No hay resultados para: { q }</div>
            }

            {
              heroesFileted.map( hero => (
                <HeroCard 
                  key={ hero.id }
                  { ...hero }
                />
              ))
            }
          </div>      

        </div>
      </div>
    </>
  )
}
