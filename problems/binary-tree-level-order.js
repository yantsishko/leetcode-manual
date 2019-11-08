/**
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * return its level order traversal as:
 * [
 *  [3],
 *  [9,20],
 *  [15,7]
 * ]
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];
  if (root === null) return [];

  let queue = [root];

  while (queue.length > 0) {
    const size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let element = queue.shift();
      level.push(element.val);

      if (element.left !== null) {
        queue.push(element.left);
      }

      if (element.right !== null) {
        queue.push(element.right);
      }
    }

    result.push(level);
  }

  return result;
};
