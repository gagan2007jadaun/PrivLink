"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AppNavigation.module.css';

export default function AppNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const toggleOpen = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", id: "dashboard", iconPath: "M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" },
    { name: "Messages", id: "messages", iconPath: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" },
    { name: "Users", id: "users", iconPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" },
    { name: "Projects", id: "projects", iconPath: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" },
    { name: "Settings", id: "settings", iconPath: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" }
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={`${styles.toggle} z-50`} type="button" onClick={toggleOpen}>
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-[2px]">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
      </button>

      <div className={styles.inner}>
        <div className={styles.header}>
          <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#656aff" stroke="#656aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1>BOLT UI</h1>
        </div>

        <div className={styles.search}>
          <svg fill="currentColor" viewBox="0 0 24 24" className={`w-5 h-5 ${styles.searchIcon}`}>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>

        <nav className={styles.menu}>
          {/* Animated Highlight Indicator */}
          <div
            className={styles.menuIndicator}
            style={{ '--top': `${activeIndex === 0 ? 0 : activeIndex * 56}px` } as React.CSSProperties}
          ></div>

          {menuItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.menuButton} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => {
                setActiveIndex(index);
                if (item.id === 'settings') {
                  router.push('/settings');
                }
              }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className={`w-6 h-6 ${styles.menuButtonIcon}`}>
                <path d={item.iconPath} />
              </svg>
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
