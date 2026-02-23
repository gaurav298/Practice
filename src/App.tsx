import './App.css';
import { hasDuplicate } from './Javascript/Arrays-Hashing/containsDuplicate';
import { groupAnagrams } from './Javascript/Arrays-Hashing/groupAnagrams';
import { twoSum } from './Javascript/Arrays-Hashing/twoSum';
import { isAnagram } from './Javascript/Arrays-Hashing/validAnagram';

function App() {
  return (
    <div className="App">
      <p>ContainsDuplicate: Input: 1, 2, 3, 3: {String(hasDuplicate([1, 2, 3, 3]))}</p>
      <p>ContainsDuplicate: Input: 1, 2, 3, 4: {String(hasDuplicate([1, 2, 3, 4]))}</p>
      <p>ValidAnagram: Input: `racecar`, `carrace``: {String(isAnagram(`racecar`, `carrace`))}</p>
      <p>ValidAnagram: Input: `abc`, `def`: {String(isAnagram(`abc`, `def`))}</p>
      <p>TwoSum: Input: [3, 4, 5, 6], 7: {String(twoSum([3, 4, 5, 6], 7))}</p>
      <p>TwoSum: Input: [4, 5, 6], 10: {String(twoSum([4, 5, 6], 10))}</p>
      <p>GroupAnagrams: Input: ['act', 'pots', 'tops', 'cat', 'stop', 'hat']: {String(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']))}</p>
      <p>GroupAnagrams: Input: ['x']: {groupAnagrams(['x'])}</p>
    </div>
  );
}

export default App;
