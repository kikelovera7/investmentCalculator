import styles from './Container.module.css'

export default function Container(props){
    return (

        <div className={styles.form}>
            {props.children}
        </div>
    )
}