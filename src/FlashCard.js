import React, {Component} from 'react';
import styles from './FlashCard.css';

class FlashCard extends Component {
    render(){
        return(
            <div className={styles.flashycard}>This is a flashcard</div>        
        );
    }
}

export default FlashCard;