import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

export default function TestLocalePage() {
  const locale = useLocale();
  const params = useParams();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Locale Test Page</h1>
      <div className="space-y-2">
        <p><strong>useLocale() result:</strong> {locale}</p>
        <p><strong>useParams() result:</strong> {JSON.stringify(params)}</p>
        <p><strong>URL pathname:</strong> {typeof window !== 'undefined' ? window.location.pathname : 'Server side'}</p>
      </div>
    </div>
  );
} 