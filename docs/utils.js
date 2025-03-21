/**
 * Tries to focus the first form control or if that fails a fallback selector. This is part of focus
 * management to set a page load entry point using a DOM focus for AT users. If a form control
 * exists it is preferred over a fallback selector like a heading, this is to avoid confusion
 * e.g. #4690
 *
 * Note: the setTimeout is a hack to help sequence the query selector after the DOM loads. Use a
 * react ref over this method if possible.
 */
export const tryFocusOnPageLoad = (fallbackSelector = "H1") => {
  const NEXT_TICK = 4;
  setTimeout(() => {
    let focusEl = null;

    // Note: checkVisibility() is still fairly new so we should check if available, if not, use the
    // fallback instead. Because controls may or may not be nested in a parent element that is used
    // for controlling visibility, determining an elements visibility using the computed style etc.
    // is tricky and error prone. The WebAPI is probably the best reliable way.
    // https://chromestatus.com/feature/5163102852087808
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/checkVisibility#browser_compatibility
    if (window.document.documentElement.checkVisibility !== undefined) {
      // Get the list of form controls in order, if any and take the first visible one
      // Note: the CSS selector could be more efficient but e.g. not all form controls are nested
      // in a form element.
      const formControlEls = document.querySelectorAll(
        "input, textarea, select"
      );
      const visibleElements = Array.from(formControlEls).filter((element) =>
        element.checkVisibility()
      );
      focusEl = visibleElements.length > 0 ? visibleElements[0] : null;
    }

    if (!focusEl) {
      focusEl = document.querySelector(fallbackSelector);
    }

    focusEl?.focus();
  }, NEXT_TICK);
};