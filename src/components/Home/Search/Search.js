import React , {useState}from 'react'
import{GetHotelsByStars} from "../../../services/HotelService";

function Search() {

    const [citiesSelectStyle, setCitiesSelectStyle] = useState('search_select_init')
    const [starsSelectStyle, setStarsSelectStyle] = useState('search_select_init')
    
    const inizialState = {
      stars:"",
    }
    const [AddStar, setStars] = useState(inizialState)
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (e) => {
      setStars({...AddStar, stars: e.target.value})
    };
    
    
    
    
    const handleSubmit= async (e) =>{
    e.preventDefault();
      console.log(AddStar);
      if(AddStar){
        let response = await GetHotelsByStars(AddStar)
            console.log('response : ' , response.data);
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
    <form onSubmit={handleSubmit} className='search_form d-flex flex-column'>
        {/* first group */}
        <div className="first_group d-flex">

            <input type="text" className='px-2' placeholder='Hotel name' />

            <select className={'search_select ' + citiesSelectStyle} onChange={(e) => { setCitiesSelectStyle('search_select_choosed') 
          }}>
                <option value="none" disabled selected hidden>Choose a city</option>
                <option value="none">none</option>
                <option value="" >Marrakech</option>
                <option value="" >Youssoufia</option>
            </select>

            <select className={'search_select ' + starsSelectStyle} 
          //   onChange={(e) => { 
          //     setStarsSelectStyle('search_select_choosed')
          // handlStars() }}
          onChange={handleInputChange} 
          >
                <option value="none" disabled selected hidden>Choose a rating</option>
                <option value="none">none</option>
                <option value="1" >1 star</option>
                <option value="2" >2 star</option>
                <option value="3" >3 star</option>
                <option value="4" >4 star</option>
                <option value="5" >5 star</option>
            </select>

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

    <button className='main_button_bordered align-self-end'>Search</button>
    </form>

    {/* Search button */}

</div>
)
}

export default Search