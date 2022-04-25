import React from "react"
import {Helmet} from "react-helmet";

const Layout = ({metaTitle, metaDescription, className, children}) => {
    return (
        <>
            <Helmet>
                {metaTitle && (
                    <title>{metaTitle}</title>
                )}
                {metaDescription && (
                    <meta name="description" content={metaDescription}/>
                )}
            </Helmet>
            <main className={className}>
                {children}
            </main>
        </>

    )
}

export default Layout