import React , {useState}from 'react'
import{GetHotelsByStars} from "../../../services/HotelService";

function Search() {

    const [AddStar ,SetStar] =useState({
      stars :"",
    })

    const [submitted, setSubmitted] = useState(false);

    const handlStars =(e)=>{
      SetStar({... AddStar ,stars:e.target.value})
    }
    const handlSubmit=(e) =>{
      e.preventDefault();
      if(AddStar){
        GetHotelsByStars(AddStar).then((response)=>{
            console.log('Add Stars ');
        }
        )
        
      }else{
        console.log('makin walo ');
      }
      setSubmitted(true);
    }
  return (
    <div className="search_container d-flex flex-column justify-content-between">
                
        {/* Title */}
        <div className="title">
            Search for an Hotel 
        </div>

        {/* Search form */}
        <form className='search_form d-flex flex-column'>

            {/* first group */}
            <div className="first_group d-flex">
            <input type="text" className='px-2' placeholder='Hotel name' />
            <input type="text" className='px-2' placeholder='Hotel City' />
            <input type="text" value={AddStar.stars} onChange={handlStars} className='px-2' placeholder='stars' />
            </div>

            {/* Price line */}
            <div className="price_line d-flex w-100">
            <p>price</p>
            <hr className='w-100'/>
            </div>

            {/* second group */}
            <div className="second_group d-flex">
            <input type="number" className='px-2' placeholder='Price min' />
            <input type="number" className='px-2' placeholder='Price max' />
            </div>

        </form>

        {/* Search button */}
        <button onChange={handlSubmit} className='main_button_bordered align-self-end'>Search</button>

    </div>
  )
}

export default Search