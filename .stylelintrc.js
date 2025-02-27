module.exports = {
	defaultSeverity: "error",
	plugins: ["stylelint-prettier"],
	extends: ["stylelint-prettier/recommended", "stylelint-config-recess-order"],
	rules: {
		"property-no-unknown": null
	}
};
