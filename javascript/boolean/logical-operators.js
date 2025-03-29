/**
 * Logical Operators
 * - &&: AND
 * - ||: OR
 * - !: NOT
 * - !!: NOT NOT
 */

/**
 * AND table
 *  A                  B                 A && B
 * TRUE               TRUE                TRUE
 * TRUE               FALSE               FALSE
 * FALSE              TRUE                FALSE
 * FALSE              FALSE               FALSE
 */

/**
 * OR table
 *  A                  B                 A || B
 * TRUE               TRUE                TRUE
 * TRUE               FALSE               TRUE
 * FALSE              TRUE                TRUE
 * FALSE              FALSE               FALSE
 */

/**
 * NOT table
 *  A                  !A                 !!A
 * TRUE               FALSE               TRUE
 * FALSE              TRUE                FALSE
 */