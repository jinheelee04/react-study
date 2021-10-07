import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ItemCard({ convertedFile, renameFileNm, originalFileNm}) {
    return (
      <li className="component component--item_card">
        {/* {convertedFile}  */}
        <img  src= {convertedFile} alt=""  />
       <LazyLoadImage effect="blur" src= {convertedFile} className="image--itemcard" alt="" />
       
        {/* <p>
            renameFileNm : <span className="text--brand">{renameFileNm}</span>
        </p>
        <p>originalFileNm : {originalFileNm}</p> */}
      </li>
    );        
  }

  export default ItemCard;