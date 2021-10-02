import Layout from '../components/Layout'

export function getStaticProps() {
    return {
        props: {
            namber: Math.random()
        }
    }
}

export default function Static() {
    return (
        <Layout title="Static Content">
            <div>{props.number}</div>
        </Layout>
    )
}
