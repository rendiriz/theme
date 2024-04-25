import Script from 'next/script';

export function Partytown() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_TRACKING_ID}`}
        strategy="worker"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.PUBLIC_GA_TRACKING_ID}');
          `,
        }}
        strategy="worker"
      />
    </>
  );
}
