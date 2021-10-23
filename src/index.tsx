import * as React from 'react';
import { FunctionComponent } from "react";

// OUTSIDE COMPONENTS
import { makeStyles } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography';

//ICONS
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CancelIcon from '@material-ui/icons/Cancel';

interface HealthiAccordionProps {
  medTitle?: string;
  accordionDetails?: React.ReactNode;;
  dropdownButton?: React.ReactNode;;
  medAmount?: React.ReactNode;;
  dailyRoutine?: string;
  sideIcons?: number;
}

const HealthiAccordion: FunctionComponent<HealthiAccordionProps> = ({
  medTitle = "Med1",
  medAmount = "x5",
  dailyRoutine = "3 por dia",
  accordionDetails= "Detalhes",
  dropdownButton,
  sideIcons = <>
    <CancelIcon color="secondary" className="my-auto mx-3">
    </CancelIcon>
  </>
}) => {
  
  const useStyles = makeStyles((theme: { palette: { accordion: { summaryBackground: any; colorBorder: any; detailsBackground: any; }; }; }) => ({
    root: {
      "&.MuiAccordion-root":{
        "&.MuiPaper-elevation1":{
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }
      },
      "&.MuiAccordionSummary-root":{
        backgroundColor: "#ccecee",
        border: "1px solid",
        borderColor: theme.palette.accordion.colorBorder,
        borderRadius: 5,
        paddingRight: '1rem',
        paddingLeft: 0,
        height: 60
      },
      "&.MuiAccordionDetails-root":{
        backgroundColor: "#f8f8f8",
        border: "1px solid",
        borderColor: "#8ccdd3",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        marginTop: "-4px"
      },
    },
    body1: {
      fontFamily: 'Open Sans',
      fontSize: 14,
      color: "#026066",
      textDecoration: 'none solid rgb(2, 96, 102)'
    },
    
    title:{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      boxOrient: 'vertical',
      display: '-webkit-box',
      lineClamp: 2,
      padding: 0,
      marginTop: 'auto',
      width: '100%',
      fontWeight: 'bold'
    },
    dailyRoutineMeds:{
      padding: 0,
      marginTop: 'auto',
      marginBottom: 'auto',
      width: '100%'
    }
  }));

  const classes = useStyles();

  return (
    <>
    <Accordion className={classes.root}>
        <AccordionSummary
          className={classes.root}
          expandIcon={<ExpandMoreIcon color="secondary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header">
          {dropdownButton}
          <Typography className={`${classes.body1} ${classes.title}`}>
            {medTitle}
          </Typography>
          {medAmount}
          <Typography className={`${classes.body1} ${classes.dailyRoutineMeds}`}>
            {dailyRoutine}
          </Typography>
          {sideIcons}
        </AccordionSummary>
        <AccordionDetails className={classes.root}>
          {accordionDetails}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default HealthiAccordion;