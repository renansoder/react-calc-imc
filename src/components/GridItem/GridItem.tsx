import { level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
  grid: level
}

export const GridItem = ({ grid }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: grid.color }}>
      <div className={styles.gridIcon}>
        <img src={grid.icon === 'up' ? upImage : downImage} alt='' width='30' />
      </div>
      <div className={styles.gridTitle}>{grid.title}</div>
      {
        grid.yourImc &&
        <div className={styles.yourImc}>Seu IMC é de {grid.yourImc} Kf/m²</div>
      }
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{grid.imc[0]}</strong> e <strong>{grid.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}