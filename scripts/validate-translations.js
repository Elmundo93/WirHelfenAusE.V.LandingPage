#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const locales = ['de', 'en'];
const modules = [
  'common',
  'navigation',
  'home',
  'about',
  'registration',
  'communication',
  'contact',
  'statutes'
];

function validateTranslations() {
  console.log('🔍 Validating translation files...\n');
  
  let hasErrors = false;
  
  // Check if all locale directories exist
  for (const locale of locales) {
    const localePath = path.join(__dirname, '..', 'i18n', 'messages', locale);
    
    if (!fs.existsSync(localePath)) {
      console.error(`❌ Missing locale directory: ${locale}`);
      hasErrors = true;
      continue;
    }
    
    console.log(`📁 Checking locale: ${locale}`);
    
    // Check if all module files exist for this locale
    for (const module of modules) {
      const modulePath = path.join(localePath, `${module}.json`);
      
      if (!fs.existsSync(modulePath)) {
        console.error(`  ❌ Missing module: ${module}.json`);
        hasErrors = true;
        continue;
      }
      
      try {
        const content = fs.readFileSync(modulePath, 'utf8');
        const translations = JSON.parse(content);
        
        if (Object.keys(translations).length === 0) {
          console.warn(`  ⚠️  Empty module: ${module}.json`);
        } else {
          console.log(`  ✅ ${module}.json (${Object.keys(translations).length} keys)`);
        }
      } catch (error) {
        console.error(`  ❌ Invalid JSON in ${module}.json:`, error.message);
        hasErrors = true;
      }
    }
    
    console.log('');
  }
  
  // Compare translation keys between locales
  console.log('🔍 Comparing translation keys between locales...\n');
  
  const referenceLocale = 'de';
  const referenceKeys = getTranslationKeys(referenceLocale);
  
  for (const locale of locales) {
    if (locale === referenceLocale) continue;
    
    const currentKeys = getTranslationKeys(locale);
    const missingKeys = referenceKeys.filter(key => !currentKeys.includes(key));
    const extraKeys = currentKeys.filter(key => !referenceKeys.includes(key));
    
    if (missingKeys.length > 0) {
      console.warn(`⚠️  ${locale} missing keys:`, missingKeys);
      hasErrors = true;
    }
    
    if (extraKeys.length > 0) {
      console.warn(`⚠️  ${locale} extra keys:`, extraKeys);
    }
  }
  
  if (hasErrors) {
    console.log('\n❌ Translation validation failed!');
    process.exit(1);
  } else {
    console.log('\n✅ All translations are valid!');
  }
}

function getTranslationKeys(locale) {
  const keys = [];
  
  for (const module of modules) {
    const modulePath = path.join(__dirname, '..', 'i18n', 'messages', locale, `${module}.json`);
    
    if (fs.existsSync(modulePath)) {
      try {
        const content = fs.readFileSync(modulePath, 'utf8');
        const translations = JSON.parse(content);
        
        function extractKeys(obj, prefix = '') {
          for (const [key, value] of Object.entries(obj)) {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            
            if (typeof value === 'object' && value !== null) {
              extractKeys(value, fullKey);
            } else {
              keys.push(fullKey);
            }
          }
        }
        
        extractKeys(translations);
      } catch (error) {
        console.error(`Error reading ${modulePath}:`, error.message);
      }
    }
  }
  
  return keys;
}

if (require.main === module) {
  validateTranslations();
}

module.exports = { validateTranslations }; 