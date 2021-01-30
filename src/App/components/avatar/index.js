import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Avatar extends PureComponent {
    render() {
        const {avatarUrl, name} = this.props;
        return [
		    <div className="avatar-block">
        		<img key="image" src={avatarUrl} alt={name} className="avatar"/>
        	</div>,
            <h4 key="username" className="text-secondary">{name}</h4>
        ];
    }
}

Avatar.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}