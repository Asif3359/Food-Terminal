import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className='flex bg-base-200 text-base-content'>
                <footer className="flex-1 flex justify-center items-center bg-base-300 p-10">
                    <nav className='flex flex-col text-center'>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                </footer>
                <footer className='flex-1 flex justify-center items-center bg-base-200 p-10"'>
                    <nav className='flex flex-col text-center'>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                </footer>
            </footer>
            <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;