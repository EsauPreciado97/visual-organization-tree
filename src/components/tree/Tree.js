import React from 'react';
import './Tree.css';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import user1 from '../../assets/user 1.png'
import user2 from '../../assets/user 2.png'
import user3 from '../../assets/user 3.png'
import user4 from '../../assets/user 4.png'
import user5 from '../../assets/user 5.png'
import Modal1 from '../modals/Modal_1';



function Tree () {

    const Accordion = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiAccordion);
      
      const AccordionSummary = withStyles({
        root: {
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(0, 0, 0, .125)',
          marginBottom: -1,
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
          },
        },
        expanded: {},
      })(MuiAccordionSummary);
      
    const AccordionDetails = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiAccordionDetails);

    const [expanded, setExpanded] = React.useState('panel1');
    const [expanded2, setExpanded2] = React.useState('panel2');
    const [expanded3, setExpanded3] = React.useState('panel3');
    const [expanded4, setExpanded4] = React.useState('panel4');
    const [expanded5, setExpanded5] = React.useState('panel5');


    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const handleChange2 = (panel) => (event, newExpanded) => {
        setExpanded2(newExpanded ? panel : false);
      };

    const handleChange3 = (panel) => (event, newExpanded) => {
    setExpanded3(newExpanded ? panel : false);
    };

    const handleChange4 = (panel) => (event, newExpanded) => {
        setExpanded4(newExpanded ? panel : false);
    };

    const handleChange5 = (panel) => (event, newExpanded) => {
        setExpanded5(newExpanded ? panel : false);
    };


    return (
        <div className={"Tree"}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className={"width"} aria-controls="panel1d-content" id="panel1d-header">
                    <img src={user1} alt={"General Manager"} height={"100px"} />                    
                    <Typography className={"tree-info"} >
                        <p className={"contact-name"}>Marvin Oneida</p>
                        <p className={"contact-position"}>General Manager</p>
                    </Typography>
                </AccordionSummary>
                <Modal1 />
                <AccordionDetails>
                    <Accordion square expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')}>
                        <AccordionSummary className={"width"} aria-controls="panel1d-content" id="panel1d-header">
                            <img src={user4} alt={"Product Manager"} height={"100px"} />                    
                            <Typography className={"tree-info"} >
                                <p className={"contact-name"}>Dianne Winnifred</p>
                                <p className={"contact-position"}>Product Manager</p>
                            </Typography>
                        </AccordionSummary>
                        <Modal1 className={"modal"} />
                        <AccordionDetails>
                           <Accordion square expanded={expanded3 === 'panel3'} onChange={handleChange3('panel3')}>
                                <AccordionSummary className={"width"} aria-controls="panel1d-content" id="panel1d-header">
                                    <img src={user2} alt={"Team Leader"} height={"100px"} />                    
                                    <Typography className={"tree-info"} >
                                        <p className={"contact-name"}>Ryan Randolf</p>
                                        <p className={"contact-position"}>Team Leader</p>
                                    </Typography>
                                </AccordionSummary>
                                <Modal1 />
                                <AccordionDetails>
                                    <Accordion square expanded={expanded4 === 'panel4'} onChange={handleChange4('panel4')}>
                                        <AccordionSummary className={"width"} aria-controls="panel1d-content" id="panel1d-header">
                                            <img src={user5} alt={"Project Manager"} height={"100px"} />                    
                                            <Typography className={"tree-info"} >
                                                <p className={"contact-name"}>Daniella Tameka</p>
                                                <p className={"contact-position"}>Project Manager</p>
                                            </Typography>                                        
                                        </AccordionSummary>
                                        <Modal1 />
                                        <AccordionDetails>
                                            <Accordion square expanded={expanded5 === 'panel5'} onChange={handleChange5('panel5')}>
                                                <AccordionSummary className={"width"} aria-controls="panel1d-content" id="panel1d-header">
                                                <img src={user3} alt={"Software Developer"} height={"100px"} />                    
                                                <Typography className={"tree-info"} >
                                                    <p className={"contact-name"}>Zachariah Brooke</p>
                                                    <p className={"contact-position"}>Software Developer</p>
                                                </Typography>
                                                </AccordionSummary>
                                                <Modal1 />
                                            </Accordion>
                                        </AccordionDetails>
                                    </Accordion>
                                </AccordionDetails>
                            </Accordion> 
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Tree;