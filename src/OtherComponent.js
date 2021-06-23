import React, { Suspense, Profiler } from 'react';

export default function OtherComponent() {
  return (
    <Profiler id="aaaa">
      <div>123</div>
    </Profiler>
  );
}
