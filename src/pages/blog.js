import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'
export const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>this is our blog page</h1>
                <p className={styles.text}>
                Two teams of celebrities and civilians face off in
                 a fast paced word game with a top prize of $10000 
                 on 25 Words Or Less Official Website…
                </p>
            </div>
        </Layout>
    )
}


export default blog