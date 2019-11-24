import React, { Component } from 'react';

export default class Header extends Component {
	static displayName = Header.name;

	render() {
		return (
			<div>
				<h1>Header</h1>
				<p>TwitJ is a dummy text example</p>
			</div>
		);
	}
}
