import sty from "./styles.module.css"
import { CountyCard } from "./components/countryCard/countyCard"
import { Container } from "../../components/container/container"

import { useEffect, useState } from "react"

export let Main = ()=> {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")


    function onSearchChange(e){
        setSearch(e.target.value)
            if( e.target.value){
                fetch (`https://restcountries.com/v3.1/name/${e.target.value}`)
                .then(res => res.json())
                .then(data =>{
                    if(data.length)   setCountries(data)
                })
             
            }
         
   
    }

    useEffect(()=> {
        fetch ("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data =>{
            setCountries(data)
        })
    }, [])

    return  <article>
       <Container>
       <div className={sty.content__div}>
                    <form>
                        <div className={sty.input__div}>
                            <input className={sty.inp} onChange={onSearchChange} type="text" name="text" />
                        </div>
                       
                    </form>
                </div> 
    <ul className={sty.ul}>
        {
           countries?.map((country,  index) => (<CountyCard
             src={country.flags?.png} 
             title={country.name?.common} 
             capital={country.capital?.[0]}
            population={country.population} 
            region={country.region}
            key={index}
            />)) 
        }
    </ul>
  
    </Container>


    </article>


    
}