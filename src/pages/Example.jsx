import Layout from "../component/Layout"
import Header from "../components/Header";

export default function Example() {
    return (
        <Layout title="Using Component">
            <Header title="Alberto Parente" />
            <Header title="Next.js & React" />
        </Layout>
    )
}
