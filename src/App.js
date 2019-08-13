import React from "react";

function Food({ fav }) {
	return <h3>I love {fav}</h3>;
}

// function Food(props) {
//   return <h3>I love {props.fav}</h3>
// }

function App() {
	return (
		<div>
			<h1>Helo!</h1>
			<Food fav="Kimchi" />
			<Food fav="Ramen" />
			<Food fav="samgiyopsal" />
			<Food fav="chukumi" />
		</div>
	);
}

export default App;
