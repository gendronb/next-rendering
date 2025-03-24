import { NextIntlClientProvider, hasLocale } from 'next-intl' 
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import { Provider } from '@/app/components/ui/provider'

export default async function RootLayout({ children, params }) {
  const {locale} = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}