import { Global, css } from "@emotion/core";
import Head from "next/head";

import Header from "./header";

const Layout = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    html,
                    body {
                        font-family: sans-serif;
                        font-size: 18px;
                    }
                `}
            />
            <Head>
                <title>Eduardo Cruz Front End Developer</title>
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
