import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import './style.css';

export default class Forks extends PureComponent {
    render() {
        const {forks} = this.props;
        return (
            <ul className="profile-inline">
                {forks.map((fork, index) => {
                    return (
                        <li key={index}>
                            <a href={`https://gist.github.com/${fork.id}`} target="_blank" rel="noreferrer">
                                <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

Forks.propTypes = {
    forks: PropTypes.array.isRequired
}