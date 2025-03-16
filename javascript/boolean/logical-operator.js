/**
 * && AND
 * || OR
 * ! NOT
 * !! NOT NOT
 */

/**
 * AND
 * A                  B                 A && B
 * TRUE               TRUE                TRUE
 * TRUE               FALSE               FALSE
 * FALSE              TRUE                FALSE
 * FALSE              FALSE               FALSE
 */

/**
 * OR
 * A                  B                 A || B
 * TRUE               TRUE                TRUE
 * TRUE               FALSE               TRUE
 * FALSE              TRUE                TRUE
 * FALSE              FALSE               FALSE
 */

/**
 * NOT
 * A                  !A                 !!A
 * TRUE               FALSE               TRUE
 * FALSE              TRUE                FALSE
 */