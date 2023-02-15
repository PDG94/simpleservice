import { Link } from "react-router-dom";
import '../Filter/filter.css'


export default function Filter() {
    return(
        <div class="filter">
          <li>
             <select >
                 {/*SERVICIOS*/ }
              <option value="all">Services</option>
              {/* {categories?.map((elem) => (
                <Link to={`?filter=${elem.name}`}>
                <option key={elem} value={elem.name}>
                  {elem.name}
                </option>
                </Link>
              ))} */}
            </select>

             {/*PRECIO*/ }
             <select>
              <option value="all">Price</option>
              <option value="Mprice">More Price</option>
              <option value="Lprice">Low Price</option>
            </select>

            {/*ABC*/ }
            <select>
              <option value="all">Order</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

              {/*RATING*/ }
            <select>
              <option value='all'>Rating</option>
              <option value="Mrat">More Rating</option>
              <option value="Lrat">Low Rating</option>
            </select>
            </li>
        </div>
    )
}
