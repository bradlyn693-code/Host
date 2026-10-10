import React from 'react';
import { Activity, Bot, Cpu, ExternalLink, MemoryStick, Rocket, Settings2 } from 'lucide-react';

export default function BotCard({ bot, onDeploy, onManage }) {
  const isOrange = bot.theme === 'orange';
  const ram = bot.ramLimit ? Math.round((bot.ramUsed / bot.ramLimit) * 100) : 0;
  return <article className={`bot-card bot-${bot.theme || 'green'} ${bot.comingSoon ? 'coming-soon' : ''}`}>
    <div className="bot-card-top"><div className="bot-avatar">{isOrange ? '🦊' : '🐺'}</div>{bot.featured && <span className="featured-badge">FEATURED</span>}{bot.comingSoon && <span className="soon-badge">COMING SOON</span>}</div>
    <div className="bot-card-title"><div><h3>{bot.name}</h3><p>{bot.codename} · {bot.version}</p></div><span className="bot-status"><i />{bot.status}</span></div>
    <p className="bot-description">{bot.description || 'A new Fluxytech Hosting bot is being prepared for launch.'}</p>
    <div className="bot-metrics"><div><span><Activity size={13} /> Uptime</span><b>{bot.uptime || '—'}</b></div><div><span><MemoryStick size={13} /> RAM</span><b>{bot.ramLimit ? `${bot.ramUsed}MB/${bot.ramLimit}MB` : '—'}</b></div><div><span><Cpu size={13} /> {bot.queue !== undefined ? 'Queue' : 'CPU'}</span><b>{bot.queue !== undefined ? `${bot.queue} jobs` : bot.cpu !== undefined ? `${bot.cpu}%` : '—'}</b></div></div>
    {bot.ramLimit > 0 && <div className="ram-track"><span style={{ width: `${Math.min(ram, 100)}%` }} /></div>}
    <div className="bot-actions">{bot.comingSoon ? <button className="secondary-btn" disabled>Notify me</button> : <><button className={`manage-btn ${isOrange ? 'orange' : ''}`} onClick={() => onManage(bot)}><Settings2 size={14} /> Manage</button><button className={`deploy-btn ${isOrange ? 'orange' : ''}`} onClick={() => onDeploy(bot)}><Rocket size={14} /> Deploy</button></>}{bot.repo && <a className="repo-link" href={bot.repo} target="_blank" rel="noreferrer" title="Repository"><ExternalLink size={14} /></a>}</div>
  </article>;
}
