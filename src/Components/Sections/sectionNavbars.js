import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import React from 'react';
import { Button } from '@material-ui/core';
export default function sectionNavbars() {
	return (
		<div>
			<header
				brand="Navbar With Profile"
				rightLinks={
					<List>
						<ListItem>
							<Button>لیست سفارشات</Button>
						</ListItem>
					</List>
				}
			/>
		</div>
	);
}
