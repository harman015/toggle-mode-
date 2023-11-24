import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export default function FullLayout({ children }) {
  const theme = createTheme({
    breakpoints: {
      values: {
  
        lg: 1280,
  
      },
    },
  });
  return (
    <div>
       <ThemeProvider theme={theme}>
      <Header />
      <Sidebar />
      <Container maxWidth={false} >
        <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper container-xxl p-0">
            <div className="content-header row"></div>
            <div className="content-body">
              {/* Dashboard Ecommerce Starts */}
              <section id="dashboard-ecommerce">
                {children}
              </section>
            </div>
          </div>
        </div>

      </Container>
      <Footer />
      </ThemeProvider>
    </div>
  )
}
