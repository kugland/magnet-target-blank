const listener = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === 'A') {
    const href = (target as HTMLAnchorElement).href;
    if (typeof href === 'string' && href.startsWith('magnet:')) {
      event.preventDefault();
      event.stopPropagation();
      // @ts-ignore
      GM.openInTab(href);
    }
  }
};

document.addEventListener('click', listener, { capture: true });
document.addEventListener('tap', listener, { capture: true });
