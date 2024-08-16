export default {
  '**/*.(ts|tsx)': (filenames) => [
    'tsc -b',
    `eslint --max-warnings=0 --fix ${filenames.join(' ')}`,
  ],
  '**/*.(ts|tsx|js|json|md)': `prettier --write`,
};
