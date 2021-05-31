import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {  // 사용할 변수 선언
    isLoading: true,  // 로딩여부
    movies: [],  // 보여줄 영화 정보를 담는 배열
  };
  getMovies = async () => {  // 영화 리스트를 호출하는 함수
    const {
      data: {
        data: {
          movies
        },
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({ isLoading: false, movies });  // state값 변경 (data를 다 불러오면 loading 완료 표시)
  }
  componentDidMount() {
    this.getMovies();  // 함수호출
  }
  render() {
    const { isLoading } = this.state; // state에서 isLoading 값 추출
    return <div>{ isLoading ? '로딩중...!' : '로딩 끝' }</div>;  // isLoading === true ? '로딩중'
  }
}

export default App;