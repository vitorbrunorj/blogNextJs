module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // Desativa a verificação de propTypes no React
    'react/react-in-jsx-scope': 'off', // Permite o uso de JSX sem a importação de React
    '@typescript-eslint/space-before-function-paren': 'off', // Desativa a regra de espaço antes do parêntese em funções
    '@typescript-eslint/explicit-function-return-type': 'off', // Desativa a exigência de tipo de retorno explícito em funções
    '@typescript-eslint/indent': 'off',
    // Desativa a regra de indentação do ESLint
    'react/jsx-uses-react': 'off', // Desativa a regra que verifica se React é usado em arquivos JSX
    'react/jsx-uses-vars': 'off' // Desativa a regra que verifica se todas as variáveis usadas em JSX foram definidas
  },

  overrides: [
    {
      files: ['.eslintrc.js'],
      parserOptions: {
        project: null
      }
    },
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]
}
