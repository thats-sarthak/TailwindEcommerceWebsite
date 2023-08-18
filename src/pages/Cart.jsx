import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  // useEffect( () => {
  //   setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  // }, [cart])


  useEffect(() => {
    const newTotalAmount = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0); // Calculate total amount based on quantity
    setTotalAmount(newTotalAmount);
  }, [cart]);


  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>

        <div className="flex"  justify-between >
      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

          <br></br>
          <br></br>
      




<div style={{
      display: 'flex',
      justifyContent: 'center', // Center the content horizontally
    }}>
      <div style={{
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        marginLeft: '250px', // Add left margin to the card
      }}>
        <div style={{
          flex: 1,
          marginRight: '20px',
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}>
            Cart Summary :
          </div>
          {/* <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}>
            Summary
          </div> */}
          <p>
            <span style={{ fontWeight: 'bold'}}>Total Items: {cart.length}</span>
          </p>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <p style={{
            fontSize: '18px',
            marginBottom: '10px',
            fontWeight: 'bold'
            
          }} >
            Total Amount: ${totalAmount}
          </p>

         
          
        </div>
      </div>
    </div>





</div>

    </div>) : 
    (<div style={{marginTop:'140px'}}>
      <h1 style={{fontSize:'80px', marginLeft:'450px'}}>Cart Empty</h1>
      <Link to={"/"}>
        <button style={{fontSize:'40px', marginLeft:'560px'}}  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;



// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";

// const Cart = () => {
//   const { cart } = useSelector((state) => state);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     const newTotalAmount = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0); // Calculate total amount based on quantity
//     setTotalAmount(newTotalAmount);
//   }, [cart]);

//   return (
//     <div style={{display:'flex'}}>
      
//       {cart.length > 0 ? (
//         <div>
//           <div>
//             {cart.map((item, index) => {
//               return <CartItem key={item.id} item={item} itemIndex={index} />;
//             })}
//           </div>

//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <div
//               style={{
//                 display: "flex",
//                 backgroundColor: "white",
//                 borderRadius: "8px",
//                 padding: "20px",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 marginBottom: "20px",
//                 marginLeft: "250px",
//               }}
//             >
//               <div
//                 style={{
//                   flex: 1,
//                   marginRight: "20px",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "20px",
//                     fontWeight: "bold",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   Cart Summary :
//                 </div>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Total Items: {cart.length}</span>
//                 </p>
//               </div>

//               <div
//                 style={{
//                   flex: 1,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   alignItems: "flex-end",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "18px",
//                     marginBottom: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Total Amount: ${totalAmount} {/* Display updated total amount */}
//                 </p>
//               </div>
//             </div>
//           </div>


//         </div>
//       ) : (
//         <div style={{ marginTop: "140px" }}>
//           <h1 style={{ fontSize: "80px", marginLeft: "450px" }}>Cart Empty</h1>
//           <Link to={"/"}>
//             <button
//               style={{ fontSize: "40px", marginLeft: "560px" }}
//               className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
//             >
//               Shop Now
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
