// eslint-disable-next-line 
import React, { useEffect, useState } from 'react';
import './Temp.css'
const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f1ee085fcd02efe674c1d7e288b717d3`
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search])
  return (
    <>

      <div className='box'>
        <div className="inputdata">
          <input type="search" placeholder='enter city' onChange={(e) => {
            setSearch(e.target.value)
          }} />

        </div>
        {!city ?
          (<p>no data</p>) : (
            <>
              <div className='info'>
                <h2 className='local'>
                  <i className='fas'></i>{search}
                </h2>
                <h1 className='temp'>{city.temp}</h1>
                <h3 className='tempmin'>Min:33cel | Max:55 cel</h3>
              </div>
              <div className="wave"></div>
            </>
          )


        }

      </div>
    </>
  )
}

export default Temp;
