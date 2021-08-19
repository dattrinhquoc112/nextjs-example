const { createUseStyles } = require('react-jss');

export default createUseStyles(() => {
    return {
        header: {
            margin: "20px",
            "& h3": {
                width: "auto",
            },
            "& a": {
                fontSize: "16pt",
                width: "auto",
                marginTop: "auto",
                marginLeft: "-0.5em",
            }
        },
        content: {
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
        },
        card: {
            cursor: "pointer",
            margin: "10px",
            width: "18em",
            minHeight: "10em",
            "& h5": {
                width: "auto",
                fontSize: "12pt",
            }
        },
    }
})