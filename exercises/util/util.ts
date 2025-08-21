type ExecutionResult<T> = {
  result: T;
  durationMs: number;
};

function measureExecutionTime<T>(fn: () => T): ExecutionResult<T> {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  return {
    result,
    durationMs: end - start,
  };
}

export { measureExecutionTime };
