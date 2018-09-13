import * as React from 'react';

import {
	createStyles, Paper, Table,
	TableBody, TableCell,
	TableRow, Theme, withStyles,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

const Weather = (props: any) => {
	const { classes } = props;
	if (props.inputValid === true) {
		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableBody>
						<TableRow>
							<TableCell>Location: </TableCell>
							<TableCell>{props.city + " " + props.country}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Temperature</TableCell>
							<TableCell>{props.temperature}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Humidity</TableCell>
							<TableCell>{props.humidity}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Conditions</TableCell>
							<TableCell>{props.description}
								<img style={{verticalAlign: "middle"}} src={"http://openweathermap.org/img/w/" + props.icon + ".png"} />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		);
	} else {
		return <div>{props.description}</div>;
	}
};

export default withStyles(styles)(Weather);