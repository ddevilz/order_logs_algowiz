let aggregatedUpdates = [];
let lastTimestamp = Date.now();

export const aggregateUpdates = (order) => {
  aggregatedUpdates.push(order);

  if (Date.now() - lastTimestamp < 1000) {
    return null;
  }

  if (aggregatedUpdates.length > 0) {
    const latestUpdate = aggregatedUpdates[aggregatedUpdates.length - 1];
    aggregatedUpdates = [];
    lastTimestamp = Date.now();
    return latestUpdate;
  }

  return null;
};
