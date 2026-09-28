"use client";

import "./ActivityFilters.css";

export interface FilterOption<T extends string> {
  id: T;
  label: string;
}

interface ActivityFiltersProps<T extends string> {
  options: FilterOption<T>[];
  value: T;
  onChange: (id: T) => void;
  /** Accessible name for the group, e.g. "Filter rivers". */
  label: string;
  /** Optional live count announced to screen readers. */
  resultCount?: number;
  resultNoun?: string;
}

export default function ActivityFilters<T extends string>({
  options,
  value,
  onChange,
  label,
  resultCount,
  resultNoun = "results",
}: ActivityFiltersProps<T>) {
  return (
    <div className="act-filters">
      <div className="act-filters__row" role="group" aria-label={label}>
        {options.map((option) => {
          const active = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              className="act-filters__chip"
              aria-pressed={active}
              onClick={() => onChange(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {typeof resultCount === "number" ? (
        <p className="act-filters__count" role="status">
          {resultCount} {resultNoun}
        </p>
      ) : null}
    </div>
  );
}
