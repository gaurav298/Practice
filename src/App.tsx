import "./App.css";
import { longestCommonSubsequence } from "./Javascript/2D-DP/longestCommonSubsequence";
import { uniquePaths } from "./Javascript/2D-DP/uniquePaths";
import { hasDuplicate } from "./Javascript/Arrays-Hashing/containsDuplicate";
import { encodeDecode } from "./Javascript/Arrays-Hashing/encodeDecode";
import { groupAnagrams } from "./Javascript/Arrays-Hashing/groupAnagrams";
import { longestConsecutive } from "./Javascript/Arrays-Hashing/longestConsecutive";
import { productExceptSelf } from "./Javascript/Arrays-Hashing/productExceptSelf";
import { topKFrequent } from "./Javascript/Arrays-Hashing/topKFrequentElements";
import { twoSum } from "./Javascript/Arrays-Hashing/twoSum";
import { isAnagram } from "./Javascript/Arrays-Hashing/validAnagram";
import { combinationSum } from "./Javascript/Backtracking/combinationSum";
import { wordSearch } from "./Javascript/Backtracking/wordSearch";
import { findMin } from "./Javascript/BinarySearch/findMin";
import { searchNum } from "./Javascript/BinarySearch/searchNum";
import { canJump } from "./Javascript/Greedy/jumpGame";
import { maxSubArray } from "./Javascript/Greedy/maxSubArray";
import { eraseOverlapIntervals } from "./Javascript/Intervals/eraseOverlapIntervals";
import { insertInterval } from "./Javascript/Intervals/insertInterval";
import { canAttendMeetings } from "./Javascript/Intervals/meetingRooms";
import { mergeIntervals } from "./Javascript/Intervals/mergeIntervals";
import { minMeetingRooms } from "./Javascript/Intervals/minMeetingRooms";
import { characterReplacement } from "./Javascript/SlidingWindow/characterReplacement";
import { lomgestSubstring } from "./Javascript/SlidingWindow/longestSubstring";
import { maxProfit } from "./Javascript/SlidingWindow/maxProfit";
import {
  minWindow,
  minWindowOptimized,
} from "./Javascript/SlidingWindow/minWindow";
import { validParenthesis } from "./Javascript/Stack/validParenthesis";
import { maxWater } from "./Javascript/TwoPointer/maxWaterContainer";
import { threeSum } from "./Javascript/TwoPointer/threeSum";
import { validPalindrone } from "./Javascript/TwoPointer/validPalindrone";

function App() {
  return (
    <div className="App">
      <p>
        ContainsDuplicate: Input: 1, 2, 3, 3:{" "}
        {String(hasDuplicate([1, 2, 3, 3]))}
      </p>
      <p>
        ContainsDuplicate: Input: 1, 2, 3, 4:{" "}
        {String(hasDuplicate([1, 2, 3, 4]))}
      </p>
      <p>
        ValidAnagram: Input: `racecar`, `carrace``:{" "}
        {String(isAnagram(`racecar`, `carrace`))}
      </p>
      <p>
        ValidAnagram: Input: `abc`, `def`: {String(isAnagram(`abc`, `def`))}
      </p>
      <p>TwoSum: Input: [3, 4, 5, 6], 7: {String(twoSum([3, 4, 5, 6], 7))}</p>
      <p>TwoSum: Input: [4, 5, 6], 10: {String(twoSum([4, 5, 6], 10))}</p>
      <p>
        GroupAnagrams: Input: ['act', 'pots', 'tops', 'cat', 'stop', 'hat']:{" "}
        {String(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))}
      </p>
      <p>GroupAnagrams: Input: ['x']: {groupAnagrams(["x"])}</p>
      <p>
        topKFrequent: Input: [1,2,2,3,3,3], k = 2:{" "}
        {topKFrequent([1, 2, 2, 3, 3, 3], 2)}
      </p>
      <p>topKFrequent: Input: [7,7], k = 1: {topKFrequent([7, 7], 1)}</p>
      <p>
        encodeDecode: Input: ["Hello","World"]:{" "}
        {encodeDecode(["Hello", "World"])}
      </p>
      <p>encodeDecode: Input: ['']: {encodeDecode([""])}</p>
      <p>
        productExceptSelf: Input: [1,2,4,6]: {productExceptSelf([1, 2, 4, 6])}
      </p>
      <p>
        productExceptSelf: Input: [-1,0,1,2,3]:{" "}
        {productExceptSelf([-1, 0, 1, 2, 3])}
      </p>
      <p>
        longestConsecutive: Input: [0,3,2,5,4,6,1,1]:{" "}
        {longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])}
      </p>
      <p>
        longestConsecutive: Input: [2,20,4,10,3,4,5]:{" "}
        {longestConsecutive([2, 20, 4, 10, 3, 4, 5])}
      </p>
      <p>
        validPalindrone: Input: Was it a car or a cat I saw?:{" "}
        {String(validPalindrone("Was it a car or a cat I saw?"))}
      </p>
      <p>
        validPalindrone: Input: tab a cat:{" "}
        {String(validPalindrone("tab a cat"))}
      </p>
      <p>
        threeSum: Input: [-1,0,1,2,-1,-4]: {threeSum([-1, 0, 1, 2, -1, -4], 0)}
      </p>
      <p>
        threeSum: Input: [1, 2, -1, 0, -2, 4]:{" "}
        {threeSum([1, 2, -1, 0, -2, 4], 3)}
      </p>
      <p>
        maxWater: Input: [1,7,2,5,4,7,3,6]: {maxWater([1, 7, 2, 5, 4, 7, 3, 6])}
      </p>
      <p>maxWater: Input: [2,2,2]: {maxWater([2, 2, 2])}</p>
      <p>
        validParenthesis: Input: ([{}]): {String(validParenthesis("([{}])"))}
      </p>
      <p>validParenthesis: Input: [(]): {String(validParenthesis("[(])"))}</p>
      <p>maxProfit: Input: [10,1,5,6,7,1]: {maxProfit([10, 1, 5, 6, 7, 1])}</p>
      <p>maxProfit: Input: [10,8,7,5,2]: {maxProfit([10, 8, 7, 5, 2])}</p>
      <p>lomgestSubstring: Input: "zxyzxyz": {lomgestSubstring("zxyzxyz")}</p>
      <p>lomgestSubstring: Input: "xxxx": {lomgestSubstring("xxxx")}</p>
      <p>
        characterReplacement: Input: "XYYX": {characterReplacement("XYYX", 2)}
      </p>
      <p>
        characterReplacement: Input: "AAABABB":{" "}
        {characterReplacement("AAABABB", 1)}
      </p>
      <p>
        minWindow: Input: "OUZODYXAZV", "XYZ": {minWindow("OUZODYXAZV", "XYZ")}
      </p>
      <p>minWindow: Input: "xyz", "xyz": {minWindow("xyz", "xyz")}</p>
      <p>
        minWindowOptimized: Input: "OUZODYXAZV", "XYZ":{" "}
        {minWindowOptimized("OUZODYXAZV", "XYZ")}
      </p>
      <p>
        minWindowOptimized: Input: "xyz", "xyz":{" "}
        {minWindowOptimized("xyz", "xyz")}
      </p>
      <p>findMin: Input: [3,4,5,6,1,2]: {findMin([3, 4, 5, 6, 1, 2])}</p>
      <p>findMin: Input: [4,5,0,1,2,3]: {findMin([4, 5, 0, 1, 2, 3])}</p>
      <p>findMin: Input: [4,5,6,7]: {findMin([4, 5, 6, 7])}</p>
      <p>
        searchNum: Input: [3,4,5,6,1,2], 1: {searchNum([3, 4, 5, 6, 1, 2], 1)}
      </p>
      <p>
        searchNum: Input: [3,5,6,0,1,2], 4: {searchNum([3, 5, 6, 0, 1, 2], 4)}
      </p>
      <p>
        combinationSum: Input: [2,5,6,9], 9: {combinationSum([2, 5, 6, 9], 9)}
      </p>
      <p>combinationSum: Input: [3,4,5], 16: {combinationSum([3, 4, 5], 16)}</p>
      <p>combinationSum: Input: [3], 16: {combinationSum([3], 5)}</p>
      <p>
        wordSearch: Input: [ ["A","B","C","D"], ["S","A","A","T"],
        ["A","C","A","E"] ]:{" "}
        {String(
          wordSearch(
            [
              ["A", "B", "C", "D"],
              ["S", "A", "A", "T"],
              ["A", "C", "A", "E"],
            ],
            "CAT"
          )
        )}
      </p>
      <p>
        wordSearch: Input: [ ["A","B","C","D"], ["S","A","A","T"],
        ["A","C","A","E"] ]:{" "}
        {String(
          wordSearch(
            [
              ["A", "B", "C", "D"],
              ["S", "A", "A", "T"],
              ["A", "C", "A", "E"],
            ],
            "BAT"
          )
        )}
      </p>
      <p>maxSubArray: Input: [2,-3,4,-2,2,1,-1,4]: {maxSubArray([2,-3,4,-2,2,1,-1,4])}</p>
      <p>maxSubArray: Input: [-1]: {maxSubArray([-1])}</p>
      <p>canJump: Input: [1,2,0,1,0]: {String(canJump([1,2,0,1,0]))}</p>
      <p>canJump: Input: [1,2,1,0,1]: {String(canJump([1,2,1,0,1]))}</p>
      <p>insertInterval: Input: [[1,3],[4,6]], [2, 5]: {insertInterval([[1,3],[4,6]], [2, 5])}</p>
      <p>insertInterval: Input: [[1,2],[3,5],[9,10]], [6, 7]: {insertInterval([[1,2],[3,5],[9,10]], [6, 7])}</p>
      <p>mergeIntervals: Input: [[1,3],[1,5],[6,7]]: {mergeIntervals([[1,3],[1,5],[6,7]])}</p>
      <p>mergeIntervals: Input: [[1,2],[2,3]]: {mergeIntervals([[1,2],[2,3]])}</p>
      <p>eraseOverlapIntervals: Input: [[1,2],[2,4],[1,4]]: {eraseOverlapIntervals([[1,2],[2,4],[1,4]])}</p>
      <p>eraseOverlapIntervals: Input: [[1,2],[2,4]]: {eraseOverlapIntervals([[1,2],[2,4]])}</p>
      <p>canAttendMeetings: Input: [[0,30],[5, 10], [15, 20]]: {String(canAttendMeetings([[0,30],[5, 10], [15, 20]]))}</p>
      <p>canAttendMeetings: Input: [[5, 8],[9,15]]: {String(canAttendMeetings([[5, 8],[9,15]]))}</p>
      <p>minMeetingRooms: Input: [[0,40],[5, 10], [15, 20]]: {minMeetingRooms([[0,40],[5, 10], [15, 20]])}</p>
      <p>minMeetingRooms: Input: [[4, 9]]: {minMeetingRooms([[4, 9]])}</p>
      <p>uniquePaths: Input: 3, 6: {uniquePaths(3, 6)}</p>
      <p>uniquePaths: Input: 3, 3: {uniquePaths(3, 3)}</p>
      <p>longestCommonSubsequence: Input: "cat", "crabt": {longestCommonSubsequence("cat", "crabt")}</p>
      <p>longestCommonSubsequence: Input: "abcd", "abcd": {longestCommonSubsequence("abcd", "abcd")}</p>
      <p>longestCommonSubsequence: Input: "abcd", "efgh": {longestCommonSubsequence("abcd", "efgh")}</p>
    </div>
  );
}

export default App;
