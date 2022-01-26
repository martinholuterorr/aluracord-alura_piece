function GlobalStyle() {
    return (
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
                font-family:'Open Sans'; sans-serif;
            }
            
            /* App fit Height */ 
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex: 1;
            }
            #__next > * {
                flex: 1;
            }
            /* ./App fit Height */
        `}</style>
    )
}

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}