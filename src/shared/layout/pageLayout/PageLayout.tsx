import pageLayoutStyles from './PageLayout.module.css'

type PageLayoutProps = {
    children: React.ReactNode
    title: string
}

export function PageLayout({ children, title }: PageLayoutProps) {
    return(
        <div className={pageLayoutStyles.PageLayoutContainer}>
            <div className={pageLayoutStyles.PageContent}>

                <div>
                    <h1 className={pageLayoutStyles.PageTitle}>{title}</h1>
                </div>

                <div>
                    { children }
                </div>

            </div>
        </div>
    )
}