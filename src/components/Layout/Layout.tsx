import React, {FC} from "react"
import {Helmet} from "react-helmet";

type LayoutProps = {
    metaTitle?:string,
    metaDescription?:string,
    className?:string,
    children:React.ReactNode,
}

const Layout: FC<LayoutProps> = ({metaTitle, metaDescription, className, children}) => {
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