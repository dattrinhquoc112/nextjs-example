
import { FC } from 'react'
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { I18N_SCREEN2, I18N_SCREEN2_NS } from '../screen2/index.i18n';
import useStyles from './index.style';

interface IProps { }
const Header: FC<IProps> = props => {
    const styles = useStyles()
    const { t } = useTranslation()

    return (
        <div className={styles.header}>
            <Row>
                <h3>{t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.create_new_ai_model)}</h3>
            </Row>
        </div>
    )
}

export default Header;