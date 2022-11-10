import React from 'react';

function SimpleCart() {
  return (
    // display items in the cart as a list with info and delete buttons
    <div>SimpleCart</div>
  )
}

export default SimpleCart;

// map through items in cart - need to create a function inside use effect hook
// {itemsInCart > 0 ? itemsInCart.map((item) => (
//   <div>
//     <h1>{item.name}</h1>
//   </div>
//   )) : <>hello</>
// } 