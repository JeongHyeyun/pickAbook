import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {  // 사용할 변수 선언
    isLoading: true,  // 로딩여부
    movies: [],  // 보여줄 영화 정보를 담는 배열
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, moveis: []});  // state값 변경
    }, 5000); // 5초 뒤
  }
  render() {
    const { isLoading } = this.state; // state에서 isLoading 값 추출
    return <div>{ isLoading ? '로딩중...!' : '로딩 끝' }</div>;  // isLoading === true ? '로딩중'
  }
}

export default App;