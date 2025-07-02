#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('=== I18N SETUP VERIFICATION ===\n');

// Check if translation files exist in the correct location
const appMessagesDir = path.join(process.cwd(), 'app', 'i18n', 'messages');
const expectedLocales = ['de', 'en'];

console.log('📁 Checking translation files in app/i18n/messages/...');

if (!fs.existsSync(appMessagesDir)) {
  console.error('❌ app/i18n/messages/ directory does not exist!');
  process.exit(1);
}

const files = fs.readdirSync(appMessagesDir);
console.log(`✅ Found ${files.length} files in app/i18n/messages/:`, files);

// Check each expected locale
let allLocalesPresent = true;
expectedLocales.forEach(locale => {
  const filePath = path.join(appMessagesDir, `${locale}.json`);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(content);
    console.log(`✅ ${locale}.json: ${stats.size} bytes, ${Object.keys(parsed).length} namespaces`);
  } else {
    console.error(`❌ ${locale}.json missing!`);
    allLocalesPresent = false;
  }
});

// Check for old translation files that should be removed
const oldMessagesDir = path.join(process.cwd(), 'i18n', 'messages');
if (fs.existsSync(oldMessagesDir)) {
  console.warn('⚠️  Old i18n/messages/ directory still exists. Consider removing it.');
}

const publicI18nDir = path.join(process.cwd(), 'public', 'i18n');
if (fs.existsSync(publicI18nDir)) {
  console.warn('⚠️  public/i18n/ directory still exists. Consider removing it.');
}

// Check configuration files
console.log('\n📁 Checking configuration files...');

const configFiles = [
  { path: 'next.config.ts', required: true },
  { path: 'i18n/request.ts', required: true },
  { path: 'middleware.ts', required: true },
  { path: 'lib/i18n.ts', required: true },
  { path: 'lib/i18n-utils.ts', required: true }
];

configFiles.forEach(({ path: filePath, required }) => {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${filePath} exists`);
  } else if (required) {
    console.error(`❌ ${filePath} missing!`);
    allLocalesPresent = false;
  } else {
    console.log(`⚠️  ${filePath} not found (optional)`);
  }
});

// Check next.config.ts for correct plugin configuration
const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
  if (nextConfigContent.includes("createNextIntlPlugin('./i18n/request.ts')")) {
    console.log('✅ next.config.ts has correct next-intl plugin configuration');
  } else {
    console.error('❌ next.config.ts missing correct next-intl plugin configuration!');
    allLocalesPresent = false;
  }
}

// Check i18n/request.ts for correct file path
const requestConfigPath = path.join(process.cwd(), 'i18n', 'request.ts');
if (fs.existsSync(requestConfigPath)) {
  const requestConfigContent = fs.readFileSync(requestConfigPath, 'utf8');
  if (requestConfigContent.includes("'app', 'i18n', 'messages'")) {
    console.log('✅ i18n/request.ts loads from app/i18n/messages/');
  } else {
    console.error('❌ i18n/request.ts not configured to load from app/i18n/messages/!');
    allLocalesPresent = false;
  }
}

// Check middleware.ts for correct locale pattern
const middlewarePath = path.join(process.cwd(), 'middleware.ts');
if (fs.existsSync(middlewarePath)) {
  const middlewareContent = fs.readFileSync(middlewarePath, 'utf8');
  if (middlewareContent.includes("'/(de|en)/:path*'")) {
    console.log('✅ middleware.ts has correct locale pattern (de|en)');
  } else {
    console.error('❌ middleware.ts missing correct locale pattern!');
    allLocalesPresent = false;
  }
}

// Summary
console.log('\n=== VERIFICATION SUMMARY ===');
if (allLocalesPresent) {
  console.log('✅ All checks passed! Your i18n setup is correctly configured.');
  console.log('\n🚀 Next steps:');
  console.log('1. Run: yarn dev (for development testing)');
  console.log('2. Run: yarn build && yarn start (for production testing)');
  console.log('3. Check console logs for successful translation loading');
  console.log('4. Test URLs: /de, /en');
} else {
  console.error('❌ Some checks failed. Please fix the issues above.');
  process.exit(1);
}

console.log('\n=== END VERIFICATION ==='); 