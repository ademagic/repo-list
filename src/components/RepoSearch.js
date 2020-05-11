import React from 'react';
import './RepoSearch.scss'

class RepoSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className='repoSearch'>
                <label htmlFor='repoSearch' className='repoSearch__label'>
                    Search GitHub Repositories:
                </label>
                <input
                    id='repoSearch'
                    placeholder='e.g. Octocat'
                    className='repoSearch__input'
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchChange(term);
    }
}

export default RepoSearch;
