export const updateObject = (previousState: object, updatedProperty: object) => {
	return {
		...previousState,
		...updatedProperty
	};
};

