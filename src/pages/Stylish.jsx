import stylish from '../styles/Stylish.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Stylish() {
    return (
        <Layout title="Modularized CSS example">
            <div className={stylish.purple}>
                <h1>Style using CSS modules</h1>
            </div>
        </Layout>
    )
}
