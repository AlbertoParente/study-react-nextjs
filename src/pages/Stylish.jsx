import stylish from '../styles/Stylish.module.css' 
import Link from 'next/link'

export default function Stylish() {
    return (
        <div className={stylish.purple}>
            <Link href="/">
                Previous
            </Link>
            <h1>Style using CSS modules</h1>
        </div>
    )
}
