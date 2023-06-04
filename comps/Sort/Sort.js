"use client";
import "./Sort.css";
import { useState } from "react";
const Sort = () => {
   const [sortMenus, setSortMenus] = useState({
      Type: "none",
      Domain: "none",
      SkinType: "none",
      Gender: "none",
      AgeGroup: "none",
   });
   const handleClick = (item) => {
      if (sortMenus[item] === "none") {
         setSortMenus({ ...sortMenus, [item]: "block" });
      } else {
         setSortMenus({ ...sortMenus, [item]: "none" });
      }
   };

   return (
      <div className="sort">
         {/* All */}
         <div className="all dropdown-div">
            <div className="visible">
               <span>All</span>
            </div>
         </div>

         {/* Type */}
         <div className="type dropdown-div">
            {/* Visible div */}
            <div className="visible" onClick={() => handleClick("Type")}>
               <span>Type</span>
               <div className="arrow-div">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2.5}
                     stroke="#4e4e4e"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </div>
            </div>

            {/* Hidden div */}
            <div
               className="checkbox-div type-checkboxes"
               style={{ display: `${sortMenus.Type}` }}
            >
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Face wash
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Body Lotion
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Body Scrub
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Face scrub
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Hair oil
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Hair mask
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Face serum
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Soap
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Talcum powder
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
            </div>
         </div>

         {/* Domain */}
         <div className="domain dropdown-div">
            {/* Visible div */}
            <div className="visible" onClick={() => handleClick("Domain")}>
               <span>Domain</span>
               <div className="arrow-div">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2.5}
                     stroke="#4e4e4e"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </div>
            </div>
            {/* Hidden div */}
            <div
               className="checkbox-div type-checkboxes"
               style={{ display: `${sortMenus.Domain}` }}
            >
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Skincare
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Haircare
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Facecare
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Bodycare
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Personal Wellness
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
            </div>
         </div>

         {/* Skin Type */}
         <div className="skin-type dropdown-div">
            {/* Visible div */}
            <div className="visible" onClick={() => handleClick("SkinType")}>
               <span>Skin Type</span>
               <div className="arrow-div">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2.5}
                     stroke="#4e4e4e"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </div>
            </div>

            {/* Hidden div */}
            <div
               className="checkbox-div type-checkboxes"
               style={{ display: `${sortMenus.SkinType}` }}
            >
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Dry skin
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Oily skin
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Sensitive skin
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     All skin types
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
            </div>
         </div>

         {/* Gender */}
         <div className="gender dropdown-div">
            {/* Visible div */}
            <div className="visible" onClick={() => handleClick("Gender")}>
               <span>Gender</span>
               <div className="arrow-div">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2.5}
                     stroke="#4e4e4e"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </div>
            </div>
            {/* Hidden div */}
            <div
               className="checkbox-div type-checkboxes"
               style={{ display: `${sortMenus.Gender}` }}
            >
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Male
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Female
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     Unisex
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               
            </div>
         </div>

         {/* Age Group */}
         <div className="age-group dropdown-div">
           {/* Visible div */}
           <div className="visible" onClick={() => handleClick("AgeGroup")}>
               <span>Age Group</span>
               <div className="arrow-div">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2.5}
                     stroke="#4e4e4e"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </div>
            </div>
            {/* Hidden div */}
            <div
               className="checkbox-div type-checkboxes"
               style={{ display: `${sortMenus.AgeGroup}` }}
            >
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     2-5
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     5-15
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     15-18
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     18-55
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     55-65
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     65-75
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               <div className="check-group">
                  <label htmlFor="faceWash" className="sort-label">
                     75+
                  </label>
                  <input type="checkbox" className="sort-checkbox" />
               </div>
               
            </div>

            
         </div>
         {/* Type dropdown menu */}
         {/* <div className="type-dropdown dropdown">
            <div className="select">
                <span className="selected">Type</span>
                <div className="caret"></div>
            </div>
            <ul className="menu">
                <li>Framer</li>
                <li>Sketch</li>
                <li>Invision Studio</li>
                <li className='active'></li>
                <li>Adobe XD</li>
            </ul>
        </div> */}

         {/* Domain dropdown menu */}
         {/* <div className="type-dropdown dropdown">
            <div className="select">
                <span className="selected">Type</span>
                <div className="caret"></div>
            </div>
            <ul className="menu">
                <li>Framer</li>
                <li>Sketch</li>
                <li>Invision Studio</li>
                <li className='active'></li>
                <li>Adobe XD</li>
            </ul>
        </div> */}
         <div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
               />
            </svg>
         </div>
      </div>
   );
};

export default Sort;
