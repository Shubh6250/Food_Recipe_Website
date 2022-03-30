import  Axios  from 'axios'
import React, { useState } from 'react'
import './App.css'
import RecipeTile from './RecipeTile';



const App = ()=>{
  const[query, setQuery]=useState("");
  const [recipes, setRecipes]=useState([]);

  const YOUR_APP_ID ="9e7e5679"
const YOUR_APP_KEY="d24784ff5c71d453babd93ecdae13f28"


  var url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`

  async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
  }

const onSubmit = (e)=>{
e.preventDefault();
getRecipes();
}


return(

<div className='app'>
<h1>Food Recipes Plaza</h1>

<form className='app__searchForm' onSubmit={onSubmit}>

  <input className='app__input' type="text" placeholder='Enter Ingredient' value={query} onChange={(e)=>setQuery(e.target.value)}/>
  <input className='app__submit' type="submit" value="Search"/>

  
</form>
<div className='app__recipes'>
  {recipes.map(recipe=>{
    return <RecipeTile recipe={recipe}/>
  })}
</div>

</div>




)

}
export default App