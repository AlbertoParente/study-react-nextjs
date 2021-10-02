import Link from 'next/link'
import styles from '../styles/Navigate.module.css'

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
