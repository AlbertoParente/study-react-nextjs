import Link from 'next/link'
import styles from '../styles/Navigate.module.css'

export default function Navigate(props) {
    return (
        <Link href={props.destiny}>
            <div className={styles.navigate}>
                {props.text}
            </div>
        </Link>
    )
}
