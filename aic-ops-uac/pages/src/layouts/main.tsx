
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react'

import useStyles from './main.style'

const Component: FC = props => {
  const classes = useStyles()
  const router = useRouter()
  return <div className={classes.main} >
    <div className={classes.leftBar}>
      <FontAwesomeIcon style={{cursor: "pointer"}} icon={faCloud} size="2x" onClick={() => {router.push("/screen2")}} />
      <h5>AIC</h5>
    </div>
    <div className={classes.rightBar}>
      {props.children}
    </div>
  </div>
};

export default Component