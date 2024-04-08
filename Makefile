REACT_CODE_DIRS=components layouts pages


# Install dependencies
install-requirements:
	npm install

# Run Prettier
format:
	npx prettier --write "src/**/*.{js,jsx,css,scss}"

# Run ESLint
lint:
	npx eslint "src/**/*.{js,jsx}"

# Run Stylelint
lint-css:
	npx stylelint "src/**/*.{css,scss}"

# Run all linters and formatters
lint-all: format lint lint-css


# Run react app in dev
make-run:
	npm run dev