"use client"
import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [hoverTerminal, setHoverTerminal] = useState(false);
  const [hoverResume, setHoverResume] = useState(false);

  return (
    <div style={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/your-kit-id.css" />
      </Head>
      <div style={styles.leftSide}>
        <h1 style={styles.heading}>Terminal View</h1>
        <p style={styles.description}>
          For those curious about my profile in an interactive way, like a programmer working on a terminal screen. If you have a few minutes time, I recommend choosing this option.
        </p>
        <a
          href="/terminalPage"
          style={hoverTerminal ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHoverTerminal(true)}
          onMouseLeave={() => setHoverTerminal(false)}
        >
          Go to Terminal View ↗
        </a>
      </div>
      <div style={styles.rightSide}>
        <h1 style={styles.heading}>Simple Resume Style View</h1>
        <p style={styles.description}>
          If you're in a hurry and want to know all about me in a quick, resume-style simplified view, then this option is for you.
        </p>
        <a
          href="/simple"
          style={hoverResume ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHoverResume(true)}
          onMouseLeave={() => setHoverResume(false)}
        >
          Go to Simple View ↗
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'proxima-nova, Arial, sans-serif',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  leftSide: {
    flex: '1',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the left
    textAlign: 'left', // Left align text
  },
  rightSide: {
    flex: '1',
    backgroundColor: '#fff', // White background
    color: '#000', // Black text
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end', // Align items to the right
    textAlign: 'right', // Right align text
  },
  heading: {
    fontSize: '3.0rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '20px',
    padding: '15px 30px', // Increased padding for wider button
    fontSize: '18px', // Increased font size
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#eaeaea', // Gray background
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    transition: 'background-color 0.3s, color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#ff0000', // Red background on hover
    color: '#fff', // White text on hover
  }
};
