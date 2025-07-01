import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundImage from "@/components/layout/BackgroundImage";
import LoadingScreenWrapper from "@/components/layout/LoadingScreenWrapper";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  console.log('=== LAYOUT DEBUG ===');
  console.log('Layout - Received locale:', locale);
  console.log('Layout - Valid locales:', locales);
  console.log('Layout - Is locale valid:', locales.includes(locale as any));
  console.log('=== END LAYOUT DEBUG ===');
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });
  
  // Debug the messages loading
  console.log('=== MESSAGES LOADING DEBUG ===');
  console.log('Layout - getMessages called with locale:', locale);
  console.log('Layout - Messages result:', messages ? 'Loaded' : 'Failed to load');
  console.log('=== END MESSAGES LOADING DEBUG ===');
  
  console.log('=== MESSAGES DEBUG ===');
  console.log('Layout - Messages loaded for locale:', locale);
  console.log('Layout - Available message keys:', Object.keys(messages));
  console.log('Layout - Header messages available:', !!messages.Header);
  console.log('Layout - Header menuItems available:', !!messages.Header?.menuItems);
  console.log('Layout - Sample translation:', messages.Header?.menuItems?.about);
  console.log('Layout - Messages object type:', typeof messages);
  console.log('Layout - Messages stringified (first 500 chars):', JSON.stringify(messages).substring(0, 500));
  console.log('=== END MESSAGES DEBUG ===');

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