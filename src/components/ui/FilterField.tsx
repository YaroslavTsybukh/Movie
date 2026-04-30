import type { FC, PropsWithChildren } from 'react';

interface IProps {
  label: string;
}

export const FilterField: FC<PropsWithChildren<IProps>> = ({ children, label }) => {
  return (
    <div className="filter-field">
      <label className="filter-label">{label}</label>
      {children}
    </div>
  );
};
