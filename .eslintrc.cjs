// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  } /* Specifies how the syntax is parsed */,
  parser:
    'vue-eslint-parser' /** Syntax parsing configuration with lower priority than parse */,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  } /* Inherit existing rules */,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  Close the rule
   * "warn" 或 1   ==>  Open rules as warnings (does not affect code execution)
   * "error" 或 2  ==>  Rule as an error (code cannot be executed, interface error reports)
   */ rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // Requires let or const instead of var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // Multiple blank rows are not allowed
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // Spare multiple lines are prohibited
    'no-useless-escape': 'off', // Unnecessary escape characters are prohibited // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // It is forbidden to define unused variables
    '@typescript-eslint/prefer-ts-expect-error': 'error', // The use of @ts-ignore is prohibited
    '@typescript-eslint/no-explicit-any': 'off', // The use of the any type is prohibited
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // The use of custom TypeScript modules and namespaces is prohibited
    '@typescript-eslint/semi': 'off', // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // A word that requires the component name to always be a "-" link
    'vue/script-setup-uses-vars': 'error', // Prevents variables used > < script setup <template>from being marked as unused
    'vue/no-mutating-props': 'off', // Changes to component prop are not allowed
    'vue/attribute-hyphenation': 'off' // Enforce property naming styles for custom components in templates
  }
}
