import { useParams } from "react-router";

import { PageLayout } from "../shared/layout/pageLayout/PageLayout";

export function Detail() {    
    const { id } = useParams()


    return (
        <PageLayout title='Detalhes'>
            Detail {id}
        </PageLayout>
    )
}