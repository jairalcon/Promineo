import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

const Layout = ({ search, setSearch, width }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" width={width} />
            <DataProvider>
                <Nav search={search} setSearch={setSearch} />
                <Outlet />
            </DataProvider>
            <Footer />
        </div>
    )
}

export default Layout