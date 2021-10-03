import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1>{props.title ?? 'Example'}</h1>
                <Link href="/">Previous</Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default function Navigate(props) {
    return (
        <Link href={props.destiny} passHref>
            <div className={styles.navigate} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.text}
            </div>
        </Link>
    )
}
