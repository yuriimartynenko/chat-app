import React, { ReactElement } from 'react';

export const AsideComponent = (): ReactElement => {
  return (
    <aside className="aside">
      <div className="aside__teams">
        <div className="aside__teams-title">
          <span>Teams</span>
          <button></button>
        </div>
        <div className="aside__teams-item aside__teams-item-active">
          <span>#designers</span>
          <div className="aside__teams-item-counter">7</div>
        </div>
        <div className="aside__teams-item">
          <span>#programmers</span>
          <div className="aside__teams-item-counter">10</div>
        </div>
        <div className="aside__teams-item">
          <span>#marceters</span>
          <div className="aside__teams-item-counter">15</div>
        </div>
        <div className="aside__teams-item">
          <span>#copyrighters</span>
          <div className="aside__teams-item-counter">8</div>
        </div>
        <div className="aside__teams-item">
          <span>#managers</span>
          <div className="aside__teams-item-counter">5</div>
        </div>
      </div>
      <div className="aside__group">
        <div className="aside__group-title">
          <span>Group channels</span>
          <button></button>
        </div>
        <div className="aside__group-item">
          <span>#app-idea</span>
        </div>
        <div className="aside__group-item">
          <span>#general</span>
        </div>
        <div className="aside__group-item">
          <span>#our clients</span>
        </div>
      </div>
    </aside>
  );
};
