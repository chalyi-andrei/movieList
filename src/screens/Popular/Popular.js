// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import i18next from 'i18next';

import { getPopularMovies, addPopularMovies } from '../../store/modules/popular/popular';
import MovieCard from '../../components/MovieCard/MovieCard';

import './styles.css';

type PropsT = {
  getPopularMovies: typeof getPopularMovies,
  addPopularMovies: typeof addPopularMovies,
  popular: Array<*>,
};

class User extends Component<PropsT> {
  componentDidMount() {
    this.props.getPopularMovies();
  }

  loadMore = () => {
    const { data } = this.props.popular;

    let page = 1;
    if (data.length % 20 !== 0) {
      return;
    }
    page = data.length / 20;
    this.props.addPopularMovies(page + 1);
  };

  renderSpiner = () => (
    <div className="header__spinner-container">
      <div className="header__spinner">
        <RingLoader />
      </div>
    </div>
  );

  render() {
    const { popular } = this.props;

    if (!popular.data.length && popular.isFetching) {
      return this.renderSpiner();
    }

    return (
      <div className="container">
        <div className="content">
          {popular.data.length && popular.data.map(m => <MovieCard key={m.id} {...m} />)}

          {popular.data.length && popular.isFetching ? <RingLoader /> : null}
          <div className="btn" onClick={this.loadMore}>
            {i18next.t('popular.loadMore')}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(({ popular }) => ({ popular }), {
  getPopularMovies,
  addPopularMovies,
})(User));
