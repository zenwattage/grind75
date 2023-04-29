# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

from ast import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # return self.naive(nums)
        return self.optimal(nums)
    
    def naive(self, nums: List[int]) -> int:
        # Time: O(n^2)
        # Space: O(1)
        for num in nums:
            count = 0
            for n in nums:
                if n == num:
                    count += 1
            if count > len(nums) // 2:
                return num
            
    def optimal(self, nums: List[int]) -> int:
        # Time: O(n)
        # Space: O(1)
        count = 0
        candidate = None
        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)
        return candidate
    

if __name__ == "__main__":
    print(Solution().majorityElement([3,2,3]))
    print(Solution().majorityElement([2,2,1,1,1,2,2]))

    