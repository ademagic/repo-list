import React from 'react';
import axios from 'axios';
import { debounce } from 'throttle-debounce';

import RepoSearch from './components/RepoSearch';
import RepoCard from './components/RepoCard';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }

    this.searchRepos('awesome');
  }

  searchRepos(term) {
    axios.get(`https://api.github.com/search/repositories?q=/${term}&sort=stars&order=desc`).then((response) => {
      const data = response.data.items
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="App">
        <RepoSearch onSearchChange={term => debounce(300, this.searchRepos(term))}/>
        {
          this.state.data.map((repo, index) => {
            return <RepoCard key={'repo-' + index} id={repo.id} name={repo.name} watchersCount={repo.watchers_count} />;
          })
        }
      </div>
    );
  }
}

export default App;
