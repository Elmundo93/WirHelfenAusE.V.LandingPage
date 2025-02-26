module.exports = {
    extends: ["next/core-web-vitals", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ Fixes the "React must be in scope" error
      "react/jsx-uses-react": "off"
    }
  };