
import { FC } from 'react'
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { I18N_SCREEN1, I18N_SCREEN1_NS } from '../screen1/index.i18n';
import useStyles from './index.style';

interface IProps {
}
const Header: FC<IProps> = props => {
    const styles = useStyles()
    const { t } = useTranslation()

    return (
        <div className={styles.header}>
            <Row>
                <h3>{t(I18N_SCREEN1_NS + ':' + I18N_SCREEN1.created_ai_model)}</h3>
                {/* <a href={"/screen2"}>{`(${t(I18N_SCREEN1_NS + ':' + I18N_SCREEN1.create_new)})`}</a> */}
            </Row>
        </div>
    )
}

export default Header;