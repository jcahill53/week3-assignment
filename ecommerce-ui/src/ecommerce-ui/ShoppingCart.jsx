import React from "react";
import CartItems from "./CartItems"



function ShoppingCart({ id, rentalItems,  addRental, cost, qty, totalCost, removeRental }) {
    // console.log({ totalCost });

    // const totalPerProperty = (rentalItems.qty * rentalItems.payment.cost)

    return (

        <aside className="block col-1">
            <h3>Your Shopping Cart</h3>
            <div>
                {rentalItems.length === 0 && <p>No properties have been selected</p>}
            </div>

            <div key="id" className="column" > 
                {rentalItems.map((item, index) => (
                    <CartItems
                        key={id}
                        id={id}
                        item={item}
                        index={index}
                        addRental={addRental}
                        removeRental={removeRental}
                        // totalPerProperty={totalPerProperty}
                         />
                ))}

            </div>
            {/* <div>Total Cost:  ${grandTotal}</div> */}
        </aside>
    )
}
export default ShoppingCart

