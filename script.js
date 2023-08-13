function threeSum(nums, target) {
  const n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = 0;
    let diff = Number.MAX_VALUE;

    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - sum) < diff) {
                ans = sum;
                diff = Math.abs(target - sum);
            }

            if (sum === target) {
                return target;
            } else if (sum > target) {
                k--;
            } else {
                j++;
            }
        }
    }
    return ans;
}







  
}

