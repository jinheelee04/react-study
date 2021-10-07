import React, {  Component } from "react";
import Listpage from "./page/lp";
import axios from 'axios';

class App extends Component {
  state = { 
    loading: false,
    // intrcnId : 0 ,
    // content : '' ,
    // ItemList: [],
    Item: ''
 };
 loadItem = async () => {
  axios
    // .get('http://villa-back.hubilon.kr/avill/building/introduction/CHARGE')
    // .get('http://localhost:19073/avill/building/introduction/MOVE')
    .get('http://localhost:19073/avill/attachment/NOTICE/450')
    .then(({ data }) => {
      console.log(data);
      this.setState({ 
        loading: true,
        // intrcnId: data.body.intrcnId,
        // content : data.body.content,
        // ItemList: data.body.files,
        Item: data
      });
    })
    .catch(e => {  // API 호출이 실패한 경우
      console.error(e);  // 에러표시
      this.setState({  
        loading: false
      });
    });
  };
  componentDidMount() {
    this.loadItem();  // loadItem 호출
  }
  // APP.js 컴포넌트의 최종 보여지는 render값 정의
  render() {
    // const { intrcnId } = this.state;
    // const { content  } = this.state;
    // const { ItemList } = this.state;
    const {  Item} = this.state;
    console.log(Item)
    return (
      <div>
        {/* <Listpage Itemcard={ItemList} /> */}
        <Listpage Itemcard={Item} />
      </div>
    );
  }
}
export default App;
