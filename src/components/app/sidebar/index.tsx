'use client';
import {
  ArrowLeftToLine,
  Bot,
  FolderOpen,
  Home,
  Plus,
  Settings,
  Sticker,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import Tip from '~/components/global/tip';
import style from './style.module.css';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function toggleSidebar() {
    setOpen(!open);
  }

  const menuItems = [
    {
      name: 'home',
      icon: <Home size={18} strokeWidth={1.5} />,
      link: '/app',
    },
    {
      name: 'files',
      icon: <FolderOpen size={18} strokeWidth={1.5} />,
      link: '/app/files',
    },
    {
      name: 'new',
      icon: <Plus size={18} strokeWidth={1.5} />,
      link: '/app/new',
    },
    {
      name: 'settings',
      icon: <Settings size={18} strokeWidth={1.5} />,
      link: '/app/settings',
    },
  ];
  return (
    <aside data-open={open} className={style.sidebar}>
      <div className={style.sidebar__heading}>
        <span
          data-open={open}
          onClick={toggleSidebar}
          className={style.sidebar__heading_logo}
        >
          <Bot size={20} strokeWidth={1.5} />
        </span>
        {open && (
          <span
            data-open={open}
            onClick={toggleSidebar}
            className={style.sidebar__heading_toggle}
            style={{
              transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          >
            <ArrowLeftToLine size={18} strokeWidth={1.5} />
          </span>
        )}
      </div>
      <nav className={style.sidebar__list}>
        <ul data-open={open}>
          {menuItems.map((item) => (
            <Tip key={item.name} side="right" content={item.name}>
              <li
                onClick={() => {
                  item.name === 'new' ? router.refresh() : null;
                }}
                data-active={item.link === pathname}
                key={item.name}
              >
                <Link href={item.link}>
                  {item.icon}
                  {open && <span>{item.name}</span>}
                </Link>
              </li>
            </Tip>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
