// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/cartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({item, itemIndex}) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       padding: '20px',
//       boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//       marginBottom: '20px',
//     }}>
//       <div style={{
//         marginRight: '20px',
//       }}>
//         <img src={item.image} style={{ width: '180px' }} alt={item.title} />
//       </div>
//       <div style={{
//         flex: 1,
//       }}>
//         <h1>{item.title}</h1>
//         <p>{item.description.split(' ').slice(0, 5).join(' ') + '...'}</p>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginTop: '12px',
//         }}>
//           <p style={{
//             fontSize: '28px',
//             marginTop: '140px',
//             color: 'green',
//             fontWeight: 'bold',
//           }}>
//             ${item.price}
//           </p>
//           <div onClick={removeFromCart}>
//             <button style={{
//               border: 'none',
//               backgroundColor: '#3498db',
//               color: 'white',
//               padding: '10px 20px',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontSize: '16px',
//               backgroundImage: 'linear-gradient(to bottom, #3498db, #2980b9)',
//               boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//               transition: 'background-color 0.3s ease',
//               marginTop:'138px'
//             }}>
//               Delete Product
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;








// import React from "react";
// import { useDispatch } from "react-redux";
// import { incrementQuantity, decrementQuantity, remove } from "../redux/Slices/cartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({ item, itemIndex }) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   };

//   const increaseQuantity = () => {
//     dispatch(incrementQuantity(item.id));
//   };

//   const decreaseQuantity = () => {
//     dispatch(decrementQuantity(item.id));
//   };

//   return (
//     <div style={{ display: "flex", backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
//       <div style={{ marginRight: "20px" }}>
//         <img src={item.image} style={{ width: "180px" }} alt={item.title} />
//       </div>
//       <div style={{ flex: 1 }}>
//         <h1>{item.title}</h1>
//         <p>{item.description.split(" ").slice(0, 5).join(" ") + "..."}</p>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
//           <p style={{ fontSize: "28px", marginTop: "140px", color: "green", fontWeight: "bold" }}>
//             ${item.price}
//           </p>
//           <div>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <button
//                 onClick={decreaseQuantity}
//                 style={{
//                   border: "none",
//                   backgroundColor: "#3498db",
//                   color: "white",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                   backgroundImage: "linear-gradient(to bottom, #3498db, #2980b9)",
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                   transition: "background-color 0.3s ease",
//                 }}
//               >
//                 -
//               </button>
//               <span style={{ margin: "0 8px" }}>{item.quantity}</span>
//               <button
//                 onClick={increaseQuantity}
//                 style={{
//                   border: "none",
//                   backgroundColor: "#3498db",
//                   color: "white",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                   backgroundImage: "linear-gradient(to bottom, #3498db, #2980b9)",
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                   transition: "background-color 0.3s ease",
//                 }}
//               >
//                 +
//               </button>
//             </div>
//             <div onClick={removeFromCart} style={{ marginTop: "8px" }}>
//               <button
//                 style={{
//                   border: "none",
//                   backgroundColor: "#e74c3c",
//                   color: "white",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                   transition: "background-color 0.3s ease",
//                 }}
//               >
//                 Delete Product
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;




import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  const increaseQuantity = () => {
    dispatch(incrementQuantity(item.id));
  };

  const decreaseQuantity = () => {
    dispatch(decrementQuantity(item.id));
  };

  return (
    <div style={{ display: "flex", backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
      <div style={{ marginRight: "20px" }}>
        <img src={item.image} style={{ width: "180px" }} alt={item.title} />
      </div>
      <div style={{ flex: 1 }}>
        <h1>{item.title}</h1>
        <p>{item.description.split(" ").slice(0, 5).join(" ") + "..."}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
          <p style={{ fontSize: "28px", marginTop: "140px", color: "green", fontWeight: "bold" }}>
            ${item.price * item.quantity} {/* Display total price for the quantity */}
          </p>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={decreaseQuantity}
                style={{
                  border: "none",
                  backgroundColor: "#3498db",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  backgroundImage: "linear-gradient(to bottom, #3498db, #2980b9)",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                }}
              >
                -
              </button>
              <span style={{ margin: "0 8px" }}>{item.quantity}</span>
              <button
                onClick={increaseQuantity}
                style={{
                  border: "none",
                  backgroundColor: "#3498db",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  backgroundImage: "linear-gradient(to bottom, #3498db, #2980b9)",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                }}
              >
                +
              </button>
            </div>
            <div onClick={removeFromCart} style={{ marginTop: "8px" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                  marginTop:'100px'
                }}
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;


