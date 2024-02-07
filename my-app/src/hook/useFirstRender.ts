import {useEffect, useLayoutEffect, useRef} from 'react';

/** - 是否完成第一次渲染(後) */
export function useFirstRender() {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
}
/** - 是否完成第一次渲染(前) */
export function useFirstRenderBefore() {
  const firstRenderBefore = useRef(true);
  useLayoutEffect(() => {
    firstRenderBefore.current = false;
  }, []);
  return firstRenderBefore.current;
}
