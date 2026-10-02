"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDeferredValue, useId, useMemo, useState, type FocusEvent, type FormEvent, type KeyboardEvent } from "react";
import { HERO_SUGGESTIONS, pick } from "@/lib/destinations/data";
import { searchDestinations, tagLabels, trail } from "@/lib/destinations/present";
import type { Destination, ResolveContext } from "@/lib/destinations/types";
import { scrollToExplorer, useExplorerParams } from "@/lib/destinations/url-state";
import { resolveCard } from "./cards/resolve";
import { DestinationArt } from "./DestinationArt";
import { ArrowIcon, CloseIcon, SearchIcon } from "./Icons";
import "./hero.css";

const CLEAR = { country: undefined, exp: undefined, region: undefined } as const;

/** Client-side destination search: country, city, region, trek, shrine, park, beach — names and aliases. */
export function HeroSearch({ ctx }: { ctx: ResolveContext }) {
  const router = useRouter();
  const [, update] = useExplorerParams();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const listId = useId();

  const deferred = useDeferredValue(value);
  const results = useMemo(() => searchDestinations(deferred, 6), [deferred]);
  const suggestions = useMemo(() => pick(HERO_SUGGESTIONS), []);
  const typed = value.trim().length >= 2;
  const showList = open && typed && results.length > 0;

  const applyToExplorer = (q: string) => {
    update({ ...CLEAR, q, sort: "featured" });
    scrollToExplorer();
  };

  const choose = (d: Destination) => {
    setOpen(false);
    const page = ctx.routes[d.slug];
    if (page) {
      router.push(page);
    } else {
      setValue(d.name);
      applyToExplorer(d.name);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (showList && results[active]) return choose(results[active]);
    setOpen(false);
    applyToExplorer(value.trim());
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => (results.length ? (a + 1) % results.length : -1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => (results.length ? (a <= 0 ? results.length - 1 : a - 1) : -1));
    } else if (e.key === "Escape") {
      if (open) setOpen(false);
      else setValue("");
      setActive(-1);
    }
  };

  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    <div className="dsearch" onBlur={onBlur}>
      <form className="dsearch__form" role="search" aria-label="Search destinations" onSubmit={onSubmit}>
        <SearchIcon className="dsearch__icon" />
        <label htmlFor={`${listId}-input`} className="dh-sr-only">
          Where do you want to go?
        </label>
        <input
          id={`${listId}-input`}
          className="dsearch__input"
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Where do you want to go?"
          value={value}
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
          onChange={(e) => {
            setValue(e.target.value);
            setActive(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        {value ? (
          <button
            type="button"
            className="dsearch__clear"
            aria-label="Clear search"
            onClick={() => {
              setValue("");
              setActive(-1);
            }}
          >
            <CloseIcon />
          </button>
        ) : null}
        <button type="submit" className="dh-btn dh-btn--gold dsearch__submit">
          Explore
          <ArrowIcon />
        </button>
      </form>

      <ul id={listId} role="listbox" aria-label="Destination suggestions" className="dsearch__list" hidden={!showList}>
        {results.map((d, i) => {
          const r = resolveCard(d, ctx);
          return (
            <li
              key={d.slug}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              className={`dsearch__opt${i === active ? " is-active" : ""}`}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(d)}
            >
              <span className="dsearch__thumb">
                <DestinationArt theme={r.theme} seed={d.slug} src={r.src} alt="" sizes="56px" />
              </span>
              <span className="dsearch__text">
                <span className="dsearch__name">{d.name}</span>
                <span className="dsearch__trail">{trail(d).slice(0, -1).join(" → ")}</span>
              </span>
              <span className="dsearch__tag">{tagLabels(d, 1)[0]}</span>
            </li>
          );
        })}
      </ul>

      <p className="dh-sr-only" role="status" aria-live="polite">
        {typed && open ? (results.length ? `${results.length} suggestions available` : "No matching destinations") : ""}
      </p>
      {typed && open && results.length === 0 ? (
        <p className="dsearch__none">No destination matches “{value.trim()}” yet. Try a country, city or trek name.</p>
      ) : null}

      <div className="dsearch__popular">
        <span className="dsearch__popular-label" id={`${listId}-pop`}>
          Popular
        </span>
        <ul className="dsearch__chips" aria-labelledby={`${listId}-pop`} role="list">
          {suggestions.map((d) => {
            const page = ctx.routes[d.slug];
            return (
              <li key={d.slug}>
                {page ? (
                  <Link href={page} className="dsearch__chip">
                    {d.name}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="dsearch__chip"
                    onClick={() => {
                      setValue(d.name);
                      applyToExplorer(d.name);
                    }}
                  >
                    {d.name}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
