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
        contentDetail: {
            background: "#ffffff",
            width: "100%",
            padding: "20px",
            borderRadius: "5px",
            "& h5": {
                fontSize: "12pt",
            },
            "& h3": {
                color: "#666666",
                fontSize: "16pt",
                marginLeft: "10px",
            },
            "& textarea": {
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #000000",
                fontSize: "16pt",
            },
        },
        groupButton: {
            width: "100%",
            margin: "10px",
        },
        dropdown: {
            fontSize: "12pt",
            "& .dropdown-toggle": {
                minWidth: "100%",
                minHeight: "2.5em",
                fontSize: "16pt",
                textAlign: "start",
                border: "1px solid",
                borderRadius: "10px",
            },
            "& .dropdown-toggle::after": {
                float: "right",
                marginTop: "10px",
            }
        },
    }
})