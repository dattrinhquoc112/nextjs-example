
import { FC, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { faBan, faCheckCircle, faExclamationCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './index.style';
import { I18N_SCREEN1, I18N_SCREEN1_NS } from '../screen1/index.i18n';

const latestVersionState = {
    idle: "idle", //Before the first run only
    running: "running", //Running pipeline or pipleline step
    completed: "completed", //Completed pipeline or pipleline step
    failed: "failed", //Failed pipeline or pipleline step
    cancelled: "cancelled", //Cancelled pipeline or pipleline step
}
interface IProps { }
const Content: FC<IProps> = props => {
    const styles = useStyles()
    const { t } = useTranslation()
    const [number, setNumber] = useState(0)

    function createIconStatus(model: any) {
        let statusIcon: any = <></>
        if (model.latestVersionState === latestVersionState.idle) {
            statusIcon = <FontAwesomeIcon style={{ float: "right" }} icon={faCheckCircle} size="2x" color="blue" />
        }
        if (model.latestVersionState === latestVersionState.running) {
            statusIcon = <FontAwesomeIcon style={{ float: "right" }} icon={faSync} size="2x" color="blue" />
        }
        if (model.latestVersionState === latestVersionState.completed) {
            statusIcon = <FontAwesomeIcon style={{ float: "right" }} icon={faCheckCircle} size="2x" color="green" />
        }
        if (model.latestVersionState === latestVersionState.failed) {
            statusIcon = <FontAwesomeIcon style={{ float: "right" }} icon={faExclamationCircle} size="2x" color="red" />
        }
        if (model.latestVersionState === latestVersionState.cancelled) {
            statusIcon = <FontAwesomeIcon style={{ float: "right" }} icon={faBan} size="2x" color="grey" />
        }
        return statusIcon
    }

    function createCardLayout() {
        let cardLayout = (
            <Card className={styles.card} onClick={() => {
                // window.location.href = MainScreenPath.screen3
                // history.push({
                //     pathname: MainScreenPath.screen3,
                //     search: `model=${model.id}`
                // })
            }}>
                <Card.Body>
                    <Row>
                        <h5 style={{ fontSize: "16pt" }}>test</h5>
                        <Col style={{ justifyItems: "left" }}>
                            <div style={{ width: "100%" }}>
                                {createIconStatus({ latestVersionState: "completed" })}
                            </div>
                        </Col>
                        <div>
                            <h5>Dataset name</h5>
                            <h5>Ai package name</h5>
                            <h5>{t(I18N_SCREEN1_NS + ':' + I18N_SCREEN1.number_of_model)}：2</h5>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        )
        return cardLayout
    }

    return (
        <div className={styles.content}>
            {createCardLayout()}
            <Button onClick={() => {
                let newNumber = number + 1
                setNumber(newNumber)
            }} >
                {number}
            </Button>
        </div>
    )
}

export default Content;