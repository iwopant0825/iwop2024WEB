import styles from './Sec2.module.css'

function Sec3() {
  return (
    <div className={styles.Sec2}>
        <div className={styles.Sec2_main}>
          <div className={styles.Sec2_num}>02.</div>
          <div className={styles.Sec2_title}>CURRICURAUM</div>
          <div className={styles.Sec2_text}>
            IWOP에서 개발자 역할군은 웹을 구성하는 3개의 기술, HTML, CSS, JavaScript에 대한 기초 교육을 제공하고 있습니다. 이후에는 최신 웹 개발 기술인 React 라이브러리를 다루며, 동적인 웹 애플리케이션을 구현하는 방법을 배웁니다. 또한 협업을 위해 버전 관리 도구인 Git,Git Flow, GitKraken 등을 배우게 됩니다.<br/><br/> 
            따로 배우고 싶은 기술이 있다면 선배들이 직접 가르쳐주는 멘토링 시스템도 운영하고 있습니다. 이를 통해 동아리원들은 보다 전문적인 기술을 습득하고, 성장할 수 있는 기회를 제공받습니다. 함께 동아리 활동을 통해 뛰어난 개발자와 디자이너로 성장해 나가 보시길 바랍니다.<br/><br/> 
          </div>
        </div>
    </div>
  );
}

export default Sec3;
