import React, { useState } from 'react';
import Buttons from './SectionButtons/Buttons';
import Correct from './Sections/Correct'
import Translator from './Sections/Translator';
import Chat from './Sections/Chat';
import styles from '../Styles/Home.module.css';


const Home = () => {
    const [section, setSections] = useState('');
    console.log(section)
    return ( 
        <main>
            <header>
            <h1 className={styles.title}>Office AI</h1>
            <div className={styles.about}>
            <p>With Office AI, you will have the option to correct and edit text or simply ask frequently asked questions in one place.</p>
            </div>
            </header>

            <section>
                <Buttons setSections={setSections} />
            </section>

            <section>
                {
                    section === 'Correct' ?
                    ( <Correct /> ) :
                    section === 'Translator' ? 
                    ( <Translator /> ) :
                    section === 'Chat' ? 
                    ( <Chat /> ) :
                    ( <p className={styles.choose}>Choose an option</p> )
                }
            </section>

        </main>
     );
}
 
export default Home;