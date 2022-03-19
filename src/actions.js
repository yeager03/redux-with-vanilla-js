// action creater functions
const incAction = () => ({ type: "INC" }), // {type: "INC"} - this is action
	decAction = () => ({ type: "DEC" }), // {type: "DEC"} - this is action
	rndAction = (value) => ({ type: "RND", payload: value });

export { incAction, decAction, rndAction };
