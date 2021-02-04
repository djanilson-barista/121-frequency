module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  overrides: [
    // Overrides let you have different configuration for certain file extensions,
    // folders and specific files.
    {
      files: ['*.md'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
