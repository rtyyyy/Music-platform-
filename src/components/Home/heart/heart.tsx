import React from "react";
import "./heart.css";

function Heart(){
    return(
       <div>
<input type="checkbox"  id="favorite" name="favorite-checkbox" value="favorite-button" />
<label htmlFor="favorite" className="container">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  <div className="action">
    <span className="option-1">Добавить в понравившиеся</span>
    <span className="option-2">Добавлено в понравившиеся</span>
  </div>
</label>
</div>
    )
}

export default Heart