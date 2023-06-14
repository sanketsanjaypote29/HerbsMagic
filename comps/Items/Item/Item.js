"use client";
import React, { useState } from "react";
import "./Item.css";
import UpdateItem from "../../UpdateItem/UpdateItem";
const Item = ({ item }) => {
   const [stalk, setStalk] = useState({
      isStalkInActive: false,
      isStalkOutActive: false,
   });
   const [ isEditItemActive ,setIsEditItemActive] = useState(false);

   const toggleStalkIn = () => {
      console.log("log");
      if (stalk.isStalkInActive) {
         setStalk({ ...stalk, isStalkInActive: false });
      } else {
         setStalk({ ...stalk, isStalkInActive: true });
      }
   };

   const toggleStalkOut = () => {
      console.log("log");
      if (stalk.isStalkOutActive) {
         setStalk({ ...stalk, isStalkOutActive: false });
      } else {
         setStalk({ ...stalk, isStalkOutActive: true });
      }
   };

   return (
      <div className="item">
         <div className="item-img">
            <img src='' alt="" style={{ width: "400px", height: "300px" }} />
         </div>
         <div className="item-id">
            <span>{`Id : ${item.Id}`}</span>
         </div>
         <div className="item-count">
            <button
               className="reduce-count count-btn"
               onClick={() => toggleStalkOut()}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M19.5 12h-15"
                  />
               </svg>
            </button>
            <span>{`Count : ${item.Count}`}</span>
            <button
               className="increase-count count-btn"
               onClick={() => toggleStalkIn()}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M12 4.5v15m7.5-7.5h-15"
                  />
               </svg>
            </button>
         </div>
         <div className="item-name">
            <span>{` ${item.Name}`}</span>
         </div>
         <div className="item-domain">
            <span>{`Domain : ${item.Domain}`}</span>
         </div>
         <div className="item-type">
            <span>{`Type : ${item.Type}`}</span>
         </div>
         <div className="item-edit">
            <button className="item-edit-btn" onClick={()=> setIsEditItemActive(true)}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
               </svg>
               <span>Edit</span>
            </button>
         </div>

         {/* Stalk in */}
         <div
            className="stalk-in-out-whole"
            style={{ display: stalk.isStalkInActive ? "block" : "none" }}
         >
            <div className="stalk-in-out stalk-in">
               <div className="stalk-in-out-header-div">
                  <div className="stalk-in-out-symbol">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M12 4.5v15m7.5-7.5h-15"
                        />
                     </svg>
                  </div>
                  <div className="stalk-in-heading">Stalk In</div>
                  <button
                     className="stalk-in-out-close-btn stalk-in-close"
                     onClick={() => toggleStalkIn()}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               </div>
               <div className="stalk-in-out-id-and-count">
                  <div className="stalk-in-out-id">{`Id : ${item.Id}`}</div>
                  <div className="stalk-in-out-count">{`Count : ${item.Count}`}</div>
               </div>
               <div className="stalk-in-out-name">{item.Name}</div>
               <input
                  type="text"
                  placeholder="Enter No."
                  className="stalk-in-out-input stalk-in-input"
               />
               <button className="stalk-in-out-save-btn stalk-in-save-btn">
                  Save
               </button>
            </div>
         </div>

         {/* Stalk out */}
         <div
            className="stalk-in-out-whole"
            style={{ display: stalk.isStalkOutActive ? "block" : "none" }}
         >
            <div
               className="stalk-in-out stalk-out"
               
            >
               <div className="stalk-in-out-header-div">
                  <div className="stalk-in-out-symbol">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M19.5 12h-15"
                        />
                     </svg>
                  </div>
                  <div className="stalk-out-heading">Stalk Out</div>
                  <button
                     className="stalk-in-out-close-btn stalk-out-close"
                     onClick={() => toggleStalkOut()}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               </div>
               <div className="stalk-in-out-id-and-count">
                  <div className="stalk-in-out-id">{`Id : ${item.Id}`}</div>
                  <div className="stalk-in-out-count">{`Count : ${item.Count}`}</div>
               </div>
               <div className="stalk-in-out-name">{item.Name}</div>
               <input
                  type="text"
                  placeholder="Enter No."
                  className="stalk-in-out-input stalk-out-input"
               />
               <button className="stalk-in-out-save-btn stalk-out-save-btn">
                  Save
               </button>
            </div>
         </div>


         {/* Edit Item */}

         {isEditItemActive && 
            <UpdateItem item={item} toggleItemEdit = {setIsEditItemActive}/>
         }
      </div>
   );
};

export default Item;
