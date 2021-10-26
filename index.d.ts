import * as React from 'react';
import { FunctionComponent } from "react";
interface HealthiAccordionProps {
    /**
       * Title of the medication
    */
    medTitle?: string;
    /**
       * Insert elements in the accordion details.
    */
    accordionDetails?: React.ReactNode;
    /**
       * Insert a button for the dropdown.
    */
    dropdownButton?: React.ReactNode;
    /**
       * Info about the med amount.
    */
    medAmount?: React.ReactNode;
    /**
       * How many times the patient takes the medication a day.
    */
    dailyRoutine?: string;
    /**
       * Insert elements in the side icons area.
    */
    sideIcons?: React.ReactNode;
}
declare const HealthiAccordion: FunctionComponent<HealthiAccordionProps>;
export default HealthiAccordion;
