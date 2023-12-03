import styles from './Sec1.module.css'

function Sec1() {
    
  return (
    <div className={styles.Sec1}>
        <div className={styles.Sec1_menu}>
            <img src='./iwopLogo.png' alt='iwopLogo' className={styles.Sec1_menu_logo}/>
            <div className={styles.Sec1_menu_menu}>
                <div className={styles.Sec1_menu_menu_item}>동아리 소개</div>
                <div className={styles.Sec1_menu_menu_item}>지원하기</div>
            </div>
        </div>
        <div className={styles.Sec1_main}>
            <div className={styles.Sec1_main_main}>
                <div className={styles.Sec1_main_title}>선린인터넷고등학교 웹 개발 전문 동아리</div>
                <div className={styles.Sec1_main_subtitle}><span>I</span>NTERNET <span>W</span>ORLD <span>O</span>PERATION <span>P</span>EOPLE</div>
                <div className={styles.Sec1_main_button}></div>
            </div>
        </div>
    </div>
  );
}

export default Sec1;