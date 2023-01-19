import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataApi } from '../../actions/postsActions.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import './Home.scss';

const Home = ({ dispatch, posts, success }) => {

  useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);

  const renderPosts = () => {
    return posts.map((post) => {
      <div>
        <p className='homeViews'>{post.title}</p>
        <p className='homeViews'>{post.body}</p>
      </div>;
    })
  }

  return (
    <div>
    <h2 className='homeViews'>Listado de posts</h2>
      {renderPosts()}
    </div>
  )
}
const stateProps = (state) => ({
    posts: state.posts.posts,
    succes: state.posts.succes,
});
export default connect(stateProps)(Home);