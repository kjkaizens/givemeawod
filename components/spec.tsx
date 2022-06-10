import {useState} from 'react';
import styles from "../styles/Home.module.css"


function Spec() {
    const [selected,setSelected] = useState<boolean>(true)
    const toggle = () => setSelected((oldValue) => !oldValue)

    return(
        <div id='wrapper' className={styles.specsDropDown}>
                    <div >
                        <div className={styles.specBar} onClick={toggle}>
                            <div className={styles.specsTitle} >Specs</div>
                            <span className={styles.specsChild} >{selected ? '∨ ':'∧'}</span>
                        </div>
                    
                   
                        <div className={styles.specDescription}>
                            {selected ? '': 
                                <div className={styles.dropDown}>
                                    <div id='intensity'>
                                        <div className={styles.specDescription}>Intensity</div>
                                        <div id = 'level' className={styles.levels}> 
                                            <button className={styles.pill}>Easy</button>
                                            <button className={styles.pill}>Medium</button>
                                            <button className={styles.pill}>Hard</button>
                                        </div>
                                    </div>
                                    <div id='duration'>
                                        <div className={styles.specDescription}>Duration</div>
                                        <div id = 'level' className={styles.levels}>
                                            <button className={styles.pill}>Short</button>
                                            <button className={styles.pill}>Medium</button>
                                            <button className={styles.pill}>Long</button>
                                        </div>
                                    </div>
                                    <div id='location'>
                                        <div className={styles.specDescription}>Location</div>
                                        <div id = 'level' className={styles.levels}>
                                            <button className={styles.pill}>Gym</button>
                                            <button className={styles.pill}>Home</button>
                                            <button className={styles.pill}>Outdoors</button>
                                        </div>
                                    </div>
                                </div>}
                        </div>

                    </div>         
        </div>
    )
}

export default Spec;