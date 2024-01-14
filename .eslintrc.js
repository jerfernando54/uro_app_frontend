// module.exports = {
//   root: true,
//   extends: '@react-native',
//   rules: {
//     'prettier/prettier': 0,
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': 'off',
//   },
// };

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'semi': 0,
    'no-console': 0,
    'no-alert': 'off',
    'prettier/prettier': 0,
    'o-trailing-spaces': 0,
    'react/self-closing-comp': 0,
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
