import {
  title,
  description,
  mrAuto,
  mlAuto
} from "assets/jss/material-kit-pro-react.js";
import customSelectStyle from "assets/jss/material-kit-pro-react/customSelectStyle.js";

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle, 
  description: {
    ...description,
    marginBottom: "70px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  selectUnderlineRoot: {
    "& > div": {
      marginTop: "13px"
    }
  },
  aboutUs: {
    padding: "80px 0px"
  },
  backgroundColor:{
    backgroundColor: "#dedede!important" , // background color
    paddingTop: "20px"
  },
  buttonColor:{
    backgroundColor: "#00acc1!important"
  }
};

export default contactStyle;
