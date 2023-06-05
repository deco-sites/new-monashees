import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      <link rel="preconnect" href={asset("https://fonts.googleapis.com")} />
      <link
        rel="preconnect"
        href={asset("https://fonts.gstatic.com")}
        crossOrigin="true"
      />

      <link
        rel="preconnect"
        href={asset("https://fonts.gstatic.com")}
        crossOrigin="true"
      />

      <link
        rel="preload"
        as="style"
        href={asset(
          "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap",
        )}
      />

      <link
        rel="stylesheet"
        media="print"
        // @ts-ignore test
        onLoad="this.onload=null;this.removeAttribute('media');"
        href={asset(
          "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap",
        )}
      />

      <noscript>
        <link
          rel="stylesheet"
          href={asset(
            "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap",
          )}
        />
      </noscript>

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>
  );
}

export default GlobalTags;
