import * as React from 'react';

const Form = (props: any) => (
	<form onSubmit={props.Getweather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;