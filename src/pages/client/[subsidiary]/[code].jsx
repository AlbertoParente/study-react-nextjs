import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientForCode() {
    const router = useRouter()

    return (
        <Layout title="Dynamic Navigation">
            <div>Code = {router.query.code}</div>
            <div>Subsidiary = {router.query.subsidiary}</div>
        </Layout>
    )
}
