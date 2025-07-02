import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundImage from "@/components/layout/BackgroundImage";
import LoadingScreenWrapper from "@/components/layout/LoadingScreenWrapper";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params:  { locale: string };
}) {
  const { locale } = await params;
  
  console.log('=== LAYOUT DEBUG START ===');
  console.log('Layout - Received locale:', locale);
  console.log('Layout - Valid locales:', locales);
  console.log('Layout - Is locale valid:', locales.includes(locale as Locale));
  console.log('Layout - Node env:', process.env.NODE_ENV);
  console.log('=== LAYOUT DEBUG END ===');
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    console.error(`❌ Invalid locale detected: ${locale}`);
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  console.log('=== GETTING MESSAGES ===');
  const messages = await getMessages({ locale });
  console.log('=== MESSAGES RECEIVED ===');
  
  // Enhanced debugging for messages
  console.log('=== MESSAGES VALIDATION ===');
  console.log('Layout - Messages loaded for locale:', locale);
  console.log('Layout - Messages object type:', typeof messages);
  console.log('Layout - Messages is null/undefined:', messages == null);
  console.log('Layout - Messages keys count:', messages ? Object.keys(messages).length : 'N/A');
  console.log('Layout - Available message keys:', messages ? Object.keys(messages) : 'N/A');
  
  // Check for specific namespaces
  if (messages) {
    const expectedNamespaces = ['Main', 'About', 'Header', 'Index', 'Satzung', 'Anmeldung', 'Communication', 'ContactUs'];
    expectedNamespaces.forEach(namespace => {
      const hasNamespace = messages.hasOwnProperty(namespace);
      console.log(`Layout - ${namespace} namespace available:`, hasNamespace);
      if (hasNamespace && messages[namespace]) {
        const namespaceKeys = Object.keys(messages[namespace]);
        console.log(`Layout - ${namespace} has ${namespaceKeys.length} keys:`, namespaceKeys.slice(0, 3));
      }
    });
    
    // Sample translation check
    if (messages.Main?.hero?.mainTitle) {
      console.log('Layout - Sample Main.hero.mainTitle:', messages.Main.hero.mainTitle);
    } else {
      console.log('Layout - Main.hero.mainTitle NOT FOUND');
    }
  }
  
  console.log('=== MESSAGES VALIDATION END ===');

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LoadingScreenWrapper>
        <BackgroundImage />
        <Header key={`header-${locale}`} />
        <main key={`main-${locale}`} className="z-10 relative">{children}</main>
        <Footer key={`footer-${locale}`} />
      </LoadingScreenWrapper>
    </NextIntlClientProvider>
  );
} 