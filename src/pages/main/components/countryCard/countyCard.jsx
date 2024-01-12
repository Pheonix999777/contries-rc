import { Link } from "react-router-dom"
import sty from "./styles.module.css"

export const CountyCard = ({src,  title, capital, population, region }) => {
    return    <Link className={sty.ger} to={`/detail/${title}`}>
      <li >
    <img className={sty.ger__img} src={src} alt="" />
            <h3 className={sty.title}>{title}</h3>
            <dl className={sty.data}>
                <dt className={sty.data__dt}>Population:</dt>
                <dd className={sty.data__dd}>{population}</dd>
                <dt className={sty.data__reg}>Region:</dt>
                <dd className={sty.data__lists}>{region}</dd>
                <dt className={sty.data__capital}>Capital:</dt>
                <dd className={sty.data__capital_text}>{capital}</dd>
            </dl>           
</li>

    
    
    </Link>   
   
}