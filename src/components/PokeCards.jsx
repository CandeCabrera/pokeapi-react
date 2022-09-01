import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';


const PokeCards = () => {
    const [poke, setPoke]= useState({})
    const randomNum = Math.floor(Math.random()*248)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/25`)
            .then(res => { setPoke(res.data)
                console.log("consoleLOG", res.data);
            })

    }, [])

    const randomPoke = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
            .then(res => { setPoke(res.data)
            })
    }

    const [isKilos, setIsKilos] = useState(true)
    const changeWeight = ()=>{
        setIsKilos(!isKilos)
    }


    return (
        <div className='cardAndBtn'>
            <div onClick={randomPoke} className="prev btn">{"<"}</div>

            <div className="pokeCard">

                <div className='pokePic'>
                    <h2>{poke.name}</h2>
                    <img src={poke.sprites?.front_default} alt="pokepic" height="60%" />
                </div>
               

                <div onClick={changeWeight} className="pokeBall">
                    {/* <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" alt="" height="70px" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pokeball" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#666" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="9" r="9" transform="translate(3 3)" />
                    <circle cx="12" cy="12" r="0.5" stroke-width='6' />
                    <path d="M3 12h6m6 0h6" />
                    </svg>
                </div>

                <div className='pokeDesc'>
                    <div>
                        <p>weight: <span>{isKilos ? poke.weight : (poke.weight/10)}    {isKilos ?  "hectograms" : "kilograms"}</span></p>
                        <p>height: <span>{poke.height} decimeters</span></p>
                        <p>type: <span>{poke.types?.[0].type.name}</span></p>
                    </div>
                </div>
            </div>
            
            <div onClick={randomPoke} className="next btn">{">"}</div>
            
        </div>
    );
};

export default PokeCards;
