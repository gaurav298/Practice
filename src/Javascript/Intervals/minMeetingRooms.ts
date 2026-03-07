export const minMeetingRooms = (time: number[][]): number => {
    let rooms = 0;
    let maxRooms = 0;
    let i = 0;
    let j = 0;
    const starts = time.map(a => a[0]);
    const ends = time.map((b) => b[1]);
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    while (i < starts.length) {
        if (starts[i] < ends[j]) {
            rooms++;
            maxRooms = Math.max(maxRooms, rooms);
            i++;
        } else {
            rooms--;
            j++;
        }
    }
    return maxRooms;
};