import React from 'react';

/**
 * Render One element if condition is true (or exists mostly)
 * Render other one if not
 */
export default function ConditionWrapper({ condition = true, componentTrue, componentFalse }) {
  return condition ? <>{componentTrue}</> : <>{componentFalse}</>;
}
