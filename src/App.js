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
      term: 'awesome'
    }

    this.debounceSearch = debounce(500, this.searchRepos);
  }

  componentDidMount() {
    this.searchRepos(this.state.term);
  }

  changeSearch = term => {
    this.setState({ term }, () => {
      this.debounceSearch(this.state.term);
    });
  }

  searchRepos = term => {
    console.log(term);
    axios.get(`https://api.github.com/search/repositories?q=/${term}&sort=stars&order=desc`).then((response) => {
      const data = response.data.items
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className='App'>
        <RepoSearch onSearchChange={term => this.changeSearch(term)}/>
          <ul className='repoList'>
            {
              this.state.data.map((repo, index) => {
                return (
                  <RepoCard
                    key={'repo-' + index}
                    id={repo.id}
                    name={repo.name}
                    htmlUrl={repo.html_url}
                    description={repo.description}
                    author={repo.owner.login}
                    authorAvatar={repo.owner.avatar_url}
                    authorUrl={repo.owner.html_url}
                    watchersCount={repo.watchers_count}
                  />
                );
              })
            }
          </ul>
      </div>
    );
  }
}

export default App;
