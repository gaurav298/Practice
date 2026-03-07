export const insertInterval = (intervals: number[][], newInterval: number[]): number[][] => {
    let i = 0;
    let [start, end] = newInterval;

    // skip intervals before overlap
    while (i < intervals.length && intervals[i][1] < start) {
        i++;
    }

    // merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        intervals.splice(i, 1);
    }

    intervals.splice(i, 0, [start, end]);

    return intervals;
};