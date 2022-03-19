const Counter = () => {
	return (
		<div className="jumbotron">
			<h1 className="counter">0</h1>
			<button className="btn btn-primary">Dec</button>
			<button className="btn btn-primary">Inc</button>
			<button className="btn btn-primary">Rnd</button>
			<input id="max" className="input mt-2" placeholder="Max numb in random" type="number" min="0" required />
		</div>
	);
};

export default Counter;
