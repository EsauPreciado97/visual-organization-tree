import React from 'react';
import './Dashboard.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Tree from '../../components/tree/Tree';
import Grid from '@material-ui/core/Grid';


function Dashboard() {
  return (
    <div className={"dashboard-container"}>
      <Header />
      <Grid className={"dashboard-grid"}container spacing={0}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Tree />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;