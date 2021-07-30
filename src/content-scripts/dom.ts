import render from "preact-render-to-string";

/**
 * Create DOM element from JSX element.
 */
export function domRender(element: Parameters<typeof render>[0]): Element {
  return createElement(render(element));
}

const createElement = (str: string): Element => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild ?? el;
};
