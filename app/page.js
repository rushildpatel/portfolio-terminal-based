"use client"
import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [hoverTerminal, setHoverTerminal] = useState(false);
  const [hoverResume, setHoverResume] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <h1 style={styles.heading}>Terminal View</h1>
        <p style={styles.description}>
          For those curious exploratory folks who want to know about my profile in an interactive way, like a programmer working on a terminal screen. If you have a few minutes, <span style={styles.recommendation}>I recommend this option.</span>
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
          If you're in a hurry and want to know about me in a quick, resume-style simplified view, then choose this option.
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
    fontFamily: 'monospace',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  leftSide: {
    flex: '1',
    backgroundColor: '#000', 
    color: '#fff',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left', 
  },
  rightSide: {
    flex: '1',
    backgroundColor: '#fff',
    color: '#000', 
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end', 
    textAlign: 'right', 
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
  recommendation: {
    color: '#ff0000', 
    fontWeight: 'bold',
  },
  button: {
    marginTop: '20px',
    padding: '15px 30px', 
    fontSize: '18px', 
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#eaeaea',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    transition: 'background-color 0.3s, color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#ff0000', 
    color: '#fff',
  }
};
