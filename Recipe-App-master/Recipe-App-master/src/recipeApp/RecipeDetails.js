import React, { useState } from 'react'
import './Style.css'

function RecipeDetails(props) {

    const [items, setitems] = useState([])

    const [recipeList, setrecipeList] = useState([
        {
            Id:1,
            recipeName:'Pink Sauce Pasta',
            recipeDetails:`how to boil pasta:
            firstly, in a large vessel take enough water.
            add 1 tsp salt, 2 tsp olive oil and get the water to a boil.
            now add 2 cup penne pasta and give a good stir. this helps to prevent pasta from sticking to the bottom of the pan.
            boil for 9 minutes or check the package instruction to cook the pasta until al dente.
            drain off the water and keep the boiled pasta aside.
            how to make white pasta sauce:
            firstly, in a pan heat 1 tsp butter, 2 tsp olive oil and 2 tbsp maida.
            roast on low flame until the maida turns aromatic.
            now add 1½ cup milk and stir continuously. make sure the milk is chilled, else you may have lumps in the sauce.
            keep stirring until the sauce thickens up slightly.
            now add ¼ tsp mixed herbs, ¼ tsp chilli flakes, ¼ tsp salt and 3 tbsp cheese.
            give a good mix. white sauce for pasta is ready. do not overcook as the sauce thickens and turns to paste consistency.
            how to make red sauce for pasta:
            firstly, in a large wok heat 3 tsp olive oil, 1 tsp butter, 3 clove garlic, ½ tsp mixed herbs and ½ tsp chilli flakes.
            saute on low flame until the spices turn aromatic.
            now add 1 onion and saute until the onions sweat slightly.
            further, add 1½ cup tomato puree and cook on medium flame until the puree thickens slightly.
            also add 2 tbsp tomato sauce, ½ tsp chilli powder and ½ tsp salt.
            continue to cook until the sauce thickens. red sauce is ready for the pasta.
            how to make pink sauce for pasta:
            now combine prepared white sauce with the red sauce. add as required, as this white sauce makes the pasta creamy.
            now you can see the colour of the pasta sauce has been changed to pink. pink sauce is ready to prepare pasta.
            add in boiled pasta and give a good mix.
            the pasta is so creamy and saucy.
            you can also add 3 tbsp cheese, ¼ tsp chilli flakes and ¼ tsp mixed herbs.
            mix well combining everything well.
            finally, enjoy pink sauce pasta with more cheese.`,
            img:"https://static.toiimg.com/thumb/83107712.cms?imgsize=329789&width=800&height=800"

        },
        {
            Id:2,
            recipeName:'Panner Tikka Masala',
            recipeDetails:`how to marinate paneer:
            firstly, in a large bowl take ¾ cup curd, ¼ tsp turmeric, ¾ tsp chilli powder, ¼ tsp cumin powder, ½ tsp coriander powder, ¼ tsp pepper powder and ½ tsp garam masala.
            also add ¼ tsp ajwain, ½ tsp salt, 1 tsp kasuri methi, 2 tbsp besan and 2 tsp oil.
            further, add 2 tsp lemon juice and 1 tbsp ginger garlic paste. mix well making sure everything is well combined.
            now add ½ capsicum, ½ onion and 14 cubes paneer.
            mix well making sure everything is well combined.
            cover and refrigerate for 1 hour to marinate.
            after 1 hour, insert into skewer and grill until golden brown.
            how to prepare curry for paneer tikka:
            firstly, in a large kadai heat 2 tbsp oil. add 1 bay leaf, ½ inch cinnamon, 2 pods cardamom, 3 cloves and 1 tsp cumin. saute until the spices turn aromatic.
            add 2 onion and 1 tsp ginger garlic paste. saute until the onions turn golden brown.
            keeping the flame on low, add ¼ tsp turmeric, 1 tsp chilli powder, 1 tsp coriander powder, ½ tsp cumin powder and 1 tsp salt.
            saute until the spices turn aromatic.
            further, add 2 cup tomato puree and cook well.
            cook until the oil separates from the sides.
            now add leftover marination mixture and cook on low flame.
            make sure to stir continuously and cook until the oil separates from the sides.
            further, add 1 cup water and mix adjusting the consistency as required.
            add in prepared paneer tikka and mix gently.
            cover and simmer for 2 minutes, or until the flavours are absorbed well.
            now add ¼ tsp garam masala, 1 tsp kasuri methi and 2 tbsp coriander. mix well.
            finally, enjoy paneer tikka masala with tandoori roti or naan.`,
            img:"https://res.cloudinary.com/mealthy1/image/upload/ar_16:11,c_fill,f_auto,h_600,q_auto:best,w_800/v1549977974/cms_recipe_featured_image/m3czw2wmsijjbwsjpgor.jpg"

        },
        {
            Id:3,
            recipeName:'Basundi',
            recipeDetails:`firstly, in a large thick bottomed kadai boil 2-litre milk stirring occasionally.
            once the milk comes to a boil, add 2 tbsp chopped cashew, almonds and pistachios.
            stir well making sure milk doesn't stick to the bottom.
            boil the milk on low flame for 30 minutes or till milk reduces.
            keep stirring in between to avoid sticking till the milk reduces to quarter.
            now add ½ cup sugar and ¼ tsp saffron and mix well.
            boil for another 5 minutes or till the milk thickens completely.
            now add ¼ tsp cardamom powder and mix well.
            finally, serve basundi chilled or hot garnished with few dry fruits.`,
            img:"https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Kesar_Pineapple_Rabri_Basundi_Sweet_Mithai_Recipe_Pudding-1.jpgs"

        }
    ])

    let sendData=(index)=>{
        console.log('datacp',recipeList); 
        let recipeDataList=recipeList[index]  
        props.getRecipeData(recipeDataList)
    }

    
    return (
        <div class="row">
  <div class="col-sm-6">
            <h4>Item's List</h4>
            {
                recipeList.map((list,index)=>{
                    console.log(list);
                   return <div key={index}> 
                      
                       <div class="card">
                           <div>{list.Id} </div>
 
  <div className="card-body">
    <h5 className="card-title">{list.recipeName}</h5>
    <img className="card-img-top" src={list.img} alt="Card image cap"/> 
    <button className='btn btn-primary' onClick={()=>sendData(index)}>View</button>
  </div>
  
  
</div>
                   </div>  
                })
            }
        </div>
        </div>
    )
}

export default RecipeDetails
