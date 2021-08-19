
import { FC, useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useStyles from './index.style';
import { I18N_SCREEN2, I18N_SCREEN2_NS } from './index.i18n';
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MainScreenPath } from '../../routes';
import useHttpApi from '../../hooks/use-http-api';
import * as API from '../../context/api-client/backend-api';
import { useUserInfos } from '../../context/redux/redux-store';
import { ICreateModelRequest } from '../../context/api-client/data-models';
import { useContext } from 'react';
import AppContext from '../../context/app-context';
import { useHistory } from 'react-router-dom';

interface IProps { }
const Content: FC<IProps> = props => {
    const context = useContext(AppContext)
    const history = useHistory()
    const styles = useStyles()
    const { t } = useTranslation()
    const [openDialog, setOpenDialog] = useState(false);
    const [titleDialog, setTitleDialog] = useState("");
    const [desDialog, setDesDialog] = useState("")
    const [pathScreen, setPathScreen] = useState("")
    const [searchURL, setSearchURL] = useState("")
    const [dataset, setDataset] = useState("")
    const [aiPackages, setAIPackage] = useState("")
    const [datasetID, setDatasetID] = useState("")
    const [aiPackagesID, setAIPackageID] = useState("")
    const [modelName, setModelName] = useState("")
    const [modelDesc, setModelDesc] = useState("")
    const userInfo = useUserInfos()

    const { response: listDatasets } = useHttpApi(API.getDatasets(userInfo && userInfo.userId ? userInfo.userId : ""))
    const { response: listAIPackages } = useHttpApi(API.getAIPackages())

    const handleClickOpen = (title: string, des: string, path: string, search: string) => {
        setPathScreen(path)
        setSearchURL(search)
        setTitleDialog(title)
        setDesDialog(des)
        setOpenDialog(true)
    };

    const handleClose = () => {
        setOpenDialog(false);
        if (!!pathScreen) {
            history.push({
                pathname: pathScreen,
                search: searchURL
            })
        }
    };

    const CallApiCreateModel = () => {
        if (datasetID && aiPackagesID && modelName && modelDesc) {
            let varsCreateModel: ICreateModelRequest = {
                datasetId: datasetID,
                aiPackageId: aiPackagesID,
                model: {
                    name: modelName,
                    desc: modelDesc,
                }
            }
            if (!context.http) { return }
            API.createModel(userInfo && userInfo.userId ? userInfo.userId : "", varsCreateModel)(context.http)
                .then(res => {
                    if (res && res.model) {
                        let search = `model=${res.model.id}`
                        let path = MainScreenPath.screen3
                        handleClickOpen(t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.title_create_success), t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.create_description_dialog_success), path, search)
                    } else {
                        let search = ""
                        let path = MainScreenPath.screen1
                        handleClickOpen(t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.title_create_failed), t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.create_description_dialog_fail), path, search)
                    }
                })
        } else {
            handleClickOpen(t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.title_invalid_vars), "", "", "")
        }
    }

    const createDatasetItem = () => {
        let layoutDatasetItem: any[] = []
        if (listDatasets && listDatasets.datasets) {
            listDatasets.datasets.forEach((dataset) => {
                layoutDatasetItem.push(
                    <Dropdown.Item key={dataset.id} onClick={() => {
                        setDatasetID(dataset.id)
                        setDataset(dataset.name)
                    }}>
                        {dataset.name}
                    </Dropdown.Item>
                )
            })
        }
        return layoutDatasetItem
    }

    const createAIPackagesItem = () => {
        let layoutAIPackagesItem: any[] = []
        if (listAIPackages && listAIPackages.aiPackages) {
            listAIPackages.aiPackages.forEach((aiPackage) => {
                layoutAIPackagesItem.push(
                    <Dropdown.Item key={aiPackage.id} onClick={() => {
                        setAIPackageID(aiPackage.id)
                        setAIPackage(aiPackage.name)
                    }}>
                        {aiPackage.name}
                    </Dropdown.Item>
                )
            })
        }
        return layoutAIPackagesItem
    }

    return (
        <div className={styles.content}>
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{titleDialog}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {desDialog}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.no)}
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.yes)}
                    </Button>
                </DialogActions>
            </Dialog>
            <div className={styles.contentDetail}>
                <h3>
                    {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.model_name)}
                </h3>
                <textarea
                    id="model-name"
                    onChange={(e) => setModelName(e.target.value)}
                    rows={1}
                />
                <h3>
                    {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.details)}
                </h3>
                <textarea
                    id="model-description"
                    onChange={(e) => setModelDesc(e.target.value)}
                    rows={3}
                />

            </div>

            <div className={styles.contentDetail}>
                <h3>
                    {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.dataset)}
                </h3>
                <Dropdown className={styles.dropdown}>
                    <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                    >
                        {!!dataset ? dataset : t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.choose_dataset)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ textAlign: "left", width: "100%", maxHeight: "10em", overflow: "auto" }}>
                        {createDatasetItem()}
                    </Dropdown.Menu>
                </Dropdown>
                <h3 style={{ marginTop: "20px" }}>
                    {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.ai_package)}
                </h3>
                <Dropdown className={styles.dropdown}>
                    <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                    >
                        {!!aiPackages ? aiPackages : t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.choose_ai_package)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ textAlign: "left", width: "100%", maxHeight: "10em", overflow: "auto" }}>
                        {createAIPackagesItem()}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={styles.groupButton}>
                {/* Button create */}
                <Button
                    style={{ marginLeft: "10px", float: "right" }}
                    onClick={() => CallApiCreateModel()}
                >
                    {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.create)}
                </Button>
                {/* Button cancel */}
                <Button
                    variant="danger"
                    style={{ float: "right" }}
                    onClick={() => handleClickOpen(t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.title_dialog_cancel), t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.cancel_description_dialog), MainScreenPath.screen1, "")}
                >
                    {t(I18N_SCREEN2_NS + ':' + I18N_SCREEN2.cancel)}
                </Button>
            </div>
        </div >
    )
}

export default Content;