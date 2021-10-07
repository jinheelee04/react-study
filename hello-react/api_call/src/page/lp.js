import React, { Component } from "react";
import ItemCard from "./itemcard";

// class Listpage extends Component {
//   state = {};
//   render() {
//     const { Itemcard } = this.props;
//     return (
//       <ul className="list__itemview">
//         {Itemcard &&
//           Itemcard.map((itemdata) => {
//             return (
//               <ItemCard
//                 convertedFile= { 'data:image/gif;base64,' + itemdata.convertedFile}
//                 renameFileNm= { itemdata.renameFileNm}
//                 originalFileNm=  { itemdata.originalFileNm}
//                 base64Data= {itemdata.base64Data}
//               />
//             );
//           })}
//       </ul>
//     );
//   }
// }

class Listpage extends Component {
  state = {};
  render() {
    const { Itemcard } = this.props;
    return (
      <ul className="list__itemview">
            {/* return ( */}
              <ItemCard
                  convertedFile= {  Itemcard}
                // renameFileNm= { Itemcard.renameFileNm}
                // originalFileNm=  { Itemcard.originalFileNm}
                // base64Data= {Itemcard.base64Data}
              />
            );

      </ul>
    );
  }
}
export default Listpage;