import sty from "./styles.module.css"


export let Container = ({ children } ) => {

    return <div className={sty.container}>
        {children}
    </div>
}