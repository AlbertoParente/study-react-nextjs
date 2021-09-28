import { useState } from "react"
import Layout from "../components/Layout"

export default function State() {
    const state = useState(0)
    let [number, setNumber] = state[0]

    function inc() {
        setNumber(number + 1)
    }

    return (
        <Layout title="Component With State">
            <div>{number}</div>
            <button onClick={inc}>Inc</button>
        </Layout>
    )
}
