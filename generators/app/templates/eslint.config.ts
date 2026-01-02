import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, {
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			project: "./tsconfig.json",
			tsconfigRootDir: import.meta.dirname
		},
		globals: {
			// Browser globals
			window: "readonly",
			document: "readonly",
			console: "readonly",
			// Node.js globals
			process: "readonly",
			__dirname: "readonly",
			__filename: "readonly",
			global: "readonly",
			Buffer: "readonly"
		}
	},
	files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
	ignores: ["eslint.config.ts", "dist/**", "node_modules/**"],
	rules: {
		"no-var": "error",
		"prefer-const": "warn"
	}
});
