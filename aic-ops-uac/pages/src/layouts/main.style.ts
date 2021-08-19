
import { createUseStyles } from 'react-jss'
import theme from '../../app-theme'

interface IOptions { }

/** TODO
 * 
 */
export default createUseStyles(() => ({
  main: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    width: "100%",
  },
  rightBar: {
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    background: theme.rightBar.background
  },
  leftBar: {
    padding: "20px",
    textAlign: "center",
    background: theme.leftBar.background,
    color: theme.leftBar.textColor,
    flex: "0 0"
  }

}))